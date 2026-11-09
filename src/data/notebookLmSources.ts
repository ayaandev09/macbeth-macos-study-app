export interface ResearchSourceItem {
  id: string;
  title: string;
  category: "Play Scene Excerpts" | "Jacobean Context & Criticism" | "Model Essay Extracts" | "Theme Deep Dives" | "Prompt Vaults";
  authorOrSpeaker: string;
  reference: string;
  keyKeywords: string[];
  summary: string;
  fullTextContent: string;
  notebookLmPrompts: string[];
  audioDeepDiveOverview: {
    title: string;
    duration: string;
    hostsSummary: string;
    keyDebatePoints: string[];
  };
}

export const NOTEBOOKLM_RESEARCH_SOURCES: ResearchSourceItem[] = [
  {
    id: "src-appearance-inversion",
    title: "Appearance vs. Reality: The Metaphysical and Somatic Mask",
    category: "Theme Deep Dives",
    authorOrSpeaker: "Shakespeare / Jacobean Critical Analysis",
    reference: "Act 1 Scene 1, Act 1 Scene 5, Act 2 Scene 1, Act 5 Scene 1",
    keyKeywords: ["Equivocation", "Chiasmus", "Trochaic Meter", "Somatic Breakdown", "Gunpowder Plot Medal", "Innocent Flower"],
    summary: "Comprehensive analytical source dossier deconstructing how Shakespeare frames deception from cosmic inversion to the physiological breakdown of the sleepwalking queen.",
    fullTextContent: `[EXCERPT 1: THE METAPHYSICAL OPENING - 1.1.1-12]
First Witch: When shall we three meet again / In thunder, lightning, or in rain?
Second Witch: When the hurlyburly's done, / When the battle's lost and won.
Third Witch: That will be ere the set of sun.
First Witch: Where the place?
Second Witch: Upon the heath.
Third Witch: There to meet with Macbeth.
First Witch: I come, Graymalkin!
Second Witch: Paddock calls.
Third Witch: Anon.
All: Fair is foul, and foul is fair: / Hover through the fog and filthy air.

[CRITICAL ANALYSIS & HISTORICAL CONTEXT]
The trochaic tetrameter catalectic rhythm immediately sets the Weird Sisters apart from the natural iambic cadence of mortal humanity. The opening chiasmus ('Fair is foul, and foul is fair') does not merely describe bad weather; it establishes an ontological and epistemological crisis. The moral cosmos is inverted: honor is tainted, treason masquerades as heroism, and empirical perception is clouded by 'fog and filthy air'.

[EXCERPT 2: THE DOMESTIC WEAPONIZATION OF HOSPITALITY - 1.5.58-68]
Lady Macbeth: O, never / Shall sun that morrow see!
Your face, my thane, is as a book where men / May read strange matters. To beguile the time,
Look like the time; bear welcome in your eye, / Your hand, your tongue: look like the innocent flower,
But be the serpent under't. He that's coming / Must be provided for: and you shall put
This night's great business into my dispatch; / Which shall to all our nights and days to come
Give solely sovereign sway and masterdom.

[HISTORICAL ICONOGRAPHY]
Following the failed Catholic Gunpowder Plot of November 5, 1605, King James I commissioned an official silver commemorative medal. The medal depicted an innocent snake slithering among blooming English lilies and roses, inscribed with 'Detectus Qui Latuit' ('He who lay hidden is uncovered'). When Lady Macbeth urges Macbeth to 'look like the innocent flower, / But be the serpent under't', the Jacobean audience instantly recognized this visual and ideological allegory of treacherous domestic dissimulation.

[EXCERPT 3: COGNITIVE & SOMATIC DISSOLUTION - 2.1.33-49 & 5.1.30-40]
Macbeth: Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible / To feeling as to sight? or art thou but
A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain?
...
Lady Macbeth: Out, damned spot! out, I say!—One: two: why, then, 'tis time to do't.—Hell is murky!—Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account?—Yet who would have thought the old man to have had so much blood in him?

[SYNTHESIS FOR PAPER 2]
While Macbeth initially uses external theatricality ('False face must hide what the false heart doth know'), Shakespeare shows that the unconscious mind cannot sustain the illusion. The 'dagger of the mind' demonstrates ocular hallucination, while Lady Macbeth's prose somnambulism reveals that repressed moral trauma inevitably erupts into psychosomatic disorder.`,
    notebookLmPrompts: [
      "How does Shakespeare use trochaic verse and chiasmus in Act 1 Scene 1 to prepare the audience for the total inversion of moral values?",
      "Compare Lady Macbeth's 'innocent flower / serpent' metaphor with the facade of social respectability in my comparative text.",
      "Analyze the transition from verse to fragmented prose in Lady Macbeth's sleepwalking scene (5.1) as a structural breakdown of outward performance.",
      "Synthesize 3 distinct comparative thesis statements exploring how outward political pageantry conceals private moral decay."
    ],
    audioDeepDiveOverview: {
      title: "Audio Deep Dive: The Theatricality of Evil & The Collapse of False Faces",
      duration: "11 min overview",
      hostsSummary: "Two literary critics discuss how Shakespeare treats deception not merely as a character trait, but as a fatal metaphysical trap where the deceiver ultimately deceives themselves.",
      keyDebatePoints: [
        "Why Duncan's inability to read faces (1.4) is the tragic catalyst of Scotland's political decapitation",
        "The Gunpowder Plot medal of 1605 and why the Jacobean audience gasped at 'the serpent under't'",
        "The physiological revolt: why the subconscious mind always somaticizes repressed guilt through sleepwalking and ghosts"
      ]
    }
  },
  {
    id: "src-control-temporal",
    title: "The Tyranny of Time & Hubristic Control Over Destiny",
    category: "Theme Deep Dives",
    authorOrSpeaker: "Shakespeare / Renaissance Philosophical Context",
    reference: "Act 1 Scene 7, Act 3 Scene 1, Act 4 Scene 3, Act 5 Scene 8",
    keyKeywords: ["Trammel up the consequence", "Fruitless Crown", "Barren Sceptre", "Fatalism", "Predestination", "Macduff's Resistance"],
    summary: "Primary source dossier analyzing Macbeth's tragic attempts to master linear time, succession, and political autonomy, contrasted with righteous resistance.",
    fullTextContent: `[EXCERPT 1: THE OBSESSIVE STRUGGLE TO FREEZE CONSEQUENCE - 1.7.1-12]
Macbeth: If it were done when 'tis done, then 'twere well
It were done quickly: if the assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'd jump the life to come. But in these cases
We still have judgment here; that we but teach
Bloody instructions, which, being taught, return
To plague the inventor: this even-handed justice
Commends the ingredients of our poisoned chalice
To our own lips.

[EXCERPT 2: THE HORROR OF DYNASTIC STERILITY - 3.1.48-71]
Macbeth: To be thus is nothing;
But to be safely thus.—Our fears in Banquo
Stick deep; and in his royalty of nature
Reigns that which would be feared...
He chid the sisters
When first they put the name of king upon me,
And bade them speak to him: then prophet-like
They hailed him father to a line of kings:
Upon my head they placed a fruitless crown,
And put a barren sceptre in my gripe,
Thence to be wrenched with an unlineal hand,
No son of mine succeeding. If't be so,
For Banquo's issue have I filed my mind;
For them the gracious Duncan have I murdered;
Put rancours in the vessel of my peace
Only for them; and mine eternal jewel
Given to the common enemy of man,
To make them kings, the seed of Banquo kings!

[EXCERPT 3: MORAL RESISTANCE AND INTEGRATED MANHOOD - 4.3.216-224]
Malcolm: Be comforted: / Let's make us medicines of our great revenge, / To cure this deadly grief.
Macduff: He has no children. All my pretty ones? / Did you say all? O hell-kite! All?
What, all my pretty chickens and their dam / At one fell swoop?
Malcolm: Dispute it like a man.
Macduff: I shall do so; / But I must also feel it as a man:
I cannot but remember such things were, / That were most precious to me.

[EXCERPT 4: THE COLLAPSE OF EQUIVOCAL CONTROL - 5.8.17-22]
Macbeth: Accursed be that tongue that tells me so,
For it hath cowed my better part of man!
And be these juggling fiends no more believed,
That palter with us in a double sense;
That keep the word of promise to our ear,
And break it to our hope. I'll not fight with thee.

[CRITICAL COMMENTARY]
Macbeth's desire is not merely royal status, but omnipotent temporal sovereignty: he wishes an assassination could 'trammel up the consequence'—entangling future cause-and-effect like a fishing net. Yet once crowned, he realizes temporal succession belongs to Banquo. His adjectives 'fruitless crown' and 'barren sceptre' reveal the existential terror of dynastic death. Contrasted with this paranoid quest for control, Macduff models authentic control through moral integration: resisting tyranny requires feeling human grief before unsheathing the sword.`,
    notebookLmPrompts: [
      "How do the metaphors of the 'fruitless crown' and 'barren sceptre' in 3.1 symbolize the metaphysical limits of earthly autocratic power?",
      "Trace the transformation of Macbeth's definition of control from contemplation (1.7) to reckless impulse (4.1: 'firstlings of my hand').",
      "How does Macduff's declaration 'I must also feel it as a man' challenge Macbeth and Lady Macbeth's toxic equations of violence with masculinity?",
      "Compare the futility of autocratic control in Macbeth with the protagonist's struggle against fate in my second literary work."
    ],
    audioDeepDiveOverview: {
      title: "Audio Deep Dive: The Illusion of Mastery & The Tyrant's Trap",
      duration: "14 min overview",
      hostsSummary: "A lively dialogue dissecting why Macbeth's attempts to kill time and control succession lead directly to his own spiritual paralysis and doom.",
      keyDebatePoints: [
        "Why the word 'done' is repeated 5 times in 2 lines of Act 1 Scene 7",
        "The psychological shift from defensive regicide to offensive dynastic slaughter",
        "Macduff's profound redefinition of masculinity as the ultimate counter-weight to Macbeth's sociopathy"
      ]
    }
  },
  {
    id: "src-psychomachia-breakdown",
    title: "Internal Psychomachia & Macrocosmic Ecological Fracture",
    category: "Theme Deep Dives",
    authorOrSpeaker: "Shakespeare / Jacobean Political Theology",
    reference: "Act 2 Scene 2, Act 2 Scene 4, Act 3 Scene 2, Act 3 Scene 4, Act 4 Scene 3",
    keyKeywords: ["Great Chain of Being", "Murder Sleep", "Mousing Owl", "Scorpions of the mind", "Ruined Banquet", "Bleed poor country"],
    summary: "Dossier tracking the causal mechanism linking the regicide's private mental anguish directly to national upheaval, insomnia, and cosmic rebellion.",
    fullTextContent: `[EXCERPT 1: THE SACRAMENTAL RUPTURE OF SLEEP - 2.2.34-42]
Macbeth: Methought I heard a voice cry 'Sleep no more!
Macbeth does murder sleep', the innocent sleep,
Sleep that knits up the raveled sleave of care,
The death of each day's life, sore labor's bath,
Balm of hurt minds, great nature's second course,
Chief nourisher in life's feast,—
Lady Macbeth: What do you mean?
Macbeth: Still it cried 'Sleep no more!' to all the house:
'Glamis hath murdered sleep, and therefore Cawdor
Shall sleep no more; Macbeth shall sleep no more.'

[EXCERPT 2: ECOLOGICAL & COSMIC REBELLION - 2.4.1-19]
Old Man: Threescore and ten I can remember well:
Within the volume of which time I have seen
Hours dreadful and things strange; but this sore night
Hath trifled former knowings.
Ross: Ha, good father, / Thou seest, the heavens, as troubled with man's act,
Threatens his bloody stage: by the clock, 'tis day,
And yet dark night strangles the travelling lamp...
Old Man: 'Tis unnatural, / Even like the deed that's done. On Tuesday last,
A falcon, tow'ring in her pride of place,
Was by a mousing owl hawked at and killed.
Ross: And Duncan's horses—a thing most strange and certain—
Beauteous and swift, the minions of their race,
Turned wild in nature, broke their stalls, flung out,
Contending 'gainst obedience, as they would make
War with mankind.
Old Man: 'Tis said they eat each other.
Ross: They did so, to the amazement of mine eyes
That looked upon't.

[EXCERPT 3: THE PARANOIC POISON OF THE MIND - 3.2.36-45]
Macbeth: O, full of scorpions is my mind, dear wife!
Thou know'st that Banquo, and his Fleance, lives.
Lady Macbeth: But in them nature's copy's not eterne.
Macbeth: There's comfort yet; they are assailable;
Then be thou jocund: ere the bat hath flown
His cloistered flight, ere to black Hecate's summons
The shard-borne beetle with his drowsy hums
Hath rung night's yawning peal, there shall be done
A deed of dreadful note.

[EXCERPT 4: THE COMMONWEALTH TRANSFORMED INTO A CORPSE - 4.3.31-41]
Macduff: Bleed, bleed, poor country!
Great tyranny, lay thou thy basis sure,
For goodness dare not check thee! wear thou thy wrongs;
The title is affeered! Fare thee well, lord:
I would not be the villain that thou think'st
For the whole space that's in the tyrant's grasp,
And the rich East to boot.
Malcolm: Be not offended:
I speak not as in absolute fear of you.
I think our country sinks beneath the yoke;
It weeps, it bleeds; and each new day a gash
Is added to her wounds.

[JACOBEAN THEOLOGICAL CONTEXT]
In the Elizabethan and Jacobean cosmological worldview, the monarch was God's deputy on earth (the Divine Right of Kings) linked directly into the Great Chain of Being. When the anointed sovereign Duncan is assassinated, the physical ecosystem revolts: nocturnal darkness smothers daylight at noon, Duncan's royal horses cannibalize one another, and a low-born mousing owl attacks a sovereign falcon. The internal psychomachia of the murderer is directly mirrored in the hemorrhaging wounds of Scotland.`,
    notebookLmPrompts: [
      "How does Shakespeare use the Great Chain of Being to project Macbeth's psychological guilt onto the biological ecosystem in Act 2 Scene 4?",
      "Examine the symbolic function of sleep in Macbeth: why is sleep described as the 'chief nourisher in life's feast' and why must the murderer be denied it?",
      "Analyze the banquet scene (3.4) as both a psychological breakdown and a sociopolitical collapse of the Scottish feudal hierarchy.",
      "Compare how personal guilt leads to state-level corruption across both works for IB Paper 2."
    ],
    audioDeepDiveOverview: {
      title: "Audio Deep Dive: The Diseased State & The Ecological Mirror",
      duration: "13 min overview",
      hostsSummary: "Deep analytical dive into the Jacobean doctrine of correspondence: how killing a king shatters the mental faculties of the killer and literally breaks nature itself.",
      keyDebatePoints: [
        "The falcon and the owl: unpacking Shakespeare's most potent political allegory",
        "Why Macbeth's insomnia is the psychological engine that drives him to mass murder",
        "Scotland as an open bleeding wound: Macduff's visceral personification of the commonwealth"
      ]
    }
  },
  {
    id: "src-setting-verbal-scenography",
    title: "Setting, Acoustic Stagecraft & Verbal Scenography",
    category: "Theme Deep Dives",
    authorOrSpeaker: "Shakespeare / Globe Theatre Performance Craft",
    reference: "Act 1 Scene 4, Act 1 Scene 6, Act 2 Scene 1, Act 2 Scene 2, Act 4 Scene 1, Act 5 Scene 4",
    keyKeywords: ["Verbal Scenography", "Chiaroscuro", "Acoustic Knocking", "Inverness Castle Irony", "Birnam Wood Staging", "Darkness as Privatio Boni"],
    summary: "Dossier examining how Shakespeare staged supernatural horror, starless nights, and atmospheric suspense in the sunlit open-air Globe Theatre through acoustic effects and poetic imagery.",
    fullTextContent: `[EXCERPT 1: THE COMMAND FOR COSMIC OBSCURITY - 1.4.48-53]
Macbeth: The Prince of Cumberland! that is a step
On which I must fall down, or else o'erleap,
For in my way it lies. Stars, hide your fires;
Let not light see my black and deep desires:
The eye wink at the hand; yet let that be,
Which the eye fears, when it is done, to see.

[EXCERPT 2: PASTORAL SANCTUARY VS. BLOODY ABATTOIR - 1.6.1-10]
Duncan: This castle hath a pleasant seat; the air
Nimbly and sweetly recommends itself
Unto our gentle senses.
Banquo: This guest of summer,
The temple-haunting martlet, does approve,
By his loved mansionry, that the heaven's breath
Smells wooingly here: no jutty, frieze,
Buttress, nor coign of vantage, but this bird
Hath made his pendent bed and procreant cradle:
Where they most breed and haunt, I have observed,
The air is delicate.

[EXCERPT 3: ACOUSTIC STAGECRAFT AND THE METAPHYSICAL HAMMER - 2.2.56-73]
Macbeth: Whence is that knocking?
How is't with me, when every noise appalls me?
What hands are here? ha! they pluck out mine eyes.
Will all great Neptune's ocean wash this blood
Clean from my hand? No, this my hand will rather
The multitudinous seas incarnadine,
Making the green one red.
[Re-enter Lady Macbeth]
Lady Macbeth: My hands are of your color; but I shame
To wear a heart so white. [Knock within]
I hear a knocking / At the south entry: retire we to our chamber;
A little water clears us of this deed: / How easy is it, then! Your constancy
Hath left you unattended. [Knock within]
Hark! more knocking. / Get on your nightgown, lest occasion call us,
And show us to be watchers. Be not lost / So poorly in your thoughts.
Macbeth: To know my deed, 'twere best not know myself. [Knock within]
Wake Duncan with thy knocking! I would thou couldst!

[EXCERPT 4: THE LITERALIZATION OF ENVIRONMENTAL RETRIBUTION - 5.4.4-7]
Malcolm: Let every soldier hew him down a bough
And bear't before him: thereby shall we shadow
The numbers of our host and make discovery
Err in report of us.
Soldiers: It shall be done.

[THEATRICAL CRAFT ANALYSIS]
Because the Globe Theatre was an unroofed amphitheatre performing in broad afternoon daylight, Shakespeare could not dim electric lights. Darkness had to be created linguistically—a technique known as verbal scenography. Characters carry flickering torches onstage and explicitly announce that 'their candles are all out' (2.1) to construct nocturnal terror in the minds of the audience. The knocking at the South gate functions as a sensory acoustic shock that breaks the claustrophobic silence of the regicide, jolting the audience with the physical arrival of moral retribution.`,
    notebookLmPrompts: [
      "How did Shakespeare use verbal scenography to paint pitch darkness on the sunlit Globe stage in Act 2 Scene 1?",
      "Analyze the dramatic irony of Duncan and Banquo praising the sweet air and martlet nests at Inverness Castle (1.6).",
      "Evaluate the acoustic impact of the offstage knocking in Act 2 Scene 2 and how it affects the psychological pacing of the scene.",
      "Compare how theatrical acoustic devices in Macbeth correspond to atmospheric descriptions in prose literature for Paper 2."
    ],
    audioDeepDiveOverview: {
      title: "Audio Deep Dive: The Sound of Blood & The Theater of the Mind",
      duration: "12 min overview",
      hostsSummary: "Exploring Shakespeare's acoustic genius: how sound design and verbal stagecraft turned an open-air theater into an inescapable psychological nightmare.",
      keyDebatePoints: [
        "Verbal scenography: how to create pitch blackness at 2 PM in summer London",
        "The offstage knock: why Thomas De Quincey called it the greatest sound effect in world literature",
        "Birnam Wood: when the stage setting physically marches to execute divine justice"
      ]
    }
  },
  {
    id: "src-exemplar-mastery-template",
    title: "Universal 900-Word Exemplar Matrix & High-Scoring Transitions",
    category: "Model Essay Extracts",
    authorOrSpeaker: "IB English Literature Grade 7 Examiner Panel",
    reference: "Criteria A, B, C, D (30/30 Marks Benchmark)",
    keyKeywords: ["C-O-R-E-S Formula", "Tripartite Progression", "Comparative Bridge", "Microcosmic Correspondence", "Hamartia", "Catharsis"],
    summary: "Complete blueprint and modular phrase bank calibrated for the IB Literature Paper 2 comparative examination.",
    fullTextContent: `[THE C-O-R-E-S MEMORY ARCHITECTURE]
C — Conceptual Thesis & Historical Dual-Context (~120 words)
O — Opening Literary Spark: Metaphysical/Form Genesis (~220 words)
R — Rising Dramatic Performativity: Domestic & Stage Staging (~220 words)
E — Escalating Retributive Climax: Somatic Breakdown & Anagnorisis (~220 words)
S — Structural Synthesis & Transcendent Catharsis (~120 words)

[HIGH-YIELD COMPARATIVE BRIDGE FORMULAS]
1. Whereas Shakespeare utilizes [dramatic technique / staging] to externalize [Character A]'s psychic decay, [Author B] relies on [prose craft / narration] to mirror [Character B]'s alienation.
2. In a striking divergence of genre conventions, Shakespeare's theatrical medium physically stages [concept] through acoustic shocks, whereas [Author B]'s interior narrative voice emphasizes the quiet, suffocating claustrophobia of societal repression.
3. Both texts converge upon the unsettling revelation that outward compliance inevitably calcifies into profound spiritual estrangement.
4. Shakespeare's use of trochaic meter destabilizes Jacobean epistemological certainty, a formal disorientation mirrored in [Author B]'s fractured temporal chronology.

[SAMPLE 30/30 EXAMINER MARKING BREAKDOWN]
• Criterion A (10/10): Nuanced historical grounding in 1605 Gunpowder Plot and Jacobean political theory; sustained comparative parity between both texts across every body paragraph.
• Criterion B (10/10): Granular textual close reading addressing prosody (trochaic tetrameter vs iambic pentameter), acoustic stagecraft (knocking), and sartorial metaphors ('giant's robe').
• Criterion C (5/5): Crystal-clear tripartite development moving logically from Metaphysical Origin -> Domestic Masking -> Psychic/Political Collapse.
• Criterion D (5/5): Flawless academic register employing literary terminology naturally without dropped quotations.`,
    notebookLmPrompts: [
      "How can I adapt the universal C-O-R-E-S formula to answer any arbitrary Paper 2 guiding question?",
      "Review my comparative thesis statement to ensure it balances both authors equally under Criterion A and C.",
      "Identify 5 high-yield literary terms I can seamlessly integrate into my essay on dramatic craft.",
      "What are the most common traps that prevent an otherwise well-written essay from reaching Level 7 (27+ marks)?"
    ],
    audioDeepDiveOverview: {
      title: "Audio Deep Dive: Cracking the IB Literature Paper 2 Rubric",
      duration: "10 min overview",
      hostsSummary: "Two veteran IB examiners reveal exactly what distinguishes a safe 22-mark Level 5 essay from a commanding 29-mark Grade 7 exemplar.",
      keyDebatePoints: [
        "Why chronological block essays fail Criterion C and how the comparative bridge sentence fixes it",
        "How to weave historical context seamlessly into Criterion A without writing a history report",
        "The power of prosody and acoustic staging in securing full marks for Criterion B"
      ]
    }
  }
];
