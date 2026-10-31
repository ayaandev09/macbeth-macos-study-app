import { ScenePrimer, PreLessonBriefing, FlashcardItem, ExamPromptItem } from "./types";

/* =====================================================================
   1. SCENE PRIMERS: FOR FIRST-TIME LEARNERS ("STUDY AS NEW")
   ===================================================================== */
export const SCENE_PRIMERS: Record<string, ScenePrimer> = {
  "a1-s1": {
    whoIsInTheScene: ["First Witch", "Second Witch", "Third Witch", "Demonic Familiars (Graymalkin & Paddock)"],
    storySoFar: "Before we meet any human characters, Scotland is engulfed in a brutal civil rebellion against King Duncan. This twelve-line scene acts as the atmospheric prologue to the entire tragedy.",
    plainEnglishSummary: [
      "Three eerie, supernatural witches gather on a desolate, stormy Scottish plain (heath) amidst thunder and lightning.",
      "They reveal they have already arranged to meet again that very evening as soon as the battle finishes—specifically to confront a general named Macbeth.",
      "Before vanishing into the filthy storm clouds, they chant their core motto: what is 'fair' (good and noble) is actually 'foul' (evil and rotten), and what is 'foul' will seem 'fair'. In other words, moral reality will be turned upside down."
    ],
    glossary: [
      { term: "Hurlyburly", modernMeaning: "Violent chaos, turmoil, or the noise of warfare." },
      { term: "Heath", modernMeaning: "An open, uncultivated, wild wasteland covered with rough shrubs." },
      { term: "Graymalkin & Paddock", modernMeaning: "A gray cat and a toad—the evil animal spirits (familiars) serving the witches." },
      { term: "Fair is foul", modernMeaning: "Good and evil are inverted; outward appearances will be deceitful." }
    ]
  },
  "a1-s2": {
    whoIsInTheScene: ["King Duncan", "Malcolm (Duncan's eldest son)", "Donalbain", "A Bleeding Captain", "Ross (a Scottish nobleman)"],
    storySoFar: "A dangerous rebellion led by Macdonwald and supported by the King of Norway has struck Scotland. King Duncan waits at his military camp for news from the frontlines.",
    plainEnglishSummary: [
      "An exhausted, blood-soaked captain arrives from the battlefield to give King Duncan an urgent status report.",
      "He describes how General Macbeth fought with almost superhuman ferocity: Macbeth carved his way through rebel ranks until he met the traitor leader Macdonwald face-to-face, unseaming him from his bellybutton to his jaw ('navel to th' chops') and mounting his head on battlements.",
      "Thane Ross arrives with further news: the traitor Thane of Cawdor also betrayed Scotland to the invading Norwegians, but Macbeth and Banquo crushed them.",
      "Delighted, King Duncan orders the traitor Cawdor to be executed immediately, and decrees that his title and lands will be given to Macbeth as a reward."
    ],
    glossary: [
      { term: "Kerns and Gallowglasses", modernMeaning: "Lightly armed foot soldiers and heavy ax-wielding infantry from Ireland." },
      { term: "Disdaining Fortune", modernMeaning: "Refusing to let bad luck or unfavorable odds stop him." },
      { term: "Unseamed", modernMeaning: "Sliced or ripped open like a seam of clothing." },
      { term: "Bellona's Bridegroom", modernMeaning: "A mythological compliment calling Macbeth the husband of the Roman goddess of war." }
    ]
  },
  "a1-s3": {
    whoIsInTheScene: ["The Three Witches", "Macbeth", "Banquo", "Ross and Angus"],
    storySoFar: "Fresh from their bloody military victory, Generals Macbeth and Banquo ride across the stormy heath toward the King's headquarters at Forres.",
    plainEnglishSummary: [
      "The three witches reassemble on the heath, recounting petty revenges they took on ordinary mortals while waiting for Macbeth.",
      "Macbeth arrives and utters words echoing the witches' earlier chant: 'So foul and fair a day I have not seen.' When he and Banquo see the withered, bearded creatures, they are astonished.",
      "The witches salute Macbeth with three titles: Thane of Glamis (which he already is), Thane of Cawdor (which he doesn't know he has been awarded), and 'King hereafter'.",
      "Banquo asks for his own prophecy: the witches reply that Banquo will be 'lesser than Macbeth, and greater' and 'not so happy, yet much happier' because while Banquo will never be king himself, his children will form an unbroken line of kings.",
      "The witches vanish into thin air. Moments later, noblemen Ross and Angus arrive and announce that King Duncan has officially created Macbeth the Thane of Cawdor. Realizing the witches told the truth about Cawdor, Macbeth immediately begins fantasizing about murdering King Duncan to get the crown."
    ],
    glossary: [
      { term: "Weird Sisters", modernMeaning: "From Old English 'wyrd', meaning fate or destiny; the controllers of fate." },
      { term: "Rapt", modernMeaning: "Hypnotized, completely spellbound or caught up in trance-like wonder." },
      { term: "Borrowed Robes", modernMeaning: "A title or status that belongs to someone else." },
      { term: "Instruments of Darkness", modernMeaning: "Demonic forces or agents of evil that tell minor truths to lure people into fatal sins." }
    ]
  },
  "a1-s4": {
    whoIsInTheScene: ["King Duncan", "Malcolm", "Macbeth", "Banquo", "Ross", "Angus"],
    storySoFar: "The former traitor Thane of Cawdor has been executed with dignified repentance. Macbeth and Banquo arrive at King Duncan's royal palace in Forres to receive royal thanks.",
    plainEnglishSummary: [
      "Duncan reflects sadly that it is impossible to read a person's inner mind from their facial expression: he had absolute trust in the executed traitor Cawdor.",
      "Macbeth enters, and Duncan embraces him warmly, declaring that he can never repay Macbeth for saving Scotland.",
      "Duncan then makes a major political announcement: he officially names his eldest son, Malcolm, as the Prince of Cumberland—marking Malcolm as the legal heir to the Scottish throne.",
      "This announcement shocks Macbeth: under ancient Scottish tradition, the crown was elective rather than strictly hereditary. Realizing Malcolm now stands directly between him and the throne, Macbeth mutters an aside asking the stars to extinguish their light so nobody can see his 'black and deep desires'."
    ],
    glossary: [
      { term: "Mind's Construction", modernMeaning: "The true thoughts, intentions, or character hidden inside someone's brain." },
      { term: "Prince of Cumberland", modernMeaning: "The official Scottish title reserved for the designated successor to the throne." },
      { term: "Wink at the hand", modernMeaning: "Blind oneself to one's own violent physical actions; look the other way." }
    ]
  },
  "a1-s5": {
    whoIsInTheScene: ["Lady Macbeth", "A Messenger", "Macbeth"],
    storySoFar: "Macbeth has sent an urgent letter ahead to his wife at their castle in Inverness, describing his battlefield triumphs and the witches' prophecies.",
    plainEnglishSummary: [
      "Lady Macbeth reads her husband's letter alone in their castle. She is thrilled by the prophecy that he will be king, but fears Macbeth is 'too full o' the milk of human kindness'—he possesses ambition, but lacks the ruthless cruelty required to murder Duncan.",
      "A messenger arrives with startling news: King Duncan himself is coming to sleep at their castle tonight. Lady Macbeth sees this unexpected visit as a divine opportunity for regicide.",
      "In a terrifying solo speech, she calls upon demonic spirits to 'unsex' her—to strip away all gentle, feminine empathy, replace her maternal breastmilk with bitter poison (gall), and thicken her blood so she feels zero remorse.",
      "Macbeth arrives, and Lady Macbeth instructs him to act as the charming, welcoming host: he must 'look like th' innocent flower, but be the serpent under't'. She announces that she will manage the assassination."
    ],
    glossary: [
      { term: "Milk of human kindness", modernMeaning: "Natural human gentleness, empathy, and moral compassion." },
      { term: "Unsex me here", modernMeaning: "Strip away all natural female gentleness and maternal compassion; make me purely lethal." },
      { term: "Gall", modernMeaning: "Bitter digestive bile, historically associated with hatred and venom." },
      { term: "Beguile the time", modernMeaning: "Deceive everyone around you by blending in and mirroring their polite behavior." }
    ]
  },
  "a1-s6": {
    whoIsInTheScene: ["King Duncan", "Malcolm", "Donalbain", "Banquo", "Lady Macbeth"],
    storySoFar: "King Duncan and his noble entourage arrive at Inverness, Macbeth's private castle, for what should be a peaceful royal banquet.",
    plainEnglishSummary: [
      "Duncan approaches Inverness Castle and praises how sweet, refreshing, and welcoming the air feels.",
      "Banquo agrees, pointing out that the summer martlet (a holy bird that only nests around sacred churches) has built its nests under every ledge and rooftop of the castle.",
      "Lady Macbeth steps out to greet the King with lavish, performative courtly respect, thanking him for the honors he has showered on their house.",
      "The scene is dripping with dramatic irony: Duncan feels blessed and secure in a place where his murder has already been carefully planned."
    ],
    glossary: [
      { term: "Pleasant seat", modernMeaning: "A beautiful, delightful geographic location." },
      { term: "Martlet", modernMeaning: "A species of swallow that traditional folklore believed only nested in pure, holy environments." },
      { term: "Hermits", modernMeaning: "Prayer-men or monks obligated to pray for a benefactor's soul." }
    ]
  },
  "a1-s7": {
    whoIsInTheScene: ["Macbeth", "Lady Macbeth"],
    storySoFar: "Inside Inverness Castle, a grand banquet is underway for Duncan. Macbeth slips away from the dining hall into an empty chamber to wrestle with his conscience.",
    plainEnglishSummary: [
      "In a famous soliloquy, Macbeth realizes that killing Duncan is both morally atrocious and practically stupid. He points out that violent deeds teach 'bloody instructions' that return to destroy the killer. Furthermore, as Duncan's kinsman, subject, and host, Macbeth has a duty to lock the doors against murderers, not hold the knife himself.",
      "He admits he has no legitimate grievance against Duncan—only 'vaulting ambition' that leaps too high and crashes down.",
      "When Lady Macbeth enters, Macbeth puts his foot down: 'We will proceed no further in this business.'",
      "Furious, Lady Macbeth violently attacks his masculinity, accusing him of cowardice. She declares that she would rather rip her smiling baby from her breast and smash its brains out on the floor than break an oath like he just did.",
      "When Macbeth nervously asks what happens if they fail, Lady Macbeth lays out the tactical plan: she will get Duncan's two guards so drunk on drugged wine that they pass out, allowing Macbeth to use the guards' daggers to murder Duncan and frame the servants. Convinced, Macbeth agrees."
    ],
    glossary: [
      { term: "Surcease", modernMeaning: "Final cessation, death, or ultimate arrest." },
      { term: "Vaulting ambition", modernMeaning: "Ambition that leaps too high and ends up falling on the other side." },
      { term: "Wassail", modernMeaning: "Alcoholic revelry, spiced wine, or heavy drinking." },
      { term: "Limbeck", modernMeaning: "An alchemical retort or vessel used to distill vapors." }
    ]
  },
  "a2-s1": {
    whoIsInTheScene: ["Banquo", "Fleance (Banquo's son)", "Macbeth", "A Servant"],
    storySoFar: "Past midnight at Inverness. The castle is asleep after heavy drinking. The sky is pitch black because the stars and moon have vanished.",
    plainEnglishSummary: [
      "Banquo and his young son Fleance walk through the dark courtyard with a torch. Banquo confesses he cannot sleep because dark, 'cursed thoughts' are plaguing his mind.",
      "Macbeth appears. Banquo hands him a diamond from King Duncan for Lady Macbeth's hospitality. Banquo mentions he dreamed of the three Weird Sisters, but Macbeth lies smoothly: 'I think not of them.'",
      "Once Banquo goes to bed, Macbeth sends his servant away and waits alone in the dark for Lady Macbeth's signal bell.",
      "Suddenly, Macbeth sees a hallucination floating in the air before him: a dagger with its handle pointing toward his hand. As he gazes at it in horror, drops of fresh blood sprout on its blade. He realizes it is a phantom born from his 'heat-oppressed brain'.",
      "A bell tolls. Macbeth stiffens, whispering that it is Duncan's death knell, and sneaks into the King's bedchamber."
    ],
    glossary: [
      { term: "Husbandry in heaven", modernMeaning: "Economy or frugality; heaven has turned off all its lights (stars)." },
      { term: "Palpable", modernMeaning: "Able to be physically touched or felt." },
      { term: "Gouts of blood", modernMeaning: "Large, thick drops or splashes of coagulated blood." },
      { term: "Knell", modernMeaning: "The solemn ringing of a church bell announcing a funeral." }
    ]
  },
  "a2-s2": {
    whoIsInTheScene: ["Lady Macbeth", "Macbeth"],
    storySoFar: "In the courtyard just outside Duncan's bedroom. Lady Macbeth has drugged the chamberlains and waits anxiously in the dark.",
    plainEnglishSummary: [
      "Lady Macbeth boasts that the alcohol that made the guards pass out has fueled her boldness, though she confesses she would have killed Duncan herself if he hadn't looked so much like her sleeping father.",
      "Macbeth staggers down the stairs, covered in blood, holding two bloody daggers. He whispers, 'I have done the deed.'",
      "Macbeth is having an immediate psychological breakdown: he reports that Duncan's sons stirred in the next room and cried 'God bless us!', but he could not say 'Amen' because it stuck in his throat.",
      "He also heard a phantom voice shout through the castle: 'Sleep no more! Macbeth does murder sleep!'",
      "Lady Macbeth spots the bloody daggers in his hands and is furious: he was supposed to leave them with the sleeping guards to frame them. When Macbeth is too traumatized to go back, Lady Macbeth takes the daggers herself to smear the guards with blood.",
      "Loud knocking begins at the castle gates. Macbeth stares at his bloody hands and wonders if all of Neptune's vast oceans could wash the blood away, concluding his hands would turn the green seas red. Lady Macbeth returns, washes her hands, and scoffs that 'a little water clears us of this deed'."
    ],
    glossary: [
      { term: "Sleeve of care", modernMeaning: "The ragged, knitted fabric of daily anxiety and exhaustion." },
      { term: "Incarnadine", modernMeaning: "Turn blood-red or crimson." },
      { term: "White heart", modernMeaning: "A cowardly, pale, unmanly heart." }
    ]
  },
  "a2-s3": {
    whoIsInTheScene: ["The Porter", "Macduff", "Lennox", "Macbeth", "Lady Macbeth", "Banquo", "Malcolm", "Donalbain"],
    storySoFar: "Early dawn. Loud, persistent banging echoes through Inverness Castle as visitors arrive to wake the King.",
    plainEnglishSummary: [
      "A hungover castle Porter stumbles to the gate. Pretending to be the gatekeeper of Hell, he jokes about welcoming various corrupt Elizabethan sinners into damnation.",
      "He opens the gates to Macduff and Lennox, noblemen commanded by Duncan to wake him early. Macbeth enters in his nightgown, pretending he was just awoken by their knocking.",
      "Macduff heads to the royal chamber and returns screaming in horror: King Duncan has been brutally murdered in his bed.",
      "The castle alarm bell clangs. Lady Macbeth feigns shock, while Macbeth confesses that in a fury of grief he killed Duncan's two chamberlains on the spot. This raises immediate suspicion among the nobles, but Lady Macbeth faints to divert attention.",
      "Realizing their lives are in immediate danger from an unknown insider, Duncan's sons flee secretly: Malcolm heads south to England, while Donalbain flees to Ireland."
    ],
    glossary: [
      { term: "Equivocator", modernMeaning: "Someone who uses ambiguous language to conceal the truth or lie under oath." },
      { term: "Gorgon", modernMeaning: "A mythological monster (like Medusa) whose appearance turns onlookers to stone." },
      { term: "Daggers in men's smiles", modernMeaning: "A warning that polite, friendly faces often hide murderous betrayal." }
    ]
  },
  "a2-s4": {
    whoIsInTheScene: ["Ross", "An Old Man", "Macduff"],
    storySoFar: "Several days after Duncan's murder. The country is in turmoil as rumors fly about who committed the regicide.",
    plainEnglishSummary: [
      "Ross and an Old Man discuss the bizarre, unnatural events that have plagued Scotland since the murder: it is daytime, yet the sky remains completely dark like night.",
      "A proud hunting falcon was attacked and killed by an ordinary mousing owl, and Duncan's magnificent royal warhorses went wild, broke their stalls, and reportedly ate one another.",
      "Macduff arrives with political news: because Duncan's sons fled the country, they are officially suspected of paying the guards to kill their father. As next in line among the nobility, Macbeth has been named King and gone to Scone to be crowned.",
      "Significantly, Macduff announces he will not attend Macbeth's coronation at Scone, but will ride home to Fife instead—the first overt act of political resistance against Macbeth."
    ],
    glossary: [
      { term: "Pathetic fallacy", modernMeaning: "Nature and weather mirroring human moral corruption and tragedy." },
      { term: "Scone", modernMeaning: "The ancient Scottish site where legitimate kings were crowned upon the Stone of Destiny." },
      { term: "Colmekill", modernMeaning: "The sacred royal burial island (Iona) where Scottish kings were interred." }
    ]
  },
  "a3-s1": {
    whoIsInTheScene: ["Banquo", "Macbeth (now King)", "Lady Macbeth (Queen)", "Two Murderers"],
    storySoFar: "Macbeth has been crowned King of Scotland at Scone. He and Lady Macbeth now hold court at the royal palace in Forres.",
    plainEnglishSummary: [
      "In a solo opening speech, Banquo reflects that Macbeth now has everything the witches promised (King, Cawdor, Glamis), but suspects Macbeth 'played'st most foully for't'. However, he remembers the prophecy that his own descendants will be kings.",
      "Macbeth and Lady Macbeth invite Banquo to a royal feast that evening. Macbeth casually asks if Banquo is riding out this afternoon, how far he is going, and if his young son Fleance will ride with him—gathering military intel.",
      "Once Banquo leaves, Macbeth delivers an agonizing soliloquy: 'To be thus is nothing, / But to be safely thus.' He fears Banquo's noble character, and is enraged that he has damned his own soul to hell only to wear a 'fruitless crown' and pass the throne to Banquo's sons.",
      "Macbeth brings in two impoverished, desperate assassins. Manipulating their anger, Macbeth convinces them that Banquo is the source of all their miseries and orders them to ambush Banquo and his young son Fleance on the road tonight."
    ],
    glossary: [
      { term: "Fruitless crown", modernMeaning: "A royal crown that cannot be passed down to one's own children; dynastic sterility." },
      { term: "Barren sceptre", modernMeaning: "A royal rod of authority that yields no heirs." },
      { term: "Catalogue of dogs", modernMeaning: "Classifying men into hierarchical ranks just like hunting dogs, hounds, and mongrels." }
    ]
  },
  "a3-s2": {
    whoIsInTheScene: ["Lady Macbeth", "Macbeth"],
    storySoFar: "Late afternoon inside the royal palace. Macbeth is isolating himself from everyone, obsessively brooding over Banquo.",
    plainEnglishSummary: [
      "Alone for a moment, Lady Macbeth confesses her own secret despair: achieving the crown has brought zero peace of mind ('Naught's had, all's spent, / Where our desire is got without content').",
      "Macbeth enters, looking tormented. He tells her they have only 'scorched the snake, not killed it'—the threat to their reign is still alive.",
      "He confesses that his mind is 'full of scorpions' because Banquo and Fleance are alive, and he envies Duncan, who sleeps peacefully in his grave safe from treason and civil war.",
      "When Lady Macbeth asks what he plans to do, Macbeth tells her to be 'innocent of the knowledge, dearest chuck' until the deed is done—reversing their Act 1 dynamic and excluding his wife from his murders."
    ],
    glossary: [
      { term: "Scorched the snake", modernMeaning: "Wounded the serpent without killing it, leaving it able to heal and bite again." },
      { term: "Full of scorpions", modernMeaning: "Experiencing agonizing, stinging paranoia and toxic mental torment." },
      { term: "Dearest chuck", modernMeaning: "A condescending or affectionate pet name (derived from chick)." }
    ]
  },
  "a3-s3": {
    whoIsInTheScene: ["First Murderer", "Second Murderer", "Third Murderer", "Banquo", "Fleance"],
    storySoFar: "Dusk in a wooded park near the palace. The hired assassins lie in wait near the road.",
    plainEnglishSummary: [
      "A mysterious Third Murderer joins the two original assassins, claiming Macbeth sent him because he didn't trust them.",
      "Banquo and his son Fleance dismount their horses and walk up the path toward the palace with a lit torch.",
      "The murderers leap from the bushes and attack Banquo. In the confusion, the torch is knocked to the ground and extinguished.",
      "Dying from twenty stab wounds, Banquo shouts to his son: 'Fly, good Fleance, fly, fly, fly! Thou mayst revenge!' Fleance escapes into the pitch-black woods, leaving the assassins with only Banquo's corpse."
    ],
    glossary: [
      { term: "Peripeteia", modernMeaning: "The pivotal turning point where the protagonist's fortunes begin to irreversibly decline." },
      { term: "Lated traveller", modernMeaning: "A belated traveler rushing to reach an inn before nightfall." }
    ]
  },
  "a3-s4": {
    whoIsInTheScene: ["Macbeth", "Lady Macbeth", "Scottish Thanes (Ross, Lennox)", "First Murderer", "Ghost of Banquo"],
    storySoFar: "The royal banquet hall at Forres. A lavish state banquet is being hosted by Macbeth and Lady Macbeth for the Scottish nobility.",
    plainEnglishSummary: [
      "Macbeth welcomes the lords with false warmth. At the doorway, the First Murderer appears with blood on his face and whispers that Banquo's throat is cut, but Fleance escaped. Macbeth panics: his paranoia returns.",
      "When Macbeth goes to sit down at the head of the table, he sees that his royal chair is already occupied by the bloody, spectral Ghost of Banquo.",
      "Macbeth shrieks in terror at the empty chair: 'Thou canst not say I did it: never shake / Thy gory locks at me!' The Scottish lords are baffled because they cannot see the ghost.",
      "Lady Macbeth frantically tries to cover for him, telling the guests that Macbeth has had these childhood fits for years. She pulls Macbeth aside and furiously asks: 'Are you a man?'",
      "The ghost vanishes, and Macbeth recovers his composure. But when he raises a toast to 'our dear friend Banquo, whom we miss', the ghost reappears in his chair. Macbeth has a second violent screaming fit, forcing Lady Macbeth to dismiss all the lords immediately.",
      "Alone together in the ruined hall, Macbeth realizes that 'blood will have blood' and notes that Macduff boycotted the feast. He announces that he has stepped so far into a river of blood that returning is as difficult as wading further, and vows to visit the Weird Sisters tomorrow."
    ],
    glossary: [
      { term: "Gory locks", modernMeaning: "Hair dripping with thick blood and clotted gore." },
      { term: "Blood will have blood", modernMeaning: "Every act of murder demands a retributive murder in response; violence is an endless chain." },
      { term: "Fee'd servant", modernMeaning: "A household servant paid as a spy to report on noble families." }
    ]
  },
  "a3-s5": {
    whoIsInTheScene: ["Hecate (Goddess of Witchcraft)", "The Three Witches"],
    storySoFar: "A stormy heath near Acheron. The witches are confronted by their superior.",
    plainEnglishSummary: [
      "Hecate, the supreme classical goddess of witchcraft, arrives in a rage. She scolds the three witches for trading riddles with Macbeth without consulting her.",
      "She calls Macbeth an ungrateful, selfish mortal who loves his own ambitions rather than evil itself.",
      "She commands them to meet her tomorrow at the pit of Acheron with all their magical gear, revealing that she will distill a magical droplet from the moon to create illusions that will make Macbeth feel completely invincible—because 'security (overconfidence) is mortals' chiefest enemy'."
    ],
    glossary: [
      { term: "Acheron", modernMeaning: "The river of sorrow or the pit leading to the classical Underworld / Hell." },
      { term: "Security", modernMeaning: "Overconfidence, false complacency, or feeling dangerously invulnerable." }
    ]
  },
  "a3-s6": {
    whoIsInTheScene: ["Lennox", "Another Scottish Lord"],
    storySoFar: "A castle in Scotland. News of Banquo's murder has spread among the suspicious nobility.",
    plainEnglishSummary: [
      "Lennox speaks to another nobleman using biting sarcasm to mock Macbeth's official propaganda. He sarcastically notes how 'convenient' it is that Duncan died after hosting Macbeth, and how 'monstrous' it was that Banquo was killed because he stayed out too late.",
      "The other Lord reveals that Duncan's eldest son, Malcolm, is living in England under the protection of the holy King Edward the Confessor.",
      "Furthermore, Lord Macduff has fled to England to plead with King Edward and the English warrior Earl of Northumberland (Siward) to send an army to liberate Scotland from the tyrant Macbeth."
    ],
    glossary: [
      { term: "Socratic irony", modernMeaning: "Praising someone or feigning agreement with a story to highlight its obvious absurdity." },
      { term: "Hand accursed", modernMeaning: "The tyrannical, blood-stained rule of Macbeth." }
    ]
  },
  "a4-s1": {
    whoIsInTheScene: ["The Three Witches", "Hecate", "Macbeth", "Three Apparitions", "Procession of Eight Kings", "Lennox"],
    storySoFar: "A dark cavern. In the center, a boiling cauldron bubbles over a roaring fire.",
    plainEnglishSummary: [
      "The witches prepare a repulsive alchemical brew, tossing in poisonous toad, snake eye, bat wool, dog tongue, and the finger of a birth-strangled baby, chanting: 'Double, double toil and trouble; / Fire burn, and cauldron bubble.'",
      "Macbeth storms into the cave, demanding answers regardless of whether churches tumble or castles collapse. The witches conjure three spectral apparitions:",
      "1. An Armed Head (a helmeted head) warns: 'Beware Macduff; / Beware the Thane of Fife.'",
      "2. A Bloody Child tells him: 'Be bloody, bold, and resolute; laugh to scorn / The power of man, for none of woman born / Shall harm Macbeth.'",
      "3. A Child Crowned with a tree in his hand proclaims: 'Macbeth shall never vanquished be until / Great Birnam Wood to high Dunsinane Hill / Shall come against him.'",
      "Feeling completely invincible, Macbeth demands to know if Banquo's heirs will ever rule Scotland. In response, a horrifying procession of eight Stuart kings marches across the stage, followed by Banquo's smiling ghost pointing at them. The last king holds a mirror showing an endless line of future monarchs.",
      "The witches vanish. Lennox arrives with news that Macduff has escaped to England. In a furious aside, Macbeth declares that from now on, the moment a thought enters his heart, his hand will execute it: he orders assassins to attack Macduff's castle at Fife and slaughter his wife, babies, and all his servants."
    ],
    glossary: [
      { term: "Armed Head", modernMeaning: "A disembodied head wearing a helmet—foreshadowing Macbeth's own severed head in Act 5." },
      { term: "Bloody Child", modernMeaning: "Foreshadows Macduff, who was born via Caesarean section ('untimely ripped')." },
      { term: "Crowned Child with Tree", modernMeaning: "Foreshadows Prince Malcolm ordering soldiers to carry Birnam Wood branches." },
      { term: "Firstlings of my heart", modernMeaning: "Acting immediately on one's most violent violent impulses without reflection." }
    ]
  },
  "a4-s2": {
    whoIsInTheScene: ["Lady Macduff", "Her Young Son", "Ross", "A Messenger", "Murderers"],
    storySoFar: "Fife Castle, the home of Lord Macduff. Macduff has fled to England without telling his family.",
    plainEnglishSummary: [
      "Lady Macduff complains bitterly to Ross that her husband's sudden flight looks like treason and madness: he has abandoned his wife, children, and castle unprotected. Even the tiny wren, she notes, will fight the predatory owl to protect her nest.",
      "Ross leaves. Lady Macduff and her young son engage in tender, witty banter about traitors. The boy precociously notes that since dishonest men outnumber honest men, the traitors are fools not to hang the honest men.",
      "A terrified messenger bursts in, warning Lady Macduff that danger is approaching and urging her to flee immediately. She laments that she has done no harm, but remembers that in this earthly world, doing evil is often praised while doing good is dangerous folly.",
      "Macbeth's hired murderers break in. When the young boy bravely calls them liars, an assassin screams 'What, you egg!' and stabs the child to death. Lady Macduff flees screaming murder, pursued by the killers."
    ],
    glossary: [
      { term: "Natural touch", modernMeaning: "Instinctive biological love and protective care for one's children." },
      { term: "Egg / Fry of treachery", modernMeaning: "Contemptuous insults for an innocent child or young offspring." }
    ]
  },
  "a4-s3": {
    whoIsInTheScene: ["Malcolm", "Macduff", "A Doctor", "Ross"],
    storySoFar: "Outside the palace of King Edward the Confessor in England. Macduff has arrived to urge Malcolm to lead an invasion of Scotland.",
    plainEnglishSummary: [
      "Malcolm is deeply suspicious: he fears Macduff might be a spy sent by Macbeth to lure him to his death. To test Macduff's true motives, Malcolm pretends to be an utterly depraved monster who is far more wicked, greedy, and sexually voracious than Macbeth.",
      "When Macduff despairs that such a man is not fit to govern or even live ('O Scotland, Scotland!'), Malcolm embraces him: Macduff's genuine grief proves his absolute integrity. Malcolm takes back all his false confessions, revealing an army of 10,000 English soldiers under Old Siward is ready to march.",
      "An English doctor enters, describing King Edward's miraculous power to heal sufferers of scrofula ('the King's Evil') simply by touching them—contrasting a holy healer king with the diseased tyrant Macbeth.",
      "Ross arrives from Scotland with devastating news: Macduff's castle was ambushed and his wife, children, and servants have been savagely slaughtered.",
      "Macduff is struck dumb with grief, asking repeatedly: 'All my pretty ones? Did you say all?' When Malcolm tells him to 'dispute it like a man' (fight), Macduff gives the play's definitive definition of masculinity: 'I shall do so; / But I must also feel it as a man.' He vows to confront the tyrant face-to-face."
    ],
    glossary: [
      { term: "King-becoming graces", modernMeaning: "The essential virtues of a legitimate monarch: justice, mercy, patience, courage." },
      { term: "The Evil (Scrofula)", modernMeaning: "A tubercular skin disease believed in folklore to be cured by the touch of a divinely anointed king." },
      { term: "Hell-kite", modernMeaning: "A vicious bird of prey from hell, slaughtering innocent chickens in one swoop." }
    ]
  },
  "a5-s1": {
    whoIsInTheScene: ["A Doctor of Physic", "A Gentlewoman", "Lady Macbeth (Sleepwalking)"],
    storySoFar: "Dunsinane Castle at night. Lady Macbeth's mental health has completely disintegrated.",
    plainEnglishSummary: [
      "A doctor and a lady-in-waiting watch in a dark corridor. The gentlewoman reports that Lady Macbeth has been sleepwalking every night and insists on having a lit candle beside her 24/7.",
      "Lady Macbeth enters in a sleepwalking trance, carrying a candle. Her eyes are wide open, but their sense is shut. She begins rubbing her hands obsessively as if washing them.",
      "She screams out her unconscious torment in fragmented prose: 'Out, damned spot! out, I say!—One: two: why, then, 'tis time to do't.'",
      "She relives all three murders: King Duncan ('who would have thought the old man to have had so much blood in him?'), Lady Macduff ('The Thane of Fife had a wife: where is she now?'), and Banquo ('Banquo's buried; he cannot come out on's grave').",
      "She wails that 'all the perfumes of Arabia will not sweeten this little hand' before returning to bed. Horrified, the doctor diagnoses that 'unnatural deeds / Do breed unnatural troubles' and notes that she needs a priest more than a physician, warning the attendant to remove all sharp objects to prevent suicide."
    ],
    glossary: [
      { term: "Somnambulism", modernMeaning: "Sleepwalking caused by deep psychological trauma or hysteria." },
      { term: "Out, damned spot", modernMeaning: "An imaginary, hallucinatory drop of Duncan's blood that cannot be washed away." },
      { term: "Perfumes of Arabia", modernMeaning: "Exotic Arabian fragrances and sweet balms, unable to mask the stench of blood." }
    ]
  },
  "a5-s2": {
    whoIsInTheScene: ["Menteith", "Caithness", "Angus", "Lennox", "Soldiers"],
    storySoFar: "The Scottish countryside near Birnam Wood. Rebel Scottish thanes are marching to meet the English army.",
    plainEnglishSummary: [
      "Scottish lords assemble their troops to rendezvous with Malcolm and Macduff near Birnam Wood.",
      "They report that Macbeth has heavily fortified Dunsinane Castle in a state of manic, unhinged fury. His soldiers obey him only out of terror, not love.",
      "Thane Angus delivers a famous description of Macbeth's usurped authority: 'Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.'"
    ],
    glossary: [
      { term: "Giant's robe / Dwarfish thief", modernMeaning: "A famous clothing metaphor: legitimate kingship is far too grand for a petty murderer to wear." }
    ]
  },
  "a5-s3": {
    whoIsInTheScene: ["Macbeth", "A Doctor", "Seyton", "An Attendant"],
    storySoFar: "Inside Dunsinane Castle. Macbeth receives reports that Scottish thanes are deserting him in droves.",
    plainEnglishSummary: [
      "Macbeth rants arrogantly, refusing to hear further reports of defection. He boasts that he has nothing to fear until Birnam Wood moves to Dunsinane, and laughs at mortal soldiers because 'no man of woman born' can harm him.",
      "When a terrified servant arrives to announce that 10,000 soldiers are advancing, Macbeth verbally abuses him as a 'cream-faced loon'.",
      "In a quiet, melancholic moment, Macbeth delivers a deeply tragic soliloquy: he realizes he has lived long enough, and his life has withered into 'the sere, the yellow leaf'. He knows he will never have the blessings of old age—honor, love, friends, obedience—only curses and hollow fear.",
      "The doctor reports that Lady Macbeth cannot be cured because her mind is diseased with delusions. Macbeth angrily tells him to 'throw physic (medicine) to the dogs' and demands his battle armor."
    ],
    glossary: [
      { term: "Sere, the yellow leaf", modernMeaning: "The dry, withered autumn of life; approaching death without honor." },
      { term: "Cream-faced loon", modernMeaning: "A pale, cowardly servant whose face has drained of blood from fear." },
      { term: "Physic", modernMeaning: "Medicine or the medical profession." }
    ]
  },
  "a5-s4": {
    whoIsInTheScene: ["Malcolm", "Old Siward", "Macduff", "Soldiers"],
    storySoFar: "Birnam Wood, a large forest a few miles from Dunsinane.",
    plainEnglishSummary: [
      "The combined English and Scottish forces unite at the edge of Birnam Wood.",
      "Prince Malcolm makes a clever tactical decision: 'Let every soldier hew him down a bough / And bear't before him.'",
      "By carrying tree branches in front of them, the soldiers will camouflage their true numbers from Macbeth's lookouts at Dunsinane. Without realizing it, Malcolm is about to fulfill the Third Apparition's prophecy that Birnam Wood will come to Dunsinane."
    ],
    glossary: [
      { term: "Hew him down a bough", modernMeaning: "Chop down a large tree branch to use as military camouflage." }
    ]
  },
  "a5-s5": {
    whoIsInTheScene: ["Macbeth", "Seyton", "A Messenger"],
    storySoFar: "The ramparts of Dunsinane Castle. Macbeth orders his banners hung on the outer walls.",
    plainEnglishSummary: [
      "A terrible cry of women shrieks from within the castle. Macbeth remarks coldly that he has almost forgotten what fear feels like: he has 'supped full with horrors' and slaughter cannot startle him anymore.",
      "Seyton enters with tragic news: 'The Queen, my lord, is dead' (she has committed suicide).",
      "Macbeth responds with the most famous existential speech in Shakespeare: 'Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day... Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more. It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.'",
      "A lookout bursts in, trembling with terror: he looked toward Birnam, and saw the forest moving toward the castle. Panicked, Macbeth realizes the witches 'paltered with him in a double sense' and orders his men out to battle."
    ],
    glossary: [
      { term: "Walking shadow", modernMeaning: "Human life depicted as a hollow, meaningless projection without substance." },
      { term: "Poor player", modernMeaning: "An actor strutting on stage for an hour before being forgotten forever." },
      { term: "Sound and fury", modernMeaning: "Noisy, passionate human exertion that ultimately means nothing." }
    ]
  },
  "a5-s6": {
    whoIsInTheScene: ["Malcolm", "Old Siward", "Macduff", "Soldiers"],
    storySoFar: "Just outside Dunsinane Castle.",
    plainEnglishSummary: [
      "Malcolm, Siward, and Macduff arrive directly in front of the castle walls.",
      "Malcolm orders the soldiers to drop their leafy branches and draw their swords. The battle trumpets sound the assault."
    ],
    glossary: [
      { term: "Leavy screens", modernMeaning: "Foliage screens; leafy boughs carried for camouflage." }
    ]
  },
  "a5-s7": {
    whoIsInTheScene: ["Macbeth", "Young Siward"],
    storySoFar: "The chaotic battlefield outside Dunsinane Castle.",
    plainEnglishSummary: [
      "Cornered like a baited bear tied to a stake, Macbeth fights fiercely.",
      "Young Siward (the English general's brave young son) challenges him. Macbeth slays the young man in combat and sneers at his corpse: 'Thou wast born of woman'—still desperately clinging to the witches' prophecy."
    ],
    glossary: [
      { term: "Bear-like I must fight the course", modernMeaning: "An allusion to the brutal Jacobean bloodsport of bear-baiting, where a chained bear had to fight off dogs." }
    ]
  },
  "a5-s8": {
    whoIsInTheScene: ["Macduff"],
    storySoFar: "Another part of the battlefield outside Dunsinane.",
    plainEnglishSummary: [
      "Macduff searches frantically for Macbeth amidst the battle clatter. He refuses to strike down Macbeth's wretched hired conscripts, declaring that if Macbeth is slain by anyone else, the ghosts of his murdered wife and children will haunt him forever."
    ],
    glossary: [
      { term: "Clatter", modernMeaning: "The loud metallic clashing of broadswords and armor." }
    ]
  },
  "a5-s9": {
    whoIsInTheScene: ["Malcolm", "Old Siward"],
    storySoFar: "The entrance gates of Dunsinane Castle.",
    plainEnglishSummary: [
      "Old Siward invites Malcolm into the castle, reporting that the fortress surrendered without a fight: Macbeth's own soldiers deliberately missed their targets or defected to Malcolm's side."
    ],
    glossary: [
      { term: "Gently rendered", modernMeaning: "Surrendered peacefully without significant resistance." }
    ]
  },
  "a5-s10": {
    whoIsInTheScene: ["Macbeth", "Macduff"],
    storySoFar: "A secluded corner of the battlefield. The final face-to-face duel.",
    plainEnglishSummary: [
      "Macbeth and Macduff finally confront one another. Macbeth warns Macduff to step back, confessing that his soul is already too heavily burdened with the blood of Macduff's slaughtered family.",
      "Macbeth boasts that his life is protected by a magical charm: he cannot be defeated by any man 'born of woman'.",
      "Macduff delivers the ultimate revelation (anagnorisis): 'Despair thy charm... Macduff was from his mother's womb / Untimely ripped' (born via Caesarean section, not natural childbirth).",
      "Horrified, Macbeth curses the 'juggling fiends' who tricked him with double meanings and refuses to fight. But when Macduff warns that if he surrenders, he will be chained to a pole like a circus monster and displayed under the sign 'Here may you see the tyrant', Macbeth recovers his warrior courage: 'Lay on, Macduff!' They fight offstage."
    ],
    glossary: [
      { term: "Untimely ripped", modernMeaning: "Born by Caesarean section before full natural term." },
      { term: "Juggling fiends", modernMeaning: "Deceptive demonic spirits that cheat mortals with riddles and trickery." },
      { term: "Lay on", modernMeaning: "Strike hard; bring on the battle!" }
    ]
  },
  "a5-s11": {
    whoIsInTheScene: ["Malcolm", "Old Siward", "Ross", "Macduff (bearing Macbeth's severed head)", "All Scottish Nobles"],
    storySoFar: "Inside Dunsinane Castle. The battle is over and victory is won.",
    plainEnglishSummary: [
      "Malcolm and Old Siward review battlefield casualties. Ross informs Siward that his young son has died bravely in battle. Learning that the wounds were on the boy's chest ('on the front', proving he died facing the enemy rather than running away), Siward proudly calls him 'God's soldier'.",
      "Macduff enters bearing Macbeth's severed head on a pike and proclaims: 'Hail, King! for so thou art: behold, where stands / Th' usurper's cursed head: the time is free.'",
      "Malcolm assumes the Scottish crown. In his inaugural royal speech, he rewards all his loyal thanes by creating Scotland's very first 'Earls', condemns the 'dead butcher and his fiend-like queen', and invites everyone to his coronation at Scone, restoring God's divine peace to Scotland."
    ],
    glossary: [
      { term: "Hurts before", modernMeaning: "Battle wounds located on the chest or face, proving the soldier died fighting bravely." },
      { term: "The time is free", modernMeaning: "Scotland's historical timeline, moral universe, and natural seasons are liberated from the tyrant." },
      { term: "Dead butcher", modernMeaning: "The final historical judgment reducing Macbeth from glorious general to a mindless slaughterer." }
    ]
  }
};

/* =====================================================================
   2. PRE-LESSON BRIEFINGS: 5-MINUTE HIGH-YIELD TEST CRAM
   ===================================================================== */
export const PRE_LESSON_BRIEFINGS: Record<string, PreLessonBriefing> = {
  "a1-s1": {
    thirtySecondRecap: "Three witches gather in a thunderstorm on a Scottish heath, agreeing to intercept Macbeth before sunset. They establish the play's core moral inversion: 'Fair is foul, and foul is fair'.",
    mustKnowQuote: {
      quote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.",
      speaker: "All Three Witches",
      line: "1.1.10–11",
      whyItMatters: "The philosophical thesis of the play: appearances will deceive, and morality will be flipped upside down."
    },
    teacherPopQuiz: {
      question: "Why does Shakespeare open the tragedy with the Witches rather than Macbeth or King Duncan?",
      answer: "To establish a supernatural framework of cosmic disorder, appeal to King James I's obsession with witchcraft (Daemonologie, 1597), and show that evil forces are targeting Macbeth before he even appears."
    },
    keyStagecraftVector: "Thunder-sheets, lightning flashes, and vanishing through trapdoors in the Globe theater stage to unsettle the audience."
  },
  "a1-s2": {
    thirtySecondRecap: "A bleeding captain reports Macbeth's savage battlefield triumph over rebels. Impressed, King Duncan orders the traitor Cawdor executed and gives his title to Macbeth.",
    mustKnowQuote: {
      quote: "For brave Macbeth—well he deserves that name— / Disdaining Fortune, with his brandished steel, / Which smoked with bloody execution...",
      speaker: "Captain",
      line: "1.2.16–18",
      whyItMatters: "Establishes Macbeth's initial mythological hero status founded upon brutal, state-sanctioned violence."
    },
    teacherPopQuiz: {
      question: "What is ironic about Duncan transferring the title 'Thane of Cawdor' to Macbeth?",
      answer: "Duncan executes one disguised traitor only to unwittingly bestow the exact same title on Macbeth, who will prove far more treacherous."
    },
    keyStagecraftVector: "The captain's physical wounds visually mirror the bleeding, damaged condition of Scotland itself."
  },
  "a1-s3": {
    thirtySecondRecap: "The Witches hail Macbeth as Glamis, Cawdor, and King hereafter, and tell Banquo his sons will be kings. Ross arrives confirming Cawdor, triggering Macbeth's horrific murder fantasies.",
    mustKnowQuote: {
      quote: "The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.",
      speaker: "Banquo",
      line: "1.3.123–126",
      whyItMatters: "Banquo acts as Macbeth's moral foil, warning that evil powers offer minor true predictions to tempt souls into damnation."
    },
    teacherPopQuiz: {
      question: "How do Macbeth and Banquo react differently to the prophecies?",
      answer: "Banquo is skeptical and detached, recognizing demonic temptation; Macbeth is spellbound ('rapt') and instantly jumps to violent ambition."
    },
    keyStagecraftVector: "Macbeth's solo asides visually and sonically isolate him from Banquo, Ross, and Angus on the open stage."
  },
  "a1-s4": {
    thirtySecondRecap: "Duncan laments that you can't read a person's mind from their face, then names Malcolm Prince of Cumberland. Macbeth realizes Malcolm is an obstacle and commands the stars to hide their fires.",
    mustKnowQuote: {
      quote: "Stars, hide your fires; / Let not light see my black and deep desires...",
      speaker: "Macbeth",
      line: "1.4.50–51",
      whyItMatters: "Macbeth explicitly identifies his ambition as evil and demands cosmic darkness so his moral conscience won't see his murderous intent."
    },
    teacherPopQuiz: {
      question: "What dramatic irony occurs right after Duncan says 'There's no art to find the mind's construction in the face'?",
      answer: "Macbeth walks through the door at that exact second—Duncan embraces him with absolute trust while Macbeth secretly plans regicide."
    },
    keyStagecraftVector: "The contrast between Duncan's open court ceremonial warmth and Macbeth's whispered nocturnal asides."
  },
  "a1-s5": {
    thirtySecondRecap: "Lady Macbeth reads Macbeth's letter, fears his natural kindness, calls on demons to 'unsex' her, and orders Macbeth to look like an innocent flower while being the serpent underneath.",
    mustKnowQuote: {
      quote: "Look like th' innocent flower, / But be the serpent under't.",
      speaker: "Lady Macbeth",
      line: "1.5.63–64",
      whyItMatters: "Alludes to the Garden of Eden serpent and the Gunpowder Plot 1605 medal, summarizing the theme of deceptive appearance vs deadly reality."
    },
    teacherPopQuiz: {
      question: "What does Lady Macbeth mean by asking spirits to 'unsex' her?",
      answer: "She wants demonic entities to purge her of all conventional female empathy, maternal milk, and biological remorse so she can orchestrate regicide."
    },
    keyStagecraftVector: "Lady Macbeth speaking directly to unseen demonic entities, physically inverting conventional Jacobean female submissiveness."
  },
  "a1-s6": {
    thirtySecondRecap: "Duncan arrives at Inverness, praising its sweet air and martlet birds. Lady Macbeth welcomes him with exaggerated flattery while Macbeth hides away.",
    mustKnowQuote: {
      quote: "This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses.",
      speaker: "King Duncan",
      line: "1.6.1–3",
      whyItMatters: "Tragic irony: Duncan perceives Inverness as a peaceful sanctuary, unaware it is his execution chamber."
    },
    teacherPopQuiz: {
      question: "Why does Shakespeare highlight the 'temple-haunting martlet' nesting at the castle?",
      answer: "The holy bird symbolizes church sanctuary and purity, creating maximum tragic contrast with the demonic slaughter planned inside."
    },
    keyStagecraftVector: "Torches and trumpets welcoming Duncan into the darkened castle gate."
  },
  "a1-s7": {
    thirtySecondRecap: "Macbeth decides against killing Duncan due to karma and loyalty. Lady Macbeth emasculates him, vows she would bash her baby's brains out before breaking an oath, and details the drugging plan.",
    mustKnowQuote: {
      quote: "I dare do all that may become a man; / Who dares do more is none.",
      speaker: "Macbeth",
      line: "1.7.46–47",
      whyItMatters: "Defines the true humanist moral limit of masculinity: exceeding lawful duty turns a man into an inhuman monster."
    },
    teacherPopQuiz: {
      question: "What metaphor does Macbeth use to describe his own motive in his soliloquy?",
      answer: "'Vaulting ambition, which o'erleaps itself / And falls on th' other'—an equestrian image of a rider jumping too high and tumbling."
    },
    keyStagecraftVector: "The contrast between the offstage sounds of royal feasting and the tense marital confrontation in the private room."
  },
  "a2-s1": {
    thirtySecondRecap: "Past midnight, Banquo prays against cursed dreams. Alone in the dark, Macbeth hallucinates a floating bloody dagger leading him to Duncan's room as the signal bell tolls.",
    mustKnowQuote: {
      quote: "Is this a dagger which I see before me, / The handle toward my hand? Come, let me clutch thee: / I have thee not, and yet I see thee still.",
      speaker: "Macbeth",
      line: "2.1.33–35",
      whyItMatters: "The ultimate visual manifestation of psychological breakdown and the blurred boundary between reality and hallucination."
    },
    teacherPopQuiz: {
      question: "What causes the dagger hallucination according to Macbeth himself?",
      answer: "A 'heat-oppressed brain'—feverish anxiety, suppressed moral terror, and the hypnotic pull of regicide."
    },
    keyStagecraftVector: "Complete darkness on stage broken only by a single torch and the eerie tolling of the offstage bell."
  },
  "a2-s2": {
    thirtySecondRecap: "Macbeth murders Duncan offstage, returning with bloody daggers and hearing voices cry 'Macbeth does murder sleep'. Lady Macbeth returns the daggers, scoffing at his terror as knocking begins.",
    mustKnowQuote: {
      quote: "Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red.",
      speaker: "Macbeth",
      line: "2.2.59–62",
      whyItMatters: "Cosmic hyperbole demonstrating that the guilt of regicide is indelible and capable of polluting the entire world's waters."
    },
    teacherPopQuiz: {
      question: "Why couldn't Lady Macbeth kill Duncan herself?",
      answer: "Because the sleeping King resembled her own father—revealing a crack of human empathy beneath her demonic facade."
    },
    keyStagecraftVector: "The relentless, rhythmic, deafening pounding on the castle gate that increases panic."
  },
  "a2-s3": {
    thirtySecondRecap: "The hungover Porter pretends to guard Hell's gate. Macduff discovers Duncan slaughtered. Macbeth kills the guards; Lady Macbeth faints; Duncan's sons flee for their lives.",
    mustKnowQuote: {
      quote: "There's daggers in men's smiles; the near in blood, / The nearer bloody.",
      speaker: "Donalbain",
      line: "2.3.138–139",
      whyItMatters: "Aphorism explaining that friendly courtly smiles conceal lethal weapons, and proximity of blood kinship invites assassination."
    },
    teacherPopQuiz: {
      question: "What is the dramatic and thematic function of the drunken Porter scene?",
      answer: "Provides comic relief after high tension while allegorically identifying Inverness Castle as the literal mouth of Hell."
    },
    keyStagecraftVector: "The sudden clanging of the castle alarm bell creating auditory chaos and confusion."
  },
  "a2-s4": {
    thirtySecondRecap: "Ross and an Old Man recount unnatural cosmic prodigies (daylight eclipse, owl killing a falcon, cannibal horses). Macbeth goes to Scone to be crowned; Macduff boycotts.",
    mustKnowQuote: {
      quote: "A falcon, towering in her pride of place, / Was by a mousing owl hawked at and killed.",
      speaker: "Old Man",
      line: "2.4.12–13",
      whyItMatters: "Symbolic allegory of the Great Chain of Being: the humble mousing owl (Macbeth) has unnaturally killed the royal falcon (Duncan)."
    },
    teacherPopQuiz: {
      question: "Why does Macduff refuse to attend Macbeth's coronation at Scone?",
      answer: "He suspects Macbeth of foul play and subtly begins the patriotic resistance movement."
    },
    keyStagecraftVector: "Choric reflection: two observers looking back on a ruined Scotland under eerie unnatural skies."
  },
  "a3-s1": {
    thirtySecondRecap: "Banquo suspects Macbeth. Macbeth laments his 'fruitless crown' because Banquo's sons will reign, and manipulates two desperate murderers into agreeing to kill Banquo and Fleance.",
    mustKnowQuote: {
      quote: "Upon my head they placed a fruitless crown, / And put a barren sceptre in my gripe, / Thence to be wrenched with an unlineal hand...",
      speaker: "Macbeth",
      line: "3.1.61–63",
      whyItMatters: "Macbeth realizes the existential tragedy of his usurpation: he damned his soul only to hand the throne to another man's heirs."
    },
    teacherPopQuiz: {
      question: "Why does Macbeth fear Banquo specifically?",
      answer: "Banquo's 'royalty of nature', moral wisdom, and the prophecy that Banquo's descendants will establish an eternal dynasty."
    },
    keyStagecraftVector: "Macbeth adopting Lady Macbeth's rhetoric of toxic masculinity to manipulate the hired assassins."
  },
  "a3-s2": {
    thirtySecondRecap: "Lady Macbeth confesses secret unhappiness. Macbeth reveals his mind is 'full of scorpions' and envies Duncan's peaceful grave, hiding the murder plan from his wife.",
    mustKnowQuote: {
      quote: "O, full of scorpions is my mind, dear wife! / Thou know'st that Banquo, and his Fleance, lives.",
      speaker: "Macbeth",
      line: "3.2.36–37",
      whyItMatters: "Visceral somatic metaphor depicting the stinging, venomous paranoia and guilt torturing Macbeth's psyche."
    },
    teacherPopQuiz: {
      question: "How has the relationship between Macbeth and Lady Macbeth shifted in Act 3?",
      answer: "Role reversal: Lady Macbeth is anxious and isolated, while Macbeth plans freelance assassinations without her consultation."
    },
    keyStagecraftVector: "Dimming lighting reflecting Macbeth's invocation to 'seeling night' to blind the tender eye of day."
  },
  "a3-s3": {
    thirtySecondRecap: "Three murderers ambush Banquo and Fleance in the dark. Banquo is slain, but the torch is struck out and Fleance escapes into the night.",
    mustKnowQuote: {
      quote: "O, treachery! Fly, good Fleance, fly, fly, fly! / Thou mayst revenge. O slave!",
      speaker: "Banquo",
      line: "3.3.17–18",
      whyItMatters: "The structural climax/turning point: Fleance's survival ensures the prophecy of the Stuart dynasty will triumph over tyranny."
    },
    teacherPopQuiz: {
      question: "Why is Fleance's escape considered the play's turning point (peripeteia)?",
      answer: "It is Macbeth's first operational failure; from this moment on, fate and nature actively work against his tyrannical control."
    },
    keyStagecraftVector: "The striking out of the physical torch on stage symbolizing the extinguishing of Scotland's chivalric light."
  },
  "a3-s4": {
    thirtySecondRecap: "At the state banquet, an assassin reports Fleance escaped. Banquo's bloody ghost occupies Macbeth's royal seat. Macbeth screams in terror, ruining the feast before the lords.",
    mustKnowQuote: {
      quote: "I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er.",
      speaker: "Macbeth",
      line: "3.4.135–137",
      whyItMatters: "The psychological point of no return: Macbeth accepts his damnation and resolves to maintain power through relentless slaughter."
    },
    teacherPopQuiz: {
      question: "What is the symbolic significance of Banquo's ghost sitting in Macbeth's royal chair?",
      answer: "It visually proves that Banquo's lineage, not Macbeth's, will rightfully possess the Scottish crown."
    },
    keyStagecraftVector: "Banquo's ghost visible only to Macbeth, creating theatrical tension between what Macbeth sees and what his lords see."
  },
  "a3-s5": {
    thirtySecondRecap: "Hecate rebukes the witches for acting without her and prepares a false magical illusion from the moon to lure Macbeth into fatal overconfidence.",
    mustKnowQuote: {
      quote: "And you all know, security / Is mortals' chiefest enemy.",
      speaker: "Hecate",
      line: "3.5.32–33",
      whyItMatters: "Identifies hubris and false complacency as humanity's greatest weakness, which the witches will weaponize in Act 4."
    },
    teacherPopQuiz: {
      question: "Why do many scholars believe Act 3 Scene 5 was added by Thomas Middleton?",
      answer: "Its musical meter and lighter, operatic songs ('Come away') clash with the dark, gritty tone of Shakespeare's original text."
    },
    keyStagecraftVector: "Hecate ascending into the 'heavens' using crane machinery above the Globe theater stage."
  },
  "a3-s6": {
    thirtySecondRecap: "Lennox uses biting sarcasm to expose Macbeth's tyranny. A Lord confirms Macduff has fled to England to seek an army from King Edward the Confessor.",
    mustKnowQuote: {
      quote: "Some holy angel / Fly to the court of England and unfold / His message ere he come, that a swift blessing / May soon return to this our suffering country / Under a hand accursed!",
      speaker: "Lennox",
      line: "3.6.45–49",
      whyItMatters: "Frames the conflict as a holy crusade: Christian angelic grace aligned with England against Macbeth's demonic curse."
    },
    teacherPopQuiz: {
      question: "How does Lennox safely criticize the King in an authoritarian police state?",
      answer: "Through heavy Socratic irony and double-talk that praises Macbeth's version of events while highlighting its absurdity."
    },
    keyStagecraftVector: "Whispered, secretive dialogue conveying an atmosphere of pervasive state surveillance."
  },
  "a4-s1": {
    thirtySecondRecap: "Witches brew their cauldron. Three apparitions give Macbeth riddling promises (beware Macduff, none of woman born, Birnam Wood). Shown Banquo's royal descendants, Macbeth orders Fife slaughtered.",
    mustKnowQuote: {
      quote: "Be bloody, bold, and resolute; laugh to scorn / The power of man, for none of woman born / Shall harm Macbeth.",
      speaker: "Second Apparition",
      line: "4.1.79–81",
      whyItMatters: "The core equivocal promise that lulls Macbeth into fatal overconfidence while disguising Macduff's Caesarean birth."
    },
    teacherPopQuiz: {
      question: "What is the symbolic meaning of the mirror held by the eighth king in the procession?",
      answer: "It reflects King James I sitting in the Jacobean audience, celebrating his direct ancestry from Banquo."
    },
    keyStagecraftVector: "The grotesque catalog of cauldron ingredients and the supernatural apparitions rising from the stage trapdoor."
  },
  "a4-s2": {
    thirtySecondRecap: "Lady Macduff complains about her husband fleeing. Traitors are discussed with her son. Macbeth's murderers break in, stab the brave boy to death, and hunt down Lady Macduff.",
    mustKnowQuote: {
      quote: "Whither should I fly? / I have done no harm. But I remember now / I am in this earthly world; where to do harm / Is often laudable, to do good sometime / Accounted dangerous folly.",
      speaker: "Lady Macduff",
      line: "4.2.70–74",
      whyItMatters: "Echoes 'Fair is foul': under tyranny, evil is celebrated as state policy while innocent goodness is destroyed."
    },
    teacherPopQuiz: {
      question: "Why is the murder of Macduff's young son shown directly on stage?",
      answer: "To shock the audience with visual proof that Macbeth's reign has devolved into unadulterated terrorism and infanticide."
    },
    keyStagecraftVector: "The brutal onstage violence and screaming pursuit of a mother through the audience exits."
  },
  "a4-s3": {
    thirtySecondRecap: "Malcolm tests Macduff by pretending to be evil. Convinced of Macduff's integrity, Malcolm pledges 10,000 troops. Ross brings news of Fife's slaughter; Macduff vows to 'feel it as a man'.",
    mustKnowQuote: {
      quote: "Dispute it like a man. / I shall do so; / But I must also feel it as a man: / I cannot but remember such things were, / That were most precious to me.",
      speaker: "Malcolm & Macduff",
      line: "4.3.220–223",
      whyItMatters: "Redefines authentic masculinity: true courage requires feeling deep grief and love before channeling sorrow into justice."
    },
    teacherPopQuiz: {
      question: "Why does Shakespeare include the description of King Edward curing 'the King's Evil' (scrofula)?",
      answer: "To contrast Edward's holy, divinely healing touch with Macbeth's diseased touch that brings plague and death to Scotland."
    },
    keyStagecraftVector: "Macduff pulling his hat over his face in silence to physically register unspeakable grief."
  },
  "a5-s1": {
    thirtySecondRecap: "Lady Macbeth sleepwalks with a candle, obsessively washing imaginary blood from her hands, reliving the murders of Duncan, Banquo, and Lady Macduff before a horrified doctor.",
    mustKnowQuote: {
      quote: "Out, damned spot! out, I say!—One: two: why, then, 'tis time to do't.—Hell is murky!...",
      speaker: "Lady Macbeth",
      line: "5.1.33–34",
      whyItMatters: "Her Act 2 claim that 'a little water clears us' collapses; her subconscious is permanently trapped in waking damnation."
    },
    teacherPopQuiz: {
      question: "Why does Lady Macbeth speak in prose rather than blank verse in this scene?",
      answer: "Her fragmented prose reflects the total psychological breakdown of her conscious mind and rational control."
    },
    keyStagecraftVector: "The flicker of the single candle in the dark corridor and the repetitive frantic scrubbing motions of her hands."
  },
  "a5-s2": {
    thirtySecondRecap: "Scottish lords march toward Birnam Wood to join Malcolm. They describe Macbeth fortifying Dunsinane in a mad fury, wearing titles that fit him like a giant's robe on a dwarfish thief.",
    mustKnowQuote: {
      quote: "Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.",
      speaker: "Angus",
      line: "5.2.20–22",
      whyItMatters: "The clothing motif climax: usurped authority shrinks the moral soul, making the royal mantle a ridiculous, drowning drape."
    },
    teacherPopQuiz: {
      question: "What psychological state is Macbeth in according to the Thanes?",
      answer: "Uncontrollable frenzy—some call it madness, others valiant fury, but his soldiers fight only from fear, not loyalty."
    },
    keyStagecraftVector: "Martial drums and purposeful marching cadence contrasting with Dunsinane's claustrophobic terror."
  },
  "a5-s3": {
    thirtySecondRecap: "Macbeth mocks the advancing army, clinging to the prophecies. He abuses a trembling servant, laments his withered autumn of life, and demands armor as the doctor admits his wife cannot be cured.",
    mustKnowQuote: {
      quote: "I have lived long enough: my way of life / Is fall'n into the sere, the yellow leaf; / And that which should accompany old age, / As honour, love, obedience, troops of friends, / I must not look to have...",
      speaker: "Macbeth",
      line: "5.3.22–26",
      whyItMatters: "Macbeth's poignant anagnorisis: supreme power has left his life a sterile, loveless wasteland devoid of human companionship."
    },
    teacherPopQuiz: {
      question: "How does Macbeth react when the Doctor says Lady Macbeth's mind is troubled by delusions?",
      answer: "He angrily demands a medicine to wipe away memory, then cynically shouts: 'Throw physic to the dogs, I'll none of it!'"
    },
    keyStagecraftVector: "Macbeth impatiently forcing his armor on and off as his moods swing erratically between rage and depression."
  },
  "a5-s4": {
    thirtySecondRecap: "At Birnam Wood, Malcolm orders every soldier to cut down a tree branch and carry it before him as camouflage, unknowingly fulfilling the prophecy.",
    mustKnowQuote: {
      quote: "Let every soldier hew him down a bough / And bear't before him: thereby shall we shadow / The numbers of our host...",
      speaker: "Malcolm",
      line: "5.4.4–6",
      whyItMatters: "Demonstrates that supernatural prophecies are fulfilled through mundane human military ingenuity."
    },
    teacherPopQuiz: {
      question: "Which apparition prophecy is fulfilled in this scene?",
      answer: "The Third Apparition (Child Crowned with a tree) declaring Macbeth will never be defeated until Birnam Wood comes to Dunsinane."
    },
    keyStagecraftVector: "An entire forest of green boughs appearing to move toward the castle."
  },
  "a5-s5": {
    thirtySecondRecap: "A cry of women signals Lady Macbeth's suicide. Macbeth delivers his 'Tomorrow and tomorrow' nihilism speech. A messenger reports Birnam Wood is moving, triggering panic.",
    mustKnowQuote: {
      quote: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day... Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more. It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.",
      speaker: "Macbeth",
      line: "5.5.19–28",
      whyItMatters: "The philosophical nadir of the tragedy: unchecked ambition reduces human existence to an absurd, meaningless performance."
    },
    teacherPopQuiz: {
      question: "What does Macbeth realize when the messenger reports the moving wood?",
      answer: "He realizes the Weird Sisters used 'equivocation'—telling a riddle that was literally true but fundamentally deceptive."
    },
    keyStagecraftVector: "The offstage wailing of mourning women breaking the eerie silence of the castle."
  },
  "a5-s6": {
    thirtySecondRecap: "Malcolm's army arrives before Dunsinane. He orders the branches thrown down and trumpets blown for the attack.",
    mustKnowQuote: {
      quote: "Now near enough: your leavy screens throw down, / And show like those you are.",
      speaker: "Malcolm",
      line: "5.6.1–2",
      whyItMatters: "Deception ends; the camouflage is cast aside and truth confronts tyranny openly."
    },
    teacherPopQuiz: {
      question: "Who leads the first assault against Dunsinane?",
      answer: "Old Siward and his son, representing seasoned military chivalry."
    },
    keyStagecraftVector: "The visual drop of leafy screens and loud battle trumpet flourishes."
  },
  "a5-s7": {
    thirtySecondRecap: "Macbeth fights like a baited bear. He slays Young Siward and mocks him for being born of woman, still relying on the prophecy.",
    mustKnowQuote: {
      quote: "They have tied me to a stake; I cannot fly, / But, bear-like, I must fight the course.",
      speaker: "Macbeth",
      line: "5.7.1–2",
      whyItMatters: "Allusion to Jacobean bear-baiting, emphasizing Macbeth's brutalized, cornered animal state."
    },
    teacherPopQuiz: {
      question: "Why does Macbeth feel fearless after killing Young Siward?",
      answer: "It reinforces his delusion that no man of woman born can harm him."
    },
    keyStagecraftVector: "Fast, violent broadsword fight ending in Young Siward's death."
  },
  "a5-s8": {
    thirtySecondRecap: "Macduff stalks the battlefield searching only for Macbeth, refusing to strike conscripted soldiers.",
    mustKnowQuote: {
      quote: "Tyrant, show thy face! / If thou beest slain and with no stroke of mine, / My wife and children's ghosts will haunt me still.",
      speaker: "Macduff",
      line: "5.8.14–16",
      whyItMatters: "Establishes Macduff's sacred chivalric purpose: vengeance for innocent family murder."
    },
    teacherPopQuiz: {
      question: "Why does Macduff refuse to fight other Scottish soldiers?",
      answer: "They are wretched conscripts forced to fight; his sword is reserved solely for the guilty tyrant."
    },
    keyStagecraftVector: "Macduff rushing across an empty stage following the sounds of combat."
  },
  "a5-s9": {
    thirtySecondRecap: "Malcolm and Siward enter Dunsinane as the castle surrenders peacefully and Macbeth's soldiers defect.",
    mustKnowQuote: {
      quote: "This way, my lord; the castle's gently rendered: / The tyrant's people on both sides do fight...",
      speaker: "Siward",
      line: "5.9.24–25",
      whyItMatters: "Illustrates the hollow weakness of tyranny: Macbeth has no loyal defenders."
    },
    teacherPopQuiz: {
      question: "Why did Dunsinane fall so easily?",
      answer: "Macbeth's own defenders refused to fight and switched sides to Malcolm."
    },
    keyStagecraftVector: "Soldiers cheering and opening the massive castle gates to the rightful King."
  },
  "a5-s10": {
    thirtySecondRecap: "Macbeth tries to avoid Macduff out of guilt, boasting his charmed life. Macduff reveals he was 'untimely ripped'. Cursing the fiends, Macbeth chooses a soldier's death.",
    mustKnowQuote: {
      quote: "Despair thy charm; / And let the angel whom thou still hast served / Tell thee, Macduff was from his mother's womb / Untimely ripped.",
      speaker: "Macduff",
      line: "5.10.13–16",
      whyItMatters: "The ultimate dramatic shock that shatters Macbeth's last delusion of supernatural invulnerability."
    },
    teacherPopQuiz: {
      question: "Why does Macbeth refuse to surrender even after learning Macduff can kill him?",
      answer: "He refuses to kiss the ground before Malcolm or be mocked as a caged freak; he chooses to die fighting."
    },
    keyStagecraftVector: "The desperate, clashing broadsword duel as Macbeth throws his shield forward."
  },
  "a5-s11": {
    thirtySecondRecap: "Siward rejoices his son died an honorable soldier. Macduff enters with Macbeth's severed head. Malcolm is hailed King, creates the first Earls, and restores peace.",
    mustKnowQuote: {
      quote: "Hail, King! for so thou art: behold, where stands / Th' usurper's cursed head: the time is free.",
      speaker: "Macduff",
      line: "5.11.20–21",
      whyItMatters: "Signals the complete restoration of natural and divine order: Scotland's time is finally free from the demonic usurper."
    },
    teacherPopQuiz: {
      question: "How does Malcolm describe Macbeth and Lady Macbeth in his closing speech?",
      answer: "'This dead butcher and his fiend-like queen'—the permanent verdict of history on their reign."
    },
    keyStagecraftVector: "Macbeth's head exhibited on a pike, echoing how Macdonwald's head was mounted in Act 1 Scene 2."
  }
};

/* =====================================================================
   3. MASTER FLASHCARDS: ACTIVE RECALL FOR EXAMS & POP-QUIZZES
   ===================================================================== */
export const MASTER_FLASHCARDS: FlashcardItem[] = [
  {
    id: "fc-1",
    category: "Quote",
    actSceneRef: "Act 1, Scene 1 (1.1.10–11)",
    question: "Complete the quote and state the literary technique: 'Fair is foul, and ________: / Hover through the fog and filthy air.'",
    answer: "Quote: 'foul is fair'.\nTechnique: Chiasmus and paradox.\nThe Witches invert moral reality and set the play's theme of deception.",
    keyQuote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.",
    examTip: "Use in essays on appearance vs reality and the supernatural. Note that Macbeth's very first spoken line in 1.3 echoes this exact phrase.",
    themeId: "appearance"
  },
  {
    id: "fc-2",
    category: "Character Arc",
    actSceneRef: "Act 1, Scene 2 (1.2.16–18)",
    question: "How is Macbeth described before he even appears on stage?",
    answer: "'Brave Macbeth—well he deserves that name' and 'Bellona's bridegroom'.\nHe is presented as a loyal, hyper-lethal warrior who 'unseams' rebels from the navel to the chops in defense of King Duncan.",
    keyQuote: "For brave Macbeth—well he deserves that name— / Disdaining Fortune, with his brandished steel...",
    examTip: "Crucial for tracing Macbeth's tragic arc from noble defender of the crown to a 'dead butcher' in Act 5.",
    themeId: "violence"
  },
  {
    id: "fc-3",
    category: "Quote",
    actSceneRef: "Act 1, Scene 3 (1.3.123–126)",
    question: "What warning does Banquo give Macbeth about the Witches' prophecies?",
    answer: "Banquo warns that 'instruments of darkness' tell small, harmless truths ('honest trifles') to win human trust, only to betray mortals in catastrophic matters.",
    keyQuote: "The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.",
    examTip: "Banquo serves as Macbeth's moral foil. Both hear prophecies, but Banquo remains spiritually alert while Macbeth succumbs.",
    themeId: "supernatural"
  },
  {
    id: "fc-4",
    category: "Theme & Device",
    actSceneRef: "Act 1, Scene 4 (1.4.11–14)",
    question: "What dramatic irony occurs during Duncan's reflection on the executed Thane of Cawdor?",
    answer: "Duncan laments 'There's no art to find the mind's construction in the face'—and Macbeth walks into the room at that precise second. Duncan blindly trusts his new Cawdor.",
    keyQuote: "There's no art / To find the mind's construction in the face: / He was a gentleman on whom I built / An absolute trust.",
    examTip: "Shows Duncan's tragic flaw as an overly trusting Christian monarch, vulnerable to Machiavellian deception.",
    themeId: "appearance"
  },
  {
    id: "fc-5",
    category: "Quote",
    actSceneRef: "Act 1, Scene 4 (1.4.50–51)",
    question: "Complete the rhyming couplet: 'Stars, hide your fires; / ________________________'",
    answer: "'Let not light see my black and deep desires'\nMacbeth demands cosmic darkness so his moral conscience won't witness his murderous ambition.",
    keyQuote: "Stars, hide your fires; / Let not light see my black and deep desires...",
    examTip: "Demonstrates chiaroscuro (light vs dark) imagery. Macbeth knows his ambition is morally black before committing the crime.",
    themeId: "ambition"
  },
  {
    id: "fc-6",
    category: "Character Arc",
    actSceneRef: "Act 1, Scene 5 (1.5.16–18)",
    question: "What flaw does Lady Macbeth identify in her husband's character upon reading his letter?",
    answer: "She fears his nature is 'too full o' the milk of human kindness'—he has ambition, but lacks the cold ruthlessness ('illness') to seize the crown through murder.",
    keyQuote: "Yet do I fear thy nature; / It is too full o' the milk of human kindness / To catch the nearest way.",
    examTip: "Subverts traditional gender roles: 'milk' (maternal care) is viewed as a shameful defect rather than a virtue.",
    themeId: "manhood"
  },
  {
    id: "fc-7",
    category: "Quote",
    actSceneRef: "Act 1, Scene 5 (1.5.38–41)",
    question: "What does Lady Macbeth ask demonic spirits to do to her body?",
    answer: "She commands them to 'unsex me here', fill her from crown to toe with direst cruelty, thicken her blood against remorse, and replace her breastmilk with bitter gall.",
    keyQuote: "Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty!",
    examTip: "Direct demonic invocation that links her to the Weird Sisters as a fourth witch figure in Jacobean theology.",
    themeId: "supernatural"
  },
  {
    id: "fc-8",
    category: "Quote",
    actSceneRef: "Act 1, Scene 5 (1.5.63–64)",
    question: "What advice does Lady Macbeth give Macbeth regarding his facial expression?",
    answer: "'Look like th' innocent flower, / But be the serpent under't.' Display hospitable warmth while harboring deadly, venomous strike capability.",
    keyQuote: "Look like th' innocent flower, / But be the serpent under't.",
    examTip: "Allusion to Genesis (the Fall of Man) and the 1605 Gunpowder Plot silver medal depicting a serpent concealed beneath flowers.",
    themeId: "appearance"
  },
  {
    id: "fc-9",
    category: "Theme & Device",
    actSceneRef: "Act 1, Scene 7 (1.7.1–28)",
    question: "In Macbeth's soliloquy, what are the four arguments he makes against killing Duncan?",
    answer: "1. Karmic retribution: violent deeds teach bloody instructions that rebound.\n2. Kinship & allegiance: he is Duncan's subject and kinsman.\n3. Hospitality: as host, he should bar the door, not hold the knife.\n4. Duncan's saintly virtue: his virtues will plead like angels against the murder.",
    keyQuote: "We but teach / Bloody instructions, which, being taught, return / To plague th' inventor.",
    examTip: "Shows Macbeth possesses full moral awareness. His crime is not a mistake of ignorance, but a deliberate surrender to hubris.",
    themeId: "guilt"
  },
  {
    id: "fc-10",
    category: "Quote",
    actSceneRef: "Act 1, Scene 7 (1.7.54–59)",
    question: "How does Lady Macbeth prove her loyalty to her murderous vow over Macbeth's hesitation?",
    answer: "She declares that she would have plucked her nursing infant from her breast and dashed its brains out on the floor had she sworn as he had done.",
    keyQuote: "I would, while it was smiling in my face, / Have plucked my nipple from his boneless gums, / And dashed the brains out, had I so sworn as you / Have done to this.",
    examTip: "Violent anti-maternal imagery designed to emasculate Macbeth and coerce him into committing regicide.",
    themeId: "violence"
  },
  {
    id: "fc-11",
    category: "Plot & Context",
    actSceneRef: "Act 2, Scene 1 (2.1.33–64)",
    question: "What does the floating dagger symbolize in Macbeth's soliloquy?",
    answer: "It symbolizes Macbeth's fevered, guilty conscience ('heat-oppressed brain') and the hypnotic, preternatural pull directing him toward regicide.",
    keyQuote: "Is this a dagger which I see before me, / The handle toward my hand? Come, let me clutch thee...",
    examTip: "Notice the shift: the blade starts clean, but sprouts 'gouts of blood' as Macbeth's mind succumbs to the violent reality.",
    themeId: "guilt"
  },
  {
    id: "fc-12",
    category: "Quote",
    actSceneRef: "Act 2, Scene 2 (2.2.34–36)",
    question: "What phantom voice does Macbeth hear immediately after murdering Duncan?",
    answer: "'Sleep no more! / Macbeth does murder sleep'—the innocent sleep that knits up the raveled sleeve of care.",
    keyQuote: "Methought I heard a voice cry, 'Sleep no more! / Macbeth does murder sleep'...",
    examTip: "Sleep is personified as natural restoration. By killing Duncan in sleep, Macbeth sentences his own soul to permanent insomnia.",
    themeId: "guilt"
  },
  {
    id: "fc-13",
    category: "Quote",
    actSceneRef: "Act 2, Scene 2 (2.2.59–64)",
    question: "Contrast Macbeth's and Lady Macbeth's views on washing the blood from their hands in 2.2.",
    answer: "Macbeth believes all of Neptune's oceans cannot clean his hands, but will instead turn the green seas red.\nLady Macbeth naively scoffs: 'A little water clears us of this deed.'",
    keyQuote: "Will all great Neptune's ocean wash this blood / Clean from my hand? No... / A little water clears us of this deed.",
    examTip: "Essential comparison: Macbeth recognizes metaphysical guilt instantly; Lady Macbeth represses it until it destroys her in Act 5.",
    themeId: "guilt"
  },
  {
    id: "fc-14",
    category: "Theme & Device",
    actSceneRef: "Act 2, Scene 4 (2.4.1–20)",
    question: "Name three unnatural events that occur in nature following Duncan's murder.",
    answer: "1. Solar eclipse: daytime sky is pitch-black as night.\n2. Avian inversion: a royal falcon is attacked and killed by a mousing owl.\n3. Cannibal horses: Duncan's warhorses break stalls and eat each other.",
    keyQuote: "And Duncan's horses... / Turned wild in nature... / 'Tis said they eat each other.",
    examTip: "Classic Jacobean pathetic fallacy and the disruption of the Great Chain of Being. Regicide fractures the entire cosmos.",
    themeId: "nature"
  },
  {
    id: "fc-15",
    category: "Quote",
    actSceneRef: "Act 3, Scene 1 (3.1.48–50)",
    question: "Explain the psychological meaning of: 'To be thus is nothing, / But to be safely thus.'",
    answer: "Holding supreme power ('to be thus') is meaningless unless that power is secure against rivals. Tyrannical ambition breeds endless paranoia.",
    keyQuote: "To be thus is nothing, / But to be safely thus. Our fears in Banquo / Stick deep...",
    examTip: "Key quote for explaining why Macbeth cannot stop murdering. Usurped power requires perpetual violence to defend.",
    themeId: "ambition"
  },
  {
    id: "fc-16",
    category: "Quote",
    actSceneRef: "Act 3, Scene 1 (3.1.61–63)",
    question: "What metaphors of sterility does Macbeth use regarding his crown?",
    answer: "A 'fruitless crown' and a 'barren sceptre' placed in his grip, destined to be wrenched away by an unlineal hand.",
    keyQuote: "Upon my head they placed a fruitless crown, / And put a barren sceptre in my gripe...",
    examTip: "Contrasts Macbeth's childless, sterile reign with Banquo's fertile, generational royal dynasty.",
    themeId: "nature"
  },
  {
    id: "fc-17",
    category: "Theme & Device",
    actSceneRef: "Act 3, Scene 3 (3.3.17–18)",
    question: "Why is Fleance's escape in 3.3 the turning point of the tragedy?",
    answer: "It is Macbeth's first operational defeat. It proves that mortal tyranny cannot defeat supernatural prophecy or eradicate Banquo's line.",
    keyQuote: "O, treachery! Fly, good Fleance, fly, fly, fly! / Thou mayst revenge. O slave!",
    examTip: "Marks the shift from Macbeth proactively rising to being cornered and reactively fighting off doom.",
    themeId: "fate"
  },
  {
    id: "fc-18",
    category: "Quote",
    actSceneRef: "Act 3, Scene 4 (3.4.121)",
    question: "What ancient proverb does Macbeth cite after seeing Banquo's ghost?",
    answer: "'It will have blood, they say: blood will have blood.' Murder inevitably demands retributive murder in return.",
    keyQuote: "It will have blood, they say: blood will have blood.",
    examTip: "Articulates the cyclical law of violence: you cannot commit bloodshed without drowning in blood yourself.",
    themeId: "violence"
  },
  {
    id: "fc-19",
    category: "Quote",
    actSceneRef: "Act 3, Scene 4 (3.4.135–137)",
    question: "What river metaphor does Macbeth use to describe his commitment to slaughter?",
    answer: "He is 'in blood stepped in so far' that wading across the crimson river is just as easy as turning back to safety.",
    keyQuote: "I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er.",
    examTip: "The moral Rubicon: Macbeth consciously abandons all hope of redemption and commits to total tyranny.",
    themeId: "guilt"
  },
  {
    id: "fc-20",
    category: "Plot & Context",
    actSceneRef: "Act 4, Scene 1 (4.1.68–94)",
    question: "What are the three Apparitions and their specific warnings to Macbeth?",
    answer: "1. Armed Head: 'Beware Macduff; beware the Thane of Fife.'\n2. Bloody Child: 'None of woman born shall harm Macbeth.'\n3. Crowned Child with Tree: 'Macbeth shall never vanquished be until Great Birnam Wood to high Dunsinane Hill shall come against him.'",
    keyQuote: "Be bloody, bold, and resolute; laugh to scorn / The power of man, for none of woman born / Shall harm Macbeth.",
    examTip: "Analyze equivocation: each riddle is literally true, but phrased to breed fatal hubris and false security.",
    themeId: "fate"
  },
  {
    id: "fc-21",
    category: "Character Arc",
    actSceneRef: "Act 4, Scene 1 (4.1.144–148)",
    question: "How does Macbeth's decision-making change after learning Macduff fled to England?",
    answer: "He abolishes all moral deliberation: 'The very firstlings of my heart shall be the firstlings of my hand.' He immediately orders the slaughter of Macduff's wife and children.",
    keyQuote: "From this moment / The very firstlings of my heart shall be / The firstlings of my hand.",
    examTip: "Highlights his degeneration: in Act 1 he spent an entire soliloquy deliberating; in Act 4 he massacres babies on pure impulse.",
    themeId: "violence"
  },
  {
    id: "fc-22",
    category: "Quote",
    actSceneRef: "Act 4, Scene 2 (4.2.8–11)",
    question: "What bird metaphor does Lady Macduff use to condemn Macduff's abandonment?",
    answer: "The tiny wren: 'the poor wren, the most diminutive of birds, will fight, her young ones in her nest, against the owl.'",
    keyQuote: "He wants the natural touch: for the poor wren, / The most diminutive of birds, will fight, / Her young ones in her nest, against the owl.",
    examTip: "Critiques abstract political heroism that leaves the vulnerable domestic family nest unprotected.",
    themeId: "nature"
  },
  {
    id: "fc-23",
    category: "Quote",
    actSceneRef: "Act 4, Scene 3 (4.3.220–223)",
    question: "When Malcolm tells Macduff to 'Dispute it like a man' after his family is slaughtered, what is Macduff's reply?",
    answer: "'I shall do so; / But I must also feel it as a man: / I cannot but remember such things were, / That were most precious to me.'",
    keyQuote: "Dispute it like a man. / I shall do so; / But I must also feel it as a man...",
    examTip: "The moral thesis on masculinity: true manhood integrates emotional grief and love, repudiating Lady Macbeth's unfeeling cruelty.",
    themeId: "manhood"
  },
  {
    id: "fc-24",
    category: "Quote",
    actSceneRef: "Act 5, Scene 1 (5.1.33–38)",
    question: "What does Lady Macbeth say during her sleepwalking scene that reverses her Act 2 stance?",
    answer: "'Out, damned spot! out, I say!' and 'Who would have thought the old man to have had so much blood in him?'\nShe can no longer wash away the imaginary blood.",
    keyQuote: "Out, damned spot! out, I say!—One: two: why, then, 'tis time to do't.—Hell is murky!...",
    examTip: "Notice the prose format, the sensory smell of blood, and the obsession with light (carrying a candle continuously).",
    themeId: "guilt"
  },
  {
    id: "fc-25",
    category: "Quote",
    actSceneRef: "Act 5, Scene 1 (5.1.43–44)",
    question: "Complete the quote: 'All the perfumes of Arabia will not ____________________'",
    answer: "'sweeten this little hand.'\nEchoes Macbeth's Act 2 Neptune ocean hyperbole with feminine olfactory perfume imagery.",
    keyQuote: "Here's the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand. O, O, O!",
    examTip: "Tragic parallelism: both Macbeths realize their guilt is cosmic and cannot be chemically or physically cleansed.",
    themeId: "guilt"
  },
  {
    id: "fc-26",
    category: "Theme & Device",
    actSceneRef: "Act 5, Scene 2 (5.2.20–22)",
    question: "What clothing metaphor does Angus use to describe Macbeth's kingship in Act 5?",
    answer: "'Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.'",
    keyQuote: "Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.",
    examTip: "The clothing motif reaches its conclusion. Illegitimate authority shrinks the moral soul until the stolen crown becomes ridiculous.",
    themeId: "appearance"
  },
  {
    id: "fc-27",
    category: "Quote",
    actSceneRef: "Act 5, Scene 3 (5.3.22–26)",
    question: "What botanical metaphor does Macbeth use to describe his approaching death in 5.3?",
    answer: "His life has 'fall'n into the sere, the yellow leaf'—withered autumn devoid of honor, love, obedience, or friends.",
    keyQuote: "I have lived long enough: my way of life / Is fall'n into the sere, the yellow leaf; / And that which should accompany old age...",
    examTip: "Tragic anagnorisis: Macbeth mourns the loss of normal human blessings, realizing absolute tyranny is hollow.",
    themeId: "nature"
  },
  {
    id: "fc-28",
    category: "Plot & Context",
    actSceneRef: "Act 5, Scene 4 (5.4.4–6)",
    question: "How is the prophecy of Birnam Wood moving to Dunsinane literally fulfilled?",
    answer: "Prince Malcolm orders each soldier to cut down a bough from Birnam Wood and carry it before him to camouflage their army's numbers.",
    keyQuote: "Let every soldier hew him down a bough / And bear't before him: thereby shall we shadow / The numbers of our host...",
    examTip: "Demonstrates that providence works through human military logic to defeat demonic equivocation.",
    themeId: "fate"
  },
  {
    id: "fc-29",
    category: "Quote",
    actSceneRef: "Act 5, Scene 5 (5.5.19–28)",
    question: "Recite the key metaphors Macbeth uses for human existence in his 'Tomorrow' speech.",
    answer: "1. A brief candle.\n2. A walking shadow.\n3. A poor player strutting on stage.\n4. A tale told by an idiot, full of sound and fury, signifying nothing.",
    keyQuote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more. It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.",
    examTip: "The ultimate expression of existential nihilism: having abandoned moral eternity, mortal time becomes an agonizing, meaningless crawl.",
    themeId: "ambition"
  },
  {
    id: "fc-30",
    category: "Plot & Context",
    actSceneRef: "Act 5, Scene 10 (5.10.13–16)",
    question: "How is the Second Apparition's riddle ('none of woman born shall harm Macbeth') dismantled?",
    answer: "Macduff reveals that he was not born naturally, but was from his mother's womb 'untimely ripped' via Caesarean section.",
    keyQuote: "Despair thy charm; / And let the angel whom thou still hast served / Tell thee, Macduff was from his mother's womb / Untimely ripped.",
    examTip: "The final peripeteia: Macbeth realizes the Witches' equivocation manipulated grammar to trap him in damnation.",
    themeId: "fate"
  },
  {
    id: "fc-31",
    category: "Character Arc",
    actSceneRef: "Act 5, Scene 10 (5.10.27–33)",
    question: "Why does Macbeth choose to fight Macduff even after knowing he is doomed?",
    answer: "He refuses to be captured and exhibited as a freakish tyrant; he reclaims his soldier's martial courage to die with weapon in hand.",
    keyQuote: "Yet I will try the last. Before my body / I throw my warlike shield. Lay on, Macduff...",
    examTip: "Restores a vestige of the tragic hero's original martial stature from Act 1 Scene 2 before his death.",
    themeId: "manhood"
  },
  {
    id: "fc-32",
    category: "Character Arc",
    actSceneRef: "Act 5, Scene 11 (5.11.35–41)",
    question: "How does Prince Malcolm characterize Macbeth and Lady Macbeth in the play's final speech?",
    answer: "'This dead butcher and his fiend-like queen'—reducing them to crude slaughterers and demonic agents as he restores legitimate kingship.",
    keyQuote: "Of this dead butcher and his fiend-like queen, / Who, as 'tis thought, by self and violent hands / Took off her life...",
    examTip: "Malcolm restores the organic agricultural metaphor ('planted newly') to heal Scotland's broken Great Chain of Being.",
    themeId: "nature"
  }
];

/* =====================================================================
   4. EXAM PROMPTS BANK: ESSAY BLUEPRINTS & THESIS FORMULAS
   ===================================================================== */
export const EXAM_PROMPTS_BANK: ExamPromptItem[] = [
  {
    id: "ep-1",
    title: "Macbeth's Transformation: Noble Soldier to 'Dead Butcher'",
    examBoards: "GCSE (AQA, Edexcel, OCR) & A-Level / AP Literature",
    prompt: "How does Shakespeare present the transformation of Macbeth from a heroic soldier to a tyrannical 'dead butcher'?",
    thesisFormula: "Shakespeare presents Macbeth's descent not as an abrupt moral failure, but as a progressive erosion of conscience driven by hubristic ambition, where the very martial violence celebrated by the state in Act 1 boomerangs to devour the commonwealth and the hero's soul.",
    jacobeanContext: "Appeals to Jacobean anxieties over usurpation following the 1605 Gunpowder Plot, demonstrating that violating the Divine Right of Kings inevitably reduces noble men to subhuman beasts.",
    paragraphs: [
      {
        topicSentence: "In Act 1, Macbeth's violence is celebrated because it defends legitimate monarchical order.",
        sceneReference: "Act 1, Scene 2 & Act 1, Scene 3",
        keyQuotes: [
          { quote: "Disdaining Fortune, with his brandished steel, / Which smoked with bloody execution", line: "1.2.17–18", analysisSnippet: "Visceral imagery illustrates that Macbeth's hero status is built on slaughter; his lethality is dangerous because it requires only a slight shift in target." },
          { quote: "Why do I yield to that suggestion / Whose horrid image doth unfix my hair...", line: "1.3.134–135", analysisSnippet: "Somatic reaction proves Macbeth possesses active moral conscience; the mere thought of regicide causes physical nausea." }
        ],
        criticalArgument: "Establish that Macbeth is not inherently evil at the outset; his capacity for moral horror makes his subsequent hardening tragic."
      },
      {
        topicSentence: "In Acts 2 and 3, guilt mutates into paranoid defensive slaughter to protect an illegitimate crown.",
        sceneReference: "Act 2, Scene 2 & Act 3, Scene 1",
        keyQuotes: [
          { quote: "Will all great Neptune's ocean wash this blood...", line: "2.2.59–60", analysisSnippet: "Cosmic hyperbole depicts indelible guilt following Duncan's murder." },
          { quote: "To be thus is nothing, / But to be safely thus. Our fears in Banquo / Stick deep...", line: "3.1.48–50", analysisSnippet: "Paranoia forces the usurper into ordering the assassination of his closest brother-in-arms." }
        ],
        criticalArgument: "Trace how the murder of Duncan necessitates the murder of Banquo, turning heroic swordplay into cowardice and contract killing."
      },
      {
        topicSentence: "By Acts 4 and 5, Macbeth eliminates moral deliberation entirely, devolving into nihilistic tyranny.",
        sceneReference: "Act 4, Scene 1 & Act 5, Scene 5",
        keyQuotes: [
          { quote: "The very firstlings of my heart shall be / The firstlings of my hand.", line: "4.1.147–148", analysisSnippet: "All reflection is abolished; slaughtering Macduff's children marks the nadir of tyrannical depravity." },
          { quote: "Tomorrow, and tomorrow, and tomorrow... Life's but a walking shadow...", line: "5.5.19–24", analysisSnippet: "Existential nihilism reveals the psychological bankruptcy of achieved ambition." }
        ],
        criticalArgument: "Conclude by contrasting the early tragic agonizing with the final empty apathy that leaves him branded a 'dead butcher'."
      }
    ]
  },
  {
    id: "ep-2",
    title: "Lady Macbeth, Gender & The Subversion of Nature",
    examBoards: "GCSE (AQA, Edexcel) & AP Literature",
    prompt: "Explore how Shakespeare presents Lady Macbeth and the themes of gender and power.",
    thesisFormula: "Shakespeare constructs Lady Macbeth as a transgressive challenge to patriarchal Jacobean domesticity who equates masculinity with unfeeling violence, yet ultimately demonstrates that human nature and moral conscience cannot be eradicated by sheer act of will.",
    jacobeanContext: "Jacobean belief in witchcraft viewed women as spiritually susceptible to demonic manipulation, while patriarchal medical texts associated female physiology with natural softness and maternal nurture.",
    paragraphs: [
      {
        topicSentence: "Lady Macbeth rejects conventional female identity to assume the ruthless authority her husband lacks.",
        sceneReference: "Act 1, Scene 5",
        keyQuotes: [
          { quote: "Come, you spirits / That tend on mortal thoughts, unsex me here...", line: "1.5.38–39", analysisSnippet: "Demonic invocation demanding the curdling of maternal milk into toxic gall to eliminate biological pity." },
          { quote: "Look like th' innocent flower, / But be the serpent under't.", line: "1.5.63–64", analysisSnippet: "Adopts Machiavellian political disguise, taking operational charge of the assassination." }
        ],
        criticalArgument: "She recognizes that within the patriarchal hierarchy, her only conduit to supreme sovereignty is weaponizing her husband's martial hand."
      },
      {
        topicSentence: "She manipulates Macbeth by redefining masculinity as brutal, unswerving execution of violence.",
        sceneReference: "Act 1, Scene 7",
        keyQuotes: [
          { quote: "When you durst do it, then you were a man...", line: "1.7.49", analysisSnippet: "Weaponizes masculine shame against Macbeth's chivalric conscience." },
          { quote: "I would, while it was smiling in my face, / Have plucked my nipple... and dashed the brains out...", line: "1.7.56–58", analysisSnippet: "Violent repudiation of maternal nurture designed to shock Macbeth into compliance." }
        ],
        criticalArgument: "Contrast her corrupted definition of manhood (unfeeling violence) with Macduff's authentic definition in 4.3 ('feel it as a man')."
      },
      {
        topicSentence: "Her repressed guilt erupts somnambulically, proving that female nature cannot be permanently 'unsexed'.",
        sceneReference: "Act 2, Scene 2 & Act 5, Scene 1",
        keyQuotes: [
          { quote: "A little water clears us of this deed.", line: "2.2.64", analysisSnippet: "Early superficial denial of moral culpability." },
          { quote: "Out, damned spot! out, I say!... All the perfumes of Arabia will not sweeten this little hand.", line: "5.1.33–44", analysisSnippet: "Subconscious retribution: prose breakdown and indelible olfactory trauma leading to suicide." }
        ],
        criticalArgument: "Her tragedy lies in the fatal miscalculation that the human conscience could be silenced by psychological bravado."
      }
    ]
  },
  {
    id: "ep-3",
    title: "The Supernatural: Fate versus Free Will",
    examBoards: "GCSE, A-Level & AP Literature",
    prompt: "How does Shakespeare use the supernatural to explore questions of fate, agency, and moral responsibility?",
    thesisFormula: "Rather than functioning as omnipotent puppet-masters, the supernatural agents in Macbeth operate as catalysts of latent human desire, exploiting Macbeth's ambitious predisposition through equivocation while leaving his moral agency and culpability entirely intact.",
    jacobeanContext: "Directly engages King James I's treatise Daemonologie (1597), which argued that witches cannot physically force mortals to sin, but tempt them with psychological illusions that exploit their existing spiritual vulnerabilities.",
    paragraphs: [
      {
        topicSentence: "The Witches establish an atmosphere of moral confusion, but only prophesy outcomes rather than commanding action.",
        sceneReference: "Act 1, Scene 1 & Act 1, Scene 3",
        keyQuotes: [
          { quote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.", line: "1.1.10–11", analysisSnippet: "Atmospheric and moral inversion that destabilizes Scottish reality." },
          { quote: "All hail, Macbeth, that shalt be King hereafter!", line: "1.3.48", analysisSnippet: "The prophecy makes no mention of murder; Macbeth's own mind immediately leaps to regicide." }
        ],
        criticalArgument: "Banquo hears identical prophecies but remains morally autonomous, proving that Macbeth's treason stems from his own free will."
      },
      {
        topicSentence: "Hallucinations blur the boundary between demonic temptation and psychological manifestation.",
        sceneReference: "Act 2, Scene 1 & Act 3, Scene 4",
        keyQuotes: [
          { quote: "Is this a dagger which I see before me... A dagger of the mind, a false creation...", line: "2.1.33–38", analysisSnippet: "The air-drawn dagger externalizes his suppressed bloodlust while acknowledging it is a mental projection." },
          { quote: "Thou canst not say I did it: never shake / Thy gory locks at me.", line: "3.4.49–50", analysisSnippet: "Banquo's ghost represents metaphysical justice enforcing psychological retribution upon the guilty king." }
        ],
        criticalArgument: "Shakespeare keeps the hallucinations ambiguous—they are simultaneously infernal prods and projections of a shattered conscience."
      },
      {
        topicSentence: "The Apparitions weaponize equivocation to exploit Macbeth's fatal arrogance.",
        sceneReference: "Act 4, Scene 1 & Act 5, Scene 10",
        keyQuotes: [
          { quote: "None of woman born / Shall harm Macbeth.", line: "4.1.80–81", analysisSnippet: "Linguistic trap designed to induce fatal complacency ('security')." },
          { quote: "And be these juggling fiends no more believed, / That palter with us in a double sense...", line: "5.10.19–20", analysisSnippet: "Anagnorisis: Macbeth recognizes demonic oracles keep the literal word while breaking the living hope." }
        ],
        criticalArgument: "Evil is ultimately exposed as self-consuming: relying on the supernatural strips the mortal of humanity and seals his destruction."
      }
    ]
  },
  {
    id: "ep-4",
    title: "Kingship, Tyranny & The Great Chain of Being",
    examBoards: "GCSE (AQA, Edexcel) & A-Level",
    prompt: "How does Shakespeare contrast legitimate kingship with tyranny in Macbeth?",
    thesisFormula: "Through the contrasting models of Duncan, Edward the Confessor, Malcolm, and Macbeth, Shakespeare delineates legitimate kingship as a divinely sanctioned, organic stewardship that heals and nurtures the commonwealth, while tyranny is presented as a sterile, predatory theft that mutilates the body politic.",
    jacobeanContext: "Directly reinforces King James I's political ideology in The True Law of Free Monarchies (1598), which defended the Divine Right of Kings and warned that usurping God's anointed ruler unleashes universal cosmic rebellion.",
    paragraphs: [
      {
        topicSentence: "Duncan embodies the holy, generative ideal of kingship, though vulnerable to Machiavellian deceit.",
        sceneReference: "Act 1, Scene 4 & Act 1, Scene 6",
        keyQuotes: [
          { quote: "I have begun to plant thee, and will labour / To make thee full of growing.", line: "1.4.28–29", analysisSnippet: "Agricultural imagery depicts the lawful monarch as a gentle gardener cultivating feudal loyalty." },
          { quote: "This castle hath a pleasant seat... the heaven's breath / Smells wooingly here.", line: "1.6.1–6", analysisSnippet: "Sanctuary imagery associates legitimate sovereign presence with natural peace and divine blessing." }
        ],
        criticalArgument: "Duncan's saintly kingship emphasizes that royal legitimacy is rooted in moral grace, even if earthly innocence requires martial protection."
      },
      {
        topicSentence: "Macbeth's tyrannical rule is characterized by sterility, paranoia, and ecological catastrophe.",
        sceneReference: "Act 2, Scene 4 & Act 5, Scene 2",
        keyQuotes: [
          { quote: "A falcon, towering in her pride of place, / Was by a mousing owl hawked at and killed.", line: "2.4.12–13", analysisSnippet: "Cosmic inversion: regicide causes the Great Chain of Being to fracture into monstrous cannibalism." },
          { quote: "Now does he feel his title / Hang loose about him, like a giant's robe / Upon a dwarfish thief.", line: "5.2.20–22", analysisSnippet: "Sartorial metaphor reveals that the stolen crown diminishes the usurper into a ridiculous parasite." }
        ],
        criticalArgument: "Tyranny produces no organic allegiance; Macbeth's kingdom becomes an open grave where citizens weep and soldiers defect."
      },
      {
        topicSentence: "The English court of Edward and Malcolm's restoration establish holy governance as a curative force.",
        sceneReference: "Act 4, Scene 3 & Act 5, Scene 11",
        keyQuotes: [
          { quote: "The king-becoming graces, / As justice, verity, temperance, stableness... mercy...", line: "4.3.91–93", analysisSnippet: "Malcolm's ethical taxonomy defines the Renaissance humanist ideal of sovereign self-discipline." },
          { quote: "What's more to do, which would be planted newly with the time... by the grace of Grace...", line: "5.11.31–38", analysisSnippet: "Echoes Duncan's gardening metaphor, restoring the divine covenant between God, King, and Scotland." }
        ],
        criticalArgument: "True kingship heals the diseased nation, demonstrating that divine order outlasts the sword of the tyrant."
      }
    ]
  },
  {
    id: "ep-5",
    title: "Appearance versus Reality & The Mask of Deceit",
    examBoards: "GCSE (AQA, Edexcel) & AP Literature",
    prompt: "How does Shakespeare explore the conflict between appearance and reality in Macbeth?",
    thesisFormula: "From the Witches' initial paradox to Macbeth's final disillusionment, Shakespeare reveals that in a fallen, ambitious world, physical surfaces, language, and ceremonial honors are systematically weaponized as masks to conceal lethal treachery.",
    jacobeanContext: "Reflects post-Reformation paranoia following the discovery of the 1605 Gunpowder Plot and the trial of Jesuit Superior Henry Garnet for mental reservation (equivocation).",
    paragraphs: [
      {
        topicSentence: "The tragedy opens by establishing that moral clarity and physical perception are compromised.",
        sceneReference: "Act 1, Scene 1 & Act 1, Scene 3",
        keyQuotes: [
          { quote: "Fair is foul, and foul is fair: / Hover through the fog and filthy air.", line: "1.1.10–11", analysisSnippet: "Chiasmus collapses moral opposites; Scotland's atmosphere is choked with deceptive fog." },
          { quote: "So foul and fair a day I have not seen.", line: "1.3.38", analysisSnippet: "Macbeth unconsciously echoes the demonic chant, indicating his vulnerability to appearance." }
        ],
        criticalArgument: "The demonic forces do not invent evil; they create an equivocal sensory fog that makes treason look attractive."
      },
      {
        topicSentence: "The Macbeths adopt theatrical courtly performance to mask cold-blooded regicide.",
        sceneReference: "Act 1, Scene 5 & Act 1, Scene 7",
        keyQuotes: [
          { quote: "Look like th' innocent flower, / But be the serpent under't.", line: "1.5.63–64", analysisSnippet: "Commands total visual hypocrisy: Edenic innocence masking Satanic venom." },
          { quote: "False face must hide what the false heart doth know.", line: "1.7.82", analysisSnippet: "The physical countenance is weaponized as a mask to stifle internal moral conscience." }
        ],
        criticalArgument: "The banquet scenes and hospitality rituals are shown to be theatrical props used to lure victims into slaughter."
      },
      {
        topicSentence: "In the climax, all deceptive masks are stripped away as reality asserts itself.",
        sceneReference: "Act 5, Scene 1 & Act 5, Scene 10",
        keyQuotes: [
          { quote: "Out, damned spot!... What, will these hands ne'er be clean?", line: "5.1.33–42", analysisSnippet: "Lady Macbeth's waking mask shatters; her subconscious reveals the reality of blood." },
          { quote: "And be these juggling fiends no more believed, / That palter with us in a double sense...", line: "5.10.19–20", analysisSnippet: "Macbeth denounces the linguistic masks of the Witches who deceived him with double meanings." }
        ],
        criticalArgument: "Deception offers only temporary earthly power; reality and divine truth inevitably reassert their dominance."
      }
    ]
  },
  {
    id: "ep-6",
    title: "Guilt, Conscience & Psychological Disintegration",
    examBoards: "GCSE, A-Level & AP Literature",
    prompt: "How does Shakespeare dramatize the psychological consequences of guilt in Macbeth?",
    thesisFormula: "Shakespeare presents guilt not as an abstract moral judgment, but as an inescapable somatic and cognitive pathology that manifests through hallucinations, insomnia, emotional desensitization, and madness, demonstrating that transgressing divine law destroys the human psyche from within.",
    jacobeanContext: "Renaissance faculty psychology and Protestant theology held that conscience was the spark of God in man; attempting to extinguish it induces spiritual frenzy and demonic possession.",
    paragraphs: [
      {
        topicSentence: "Anticipatory guilt produces immediate somatic and visual hallucinations before the deed is struck.",
        sceneReference: "Act 1, Scene 3 & Act 2, Scene 1",
        keyQuotes: [
          { quote: "Whose horrid image doth unfix my hair / And make my seated heart knock at my ribs...", line: "1.3.135–136", analysisSnippet: "Physiological convulsions register the horror of regicide before the knife is even touched." },
          { quote: "Is this a dagger which I see before me... Proceeding from the heat-oppressed brain?", line: "2.1.33–39", analysisSnippet: "The hallucinated blade externalizes the psychological rupture of premeditated homicide." }
        ],
        criticalArgument: "Macbeth's guilt begins in contemplation, showing his deep moral sensitivity prior to committing the crime."
      },
      {
        topicSentence: "The immediate aftermath of murder destroys the biological capacity for restorative peace and prayer.",
        sceneReference: "Act 2, Scene 2 & Act 3, Scene 2",
        keyQuotes: [
          { quote: "I could not say 'Amen,' when they did say 'God bless us!'", line: "2.2.29–30", analysisSnippet: "Immediate spiritual excommunication: the murderer's throat is physically paralyzed against holy speech." },
          { quote: "Methought I heard a voice cry, 'Sleep no more! / Macbeth does murder sleep'...", line: "2.2.34–35", analysisSnippet: "Insomnia is the eternal sentence of the guilty conscience; rest is permanently murdered." }
        ],
        criticalArgument: "Macbeth and Lady Macbeth react in opposite ways: Macbeth experiences acute vocal panic, while Lady Macbeth represses her guilt."
      },
      {
        topicSentence: "Long-term guilt bifurcates into sleepwalking madness for Lady Macbeth and emotional death for Macbeth.",
        sceneReference: "Act 5, Scene 1 & Act 5, Scene 5",
        keyQuotes: [
          { quote: "Out, damned spot!... Hell is murky!... More needs she the divine than the physician.", line: "5.1.33–71", analysisSnippet: "Lady Macbeth's repressed guilt erupts as nocturnal somnambulism and suicide." },
          { quote: "I have almost forgot the taste of fears... I have supped full with horrors...", line: "5.5.9–13", analysisSnippet: "Macbeth suffers terminal emotional desensitization, unable even to mourn his wife's death." }
        ],
        criticalArgument: "The dual trajectories prove that guilt is fatal whether one attempts to repress it or tries to drown it in more blood."
      }
    ]
  }
];
