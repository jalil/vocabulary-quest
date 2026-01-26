import { Story, VocabularyWord } from "./types";

export const b6_l5_words: VocabularyWord[] = [
    {
        id: "antic",
        word: "antic",
        definition: "(n.) (usually plural) A playful or funny act.",
        exampleSentence: "The antics of the clown made the crowd roar with laughter.",
        imageEmoji: "🤡",
        category: "Grade 6"
    },
    {
        id: "attire",
        word: "attire",
        definition: "(n.) Clothes, especially fine and expensive clothes. (v.) To dress up or be dressed up.",
        exampleSentence: "One often needs special attire to be in a wedding party.",
        imageEmoji: "👗",
        category: "Grade 6"
    },
    {
        id: "captivate",
        word: "captivate",
        definition: "(v.) To please greatly; to win over by special charm.",
        exampleSentence: "The cast's superb acting captivated the audience.",
        imageEmoji: "🤩",
        category: "Grade 6"
    },
    {
        id: "deft",
        word: "deft",
        definition: "(adj.) Quick and sure; skillful at handling.",
        exampleSentence: "A deft juggler can keep five or more objects in the air at one time.",
        imageEmoji: "🤹",
        category: "Grade 6"
    },
    {
        id: "diligent",
        word: "diligent",
        definition: "(adj.) Working with great care and effort.",
        exampleSentence: "Diligent students succeed in reaching their goals.",
        imageEmoji: "📝",
        category: "Grade 6"
    },
    {
        id: "eclipse",
        word: "eclipse",
        definition: "(n.) The total or partial hiding of one heavenly body by another. (v.) To do or be better than; to outshine.",
        exampleSentence: "An eclipse of the sun occurs when the moon passes directly in front of it.",
        imageEmoji: "🌑",
        category: "Grade 6"
    },
    {
        id: "evolve",
        word: "evolve",
        definition: "(v.) To develop and change gradually over time. evolution (n.) The changes that take place as something evolves.",
        exampleSentence: "Scientists think that modern birds may have evolved from dinosaurs.",
        imageEmoji: "🦕",
        category: "Grade 6"
    },
    {
        id: "innate",
        word: "innate",
        definition: "(adj.) Having from birth; occurring naturally rather than being learned.",
        exampleSentence: "The singer's innate musical ability showed itself at a very early age.",
        imageEmoji: "👶",
        category: "Grade 6"
    },
    {
        id: "inscribe",
        word: "inscribe",
        definition: "(v.) To write, print, or etch into as a permanent record. inscription (n.) The act of inscribing or what is inscribed.",
        exampleSentence: "Most of the gravestones were simply inscribed with the person's name, date of birth, and date of death.",
        imageEmoji: "🪦",
        category: "Grade 6"
    },
    {
        id: "posture",
        word: "posture",
        definition: "(n.) The way one holds one's body; a pose or position. (v.) To assume a particular position, especially a pretended one.",
        exampleSentence: "You can improve your posture by throwing your shoulders back.",
        imageEmoji: "🧘",
        category: "Grade 6"
    },
    {
        id: "shroud",
        word: "shroud",
        definition: "(n.) 1. Something that covers or hides from view. 2. Cloth used to wrap a dead body before burial. (v.) To block from sight.",
        exampleSentence: "A shroud of mystery surrounds the couple's disappearance.",
        imageEmoji: "🌫️",
        category: "Grade 6"
    },
    {
        id: "stifle",
        word: "stifle",
        definition: "(v.) 1. To cut off the air from; to smother. 2. To hold back; to check.",
        exampleSentence: "Thick smoke stifled those who sat around the campfire.",
        imageEmoji: "😶",
        category: "Grade 6"
    },
    {
        id: "tentative",
        word: "tentative",
        definition: "(adj.) Not fully worked out or final; hesitating or uncertain.",
        exampleSentence: "The deadline is tentative and may be extended.",
        imageEmoji: "🤔",
        category: "Grade 6"
    },
    {
        id: "tranquil",
        word: "tranquil",
        definition: "(adj.) Calm; peaceful. tranquility (n.) The state of being tranquil.",
        exampleSentence: "The sea was tranquil with no hint of the approaching storm.",
        imageEmoji: "😌",
        category: "Grade 6"
    },
    {
        id: "versatile",
        word: "versatile",
        definition: "(adj.) Able to do many different things or to be used in many different ways. versatility (n.) The state or condition of being versatile.",
        exampleSentence: "She is a versatile musician who can play eight instruments.",
        imageEmoji: "🛠️",
        category: "Grade 6"
    }
];

export const b6_l5_story_1: Story = {
    id: "b6-l5-s1",
    title: "5A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 5.`,
    wordsIncluded: b6_l5_words.map(w => w.id),
    questions: [
        {
            id: "5a-q1",
            type: "multiple-choice",
            question: "1. (a) To evolve is to (c) pretend to a position one doesn't really hold. (b) To posture is to (d) remain in one position without moving.",
            options: ["a-c", "b-c", "a-d", "b-d"],
            correctAnswer: "b-c"
        },
        {
            id: "5a-q2",
            type: "multiple-choice",
            question: "2. (a) make fun of that person. (c) dress that person. (b) To attire someone is to (d) To captivate someone is to",
            options: ["a-c", "b-c", "b-d", "d-a"],
            correctAnswer: "b-c"
        },
        {
            id: "5a-q3",
            type: "multiple-choice",
            question: "3. (a) A deft move is one that (c) is repeated over and over. (b) is made in an uncertain way. (d) A tentative move is one that",
            options: ["a-c", "b-d", "a-b", "d-b"], // tentative: uncertain.
            correctAnswer: "d-b"
        },
        {
            id: "5a-q4",
            type: "multiple-choice",
            question: "4. (a) gradual change over time. (c) the ability to do many things well. (b) Tranquility is (d) Evolution is",
            options: ["a-b", "d-a", "b-c", "d-c"],
            correctAnswer: "d-a"
        },
        {
            id: "5a-q5",
            type: "multiple-choice",
            question: "5. (a) A diligent person is one who (c) A versatile person is one who (b) engages in foolish or playful acts. (d) makes an effort to exercise great care.",
            options: ["a-b", "a-d", "c-b", "c-d"],
            correctAnswer: "a-d"
        },
        {
            id: "5a-q6",
            type: "multiple-choice",
            question: "6. (a) To stifle someone is to (c) fill that person with joy. (b) To eclipse someone is to (d) cut off that person's supply of air.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "a-d"
        },
        {
            id: "5a-q7",
            type: "multiple-choice",
            question: "7. (a) Versatility is (c) the state of being at peace. (b) Tranquility is (d) an unwillingness to change one's mind.",
            options: ["a-c", "b-c", "a-d", "b-d"],
            correctAnswer: "b-c"
        },
        {
            id: "5a-q8",
            type: "multiple-choice",
            question: "8. (a) Something that is inscribed is (c) written into a permanent record. (b) carried out in secret. (d) Something that is innate is",
            options: ["a-c", "a-b", "d-c", "d-b"],
            correctAnswer: "a-c"
        },
        {
            id: "5a-q9",
            type: "multiple-choice",
            question: "9. (a) a covering for a dead body. (c) a silly or playful act. (b) An eclipse is (d) A shroud is",
            options: ["a-b", "d-a", "b-c", "d-c"],
            correctAnswer: "d-a"
        },
        {
            id: "5a-q10",
            type: "multiple-choice",
            question: "10. (a) To be deft (c) To be captivated (b) is to be greatly pleased. (d) is to be held against one's will.",
            options: ["a-b", "c-b", "a-d", "c-d"], // captivate: please greatly.
            correctAnswer: "c-b"
        }
    ]
};

export const b6_l5_story_2: Story = {
    id: "b6-l5-s2",
    title: "5B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l5_words.map(w => w.id),
    questions: [
        {
            id: "5b-q1",
            type: "multiple-choice",
            question: "The children's **playful acts** made their parents roar with laughter.",
            options: ["antics", "shrouds", "postures", "inscriptions"],
            correctAnswer: "antics"
        },
        {
            id: "5b-q2",
            type: "multiple-choice",
            question: "Your **ability to do so many things well** was what impressed me the most.",
            options: ["versatility", "tranquility", "evolution", "attire"],
            correctAnswer: "versatility"
        },
        {
            id: "5b-q3",
            type: "multiple-choice",
            question: "What is the correct **clothing that should be worn** for an awards banquet?",
            options: ["attire", "shroud", "posture", "antic"],
            correctAnswer: "attire"
        },
        {
            id: "5b-q4",
            type: "multiple-choice",
            question: "She **completely won over** the audience with her fine performance.",
            options: ["captivated", "stifled", "eclipsed", "inscribed"],
            correctAnswer: "captivated"
        },
        {
            id: "5b-q5",
            type: "multiple-choice",
            question: "I admire the **very skillful** way you handled what could have been an embarrassing situation.",
            options: ["deft", "diligent", "tentative", "innate"],
            correctAnswer: "deft"
        },
        {
            id: "5b-q6",
            type: "multiple-choice",
            question: "When is the next **time that the earth will pass directly between the sun's position and that of the moon**?",
            options: ["eclipse", "evolution", "equinox", "solstice"],
            correctAnswer: "eclipse"
        },
        {
            id: "5b-q7",
            type: "multiple-choice",
            question: "My aunt's exceptional vigor was **present from the time of her birth**; even as an infant she was active and strong.",
            options: ["innate", "tentative", "diligent", "tranquil"],
            correctAnswer: "innate"
        },
        {
            id: "5b-q8",
            type: "multiple-choice",
            question: "Your backache is probably caused by your poor **way of holding your body**.",
            options: ["posture", "attire", "versatility", "stifle"],
            correctAnswer: "posture"
        },
        {
            id: "5b-q9",
            type: "multiple-choice",
            question: "The bride **struggled to hold back** a giggle when the nervous bridegroom dropped the ring during the ceremony.",
            options: ["stifled", "shrouded", "captivated", "evolved"],
            correctAnswer: "stifled"
        },
        {
            id: "5b-q10",
            type: "multiple-choice",
            question: "A thick fog **hid from sight** everything that was in the harbor.",
            options: ["shrouded", "eclipsed", "stifled", "inscribed"],
            correctAnswer: "shrouded"
        }
    ]
};

export const b6_l5_story_3: Story = {
    id: "b6-l5-s3",
    title: "5C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l5_words.map(w => w.id),
    questions: [
        {
            id: "5c-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **versatile**?",
            options: ["(a) a tool", "(b) a date in history", "(c) a performer", "(d) a thank-you note"],
            correctAnswers: ["(a) a tool", "(c) a performer"]
        },
        {
            id: "5c-q2",
            type: "multiple-choice",
            question: "2. Which of the following is a piece of **attire**?",
            options: ["(a) a vest", "(b) a walking stick", "(c) a hat", "(d) a pair of gloves"],
            correctAnswers: ["(a) a vest", "(c) a hat", "(d) a pair of gloves"]
        },
        {
            id: "5c-q3",
            type: "multiple-choice",
            question: "3. Which of the following might be an **antic**?",
            options: ["(a) tickling someone", "(b) robbing someone", "(c) making funny faces", "(d) turning cartwheels"],
            correctAnswers: ["(a) tickling someone", "(c) making funny faces", "(d) turning cartwheels"]
        },
        {
            id: "5c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be **tentative**?",
            options: ["(a) a movement", "(b) a suggestion", "(c) a proposal", "(d) a triumph"],
            correctAnswers: ["(a) a movement", "(b) a suggestion", "(c) a proposal"]
        },
        {
            id: "5c-q5",
            type: "multiple-choice",
            question: "5. Which of the following have **evolved**?",
            options: ["(a) plants", "(b) human beings", "(c) animals", "(d) automobiles"],
            correctAnswers: ["(a) plants", "(b) human beings", "(c) animals", "(d) automobiles"] // arguably all.
        },
        {
            id: "5c-q6",
            type: "multiple-choice",
            question: "6. On which of the following might you find an **inscription**?",
            options: ["(a) a pedestal", "(b) the front of a building", "(c) the inside cover of a book", "(d) an exhibit in a museum"],
            correctAnswers: ["(a) a pedestal", "(b) the front of a building", "(c) the inside cover of a book", "(d) an exhibit in a museum"]
        },
        {
            id: "5c-q7",
            type: "multiple-choice",
            question: "7. Which of the following would you expect to be **tranquil**?",
            options: ["(a) a hectic chase", "(b) a sanctuary", "(c) a rural scene", "(d) a rose garden"],
            correctAnswers: ["(b) a sanctuary", "(c) a rural scene", "(d) a rose garden"]
        },
        {
            id: "5c-q8",
            type: "multiple-choice",
            question: "8. Which of the following is a **posture**?",
            options: ["(a) sitting slumped over", "(b) dressing up", "(c) standing up with arms crossed", "(d) standing with bent knees"],
            correctAnswers: ["(a) sitting slumped over", "(c) standing up with arms crossed", "(d) standing with bent knees"]
        }
    ]
};

export const b6_l5_story_4: Story = {
    id: "b6-l5-s4",
    title: "5D Word Study: Synonyms and Antonyms",
    type: "exercise",
    content: `**Synonyms** mean the *same* (like **big** and **large**).
**Antonyms** become *opposites* (like **hot** and **cold**). 🧊🔥

Look at the four words. Two of them are a pair! 
1. Find the pair. 👯
2. Decide if they are Synonyms (Same) or Antonyms (Opposites).`,
    wordsIncluded: b6_l5_words.map(w => w.id),
    questions: [
        {
            id: "5d-q1",
            type: "multiple-choice",
            question: "1. outshine / eclipse / vacate / posture",
            options: ["outshine/eclipse", "outshine/vacate", "eclipse/posture"],
            correctAnswer: "outshine/eclipse"
        },
        {
            id: "5d-q2",
            type: "multiple-choice",
            question: "2. skillful / deft / humid / innate",
            options: ["skillful/deft", "deft/innate", "skillful/humid"],
            correctAnswer: "skillful/deft"
        },
        {
            id: "5d-q3",
            type: "multiple-choice",
            question: "3. tranquil / hidden / peaceful / versatile",
            options: ["tranquil/peaceful", "tranquil/hidden", "hidden/versatile"],
            correctAnswer: "tranquil/peaceful"
        },
        {
            id: "5d-q4",
            type: "multiple-choice",
            question: "4. exchange / purify / pollute / propel",
            options: ["purify/pollute", "exchange/propel", "pollute/propel"],
            correctAnswer: "purify/pollute"
        },
        {
            id: "5d-q5",
            type: "multiple-choice",
            question: "5. swivel / charge / inflate / turn",
            options: ["swivel/turn", "swivel/inflate", "charge/turn"],
            correctAnswer: "swivel/turn"
        },
        {
            id: "5d-q6",
            type: "multiple-choice",
            question: "6. hectic / distinct / rural / calm",
            options: ["hectic/calm", "distinct/rural", "hectic/distinct"],
            correctAnswer: "hectic/calm"
        },
        {
            id: "5d-q7",
            type: "multiple-choice",
            question: "7. squalid / diligent / versatile / magnificent",
            options: ["squalid/magnificent", "diligent/versatile", "squalid/versatile"], // squalid (filthy/misery) vs magnificent (splendid)? Antonyms.
            correctAnswer: "squalid/magnificent"
        },
        {
            id: "5d-q8",
            type: "multiple-choice",
            question: "8. superb / splendid / distinct / enormous",
            options: ["superb/splendid", "splendid/distinct", "superb/enormous"],
            correctAnswer: "superb/splendid"
        },
        {
            id: "5d-q9",
            type: "multiple-choice",
            question: "9. danger / buffet / terrain / jeopardy",
            options: ["danger/jeopardy", "buffet/terrain", "danger/terrain"],
            correctAnswer: "danger/jeopardy"
        },
        {
            id: "5d-q10",
            type: "multiple-choice",
            question: "10. propel / detain / pollute / persecute",
            options: ["propel/detain", "pollute/persecute", "detain/persecute"], // propel (push forward) vs detain (hold back). Antonyms.
            correctAnswer: "propel/detain"
        }
    ]
};

export const b6_l5_story_passage: Story = {
    id: "b6-l5-passage",
    title: "Reading Passage: A Born Artist",
    type: "non-fiction",
    content: `
To exhibit one's work at the Smithsonian Institution in Washington, D.C., would be a high point in any artist's career; to receive such an honor at the age of fourteen is truly remarkable. Yet that was the age of the Chinese painter Wang Yani when her paintings were given their first American showing there in 1989. Hundreds of thousands of visitors came and were **captivated** by her pictures of animals, birds, and landscapes. And in the Smithsonian's Sackler Gallery, audiences were able to watch as Yani, barefoot and **attired** casually in shirt and denim shorts, walked on stage. With **deft** strokes of the brush, she produced works of art right before their eyes. She did so with total concentration, seemingly unaware of the onlookers.

If fourteen seems a young age to receive so much attention, consider this: Yani's first exhibition, in her native China, was held when she was four! She has been working **diligently** at her art since the age of two; that was when Wang Shi Chiang first became aware of his daughter's interest in painting. Himself a well-known artist, he encouraged Yani by providing her with large sheets of paper, ink, and brushes. These are the traditional materials of Chinese painting. He never gave her a lesson and also discouraged her teachers at school from doing so. He believed such instruction would only **stifle** her imagination and prevent her from expressing her feelings freely. His faith in his daughter's **innate** talent was fully justified by her early success. In fact, Wang Yani's fame soon **eclipsed** her father's fame.

Yani's first subjects were monkeys. She became fascinated with their **antics** after a visit to the local zoo. She has painted hundreds of pictures of them. One of her favorites is thirty feet long and took her just four hours to complete. It shows 112 monkeys in various **postures**, each with a different expression.

As she grew older, she became more **versatile** and began painting other creatures such as birds, horses, and lions. Later, her style **evolved**. She broadened her range of subjects to include trees, flowers, and, especially, landscapes. Her interest in landscapes is not surprising, because Yani lives in a region of great natural beauty in southern China, with gently rolling hills, clear streams, and ancient temples. Not far away are the famous cone-shaped Guilin mountains. The mountains are often **shrouded** in mist and are a favorite subject of the young painter. Yani paints what she feels about what she sees rather than simply what she sees. In her paintings of the mountains, she tries to capture the feeling of **tranquility** that she experienced while visiting the scene.

She often begins by spilling ink onto the paper, a method known as *po-mo*. She follows this with a few **tentative** strokes. Then she proceeds rapidly until the painting is completed, often in less than half an hour. Yani often includes an **inscription** in Chinese characters as part of a painting. A typical one reads, "Autumn is a withering season for the trees, but the animals are happy."

By the time she was sixteen, Yani had painted more than ten thousand pictures. Today, as an adult, she is still painting. Her work continues to grow and change. She finds new ideas in nature and in the changing world around her. She also finds them through singing and dancing. These are skills that she feels have helped with her painting. In a good painting, according to a Chinese saying, "the brush sings and the ink dances."
    `,
    wordsIncluded: b6_l5_words.map(w => w.id),
    questions: [
        {
            id: "b6-l5-p-q1",
            type: "multiple-choice",
            question: "Why do you think Yani was able to produce more than ten thousand paintings by the time she was sixteen?",
            options: [
                "She works diligently and has been painting since she was two.",
                "She traced them.",
                "She used a computer.",
                "She was forced to paint all day."
            ],
            correctAnswer: "She works diligently and has been painting since she was two."
        },
        {
            id: "b6-l5-p-q2",
            type: "multiple-choice",
            question: "Why do you think Yani's first brushstrokes are sometimes made in a **tentative** manner?",
            options: [
                "She might be hesitating or working out where to start after spilling the ink.",
                "She is afraid of making a mistake.",
                "She is trying to be funny.",
                "She doesn't know how to paint."
            ],
            correctAnswer: "She might be hesitating or working out where to start after spilling the ink."
        },
        {
            id: "b6-l5-p-q3",
            type: "multiple-choice",
            question: "What feeling does Yani capture in her paintings of the Guilin mountains?",
            options: [
                "She captures the feeling of tranquility.",
                "She captures the feeling of fear.",
                "She captures the feeling of chaos.",
                "She captures the feeling of sadness."
            ],
            correctAnswer: "She captures the feeling of tranquility."
        },
        {
            id: "b6-l5-p-q4",
            type: "multiple-choice",
            question: "What subject **captivated** Yani when she was very young?",
            options: [
                "Monkeys.",
                "Horses.",
                "Lions.",
                "Birds."
            ],
            correctAnswer: "Monkeys."
        },
        {
            id: "b6-l5-p-q5",
            type: "multiple-choice",
            question: "What ability is required in order to enjoy the **inscription** on a painting by Yani?",
            options: [
                "You must be able to read Chinese characters.",
                "You must be able to paint.",
                "You must be able to speak English.",
                "You must have good eyesight."
            ],
            correctAnswer: "You must be able to read Chinese characters."
        },
        {
            id: "b6-l5-p-q6",
            type: "multiple-choice",
            question: "What is the meaning of **stifle** as it is used in the passage?",
            options: [
                "It means to smother or hold back (her imagination).",
                "It means to encourage.",
                "It means to destroy.",
                "It means to create."
            ],
            correctAnswer: "It means to smother or hold back (her imagination)."
        },
        {
            id: "b6-l5-p-q7",
            type: "multiple-choice",
            question: "How can you explain Yani's ability to paint when she was so young and had never received any lessons?",
            options: [
                "She had an innate talent.",
                "She watched videos.",
                "She read books.",
                "Her father taught her secretly."
            ],
            correctAnswer: "She had an innate talent."
        },
        {
            id: "b6-l5-p-q8",
            type: "multiple-choice",
            question: "What is the meaning of **posture** as it is used in the passage?",
            options: [
                "It means a pose or position.",
                "It means a promise.",
                "It means a type of paint.",
                "It means a frame."
            ],
            correctAnswer: "It means a pose or position."
        },
        {
            id: "b6-l5-p-q9",
            type: "multiple-choice",
            question: "Has Yani always worn traditional Chinese **attire** when appearing in public?",
            options: [
                "No, she was attired casually in shirt and denim shorts at the Smithsonian.",
                "Yes, always.",
                "Only on Sundays.",
                "She wears a uniform."
            ],
            correctAnswer: "No, she was attired casually in shirt and denim shorts at the Smithsonian."
        },
        {
            id: "b6-l5-p-q10",
            type: "multiple-choice",
            question: "How does Yani demonstrate her **versatility** in painting?",
            options: [
                "She paints many different subjects including animals, birds, horses, lions, and landscapes.",
                "She paints only monkeys.",
                "She paints only landscapes.",
                "She paints only people."
            ],
            correctAnswer: "She paints many different subjects including animals, birds, horses, lions, and landscapes."
        },
        {
            id: "b6-l5-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **eclipse** as it is used in the passage?",
            options: [
                "It means to outshine or be greater than (her father's fame).",
                "It means to cover the sun.",
                "It means to destroy.",
                "It means to hide."
            ],
            correctAnswer: "It means to outshine or be greater than (her father's fame)."
        },
        {
            id: "b6-l5-p-q12",
            type: "multiple-choice",
            question: "Why would you expect a painting done by Yani when she was six years old to be different from one done when she was sixteen?",
            options: [
                "Because her style evolved as she grew older.",
                "Because she used different paper.",
                "Because she stopped painting monkeys.",
                "Because she lost her brushes."
            ],
            correctAnswer: "Because her style evolved as she grew older."
        },
        {
            id: "b6-l5-p-q13",
            type: "multiple-choice",
            question: "How does Yani's style of working enable her to finish a painting in such a short time?",
            options: [
                "She works with deft strokes and proceeds rapidly.",
                "She uses a machine.",
                "She has many assistants.",
                "She paints small pictures."
            ],
            correctAnswer: "She works with deft strokes and proceeds rapidly."
        },
        {
            id: "b6-l5-p-q14",
            type: "multiple-choice",
            question: "What kind of monkeys' **antics** do you think Yani found amusing?",
            options: [
                "Their playful or funny acts.",
                "Their sleeping habits.",
                "Their eating habits.",
                "Their fighting."
            ],
            correctAnswer: "Their playful or funny acts."
        },
        {
            id: "b6-l5-p-q15",
            type: "multiple-choice",
            question: "What is the meaning of **shroud** as it is used in the passage?",
            options: [
                "It means to cover or hide from view (shrouded in mist).",
                "It means a cloth.",
                "It means a type of cloud.",
                "It means a painting technique."
            ],
            correctAnswer: "It means to cover or hide from view (shrouded in mist)."
        }
    ]
};

export const b6_l5_story_facts: Story = {
    id: "b6-l5-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The Latin word *natus* means "born" and forms the root of several English words. **Innate** qualities are those that seem to have been with a person since birth. *Prenatal* care is that given to a mother before the birth of her child. To be a *native* of a particular place means that one was born in that place.

* Old English was the language spoken in England between 500 and 1200 CE. A number of its words have survived, often with changed spellings and slightly altered meanings to become part of modern English. **Shroud** is such a word; it comes from *scrud*, an Old English word for a loose article of clothing that covered most of the body. The dead would usually be buried wearing the *scrud* they had worn in life, and in time the word, changed to **shroud**, came to mean "a covering for a dead body." As a verb it came to mean "to hide from sight" or "to cover."
    `,
    wordsIncluded: ["innate", "shroud"],
    questions: []
};
