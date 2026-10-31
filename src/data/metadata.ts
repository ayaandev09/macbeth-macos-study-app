import {
  ThemeId,
  ThemeDefinition,
  SymbolItem,
  CharacterProfile,
  RhetoricTerm,
} from "./types";

export const THEMES_TAXONOMY: Record<ThemeId, ThemeDefinition> = {
  ambition: {
    id: "ambition",
    name: "Vaulting Ambition & Moral Corrosion",
    shortName: "Ambition",
    shakespeareanTag: "VAULTING AMBITION / BLACK DESIRES",
    color: "#f43f5e",
    badgeBg: "rgba(244, 63, 94, 0.14)",
    badgeBorder: "rgba(244, 63, 94, 0.42)",
    badgeText: "#fecdd3",
    glowColor: "rgba(244, 63, 94, 0.25)",
    description:
      "Unchecked desire for royal power that overrides loyalty, kinship, and hospitality. Unlike Lady Macbeth—who fails to foresee the psychological cost of murder—Macbeth's tragedy is that he clearly foresees his own damnation and still yields to ambition.",
    coreMechanism:
      "Conscious self-corruption: Macbeth moves from fighting to take nothing for himself ('The service and loyalty I owe, in doing it, pays itself') to viewing the world solely in terms of what he can seize by force.",
  },
  fate: {
    id: "fate",
    name: "Fate, Prophecy & Free Will",
    shortName: "Fate vs. Free Will",
    shakespeareanTag: "WEIRD SISTERS / EQUIVOCATION",
    color: "#a855f7",
    badgeBg: "rgba(168, 85, 247, 0.14)",
    badgeBorder: "rgba(168, 85, 247, 0.42)",
    badgeText: "#e9d5ff",
    glowColor: "rgba(168, 85, 247, 0.25)",
    description:
      "The philosophical tension between supernatural predestination ('wyrd') and human agency. While the Weird Sisters plant the seed of kingship, they never command Macbeth to murder Duncan; Macbeth actively chooses regicide and later tries—and fails—to violently alter fate by hunting Banquo's line.",
    coreMechanism:
      "Self-fulfilling & equivocal prophecy: the witches speak literal half-truths ('none of woman born', 'Birnam Wood') that breed fatal overconfidence ('security / Is mortals' chiefest enemy').",
  },
  guilt: {
    id: "guilt",
    name: "Blood, Guilt & Psychological Torment",
    shortName: "Guilt & Blood",
    shakespeareanTag: "MURDERED SLEEP / DAMNED SPOT",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.16)",
    badgeBorder: "rgba(239, 68, 68, 0.48)",
    badgeText: "#fecaca",
    glowColor: "rgba(239, 68, 68, 0.28)",
    description:
      "The inescapable internal retribution of conscience. While Macbeth is immediately wracked by auditory and visual hallucinations ('Macbeth does murder sleep', Banquo's ghost) and hardens into nihilistic numbness, Lady Macbeth starts callously calm ('a little water clears us of this deed') before imploding into sleepwalking madness.",
    coreMechanism:
      "Chiastic psychological inversion: Macbeth transitions from acute guilt to numb sociopathy ('Tomorrow, and tomorrow'), whereas Lady Macbeth transitions from ruthless calculation to fatal remorse ('Out, damned spot!').",
  },
  manhood: {
    id: "manhood",
    name: "Gender, Cruelty & True Manhood",
    shortName: "Manhood & Gender",
    shakespeareanTag: "UNSEX ME HERE / FEEL IT AS A MAN",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.14)",
    badgeBorder: "rgba(245, 158, 11, 0.42)",
    badgeText: "#fde68a",
    glowColor: "rgba(245, 158, 11, 0.25)",
    description:
      "The toxic equation of masculinity with remorseless violence. Lady Macbeth manipulates Macbeth by equating manhood with murderous audacity ('When you durst do it, then you were a man'), whereas Macduff provides the moral antidote: true manhood requires compassion, honor, and grief ('I must also feel it as a man').",
    coreMechanism:
      "Perversion vs. redemption of masculinity: Macbeth strips his soul of empathy to 'dare do all that may become a man,' while Macduff unites martial valor with moral vulnerability.",
  },
  nature: {
    id: "nature",
    name: "Cosmic Order vs. Natural Convulsion",
    shortName: "Cosmic Nature",
    shakespeareanTag: "CANNIBAL HORSES / NATURE SEEMS DEAD",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.14)",
    badgeBorder: "rgba(16, 185, 129, 0.42)",
    badgeText: "#a7f3d0",
    glowColor: "rgba(16, 185, 129, 0.25)",
    description:
      "The Jacobean Great Chain of Being: killing the divinely appointed King Duncan fractures the cosmos. The sun is eclipsed at noon, owls kill falcons, and horses turn cannibalistic (2.4), demonstrating that political treason unleashes ecological and cosmic rebellion.",
    coreMechanism:
      "Sympathetic macrocosmic recoil: moral transgression in the human body politic triggers terrifying convulsions across the natural and meteorological spheres.",
  },
  appearance: {
    id: "appearance",
    name: "Appearance vs. Reality & Equivocation",
    shortName: "Appearance vs Reality",
    shakespeareanTag: "FAIR IS FOUL / FALSE FACE",
    color: "#38bdf8",
    badgeBg: "rgba(56, 189, 248, 0.14)",
    badgeBorder: "rgba(56, 189, 248, 0.42)",
    badgeText: "#bae6fd",
    glowColor: "rgba(56, 189, 248, 0.25)",
    description:
      "The deceitful discrepancy between outward show and inward truth. Epitomized by Lady Macbeth's counsel to 'look like th' innocent flower, / But be the serpent under't' (1.5) and the Porter's disquisition on equivocation (2.3), the play questions whether truth can ever be determined by surface appearances.",
    coreMechanism:
      "Optical and rhetorical duplicity: characters wear 'borrowed robes' and 'false faces' while demonic spirits speak double-edged riddles that manipulate perception.",
  },
  violence: {
    id: "violence",
    name: "Tyranny, Bloodshed & The Spiral of Slaughter",
    shortName: "Tyranny & Violence",
    shakespeareanTag: "BLOOD WILL HAVE BLOOD / BUTCHER",
    color: "#fb7185",
    badgeBg: "rgba(251, 113, 133, 0.14)",
    badgeBorder: "rgba(251, 113, 133, 0.42)",
    badgeText: "#fecdd3",
    glowColor: "rgba(251, 113, 133, 0.25)",
    description:
      "The intoxicating and addictive nature of violence. Initially celebrated in service of the state (1.2), violence becomes illegitimate through regicide (2.2), compulsive to preserve power (Banquo, 3.1), and finally gratuitously monstrous (the slaughter of Lady Macduff and her babes, 4.2).",
    coreMechanism:
      "Inertial escalation: 'Things bad begun make strong themselves by ill' (3.2)—each murder does not secure Macbeth's throne, but necessitates the next murder.",
  },
  supernatural: {
    id: "supernatural",
    name: "Supernatural Agency & The Demonic Realm",
    shortName: "Supernatural",
    shakespeareanTag: "INSTRUMENTS OF DARKNESS / HEATH",
    color: "#818cf8",
    badgeBg: "rgba(129, 140, 248, 0.14)",
    badgeBorder: "rgba(129, 140, 248, 0.42)",
    badgeText: "#c7d2fe",
    glowColor: "rgba(129, 140, 248, 0.25)",
    description:
      "From the Weird Sisters' trochaic tetrameter chants on the heath and Hecate's cauldron brew to the air-drawn dagger, Banquo's silent ghost, and the three prophetic Apparitions, the play inhabits a liminal borderland between demonic agency and psychological projection.",
    coreMechanism:
      "Ontological ambiguity: Shakespeare deliberately blurs whether visions (the floating dagger, Banquo's ghost) are objective demonic phenomena or projections of a 'heat-oppressed brain'.",
  },
};

export const SYMBOLS_LEXICON: SymbolItem[] = [
  {
    id: "blood",
    name: "Blood & Bloodstained Hands",
    category: "Element",
    firstAppearance: "Act 1, Scene 2 (The Bleeding Captain) & Act 2, Scene 2 (Duncan's Murder)",
    meaning:
      "Initially a mark of martial valor and honor ('What bloody man is that?'), blood swiftly mutates into an indelible symbol of guilt and moral stain.",
    evolution:
      "In 2.2, Macbeth cries that his hands will 'the multitudinous seas incarnadine, / Making the green one red,' while Lady Macbeth dismisses it ('A little water clears us of this deed'). By 3.4, Macbeth wades in a river of blood ('I am in blood / Stepped in so far'), and in 5.1 Lady Macbeth frantically scrubs invisible blood from her hands ('Out, damned spot!').",
  },
  {
    id: "sleep",
    name: "Sleep & Insomnia",
    category: "State",
    firstAppearance: "Act 1, Scene 3 (Sailor Curse) & Act 2, Scene 2 ('Macbeth does murder sleep')",
    meaning:
      "Symbolizes innocence, natural renewal, a quiet conscience, and divine grace ('great nature's second course, / Chief nourisher in life's feast').",
    evolution:
      "Because Macbeth slaughters King Duncan in his sleep—violating sacred hospitality—he hears a voice cry 'Sleep no more! Macbeth does murder sleep.' Thereafter, Banquo struggles with 'cursed thoughts' in repose (2.1), Macbeth envies the murdered Duncan who 'sleeps well' after 'life's fitful fever' (3.2), and Lady Macbeth's sleep is destroyed by somnambulism (5.1).",
  },
  {
    id: "floating-dagger",
    name: "The Air-Drawn Floating Dagger",
    category: "Apparition",
    firstAppearance: "Act 2, Scene 1 ('Is this a dagger which I see before me')",
    meaning:
      "Externalizes the liminal threshold between temptation and regicide—representing both supernatural solicitation and the projection of Macbeth's 'heat-oppressed brain'.",
    evolution:
      "At first the phantom dagger hovers with its handle toward Macbeth's hand; moments later, 'gouts of blood' appear on its blade and dudgeon, prefiguring the physical daggers Macbeth forgets to leave behind in 2.2.",
  },
  {
    id: "banquos-ghost",
    name: "The Ghost of Banquo at the Banquet",
    category: "Apparition",
    firstAppearance: "Act 3, Scene 4 (Royal Banquet at Forres)",
    meaning:
      "Embodies the return of the repressed, the failure of violence to silence conscience ('blood will have blood'), and the illegitimacy of Macbeth's usurped throne.",
    evolution:
      "Sitting silently in Macbeth's own royal chair while invisible to the assembled Scottish thanes, the Ghost shatters the public ceremony of kingship, forces Lady Macbeth to dissolve the court, and reappears in 4.1 smiling at the line of eight Stuart kings.",
  },
  {
    id: "three-apparitions",
    name: "The Three Cauldron Apparitions & Stuart Mirror",
    category: "Prophecy",
    firstAppearance: "Act 4, Scene 1 (The Witches' Cavern)",
    meaning:
      "Each apparition is a densely symbolic emblem of Macbeth's doom: (1) The Armed Head = Macbeth's own severed head (or Macduff's rebellion); (2) The Bloody Child = Macduff 'untimely ripped' via Caesarean section; (3) The Crowned Child with a Tree = Malcolm camouflaging his army with Birnam Wood branches.",
    evolution:
      "Followed by the Procession of Eight Kings—the eighth carrying a glass (mirror) reflecting King James I—the apparitions weaponize equivocation, lulling Macbeth into tyrannical overconfidence before each riddle comes true in Act 5.",
  },
  {
    id: "weather-unnatural-nature",
    name: "Thunder, Darkness at Noon & Cannibal Horses",
    category: "Nature",
    firstAppearance: "Act 1, Scene 1 ('Thunder and lightning') & Act 2, Scene 4 (Old Man & Ross)",
    meaning:
      "Reflects the Jacobean doctrine of macrocosmic correspondence: when the divinely appointed King is murdered, the natural hierarchy (the Great Chain of Being) fractures in sympathetic revulsion.",
    evolution:
      "Starts with the witches' storm (1.1), intensifies when the stars hide their fires (1.4, 2.1), erupts on the night of Duncan's murder with chimneys blown down and 'strange screams of death' (2.3), and culminates in 2.4 with darkness strangling the daytime sun, a mousing owl killing a falcon, and Duncan's noble horses eating each other.",
  },
  {
    id: "ill-fitting-robes",
    name: "Borrowed Robes & The Giant's Cloak",
    category: "Element",
    firstAppearance: "Act 1, Scene 3 ('Why do you dress me / In borrowed robes?')",
    meaning:
      "Clothing imagery tracks the gap between legitimate royal authority and Macbeth's stolen, unnatural titles.",
    evolution:
      "In 1.3 and 1.7, new honors are compared to 'strange garments' that cleave only with use; by 5.2, Angus declares that Macbeth's stolen kingship 'hangs loose about him, like a giant's robe / Upon a dwarfish thief.'",
  },
  {
    id: "milk-and-birds",
    name: "Breast Milk, Gall & Nesting Birds",
    category: "Nature",
    firstAppearance: "Act 1, Scene 5 ('milk of human kindness' / 'take my milk for gall')",
    meaning:
      "Milk and nesting birds (the temple-haunting martlets in 1.6, Lady Macduff's 'poor wren' in 4.2) symbolize maternal nurture, natural kinship, and domestic sanctuary.",
    evolution:
      "Perverted when Lady Macbeth demands spirits turn her breast milk into poison ('gall') and boasts she would dash her nursing infant's brains out (1.7), and when Macbeth slaughters the defenseless 'chickens and their dam' at Fife (4.2–4.3).",
  },
];

export const CHARACTERS_DOSSIER: CharacterProfile[] = [
  {
    id: "macbeth",
    name: "Macbeth",
    role: "Thane of Glamis ➔ Thane of Cawdor ➔ Usurping King of Scotland",
    factionStatus: "House of Macbeth",
    fate: "Beheaded in single combat by Macduff at Dunsinane (5.8.34 / 5.11.20); his severed head is displayed as an emblem of tyrannical usurpery ('this dead butcher').",
    psychologicalProfile:
      "Introduced as 'Bellona's bridegroom'—a warrior of ferocious courage loyal to King Duncan—Macbeth harbors an active, vivid moral imagination that tortures him before and after regicide. Unlike cold-blooded Machiavellians, he foresees his own damnation in detail ('judgment here', 'deep damnation of his taking-off'). Goaded by his wife and the Weird Sisters, he deliberately deadens his conscience, transitioning from acute agonizing guilt in Act 2 to paranoid suspicion in Act 3, manic cruelty in Act 4, and deadened existential nihilism in Act 5.",
    symbolicFunction:
      "The quintessential Aristotelian tragic hero whose fall illustrates the conscious destruction of the soul when power is pursued through regicide, inverting the natural order and ending in existential despair.",
    tragicFlaw:
      "Vaulting ambition (*hamartia*) coupled with moral weakness: knowing the objective evil of regicide yet yielding to peer pressure, feminine taunts regarding his manhood, and equivocal prophecies.",
    foilComparisons: [
      {
        foilName: "Banquo",
        distinction:
          "Both hear supernatural prophecies on the heath; Banquo treats them with skepticism and prayers for restraint, whereas Macbeth translates them into bloody action.",
      },
      {
        foilName: "Macduff",
        distinction:
          "Macbeth defines manhood as remorseless cruelty ('I dare do all that may become a man'); Macduff defines true manhood as embracing grief and moral honor ('I must also feel it as a man').",
      },
    ],
    holinshedDivergence:
      "In Holinshed's *Chronicles* (1577/1587), Macbeth ruled Scotland for 10 years with justice and wisdom before becoming tyrannical; Shakespeare condenses the timeline into a frantic, hallucinatory nightmare of continuous violence to intensify tragic momentum and highlight the immediate illegitimacy of usurped power.",
    arcMilestones: [
      {
        act: "Act I",
        title: "The Loyal Champion Corrupted",
        stage: "Valorous Hero ➔ Tempted Regicide",
        quoteRef: "1.7.27–28: 'Vaulting ambition, which o'erleaps itself / And falls on the other.'",
        analysis:
          "Consciously dissects the folly of regicide in soliloquy, noting Duncan's meek virtues, but is overwhelmed when Lady Macbeth questions his courage and virility.",
      },
      {
        act: "Act II",
        title: "The Horrified Regicide",
        stage: "Perpetrator Traumatized by Conscience",
        quoteRef: "2.2.59–61: 'Will all great Neptune's ocean wash this blood / Clean from my hand?'",
        analysis:
          "Immediately plunged into sensory hallucinations ('Macbeth does murder sleep'); terrified of his bloodstained hands and inability to utter 'Amen'.",
      },
      {
        act: "Act III",
        title: "The Paranoid Usurper",
        stage: "Suspicious Tyrant ➔ Alienated King",
        quoteRef: "3.1.48–49: 'To be thus is nothing, / But to be safely thus.'",
        analysis:
          "Paranoid that Banquo's heirs will inherit his 'fruitless crown,' Macbeth organizes Banquo's assassination without consulting Lady Macbeth, but breaks down when Banquo's Ghost occupies his chair.",
      },
      {
        act: "Act IV",
        title: "The Despotic Butcher",
        stage: "Morally Numbed Slaughterer",
        quoteRef: "4.1.146–148: 'The very firstlings of my heart shall be / The firstlings of my hand.'",
        analysis:
          "Lulled into false invincibility by the Cauldron Apparitions, Macbeth abandons all deliberation, ordering the gratuitous massacre of Lady Macduff and her children at Fife.",
      },
      {
        act: "Act V",
        title: "The Nihilistic Despot",
        stage: "Existential Despair ➔ Final Defiance",
        quoteRef: "5.5.19–28: 'Tomorrow, and tomorrow, and tomorrow... Life's but a walking shadow.'",
        analysis:
          "Stripped of wife, thanes, and hope, he reduces existence to a meaningless tale 'signifying nothing,' yet dies with martial fury on the battlefield against Macduff.",
      },
    ],
  },
  {
    id: "lady-macbeth",
    name: "Lady Macbeth",
    role: "Countess of Inverness ➔ Queen of Scotland & Co-Conspirator",
    factionStatus: "House of Macbeth",
    fate: "Tormented by somnambulistic guilt ('Out, damned spot!') and dies offstage by suicide ('by self and violent hands') in Act 5, Scene 5.",
    psychologicalProfile:
      "Rhetorically brilliant, ferocious, and single-minded in Act 1, Lady Macbeth believes morality is a frail luxury and that willpower can suppress natural compassion. Begging demonic spirits to 'unsex' her and turn her milk to gall, she engineers Duncan's murder and steadies Macbeth's trembling nerves. However, her strength is a fragile performance: unable to kill Duncan herself because he resembled her father (2.2), she is gradually shut out of Macbeth's plans in Act 3, falling into deep isolation and catastrophic psychic disintegration in Act 5.",
    symbolicFunction:
      "Demonstrates the tragedy of repressed conscience: proves that human nature cannot be surgically 'unsexed' or scrubbed clean with 'a little water' without the psyche collapsing into madness.",
    tragicFlaw:
      "Hubristic belief that human conscience and gendered empathy can be discarded by sheer force of will without metaphysical consequence.",
    foilComparisons: [
      {
        foilName: "Lady Macduff",
        distinction:
          "Lady Macbeth renounces maternal nurture ('dashed the brains out'); Lady Macduff fiercely defends her household and cherishes her children like a 'poor wren'.",
      },
      {
        foilName: "Macbeth",
        distinction:
          "Lady Macbeth starts composed and collapses into somnambulistic despair; Macbeth starts hysterical and hardens into numb sociopathy (chiastic psychological trajectory).",
      },
    ],
    holinshedDivergence:
      "In Holinshed, Donwald's wife encourages his murderous ambition, but Shakespeare significantly amplifies Lady Macbeth's demonic invocations, rhetorical manipulation, and sleepwalking tragedy to create one of literature's most complex explorations of guilt.",
    arcMilestones: [
      {
        act: "Act I",
        title: "Invocation of Demonic Will",
        stage: "Ambitious Architect of Treason",
        quoteRef: "1.5.40–43: 'Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty!'",
        analysis:
          "Subverts Jacobean gender norms by commanding demonic forces to strip her of feminine pity, shaming Macbeth's manhood into murdering Duncan.",
      },
      {
        act: "Act II",
        title: "The Pragmatic Accomplice",
        stage: "Composed Crisis Manager",
        quoteRef: "2.2.66–67: 'A little water clears us of this deed: / How easy is it, then!'",
        analysis:
          "Returns the daggers to Duncan's bedchamber and smears the sleeping grooms with blood, mistakenly believing guilt can be washed away with physical water.",
      },
      {
        act: "Act III",
        title: "The Sidelined Queen",
        stage: "Secret Melancholy & Public Cover-Up",
        quoteRef: "3.2.4–7: 'Nought's had, all's spent, / Where our desire is got without content: / 'Tis safer to be that which we destroy.'",
        analysis:
          "Confesses private despair when alone; desperately attempts to save face at the banquet during Macbeth's breakdown before dismissing the court.",
      },
      {
        act: "Act IV",
        title: "The Silent Implosion",
        stage: "Absence & Psychic Fracturing",
        quoteRef: "Offstage: Isolated in Dunsinane as Macbeth visits the Witches cavern.",
        analysis:
          "Completely absent from Act 4 as Macbeth descends into unchecked butchery, highlighting their profound marital and psychological estrangement.",
      },
      {
        act: "Act V",
        title: "The Somnambulistic Ruin",
        stage: "Madness, Guilt & Suicide",
        quoteRef: "5.1.30–31: 'Out, damned spot! Out, I say! ... Hell is murky.'",
        analysis:
          "Relives Duncan's murder, Banquo's burial, and Lady Macduff's slaughter in fragmented prose while frantically scrubbing her hands, ending in suicide.",
      },
    ],
  },
  {
    id: "banquo",
    name: "Banquo",
    role: "Scottish General, Lord of Lochaber & Father of Fleance",
    factionStatus: "Scottish Thanes",
    fate: "Ambushed and murdered by Macbeth's hired assassins (3.3); returns as a silent Ghost at the royal banquet (3.4) and in the Cauldron mirror vision (4.1).",
    psychologicalProfile:
      "A battle-hardened, perceptive, and morally vigilant noble. Although the Weird Sisters' prophecy that his children will be kings stirs 'cursed thoughts' in his dreams (2.1), Banquo brings his temptations into the open through prayer. He refuses to compromise his 'allegiance clear' for political advancement. Though suspicious of Macbeth's rise ('I fear / Thou played'st most foully for't', 3.1), he remains politically cautious until murdered.",
    symbolicFunction:
      "The primary moral foil to Macbeth and ancestor of the Stuart dynasty (King James I): proves that one can hear the exact same supernatural temptation and choose honor over treason.",
    tragicFlaw:
      "Excessive passivity and caution: despite suspecting Macbeth played 'most foully' for the crown, he fails to act or flee before Macbeth ambushes him.",
    foilComparisons: [
      {
        foilName: "Macbeth",
        distinction:
          "Banquo recognizes the Witches as 'instruments of darkness' who win us with honest trifles to betray us; Macbeth embraces their prophecies as divine mandates.",
      },
    ],
    holinshedDivergence:
      "In Holinshed's *Chronicles*, Banquo was an active accomplice in the murder of King Duncan; Shakespeare completely exonerated Banquo to present a blameless, pious figure flattering King James I, who traced his lineage to Banquo.",
    arcMilestones: [
      {
        act: "Act I",
        title: "Skeptical Witness to Prophecy",
        stage: "Prudent Realist",
        quoteRef: "1.3.123–126: 'The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.'",
        analysis:
          "Warns Macbeth against putting faith in demonic agents who use partial truths as bait.",
      },
      {
        act: "Act II",
        title: "The Vigilant Conscience",
        stage: "Tempted Yet Principled",
        quoteRef: "2.1.26–28: 'So I lose none / In seeking to augment it, but still keep / My bosom franchised and allegiance clear.'",
        analysis:
          "Rejects Macbeth's veiled bribery; confesses his troubled dreams but prays for heavenly restraint against cursed thoughts.",
      },
      {
        act: "Act III",
        title: "The Martyred Ancestor",
        stage: "Suspicious Observer ➔ Murder Victim ➔ Avenging Specter",
        quoteRef: "3.1.1–3: 'Thou hast it now: King, Cawdor, Glamis, all... and I fear / Thou played'st most foully for't.'",
        analysis:
          "Voices suspicion of Macbeth's regicide; dies shouting for Fleance to 'fly, fly, fly' so the royal lineage may survive, returning as a ghostly terror at the banquet.",
      },
      {
        act: "Act IV",
        title: "The Eternal Dynasty",
        stage: "Supernatural Vindication",
        quoteRef: "4.1.122–124: 'The blood-boltered Banquo smiles upon me, / And points at them for his.'",
        analysis:
          "Smiles in the Cauldron mirror vision as eight kings descended from him march across the stage, proving Macbeth's violent regicide was utterly in vain.",
      },
      {
        act: "Act V",
        title: "The Vindicated Lineage",
        stage: "Historical Legacy",
        quoteRef: "Malcolm's coronation at Scone anticipates the historical fulfillment of Banquo's line through King James.",
        analysis:
          "Banquo's legacy triumphs over Macbeth's barren scepter as Scotland is cleansed of tyranny.",
      },
    ],
  },
  {
    id: "macduff",
    name: "Macduff",
    role: "Thane of Fife & Supreme Champion of Scotland",
    factionStatus: "English Alliance",
    fate: "Survives the slaughter of his household, decapitates Macbeth in single combat ('untimely ripped'), and hails Malcolm as rightful King (5.8–5.11).",
    psychologicalProfile:
      "A plain-spoken, deeply loyal, and instinctively moral patriot. The first to discover Duncan's corpse and suspect foul play, Macduff refuses to attend Macbeth's coronation at Scone (2.4) or his banquet (3.4). While his flight to England leaves his wife and children vulnerable at Fife, his reaction to their murder reveals his profound emotional depth. Uniting righteous martial vengeance with raw grief, he embodies true heroism.",
    symbolicFunction:
      "The divine minister of nemesis and restorative justice: fulfills the Witches' riddles ('none of woman born', 'Beware Macduff') while redefining masculinity through emotional authenticity.",
    tragicFlaw:
      "Political impetuousness: abandoning his castle and defenseless family at Fife without military protection to rally Malcolm in England.",
    foilComparisons: [
      {
        foilName: "Macbeth",
        distinction:
          "Macbeth severed ties with emotion to commit atrocities; Macduff insists on feeling his grief as a man before converting it into holy retribution.",
      },
    ],
    holinshedDivergence:
      "Shakespeare maintains Macduff's legendary Caesarean birth and role in slaying Macbeth from Holinshed, but intensifies the poignant onstage horror of his family's massacre (4.2) and his emotional breakdown (4.3) to elevate him into the moral center of the play.",
    arcMilestones: [
      {
        act: "Act I",
        title: "The Uncorrupted Noble",
        stage: "Silent Pillar of Loyalty",
        quoteRef: "Absent from Act 1, underscoring his distance from the corrupting court politics and witchcraft of the heath.",
        analysis:
          "Shakespeare deliberately delays Macduff's entrance until 2.3 to introduce him as an untainted moral force.",
      },
      {
        act: "Act II",
        title: "The Discoverer of Sacrilege",
        stage: "Horrified Royalist",
        quoteRef: "2.3.65–66: 'O horror, horror, horror! Tongue nor heart / Cannot conceive nor name thee!'",
        analysis:
          "Discovers Duncan's corpse, comparing it to the destruction of the Lord's anointed temple; immediately questions Macbeth's slaying of the grooms.",
      },
      {
        act: "Act III",
        title: "The Principled Dissident",
        stage: "Silent Rebel",
        quoteRef: "3.6.21–23: 'Sent he to Macduff? / He did; and with an absolute Sir, not I, / The cloudy messenger turns me his back.'",
        analysis:
          "Refuses to attend the banquet, boycots Dunsinane, and rides to England to rally King Edward and Malcolm.",
      },
      {
        act: "Act IV",
        title: "The Grieving Father & Redefined Man",
        stage: "Tested Exile ➔ Bereaved Avenger",
        quoteRef: "4.3.220–222: 'Dispute it like a man. / I shall do so; / But I must also feel it as a man.'",
        analysis:
          "Passes Malcolm's integrity test; upon learning of his family's massacre, weeps openly and vows to confront Macbeth face-to-face.",
      },
      {
        act: "Act V",
        title: "The Minister of Nemesis",
        stage: "Triumphant Champion",
        quoteRef: "5.8.15–16: 'Macduff was from his mother's womb / Untimely ripped.'",
        analysis:
          "Shatters Macbeth's supernatural shield with the revelation of his Caesarean birth, slays the tyrant, and presents his severed head to King Malcolm.",
      },
    ],
  },
  {
    id: "king-duncan",
    name: "King Duncan",
    role: "Saintly King of Scotland & Father of Malcolm and Donalbain",
    factionStatus: "House of Duncan",
    fate: "Assassinated in his sleep by Macbeth at Inverness Castle in Act 2, Scene 2.",
    psychologicalProfile:
      "A benevolent, humble, and pious monarch whose reign is marked by generosity and organic growth ('I have begun to plant thee, and will labour / To make thee full of growing', 1.4). His tragic limitation is his profound inability to read deceptive human hearts ('There's no art / To find the mind's construction in the face', 1.4). Even after being betrayed by the first Thane of Cawdor, he walks blissfully into Macbeth's castle, admiring its pleasant air.",
    symbolicFunction:
      "The sanctified representative of God on earth under the Great Chain of Being ('The Lord's anointed temple'). His assassination is not merely political murder, but a cosmic sacrilege that tears nature apart.",
    tragicFlaw:
      "Naive credulity and excessive trust in outward appearances, leaving the crown defenseless against smiling traitors.",
    foilComparisons: [
      {
        foilName: "Macbeth",
        distinction:
          "Duncan is a legitimate, selfless ruler who builds up his thanes; Macbeth is an illegitimate, paranoid tyrant who bleeds and cannibalizes his own kingdom.",
      },
      {
        foilName: "Malcolm",
        distinction:
          "Duncan is easily deceived by flattery; his son Malcolm learns from this mistake by rigorously testing Macduff before trusting him in 4.3.",
      },
    ],
    holinshedDivergence:
      "In Holinshed, Duncan was a feeble, soft-hearted, and ineffective ruler whose weakness invited rebellion; Shakespeare transformed him into a venerable, holy, and universally loved king to maximize the heinous sacrilege of Macbeth's regicide.",
    arcMilestones: [
      {
        act: "Act I",
        title: "The Gracious Sovereign",
        stage: "Generous Monarch",
        quoteRef: "1.4.28–29: 'I have begun to plant thee, and will labour / To make thee full of growing.'",
        analysis:
          "Rewards Macbeth with Cawdor's title; establishes Malcolm as Prince of Cumberland, inadvertently provoking Macbeth's 'black and deep desires.'",
      },
      {
        act: "Act II",
        title: "The Martyred Father-King",
        stage: "Sacrificial Victim",
        quoteRef: "2.3.67–69: 'Most sacrilegious murder hath broke ope / The Lord's anointed temple, and stole thence / The life o' the building!'",
        analysis:
          "Killed while asleep after gifting Lady Macbeth a diamond; his silver skin laced with golden blood becomes the catalyst for cosmic disorder.",
      },
      {
        act: "Act III",
        title: "Peace in the Grave",
        stage: "Envied Ghostly Presence",
        quoteRef: "3.2.22–24: 'Duncan is in his grave; / After life's fitful fever he sleeps well; / Treason has done his worst.'",
        analysis:
          "Macbeth envies the dead Duncan, recognizing that the king he murdered possesses the eternal peace that Macbeth will never experience again.",
      },
      {
        act: "Act IV",
        title: "The Ideal of Royal Sanctity",
        stage: "Moral Benchmark",
        quoteRef: "4.3.108–109: 'Thy royal father / Was a most sainted king.'",
        analysis:
          "Macduff cites Duncan's sainted memory when weeping over Scotland's degradation under Macbeth's tyrannical usurpery.",
      },
      {
        act: "Act V",
        title: "The Restored Line",
        stage: "Dynastic Legacy",
        quoteRef: "5.11: Malcolm's coronation restores the saintly royal bloodline to Scone.",
        analysis:
          "Duncan's legacy is completed as his son Malcolm cleanses Scotland and bestows the title of earls upon his loyal thanes.",
      },
    ],
  },
  {
    id: "malcolm",
    name: "Malcolm",
    role: "Prince of Cumberland ➔ Crowned King of Scotland at Scone",
    factionStatus: "House of Duncan",
    fate: "Rallies English and Scottish troops at Birnam Wood, overthrows Macbeth, and is crowned King of Scotland in Act 5, Scene 11.",
    psychologicalProfile:
      "Cautious, intelligent, and politically astute. Realizing that 'To show an unfelt sorrow is an office / Which the false man does easy' (2.3), he flees to England to preserve his life. Unlike his trusting father, Malcolm combines moral legitimacy with sharp political skepticism. In 4.3, he feigns debauchery and avarice to test Macduff's incorruptibility, and in 5.4 he exhibits tactical brilliance by ordering the Birnam Wood camouflage.",
    symbolicFunction:
      "Represents the ideal Jacobean ruler: a harmonious synthesis of Duncan's saintly virtues and Macduff's martial defense, restoring order 'by the grace of Grace.'",
    tragicFlaw:
      "Initial political timidity in fleeing Scotland, leaving his countrymen to suffer Macbeth's initial reign of terror before finding his voice.",
    foilComparisons: [
      {
        foilName: "Macbeth",
        distinction:
          "Macbeth claims titles through bloodshed and fraud; Malcolm earns kingship through patience, testing, and legitimate hereditary right.",
      },
    ],
    holinshedDivergence:
      "Shakespeare follows Holinshed closely regarding Malcolm's English exile and testing of Macduff, but enriches his character to represent King James I's ideal of statecraft (*Basilikon Doron*).",
    arcMilestones: [
      {
        act: "Act I",
        title: "The Designated Heir",
        stage: "Prince of Cumberland",
        quoteRef: "1.4.37–39: 'We will establish our estate upon / Our eldest, Malcolm, whom we name hereafter / The Prince of Cumberland.'",
        analysis:
          "Named heir to the throne, becoming the unexpected political obstacle that forces Macbeth to contemplate murder.",
      },
      {
        act: "Act II",
        title: "The Cautious Exile",
        stage: "Prudent Fugitive",
        quoteRef: "2.3.136–137: 'There's daggers in men's smiles: the near in blood, / The nearer bloody.'",
        analysis:
          "Recognizes the false grief of court attendees after Duncan's murder and flees to England to avoid assassination.",
      },
      {
        act: "Act III",
        title: "The Diplomatic Statesman",
        stage: "Exiled Leader in Waiting",
        quoteRef: "3.6.24–27: 'The son of Duncan, / From whom this tyrant holds the due of birth, / Lives in the English court.'",
        analysis:
          "Receives sanctuary from King Edward the Confessor and begins gathering English military resources.",
      },
      {
        act: "Act IV",
        title: "The Master of Discretion",
        stage: "Testing Ruler",
        quoteRef: "4.3.114–117: 'Macduff, this noble passion, / Child of integrity, hath from my soul / Wiped the black scruples.'",
        analysis:
          "Tests Macduff's patriotism with false self-accusations, proving his tactical superiority and readiness to govern.",
      },
      {
        act: "Act V",
        title: "The Restorative King",
        stage: "Triumphant Monarch",
        quoteRef: "5.11.31–39: 'What's more to do, / Which would be planted newly with the time... by the grace of Grace / We will perform in measure, time, and place.'",
        analysis:
          "Orders the Birnam Wood camouflage, captures Dunsinane, invents the Scottish peerage (earls), and restores divine harmony at Scone.",
      },
    ],
  },
  {
    id: "weird-sisters",
    name: "The Weird Sisters & Hecate",
    role: "Demonic Prophets of Fate ('Wyrd') on the Scottish Heath",
    factionStatus: "The Weird Sisters",
    fate: "Vanish into thin air in Act 4, Scene 1 after unleashing the Four Visions that seal Macbeth's hubris.",
    psychologicalProfile:
      "Malicious, enigmatic, and grotesque, speaking in trochaic tetrameter couplets that contrast with noble blank verse. They do not coerce human will; rather, they diagnose pre-existing hidden desires and weaponize linguistic equivocation to trap the proud in their own sins. Hecate clarifies their demonic purpose in 3.5: to draw Macbeth into fatal overconfidence ('security / Is mortals' chiefest enemy').",
    symbolicFunction:
      "Embody cosmic disorder, temptation, and moral ambiguity ('Fair is foul'). Tailored directly to King James I's daemonological fascinations.",
    tragicFlaw: "Incapable of creating anything; can only corrupt and invert natural truth through linguistic deceit.",
    foilComparisons: [
      {
        foilName: "King Edward the Confessor (4.3)",
        distinction:
          "The Witches brew disease and poison in a cauldron; King Edward cures the sick through holy touch and prayers.",
      },
    ],
    holinshedDivergence:
      "In Holinshed, they are described ambiguously as 'goddesses of destiny' or 'fairies'; Shakespeare refashioned them into withered, bearded Jacobean witches answering animal familiars (Graymalkin, Paddock).",
    arcMilestones: [
      {
        act: "Act I",
        title: "The Overture of Moral Inversion",
        stage: "Supernatural Instigators",
        quoteRef: "1.1.10–11: 'Fair is foul, and foul is fair: / Hover through the fog and filthy air.'",
        analysis:
          "Set the philosophical trap on the heath; greet Macbeth with Glamis, Cawdor, and 'king hereafter.'",
      },
      {
        act: "Act II",
        title: "The Unseen Puppeteers",
        stage: "Nocturnal Presence",
        quoteRef: "Banquo dreams of them (2.1); their influence saturates the starless night of Duncan's murder.",
        analysis:
          "Though offstage in Act 2, their prophecies dictate every beat of Macbeth's hallucinatory regicide.",
      },
      {
        act: "Act III",
        title: "Hecate's Master Plan",
        stage: "Architects of Overconfidence",
        quoteRef: "3.5.32–33: 'And you all know, security / Is mortals' chiefest enemy.'",
        analysis:
          "Hecate scolds the Sisters and plans the cauldron apparitions designed to create an illusion of invincibility.",
      },
      {
        act: "Act IV",
        title: "The Cauldron of Equivocation",
        stage: "Deceitful Oracles",
        quoteRef: "4.1.79–81: 'Be bloody, bold, and resolute; laugh to scorn / The power of man, for none of woman born / Shall harm Macbeth.'",
        analysis:
          "Conjure the Armed Head, Bloody Child, Crowned Child with a Tree, and the Procession of Stuart Kings.",
      },
      {
        act: "Act V",
        title: "The Trap Snaps Shut",
        stage: "Fated Fulfillment",
        quoteRef: "5.8.19–20: Macbeth recognizes 'these juggling fiends... That palter with us in a double sense.'",
        analysis:
          "Their riddles unfold in literal truth, leaving Macbeth stripped of his illusions on the battlefield.",
      },
    ],
  },
  {
    id: "lady-macduff",
    name: "Lady Macduff & Her Son",
    role: "Countess of Fife & Innocent Victims of Tyranny",
    factionStatus: "Scottish Thanes",
    fate: "Brutally murdered in Fife Castle by Macbeth's assassins in Act 4, Scene 2.",
    psychologicalProfile:
      "Witty, affectionate, and fiercely protective of her young family. Resentful of Macduff's sudden flight to England, which she views as unloving and fearful, she engages in loving, philosophical banter with her precocious young son before assassins storm the castle.",
    symbolicFunction:
      "The domestic and maternal foil to Lady Macbeth. The senseless murder of this mother and her children represents the zenith of Macbeth's moral degradation into a senseless monster.",
    tragicFlaw: "Vulnerability in a lawless world where innocence offers no protection against tyranny.",
    foilComparisons: [
      {
        foilName: "Lady Macbeth",
        distinction:
          "Lady Macbeth boasts she would dash her nursing infant's brains out; Lady Macduff nurtures and protects her child like a maternal wren.",
      },
    ],
    holinshedDivergence:
      "Holinshed notes the historical fact of the Fife murders; Shakespeare dramatizes the intimacy and humor between mother and son immediately before the butchery to maximize tragic pathos.",
    arcMilestones: [
      {
        act: "Act IV",
        title: "Domestic Sanctuary Shattered",
        stage: "Innocent Martyrs",
        quoteRef: "4.2.9–11: 'He wants the natural touch: for the poor wren, / The most diminutive of birds, will fight... against the owl.'",
        analysis:
          "Debates the nature of loyalty and betrayal before being slaughtered onstage, catalyzing Macduff's righteous vengeance.",
      },
    ],
  },
];

export const SHAKESPEARE_LEXICON: RhetoricTerm[] = [
  {
    term: "Equivocation (Amphibology)",
    category: "Rhetorical Device",
    literalMeaning: "Using ambiguous or double-meaning language to tell a literal truth that deceives the listener into a false conclusion ('palter with us in a double sense').",
    thematicFunction: "Central mechanism of the Witches' prophecies ('none of woman born', 'Birnam Wood') and allusion to Father Henry Garnet's 1606 Gunpowder Plot trial.",
  },
  {
    term: "Trochaic Tetrameter",
    category: "Prosody & Meter",
    literalMeaning: "Four-beat poetic meter of stressed-unstressed syllables (DUM-da DUM-da DUM-da DUM-da), e.g., 'Double, double, toil and trouble'—inverting noble iambic pentameter.",
    thematicFunction: "Marks the Witches as prosodically unnatural, hypnotic, and alien to the human court's blank verse.",
  },
  {
    term: "The Great Chain of Being",
    category: "Jacobean Cosmology",
    literalMeaning: "Hierarchical cosmic order decreed by God (God ➔ Angels ➔ King ➔ Nobles ➔ Commoners ➔ Animals ➔ Plants).",
    thematicFunction: "Explains why regicide causes nature to convulse in Act 2, Scene 4 (darkness at noon, owl killing falcon, Duncan's horses eating each other).",
  },
  {
    term: "Hamartia & Peripeteia",
    category: "Dramatic Structure",
    literalMeaning: "Hamartia: the tragic hero's fatal flaw or error ('vaulting ambition'). Peripeteia: the sudden reversal of fortune (Fleance's escape in 3.3).",
    thematicFunction: "Structures Macbeth's arc from rising action (Acts 1–2) to the exact turning point at Act 3, Scene 3 and falling action (Acts 4–5).",
  },
  {
    term: "Chiasmus & Antithesis",
    category: "Rhetorical Device",
    literalMeaning: "Inverted parallel syntax ('Fair is foul, and foul is fair') that collapses moral opposites into one another.",
    thematicFunction: "Establishes moral inversion from Scene 1 and echoes in Macbeth's first line ('So foul and fair a day I have not seen', 1.3).",
  },
  {
    term: "Soliloquy & Aside",
    category: "Dramatic Structure",
    literalMeaning: "Soliloquy: speaking inner thoughts alone onstage (e.g., 'If it were done', 'Is this a dagger', 'Tomorrow'). Aside: private speech hidden from other characters onstage.",
    thematicFunction: "Grants the audience intimate access to Macbeth's agonizing conscience even as he hardens into a public tyrant.",
  },
  {
    term: "Prose in Madness (5.1)",
    category: "Prosody & Meter",
    literalMeaning: "Abandoning elevated iambic pentameter verse for fragmented, unmeasured prose in Lady Macbeth's sleepwalking scene.",
    thematicFunction: "Signals the complete disintegration of Lady Macbeth's rational control and royal composure under the weight of guilt.",
  },
  {
    term: "Anagnorisis",
    category: "Dramatic Structure",
    literalMeaning: "The tragic moment of terrible recognition when the hero realizes the truth of his fate.",
    thematicFunction: "Occurs in Act 5, Scenes 5–10 when Macbeth sees Birnam Wood move and learns Macduff was 'untimely ripped', recognizing 'th' equivocation of the fiend'.",
  },
];
