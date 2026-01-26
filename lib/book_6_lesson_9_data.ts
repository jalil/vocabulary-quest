import { Story, VocabularyWord } from "./types";

export const b6_l9_words: VocabularyWord[] = [
    {
        id: "accumulate",
        word: "accumulate",
        definition: "(v.) To increase in number or amount; to pile up, collect, or gather.",
        exampleSentence: "An inch of snow accumulated overnight.",
        imageEmoji: "📈",
        category: "Grade 6"
    },
    {
        id: "aggravate",
        word: "aggravate",
        definition: "(v.) 1. To make worse. 2. To anger or annoy. aggravation (n.) 1. Annoyance; exasperation. 2. A source of annoyance or exasperation.",
        exampleSentence: "The skater aggravated an old knee injury when she fell.",
        imageEmoji: "😠",
        category: "Grade 6"
    },
    {
        id: "conserve",
        word: "conserve",
        definition: "(v.) To save by using carefully. conservation (n.) The saving or protection of something through careful use.",
        exampleSentence: "Lower speed limits help conserve gasoline.",
        imageEmoji: "💧",
        category: "Grade 6"
    },
    {
        id: "contaminate",
        word: "contaminate",
        definition: "(v.) To harm by contact with something undesirable. contamination (n.) The act of or result of contaminating.",
        exampleSentence: "Chemicals spilled last year continue to contaminate the lake.",
        imageEmoji: "☣️",
        category: "Grade 6"
    },
    {
        id: "diminish",
        word: "diminish",
        definition: "(v.) To make or become smaller or less; to reduce.",
        exampleSentence: "The popcorn we ate after school diminished our hunger.",
        imageEmoji: "📉",
        category: "Grade 6"
    },
    {
        id: "drastic",
        word: "drastic",
        definition: "(adj.) Severe; extreme.",
        exampleSentence: "Criminals receive drastic punishment in this new novel.",
        imageEmoji: "😱",
        category: "Grade 6"
    },
    {
        id: "extravagant",
        word: "extravagant",
        definition: "(adj.) Spending, costing, or using more than is required. extravagance (n.) 1. The quality of being wasteful or spending more than is necessary. 2. A thing that costs more than one can afford.",
        exampleSentence: "Shawn's buying lunch for everyone was an extravagant thing to do.",
        imageEmoji: "💸",
        category: "Grade 6"
    },
    {
        id: "frugal",
        word: "frugal",
        definition: "(adj.) Careful in spending or using something.",
        exampleSentence: "The bill for the splendid wedding ceremony shocked my frugal relatives.",
        imageEmoji: "🐖",
        category: "Grade 6"
    },
    {
        id: "impurity",
        word: "impurity",
        definition: "(n.) Something that is harmful or dirty.",
        exampleSentence: "Filtering removes the impurities from water.",
        imageEmoji: "🧪",
        category: "Grade 6"
    },
    {
        id: "peril",
        word: "peril",
        definition: "(n.) Danger; something that is dangerous. imperil (v.) To place in danger. perilous (adj.) Dangerous.",
        exampleSentence: "The sailor understood the peril involved in a solo crossing of the Atlantic Ocean.",
        imageEmoji: "⚠️",
        category: "Grade 6"
    },
    {
        id: "perpetual",
        word: "perpetual",
        definition: "(adj.) Lasting or seeming to last forever or for a long time; continuous.",
        exampleSentence: "A perpetual rain has been falling for nine days.",
        imageEmoji: "♾️",
        category: "Grade 6"
    },
    {
        id: "resource",
        word: "resource",
        definition: "(n.) 1. A supply that can be used when there is a need. 2. Skill in dealing with difficult situations. resourceful (adj.) Able to deal with difficult problems.",
        exampleSentence: "Coal and lumber are natural resources.",
        imageEmoji: "🧱",
        category: "Grade 6"
    },
    {
        id: "substitute",
        word: "substitute",
        definition: "(v.) To replace one thing or person for another. (n.) Something or someone that replaces another. (adj.) Acting in place of someone or something else.",
        exampleSentence: "Cooks sometimes substitute lemon for vinegar in salad dressing.",
        imageEmoji: "🔄",
        category: "Grade 6"
    },
    {
        id: "sustain",
        word: "sustain",
        definition: "(v.) 1. To keep up; to support. 2. To suffer; to undergo.",
        exampleSentence: "Their firm belief that they would be rescued sustained them.",
        imageEmoji: "🏗️",
        category: "Grade 6"
    },
    {
        id: "vital",
        word: "vital",
        definition: "(adj.) 1. Necessary for continued life or prosperity. 2. Full of lively spirit. 3. Of the greatest importance.",
        exampleSentence: "Clean water is vital for our health.",
        imageEmoji: "❤️",
        category: "Grade 6"
    }
];

export const b6_l9_story_1: Story = {
    id: "b6-l9-s1",
    title: "9A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 9.`,
    wordsIncluded: b6_l9_words.map(w => w.id),
    questions: [
        {
            id: "9a-q1",
            type: "multiple-choice",
            question: "1. (a) a source of annoyance. (c) a source of danger. (b) An extravagance is (d) An aggravation is",
            options: ["b-a", "d-a", "b-c", "d-c"],
            correctAnswer: "d-a"
        },
        {
            id: "9a-q2",
            type: "multiple-choice",
            question: "2. (a) that make a bad situation worse. (c) Drastic measures are those (b) that are extreme in nature. (d) Frugal measures are those",
            options: ["c-b", "d-b", "c-a", "d-a"],
            correctAnswer: "c-b"
        },
        {
            id: "9a-q3",
            type: "multiple-choice",
            question: "3. (a) a gradual increase over time. (c) Conservation is (b) Contamination is (d) contact with something harmful.",
            options: ["b-d", "c-a", "b-a", "c-d"],
            correctAnswer: "b-d"
        },
        {
            id: "9a-q4",
            type: "multiple-choice",
            question: "4. (a) a way of politely saying no. (c) something that is harmful or dirty. (b) A substitute is (d) An impurity is",
            options: ["b-a", "d-c", "b-c", "d-a"],
            correctAnswer: "d-c"
        },
        {
            id: "9a-q5",
            type: "multiple-choice",
            question: "5. (a) to increase its amount. (c) To conserve wealth is (b) to spend it wastefully. (d) To accumulate wealth is",
            options: ["d-a", "c-b", "d-b", "c-a"],
            correctAnswer: "d-a"
        },
        {
            id: "9a-q6",
            type: "multiple-choice",
            question: "6. (a) A substitute player is one who (c) A vital player is one who (b) suffers an injury. (d) replaces another one.",
            options: ["a-d", "c-b", "a-b", "c-d"],
            correctAnswer: "a-d"
        },
        {
            id: "9a-q7",
            type: "multiple-choice",
            question: "7. (a) never seem to end. (c) seem reasonable. (b) Diminished demands are those that (d) Perpetual demands are those that",
            options: ["d-a", "b-c", "d-c", "b-a"],
            correctAnswer: "d-a"
        },
        {
            id: "9a-q8",
            type: "multiple-choice",
            question: "8. (a) Something that is perilous is (c) quite harmless. (b) very dangerous. (d) Someone who is resourceful is",
            options: ["a-b", "d-c", "a-c", "d-b"],
            correctAnswer: "a-b"
        },
        {
            id: "9a-q9",
            type: "multiple-choice",
            question: "9. (a) A resource is something (c) An extravagance is something (b) that requires attention. (d) that costs more than one can easily afford.",
            options: ["c-d", "a-b", "c-b", "a-d"],
            correctAnswer: "c-d"
        }
    ]
};

export const b6_l9_story_2: Story = {
    id: "b6-l9-s2",
    title: "9B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l9_words.map(w => w.id),
    questions: [
        {
            id: "9b-q1",
            type: "multiple-choice",
            question: "Many students **had to suffer through** heat exhaustion after the race.",
            options: ["sustained", "diminished", "conserved", "contaminated"],
            correctAnswer: "sustained"
        },
        {
            id: "9b-q2",
            type: "multiple-choice",
            question: "Carmella's mother did not approve of Carmella's **wasteful spending of large amounts of money**.",
            options: ["extravagance", "conservation", "impurity", "resource"],
            correctAnswer: "extravagance"
        },
        {
            id: "9b-q3",
            type: "multiple-choice",
            question: "The new bottled water was recalled because it contained many **dirty and harmful substances**.",
            options: ["impurities", "resources", "substitutes", "perils"],
            correctAnswer: "impurities"
        },
        {
            id: "9b-q4",
            type: "multiple-choice",
            question: "A thick layer of dust had **gathered little by little** on top of the piano.",
            options: ["accumulated", "diminished", "substituted", "sustained"],
            correctAnswer: "accumulated"
        },
        {
            id: "9b-q5",
            type: "multiple-choice",
            question: "A cook who is **careful not to waste anything** can make interesting dishes from leftovers.",
            options: ["frugal", "extravagant", "drastic", "vital"],
            correctAnswer: "frugal"
        },
        {
            id: "9b-q6",
            type: "multiple-choice",
            question: "The pain started to **become less severe** after a few days.",
            options: ["diminish", "accumulate", "aggravate", "sustain"],
            correctAnswer: "diminish"
        },
        {
            id: "9b-q7",
            type: "multiple-choice",
            question: "Our **abilities to deal with difficult situations** were tested to the maximum when our raft was propelled into dangerous rapids.",
            options: ["resources", "impurities", "aggravations", "substitutes"],
            correctAnswer: "resources"
        },
        {
            id: "9b-q8",
            type: "multiple-choice",
            question: "She seems so **full of lively spirit** that one forgets she is sick.",
            options: ["vital", "frugal", "perpetual", "drastic"],
            correctAnswer: "vital"
        },
        {
            id: "9b-q9",
            type: "multiple-choice",
            question: "The stage manager faced many **things that bothered or annoyed her** in trying to be ready for opening night.",
            options: ["aggravations", "resources", "conservations", "impurities"],
            correctAnswer: "aggravations"
        },
        {
            id: "9b-q10",
            type: "multiple-choice",
            question: "By driving recklessly, you **placed in real danger** the lives of your passengers.",
            options: ["imperiled", "sustained", "conserved", "substituted"],
            correctAnswer: "imperiled"
        },
        {
            id: "9b-q11",
            type: "multiple-choice",
            question: "Before lunch, **very severe** changes are needed to make sure the lunchroom serves healthy food.",
            options: ["drastic", "frugal", "vital", "perpetual"],
            correctAnswer: "drastic"
        },
        {
            id: "9b-q12",
            type: "multiple-choice",
            question: "Unwashed hands can easily **bring dirt into contact with** food products.",
            options: ["contaminate", "conserve", "sustain", "diminish"],
            correctAnswer: "contaminate"
        },
        {
            id: "9b-q13",
            type: "multiple-choice",
            question: "The **careful use and saving** of water is extremely important on a long expedition.",
            options: ["conservation", "contamination", "accumulation", "aggravation"],
            correctAnswer: "conservation"
        }
    ]
};

export const b6_l9_story_3: Story = {
    id: "b6-l9-s3",
    title: "9C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l9_words.map(w => w.id),
    questions: [
        {
            id: "9c-q1",
            type: "multiple-choice",
            question: "1. Which of the following would **conserve** water?",
            options: ["(a) watering the lawn less often", "(b) taking fewer showers", "(c) turning the faucet off while brushing one's teeth", "(d) fixing a leaky faucet"],
            correctAnswers: ["(a) watering the lawn less often", "(b) taking fewer showers", "(c) turning the faucet off while brushing one's teeth", "(d) fixing a leaky faucet"]
        },
        {
            id: "9c-q2",
            type: "multiple-choice",
            question: "2. Which of the following would **diminish** one's freedom?",
            options: ["(a) being held captive", "(b) having one's driver's license taken away", "(c) being sent to jail", "(d) being released from prison"],
            correctAnswers: ["(a) being held captive", "(b) having one's driver's license taken away", "(c) being sent to jail"]
        },
        {
            id: "9c-q3",
            type: "multiple-choice",
            question: "3. Which of the following are **vital** in a democracy?",
            options: ["(a) voting in elections", "(b) advertising on television", "(c) learning about presidential candidates", "(d) spending a lot of money on campaigns"],
            correctAnswers: ["(a) voting in elections", "(c) learning about presidential candidates"]
        },
        {
            id: "9c-q4",
            type: "multiple-choice",
            question: "4. Which of the following might a **frugal** person do?",
            options: ["(a) save used string", "(b) buy expensive presents", "(c) compare prices", "(d) travel by plane"],
            correctAnswers: ["(a) save used string", "(c) compare prices"]
        },
        {
            id: "9c-q5",
            type: "multiple-choice",
            question: "5. Which of the following are natural **resources**?",
            options: ["(a) water", "(b) lumber", "(c) air", "(d) coal"],
            correctAnswers: ["(a) water", "(b) lumber", "(c) air", "(d) coal"]
        },
        {
            id: "9c-q6",
            type: "multiple-choice",
            question: "6. Which of the following are **substitutes** for sugar?",
            options: ["(a) honey", "(b) artificial sweeteners", "(c) chocolate", "(d) milk"],
            correctAnswers: ["(a) honey", "(b) artificial sweeteners"]
        },
        {
            id: "9c-q7",
            type: "multiple-choice",
            question: "7. Which of the following are needed to **sustain** life?",
            options: ["(a) oxygen", "(b) food", "(c) water", "(d) education"],
            correctAnswers: ["(a) oxygen", "(b) food", "(c) water"]
        },
        {
            id: "9c-q8",
            type: "multiple-choice",
            question: "8. Which of the following might **aggravate** a sore throat?",
            options: ["(a) eating something cold", "(b) coughing", "(c) screaming", "(d) shouting"],
            correctAnswers: ["(b) coughing", "(c) screaming", "(d) shouting"]
        }
    ]
};

export const b6_l9_story_4: Story = {
    id: "b6-l9-s4",
    title: "9D Word Study: Synonyms and Antonyms",
    type: "exercise",
    content: `**Synonyms** mean the *same* (like **happy** and **glad**). 😄
**Antonyms** are *opposites* (like **fast** and **slow**). 🐇🐢

Look at the four words. Two of them match! 
1. Find the matching pair. 🧐
2. Are they Synonyms (Same) or Antonyms (Opposites)?`,
    wordsIncluded: b6_l9_words.map(w => w.id),
    questions: [
        {
            id: "9d-q1",
            type: "multiple-choice",
            question: "1. necessary / safe / drastic / vital",
            options: ["necessary/vital", "safe/drastic", "drastic/vital"],
            correctAnswer: "necessary/vital"
        },
        {
            id: "9d-q2",
            type: "multiple-choice",
            question: "2. aggravate / linger / accumulate / annoy",
            options: ["aggravate/annoy", "linger/accumulate", "aggravate/accumulate"],
            correctAnswer: "aggravate/annoy"
        },
        {
            id: "9d-q3",
            type: "multiple-choice",
            question: "3. impurity / expanse / peril / danger",
            options: ["peril/danger", "impurity/expanse", "expanse/danger"],
            correctAnswer: "peril/danger"
        },
        {
            id: "9d-q4",
            type: "multiple-choice",
            question: "4. substitute / replace / diminish / skirmish",
            options: ["substitute/replace", "diminish/skirmish", "replace/diminish"],
            correctAnswer: "substitute/replace"
        },
        {
            id: "9d-q5",
            type: "multiple-choice",
            question: "5. extravagant / frugal / drastic / lengthy",
            options: ["extravagant/frugal", "drastic/lengthy", "extravagant/drastic"],
            correctAnswer: "extravagant/frugal" // antonyms
        },
        {
            id: "9d-q6",
            type: "multiple-choice",
            question: "6. resourceful / continuous / perpetual / anxious",
            options: ["continuous/perpetual", "resourceful/anxious", "perpetual/anxious"],
            correctAnswer: "continuous/perpetual"
        },
        {
            id: "9d-q7",
            type: "multiple-choice",
            question: "7. increase / sustain / diminish / compete",
            options: ["increase/diminish", "sustain/compete", "increase/sustain"],
            correctAnswer: "increase/diminish" // antonyms
        },
        {
            id: "9d-q8",
            type: "multiple-choice",
            question: "8. waste / shed / conserve / soothe",
            options: ["waste/conserve", "shed/soothe", "waste/shed"],
            correctAnswer: "waste/conserve" // antonyms
        },
        {
            id: "9d-q9",
            type: "multiple-choice",
            question: "9. extreme / resourceful / realistic / drastic",
            options: ["extreme/drastic", "resourceful/realistic", "realistic/drastic"],
            correctAnswer: "extreme/drastic"
        }
    ]
};

export const b6_l9_story_passage: Story = {
    id: "b6-l9-passage",
    title: "Reading Passage: Water, Water, Everywhere",
    type: "non-fiction",
    content: `
What sets our planet apart from all the others? Pictures from space show Earth to be the blue planet. Its color comes from the water that covers about three quarters of its surface. To the best of our knowledge, ours is the only planet that can **sustain** life, and water is the reason. You'd think we would treat something so **vital** to our lives as a valuable gift. Sadly, that has not been the case. Except during times of drought, when we realize how precious it is, water is something we take very much for granted.

The water that makes up Earth's rivers, oceans, and lakes is always in motion. As it is warmed by the sun, water evaporates into the air. The vapor forms clouds, leaving behind the **impurities** that were dissolved in the water. As the vapor cools, it forms water droplets that eventually fall as rain. The rainfall **accumulates** in Earth's different bodies of water. There it is heated by the sun and evaporates once more. This process is known as the water cycle. It has gone on **perpetually** since it started—about five hundred thousand years after Earth was formed. The water cycle is nature's way of keeping Earth's supply of water clean. For billions of years it worked well. However, with the growth of industry and the increase in population over the past two hundred years, the situation has changed **drastically**.

The standard of living that Americans enjoy exceeds anything our ancestors dreamed of. But the conveniences of daily life that we are accustomed to have been obtained at a terrible price. In our eagerness to make progress, we have **contaminated** our rivers, oceans, and lakes by emptying the raw sewage from our toilets into them. We have **aggravated** the problem by allowing chemical pesticides and fertilizers used on crops to run off into our water supplies. We have also dumped poisonous chemicals into landfills so that in many places the water lying under the ground **imperils** the health of those who eventually drink it. As a result, the amount of clean water is **diminishing**.

Human beings have often demonstrated how **resourceful** they can be when there are problems to be solved. When we run out of something we need, we can usually find something else to take its place; however, there is no **substitute** for water. We have to learn to **conserve** this precious liquid as though our lives depend on it—because they do. An **extravagant** person is sometimes said to "spend money like water." Now, however, the time has come for us to learn to be **frugal** and spend our water as carefully as a penny-pincher spends money.
    `,
    wordsIncluded: b6_l9_words.map(w => w.id),
    questions: [
        {
            id: "b6-l9-p-q1",
            type: "multiple-choice",
            question: "What are three things that can **contaminate** water?",
            options: [
                "Raw sewage, chemical pesticides/fertilizers, and poisonous chemicals from landfills.",
                "Fish, plants, and rocks.",
                "Rain, snow, and hail.",
                "Boats, swimmers, and scuba divers."
            ],
            correctAnswer: "Raw sewage, chemical pesticides/fertilizers, and poisonous chemicals from landfills."
        },
        {
            id: "b6-l9-p-q2",
            type: "multiple-choice",
            question: "What is the meaning of **aggravate** as it is used in the passage?",
            options: [
                "It means to make worse.",
                "It means to improve.",
                "It means to clean.",
                "It means to ignore."
            ],
            correctAnswer: "It means to make worse."
        },
        {
            id: "b6-l9-p-q3",
            type: "multiple-choice",
            question: "What three ways can you think of to practice water **conservation**?",
            options: [
                "Taking shorter showers, fixing leaks, watering lawns less often.",
                "Building more pools, washing cars daily, leaving faucets running.",
                "Buying bottled water, swimming in lakes, drinking juice.",
                "Boiling water, freezing water, storing water."
            ],
            correctAnswer: "Taking shorter showers, fixing leaks, watering lawns less often."
        },
        {
            id: "b6-l9-p-q4",
            type: "multiple-choice",
            question: "What is the meaning of **substitute** as it is used in the passage?",
            options: [
                "It means something that takes the place of something else.",
                "It means a teacher.",
                "It means a meal.",
                "It means a vehicle."
            ],
            correctAnswer: "It means something that takes the place of something else."
        },
        {
            id: "b6-l9-p-q5",
            type: "multiple-choice",
            question: "What happens to the quantity of clean water as water pollution increases?",
            options: [
                "It diminishes.",
                "It increases.",
                "It stays the same.",
                "It becomes salty."
            ],
            correctAnswer: "It diminishes."
        },
        {
            id: "b6-l9-p-q6",
            type: "multiple-choice",
            question: "What is the meaning of **vital** as it is used in the passage?",
            options: [
                "It means necessary for continued life.",
                "It means optional.",
                "It means dangerous.",
                "It means fun."
            ],
            correctAnswer: "It means necessary for continued life."
        },
        {
            id: "b6-l9-p-q7",
            type: "multiple-choice",
            question: "What remains after the **impurities** have been removed from water?",
            options: [
                "Clean water (or water vapor/droplets).",
                "Dirt.",
                "Salt.",
                "Mud."
            ],
            correctAnswer: "Clean water (or water vapor/droplets)."
        },
        {
            id: "b6-l9-p-q8",
            type: "multiple-choice",
            question: "How would you describe the taking of twenty-minute showers during a drought?",
            options: [
                "It would be extravagant.",
                "It would be frugal.",
                "It would be wise.",
                "It would be necessary."
            ],
            correctAnswer: "It would be extravagant."
        },
        {
            id: "b6-l9-p-q9",
            type: "multiple-choice",
            question: "Why is water our most precious natural **resource**?",
            options: [
                "Because it sustains life and there is no substitute for it.",
                "Because it is expensive.",
                "Because it is rare on other planets.",
                "Because it tastes good."
            ],
            correctAnswer: "Because it sustains life and there is no substitute for it."
        },
        {
            id: "b6-l9-p-q10",
            type: "multiple-choice",
            question: "What happens when poisonous chemicals **accumulate** in landfills?",
            options: [
                "They can seep into the ground and imperil the health of those who drink the water.",
                "They disappear.",
                "They turn into water.",
                "They become harmless."
            ],
            correctAnswer: "They can seep into the ground and imperil the health of those who drink the water."
        },
        {
            id: "b6-l9-p-q11",
            type: "multiple-choice",
            question: "How would you describe your use of water if you turn off the faucet when you brush your teeth?",
            options: [
                "Frugal or conserving.",
                "Extravagant.",
                "Wasteful.",
                "Dangerous."
            ],
            correctAnswer: "Frugal or conserving."
        },
        {
            id: "b6-l9-p-q12",
            type: "multiple-choice",
            question: "How can drinking from water that comes from the earth under a landfill affect a person's health?",
            options: [
                "It can imperil their health.",
                "It can improve their health.",
                "It has no effect.",
                "It makes them stronger."
            ],
            correctAnswer: "It can imperil their health."
        },
        {
            id: "b6-l9-p-q13",
            type: "multiple-choice",
            question: "How would you describe an order that restricted families to only one gallon of water a day?",
            options: [
                "Drastic.",
                "Easy.",
                "Normal.",
                "Fun."
            ],
            correctAnswer: "Drastic."
        },
        {
            id: "b6-l9-p-q14",
            type: "multiple-choice",
            question: "What is the meaning of **sustain** as it is used in the passage?",
            options: [
                "It means to support or keep up (life).",
                "It means to end.",
                "It means to destroy.",
                "It means to create."
            ],
            correctAnswer: "It means to support or keep up (life)."
        },
        {
            id: "b6-l9-p-q15",
            type: "multiple-choice",
            question: "Has the water cycle ever stopped since it began, and how does the passage tell you this?",
            options: [
                "No, it has gone on perpetually.",
                "Yes, it stops in winter.",
                "Yes, it stops during droughts.",
                "No, but it is slowing down."
            ],
            correctAnswer: "No, it has gone on perpetually."
        }
    ]
};

export const b6_l9_story_facts: Story = {
    id: "b6-l9-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* To *preserve* something is to keep it from being harmed or used up. To **conserve** something is to use it carefully and without waste.

* When **substitute** is used as a verb, it is always followed by the preposition *for*. You *substitute* one thing *for* another.
    `,
    wordsIncluded: ["conserve", "substitute"],
    questions: []
};
