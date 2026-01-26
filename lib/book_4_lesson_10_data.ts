import { Story, VocabularyWord } from "./types";

export const b4_l10_words: VocabularyWord[] = [
    {
        id: "ail",
        word: "ail",
        definition: "(v.) To cause sickness, pain, or trouble. (n.) ailment: An illness; a disease.",
        exampleSentence: "\"What ails you?\" the doctor asked.",
        imageEmoji: "🤒",
        category: "Grade 4"
    },
    {
        id: "banish",
        word: "banish",
        definition: "(v.) 1. To force someone out of the country. 2. To get rid of completely.",
        exampleSentence: "After the revolution, France banished the royal family.",
        imageEmoji: "🚫",
        category: "Grade 4"
    },
    {
        id: "communicate",
        word: "communicate",
        definition: "(v.) To make known; to give or exchange information.",
        exampleSentence: "Because I hate to write letters, we communicate mostly by telephone.",
        imageEmoji: "🗣️",
        category: "Grade 4"
    },
    {
        id: "console",
        word: "console",
        definition: "(v.) To make less sad; to comfort. (n.) consolation: Comfort.",
        exampleSentence: "My parents tried to console me when my best friend moved away.",
        imageEmoji: "🤗",
        category: "Grade 4"
    },
    {
        id: "cower",
        word: "cower",
        definition: "(v.) To shrink from, as if from fear.",
        exampleSentence: "Our poor dog cowers every time Dad turns the vacuum cleaner on.",
        imageEmoji: "😨",
        category: "Grade 4"
    },
    {
        id: "deliberate",
        word: "deliberate",
        definition: "(adj.) Carefully thought out; not hasty. (v.) To think carefully in order to make up one's mind.",
        exampleSentence: "Although my mother was angry, she spoke in a calm and deliberate manner.",
        imageEmoji: "🤔",
        category: "Grade 4"
    },
    {
        id: "depth",
        word: "depth",
        definition: "(n.) Distance from top to bottom or front to back; deepness.",
        exampleSentence: "The floodwaters reached a depth of several feet.",
        imageEmoji: "⬇️",
        category: "Grade 4"
    },
    {
        id: "desire",
        word: "desire",
        definition: "(v.) To wish for; to want very much. (n.) A strong wish.",
        exampleSentence: "A person who is famished desires just one thing—food!",
        imageEmoji: "🌠",
        category: "Grade 4"
    },
    {
        id: "livelihood",
        word: "livelihood",
        definition: "(n.) The means of supporting oneself.",
        exampleSentence: "The store owners in my neighborhood depend on shoppers for their livelihood.",
        imageEmoji: "💰",
        category: "Grade 4"
    },
    {
        id: "misfortune",
        word: "misfortune",
        definition: "(n.) 1. Bad luck; trouble. 2. An unlucky event.",
        exampleSentence: "He had the misfortune to break his leg right before the big game.",
        imageEmoji: "🍀",
        category: "Grade 4"
    },
    {
        id: "orphan",
        word: "orphan",
        definition: "(n.) A child whose parents are dead.",
        exampleSentence: "Tom Sawyer lived with his Aunt Polly because he was an orphan.",
        imageEmoji: "👦",
        category: "Grade 4"
    },
    {
        id: "precipice",
        word: "precipice",
        definition: "(n.) A very high and steep cliff.",
        exampleSentence: "We stood watchfully on the edge of the precipice and looked down.",
        imageEmoji: "⛰️",
        category: "Grade 4"
    },
    {
        id: "precipitous",
        word: "precipitous",
        definition: "(adj.) 1. Very steep. 2. Hasty; abrupt; done without careful thought.",
        exampleSentence: "The waterfall hiking trail has many precipitous slopes.",
        imageEmoji: "📉",
        category: "Grade 4"
    },
    {
        id: "regain",
        word: "regain",
        definition: "(v.) To get back.",
        exampleSentence: "By following the doctor's orders, I slowly regained my health.",
        imageEmoji: "↩️",
        category: "Grade 4"
    },
    {
        id: "slay",
        word: "slay",
        definition: "(v.) To kill violently. (slain, past participle)",
        exampleSentence: "The scene where George slays the dragon comes right at the end of the play.",
        imageEmoji: "⚔️",
        category: "Grade 4"
    },
    {
        id: "symptom",
        word: "symptom",
        definition: "(n.) A sign of something.",
        exampleSentence: "Headaches can be a symptom of not enough sleep.",
        imageEmoji: "🤒",
        category: "Grade 4"
    }
];

export const b4_l10_story_1: Story = {
    id: "b4-l10-s1",
    title: "10A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, write C on the line. If the word is used incorrectly, write I on the line.`,
    wordsIncluded: b4_l10_words.map(w => w.id),
    questions: [
        {
            id: "10a-q1",
            type: "multiple-choice",
            question: "1. (a) I thought Jaclynn tripped by accident, but it was a **deliberate** prank to make us laugh.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q1b",
            type: "multiple-choice",
            question: "1. (b) France was **deliberated** in 1944 after the war.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q1c",
            type: "multiple-choice",
            question: "1. (c) We **deliberated** for some time before deciding to stay.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q1d",
            type: "multiple-choice",
            question: "1. (d) The quarry was **deliberated** by the hunters after it had been caught.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q2",
            type: "multiple-choice",
            question: "2. (a) Her secret **desire** was to someday be an astronaut.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q2b",
            type: "multiple-choice",
            question: "2. (b) Jason twisted his **desires** and hung them up to dry.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q2c",
            type: "multiple-choice",
            question: "2. (c) A person who has everything usually **desires** nothing.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q2d",
            type: "multiple-choice",
            question: "2. (d) Tell me your **desires** for your birthday this year.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q3",
            type: "multiple-choice",
            question: "3. (a) She made her first **misfortune** trying to win the game.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q3b",
            type: "multiple-choice",
            question: "3. (b) **Misfortune** seemed to follow him everywhere he went.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q3c",
            type: "multiple-choice",
            question: "3. (c) There's a **misfortune** on page 5 that needs correcting.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q3d",
            type: "multiple-choice",
            question: "3. (d) It was his **misfortune** to be in the wrong place at the wrong time.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q4",
            type: "multiple-choice",
            question: "4. (a) The bighorn sheep took a **precipitous** tumble down the mountain.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q4b",
            type: "multiple-choice",
            question: "4. (b) Our first climb was up a steep **precipice**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "10a-q4c",
            type: "multiple-choice",
            question: "4. (c) The drawings had been done in a very **precipice** manner.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "10a-q4d",
            type: "multiple-choice",
            question: "4. (d) Su Nu has always been **precipitous** in the way she acts.",
            options: ["C", "I"],
            correctAnswer: "C"
        }
    ]
};

export const b4_l10_story_2: Story = {
    id: "b4-l10-s2",
    title: "10B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l10_words.map(w => w.id),
    questions: [
        {
            id: "10b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *not by accident*?",
            options: ["(a) intentional", "(b) shrewd", "(c) deliberate", "(d) ailing"],
            correctAnswers: ["(a) intentional", "(c) deliberate"]
        },
        {
            id: "10b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *bad luck*?",
            options: ["(a) symptom", "(b) misfortune", "(c) livelihood", "(d) advantage"],
            correctAnswer: "(b) misfortune"
        },
        {
            id: "10b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *sickness*?",
            options: ["(a) intrusive", "(b) infection", "(c) ailing", "(d) confusing"],
            correctAnswers: ["(b) infection", "(c) ailing"]
        },
        {
            id: "10b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *not wanted*?",
            options: ["(a) cower", "(b) regain", "(c) banish", "(d) reject"],
            correctAnswers: ["(c) banish", "(d) reject"]
        },
        {
            id: "10b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *ocean*?",
            options: ["(a) depths", "(b) coast", "(c) orphan", "(d) marine"],
            correctAnswers: ["(a) depths", "(b) coast", "(d) marine"]
        },
        {
            id: "10b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *take care of*?",
            options: ["(a) blast", "(b) cower", "(c) regain", "(d) console"],
            correctAnswer: "(d) console"
        },
        {
            id: "10b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *pleasing*?",
            options: ["(a) desirable", "(b) attractive", "(c) imitate", "(d) exquisite"],
            correctAnswers: ["(a) desirable", "(b) attractive", "(d) exquisite"]
        },
        {
            id: "10b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *sleepy*?",
            options: ["(a) doze", "(b) hibernate", "(c) drowsy", "(d) observation"],
            correctAnswers: ["(a) doze", "(c) drowsy"]
        },
        {
            id: "10b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *afraid*?",
            options: ["(a) astonish", "(b) amaze", "(c) cower", "(d) astound"],
            correctAnswer: "(c) cower"
        },
        {
            id: "10b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *murder*?",
            options: ["(a) precipice", "(b) slay", "(c) depth", "(d) tackle"],
            correctAnswer: "(b) slay"
        }
    ]
};

export const b4_l10_story_3: Story = {
    id: "b4-l10-s3",
    title: "10C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l10_words.map(w => w.id),
    questions: [
        {
            id: "10c-q1",
            type: "multiple-choice",
            question: "1. We were **consoled**",
            options: [
                "(a) when the class came to cheer us up.",
                "(b) into giving money to the food drive.",
                "(c) by the news that the children were safe.",
                "(d) from joining the club because of our ages."
            ],
            correctAnswers: ["(a) when the class came to cheer us up.", "(c) by the news that the children were safe."]
        },
        {
            id: "10c-q2",
            type: "multiple-choice",
            question: "2. The **communication**",
            options: [
                "(a) between the two friends wasn't very clear.",
                "(b) was given with sign language.",
                "(c) came down to two thousand dollars.",
                "(d) was done mostly by e-mail."
            ],
            correctAnswers: ["(a) between the two friends wasn't very clear.", "(b) was given with sign language.", "(d) was done mostly by e-mail."]
        },
        {
            id: "10c-q3",
            type: "multiple-choice",
            question: "3. His **banishment**",
            options: [
                "(a) from the game happened after he was caught cheating.",
                "(b) ate until it was sick.",
                "(c) was to an island far from land.",
                "(d) dried quickly in the sun."
            ],
            correctAnswers: ["(a) from the game happened after he was caught cheating.", "(c) was to an island far from land."]
        },
        {
            id: "10c-q4",
            type: "multiple-choice",
            question: "4. They **cower**",
            options: [
                "(a) to buy umbrellas to stay dry.",
                "(b) in groups so they can talk all night.",
                "(c) because they are afraid of you.",
                "(d) when you yell at them."
            ],
            correctAnswers: ["(c) because they are afraid of you.", "(d) when you yell at them."]
        },
        {
            id: "10c-q5",
            type: "multiple-choice",
            question: "5. It was my **misfortune**",
            options: [
                "(a) until I sold it to a friend.",
                "(b) to have a scoundrel for a friend.",
                "(c) to lose a portion of my tooth to decay.",
                "(d) to lose my towel at the beach."
            ],
            correctAnswers: ["(b) to have a scoundrel for a friend.", "(c) to lose a portion of my tooth to decay.", "(d) to lose my towel at the beach."]
        },
        {
            id: "10c-q6",
            type: "multiple-choice",
            question: "6. The **orphanage**",
            options: [
                "(a) comes in three different flavors.",
                "(b) helps children who have no parents.",
                "(c) now has four wheels, although the earlier one had two.",
                "(d) needed to be rebuilt after the tornado."
            ],
            correctAnswers: ["(b) helps children who have no parents.", "(d) needed to be rebuilt after the tornado."]
        },
        {
            id: "10c-q7",
            type: "multiple-choice",
            question: "7. The **symptoms**",
            options: [
                "(a) include a runny nose and trouble breathing.",
                "(b) come in three sizes: small, medium, and large.",
                "(c) of spring include the first flowers.",
                "(d) should decrease once you start the medicine."
            ],
            correctAnswers: ["(a) include a runny nose and trouble breathing.", "(c) of spring include the first flowers.", "(d) should decrease once you start the medicine."]
        },
        {
            id: "10c-q8",
            type: "multiple-choice",
            question: "8. The **depth**",
            options: [
                "(a) of the mine was five hundred feet.",
                "(b) of the new jet was six hundred miles an hour.",
                "(c) of the river changed with the seasons.",
                "(d) of the cave must be a hundred feet at least."
            ],
            correctAnswers: ["(a) of the mine was five hundred feet.", "(c) of the river changed with the seasons.", "(d) of the cave must be a hundred feet at least."]
        }
    ]
};

export const b4_l10_story_4: Story = {
    id: "b4-l10-s4",
    title: "10D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l10_words.map(w => w.id),
    questions: [
        {
            id: "10d-q1",
            type: "multiple-choice",
            question: "1. To **regain** something means to",
            options: [
                "get it back.",
                "lose it forever.",
                "give it away.",
                "break it into pieces."
            ],
            correctAnswer: "get it back."
        },
        {
            id: "10d-q2",
            type: "multiple-choice",
            question: "2. A farmer's **livelihood** is",
            options: [
                "growing crops or raising animals to sell.",
                "watching television all day.",
                "playing video games.",
                "going to the movies."
            ],
            correctAnswer: "growing crops or raising animals to sell."
        },
        {
            id: "10d-q3",
            type: "multiple-choice",
            question: "3. If you are a **communicative** person, that means you",
            options: [
                "like to talk to people and share information.",
                "are very shy and quiet.",
                "prefer to be alone.",
                "never answer the phone."
            ],
            correctAnswer: "like to talk to people and share information."
        },
        {
            id: "10d-q4",
            type: "multiple-choice",
            question: "4. I may want to **deliberate** if",
            options: [
                "I have a difficult decision to make.",
                "I know exactly what to do immediately.",
                "someone tells me a funny joke.",
                "I am running a race."
            ],
            correctAnswer: "I have a difficult decision to make."
        },
        {
            id: "10d-q5",
            type: "multiple-choice",
            question: "5. A **misfortune** for me might be",
            options: [
                "losing my favorite hat.",
                "finding ten dollars.",
                "getting an A on a test.",
                "winning a prize."
            ],
            correctAnswer: "losing my favorite hat."
        },
        {
            id: "10d-q6",
            type: "multiple-choice",
            question: "6. A **precipitous** drop in temperature might make us",
            options: [
                "reach for our winter coats.",
                "go swimming at the beach.",
                "plant flowers in the garden.",
                "open all the windows."
            ],
            correctAnswer: "reach for our winter coats."
        },
        {
            id: "10d-q7",
            type: "multiple-choice",
            question: "7. A **symptom** of hunger might be",
            options: [
                "a growling stomach.",
                "feeling very full.",
                "having lots of energy.",
                "laughing uncontrollably."
            ],
            correctAnswer: "a growling stomach."
        },
        {
            id: "10d-q8",
            type: "multiple-choice",
            question: "8. My most **desirable** place to visit is",
            options: [
                "Hawaii.",
                "the dentist's office.",
                "a dark cave.",
                "school on a Saturday."
            ],
            correctAnswer: "Hawaii."
        },
        {
            id: "10d-q9",
            type: "multiple-choice",
            question: "9. I would **cower** from",
            options: [
                "a scary monster.",
                "a cute puppy.",
                "a beautiful flower.",
                "a delicious cake."
            ],
            correctAnswer: "a scary monster."
        },
        {
            id: "10d-q10",
            type: "multiple-choice",
            question: "10. I **banish** fear by",
            options: [
                "turning on all the lights.",
                "telling scary stories.",
                "hiding under the bed.",
                "watching a horror movie."
            ],
            correctAnswer: "turning on all the lights."
        }
    ]
};

export const b4_l10_story_5: Story = {
    id: "b4-l10-s5",
    title: "Reading Passage: Tokoyo and the Sea Monster",
    type: "non-fiction", // Actually fiction/folktale but standard format.
    content: `
Folktales are legends of past events that are passed on from adults to children without ever being written down. Every country has its folktales, and this one from Japan comes to mind. It tells of the adventures of a young pearl diver named Tokoyo who lived in Japan.

The people of Tokoyo's village earned their **livelihood** by diving for pearls. They searched for the one oyster in a thousand that contained a precious pearl. Tokoyo was the youngest of the divers. She could stay underwater for a longer period and collect more oysters than anyone. The ocean was like a second home to her. She swam easily through its **depths** and cut oysters from the rocks with her razor-sharp pearling knife.

The other pearl divers were all the family Tokoyo had. Her mother had died when Tokoyo was a baby. Then, while she was still a child, **misfortune** struck again. Her father had a sense of humor that sometimes got him into difficulties. One day he made an ill-advised joke about the fact that the emperor was an invalid. But making fun of the emperor was a crime. Tokoyo's father was **banished** to the island of Oki, far from the Japanese mainland. To make matters worse, **communication** between Tokoyo and her father was forbidden. Her friends tried to **console** the young girl, but they could not raise her spirits. She felt like an **orphan**. The house that had once echoed with laughter was now filled with misery.

Tokoyo's one **desire** was to be reunited with her father. On her fifteenth birthday she left her village and set off for Oki. Soon after landing on the island, Tokoyo saw a group of people gathered at the edge of a cliff. With them was a girl about her own age dressed all in white. People explained to Tokoyo that an evil sea god made its home in the waters off the island. This god demanded the life of a young girl once a year. They told Tokoyo that the girl **cowering** before them had been selected as the sea god's victim. She was about to be cast into the sea. In addition to this, they told Tokoyo that the sea god had cast a spell on the emperor, causing his many **ailments**. When she heard this, Tokoyo saw a chance to help her father. She begged the people to let her take the girl's place. They began to **deliberate** among themselves while Tokoyo waited anxiously. Finally, to her great relief, they agreed.

Tokoyo strode to the edge of the **precipice**. She took a deep breath and leaped into the water. She swam deeper and deeper, and after what seemed like an eternity, she found herself face to face with the evil sea god. Tokoyo attacked the sea god with her pearling knife, **slaying** him. The spell he had cast on the emperor was broken. In an instant, all the emperor's **symptoms** disappeared. He was delighted to discharge the doctors who had attended him but who had not been able to cure him. When he was informed of Tokoyo's brave deed, he promised the young heroine whatever she wanted. As a result of Tokoyo's wish, her father **regained** his freedom and was happily reunited with his daughter.
    `,
    wordsIncluded: b4_l10_words.map(w => w.id),
    questions: []
};

export const b4_l10_story_6: Story = {
    id: "b4-l10-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* One of the world's oldest languages is Sanskrit. It was spoken in India thousands of years ago and is the special language of the Hindu religion. Very few people speak it today, but some words in European languages are connected to Sanskrit. **Orphan** is one of them. An *orphan* is a child without parents who therefore can be in a weak and helpless state. The word comes from the Sanskrit *arbha*, which means "weak; helpless."

* This lesson includes the word **slay**, which is a homophone of *sleigh*. A *sleigh* is a carriage on runners that travels over snow. *Sleigh* and *slay* are pronounced the same way.
`,
    wordsIncluded: ["orphan", "slay"],
    questions: []
};
