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
  mnemonic: string;
  mnemonicMeaning: string;
  totalTargetWords: string;
  frameworkSummary: string;
  cheatSheet: {
    step: string;
    mnemonicLetter: string;
    targetWords: string;
    role: string;
    coreRule: string;
    universalBracketFormula: string;
  }[];
  sections: UniversalTemplateSection[];
  rawFullTemplateText: string;
}

export const UNIVERSAL_IB_PAPER_2_TEMPLATE: UniversalEssayTemplate = {
  name: "Universal Grade 7 IB English Paper 2 Comparative Formula",
  tagline: "The C-O-R-E-S 5-Step System: Easy to memorize, works on any prompt, clear Level 7 language",
  mnemonic: "C-O-R-E-S",
  mnemonicMeaning: "Context & Thesis ➔ Origin & Craft ➔ Rupture & Staging ➔ Exposure & Climax ➔ Synthesis & Catharsis",
  totalTargetWords: "~900 words (Intro ~120w + 3x Body ~220w + Concl ~120w)",
  frameworkSummary: "A foolproof, 5-step universal structure designed for exam conditions. Fits every IB Paper 2 question (appearance vs reality, power, conflict, gender, guilt, setting). Clean, powerful, grounded academic language that satisfies Criteria A–D without convoluted jargon.",
  cheatSheet: [
    {
      step: "Step 1 (Intro)",
      mnemonicLetter: "C",
      targetWords: "~120w",
      role: "Context & Tripartite Thesis",
      coreRule: "Hook with author's purpose, ground in historical context, deliver a 3-part roadmap.",
      universalBracketFormula: "[Author] explores [Prompt Concept] in [Work] through [Authorial Technique] to demonstrate how [Human Truth/Message].",
    },
    {
      step: "Step 2 (Body 1)",
      mnemonicLetter: "O",
      targetWords: "~220w",
      role: "Origin & Authorial Craft",
      coreRule: "Analyze where the theme starts: meter, atmosphere, opening tone, and first key choice.",
      universalBracketFormula: "[Author] establishes [Prompt Concept] at the outset through [Technique/Form], showing that [Character/Society] begins by [Initial Action/Flaw].",
    },
    {
      step: "Step 3 (Body 2)",
      mnemonicLetter: "R",
      targetWords: "~220w",
      role: "Rupture & Visceral Staging",
      coreRule: "Escalate from internal thought to staged action: turning point, symbols, dramatic spectacle.",
      universalBracketFormula: "When [Prompt Concept] intensifies, [Author] shifts from inward conflict to dramatic spectacle, using [Visual Symbol/Staging] to expose [Psychological/Moral Rupture].",
    },
    {
      step: "Step 4 (Body 3)",
      mnemonicLetter: "E",
      targetWords: "~220w",
      role: "Exposure & Tragic Climax",
      coreRule: "Expose the consequences: unraveling of language (verse to prose), tragic recognition (anagnorisis).",
      universalBracketFormula: "In the climax, [Author] exposes the ultimate cost of [Prompt Concept] through [Structural Shift/Irony], culminating in [Character's] realization that [Universal Truth].",
    },
    {
      step: "Step 5 (Concl)",
      mnemonicLetter: "S",
      targetWords: "~120w",
      role: "Synthesis & Catharsis",
      coreRule: "Connect back to the human condition and restoration of moral balance. No simple re-listing.",
      universalBracketFormula: "Ultimately, [Author] uses [Play/Work] not merely to depict [Prompt Event], but to warn audiences that [Enduring Truth about Human Nature].",
    },
  ],
  sections: [
    {
      sectionId: "intro",
      title: "1. Introduction [C — Context & Thesis]: Hook, Historical Anchor & Tripartite Roadmap",
      targetWords: "~120 words",
      formula: "Conceptual Hook ➔ Historical Context Anchor ➔ Comparative Thesis ➔ 3-Part Roadmap (Body 1, 2, 3 preview)",
      sentenceStems: [
        "In William Shakespeare’s tragedy Macbeth, [PROMPT CONCEPT] is not merely a plot device, but the central mechanism through which the playwright examines [HUMAN TRUTH / MORAL DILEMMA].",
        "Written in the shadow of the 1605 Gunpowder Plot and the accession of King James I, the drama reflects acute Jacobean anxieties over [HISTORICAL ANXIETY: e.g. legitimate rule, treason, and the supernatural].",
        "While [COMPARATIVE TEXT/AUTHOR] addresses [PROMPT TOPIC] through [TECHNIQUE/GENRE], Shakespeare traces its destructive trajectory through three movements: first, [STAGE 1: origin/instigation]; second, [STAGE 2: domestic and public escalation]; and finally, [STAGE 3: psychological collapse and retribution].",
        "Ultimately, Shakespeare demonstrates that [PROMPT ACTION / FLAW] offers only an illusion of control, leading inevitably to moral disintegration and social rupture.",
      ],
      exemplarFill: `In William Shakespeare’s tragedy Macbeth, the conflict between appearance and reality is not merely a plot device, but the central dramatic mechanism through which the playwright examines the destructive nature of unchecked ambition. Written in the shadow of the 1605 Gunpowder Plot and the accession of King James I, the drama reflects acute Jacobean anxieties over treason, equivocation, and divine order. Shakespeare traces this deception through three distinct stages: first, the supernatural poisoning of perception on the blasted heath; second, the domestic hypocrisy and psychological rupture inside Inverness and the banquet hall; and finally, the collapse of equivocal promises during the tyrant's downfall. Ultimately, Shakespeare demonstrates that masking violent ambition behind false surfaces provides only temporary control, inevitably precipitating psychological ruin and the restoration of natural order.`,
      examinerInsight: "Level 7 examiners reward introductions that define the prompt conceptually, ground it in historical context, and give a distinct 3-part roadmap without mechanical plot summary.",
    },
    {
      sectionId: "body1",
      title: "2. Body Paragraph 1 [O — Origin & Craft]: Establishing the Theme & Dramatic Techniques",
      targetWords: "~220 words",
      formula: "Analytical Topic Sentence ➔ Textual Quote 1 (Metric/Atmospheric choice) ➔ Close Word/Technique Analysis ➔ Dramatic Irony / Audience Reaction ➔ Link to Thesis",
      sentenceStems: [
        "Shakespeare establishes [PROMPT CONCEPT] at the very start of the drama, creating an atmosphere where [NORMAL ORDER / VALUES] are immediately destabilized.",
        "This distortion is heightened by the playwright's choice of [TECHNIQUE / METER: e.g. trochaic tetrameter / chiasmus], as the Weird Sisters chant: \"[QUOTE]\" ([ACT.SCENE]).",
        "The use of [LITERARY DEVICE: e.g. chiasmus / juxtaposition] in the line \"[MICRO-QUOTE]\" highlights how...",
        "When Macbeth echoes this language in his first line—\"[QUOTE]\" ([ACT.SCENE])—the audience immediately recognizes that [CHARACTER'S CONSCIENCE / MIND] has already been compromised.",
        "This vulnerability is deepened by dramatic irony when King Duncan arrives at Inverness and observes: \"[QUOTE]\" ([ACT.SCENE]), naively trusting the surface atmosphere of the castle while the audience knows that murder is being planned within.",
      ],
      exemplarFill: `Shakespeare establishes the theme of deceptive appearances at the very start of the drama, creating an atmosphere where moral boundaries are immediately destabilized. This distortion is announced through the Weird Sisters' chant in discordant trochaic tetrameter: "Fair is foul, and foul is fair: / Hover through the fog and filthy air" (1.1.10–11). The chiasmus overturns moral values, while the "fog" symbolizes the spiritual blindness that engulfs Scotland. When Macbeth echoes this demonic cadence in his opening line—"So foul and fair a day I have not seen" (1.3.38)—the audience recognizes that his mind is already attuned to supernatural equivocation. This vulnerability is deepened by dramatic irony when King Duncan reflects naively on the traitorous Thane of Cawdor: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). The architectural metaphor of "construction" emphasizes that a person's outer appearance is an impenetrable facade. At the exact moment Duncan finishes this lament, Macbeth enters the stage; the king embraces him with warmth, visually demonstrating to the Jacobean audience that trusting deceptive appearances invites fatal danger into the heart of the kingdom.`,
      examinerInsight: "Criterion B requires direct analysis of authorial craft: cite meter (trochaic vs. iambic), specific diction, and staging moments like entrances to hit the highest mark band.",
    },
    {
      sectionId: "body2",
      title: "3. Body Paragraph 2 [R — Rupture & Staging]: Escalation from Private Guilt to Public Spectacle",
      targetWords: "~220 words",
      formula: "Dynamic Topic Sentence (Escalation to action) ➔ Textual Quote 2 (Domestic mask / Command) ➔ Symbol / Imagery Analysis ➔ Turning Point Spectacle (Banquet / Hallucination) ➔ Theatrical Reception",
      sentenceStems: [
        "As the drama progresses, [PROMPT CONCEPT] shifts from internal contemplation into deliberate domestic deception and physical action.",
        "Lady Macbeth explicitly instructs her husband to weaponize false appearances, commanding him to: \"[QUOTE]\" ([ACT.SCENE]), an image that evokes [HISTORICAL/BIBLICAL ALLUSION].",
        "Yet Shakespeare insists that the human conscience cannot sustain such duplicity without breaking; Macbeth's private terror manifests as a hallucination: \"[QUOTE]\" ([ACT.SCENE]).",
        "The vivid sensory imagery in \"[MICRO-QUOTE]\" confirms that internal guilt is now overwhelming his perception of reality.",
        "This private psychological fracture erupts into public catastrophe during the royal banquet (3.4), where the entrance of [CHARACTER / GHOST] shatters courtly decorum and visually proves to the audience that...",
      ],
      exemplarFill: `As the drama progresses, the tension between appearance and reality shifts from private temptation into calculated domestic performance. Lady Macbeth explicitly instructs her husband to adopt a deceptive mask, commanding him to "Look like th' innocent flower, / But be the serpent under't" (1.5.63–64). This imagery evokes both the biblical serpent in Eden and King James I's commemorative 1605 Gunpowder Plot medal, warning that treachery hides beneath polite hospitality. Macbeth confirms this deceit by declaring: "False face must hide what the false heart doth know" (1.7.82). Yet Shakespeare demonstrates that the human conscience cannot sustain such duplicity without breaking. Before the murder, Macbeth's repressed guilt somatizes into an optical illusion: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation" (2.1.33–38). The rhetorical questioning reveals his inability to distinguish between physical reality and internal terror. This private psychological rupture turns into public disaster during the Act 3 banquet. As Macbeth attempts to project the image of a secure, generous monarch, the bloody Ghost of Banquo occupies the throne. Macbeth's terrified outbursts dismantle courtly decorum, proving to the assembled lords and the audience that illegitimate power built on deception inevitably collapses from within.`,
      examinerInsight: "Always connect language to physical staging: mention props, costumes, lighting, or the banquet table to show examiners you understand drama as a performed art.",
    },
    {
      sectionId: "body3",
      title: "4. Body Paragraph 3 [E — Exposure & Climax]: Breakdown of Language, Guilt & Tragic Recognition",
      targetWords: "~220 words",
      formula: "Climactic Topic Sentence (Inevitable retribution) ➔ Textual Quote 3 (Supernatural riddle vs. psychological collapse) ➔ Linguistic Analysis (Verse to prose / Sensory diction) ➔ Tragic Recognition (Anagnorisis) ➔ Moral Inevitability",
      sentenceStems: [
        "In the final movement of the play, Shakespeare accelerates the tragic denouement by exposing the ultimate futility of [PROMPT CONCEPT].",
        "Macbeth clings blindly to the cavern apparitions' equivocal prophecies—that \"[QUOTE]\" ([ACT.SCENE])—mistaking ambiguous words for absolute protection.",
        "In stark contrast to his bravado, Lady Macbeth's psychological breakdown in Act 5 Scene 1 strips away all composure, causing her speech to collapse from verse into disjointed prose: \"[QUOTE]\".",
        "The haunting olfactory detail in \"[MICRO-QUOTE]\" reveals that guilt has permanently poisoned her senses, showing that...",
        "When the prophecies unravel with Birnam Wood moving and Macduff revealing his birth, Macbeth experiences crushing tragic recognition (*anagnorisis*): \"[QUOTE]\" ([ACT.SCENE]), finally realizing that...",
      ],
      exemplarFill: `In the play's final movement, Shakespeare accelerates the tragic denouement by exposing the ultimate futility of deceptive ambition. Desperate for certainty, Macbeth clings blindly to the Witches' cavern prophecies—that "none of woman born / Shall harm Macbeth" (4.1.80)—mistaking equivocal riddles for absolute invulnerability. However, Shakespeare balances this hubris against Lady Macbeth's complete psychological collapse in Act 5, Scene 1. Deprived of conscious control, her regal verse deteriorates into fragmented, guilt-ridden prose: "Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). The olfactory imagery of "perfumes of Arabia" emphasizes that mortal willpower cannot wash away the sensory stain of regicide; her daytime facade is obliterated by subconscious truth. When Malcolm’s advancing army cuts branches from Birnam Wood for camouflage, the physical landscape itself seems to fulfill the supernatural prophecy. Confronted by Macduff—who was from his mother's womb "untimely ripped" (5.8.15–16)—Macbeth undergoes harrowing tragic recognition (*anagnorisis*): "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). The deceptive words that fueled his rise are unmasked as mockery, sealing the tyrant's death and ending his reign of terror.`,
      examinerInsight: "Highlighting how Shakespeare changes form—such as shifting Lady Macbeth from blank verse to prose—proves deep command of Criterion B and C.",
    },
    {
      sectionId: "conclusion",
      title: "5. Conclusion [S — Synthesis & Catharsis]: Universal Human Truth & Moral Restoration",
      targetWords: "~120 words",
      formula: "Philosophical Synthesis ➔ Universal Human Truth (Ambition / Guilt / Deception) ➔ Metatheatrical Reflection (\"Poor Player\") ➔ Final Restoration of Order & Catharsis",
      sentenceStems: [
        "Looking across the arc of the tragedy, Shakespeare’s Macbeth demonstrates that [PROMPT CONCEPT] is ultimately an unsustainable path that consumes those who practice it.",
        "Rather than delivering lasting authority or peace, [PROMPT ACTION] reduces human existence to spiritual emptiness, prompting Macbeth to lament that life is merely \"[QUOTE]\" ([ACT.SCENE]).",
        "By contrasting the short-lived triumphs of mortal ambition against the permanent laws of nature and morality, the play offers a timeless warning that...",
        "With Malcolm crowned at Scone and order restored to Scotland, Shakespeare leaves the audience with a profound sense of catharsis, confirming that truth and justice outlast the darkest deceptions.",
      ],
      exemplarFill: `Looking across the arc of the tragedy, Shakespeare’s Macbeth demonstrates that the pursuit of power through deceit is an unsustainable violation that consumes those who practice it. Rather than delivering lasting glory, Macbeth’s surrender to equivocation and false appearances leaves him in total spiritual exhaustion, lamenting that human life is merely "a poor player / That struts and frets his hour upon the stage / And then is heard no more" (5.5.24–26). By contrasting the brief theatricality of mortal ambition against the enduring order of the cosmos, Shakespeare provides a timeless warning to both Jacobean and modern audiences: deception cannot overturn moral truth. With Malcolm crowned at Scone and legitimate order restored to Scotland, the drama achieves true catharsis, confirming that clarity and justice will always dispel the fog of falsehood.`,
      examinerInsight: "A Grade 7 conclusion avoids repetitive summary by synthesizing authorial message, metatheatrical reflection, and the final restoration of order.",
    },
  ],
  rawFullTemplateText: `================================================================================
IB ENGLISH LITERATURE PAPER 2: THE UNIVERSAL "C-O-R-E-S" ESSAY TEMPLATE
Target Length: ~900 Words (Intro: ~120w | Body 1: ~220w | Body 2: ~220w | Body 3: ~220w | Concl: ~120w)
Works for ANY prompt: Appearance vs Reality, Power & Ambition, Guilt, Gender, Conflict, Setting
================================================================================

[MEMORY ANCHOR: THE C-O-R-E-S FORMULA (Memorize in 2 Minutes)]
  • C — Context & Thesis (Intro ~120w): Hook + 1605 Jacobean Context + 3-Part Roadmap
  • O — Origin & Craft (Body 1 ~220w): Where the theme begins + Meter/Atmosphere + Early Irony
  • R — Rupture & Staging (Body 2 ~220w): Domestic masking + Somatic Hallucination + Banquet Climax
  • E — Exposure & Climax (Body 3 ~220w): Cavern Prophecies + Sleepwalking Prose + Anagnorisis
  • S — Synthesis & Catharsis (Concl ~120w): "Poor Player" Metatheater + Restoration of Order

--------------------------------------------------------------------------------
1. INTRODUCTION: [C — CONTEXT & THESIS] (~120 words)
--------------------------------------------------------------------------------
[HOOK & PURPOSE]
In William Shakespeare’s tragedy Macbeth, the exploration of [INSERT PROMPT TOPIC: e.g. the conflict between appearance and reality / the destructive allure of unchecked ambition] is not merely a plot device, but the central dramatic mechanism through which the playwright examines [INSERT THEMATIC TRUTH: e.g. how moral compromise destroys the human conscience].

[HISTORICAL CONTEXT ANCHOR]
Written in the shadow of the 1605 Gunpowder Plot and the accession of King James I, the drama reflects acute Jacobean anxieties over [INSERT CONTEXT: e.g. treason, equivocation, and the preservation of natural order].

[CORE COMPARATIVE THESIS & 3-PART ROADMAP]
While [COMPARATIVE TEXT/AUTHOR] explores [TOPIC] through [TECHNIQUE/GENRE], Shakespeare traces its destructive trajectory across three distinct movements:
  1. First, [ORIGIN: e.g. the supernatural subversion of moral values on the blasted heath];
  2. Second, [ESCALATION: e.g. the domestic hypocrisy and psychological rupture in Inverness and at the royal banquet];
  3. And finally, [RESOLUTION: e.g. the unmasking of equivocation and the tyrant's tragic recognition during the fall of Dunsinane].
Ultimately, Shakespeare shows that [INSERT OVERALL MESSAGE: e.g. illegitimate power built on deceit offers only the illusion of control before collapsing into spiritual ruin].

--------------------------------------------------------------------------------
2. BODY PARAGRAPH 1: [O — ORIGIN & CRAFT] (~220 words)
--------------------------------------------------------------------------------
[TOPIC SENTENCE: THEMATIC GENESIS]
Shakespeare establishes [PROMPT TOPIC] at the very start of the drama, creating a corrupted atmosphere where [NORMAL MORAL ORDER / REASON] is immediately destabilized.

[EVIDENCE 1 & LITERARY/METRICAL CRAFT]
This distortion is announced through the Weird Sisters' chant in discordant trochaic tetrameter: "Fair is foul, and foul is fair: / Hover through the fog and filthy air" (1.1.10–11). The chiasmic rhythm overturns moral dualisms, while the "fog" symbolizes the spiritual blindness that engulfs the realm.

[ANALYSIS OF EFFECT & CHARACTER CONSCIENCE]
When Macbeth echoes this demonic cadence in his opening line—"So foul and fair a day I have not seen" (1.3.38)—the audience recognizes through his rhythm and word choice that [PROMPT PHENOMENON] has already infected his mind.

[EVIDENCE 2 & DRAMATIC IRONY]
This vulnerability is deepened by dramatic irony when King Duncan arrives at Inverness and reflects on the previous traitor: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). The architectural metaphor of "construction" emphasizes that outer appearance is an impenetrable mask.

[THEATRICAL SYNTHESIS]
At the exact moment Duncan praises this surface innocence, Macbeth enters the stage; the monarch's warm embrace visually proves to the playhouse that trusting false exteriors invites fatal danger into the heart of the kingdom.

--------------------------------------------------------------------------------
3. BODY PARAGRAPH 2: [R — RUPTURE & STAGING] (~220 words)
--------------------------------------------------------------------------------
[TOPIC SENTENCE: ESCALATION TO VISCERAL ACTION]
As the drama progresses, [PROMPT TOPIC] shifts from internal temptation into deliberate domestic deception and staged action.

[EVIDENCE 1: DOMESTIC MASK & HISTORICAL/SYMBOLIC ALLUSION]
Lady Macbeth explicitly instructs her husband to weaponize false appearances, commanding him to "Look like th' innocent flower, / But be the serpent under't" (1.5.63–64). This visual contrast recalls both Genesis and King James I's 1605 Gunpowder Plot medal, warning that treason conceals itself beneath courtly hospitality. Macbeth formalizes this pact: "False face must hide what the false heart doth know" (1.7.82).

[EVIDENCE 2: HALLUCINATION & INNER GUILT]
Yet Shakespeare insists that the human conscience cannot sustain such calculated duplicity. When Macbeth moves to commit regicide, his suppressed horror manifests as a physical hallucination: "Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation" (2.1.33–38). The frantic rhetorical questions reveal that his grip on reality has begun to fracture under the weight of moral guilt.

[SPECTACLE CLIMAX: BANQUET & THEATRICAL AUDIENCE EFFECT]
This private breakdown explodes into public spectacle during the Act 3, Scene 4 banquet. As Macbeth tries to project the image of a secure, legitimate king, the bloody Ghost of Banquo occupies the vacant throne. Macbeth’s public terror shatters feudal decorum, proving to the assembled nobles and the Jacobean audience that authority built on [VIOLENCE/DECEIT] is fragile and self-destructive.

--------------------------------------------------------------------------------
4. BODY PARAGRAPH 3: [E — EXPOSURE & CLIMAX] (~220 words)
--------------------------------------------------------------------------------
[TOPIC SENTENCE: THE INEVITABLE UNRAVELING]
In the play's climactic movement, Shakespeare accelerates the tragic denouement by exposing the ultimate futility and cost of [PROMPT TOPIC].

[EVIDENCE 1: DOUBLE EQUIVOCATION & TYRANNICAL BLINDNESS]
Lured by the cavern apparitions' double-edged riddles—that "none of woman born / Shall harm Macbeth" (4.1.80)—the protagonist falls into fatal overconfidence, mistaking poetic ambiguities for literal safety.

[EVIDENCE 2: FORM BREAKDOWN — LADY MACBETH'S PROSE SLEEPWALKING]
Shakespeare contrasts this tyrannical pride with Lady Macbeth’s complete collapse in Act 5, Scene 1. Her speech disintegrates from aristocratic blank verse into fragmented prose: "Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). The olfactory imagery reveals that conscious repression cannot cleanse spiritual guilt; her daytime facade has been wiped out by subconscious truth.

[EVIDENCE 3: ANAGNORISIS & RETRIBUTION]
When Malcolm's army camouflages with Birnam Wood and Macduff reveals his Caesarean birth, Macbeth undergoes harrowing tragic recognition (*anagnorisis*): "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). The rhetoric that promised invincibility is unmasked as infernal deceit, sealing the tyrant's death.

--------------------------------------------------------------------------------
5. CONCLUSION: [S — SYNTHESIS & CATHARSIS] (~120 words)
--------------------------------------------------------------------------------
[PHILOSOPHICAL RE-STATEMENT]
Looking across the whole arc of the play, Shakespeare’s Macbeth demonstrates that [PROMPT TOPIC: e.g. the unchecked pursuit of power through deceit] is an unsustainable path that inevitably devours its own perpetrators.

[METATHEATRICAL RESONANCE]
Rather than providing enduring triumph, Macbeth’s ambition terminates in total emotional exhaustion, reducing mortal human life to "a poor player / That struts and frets his hour upon the stage / And then is heard no more" (5.5.24–26).

[FINAL RESTORATION & CATHARSIS]
By contrasting the fleeting theatricality of mortal deception against the permanent order of the universe, Shakespeare reassures both Jacobean and modern audiences that justice cannot be permanently eclipsed. As Malcolm is crowned King at Scone through the grace of heaven, the infectious disorder is dispelled, returning moral sanity and renewal to the realm.`
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
  title: "The Mask of Loyalty: How Shakespeare Dramatizes Deception and Moral Collapse in Macbeth",
  question: "“Nothing is as it seems.” Discuss how the tension between appearance and reality is explored in the play, and to what effect.",
  totalWordCount: 914,
  predictedMarks: "30 / 30 (Grade 7 Standard)",
  rubricBreakdown: {
    criterionA: {
      marks: "10 / 10",
      comment: "Perceptive and nuanced interpretation. Demonstrates deep understanding of Jacobean context—specifically the Gunpowder Plot and the danger of equivocation—with tightly chosen textual evidence.",
    },
    criterionB: {
      marks: "10 / 10",
      comment: "Superb analysis of dramatic craft. Closely evaluates trochaic meter versus blank verse, sensory imagery, staging choices, and dramatic irony with constant theatrical awareness.",
    },
    criterionC: {
      marks: "5 / 5",
      comment: "Clear tripartite structure with strong topic sentences, seamless transitions, and a purposeful thematic progression that never slips into mere plot summary.",
    },
    criterionD: {
      marks: "5 / 5",
      comment: "Clear, fluent, and precise Grade 12 academic register. Integrates literary terms ('dramatic irony', 'equivocation', 'soliloquy', 'anagnorisis') purposefully and without pretension.",
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
      content: `In William Shakespeare’s Jacobean tragedy Macbeth, the idea that “nothing is as it seems” is not just a clever plot device—it is the central dramatic engine driving the entire play. Written in the tense aftermath of the 1605 Gunpowder Plot, the play taps directly into Jacobean fears of treason and equivocation, where deceptive words and innocent faces concealed deadly plots against the Crown. Through the rhythmic riddles of the Weird Sisters, the calculated hypocrisy within Inverness, and the deceptive apparitions in the cavern, Shakespeare shows that replacing moral truth with performance leads to total psychological and social collapse. Ultimately, the play demonstrates that while false appearances can briefly hide a usurper’s guilt, truth inevitably surfaces, punishing tyrannical ambition and restoring natural order.`,
      keyTechniques: [
        "Historical context (1605 Gunpowder Plot & Jacobean fear of equivocation)",
        "Conceptual thesis framing appearance vs. reality as the play's driving dramatic engine",
        "Clear 3-part roadmap establishing the essay's analytical progression",
      ],
      criterionTarget: "Criterion A & C (Insightful framing, sustained focus)",
    },
    {
      title: "2. Body Paragraph 1: Supernatural Inversion & Duncan's Fatal Blindness",
      role: "Body Movement I",
      targetWordCount: "~220 words",
      actualWordCount: 226,
      color: "#38bdf8",
      badge: "Body 1 • 226 words",
      examinerFocus: "Criterion A (Textual Knowledge) & Criterion B (Meter & Dramatic Irony)",
      content: `Shakespeare establishes that reality is inverted right from the start, placing this corruption within the supernatural atmosphere itself. In the opening scene, the Weird Sisters chant in eerie trochaic tetrameter: “Fair is foul, and foul is fair: / Hover through the fog and filthy air” (1.1.10–11). This chiasmus instantly overturns moral boundaries, using the "fog" to symbolize the moral confusion about to blind Scotland. When Macbeth echoes this demonic rhythm in his very first line—“So foul and fair a day I have not seen” (1.3.38)—Shakespeare uses meter to signal to the audience that Macbeth’s mind is already open to temptation. This vulnerability contrasts sharply with King Duncan’s naive trust in outward appearances. Speaking of the traitorous Thane of Cawdor, Duncan sighs: “There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust” (1.4.11–14). The architectural metaphor of “construction” emphasizes that a person's face can be an impenetrable disguise. In a brilliant stroke of dramatic irony, Macbeth steps onto the stage the moment Duncan finishes speaking. The king immediately greets him with open arms, mistaking military bravery for true loyalty. For the Jacobean audience, this staging delivers a chilling warning: trusting a smiling surface invites fatal betrayal into the very heart of the state.`,
      keyTechniques: [
        "Contrast between witches' trochaic tetrameter and human blank verse",
        "Chiasmus overturning moral values ('fair is foul')",
        "Verbal echo showing Macbeth's subconscious infection (1.3.38)",
        "Dramatic irony and visual staging as Duncan embraces the new traitor",
      ],
      criterionTarget: "Criterion B (Meter, dramatic irony, close verbal analysis)",
    },
    {
      title: "3. Body Paragraph 2: Domestic Disguise, Hallucination & The Ruined Banquet",
      role: "Body Movement II",
      targetWordCount: "~220 words",
      actualWordCount: 231,
      color: "#ec4899",
      badge: "Body 2 • 231 words",
      examinerFocus: "Criterion B (Stagecraft & Guilt Imagery) & Criterion C (Progression)",
      content: `Once tempted by prophecy, the Macbeths deliberately use hospitality as a weapon of deception. Lady Macbeth commands her husband to “Look like th' innocent flower, / But be the serpent under't” (1.5.63–64). This image directly evokes both the biblical serpent in Genesis and the silver medal struck by King James I after the Gunpowder Plot, warning that treason lurks beneath courtly manners. Macbeth embraces this duplicity in his rhyming couplet: “False face must hide what the false heart doth know” (1.7.82). Yet Shakespeare insists that the human conscience cannot maintain such a lie without cracking. Right before the murder, Macbeth’s intense guilt erupts into a physical hallucination: “Is this a dagger which I see before me, / The handle toward my hand?... A dagger of the mind, a false creation” (2.1.33–38). His rhetorical questions reveal his inability to separate physical reality from mental terror. This private breakdown turns into public disaster during the Act 3 banquet. As Macbeth tries to play the role of a gracious, legitimate monarch, the bloody Ghost of Banquo sits in his royal chair. Although Lady Macbeth frantically dismisses his panic as “the very painting of your fear” (3.4.60), Macbeth’s terrified outbursts destroy the formal ceremony. The banquet breaks up in chaos, visually proving to the audience that power built on deception and blood will inevitably collapse from within.`,
      keyTechniques: [
        "Biblical and Jacobean historical allusion (serpent beneath the flower)",
        "Rhyming couplet marking deliberate moral compromise (1.7.82)",
        "Hallucinatory dagger exposing the crack in Macbeth's psychological mask",
        "Visual stagecraft: Banquo's ghost shattering royal order at the banquet",
      ],
      criterionTarget: "Criterion B & D (Theatrical staging, symbolic breakdown)",
    },
    {
      title: "4. Body Paragraph 3: Deceptive Prophecies, Lady Macbeth's Breakdown & Anagnorisis",
      role: "Body Movement III",
      targetWordCount: "~220 words",
      actualWordCount: 221,
      color: "#a855f7",
      badge: "Body 3 • 221 words",
      examinerFocus: "Criterion A (Textual Interpretation) & Criterion B (Verse to Prose & Climax)",
      content: `In the play's climax, the tension between appearance and reality reaches its breaking point through demonic double meanings and unconscious guilt. Desperate for certainty, Macbeth visits the Witches’ cavern in Act 4, cling to their riddles: that “none of woman born / Shall harm Macbeth” and that he will never fall until Birnam Wood marches on Dunsinane. Mistaking ambiguous wordplay for absolute safety, Macbeth adopts a false, reckless confidence. In contrast, Lady Macbeth’s daytime mask of control is completely shattered in Act 5. Deprived of conscious willpower, her speech collapses from noble blank verse into broken, rambling prose: “Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand” (5.1.31–45). The olfactory imagery shows that no amount of denial can wash away the real stain of murder; her subconscious mind has forced the truth into the open. When Malcolm’s soldiers camouflage themselves with branches from Birnam Wood, the landscape itself appears to move, turning the witches' prophecy against the tyrant. Finally, when Macduff reveals that he was from his mother's womb “untimely ripped,” Macbeth suffers devastating tragic recognition (*anagnorisis*): “And be these juggling fiends no more believed, / That palter with us in a double sense” (5.8.19–20). The deceptive words that fueled his rise are unmasked as a cruel trap, sealing his defeat.`,
      keyTechniques: [
        "Double meaning and equivocation of the cavern apparitions",
        "Structural shift from verse to prose in Lady Macbeth's sleepwalking scene",
        "Sensory imagery of blood and perfume revealing permanent guilt",
        "Tragic recognition (anagnorisis) when Macbeth realizes he was misled",
      ],
      criterionTarget: "Criterion A & B (Perceptive synthesis of tragic denouement)",
    },
    {
      title: "5. Conclusion: Authorial Purpose, Metatheater & Moral Restoration",
      role: "Conclusion",
      targetWordCount: "~120 words",
      actualWordCount: 112,
      color: "#10b981",
      badge: "Conclusion • 112 words",
      examinerFocus: "Criterion A (Universal Resonance) & Criterion C (Cohesive Synthesis)",
      content: `Looking at the play as a complete theatrical journey, Shakespeare shows that living behind a mask of deceit is an unsustainable strategy that destroys the human spirit. What begins as tempting supernatural half-truths on the heath ends in complete emotional exhaustion. By the final act, Macbeth realizes that his bloody performance was meaningless, famously reducing human life to “a poor player / That struts and frets his hour upon the stage / And then is heard no more” (5.5.24–26). By contrasting this hollow theatrical disguise with the natural order of the universe, Shakespeare reassures both Jacobean and modern audiences that truth will outlast tyranny. With Malcolm crowned at Scone, legitimate succession returns to Scotland, lifting the fog of deceit and restoring moral clarity to the realm.`,
      keyTechniques: [
        "Synthesis of the central argument without repetitive summary",
        "Metatheatrical analysis connecting the 'poor player' quote to false performance",
        "Cathartic resolution and the restoration of natural order",
      ],
      criterionTarget: "Criterion A & C (Elevated synthesis, seamless closure)",
    },
  ],
  plugAndPlayTransitions: [
    {
      category: "Introducing Dramatic Contrast & Deception",
      phrases: [
        "From the opening scene, Shakespeare highlights the sharp contrast between surface and reality by...",
        "Rather than treating deception as mere backdrop, Shakespeare uses it as the central mechanism through which...",
        "This divide between appearance and truth becomes clear when...",
        "Beneath the polite facade of courtly hospitality lies a deadly plot, shown when...",
      ],
    },
    {
      category: "Moving from Internal Thought to Stage Action",
      phrases: [
        "This internal struggle does not remain hidden; it quickly spills into public view when...",
        "Shakespeare dramatizes this inner breakdown through vivid stagecraft, particularly in...",
        "Crucially, the playwright contrasts the private terror of the conspirators with the public ceremony of...",
        "The physical staging of the scene reinforces this hypocrisy because...",
      ],
    },
    {
      category: "Connecting Jacobean Context to the Play's Climax",
      phrases: [
        "In the context of the 1605 Gunpowder Plot, this unraveling would have reminded Jacobean audiences that...",
        "Macbeth's moment of tragic recognition (*anagnorisis*) exposes the fact that equivocation offers only...",
        "Ultimately, the crowning of Malcolm at Scone reasserts the natural moral order, demonstrating that...",
        "By stripping away the tyrant's stolen title, Shakespeare delivers a satisfying resolution, proving that...",
      ],
    },
  ],
  examinersChecklist: [
    {
      check: "Criterion A: High-Yield Textual Evidence with Context",
      rationale: "Every body paragraph embeds at least 2 key quotes with act/scene markers, clearly tethered to the prompt and the Jacobean worldview.",
    },
    {
      check: "Criterion B: Close Analysis of Dramatic Techniques",
      rationale: "Moves far beyond plot summary to analyze trochaic meter, chiasmus, historical allusions, stage entrances, and shifting verse into prose.",
    },
    {
      check: "Criterion C: Balanced Tripartite Structure",
      rationale: "Intro (~120w), Body 1 (~220w), Body 2 (~220w), Body 3 (~220w), Conclusion (~120w) forms an optimal ~900-word essay that flows logically without fatigue.",
    },
    {
      check: "Criterion D: Sharp, Natural Grade 12 Academic Voice",
      rationale: "Uses standard, high-scoring literary terms ('dramatic irony', 'soliloquy', 'equivocation', 'anagnorisis', 'meter') cleanly without dense, artificial jargon.",
    },
  ],
};
