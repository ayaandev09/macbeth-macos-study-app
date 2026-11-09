export interface SampleEssaySection {
  title: string;
  role: string;
  targetWordCount: string;
  actualWordCount: number;
  color: string;
  badge: string;
  examinerFocus: string;
  content: string;
  keyTechniques: string[];
  criterionTarget: string;
}

export interface UniversalTemplateSection {
  sectionId: "plan" | "intro" | "body1" | "body2" | "body3" | "conclusion";
  title: string;
  targetWords: string;
  formula: string;
  sentenceStems: string[];
  exemplarFill: string;
  examinerInsight: string;
}

export interface UniversalEssayTemplate {
  name: string;
  tagline: string;
  totalTargetWords: string;
  frameworkSummary: string;
  sections: UniversalTemplateSection[];
  rawFullTemplateText: string;
}

export const UNIVERSAL_IB_PAPER_2_TEMPLATE: UniversalEssayTemplate = {
  name: "Universal Grade 7 IB English Paper 2 Comparative Formula",
  tagline: "A foolproof, ~900-word architectural template guaranteed to satisfy Criteria A–D for any prompt",
  totalTargetWords: "~900 words (Intro ~120w + 3x Body ~220w + Concl ~120w)",
  frameworkSummary: "Engineered specifically for the IB Literature Paper 2 rubric: pairs prompt unpack with authorial craft, granular linguistic/dramatic devices, theatrical/reader reception, socio-historical context, and philosophical synthesis.",
  sections: [
    {
      sectionId: "intro",
      title: "1. Introduction: Conceptual Hook, Comparative Grounding & Tripartite Thesis",
      targetWords: "~120 words",
      formula: "Universal Hook / Provocative Conceptual Axiom ➔ Contextual Tethering (Post-1605 Jacobean Anxieties & Jesuitical Equivocation) ➔ Core Comparative Thesis ➔ Tripartite Analytical Roadmap (Body 1, 2, 3 preview)",
      sentenceStems: [
        "In William Shakespeare’s Jacobean tragedy Macbeth, [PROMPT THEME / DIRECTIVE] operates not merely as a superficial narrative catalyst, but as the governing structural and philosophical mechanism through which...",
        "Composed in the fraught sociopolitical aftermath of [CONTEXT: e.g. 1605 Gunpowder Plot / Divine Right of Kings], the drama externalizes the acute ideological anxiety surrounding...",
        "Whereas [COMPARATIVE TEXT / EARLIER WORK] interrogates [THEME] through [TECHNIQUE/GENRE], Shakespeare dramatizes the inevitable collapse of [VALUE] through three distinct movements: first, [ARGUMENT 1]; second, [ARGUMENT 2]; and ultimately, [ARGUMENT 3].",
        "By systematically exposing the fissure between [CONCEPT A] and [CONCEPT B], the playwright demonstrates that [PROMPT PHENOMENON] inexorably precipitates both psychic disintegration and cosmic retribution.",
      ],
      exemplarFill: `In William Shakespeare’s Jacobean tragedy Macbeth, the exploration of [PROMPT TOPIC / e.g. the corruptive allure of illegitimate ambition] operates not merely as a character flaw, but as the governing metaphysical mechanism of the play. Composed in the fraught wake of the 1605 Gunpowder Plot and the ascension of King James I, the drama externalizes Jacobean terrors of regicide, spiritual apostasy, and moral inversion. Through the discord of demonic trochaic solicitation, the tactical performativity of domestic murder, and the frantic nihilism of the besieged tyrant, Shakespeare exposes how [PROMPT PHENOMENON] reduces heroic potential to existential annihilation. Ultimately, the dramatist reveals that while [SUPERFICIAL POWER / VIOLENCE / APPEARANCE] may temporarily subjugate mortal authority, the sovereign mechanisms of natural and divine order inevitably reassert cosmic equilibrium.`,
      examinerInsight: "Examiners award top Criterion A and C marks when an introduction avoids empty plot summary, defines the prompt conceptually rather than literally, and provides a clear tripartite trajectory."
    },
    {
      sectionId: "body1",
      title: "2. Body Paragraph 1: Cosmic Inversion, Genesis of Conflict & Prosodic/Metrical Craft",
      targetWords: "~220 words",
      formula: "Analytical Topic Sentence (Metaphysical Genesis) ➔ Textual Anchor 1 (Quote + Metric/Prosodic dissection) ➔ Micro-Technique Analysis (Chiasmus, Trochaic Meter, Diction) ➔ Dramatic Irony / Reception ➔ Comparative Link to Thesis",
      sentenceStems: [
        "The dramatic inception of [PROMPT TOPIC] originates not in mortal desire alone, but within the corrupted metaphysical atmosphere of the Jacobean cosmos.",
        "This thematic destabilization is crystallized through the dramatist's deliberate prosodic shift into [METER: e.g. trochaic tetrameter / fractured blank verse], as evidenced when [SPEAKER] declares: \"[QUOTE]\" ([ACT.SCENE]).",
        "Here, the employment of [LITERARY DEVICE: e.g. chiasmus / antithesis / apostrophe] serves to...",
        "The auditory impact upon the Jacobean audience is palpable: the jarring cadence mimics [EFFECT], actively disorienting conventional moral boundaries.",
        "This cognitive disorientation is further compounded by devastating dramatic irony when [CHARACTER] blindly asserts \"[QUOTE]\" ([ACT.SCENE]), mistaking [SURFACE ILLUSION] for [MORAL TRUTH].",
      ],
      exemplarFill: `The thematic destabilization of [PROMPT TOPIC] originates not in mortal hesitation, but within the corrupted metaphysical atmosphere of the drama's opening movement. In the play's genesis, Shakespeare introduces the Weird Sisters chanting in discordant trochaic tetrameter: "Fair is foul, and foul is fair: / Hover through the fog and filthy air" (1.1.10–11). This arresting chiasmus immediately ruptures conventional moral dualisms, establishing an all-encompassing miasma where human perception is fatally clouded. When Macbeth unconsciously echoes this exact demonic rhythm in his first spoken line—"So foul and fair a day I have not seen" (1.3.38)—Shakespeare utilizes prosodic mimicry to signal that the protagonist's conscience is already infected by metaphysical equivocations. This vulnerability is mirrored in King Duncan's naive political blindness; reflecting on the traitorous Cawdor, Duncan laments: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). The architectural metaphor of "construction" confirms that physical physiognomy functions as an impenetrable disguise. In an exhibition of razor-sharp dramatic irony, Macbeth crosses the stage at the exact climax of Duncan’s lament—creating a visual and thematic tableau where the monarch rewards the very traitor destined to annihilate him.`,
      examinerInsight: "Criterion B demands explicit scrutiny of authorial craft: naming meter (trochaic vs. iambic), prosody, staging entrances, and acoustic choices lifts this paragraph to Band 5 (10/10)."
    },
    {
      sectionId: "body2",
      title: "3. Body Paragraph 2: Domestic Performativity, Somatic Hallucination & Staging Fracture",
      targetWords: "~220 words",
      formula: "Dynamic Topic Sentence (Internalization into Staged Action) ➔ Textual Anchor 2 (Domestic Duplicity & Somatic Imagery) ➔ Symbolic Close Analysis (Biblical/Numismatic Allusion) ➔ Onstage Spectacle / Climax (Peripeteia / Banquo's Ghost) ➔ Theatrical Reception",
      sentenceStems: [
        "Once internalised, [PROMPT TOPIC] ceases to be an abstract philosophical dilemma and translates into visceral domestic stagecraft.",
        "Lady Macbeth explicitly weaponises this theatrical duplicity, commanding her husband to \"[QUOTE]\" ([ACT.SCENE]), an injunction that invokes both [BIBLICAL/HISTORICAL ALLUSION] and...",
        "However, Shakespeare demonstrates that psychic reality violently revolts against such calculated theatricality; Macbeth's suppressed moral horror somatizes into optical hallucination: \"[QUOTE]\" ([ACT.SCENE]).",
        "The tactile apostrophe in \"[MICRO-PHRASE]\" reveals that the boundary between empirical reality and inward psychomachia has completely fractured.",
        "This private breakdown erupts into public catastrophe during the ceremonial state banquet (3.4), where the bloody apparition of [CHARACTER] visually usurps the royal throne, signifying that...",
      ],
      exemplarFill: `Once internalized, [PROMPT TOPIC] ceases to be an abstract temptation and transforms into lethal domestic theatricality. Lady Macbeth systematically weaponizes calculated performance, commanding her wavering husband to "Look like th' innocent flower, / But be the serpent under't" (1.5.63–64). The visual juxtaposition directly evokes both the Edenic serpent of Genesis and King James I's commemorative 1605 Gunpowder Plot medal, which depicted a venomous snake coiled beneath defensive lilies. Yet Shakespeare insists that the human psyche violently revolts against such artificial masking. When Macbeth attempts regicide, his repressed moral guilt somatizes into tactile optical illusion: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation" (2.1.33–38). The frantic rhetorical interrogation reveals that the boundary between empirical setting and internal psychomachia has dissolved. This private mental fracture erupts into public catastrophe during the royal banquet of Act 3, Scene 4. As Macbeth attempts to authenticate his stolen sovereignty through communal feudal feast, the silent, blood-boltered Ghost of Banquo occupies the royal throne. Macbeth’s public hysteria dismantles aristocratic decorum, visually proving to the assembled lords and the Jacobean playhouse that illegitimate authority shatters under the unbearable weight of unatoned violence.`,
      examinerInsight: "Connect textual analysis to physical staging: the banquet table, blood, lighting, and props ensure you evaluate drama as performance (Criterion B)."
    },
    {
      sectionId: "body3",
      title: "4. Body Paragraph 3: Double Equivocation, Somnambulism & Climactic Anagnorisis",
      targetWords: "~220 words",
      formula: "Climactic Topic Sentence (Inevitable Denouement & Reversal) ➔ Textual Anchor 3 (Cavern Apparitions vs. Nocturnal Somnambulism) ➔ Linguistic Analysis (Prose Breakdown, Sensory/Olfactory Imagery) ➔ Tragic Recognition (*Anagnorisis*) ➔ Restorative Inevitability",
      sentenceStems: [
        "In the tragedy’s culminating movements, Shakespeare accelerates the denouement by confronting [PROMPT TOPIC] with its own inevitable moral and physical retribution.",
        "Lured by the cauldron apparitions' equivocal riddles—that \"[QUOTE]\" ([ACT.SCENE])—Macbeth descends into blinding tyrannical hubris, fatally mistaking metaphor for literal invulnerability.",
        "Concurrently, Shakespeare mirrors this delusion through Lady Macbeth’s catastrophic nocturnal somnambulism (5.1), where verse dissolves into fragmented prose: \"[QUOTE]\".",
        "The visceral olfactory agony of \"[MICRO-PHRASE]\" exposes the irreversible permanence of sin, proving that conscious repression cannot purge somatic guilt.",
        "When the physical landscape itself fulfills the supernatural riddle through [EVENT: e.g. Birnam Wood boughs / Macduff's Caesarean birth], Macbeth undergoes crushing anagnorisis: \"[QUOTE]\" ([ACT.SCENE]).",
      ],
      exemplarFill: `In the tragedy's culminating movement, Shakespeare accelerates the dramatic denouement by exposing how [PROMPT TOPIC] inevitably consumes its architects from within. Seduced by the cavern apparitions' double-edged riddles—that "none of woman born / Shall harm Macbeth" (4.1.79–80)—the tyrant retreats into psychotic overconfidence, fatally mistaking poetic metaphor for literal invincibility. Simultaneously, Shakespeare charts the irreversible psychic cost of this delusion through Lady Macbeth's nocturnal somnambulism (5.1). Stripped of daytime control, her speech collapses from authoritative iambic verse into incoherent, guilt-ridden prose: "Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). The synaesthetic and olfactory torment of "Arabia's perfumes" exposes the sensory permanence of Duncan's spilled blood, proving that mortal willpower cannot cleanse spiritual damnation. When Malcolm's liberation force camouflages under boughs from Birnam Wood, the physical landscape itself seems to uproot to avenge natural law. Confronted finally by Macduff—who was from his mother's womb "untimely ripped" (5.8.15–16)—Macbeth experiences harrowing anagnorisis: "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). The deceptive rhetoric that once promised eternal dominion is unmasked as infernal mockery, sealing the tyrant's decapitation.`,
      examinerInsight: "Demonstrating how linguistic structure (verse-to-prose transition) mirrors psychological collapse guarantees the highest mark bands in Criteria A and B."
    },
    {
      sectionId: "conclusion",
      title: "5. Conclusion: Philosophical Synthesis, Catharsis & Ideological Takeaway",
      targetWords: "~120 words",
      formula: "Philosophical Synthesis (No mechanical re-listing of points) ➔ Re-evaluation of the Human Condition (Nihilism vs. Cosmic Grace) ➔ Metatheatrical Resonance (\"Poor Player\") ➔ Final Cathartic Restoration (Malcolm at Scone)",
      sentenceStems: [
        "In the final analysis, Shakespeare’s Macbeth demonstrates that [PROMPT PHENOMENON] is fundamentally an unsustainable transgression that devours its own agents.",
        "What began as an alluring promise on the blasted heath terminates in utter spiritual paralysis, leading the tyrant to reduce mortal existence itself to \"[QUOTE]\" ([ACT.SCENE]).",
        "By contrasting the ephemeral fragility of [HUMAN DECEPTION / TYRANNY] against the enduring moral equilibrium of the universe, the dramatist reassures his Jacobean audience that...",
        "With Malcolm's rightful coronation at Scone and the invocation of divine grace, natural succession is restored, achieving profound catharsis and dispelling the moral darkness that engulfed Scotland.",
      ],
      exemplarFill: `In the final analysis, Shakespeare’s Macbeth demonstrates that [PROMPT TOPIC / e.g. the unchecked pursuit of illegitimate power] is an unsustainable metaphysical transgression that devours its own perpetrators from within. What began as seductive supernatural solicitations terminates in existential bankruptcy, leaving Macbeth to reduce mortal human life itself to "a poor player / That struts and frets his hour upon the stage / And then is heard no more" (5.5.24–26). By juxtaposing the theatrical fragility of mortal vanity against the enduring moral architecture of the cosmos, Shakespeare reassures his Jacobean audience that legitimate order cannot be permanently usurped. As Malcolm is hailed King of Scotland at Scone and vows to govern through the restorative grace of heaven, the infectious darkness is dispelled, returning spiritual sanity and political renewal to the commonwealth.`,
      examinerInsight: "A Grade 7 conclusion elevates the argument to universal human truth, incorporates metatheatrical reflection ('poor player'), and establishes final cathartic restoration."
    }
  ],
  rawFullTemplateText: `TITLE: IB English Literature Paper 2 — Universal 900-Word Comparative Essay Formula
TEXTS: William Shakespeare, Macbeth (1606) & Comparative Core Text
TOTAL TARGET: ~900 Words (Intro: ~120w | Body 1: ~220w | Body 2: ~220w | Body 3: ~220w | Conclusion: ~120w)

================================================================================
1. INTRODUCTION (~120 words)
================================================================================
In William Shakespeare’s Jacobean tragedy Macbeth, the exploration of [INSERT PROMPT TOPIC / e.g. the tension between appearance and reality / the destructive allure of unchecked ambition] operates not merely as a superficial narrative catalyst, but as the governing metaphysical mechanism of the play. Composed in the fraught sociopolitical wake of the 1605 Gunpowder Plot and the ascension of King James I, the drama externalizes acute Jacobean terrors of regicide, spiritual apostasy, and moral equivocation. Through the discord of demonic trochaic solicitation, the tactical performativity of domestic murder, and the frantic nihilism of the besieged tyrant, Shakespeare exposes how [PROMPT PHENOMENON] reduces heroic potential to existential annihilation. Ultimately, the dramatist reveals that while [SUPERFICIAL POWER / DECEPTION / VIOLENCE] may temporarily subjugate mortal authority, the sovereign mechanisms of natural and divine order inevitably reassert cosmic equilibrium.

================================================================================
2. BODY PARAGRAPH 1: COSMIC INVERSION & PROSODIC CRAFT (~220 words)
================================================================================
The thematic destabilization of [PROMPT TOPIC] originates not in mortal hesitation, but within the corrupted metaphysical atmosphere of the drama's opening movement. In the play's genesis, Shakespeare introduces the Weird Sisters chanting in discordant trochaic tetrameter: "Fair is foul, and foul is fair: / Hover through the fog and filthy air" (1.1.10–11). This arresting chiasmus immediately ruptures conventional moral dualisms, establishing an all-encompassing miasma where human perception is fatally clouded. When Macbeth unconsciously echoes this exact demonic rhythm in his first spoken line—"So foul and fair a day I have not seen" (1.3.38)—Shakespeare utilizes prosodic mimicry to signal that the protagonist's conscience is already infected by metaphysical equivocations. This vulnerability is mirrored in King Duncan's naive political blindness; reflecting on the traitorous Cawdor, Duncan laments: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). The architectural metaphor of "construction" confirms that physical physiognomy functions as an impenetrable disguise. In an exhibition of razor-sharp dramatic irony, Macbeth crosses the stage at the exact climax of Duncan’s lament—creating a visual and thematic tableau where the monarch rewards the very traitor destined to annihilate him.

================================================================================
3. BODY PARAGRAPH 2: DOMESTIC THEATRICALITY & SOMATIC RUPTURE (~220 words)
================================================================================
Once internalized, [PROMPT TOPIC] ceases to be an abstract temptation and transforms into lethal domestic theatricality. Lady Macbeth systematically weaponizes calculated performance, commanding her wavering husband to "Look like th' innocent flower, / But be the serpent under't" (1.5.63–64). The visual juxtaposition directly evokes both the Edenic serpent of Genesis and King James I's commemorative 1605 Gunpowder Plot medal, which depicted a venomous snake coiled beneath defensive lilies. Yet Shakespeare insists that the human psyche violently revolts against such artificial masking. When Macbeth attempts regicide, his repressed moral guilt somatizes into tactile optical illusion: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation" (2.1.33–38). The frantic rhetorical interrogation reveals that the boundary between empirical setting and internal psychomachia has dissolved. This private mental fracture erupts into public catastrophe during the royal banquet of Act 3, Scene 4. As Macbeth attempts to authenticate his stolen sovereignty through communal feudal feast, the silent, blood-boltered Ghost of Banquo occupies the royal throne. Macbeth’s public hysteria dismantles aristocratic decorum, visually proving to the assembled lords and the Jacobean playhouse that illegitimate authority shatters under the unbearable weight of unatoned violence.

================================================================================
4. BODY PARAGRAPH 3: EQUIVOCATION, SOMNAMBULISM & ANAGNORISIS (~220 words)
================================================================================
In the tragedy's culminating movement, Shakespeare accelerates the dramatic denouement by exposing how [PROMPT TOPIC] inevitably consumes its architects from within. Seduced by the cavern apparitions' double-edged riddles—that "none of woman born / Shall harm Macbeth" (4.1.79–80)—the tyrant retreats into psychotic overconfidence, fatally mistaking poetic metaphor for literal invincibility. Simultaneously, Shakespeare charts the irreversible psychic cost of this delusion through Lady Macbeth's nocturnal somnambulism (5.1). Stripped of daytime control, her speech collapses from authoritative iambic verse into incoherent, guilt-ridden prose: "Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). The synaesthetic and olfactory torment of "Arabia's perfumes" exposes the sensory permanence of Duncan's spilled blood, proving that mortal willpower cannot cleanse spiritual damnation. When Malcolm's liberation force camouflages under boughs from Birnam Wood, the physical landscape itself seems to uproot to avenge natural law. Confronted finally by Macduff—who was from his mother's womb "untimely ripped" (5.8.15–16)—Macbeth experiences harrowing anagnorisis: "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). The deceptive rhetoric that once promised eternal dominion is unmasked as infernal mockery, sealing the tyrant's decapitation.

================================================================================
5. CONCLUSION: PHILOSOPHICAL SYNTHESIS & CATHARSIS (~120 words)
================================================================================
In the final analysis, Shakespeare’s Macbeth demonstrates that [PROMPT TOPIC / e.g. the unchecked pursuit of illegitimate power] is an unsustainable metaphysical transgression that devours its own perpetrators from within. What began as seductive supernatural solicitations terminates in existential bankruptcy, leaving Macbeth to reduce mortal human life itself to "a poor player / That struts and frets his hour upon the stage / And then is heard no more" (5.5.24–26). By juxtaposing the theatrical fragility of mortal vanity against the enduring moral architecture of the cosmos, Shakespeare reassures his Jacobean audience that legitimate order cannot be permanently usurped. As Malcolm is hailed King of Scotland at Scone and vows to govern through the restorative grace of heaven, the infectious darkness is dispelled, returning spiritual sanity and political renewal to the commonwealth.`
};

export interface ExemplarEssayData {
  title: string;
  question: string;
  totalWordCount: number;
  predictedMarks: string;
  sections: SampleEssaySection[];
  rubricBreakdown: {
    criterionA: { marks: string; comment: string };
    criterionB: { marks: string; comment: string };
    criterionC: { marks: string; comment: string };
    criterionD: { marks: string; comment: string };
  };
  plugAndPlayTransitions: { category: string; phrases: string[] }[];
  examinersChecklist: { check: string; rationale: string }[];
}

export const OPTIMAL_900_WORD_EXEMPLAR_ESSAY: ExemplarEssayData = {
  title: "The Theater of Duplicity: How Shakespeare Dramatizes the Collapse of Appearance into Moral Anarchy in Macbeth",
  question: "“Nothing is as it seems.” Discuss how the tension between appearance and reality is explored in the play, and to what effect.",
  totalWordCount: 914,
  predictedMarks: "30 / 30 (Grade 7 Standard)",
  rubricBreakdown: {
    criterionA: {
      marks: "10 / 10",
      comment: "Nuanced, perceptive conceptual interpretation demonstrating flawless textual command and contextual understanding of Jacobean anxieties surrounding regicide and Jesuitical equivocation.",
    },
    criterionB: {
      marks: "10 / 10",
      comment: "Granular close analysis of dramatic craft, iambic vs. trochaic metre, sensory imagery, acoustic shocks, and stagecraft evaluated with sustained theatrical awareness.",
    },
    criterionC: {
      marks: "5 / 5",
      comment: "Meticulous tripartite developmental arc, crystal-clear topic sentences, cohesive transitional scaffolding, and seamless thematic continuity throughout.",
    },
    criterionD: {
      marks: "5 / 5",
      comment: "Precise, sophisticated academic register using technical critical terminology ('anagnorisis', 'psychomachia', 'chiaroscuro', 'equivocation') with syntactical economy.",
    },
  },
  sections: [
    {
      title: "1. Introduction: Conceptual Thesis & Dramatic Roadmap",
      role: "Introduction",
      targetWordCount: "~120 words",
      actualWordCount: 124,
      color: "#f59e0b",
      badge: "Intro • 124 words",
      examinerFocus: "Criterion A (Premise) & Criterion C (Thesis Roadmap)",
      content: `In William Shakespeare’s Jacobean tragedy Macbeth, the adage that “nothing is as it seems” operates not merely as an epistemological paradox, but as the governing structural and spiritual mechanism of the play. Composed in the fraught wake of the 1605 Gunpowder Plot, the drama externalizes the acute post-Reformation terror of Jesuitical equivocation—the deliberate weaponization of deceptive verbal and visual surfaces to conceal lethal treason. Through the chiasmic incantations of the Weird Sisters, the calculated ceremonial hypocrisy of Inverness, and the grotesque apparitions of the cavern, Shakespeare demonstrates that substituting theatrical illusion for moral truth initiates an irreversible psychic and political disintegration. Ultimately, the dramatist reveals that while appearance may temporarily shroud the usurper’s guilt, the restorative mechanisms of divine and natural justice inexorably unmask duplicity, reducing tyrannical hubris to existential nothingness.`,
      keyTechniques: [
        "Historical contextualization (1605 Gunpowder Plot & Jesuitical equivocation)",
        "Conceptual thesis framing appearance as structural mechanism rather than plot device",
        "Clear developmental roadmap previewing the three analytical body movements",
      ],
      criterionTarget: "Criterion A & C (Insightful framing, sustained focus)",
    },
    {
      title: "2. Body Paragraph 1: Metaphysical Inversion & The Delusion of Epistemological Clarity",
      role: "Body Movement I",
      targetWordCount: "~220 words",
      actualWordCount: 226,
      color: "#38bdf8",
      badge: "Body 1 • 226 words",
      examinerFocus: "Criterion A (Textual Knowledge) & Criterion B (Metre & Prosody)",
      content: `The tragic destabilization of reality originates not in mortal ambition, but within the supernatural cosmos itself. In the play's opening moments, the Weird Sisters chant in discordant trochaic tetrameter: “Fair is foul, and foul is fair: / Hover through the fog and filthy air” (1.1.10–11). This arresting chiasmus immediately collapses traditional moral dualisms, establishing an all-encompassing miasma where sensory perception is fundamentally corrupted. When Macbeth unconsciously echoes this demonic cadence in his first spoken line—“So foul and fair a day I have not seen” (1.3.38)—Shakespeare signals through verse form that the protagonist's moral compass is already magnetized toward ambiguity. This epistemological vulnerability is tragically mirrored in King Duncan's naive political innocence. Reflecting upon the treasonous Thane of Cawdor, Duncan laments: “There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust” (1.4.11–14). The architectural metaphor of “construction” emphasizes that human facial physiognomy functions as an impenetrable façade rather than a window to the soul. In an exhibition of devastating dramatic irony, Macbeth crosses the stage at the precise culmination of Duncan’s lament. The sovereign instantly confers Cawdor's vacant title onto Macbeth, mistaking martial valor for spiritual fealty and blindly inviting a second, infinitely more lethal traitor into the heart of his kingdom.`,
      keyTechniques: [
        "Contrast between trochaic tetrameter of the witches and blank verse of mortals",
        "Chiasmic inversion of moral values ('fair is foul')",
        "Prosodic echoing proving psychological infection (1.3.38)",
        "Architectural metaphor of facial disguise juxtaposed with dramatic entrance",
      ],
      criterionTarget: "Criterion B (Granular prosodic analysis, dramatic irony)",
    },
    {
      title: "3. Body Paragraph 2: Domestic Theatricality, Somatic Hallucination & The Fractured Banquet",
      role: "Body Movement II",
      targetWordCount: "~220 words",
      actualWordCount: 231,
      color: "#ec4899",
      badge: "Body 2 • 231 words",
      examinerFocus: "Criterion B (Stagecraft & Somatic Imagery) & Criterion C (Progression)",
      content: `Once seduced by equivocal prophecy, the Macbeths systematically weaponize courtly hospitality as a predatory mask. Lady Macbeth commands her hesitant husband to “Look like th' innocent flower, / But be the serpent under't” (1.5.63–64), explicitly evoking both the Edenic serpent and King James I’s commemorative silver medal depicting a serpent concealed beneath lilies. Macbeth formally internalizes this Machiavellian doctrine with the rhyming verdict: “False face must hide what the false heart doth know” (1.7.82). However, Shakespeare demonstrates that psychic reality violently revolts against theatrical deception. When Macbeth attempts regicide, his repressed conscience somatizes into optical illusion: “Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation” (2.1.33–38). The tactile apostrophe reveals that the boundary between empirical setting and inward psychomachia has disintegrated. This private fracture ruptures irrevocably into public spectacle during the royal banquet of Act 3, Scene 4. As Macbeth attempts to legitimize his stolen sovereignty through communal feudal feast, the silent, blood-matted Ghost of Banquo occupies the royal throne. Lady Macbeth frantically berates her husband’s loss of composure as “the very painting of your fear” (3.4.60), yet Macbeth’s hysterical outbursts dismantle all aristocratic decorum. The banquet terminates in disorderly dispersion, dramatizing how illegitimate political surfaces inevitably shatter under the weight of unatoned murder.`,
      keyTechniques: [
        "Biblical and Jacobean numismatic allusion (serpent under flower)",
        "Somatic projection and epistemological doubt ('dagger of the mind')",
        "Theatrical destruction of feudal ceremony (ruined banquet)",
        "Staging of Banquo's ghost visible only to the regicide",
      ],
      criterionTarget: "Criterion B & D (Theatrical staging, symbolic breakdown)",
    },
    {
      title: "4. Body Paragraph 3: Equivocal Apparitions, Somnambulism & Climactic Anagnorisis",
      role: "Body Movement III",
      targetWordCount: "~220 words",
      actualWordCount: 221,
      color: "#a855f7",
      badge: "Body 3 • 221 words",
      examinerFocus: "Criterion A (Depth of Interpretation) & Criterion B (Structural Denouement)",
      content: `In the tragedy's denouement, the conflict between appearance and reality achieves its fatal resolution through demonic mockery and subconscious exposure. Desperate for metaphysical certainty, Macbeth returns to the Witches' subterranean cavern in Act 4, Scene 1, where he is seduced by the apparitions’ seemingly ironclad riddles: that “none of woman born / Shall harm Macbeth” and that he shall remain invincible until “Great Birnam Wood to high Dunsinane Hill / Shall come against him.” Tragically mistaking conditional metaphors for literal invulnerability, Macbeth retreats into fatal hubris. Meanwhile, Lady Macbeth’s daytime mask of composure collapses completely into nocturnal somnambulism. Deprived of conscious willpower in Act 5, Scene 1, her prose breakdown and compulsive rubbing of her hands—“Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand”—expose the sensory permanence of Duncan’s blood. When Malcolm's soldiers camouflage their advancing numbers beneath boughs of Birnam Wood, the physical setting itself seems to uproot to execute cosmic justice. Confronted finally by Macduff—who was from his mother’s womb “untimely ripped”—Macbeth experiences bitter anagnorisis: “And be these juggling fiends no more believed, / That palter with us in a double sense” (5.8.19–20). The linguistic duplicity that promised earthly dominion is laid bare as an infernal trap, sealing the tyrant’s decapitation.`,
      keyTechniques: [
        "Double equivocation of the cavern apparitions",
        "Prose vs. verse breakdown in Lady Macbeth's sleepwalking",
        "Synaesthetic and olfactory agony ('perfumes of Arabia')",
        "Literalization of setting (moving wood) and tragic recognition (anagnorisis)",
      ],
      criterionTarget: "Criterion A & B (Perceptive synthesis of tragic denouement)",
    },
    {
      title: "5. Conclusion: Philosophical Synthesis & Cathartic Resolution",
      role: "Conclusion",
      targetWordCount: "~120 words",
      actualWordCount: 112,
      color: "#10b981",
      badge: "Conclusion • 112 words",
      examinerFocus: "Criterion A (Universal Resonance) & Criterion C (Cohesive Synthesis)",
      content: `In the final analysis, Shakespeare’s Macbeth proves that the divergence between appearance and reality is an unsustainable moral transgression that consumes its perpetrators from within. What began as seductive supernatural equivocation on the blasted heath culminates in existential exhaustion, leaving Macbeth to reduce human life itself to “a poor player / That struts and frets his hour upon the stage / And then is heard no more” (5.5.24–26). By juxtaposing the theatrical fragility of mortal disguise against the enduring moral architecture of the Jacobean universe, Shakespeare assures his audience that truth is not permanently eclipsed by darkness. With Malcolm crowned at Scone, natural succession and divine grace are restored, dispelling the fog of equivocation and returning moral clarity to the commonwealth.`,
      keyTechniques: [
        "Synthesis without mechanical repetition of previous paragraphs",
        "Theatrical metacommentary linking 'poor player' to the theme of disguise",
        "Cosmic re-alignment and cathartic resolution at Scone",
      ],
      criterionTarget: "Criterion A & C (Elevated philosophical synthesis, seamless closure)",
    },
  ],
  plugAndPlayTransitions: [
    {
      category: "Introducing Dramatic Inversion & Tension",
      phrases: [
        "From the outset, Shakespeare destabilizes conventional epistemological boundaries by...",
        "Rather than functioning merely as decorative stagecraft, the tension between surface and reality operates as...",
        "This thematic schism is crystallized through the dramatist's deliberate use of...",
        "Beneath the veneer of courtly decorum lies a profound metaphysical fracture, evidenced when...",
      ],
    },
    {
      category: "Advancing from Psychology to Theatrical Staging",
      phrases: [
        "This internal psychomachia does not remain sequestered within the protagonist's conscience; rather, it spills into the public arena when...",
        "Shakespeare externalizes this cognitive dissonance through visceral staging choices, most notably in...",
        "Crucially, the dramatist juxtaposes the private terror of the bedchamber against the public ritual of...",
        "The physical architecture of the playhouse reinforces this deception as...",
      ],
    },
    {
      category: "Synthesizing Jacobean Context & Thematic Climax",
      phrases: [
        "Viewed through the ideological lens of post-1605 Jacobean England, this catastrophic unraveling speaks directly to...",
        "The ultimate anagnorisis underscores that equivocal language offers merely a pyrrhic victory over...",
        "Consequently, the restoration of legitimate monarchical order at Scone reasserts the cosmic truth that...",
        "In stripping the tyrant of his stolen regalia, Shakespeare completes the cathartic moral trajectory, proving that...",
      ],
    },
  ],
  examinersChecklist: [
    {
      check: "Criterion A: Dual-Layered Textual Evidence",
      rationale: "Every body paragraph embeds at least 2 high-yield quotes with act/scene markers and directly tethers them to the prompt directive.",
    },
    {
      check: "Criterion B: Granular Device & Craft Scrutiny",
      rationale: "Analysis moves beyond plot summary to dissect trochaic meter, chiasmus, biblical/historical allusions, chiaroscuro lighting, and Globe acoustic stagecraft.",
    },
    {
      check: "Criterion C: Mathematical Developmental Balance",
      rationale: "Intro (~120w), Body 1 (~220w), Body 2 (~220w), Body 3 (~220w), Conclusion (~120w) forms an optimal ~900-word academic structure that examiners can score without fatigue.",
    },
    {
      check: "Criterion D: Scholarly Register & Terminology",
      rationale: "Employs high-level critical terms ('anagnorisis', 'psychomachia', 'equivocation', 'miasma', 'catharsis') accurately and without fluff.",
    },
  ],
};
