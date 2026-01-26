import { Story, VocabularyWord } from "./types";

export const b6_l19_words: VocabularyWord[] = [
    {
        id: "breach",
        word: "breach",
        definition: "(n.) 1. An opening made by battering. 2. A breaking or being broken. (v.) 1. To break through. 2. To fail to keep; to break.",
        exampleSentence: "Water poured through the breach in the dam.",
        imageEmoji: "💥",
        category: "Grade 6"
    },
    {
        id: "clammy",
        word: "clammy",
        definition: "(adj.) Cold and damp.",
        exampleSentence: "The speaker was so nervous his hands were clammy with sweat.",
        imageEmoji: "😰",
        category: "Grade 6"
    },
    {
        id: "construct",
        word: "construct",
        definition: "(v.) To build; to make by fitting the parts together. construction (n.) 1. The act of building. 2. Something that is built.",
        exampleSentence: "We constructed the tree house from pieces of scrap lumber.",
        imageEmoji: "👷",
        category: "Grade 6"
    },
    {
        id: "elaborate",
        word: "elaborate",
        definition: "(adj.) Having great detail; done with much care. (v.) To give more details.",
        exampleSentence: "The elaborate meal took hours to prepare.",
        imageEmoji: "🎨",
        category: "Grade 6"
    },
    {
        id: "fragrant",
        word: "fragrant",
        definition: "(adj.) Having a pleasant smell. fragrance (n.) A sweet or pleasant smell.",
        exampleSentence: "We awoke to the fragrant aroma of freshly baked bread.",
        imageEmoji: "🌸",
        category: "Grade 6"
    },
    {
        id: "furnish",
        word: "furnish",
        definition: "(v.) 1. To equip with what is needed; to supply. 2. To put furniture into. furnishings (n. pl.) Articles of furniture for the home or office.",
        exampleSentence: "The parents' club furnished most of the money for the art project.",
        imageEmoji: "🛋️",
        category: "Grade 6"
    },
    {
        id: "haven",
        word: "haven",
        definition: "(n.) A place of safety; a sanctuary.",
        exampleSentence: "The local school was a haven for those made homeless by the hurricane.",
        imageEmoji: "🛡️",
        category: "Grade 6"
    },
    {
        id: "install",
        word: "install",
        definition: "(v.) 1. To put in place or set up. 2. To place into office.",
        exampleSentence: "We want to install a large skylight over the kitchen sink.",
        imageEmoji: "🔧",
        category: "Grade 6"
    },
    {
        id: "massive",
        word: "massive",
        definition: "(adj.) Very large and solid; heavy.",
        exampleSentence: "A massive meteorite collided with the Mexican coast sixty-five million years ago, making a crater nearly two hundred miles across.",
        imageEmoji: "🏔️",
        category: "Grade 6"
    },
    {
        id: "repel",
        word: "repel",
        definition: "(v.) 1. To drive away. 2. To throw off; to shed. 3. To disgust. repellent (n.) Something that repels. (adj.) 1. Able to repel. 2. Disgusting.",
        exampleSentence: "To repel mosquitoes, use this spray before going out in the woods.",
        imageEmoji: "🦟",
        category: "Grade 6"
    },
    {
        id: "restore",
        word: "restore",
        definition: "(v.) 1. To give back. 2. To bring back to the original condition. restoration (n.) 1. The bringing back to the original condition. 2. The thing that is brought back to its original state.",
        exampleSentence: "The police restored the stolen goods to the rightful owners.",
        imageEmoji: "🔙",
        category: "Grade 6"
    },
    {
        id: "retaliate",
        word: "retaliate",
        definition: "(v.) To return an injury, usually in the same way. retaliation (n.) The act of retaliating.",
        exampleSentence: "When my friend hid my bat, I retaliated by hiding her softball mitt.",
        imageEmoji: "⚔️",
        category: "Grade 6"
    },
    {
        id: "stench",
        word: "stench",
        definition: "(n.) A bad smell.",
        exampleSentence: "The stench of rotting fish drove the investigators away from the dock.",
        imageEmoji: "🤢",
        category: "Grade 6"
    },
    {
        id: "strew",
        word: "strew",
        definition: "(v.) To scatter.",
        exampleSentence: "The wind strewed papers all over the yard.",
        imageEmoji: "🍃",
        category: "Grade 6"
    },
    {
        id: "vicinity",
        word: "vicinity",
        definition: "(n.) The nearby or surrounding area.",
        exampleSentence: "Is there a library in the vicinity of your home?",
        imageEmoji: "📍",
        category: "Grade 6"
    }
];

export const b6_l19_story_1: Story = {
    id: "b6-l19-s1",
    title: "19A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 19. Then write the sentence.`,
    wordsIncluded: b6_l19_words.map(w => w.id),
    questions: [
        {
            id: "19a-q1",
            type: "multiple-choice",
            question: "1. (a) A haven is (b) a high wall to keep out enemies. (c) A breach is (d) an opening made by breaking through.",
            options: [
                "(c) A breach is an opening made by breaking through.",
                "(a) A haven is a high wall to keep out enemies.",
                "(c) A breach is a high wall to keep out enemies.",
                "(a) A haven is an opening made by breaking through."
            ],
            correctAnswer: "(c) A breach is an opening made by breaking through."
        },
        {
            id: "19a-q2",
            type: "multiple-choice",
            question: "2. (a) vacate it on an agreed date. (b) To restore a building is to (c) To construct a building is to (d) bring it back to its original condition.",
            options: [
                "(b) To restore a building is to bring it back to its original condition.",
                "(c) To construct a building is to bring it back to its original condition.",
                "(b) To restore a building is to vacate it on an agreed date.",
                "(c) To construct a building is to vacate it on an agreed date."
            ],
            correctAnswer: "(b) To restore a building is to bring it back to its original condition."
        },
        {
            id: "19a-q3",
            type: "multiple-choice",
            question: "3. (a) To be in the vicinity is to be (b) aware of what is going on. (c) To be clammy is to be (d) close by.",
            options: [
                "(a) To be in the vicinity is to be close by.",
                "(c) To be clammy is to be aware of what is going on.",
                "(a) To be in the vicinity is to be aware of what is going on.",
                "(c) To be clammy is to be close by."
            ],
            correctAnswer: "(a) To be in the vicinity is to be close by."
        },
        {
            id: "19a-q4",
            type: "multiple-choice",
            question: "4. (a) To elaborate is to (b) make no further effort. (c) provide more details. (d) To retaliate is to",
            options: [
                "(a) To elaborate is to provide more details.",
                "(d) To retaliate is to provide more details.",
                "(a) To elaborate is to make no further effort.",
                "(d) To retaliate is to make no further effort."
            ],
            correctAnswer: "(a) To elaborate is to provide more details."
        },
        {
            id: "19a-q5",
            type: "multiple-choice",
            question: "5. (a) build it. (b) To furnish a room is to (c) To construct a room is to (d) put it to its intended use.",
            options: [
                "(c) To construct a room is to build it.",
                "(b) To furnish a room is to build it.",
                "(c) To construct a room is to put it to its intended use.",
                "(b) To furnish a room is to put it to its intended use."
            ],
            correctAnswer: "(c) To construct a room is to build it."
        },
        {
            id: "19a-q6",
            type: "multiple-choice",
            question: "6. (a) Retaliation is (b) the act of breaking through. (c) Fragrance is (d) the returning of an injury.",
            options: [
                "(a) Retaliation is the returning of an injury.",
                "(c) Fragrance is the act of breaking through.",
                "(a) Retaliation is the act of breaking through.",
                "(c) Fragrance is the returning of an injury."
            ],
            correctAnswer: "(a) Retaliation is the returning of an injury."
        },
        {
            id: "19a-q7",
            type: "multiple-choice",
            question: "7. (a) To furnish things (b) is to supply them. (c) is to take them apart. (d) To strew things",
            options: [
                "(a) To furnish things is to supply them.",
                "(d) To strew things is to take them apart.",
                "(a) To furnish things is to take them apart.",
                "(d) To strew things is to supply them."
            ],
            correctAnswer: "(a) To furnish things is to supply them."
        },
        {
            id: "19a-q8",
            type: "multiple-choice",
            question: "8. (a) is to hide it. (b) To install something (c) To repel something (d) is to fix it in place.",
            options: [
                "(b) To install something is to fix it in place.",
                "(c) To repel something is to hide it.",
                "(b) To install something is to hide it.",
                "(c) To repel something is to fix it in place."
            ],
            correctAnswer: "(b) To install something is to fix it in place."
        },
        {
            id: "19a-q9",
            type: "multiple-choice",
            question: "9. (a) A stench is (b) A haven is (c) a sneering remark. (d) a bad smell.",
            options: [
                "(a) A stench is a bad smell.",
                "(b) A haven is a sneering remark.",
                "(a) A stench is a sneering remark.",
                "(b) A haven is a bad smell."
            ],
            correctAnswer: "(a) A stench is a bad smell."
        },
        {
            id: "19a-q10",
            type: "multiple-choice",
            question: "10. (a) A fragrance is (b) something that is put to regular use. (c) A repellent is (d) something that drives things away.",
            options: [
                "(c) A repellent is something that drives things away.",
                "(a) A fragrance is something that drives things away.",
                "(c) A repellent is something that is put to regular use.",
                "(a) A fragrance is something that is put to regular use."
            ],
            correctAnswer: "(c) A repellent is something that drives things away."
        }
    ]
};

export const b6_l19_story_2: Story = {
    id: "b6-l19-s2",
    title: "19B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l19_words.map(w => w.id),
    questions: [
        {
            id: "19b-q1",
            type: "multiple-choice",
            question: "1. Although only a few miles across, a neutron star can be as **tremendously full of matter** as the sun.",
            options: ["massive", "elaborate", "clammy", "fragrant"],
            correctAnswer: "massive"
        },
        {
            id: "19b-q2",
            type: "multiple-choice",
            question: "2. Rosa remembered the **pleasantly sweet smell** of the honeysuckle in her grandparents' garden.",
            options: ["stench", "fragrance", "vicinity", "haven"],
            correctAnswer: "fragrance"
        },
        {
            id: "19b-q3",
            type: "multiple-choice",
            question: "3. You **failed to keep** my trust when you wouldn't stand up for me.",
            options: ["constructed", "installed", "breached", "restored"],
            correctAnswer: "breached"
        },
        {
            id: "19b-q4",
            type: "multiple-choice",
            question: "4. Prejudice of any kind is **so unpleasant that it is disgusting** to decent people.",
            options: ["repellent", "fragrant", "elaborate", "clammy"],
            correctAnswer: "repellent"
        },
        {
            id: "19b-q5",
            type: "multiple-choice",
            question: "5. A small inlet was the only **place of safety** for boats during the storm.",
            options: ["breach", "vicinity", "haven", "construction"],
            correctAnswer: "haven"
        },
        {
            id: "19b-q6",
            type: "multiple-choice",
            question: "6. Kanye had thought that a snake's skin would feel **cold and damp**, but it felt quite dry.",
            options: ["clammy", "fragrant", "massive", "elaborate"],
            correctAnswer: "clammy"
        },
        {
            id: "19b-q7",
            type: "multiple-choice",
            question: "7. Many of these colonial houses have been **brought back to their original condition** by prominent builders.",
            options: ["constructed", "installed", "restored", "furnished"],
            correctAnswer: "restored"
        },
        {
            id: "19b-q8",
            type: "multiple-choice",
            question: "8. Garbage was **spread about here and there** all over the sidewalk from the overturned trash cans.",
            options: ["strewed", "installed", "repelled", "furnished"],
            correctAnswer: "strewed"
        },
        {
            id: "19b-q9",
            type: "multiple-choice",
            question: "9. The ad for the furniture store said you can **obtain all the furniture you need** for three rooms for under $1,000.",
            options: ["construct", "furnish", "restore", "install"],
            correctAnswer: "furnish"
        },
        {
            id: "19b-q10",
            type: "multiple-choice",
            question: "10. When she broke her promise to me, I **got back at her** by telling all her friends what she had done.",
            options: ["retaliated", "repelled", "breached", "furnished"],
            correctAnswer: "retaliated"
        }
    ]
};

export const b6_l19_story_3: Story = {
    id: "b6-l19-s3",
    title: "19C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l19_words.map(w => w.id),
    questions: [
        {
            id: "19c-q1",
            type: "multiple-choice",
            question: "1. Which of the following might be **fragrant**?",
            options: [
                "(a) garbage",
                "(b) a glass ornament",
                "(c) flowers",
                "(d) perfume"
            ],
            correctAnswers: [
                "(c) flowers",
                "(d) perfume"
            ]
        },
        {
            id: "19c-q2",
            type: "multiple-choice",
            question: "2. Which of the following could be **installed**?",
            options: [
                "(a) new members",
                "(b) firewood",
                "(c) smoke detectors",
                "(d) a fireplace"
            ],
            correctAnswers: [
                "(a) new members",
                "(c) smoke detectors",
                "(d) a fireplace"
            ]
        },
        {
            id: "19c-q3",
            type: "multiple-choice",
            question: "3. Which of the following might have a **stench**?",
            options: [
                "(a) roses",
                "(b) garbage",
                "(c) spoiled milk",
                "(d) rotten eggs"
            ],
            correctAnswers: [
                "(b) garbage",
                "(c) spoiled milk",
                "(d) rotten eggs"
            ]
        },
        {
            id: "19c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be **elaborate**?",
            options: [
                "(a) a ceremony",
                "(b) a hoax",
                "(c) an exhibit",
                "(d) a grain of sand"
            ],
            correctAnswers: [
                "(a) a ceremony",
                "(b) a hoax",
                "(c) an exhibit"
            ]
        },
        {
            id: "19c-q5",
            type: "multiple-choice",
            question: "5. Which of the following can be **breached**?",
            options: [
                "(a) a hoax",
                "(b) a wall",
                "(c) a contract",
                "(d) a friendship"
            ],
            correctAnswers: [
                "(b) a wall",
                "(c) a contract",
                "(d) a friendship"
            ]
        },
        {
            id: "19c-q6",
            type: "multiple-choice",
            question: "6. Which of the following can be **restored**?",
            options: [
                "(a) a fireplace",
                "(b) confidence",
                "(c) a painting",
                "(d) fatigue"
            ],
            correctAnswers: [
                "(a) a fireplace",
                "(b) confidence",
                "(c) a painting"
            ]
        },
        {
            id: "19c-q7",
            type: "multiple-choice",
            question: "7. Which of the following can be **repelled**?",
            options: [
                "(a) an attack",
                "(b) a person",
                "(c) dogs",
                "(d) water"
            ],
            correctAnswers: [
                "(a) an attack",
                "(b) a person",
                "(c) dogs",
                "(d) water"
            ]
        },
        {
            id: "19c-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **furnished**?",
            options: [
                "(a) a room",
                "(b) an opportunity",
                "(c) supplies",
                "(d) anguish"
            ],
            correctAnswers: [
                "(a) a room",
                "(b) an opportunity",
                "(c) supplies"
            ]
        }
    ]
};

export const b6_l19_story_4: Story = {
    id: "b6-l19-s4",
    title: "19D Word Study: Prefixes",
    type: "exercise",
    content: `The prefix re- has two common meanings. It can mean "again," or it can mean "backward" or "back." Match each definition with the correct word from the list. Write each word in the space provided. (restrain, revise, relive, recall, refill, return, reread, revive)`,
    wordsIncluded: b6_l19_words.map(w => w.id),
    questions: [
        {
            id: "19d-q1",
            type: "multiple-choice",
            question: "1. To know again what one knew before",
            options: ["recall", "revise", "relive", "refill"],
            correctAnswer: "recall"
        },
        {
            id: "19d-q2",
            type: "multiple-choice",
            question: "2. To hold back by force or force of will",
            options: ["restrain", "return", "revive", "reread"],
            correctAnswer: "restrain"
        },
        {
            id: "19d-q3",
            type: "multiple-choice",
            question: "3. To bring back to a former state or place",
            options: ["return", "restrain", "refill", "recall"],
            correctAnswer: "return"
        },
        {
            id: "19d-q4",
            type: "multiple-choice",
            question: "4. To fill again after being emptied",
            options: ["refill", "revive", "relive", "revise"],
            correctAnswer: "refill"
        },
        {
            id: "19d-q5",
            type: "multiple-choice",
            question: "5. To look over again and make changes",
            options: ["revise", "reread", "restrain", "recall"],
            correctAnswer: "revise"
        },
        {
            id: "19d-q6",
            type: "multiple-choice",
            question: "6. To experience events again in your mind",
            options: ["relive", "revive", "return", "refill"],
            correctAnswer: "relive"
        },
        {
            id: "19d-q7",
            type: "multiple-choice",
            question: "7. To bring back to a lively state",
            options: ["revive", "restrain", "recall", "reread"],
            correctAnswer: "revive"
        },
        {
            id: "19d-q8",
            type: "multiple-choice",
            question: "8. To go over material in a book again",
            options: ["reread", "revise", "return", "relive"],
            correctAnswer: "reread"
        }
    ]
};

export const b6_l19_story_passage: Story = {
    id: "b6-l19-passage",
    title: "Reading Passage: The Great Age of Castles",
    type: "non-fiction",
    content: `
Castles seem like magical places to those who have only read about them in fairy tales. The reality, however, was much different. True, they were homes to queens and kings and to great ladies and lords. Yet, we can tell from the castles that have survived that they were not pleasant places in which to live.

Their outside walls were made of **massive** blocks of stone and were up to twenty feet thick. Living inside such thick stone walls must have felt like living in a cave. The rooms inside the castle were often **clammy**. In the winter, icy drafts blew through the narrow, glassless windows. In the heat of summer, the **stench** from the animals kept inside the castle, as well as from the unwashed bodies of the people, would have been overpowering. **Fragrant** herbs were used to mask the smells; one of the servants' jobs was to **strew** them on the castle floors.

The great age of castle building was the seven-hundred-year period from around 800 to 1500. Castles built at the beginning of this period were fairly simple wooden **constructions**. These have long since disappeared. The ones built later were made of stone and were much more **elaborate**. They had many private rooms and splendid **furnishings**. There was a great hall where banquets were held and visitors were greeted and entertained.

The main reason for building a castle was to provide a sanctuary in times of danger. The castle protected not only those who made their homes inside its walls but also those who lived in the **vicinity**. They could move inside the castle grounds if a hostile army approached. An attacking army had first to cross the moat, a wide, deep trench filled with water that surrounded the castle. Then the attackers had to scale the high, outside walls on ladders or platforms. Those defending the castle could **retaliate** by shooting arrows at them or by dropping rocks or pouring boiling liquids on them. If the attackers were **repelled**, they might begin a siege. The purpose of a siege was to starve the defenders into surrendering. It could last for many months before one side or the other gave up.

When gunpowder came into use around 1500, cannons could **breach** even the thickest walls. Castles were no longer the **havens** they had once been. Many were abandoned and fell into ruin, but a number of them are still standing. In some cases their modern owners have **restored** them and made them more comfortable for today's occupants by **installing** modern plumbing and electricity. Many castles are open to the public as museums or luxury hotels. Today you can enjoy some of the bygone magic of castles by visiting castles in Germany, particularly along the Rhine River, and in Great Britain.
    `,
    wordsIncluded: b6_l19_words.map(w => w.id),
    questions: [
        {
            id: "19p-q1",
            type: "multiple-choice",
            question: "1. What were the two main functions of castles?",
            options: [
                "To provide a home and protection.",
                "To store gold and feed animals.",
                "To be museums and hotels.",
                "To be prisons and schools."
            ],
            correctAnswer: "To provide a home and protection."
        },
        {
            id: "19p-q2",
            type: "multiple-choice",
            question: "2. What is the meaning of **construction** as it is used in the passage?",
            options: [
                "Something that is built (like a wooden castle).",
                "A worker.",
                "A noisy machine.",
                "A plan."
            ],
            correctAnswer: "Something that is built (like a wooden castle)."
        },
        {
            id: "19p-q3",
            type: "multiple-choice",
            question: "3. What would be the advantage of building castles near stone quarries?",
            options: [
                "They needed **massive** blocks of stone for the walls.",
                "To hide the castle.",
                "To get water for the moat.",
                "To find gold."
            ],
            correctAnswer: "They needed **massive** blocks of stone for the walls."
        },
        {
            id: "19p-q4",
            type: "multiple-choice",
            question: "4. Why are castles today more convenient and comfortable places to live in?",
            options: [
                "Because modern owners have **installed** plumbing and electricity.",
                "Because they are warmer.",
                "Because they have more windows.",
                "Because they are smaller."
            ],
            correctAnswer: "Because modern owners have **installed** plumbing and electricity."
        },
        {
            id: "19p-q5",
            type: "multiple-choice",
            question: "5. How did the building of castles evolve over the centuries?",
            options: [
                "They went from simple wooden **constructions** to **elaborate** stone ones.",
                "They got smaller and simpler.",
                "They started using plastic.",
                "They stopped building them."
            ],
            correctAnswer: "They went from simple wooden **constructions** to **elaborate** stone ones."
        },
        {
            id: "19p-q6",
            type: "multiple-choice",
            question: "6. Why would buying a ruined castle not appeal to a person of modest means?",
            options: [
                "Because **restoring** it would be very expensive.",
                "Because it is too big.",
                "Because it is scary.",
                "Because it has no roof."
            ],
            correctAnswer: "Because **restoring** it would be very expensive."
        },
        {
            id: "19p-q7",
            type: "multiple-choice",
            question: "7. How might a modern owner make a castle's rooms less **clammy**?",
            options: [
                "By installing heating.",
                "By opening the windows.",
                "By painting the walls.",
                "By adding furniture."
            ],
            correctAnswer: "By installing heating."
        },
        {
            id: "19p-q8",
            type: "multiple-choice",
            question: "8. What **furnishings** might you find in the great hall of a castle?",
            options: [
                "Tables and benches for banquets.",
                "Computers.",
                "Cars.",
                "Swimming pools."
            ],
            correctAnswer: "Tables and benches for banquets."
        },
        {
            id: "19p-q9",
            type: "multiple-choice",
            question: "9. What quality would have been valued in herbs grown in the castle gardens?",
            options: [
                "They were **fragrant** (to mask smells).",
                "They were colorful.",
                "They were tall.",
                "They were rare."
            ],
            correctAnswer: "They were **fragrant** (to mask smells)."
        },
        {
            id: "19p-q10",
            type: "multiple-choice",
            question: "10. What difference would bathing regularly have made in the living conditions of the castle's inhabitants?",
            options: [
                "It would have reduced the **stench**.",
                "It would make the castle cleaner.",
                "It would use too much water.",
                "It would make them cold."
            ],
            correctAnswer: "It would have reduced the **stench**."
        },
        {
            id: "19p-q11",
            type: "multiple-choice",
            question: "11. What use was made of the herbs grown in the castle gardens?",
            options: [
                "They were **strewed** on the floors.",
                "They were eaten raw.",
                "They were sold at the market.",
                "They were fed to animals."
            ],
            correctAnswer: "They were **strewed** on the floors."
        },
        {
            id: "19p-q12",
            type: "multiple-choice",
            question: "12. When might a castle have become overcrowded?",
            options: [
                "When people from the **vicinity** moved inside for protection.",
                "When there was a party.",
                "In the summer.",
                "During a wedding."
            ],
            correctAnswer: "When people from the **vicinity** moved inside for protection."
        },
        {
            id: "19p-q13",
            type: "multiple-choice",
            question: "13. What is the meaning of **repelled** as it is used in the passage?",
            options: [
                "Driven away (referring to attackers).",
                "Disgusted.",
                "Invited in.",
                "Paid money."
            ],
            correctAnswer: "Driven away (referring to attackers)."
        },
        {
            id: "19p-q14",
            type: "multiple-choice",
            question: "14. Name two ways that a castle's inhabitants could **retaliate** if attacked.",
            options: [
                "By shooting arrows or dropping rocks.",
                "By running away.",
                "By hiding in the basement.",
                "By paying them to leave."
            ],
            correctAnswer: "By shooting arrows or dropping rocks."
        },
        {
            id: "19p-q15",
            type: "multiple-choice",
            question: "15. What is the meaning of **breach** as it is used in the passage?",
            options: [
                "To break through (walls).",
                "To build up.",
                "To paint over.",
                "To clean."
            ],
            correctAnswer: "To break through (walls)."
        }
    ]
};

export const b6_l19_story_facts: Story = {
    id: "b6-l19-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The adjective formed from the verb **construct** is *constructive*, which means "helpful" or "useful." Its antonym is *destructive*, which means "damaging" or "unhelpful." *Constructive* criticism is intended to be helpful; *destructive* criticism can be damaging to a person's self-confidence.

* *Mass* is the noun from which the adjective **massive** is formed. *Mass* is the amount of matter in a body. It is separate from weight, which is a measure of how strongly gravity is pulling on the object. A spaceship in orbit has a great deal of *mass* but weighs nothing because gravity is not pulling it to Earth. Even a relatively small boulder contains a great deal of *mass*. A blimp, on the other hand, although it may be many times larger, contains very little *mass*; it is *enormous* but not **massive**. **Massive** is also used in a figurative sense to describe something large in comparison with what is usual (a **massive** amount of ketchup; a **massive** blood clot causing a stroke).
    `,
    wordsIncluded: ["construct", "massive"],
    questions: []
};
