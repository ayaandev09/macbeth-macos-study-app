import { ChapterData, ALL_CHAPTERS, BOOK_PARTS, THEMES_TAXONOMY, QuoteItem } from "@/data";

export interface SearchResultItem {
  id: string;
  displayCode: string;
  actTitle: string;
  title: string;
  subtitle: string;
  matchCategory: "Code" | "Quote" | "Soliloquy" | "Theme" | "Speaker" | "General";
  matchedSpeaker?: string;
  quoteSnippet?: string;
  actSceneLine?: string;
  snippet: string;
  matchedThemes?: string[];
  score: number;
}

export type SearchFilterTab = "all" | "quotes" | "soliloquies" | "themes" | "characters";

/**
 * Normalizes input text for fuzzy token matching
 */
function normalizeText(text: string): string {
  return text.toLowerCase().replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * High-Precision Multi-Field Search Engine for Shakespeare's Macbeth
 */
export function searchMacbethCodex(
  query: string,
  filterTab: SearchFilterTab = "all"
): SearchResultItem[] {
  const rawQ = query.trim();
  if (!rawQ) return [];

  const q = normalizeText(rawQ);
  const tokens = q.split(" ").filter((t) => t.length > 0);

  // Pattern detection: Act & Scene notation (e.g. "1.2", "1 2", "a1s2", "act 2 scene 1", "ii.1")
  const actSceneMatch = rawQ.match(/(?:act\s*)?([1-5]|i|ii|iii|iv|v)(?:[\s.:,scene]+)([1-8])/i);
  let targetAct: number | null = null;
  let targetScene: number | null = null;

  if (actSceneMatch) {
    const actStr = actSceneMatch[1].toLowerCase();
    const romanMap: Record<string, number> = { i: 1, ii: 2, iii: 3, iv: 4, v: 5 };
    targetAct = romanMap[actStr] || parseInt(actStr, 10);
    targetScene = parseInt(actSceneMatch[2], 10);
  }

  const results: SearchResultItem[] = [];

  for (const chapter of ALL_CHAPTERS) {
    let score = 0;
    let matchCategory: SearchResultItem["matchCategory"] = "General";
    let matchedSpeaker: string | undefined;
    let quoteSnippet: string | undefined;
    let actSceneLine: string | undefined;
    const matchedThemes: string[] = [];

    const actPart = BOOK_PARTS.find((p) => p.id === chapter.partId);
    const actTitle = actPart ? `Act ${actPart.romanNumeral}` : `Act ${chapter.partNumber}`;

    // 1. Direct Act & Scene Pattern Match (1000 pts)
    if (targetAct !== null && targetScene !== null) {
      if (chapter.partNumber === targetAct && chapter.chapterNumber === targetScene) {
        score += 1500;
        matchCategory = "Code";
      }
    }

    // 2. Display Code Match (e.g. "I.1", "1.1", "II.2")
    const normCode = normalizeText(chapter.displayCode);
    if (normCode === q || chapter.displayCode.toLowerCase() === rawQ.toLowerCase()) {
      score += 1200;
      matchCategory = "Code";
    }

    // 3. Title & Subtitle Matching
    const normTitle = normalizeText(chapter.title);
    const normSub = normalizeText(chapter.subtitle || "");

    if (normTitle.includes(q)) {
      score += 500;
      if (matchCategory === "General") matchCategory = "Code";
    }
    if (normSub.includes(q)) {
      score += 300;
    }

    // 4. Famous Quotes & Soliloquy Matching
    if (chapter.quotes && chapter.quotes.length > 0) {
      for (const qt of chapter.quotes) {
        const normQuote = normalizeText(qt.quote);
        const normSpk = normalizeText(qt.speaker);
        const normAnalysis = normalizeText(qt.analysis || "");

        // Exact phrase in quote
        if (normQuote.includes(q)) {
          score += 650;
          matchCategory = "Quote";
          quoteSnippet = qt.quote;
          matchedSpeaker = qt.speaker;
          actSceneLine = qt.actSceneLine;
          break;
        }

        // Speaker match (e.g. "Lady Macbeth", "Banquo", "Witches", "Macduff")
        if (normSpk.includes(q) || tokens.every((tok) => normSpk.includes(tok))) {
          score += 350;
          matchedSpeaker = qt.speaker;
          if (matchCategory === "General") matchCategory = "Speaker";
        }

        // Literary technique match (e.g. "Chiasmus", "Hemistichomythia", "Soliloquy")
        if (qt.literaryTechniques?.some((tech) => normalizeText(tech).includes(q))) {
          score += 280;
          if (matchCategory === "General") matchCategory = "Soliloquy";
        }

        // Quote analysis match
        if (normAnalysis.includes(q)) {
          score += 200;
          if (!quoteSnippet) quoteSnippet = qt.quote;
        }
      }
    }

    // 5. Theme Matching
    if (chapter.themeTracking && chapter.themeTracking.length > 0) {
      for (const tt of chapter.themeTracking) {
        const themeDef = THEMES_TAXONOMY[tt.themeId];
        if (themeDef) {
          const normThemeName = normalizeText(themeDef.name);
          const normThemeTag = normalizeText(themeDef.shakespeareanTag);
          if (normThemeName.includes(q) || normThemeTag.includes(q) || q.includes(tt.themeId)) {
            score += 380;
            matchedThemes.push(themeDef.name);
            if (matchCategory === "General") matchCategory = "Theme";
          }
        }
      }
    }

    // 6. Subsections, Soliloquy Markers & Scene Beats
    if (chapter.subSections && chapter.subSections.length > 0) {
      for (const sub of chapter.subSections) {
        const normSubTitle = normalizeText(sub.title);
        const normContent = normalizeText(sub.content);
        const normTakeaway = normalizeText(sub.analyticalTakeaway);

        if (normSubTitle.includes(q)) {
          score += 250;
          if (sub.title.toLowerCase().includes("soliloquy") || sub.sceneMarker.toLowerCase().includes("soliloquy")) {
            matchCategory = "Soliloquy";
          }
        }
        if (normContent.includes(q)) {
          score += 150;
        }
        if (normTakeaway.includes(q)) {
          score += 180;
        }

        // Close reading devices & meter
        if (sub.closeReading?.prosodyAndMeter && normalizeText(sub.closeReading.prosodyAndMeter).includes(q)) {
          score += 200;
        }
        if (sub.closeReading?.literaryDevices?.some((d) => normalizeText(d).includes(q))) {
          score += 200;
        }
      }
    }

    // 7. General Summary & Speed-Read Bullets
    const normSummary = normalizeText(chapter.summary || "");
    if (normSummary.includes(q)) {
      score += 120;
    }

    // Tokenized loose matching bonus if all tokens appear in chapter text
    const fullChapterBlob = `${normTitle} ${normSub} ${normSummary} ${chapter.quotes?.map((q) => q.quote).join(" ") || ""}`;
    const tokenHits = tokens.filter((tok) => fullChapterBlob.includes(tok)).length;
    if (tokenHits === tokens.length && tokens.length > 1) {
      score += 180;
    }

    // Filter tab constraints
    if (filterTab === "quotes" && matchCategory !== "Quote" && !quoteSnippet) {
      continue;
    }
    if (filterTab === "soliloquies" && matchCategory !== "Soliloquy" && !chapter.title.toLowerCase().includes("soliloquy")) {
      continue;
    }
    if (filterTab === "themes" && matchedThemes.length === 0 && matchCategory !== "Theme") {
      continue;
    }
    if (filterTab === "characters" && !matchedSpeaker && matchCategory !== "Speaker") {
      continue;
    }

    if (score > 0) {
      // Build high-yield contextual snippet
      let snippet = quoteSnippet
        ? `"${quoteSnippet}"`
        : chapter.speedReadBullets?.[0] || chapter.summary.slice(0, 140) + "...";

      results.push({
        id: chapter.id,
        displayCode: chapter.displayCode,
        actTitle,
        title: chapter.title.replace(/^Act \d+, Scene \d+:\s*/, ""),
        subtitle: chapter.subtitle,
        matchCategory,
        matchedSpeaker,
        quoteSnippet,
        actSceneLine,
        snippet,
        matchedThemes: matchedThemes.length > 0 ? Array.from(new Set(matchedThemes)) : undefined,
        score,
      });
    }
  }

  // Sort by highest relevance score descending
  results.sort((a, b) => b.score - a.score);

  return results;
}
