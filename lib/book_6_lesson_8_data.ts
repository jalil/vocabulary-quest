import { Story, VocabularyWord } from "./types";

export const b6_l8_words: VocabularyWord[] = [
    {
        id: "accompany",
        word: "accompany",
        definition: "(v.) 1. To go along with; to be together. 2. To play a musical instrument for or with.",
        exampleSentence: "Thunder often accompanies lightning.",
        imageEmoji: "👯",
        category: "Grade 6",
        synonyms: ["go with", "escort", "join"],
        antonyms: ["leave", "abandon"]
    },
    {
        id: "beneficial",
        word: "beneficial",
        definition: "(adj.) Being of use; helpful; favorable.",
        exampleSentence: "A balanced diet is beneficial to one's health.",
        imageEmoji: "🍎",
        category: "Grade 6",
        synonyms: ["helpful", "useful", "advantageous"],
        antonyms: ["harmful", "detrimental", "useless"]
    },
    {
        id: "captive",
        word: "captive",
        definition: "(n.) One that is held prisoner. (adj.) Unable to escape or get away. captivity (n.) The state of being held against one's will; loss of freedom.",
        exampleSentence: "The captives were closely guarded.",
        imageEmoji: "🔗",
        category: "Grade 6",
        synonyms: ["prisoner", "hostage", "confined"],
        antonyms: ["free", "liberated"]
    },
    {
        id: "convenient",
        word: "convenient",
        definition: "(adj.) Suitable for one's needs; making life easier or more comfortable. convenience (n.) Anything that makes life easier or more comfortable.",
        exampleSentence: "The bus stop is convenient because it's close to my house.",
        imageEmoji: "🏪",
        category: "Grade 6",
        synonyms: ["handy", "suitable", "useful"],
        antonyms: ["inconvenient", "unsuitable", "troublesome"]
    },
    {
        id: "ecstasy",
        word: "ecstasy",
        definition: "(n.) A strong feeling of emotion, especially joy. ecstatic (adj.) Full of or causing ecstasy.",
        exampleSentence: "Fans screamed in ecstasy when their idol appeared on stage.",
        imageEmoji: "😍",
        category: "Grade 6",
        synonyms: ["joy", "bliss", "rapture"],
        antonyms: ["misery", "sorrow", "despair"]
    },
    {
        id: "expanse",
        word: "expanse",
        definition: "(n.) A wide, open area or surface; a stretch.",
        exampleSentence: "Wheat grows on the broad expanse of the Kansas prairie.",
        imageEmoji: "🌾",
        category: "Grade 6",
        synonyms: ["area", "stretch", "vastness"],
        antonyms: ["enclosure", "confinement"]
    },
    {
        id: "expedition",
        word: "expedition",
        definition: "(n.) 1. A long journey by a group to explore or do battle. 2. A group that makes such a journey.",
        exampleSentence: "The expedition into the Brazilian rain forest lasted nearly a year.",
        imageEmoji: "🗺️",
        category: "Grade 6",
        synonyms: ["journey", "voyage", "trek"],
        antonyms: []
    },
    {
        id: "inept",
        word: "inept",
        definition: "(adj.) 1. Clumsily or awkwardly expressed; not suitable for the occasion. 2. Lacking in skill or ability.",
        exampleSentence: "That inept remark you made upset those who overheard it.",
        imageEmoji: "🤡",
        category: "Grade 6",
        synonyms: ["clumsy", "unskilled", "incompetent"],
        antonyms: ["skillful", "adroit", "competent"]
    },
    {
        id: "interpret",
        word: "interpret",
        definition: "(v.) 1. To translate into another language. 2. To explain the meaning of. 3. To understand in one's own way.",
        exampleSentence: "A native Parisian was hired to interpret the French minister's remarks for the audience.",
        imageEmoji: "🗣️",
        category: "Grade 6",
        synonyms: ["explain", "translate", "clarify"],
        antonyms: ["confuse", "obscure"]
    },
    {
        id: "invaluable",
        word: "invaluable",
        definition: "(adj.) Too valuable to measure; priceless.",
        exampleSentence: "The students' help in organizing the boycott was invaluable.",
        imageEmoji: "💎",
        category: "Grade 6",
        synonyms: ["priceless", "precious", "essential"],
        antonyms: ["worthless", "cheap"]
    },
    {
        id: "linger",
        word: "linger",
        definition: "(v.) To be slow in leaving or going away.",
        exampleSentence: "The students lingered in the hall, reluctant to go out into the cold.",
        imageEmoji: "⏳",
        category: "Grade 6",
        synonyms: ["stay", "remain", "loiter"],
        antonyms: ["leave", "hurry", "rush"]
    },
    {
        id: "retrieve",
        word: "retrieve",
        definition: "(v.) 1. To get back; to recover. 2. To find and bring back.",
        exampleSentence: "Campers can retrieve their lost items from the lost and found.",
        imageEmoji: "🐕",
        category: "Grade 6",
        synonyms: ["recover", "regain", "fetch"],
        antonyms: ["lose", "misplace"]
    },
    {
        id: "skirmish",
        word: "skirmish",
        definition: "(n.) A minor fight or battle. (v.) To take part in such a fight.",
        exampleSentence: "Apart from a few skirmishes, both sides kept the cease-fire that had been agreed to.",
        imageEmoji: "⚔️",
        category: "Grade 6",
        synonyms: ["fight", "battle", "clash"],
        antonyms: []
    },
    {
        id: "supplement",
        word: "supplement",
        definition: "(n.) Something added to make up for something missing. (v.) To add to.",
        exampleSentence: "Those who eat a well-balanced diet probably do not need vitamin supplements.",
        imageEmoji: "💊",
        category: "Grade 6",
        synonyms: ["add to", "enhance", "complement"],
        antonyms: ["subtract", "diminish"]
    },
    {
        id: "territory",
        word: "territory",
        definition: "(n.) 1. A particular area of land. 2. A land area under control of a particular group or government.",
        exampleSentence: "A dog will defend its territory.",
        imageEmoji: "🚩",
        category: "Grade 6",
        synonyms: ["land", "region", "area"],
        antonyms: []
    }
];

export const b6_l8_story_1: Story = {
    id: "b6-l8-s1",
    title: "8A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l8_words.map(w => w.id),
    questions: [
        {
            id: "8a-q1",
            type: "multiple-choice",
            question: "1. (a) Aseem apologized for barging in and said he didn't mean to **interpret** me.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // interrupt.
        },
        {
            id: "8a-q2",
            type: "multiple-choice",
            question: "1. (b) The teacher's remarks were **interpreted** as being friendly.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q3",
            type: "multiple-choice",
            question: "1. (c) Ming-na's silence was **interpreted** as anger.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q4",
            type: "multiple-choice",
            question: "1. (d) She spoke Arabic, so she was able to **interpret** for the travelers.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q5",
            type: "multiple-choice",
            question: "2. (a) The Sunday comics **supplement** comes with the local newspaper.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q6",
            type: "multiple-choice",
            question: "2. (b) **Supplement** will be served at five.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // Supper.
        },
        {
            id: "8a-q7",
            type: "multiple-choice",
            question: "2. (c) Yong's mom **supplemented** his lunch with a bag of nuts and raisins.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q8",
            type: "multiple-choice",
            question: "2. (d) We **supplemented** the time by reading and playing games.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "8a-q9",
            type: "multiple-choice",
            question: "3. (a) I once made an **inept** attempt to learn juggling.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q10",
            type: "multiple-choice",
            question: "3. (b) An **inept** runner should probably not try out for track.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q11",
            type: "multiple-choice",
            question: "3. (c) Grab the **inept** tomatoes off the table.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "8a-q12",
            type: "multiple-choice",
            question: "3. (d) The team played an **inept** game because they were out of practice.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q13",
            type: "multiple-choice",
            question: "4. (a) The family has been **accompanying** bread for two hundred years.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "8a-q14",
            type: "multiple-choice",
            question: "4. (b) The violinist **accompanied** the singer in her recital.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q15",
            type: "multiple-choice",
            question: "4. (c) A young child needs to be **accompanied** by an adult when traveling.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q16",
            type: "multiple-choice",
            question: "4. (d) The fish was **accompanied** by a fresh salad.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q17",
            type: "multiple-choice",
            question: "5. (a) Nakala is **retrieved** that she found her favorite shirt.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // relieved.
        },
        {
            id: "8a-q18",
            type: "multiple-choice",
            question: "5. (b) We tried to **retrieve** the kite that got stuck in a tree.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q19",
            type: "multiple-choice",
            question: "5. (c) You can't **retrieve** the message after it has been sent.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q20",
            type: "multiple-choice",
            question: "5. (d) We were **retrieved** to hear that the package had arrived safely.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // relieved.
        },
        {
            id: "8a-q21",
            type: "multiple-choice",
            question: "6. (a) We were told to keep our backpacks with us at all **invaluable** times.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // available?
        },
        {
            id: "8a-q22",
            type: "multiple-choice",
            question: "6. (b) A rare book is an **invaluable** addition to the library.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q23",
            type: "multiple-choice",
            question: "6. (c) Santos won the Most **Invaluable** Player award.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // Valuable.
        },
        {
            id: "8a-q24",
            type: "multiple-choice",
            question: "6. (d) The support given to the team by the fans was **invaluable**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q25",
            type: "multiple-choice",
            question: "7. (a) Arizona was a **territory** until it became a state in 1912.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q26",
            type: "multiple-choice",
            question: "7. (b) The cat walked slowly around its **territory** and stared at the dog.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q27",
            type: "multiple-choice",
            question: "7. (c) Pamela pressed the soft **territory** to her face.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // terry cloth?
        },
        {
            id: "8a-q28",
            type: "multiple-choice",
            question: "7. (d) Much United States **territory** was stolen from Native Americans.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q29",
            type: "multiple-choice",
            question: "8. (a) An astronaut **expedition** to Mars is still many years in the future.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q30",
            type: "multiple-choice",
            question: "8. (b) The **expedition** reached the South Pole in 1911.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q31",
            type: "multiple-choice",
            question: "8. (c) This baseball card could be worth a lot of **expeditions**.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "8a-q32",
            type: "multiple-choice",
            question: "8. (d) My **expedition** is that we won't win the football game.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // expectation.
        },
        {
            id: "8a-q33",
            type: "multiple-choice",
            question: "9. (a) My mom always has **skirmishes** with my brother about how late he can stay out.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q34",
            type: "multiple-choice",
            question: "9. (b) The two sides **skirmished** all night.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q35",
            type: "multiple-choice",
            question: "9. (c) We were **skirmished** after the long drive.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // famished?
        },
        {
            id: "8a-q36",
            type: "multiple-choice",
            question: "9. (d) I **skirmished** with the idea of going but then decided to stay.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "8a-q37",
            type: "multiple-choice",
            question: "10. (a) I kept a list of all our **expanses**, including movies and snacks.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // expenses.
        },
        {
            id: "8a-q38",
            type: "multiple-choice",
            question: "10. (b) An **expanse** of grass stretched for miles over the hills.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q39",
            type: "multiple-choice",
            question: "10. (c) The vast **expanse** of the universe is filled with planets and stars.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "8a-q40",
            type: "multiple-choice",
            question: "10. (d) **expanse** that we will need to wear winter coats tomorrow.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // expect?
        }
    ]
};

export const b6_l8_story_2: Story = {
    id: "b6-l8-s2",
    title: "8B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l8_words.map(w => w.id),
    questions: [
        {
            id: "8b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *easier*?",
            options: ["(a) mediocre", "(b) convenient", "(c) ravenous", "(d) captive"],
            correctAnswers: ["(b) convenient"]
        },
        {
            id: "8b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *loss of freedom*?",
            options: ["(a) course", "(b) accompany", "(c) bondage", "(d) captive"],
            correctAnswers: ["(c) bondage", "(d) captive"] // bondage is not in word list but means same.
        },
        {
            id: "8b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *helpful*?",
            options: ["(a) prefer", "(b) linger", "(c) interpret", "(d) beneficial"],
            correctAnswers: ["(d) beneficial"]
        },
        {
            id: "8b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *happiness*?",
            options: ["(a) supplement", "(b) bliss", "(c) ecstasy", "(d) monotony"],
            correctAnswers: ["(b) bliss", "(c) ecstasy"]
        },
        {
            id: "8b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *slow*?",
            options: ["(a) linger", "(b) accompany", "(c) supplement", "(d) saunter"],
            correctAnswers: ["(a) linger", "(d) saunter"]
        },
        {
            id: "8b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *clumsily done*?",
            options: ["(a) retrieve", "(b) bungle", "(c) convenient", "(d) inept"],
            correctAnswers: ["(b) bungle", "(d) inept"]
        },
        {
            id: "8b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *wide-open spaces*?",
            options: ["(a) captivity", "(b) expanse", "(c) territory", "(d) supplement"],
            correctAnswers: ["(b) expanse", "(c) territory"]
        },
        {
            id: "8b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *language*?",
            options: ["(a) linger", "(b) translate", "(c) skirmish", "(d) interpret"],
            correctAnswers: ["(b) translate", "(d) interpret"]
        },
        {
            id: "8b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *battle*?",
            options: ["(a) expanse", "(b) skirmish", "(c) victim", "(d) supplement"],
            correctAnswers: ["(b) skirmish"]
        },
        {
            id: "8b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *priceless*?",
            options: ["(a) invaluable", "(b) inept", "(c) inhibit", "(d) beneficial"],
            correctAnswers: ["(a) invaluable"]
        }
    ]
};

export const b6_l8_story_3: Story = {
    id: "b6-l8-s3",
    title: "8C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l8_words.map(w => w.id),
    questions: [
        {
            id: "8c-q1",
            type: "multiple-choice",
            question: "1. Livvy **accompanied**",
            options: ["(a) the famous pianist with her violin.", "(b) her sister to the store.", "(c) a deep breath and closed her eyes.", "(d) very hard to find the tickets, but they were nowhere to be found."],
            correctAnswers: ["(a) the famous pianist with her violin.", "(b) her sister to the store."]
        },
        {
            id: "8c-q2",
            type: "multiple-choice",
            question: "2. The **convenience**",
            options: ["(a) of your best friend also being your neighbor is great.", "(b) of riding a bike to school is much better than waiting a long time for the bus.", "(c) on the top shelf was hard to reach.", "(d) of living next to the grocery store is almost too good to believe."],
            correctAnswers: ["(a) of your best friend also being your neighbor is great.", "(b) of riding a bike to school is much better than waiting a long time for the bus.", "(d) of living next to the grocery store is almost too good to believe."]
        },
        {
            id: "8c-q3",
            type: "multiple-choice",
            question: "3. We **lingered**",
            options: ["(a) with our friends for so long that we almost missed our bus.", "(b) to eat lunch, but were too busy.", "(c) the red and blue paint together to make purple.", "(d) in the doorway, waiting for the rain to stop."],
            correctAnswers: ["(a) with our friends for so long that we almost missed our bus.", "(d) in the doorway, waiting for the rain to stop."]
        },
        {
            id: "8c-q4",
            type: "multiple-choice",
            question: "4. Oona **retrieved**",
            options: ["(a) the broken light bulb with a new one, right?", "(b) her books from her locker at school.", "(c) that she would tell her friend the truth.", "(d) the baseball and threw it to the pitcher."],
            correctAnswers: ["(b) her books from her locker at school.", "(d) the baseball and threw it to the pitcher."]
        },
        {
            id: "8c-q5",
            type: "multiple-choice",
            question: "5. They **ecstatically**",
            options: ["(a) greeted their grandma as she stepped off the train.", "(b) found an old letter that made them cry.", "(c) jumped out the door and ran toward the pool.", "(d) wore masks to keep from getting the flu."],
            correctAnswers: ["(a) greeted their grandma as she stepped off the train.", "(c) jumped out the door and ran toward the pool."]
        },
        {
            id: "8c-q6",
            type: "multiple-choice",
            question: "6. **Captivity**",
            options: ["(a) awaited the lost dog when it was caught.", "(b) surrounded the ships as they drew closer to shore.", "(c) increased during the night and disappeared in the morning.", "(d) is best for the wild horse because its injury needs to be taken care of."],
            correctAnswers: ["(a) awaited the lost dog when it was caught.", "(d) is best for the wild horse because its injury needs to be taken care of."]
        },
        {
            id: "8c-q7",
            type: "multiple-choice",
            question: "7. The **supplements**",
            options: ["(a) make our cat's fur shiny and help her shed less.", "(b) are probably on the bottom shelf behind the napkins.", "(c) may help him heal more quickly.", "(d) might ache if you lean on them too long."],
            correctAnswers: ["(a) make our cat's fur shiny and help her shed less.", "(c) may help him heal more quickly."]
        },
        {
            id: "8c-q8",
            type: "multiple-choice",
            question: "8. We **interpreted**",
            options: ["(a) the student's words into Spanish.", "(b) his clumsiness to mean he had never played soccer.", "(c) our way across the driveway on two skateboards.", "(d) at least three ways of getting to school from the gym."],
            correctAnswers: ["(a) the student's words into Spanish.", "(b) his clumsiness to mean he had never played soccer."]
        }
    ]
};

export const b6_l8_story_4: Story = {
    id: "b6-l8-s4",
    title: "8D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l8_words.map(w => w.id),
    questions: [
        {
            id: "8d-q1",
            type: "open-ended",
            question: "1. An **expedition** is a",
            sampleAnswer: "long journey by a group to explore or do battle."
        },
        {
            id: "8d-q2",
            type: "open-ended",
            question: "2. It would be **beneficial** to me if",
            sampleAnswer: "I did my homework early."
        },
        {
            id: "8d-q3",
            type: "open-ended",
            question: "3. One **convenience** for me is",
            sampleAnswer: "having a dishwasher."
        },
        {
            id: "8d-q4",
            type: "open-ended",
            question: "4. I would be **inept** if I tried to",
            sampleAnswer: "repair a car engine."
        },
        {
            id: "8d-q5",
            type: "open-ended",
            question: "5. Something that is **invaluable** might be",
            sampleAnswer: "a family heirloom."
        },
        {
            id: "8d-q6",
            type: "open-ended",
            question: "6. I might **linger** after a party if",
            sampleAnswer: "I'm having a good time and don't want to leave."
        },
        {
            id: "8d-q7",
            type: "open-ended",
            question: "7. Today someone **accompanied** me to",
            sampleAnswer: "the store."
        },
        {
            id: "8d-q8",
            type: "open-ended",
            question: "8. A **skirmish** is a",
            sampleAnswer: "minor fight or battle."
        },
        {
            id: "8d-q9",
            type: "open-ended",
            question: "9. If an animal is born in **captivity**, that means",
            sampleAnswer: "it was born in a zoo or cage, not in the wild."
        },
        {
            id: "8d-q10",
            type: "open-ended",
            question: "10. I would be **ecstatic** if",
            sampleAnswer: "I won the lottery."
        }
    ]
};

export const b6_l8_story_passage: Story = {
    id: "b6-l8-passage",
    title: "Reading Passage: Sacagawea's Great Adventure",
    type: "non-fiction",
    content: `
Imagine being snatched from your family and friends as a young teenager and taken far from home to be sold into slavery. That was the fate of Sacagawea, a Shoshone chief's daughter. The Shoshone people occupied what is now central Idaho on the western slopes of the Rocky Mountains. Sacagawea was taken **captive** in 1799 during a **skirmish** with a Hidatsa raiding party. She was then carried off to their village on the banks of the Missouri river, seven hundred miles to the east, in what is now North Dakota. It must have been a terrifying experience for the young girl. But because of her kidnapping and the events that followed it, she became part of United States history. This is her story.

After she had been kidnapped, Sacagawea was sold to a French Canadian named Charbonneau who lived in the Hidatsa village; she became his wife when she was only fifteen years old. In 1804 the Lewis and Clark **expedition** arrived at the village. Its purpose was to explore routes to the Pacific coast and report back to the United States government. Having set out from St. Louis six months earlier, its leaders decided that the Hidatsa village would be a **convenient** place to spend the winter. Because they knew they would be passing through Shoshone **territory**, they hired Charbonneau. He spoke the Shoshone language and could **interpret** for them. They decided that even though she had just had a baby, Sacagawea should also **accompany** them. Her presence with the baby would demonstrate to the Shoshone that the expedition's intentions were peaceful.

In April 1805 the party set out, traveling in canoes up the Missouri river. Sacagawea, her baby strapped to her back, proved to be an **invaluable** member of the team. She collected roots and berries to **supplement** the food stocks. She was also able to add to the medical supplies, for she knew which plants had a **beneficial** effect when someone fell ill. One day, Charbonneau's **inept** handling of the canoe overturned it, and some important records would have been lost had Sacagawea not **retrieved** them. Because of such acts, Sacagawea earned the respect of Lewis and Clark.

When they finally reached Shoshone country, Sacagawea had an **ecstatic** reunion with her brother, who was now a Shoshone chief. However, there was little time for her to **linger** among her own people. The expedition had to reach the Pacific before winter made travel impossible.

In mid-November the expedition reached the West Coast. There Sacagawea gazed for the first time at the vast **expanse** of the Pacific Ocean, of which she had heard stories since childhood. In March of 1806 the expedition began the return journey and reached the Hidatsa village in mid-August. Sacagawea remained there with her husband and child while the rest of the party continued east. Her great adventure was over. She had done things that must have been beyond her wildest dreams only two years before. She had been reunited with her brother, whom she had never expected to see again, and she had seen the Great Water. Although she had no way of knowing this, she had also earned for herself an honored place in history.
    `,
    wordsIncluded: b6_l8_words.map(w => w.id),
    questions: [
        {
            id: "b6-l8-p-q1",
            type: "multiple-choice",
            question: "What were Lewis and Clark looking for six months after leaving St. Louis?",
            options: [
                "A place to spend the winter.",
                "Gold.",
                "The Fountain of Youth.",
                "A new boat."
            ],
            correctAnswer: "A place to spend the winter."
        },
        {
            id: "b6-l8-p-q2",
            type: "multiple-choice",
            question: "What is the meaning of **inept** as it is used in the passage?",
            options: [
                "It means clumsy or lacking in skill.",
                "It means expert.",
                "It means fast.",
                "It means quiet."
            ],
            correctAnswer: "It means clumsy or lacking in skill."
        },
        {
            id: "b6-l8-p-q3",
            type: "multiple-choice",
            question: "How is it made clear that Sacagawea did not go willingly with the Hidatsa?",
            options: [
                "The passage says she was kidnapped.",
                "She cried.",
                "She fought back.",
                "She asked to stay."
            ],
            correctAnswer: "The passage says she was kidnapped."
        },
        {
            id: "b6-l8-p-q4",
            type: "multiple-choice",
            question: "What is the meaning of **retrieve** as it is used in the passage?",
            options: [
                "It means to get back or recover.",
                "It means to lose.",
                "It means to destroy.",
                "It means to write."
            ],
            correctAnswer: "It means to get back or recover."
        },
        {
            id: "b6-l8-p-q5",
            type: "multiple-choice",
            question: "What does the author indicate might have been the most striking feature of the Pacific Ocean for Sacagawea?",
            options: [
                "Its vast expanse.",
                "Its blue color.",
                "Its salty taste.",
                "Its large waves."
            ],
            correctAnswer: "Its vast expanse."
        },
        {
            id: "b6-l8-p-q6",
            type: "multiple-choice",
            question: "What is the meaning of **interpret** as it is used in the passage?",
            options: [
                "It means to translate (Shoshone into other languages).",
                "It means to speak loudly.",
                "It means to guess.",
                "It means to write down."
            ],
            correctAnswer: "It means to translate (Shoshone into other languages)."
        },
        {
            id: "b6-l8-p-q7",
            type: "multiple-choice",
            question: "For how long was Sacagawea with the **expedition**?",
            options: [
                "From April 1805 to mid-August 1806 (about 16 months).",
                "Two years.",
                "Six months.",
                "Five years."
            ],
            correctAnswer: "From April 1805 to mid-August 1806 (about 16 months)."
        },
        {
            id: "b6-l8-p-q8",
            type: "multiple-choice",
            question: "Why was Sacagawea able to **supplement** the party's medical supplies?",
            options: [
                "She knew which plants had a beneficial effect.",
                "She was a doctor.",
                "She carried medicine from St. Louis.",
                "She traded with other tribes."
            ],
            correctAnswer: "She knew which plants had a beneficial effect."
        },
        {
            id: "b6-l8-p-q9",
            type: "multiple-choice",
            question: "What did the Shoshone do when they encounter the Hidatsa raiding party?",
            options: [
                "They had a skirmish.",
                "They ran away.",
                "They invited them to dinner.",
                "They surrendered immediately."
            ],
            correctAnswer: "They had a skirmish."
        },
        {
            id: "b6-l8-p-q10",
            type: "multiple-choice",
            question: "Why did Lewis and Clark believe that the presence of Sacagawea's baby might have a **beneficial** effect on the expedition?",
            options: [
                "It would demonstrate that their intentions were peaceful.",
                "The baby was cute.",
                "The baby could help carry things.",
                "They needed a baby for a ritual."
            ],
            correctAnswer: "It would demonstrate that their intentions were peaceful."
        },
        {
            id: "b6-l8-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **territory** as it is used in the passage?",
            options: [
                "It means land occupied or controlled by a group.",
                "It means a state.",
                "It means a city.",
                "It means a river."
            ],
            correctAnswer: "It means land occupied or controlled by a group."
        },
        {
            id: "b6-l8-p-q12",
            type: "multiple-choice",
            question: "Why was Sacagawea **ecstatic** when she met the Shoshone chief?",
            options: [
                "Because he was her brother.",
                "Because he gave her gold.",
                "Because he was famous.",
                "Because she was tired."
            ],
            correctAnswer: "Because he was her brother."
        },
        {
            id: "b6-l8-p-q13",
            type: "multiple-choice",
            question: "How do you think Lewis and Clark felt about Sacagawea?",
            options: [
                "They respected her and found her invaluable.",
                "They disliked her.",
                "They thought she was useless.",
                "They were afraid of her."
            ],
            correctAnswer: "They respected her and found her invaluable."
        },
        {
            id: "b6-l8-p-q14",
            type: "multiple-choice",
            question: "What is the meaning of **accompany** as it is used in the passage?",
            options: [
                "It means to go along with.",
                "It means to play music.",
                "It means to lead.",
                "It means to follow."
            ],
            correctAnswer: "It means to go along with."
        },
        {
            id: "b6-l8-p-q15",
            type: "multiple-choice",
            question: "Do you think Sacagawea was eager to leave her brother?",
            options: [
                "No, but she couldn't linger because the expedition had to reach the Pacific.",
                "Yes, she hated him.",
                "She didn't care.",
                "Yes, she wanted to see the ocean."
            ],
            correctAnswer: "No, but she couldn't linger because the expedition had to reach the Pacific."
        }
    ]
};

export const b6_l8_story_facts: Story = {
    id: "b6-l8-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* *Translate* and **interpret** have similar meanings; both mean to take words of one language and express them in another. *Translate* is the broader term and covers both written and spoken language. A speaker's words can be *translated* as they are being uttered; a book can be *translated* from one language into another. **Interpret** is a narrower term and is generally used to refer only to spoken words being expressed in another language.

* A person who has had a frightening experience while in a plane might express relief at being back on *terra firma* after the plane has landed. The Latin for *land* is *terra*, and the phrase *terra firma* means "solid ground." The Latin *terra* occurs in several English words; among them are *terrain* (Word List 3) and **territory**, an area of land. The term *territory* is applied to those parts of the United States that have some form of self-government but have not been admitted to the Union as states. Guam and American Samoa are *territories*.
    `,
    wordsIncluded: ["interpret", "territory"],
    questions: []
};
