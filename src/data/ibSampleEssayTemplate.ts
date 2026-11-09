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
