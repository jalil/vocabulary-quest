import { Story, VocabularyWord } from "./types";

export const b6_l7_words: VocabularyWord[] = [
    {
        id: "brawl",
        word: "brawl",
        definition: "(n.) A rough, noisy fight. (v.) To fight noisily.",
        exampleSentence: "Teachers walk the halls between classes to prevent brawls between students.",
        imageEmoji: "👊",
        category: "Grade 6",
        synonyms: ["fight", "scuffle", "fray"],
        antonyms: ["agreement", "peace"]
    },
    {
        id: "casual",
        word: "casual",
        definition: "(adj.) 1. Not planned. 2. Not regular; occasional. 3. Suitable for everyday use; comfortable.",
        exampleSentence: "Several friends got together for a casual meeting after the movie.",
        imageEmoji: "👕",
        category: "Grade 6",
        synonyms: ["informal", "occasional", "relaxed"],
        antonyms: ["formal", "planned", "permanent"]
    },
    {
        id: "constant",
        word: "constant",
        definition: "(adj.) 1. Not changing. 2. Loyal; faithful. 3. Without a pause; unending.",
        exampleSentence: "When I ride my bike, I try to maintain a constant speed.",
        imageEmoji: "⏱️",
        category: "Grade 6",
        synonyms: ["steady", "continuous", "faithful"],
        antonyms: ["changeable", "variable", "fickle"]
    },
    {
        id: "excel",
        word: "excel",
        definition: "(v.) To do well; to be better or greater than others.",
        exampleSentence: "Jackie Robinson excelled as both a fielder and a batter.",
        imageEmoji: "🌟",
        category: "Grade 6",
        synonyms: ["surpass", "outshine", "shine"],
        antonyms: ["fail", "fall behind"]
    },
    {
        id: "exhaust",
        word: "exhaust",
        definition: "(v.) 1. To use up. 2. To tire out. (n.) The waste gases from an engine; also, the system that pumps out such waste gases.",
        exampleSentence: "Lost on the mountain, the climbers exhausted their supplies after two days.",
        imageEmoji: "💨",
        category: "Grade 6",
        synonyms: ["deplete", "tire", "drain"],
        antonyms: ["replenish", "energize", "refresh"]
    },
    {
        id: "hardy",
        word: "hardy",
        definition: "(adj.) Able to survive under bad conditions; tough.",
        exampleSentence: "Sage is a hardy plant that can be left outside during the winter.",
        imageEmoji: "🌵",
        category: "Grade 6",
        synonyms: ["tough", "robust", "sturdy"],
        antonyms: ["weak", "frail", "delicate"]
    },
    {
        id: "mediocre",
        word: "mediocre",
        definition: "(adj.) Of low to medium quality; barely passable.",
        exampleSentence: "Mediocre grades make it difficult to get into a good college.",
        imageEmoji: "😐",
        category: "Grade 6",
        synonyms: ["average", "ordinary", "undistinguished"],
        antonyms: ["outstanding", "superior", "excellent"]
    },
    {
        id: "monotonous",
        word: "monotonous",
        definition: "(adj.) Always the same; not varying; boring. monotony (n.) Lack of variety resulting in boredom.",
        exampleSentence: "Making photocopies is monotonous work.",
        imageEmoji: "🥱",
        category: "Grade 6",
        synonyms: ["boring", "dull", "repetitive"],
        antonyms: ["interesting", "varied", "exciting"]
    },
    {
        id: "originate",
        word: "originate",
        definition: "(v.) To bring or come into being. origin (n.) A beginning or coming into being.",
        exampleSentence: "The custom of sending Valentine cards originated in the 1800s.",
        imageEmoji: "🌱",
        category: "Grade 6",
        synonyms: ["begin", "arise", "start"],
        antonyms: ["end", "terminate", "conclude"]
    },
    {
        id: "punctuate",
        word: "punctuate",
        definition: "(v.) 1. To add marks such as commas and periods to writing to make the meaning clear. 2. To interrupt from time to time. punctuation (n.) The use of marks such as commas and periods in writing.",
        exampleSentence: "Choose the best way to punctuate this sentence.",
        imageEmoji: "🖊️",
        category: "Grade 6",
        synonyms: ["interrupt", "emphasize", "mark"],
        antonyms: []
    },
    {
        id: "ravenous",
        word: "ravenous",
        definition: "(adj.) 1. Very hungry. 2. Eager for whatever satisfies one's needs or wants.",
        exampleSentence: "The skaters were ravenous because they'd skipped lunch.",
        imageEmoji: "🍔",
        category: "Grade 6",
        synonyms: ["starving", "famished", "voracious"],
        antonyms: ["full", "satisfied", "satiated"]
    },
    {
        id: "realistic",
        word: "realistic",
        definition: "(adj.) 1. Closely resembling real life. 2. Aware of things as they are; practical.",
        exampleSentence: "This video game has very realistic race-car sounds.",
        imageEmoji: "🎮",
        category: "Grade 6",
        synonyms: ["practical", "pragmatic", "lifelike"],
        antonyms: ["impractical", "unrealistic", "idealistic"]
    },
    {
        id: "soothe",
        word: "soothe",
        definition: "(v.) 1. To make calm and relaxed. 2. To relieve soreness; to make less painful.",
        exampleSentence: "The principal tried to soothe the angry students by promising to consider their demands.",
        imageEmoji: "😌",
        category: "Grade 6",
        synonyms: ["calm", "comfort", "pacify"],
        antonyms: ["agitate", "upset", "aggravate"]
    },
    {
        id: "stampede",
        word: "stampede",
        definition: "(n.) A sudden rush of animals or people, usually caused by fear. (v.) 1. To take part in a stampede. 2. To cause to rush off in panic.",
        exampleSentence: "A breeze carried the lion's scent to the antelope and began a stampede of the herd.",
        imageEmoji: "🐂",
        category: "Grade 6",
        synonyms: ["rush", "charge", "panic"],
        antonyms: ["retreat", "halt"]
    },
    {
        id: "veteran",
        word: "veteran",
        definition: "(n.) 1. A person who has served in the armed forces. 2. A person with much experience. (adj.) Experienced.",
        exampleSentence: "Veterans in their uniforms marched in the Memorial Day parade.",
        imageEmoji: "🎖️",
        category: "Grade 6",
        synonyms: ["expert", "old hand", "master"],
        antonyms: ["novice", "beginner", "rookie"]
    }
];

export const b6_l7_story_1: Story = {
    id: "b6-l7-s1",
    title: "7A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 7.`,
    wordsIncluded: b6_l7_words.map(w => w.id),
    questions: [
        {
            id: "7a-q1",
            type: "multiple-choice",
            question: "1. (a) a person who has much experience. (c) a sudden rush of frightened animals. (b) A veteran is (d) A brawl is",
            options: ["a-b", "b-a", "b-c", "d-c"],
            correctAnswer: "b-a"
        },
        {
            id: "7a-q2",
            type: "multiple-choice",
            question: "2. (a) A realistic offer is one that (c) A casual offer is one that (b) is made in a joking manner. (d) seems to make a lot of sense.",
            options: ["a-d", "c-b", "a-b", "c-d"],
            correctAnswer: "a-d"
        },
        {
            id: "7a-q3",
            type: "multiple-choice",
            question: "3. (a) A stampede is (c) a rough and noisy fight. (b) a rope used by cowboys. (d) A brawl is",
            options: ["a-c", "d-c", "a-b", "d-b"],
            correctAnswer: "d-c"
        },
        {
            id: "7a-q4",
            type: "multiple-choice",
            question: "4. (a) Monotony is (c) Punctuation is (b) markings that make the meaning (d) a state of very great hunger. of writing clearer.",
            options: ["c-b", "a-d", "a-b", "c-d"],
            correctAnswer: "c-b"
        },
        {
            id: "7a-q5",
            type: "multiple-choice",
            question: "5. (a) To stampede cattle is to (c) To soothe cattle is to (b) cause them to rush off in a panic. (d) put them out to feed on grass.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "a-b"
        },
        {
            id: "7a-q6",
            type: "multiple-choice",
            question: "6. (a) A monotonous inspection (c) is one that is thorough. (b) A casual inspection (d) is one made without much thought.",
            options: ["b-d", "a-c", "b-c", "a-d"],
            correctAnswer: "b-d"
        },
        {
            id: "7a-q7",
            type: "multiple-choice",
            question: "7. (a) To exhaust someone is to (c) forget about that person. (b) help that person relax. (d) To soothe someone is to",
            options: ["d-b", "a-b", "a-c", "d-c"],
            correctAnswer: "d-b"
        },
        {
            id: "7a-q8",
            type: "multiple-choice",
            question: "8. (a) To excel at something is to (c) To originate something is to (b) bring it to a sudden end. (d) do it better than others.",
            options: ["a-d", "c-b", "a-b", "c-d"],
            correctAnswer: "a-d"
        }
    ]
};

export const b6_l7_story_2: Story = {
    id: "b6-l7-s2",
    title: "7B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l7_words.map(w => w.id),
    questions: [
        {
            id: "7b-q1",
            type: "multiple-choice",
            question: "He doesn't seem to be very **aware of how things really are** when he talks about his future plans.",
            options: ["realistic", "casual", "mediocre", "monotonous"],
            correctAnswer: "realistic"
        },
        {
            id: "7b-q2",
            type: "multiple-choice",
            question: "The speech was **interrupted a number of times** by bursts of applause from the audience.",
            options: ["punctuated", "exhausted", "originated", "soothed"],
            correctAnswer: "punctuated"
        },
        {
            id: "7b-q3",
            type: "multiple-choice",
            question: "To spend winters in Alaska you need to be **tough enough to withstand difficult conditions**.",
            options: ["hardy", "casual", "ravenous", "realistic"],
            correctAnswer: "hardy"
        },
        {
            id: "7b-q4",
            type: "multiple-choice",
            question: "The tornado caused a **panic in which everyone rushed** away from the store's windows.",
            options: ["stampede", "brawl", "monotony", "exhaust"],
            correctAnswer: "stampede"
        },
        {
            id: "7b-q5",
            type: "multiple-choice",
            question: "It takes a **person with years of experience** as a chef to run a smoothly functioning restaurant kitchen.",
            options: ["veteran", "mediocre", "hardy", "constant"],
            correctAnswer: "veteran"
        },
        {
            id: "7b-q6",
            type: "multiple-choice",
            question: "After being away for so long, the travelers were **very eager** for news from home.",
            options: ["ravenous", "casual", "hardy", "realistic"],
            correctAnswer: "ravenous"
        },
        {
            id: "7b-q7",
            type: "multiple-choice",
            question: "By the time our supply of firewood was **used up**, warm weather had arrived.",
            options: ["exhausted", "originated", "punctuated", "soothed"],
            correctAnswer: "exhausted"
        },
        {
            id: "7b-q8",
            type: "multiple-choice",
            question: "A hot bath will **ease the soreness of** your aching muscles.",
            options: ["soothe", "exhaust", "punctuate", "excel"],
            correctAnswer: "soothe"
        },
        {
            id: "7b-q9",
            type: "multiple-choice",
            question: "Some teenagers prefer clothes that are **suitable for everyday wear**.",
            options: ["casual", "mediocre", "hardy", "constant"],
            correctAnswer: "casual"
        },
        {
            id: "7b-q10",
            type: "multiple-choice",
            question: "The math homework is **boring because it lacks variety**.",
            options: ["monotonous", "constant", "realistic", "casual"],
            correctAnswer: "monotonous"
        },
        {
            id: "7b-q11",
            type: "multiple-choice",
            question: "Who **first came up with** the idea of growing plants in water?",
            options: ["originated", "exhausted", "punctuated", "stampeded"],
            correctAnswer: "originated"
        },
        {
            id: "7b-q12",
            type: "multiple-choice",
            question: "Once set, the speed of the escalator was **fixed and did not change**.",
            options: ["constant", "monotonous", "casual", "realistic"],
            correctAnswer: "constant"
        }
    ]
};

export const b6_l7_story_3: Story = {
    id: "b6-l7-s3",
    title: "7C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l7_words.map(w => w.id),
    questions: [
        {
            id: "7c-q1",
            type: "multiple-choice",
            question: "1. Which of the following are **casual** clothes?",
            options: ["(a) blue jeans", "(b) an evening gown", "(c) a dark blue suit", "(d) a track suit"],
            correctAnswers: ["(a) blue jeans", "(d) a track suit"]
        },
        {
            id: "7c-q2",
            type: "multiple-choice",
            question: "2. Which of the following help musicians **excel**?",
            options: ["(a) watching television", "(b) practicing every day", "(c) listening to their teachers", "(d) having innate ability"],
            correctAnswers: ["(b) practicing every day", "(c) listening to their teachers", "(d) having innate ability"]
        },
        {
            id: "7c-q3",
            type: "multiple-choice",
            question: "3. Which of the following might you say about an idea you thought was **mediocre**?",
            options: ["(a) 'This is an okay idea.'", "(b) 'This is a very bad idea.'", "(c) 'This is a fantastic idea!'", "(d) 'This is an impressive idea!'"],
            correctAnswers: ["(a) 'This is an okay idea.'"]
        },
        {
            id: "7c-q4",
            type: "multiple-choice",
            question: "4. Which of the following would a **ravenous** person want to do?",
            options: ["(a) eat", "(b) relax", "(c) sleep", "(d) exercise"],
            correctAnswers: ["(a) eat"]
        },
        {
            id: "7c-q5",
            type: "multiple-choice",
            question: "5. Which of the following could **stampede**?",
            options: ["(a) ants", "(b) a herd of cows", "(c) a horde of shoppers", "(d) a row of trees"],
            correctAnswers: ["(b) a herd of cows", "(c) a horde of shoppers"]
        },
        {
            id: "7c-q6",
            type: "multiple-choice",
            question: "6. Which of the following **punctuate** a piece of writing?",
            options: ["(a) sentences", "(b) commas", "(c) adjectives", "(d) question marks"],
            correctAnswers: ["(b) commas", "(d) question marks"]
        },
        {
            id: "7c-q7",
            type: "multiple-choice",
            question: "7. Which of the following could be **monotonous**?",
            options: ["(a) a voice", "(b) a car trip", "(c) a nightmare", "(d) a triumph"],
            correctAnswers: ["(a) a voice", "(b) a car trip"]
        },
        {
            id: "7c-q8",
            type: "multiple-choice",
            question: "8. Which of the following might take part in a **brawl**?",
            options: ["(a) newborns", "(b) hockey players", "(c) a herd of cattle", "(d) demonstrators at a rally"],
            correctAnswers: ["(b) hockey players", "(d) demonstrators at a rally"]
        }
    ]
};

export const b6_l7_story_4: Story = {
    id: "b6-l7-s4",
    title: "7D Word Study: Word Parts",
    type: "exercise",
    content: `Words are like puzzles made of pieces! 🧩

Use the **clues** in parentheses to help you find the hidden word. 
*   **Prefixes** come at the start (like *re-* in *redo*).
*   **Roots** are the main part of the word.

Let's build some words! 🏗️`,
    wordsIncluded: [],
    questions: [
        {
            id: "7d-q1",
            type: "fill-in-the-blank",
            question: "1. To ________ to something is to give along with others. (The word is formed from the prefix *con-*, which means 'with,' together with a root formed from the Latin word *tribuere*, which means 'to grant or give.')",
            correctAnswer: "contribute"
        },
        {
            id: "7d-q2",
            type: "fill-in-the-blank",
            question: "2. A(n) ________ speaker is one who reaches out and moves an audience with the power of spoken language. (The word is formed from the Latin prefix *e-*, which means 'out,' together with a root formed from the Latin word *loqui*, which means 'to speak.')",
            correctAnswer: "eloquent"
        },
        {
            id: "7d-q3",
            type: "fill-in-the-blank",
            question: "3. ________ are people who leave their homeland and settle in another country. (The word is formed from the prefix *im-*, which means 'in,' together with a root formed from the Latin word *migrare*, which means 'to depart.')",
            correctAnswer: "immigrants"
        },
        {
            id: "7d-q4",
            type: "fill-in-the-blank",
            question: "4. To ________ different elements is to bring them together into a whole. (The word is formed from the Latin word *integrare*, which means 'to make whole.')",
            correctAnswer: "integrate"
        },
        {
            id: "7d-q5",
            type: "fill-in-the-blank",
            question: "5. A(n) ________ story is one that is hard to believe. (The word is formed from the Latin prefix *in-*, which means 'not,' together with a root formed from the Latin word *credere*, which means 'to believe.')",
            correctAnswer: "incredible"
        },
        {
            id: "7d-q6",
            type: "fill-in-the-blank",
            question: "6. ________ qualities are those that a person is born with. (The word is formed from the Latin prefix *in-*, which means 'in' as well as 'not,' together with a root formed from the Latin word *natus*, which means 'born.')",
            correctAnswer: "innate"
        },
        {
            id: "7d-q7",
            type: "fill-in-the-blank",
            question: "7. The ________ Court is the highest court in the land. (The word is formed from the Latin word *supremus*, which means 'highest.')",
            correctAnswer: "supreme"
        },
        {
            id: "7d-q8",
            type: "fill-in-the-blank",
            question: "8. ________ conditions are those unfit for living because of dirt and other unhealthy conditions. (The word is formed from the Latin word *squalus*, which means 'filthy.')",
            correctAnswer: "squalid"
        },
        {
            id: "7d-q9",
            type: "fill-in-the-blank",
            question: "9. A(n) ________ is a decision reached at the end of a trial. (The word is formed from the roots of two Latin words, *verus*, which means 'truth,' and *dicere*, which means 'to say.')",
            correctAnswer: "verdict"
        },
        {
            id: "7d-q10",
            type: "fill-in-the-blank",
            question: "10. ________ animals live near or in people's homes. (The word is formed from the Latin *domus*, which means 'home.')",
            correctAnswer: "domesticated"
        }
    ]
};

export const b6_l7_story_passage: Story = {
    id: "b6-l7-passage",
    title: "Reading Passage: Home, Home on the Range",
    type: "non-fiction",
    content: `
People may think they know all about the cowboys of the Wild West from watching westerns. But Hollywood movies do not give a very **realistic** picture of the life cowboys really led. Cowboy movies are **punctuated** throughout by gunfire, but real cowboys were mostly **mediocre** shots. Cowboys seldom had reason to draw their guns; they carried them mostly for display. However, they did **excel** at riding and roping steers. These were the essential skills for men whose job was handling cattle.

Although you would not know it from the movies, about a third of all cowboys were African American or Latino. In fact, the first cowboys came from Mexico. They were called *vaqueros*, from the Spanish word *vaca*, which means "cow." The *vaqueros* contributed to the English language many of the words we associate with the Wild West, including *sombrero*, *mustang*, and *rodeo*.

Following the end of the Civil War in 1865, the *vaqueros'* numbers swelled with **veterans** who headed west to work on cattle ranches. Many were African Americans who found a greater degree of freedom in lands that were just opening up to settlement. The rodeo offered them an opportunity to prove their worth. One of the earliest performers was an African American cowboy named Nat Love. Love was born in Tennessee as an enslaved person in 1854. As a boy of fifteen, he worked as a trail hand out of Dodge City. There he learned the riding and roping skills that made him a star of the rodeo. Perhaps the most famous rodeo performer was Bill Pickett, star of the Miller Brothers' Wild West Show. Pickett was the first African American admitted to the National Cowboy Hall of Fame.

Westerns usually show the cowboys in town having a good time. But the lives of the real cowboys were quite **monotonous**. Days were spent mostly working on the range. At that time, cowboys drove the cattle along trails that **originated** in Texas, where most of the cattle ranches were located. The trails ended in Kansas City, Abilene, or Dodge City. From there the cattle were shipped east on the recently built railroads.

Cowboys found **casual** employment as trail hands for these great cattle drives. A drive covered hundreds of miles and lasted up to three months. Cowboys were in the saddle from sunup to sundown as they herded the moving cattle. They kept a string of mustangs, the **hardy** wild ponies that roamed the plains, and changed to fresh mounts several times a day. Working hard in the open air made the cowboys **ravenous**. When the evening sun went down, they were too **exhausted** to do anything but eat and sleep. Cowboys took turns during the night keeping a **constant** watch over the cattle. Whenever they seemed restless, the cowboys would **soothe** them by singing softly. Any loud noise or sudden movement could panic the herd and start a **stampede**. Then several thousand frantic cattle would suddenly charge off into the darkness with the hastily awakened cowboys in pursuit.

When the hands were paid at the end of the trail, they headed into town to spend their money. Those were the times when **brawls** might erupt. It was then that a cowboy's life was most likely to resemble what we see in the movies.
    `,
    wordsIncluded: b6_l7_words.map(w => w.id),
    questions: [
        {
            id: "b6-l7-p-q1",
            type: "multiple-choice",
            question: "What is the meaning of **exhausted** as it is used in the passage?",
            options: [
                "It means very tired.",
                "It means used up.",
                "It means waste gases.",
                "It means thorough."
            ],
            correctAnswer: "It means very tired."
        },
        {
            id: "b6-l7-p-q2",
            type: "multiple-choice",
            question: "Why did cowboys on the trail need to be especially alert during a thunderstorm?",
            options: [
                "Because loud noises could start a stampede.",
                "Because the cattle might get sick.",
                "Because they were afraid of lightning.",
                "Because they wanted to collect water."
            ],
            correctAnswer: "Because loud noises could start a stampede."
        },
        {
            id: "b6-l7-p-q3",
            type: "multiple-choice",
            question: "How might western movies be made more **realistic**?",
            options: [
                "By showing more African American and Latino cowboys, and showing that their lives were mostly monotonous work.",
                "By adding more gunfights.",
                "By showing aliens.",
                "By using modern music."
            ],
            correctAnswer: "By showing more African American and Latino cowboys, and showing that their lives were mostly monotonous work."
        },
        {
            id: "b6-l7-p-q4",
            type: "multiple-choice",
            question: "When do you think a cowboy might find himself locked up in the town jail?",
            options: [
                "After a brawl in town.",
                "After saving the town.",
                "After winning a rodeo.",
                "After buying supplies."
            ],
            correctAnswer: "After a brawl in town."
        },
        {
            id: "b6-l7-p-q5",
            type: "multiple-choice",
            question: "Why were mustangs especially suitable for work on the cattle drives?",
            options: [
                "They were hardy wild ponies.",
                "They were very fast.",
                "They were easy to catch.",
                "They were tame."
            ],
            correctAnswer: "They were hardy wild ponies."
        },
        {
            id: "b6-l7-p-q6",
            type: "multiple-choice",
            question: "What is the meaning of **punctuate** as it is used in the passage?",
            options: [
                "It means interrupted intervals (by gunfire).",
                "It means grammar marks.",
                "It means to end.",
                "It means to start."
            ],
            correctAnswer: "It means interrupted intervals (by gunfire)."
        },
        {
            id: "b6-l7-p-q7",
            type: "multiple-choice",
            question: "Why do you think movies don't give an accurate picture of cowboys' lives?",
            options: [
                "Real cowboy life was monotonous, which might be boring to watch; movies focus on action.",
                "Movies are too short.",
                "Directors don't like cowboys.",
                "Real cowboys didn't exist."
            ],
            correctAnswer: "Real cowboy life was monotonous, which might be boring to watch; movies focus on action."
        },
        {
            id: "b6-l7-p-q8",
            type: "multiple-choice",
            question: "Were most cowboys good shooters?",
            options: [
                "No, they were mostly mediocre shots.",
                "Yes, they were excellent shots.",
                "They never carried guns.",
                "Only the sheriffs were good shots."
            ],
            correctAnswer: "No, they were mostly mediocre shots."
        },
        {
            id: "b6-l7-p-q9",
            type: "multiple-choice",
            question: "What is the meaning of **casual** as it is used in the passage?",
            options: [
                "It means not regular or permanent (employment).",
                "It means relaxed clothing.",
                "It means serious.",
                "It means dangerous."
            ],
            correctAnswer: "It means not regular or permanent (employment)."
        },
        {
            id: "b6-l7-p-q10",
            type: "multiple-choice",
            question: "What is the **origin** of *sombrero* and *mustang*?",
            options: [
                "They come from Spanish (contributed by vaqueros).",
                "They come from Native American languages.",
                "They come from French.",
                "They are made-up words."
            ],
            correctAnswer: "They come from Spanish (contributed by vaqueros)."
        },
        {
            id: "b6-l7-p-q11",
            type: "multiple-choice",
            question: "Why do you think roping steers was a popular feature of the rodeo?",
            options: [
                "Because cowboys excelled at it; it was an essential skill.",
                "Because it was easy.",
                "Because it was safe.",
                "Because the cows liked it."
            ],
            correctAnswer: "Because cowboys excelled at it; it was an essential skill."
        },
        {
            id: "b6-l7-p-q12",
            type: "multiple-choice",
            question: "What is the meaning of **soothe** as it is used in the passage?",
            options: [
                "It means to calm or relax (the cattle).",
                "It means to scare.",
                "It means to feed.",
                "It means to wash."
            ],
            correctAnswer: "It means to calm or relax (the cattle)."
        },
        {
            id: "b6-l7-p-q13",
            type: "multiple-choice",
            question: "What do you think would be a welcome sight to **ravenous** cowboys?",
            options: [
                "Food or a meal.",
                "A gun.",
                "A horse.",
                "A thunderstorm."
            ],
            correctAnswer: "Food or a meal."
        },
        {
            id: "b6-l7-p-q14",
            type: "multiple-choice",
            question: "How did the end of the Civil War affect the Wild West?",
            options: [
                "Veterans headed west to work on cattle ranches, swelling the numbers of cowboys.",
                "Cattle ranching stopped.",
                "The army took over the ranches.",
                "Most cowboys moved east."
            ],
            correctAnswer: "Veterans headed west to work on cattle ranches, swelling the numbers of cowboys."
        },
        {
            id: "b6-l7-p-q15",
            type: "multiple-choice",
            question: "What is the meaning of **constant** as it is used in the passage?",
            options: [
                "It means unending or continuous (watch).",
                "It means sometimes.",
                "It means bright.",
                "It means loud."
            ],
            correctAnswer: "It means unending or continuous (watch)."
        }
    ]
};

export const b6_l7_story_facts: Story = {
    id: "b6-l7-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The noun form of the verb **exhaust** is *exhaustion*. (Several runners collapsed from *exhaustion* at the end of the race.) The adjective form is **exhausted**. (The *exhausted* rowers collapsed over their oars as they crossed the finish line.) A different adjective formed from this word is *exhaustive*, which means "thorough" or "complete." (After an *exhaustive* search, the missing book was found under the sofa.)

* *Medi* means "middle" or "halfway" in Latin, and *ocris* means "mountain." These two words are combined to form the adjective **mediocre**, which means "halfway up the mountain." To be *mediocre* is to be neither very good nor very bad, neither at the top nor at the bottom.

* Don't confuse **veteran** with *veterinarian*, a person qualified to give medical treatment to animals. Both words are sometimes shortened to *vet*.
    `,
    wordsIncluded: ["exhaust", "mediocre", "veteran"],
    questions: []
};
