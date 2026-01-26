import { Story, VocabularyWord } from "./types";

export const b4_l16_words: VocabularyWord[] = [
    {
        id: "apt",
        word: "apt",
        definition: "(adj.) 1. Well suited; fitting; appropriate. 2. Likely or almost certain.",
        exampleSentence: "Marta's skill at repairing things earned her the apt nickname of \"Ms. Fix-It.\"",
        imageEmoji: "🧩",
        category: "Grade 4"
    },
    {
        id: "blossom",
        word: "blossom",
        definition: "(n.) A flower. (v.) 1. To come into bloom. 2. To develop.",
        exampleSentence: "The white blossom stands out against the green foliage.",
        imageEmoji: "🌸",
        category: "Grade 4"
    },
    {
        id: "bough",
        word: "bough",
        definition: "(n.) A large branch or limb of a tree.",
        exampleSentence: "The boughs of the apple tree were heavy with fruit.",
        imageEmoji: "🌳",
        category: "Grade 4"
    },
    {
        id: "content",
        word: "content",
        definition: "(adj.) Happy with what one has; satisfied. (n.) contentment: A state of being satisfied and at peace.",
        exampleSentence: "Give me a good book and a comfortable armchair and I am content.",
        imageEmoji: "😌",
        category: "Grade 4"
    },
    {
        id: "detest",
        word: "detest",
        definition: "(v.) To dislike strongly; to hate. (adj.) detestable: Causing or deserving strong dislike.",
        exampleSentence: "Many people think they detest spinach until they try it.",
        imageEmoji: "😖",
        category: "Grade 4"
    },
    {
        id: "dusk",
        word: "dusk",
        definition: "(n.) The time at the end of the day just before dark.",
        exampleSentence: "The streetlights go on at dusk.",
        imageEmoji: "🌇",
        category: "Grade 4"
    },
    {
        id: "extinguish",
        word: "extinguish",
        definition: "(v.) To put out, as a fire or a light.",
        exampleSentence: "The sign at the campsite said, \"Before leaving, make sure you extinguish your campfire.\"",
        imageEmoji: "🧯",
        category: "Grade 4"
    },
    {
        id: "familiar",
        word: "familiar",
        definition: "(adj.) 1. Often seen or experienced; known. 2. Having a good knowledge of.",
        exampleSentence: "I was happy to see a familiar face in the crowd.",
        imageEmoji: "👋",
        category: "Grade 4"
    },
    {
        id: "obtain",
        word: "obtain",
        definition: "(v.) To gain or get by making an effort.",
        exampleSentence: "We were lucky to obtain tickets for the jazz concert because they sold out very quickly.",
        imageEmoji: "🎟️",
        category: "Grade 4"
    },
    {
        id: "orchard",
        word: "orchard",
        definition: "(n.) A place where fruit trees grow.",
        exampleSentence: "Every fall my brother and I go to an orchard where you can pick your own apples.",
        imageEmoji: "🍎",
        category: "Grade 4"
    },
    {
        id: "practice",
        word: "practice",
        definition: "(v.) 1. To say or do over and over in order to get better at something. 2. To do; carry on, perform. 3. To work at as a profession. (n.) 1. A repeated action or usual way of doing something. 2. The work of a profession.",
        exampleSentence: "If you practice Spanish every day, you will be able to speak with all your friends.",
        imageEmoji: "🎻",
        category: "Grade 4"
    },
    {
        id: "prune",
        word: "prune",
        definition: "(v.) To cut off branches. (n.) A dried plum.",
        exampleSentence: "We had to prune the shrubs so we could see out the window.",
        imageEmoji: "✂️",
        category: "Grade 4"
    },
    {
        id: "stout",
        word: "stout",
        definition: "(adj.) 1. Heavily built; thickset. 2. Strong; not easily bent or broken.",
        exampleSentence: "He used to be thin, but he grew stout as he got older.",
        imageEmoji: "💪",
        category: "Grade 4"
    },
    {
        id: "threadbare",
        word: "threadbare",
        definition: "(adj.) Shabby and worn out.",
        exampleSentence: "The threadbare blankets on the bed failed to keep us warm during the night.",
        imageEmoji: "🧵",
        category: "Grade 4"
    },
    {
        id: "wander",
        word: "wander",
        definition: "(v.) 1. To go from place to place with no plan or purpose in mind. 2. To slip easily off the subject; to fail to work in a normal way.",
        exampleSentence: "We wandered around downtown, waiting for the post office to open.",
        imageEmoji: "🚶",
        category: "Grade 4"
    }
];

export const b4_l16_story_1: Story = {
    id: "b4-l16-s1",
    title: "16A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select Correct (C). If the word is used incorrectly, select Incorrect (I).`,
    wordsIncluded: b4_l16_words.map(w => w.id),
    questions: [
        {
            id: "16a-q1",
            type: "multiple-choice",
            question: "1. (a) The new **apt** for the phone is now online.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // App
        },
        {
            id: "16a-q1b",
            type: "multiple-choice",
            question: "1. (b) The first cars were **apt** to break down and often needed repairs.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q1c",
            type: "multiple-choice",
            question: "1. (c) Given a choice, I **apt** to go to the beach.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // opt
        },
        {
            id: "16a-q1d",
            type: "multiple-choice",
            question: "1. (d) \"Teddy Bear\" was an **apt** nickname for my sweet friend Lou.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q2",
            type: "multiple-choice",
            question: "2. (a) It was his **practice** to be home after school by four.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q2b",
            type: "multiple-choice",
            question: "2. (b) The **practice** of trumpets filled the air.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // sound/music?
        },
        {
            id: "16a-q2c",
            type: "multiple-choice",
            question: "2. (c) Abraham Lincoln **practiced** law beginning in 1836.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q2d",
            type: "multiple-choice",
            question: "2. (d) Daily **practice** in the pool made Chandra an excellent swimmer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q3",
            type: "multiple-choice",
            question: "3. (a) He **blossomed** when he began to make some friends.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q3b",
            type: "multiple-choice",
            question: "3. (b) Her **blossom** told her never to be late again.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // boss?
        },
        {
            id: "16a-q3c",
            type: "multiple-choice",
            question: "3. (c) The **blossoms** fall from the trees and cover the ground.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q3d",
            type: "multiple-choice",
            question: "3. (d) \"Stay true\" is a good **blossom** to live by.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // motto?
        },
        {
            id: "16a-q4",
            type: "multiple-choice",
            question: "4. (a) I was not **familiar** with this part of town.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q4b",
            type: "multiple-choice",
            question: "4. (b) He quoted the **familiar** line, \"To be or not to be.\"",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q4c",
            type: "multiple-choice",
            question: "4. (c) Her face is **familiar**, but I don't remember her name.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q4d",
            type: "multiple-choice",
            question: "4. (d) The **familiar** ate dinner together every night.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // family
        },
        {
            id: "16a-q5",
            type: "multiple-choice",
            question: "5. (a) Corey **extinguished** himself during the game.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // distinguished
        },
        {
            id: "16a-q5b",
            type: "multiple-choice",
            question: "5. (b) How do you **extinguish** a moth from a butterfly?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // distinguish
        },
        {
            id: "16a-q5c",
            type: "multiple-choice",
            question: "5. (c) The news **extinguished** any hope we had for a new playground.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q5d",
            type: "multiple-choice",
            question: "5. (d) The sudden rain **extinguished** our campfire in no time.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q6",
            type: "multiple-choice",
            question: "6. (a) The principal **obtained** us from the classroom and brought us to her office.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // detained? removed?
        },
        {
            id: "16a-q6b",
            type: "multiple-choice",
            question: "6. (b) How many bananas are **obtained** in a pound?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // contained
        },
        {
            id: "16a-q6c",
            type: "multiple-choice",
            question: "6. (c) We were lucky to **obtain** movie tickets for half price.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q6d",
            type: "multiple-choice",
            question: "6. (d) Sheralyn **obtained** the most votes for class president.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q7",
            type: "multiple-choice",
            question: "7. (a) The Great Pyramid is one of the seven **wanders** of the world.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // wonders
        },
        {
            id: "16a-q7b",
            type: "multiple-choice",
            question: "7. (b) I **wandered** alone through the woods to the stream.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q7c",
            type: "multiple-choice",
            question: "7. (c) The hiker **wandered** over much of South Africa.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q7d",
            type: "multiple-choice",
            question: "7. (d) Wave the **wander** to get her attention.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // wand?
        },
        {
            id: "16a-q8",
            type: "multiple-choice",
            question: "8. (a) A **stout** got into the house through a hole in the basement window.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // stoat? scout?
        },
        {
            id: "16a-q8b",
            type: "multiple-choice",
            question: "8. (b) If we all give a **stout** effort, we will win.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q8c",
            type: "multiple-choice",
            question: "8. (c) Krishna got **stout** support from his father.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q8d",
            type: "multiple-choice",
            question: "8. (d) We wondered if the walls were **stout** enough to support the roof.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q9",
            type: "multiple-choice",
            question: "9. (a) The class was **content** with the new rules.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q9b",
            type: "multiple-choice",
            question: "9. (b) **Contentment** showed on the faces of the children.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q9c",
            type: "multiple-choice",
            question: "9. (c) Are you **content** with the portion you received?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q9d",
            type: "multiple-choice",
            question: "9. (d) Each **content** rises at dawn.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // continent?
        },
        {
            id: "16a-q10",
            type: "multiple-choice",
            question: "10. (a) The car part was **detested** twice and failed both times.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // tested
        },
        {
            id: "16a-q10b",
            type: "multiple-choice",
            question: "10. (b) The problem was dealt with as soon as it was **detested**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // detected
        },
        {
            id: "16a-q10c",
            type: "multiple-choice",
            question: "10. (c) Dahlia **detests** spinach and refuses to eat it.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "16a-q10d",
            type: "multiple-choice",
            question: "10. (d) My parents say lying and cheating are **detestable**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        }
    ]
};

export const b4_l16_story_2: Story = {
    id: "b4-l16-s2",
    title: "16B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l16_words.map(w => w.id),
    questions: [
        {
            id: "16b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **night**?",
            options: ["(a) melancholy", "(b) dusk", "(c) misery", "(d) bough"],
            correctAnswer: "(b) dusk"
        },
        {
            id: "16b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **weak**?",
            options: ["(a) fragile", "(b) dusk", "(c) frail", "(d) fringe"],
            correctAnswers: ["(a) fragile", "(c) frail"]
        },
        {
            id: "16b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **apple tree**?",
            options: ["(a) orchard", "(b) blossom", "(c) meadow", "(d) fringe"],
            correctAnswers: ["(a) orchard", "(b) blossom"] // Meadow maybe, but orchard is better. I'll include blossom.
            // Bough is also apple tree part but not listed.
            // Wait, (d) fringe? No. (c) meadow? Trees can be in a meadow. But orchard is for fruit trees.
        },
        {
            id: "16b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **give up**?",
            options: ["(a) surrender", "(b) wander", "(c) yield", "(d) submit"],
            correctAnswers: ["(a) surrender", "(c) yield", "(d) submit"]
        },
        {
            id: "16b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **worn out**?",
            options: ["(a) apt", "(b) threadbare", "(c) obstinate", "(d) stout"],
            correctAnswer: "(b) threadbare"
        },
        {
            id: "16b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **not allowed**?",
            options: ["(a) ban", "(b) caress", "(c) symptom", "(d) forbid"],
            correctAnswers: ["(a) ban", "(d) forbid"]
        },
        {
            id: "16b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **satisfied**?",
            options: ["(a) melancholy", "(b) content", "(c) stout", "(d) furious"],
            correctAnswer: "(b) content"
        },
        {
            id: "16b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **roam**?",
            options: ["(a) prune", "(b) wander", "(c) detest", "(d) obtain"],
            correctAnswer: "(b) wander"
        },
        {
            id: "16b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **strong**?",
            options: ["(a) frustrated", "(b) familiar", "(c) threadbare", "(d) stout"],
            correctAnswer: "(d) stout"
        },
        {
            id: "16b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **put out**?",
            options: ["(a) prune", "(b) extinguish", "(c) detest", "(d) plead"],
            correctAnswer: "(b) extinguish"
        }
    ]
};

export const b4_l16_story_3: Story = {
    id: "b4-l16-s3",
    title: "16C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l16_words.map(w => w.id),
    questions: [
        {
            id: "16c-q1",
            type: "multiple-choice",
            question: "1. An **apt**",
            options: [
                "(a) nickname for someone who wins the lottery is \"Lucky.\"",
                "(b) gesture is a soft one.",
                "(c) remark is one that seems just right.",
                "(d) animal, such as a dog, makes a good pet."
            ],
            correctAnswers: ["(a) nickname for someone who wins the lottery is \"Lucky.\"", "(c) remark is one that seems just right."]
        },
        {
            id: "16c-q2",
            type: "multiple-choice",
            question: "2. His **threadbare**",
            options: [
                "(a) kitten was born yesterday.",
                "(b) ideas were not interesting.",
                "(c) coat had many rips and holes in it.",
                "(d) oatmeal was very delicious."
            ],
            correctAnswer: "(c) coat had many rips and holes in it."
        },
        {
            id: "16c-q3",
            type: "multiple-choice",
            question: "3. You should be **pruning**",
            options: [
                "(a) the bathroom every week.",
                "(b) the fruit trees every year.",
                "(c) your words carefully before you speak.",
                "(d) your voice before you give your recital."
            ],
            correctAnswer: "(b) the fruit trees every year."
        },
        {
            id: "16c-q4",
            type: "multiple-choice",
            question: "4. Try to keep **practicing**",
            options: [
                "(a) your speech every day to help you remember it.",
                "(b) your juggling so you can get good at it.",
                "(c) if you want to be the best.",
                "(d) the air so you can breathe more easily."
            ],
            correctAnswers: ["(a) your speech every day to help you remember it.", "(b) your juggling so you can get good at it.", "(c) if you want to be the best."]
        },
        {
            id: "16c-q5",
            type: "multiple-choice",
            question: "5. **Dusk**",
            options: [
                "(a) was worth more than gold to the traders.",
                "(b) came early during the winter months.",
                "(c) storms covered everything with sand.",
                "(d) is when bats start to come out."
            ],
            correctAnswers: ["(b) came early during the winter months.", "(d) is when bats start to come out."]
        },
        {
            id: "16c-q6",
            type: "multiple-choice",
            question: "6. The **bough**",
            options: [
                "(a) of the old oak held the children's swing.",
                "(b) held dozens of apples.",
                "(c) and arrow was one of the earliest weapons.",
                "(d) in the child's hair had come loose."
            ],
            correctAnswers: ["(a) of the old oak held the children's swing.", "(b) held dozens of apples."]
        },
        {
            id: "16c-q7",
            type: "multiple-choice",
            question: "7. There is a **familiarity**",
            options: [
                "(a) about the friendly way she speaks to everyone.",
                "(b) on the stove in case we get hungry.",
                "(c) hidden under the dirty rug.",
                "(d) between them that comes from having known each other for many years."
            ],
            correctAnswers: ["(a) about the friendly way she speaks to everyone.", "(d) between them that comes from having known each other for many years."]
        },
        {
            id: "16c-q8",
            type: "multiple-choice",
            question: "8. You can **obtain**",
            options: [
                "(a) from taking the test if you have a good reason.",
                "(b) relief from a headache by lying down and closing your eyes.",
                "(c) the memory of it by saying it over and over.",
                "(d) the ball if you look under the bed."
            ],
            correctAnswers: ["(b) relief from a headache by lying down and closing your eyes.", "(d) the ball if you look under the bed."]
        }
    ]
};

export const b4_l16_story_4: Story = {
    id: "b4-l16-s4",
    title: "16D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l16_words.map(w => w.id),
    questions: [
        {
            id: "16d-q1",
            type: "multiple-choice",
            question: "1. One thing I **detest** is",
            options: ["a bully who picks on smaller kids", "going to the movies", "eating pizza", "playing with my friends"],
            correctAnswer: "a bully who picks on smaller kids"
        },
        {
            id: "16d-q2",
            type: "multiple-choice",
            question: "2. At **dusk**, the sun",
            options: ["sets and the sky gets dark", "rises in the east", "is high in the sky", "shines brightly"],
            correctAnswer: "sets and the sky gets dark"
        },
        {
            id: "16d-q3",
            type: "multiple-choice",
            question: "3. I would like to **obtain**",
            options: ["a college degree someday", "a cold", "a bad grade", "nothing at all"],
            correctAnswer: "a college degree someday"
        },
        {
            id: "16d-q4",
            type: "multiple-choice",
            question: "4. I need to **practice**",
            options: ["my piano scales before the recital", "sleeping", "eating lunch", "breathing"],
            correctAnswer: "my piano scales before the recital"
        },
        {
            id: "16d-q5",
            type: "multiple-choice",
            question: "5. One way to **extinguish** a candle flame is",
            options: ["to blow on it", "to light it", "to watch it burn", "to put it in the sun"],
            correctAnswer: "to blow on it"
        },
        {
            id: "16d-q6",
            type: "multiple-choice",
            question: "6. In an **orchard** you might find",
            options: ["rows of peach trees", "a herd of cows", "a sandy beach", "a skyscraper"],
            correctAnswer: "rows of peach trees"
        },
        {
            id: "16d-q7",
            type: "multiple-choice",
            question: "7. A food that is **familiar** to me is",
            options: ["macaroni and cheese", "shark fin soup", "fried scorpion", "pickled jellyfish"],
            correctAnswer: "macaroni and cheese"
        },
        {
            id: "16d-q8",
            type: "multiple-choice",
            question: "8. To **wander** means to",
            options: ["walk around without a specific goal", "run very fast", "sit still", "march in a line"],
            correctAnswer: "walk around without a specific goal"
        },
        {
            id: "16d-q9",
            type: "multiple-choice",
            question: "9. It **concerns** me that",
            options: ["our planet is getting warmer", "I have too much free time", "ice cream is delicious", "birds can fly"],
            correctAnswer: "our planet is getting warmer"
        },
        {
            id: "16d-q10",
            type: "multiple-choice",
            question: "10. If a man is **stout**, that means he is",
            options: ["heavily built and strong", "very thin and weak", "tall and lanky", "bald and short"],
            correctAnswer: "heavily built and strong"
        }
    ]
};

export const b4_l16_story_5: Story = {
    id: "b4-l16-s5",
    title: "Reading Passage: The Story of Johnny Appleseed",
    type: "non-fiction",
    content: `
In the late 1700s, most Americans had never tasted an apple. That's because very few apple trees grew outside of New England. A man named John Chapman did more than anyone else to change that. He enjoyed sinking his teeth into a sweet, juicy apple and wanted to share his enjoyment with others. When he traveled, it was his **practice** to take a bag of apple seeds with him. For forty years, Chapman **wandered** through Ohio, Indiana, and western Pennsylvania. As he went along, he planted apple trees.

Chapman **obtained** the seeds from New England cider mills after the apples had been pressed for cider. Over the years, apple **orchards** began growing in many of the places he had visited. From time to time, he returned to them. He would **prune** the trees and make sure they stayed healthy.

This unusual man was born in Leominster, Massachusetts. He began his travels in 1797, when he was in his early twenties. When he needed money, he knew how to get it. Just down the road, someone would give him work and pay him a dollar or two. Chapman spent most days on the road. In his hand was a **stout** walking stick cut from an apple tree. On his head was a tall, black hat. At **dusk**, he looked for a place to spend the night. If there was no house with a room to offer him nearby, he was **content** to sleep under the stars. He had few needs, and it didn't bother him that his clothes were **threadbare**.

John Chapman **detested** killing of any kind. For that reason, he refused to eat meat. Once he even **extinguished** a campfire because mosquitoes were flying into the flames and dying. He had no fear of wild animals either. The animals, in turn, seemed to sense that he would do them no harm. In one of the many stories told about Chapman, he spent the night in the company of a friendly bear.

When he returned to places he had visited, Chapman was greeted as an old friend. He loved to come back in the spring. It was wonderful to see apple trees he had planted years before full of pink and white **blossoms**. But his greatest pleasure was to return in the fall when their **boughs** were weighed down with apples. Over the years he became a **familiar** sight to the people living on the farms and in the small towns of the Ohio River Valley. They gave him the **apt** name we know him by today—Johnny Appleseed.
    `,
    wordsIncluded: b4_l16_words.map(w => w.id),
    questions: []
};

export const b4_l16_story_6: Story = {
    id: "b4-l16-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* In Lesson 10, you learned that the word *orphan* comes from an old Sanskrit word. Another word that comes from this same language is **apt**. The Sanskrit word *apta* means "suitable" or "fitting." An **apt** remark is one that is a suitable or fitting thing to say.

* As an adjective, **content** means "satisfied." As a noun, it means "the amount contained." Then it is pronounced *con' tent*. (Don't drink water with a high lead *content*.) The plural form, *contents*, means "all that is contained." (The bag spilled its *contents* onto the floor.)
`,
    wordsIncluded: ["apt", "content"],
    questions: []
};
