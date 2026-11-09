export interface IBQuestionQuote {
  quote: string;
  speaker: string;
  actScene: string;
  lineRef: string;
  literaryDevices: string[];
  analysis: string;
  paper2Utility: string;
  whyMemorable: string;
  sentenceFormula: string;
}

export interface IBQuestionDeepDive {
  notebookLm: {
    recommendedNotebookUrl: string;
    notebookName: string;
    instructions: string[];
    suggestedPrompts: string[];
  };
  narrowingStrategy: {
    broadPromptDiagnosis: string;
    narrowingAngles: {
      angle: string;
      focus: string;
      thesisStem: string;
    }[];
    trapsToAvoid: {
      trap: string;
      consequence: string;
      remedy: string;
    }[];
  };
  criterionMastery: {
    criterionA: {
      focus: string;
      strategy: string;
      exemplarApplication: string;
    };
    criterionB: {
      focus: string;
      strategy: string;
      exemplarApplication: string;
    };
    criterionC: {
      focus: string;
      strategy: string;
      exemplarApplication: string;
    };
    criterionD: {
      focus: string;
      strategy: string;
      exemplarApplication: string;
    };
  };
}

export interface IBQuestionData {
  id: string;
  number: number;
  title: string;
  question: string;
  quotePrompt?: string;
  directive: string;
  keywords: string[];
  themes: string[];
  characters: string[];
  keyEvents: string[];
  comparativeAngles: string[];
  bestQuotes: IBQuestionQuote[];
  deepDive: IBQuestionDeepDive;
  sampleOutline: {
    thesis: string;
    body1Focus: string;
    body2Focus: string;
    body3Focus: string;
    conclusionFocus: string;
  };
}

export interface IBRubricCriterion {
  id: "A" | "B" | "C" | "D";
  name: string;
  marks: number;
  descriptor: string;
  focus: string;
  levels: {
    markRange: string;
    label: string;
    summary: string;
    bullets: string[];
  }[];
}

export const IB_PAPER_2_RUBRIC: IBRubricCriterion[] = [
  {
    id: "A",
    name: "Knowledge, understanding and interpretation",
    marks: 10,
    descriptor: "To what extent does the candidate demonstrate knowledge or understanding of the works and draw reasoned conclusions from them?",
    focus: "Knowledge of texts, insightful interpretation, sustained comparison, perceptive evaluation of similarities and differences.",
    levels: [
      {
        markRange: "9–10",
        label: "Perceptive & Insightful",
        summary: "There is comprehensive, nuanced knowledge and understanding of both works; interpretation is insightful, convincing, and supported by perceptive textual reference and sustained comparison.",
        bullets: [
          "In-depth, persuasive knowledge of Macbeth and comparative text.",
          "Interpretations are subtle, original, and deeply substantiated.",
          "Consistent, balanced synthesis across both works illuminating central themes.",
        ],
      },
      {
        markRange: "7–8",
        label: "Thorough & Convincing",
        summary: "There is thorough knowledge and understanding of both works; interpretation is convincing and consistently supported by effective textual reference and meaningful comparison.",
        bullets: [
          "Clear, accurate knowledge and convincing critical understanding.",
          "Thoughtful textual references integrated into argument.",
          "Meaningful comparative links established consistently.",
        ],
      },
      {
        markRange: "5–6",
        label: "Satisfactory & Relevant",
        summary: "There is satisfactory knowledge and understanding; interpretation is generally sound with relevant textual support and comparison, though balance may vary.",
        bullets: [
          "Sound textual knowledge without major inaccuracies.",
          "Relevant interpretations supported by general evidence.",
          "Comparison is present though sometimes uneven.",
        ],
      },
      {
        markRange: "3–4",
        label: "Superficial or Inconsistent",
        summary: "Knowledge and understanding are superficial or inconsistent; interpretations are unsubstantiated or literal.",
        bullets: [
          "Superficial plot recount with limited critical interpretation.",
          "Weak or occasional textual referencing.",
          "Comparison is superficial or separate without integration.",
        ],
      },
      {
        markRange: "1–2",
        label: "Inadequate & Literal",
        summary: "Knowledge is flawed or irrelevant; interpretation is minimal with little to no meaningful comparison.",
        bullets: [
          "Frequent factual or narrative misunderstandings.",
          "Merely tells the story rather than answering the prompt.",
        ],
      },
    ],
  },
  {
    id: "B",
    name: "Analysis and evaluation",
    marks: 10,
    descriptor: "To what extent does the candidate analyse and evaluate how the choices of language, structure, technique and style shape meaning?",
    focus: "Granular literary and dramatic craft: meter, dramatic irony, staging, stage directions, motif networks, and theatrical impact on audiences.",
    levels: [
      {
        markRange: "9–10",
        label: "Insightful & Granular",
        summary: "There is insightful, granular analysis and critical evaluation of how authors' choices of language, structure, technique, and style shape meaning and audience response.",
        bullets: [
          "Perceptive analysis of dramatic craft, stagecraft, prosody, and imagery.",
          "Nuanced evaluation of theatrical impact on both contemporary and modern audiences.",
          "Precise literary terminology seamlessly woven into the analytical argument.",
        ],
      },
      {
        markRange: "7–8",
        label: "Effective & Analytical",
        summary: "There is effective analysis of how textual and dramatic choices shape meaning, with clear evaluation of literary effects.",
        bullets: [
          "Consistent analysis of poetic devices, symbolism, and structural progression.",
          "Good awareness of genre conventions and dramatic techniques.",
        ],
      },
      {
        markRange: "5–6",
        label: "Adequate Identification",
        summary: "There is adequate analysis of literary choices, though descriptions may occasionally lapse into feature-spotting or generalized commentary.",
        bullets: [
          "Identifies devices (e.g. metaphors, soliloquies) with some explanation of effect.",
          "Occasional mechanical listing rather than sustained evaluation.",
        ],
      },
      {
        markRange: "3–4",
        label: "Descriptive & Limited",
        summary: "Analysis is limited or descriptive; mentions literary features without analyzing their functional effect on dramatic meaning.",
        bullets: [
          "Names techniques without explaining how they contribute to theme.",
        ],
      },
      {
        markRange: "1–2",
        label: "Minimal or Absent",
        summary: "Almost no awareness of authorial choices, literary craft, or dramatic techniques.",
        bullets: [
          "Pure plot summary without analytical vocabulary.",
        ],
      },
    ],
  },
  {
    id: "C",
    name: "Focus, organisation and development",
    marks: 5,
    descriptor: "How well-organized, focused and developed is the comparative presentation of ideas?",
    focus: "Structural roadmap, unified topic sentences, coherent logical progression, cohesive transitions, and purposeful comparative balance.",
    levels: [
      {
        markRange: "5",
        label: "Persuasive & Seamless",
        summary: "The response is consistently focused on the prompt, meticulously organised, and ideas are developed persuasively with fluid comparative transitions.",
        bullets: [
          "Conceptual roadmap and crystal-clear comparative thesis.",
          "Integrated body paragraphs connecting both works seamlessly.",
          "Sophisticated developmental arc that builds to a rigorous climax.",
        ],
      },
      {
        markRange: "4",
        label: "Coherent & Well-Structured",
        summary: "The response is well-focused and clearly developed; structure is logical and transitions are purposeful.",
        bullets: [
          "Clear direction and focused paragraphs with sound topic sentences.",
          "Good comparative rhythm across the discussion.",
        ],
      },
      {
        markRange: "3",
        label: "Generally Organized",
        summary: "The response shows organization and general focus, though development may occasionally waver or rely on repetitive transitions.",
        bullets: [
          "Follows a basic structure (block or alternating), but may feel formulaic.",
        ],
      },
      {
        markRange: "2",
        label: "Disjointed & Unfocused",
        summary: "The argument lacks clarity of direction; points are scattered or lack transitional logic.",
        bullets: [
          "Lacks clear topic sentences or drifts into tangential summaries.",
        ],
      },
      {
        markRange: "1",
        label: "Undeveloped",
        summary: "Essay lacks recognizable structure or progression of thought.",
        bullets: [
          "Chaotic or unfinished presentation.",
        ],
      },
    ],
  },
  {
    id: "D",
    name: "Language",
    marks: 5,
    descriptor: "How clear, varied and accurate is the register, tone, and vocabulary of the essay?",
    focus: "Academic precision, literary terminology, syntactic variety, concise grammatical accuracy, and appropriate formal scholarly register.",
    levels: [
      {
        markRange: "5",
        label: "Sophisticated & Precise",
        summary: "Language is very clear, effective, carefully chosen and sophisticated; high degree of accuracy; academic literary register and varied syntax throughout.",
        bullets: [
          "Precise, high-scoring literary vocabulary (e.g. 'dramatic irony', 'soliloquy', 'equivocation', 'meter', 'anagnorisis').",
          "Varied sentence structures, clear analytical phrasing, and concise prose.",
        ],
      },
      {
        markRange: "4",
        label: "Clear & Academic",
        summary: "Language is clear, fluent, and generally accurate with a consistently formal literary register.",
        bullets: [
          "Competent scholarly phrasing with infrequent minor errors.",
        ],
      },
      {
        markRange: "3",
        label: "Adequate & Readable",
        summary: "Language is adequate and understandable; register is acceptable though vocabulary may be basic or repetitive.",
        bullets: [
          "Clarity is maintained, but style is plain or formulaic.",
        ],
      },
      {
        markRange: "2",
        label: "Inconsistent & Cluttered",
        summary: "Language lacks precision; grammatical errors or colloquialisms impede fluency.",
        bullets: [
          "Slang, casual phrasing, or frequent run-on sentences.",
        ],
      },
      {
        markRange: "1",
        label: "Severely Impeded",
        summary: "Language errors constantly hinder comprehension and coherence.",
        bullets: [
          "Persistent grammatical breakdowns.",
        ],
      },
    ],
  },
];

export const IB_GUIDING_QUESTIONS: IBQuestionData[] = [
  {
    id: "q1-appearance-reality",
    number: 1,
    title: "Appearance versus Reality",
    question: "“Nothing is as it seems.” Discuss how the tension between appearance and reality is explored in the play, and to what effect.",
    quotePrompt: "“Nothing is as it seems.”",
    directive: "Discuss how... and to what effect (evaluate authorial choices and theatrical impact on the audience).",
    keywords: ["Tension", "Appearance vs. Reality", "Explored", "To what effect", "Deception", "Equivocation", "Cosmic Inversion"],
    themes: ["Appearance vs. Reality", "Supernatural Equivocation", "Hypocrisy & Masking", "Sanity vs. Hallucination"],
    characters: ["Macbeth", "Lady Macbeth", "The Weird Sisters", "King Duncan", "The Porter"],
    keyEvents: [
      "Witches' chiasmus on the heath (1.1)",
      "Duncan's tragic irony regarding Cawdor's castle (1.4, 1.6)",
      "Lady Macbeth's 'innocent flower / serpent' injunction (1.5)",
      "The air-drawn dagger and 'false creation' soliloquy (2.1)",
      "The banquet scene and Banquo's ghost invisible to the court (3.4)",
      "The Apparitions' deceptive double-prophecies (4.1)",
      "Lady Macbeth's nocturnal somnambulism and real guilt (5.1)",
      "Birnam Wood moving and Macduff's Caesarean birth (5.4, 5.8)",
    ],
    comparativeAngles: [
      "Contrast Shakespeare's dramatic irony with prose narrative's unreliable narration.",
      "Explore how outward political pageantry masks private spiritual rot across two contrasting works.",
      "Analyze the psychological toll of maintaining a 'false face' vs. societal conformity.",
    ],
    deepDive: {
      notebookLm: {
        recommendedNotebookUrl: "https://notebooklm.google.com/",
        notebookName: "Macbeth Paper 2 Companion • Appearance vs. Reality Notebook",
        instructions: [
          "Open NotebookLM (https://notebooklm.google.com/) and create a new notebook titled 'Macbeth: Appearance vs Reality'.",
          "Import your core texts: Upload full scene text for Act 1 Scene 1 (The Heath), Act 1 Scene 5 (Unsex Me / Innocent Flower), Act 2 Scene 1 (Dagger Soliloquy), and Act 5 Scene 1 (Sleepwalking).",
          "Upload your comparative Paper 2 text (e.g., The Great Gatsby, 1984, or Chronicle of a Death Foretold) or your syllabus scene notes.",
          "Generate an automated Audio Overview / Deep Dive podcast to hear two AI hosts debate the tension between outward theatrical mask and internal psychic damnation.",
        ],
        suggestedPrompts: [
          "How does Shakespeare use trochaic meter and dramatic irony to signal moral confusion to the Jacobean audience?",
          "Compare the motif of clothing and masking in Macbeth with the facade of outward conformity in my second literary work.",
          "Synthesize 3 distinct comparative thesis statements analyzing how outward hospitality conceals destructive treachery.",
          "Identify all moments where hallucinations invert reality for Macbeth and Lady Macbeth.",
        ],
      },
      narrowingStrategy: {
        broadPromptDiagnosis:
          "The prompt 'Nothing is as it seems' is dangerously broad. Untrained candidates fall into the trap of listing every lie or disguise in the play chronologically. High-scoring Grade 12 candidates narrow the prompt down into a specific dramatic conflict: the tension between outward theatrical performance and inward psychological collapse, or the fatal trap of demonic equivocation.",
        narrowingAngles: [
          {
            angle: "Deceptive Appearances & Theatrical Disguise",
            focus: "Duncan's tragic inability to see past facial performance juxtaposed with Lady Macbeth's deliberate staging of courtly hospitality.",
            thesisStem: "While both authors explore the deceptive facade of social protocol, Shakespeare utilizes dramatic irony and domestic performance to demonstrate that hiding the truth inevitably destroys the moral conscience.",
          },
          {
            angle: "Supernatural Equivocation as Moral Poison",
            focus: "The Weird Sisters' riddling trochees speaking in double meanings, tempting Macbeth into rationalizing his ambition.",
            thesisStem: "Shakespeare presents equivocation not merely as clever wordplay, but as a supernatural trap where characters eagerly deceive themselves to justify violent ambition.",
          },
          {
            angle: "Psychological Breakdown of the False Facade",
            focus: "The involuntary revolt of the guilty mind: the air-drawn dagger, Banquo's ghost, and Lady Macbeth's sleepwalking.",
            thesisStem: "Although characters attempt to erect an impenetrable 'false face,' Shakespeare reveals that the human conscience cannot sustain guilt, rendering the outward disguise impossible to maintain.",
          },
        ],
        trapsToAvoid: [
          {
            trap: "Plot Cataloging Trap",
            consequence: "Listing every time a character lies (Duncan trusting Cawdor, Lady Macbeth framing the guards, Macbeth smiling at Banquo) without analyzing authorial craft.",
            remedy: "Organize body paragraphs by dramatic escalation (Supernatural Temptation ➔ Domestic Performance ➔ Psychological Collapse) rather than chronological plot order.",
          },
          {
            trap: "Ignoring 'To What Effect' (Authorial Purpose)",
            consequence: "Failing to evaluate how the audience reacts to dramatic irony or how the Jacobean sociopolitical framework is reinforced.",
            remedy: "Explicitly discuss catharsis, the moral warning against treason, and King James I's worldview regarding demonic deception.",
          },
          {
            trap: "Isolating Appearance from Form and Craft",
            consequence: "Discussing deception merely as a thematic idea while neglecting meter, staging, sensory imagery, and asides.",
            remedy: "Anchor every single point in Shakespeare's dramatic craft: trochaic inversions, rhyming couplets of duplicity, and stage entrances.",
          },
        ],
      },
      criterionMastery: {
        criterionA: {
          focus: "Knowledge, Understanding & Perceptive Interpretation (10 Marks)",
          strategy:
            "Demonstrate close familiarity with Jacobean context (the Gunpowder Plot medal of 1605 depicting a serpent hiding under roses) and subtle textual details. Move beyond obvious plot points to interpret how characters actively deceive themselves.",
          exemplarApplication:
            "Contrast Macbeth's willing surrender to demonic double meanings with Duncan's naive trust in outward courtesy, showing that vulnerability stems from misjudging appearance.",
        },
        criterionB: {
          focus: "Analysis & Evaluation of Authorial Choices (10 Marks)",
          strategy:
            "Analyze how dramatic irony creates tension for the audience. Unpack meter (e.g., trochaic tetrameter vs. regular iambic pentameter) and physical stagecraft.",
          exemplarApplication:
            "Examine how the rhyming couplet 'False face must hide what the false heart doth know' snaps the pentameter shut, reflecting the rigid, forced effort required to maintain a physical disguise.",
        },
        criterionC: {
          focus: "Focus, Organisation & Tripartite Progression (5 Marks)",
          strategy:
            "Structure the response using a clear 3-stage progression: 1) Supernatural inversion on the Heath, 2) Domestic deception inside Inverness Castle and at the banquet, and 3) Psychological collapse and retribution at Dunsinane.",
          exemplarApplication:
            "Maintain sustained comparative balance by connecting both texts in every paragraph using comparative transition sentences rather than isolated block summaries.",
        },
        criterionD: {
          focus: "Academic Register & Literary Vocabulary (5 Marks)",
          strategy:
            "Deploy standard, high-yield literary terms with natural precision: dramatic irony, equivocation, chiasmus, soliloquy, meter, anagnorisis, and catharsis.",
          exemplarApplication:
            "Use active analytical verbs (e.g., 'subverts', 'crystallizes', 'dramatizes', 'foreshadows', 'exposes') to make arguments concise and punchy.",
        },
      },
    },
    bestQuotes: [
      {
        quote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.",
        speaker: "The Three Witches",
        actScene: "Act 1, Scene 1",
        lineRef: "1.1.10–11",
        literaryDevices: ["Chiasmus", "Paradox", "Atmospheric Prolepsis", "Trochaic Tetrameter"],
        analysis: "The trochaic rhythm immediately sets the witches apart from mortal blank verse. The chiasmus overturns the moral cosmos: virtues become vices, and physical sensory perception is permanently clouded by 'fog and filthy air'.",
        paper2Utility: "Crucial opening quote to demonstrate the metaphysical origins of deception; establishes that reality is inverted before mortal characters even speak.",
        whyMemorable: "The sing-song alliteration ('f-f-f') and perfect mirror-image chiasmus ('fair is foul / foul is fair') make it impossible to forget.",
        sentenceFormula: "Shakespeare establishes an atmosphere of pervasive moral ambivalence through the witches' incantatory chiasmus, '[Quote]', which prefigures how...",
      },
      {
        quote: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust.",
        speaker: "King Duncan",
        actScene: "Act 1, Scene 4",
        lineRef: "1.4.11–14",
        literaryDevices: ["Dramatic Irony", "Architectural Metaphor ('construction')", "Foreshadowing"],
        analysis: "Duncan laments his inability to penetrate the outward countenance of the executed traitor Cawdor. In a staggering stroke of theatrical irony, Macbeth enters immediately upon this line, becoming the new Cawdor who will exploit this exact cognitive vulnerability.",
        paper2Utility: "Demonstrates that political tragedy stems from the fatal mistake of trusting a smiling face without knowing the person's true motives.",
        whyMemorable: "Duncan's heartfelt lament about 'absolute trust' juxtaposed with Macbeth's immediate entrance is one of Shakespeare's sharpest dramatic timing moments.",
        sentenceFormula: "Duncan's tragic vulnerability is foregrounded in his lament that '[Quote]', a dangerous blindness immediately exploited as Macbeth steps onstage.",
      },
      {
        quote: "Look like th' innocent flower, / But be the serpent under't.",
        speaker: "Lady Macbeth",
        actScene: "Act 1, Scene 5",
        lineRef: "1.5.63–64",
        literaryDevices: ["Biblical Allusion (Genesis)", "Simile & Metaphor", "Visual Disguise Motif", "Imperative Mood"],
        analysis: "Lady Macbeth instructs her husband in calculated political theater. The botanical imagery of the 'innocent flower' evokes idyllic feudal hospitality, while the 'serpent' invokes the demonic tempter of Eden and the 1605 Gunpowder Plot commemorative medal.",
        paper2Utility: "The definitive quote for calculated courtly deception and feminine political agency overriding martial frankness.",
        whyMemorable: "The visceral juxtaposition of gentle floral beauty and lethal venomous reptile is instant, vivid, and universally recognizable.",
        sentenceFormula: "Evoking the warning on King James's Gunpowder Plot medal, Lady Macbeth demands her husband '[Quote]', illustrating how domestic hospitality becomes a weaponized facade.",
      },
      {
        quote: "False face must hide what the false heart doth know.",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 7",
        lineRef: "1.7.82",
        literaryDevices: ["Alliteration ('f')", "Antithesis", "Rhyming Couplet", "Sartorial Masking"],
        analysis: "Concluding Act 1 with an emphatic rhyming couplet, Macbeth capitulates to regicide. The alliterative 'f' sounds emphasize the deliberate, mechanical split between external facial performance ('false face') and internal moral terror ('false heart').",
        paper2Utility: "Perfect structural quote marking the exact boundary where Macbeth surrenders authentic honor for theatrical duplicity.",
        whyMemorable: "The balanced monosyllabic symmetry and crisp rhyme ('know' sealing the act) stick in the mind like a locked door.",
        sentenceFormula: "Macbeth's conclusive resolution to execute Duncan is sealed in the rhyming couplet '[Quote]', cementing the divide between his public persona and private guilt.",
      },
      {
        quote: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain?",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 1",
        lineRef: "2.1.33–39",
        literaryDevices: ["Apostrophe", "Rhetorical Questioning", "Sensory Imagery", "Soliloquy"],
        analysis: "Shakespeare externalizes Macbeth's psychological breakdown as an air-drawn visual illusion. His hesitation ('I have thee not, and yet I see thee still') captures the blurring between objective reality and guilt-induced hallucination.",
        paper2Utility: "Use to evaluate how psychological guilt transforms sensory reality into terrifying optical hallucinations.",
        whyMemorable: "The opening theatrical question captures the sudden, heart-stopping terror of reaching into empty air for a floating weapon.",
        sentenceFormula: "The collapse of Macbeth's grip on reality is staged through his feverish soliloquy, '[Quote]', exposing how guilty conscience manifests as a physical hallucination.",
      },
      {
        quote: "And be these juggling fiends no more believed, / That palter with us in a double sense, / That keep the word of promise to our ear, / And break it to our hope.",
        speaker: "Macbeth",
        actScene: "Act 5, Scene 8",
        lineRef: "5.8.19–22",
        literaryDevices: ["Anagnorisis", "Sibilance", "Equivocation Motifs", "Antithesis ('ear' vs. 'hope')"],
        analysis: "Macbeth's moment of tragic recognition (*anagnorisis*) strips away the linguistic mask of demonic prophecy. 'Palter in a double sense' indicts the deceitful equivocation that offered literal linguistic truth while delivering metaphysical damnation.",
        paper2Utility: "Essential for concluding an essay on the lethal consequences of trusting deceptive surfaces and verbal riddles.",
        whyMemorable: "The bitter rhythm of 'juggling fiends' and 'palter in a double sense' encapsulates the ultimate heartbreak of demonic deceit.",
        sentenceFormula: "In his final anagnorisis, Macbeth denounces demonic equivocation, lamenting '[Quote]', demonstrating that linguistic ambiguity ultimately demands mortal ruin.",
      },
    ],
    sampleOutline: {
      thesis: "Shakespeare employs pervasive dramatic irony, chiasmic verse, and deceptive apparitions to dramatize how the subversion of reality is not merely an ethical crime, but a cognitive pathology that alienates the individual from human fellowship and cosmic order.",
      body1Focus: "Metaphysical destabilization: The Witches' equivocal language and Duncan's tragic gullibility as structural foundations of moral blindness.",
      body2Focus: "Calculated theatricality: The domestic and courtly masking engineered by the Macbeths, where ceremonial hospitality conceals slaughter.",
      body3Focus: "Retributive exposure: Hallucinations, somnambulism, and the collapse of equivocal prophecies revealing reality's inevitable triumph.",
      conclusionFocus: "Synthesize how the tragic effect (*catharsis*) relies upon the audience seeing through the deceptive masks that destroy the protagonists.",
    },
  },
  {
    id: "q2-control-resistance",
    number: 2,
    title: "Control and Resistance",
    question: "Analyse how the play portrays the consequences of individuals either seeking control or losing control over their own lives.",
    quotePrompt: "“Seeking control or losing control over their own lives.”",
    directive: "Analyse how... portrays the consequences (examine character arcs, psychological disintegration, and societal backlash).",
    keywords: ["Control", "Resistance", "Consequences", "Agency", "Fatalism", "Tyranny", "Insurrection", "Psychological collapse"],
    themes: ["Hubristic Ambition", "Fate vs. Free Will", "Political Tyranny & Rebellion", "Conscience vs. Willpower"],
    characters: ["Macbeth", "Lady Macbeth", "Banquo", "Macduff", "Malcolm"],
    keyEvents: [
      "Macbeth's desire to 'trammel up the consequence' (1.7)",
      "Banquo resisting 'cursed thoughts' through holy prayer (2.1)",
      "Macbeth attempting to master time and succession by murdering Banquo (3.1)",
      "The catastrophic loss of emotional control at the royal banquet (3.4)",
      "Macduff's physical resistance in fleeing to England (3.6, 4.3)",
      "Lady Macbeth's subconscious rebellion in the sleepwalking scene (5.1)",
      "The collective national uprising of Scottish thanes and English forces (5.2, 5.4)",
      "Macbeth's final martial defiance when stripped of all control (5.8)",
    ],
    comparativeAngles: [
      "Compare how autocratic protagonists attempt to monopolize control over destiny vs. how social institutions resist.",
      "Examine the somatic and mental loss of control: sleepwalking, nightmares, and panic.",
      "Analyze moral resistance: characters who maintain integrity under corrupt regimes.",
    ],
    deepDive: {
      notebookLm: {
        recommendedNotebookUrl: "https://notebooklm.google.com/",
        notebookName: "Macbeth Paper 2 Companion • Control & Resistance Notebook",
        instructions: [
          "Navigate to NotebookLM (https://notebooklm.google.com/) and create a dedicated workspace named 'Macbeth: Control and Resistance'.",
          "Upload primary source texts: Act 1 Scene 7 (Trammel up the consequence soliloquy), Act 3 Scene 1 (Fruitless Crown soliloquy), Act 4 Scene 3 (Malcolm & Macduff in England), and Act 5 Scene 2 (Angus on the giant's robe).",
          "Add comparative notes from your second syllabus text (e.g., Winston Smith's resistance in 1984 or Okonkwo's fear of losing control in Things Fall Apart).",
          "Use NotebookLM's query engine to build a comparative table contrasting individual authoritarian ambition against psychological and collective resistance.",
        ],
        suggestedPrompts: [
          "How does Macbeth's vocabulary in Act 3 Scene 1 ('fruitless crown', 'barren sceptre') reflect existential panic over lack of control?",
          "Trace the arc of Lady Macbeth from commanding imperative control in Act 1 to complete involuntary somnambulism in Act 5.",
          "Contrast Macduff's holistic definition of emotional and martial resistance with Macbeth's pathological suppression of conscience.",
          "Formulate 4 high-level comparative topic sentences examining how autocratic control inevitably produces internal and external backlash.",
        ],
      },
      narrowingStrategy: {
        broadPromptDiagnosis:
          "'Control and resistance' is an immense prompt that invites generic essays recounting how Macbeth becomes king and then loses a war. To achieve Grade 7 / 27+ marks, you must narrow control into a sharp dramatic conflict: the illusion of absolute political power versus the inevitable mental breakdown and rebellion that strip the tyrant of all control.",
        narrowingAngles: [
          {
            angle: "Temporal Control & The Futility of Mastered Time",
            focus: "Macbeth's attempt to 'trammel up the consequence' and assassinate future dynasties, pitted against time as an uncontrollable force.",
            thesisStem: "Shakespeare portrays the quest for absolute control not as a genuine victory, but as an impossible delusion, illustrating through time motifs that violent usurpers are inevitably destroyed by the very future they try to dominate.",
          },
          {
            angle: "Psychological Rebellion Against Willpower",
            focus: "Lady Macbeth's conscious ambition demanding the unsexing of her body vs. her unconscious mind staging a nighttime rebellion through sleepwalking.",
            thesisStem: "While characters strive to exert total willpower over their conscience, both texts reveal that human nature instinctively resists violent repression, fracturing the mind under the weight of guilt.",
          },
          {
            angle: "Virtuous Resistance vs. Autocratic Tyranny",
            focus: "Banquo's moral restraint and Macduff's righteous resistance contrasted with Macbeth's paranoid murder spree.",
            thesisStem: "Shakespeare contrasts the paranoid violence of tyrannical rule with the moral strength of communal resistance, proving that legitimate authority requires alignment with natural justice.",
          },
        ],
        trapsToAvoid: [
          {
            trap: "The Purely Military Summary Trap",
            consequence: "Spending half the essay describing the English army, the camouflaged branches, and the final swordfight without addressing psychological control.",
            remedy: "Ground resistance in moral and psychological dimensions before touching on the geopolitical rebellion.",
          },
          {
            trap: "Treating Lady Macbeth as Monolithically Controlling",
            consequence: "Portraying Lady Macbeth merely as the 'fourth witch' who controls Macbeth, ignoring her rapid loss of control after Act 2.",
            remedy: "Highlight her tragic trajectory: from the commanding imperatives of 1.5 to the pathetically repetitive, fragmented prose of 5.1.",
          },
          {
            trap: "Neglecting Foils of Healthy Resistance",
            consequence: "Focusing exclusively on Macbeth's actions while ignoring Banquo's quiet prayerful resistance and Macduff's refusal to attend the coronation.",
            remedy: "Integrate Banquo (2.1) and Macduff (4.3) as active thematic counterweights representing righteous resistance.",
          },
        ],
      },
      criterionMastery: {
        criterionA: {
          focus: "Knowledge, Understanding & Conceptual Insight (10 Marks)",
          strategy:
            "Examine the dramatic tension between prophecy and human free will. Cite specific soliloquy shifts to demonstrate deep command of character psychology.",
          exemplarApplication:
            "Show how Macbeth's shift from hesitant conditionals ('If it were done...') to reckless commands ('The very firstlings of my heart shall be / The firstlings of my hand') represents a desperate attempt to outrun his conscience.",
        },
        criterionB: {
          focus: "Granular Literary & Dramatic Analysis (10 Marks)",
          strategy:
            "Evaluate how Shakespeare crafts staging, rhythm, and diction to dramatize loss of control: stichomythic exchanges, fractured meter, and clothing metaphors of dwarfed royalty.",
          exemplarApplication:
            "Analyze Angus's clothing imagery ('like a giant's robe / Upon a dwarfish thief') to evaluate how Shakespeare visually and poetically communicates the moral diminution of illegitimate rule.",
        },
        criterionC: {
          focus: "Sustained Comparative Argumentation (5 Marks)",
          strategy:
            "Maintain a sharp comparative thesis that interrogates why human institutions resist totalitarian overreach. Ensure every transition balances textual evidence from both authors.",
          exemplarApplication:
            "Use comparative pivot markers (e.g., 'Whereas Shakespeare externalizes political resistance through collective martial uprising, [Author B] focuses on...') to demonstrate high-level structural control.",
        },
        criterionD: {
          focus: "Precise Academic Register & Formal Vocabulary (5 Marks)",
          strategy:
            "Employ clear literary vocabulary: hubris, tyranny, soliloquy, sleepwalking prose, imagery, anagnorisis, and catharsis.",
          exemplarApplication:
            "Formulate clear, well-structured sentences that weave textual citations seamlessly into analytical syntax without dropped quotes.",
        },
      },
    },
    bestQuotes: [
      {
        quote: "If it were done when 'tis done, then 'twere well / It were done quickly: if the assassination / Could trammel up the consequence, and catch / With his surcease success...",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 7",
        lineRef: "1.7.1–4",
        literaryDevices: ["Monosyllabic Diction", "Polyptoton ('done')", "Hypothetical Subjunctive", "Legal Imagery ('trammel')"],
        analysis: "Macbeth futilely wishes he could entangle and freeze the future consequences of murder like a fisherman's net ('trammel'). His syntactical repetition of 'done' betrays his subconscious awareness that human agency cannot control the temporal ripples of violent sin.",
        paper2Utility: "Demonstrates the initial intellectual attempt to exert absolute control over future destiny and its philosophical futility.",
        whyMemorable: "The rapid-fire drumming of 'done... done... done' creates an urgent, obsessive rhythm that echoes the ticking clock of conscience.",
        sentenceFormula: "Through the obsessive monosyllabic polyptoton of '[Quote]', Macbeth grapples with the delusion of human agency, recognizing that temporal consequences refuse to be confined.",
      },
      {
        quote: "To be thus is nothing, / But to be safely thus. Our fears in Banquo / Stick deep, and in his royalty of nature / Reigns that which would be feared.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 1",
        lineRef: "3.1.48–51",
        literaryDevices: ["Aphoristic Opening", "Metaphor ('stick deep')", "Enjambment", "Royal Epithet"],
        analysis: "Achieving the throne brings zero psychological serenity. Macbeth realizes political control is meaningless without permanence, forcing him into a compulsive, escalating cycle of defensive murder against Banquo's virtuous moral authority.",
        paper2Utility: "The quintessential soliloquy demonstrating that tyrannical control is an insatiable paradox that intensifies paranoia.",
        whyMemorable: "The punchy philosophical opening ('To be thus is nothing / But to be safely thus') cuts to the heart of tyrannical insecurity.",
        sentenceFormula: "Shakespeare exposes the hollow fruit of illicit power through the aphoristic opening of Macbeth's soliloquy, '[Quote]', proving that unchecked ambition breeds ceaseless vulnerability.",
      },
      {
        quote: "Upon my head they placed a fruitless crown, / And put a barren sceptre in my gripe, / Thence to be wrenched with an unlineal hand, / No son of mine succeeding.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 1",
        lineRef: "3.1.61–64",
        literaryDevices: ["Sterility Imagery", "Sartorial/Regal Metaphor", "Violent Verb ('wrenched')", "Metonymy"],
        analysis: "The adjectives 'fruitless' and 'barren' expose Macbeth's existential horror of genealogical impotence. He feels he has damned his immortal soul merely to hold empty symbols of control that will be violently seized by another dynasty.",
        paper2Utility: "Exposes the ultimate limit of earthly control: the inability to govern biology, time, and legacy.",
        whyMemorable: "The visceral pairing of 'fruitless crown' and 'barren sceptre' symbolizes complete dynastic death and useless regalia.",
        sentenceFormula: "The existential futility of temporal control is epitomized in Macbeth's bitter acknowledgment of his '[Quote]', proving his inability to govern dynastic posterity.",
      },
      {
        quote: "I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 4",
        lineRef: "3.4.135–137",
        literaryDevices: ["River Metaphor", "Sensory Imagery", "Cognitive Desensitization", "Caesura"],
        analysis: "Following the banquet breakdown, Macbeth conceptualizes violence as a literal crimson river. He recognizes he has lost moral agency: continuing to kill is emotionally easier ('less tedious') than repenting, signaling total surrender to tyrannical momentum.",
        paper2Utility: "Shows the psychological pivot where the actor surrenders control to the bloody momentum he originally unleashed.",
        whyMemorable: "The chilling image of wading waist-deep in a river of human blood and choosing to push forward out of sheer moral fatigue.",
        sentenceFormula: "Macbeth's total abdication of moral agency is conveyed through the horrifying river topography of '[Quote]', where violence becomes an inescapable current.",
      },
      {
        quote: "Dispute it like a man. / I shall do so; / But I must also feel it as a man: / I cannot but remember such things were, / That were most precious to me.",
        speaker: "Malcolm & Macduff",
        actScene: "Act 4, Scene 3",
        lineRef: "4.3.220–223",
        literaryDevices: ["Stichomythia", "Philosophical Dialogue", "Emotional Juxtaposition", "Polyptoton ('man')"],
        analysis: "When Malcolm urges immediate militaristic retaliation, Macduff redefines genuine masculine control: authentic strength requires feeling human sorrow before translating grief into armed resistance against tyranny.",
        paper2Utility: "Crucial foil quote showing healthy emotional self-regulation and moral resistance contrasted with Macbeth's sociopathic suppression.",
        whyMemorable: "The profound emotional wisdom of 'I must also feel it as a man' permanently shatters toxic, violent definitions of manhood.",
        sentenceFormula: "In sharp contrast to Macbeth's emotional numbness, Macduff models moral resistance in his stichomythic retort, '[Quote]', integrating emotional vulnerability with righteous vengeance.",
      },
      {
        quote: "Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.",
        speaker: "Angus",
        actScene: "Act 5, Scene 2",
        lineRef: "5.2.20–22",
        literaryDevices: ["Simile", "Sartorial Imagery", "Antithesis ('giant' vs. 'dwarf')", "Moral Diminution"],
        analysis: "The Scottish thanes uniting in armed resistance describe Macbeth's complete loss of political and sovereign authority. The stolen royal garments do not confer majesty; they merely emphasize his dwarfish moral illegitimacy.",
        paper2Utility: "Demonstrates how illegitimate control shrinks the tyrant into insignificance while collective resistance restores legitimate order.",
        whyMemorable: "The comic and pathetic image of a tiny thief swimming in gigantic stolen robes captures the complete deflation of tyrannical majesty.",
        sentenceFormula: "The complete collapse of Macbeth's sovereign control is captured through Angus's deflating sartorial simile, '[Quote]', visually revealing his moral illegitimacy.",
      },
    ],
    sampleOutline: {
      thesis: "Shakespeare dramatizes how the hubristic pursuit of absolute control over political destiny and time invariably produces its antithesis: progressive internal psychological enslavement and external armed resistance that restores cosmic equilibrium.",
      body1Focus: "The delusion of control: Macbeth's desperate attempt to 'trammel up the consequence' through preemptive regicide and genealogical manipulation.",
      body2Focus: "The somatic and cognitive loss of control: Hallucinations, banquet panic, and Lady Macbeth's sleepwalking as the unquenchable rebellion of repressed conscience.",
      body3Focus: "Righteous political resistance: Macduff's integrated manhood and the allied forces reclaiming Scotland from sterile tyranny.",
      conclusionFocus: "Conclude on the Jacobean theological warning: true sovereign control requires submission to divine order; usurpers are inevitably devoured by the very chaos they initiate.",
    },
  },
  {
    id: "q3-conflict-breakdown",
    number: 3,
    title: "Conflict and Breakdown",
    question: "Discuss how internal conflict within a character contributes to the larger breakdown of social or moral harmony in the play.",
    quotePrompt: "“Internal conflict within a character contributes to the larger breakdown of social or moral harmony.”",
    directive: "Discuss how... contributes to larger breakdown (trace the causal link between individual psychomachia and macrocosmic societal collapse).",
    keywords: ["Internal Conflict", "Psychomachia", "Breakdown", "Social Harmony", "Moral Harmony", "Great Chain of Being", "Microcosm/Macrocosm"],
    themes: ["Conscience vs. Ambition", "Psychological Disintegration", "Ecosystem & Nature in Rebellion", "Tyranny & Social Decay"],
    characters: ["Macbeth", "Lady Macbeth", "Duncan", "The Old Man & Ross", "The Scottish Commonwealth"],
    keyEvents: [
      "Macbeth's moral soliloquy against killing Duncan (1.7)",
      "The somatic terror immediately following regicide: 'Macbeth does murder sleep' (2.2)",
      "Macrocosmic rebellion: horses eating each other, eclipse at noon (2.4)",
      "Macbeth's mental tortures: 'full of scorpions is my mind' (3.2)",
      "The breakdown of royal banquet decorum in front of the Scottish aristocracy (3.4)",
      "The slaughter of Macduff's household illustrating social anarchy (4.2)",
      "Lady Macbeth's sleepwalking breakdown exposing the truth to the Doctor (5.1)",
      "Scotland transformed into a common grave ('weeps, it bleeds', 4.3)",
    ],
    comparativeAngles: [
      "Examine how individual guilt metastasizes into state-sponsored violence across two literary works.",
      "Analyze the Renaissance microcosm/macrocosm correspondence: the ruler's fractured mind echoing in the diseased state.",
      "Contrast internal psychic repression (Lady Macbeth) with defensive outward violence (Macbeth).",
    ],
    deepDive: {
      notebookLm: {
        recommendedNotebookUrl: "https://notebooklm.google.com/",
        notebookName: "Macbeth Paper 2 Companion • Internal Conflict & Breakdown Notebook",
        instructions: [
          "Create a new workspace in NotebookLM (https://notebooklm.google.com/) named 'Macbeth: Internal Conflict & Social Breakdown'.",
          "Upload the core textual scenes: Act 1 Scene 3 (Horrid image unfix my hair), Act 2 Scene 2 (Murder sleep), Act 2 Scene 4 (Old Man and Ross on unnatural omens), Act 3 Scene 4 (Ruined Banquet), and Act 4 Scene 3 (Bleed, bleed poor country).",
          "Upload excerpts from your comparative text highlighting the correlation between a protagonist's moral transgression and social anarchy.",
          "Generate a timeline or synthesis briefing tracking how Macbeth's individual neurosis directly causes the physical destruction of Scotland.",
        ],
        suggestedPrompts: [
          "How does Shakespeare use the Great Chain of Being to reflect Macbeth's psychological guilt onto the physical Scottish landscape?",
          "Analyze the ruined banquet in Act 3 Scene 4 as both a psychological hallucination and a sociopolitical breakdown of the feudal hierarchy.",
          "Compare how internal psychomachia manifests in bodily symptoms (insomnia, trembling, hallucinations) across both works.",
          "Formulate 3 comparative arguments examining the transition from private domestic violence to institutional state tyranny.",
        ],
      },
      narrowingStrategy: {
        broadPromptDiagnosis:
          "The prompt asks how internal conflict leads to breakdown. Students often write two detached essays: one describing Macbeth's guilt, and one describing Scotland suffering under tyranny. The key to Level 7 marks is to trace the direct cause-and-effect link: how Macbeth's internal guilt and paranoia drive him to commit increasingly brutal acts that tear apart the Scottish nation.",
        narrowingAngles: [
          {
            angle: "The Ruler's Conscience & The Great Chain of Being",
            focus: "The Jacobean belief that the king's moral health directly affects the health of the entire nation; his guilt unleashes chaos across society.",
            thesisStem: "Shakespeare employs the Jacobean concept of the Great Chain of Being to reveal that a monarch's moral treason cannot remain private; Macbeth's suppressed conscience inevitably plunges Scotland into political and ecological disorder.",
          },
          {
            angle: "Paranoia as the Engine of Tyranny",
            focus: "How Macbeth's internal torment ('full of scorpions is my mind') directly drives him to order ruthless public atrocities (the slaughter at Macduff's castle).",
            thesisStem: "Rather than silencing his conscience, Macbeth's violent attempts to suppress his guilt turn his private paranoia into state-sponsored terror, shattering trust across the kingdom.",
          },
          {
            angle: "The Breakdown of Social Ritual & Feudal Order",
            focus: "The banquet scene (3.4) as the physical moment where private hallucinations destroy the supreme public ritual of kingship.",
            thesisStem: "Through the chaotic collapse of the royal banquet, both authors demonstrate how private moral guilt physically shatters the public ceremonies that keep society united.",
          },
        ],
        trapsToAvoid: [
          {
            trap: "The Disconnected Binary Trap",
            consequence: "Writing paragraph 1 about Macbeth's mind, and paragraph 2 about Scotland, without showing how one caused the other.",
            remedy: "Every topic sentence must link the internal psychic state directly to a specific public institutional breakdown.",
          },
          {
            trap: "Ignoring the Supernatural Reflection",
            consequence: "Treating horses eating horses or solar eclipses as random horror elements rather than symbolic projections of regicidal guilt.",
            remedy: "Explicitly frame Act 2 Scene 4 as an ecological allegory illustrating the violent rupture of the Great Chain of Being.",
          },
          {
            trap: "Overlooking Lady Macbeth's Delayed Breakdown",
            consequence: "Focusing only on Macbeth's kinetic violence and missing Lady Macbeth's latent psychological implosion in Act 5.",
            remedy: "Analyze Lady Macbeth's sleepwalking as the moral and psychological inversion of her husband's externalized tyranny.",
          },
        ],
      },
      criterionMastery: {
        criterionA: {
          focus: "Knowledge, Understanding & Textual Interpretation (10 Marks)",
          strategy:
            "Situate the breakdown in Jacobean political context: the Divine Right of Kings and the Great Chain of Being. Trace how moral disorder spreads from ruler to realm.",
          exemplarApplication:
            "Demonstrate how Macbeth's murder of Duncan destabilizes the entire nation, transforming Scotland from a peaceful kingdom into a bleeding, terrified battleground.",
        },
        criterionB: {
          focus: "Literary & Dramatic Technique Evaluation (10 Marks)",
          strategy:
            "Analyze animal metaphors ('scorpions', 'falcon and owl'), auditory hallucinations, and staging moments where courtly order breaks down.",
          exemplarApplication:
            "Evaluate Lady Macbeth's desperate line 'You have displaced the mirth, broke the good meeting' as the exact moment when royal authority collapses before the nobility.",
        },
        criterionC: {
          focus: "Coherent Argument Structure & Comparative Development (5 Marks)",
          strategy:
            "Organize the essay in a clear 3-step causal arc: 1) The initial internal crisis (1.3, 1.7), 2) The public unraveling of royal order (2.4, 3.4), and 3) The nation suffering under full-blown tyranny (4.3, 5.1).",
          exemplarApplication:
            "Maintain sustained synthesis by contrasting how both texts represent the physical space of societal degradation (e.g., Scotland's suffering vs. the wasteland of the comparative text).",
        },
        criterionD: {
          focus: "Academic Register & Precise Phrasing (5 Marks)",
          strategy:
            "Incorporate standard Level 7 literary terms: dramatic irony, soliloquy, metaphor, motif, Great Chain of Being, anagnorisis, and catharsis.",
          exemplarApplication:
            "Craft precise evaluative sentences that avoid colloquialisms like 'Macbeth goes crazy' in favor of 'Macbeth suffers progressive psychological unraveling'.",
        },
      },
    },
    bestQuotes: [
      {
        quote: "Why do I yield to that suggestion / Whose horrid image doth unfix my hair, / And make my seated heart knock at my ribs, / Against the use of nature?",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 3",
        lineRef: "1.3.134–137",
        literaryDevices: ["Somatic Imagery", "Rhetorical Questioning", "Psychomachia", "Personification"],
        analysis: "Before any crime is physically committed, the mere temptation of regicide shatters Macbeth's physical composure. His violent somatic reactions ('unfix my hair', 'knock at my ribs') demonstrate an intense moral conscience at war with seductive ambition.",
        paper2Utility: "Crucial starting point establishing Macbeth's profound initial internal conflict between duty and illicit desire.",
        whyMemorable: "The vivid physical sensations of hair standing on end and the heart hammering against the ribs make moral guilt instantly felt in the reader's own body.",
        sentenceFormula: "Shakespeare exposes the seismic genesis of internal conflict in Macbeth's visceral confession, '[Quote]', where the prospect of treason violently rebels against bodily nature.",
      },
      {
        quote: "Methought I heard a voice cry, 'Sleep no more! / Macbeth does murder sleep'—the innocent sleep, / Sleep that knits up the raveled sleave of care...",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 2",
        lineRef: "2.2.34–36",
        literaryDevices: ["Auditory Hallucination", "Metaphor ('knits up')", "Domestic Imagery", "Personification of Sleep"],
        analysis: "By murdering Duncan in his sleep, Macbeth strikes at the sacred sanctuary of nature. The imaginary voice permanently sentences him to insomnia, destroying the psychological rhythm that sustains human empathy and moral rationality.",
        paper2Utility: "Bridges internal psychological fracture with the breakdown of restorative natural order across the entire realm.",
        whyMemorable: "The haunting refrain 'Sleep no more! Macbeth does murder sleep' resonates with anyone who has ever suffered sleepless guilt.",
        sentenceFormula: "The rupture between individual transgression and natural harmony is immortalized in the hallucinatory proclamation, '[Quote]', which condemns the usurper to eternal psychic vigilance.",
      },
      {
        quote: "'Tis unnatural, / Even like the deed that's done. On Tuesday last, / A falcon, tow'ring in her pride of place, / Was by a mousing owl hawked at and killed.",
        speaker: "Old Man",
        actScene: "Act 2, Scene 4",
        lineRef: "2.4.10–13",
        literaryDevices: ["Avian Allegory", "Symbolism", "Cosmic Inversion", "Great Chain of Being"],
        analysis: "Shakespeare employs the Jacobean doctrine of correspondence: regicide in the political sphere causes immediate rebellion in the biological ecosystem. A low-flying, rodent-hunting owl killing a majestic royal falcon symbolizes the unnatural usurper destroying his rightful sovereign.",
        paper2Utility: "The definitive quote demonstrating how personal moral transgression unleashes catastrophic ecological and social disorder.",
        whyMemorable: "The shocking image of a mousing owl attacking and killing a high-flying noble falcon perfectly allegorizes an upside-down world.",
        sentenceFormula: "Shakespeare dramatizes the cosmic reverberations of regicide through the Old Man's avian allegory, '[Quote]', wherein ecological anomalies reflect the violent overthrow of divine order.",
      },
      {
        quote: "O, full of scorpions is my mind, dear wife! / Thou know'st that Banquo, and his Fleance, lives.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 2",
        lineRef: "3.2.36–37",
        literaryDevices: ["Zoomorphic Metaphor ('scorpions')", "Exclamation", "Sensory Imagery of Poison", "Apostrophe"],
        analysis: "The stinging scorpions represent obsessive, venomous paranoia and guilt eating away at Macbeth's cognitive coherence. Instead of repenting, his internal anguish drives him to commission the murder of his dearest comrade, widening the national fracture.",
        paper2Utility: "Depicts the internal torture that directly generates tyrannical domestic bloodshed and civil collapse.",
        whyMemorable: "The terrifying visual of a human mind crawling and stinging with venomous scorpions is unforgettable.",
        sentenceFormula: "The venomous internal torment driving autocratic state terror is captured in Macbeth's frantic outburst, '[Quote]', showing how paranoia compels continuous bloodshed.",
      },
      {
        quote: "You have displaced the mirth, broke the good meeting, / With most admired disorder.",
        speaker: "Lady Macbeth",
        actScene: "Act 3, Scene 4",
        lineRef: "3.4.108–109",
        literaryDevices: ["Antithesis", "Theatrical Staging", "Metaphor of Social Ritual", "Irony"],
        analysis: "Macbeth's terror at Banquo's ghost shatters the feudal banquet—the central Jacobean emblem of political unity, order, and community. The lords are dismissed without ceremony, symbolizing the complete disintegration of governance in Macbeth's Scotland.",
        paper2Utility: "Demonstrates the public collapse of political hierarchy directly caused by private psychic haunting.",
        whyMemorable: "The formal rebuke 'displaced the mirth, broke the good meeting' crystallizes the exact moment the royal facade publicly disintegrates before the nobility.",
        sentenceFormula: "Lady Macbeth's desperate reprimand, '[Quote]', confirms that private supernatural haunting has officially shattered the supreme ceremonial ritual of state governance.",
      },
      {
        quote: "Bleed, bleed, poor country! / Great tyranny, lay thou thy basis sure, / For goodness dare not check thee!",
        speaker: "Macduff",
        actScene: "Act 4, Scene 3",
        lineRef: "4.3.31–33",
        literaryDevices: ["Apostrophe to Scotland", "Personification of Nation", "Metaphor of Disease & Blood", "Exclamation"],
        analysis: "Macduff personifies Scotland as an open, bleeding wound suffering under an illegitimate butcher. The king's internal spiritual decay has transformed the kingdom into a suffering nation where grief is commonplace and goodness is paralyzed.",
        paper2Utility: "Use to show the ultimate culmination of the thesis: individual moral corruption directly transforms the commonwealth into a dying body.",
        whyMemorable: "The agonizing cry 'Bleed, bleed, poor country!' personifies an entire nation as a weeping, hemorrhaging human victim.",
        sentenceFormula: "The disastrous national consequence of Macbeth's tyranny is voiced in Macduff's lament, '[Quote]', which personifies the battered kingdom as a bleeding organism on the brink of death.",
      },
    ],
    sampleOutline: {
      thesis: "Shakespeare employs the Jacobean framework of the Great Chain of Being to demonstrate how Macbeth's internal guilt and unchecked ambition destabilize the human mind, tear apart the social fabric of Scotland, and plunge the natural world into chaos.",
      body1Focus: "The initial psychological fissure: Macbeth's visceral shock in Act 1 revealing an agonizing conflict between loyalty and dark ambition.",
      body2Focus: "Natural and ecological rebellion: The immediate aftermath of Duncan's murder disrupting daylight, animal behavior, and peaceful sleep.",
      body3Focus: "The social and political collapse: The shattered banquet protocol and the transformation of Scotland into a suffering realm under unchecked tyranny.",
      conclusionFocus: "Reflect on how moral harmony is restored: purging the tyrant to heal the kingdom and re-establish natural succession.",
    },
  },
  {
    id: "q4-setting-atmosphere",
    number: 4,
    title: "Setting and Atmosphere",
    question: "Analyse how dramatic choices regarding atmosphere, setting, or the supernatural influence the audience’s understanding of central themes.",
    quotePrompt: "“Atmosphere, setting, or the supernatural influence the audience’s understanding of central themes.”",
    directive: "Analyse how... influence understanding (evaluate lighting, acoustic stagecraft, topographical locations, weather, and metaphysical terror).",
    keywords: ["Atmosphere", "Setting", "Supernatural", "Audience Understanding", "Central Themes", "Stagecraft", "Nocturnal Darkness", "Weather"],
    themes: ["Supernatural Equivocation", "Darkness & Blindness", "Sanctuary vs. Slaughterhouse", "Ecosystem in Convulsion"],
    characters: ["The Weird Sisters", "Macbeth", "Lady Macbeth", "Duncan & Banquo", "The Apparitions", "The Porter"],
    keyEvents: [
      "The desolate, stormy heath opening (1.1, 1.3)",
      "Inverness Castle: welcoming exterior vs. murderous interior (1.6, 2.1)",
      "The starless, extinguished cosmos: 'husbandry in heaven' (2.1)",
      "The sonic terror of sudden knocking at the South gate (2.2, 2.3)",
      "The dark, claustrophobic royal palace at Forres (3.1, 3.4)",
      "The dark cavern, boiling cauldron, and demonic apparitions (4.1)",
      "The pastoral sanctuary of the English court with Edward the Confessor (4.3)",
      "The fortified stronghold of Dunsinane and the camouflaged Birnam Wood (5.2, 5.4, 5.5)",
    ],
    comparativeAngles: [
      "Contrast Shakespeare's symbolic theatrical spaces (heath, castle, cavern) with settings in modern novels.",
      "Analyze acoustic stagecraft (thunder, bells, knocking, shrieks) in generating psychological suspense.",
      "Examine how light/dark chiaroscuro externalizes moral and spiritual states.",
    ],
    deepDive: {
      notebookLm: {
        recommendedNotebookUrl: "https://notebooklm.google.com/",
        notebookName: "Macbeth Paper 2 Companion • Setting & Atmosphere Notebook",
        instructions: [
          "Open NotebookLM (https://notebooklm.google.com/) and build a new notebook titled 'Macbeth: Setting, Atmosphere & The Supernatural'.",
          "Upload primary scenes detailing stagecraft: Act 1 Scene 1 (Thunder and Lightning on the Heath), Act 1 Scene 4 (Stars hide your fires), Act 1 Scene 6 (Pleasant seat of Inverness), Act 2 Scene 1 (Husbandry in heaven), Act 2 Scene 2 (Knocking at the gate), and Act 4 Scene 1 (Cauldron in the dark cavern).",
          "Import the environmental, atmospheric, or architectural descriptions from your second literary work.",
          "Run NotebookLM queries to discover how acoustic motifs (thunder, bells, knocks) and chiaroscuro (light vs. shadow) evoke visceral physiological terror in an audience.",
        ],
        suggestedPrompts: [
          "How did Shakespeare recreate pitch darkness and supernatural dread on a sunlit afternoon stage at the Globe Theatre?",
          "Analyze the dramatic irony of Duncan praising Inverness Castle's air in Act 1 Scene 6 while murder is plotted inside.",
          "Evaluate how acoustic stagecraft (the offstage knocking in 2.2) shatters the temporal silence of regicide.",
          "Compare how topographical boundaries (e.g., wild heath vs. civilized castle) structure moral boundaries across both texts.",
        ],
      },
      narrowingStrategy: {
        broadPromptDiagnosis:
          "'Setting and atmosphere' is frequently answered with superficial stage descriptions (saying the play is 'dark and spooky'). To secure Level 7 marks, candidates must treat setting as an active dramatic force: how Shakespeare uses darkness, sudden sounds, and shifting locations not merely as background decoration, but to reflect moral corruption and heighten audience tension.",
        narrowingAngles: [
          {
            angle: "Light vs. Darkness & Moral Camouflage",
            focus: "Macbeth and Lady Macbeth calling upon darkness ('Stars, hide your fires', 'Come, thick night') to hide their crimes from heaven.",
            thesisStem: "Shakespeare employs the contrast between light and darkness not merely for atmospheric realism, but as a moral cover, illustrating how characters attempt to use nighttime obscurity to conceal their guilt from divine judgment.",
          },
          {
            angle: "Acoustic Stagecraft & The Sound of Guilt",
            focus: "The offstage knocking, screeching owls, tolling bells, and thunder startling the audience and reflecting guilty conscience.",
            thesisStem: "Through sudden sound effects—from thunderous knocking to eerie incantations—both authors pierce atmospheric silence to dramatize the inescapable panic of a guilty conscience.",
          },
          {
            angle: "Subverting Safe Spaces: Sanctuary into Slaughterhouse",
            focus: "The castles of Inverness and Fife subverted from symbols of noble hospitality and safety into traps of murder.",
            thesisStem: "By transforming castles—traditionally places of hospitality and sanctuary—into claustrophobic murder scenes, Shakespeare dramatizes the complete breakdown of social trust under tyrannical rule.",
          },
        ],
        trapsToAvoid: [
          {
            trap: "The Passive Backdrop Trap",
            consequence: "Treating setting as a passive stage painting rather than an active theatrical participant.",
            remedy: "Demonstrate how setting exerts physical pressure on characters—how the heath disorients, Inverness traps, and Birnam Wood literally moves.",
          },
          {
            trap: "Ignoring the Elizabethan / Jacobean Staging Context",
            consequence: "Forgetting that the Globe was an open-air theatre performed in broad daylight, meaning all 'darkness' had to be evoked linguistically.",
            remedy: "Explicitly credit Shakespeare's verbal description: characters carrying torches and describing extinguished stars to paint darkness with words.",
          },
          {
            trap: "Superficial Supernatural Listing",
            consequence: "Describing the witches' brew ingredients without analyzing how the cavern setting visually embodies national contamination.",
            remedy: "Connect the cauldron's subterranean setting directly to the poisoning of Scotland's body politic.",
          },
        ],
      },
      criterionMastery: {
        criterionA: {
          focus: "Knowledge, Understanding & Textual Exploration (10 Marks)",
          strategy:
            "Explore the symbolic meaning of darkness in Jacobean England: darkness as spiritual blindness and moral danger. Connect supernatural elements to King James I's beliefs.",
          exemplarApplication:
            "Analyze how Banquo's observation 'There's husbandry in heaven; their candles are all out' indicates moral desertion before Duncan's murder.",
        },
        criterionB: {
          focus: "Analysis of Dramatic Craft & Stage Atmosphere (10 Marks)",
          strategy:
            "Analyze descriptive dialogue, acoustic cues (alarum bells, knocking, thunder), and physical stagecraft (torches, cavern trapdoor).",
          exemplarApplication:
            "Evaluate the shocking impact of the knocking at the south gate: how the sudden noise breaks the eerie silence of the murder and shocks Macbeth out of his trance.",
        },
        criterionC: {
          focus: "Comparative Organisation & Atmospheric Progression (5 Marks)",
          strategy:
            "Structure comparisons across shared atmospheric stages: 1) Murky darkness and concealment, 2) Sudden sound disruptions and panic, and 3) Nature rising to cleanse the corrupted realm.",
          exemplarApplication:
            "Ensure transitions smoothly contrast theatrical auditory effects with descriptive prose details in the second work.",
        },
        criterionD: {
          focus: "Clear Literary Register & Technical Precision (5 Marks)",
          strategy:
            "Utilize precise Grade 12 literary terms: pathetic fallacy, light/dark contrast, dramatic irony, acoustic stagecraft, and sensory imagery.",
          exemplarApplication:
            "Articulate arguments through high-scoring sentence structures with embedded citations, demonstrating natural academic fluency.",
        },
      },
    },
    bestQuotes: [
      {
        quote: "Stars, hide your fires; / Let not light see my black and deep desires: / The eye wink at the hand; yet let that be / Which the eye fears, when it is done, to see.",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 4",
        lineRef: "1.4.50–53",
        literaryDevices: ["Apostrophe to the Cosmos", "Chiaroscuro (Light/Dark)", "Alliteration ('d')", "Rhyme"],
        analysis: "Macbeth commands the cosmos to extinguish its celestial torches so his regicidal thoughts remain shrouded in primordial darkness. The setting is transformed from an objective physical sky into a moral canvas hiding sin from divine scrutiny.",
        paper2Utility: "Foundational quote for establishing how setting and darkness are actively weaponized as moral camouflage by the protagonist.",
        whyMemorable: "The fierce, hushed imperative 'Stars, hide your fires' instantly conveys a soul desperate for total darkness.",
        sentenceFormula: "Macbeth's desperate invocation of atmospheric blackout, '[Quote]', transforms the physical cosmos into an accomplice in moral concealment.",
      },
      {
        quote: "This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses.",
        speaker: "King Duncan",
        actScene: "Act 1, Scene 6",
        lineRef: "1.6.1–3",
        literaryDevices: ["Sensory Imagery", "Dramatic Irony", "Topographical Contrast", "Pastoral Register"],
        analysis: "Duncan arrives outside Inverness Castle and praises its gentle, fragrant atmosphere, observing holy martlet nests. The audience experiences acute suspense knowing the interior has already been dedicated to demonic spirits and slaughter.",
        paper2Utility: "Crucial for demonstrating how Shakespeare manipulates setting to create heart-wrenching dramatic irony between benign exterior and lethal interior.",
        whyMemorable: "Duncan praising the sweet, gentle air of the very castle where his throat will be cut that night is the play's most poignant irony.",
        sentenceFormula: "Shakespeare heightens tragic irony through Duncan's serene appreciation of the castle setting, '[Quote]', juxtaposing pastoral innocence with impending butchery.",
      },
      {
        quote: "There's husbandry in heaven; / Their candles are all out. Take thee that too. / A heavy summons lies like lead upon me, / And yet I would not sleep...",
        speaker: "Banquo",
        actScene: "Act 2, Scene 1",
        lineRef: "2.1.4–7",
        literaryDevices: ["Celestial Metaphor ('candles')", "Simile ('like lead')", "Proleptic Darkness", "Atmospheric Oppression"],
        analysis: "Banquo notes that heaven has turned off its lights ('candles') for economy. The total absence of starlight establishes an oppressive, claustrophobic nocturnal setting immediately preceding Duncan's murder, reflecting a spiritually deserted universe.",
        paper2Utility: "Exemplifies how Shakespeare uses dialogue to construct nocturnal darkness on the sunlit Globe stage, signaling moral desolation.",
        whyMemorable: "The domestic, thrifty metaphor of heaven practicing 'husbandry' by blowing out its candles makes the pitch-black sky feel chillingly personal.",
        sentenceFormula: "Banquo's verbal scenography, '[Quote]', visually establishes a starless, godless atmosphere on the open-air stage, presaging moral collapse.",
      },
      {
        quote: "Whence is that knocking? / How is't with me, when every noise appalls me? / What hands are here? Ha! They pluck out mine eyes.",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 2",
        lineRef: "2.2.56–58",
        literaryDevices: ["Acoustic Stagecraft", "Staccato Rhetorical Questions", "Biblical Allusion", "Sensory Hyperesthesia"],
        analysis: "The sudden, thunderous offstage knocking at the castle gates shatters the guilty silence of the murder. The acoustic interruption functions as both real visitors arriving and the metaphysical hammer of justice knocking on the gates of Hell.",
        paper2Utility: "The premier example of acoustic stagecraft and auditory atmosphere terrifying both character and audience.",
        whyMemorable: "The panic-stricken staccato questions erupting as heavy wooden knocking booms through the theater make the heart race.",
        sentenceFormula: "The silent claustrophobia of regicide is shattered by acoustic stagecraft as Macbeth recoils in horror, '[Quote]', somaticizing the intrusive arrival of retribution.",
      },
      {
        quote: "Round about the cauldron go; / In the poisoned entrails throw... / Double, double toil and trouble; / Fire burn, and cauldron bubble.",
        speaker: "The Three Witches",
        actScene: "Act 4, Scene 1",
        lineRef: "4.1.4–11",
        literaryDevices: ["Trochaic Tetrameter", "Ritual Incantation", "Grotesque Somatic Catalog", "Auditory Cacophony"],
        analysis: "Descending into the subterranean cavern, the witches brew a grotesque culinary concoction of unbaptized infants, pagan corpses, and venomous creatures. The boiling cauldron physically embodies the metaphysical corruption simmering within the poisoned Scottish state.",
        paper2Utility: "Essential for analyzing how demonic ritual settings visually and sonically materialize moral contamination.",
        whyMemorable: "The hypnotic nursery-rhyme rhythm of 'Double, double toil and trouble' is the most iconic incantation in English literature.",
        sentenceFormula: "The subterranean cavern setting becomes an emblem of moral contagion through the witches' rhythmic incantation, '[Quote]', sonically brewing the state's ruin.",
      },
      {
        quote: "Let every soldier hew him down a bough / And bear't before him: thereby shall we shadow / The numbers of our host and make discovery / Err in report of us.",
        speaker: "Malcolm",
        actScene: "Act 5, Scene 4",
        lineRef: "5.4.4–7",
        literaryDevices: ["Military Staging", "Topographical Shift", "Literalization of Prophecy", "Camouflage Motif"],
        analysis: "Malcolm orders his army to camouflage themselves using branches from Birnam Wood. In an astonishing theatrical coup, the setting itself appears to physically uproot and march against Dunsinane Castle, fulfilling the supernatural prophecy in a rational military maneuver.",
        paper2Utility: "Demonstrates how setting transforms from a static background into a dynamic, moving protagonist that crushes the tyrant.",
        whyMemorable: "The brilliant strategic twist where an entire forest literally uproots and marches across the battlefield.",
        sentenceFormula: "In an extraordinary dramatic transformation, setting evolves into an active military weapon as Malcolm commands, '[Quote]', literalizing supernatural prophecy to restore cosmic order.",
      },
    ],
    sampleOutline: {
      thesis: "Shakespeare orchestrates thunderous acoustic shocks, nocturnal gloom, and demonic cavernous rituals not merely as sensational background decoration, but as active theatrical agents that externalize the internal corruption of the protagonists and immerse the audience in a morally disoriented Jacobean cosmos.",
      body1Focus: "The nocturnal heath and celestial blackout: Extinguishing heaven's candles to signal the retreat of divine grace and moral legibility.",
      body2Focus: "Topographical duplicity: The ironic pastoral facade of Inverness juxtaposed with the visceral sonic terror of the South Gate knocking.",
      body3Focus: "The supernatural cavern and the moving forest: Cauldron rituals embodying spiritual pollution, culminating in the setting itself marching to execute justice.",
      conclusionFocus: "Synthesize how the Globe theater's acoustic and atmospheric conventions allow Shakespeare to make the setting an omnipresent moral witness to the tragedy.",
    },
  },
];
