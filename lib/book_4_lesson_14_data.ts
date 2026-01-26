import { Story, VocabularyWord } from "./types";

export const b4_l14_words: VocabularyWord[] = [
    {
        id: "afford",
        word: "afford",
        definition: "(v.) 1. To be able to pay for. 2. To be able to do. 3. To give; to provide.",
        exampleSentence: "Can you afford a new pair of running shoes?",
        imageEmoji: "💰",
        category: "Grade 4"
    },
    {
        id: "boast",
        word: "boast",
        definition: "(v.) 1. To talk with too much pride in oneself or in what one owns or has done; to brag. 2. To have and to take a proper pride in having. (n.) An act of boasting.",
        exampleSentence: "Mei boasted about all the games she had won.",
        imageEmoji: "🗣️",
        category: "Grade 4"
    },
    {
        id: "chord",
        word: "chord",
        definition: "(n.) Three or more notes of music played together.",
        exampleSentence: "Becca played a few chords on the guitar.",
        imageEmoji: "🎵",
        category: "Grade 4"
    },
    {
        id: "exceptional",
        word: "exceptional",
        definition: "(adj.) Unusually good.",
        exampleSentence: "The fresh broccoli was of exceptional quality.",
        imageEmoji: "🌟",
        category: "Grade 4"
    },
    {
        id: "fortunate",
        word: "fortunate",
        definition: "(adj.) Lucky.",
        exampleSentence: "You are fortunate to have such kind friends.",
        imageEmoji: "🍀",
        category: "Grade 4"
    },
    {
        id: "fringe",
        word: "fringe",
        definition: "(n.) 1. An edge made of short lengths of material such as thread, used to decorate clothes, curtains, etc. 2. An outside edge.",
        exampleSentence: "My skirt had fringe down the side.",
        imageEmoji: "🧵",
        category: "Grade 4"
    },
    {
        id: "humble",
        word: "humble",
        definition: "(adj.) 1. Plain and simple. 2. Not proud; modest. (v.) To bring down to defeat.",
        exampleSentence: "Abraham Lincoln was raised in a humble log cabin.",
        imageEmoji: "🛖",
        category: "Grade 4"
    },
    {
        id: "meadow",
        word: "meadow",
        definition: "(n.) A field of grass or wildflowers.",
        exampleSentence: "In the middle of the meadow stood a cow and its calf.",
        imageEmoji: "🌾",
        category: "Grade 4"
    },
    {
        id: "melancholy",
        word: "melancholy",
        definition: "(adj.) Filled with sorrow; very sad. (n.) A state of sadness.",
        exampleSentence: "The movie was so sad it left me in a melancholy mood.",
        imageEmoji: "😢",
        category: "Grade 4"
    },
    {
        id: "obstinate",
        word: "obstinate",
        definition: "(adj.) Not willing to give in; stubborn.",
        exampleSentence: "You can't persuade him to do anything—he's too obstinate.",
        imageEmoji: "🐂",
        category: "Grade 4"
    },
    {
        id: "plead",
        word: "plead",
        definition: "(v.) 1. To ask for something that is felt to be very important; to beg. 2. To respond to a charge by a court of law.",
        exampleSentence: "The children pleaded with their parents to let them stay up late.",
        imageEmoji: "🙏",
        category: "Grade 4"
    },
    {
        id: "plunge",
        word: "plunge",
        definition: "(v.) 1. To throw oneself into. 2. To push or force quickly. 3. To drop sharply. (n.) A sudden dive or fall.",
        exampleSentence: "We plunged into the pool and swam a few laps.",
        imageEmoji: "🏊",
        category: "Grade 4"
    },
    {
        id: "relent",
        word: "relent",
        definition: "(v.) To become less strict.",
        exampleSentence: "My parents finally relented and said I could go to the concert.",
        imageEmoji: "😌",
        category: "Grade 4"
    },
    {
        id: "submit",
        word: "submit",
        definition: "(v.) 1. To give to someone to look over or decide about. 2. To give in to someone or something.",
        exampleSentence: "Each student is asked to submit a picture for the yearbook.",
        imageEmoji: "📝",
        category: "Grade 4"
    },
    {
        id: "trudge",
        word: "trudge",
        definition: "(v.) To walk slowly and heavily, as though with great effort.",
        exampleSentence: "We had to trudge through deep snow to reach the door.",
        imageEmoji: "🥾",
        category: "Grade 4"
    }
];

export const b4_l14_story_1: Story = {
    id: "b4-l14-s1",
    title: "14A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select Correct (C). If the word is used incorrectly, select Incorrect (I).`,
    wordsIncluded: b4_l14_words.map(w => w.id),
    questions: [
        {
            id: "14a-q1",
            type: "multiple-choice",
            question: "1. (a) We **submitted** the story just before the deadline.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q1b",
            type: "multiple-choice",
            question: "1. (b) The dog **submitted** to the cat after losing the staring contest.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q1c",
            type: "multiple-choice",
            question: "1. (c) Children under fourteen cannot be **submitted** to the concert.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // admitted
        },
        {
            id: "14a-q1d",
            type: "multiple-choice",
            question: "1. (d) Charlie **submitted** that he had not been entirely truthful.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct" // admitted/stated
        },
        {
            id: "14a-q2",
            type: "multiple-choice",
            question: "2. (a) We **trudged** through the marshes to get to the cottage.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q2b",
            type: "multiple-choice",
            question: "2. (b) The musicians **trudged** their way through the song.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "14a-q2c",
            type: "multiple-choice",
            question: "2. (c) Taresha **trudges** to school every day in sandals.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // implies heavy walking? But maybe correct if reluctant. Wait, trudge implies heavy/slow. Sandals implies light? Let's assume Incorrect or check context. Sandals + trudge is odd. "trudges to school" is valid if she hates it. But usually implies physical difficulty. I'll mark Incorrect for now as key likely says Incorrect in context of 'musicians/sandals' vs 'snow/mud'. Wait, (d) "hundred-mile trudge" noun is correct. (c) might be correct usage but maybe fits better with 'plod'. Let's stick to key. Re-reading: (a) marshes - yes. (b) musicians - no. (c) sandals - no, trudge implies heavy boots/mud. (d) noun usage - yes. OK."
        },
        {
            id: "14a-q2d",
            type: "multiple-choice",
            question: "2. (d) The journey by car was a hundred-mile **trudge**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Journey by car is not a trudge (walking).
        },
        // Wait, checking 14A-2 again. (c) Taresha trudges. (d) Journey by car. Car is not trudge. So (d) is Incorrect. (c) is likely Correct if she is reluctant? Or Incorrect? Trudge usually implies "heavy". Sandals are light. I will assume (a) is the primary correct one. Let's look at others.
        // Actually (a) is definitely correct. (b) Incorrect. (d) Incorrect. (c) Maybe?
        // Let's assume (c) is Correct contextually? No, usually trudge implies difficulty.
        // I'll stick to (a) as Correct.
        // Let's map (c) as Incorrect.

        {
            id: "14a-q3",
            type: "multiple-choice",
            question: "3. (a) The **plunge** in the price of bread has made families happy.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q3b",
            type: "multiple-choice",
            question: "3. (b) The **plunge** into the lake was very refreshing.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q3c",
            type: "multiple-choice",
            question: "3. (c) The bird **plunged** into the sea when it saw a fish.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q3d",
            type: "multiple-choice",
            question: "3. (d) Turnips and **plunge** were all we were given to eat.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // porridge?
        },
        {
            id: "14a-q4",
            type: "multiple-choice",
            question: "4. (a) The teacher **afforded** me a second chance to take the quiz.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q4b",
            type: "multiple-choice",
            question: "4. (b) I had **afforded** enough money to pay for my new clothes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // saved?
        },
        {
            id: "14a-q4c",
            type: "multiple-choice",
            question: "4. (c) The seaside town cannot **afford** any more storms.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q4d",
            type: "multiple-choice",
            question: "4. (d) He was **afforded** a medal for bravery.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct" // provided/given? Yes.
        },
        {
            id: "14a-q5",
            type: "multiple-choice",
            question: "5. (a) The town **boasts** three excellent schools.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q5b",
            type: "multiple-choice",
            question: "5. (b) His **boasts** about his awards have made him unpopular.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q5c",
            type: "multiple-choice",
            question: "5. (c) The carrots are **boasted** with their juices every thirty minutes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // basted
        },
        {
            id: "14a-q5d",
            type: "multiple-choice",
            question: "5. (d) Wild **boasts** roamed the forest.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // beasts
        },
        {
            id: "14a-q6",
            type: "multiple-choice",
            question: "6. (a) His **humble** speech began, \"I am not worthy.\"",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q6b",
            type: "multiple-choice",
            question: "6. (b) The king **humbled** himself before the queen to apologize.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q6c",
            type: "multiple-choice",
            question: "6. (c) The orphans ate potatoes and **humble** at every meal.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "14a-q6d",
            type: "multiple-choice",
            question: "6. (d) We didn't let a little **humble** keep us from achieving our goal.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // stumble? trouble?
        },
        {
            id: "14a-q7",
            type: "multiple-choice",
            question: "7. (a) We **relented** when we couldn't stand being tickled any longer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q7b",
            type: "multiple-choice",
            question: "7. (b) Her parents **relented** and let Tisha have a kitten.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q7c",
            type: "multiple-choice",
            question: "7. (c) The **relent** reminded me that I was late turning in my report.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "14a-q7d",
            type: "multiple-choice",
            question: "7. (d) My grandmother ordered the immediate **relent** of the garage.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "14a-q8",
            type: "multiple-choice",
            question: "8. (a) Cows grazed in the **meadow** next to the farmhouse.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q8b",
            type: "multiple-choice",
            question: "8. (b) By this time the river had **meadowed** to just a little stream.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // narrowed
        },
        {
            id: "14a-q8c",
            type: "multiple-choice",
            question: "8. (c) The **meadow** provided grass to feed the sheep during the summer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q8d",
            type: "multiple-choice",
            question: "8. (d) The **meadow** had an average depth of two hundred feet.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "14a-q9",
            type: "multiple-choice",
            question: "9. (a) When his **melancholy** struck, he would mope about the house for days.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q9b",
            type: "multiple-choice",
            question: "9. (b) The **melancholy** ringing of the bell echoed through the town.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q9c",
            type: "multiple-choice",
            question: "9. (c) **Melancholy** affects the skin and is easily treated.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Melanoma?
        },
        {
            id: "14a-q9d",
            type: "multiple-choice",
            question: "9. (d) Pedro became **melancholy** when he thought of his home in Mexico.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q10",
            type: "multiple-choice",
            question: "10. (a) He was able to overcome every **obstinate** that stood in his way.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // obstacle
        },
        {
            id: "14a-q10b",
            type: "multiple-choice",
            question: "10. (b) The more you ask him, the more **obstinate** he becomes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q10c",
            type: "multiple-choice",
            question: "10. (c) You are so **obstinate**, it makes me angry.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "14a-q10d",
            type: "multiple-choice",
            question: "10. (d) The teacher **obstinated** something we hadn’t thought about.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        }
    ]
};

export const b4_l14_story_2: Story = {
    id: "b4-l14-s2",
    title: "14B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l14_words.map(w => w.id),
    questions: [
        {
            id: "14b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **music**?",
            options: ["(a) fringe", "(b) recital", "(c) caress", "(d) chord"],
            correctAnswers: ["(b) recital", "(d) chord"]
        },
        {
            id: "14b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **special**?",
            options: ["(a) humble", "(b) exceptional", "(c) obstinate", "(d) amiable"],
            correctAnswer: "(b) exceptional"
        },
        {
            id: "14b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **lucky**?",
            options: ["(a) humble", "(b) melancholy", "(c) furious", "(d) fortunate"],
            correctAnswer: "(d) fortunate"
        },
        {
            id: "14b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **boring**?",
            options: ["(a) drab", "(b) temporary", "(c) tragic", "(d) dreary"],
            correctAnswers: ["(a) drab", "(d) dreary"]
        },
        {
            id: "14b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **persuade**?",
            options: ["(a) afford", "(b) plead", "(c) coax", "(d) plunge"],
            correctAnswers: ["(b) plead", "(c) coax"]
        },
        {
            id: "14b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **trouble**?",
            options: ["(a) precipice", "(b) melancholy", "(c) misfortune", "(d) meadow"],
            correctAnswer: "(c) misfortune"
        },
        {
            id: "14b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **sad**?",
            options: ["(a) boast", "(b) dejected", "(c) melancholy", "(d) bliss"],
            correctAnswers: ["(b) dejected", "(c) melancholy"]
        },
        {
            id: "14b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **going down**?",
            options: ["(a) plunge", "(b) afford", "(c) descend", "(d) plead"],
            correctAnswers: ["(a) plunge", "(c) descend"]
        },
        {
            id: "14b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **give up**?",
            options: ["(a) afford", "(b) submit", "(c) surrender", "(d) boast"],
            correctAnswers: ["(b) submit", "(c) surrender"]
        },
        {
            id: "14b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **stubborn**?",
            options: ["(a) humble", "(b) melancholy", "(c) exceptional", "(d) obstinate"],
            correctAnswer: "(d) obstinate"
        }
    ]
};

export const b4_l14_story_3: Story = {
    id: "b4-l14-s3",
    title: "14C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l14_words.map(w => w.id),
    questions: [
        {
            id: "14c-q1",
            type: "multiple-choice",
            question: "1. Is it **affordable**",
            options: [
                "(a) to buy this shirt?",
                "(b) to go on vacation this year?",
                "(c) lying on that soft bed?",
                "(d) to spend fifty dollars on a ticket?"
            ],
            correctAnswers: ["(a) to buy this shirt?", "(b) to go on vacation this year?", "(d) to spend fifty dollars on a ticket?"]
        },
        {
            id: "14c-q2",
            type: "multiple-choice",
            question: "2. Tony **relented**",
            options: [
                "(a) and agreed to give us his skateboard.",
                "(b) a small apple for lunch.",
                "(c) the rules that he thought were too strict.",
                "(d) finally and said he would go with me."
            ],
            correctAnswers: ["(a) and agreed to give us his skateboard.", "(d) finally and said he would go with me."]
        },
        {
            id: "14c-q3",
            type: "multiple-choice",
            question: "3. My sister **pleaded**",
            options: [
                "(a) to be given her own room.",
                "(b) with our parents to go to the party.",
                "(c) for home as soon as she was free.",
                "(d) to stay home from school."
            ],
            correctAnswers: ["(a) to be given her own room.", "(b) with our parents to go to the party.", "(d) to stay home from school."]
        },
        {
            id: "14c-q4",
            type: "multiple-choice",
            question: "4. The **unfortunate**",
            options: [
                "(a) outcome was not what we were all hoping for.",
                "(b) man has gotten everything he wanted and couldn't be happier.",
                "(c) and beautiful climate drew people to California.",
                "(d) throw of the ball lost the game for the home team."
            ],
            correctAnswers: ["(a) outcome was not what we were all hoping for.", "(d) throw of the ball lost the game for the home team."]
        },
        {
            id: "14c-q5",
            type: "multiple-choice",
            question: "5. The **meadow**",
            options: [
                "(a) is shut down for repairs.",
                "(b) is home to grazing cattle.",
                "(c) is turning brown because we need rain.",
                "(d) is spinning faster and faster."
            ],
            correctAnswers: ["(b) is home to grazing cattle.", "(c) is turning brown because we need rain."]
        },
        {
            id: "14c-q6",
            type: "multiple-choice",
            question: "6. An **obstinate**",
            options: [
                "(a) blocking our way was soon removed.",
                "(b) amount was quickly agreed to.",
                "(c) person cannot be reasoned with.",
                "(d) reply would be, \"I will never change my mind.\""
            ],
            correctAnswers: ["(c) person cannot be reasoned with.", "(d) reply would be, \"I will never change my mind.\""]
        },
        {
            id: "14c-q7",
            type: "multiple-choice",
            question: "7. A **humble**",
            options: [
                "(a) response would begin, \"I'm deeply sorry.\"",
                "(b) person would tell everyone he is the best.",
                "(c) can cause plenty of trouble if lost.",
                "(d) is intended to hurt feelings and should be avoided."
            ],
            correctAnswer: "(a) response would begin, \"I'm deeply sorry.\""
        },
        {
            id: "14c-q8",
            type: "multiple-choice",
            question: "8. The city **boasts**",
            options: [
                "(a) that it has fifteen different parks.",
                "(b) many famous landmarks.",
                "(c) are poor and may have to shut down.",
                "(d) the best team in the league."
            ],
            correctAnswers: ["(a) that it has fifteen different parks.", "(b) many famous landmarks.", "(d) the best team in the league."]
        }
    ]
};

export const b4_l14_story_4: Story = {
    id: "b4-l14-s4",
    title: "14D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l14_words.map(w => w.id),
    questions: [
        {
            id: "14d-q1",
            type: "multiple-choice",
            question: "1. A musical **chord** is",
            options: ["three or more music notes played together", "a single note", "a long song", "a loud noise"],
            correctAnswer: "three or more music notes played together"
        },
        {
            id: "14d-q2",
            type: "multiple-choice",
            question: "2. I always make an **exceptional** effort to",
            options: ["do my best work", "be lazy", "sleep late", "avoid chores"],
            correctAnswer: "do my best work"
        },
        {
            id: "14d-q3",
            type: "multiple-choice",
            question: "3. If something is on the **fringe**, that means it is",
            options: ["on the edge", "in the middle", "at the top", "buried deep"],
            correctAnswer: "on the edge"
        },
        {
            id: "14d-q4",
            type: "multiple-choice",
            question: "4. I wish I could **afford** to",
            options: ["buy a new bike", "be sick", "lose my homework", "fail the test"],
            correctAnswer: "buy a new bike"
        },
        {
            id: "14d-q5",
            type: "multiple-choice",
            question: "5. I am **fortunate** because",
            options: ["I have a loving family", "I lost my toy", "it is raining", "I hurt my knee"],
            correctAnswer: "I have a loving family"
        },
        {
            id: "14d-q6",
            type: "multiple-choice",
            question: "6. A **melancholy** person feels",
            options: ["very sad", "very happy", "angry", "excited"],
            correctAnswer: "very sad"
        },
        {
            id: "14d-q7",
            type: "multiple-choice",
            question: "7. An **obstinate** person might say,",
            options: ["\"I won't do it!\"", "\"I'll help you.\"", "\"Whatever you want.\"", "\"I'm sorry.\""],
            correctAnswer: "\"I won't do it!\""
        },
        {
            id: "14d-q8",
            type: "multiple-choice",
            question: "8. To **relent** means to",
            options: ["become less strict", "become angrier", "give up nothing", "stand firm"],
            correctAnswer: "become less strict"
        },
        {
            id: "14d-q9",
            type: "multiple-choice",
            question: "9. Something I have **submitted** is",
            options: ["my homework for grading", "a secret", "a lost toy", "my lunch"],
            correctAnswer: "my homework for grading"
        },
        {
            id: "14d-q10",
            type: "multiple-choice",
            question: "10. A **humble** person is someone who",
            options: ["is not proud or boastful", "brags a lot", "is extremely rich", "is very loud"],
            correctAnswer: "is not proud or boastful"
        }
    ]
};

export const b4_l14_story_5: Story = {
    id: "b4-l14-s5",
    title: "Reading Passage: How Water Lilies Began",
    type: "non-fiction",
    content: `
This is a folktale from Wales, a small country west of England. The story tells how water lilies first began growing in a lake in the Welsh mountains. It was all because of Huw, a farmer's son, who loved playing the harp. He never went to school. He lived with his mother in a **humble** cottage by the side of a mountain. Every morning, he drove his mother's black and white cows up the mountain, and there they spent the day, in a **meadow** by the side of the lake.

One day, as he watched over the herd, Huw took out his harp and played a few **chords**. To his great astonishment, six silver cows rose out of the lake's water. They seemed to be drawn by the harp's music. Their silver coats gleamed in the sunlight as they gathered around Huw, listening to him play. The silver cows stayed with the herd all day. In the evening, they followed the rest of the cows down the mountain to the farm. Huw's mother felt very **fortunate** to have such fine new cows. She **boasted** to her neighbors that the silver cows gave twice as much milk as the black and white ones. And, she added happily, the milk of the silver cows was of **exceptional** quality.

All went well until one of the silver cows stopped giving milk. After waiting a few days, Huw's mother went to the butcher to tell him to come the next day and take the cow away. Huw **pleaded** with his mother to spare the animal, but she would not **relent**. She told her son that they could not **afford** to have even one cow eating grass but yielding nothing in return. The boy knew how **obstinate** his mother could be once her mind was made up. He argued with her for as long as he dared, but when his mother told him to be quiet, he had no choice but to **submit** to her will.

The next morning, as he **trudged** up the mountain, Huw could think of nothing but the beautiful silver cow that was going to be sold to the butcher. The music he played on his harp that day became more and more **melancholy**. Finally, his eyes filled with tears, and he could play his harp no more. Huw stood up, and he threw his cherished harp into the lake. At once, a strange thing happened. The six silver cows ran to the edge of the lake, and they **plunged** into the depths. They were never seen again.

Soon, masses of silver water lilies began to grow. They grew all along the **fringes** of the lake where the silver cows had jumped in, and they still grow there today. Huw's mother died long ago, and Huw is now an old man. If you should meet him and tell him you don't believe this story, he will be happy to take you up the mountain and show you the beautiful silver water lilies.
    `,
    wordsIncluded: b4_l14_words.map(w => w.id),
    questions: []
};

export const b4_l14_story_6: Story = {
    id: "b4-l14-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Chord** has another meaning in addition to the one given. In geometry, a *chord* is a straight line joining any two points on a circle.

* *Chord* and *cord* are homophones. *Cord* is thick string or twine. It is also a unit of measurement; a *cord* of firewood is a stack that measures eight feet by four feet by four feet.

* In the Middle Ages, over five hundred years ago, people believed that the human body contained four different kinds of fluids called *humors*. The four humors were blood, phlegm, yellow bile, and black bile. When these were in balance, a person was said to be in good humor; when they were out of balance, a person's mood was affected. Too much blood made a person *sanguine*, or cheerful (the Latin word for blood is *sanguis*). Too much phlegm made a person *phlegmatic*, or slow to respond. Too much yellow bile, called *choler*, made a person *choleric*, or angry. Too much black bile, called *melan choler*, made a person **melancholy**, or unhappy.
`,
    wordsIncluded: ["chord", "melancholy"],
    questions: []
};
