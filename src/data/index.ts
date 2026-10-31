import { BookPart, ChapterData } from "./types";
import { ACT_1_SCENES } from "./act1Scenes";
import { ACT_2_SCENES } from "./act2Scenes";
import { ACT_3_SCENES } from "./act3Scenes";
import { ACT_4_SCENES } from "./act4Scenes";
import { ACT_5_SCENES } from "./act5Scenes";
export * from "./types";
export * from "./metadata";

export const BOOK_PARTS: BookPart[] = [
  {
    id: "act-1",
    partNumber: 1,
    romanNumeral: "I",
    title: "Act I: Prophecy on the Heath, 'Vaulting Ambition' & The Regicidal Pact",
    subtitle:
      "Scenes 1–7 • The Weird Sisters, Cawdor's Title, Inverness & Lady Macbeth's Persuasion",
    epigraph:
      "Fair is foul, and foul is fair: / Hover through the fog and filthy air.",
    overview:
      "Opening amidst thunder and lightning on a Scottish heath, Act I traces Macbeth's rapid moral destabilization from Scotland's supreme warrior-savior ('Bellona's bridegroom', 1.2) to regicidal conspirator. Intercepted by the Weird Sisters with the triple prophecy of Glamis, Cawdor, and 'king hereafter' (1.3), blocked when King Duncan names Malcolm Prince of Cumberland (1.4), and goaded at Inverness by Lady Macbeth—who begs spirits to 'unsex me here' (1.5) and shames his manhood after Macbeth's own conscience rejects murder (1.7)—Macbeth resolves that 'False face must hide what the false heart doth know.'",
    narrativeArc:
      "Heroic Valor (1.2) ➔ Supernatural Solicitation (1.3) ➔ 'Stars, Hide Your Fires' (1.4) ➔ 'Unsex Me Here' (1.5) ➔ Ethical Defeat of Ambition Overridden by Masculine Shaming (1.7)",
    dominantThemes: ["ambition", "fate", "manhood", "appearance", "supernatural"],
    chapters: ACT_1_SCENES,
  },
  {
    id: "act-2",
    partNumber: 2,
    romanNumeral: "II",
    title: "Act II: The Air-Drawn Dagger, Regicide of Duncan & Cosmic Convulsion",
    subtitle:
      "Scenes 1–4 • Inverness Courtyard, 'Macbeth Does Murder Sleep', The Porter of Hell-Gate & Scone",
    epigraph:
      "Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine.",
    overview:
      "Set during and immediately after the starless night of King Duncan's assassination at Inverness, Act II contrasts Banquo's prayerful restraint against 'cursed thoughts' with Macbeth following a hallucinated, blood-stained floating dagger into Duncan's chamber (2.1). Emerging with blood-soaked hands, unable to say 'Amen' and terrified that he has 'murdered sleep' while Lady Macbeth naively claims 'A little water clears us of this deed' (2.2), Macbeth slaughters the framed chamberlains after the drunken Porter of Hell-Gate admits Macduff (2.3)—triggering Malcolm and Donalbain's flight and macrocosmic chaos (darkness at noon, cannibalistic horses) as Macbeth is crowned at Scone (2.4).",
    narrativeArc:
      "The Floating Dagger (2.1) ➔ Offstage Regicide & Bloodstained Hands (2.2) ➔ Porter of Hell-Gate & Discovery of the Body (2.3) ➔ Unnatural Portents & Coronation at Scone (2.4)",
    dominantThemes: ["guilt", "nature", "violence", "appearance", "supernatural"],
    chapters: ACT_2_SCENES,
  },
  {
    id: "act-3",
    partNumber: 3,
    romanNumeral: "III",
    title: "Act III: 'Full of Scorpions Is My Mind', Fleance's Escape & Banquo's Ghost",
    subtitle:
      "Scenes 1–6 • The Fruitless Crown, Ambush in the Dark, The Ruined Banquet, Hecate & Resistance",
    epigraph:
      "I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er.",
    overview:
      "Reaching the royal throne only to find that 'To be thus is nothing, / But to be safely thus,' Macbeth rages that he damned his soul for a 'fruitless crown' and hires murderers to assassinate Banquo and young Fleance (3.1). Estranging himself from an unhappy Lady Macbeth ('Be innocent of the knowledge, dearest chuck', 3.2), Macbeth suffers the play's exact Aristotelian reversal (*peripeteia*) when Fleance escapes the ambush in the dark (3.3). Terrorized at his state banquet by the silent, gory Ghost of Banquo sitting in his royal chair (3.4), Macbeth resolves to wade deeper into blood and consult the Weird Sisters, while Hecate plots his overconfidence (3.5) and Macduff rides to England to rally King Edward and Malcolm (3.6).",
    narrativeArc:
      "'Fruitless Crown' Paranoia (3.1–3.2) ➔ Peripeteia: Fleance Escapes (3.3) ➔ Banquo's Ghost Shatters the Banquet (3.4) ➔ Hecate's Hubris Trap & Anglo-Scottish Resistance (3.5–3.6)",
    dominantThemes: ["guilt", "violence", "fate", "ambition", "appearance"],
    chapters: ACT_3_SCENES,
  },
  {
    id: "act-4",
    partNumber: 4,
    romanNumeral: "IV",
    title: "Act IV: The Cauldron Apparitions, Slaughter at Fife & 'Feel It as a Man'",
    subtitle:
      "Scenes 1–3 • Three Equivocal Apparitions, The Stuart Mirror, Lady Macduff's Wren & The English Court",
    epigraph:
      "Dispute it like a man. / I shall do so; / But I must also feel it as a man.",
    overview:
      "Descending into the Witches' cavern ('Something wicked this way comes'), Macbeth is lulled into tyrannical invincibility by three equivocal Apparitions—the Armed Head ('Beware Macduff'), the Bloody Child ('none of woman born'), and the Crowned Child with a Tree ('until Great Birnam Wood... come against him')—before being enraged by the mirror-procession of Eight Stuart Kings descended from Banquo (4.1). Vowing to act on every impulse without conscience, Macbeth orders the onstage slaughter of innocent Lady Macduff and her wise young son at Fife (4.2), while in England Malcolm tests Macduff's loyalty, contrasts Macbeth's tyranny with King Edward's healing touch, and watches Macduff redefine true manhood through grief and righteous vengeance (4.3).",
    narrativeArc:
      "The Four Cauldron Visions (4.1) ➔ Massacre of the Innocent at Fife (4.2) ➔ Malcolm's Loyalty Test, Edward's Healing Touch & Macduff's Holistic Manhood (4.3)",
    dominantThemes: ["supernatural", "fate", "violence", "manhood", "nature"],
    chapters: ACT_4_SCENES,
  },
  {
    id: "act-5",
    partNumber: 5,
    romanNumeral: "V",
    title: "Act V: 'Out, Damned Spot!', 'Tomorrow, and Tomorrow' & 'Untimely Ripped'",
    subtitle:
      "Scenes 1–11 (Folio 5.1–5.8) • Somnambulism, The Moving Wood, Nihilism, The Final Duel & Restoration",
    epigraph:
      "Life's but a walking shadow, a poor player, / That struts and frets his hour upon the stage, / And then is heard no more.",
    overview:
      "Cross-cutting rapidly between besieged Dunsinane and the advancing Anglo-Scottish liberation army, Act V opens with Lady Macbeth's sleepwalking breakdown in prose ('Out, damned spot!', 5.1) while Scottish thanes march to join Malcolm ('the med'cine of the sickly weal') at Birnam Wood (5.2). Oscillating between prophetic hubris and autumnal despair ('the sere, the yellow leaf', 5.3), Macbeth's world collapses when Malcolm orders every soldier to carry a bough from Birnam Wood (5.4, 5.6) and Lady Macbeth dies by suicide, prompting Macbeth's nihilistic 'Tomorrow, and tomorrow, and tomorrow' soliloquy (5.5). After slaying Young Siward (5.7) while his own garrison surrenders Dunsinane (5.8–5.9), Macbeth learns in single combat that Macduff was 'from his mother's womb / Untimely ripped', fights to the death ('Lay on, Macduff!', 5.10), and is beheaded as Malcolm is hailed King of Scotland (5.11).",
    narrativeArc:
      "Lady Macbeth's Sleepwalking (5.1) ➔ Birnam Wood Camouflage (5.2–5.4) ➔ 'Tomorrow, and Tomorrow' (5.5) ➔ Battle of Dunsinane & 'Untimely Ripped' Duel (5.6–5.10) ➔ Restoration at Scone (5.11)",
    dominantThemes: ["guilt", "fate", "nature", "manhood", "appearance"],
    chapters: ACT_5_SCENES,
  },
];

export const ALL_CHAPTERS: ChapterData[] = BOOK_PARTS.flatMap(
  (part) => part.chapters
);

export const TOTAL_CHAPTERS_COUNT = ALL_CHAPTERS.length; // 31 Scenes (Act 1: 7, Act 2: 4, Act 3: 6, Act 4: 3, Act 5: 11)

export const TOTAL_SUBSECTIONS_COUNT = ALL_CHAPTERS.reduce(
  (sum, ch) => sum + ch.subSections.length,
  0
);

export const TOTAL_QUOTES_COUNT = ALL_CHAPTERS.reduce(
  (sum, ch) => sum + ch.quotes.length,
  0
);

export const TOTAL_READING_MINUTES = ALL_CHAPTERS.reduce(
  (sum, ch) => sum + ch.readingTimeMinutes,
  0
);
