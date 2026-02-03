
import { Story, VocabularyWord } from "./types";

export const b6_l16_words: VocabularyWord[] = [
    {
        id: "awe",
        word: "awe",
        definition: "(n.) A feeling of fear or nervous wonder and respect. (v.) To fill with awe. awesome (adj.) Causing feelings of awe.",
        exampleSentence: "The view of Earth from space filled the astronauts with awe.",
        imageEmoji: "😲",
        category: "Grade 6",
        synonyms: ["wonder", "admiration", "reverence"],
        antonyms: ["disdain", "scorn", "boredom"]
    },
    {
        id: "catastrophe",
        word: "catastrophe",
        definition: "(n.) Something that causes great loss and suffering; a terrible disaster.",
        exampleSentence: "The earthquake was a catastrophe that claimed thousands of victims.",
        imageEmoji: "🌋",
        category: "Grade 6",
        synonyms: ["disaster", "calamity", "tragedy"],
        antonyms: ["blessing", "boon", "miracle"]
    },
    {
        id: "collide",
        word: "collide",
        definition: "(v.) To come together with great force. collision (n.) The act of colliding.",
        exampleSentence: "The two skaters were injured when they collided on the ice.",
        imageEmoji: "💥",
        category: "Grade 6",
        synonyms: ["crashe", "smash", "hit"],
        antonyms: ["avoid", "miss"]
    },
    {
        id: "consequence",
        word: "consequence",
        definition: "(n.) 1. A result or outcome. 2. Importance.",
        exampleSentence: "Receiving a scolding was the consequence of my rude behavior.",
        imageEmoji: "👉",
        category: "Grade 6",
        synonyms: ["result", "effect", "outcome"],
        antonyms: ["cause", "origin", "source"]
    },
    {
        id: "deceive",
        word: "deceive",
        definition: "(v.) To cause to believe something that is not true. deceptive (adj.) Intended to or likely to deceive or mislead. deception (n.) An act of deceiving.",
        exampleSentence: "The Wizard of Oz tried to deceive Dorothy by pretending to perform real magic.",
        imageEmoji: "🎭",
        category: "Grade 6",
        synonyms: ["mislead", "trick", "fool"],
        antonyms: ["guide", "enlighten", "be honest"]
    },
    {
        id: "fatality",
        word: "fatality",
        definition: "(n.) A death resulting from an accident or a disaster.",
        exampleSentence: "Fortunately there were no fatalities when the train ran off the track.",
        imageEmoji: "⚰️",
        category: "Grade 6",
        synonyms: ["death", "casualty", "loss"],
        antonyms: ["survival"]
    },
    {
        id: "improvise",
        word: "improvise",
        definition: "(v.) 1. To compose or perform without preparation. 2. To make do with whatever is on hand.",
        exampleSentence: "The actors occasionally improvise a scene based on suggestions from the audience.",
        imageEmoji: "🎭",
        category: "Grade 6",
        synonyms: ["invent", "ad-lib", "device"],
        antonyms: ["plan", "prepare", "rehearse"]
    },
    {
        id: "loom",
        word: "loom",
        definition: "(n.) A machine or device for weaving cloth. (v.) 1. To appear in a sudden and frightening way. 2. To get close.",
        exampleSentence: "These blankets were woven on a small hand loom.",
        imageEmoji: "🧵",
        category: "Grade 6",
        synonyms: ["appear", "emerge", "threaten"],
        antonyms: ["disappear", "vanish", "fade"]
    },
    {
        id: "lull",
        word: "lull",
        definition: "(v.) To cause to relax. (n.) A temporary calm or quiet period.",
        exampleSentence: "The sound of the ocean lulled us to sleep.",
        imageEmoji: "😴",
        category: "Grade 6",
        synonyms: ["soothe", "calm", "hush"],
        antonyms: ["agitate", "disturb", "excite"]
    },
    {
        id: "placid",
        word: "placid",
        definition: "(adj.) Calm and peaceful.",
        exampleSentence: "The wind suddenly picked up, ruffling the placid surface of the lake.",
        imageEmoji: "🌊",
        category: "Grade 6",
        synonyms: ["calm", "peaceful", "quiet"],
        antonyms: ["stormy", "agitated", "rough"]
    },
    {
        id: "predicament",
        word: "predicament",
        definition: "(n.) A difficult or trying situation.",
        exampleSentence: "Running out of gas at night on a deserted road put the travelers in a predicament.",
        imageEmoji: "😬",
        category: "Grade 6",
        synonyms: ["dilemma", "plight", "difficulty"],
        antonyms: ["solution", "resolution", "benefit"]
    },
    {
        id: "priority",
        word: "priority",
        definition: "(n.) The state or condition of being before another in importance or time.",
        exampleSentence: "Chandra's first priority was to clean her room before her friends came over.",
        imageEmoji: "1️⃣",
        category: "Grade 6",
        synonyms: ["precedence", "importance", "urgency"],
        antonyms: ["unimportance"]
    },
    {
        id: "reinforce",
        word: "reinforce",
        definition: "(v.) To increase or strengthen. reinforcements (n. pl.) Extra people such as soldiers or police sent to provide help.",
        exampleSentence: "Telling frightened children that there is nothing to worry about only reinforces their fear.",
        imageEmoji: "🧱",
        category: "Grade 6",
        synonyms: ["strengthen", "bolster", "support"],
        antonyms: ["weaken", "undermine", "sapper"]
    },
    {
        id: "stern",
        word: "stern",
        definition: "(n.) The rear part of a boat. (adj.) Unpleasantly severe.",
        exampleSentence: "The front of the boat rose out of the water when everyone rushed to the stern.",
        imageEmoji: "⛵",
        category: "Grade 6",
        synonyms: ["strict", "severe", "harsh"],
        antonyms: ["kind", "lenient", "gentle"]
    },
    {
        id: "treacherous",
        word: "treacherous",
        definition: "(adj.) 1. Not to be trusted. 2. Actually dangerous while seeming to be safe.",
        exampleSentence: "A treacherous sentinel let the enemy pass through the gate.",
        imageEmoji: "🐍",
        category: "Grade 6",
        synonyms: ["dangerous", "unreliable", "deceptive"],
        antonyms: ["safe", "harmful", "reliable"]
    }
];

export const b6_l16_story_1: Story = {
    id: "b6-l16-s1",
    title: "16A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, write C on the line. If the word is used incorrectly, write I on the line.`,
    wordsIncluded: b6_l16_words.map(w => w.id),
    questions: [
        {
            id: "16a-q1",
            type: "multiple-choice",
            question: "1. loom",
            options: [
                "(a) As the day of our departure **loomed**, we grew more and more nervous.",
                "(b) The ferry **loomed** out of the fog and came to a stop at the dock.",
                "(c) The **loom** takes cotton fibers and turns them into cloth.",
                "(d) Mateo disgraced himself by acting like a **loom** at the party."
            ],
            correctAnswers: [
                "(a) As the day of our departure **loomed**, we grew more and more nervous.",
                "(b) The ferry **loomed** out of the fog and came to a stop at the dock.",
                "(c) The **loom** takes cotton fibers and turns them into cloth."
            ]
        },
        {
            id: "16a-q2",
            type: "multiple-choice",
            question: "2. stern",
            options: [
                "(a) My friend sat in the **stern** of the boat while I rowed.",
                "(b) I took hold of the **stern** and spun it into the air.",
                "(c) The woman was given a **stern** warning by the judge.",
                "(d) The **stern** look on my mother's face told me I was in trouble."
            ],
            correctAnswers: [
                "(a) My friend sat in the **stern** of the boat while I rowed.",
                "(c) The woman was given a **stern** warning by the judge.",
                "(d) The **stern** look on my mother's face told me I was in trouble."
            ]
        },
        {
            id: "16a-q3",
            type: "multiple-choice",
            question: "3. lull",
            options: [
                "(a) The gentle rumbling of the ship's engine **lulled** us to sleep.",
                "(b) The people were **lulled** into excitement.",
                "(c) My dad couldn't **lull** anymore, so we went out to eat.",
                "(d) There was a **lull** in the storm, so we decided to return home."
            ],
            correctAnswers: [
                "(a) The gentle rumbling of the ship's engine **lulled** us to sleep.",
                "(d) There was a **lull** in the storm, so we decided to return home."
            ]
        },
        {
            id: "16a-q4",
            type: "multiple-choice",
            question: "4. deception",
            options: [
                "(a) My best friend's **deception** made me sad.",
                "(b) The Trojans were **deceived** into thinking the wooden horse was a gift.",
                "(c) Messages were sent and **deceived** by mail.",
                "(d) The company got caught using **deceptive** methods to sell its products."
            ],
            correctAnswers: [
                "(a) My best friend's **deception** made me sad.",
                "(b) The Trojans were **deceived** into thinking the wooden horse was a gift.",
                "(d) The company got caught using **deceptive** methods to sell its products."
            ]
        },
        {
            id: "16a-q5",
            type: "multiple-choice",
            question: "5. collide",
            options: [
                "(a) The judge **collided** that neither person was to blame for the accident.",
                "(b) The **collision** between the soccer players made everyone gasp.",
                "(c) The Andromeda galaxy will **collide** with our galaxy in four billion years.",
                "(d) The neighbors took up a **collision** for the family who lost their home."
            ],
            correctAnswers: [
                "(b) The **collision** between the soccer players made everyone gasp.",
                "(c) The Andromeda galaxy will **collide** with our galaxy in four billion years."
            ]
        },
        {
            id: "16a-q6",
            type: "multiple-choice",
            question: "6. awe",
            options: [
                "(a) Reading about the ancient and beautiful Aztec society fills me with **awe**.",
                "(b) The hikers were **awed** by the beautiful view of the mountains.",
                "(c) A frozen waterfall must be an **awesome** sight.",
                "(d) We **awed** that my friends were probably right to quit the team."
            ],
            correctAnswers: [
                "(a) Reading about the ancient and beautiful Aztec society fills me with **awe**.",
                "(b) The hikers were **awed** by the beautiful view of the mountains.",
                "(c) A frozen waterfall must be an **awesome** sight."
            ]
        },
        {
            id: "16a-q7",
            type: "multiple-choice",
            question: "7. improvise",
            options: [
                "(a) When the speaker's notes got mixed up, she had to **improvise**.",
                "(b) The sailors **improvised** a sail from whatever they could find.",
                "(c) The actors forgot their lines, so they began to **improvise**.",
                "(d) Tanis will **improvise** the food with her for the party."
            ],
            correctAnswers: [
                "(a) When the speaker's notes got mixed up, she had to **improvise**.",
                "(b) The sailors **improvised** a sail from whatever they could find.",
                "(c) The actors forgot their lines, so they began to **improvise**."
            ]
        },
        {
            id: "16a-q8",
            type: "multiple-choice",
            question: "8. placid",
            options: [
                "(a) Uncle Ang is usually in a **placid** mood after his nap.",
                "(b) The ocean was **placid** for the first three days of our trip.",
                "(c) The can is filled with **placid** trash and needs to be emptied.",
                "(d) I felt so **placid**, I almost couldn't stop myself from screaming."
            ],
            correctAnswers: [
                "(a) Uncle Ang is usually in a **placid** mood after his nap.",
                "(b) The ocean was **placid** for the first three days of our trip."
            ]
        },
        {
            id: "16a-q9",
            type: "multiple-choice",
            question: "9. priority",
            options: [
                "(a) A **priority** of the U.S. Postal Service is delivering the mail promptly.",
                "(b) The campers' first **priority** was putting up their tent.",
                "(c) Finding the best doctor for their baby was a **priority** for the new parents.",
                "(d) The **priority** was built in the 1200s and stood for seven centuries."
            ],
            correctAnswers: [
                "(a) A **priority** of the U.S. Postal Service is delivering the mail promptly.",
                "(b) The campers' first **priority** was putting up their tent.",
                "(c) Finding the best doctor for their baby was a **priority** for the new parents."
            ]
        },
        {
            id: "16a-q10",
            type: "multiple-choice",
            question: "10. catastrophe",
            options: [
                "(a) The **catastrophe** fell fifty feet down the side of the mountain.",
                "(b) It would be a major **catastrophe** if a large meteorite struck Earth.",
                "(c) We cannot prevent every **catastrophe**, but we can try to prepare for them.",
                "(d) She couldn't believe the **catastrophe** she heard about on the news."
            ],
            correctAnswers: [
                "(b) It would be a major **catastrophe** if a large meteorite struck Earth.",
                "(c) We cannot prevent every **catastrophe**, but we can try to prepare for them.",
                "(d) She couldn't believe the **catastrophe** she heard about on the news."
            ]
        }
    ]
};

export const b6_l16_story_2: Story = {
    id: "b6-l16-s2",
    title: "16B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l16_words.map(w => w.id),
    questions: [
        {
            id: "16b-q1",
            type: "multiple-choice",
            question: "1. Which word goes with *cloth*?",
            options: ["(a) lull", "(b) loom", "(c) lumber", "(d) limb"],
            correctAnswer: "(b) loom"
        },
        {
            id: "16b-q2",
            type: "multiple-choice",
            question: "2. Which word goes with *bad news*?",
            options: ["(a) misfortune", "(b) disaster", "(c) reinforcements", "(d) catastrophe"],
            correctAnswer: "(d) catastrophe"
        },
        {
            id: "16b-q3",
            type: "multiple-choice",
            question: "3. Which word goes with *death*?",
            options: ["(a) humid", "(b) fatality", "(c) consequence", "(d) lull"],
            correctAnswer: "(b) fatality"
        },
        {
            id: "16b-q4",
            type: "multiple-choice",
            question: "4. Which word goes with *difficult situation*?",
            options: ["(a) awe", "(b) priority", "(c) predicament", "(d) loom"],
            correctAnswer: "(c) predicament"
        },
        {
            id: "16b-q5",
            type: "multiple-choice",
            question: "5. Which word goes with *support*?",
            options: ["(a) relinquish", "(b) reinforce", "(c) improvise", "(d) sustain"],
            correctAnswer: "(b) reinforce"
        },
        {
            id: "16b-q6",
            type: "multiple-choice",
            question: "6. Which word goes with *result*?",
            options: ["(a) consequence", "(b) collision", "(c) effect", "(d) deception"],
            correctAnswer: "(a) consequence"
        },
        {
            id: "16b-q7",
            type: "multiple-choice",
            question: "7. Which word goes with *dishonest*?",
            options: ["(a) collide", "(b) deceive", "(c) treachery", "(d) betray"],
            correctAnswer: "(b) deceive"
        },
        {
            id: "16b-q8",
            type: "multiple-choice",
            question: "8. Which word goes with *strict*?",
            options: ["(a) deceptive", "(b) severe", "(c) stern", "(d) placid"],
            correctAnswer: "(c) stern"
        },
        {
            id: "16b-q9",
            type: "multiple-choice",
            question: "9. Which word goes with *peaceful*?",
            options: ["(a) deceptive", "(b) placid", "(c) treacherous", "(d) tranquil"],
            correctAnswer: "(b) placid"
        },
        {
            id: "16b-q10",
            type: "multiple-choice",
            question: "10. Which word goes with *wonder*?",
            options: ["(a) priority", "(b) awe", "(c) consequence", "(d) catastrophe"],
            correctAnswer: "(b) awe"
        }
    ]
};

export const b6_l16_story_3: Story = {
    id: "b6-l16-s3",
    title: "16C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l16_words.map(w => w.id),
    questions: [
        {
            id: "16c-q1",
            type: "multiple-choice",
            question: "1. The **treacherously**",
            options: [
                "(a) dangerous part of the trail is coming up, so be careful.",
                "(b) sinister man spread rumors against the government.",
                "(c) tiny stone is so small it won't hurt anything.",
                "(d) soft pillow is perfect for a good night's sleep."
            ],
            correctAnswers: [
                "(a) dangerous part of the trail is coming up, so be careful.",
                "(b) sinister man spread rumors against the government."
            ]
        },
        {
            id: "16c-q2",
            type: "multiple-choice",
            question: "2. We **reinforced**",
            options: [
                "(a) the fence by fixing all the holes and replacing some of the posts.",
                "(b) the team with two top new players to make sure we would win the game.",
                "(c) the students that tomorrow would be a holiday.",
                "(d) our bones by drinking milk."
            ],
            correctAnswers: [
                "(a) the fence by fixing all the holes and replacing some of the posts.",
                "(b) the team with two top new players to make sure we would win the game.",
                "(d) our bones by drinking milk."
            ]
        },
        {
            id: "16c-q3",
            type: "multiple-choice",
            question: "3. You should **prioritize**",
            options: [
                "(a) all the cooked carrots because they're delicious.",
                "(b) saying thank you to the host of the birthday party before you go home.",
                "(c) your little sister's safety over going wherever you want.",
                "(d) finishing your homework, and then you can talk on the phone."
            ],
            correctAnswers: [
                "(b) saying thank you to the host of the birthday party before you go home.",
                "(c) your little sister's safety over going wherever you want.",
                "(d) finishing your homework, and then you can talk on the phone."
            ]
        },
        {
            id: "16c-q4",
            type: "multiple-choice",
            question: "4. The **collisions**",
            options: [
                "(a) of the ocean waves against the shore were beautiful.",
                "(b) make me so sleepy every time I eat them.",
                "(c) can be planted in the soil if they're watered immediately afterward.",
                "(d) of the comets over the last couple of days could be seen at night."
            ],
            correctAnswers: [
                "(a) of the ocean waves against the shore were beautiful.",
                "(d) of the comets over the last couple of days could be seen at night."
            ]
        },
        {
            id: "16c-q5",
            type: "multiple-choice",
            question: "5. The **placidness** of",
            options: [
                "(a) the clanging bell in my ear woke me up.",
                "(b) the lake looked inviting on such a hot day.",
                "(c) the tempting smells in the kitchen made my mouth water.",
                "(d) her mood made us all calm and relaxed."
            ],
            correctAnswers: [
                "(b) the lake looked inviting on such a hot day.",
                "(d) her mood made us all calm and relaxed."
            ]
        },
        {
            id: "16c-q6",
            type: "multiple-choice",
            question: "6. The **consequences**",
            options: [
                "(a) can be very bad if you fail every test.",
                "(b) of ignoring the rules won't be good.",
                "(c) at the top of the building were made of copper.",
                "(d) of people watching too much TV are still not fully understood."
            ],
            correctAnswers: [
                "(a) can be very bad if you fail every test.",
                "(b) of ignoring the rules won't be good.",
                "(d) of people watching too much TV are still not fully understood."
            ]
        },
        {
            id: "16c-q7",
            type: "multiple-choice",
            question: "7. The number of **fatalities**",
            options: [
                "(a) where climbers can spend the night has doubled in the past year.",
                "(b) scored in the last minute helped us win.",
                "(c) resulting from the earthquake is not yet known.",
                "(d) caused by people texting while driving is increasing."
            ],
            correctAnswers: [
                "(c) resulting from the earthquake is not yet known.",
                "(d) caused by people texting while driving is increasing."
            ]
        },
        {
            id: "16c-q8",
            type: "multiple-choice",
            question: "8. **Improvisation**",
            options: [
                "(a) can be fun if you're comfortable with abandoning the script.",
                "(b) during band practice can help you play better.",
                "(c) on the website will be a good resource for your report.",
                "(d) will be from June 1 through September 1."
            ],
            correctAnswers: [
                "(a) can be fun if you're comfortable with abandoning the script.",
                "(b) during band practice can help you play better."
            ]
        }
    ]
};

export const b6_l16_story_4: Story = {
    id: "b6-l16-s4",
    title: "16D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l16_words.map(w => w.id),
    questions: [
        {
            id: "16d-q1",
            type: "open-ended",
            question: "1. **Placid** people might make friends easily because",
            sampleAnswer: "they are calm and peaceful to be around."
        },
        {
            id: "16d-q2",
            type: "open-ended",
            question: "2. My top **priority** in school is",
            sampleAnswer: "getting good grades."
        },
        {
            id: "16d-q3",
            type: "open-ended",
            question: "3. If you **reinforce** a wall, that means you",
            sampleAnswer: "strengthen it or make it stronger."
        },
        {
            id: "16d-q4",
            type: "open-ended",
            question: "4. Parents might be **stern** when",
            sampleAnswer: "their children misbehave or break the rules."
        },
        {
            id: "16d-q5",
            type: "open-ended",
            question: "5. If someone **deceived** me, I would",
            sampleAnswer: "be angry and have trouble trusting them again."
        },
        {
            id: "16d-q6",
            type: "open-ended",
            question: "6. Something that **lulls** me to sleep is",
            sampleAnswer: "soft music or the sound of rain."
        },
        {
            id: "16d-q7",
            type: "open-ended",
            question: "7. I would be **awed** by",
            sampleAnswer: "a magnificent view of the Grand Canyon or a brilliant performance."
        },
        {
            id: "16d-q8",
            type: "open-ended",
            question: "8. One **consequence** of a tornado might be",
            sampleAnswer: "destroyed houses and power outages."
        },
        {
            id: "16d-q9",
            type: "open-ended",
            question: "9. It would be a **catastrophe** if",
            sampleAnswer: "a large asteroid hit the Earth."
        },
        {
            id: "16d-q10",
            type: "open-ended",
            question: "10. One **predicament** I remember having is",
            sampleAnswer: "locking my keys in the car when I was late."
        }
    ]
};

export const b6_l16_story_passage: Story = {
    id: "b6-l16-passage",
    title: "Reading Passage: The \"Unsinkable\" Titanic",
    type: "non-fiction",
    content: `
On the night of April 14, 1912, in the Atlantic Ocean about 360 miles off the coast of Newfoundland, the *Titanic* blazed with lights. It was headed for New York, four days out from England on its very first voyage. Almost nine hundred feet long, it was the biggest passenger ship afloat. Its steel hull, the main body of the ship, had been **reinforced** with a second hull fitted inside it. Because of this safety feature, the *Titanic* was believed to be unsinkable—a belief that **lulled** everyone on board into a false sense of security. Their trust was to have tragic **consequences**.

Although the sea looked **placid** that night, its appearance was **deceptive**. The *Titanic*, in fact, was in **treacherous** waters. In 1912 there was no radar to warn of an approaching object. So when a huge iceberg suddenly **loomed** out of the darkness, there was little time to act. The *Titanic* made a desperate attempt to avoid a **collision**, but it was too late. The ship's right side struck the iceberg. Both its inner and outer hull were ripped open below the waterline. Water began pouring in, flooding the front of the ship. Because it was 11:40 p.m., many of the passengers were sleeping or getting ready for bed. The slight bump, which was all they felt, caused no alarm.

When Captain Edward Smith received a report of the damage, he knew at once that a **catastrophe** had occurred. He realized that his "unsinkable" ship could stay afloat for little more than an hour or two. Even as he gave the order to abandon ship, he faced a terrible **predicament**: There were not enough lifeboats for everyone on board. Furthermore, there had been no practice drills. Crew members were confused because there were no clear orders from their superiors.

There would have been enough time to **improvise** rafts, but in the panic that followed as passengers and crew were alerted, no attempt was made to do so. Women and children were given **priority** as the crew hastily prepared the lifeboats. In the confusion, many of the boats were lowered into the water half empty. That night there were fifteen hundred **fatalities**, and only seven hundred survived. Among the dead was the captain, who chose to go down with his ship. Another was Ida Straus of New York, who is remembered for gallantly refusing a place in one of the lifeboats to stay with her husband.

Those fortunate enough to have escaped in the lifeboats were filled with **awe** as they witnessed the final moments of the *Titanic*. The ship's bow sank first, leaving the **stern** sticking out high above the water. Then its lights suddenly went out. At 2:20 a.m., less than three hours after striking the iceberg, the great ship slid silently beneath the waves.
    `,
    wordsIncluded: b6_l16_words.map(w => w.id),
    questions: [
        {
            id: "b6-l16-p-q1",
            type: "multiple-choice",
            question: "Why is a **collision** with an iceberg unlikely to occur today?",
            options: [
                "Because of radar, which warns of approaching objects.",
                "Because icebergs have all melted.",
                "Because ships are made of rubber.",
                "Because ships no longer travel in the Atlantic."
            ],
            correctAnswer: "Because of radar, which warns of approaching objects."
        },
        {
            id: "b6-l16-p-q2",
            type: "multiple-choice",
            question: "Why must the *Titanic* have seemed an **awesome** sight to people from passing ships?",
            options: [
                "It was blazing with lights and was the biggest ship afloat.",
                "It was sinking.",
                "It was painted bright pink.",
                "It was flying in the air."
            ],
            correctAnswer: "It was blazing with lights and was the biggest ship afloat."
        },
        {
            id: "b6-l16-p-q3",
            type: "multiple-choice",
            question: "What was the purpose of the *Titanic*'s inner hull?",
            options: [
                "To **reinforce** the main body of the ship.",
                "To store luggage.",
                "To hold water.",
                "To make the ship heavier."
            ],
            correctAnswer: "To **reinforce** the main body of the ship."
        },
        {
            id: "b6-l16-p-q4",
            type: "multiple-choice",
            question: "Why were those on board not **apprehensive** about possible danger?",
            options: [
                "They were **lulled** into a false sense of security because the ship was believed to be unsinkable.",
                "They didn't know they were at sea.",
                "They were all asleep.",
                "They wanted the ship to sink."
            ],
            correctAnswer: "They were **lulled** into a false sense of security because the ship was believed to be unsinkable."
        },
        {
            id: "b6-l16-p-q5",
            type: "multiple-choice",
            question: "What is the meaning of **treacherous** as it is used in the passage?",
            options: [
                "Actually dangerous while seeming to be safe.",
                "Very deep.",
                "Full of fish.",
                "Very cold."
            ],
            correctAnswer: "Actually dangerous while seeming to be safe."
        },
        {
            id: "b6-l16-p-q6",
            type: "multiple-choice",
            question: "How were those keeping watch **deceived** by the sea's appearance that night?",
            options: [
                "It looked **placid** but hid dangerous icebergs.",
                "It looked red instead of blue.",
                "It looked frozen solid.",
                "It looked like land."
            ],
            correctAnswer: "It looked **placid** but hid dangerous icebergs."
        },
        {
            id: "b6-l16-p-q7",
            type: "multiple-choice",
            question: "What is the meaning of **loom** as it is used in the passage?",
            options: [
                "To appear in a sudden and frightening way.",
                "To weave cloth.",
                "To disappear.",
                "To make a loud noise."
            ],
            correctAnswer: "To appear in a sudden and frightening way."
        },
        {
            id: "b6-l16-p-q8",
            type: "multiple-choice",
            question: "How serious was the damage caused by the accident?",
            options: [
                "It was a **catastrophe**; both hulls were ripped open.",
                "It was minor; just a scratch.",
                "It broken a few windows.",
                "It damaged the propeller."
            ],
            correctAnswer: "It was a **catastrophe**; both hulls were ripped open."
        },
        {
            id: "b6-l16-p-q9",
            type: "multiple-choice",
            question: "Why might the passengers have remained **placid** when the *Titanic* first struck the iceberg?",
            options: [
                "They felt only a slight bump and were not alarmed.",
                "They were told to stay calm by the captain.",
                "They were all deaf.",
                "They enjoyed the bump."
            ],
            correctAnswer: "They felt only a slight bump and were not alarmed."
        },
        {
            id: "b6-l16-p-q10",
            type: "multiple-choice",
            question: "What was the **predicament** that Captain Smith found himself in?",
            options: [
                "There were not enough lifeboats for everyone on board.",
                "The ship was out of fuel.",
                "The crew was on strike.",
                "He was lost."
            ],
            correctAnswer: "There were not enough lifeboats for everyone on board."
        },
        {
            id: "b6-l16-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **improvise** as it is used in the passage?",
            options: [
                "To make do with whatever is on hand (like making rafts).",
                "To perform a song.",
                "To improve something.",
                "To give clear orders."
            ],
            correctAnswer: "To make do with whatever is on hand (like making rafts)."
        },
        {
            id: "b6-l16-p-q12",
            type: "multiple-choice",
            question: "Which passengers left the sinking ship first?",
            options: [
                "Women and children were given **priority**.",
                "The crew.",
                "The rich passengers.",
                "The captain."
            ],
            correctAnswer: "Women and children were given **priority**."
        },
        {
            id: "b6-l16-p-q13",
            type: "multiple-choice",
            question: "What happened to Ida Straus?",
            options: [
                "She refused a place in a lifeboat and became a **fatality**.",
                "She drove the lifeboat.",
                "She swam to shore.",
                "She was rescued by another ship."
            ],
            correctAnswer: "She refused a place in a lifeboat and became a **fatality**."
        },
        {
            id: "b6-l16-p-q14",
            type: "multiple-choice",
            question: "Why would passengers who remained on board have tried to go to the rear of the boat?",
            options: [
                "Because the bow sank first, leaving the **stern** high in the air.",
                "Because the lifeboats were there.",
                "Because the restaurant was there.",
                "Because it was warmer there."
            ],
            correctAnswer: "Because the bow sank first, leaving the **stern** high in the air."
        },
        {
            id: "b6-l16-p-q15",
            type: "multiple-choice",
            question: "What might have been an important **consequence** of the loss of the *Titanic*?",
            options: [
                "Fifteen hundred people died (and safety rules were likely improved).",
                "The price of tickets went up.",
                "The ocean became saltier.",
                "People stopped using ships."
            ],
            correctAnswer: "Fifteen hundred people died (and safety rules were likely improved)."
        }
    ]
};

export const b6_l16_story_facts: Story = {
    id: "b6-l16-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The Vikings were a warlike people who lived over a thousand years ago in what is now Norway, Denmark, and Sweden. They were superb boat builders and sailors, and they traveled in their famous longboats as far as Greenland and the northern shores of North America. The language they spoke is called Old Norse, and the English words **steer** and **stern** both come from the Old Norse word *stjorn*, which means "to steer." The two words are connected because the **stern** is the rear of a boat, the place from which the vessel is *steered*.

* The *stem* is the front end of a ship; it is a wooden or metal part to which the sides of the vessel are attached, rather as leaves are attached to the stem of a plant. To inspect a boat "*from stem to stern*" is to examine every part of it.

* The noun form of the verb **collide** is *collision*. A *collision course* is one that is being followed by moving objects that will result in their *colliding* unless there is a change of course by either or both. (The small two-seater plane was on a *collision course* with a large jetliner.)
    `,
    wordsIncluded: ["stern", "collide"],
    questions: []
};
