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
  bestQuotes: {
    quote: string;
    speaker: string;
    actScene: string;
    lineRef: string;
    literaryDevices: string[];
    analysis: string;
    paper2Utility: string;
  }[];
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
          "Flawless academic vocabulary (e.g. 'hamartia', 'equivocation', 'psychomachia', 'prolepsis').",
          "Syntactic sophistication, varied clause structures, and concise prose.",
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
    bestQuotes: [
      {
        quote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.",
        speaker: "The Three Witches",
        actScene: "Act 1, Scene 1",
        lineRef: "1.1.10–11",
        literaryDevices: ["Chiasmus", "Paradox", "Atmospheric Prolepsis", "Trochaic Tetrameter"],
        analysis: "The trochaic rhythm immediately sets the witches apart from mortal blank verse. The chiasmus overturns the moral cosmos: virtues become vices, and physical sensory perception is permanently clouded by 'fog and filthy air'.",
        paper2Utility: "Crucial opening quote to demonstrate the metaphysical origins of deception; establishes that reality is inverted before mortal characters even speak.",
      },
      {
        quote: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust.",
        speaker: "King Duncan",
        actScene: "Act 1, Scene 4",
        lineRef: "1.4.11–14",
        literaryDevices: ["Dramatic Irony", "Architectural Metaphor ('construction')", "Foreshadowing"],
        analysis: "Duncan laments his inability to penetrate the outward countenance of the executed traitor Cawdor. In a staggering stroke of theatrical irony, Macbeth enters immediately upon this line, becoming the new Cawdor who will exploit this exact cognitive vulnerability.",
        paper2Utility: "Demonstrates that political tragedy stems from the epistemological impossibility of reading interior conscience through exterior physiognomy.",
      },
      {
        quote: "Look like th' innocent flower, / But be the serpent under't.",
        speaker: "Lady Macbeth",
        actScene: "Act 1, Scene 5",
        lineRef: "1.5.63–64",
        literaryDevices: ["Biblical Allusion (Genesis)", "Simile & Metaphor", "Visual Disguise Motif", "Imperative Mood"],
        analysis: "Lady Macbeth instructs her husband in Machiavellian political theater. The botanical imagery of the 'innocent flower' evokes idyllic feudal hospitality, while the 'serpent' invokes the demonic tempter of Eden and the 1605 Gunpowder Plot commemorative medal.",
        paper2Utility: "The definitive quote for calculated courtly deception and feminine political agency overriding martial frankness.",
      },
      {
        quote: "False face must hide what the false heart doth know.",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 7",
        lineRef: "1.7.82",
        literaryDevices: ["Alliteration ('f')", "Antithesis", "Rhyming Couplet", "Sartorial Masking"],
        analysis: "Concluding Act 1 with an emphatic rhyming couplet, Macbeth capitulates to regicide. The alliterative 'f' sounds emphasize the deliberate, mechanical split between external facial performance ('false face') and internal moral terror ('false heart').",
        paper2Utility: "Perfect structural quote marking the exact boundary where Macbeth surrenders authentic honor for theatrical duplicity.",
      },
      {
        quote: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain?",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 1",
        lineRef: "2.1.33–39",
        literaryDevices: ["Apostrophe", "Rhetorical Questioning", "Somatic Imagery", "Soliloquy"],
        analysis: "Shakespeare externalizes Macbeth's psychological breakdown as an air-drawn visual illusion. The epistemological hesitation ('I have thee not, and yet I see thee still') captures the blurring between objective reality and guilt-induced hallucination.",
        paper2Utility: "Use to evaluate how psychological guilt transforms sensory reality into terrifying optical hallucinations.",
      },
      {
        quote: "And be these juggling fiends no more believed, / That palter with us in a double sense, / That keep the word of promise to our ear, / And break it to our hope.",
        speaker: "Macbeth",
        actScene: "Act 5, Scene 8",
        lineRef: "5.8.19–22",
        literaryDevices: ["Anagnorisis", "Sibilance", "Equivocation Motifs", "Antithesis ('ear' vs. 'hope')"],
        analysis: "Macbeth's moment of tragic recognition (*anagnorisis*) strips away the linguistic mask of demonic prophecy. 'Palter in a double sense' indicts the Jesuitical equivocation that offered literal linguistic truth while delivering metaphysical damnation.",
        paper2Utility: "Essential for concluding an essay on the lethal consequences of trusting deceptive surfaces and verbal riddles.",
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
    bestQuotes: [
      {
        quote: "If it were done when 'tis done, then 'twere well / It were done quickly: if the assassination / Could trammel up the consequence, and catch / With his surcease success...",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 7",
        lineRef: "1.7.1–4",
        literaryDevices: ["Monosyllabic Diction", "Polyptoton ('done')", "Hypothetical Subjunctive", "Legal Imagery ('trammel')"],
        analysis: "Macbeth futilely wishes he could entangle and freeze the future consequences of murder like a fisherman's net ('trammel'). His syntactical repetition of 'done' betrays his subconscious awareness that human agency cannot control the temporal ripples of violent sin.",
        paper2Utility: "Demonstrates the initial intellectual attempt to exert absolute control over future destiny and its philosophical futility.",
      },
      {
        quote: "To be thus is nothing, / But to be safely thus. Our fears in Banquo / Stick deep, and in his royalty of nature / Reigns that which would be feared.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 1",
        lineRef: "3.1.48–51",
        literaryDevices: ["Aphoristic Opening", "Metaphor ('stick deep')", "Enjambment", "Royal Epithet"],
        analysis: "Achieving the throne brings zero psychological serenity. Macbeth realizes political control is meaningless without permanence, forcing him into a compulsive, escalating cycle of defensive murder against Banquo's virtuous moral authority.",
        paper2Utility: "The quintessential soliloquy demonstrating that tyrannical control is an insatiable paradox that intensifies paranoia.",
      },
      {
        quote: "Upon my head they placed a fruitless crown, / And put a barren sceptre in my gripe, / Thence to be wrenched with an unlineal hand, / No son of mine succeeding.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 1",
        lineRef: "3.1.61–64",
        literaryDevices: ["Sterility Imagery", "Sartorial/Regal Metaphor", "Violent Verb ('wrenched')", "Metonymy"],
        analysis: "The adjectives 'fruitless' and 'barren' expose Macbeth's existential horror of genealogical impotence. He feels he has damned his immortal soul merely to hold empty symbols of control that will be violently seized by another dynasty.",
        paper2Utility: "Exposes the ultimate limit of earthly control: the inability to govern biology, time, and legacy.",
      },
      {
        quote: "I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 4",
        lineRef: "3.4.135–137",
        literaryDevices: ["River Metaphor", "Sensory Imagery", "Cognitive Desensitization", "Caesura"],
        analysis: "Following the banquet breakdown, Macbeth conceptualizes violence as a literal crimson river. He recognizes he has lost moral agency: continuing to kill is emotionally easier ('less tedious') than repenting, signaling total surrender to tyrannical momentum.",
        paper2Utility: "Shows the psychological pivot where the actor surrenders control to the bloody momentum he originally unleashed.",
      },
      {
        quote: "Dispute it like a man. / I shall do so; / But I must also feel it as a man: / I cannot but remember such things were, / That were most precious to me.",
        speaker: "Malcolm & Macduff",
        actScene: "Act 4, Scene 3",
        lineRef: "4.3.220–223",
        literaryDevices: ["Stichomythia", "Philosophical Dialogue", "Emotional Juxtaposition", "Polyptoton ('man')"],
        analysis: "When Malcolm urges immediate militaristic retaliation, Macduff redefines genuine masculine control: authentic strength requires feeling human sorrow before translating grief into armed resistance against tyranny.",
        paper2Utility: "Crucial foil quote showing healthy emotional self-regulation and moral resistance contrasted with Macbeth's sociopathic suppression.",
      },
      {
        quote: "Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.",
        speaker: "Angus",
        actScene: "Act 5, Scene 2",
        lineRef: "5.2.20–22",
        literaryDevices: ["Simile", "Sartorial Imagery", "Antithesis ('giant' vs. 'dwarf')", "Moral Diminution"],
        analysis: "The Scottish thanes uniting in armed resistance describe Macbeth's complete loss of political and sovereign authority. The stolen royal garments do not confer majesty; they merely emphasize his dwarfish moral illegitimacy.",
        paper2Utility: "Demonstrates how illegitimate control shrinks the tyrant into insignificance while collective resistance restores legitimate order.",
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
    bestQuotes: [
      {
        quote: "Why do I yield to that suggestion / Whose horrid image doth unfix my hair, / And make my seated heart knock at my ribs, / Against the use of nature?",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 3",
        lineRef: "1.3.134–137",
        literaryDevices: ["Somatic Imagery", "Rhetorical Questioning", "Psychomachia", "Personification"],
        analysis: "Before any crime is physically committed, the mere temptation of regicide shatters Macbeth's physical composure. His violent somatic reactions ('unfix my hair', 'knock at my ribs') demonstrate an intense moral conscience at war with seductive ambition.",
        paper2Utility: "Crucial starting point establishing Macbeth's profound initial internal conflict between duty and illicit desire.",
      },
      {
        quote: "Methought I heard a voice cry, 'Sleep no more! / Macbeth does murder sleep'—the innocent sleep, / Sleep that knits up the raveled sleave of care...",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 2",
        lineRef: "2.2.34–36",
        literaryDevices: ["Auditory Hallucination", "Metaphor ('knits up')", "Domestic Imagery", "Personification of Sleep"],
        analysis: "By murdering Duncan in his sleep, Macbeth strikes at the sacred sanctuary of nature. The imaginary voice permanently sentences him to insomnia, destroying the psychological rhythm that sustains human empathy and moral rationality.",
        paper2Utility: "Bridges internal psychological fracture with the breakdown of restorative natural order across the entire realm.",
      },
      {
        quote: "'Tis unnatural, / Even like the deed that's done. On Tuesday last, / A falcon, tow'ring in her pride of place, / Was by a mousing owl hawked at and killed.",
        speaker: "Old Man",
        actScene: "Act 2, Scene 4",
        lineRef: "2.4.10–13",
        literaryDevices: ["Avian Allegory", "Symbolism", "Cosmic Inversion", "Great Chain of Being"],
        analysis: "Shakespeare employs the Jacobean doctrine of correspondence: regicide in the political sphere causes immediate rebellion in the biological ecosystem. A low-flying, rodent-hunting owl killing a majestic royal falcon symbolizes the unnatural usurper destroying his rightful sovereign.",
        paper2Utility: "The definitive quote demonstrating how personal moral transgression unleashes catastrophic ecological and social disorder.",
      },
      {
        quote: "O, full of scorpions is my mind, dear wife! / Thou know'st that Banquo, and his Fleance, lives.",
        speaker: "Macbeth",
        actScene: "Act 3, Scene 2",
        lineRef: "3.2.36–37",
        literaryDevices: ["Zoomorphic Metaphor ('scorpions')", "Exclamation", "Sensory Imagery of Poison", "Apostrophe"],
        analysis: "The stinging scorpions represent obsessive, venomous paranoia and guilt eating away at Macbeth's cognitive coherence. Instead of repenting, his internal anguish drives him to commission the murder of his dearest comrade, widening the national fracture.",
        paper2Utility: "Depicts the internal torture that directly generates tyrannical domestic bloodshed and civil collapse.",
      },
      {
        quote: "You have displaced the mirth, broke the good meeting, / With most admired disorder.",
        speaker: "Lady Macbeth",
        actScene: "Act 3, Scene 4",
        lineRef: "3.4.108–109",
        literaryDevices: ["Antithesis", "Theatrical Staging", "Metaphor of Social Ritual", "Irony"],
        analysis: "Macbeth's terror at Banquo's ghost shatters the feudal banquet—the central Jacobean emblem of political unity, order, and community. The lords are dismissed without ceremony, symbolizing the complete disintegration of governance in Macbeth's Scotland.",
        paper2Utility: "Demonstrates the public collapse of political hierarchy directly caused by private psychic haunting.",
      },
      {
        quote: "Bleed, bleed, poor country! / Great tyranny, lay thou thy basis sure, / For goodness dare not check thee!",
        speaker: "Macduff",
        actScene: "Act 4, Scene 3",
        lineRef: "4.3.31–33",
        literaryDevices: ["Apostrophe to Scotland", "Personification of Nation", "Somatization of State", "Exclamation"],
        analysis: "Macduff personifies Scotland as an open, bleeding wound suffering under an illegitimate butcher. The king's internal spiritual decay has transformed the kingdom into a necro-political wasteland where grief is commonplace and goodness is paralyzed.",
        paper2Utility: "Use to show the ultimate culmination of the thesis: individual moral corruption directly transforms the commonwealth into a dying body.",
      },
    ],
    sampleOutline: {
      thesis: "Shakespeare employs the Renaissance framework of the Great Chain of Being to demonstrate how Macbeth's internal psychomachia—his violent suppression of conscience in favor of vaulting ambition—serves as the seismic epicenter that destabilizes the human mind, tears apart the social fabric of Scotland, and convulses the natural world.",
      body1Focus: "The initial psychological fissure: Macbeth's somatic convulsions in Act 1 revealing an agonizing conflict between feudal fealty and dark ambition.",
      body2Focus: "Macrocosmic and ecological retaliation: The immediate aftermath of Duncan's murder fracturing nature, daylight, and peaceful restorative sleep.",
      body3Focus: "The social and political hemorrhaging: The shattered banquet protocol and the transformation of Scotland into a mass grave where tyranny reigns unchecked.",
      conclusionFocus: "Reflect on how moral harmony can only be restored through surgical catharsis: purging the corrupted individual to heal the body politic.",
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
    bestQuotes: [
      {
        quote: "Stars, hide your fires; / Let not light see my black and deep desires: / The eye wink at the hand; yet let that be / Which the eye fears, when it is done, to see.",
        speaker: "Macbeth",
        actScene: "Act 1, Scene 4",
        lineRef: "1.4.50–53",
        literaryDevices: ["Apostrophe to the Cosmos", "Chiaroscuro (Light/Dark)", "Alliteration ('d')", "Rhyme"],
        analysis: "Macbeth commands the cosmos to extinguish its celestial torches so his regicidal thoughts remain shrouded in primordial darkness. The setting is transformed from an objective physical sky into a moral canvas hiding sin from divine scrutiny.",
        paper2Utility: "Foundational quote for establishing how setting and darkness are actively weaponized as moral camouflage by the protagonist.",
      },
      {
        quote: "This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses.",
        speaker: "King Duncan",
        actScene: "Act 1, Scene 6",
        lineRef: "1.6.1–3",
        literaryDevices: ["Sensory Imagery", "Dramatic Irony", "Topographical Contrast", "Pastoral Register"],
        analysis: "Duncan arrives outside Inverness Castle and praises its gentle, fragrant atmosphere, observing holy martlet nests. The audience experiences acute suspense knowing the interior has already been dedicated to demonic spirits and slaughter.",
        paper2Utility: "Crucial for demonstrating how Shakespeare manipulates setting to create heart-wrenching dramatic irony between benign exterior and lethal interior.",
      },
      {
        quote: "There's husbandry in heaven; / Their candles are all out. Take thee that too. / A heavy summons lies like lead upon me, / And yet I would not sleep...",
        speaker: "Banquo",
        actScene: "Act 2, Scene 1",
        lineRef: "2.1.4–7",
        literaryDevices: ["Celestial Metaphor ('candles')", "Simile ('like lead')", "Proleptic Darkness", "Atmospheric Oppression"],
        analysis: "Banquo notes that heaven has turned off its lights ('candles') for economy. The total absence of starlight establishes an oppressive, claustrophobic nocturnal setting immediately preceding Duncan's murder, reflecting a spiritually deserted universe.",
        paper2Utility: "Exemplifies how Shakespeare uses dialogue to construct nocturnal darkness on the sunlit Globe stage, signaling moral desolation.",
      },
      {
        quote: "Whence is that knocking? / How is't with me, when every noise appalls me? / What hands are here? Ha! They pluck out mine eyes.",
        speaker: "Macbeth",
        actScene: "Act 2, Scene 2",
        lineRef: "2.2.56–58",
        literaryDevices: ["Acoustic Stagecraft", "Staccato Rhetorical Questions", "Biblical Allusion", "Sensory Hyperesthesia"],
        analysis: "The sudden, thunderous offstage knocking at the castle gates shatters the guilty silence of the murder. The acoustic interruption functions as both real visitors arriving and the metaphysical hammer of justice knocking on the gates of Hell.",
        paper2Utility: "The premier example of acoustic stagecraft and auditory atmosphere terrifying both character and audience.",
      },
      {
        quote: "Round about the cauldron go; / In the poisoned entrails throw... / Double, double toil and trouble; / Fire burn, and cauldron bubble.",
        speaker: "The Three Witches",
        actScene: "Act 4, Scene 1",
        lineRef: "4.1.4–11",
        literaryDevices: ["Trochaic Tetrameter", "Ritual Incantation", "Grotesque Somatic Catalog", "Auditory Cacophony"],
        analysis: "Descending into the subterranean cavern, the witches brew a grotesque culinary concoction of unbaptized infants, pagan corpses, and venomous creatures. The boiling cauldron physically embodies the metaphysical corruption simmering within the poisoned Scottish state.",
        paper2Utility: "Essential for analyzing how demonic ritual settings visually and sonically materialize moral contamination.",
      },
      {
        quote: "Let every soldier hew him down a bough / And bear't before him: thereby shall we shadow / The numbers of our host and make discovery / Err in report of us.",
        speaker: "Malcolm",
        actScene: "Act 5, Scene 4",
        lineRef: "5.4.4–7",
        literaryDevices: ["Military Staging", "Topographical Shift", "Literalization of Prophecy", "Camouflage Motif"],
        analysis: "Malcolm orders his army to camouflage themselves using branches from Birnam Wood. In an astonishing theatrical coup, the setting itself appears to physically uproot and march against Dunsinane Castle, fulfilling the supernatural prophecy in a rational military maneuver.",
        paper2Utility: "Demonstrates how setting transforms from a static background into a dynamic, moving protagonist that crushes the tyrant.",
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
