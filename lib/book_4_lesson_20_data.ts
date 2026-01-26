import { Story, VocabularyWord } from "./types";

export const b4_l20_words: VocabularyWord[] = [
    {
        id: "arrest",
        word: "arrest",
        definition: "(v.) 1. To stop the movement or progress of. 2. To seize and charge with breaking the law. (n.) The act of arresting.",
        exampleSentence: "The doctors were able to arrest the spread of the disease.",
        imageEmoji: "🛑",
        category: "Grade 4"
    },
    {
        id: "capable",
        word: "capable",
        definition: "(adj.) Able to do things well; skilled. (adj.) capable of: Ready and able to. (adj.) capable: Having the qualities necessary for.",
        exampleSentence: "Companies try to hire the most capable workers.",
        imageEmoji: "💪",
        category: "Grade 4"
    },
    {
        id: "congratulate",
        word: "congratulate",
        definition: "(v.) To express pleasure for a person's success or good fortune. (n.) congratulations: Good wishes.",
        exampleSentence: "Allow me to congratulate you on your victory.",
        imageEmoji: "🎉",
        category: "Grade 4"
    },
    {
        id: "despise",
        word: "despise",
        definition: "(v.) To scorn and dislike strongly; to consider unworthy of respect.",
        exampleSentence: "The French nobles despised the peasants, who were fighting to gain their freedom.",
        imageEmoji: "😤",
        category: "Grade 4"
    },
    {
        id: "dispute",
        word: "dispute",
        definition: "(n.) A strong difference of opinion; an argument. (v.) To question the truth or value of.",
        exampleSentence: "The feuding neighbors were unable to settle their dispute.",
        imageEmoji: "🗣️",
        category: "Grade 4"
    },
    {
        id: "eventual",
        word: "eventual",
        definition: "(adj.) Coming at a later time; happening as a result of.",
        exampleSentence: "Years of practice led to his eventual success as a Wimbledon tennis champion.",
        imageEmoji: "⏳",
        category: "Grade 4"
    },
    {
        id: "helm",
        word: "helm",
        definition: "(n.) 1. The wheel or tiller used to steer a boat. 2. A position of control.",
        exampleSentence: "The skipper said I could take the helm because the sea was calm.",
        imageEmoji: "⚓",
        category: "Grade 4"
    },
    {
        id: "humiliate",
        word: "humiliate",
        definition: "(v.) To treat in a way that takes away a person's pride or self-respect. (n.) humiliation: The act of humiliating or the state of being humiliated.",
        exampleSentence: "The workers humiliated the newcomer because he seemed so strange.",
        imageEmoji: "😳",
        category: "Grade 4"
    },
    {
        id: "implore",
        word: "implore",
        definition: "(v.) To plead with or beg for with much feeling.",
        exampleSentence: "I implored my parents to let me go with them.",
        imageEmoji: "🙏",
        category: "Grade 4"
    },
    {
        id: "insert",
        word: "insert",
        definition: "(v.) To put in. (n.) An extra piece sewn or put in place.",
        exampleSentence: "Please insert the key into the lock so we can go inside and get out of the rain.",
        imageEmoji: "📥",
        category: "Grade 4"
    },
    {
        id: "outrage",
        word: "outrage",
        definition: "(n.) 1. Anger caused by injury or insult. 2. Anything that causes resentment or anger; a wicked or brutal act or remark. (v.) To fill with anger or resentment.",
        exampleSentence: "The decision to close the school caused outrage among the parents.",
        imageEmoji: "🤬",
        category: "Grade 4"
    },
    {
        id: "pierce",
        word: "pierce",
        definition: "(v.) 1. To pass or break through. 2. To make a hole through. (adj.) piercing: Very loud and shrill.",
        exampleSentence: "A beam of light suddenly pierced the darkness.",
        imageEmoji: "📍",
        category: "Grade 4"
    },
    {
        id: "quiver",
        word: "quiver",
        definition: "(v.) To shake with small, rapid movements; to tremble. (n.) 1. A trembling. 2. A case for holding arrows.",
        exampleSentence: "The child's lip quivered as if he were about to cry.",
        imageEmoji: "🏹",
        category: "Grade 4"
    },
    {
        id: "release",
        word: "release",
        definition: "(v.) 1. To let go; to free. 2. To make known. (n.) 1. A setting free. 2. An announcement of news.",
        exampleSentence: "The pigeons flew away as soon as I released them from their cages.",
        imageEmoji: "🕊️",
        category: "Grade 4"
    },
    {
        id: "sullen",
        word: "sullen",
        definition: "(adj.) Silent from anger or hurt.",
        exampleSentence: "Tom grew from a sullen teenager into a friendly and outgoing young man.",
        imageEmoji: "😠",
        category: "Grade 4"
    }
];

export const b4_l20_story_1: Story = {
    id: "b4-l20-s1",
    title: "20A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select Correct (C). If the word is used incorrectly, select Incorrect (I).`,
    wordsIncluded: b4_l20_words.map(w => w.id),
    questions: [
        {
            id: "20a-q1",
            type: "multiple-choice",
            question: "1. (a) The arrow **pierced** the center of the target.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q1b",
            type: "multiple-choice",
            question: "1. (b) All Jamal wants is **pierce** and love.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // peace
        },
        {
            id: "20a-q1c",
            type: "multiple-choice",
            question: "1. (c) A **piercing** cry for help brought us rushing to the rescue.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q1d",
            type: "multiple-choice",
            question: "1. (d) The local museum has a **pierce** of the Berlin Wall on display.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // piece
        },
        {
            id: "20a-q2",
            type: "multiple-choice",
            question: "2. (a) A bully enjoys **humiliating** others.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q2b",
            type: "multiple-choice",
            question: "2. (b) The final score was a **humiliating** 97 to 11 loss.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q2c",
            type: "multiple-choice",
            question: "2. (c) Crashing my bike into the mailbox was **humiliating**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q2d",
            type: "multiple-choice",
            question: "2. (d) When my ailment started **humiliating**, I knew it was time to see a doctor.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // hurting?
        },
        {
            id: "20a-q3",
            type: "multiple-choice",
            question: "3. (a) What you consider an **outrage**, others consider perfectly normal.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q3b",
            type: "multiple-choice",
            question: "3. (b) The storm **outraged** for days, causing vast damage to the coast.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // raged
        },
        {
            id: "20a-q3c",
            type: "multiple-choice",
            question: "3. (c) Punishing the wrong person is an **outrage**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q3d",
            type: "multiple-choice",
            question: "3. (d) The forest fire **outraged** the efforts of firefighters to put it out.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "20a-q4",
            type: "multiple-choice",
            question: "4. (a) A slight breeze caused the leaves of the tree to **quiver**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q4b",
            type: "multiple-choice",
            question: "4. (b) The **quiver** held a dozen arrows.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q4c",
            type: "multiple-choice",
            question: "4. (c) He doesn't care what you **quiver**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // think?
        },
        {
            id: "20a-q4d",
            type: "multiple-choice",
            question: "4. (d) He **quivered** in deeply before finally saying yes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // wavered? breathed?
        },
        {
            id: "20a-q5",
            type: "multiple-choice",
            question: "5. (a) Somebody **released** a mouse in Miss Horsham's classroom.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q5b",
            type: "multiple-choice",
            question: "5. (b) The **release** on the roof is too hot to touch.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "20a-q5c",
            type: "multiple-choice",
            question: "5. (c) The pitcher **released** the ball.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q5d",
            type: "multiple-choice",
            question: "5. (d) She rubbed the **release** gently and then picked it up.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // valise?
        },
        {
            id: "20a-q6",
            type: "multiple-choice",
            question: "6. (a) Sierra's **dispute** with the teacher began when she was late to school.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q6b",
            type: "multiple-choice",
            question: "6. (b) Jonah **disputed** the amount he was charged for the candy bar.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q6c",
            type: "multiple-choice",
            question: "6. (c) The water was **disputed** along a narrow channel to the sea.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // directed?
        },
        {
            id: "20a-q6d",
            type: "multiple-choice",
            question: "6. (d) Amina **disputed** her grade because she thought the test questions were unfair.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q7",
            type: "multiple-choice",
            question: "7. (a) The new president is taking the **helm** of the country.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q7b",
            type: "multiple-choice",
            question: "7. (b) The boat's **helm** scraped against rocks on the ocean floor.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // hull
        },
        {
            id: "20a-q7c",
            type: "multiple-choice",
            question: "7. (c) The train **helmed** to one side and flew off the track.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // heeled?
        },
        {
            id: "20a-q7d",
            type: "multiple-choice",
            question: "7. (d) A steady hand on the **helm** brought us safely through the storm.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q8",
            type: "multiple-choice",
            question: "8. (a) His slide down the precipice was **arrested** by his rope from above.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q8b",
            type: "multiple-choice",
            question: "8. (b) There were three **arrests** made at last night's demonstration.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q8c",
            type: "multiple-choice",
            question: "8. (c) **Arrest** stops every few miles made the journey easier.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Rest
        },
        {
            id: "20a-q8d",
            type: "multiple-choice",
            question: "8. (d) Wait until the train comes to a complete **arrest** before getting off.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // stop/rest? Usually "halt" or "stop". "Arrest" as a noun is the act of arresting someone or stopping something (medical). Not usually for train stopping.
        },
        {
            id: "20a-q9",
            type: "multiple-choice",
            question: "9. (a) Mateo is **capable** of running a hundred meters in ten seconds.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q9b",
            type: "multiple-choice",
            question: "9. (b) A child is not **capable** of reaching the top shelf.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q9c",
            type: "multiple-choice",
            question: "9. (c) The team trusted the catcher's **capable** hands.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q9d",
            type: "multiple-choice",
            question: "9. (d) John packed his **capables** in his laundry bag and left.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "20a-q10",
            type: "multiple-choice",
            question: "10. (a) **Congratulations** on ten years of being a teacher.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "20a-q10b",
            type: "multiple-choice",
            question: "10. (b) The captain's **congratulation** was that they were lost at sea.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // conclusion?
        },
        {
            id: "20a-q10c",
            type: "multiple-choice",
            question: "10. (c) A **congratulation** to visit the White House was very exciting.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // invitation?
        },
        {
            id: "20a-q10d",
            type: "multiple-choice",
            question: "10. (d) The runner-up **congratulated** the winner.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        }
    ]
};

export const b4_l20_story_2: Story = {
    id: "b4-l20-s2",
    title: "20B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l20_words.map(w => w.id),
    questions: [
        {
            id: "20b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **hate**?",
            options: ["(a) embrace", "(b) despise", "(c) detest", "(d) release"],
            correctAnswers: ["(b) despise", "(c) detest"]
        },
        {
            id: "20b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **boat**?",
            options: ["(a) insert", "(b) host", "(c) venture", "(d) helm"],
            correctAnswer: "(d) helm"
        },
        {
            id: "20b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **beg**?",
            options: ["(a) impact", "(b) implore", "(c) acknowledge", "(d) admonish"],
            correctAnswer: "(b) implore"
        },
        {
            id: "20b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **put in**?",
            options: ["(a) release", "(b) insert", "(c) disclose", "(d) despise"],
            correctAnswer: "(b) insert"
        },
        {
            id: "20b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **loud**?",
            options: ["(a) piercing", "(b) shrewd", "(c) humiliating", "(d) capable"],
            correctAnswer: "(a) piercing"
        },
        {
            id: "20b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **afraid**?",
            options: ["(a) shun", "(b) cower", "(c) mope", "(d) quiver"],
            correctAnswers: ["(b) cower", "(d) quiver"] // quiver with fear
        },
        {
            id: "20b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **good wishes**?",
            options: ["(a) govern", "(b) arrest", "(c) congratulate", "(d) dispute"],
            correctAnswer: "(c) congratulate"
        },
        {
            id: "20b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **skilled**?",
            options: ["(a) ability", "(b) capable", "(c) sullen", "(d) stout"],
            correctAnswer: "(b) capable"
        },
        {
            id: "20b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **quarrel**?",
            options: ["(a) dispute", "(b) feud", "(c) threat", "(d) helm"],
            correctAnswers: ["(a) dispute", "(b) feud"]
        },
        {
            id: "20b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **let go**?",
            options: ["(a) recover", "(b) release", "(c) eject", "(d) dispute"],
            correctAnswer: "(b) release"
        }
    ]
};

export const b4_l20_story_3: Story = {
    id: "b4-l20-s3",
    title: "20C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l20_words.map(w => w.id),
    questions: [
        {
            id: "20c-q1",
            type: "multiple-choice",
            question: "1. The **eventual**",
            options: [
                "(a) result of the game after overtime was 23 to 21.",
                "(b) winner was a newcomer no one had heard of.",
                "(c) milk on the shopping list was written in large letters.",
                "(d) end of summer will always come too quickly."
            ],
            correctAnswers: ["(a) result of the game after overtime was 23 to 21.", "(b) winner was a newcomer no one had heard of."]
        },
        {
            id: "20c-q2",
            type: "multiple-choice",
            question: "2. The **sullenness** of his",
            options: [
                "(a) greeting made us feel unwelcome.",
                "(b) homemade dinner was delicious.",
                "(c) happiness startled the classroom.",
                "(d) expression told us to expect little help from him."
            ],
            correctAnswers: ["(a) greeting made us feel unwelcome.", "(d) expression told us to expect little help from him."]
        },
        {
            id: "20c-q3",
            type: "multiple-choice",
            question: "3. The **arrest**",
            options: [
                "(a) of the thief took place within hours of her escape.",
                "(b) of the train's movement was caused by flooding on the track.",
                "(c) of the disease in its early stages is welcome news.",
                "(d) of the story isn't very good, so I won't read it to you."
            ],
            correctAnswers: ["(a) of the thief took place within hours of her escape.", "(b) of the train's movement was caused by flooding on the track.", "(c) of the disease in its early stages is welcome news."]
        },
        {
            id: "20c-q4",
            type: "multiple-choice",
            question: "4. **Congratulations**",
            options: [
                "(a) on having made a lucky guess.",
                "(b) can be found in the garden by the roses.",
                "(c) under the bed are sometimes scary for small children.",
                "(d) should drift no more than five hundred miles down river."
            ],
            correctAnswer: "(a) on having made a lucky guess."
        },
        {
            id: "20c-q5",
            type: "multiple-choice",
            question: "5. The **dispute**",
            options: [
                "(a) over whom the pencil belonged to was silly.",
                "(b) was settled with a simple coin toss.",
                "(c) was a barbed wire fence that said \"Keep Out.\"",
                "(d) was lost at sea when the ship went down."
            ],
            correctAnswers: ["(a) over whom the pencil belonged to was silly.", "(b) was settled with a simple coin toss."]
        },
        {
            id: "20c-q6",
            type: "multiple-choice",
            question: "6. We **despised**",
            options: [
                "(a) something wrong with the numbers we were given.",
                "(b) a sail on the horizon.",
                "(c) that if something had gone wrong, it could be quickly fixed.",
                "(d) the enemy even though they were just like us."
            ],
            correctAnswers: ["(d) the enemy even though they were just like us."]
        },
        {
            id: "20c-q7",
            type: "multiple-choice",
            question: "7. **Imploring**",
            options: [
                "(a) faraway lands had long been his desire.",
                "(b) for help from her wealthy relatives was beneath her.",
                "(c) that there were new lands to be discovered excited the explorers.",
                "(d) the students to be quiet, she knocked on her desk."
            ],
            correctAnswers: ["(b) for help from her wealthy relatives was beneath her.", "(d) the students to be quiet, she knocked on her desk."]
        },
        {
            id: "20c-q8",
            type: "multiple-choice",
            question: "8. **Release**",
            options: [
                "(a) the story to the reporters on Friday.",
                "(b) him from his promise, and I will understand.",
                "(c) the pill three times a day with meals.",
                "(d) the brake when she gives the signal."
            ],
            correctAnswers: ["(a) the story to the reporters on Friday.", "(b) him from his promise, and I will understand.", "(d) the brake when she gives the signal."]
        }
    ]
};

export const b4_l20_story_4: Story = {
    id: "b4-l20-s4",
    title: "20D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l20_words.map(w => w.id),
    questions: [
        {
            id: "20d-q1",
            type: "multiple-choice",
            question: "1. A person who can **arrest** someone is called a",
            options: ["police officer", "doctor", "teacher", "firefighter"],
            correctAnswer: "police officer"
        },
        {
            id: "20d-q2",
            type: "multiple-choice",
            question: "2. **Eventually** I hope to",
            options: ["visit Mars", "fall asleep", "learn to fly", "all of the above"],
            correctAnswer: "visit Mars" // Can be anything, but "visit Mars" is a good goal.
        },
        {
            id: "20d-q3",
            type: "multiple-choice",
            question: "3. If I am **humiliated**, I feel",
            options: ["ashamed and embarrassed", "proud and happy", "tired and hungry", "excited and energetic"],
            correctAnswer: "ashamed and embarrassed"
        },
        {
            id: "20d-q4",
            type: "multiple-choice",
            question: "4. I might **implore** my teacher to",
            options: ["give us no homework", "grade our tests harder", "make us stay after school", "yell at us"],
            correctAnswer: "give us no homework"
        },
        {
            id: "20d-q5",
            type: "multiple-choice",
            question: "5. I think it's an **outrage** that",
            options: ["people are starving in the world", "ice cream is cold", "the sun rises every day", "cats have tails"],
            correctAnswer: "people are starving in the world"
        },
        {
            id: "20d-q6",
            type: "multiple-choice",
            question: "6. A different word for **dispute** is",
            options: ["argument", "agreement", "party", "game"],
            correctAnswer: "argument"
        },
        {
            id: "20d-q7",
            type: "multiple-choice",
            question: "7. Something I am **capable** of is",
            options: ["riding a bike", "flying without wings", "disappearing", "lifting a car"],
            correctAnswer: "riding a bike"
        },
        {
            id: "20d-q8",
            type: "multiple-choice",
            question: "8. If you are **sullen**, that means you feel",
            options: ["gloomy and resentful", "happy and cheerful", "tired and sleepy", "hungry and thirsty"],
            correctAnswer: "gloomy and resentful"
        },
        {
            id: "20d-q9",
            type: "multiple-choice",
            question: "9. When you **insert** a key into a door, you",
            options: ["put it in", "take it out", "turn it", "break it"],
            correctAnswer: "put it in"
        },
        {
            id: "20d-q10",
            type: "multiple-choice",
            question: "10. Something I should be **congratulated** for is",
            options: ["winning a race", "losing my homework", "breaking a dish", "forgetting my lunch"],
            correctAnswer: "winning a race"
        }
    ]
};

export const b4_l20_story_5: Story = {
    id: "b4-l20-s5",
    title: "Reading Passage: The Story of William Tell",
    type: "non-fiction",
    content: `
In the town of Altdorf, Switzerland, stands a famous statue of William Tell, his son at his side, his crossbow slung over his shoulder. Although historians **dispute** William Tell's existence, and there is no evidence that he was a real person, Tell is a national hero to the Swiss people. He is a symbol of political and individual freedom.

Seven hundred years ago, the Swiss people were ruled by Austria. The governor of Switzerland was an Austrian named Gessler. Gessler **despised** the Swiss people. He did not consider them **capable** of ruling themselves. One day he decided to **humiliate** them. He put his cap on a pole and ordered everyone in the town of Altdorf who passed by to bow before it. The Swiss people regarded the cap as a symbol of Austrian rule, and they detested it. However, the people of Altdorf had no choice. **Sullenly**, they obeyed the order.

William Tell, a peasant from a nearby Swiss village, happened to be visiting Altdorf with his young son. Tell was famous for his skill as a boatman and was equally expert with the crossbow. He was also a proud man. The people of the village watched as he approached the cap. Would he bow his head before it? No one was surprised to see him walk past the cap with his head held high. The Austrian guards **arrested** him for his "crime" and took him before the governor.

Gessler had heard of William Tell's remarkable skill with the crossbow. It amused him to give his prisoner a choice: Either go to prison or win freedom by shooting an apple from the top of his son's head at a hundred paces. Tell did not hesitate. After pacing out the distance, he removed two arrows from his **quiver**. He **inserted** the first one in the groove of his crossbow; the second arrow he tucked in his belt. He wound the spring of the crossbow and took careful aim. There was a tense silence. Those watching waited for him to **release** the arrow. When he did so, it flashed through the air, splitting the apple cleanly in two. The boy was unharmed. Gessler **congratulated** William Tell for demonstrating such skill. Then he asked what the second arrow was for.

William Tell looked him in the eye. He said, "If the first arrow had hurt my son, the second would have **pierced** your heart." Gessler was **outraged** by this reply. He ordered Tell locked up for the rest of his life. But the boat that was carrying him across the lake to prison ran into a storm. The frightened crew knew that William Tell was a skilled boatman. They untied him and **implored** him to take over. Tell seized the **helm**. While the crew cowered below, he steered the boat toward the rocky shore. At the last moment he leaped ashore and escaped.

Once free, he lay in wait at a place where he knew Gessler would pass. When the governor did so, the arrow from William Tell's bow found its mark. Gessler died instantly. The news of William Tell's deed spread quickly and made him a hero to the Swiss people. It helped to unite them in their struggle and **eventually** led to their freedom from Austrian rule.
    `,
    wordsIncluded: b4_l20_words.map(w => w.id),
    questions: []
};

export const b4_l20_story_6: Story = {
    id: "b4-l20-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* To **humiliate** someone is to make that person look weak or foolish in the eyes of others. The word comes from the Latin *humilis*, which means "low." This Latin word in turn comes from an older Latin word, *humus*, which means "earth" or "dirt." To **humiliate** someone is to treat that person "like dirt." Incidentally, *humus* is the English word for the decayed vegetable matter that enriches soil.

* *Humble* (Word List 14) comes from the same Latin root. Someone of *humble* birth occupies a low position in society. To *humble* oneself is to lower oneself in the eyes of others.

* There is another noun formed from **humiliate**, in addition to **humiliation**. It is related in meaning, but with an important difference. *Humility* is the state of being *humble*. It is considered by many to be a desirable state, the opposite of being boastful or vain. **Humiliation** suggests being disgraced, having one's pride taken away.

* If you weep while **imploring** a person to do something, your pleading might have a better chance of succeeding. At least, that is what the word suggests. It comes from the Latin *plorare*, which means "to cry out" or "to weep."

* A **sullen** person is likely to shun the company of others or to be shunned by them. In either event, such a person is likely to be left alone. This should come as no surprise because the word comes from the Latin *solus*, which means "alone." For a number of other words formed from this Latin root, see Lesson 13.
`,
    wordsIncluded: ["humiliate", "implore", "sullen"],
    questions: []
};
