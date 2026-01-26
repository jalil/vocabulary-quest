import { Story, VocabularyWord } from "./types";

export const b6_l17_words: VocabularyWord[] = [
    {
        id: "corrode",
        word: "corrode",
        definition: "(v.) To eat or wear away by degrees, usually by chemical action. corrosion (n.) The process or the result of corroding.",
        exampleSentence: "Exposure to the weather can corrode unprotected metal surfaces.",
        imageEmoji: "🧪",
        category: "Grade 6"
    },
    {
        id: "debris",
        word: "debris",
        definition: "(n.) 1. Broken, scattered remains. 2. Litter; rubbish.",
        exampleSentence: "Debris from buildings damaged by the hurricane littered the streets.",
        imageEmoji: "🗑️",
        category: "Grade 6"
    },
    {
        id: "elated",
        word: "elated",
        definition: "(adj.) Happy and excited; overjoyed. elation (n.) A feeling of great joy and excitement.",
        exampleSentence: "The elated winners jumped up and down.",
        imageEmoji: "🤩",
        category: "Grade 6"
    },
    {
        id: "exploit",
        word: "exploit",
        definition: "(n.) A brave or daring act; an adventure. (v.) 1. To make full use of; to utilize. 2. To use in a selfish way; to take unfair advantage of.",
        exampleSentence: "The spy wrote a book about her exploits.",
        imageEmoji: "🧗",
        category: "Grade 6"
    },
    {
        id: "leeway",
        word: "leeway",
        definition: "(n.) An extra amount of time or space that allows some freedom.",
        exampleSentence: "The wide channel gives boats entering the harbor plenty of leeway.",
        imageEmoji: "↔️",
        category: "Grade 6"
    },
    {
        id: "miniature",
        word: "miniature",
        definition: "(adj.) On a small scale. (n.) 1. A very small copy. 2. A small painting, especially a portrait.",
        exampleSentence: "A miniature railroad for young children ran through the park.",
        imageEmoji: "🤏",
        category: "Grade 6"
    },
    {
        id: "mobile",
        word: "mobile",
        definition: "(n.) An artistic structure with parts that move easily. (adj.) Easily moved.",
        exampleSentence: "A huge mobile hangs in the National Gallery of Art in Washington, D.C.",
        imageEmoji: "📱",
        category: "Grade 6"
    },
    {
        id: "onset",
        word: "onset",
        definition: "(n.) A start or a beginning.",
        exampleSentence: "The onset of winter was marked by a steep temperature drop.",
        imageEmoji: "🏁",
        category: "Grade 6"
    },
    {
        id: "ooze",
        word: "ooze",
        definition: "(n.) Soft, watery mud, as at the bottom of a lake or the sea. (v.) To leak out slowly.",
        exampleSentence: "Our feet sank into the ooze as we waded across the shallow pond.",
        imageEmoji: "💧",
        category: "Grade 6"
    },
    {
        id: "pathetic",
        word: "pathetic",
        definition: "(adj.) 1. Causing feelings of pity or sorrow. 2. Held in low esteem; arousing scorn.",
        exampleSentence: "The newly arrived refugees told a pathetic story of persecution by their tyrannical rulers.",
        imageEmoji: "😢",
        category: "Grade 6"
    },
    {
        id: "preliminary",
        word: "preliminary",
        definition: "(adj.) Coming at the beginning; coming before the main event or activity.",
        exampleSentence: "The band director made a few preliminary remarks before the concert began.",
        imageEmoji: "🎬",
        category: "Grade 6"
    },
    {
        id: "quest",
        word: "quest",
        definition: "(n.) A hunt or search.",
        exampleSentence: "The expedition set out on a quest for the lost treasure of Montezuma.",
        imageEmoji: "🔍",
        category: "Grade 6"
    },
    {
        id: "restrain",
        word: "restrain",
        definition: "(v.) To hold back; to keep under control. restraint (n.) 1. A holding back or keeping under control. 2. Something used to control or hold in check.",
        exampleSentence: "The catcher tried to restrain the angry batter, but a brawl quickly erupted.",
        imageEmoji: "✋",
        category: "Grade 6"
    },
    {
        id: "salvage",
        word: "salvage",
        definition: "(v.) To save from destruction or loss. (n.) Property saved from loss or destruction.",
        exampleSentence: "Salvage what you can from the wreckage.",
        imageEmoji: "🛟",
        category: "Grade 6"
    },
    {
        id: "scour",
        word: "scour",
        definition: "(v.) 1. To clean by scrubbing hard. 2. To search thoroughly.",
        exampleSentence: "We scoured the pots and pans until they gleamed.",
        imageEmoji: "🧽",
        category: "Grade 6"
    }
];

export const b6_l17_story_1: Story = {
    id: "b6-l17-s1",
    title: "17A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 17. Then write the sentence.`,
    wordsIncluded: b6_l17_words.map(w => w.id),
    questions: [
        {
            id: "17a-q1",
            type: "multiple-choice",
            question: "1. (a) To be exploited (b) To be elated (c) is to be annoyed. (d) is to be overjoyed.",
            options: [
                "(a) To be exploited is to be annoyed.",
                "(b) To be elated is to be overjoyed.",
                "(b) To be elated is to be annoyed.",
                "(a) To be exploited is to be overjoyed."
            ],
            correctAnswer: "(b) To be elated is to be overjoyed."
        },
        {
            id: "17a-q2",
            type: "multiple-choice",
            question: "2. (a) Salvage from a flood (b) is property saved from destruction. (c) Debris from a flood (d) is the soft mud it leaves behind.",
            options: [
                "(a) Salvage from a flood is property saved from destruction.",
                "(c) Debris from a flood is the soft mud it leaves behind.",
                "(a) Salvage from a flood is the soft mud it leaves behind.",
                "(c) Debris from a flood is property saved from destruction."
            ],
            correctAnswer: "(a) Salvage from a flood is property saved from destruction."
        },
        {
            id: "17a-q3",
            type: "multiple-choice",
            question: "3. (a) take unfair advantage of that person. (b) To restrain someone is to (c) save that person from harm or death. (d) To exploit someone is to",
            options: [
                "(b) To restrain someone is to take unfair advantage of that person.",
                "(d) To exploit someone is to take unfair advantage of that person.",
                "(b) To restrain someone is to save that person from harm or death.",
                "(d) To exploit someone is to save that person from harm or death."
            ],
            correctAnswer: "(d) To exploit someone is to take unfair advantage of that person."
        },
        {
            id: "17a-q4",
            type: "multiple-choice",
            question: "4. (a) A mobile is (b) something that is no longer made. (c) A miniature is (d) a small model of a larger object.",
            options: [
                "(a) A mobile is something that is no longer made.",
                "(c) A miniature is a small model of a larger object.",
                "(a) A mobile is a small model of a larger object.",
                "(c) A miniature is something that is no longer made."
            ],
            correctAnswer: "(c) A miniature is a small model of a larger object."
        },
        {
            id: "17a-q5",
            type: "multiple-choice",
            question: "5. (a) Debris is (b) broken remains scattered about. (c) Ooze is (d) high, thin, scattered clouds.",
            options: [
                "(a) Debris is broken remains scattered about.",
                "(c) Ooze is high, thin, scattered clouds.",
                "(a) Debris is high, thin, scattered clouds.",
                "(c) Ooze is broken remains scattered about."
            ],
            correctAnswer: "(a) Debris is broken remains scattered about."
        },
        {
            id: "17a-q6",
            type: "multiple-choice",
            question: "6. (a) A quest is (b) an exact copy done on the same scale. (c) A mobile is (d) a work of art that moves.",
            options: [
                "(a) A quest is an exact copy done on the same scale.",
                "(c) A mobile is a work of art that moves.",
                "(a) A quest is a work of art that moves.",
                "(c) A mobile is an exact copy done on the same scale."
            ],
            correctAnswer: "(c) A mobile is a work of art that moves."
        },
        {
            id: "17a-q7",
            type: "multiple-choice",
            question: "7. (a) sneering at those less fortunate. (b) Corrosion is (c) Restraint is (d) keeping oneself under control.",
            options: [
                "(c) Restraint is keeping oneself under control.",
                "(b) Corrosion is sneering at those less fortunate.",
                "(c) Restraint is sneering at those less fortunate.",
                "(b) Corrosion is keeping oneself under control."
            ],
            correctAnswer: "(c) Restraint is keeping oneself under control."
        },
        {
            id: "17a-q8",
            type: "multiple-choice",
            question: "8. (a) A quest for something is (b) a search for it. (c) The onset of something is (d) a reason for it.",
            options: [
                "(a) A quest for something is a search for it.",
                "(c) The onset of something is a reason for it.",
                "(a) A quest for something is a reason for it.",
                "(c) The onset of something is a search for it."
            ],
            correctAnswer: "(a) A quest for something is a search for it."
        },
        {
            id: "17a-q9",
            type: "multiple-choice",
            question: "9. (a) a gradual wearing away. (b) a thorough cleaning. (c) Leeway is (d) Corrosion is",
            options: [
                "(d) Corrosion is a gradual wearing away.",
                "(c) Leeway is a thorough cleaning.",
                "(d) Corrosion is a thorough cleaning.",
                "(c) Leeway is a gradual wearing away."
            ],
            correctAnswer: "(d) Corrosion is a gradual wearing away."
        },
        {
            id: "17a-q10",
            type: "multiple-choice",
            question: "10. (a) A pathetic account (b) is one that is complete. (c) is one that arouses pity. (d) A preliminary account",
            options: [
                "(a) A pathetic account is one that arouses pity.",
                "(d) A preliminary account is one that is complete.",
                "(a) A pathetic account is one that is complete.",
                "(d) A preliminary account is one that arouses pity."
            ],
            correctAnswer: "(a) A pathetic account is one that arouses pity."
        }
    ]
};

export const b6_l17_story_2: Story = {
    id: "b6-l17-s2",
    title: "17B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l17_words.map(w => w.id),
    questions: [
        {
            id: "17b-q1",
            type: "multiple-choice",
            question: "1. Volunteers agreed to pick up the **garbage scattered on the ground** after the Fourth of July picnic.",
            options: ["debris", "corrosion", "ooze", "quest"],
            correctAnswer: "debris"
        },
        {
            id: "17b-q2",
            type: "multiple-choice",
            question: "2. This is all we managed to **save from destruction** when the house flooded.",
            options: ["scour", "corrode", "salvage", "leeway"],
            correctAnswer: "salvage"
        },
        {
            id: "17b-q3",
            type: "multiple-choice",
            question: "3. I saw oil **leaking slowly** from the crack in the pipe.",
            options: ["oozing", "corroding", "scouring", "restraining"],
            correctAnswer: "oozing"
        },
        {
            id: "17b-q4",
            type: "multiple-choice",
            question: "4. Grandmother's latest **act of daring** was skydiving on her seventieth birthday.",
            options: ["quest", "exploit", "onset", "mobile"],
            correctAnswer: "exploit"
        },
        {
            id: "17b-q5",
            type: "multiple-choice",
            question: "5. These reports are **still in the early stages** and may have to be revised later.",
            options: ["pathetic", "elated", "miniature", "preliminary"],
            correctAnswer: "preliminary"
        },
        {
            id: "17b-q6",
            type: "multiple-choice",
            question: "6. The locket contained a **very small picture** of Abigail Adams.",
            options: ["miniature", "mobile", "quest", "leeway"],
            correctAnswer: "miniature"
        },
        {
            id: "17b-q7",
            type: "multiple-choice",
            question: "7. 'You are **held in very low esteem**,' she sneered when she found out about his deception.",
            options: ["elated", "pathetic", "corroded", "mobile"],
            correctAnswer: "pathetic"
        },
        {
            id: "17b-q8",
            type: "multiple-choice",
            question: "8. The dog's **harness that is intended to hold it back** is made of heavy nylon straps.",
            options: ["leeway", "restraint", "onset", "salvage"],
            correctAnswer: "restraint"
        },
        {
            id: "17b-q9",
            type: "multiple-choice",
            question: "9. At the **first sign** of a cold, I go to bed and get plenty of rest.",
            options: ["onset", "quest", "exploit", "scour"],
            correctAnswer: "onset"
        },
        {
            id: "17b-q10",
            type: "multiple-choice",
            question: "10. We have to be at the bus stop in fifteen minutes, which gives us very little **time to do anything else**.",
            options: ["leeway", "elation", "debris", "corrosion"],
            correctAnswer: "leeway"
        },
        {
            id: "17b-q11",
            type: "multiple-choice",
            question: "11. **Thoroughly clean** the pots with steel wool until they shine.",
            options: ["Scour", "Corrode", "Salvage", "Restrain"],
            correctAnswer: "Scour"
        }
    ]
};

export const b6_l17_story_3: Story = {
    id: "b6-l17-s3",
    title: "17C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l17_words.map(w => w.id),
    questions: [
        {
            id: "17c-q1",
            type: "multiple-choice",
            question: "1. Which of the following might **ooze**?",
            options: [
                "(a) sap from a tree",
                "(b) rain from the sky",
                "(c) oil from an engine",
                "(d) blood from a wound"
            ],
            correctAnswers: [
                "(a) sap from a tree",
                "(c) oil from an engine",
                "(d) blood from a wound"
            ]
        },
        {
            id: "17c-q2",
            type: "multiple-choice",
            question: "2. Which of the following can be **corroded**?",
            options: [
                "(a) water",
                "(b) air",
                "(c) iron",
                "(d) soil"
            ],
            correctAnswers: [
                "(c) iron"
            ]
        },
        {
            id: "17c-q3",
            type: "multiple-choice",
            question: "3. Which of the following would give a person **leeway**?",
            options: [
                "(a) extra time",
                "(b) extra work",
                "(c) extra space",
                "(d) extra responsibility"
            ],
            correctAnswers: [
                "(a) extra time",
                "(c) extra space"
            ]
        },
        {
            id: "17c-q4",
            type: "multiple-choice",
            question: "4. In which of the following places might one find **debris**?",
            options: [
                "(a) the scene of a train wreck",
                "(b) a picnic area",
                "(c) a battlefield",
                "(d) a bottle of water"
            ],
            correctAnswers: [
                "(a) the scene of a train wreck",
                "(b) a picnic area",
                "(c) a battlefield"
            ]
        },
        {
            id: "17c-q5",
            type: "multiple-choice",
            question: "5. Which of the following can be **mobile**?",
            options: [
                "(a) a lamp post",
                "(b) a telephone",
                "(c) an army unit",
                "(d) a home"
            ],
            correctAnswers: [
                "(b) a telephone",
                "(c) an army unit",
                "(d) a home"
            ]
        },
        {
            id: "17c-q6",
            type: "multiple-choice",
            question: "6. Which of the following might be considered an **exploit**?",
            options: [
                "(a) a climb up Mount Everest",
                "(b) a trip into the city",
                "(c) a daring rescue attempt",
                "(d) a serious illness"
            ],
            correctAnswers: [
                "(a) a climb up Mount Everest",
                "(c) a daring rescue attempt"
            ]
        },
        {
            id: "17c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might be cause for **elation**?",
            options: [
                "(a) obtaining a mediocre test score",
                "(b) becoming bankrupt",
                "(c) witnessing a catastrophe",
                "(d) finding a lost pet"
            ],
            correctAnswers: [
                "(d) finding a lost pet"
            ]
        },
        {
            id: "17c-q8",
            type: "multiple-choice",
            question: "8. Which of the following might be **scoured**?",
            options: [
                "(a) a greasy frying pan",
                "(b) a dusty camera lens",
                "(c) a dirty floor",
                "(d) an area being searched"
            ],
            correctAnswers: [
                "(a) a greasy frying pan",
                "(c) a dirty floor",
                "(d) an area being searched"
            ]
        }
    ]
};

export const b6_l17_story_4: Story = {
    id: "b6-l17-s4",
    title: "17D Word Study: Synonyms and Antonyms",
    type: "exercise",
    content: `**Synonyms** = Same Meaning (Example: **Smart** and **Clever**) 🧠
**Antonyms** = Opposite Meaning (Example: **Day** and **Night**) ☀️🌙

Be a Word Detective! 🕵️‍♀️
1. Find the two words that go together.
2. Are they friends (Synonyms) or opposites (Antonyms)?`,
    wordsIncluded: b6_l17_words.map(w => w.id),
    questions: [
        {
            id: "17d-q1",
            type: "multiple-choice",
            question: "1. final, unique, preliminary, mobile",
            options: ["final / preliminary (A)", "unique / mobile (S)", "final / mobile (A)", "preliminary / unique (S)"],
            correctAnswer: "final / preliminary (A)"
        },
        {
            id: "17d-q2",
            type: "multiple-choice",
            question: "2. start, display, ooze, onset",
            options: ["start / onset (S)", "display / ooze (A)", "start / ooze (S)", "onset / display (A)"],
            correctAnswer: "start / onset (S)"
        },
        {
            id: "17d-q3",
            type: "multiple-choice",
            question: "3. tiny, pathetic, miniature, rigorous",
            options: ["tiny / miniature (S)", "pathetic / rigorous (A)", "tiny / pathetic (S)", "miniature / rigorous (A)"],
            correctAnswer: "tiny / miniature (S)"
        },
        {
            id: "17d-q4",
            type: "multiple-choice",
            question: "4. mobile, elated, perpetual, stationary",
            options: ["mobile / stationary (A)", "elated / perpetual (S)", "mobile / elated (A)", "stationary / perpetual (S)"],
            correctAnswer: "mobile / stationary (A)"
        },
        {
            id: "17d-q5",
            type: "multiple-choice",
            question: "5. corrosive, placid, pitiful, pathetic",
            options: ["pitiful / pathetic (S)", "corrosive / placid (A)", "corrosive / pitiful (S)", "pathetic / placid (A)"],
            correctAnswer: "pitiful / pathetic (S)"
        },
        {
            id: "17d-q6",
            type: "multiple-choice",
            question: "6. elation, restraint, joy, surprise",
            options: ["elation / joy (S)", "restraint / surprise (A)", "elation / restraint (A)", "joy / surprise (S)"],
            correctAnswer: "elation / joy (S)"
        },
        {
            id: "17d-q7",
            type: "multiple-choice",
            question: "7. search, leeway, siege, quest",
            options: ["search / quest (S)", "leeway / siege (A)", "search / siege (S)", "quest / leeway (A)"],
            correctAnswer: "search / quest (S)"
        },
        {
            id: "17d-q8",
            type: "multiple-choice",
            question: "8. release, exploit, restrain, discover",
            options: ["release / restrain (A)", "exploit / discover (S)", "release / exploit (S)", "restrain / discover (A)"],
            correctAnswer: "release / restrain (A)"
        },
        {
            id: "17d-q9",
            type: "multiple-choice",
            question: "9. save, salvage, corrode, collide",
            options: ["save / salvage (S)", "corrode / collide (A)", "save / corrode (A)", "salvage / collide (S)"],
            correctAnswer: "save / salvage (S)"
        },
        {
            id: "17d-q10",
            type: "multiple-choice",
            question: "10. use, exploit, arrange, scour",
            options: ["use / exploit (S)", "arrange / scour (A)", "use / arrange (S)", "exploit / scour (A)"],
            correctAnswer: "use / exploit (S)"
        }
    ]
};

export const b6_l17_story_passage: Story = {
    id: "b6-l17-passage",
    title: "Reading Passage: Graveyard of the Deep",
    type: "non-fiction",
    content: `
Ever since that dreadful night in 1912 when the *Titanic* struck an iceberg in the north Atlantic, the great ship lay undisturbed. It had gone down in water too deep for the wreckage to be explored, or so people thought. A scientist named Robert Ballard believed otherwise. He had served aboard a **miniature** three-person submarine named *Alvin* while in the U.S. Navy. The *Titanic* lay in just over twelve thousand feet of water; *Alvin* could descend to thirteen thousand feet, deep enough to reach the *Titanic* with plenty of **leeway**. Ballard's **quest** for the *Titanic* began in 1985 after the U.S. Navy agreed to make *Alvin* available to him.

Ballard had only an approximate location for where the *Titanic* had gone down. He knew he would have to **scour** an area several miles across to have any hope of actually finding the wreckage. Before he could use *Alvin*, he needed to make a **preliminary** search using video cameras operated by remote control from a surface ship. These **mobile** cameras were mounted on a sled that was dragged along the bottom on a thirteen-thousand-foot cable.

Crew members aboard the surface ship studied the pictures from the deep on a television screen. For days the pictures showed nothing but the mud at the bottom of the ocean, and the crew grew increasingly bored. Then suddenly, pictures of scattered **debris** on the ocean floor appeared. But was it from the *Titanic* or from some other ship? When a large ship's boiler came into view, the crew members were **elated**. They recognized it from photographs and knew they had found the *Titanic*.

Because the **onset** of winter made further operations dangerous, Ballard waited until the following year to resume his search. This time he took *Alvin*. From inside the tiny submarine, Ballard explored the wreck up close. The ship's hull had broken into two parts that landed right-side up, almost half a mile apart. Both parts had settled in sixty feet of **ooze** and could never be pulled clear. No one would ever raise the *Titanic*.

Over a two-week period, *Alvin* made a total of eleven descents. Ballard's most anxious moments came during his second dive when he landed on the main deck. The wooden planks that had once covered it had all been eaten away, and there was a chance that the badly **corroded** metal plates would collapse as *Alvin* settled on them. Were they to do so, *Alvin* could become entangled between decks. A return to the surface would be impossible and there would be no way for the crew of the surface ship to attempt a rescue. Those aboard the tiny submarine held their breaths, then let out sighs of relief. The metal plates had held.

Ballard took many photographs, including one of a pair of empty shoes lying side by side, a **pathetic** reminder of those who had died. He made no attempt to **salvage** anything from the wreck. In a book that he later wrote about his **exploit**, he expressed the hope that other expeditions would show similar **restraint**. Sad to say, other explorers did not follow his example. Within a few years, gold coins and other valuable objects from the *Titanic* were being offered for sale to the public. The great ship itself, however, tomb to more than fifteen hundred people, will remain where it is. No one will ever raise the *Titanic* from its watery grave.
    `,
    wordsIncluded: b6_l17_words.map(w => w.id),
    questions: [
        {
            id: "17p-q1",
            type: "multiple-choice",
            question: "1. What was the outcome of Ballard's **quest**?",
            options: [
                "He found the wreckage of the *Titanic*.",
                "He never found the ship.",
                "He found a different ship.",
                "He got lost in the ocean."
            ],
            correctAnswer: "He found the wreckage of the *Titanic*."
        },
        {
            id: "17p-q2",
            type: "multiple-choice",
            question: "2. What was special about Ballard's **exploit** compared with those who came after him?",
            options: [
                "He made no attempt to salvage anything, unlike others.",
                "He took more gold than anyone else.",
                "He spent less time underwater.",
                "He was the only one to use a submarine."
            ],
            correctAnswer: "He made no attempt to salvage anything, unlike others."
        },
        {
            id: "17p-q3",
            type: "multiple-choice",
            question: "3. How would you describe the ocean floor in the area where the *Titanic* sank?",
            options: [
                "It was covered in sixty feet of **ooze**.",
                "It was rocky and hard.",
                "It was a sandy beach.",
                "It was covered in coral reefs."
            ],
            correctAnswer: "It was covered in sixty feet of **ooze**."
        },
        {
            id: "17p-q4",
            type: "multiple-choice",
            question: "4. What is the meaning of **scour** as it is used in the passage?",
            options: [
                "To search thoroughly.",
                "To scrub hard.",
                "To run quickly.",
                "To hide carefully."
            ],
            correctAnswer: "To search thoroughly."
        },
        {
            id: "17p-q5",
            type: "multiple-choice",
            question: "5. Why is there very little room aboard *Alvin*?",
            options: [
                "It is a **miniature** submarine.",
                "It was full of luggage.",
                "It carried too many people.",
                "It was filled with water."
            ],
            correctAnswer: "It is a **miniature** submarine."
        },
        {
            id: "17p-q6",
            type: "multiple-choice",
            question: "6. What did Ballard have to do before he could begin the main search?",
            options: [
                "He had to conduct a **preliminary** search with remote cameras.",
                "He had to buy the submarine.",
                "He had to get a driver's license.",
                "He had to build a boat."
            ],
            correctAnswer: "He had to conduct a **preliminary** search with remote cameras."
        },
        {
            id: "17p-q7",
            type: "multiple-choice",
            question: "7. Why did **mobile** cameras have to be used to look for the wreck?",
            options: [
                "To search a large area by moving along the bottom.",
                "Because stationary cameras were too expensive.",
                "Because the cameraman couldn't swim.",
                "Because they needed to take selfies."
            ],
            correctAnswer: "To search a large area by moving along the bottom."
        },
        {
            id: "17p-q8",
            type: "multiple-choice",
            question: "8. How much **leeway** did Ballard have using *Alvin* to reach the wreck?",
            options: [
                "About one thousand feet (13,000 ft limit vs 12,000 ft depth).",
                "None, it was at the exact limit.",
                "Fifty feet.",
                "A mile."
            ],
            correctAnswer: "About one thousand feet (13,000 ft limit vs 12,000 ft depth)."
        },
        {
            id: "17p-q9",
            type: "multiple-choice",
            question: "9. What ended the monotony of the crew members who were studying the television screen?",
            options: [
                "The appearance of **debris** on the ocean floor.",
                "A shark attack.",
                "The movie ended.",
                "They ran out of food."
            ],
            correctAnswer: "The appearance of **debris** on the ocean floor."
        },
        {
            id: "17p-q10",
            type: "multiple-choice",
            question: "10. How might those studying the television screen have expressed their **elation** when the ship's large boiler came into view?",
            options: [
                "By cheering or shouting with joy.",
                "By crying sadly.",
                "By going to sleep.",
                "By ignoring it."
            ],
            correctAnswer: "By cheering or shouting with joy."
        },
        {
            id: "17p-q11",
            type: "multiple-choice",
            question: "11. What effect does seawater have on metal?",
            options: [
                "It causes it to **corrode**.",
                "It cleans it perfectly.",
                "It turns it into gold.",
                "It makes it float."
            ],
            correctAnswer: "It causes it to **corrode**."
        },
        {
            id: "17p-q12",
            type: "multiple-choice",
            question: "12. Why did Ballard not continue his search immediately after finding the wreckage of the *Titanic*?",
            options: [
                "The **onset** of winter made it dangerous.",
                "He ran out of money.",
                "He got bored.",
                "The submarine broke."
            ],
            correctAnswer: "The **onset** of winter made it dangerous."
        },
        {
            id: "17p-q13",
            type: "multiple-choice",
            question: "13. What is the meaning of **restraint** as it is used in the passage?",
            options: [
                "A holding back (from taking things).",
                "A safety belt.",
                "A jail cell.",
                "A loud noise."
            ],
            correctAnswer: "A holding back (from taking things)."
        },
        {
            id: "17p-q14",
            type: "multiple-choice",
            question: "14. What did later expeditions **salvage** from the *Titanic*?",
            options: [
                "Gold coins and other valuable objects.",
                "The whole ship.",
                "The captain's hat.",
                "Nothing."
            ],
            correctAnswer: "Gold coins and other valuable objects."
        },
        {
            id: "17p-q15",
            type: "multiple-choice",
            question: "15. What is the meaning of **pathetic** as it is used in the passage?",
            options: [
                "Arousing pity or sorrow (like the empty shoes).",
                "Funny.",
                "Useless.",
                "Expensive."
            ],
            correctAnswer: "Arousing pity or sorrow (like the empty shoes)."
        }
    ]
};

export const b6_l17_story_facts: Story = {
    id: "b6-l17-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Debris** is a French word brought unchanged into English. It comes from the French verb *debriser*, "to break into pieces."

* The word **miniature** comes from the Latin *miniare*, which means "to color in." Before printing was invented, books were written one page at a time with pens and ink. Pictures in them, usually quite small, were painted by hand. The word **miniature** came to mean "a very small picture." Its meaning was later extended to mean anything very small, especially a small portrait or a small copy or model of a larger object.
    `,
    wordsIncluded: ["debris", "miniature"],
    questions: []
};
