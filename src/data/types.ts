export type ThemeId =
  | "ambition"
  | "fate"
  | "guilt"
  | "manhood"
  | "nature"
  | "appearance"
  | "violence"
  | "supernatural";

export type ActId = "act-1" | "act-2" | "act-3" | "act-4" | "act-5";

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  shortName: string;
  shakespeareanTag: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  glowColor: string;
  description: string;
  coreMechanism: string;
}

export interface BeatCloseReading {
  literaryDevices: string[];
  prosodyAndMeter?: string;
  dramaticTension: string;
  thematicResonance: string;
}

export type StudyLensMode = "primer" | "revision" | "deep";

export interface ScenePrimer {
  whoIsInTheScene: string[];
  storySoFar: string;
  plainEnglishSummary: string[];
  glossary: { term: string; modernMeaning: string }[];
}

export interface PreLessonBriefing {
  thirtySecondRecap: string;
  mustKnowQuote: {
    quote: string;
    speaker: string;
    line: string;
    whyItMatters: string;
  };
  teacherPopQuiz: {
    question: string;
    answer: string;
  };
  keyStagecraftVector: string;
}

export interface FlashcardItem {
  id: string;
  category: "Quote" | "Plot & Context" | "Theme & Device" | "Character Arc";
  actSceneRef: string;
  question: string;
  answer: string;
  keyQuote?: string;
  examTip: string;
  themeId?: ThemeId;
}

export interface ExamPromptItem {
  id: string;
  title: string;
  examBoards: string;
  prompt: string;
  thesisFormula: string;
  jacobeanContext: string;
  paragraphs: {
    topicSentence: string;
    sceneReference: string;
    keyQuotes: { quote: string; line: string; analysisSnippet: string }[];
    criticalArgument: string;
  }[];
}

export interface ChapterSubSection {
  id: string;
  title: string;
  sceneMarker: string;
  content: string;
  analyticalTakeaway: string;
  closeReading?: BeatCloseReading;
}

export interface QuoteThemeConnection {
  themeId: ThemeId;
  explanation: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  speaker: string;
  actSceneLine?: string; // e.g. "1.1.10–11"
  context: string;
  analysis: string;
  literaryTechniques?: string[];
  themes: ThemeId[];
  themeConnections?: QuoteThemeConnection[];
}

export interface ThemeTrackItem {
  themeId: ThemeId;
  intensity: 1 | 2 | 3 | 4 | 5;
  manifestation: string;
}

export interface ChapterAnalysis {
  thesis: string;
  googleDocSynthesis: string;
  sparkNotesSynthesis: string;
  litChartsSynthesis: string;
  rscStagecraftContext: string;
  psychologicalArc: string;
  motifsAndSymbols: string[];
}

export interface ChapterData {
  id: string;
  partId: ActId;
  partNumber: 1 | 2 | 3 | 4 | 5;
  chapterNumber: number;
  displayCode: string; // e.g., "I.1", "II.2", "III.4", "V.10"
  folioCrossRef?: string; // e.g., "Folio 5.8a / Doc 5.10"
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  setting: string;
  omenLevel:
    | "VALOR & OMEN"
    | "TEMPTATION"
    | "REGICIDE"
    | "TYRANNY & PARANOIA"
    | "ABYSSAL DOOM";
  cosmicWeatherStatus: string;
  summary: string;
  speedReadBullets: string[];
  subSections: ChapterSubSection[];
  analysis: ChapterAnalysis;
  quotes: QuoteItem[];
  themeTracking: ThemeTrackItem[];
  examPromptTakeaway: string;
  primer?: ScenePrimer;
  briefing?: PreLessonBriefing;
}

export interface BookPart {
  id: ActId;
  partNumber: 1 | 2 | 3 | 4 | 5;
  romanNumeral: "I" | "II" | "III" | "IV" | "V";
  title: string;
  subtitle: string;
  epigraph: string;
  overview: string;
  narrativeArc: string;
  dominantThemes: ThemeId[];
  chapters: ChapterData[];
}

export interface SymbolItem {
  id: string;
  name: string;
  category: "Apparition" | "Element" | "State" | "Prophecy" | "Nature";
  firstAppearance: string;
  meaning: string;
  evolution: string;
}

export interface CharacterArcMilestone {
  act: "Act I" | "Act II" | "Act III" | "Act IV" | "Act V";
  title: string;
  stage: string;
  quoteRef: string;
  analysis: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  factionStatus:
    | "House of Macbeth"
    | "House of Duncan"
    | "Scottish Thanes"
    | "The Weird Sisters"
    | "English Alliance";
  fate: string;
  psychologicalProfile: string;
  symbolicFunction: string;
  tragicFlaw?: string;
  foilComparisons?: { foilName: string; distinction: string }[];
  holinshedDivergence?: string;
  arcMilestones?: CharacterArcMilestone[];
}

export interface RhetoricTerm {
  term: string;
  category:
    | "Dramatic Structure"
    | "Prosody & Meter"
    | "Jacobean Cosmology"
    | "Rhetorical Device";
  literalMeaning: string;
  thematicFunction: string;
}
