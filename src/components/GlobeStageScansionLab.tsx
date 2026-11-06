"use client";

import React, { useState } from "react";
import {
  Crown,
  Drama,
  Activity,
  Flame,
  Sparkles,
  RotateCcw,
  BookOpen,
  Volume2,
  Sliders,
  Maximize2,
  Users,
  Compass,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface StagingScene {
  id: string;
  actScene: string;
  title: string;
  setting: string;
  thematicConflict: string;
  characters: {
    name: string;
    role: string;
    zone: "upstage" | "center" | "downstage" | "heavens" | "trapdoor" | "left" | "right";
    positionText: string;
    blockingRationale: string;
    quote: string;
  }[];
  directorInsight: string;
}

const STAGING_SCENES: StagingScene[] = [
  {
    id: "dagger",
    actScene: "Act 2, Scene 1",
    title: "The Dagger of the Mind",
    setting: "Courtyard of Inverness Castle • Midnight",
    thematicConflict: "Free Will vs. Supernatural Hallucination",
    characters: [
      {
        name: "Macbeth",
        role: "The Solitary Usurper",
        zone: "downstage",
        positionText: "Center Downstage (Apron) • Isolated from all human contact",
        blockingRationale:
          "Positioned right at the front edge of the thrust stage, intimate with the groundlings. His whispered soliloquy breaks the fourth wall, making the audience complicit in his impending regicide.",
        quote: "Is this a dagger which I see before me, The handle toward my hand?",
      },
      {
        name: "The Spectral Dagger",
        role: "Psychological Projection",
        zone: "center",
        positionText: "Midstage Air • Pointing Upstage toward Duncan's chamber",
        blockingRationale:
          "A phantom vector: pulls Macbeth physically and morally away from the audience toward the dark upstage inner discovery chamber where the King sleeps.",
        quote: "Thou marshall'st me the way that I was going, And such an instrument I was to use.",
      },
      {
        name: "Duncan's Bedchamber Door",
        role: "The Sacred Sanctuary",
        zone: "upstage",
        positionText: "Upstage Center • Under the gallery canopy",
        blockingRationale:
          "The inner stage represents divine order and sacred hospitality. Transgressing this threshold violates the Great Chain of Being.",
        quote: "Hear it not, Duncan, for it is a knell That summons thee to heaven or to hell.",
      },
    ],
    directorInsight:
      "In Jacobean theatre, the apron thrust stage allowed intense psychological intimacy. Macbeth's downstage isolation forces the audience to look through his unhinged eyes into empty air.",
  },
  {
    id: "banquet",
    actScene: "Act 3, Scene 4",
    title: "The Royal Banquet & Banquo's Ghost",
    setting: "Great Hall at Forres • Feasting Dais",
    thematicConflict: "Royal Legitimacy vs. Retributive Madness",
    characters: [
      {
        name: "Macbeth",
        role: "The Terrified King",
        zone: "center",
        positionText: "Midstage • Paralyzed before the empty throne",
        blockingRationale:
          "Refuses to sit; his inability to occupy the royal seat physically externalizes his failure to establish a peaceful royal line.",
        quote: "Thou canst not say I did it: never shake Thy gory locks at me.",
      },
      {
        name: "Banquo's Ghost",
        role: "Vengeful Specter",
        zone: "trapdoor",
        positionText: "Rises through Trapdoor ('Hell') into Macbeth's Chair",
        blockingRationale:
          "In the Globe Theatre, ghosts ascended from the sub-stage cellarage ('Hell'). Banquo occupies the stool promised to his descendants, fulfilling the Weird Sisters' prophecy.",
        quote: "Thy bones are marrowless, thy blood is cold; Thou hast no speculation in those eyes.",
      },
      {
        name: "Lady Macbeth",
        role: "Frantic Stage Manager",
        zone: "downstage",
        positionText: "Downstage Right • Whispering sharply to the Lords",
        blockingRationale:
          "Stands between Macbeth and the Scottish Thanes, desperately attempting to impose social decorum over supernatural collapse.",
        quote: "Are you a man? ... This is the very painting of your fear.",
      },
      {
        name: "Scottish Lords (Ross & Lennox)",
        role: "The Suspicious Court",
        zone: "left",
        positionText: "Stage Left Table • Slowly rising in horror",
        blockingRationale:
          "Their progressive physical withdrawal from the banquet table visualizes the fracturing of political allegiance across Scotland.",
        quote: "Gentlemen, rise: his Highness is not well.",
      },
    ],
    directorInsight:
      "The banquet is a ritual of feudal unity. Macbeth's breakdown shatters the social fabric: when the feast breaks up in disorder ('Stand not upon the order of your going'), Scottish civil order is officially dead.",
  },
  {
    id: "cauldron",
    actScene: "Act 4, Scene 1",
    title: "The Pit of Acheron & Three Apparitions",
    setting: "A Dark Cave • Burning Cauldron",
    thematicConflict: "Demonic Equivocation vs. Mortal Hubris",
    characters: [
      {
        name: "Three Weird Sisters",
        role: "Demonic Agents",
        zone: "trapdoor",
        positionText: "Encircling the Center Trapdoor ('Hell')",
        blockingRationale:
          "Dancing in a counter-clockwise circle around the cauldron, inverting sacred liturgical ritual. Their circular movement symbolizes entrapment.",
        quote: "Double, double toil and trouble; Fire burn, and cauldron bubble.",
      },
      {
        name: "Macbeth",
        role: "The Desperate Suppliant",
        zone: "downstage",
        positionText: "Downstage Left • Demanding prophetic certainty",
        blockingRationale:
          "Now actively seeking the witches rather than being sought; his posture has shifted from noble warrior to addicted dependent.",
        quote: "I conjure you, by that which you profess, Howe'er you come to know it, answer me.",
      },
      {
        name: "The Three Apparitions",
        role: "Equivocal Omens",
        zone: "heavens",
        positionText: "Upper Balcony / Heavens Trap • Descending amid thunder",
        blockingRationale:
          "Appearing from above in supernatural hierarchy, visually dwarfing Macbeth below to emphasize his mortal limitation.",
        quote: "Laugh to scorn The power of man, for none of woman born Shall harm Macbeth.",
      },
    ],
    directorInsight:
      "Vertical staging at the Globe was theological: Apparitions above ('The Heavens'), Cauldron below ('Hell'), and Macbeth trapped on the earthly mortal platform between them.",
  },
];

interface ScansionItem {
  id: string;
  speaker: string;
  actScene: string;
  line: string;
  meterType: string;
  meterDescription: string;
  feet: {
    syllables: { text: string; stress: "stressed" | "unstressed" }[];
    footType: "iamb" | "trochee" | "spondee" | "pyrrhic" | "amphibrach";
  }[];
  literarySignificance: string;
}

const SCANSION_ITEMS: ScansionItem[] = [
  {
    id: "dagger-line",
    speaker: "Macbeth",
    actScene: "Act 2, Scene 1",
    line: "Is this a dagger which I see before me",
    meterType: "Iambic Pentameter with Feminine Ending (11 Syllables)",
    meterDescription: "5 Iambic feet followed by a weak, unaccented hypermetrical syllable.",
    feet: [
      { syllables: [{ text: "Is", stress: "unstressed" }, { text: "this", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "a", stress: "unstressed" }, { text: "dag-", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "ger", stress: "unstressed" }, { text: "which", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "I", stress: "unstressed" }, { text: "see", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "be-", stress: "unstressed" }, { text: "fore", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "me", stress: "unstressed" }], footType: "amphibrach" },
    ],
    literarySignificance:
      "The extra 11th unstressed syllable ('-me') is a classic feminine ending. In Renaissance drama, a feminine ending creates a lingering, unresolved rhythm—mirroring Macbeth's intellectual hesitation and trembling hand before regicide.",
  },
  {
    id: "tomorrow-line",
    speaker: "Macbeth",
    actScene: "Act 5, Scene 5",
    line: "To-morrow, and to-morrow, and to-morrow",
    meterType: "Iambic Pentameter with Double Feminine Rhythm",
    meterDescription: "Hypnotic, repetitive iambic pulse evoking the sluggish, relentless passage of empty time.",
    feet: [
      { syllables: [{ text: "To-", stress: "unstressed" }, { text: "mor-", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "row,", stress: "unstressed" }, { text: "and", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "to-", stress: "unstressed" }, { text: "mor-", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "row,", stress: "unstressed" }, { text: "and", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "to-", stress: "unstressed" }, { text: "mor-", stress: "stressed" }], footType: "iamb" },
      { syllables: [{ text: "row", stress: "unstressed" }], footType: "amphibrach" },
    ],
    literarySignificance:
      "The repetitive polysyllabic phrasing mirrors the monotonous rhythm of human mortality. After hearing of Lady Macbeth's death, Macbeth's language achieves total nihilistic clarity: life is a meaningless metronomic ticking toward dust.",
  },
  {
    id: "witches-chant",
    speaker: "Weird Sisters",
    actScene: "Act 4, Scene 1",
    line: "Double, double toil and trouble; Fire burn and cauldron bubble",
    meterType: "Catalectic Trochaic Tetrameter (Inverted Demonic Meter)",
    meterDescription: "4 Trochaic feet (STRESSED-unstressed) with truncated final syllable.",
    feet: [
      { syllables: [{ text: "Dou-", stress: "stressed" }, { text: "ble,", stress: "unstressed" }], footType: "trochee" },
      { syllables: [{ text: "dou-", stress: "stressed" }, { text: "ble", stress: "unstressed" }], footType: "trochee" },
      { syllables: [{ text: "toil", stress: "stressed" }, { text: "and", stress: "unstressed" }], footType: "trochee" },
      { syllables: [{ text: "trou-", stress: "stressed" }, { text: "ble", stress: "unstressed" }], footType: "trochee" },
    ],
    literarySignificance:
      "While mortal nobles speak in iambic pentameter (unstressed-STRESSED), the Witches speak in trochees (STRESSED-unstressed). This complete metric inversion signifies that their nature is fundamentally contrary to God, nature, and human morality.",
  },
];

export const GlobeStageScansionLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"staging" | "scansion" | "tragedy">("staging");
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number>(0);
  const [selectedScansionIndex, setSelectedScansionIndex] = useState<number>(0);
  const [activeCharacterIndex, setActiveCharacterIndex] = useState<number>(0);

  const currentScene = STAGING_SCENES[selectedSceneIndex];
  const currentScansion = SCANSION_ITEMS[selectedScansionIndex];
  const activeChar = currentScene.characters[activeCharacterIndex];

  return (
    <div className="space-y-6">
      {/* Flagship Hero Header */}
      <div className="liquid-glass-bento rounded-3xl p-6 relative overflow-hidden border border-amber-400/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/15 via-rose-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Dunsinane Folio // Stage &amp; Metric Scansion Studio
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                JACOBEAN GLOBE ENGINE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Drama className="w-8 h-8 text-amber-400" />
              Globe Theatre Stage Blocking &amp; Iambic Scansion
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Experience Shakespeare&rsquo;s tragic masterpiece as living theatre: explore spatial power dynamics across the Globe&rsquo;s thrust stage, and analyze syllable-by-syllable iambic pentameter breakdowns.
            </p>
          </div>

          {/* Sub-tab Navigation */}
          <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-2xl border border-white/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("staging")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "staging"
                  ? "bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-white border border-amber-400/40 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Globe Stage Blocking
            </button>
            <button
              onClick={() => setActiveTab("scansion")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "scansion"
                  ? "bg-gradient-to-r from-rose-500/30 to-purple-500/30 text-white border border-rose-400/40 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              The Metre Meter (Scansion)
            </button>
            <button
              onClick={() => setActiveTab("tragedy")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "tragedy"
                  ? "bg-gradient-to-r from-purple-500/30 to-amber-500/30 text-white border border-purple-400/40 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Blood On The Crown Arc
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: GLOBE THEATRE 3D STAGE BLOCKING CANVAS                             */}
      {/* ========================================================================= */}
      {activeTab === "staging" && (
        <div className="space-y-6">
          {/* Scene Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              Select Dramatic Staging:
            </span>
            {STAGING_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => {
                  setSelectedSceneIndex(idx);
                  setActiveCharacterIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  selectedSceneIndex === idx
                    ? "bg-amber-500/25 border-amber-400/50 text-amber-200 shadow-md"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <span className="font-bold mr-1">{scene.actScene}:</span> {scene.title}
              </button>
            ))}
          </div>

          {/* Interactive Globe Theatre Stage Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 7 Columns: Top-Down Globe Stage Visualization */}
            <div className="lg:col-span-7 liquid-glass-bento rounded-3xl p-5 border border-amber-400/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                      The Globe Theatre (1599) • Thrust Stage Layout
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {currentScene.setting}
                  </span>
                </div>

                {/* Jacobean Stage Top-Down Architectural Diagram */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-stone-950 via-slate-950 to-neutral-950 border border-amber-500/30 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
                  {/* Subtle Woodgrain & Architectural Guides */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Zone 1: The Heavens (Canopy & Balcony Gallery) */}
                  <div className="w-full py-2.5 px-4 rounded-xl bg-amber-950/40 border border-amber-400/30 text-center relative">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-amber-300">
                      &uarr; The Heavens (Upper Gallery / Divine &amp; Supernatural Apparitions)
                    </span>
                    {currentScene.characters
                      .filter((c) => c.zone === "heavens")
                      .map((c) => (
                        <div
                          key={c.name}
                          className="mt-1 px-3 py-1 rounded-lg bg-amber-500/30 border border-amber-400/50 text-xs font-bold text-amber-100 inline-block shadow-md animate-bounce"
                        >
                          &bull; {c.name}
                        </div>
                      ))}
                  </div>

                  {/* Zone 2: Upstage (Inner Discovery Stage) */}
                  <div className="w-full flex items-center justify-between gap-3">
                    <div className="px-3 py-6 rounded-xl bg-black/40 border border-white/10 text-[10px] font-mono text-slate-400 text-center">
                      Stage Left Door<br />(Inverness)
                    </div>

                    <div className="flex-1 py-4 px-3 rounded-xl bg-stone-900/60 border border-dashed border-amber-400/30 text-center">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                        Upstage Center (Discovery Chamber / Royal Bedchamber)
                      </span>
                      {currentScene.characters
                        .filter((c) => c.zone === "upstage")
                        .map((c) => (
                          <span
                            key={c.name}
                            className="px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-600 text-xs text-slate-200 inline-block"
                          >
                            {c.name}
                          </span>
                        ))}
                    </div>

                    <div className="px-3 py-6 rounded-xl bg-black/40 border border-white/10 text-[10px] font-mono text-slate-400 text-center">
                      Stage Right Door<br />(Scotland)
                    </div>
                  </div>

                  {/* Zone 3: Center Stage & The Trapdoor ("Hell") */}
                  <div className="w-full py-5 px-4 rounded-xl bg-black/50 border border-amber-400/20 text-center relative flex items-center justify-center">
                    {/* The Center Trapdoor */}
                    <div className="w-48 py-2 rounded-lg border border-dashed border-rose-500/50 bg-rose-950/30 flex flex-col items-center">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-rose-300">
                        [ Trapdoor to Cellarage / &ldquo;Hell&rdquo; ]
                      </span>
                      {currentScene.characters
                        .filter((c) => c.zone === "trapdoor")
                        .map((c) => (
                          <span
                            key={c.name}
                            className="mt-1 px-2.5 py-0.5 rounded-full bg-rose-500/30 border border-rose-400/50 text-[11px] font-bold text-rose-200 shadow-md"
                          >
                            &bull; {c.name}
                          </span>
                        ))}
                    </div>

                    {/* Midstage characters */}
                    <div className="absolute right-6 flex flex-col gap-1">
                      {currentScene.characters
                        .filter((c) => c.zone === "center")
                        .map((c) => (
                          <span
                            key={c.name}
                            className="px-2.5 py-1 rounded-lg bg-amber-500/25 border border-amber-400/40 text-xs font-semibold text-amber-100"
                          >
                            {c.name}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Zone 4: Downstage Apron (Audience Proximity) */}
                  <div className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-950/20 via-amber-900/30 to-amber-950/20 border-t-2 border-amber-400/60 text-center">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-amber-300 block mb-1">
                      Downstage Thrust Apron (Direct Audience Contact)
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {currentScene.characters
                        .filter((c) => c.zone === "downstage")
                        .map((c) => (
                          <button
                            key={c.name}
                            onClick={() => {
                              const found = currentScene.characters.findIndex((item) => item.name === c.name);
                              if (found !== -1) setActiveCharacterIndex(found);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs shadow-lg flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-all"
                          >
                            <Crown className="w-3.5 h-3.5 text-stone-950" />
                            {c.name} (Soliloquy)
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Groundlings Pit Label */}
                  <div className="text-center text-[10px] font-mono text-slate-500 tracking-wider">
                    &darr; THE YARD / GROUNDLINGS STANDING PIT &darr;
                  </div>
                </div>
              </div>

              {/* Character Token Selector Bar */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Inspect Character Blocking on Stage:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentScene.characters.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveCharacterIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        activeCharacterIndex === idx
                          ? "bg-amber-500/30 border-amber-400/60 text-amber-200 shadow-md"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dramaturgical Spatial Analysis */}
            <div className="lg:col-span-5 liquid-glass-bento rounded-3xl p-5 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Spatial Dramaturgy Inspector
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    {activeChar?.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {activeChar?.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  {activeChar?.positionText}
                </div>

                {/* Quote Box */}
                <blockquote className="p-4 rounded-2xl bg-black/60 border border-amber-400/30 text-amber-100 font-serif italic text-sm mb-4 leading-relaxed shadow-inner">
                  &ldquo;{activeChar?.quote}&rdquo;
                </blockquote>

                {/* Spatial Analysis */}
                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div>
                    <span className="font-bold text-white block mb-0.5">
                      Why Shakespeare Placed this Token Here:
                    </span>
                    <p>{activeChar?.blockingRationale}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="font-bold text-rose-300 block mb-0.5">
                      Thematic Conflict in Space:
                    </span>
                    <p>{currentScene.thematicConflict}</p>
                  </div>
                </div>
              </div>

              {/* Director's Academic Insight */}
              <div className="mt-5 p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">
                  Globe Performance Practice:
                </span>
                {currentScene.directorInsight}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: THE METRE METER (IAMBIC PENTAMETER SCANSION STUDIO)               */}
      {/* ========================================================================= */}
      {activeTab === "scansion" && (
        <div className="space-y-6">
          {/* Soliloquy Line Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              Select Iconic Soliloquy:
            </span>
            {SCANSION_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedScansionIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  selectedScansionIndex === idx
                    ? "bg-rose-500/25 border-rose-400/50 text-rose-200 shadow-md"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <span className="font-bold">{item.speaker}</span> ({item.actScene})
              </button>
            ))}
          </div>

          {/* Interactive Metric Scansion Workbench */}
          <div className="liquid-glass-bento rounded-3xl p-6 border border-rose-500/30 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Metric Classification // {currentScansion.actScene}
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                  {currentScansion.meterType}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {currentScansion.meterDescription}
                </p>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-white/15 text-xs font-mono text-slate-300 self-start md:self-auto">
                <span className="text-rose-400 font-bold">{currentScansion.feet.length} Metrical Feet</span> | <span className="text-amber-300 font-bold">{currentScansion.feet.reduce((acc, f) => acc + f.syllables.length, 0)} Syllables</span>
              </div>
            </div>

            {/* Tactile Scansion Syllable Blocks (The Metre Meter) */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 relative overflow-x-auto no-scrollbar shadow-inner">
              <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4 min-w-[500px]">
                {currentScansion.feet.map((foot, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex flex-col items-center p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-all group"
                  >
                    {/* Syllable Stress Symbols (˘ = unstressed, ¯ = stressed) */}
                    <div className="flex items-center gap-2 mb-2 font-mono font-bold text-base">
                      {foot.syllables.map((syl, sIdx) => (
                        <span
                          key={sIdx}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            syl.stress === "stressed"
                              ? "bg-amber-500/30 border border-amber-400/60 text-amber-200 shadow-md"
                              : "bg-slate-800/60 border border-white/10 text-slate-400"
                          }`}
                          title={syl.stress === "stressed" ? "Stressed / Accented Syllable (–)" : "Unstressed / Weak Syllable (˘)"}
                        >
                          {syl.stress === "stressed" ? "—" : "∪"}
                        </span>
                      ))}
                    </div>

                    {/* Word Syllable Text */}
                    <div className="flex items-center gap-1 font-serif text-sm font-semibold text-white">
                      {foot.syllables.map((syl, sIdx) => (
                        <span
                          key={sIdx}
                          className={syl.stress === "stressed" ? "text-amber-200 underline decoration-amber-400/50" : "text-slate-300"}
                        >
                          {syl.text}
                        </span>
                      ))}
                    </div>

                    {/* Foot Type Pill */}
                    <span className="mt-2 text-[10px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded bg-black/40">
                      Foot {fIdx + 1}: {foot.footType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Essay & Critical Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-rose-300 block mb-1">
                  Why Meter Matters in AQA / Edexcel / IB Lit Essays:
                </span>
                <p>{currentScansion.literarySignificance}</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">
                  Key Metric Rules in Macbeth:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  <li><strong className="text-white">Iambic Pentameter (da-DUM &times; 5):</strong> The natural rhythm of noble English speech.</li>
                  <li><strong className="text-white">Feminine Endings (11th syllable):</strong> Express psychological doubt, guilt, and emotional tremor.</li>
                  <li><strong className="text-white">Trochaic Inversions (DUM-da):</strong> The supernatural language of the Weird Sisters; signals demonic chaos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BLOOD ON THE CROWN TRAGEDY ARC                                    */}
      {/* ========================================================================= */}
      {activeTab === "tragedy" && (
        <div className="liquid-glass-bento rounded-3xl p-6 border border-amber-400/25 space-y-6">
          <div className="pb-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              The Dramatic Tragedy Arc: Macbeth&rsquo;s Moral Descent vs. Scotland&rsquo;s Health
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Aristotelian Hamartia, Anagnorisis, and Peripeteia mapped across the 5 Acts of the play.
            </p>
          </div>

          {/* Interactive 5-Act Plot Progression Curve */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              {
                act: "Act I",
                title: "Temptation & Hubris",
                macbethStatus: "Noble General & Thane of Glamis",
                scotlandHealth: "Peaceful Kingdom under King Duncan",
                bloodMetric: "10% (Valor in battle)",
                color: "from-amber-500/20 to-emerald-500/20",
                borderColor: "border-emerald-400/30",
              },
              {
                act: "Act II",
                title: "Regicide & Transgression",
                macbethStatus: "The Murderer of Sleep & Hospitality",
                scotlandHealth: "Nature rebels (horses eat each other, daytime darkness)",
                bloodMetric: "40% (Duncan & Grooms murdered)",
                color: "from-amber-500/20 to-rose-500/20",
                borderColor: "border-amber-400/30",
              },
              {
                act: "Act III",
                title: "Paranoia & Tyranny",
                macbethStatus: "Crowned Usurper haunted by Banquo's Ghost",
                scotlandHealth: "Thanes flee; mistrust poisons the court",
                bloodMetric: "65% (Banquo murdered, Fleance escapes)",
                color: "from-rose-500/20 to-purple-500/20",
                borderColor: "border-rose-400/30",
              },
              {
                act: "Act IV",
                title: "Slaughter & Despair",
                macbethStatus: "Hardened Tyrant murdering innocents",
                scotlandHealth: "Scotland is a weeping grave of sighs",
                bloodMetric: "90% (Lady Macduff & children massacred)",
                color: "from-purple-500/20 to-rose-700/20",
                borderColor: "border-purple-400/30",
              },
              {
                act: "Act V",
                title: "Nihilism & Retribution",
                macbethStatus: "The Dead Butcher defeated at Dunsinane",
                scotlandHealth: "Restoration of rightful royal lineage under Malcolm",
                bloodMetric: "100% (Macbeth beheaded; order restored)",
                color: "from-rose-700/20 to-stone-900/30",
                borderColor: "border-rose-600/40",
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-gradient-to-b ${stage.color} border ${stage.borderColor} flex flex-col justify-between hover:scale-[1.02] transition-transform`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-300">
                      {stage.act}
                    </span>
                    <span className="text-[10px] font-mono text-rose-300 bg-black/40 px-2 py-0.5 rounded-full">
                      {stage.bloodMetric}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{stage.title}</h4>
                  <div className="text-xs text-slate-200 mb-3 leading-relaxed">
                    <strong className="text-white block text-[11px]">Macbeth:</strong> {stage.macbethStatus}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-emerald-300 block">State of Scotland:</strong> {stage.scotlandHealth}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
