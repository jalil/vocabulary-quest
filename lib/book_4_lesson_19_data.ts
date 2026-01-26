import { Story, VocabularyWord } from "./types";

export const b4_l19_words: VocabularyWord[] = [
    {
        id: "audition",
        word: "audition",
        definition: "(n.) A short performance by an actor or musician as a test for a particular job. (v.) To try out for.",
        exampleSentence: "Auditions for the school band will be held tomorrow.",
        imageEmoji: "🎭",
        category: "Grade 4"
    },
    {
        id: "create",
        word: "create",
        definition: "(v.) To bring into being; to produce for the first time. (adj.) creative: Having new and original ideas. (n.) creation: The act of bringing into being; something created.",
        exampleSentence: "The computer industry has created many new jobs.",
        imageEmoji: "🎨",
        category: "Grade 4"
    },
    {
        id: "elevate",
        word: "elevate",
        definition: "(v.) To lift up; to raise to a higher level. (n.) elevation: Height.",
        exampleSentence: "The new director elevated the school play to new heights.",
        imageEmoji: "🆙",
        category: "Grade 4"
    },
    {
        id: "eliminate",
        word: "eliminate",
        definition: "(v.) To get rid of; to remove or leave out. (n.) elimination: A getting rid of.",
        exampleSentence: "Zeb decided to eliminate the last paragraph because his report was too long.",
        imageEmoji: "🗑️",
        category: "Grade 4"
    },
    {
        id: "engage",
        word: "engage",
        definition: "(v.) 1. To put to work; to hire. 2. To keep busy or active. 3. To bind oneself to do something, especially to marry.",
        exampleSentence: "The Beachfront Restaurant engages extra help every summer.",
        imageEmoji: "🤝",
        category: "Grade 4"
    },
    {
        id: "entrance",
        word: "entrance",
        definition: "(v.) To fill with joy or delight. (adj.) entrancing: Delightful.",
        exampleSentence: "The young dancers entranced the audience with their grace and beauty.",
        imageEmoji: "✨",
        category: "Grade 4"
    },
    {
        id: "essential",
        word: "essential",
        definition: "(adj.) Most important; very necessary. (n. pl.) essentials: Something that cannot be done without.",
        exampleSentence: "Fresh fruit and vegetables are essential to a good diet.",
        imageEmoji: "🥬",
        category: "Grade 4"
    },
    {
        id: "foremost",
        word: "foremost",
        definition: "(adj.) First in importance, time, or place.",
        exampleSentence: "This new book by Nigeria's foremost writer is wonderful.",
        imageEmoji: "🥇",
        category: "Grade 4"
    },
    {
        id: "forsake",
        word: "forsake",
        definition: "(v.) To have nothing more to do with; to turn one's back on.",
        exampleSentence: "I'd never forsake my old friends if I became rich and famous.",
        imageEmoji: "👋",
        category: "Grade 4"
    },
    {
        id: "recognize",
        word: "recognize",
        definition: "(v.) 1. To know and remember upon seeing. 2. To admit the truth or accept the existence of. 3. To accept and approve.",
        exampleSentence: "I recognized the name, but not the face.",
        imageEmoji: "👀",
        category: "Grade 4"
    },
    {
        id: "sentimental",
        word: "sentimental",
        definition: "(adj.) Expressing feelings of love or pity, sometimes to excess.",
        exampleSentence: "The movie was so sentimental that everyone was in tears.",
        imageEmoji: "😢",
        category: "Grade 4"
    },
    {
        id: "source",
        word: "source",
        definition: "(n.) The thing or place from which something comes.",
        exampleSentence: "We decided to research the source of the Nile River.",
        imageEmoji: "⛲",
        category: "Grade 4"
    },
    {
        id: "tour",
        word: "tour",
        definition: "(n.) A trip or journey in which one usually returns to the starting point. (v.) To travel to different places.",
        exampleSentence: "The band played over twenty concerts on its tour of the Midwest.",
        imageEmoji: "🚌",
        category: "Grade 4"
    },
    {
        id: "tradition",
        word: "tradition",
        definition: "(n.) A belief, custom, or usual way of doing things, handed down within families or other groups. (adj.) traditional: Handed down from age to age.",
        exampleSentence: "Fireworks on July 4 are an American tradition.",
        imageEmoji: "🎆",
        category: "Grade 4"
    },
    {
        id: "trio",
        word: "trio",
        definition: "(n.) A group of three people.",
        exampleSentence: "Luis plays the cello in a trio.",
        imageEmoji: "🎻",
        category: "Grade 4"
    }
];

export const b4_l19_story_1: Story = {
    id: "b4-l19-s1",
    title: "19A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 19.`,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: [
        {
            id: "19a-q1",
            type: "multiple-choice",
            question: "1. (a) the things that are left out. (c) Essentials are (b) Traditions are (d) the things considered necessary.",
            options: ["c-d", "b-a", "c-a", "b-d"],
            correctAnswer: "c-d"
        },
        {
            id: "19a-q2",
            type: "multiple-choice",
            question: "2. (a) know or remember it. (c) To create a piece of work is to (b) To recognize a piece of work is to (d) make changes in it.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        },
        {
            id: "19a-q3",
            type: "multiple-choice",
            question: "3. (a) passed down over time. (c) that is no longer practiced. (b) A traditional custom is one (d) A sentimental custom is one",
            options: ["b-a", "d-c", "b-c", "d-a"],
            correctAnswer: "b-a"
        },
        {
            id: "19a-q4",
            type: "multiple-choice",
            question: "4. (a) A creation is (c) a small group. (b) A tour is (d) something produced for the first time.",
            options: ["a-d", "b-c", "a-c", "b-d"],
            correctAnswer: "a-d"
        },
        {
            id: "19a-q5",
            type: "multiple-choice",
            question: "5. (a) to consider. (c) to delight. (b) To entrance is (d) To audition is",
            options: ["b-c", "d-a", "b-a", "d-c"],
            correctAnswer: "b-c"
        },
        {
            id: "19a-q6",
            type: "multiple-choice",
            question: "6. (a) turn one's back on that person. (c) To engage someone is to (b) protect that person. (d) To forsake someone is to",
            options: ["d-a", "c-b", "d-b", "c-a"],
            correctAnswer: "d-a"
        },
        {
            id: "19a-q7",
            type: "multiple-choice",
            question: "7. (a) Elimination of something is (c) Elevation of something is (b) finding a new and different use for it. (d) getting rid of it.",
            options: ["a-d", "c-b", "a-b", "c-d"],
            correctAnswer: "a-d"
        },
        {
            id: "19a-q8",
            type: "multiple-choice",
            question: "8. (a) To audition someone is to (c) hire that person. (b) To engage someone is to (d) get rid of that person.",
            options: ["b-c", "a-d", "b-d", "a-c"],
            correctAnswer: "b-c"
        },
        {
            id: "19a-q9",
            type: "multiple-choice",
            question: "9. (a) a journey around a place. (c) A source is (b) the answer to a puzzle. (d) A tour is",
            options: ["d-a", "c-b", "d-b", "c-a"],
            correctAnswer: "d-a"
        }
    ]
};

export const b4_l19_story_2: Story = {
    id: "b4-l19-s2",
    title: "19B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: [
        {
            id: "19b-q1",
            type: "multiple-choice",
            question: "1. I hope to one day be one of the world's **greatest and most important** experts on black holes.",
            options: ["foremost", "sentimental", "essential", "creative"],
            correctAnswer: "foremost"
        },
        {
            id: "19b-q2",
            type: "multiple-choice",
            question: "2. At my parents' anniversary party, a **group of three singers** sang popular songs from the sixties and seventies.",
            options: ["trio", "tour", "source", "tradition"],
            correctAnswer: "trio"
        },
        {
            id: "19b-q3",
            type: "multiple-choice",
            question: "3. We were able to locate the **place that was the beginning** of the river by following it and hiking up to the mountains.",
            options: ["source", "entrance", "elevation", "creation"],
            correctAnswer: "source"
        },
        {
            id: "19b-q4",
            type: "multiple-choice",
            question: "4. The exterminator's job was to **get rid of** the rats from the warehouse.",
            options: ["eliminate", "elevate", "create", "forsake"],
            correctAnswer: "eliminate"
        },
        {
            id: "19b-q5",
            type: "multiple-choice",
            question: "5. My cousin Becca and Juan Morales, her friend from grade school, became **promised to each other in marriage** on June 1.",
            options: ["engaged", "recognized", "auditioned", "created"],
            correctAnswer: "engaged"
        },
        {
            id: "19b-q6",
            type: "multiple-choice",
            question: "6. Because I am so short, I have to **put at a higher level** every piano stool I sit on.",
            options: ["elevate", "eliminate", "create", "audition"],
            correctAnswer: "elevate"
        },
        {
            id: "19b-q7",
            type: "multiple-choice",
            question: "7. I always cry at weddings because I'm so **easily affected by romantic feelings**.",
            options: ["sentimental", "creative", "essential", "traditional"],
            correctAnswer: "sentimental"
        },
        {
            id: "19b-q8",
            type: "multiple-choice",
            question: "8. Sequoya **brought into being for the first time** a written language for the Cherokee people.",
            options: ["created", "recognized", "discovered", "engaged"],
            correctAnswer: "created"
        },
        {
            id: "19b-q9",
            type: "multiple-choice",
            question: "9. The government **admits the existence of** the need for laws to protect the wetlands.",
            options: ["recognizes", "creates", "eliminates", "forsakes"],
            correctAnswer: "recognizes"
        },
        {
            id: "19b-q10",
            type: "multiple-choice",
            question: "10. The **short performances that people gave who were trying out** for the orchestra lasted all day.",
            options: ["auditions", "tours", "rehearsals", "engagements"],
            correctAnswer: "auditions"
        },
        {
            id: "19b-q11",
            type: "multiple-choice",
            question: "11. We returned again and again to Trinidad because the island is so **delightful and pleasurable**.",
            options: ["entrancing", "sentimental", "essential", "traditional"],
            correctAnswer: "entrancing"
        }
    ]
};

export const b4_l19_story_3: Story = {
    id: "b4-l19-s3",
    title: "19C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: [
        {
            id: "19c-q1",
            type: "multiple-choice",
            question: "1. Which of the following might one **audition** for?",
            options: ["(a) a job in a band", "(b) a bike rental", "(c) a part in a play", "(d) a best friend"],
            correctAnswers: ["(a) a job in a band", "(c) a part in a play"]
        },
        {
            id: "19c-q2",
            type: "multiple-choice",
            question: "2. Which of the following is **essential** for college?",
            options: ["(a) graduation from high school", "(b) being on a sports team", "(c) a passport", "(d) good grades"],
            correctAnswers: ["(a) graduation from high school", "(d) good grades"] // Grades usually essential for acceptance.
        },
        {
            id: "19c-q3",
            type: "multiple-choice",
            question: "3. Which of the following are birthday **traditions**?",
            options: ["(a) blowing out candles", "(b) having cake", "(c) getting presents", "(d) making pumpkin pie"],
            correctAnswers: ["(a) blowing out candles", "(b) having cake", "(c) getting presents"]
        },
        {
            id: "19c-q4",
            type: "multiple-choice",
            question: "4. Which of the following might one **tour**?",
            options: ["(a) a precipice", "(b) a museum", "(c) a toothbrush", "(d) a zoo"],
            correctAnswers: ["(b) a museum", "(d) a zoo"]
        },
        {
            id: "19c-q5",
            type: "multiple-choice",
            question: "5. Which of the following might one **forsake**?",
            options: ["(a) one's friends", "(b) one's family", "(c) one's grades", "(d) one's height"],
            correctAnswers: ["(a) one's friends", "(b) one's family"] // You can forsake friends/family/principles. Not height. Grades? Maybe "forsake good grades"? But usually people/causes.
        },
        {
            id: "19c-q6",
            type: "multiple-choice",
            question: "6. Which of the following might **elevate** one's spirits?",
            options: ["(a) being hailed by a friend", "(b) a pessimistic remark", "(c) being jeered by a crowd", "(d) finishing a lot of work"],
            correctAnswers: ["(a) being hailed by a friend", "(d) finishing a lot of work"]
        },
        {
            id: "19c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might **entrance** a child?",
            options: ["(a) a red balloon", "(b) a boring tale", "(c) a funny clown", "(d) a threatening gesture"],
            correctAnswers: ["(a) a red balloon", "(c) a funny clown"]
        },
        {
            id: "19c-q8",
            type: "multiple-choice",
            question: "8. Which should one **eliminate** for good health?",
            options: ["(a) a balanced diet", "(b) regular check-ups", "(c) eating unhealthy foods", "(d) exercise"],
            correctAnswer: "(c) eating unhealthy foods"
        }
    ]
};

export const b4_l19_story_4: Story = {
    id: "b4-l19-s4",
    title: "19D Word Study: Prefixes",
    type: "exercise",
    content: `Decide if the word contains the prefix **tri-** meaning "three".`,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: [
        {
            id: "19d-q1",
            type: "multiple-choice",
            question: "1. Does **triangle** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q2",
            type: "multiple-choice",
            question: "2. Does **trillion** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q3",
            type: "multiple-choice",
            question: "3. Does **triplets** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q4",
            type: "multiple-choice",
            question: "4. Does **trial** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "No"
        },
        {
            id: "19d-q5",
            type: "multiple-choice",
            question: "5. Does **tricycle** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q6",
            type: "multiple-choice",
            question: "6. Does **trident** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q7",
            type: "multiple-choice",
            question: "7. Does **tricolor** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q8",
            type: "multiple-choice",
            question: "8. Does **trio** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q9",
            type: "multiple-choice",
            question: "9. Does **tribe** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "No"
        },
        {
            id: "19d-q10",
            type: "multiple-choice",
            question: "10. Does **triplicate** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q11",
            type: "multiple-choice",
            question: "11. Does **tripod** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "Yes"
        },
        {
            id: "19d-q12",
            type: "multiple-choice",
            question: "12. Does **trickle** contain the prefix *tri-* meaning three?",
            options: ["Yes", "No"],
            correctAnswer: "No"
        }
    ]
};

export const b4_l19_story_5: Story = {
    id: "b4-l19-s5",
    title: "Reading Passage: Martha Graham: Artist and Teacher",
    type: "non-fiction",
    content: `
Freedom! Free to be what you want to be, and free to do what you want to do. That's all Martha Graham wanted, but it wasn't easy. She was a dancer who went on to become one of the **foremost** artists of her time. She was also **recognized** as one of the greatest teachers of modern dance. But before she could do any of this, Martha Graham had to change the rules.

Before Martha Graham's time, dance as a serious art form meant French and Russian ballet. Ballet had remained largely unchanged since the nineteenth century. It told stories that were often **sentimental** and far removed from the real world. The dance steps followed fixed patterns of movement. Female dancers wore **traditional** tight-waisted costumes with short skirts and tights. Their stiffened ballet shoes enabled them to dance on their toes. Music was usually classical. It was often written especially for the ballet.

Martha Graham began by **eliminating** from her dances everything that she felt was unnecessary. What remained was a new kind of dance, stripped to its **essentials**. It used bare stage settings and the simplest of costumes. Her dancers were usually barefoot and wore loose, flowing clothes. Her subjects were drawn from a great variety of **sources**. They included Native American life, American history, and the poetry of Emily Dickinson. She tried to develop a kind of dance that expressed human feelings along with telling a story.

Martha Graham's lifelong interest in dance began in 1912. At the age of seventeen, she saw Ruth St. Denis perform in San Francisco as part of her American **tour**. St. Denis was heavily influenced by Japanese, Indian, and Spanish dances. Graham was **entranced** by what she saw. She began taking dancing lessons. When she was twenty-two, she successfully **auditioned** for the Denishawn dance company. The company was run by Ruth St. Denis and her husband, Ted Shawn. Graham stayed with the company for seven years. She became one of its leading dancers.

In 1924, Martha Graham decided to **forsake** the life of a performer for a while. She concentrated on teaching and developing her own style of dancing, and two years later she returned to the New York stage, bringing with her a **trio** of female dancers who had been her best students. With these three dancers, she formed the Martha Graham Dance Company, and over the next few years, the company grew much larger. She preferred women dancers; not until 1938 did she **engage** male dancers to appear on stage with her. "Modern dance," she once said, "isn't anything in my mind except one thing—the freedom of women in America."

Her last public performance took place in 1969, when she was seventy-four years old. She had won over all her critics; she had **elevated** modern dance to a new American art form. When she died in 1991, she was at work **creating** a new dance for her company. Martha Graham was ninety-six years old. That unfinished work, *The Eyes of the Goddess*, was performed by her company shortly after her death. The performance was a tribute to one of America's greatest artists.
    `,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: []
};

export const b4_l19_story_6: Story = {
    id: "b4-l19-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* If you **audition** for a part in a play, you want to make sure that you are *heard*. The word **audition** itself suggests this; it comes from the Latin verb *audire*, which means "to hear." Other words formed from this root include the following:
  * *Audible*, loud enough to be heard (an *audible* whisper);
  * *Audio*, intended to be heard (an *audio* tape);
  * *Audience*, a group of people gathered together to hear (and also to see) whatever is being performed for their enjoyment;
  * *Auditorium*, a large room in which people come together to hear a presentation;
  * *Auditory*, having to do with the ear (the *auditory* nerve).

* A **trio** is a group of three, especially a group of three musicians or other entertainers. The word comes from the Latin (and Greek) word for "three." Other Latin numbers give us the following: *duet*, two performers or a piece to be performed by two persons, from the Latin *duo*; *quartet*, a group of four, from the Latin *quattuor*; *quintet*, a group of five, from the Latin *quintus*; *sextet*, a group of six, from the Latin *sex*; *septet*, a group of seven, from the Latin *septem*; and *octet*, a group of eight, from the Latin *octo*.

* **Entrance** has two pronunciations: en' *transs*, and en *transs'*. The more common pronunciation, *en'* *transs*, means "a way to go inside someplace or something." *En* *transs'*, "to fill with joy or delight," which appears in this lesson, is less common.
`,
    wordsIncluded: ["audition", "trio", "entrance"],
    questions: []
};
