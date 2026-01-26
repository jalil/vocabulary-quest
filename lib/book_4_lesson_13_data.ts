import { Story, VocabularyWord } from "./types";

export const b4_l13_words: VocabularyWord[] = [
    {
        id: "appall",
        word: "appall",
        definition: "(v.) To cause horror, shock, or dismay. (adj.) appalling: Causing shock and horror.",
        exampleSentence: "The teachers were appalled by the poor test results.",
        imageEmoji: "😱",
        category: "Grade 4"
    },
    {
        id: "dejected",
        word: "dejected",
        definition: "(adj.) Discouraged; low in spirits.",
        exampleSentence: "Jesse felt dejected when he couldn't find his friends at the park.",
        imageEmoji: "😞",
        category: "Grade 4"
    },
    {
        id: "depend",
        word: "depend",
        definition: "(v.) 1. To rely on for support. 2. To be based on. (adj.) dependable: Reliable.",
        exampleSentence: "Many blind persons depend on guide dogs.",
        imageEmoji: "🤝",
        category: "Grade 4"
    },
    {
        id: "dreary",
        word: "dreary",
        definition: "(adj.) Sad and gloomy.",
        exampleSentence: "I pulled up the shades to let more light into Olga's dark and dreary room.",
        imageEmoji: "☁️",
        category: "Grade 4"
    },
    {
        id: "fanatic",
        word: "fanatic",
        definition: "(n.) A person whose enthusiasm for a belief is extreme. (adj.) fanatical: Carrying an interest or enthusiasm to extremes.",
        exampleSentence: "Uncle Roger ran the restaurant for years, and he was a fanatic about cleanliness in the kitchen.",
        imageEmoji: "🎌",
        category: "Grade 4"
    },
    {
        id: "impact",
        word: "impact",
        definition: "(n.) 1. The striking of one object by another. 2. Forceful impression.",
        exampleSentence: "The impact of the ball bruised the catcher's arm.",
        imageEmoji: "💥",
        category: "Grade 4"
    },
    {
        id: "invade",
        word: "invade",
        definition: "(v.) 1. To enter by force in order to take over. 2. To intrude; to enter in great numbers. (n.) invasion: The act of invading.",
        exampleSentence: "The German army invaded Russia in June 1941.",
        imageEmoji: "🛡️",
        category: "Grade 4"
    },
    {
        id: "isolate",
        word: "isolate",
        definition: "(v.) To cut off from others. (n.) isolation: The condition of being isolated. (adj.) isolated: Cut off from others.",
        exampleSentence: "As soon as my brother got a rash, the doctor isolated him for a week.",
        imageEmoji: "🏝️",
        category: "Grade 4"
    },
    {
        id: "occupy",
        word: "occupy",
        definition: "(v.) 1. To live in; to take up. 2. To take over by force. (n.) occupation: 1. A person's job or profession. 2. A filling up of time or space.",
        exampleSentence: "My aunt Bianca's family occupied the apartment next to us when I was little.",
        imageEmoji: "🏠",
        category: "Grade 4"
    },
    {
        id: "reveal",
        word: "reveal",
        definition: "(v.) 1. To make known. 2. To bring into view; to show.",
        exampleSentence: "If you reveal the wish you made, it might not come true.",
        imageEmoji: "🎭",
        category: "Grade 4"
    },
    {
        id: "rout",
        word: "rout",
        definition: "(n.) A disorganized retreat from an attack; a total defeat. (v.) To defeat completely.",
        exampleSentence: "The battle ended in a rout as the enemy dropped their weapons and ran.",
        imageEmoji: "🏃💨",
        category: "Grade 4"
    },
    {
        id: "suspect",
        word: "suspect",
        definition: "(v.) 1. To think of as probably guilty. 2. To suppose that something is true. (n.) A person believed to be guilty.",
        exampleSentence: "The teachers suspect we are not practicing our musical instruments.",
        imageEmoji: "🕵️",
        category: "Grade 4"
    },
    {
        id: "temporary",
        word: "temporary",
        definition: "(adj.) Lasting or made to last for a short time.",
        exampleSentence: "The town hall provided a temporary place for people to stay after the storm.",
        imageEmoji: "⏳",
        category: "Grade 4"
    },
    {
        id: "terror",
        word: "terror",
        definition: "(n.) Great fear. (v.) terrify: To fill with terror or great fear.",
        exampleSentence: "Thunder and lightning always fill my grandmother with terror.",
        imageEmoji: "😨",
        category: "Grade 4"
    },
    {
        id: "tragic",
        word: "tragic",
        definition: "(adj.) Causing great sadness; terrible or dreadful. (n.) tragedy: 1. An event that causes great pain, suffering, or loss of life. 2. A play that ends sadly.",
        exampleSentence: "The entire nation grieved over the tragic death of Martin Luther King Jr.",
        imageEmoji: "🎭", // Tragic mask
        category: "Grade 4"
    }
];

export const b4_l13_story_1: Story = {
    id: "b4-l13-s1",
    title: "13A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 13.`,
    wordsIncluded: b4_l13_words.map(w => w.id),
    questions: [
        {
            id: "13a-q1",
            type: "multiple-choice",
            question: "1. (a) travel through it. (c) To isolate a place is to (b) live in it. (d) To occupy a place is to",
            options: ["c-a", "d-b", "c-b", "d-a"],
            correctAnswer: "d-b"
        },
        {
            id: "13a-q2",
            type: "multiple-choice",
            question: "2. (a) A dependable person (c) takes things in stride. (b) A dejected person (d) is in low spirits.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "b-d"
        },
        {
            id: "13a-q3",
            type: "multiple-choice",
            question: "3. (a) Impact is (c) a desire to do good. (b) a forceful impression. (d) Terror is",
            options: ["a-b", "d-c", "a-c", "d-b"],
            correctAnswer: "a-b" // Impact is a forceful impression.
        },
        {
            id: "13a-q4",
            type: "multiple-choice",
            question: "4. (a) rely on that person. (c) play a joke on that person. (b) To appall someone is to (d) To depend on someone is to",
            options: ["d-a", "b-c", "d-c", "b-a"],
            correctAnswer: "d-a"
        },
        {
            id: "13a-q5",
            type: "multiple-choice",
            question: "5. (a) To reveal a place is to (c) make changes in it. (b) To invade a place is to (d) enter it to take over.",
            options: ["b-d", "a-c", "b-c", "a-d"],
            correctAnswer: "b-d"
        },
        {
            id: "13a-q6",
            type: "multiple-choice",
            question: "6. (a) well cared for. (c) cut off from others. (b) To be fanatic is to be (d) To be isolated is to be",
            options: ["d-c", "b-a", "d-a", "b-c"],
            correctAnswer: "d-c"
        },
        {
            id: "13a-q7",
            type: "multiple-choice",
            question: "7. (a) To suspect something is to (c) be afraid of it. (b) bring it into view. (d) To reveal something is to",
            options: ["d-b", "a-c", "a-b", "d-c"],
            correctAnswer: "d-b"
        },
        {
            id: "13a-q8",
            type: "multiple-choice",
            question: "8. (a) A temporary condition is one (c) that lasts forever. (b) that causes great sadness. (d) A tragic event is one",
            options: ["d-b", "a-c", "d-c", "a-b"],
            correctAnswer: "d-b"
        },
        {
            id: "13a-q9",
            type: "multiple-choice",
            question: "9. (a) To suspect someone is to (c) make fun of that person. (b) believe that person is guilty. (d) To appall someone is to",
            options: ["a-b", "d-c", "a-c", "d-b"],
            correctAnswer: "a-b"
        },
        {
            id: "13a-q10",
            type: "multiple-choice",
            question: "10. (a) A rout is (c) a path that is traveled. (b) one who has extreme beliefs. (d) A fanatic is",
            options: ["d-b", "a-c", "d-c", "a-b"],
            correctAnswer: "d-b"
        }
    ]
};

export const b4_l13_story_2: Story = {
    id: "b4-l13-s2",
    title: "13B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b4_l13_words.map(w => w.id),
    questions: [
        {
            id: "13b-q1",
            type: "multiple-choice",
            question: "1. Whether I go on the trip to the mountains will **be based on** the condition of my car.",
            options: ["depend", "impact", "suspect", "reveal"],
            correctAnswer: "depend"
        },
        {
            id: "13b-q2",
            type: "multiple-choice",
            question: "2. The school building seems **dull and gloomy** during winter vacation.",
            options: ["dreary", "dejected", "tragic", "isolated"],
            correctAnswer: "dreary"
        },
        {
            id: "13b-q3",
            type: "multiple-choice",
            question: "3. A person with the flu should be **kept away from other people**.",
            options: ["isolated", "invaded", "occupied", "routed"],
            correctAnswer: "isolated"
        },
        {
            id: "13b-q4",
            type: "multiple-choice",
            question: "4. My job making pizza is **not expected to last for very long**, but I love it.",
            options: ["temporary", "tragic", "fanatical", "dependable"],
            correctAnswer: "temporary"
        },
        {
            id: "13b-q5",
            type: "multiple-choice",
            question: "5. I was **shocked and dismayed** to find out that my neighbors had had no heat in their house for four days.",
            options: ["appalled", "terrified", "dejected", "impacted"],
            correctAnswer: "appalled"
        },
        {
            id: "13b-q6",
            type: "multiple-choice",
            question: "6. When cockroaches **moved in and took over** our kitchen, my mother called the landlord immediately.",
            options: ["invaded", "isolated", "revealed", "suspected"],
            correctAnswer: "invaded"
        },
        {
            id: "13b-q7",
            type: "multiple-choice",
            question: "7. The detective waited to question the **persons believed to be guilty of the crime** until their lawyer arrived.",
            options: ["suspects", "fanatics", "occupants", "invaders"],
            correctAnswer: "suspects"
        },
        {
            id: "13b-q8",
            type: "multiple-choice",
            question: "8. There was a look of **great fear** in her eyes as she heard the crash of thunder.",
            options: ["terror", "impact", "tragedy", "rout"],
            correctAnswer: "terror"
        },
        {
            id: "13b-q9",
            type: "multiple-choice",
            question: "9. The Red Sox **completely defeated** the Yankees by a score of 10 to 0.",
            options: ["routed", "invaded", "occupied", "appalled"],
            correctAnswer: "routed"
        },
        {
            id: "13b-q10",
            type: "multiple-choice",
            question: "10. Hamlet is one of Shakespeare's most famous **plays that end sadly as the hero loses at the end of a great struggle**.",
            options: ["tragedies", "comedies", "occupations", "invasions"],
            correctAnswer: "tragedies"
        }
    ]
};

export const b4_l13_story_3: Story = {
    id: "b4-l13-s3",
    title: "13C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l13_words.map(w => w.id),
    questions: [
        {
            id: "13c-q1",
            type: "multiple-choice",
            question: "1. Which of the following should you be able to **depend** on?",
            options: ["(a) a close friend", "(b) your parents", "(c) a stranger", "(d) a scoundrel"],
            correctAnswers: ["(a) a close friend", "(b) your parents"]
        },
        {
            id: "13c-q2",
            type: "multiple-choice",
            question: "2. Which of the following could you **reveal**?",
            options: ["(a) your age", "(b) your date of birth", "(c) your thoughts", "(d) your plans for the future"],
            correctAnswers: ["(a) your age", "(b) your date of birth", "(c) your thoughts", "(d) your plans for the future"] // All can be revealed.
        },
        {
            id: "13c-q3",
            type: "multiple-choice",
            question: "3. Which final basketball score(s) would be a **rout**?",
            options: ["(a) 102 to 98", "(b) 68 to 12", "(c) 110 to 108", "(d) 72 to 10"],
            correctAnswers: ["(b) 68 to 12", "(d) 72 to 10"]
        },
        {
            id: "13c-q4",
            type: "multiple-choice",
            question: "4. Which of the following might be thought **dreary**?",
            options: ["(a) a blissful afternoon", "(b) a bright hue", "(c) an afternoon spent pulling up weeds", "(d) a person who lacks a sense of humor"],
            correctAnswers: ["(c) an afternoon spent pulling up weeds", "(d) a person who lacks a sense of humor"]
        },
        {
            id: "13c-q5",
            type: "multiple-choice",
            question: "5. Which of the following could be **temporary**?",
            options: ["(a) a death", "(b) a job", "(c) a shelter", "(d) a period without rain"],
            correctAnswers: ["(b) a job", "(c) a shelter", "(d) a period without rain"]
        },
        {
            id: "13c-q6",
            type: "multiple-choice",
            question: "6. Which of the following would have an **impact**?",
            options: ["(a) the death of a president", "(b) a leaf landing on the ground", "(c) the loss of one's job", "(d) a car hitting a tree"],
            correctAnswers: ["(a) the death of a president", "(c) the loss of one's job", "(d) a car hitting a tree"]
        },
        {
            id: "13c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might be **appalling**?",
            options: ["(a) an increase in crime", "(b) world hunger", "(c) the condition of homeless people", "(d) the number of people in prison"],
            correctAnswers: ["(a) an increase in crime", "(b) world hunger", "(c) the condition of homeless people", "(d) the number of people in prison"]
        },
        {
            id: "13c-q8",
            type: "multiple-choice",
            question: "8. Which of the following is an **occupation**?",
            options: ["(a) poet", "(b) lawyer", "(c) uncle", "(d) teacher"],
            correctAnswers: ["(a) poet", "(b) lawyer", "(d) teacher"]
        }
    ]
};

export const b4_l13_story_4: Story = {
    id: "b4-l13-s4",
    title: "13D Word Study: Latin Roots",
    type: "exercise",
    content: `Choose the correct Latin root and its meaning that forms the valid word.`,
    wordsIncluded: b4_l13_words.map(w => w.id),
    questions: [
        {
            id: "13d-q1",
            type: "multiple-choice",
            question: "1. To **isolate** somebody is to cut that person off from others. The word comes from the Latin _______, meaning _______.",
            options: ["solus (alone)", "amicus (friend)", "jacere (to throw)"],
            correctAnswer: "solus (alone)"
        },
        {
            id: "13d-q2",
            type: "multiple-choice",
            question: "2. An **abrupt** change is one that breaks with the past and comes without warning. The word comes from the Latin _______, meaning _______.",
            options: ["rumpere (to break)", "visus (to see)", "locus (place)"],
            correctAnswer: "rumpere (to break)"
        },
        {
            id: "13d-q3",
            type: "multiple-choice",
            question: "3. To see properly, you need good **vision**. The word comes from the Latin _______, meaning _______.",
            options: ["visus (to see)", "tempus (time)", "annus (year)"],
            correctAnswer: "visus (to see)"
        },
        {
            id: "13d-q4",
            type: "multiple-choice",
            question: "4. A **century** is a period of one hundred years. The word comes from the Latin _______, meaning _______.",
            options: ["centum (hundred)", "annus (year)", "solus (alone)"],
            correctAnswer: "centum (hundred)"
        },
        {
            id: "13d-q5",
            type: "multiple-choice",
            question: "5. A **temporary** position is not expected to last a long time. The word comes from the Latin _______, meaning _______.",
            options: ["tempus (time)", "locus (place)", "rumpere (to break)"],
            correctAnswer: "tempus (time)"
        },
        {
            id: "13d-q6",
            type: "multiple-choice",
            question: "6. To **revise** something is to look it over and make necessary changes. The word comes from the Latin _______, meaning _______.",
            options: ["visus (to see)", "jacere (to throw)", "amicus (friend)"],
            correctAnswer: "visus (to see)"
        },
        {
            id: "13d-q7",
            type: "multiple-choice",
            question: "7. An **amiable** manner is one that is friendly. The word comes from the Latin _______, meaning _______.",
            options: ["amicus (friend)", "solus (alone)", "tempus (time)"],
            correctAnswer: "amicus (friend)"
        },
        {
            id: "13d-q8",
            type: "multiple-choice",
            question: "8. An **annual** event is one that is held every year. The word comes from the Latin _______, meaning _______.",
            options: ["annus (year)", "centum (hundred)", "locus (place)"],
            correctAnswer: "annus (year)"
        },
        {
            id: "13d-q9",
            type: "multiple-choice",
            question: "9. To **locate** a place on a map is to find that place. The word comes from the Latin _______, meaning _______.",
            options: ["locus (place)", "visus (to see)", "jacere (to throw)"],
            correctAnswer: "locus (place)"
        },
        {
            id: "13d-q10",
            type: "multiple-choice",
            question: "10. To **eject** someone is to throw that person out. The word comes from the Latin _______, meaning _______.",
            options: ["jacere (to throw)", "rumpere (to break)", "solus (alone)"],
            correctAnswer: "jacere (to throw)"
        }
    ]
};

export const b4_l13_story_5: Story = {
    id: "b4-l13-s5",
    title: "Reading Passage: Anne Frank's Diary",
    type: "non-fiction",
    content: `
Anne Frank was eleven years old in 1940 when the armies of Adolf Hitler **invaded** Holland, where she lived with her parents and her older sister. Hitler was the Nazi ruler of Germany. He was a **fanatic** in his ideas, and he hated certain groups of people, especially Jewish people. He planned to do away with all the Jewish people in Europe. The Frank family was Jewish. They were frightened and **appalled** when Hitler took over Holland.

In **terror**, Anne's family went into hiding. They moved into a small space hidden behind a bookshelf in Mr. Frank's office. Another family joined them. Altogether, eight people **occupied** the crowded space. They **depended** on brave friends who brought them food and news of the outside world. They hoped their stay would be **temporary**, and every day they longed to hear that Hitler had been defeated. But after two years, they were still in hiding.

From 1942 to 1944, Anne Frank kept a diary. She wrote about the things that happened and their **impact** on her life. Although life in these cramped surroundings was very **dreary**, Anne's diary is always interesting. In it she **reveals** her deepest thoughts and feelings. She complains of the **isolation** they all experienced, and she writes of their hopes of one day leading a normal life. No matter how **dejected** she felt, she always made the effort to keep the diary up-to-date.

Being discovered by the Germans was Anne Frank's greatest fear. Any unusual sound from outside—a slamming door, heavy footsteps, German voices—could be a sign of danger. The little group had the use of a toilet, but they could not flush it during the day. Someone nearby might hear it and **suspect** that people were in hiding there.

World War II ended in 1945. Hitler's armies were **routed** in the East by the Russians and in the West by the Americans and the British. But the war's end came too late for Anne Frank. The Germans had found the family's hiding place the year before. Anne and most of her family were killed.

We would not know of Anne's **tragic** story if not for her diary. She left it behind when she was taken away, but family friends found it and saved it. Anne's father managed to survive the war. When he returned home, his family was gone; only his daughter's diary was left. He published the diary to share her story with the world.
    `,
    wordsIncluded: b4_l13_words.map(w => w.id),
    questions: []
};

export const b4_l13_story_6: Story = {
    id: "b4-l13-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The word **deject** comes from the Latin roots *de*, meaning "away from," and *jacere*, meaning "to throw." Someone who is **dejected** is thrown, or cast down, in spirit. The word *project* (verb) combines the Latin prefix *pro*, meaning "forward," with *jacere*. To *project* something is to throw it forward. A movie *projector* is a machine that throws an image onto a screen. Many other words are built from *jacere*, including *reject* ("to throw away"), *inject* ("to force, drive, or throw into something"), and *eject* ("to throw out").

* The word **depend** comes from the Latin roots *de* and *pendere*, meaning "to hang." Something that is *impending* is "hanging," or about to happen.
`,
    wordsIncluded: ["deject", "depend"],
    questions: []
};
