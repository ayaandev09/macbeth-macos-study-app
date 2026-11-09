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
  rubricAdvantages: {
    stem: string;
    advantage: string;
    criterion: string;
  }[];
  cheatSheet: {
    step: string;
    mnemonicLetter: string;
    targetWords: string;
    role: string;
    coreRule: string;
    universalBracketFormula: string;
    clickablePhrase: string;
  }[];
  sections: UniversalTemplateSection[];
  rawFullTemplateText: string;
}

export const UNIVERSAL_IB_PAPER_2_TEMPLATE: UniversalEssayTemplate = {
  name: "Funnel Intro + T.E.A.R. Body Paragraph Structure",
  tagline: "The #1 Rated Framework by Top-Scoring IB English SL/HL Students Worldwide",
  mnemonic: "Funnel + T.E.A.R.",
  mnemonicMeaning: "Topic Sentence ➔ Evidence with Context ➔ Analysis of Choices ➔ Response to Prompt",
  totalTargetWords: "~900 words (Intro ~100w + 3x Body ~230w + Concl ~110w)",
  frameworkSummary: "The most reliable framework used by top-scoring IB English SL students is the Funnel Intro + T.E.A.R. Body Paragraph structure. It prevents you from slipping into summary by forcing you to analyze Shakespeare's choices in every paragraph. Treat this like a mathematical formula. Memorize the bolded transitional phrases—these are your fill-in-the-blank anchors.",
  rubricAdvantages: [
    {
      stem: '"Shakespeare explores..." / "Shakespeare establishes..."',
      advantage: "By constantly using the author's name as the active subject of your sentences, you prove to the examiner you are analyzing authorial choices (IB Criterion B), not just retelling the story.",
      criterion: "Criterion B (Authorial Choices)",
    },
    {
      stem: '"Positions the audience to..."',
      advantage: "This hits the IB requirement to evaluate the effect on the reader/audience and maintains purposeful cohesion throughout your argument.",
      criterion: "Criterion B & C (Audience Effect & Structure)",
    },
    {
      stem: "Jacobean Context & Great Chain of Being",
      advantage: "Dropping references to the Jacobean audience or the Great Chain of Being easily secures points for contextual and cultural understanding.",
      criterion: "Criterion A (Context & Worldview)",
    },
  ],
  cheatSheet: [
    {
      step: "1. The Intro",
      mnemonicLetter: "Intro",
      targetWords: "~100w",
      role: "The Funnel Intro",
      coreRule: "Move quickly from broad theme to specific thesis; Jacobean backdrop; Macbeth's trajectory.",
      universalBracketFormula: "Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of [insert core theme, e.g., unchecked ambition / deception] to illustrate how [insert your main argument/thesis answering the prompt]. Written against the backdrop of Jacobean England, the play serves as a cautionary tale about [insert what happens when you break the natural order/Great Chain of Being]. By tracing Macbeth’s trajectory from a [insert initial state, e.g., loyal soldier] to a [insert final state, e.g., paranoid tyrant], Shakespeare ultimately reveals that [insert final punchy claim about the prompt].",
      clickablePhrase: "Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of ",
    },
    {
      step: "2. Body (T)",
      mnemonicLetter: "T",
      targetWords: "~30w",
      role: "Topic Sentence",
      coreRule: "State author choice + thematic claim. Choose: Initially (Body 1) / As the plot progresses (Body 2) / Ultimately (Body 3).",
      universalBracketFormula: "Initially / As the plot progresses / Ultimately, Shakespeare establishes [insert point for this paragraph] to highlight [insert how this connects to your thesis].",
      clickablePhrase: "Initially, Shakespeare establishes ",
    },
    {
      step: "3. Body (E)",
      mnemonicLetter: "E",
      targetWords: "~50w",
      role: "Evidence with Context",
      coreRule: "Anchor the moment in drama without plot dumping; integrate focused micro-quotes seamlessly.",
      universalBracketFormula: "This is most evident during [insert scene context, e.g., the aftermath of Duncan's murder], when [Character] states, \"[insert micro-quote].\"",
      clickablePhrase: "This is most evident during [insert scene context], when [Character] states, \"[insert micro-quote].\"",
    },
    {
      step: "4. Body (A)",
      mnemonicLetter: "A",
      targetWords: "~90w",
      role: "Analysis of Choices",
      coreRule: "Analyze literary device + zero in on the precise diction of a single quoted word for emotion/meaning.",
      universalBracketFormula: "Shakespeare’s use of [insert literary device: e.g., blood imagery / dramatic irony / a soliloquy] in this moment emphasizes [insert deep analysis of the words]. Specifically, the diction of the word \"[pick one word from your quote]\" conveys a sense of [insert emotion/meaning].",
      clickablePhrase: "Shakespeare’s use of [insert literary device] in this moment emphasizes [insert deep analysis]. Specifically, the diction of the word \"[pick word]\" conveys a sense of ",
    },
    {
      step: "5. Body (R)",
      mnemonicLetter: "R",
      targetWords: "~60w",
      role: "Response to Prompt",
      coreRule: "Evaluate Jacobean audience effect and explicitly tie back to the prompt's exact words.",
      universalBracketFormula: "Consequently, this positions the Jacobean audience to realize [insert the effect on the audience], reinforcing the idea that [tie directly back to the exact wording of the question].",
      clickablePhrase: "Consequently, this positions the Jacobean audience to realize [insert effect], reinforcing the idea that ",
    },
  ],
  sections: [
    {
      sectionId: "intro",
      title: "1. The Introduction (Approx. 100 words) — The Funnel Intro",
      targetWords: "Approx. 100 words",
      formula: "Through the tragedy of Macbeth, William Shakespeare explores [core theme] to illustrate how [thesis] ➔ Written against the backdrop of Jacobean England, the play serves as a cautionary tale about [breaking natural order] ➔ By tracing Macbeth’s trajectory from [initial state] to [final state], Shakespeare ultimately reveals that [claim].",
      sentenceStems: [
        "Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of [insert core theme, e.g., unchecked ambition / deception] to illustrate how [insert your main argument/thesis answering the prompt].",
        "Written against the backdrop of Jacobean England, the play serves as a cautionary tale about [insert what happens when you break the natural order/Great Chain of Being].",
        "By tracing Macbeth’s trajectory from a [insert initial state, e.g., loyal soldier] to a [insert final state, e.g., paranoid tyrant], Shakespeare ultimately reveals that [insert final punchy claim about the prompt].",
      ],
      exemplarFill: `Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of deceptive appearances to illustrate how the pursuit of power through duplicity corrupts the human conscience and fractures the state. Written against the backdrop of Jacobean England, the play serves as a cautionary tale about what happens when you break the natural order and defy the Great Chain of Being by substituting sacred loyalty with treason. By tracing Macbeth’s trajectory from a revered, loyal soldier to a hollow and paranoid tyrant, Shakespeare ultimately reveals that masking ambition behind false surfaces provides only temporary control, inevitably precipitating psychological collapse and divine retribution.`,
      examinerInsight: "Level 7 examiners reward introductions that define the prompt conceptually, ground it in historical context (the Jacobean Great Chain of Being), and give a distinct trajectory without mechanical plot summary. Making Shakespeare the active subject immediately demonstrates Criterion B authorial intent.",
    },
    {
      sectionId: "body1",
      title: "2. Body Paragraph 1 (Approx. 230 words) — T.E.A.R. Beginning",
      targetWords: "Approx. 230 words",
      formula: "T (Initially, Shakespeare establishes [point] to highlight [thesis]) ➔ E (This is most evident during [scene], when [Character] states \"[quote]\") ➔ A (Shakespeare’s use of [device] emphasizes... Specifically, the diction of \"[word]\" conveys...) ➔ R (Consequently, this positions the Jacobean audience to realize..., reinforcing that...)",
      sentenceStems: [
        "Initially, Shakespeare establishes [insert point for this paragraph] to highlight [insert how this connects to your thesis].",
        "This is most evident during [insert scene context, e.g., the aftermath of Cawdor's execution], when [Character] states, \"[insert micro-quote].\"",
        "Shakespeare’s use of [insert literary device: e.g., dramatic irony / meter] in this moment emphasizes [insert deep analysis of the words].",
        "Specifically, the diction of the word \"[pick one word from your quote]\" conveys a sense of [insert emotion/meaning].",
        "Consequently, this positions the Jacobean audience to realize [insert the effect on the audience], reinforcing the idea that [tie directly back to the exact wording of the question].",
      ],
      exemplarFill: `Initially, Shakespeare establishes the pervasive inversion of moral boundaries at the very start of the drama to highlight how unchecked ambition requires the complete distortion of truth. This is most evident during the aftermath of Cawdor's treason, when King Duncan sighs, "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). Shakespeare’s use of dramatic irony in this moment emphasizes the dangerous vulnerability of trusting surface appearances in a Machiavellian political world. Specifically, the diction of the word "construction" conveys a sense of calculated manufacture, depicting the human face not as a transparent reflection of moral virtue, but as an artificial facade engineered to conceal inward treason. This theatrical dissonance echoes the Weird Sisters’ opening incantation—"Fair is foul, and foul is fair"—where discordant trochaic tetrameter physically destabilizes the play’s moral universe. The fatal danger of this blindness is realized the very second Duncan concludes his observation: Macbeth enters the royal chamber, receiving Duncan’s unconditional embrace while privately praying for the stars to "hide your fires" from his murderous intent. Consequently, this positions the Jacobean audience to realize that polite courtly surfaces can harbor deadly treason, reinforcing the idea that when appearance is divorced from reality, even the most rightful king cannot protect himself from unseen subversion and violent collapse.`,
      examinerInsight: "Notice how the T.E.A.R. structure keeps your writing analytical: you begin with 'Initially, Shakespeare establishes...', embed a micro-quote with scene context, drill down to the diction of a single word ('construction'), and end by measuring the audience's reaction.",
    },
    {
      sectionId: "body2",
      title: "3. Body Paragraph 2 (Approx. 230 words) — T.E.A.R. Middle / Climax",
      targetWords: "Approx. 230 words",
      formula: "T (As the plot progresses, Shakespeare establishes [point] to highlight [thesis]) ➔ E (This is most evident during [scene], when [Character] states \"[quote]\") ➔ A (Shakespeare’s use of [device] emphasizes... Specifically, the diction of \"[word]\" conveys...) ➔ R (Consequently, this positions the Jacobean audience to realize..., reinforcing that...)",
      sentenceStems: [
        "As the plot progresses, Shakespeare establishes [insert point for this paragraph] to highlight [insert how this connects to your thesis].",
        "This is most evident during [insert scene context, e.g., the planning of Duncan's murder], when [Character] states, \"[insert micro-quote].\"",
        "Shakespeare’s use of [insert literary device: e.g., biblical allusion / hallucination / banquet stagecraft] in this moment emphasizes [insert deep analysis of the words].",
        "Specifically, the diction of the word \"[pick one word from your quote]\" conveys a sense of [insert emotion/meaning].",
        "Consequently, this positions the Jacobean audience to realize [insert the effect on the audience], reinforcing the idea that [tie directly back to the exact wording of the question].",
      ],
      exemplarFill: `As the plot progresses, Shakespeare establishes the unbearable psychological strain of maintaining a duplicitous facade to highlight how violent deception inevitably fractures the perpetrator’s sanity. This is most evident during the tense domestic conspiracy before Duncan’s murder, when Lady Macbeth commands her hesitant husband, "Look like th’ innocent flower, / But be the serpent under’t" (1.5.63–64). Shakespeare’s use of biblical and political iconography in this moment emphasizes the sinister gap between courtly hospitality and predatory treason. Specifically, the diction of the word "serpent" conveys a sense of demonic corruption, evoking both the deceitful tempter of Genesis and King James I’s commemorative 1605 Gunpowder Plot medal, which depicted a serpent lurking beneath flowers. Macbeth attempts to formalize this deceit by declaring that "False face must hide what the false heart doth know" (1.7.82). Yet Shakespeare proves that the conscience cannot sustain such continuous hypocrisy. During the Act 3 royal banquet, as Macbeth attempts to project the image of a confident, legitimate monarch, his repressed guilt somatizes into the bloody Ghost of Banquo. The specter’s silent usurpation of the throne destroys the staged feast, causing Macbeth’s wild screams to expose his inner madness before the assembled nobility. Consequently, this positions the Jacobean audience to realize that supernatural and psychological guilt will violently pierce any royal disguise, reinforcing the idea that deceptive surfaces inevitably shatter under the truth of murderous guilt.`,
      examinerInsight: "Transitions like 'As the plot progresses' demonstrate chronological command (Criterion C). Analyzing physical stagecraft—such as Banquo's ghost occupying the throne—proves you understand drama as a performed medium (Criterion B).",
    },
    {
      sectionId: "body3",
      title: "4. Body Paragraph 3 (Approx. 230 words) — T.E.A.R. End / Denouement",
      targetWords: "Approx. 230 words",
      formula: "T (Ultimately, Shakespeare establishes [point] to highlight [thesis]) ➔ E (This is most evident during [scene], when [Character] states \"[quote]\") ➔ A (Shakespeare’s use of [device] emphasizes... Specifically, the diction of \"[word]\" conveys...) ➔ R (Consequently, this positions the Jacobean audience to realize..., reinforcing that...)",
      sentenceStems: [
        "Ultimately, Shakespeare establishes [insert point for this paragraph] to highlight [insert how this connects to your thesis].",
        "This is most evident during [insert scene context, e.g., the final siege of Dunsinane], when [Character] states, \"[insert micro-quote].\"",
        "Shakespeare’s use of [insert literary device: e.g., tragic recognition (*anagnorisis*) / verse to prose] in this moment emphasizes [insert deep analysis of the words].",
        "Specifically, the diction of the word \"[pick one word from your quote]\" conveys a sense of [insert emotion/meaning].",
        "Consequently, this positions the Jacobean audience to realize [insert the effect on the audience], reinforcing the idea that [tie directly back to the exact wording of the question].",
      ],
      exemplarFill: `Ultimately, Shakespeare establishes the inevitable collapse of equivocation and psychological denial to highlight how reality relentlessly asserts itself to destroy tyrannical deceit. This is most evident during the frantic final siege of Dunsinane, when Macbeth, confronted by Macduff’s revelation of his Caesarean birth, desperately cries, "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). Shakespeare’s use of tragic recognition (*anagnorisis*) in this moment emphasizes the fatal folly of relying on ambiguous supernatural promises. Specifically, the diction of the word "palter" conveys a sense of contemptible mockery, unmasking the Witches’ riddles not as divine guarantees, but as verbal traps engineered to lure him into damnation. This linguistic unravelling mirrors Lady Macbeth’s total collapse in Act 5 Scene 1, where her noble blank verse disintegrates into fractured, guilt-ridden prose: "Out, damned spot!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). Her sensory obsession with indelible blood proves that conscious denial cannot wash clean the spiritual stain of regicide. When Malcolm’s soldiers advance camouflaged behind Birnam Wood, the physical landscape itself dissolves the tyrant’s delusions. Consequently, this positions the Jacobean audience to realize that evil operates through deceptive equivocation, reinforcing the idea that those who build power on false reality will ultimately be consumed by their own fatal blindness.`,
      examinerInsight: "Closing the analytical body with anagnorisis, the collapse of equivocation, and Lady Macbeth's prose breakdown demonstrates mastery of tragic form and authorial choices (Criterion B & C).",
    },
    {
      sectionId: "conclusion",
      title: "5. The Conclusion (Approx. 110 words) — The Universal Warning",
      targetWords: "Approx. 110 words",
      formula: "Ultimately, Macbeth stands as a profound commentary on [theme] ➔ By employing [2 devices], Shakespeare successfully demonstrates that [thesis restatement] ➔ The tragic downfall serves as a final reminder that [universal truth / Jacobean context].",
      sentenceStems: [
        "Ultimately, Macbeth stands as a profound commentary on [insert the overarching theme].",
        "By employing [insert 2 literary devices you used, e.g., visceral blood motifs and structural irony], Shakespeare successfully demonstrates that [restate your thesis in different words].",
        "The tragic downfall of the protagonist serves as a final reminder to the audience that [insert final universal truth or Jacobean context—e.g., those who attempt to subvert the natural order are doomed to psychological ruin].",
      ],
      exemplarFill: `Ultimately, Macbeth stands as a profound commentary on the lethal consequences of replacing moral truth with deceptive ambition. By employing visceral blood motifs and structural irony, Shakespeare successfully demonstrates that outward masks of authority cannot protect an illegitimate ruler from inward ruin or historical judgement. The tragic downfall of the protagonist serves as a final reminder to the audience that those who attempt to subvert the natural order are doomed to psychological ruin, spiritual desolation, and physical destruction. As Malcolm is rightfully hailed King of Scotland, legitimate succession reclaims the throne, lifting the fog of equivocation and reassuring the Jacobean spectator that universal order and divine justice will always triumph.`,
      examinerInsight: "Do not introduce new evidence in the conclusion. Zooming out to universal truths and the restoration of cosmic and political order satisfies Criterion A and C with maximum impact.",
    },
  ],
  rawFullTemplateText: `The most reliable framework used by top-scoring IB English SL students is the Funnel Intro + T.E.A.R. Body Paragraph structure. It prevents you from slipping into summary by forcing you to analyze Shakespeare's choices in every paragraph.

Treat this like a mathematical formula. Memorize the bolded transitional phrases—these are your "fill-in-the-blank" anchors.

1. The Introduction (Approx. 100 words)

Move quickly from the broad theme to your specific thesis.

Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of [insert core theme, e.g., unchecked ambition / deception] to illustrate how [insert your main argument/thesis answering the prompt].

Written against the backdrop of Jacobean England, the play serves as a cautionary tale about [insert what happens when you break the natural order/Great Chain of Being].

By tracing Macbeth’s trajectory from a [insert initial state, e.g., loyal soldier] to a [insert final state, e.g., paranoid tyrant], Shakespeare ultimately reveals that [insert final punchy claim about the prompt].

2. The Body Paragraphs (Write 3 of these, Approx. 230 words each)

Memorize the T.E.A.R. acronym for these paragraphs: Topic, Evidence, Analysis, Response to Prompt. Apply this chronologically (Paragraph 1 = Beginning, Paragraph 2 = Middle/Climax, Paragraph 3 = End).

T (Topic Sentence): Initially / As the plot progresses / Ultimately, Shakespeare establishes [insert point for this paragraph] to highlight [insert how this connects to your thesis].

E (Evidence with Context): This is most evident during [insert scene context, e.g., the aftermath of Duncan's murder], when [Character] states, "[insert micro-quote]."

A (Analysis of Choices): Shakespeare’s use of [insert literary device: e.g., blood imagery / dramatic irony / a soliloquy] in this moment emphasizes [insert deep analysis of the words]. Specifically, the diction of the word "[pick one word from your quote]" conveys a sense of [insert emotion/meaning].

R (Response/Link back): Consequently, this positions the Jacobean audience to realize [insert the effect on the audience], reinforcing the idea that [tie directly back to the exact wording of the question].

3. The Conclusion (Approx. 110 words)

Do not introduce new evidence. Zoom out and summarize the play's warning.

Ultimately, Macbeth stands as a profound commentary on [insert the overarching theme].

By employing [insert 2 literary devices you used, e.g., visceral blood motifs and structural irony], Shakespeare successfully demonstrates that [restate your thesis in different words].

The tragic downfall of the protagonist serves as a final reminder to the audience that [insert final universal truth or Jacobean context—e.g., those who attempt to subvert the natural order are doomed to psychological ruin].

Why this specific template works for the IB Rubric:

⚬ "Shakespeare explores..." / "Shakespeare establishes...": By constantly using the author's name as the active subject of your sentences, you prove to the examiner you are analyzing authorial choices (IB Criterion B), not just retelling the story.
⚬ "Positions the audience to...": This hits the IB requirement to evaluate the effect on the reader/audience.
⚬ Jacobean Context: Dropping references to the Jacobean audience or the Great Chain of Being easily secures points for contextual understanding.`,
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
  title: "The Mask of Loyalty: Deception, Authorial Craft, and Moral Ruin in Macbeth",
  question: "“Nothing is as it seems.” Discuss how the tension between appearance and reality is explored in the play, and to what effect.",
  totalWordCount: 890,
  predictedMarks: "30 / 30 (Grade 7 Standard)",
  rubricBreakdown: {
    criterionA: {
      marks: "10 / 10",
      comment: "Perceptive and nuanced interpretation. Integrates the 1605 Gunpowder Plot, the Great Chain of Being, and equivocation seamlessly with precisely embedded micro-quotes.",
    },
    criterionB: {
      marks: "10 / 10",
      comment: "Superb analysis of dramatic craft. Constantly keeps Shakespeare as the active subject, evaluates trochaic meter vs. blank verse, dramatic irony, banquet stagecraft, and micro-diction ('construction', 'serpent', 'palter').",
    },
    criterionC: {
      marks: "5 / 5",
      comment: "Flawless chronological progression (Beginning ➔ Middle/Climax ➔ End) adhering to the Funnel Intro + T.E.A.R. framework. Clear topic sentences and link-backs evaluate the audience impact directly without summary.",
    },
    criterionD: {
      marks: "5 / 5",
      comment: "Clear, fluent, and precise Grade 12 academic register. Integrates literary terms ('dramatic irony', 'equivocation', 'soliloquy', 'anagnorisis') purposeful and without pretense.",
    },
  },
  sections: [
    {
      title: "1. Introduction: Funnel Intro (Approx. 100 words)",
      role: "The Funnel Intro",
      targetWordCount: "Approx. 100 words",
      actualWordCount: 102,
      color: "#f59e0b",
      badge: "Intro • 102 words",
      examinerFocus: "Criterion A (Context & Worldview) & Criterion B (Active Author Framing)",
      content: `Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of deceptive appearances to illustrate how the pursuit of power through duplicity corrupts the human conscience and fractures the state. Written against the backdrop of Jacobean England, the play serves as a cautionary tale about what happens when you break the natural order and defy the Great Chain of Being by substituting sacred loyalty with treason. By tracing Macbeth’s trajectory from a revered, loyal soldier to a hollow and paranoid tyrant, Shakespeare ultimately reveals that masking ambition behind false surfaces provides only temporary control, inevitably precipitating psychological collapse and divine retribution.`,
      keyTechniques: [
        "Funnel movement from broad theme to specific thesis",
        "Jacobean context anchor (Great Chain of Being & divine order)",
        "3-stage trajectory from loyal soldier to paranoid tyrant",
      ],
      criterionTarget: "Criterion A & B (Insightful framing, active author subject)",
    },
    {
      title: "2. Body Paragraph 1: T.E.A.R. Beginning (Approx. 230 words)",
      role: "T.E.A.R. Beginning",
      targetWordCount: "Approx. 230 words",
      actualWordCount: 225,
      color: "#38bdf8",
      badge: "Body 1 • 225 words",
      examinerFocus: "Criterion B (Meter, Dramatic Irony & Diction Analysis)",
      content: `Initially, Shakespeare establishes the pervasive inversion of moral boundaries at the very start of the drama to highlight how unchecked ambition requires the complete distortion of truth. This is most evident during the aftermath of Cawdor's treason, when King Duncan sighs, "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust" (1.4.11–14). Shakespeare’s use of dramatic irony in this moment emphasizes the dangerous vulnerability of trusting surface appearances in a Machiavellian political world. Specifically, the diction of the word "construction" conveys a sense of calculated manufacture, depicting the human face not as a transparent reflection of moral virtue, but as an artificial facade engineered to conceal inward treason. This theatrical dissonance echoes the Weird Sisters’ opening incantation—"Fair is foul, and foul is fair"—where discordant trochaic tetrameter physically destabilizes the play’s moral universe. The fatal danger of this blindness is realized the very second Duncan concludes his observation: Macbeth enters the royal chamber, receiving Duncan’s unconditional embrace while privately praying for the stars to "hide your fires" from his murderous intent. Consequently, this positions the Jacobean audience to realize that polite courtly surfaces can harbor deadly treason, reinforcing the idea that when appearance is divorced from reality, even the most rightful king cannot protect himself from unseen subversion and violent collapse.`,
      keyTechniques: [
        "T.E.A.R. structure (Topic, Evidence, Analysis, Response)",
        "Dramatic irony & Duncan's tragic blindness",
        "Micro-diction analysis of 'construction'",
        "Reader/audience positioning on Jacobean political subversion",
      ],
      criterionTarget: "Criterion B & C (Authorial craft, micro-diction, reader effect)",
    },
    {
      title: "3. Body Paragraph 2: T.E.A.R. Middle / Climax (Approx. 230 words)",
      role: "T.E.A.R. Middle / Climax",
      targetWordCount: "Approx. 230 words",
      actualWordCount: 228,
      color: "#ec4899",
      badge: "Body 2 • 228 words",
      examinerFocus: "Criterion B (Biblical Allusions & Banquet Staging)",
      content: `As the plot progresses, Shakespeare establishes the unbearable psychological strain of maintaining a duplicitous facade to highlight how violent deception inevitably fractures the perpetrator’s sanity. This is most evident during the tense domestic conspiracy before Duncan’s murder, when Lady Macbeth commands her hesitant husband, "Look like th’ innocent flower, / But be the serpent under’t" (1.5.63–64). Shakespeare’s use of biblical and political iconography in this moment emphasizes the sinister gap between courtly hospitality and predatory treason. Specifically, the diction of the word "serpent" conveys a sense of demonic corruption, evoking both the deceitful tempter of Genesis and King James I’s commemorative 1605 Gunpowder Plot medal, which depicted a serpent lurking beneath flowers. Macbeth attempts to formalize this deceit by declaring that "False face must hide what the false heart doth know" (1.7.82). Yet Shakespeare proves that the conscience cannot sustain such continuous hypocrisy. During the Act 3 royal banquet, as Macbeth attempts to project the image of a confident, legitimate monarch, his repressed guilt somatizes into the bloody Ghost of Banquo. The specter’s silent usurpation of the throne destroys the staged feast, causing Macbeth’s wild screams to expose his inner madness before the assembled nobility. Consequently, this positions the Jacobean audience to realize that supernatural and psychological guilt will violently pierce any royal disguise, reinforcing the idea that deceptive surfaces inevitably shatter under the truth of murderous guilt.`,
      keyTechniques: [
        "Biblical serpent & King James 1605 Gunpowder Plot medal allusion",
        "Micro-diction analysis of 'serpent' & courtly mask",
        "Banquet stagecraft: Banquo's ghost physically shattering royal facade",
        "Audience realization of internal conscience overwhelming external performance",
      ],
      criterionTarget: "Criterion B & D (Theatrical staging, symbolic breakdown)",
    },
    {
      title: "4. Body Paragraph 3: T.E.A.R. End / Denouement (Approx. 230 words)",
      role: "T.E.A.R. End / Denouement",
      targetWordCount: "Approx. 230 words",
      actualWordCount: 225,
      color: "#a855f7",
      badge: "Body 3 • 225 words",
      examinerFocus: "Criterion B (Verse to Prose Breakdown & Anagnorisis)",
      content: `Ultimately, Shakespeare establishes the inevitable collapse of equivocation and psychological denial to highlight how reality relentlessly asserts itself to destroy tyrannical deceit. This is most evident during the frantic final siege of Dunsinane, when Macbeth, confronted by Macduff’s revelation of his Caesarean birth, desperately cries, "And be these juggling fiends no more believed, / That palter with us in a double sense" (5.8.19–20). Shakespeare’s use of tragic recognition (*anagnorisis*) in this moment emphasizes the fatal folly of relying on ambiguous supernatural promises. Specifically, the diction of the word "palter" conveys a sense of contemptible mockery, unmasking the Witches’ riddles not as divine guarantees, but as verbal traps engineered to lure him into damnation. This linguistic unravelling mirrors Lady Macbeth’s total collapse in Act 5 Scene 1, where her noble blank verse disintegrates into fractured, guilt-ridden prose: "Out, damned spot!... All the perfumes of Arabia will not sweeten this little hand" (5.1.31–45). Her sensory obsession with indelible blood proves that conscious denial cannot wash clean the spiritual stain of regicide. When Malcolm’s soldiers advance camouflaged behind Birnam Wood, the physical landscape itself dissolves the tyrant’s delusions. Consequently, this positions the Jacobean audience to realize that evil operates through deceptive equivocation, reinforcing the idea that those who build power on false reality will ultimately be consumed by their own fatal blindness.`,
      keyTechniques: [
        "Tragic recognition (anagnorisis) unmasking supernatural equivocation",
        "Micro-diction analysis of 'palter' (double-dealing riddle)",
        "Shift from noble blank verse into prose in Lady Macbeth's sleepwalking",
        "Audience realization of divine moral order triumphing over deception",
      ],
      criterionTarget: "Criterion A & B (Perceptive synthesis of tragic denouement)",
    },
    {
      title: "5. Conclusion: The Universal Warning (Approx. 110 words)",
      role: "The Conclusion",
      targetWordCount: "Approx. 110 words",
      actualWordCount: 110,
      color: "#10b981",
      badge: "Conclusion • 110 words",
      examinerFocus: "Criterion A (Universal Resonance) & Criterion C (Synthesis Without Summary)",
      content: `Ultimately, Macbeth stands as a profound commentary on the lethal consequences of replacing moral truth with deceptive ambition. By employing visceral blood motifs and structural irony, Shakespeare successfully demonstrates that outward masks of authority cannot protect an illegitimate ruler from inward ruin or historical judgement. The tragic downfall of the protagonist serves as a final reminder to the audience that those who attempt to subvert the natural order are doomed to psychological ruin, spiritual desolation, and physical destruction. As Malcolm is rightfully hailed King of Scotland, legitimate succession reclaims the throne, lifting the fog of equivocation and reassuring the Jacobean spectator that universal order and divine justice will always triumph.`,
      keyTechniques: [
        "Macro synthesis of play's warning without plot summary",
        "Recap of 2 structural devices (visceral blood motifs and structural irony)",
        "Universal truth and restoration of cosmic / political order",
      ],
      criterionTarget: "Criterion A & C (Elevated synthesis, seamless closure)",
    },
  ],
  plugAndPlayTransitions: [
    {
      category: "1. The Funnel Introduction & Context Anchors",
      phrases: [
        "Through the tragedy of Macbeth, William Shakespeare explores the destructive nature of [core theme] to illustrate how [thesis]...",
        "Written against the backdrop of Jacobean England, the play serves as a cautionary tale about [breaking the natural order / Great Chain of Being]...",
        "By tracing Macbeth’s trajectory from a [initial state] to a [final state], Shakespeare ultimately reveals that [final claim]...",
      ],
    },
    {
      category: "2. T.E.A.R. Chronological Topic Sentences",
      phrases: [
        "Initially, Shakespeare establishes [thematic point] to highlight [connection to thesis]...",
        "As the plot progresses, Shakespeare establishes [escalation point] to highlight [connection to thesis]...",
        "Ultimately, Shakespeare establishes [climactic point] to highlight [connection to thesis]...",
      ],
    },
    {
      category: "3. T.E.A.R. Evidence & Word-Level Diction Analysis",
      phrases: [
        "This is most evident during [insert scene context], when [Character] states, \"[insert micro-quote]\"...",
        "Shakespeare’s use of [literary device: e.g. dramatic irony / soliloquy] in this moment emphasizes [deep analysis]...",
        "Specifically, the diction of the word \"[quote word]\" conveys a sense of [emotion/meaning]...",
      ],
    },
    {
      category: "4. T.E.A.R. Audience Effect & Link Back",
      phrases: [
        "Consequently, this positions the Jacobean audience to realize [audience effect]...",
        "...reinforcing the idea that [tie directly back to the exact wording of the question].",
        "Ultimately, Macbeth stands as a profound commentary on [overarching theme]...",
        "The tragic downfall of the protagonist serves as a final reminder to the audience that [final universal truth / Jacobean context]...",
      ],
    },
  ],
  examinersChecklist: [
    {
      check: "Criterion B Authorial Subject: Active Subject in Every Paragraph",
      rationale: "Every paragraph keeps Shakespeare as the active subject ('Shakespeare explores...', 'Shakespeare establishes...'), proving analytical intent rather than story re-telling.",
    },
    {
      check: "Criterion A Contextual Grounding: Jacobean Order & Gunpowder Plot",
      rationale: "Seamlessly weaves in the Great Chain of Being and Jacobean political anxieties (equivocation and legitimate rule) without devolving into a historical summary.",
    },
    {
      check: "Criterion B Micro-Diction Analysis: Surgical Word-Level Reading",
      rationale: "Dissects the precise diction of isolated words ('construction', 'serpent', 'palter') alongside stagecraft, meter, and structural shifts from verse to prose.",
    },
    {
      check: "Criterion C & B Reader Effect: Audience Impact Explicitly Evaluated",
      rationale: "Consistently evaluates how choices position the Jacobean audience ('Consequently, this positions the Jacobean audience to realize...') and ties directly to the prompt.",
    },
    {
      check: "Criterion C Mathematical Proportions: ~900 Words Across 5 Movements",
      rationale: "Intro (~100w), Body 1 (~230w), Body 2 (~230w), Body 3 (~230w), Conclusion (~110w) maintains optimal exam stamina, balance, and academic focus.",
    },
  ],
};
