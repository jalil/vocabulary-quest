import { Story, VocabularyWord } from "./types";

export const b4_l12_words: VocabularyWord[] = [
    {
        id: "ability",
        word: "ability",
        definition: "(n.) Power or knowledge; skill.",
        exampleSentence: "Lani's ability to do math problems in her head astounded her teacher.",
        imageEmoji: "🧠",
        category: "Grade 4"
    },
    {
        id: "amiable",
        word: "amiable",
        definition: "(adj.) Friendly; good-natured and pleasant.",
        exampleSentence: "My uncle's amiable manner put my friends at ease right away.",
        imageEmoji: "😊",
        category: "Grade 4"
    },
    {
        id: "bliss",
        word: "bliss",
        definition: "(n.) Complete joy or happiness. (adj.) blissful: Very happy; joyful.",
        exampleSentence: "My idea of bliss is an afternoon on the river with my fishing rod.",
        imageEmoji: "😌",
        category: "Grade 4"
    },
    {
        id: "caress",
        word: "caress",
        definition: "(v.) To touch in a tender or loving way. (n.) A tender or loving touch or hug.",
        exampleSentence: "Sean caressed the baby's forehead gently as it lay sleeping.",
        imageEmoji: "🤲",
        category: "Grade 4"
    },
    {
        id: "clutch",
        word: "clutch",
        definition: "(v.) To grasp or hold tightly to. (n.) The part of a machine that connects and disconnects the power from the rest of the machine.",
        exampleSentence: "Marco clutched his chair as he watched his team in the playoffs.",
        imageEmoji: "✊",
        category: "Grade 4"
    },
    {
        id: "coax",
        word: "coax",
        definition: "(v.) To persuade or urge in a gentle way.",
        exampleSentence: "I coaxed my baby sister to hold my hand as we crossed the street.",
        imageEmoji: "🗣️",
        category: "Grade 4"
    },
    {
        id: "furious",
        word: "furious",
        definition: "(adj.) 1. Very, very angry. 2. Very fast, strong, or wild. (n.) fury: 1. Great anger. 2. Wild and uncontrolled force.",
        exampleSentence: "The emperor was furious when he realized how the two \"tailors\" had tricked him.",
        imageEmoji: "😡",
        category: "Grade 4"
    },
    {
        id: "gesture",
        word: "gesture",
        definition: "(n.) 1. A movement of the arm or hand. 2. Something done to show one's feelings. (v.) To make a movement of the arm or hand.",
        exampleSentence: "The president waved his arm in a farewell gesture before boarding Air Force One.",
        imageEmoji: "👋",
        category: "Grade 4"
    },
    {
        id: "mope",
        word: "mope",
        definition: "(v.) To be sad and gloomy; to lose interest in the things that usually bring pleasure.",
        exampleSentence: "As the long, hot summer days went on and I still had no job, I began to mope.",
        imageEmoji: "😔",
        category: "Grade 4"
    },
    {
        id: "prefer",
        word: "prefer",
        definition: "(v.) To like better; to choose first. (n.) preference: That which is preferred.",
        exampleSentence: "Which do you prefer, chocolate or vanilla?",
        imageEmoji: "🤔",
        category: "Grade 4"
    },
    {
        id: "recover",
        word: "recover",
        definition: "(v.) 1. To get back to a normal state; to get well again. 2. To get back what was lost or stolen. (n.) recovery: 1. A return to a normal state. 2. The act of getting back what was lost or stolen.",
        exampleSentence: "Patrizia soon recovered from the flu.",
        imageEmoji: "🏥",
        category: "Grade 4"
    },
    {
        id: "replace",
        word: "replace",
        definition: "(v.) 1. To take the place of. 2. To put back in place. (n.) replacement: A person or thing that takes the place of another.",
        exampleSentence: "Who will replace Mr. Myers when he leaves the school?",
        imageEmoji: "🔄",
        category: "Grade 4"
    },
    {
        id: "request",
        word: "request",
        definition: "(v.) To ask for. (n.) The thing asked for.",
        exampleSentence: "I requested a veggie pizza for my party.",
        imageEmoji: "🙋",
        category: "Grade 4"
    },
    {
        id: "separate",
        word: "separate",
        definition: "(v.) To set or keep apart. (adj.) Not together; not joined.",
        exampleSentence: "Whenever the twins start fighting, my mother separates them.",
        imageEmoji: "↔️",
        category: "Grade 4"
    },
    {
        id: "shun",
        word: "shun",
        definition: "(v.) To take special pains to avoid; to keep away from.",
        exampleSentence: "Leon ceased his bullying when his classmates started to shun him.",
        imageEmoji: "🚫",
        category: "Grade 4"
    }
];

export const b4_l12_story_1: Story = {
    id: "b4-l12-s1",
    title: "12A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select Correct (C). If the word is used incorrectly, select Incorrect (I).`,
    wordsIncluded: b4_l12_words.map(w => w.id),
    questions: [
        {
            id: "12a-q1",
            type: "multiple-choice",
            question: "1. (a) We should not **shun** others just because they disagree with us.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q1b",
            type: "multiple-choice",
            question: "1. (b) The scoundrel was **shunned** whenever he tried to show his face.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q1c",
            type: "multiple-choice",
            question: "1. (c) **Shun** the light over here so I can see better.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q1d",
            type: "multiple-choice",
            question: "1. (d) Sidney **shunned** her way onto the junior soccer team.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q2",
            type: "multiple-choice",
            question: "2. (a) The friendly handshake was a **gesture** of support.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q2b",
            type: "multiple-choice",
            question: "2. (b) Polo **gestured** his way to the front of the crowd.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // pushed?
        },
        {
            id: "12a-q2c",
            type: "multiple-choice",
            question: "2. (c) The speaker **gestured** to the listeners to come closer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q2d",
            type: "multiple-choice",
            question: "2. (d) Lena added up the **gestures** she had received, and it came to twenty.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q3",
            type: "multiple-choice",
            question: "3. (a) She was ailing but is expected to **recover** completely.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q3b",
            type: "multiple-choice",
            question: "3. (b) He is starting to **recover** his memory after being hit in the head.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q3c",
            type: "multiple-choice",
            question: "3. (c) The British attempted to **recover** the lost treasure.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q3d",
            type: "multiple-choice",
            question: "3. (d) **Recover** me up with the warmest blanket you can find.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Cover
        },
        {
            id: "12a-q4",
            type: "multiple-choice",
            question: "4. (a) The little child **clutched** the teddy bear and refused to let go.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q4b",
            type: "multiple-choice",
            question: "4. (b) A handshake was all it took to **clutch** the agreement.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // seal?
        },
        {
            id: "12a-q4c",
            type: "multiple-choice",
            question: "4. (c) I felt like a **clutch** when I saw how I had been fooled.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q4d",
            type: "multiple-choice",
            question: "4. (d) Let the **clutch** out slowly when you change gears.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q5",
            type: "multiple-choice",
            question: "5. (a) The flag was **replaced** because it was old and filled with holes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q5b",
            type: "multiple-choice",
            question: "5. (b) The band **replaced** the tune over and over until it sounded right.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // replayed/rehearsed
        },
        {
            id: "12a-q5c",
            type: "multiple-choice",
            question: "5. (c) \"But you need to do your homework before you watch TV,\" my mother **replaced**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // replied
        },
        {
            id: "12a-q5d",
            type: "multiple-choice",
            question: "5. (d) Lucia had to repair the class globe, or find a **replacement**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q6",
            type: "multiple-choice",
            question: "6. (a) The **furious** customer demanded an apology.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q6b",
            type: "multiple-choice",
            question: "6. (b) The **fury** of the storm at sea is amazing.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q6c",
            type: "multiple-choice",
            question: "6. (c) She gave me a **furious** wink to show that she understood.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q6d",
            type: "multiple-choice",
            question: "6. (d) She lost her **fury** and didn't know where to find it.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q7",
            type: "multiple-choice",
            question: "7. (a) I **prefer** milk, but lemonade is also good.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q7b",
            type: "multiple-choice",
            question: "7. (b) Let your teacher know your **preference**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q7c",
            type: "multiple-choice",
            question: "7. (c) There is a quick **preference** to cats in the book.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // reference
        },
        {
            id: "12a-q7d",
            type: "multiple-choice",
            question: "7. (d) The friends promised not to **prefer** to each other's mistakes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // refer
        },
        {
            id: "12a-q8",
            type: "multiple-choice",
            question: "8. (a) The mashed potatoes and green beans were served on **separate** plates.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q8b",
            type: "multiple-choice",
            question: "8. (b) My job was to **separate** the good apples from the bad ones.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q8c",
            type: "multiple-choice",
            question: "8. (c) The parts we glued together started to **separate** after a couple hours.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q8d",
            type: "multiple-choice",
            question: "8. (d) Ten dollars seems a really **separate** amount for a bottle of water.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "12a-q9",
            type: "multiple-choice",
            question: "9. (a) My **request** for a part in the play was turned down by the director.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q9b",
            type: "multiple-choice",
            question: "9. (b) You are **requested** to stay in your seats while the bus is moving.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q9c",
            type: "multiple-choice",
            question: "9. (c) Malik **requested** on the chair while he put on his shoes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // rested
        },
        {
            id: "12a-q9d",
            type: "multiple-choice",
            question: "9. (d) Before bed, my little brother was allowed one final **request**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q10",
            type: "multiple-choice",
            question: "10. (a) Washington's **ability** to stay calm made him an excellent president.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q10b",
            type: "multiple-choice",
            question: "10. (b) I asked Vivian about her **abilities** on the diving board.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "12a-q10c",
            type: "multiple-choice",
            question: "10. (c) His **ability** was brought on by a lack of sleep.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // irritability?
        },
        {
            id: "12a-q10d",
            type: "multiple-choice",
            question: "10. (d) The **ability** was large enough to feed four or five people.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        }
    ]
};

export const b4_l12_story_2: Story = {
    id: "b4-l12-s2",
    title: "12B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l12_words.map(w => w.id),
    questions: [
        {
            id: "12b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **unhappy**?",
            options: ["(a) dismay", "(b) mope", "(c) amiable", "(d) misery"],
            correctAnswers: ["(a) dismay", "(b) mope", "(d) misery"]
        },
        {
            id: "12b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **persuade**?",
            options: ["(a) coax", "(b) caress", "(c) clutch", "(d) shun"],
            correctAnswer: "(a) coax"
        },
        {
            id: "12b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **touch**?",
            options: ["(a) clutch", "(b) demolish", "(c) shun", "(d) caress"],
            correctAnswers: ["(a) clutch", "(d) caress"]
        },
        {
            id: "12b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **happiness**?",
            options: ["(a) ability", "(b) bliss", "(c) gesture", "(d) request"],
            correctAnswer: "(b) bliss"
        },
        {
            id: "12b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **friendly**?",
            options: ["(a) embrace", "(b) furious", "(c) deliberate", "(d) amiable"],
            correctAnswers: ["(a) embrace", "(d) amiable"]
        },
        {
            id: "12b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **angry**?",
            options: ["(a) furious", "(b) scarce", "(c) separate", "(d) desirable"],
            correctAnswer: "(a) furious"
        },
        {
            id: "12b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **trees**?",
            options: ["(a) grove", "(b) console", "(c) foliage", "(d) timber"],
            correctAnswers: ["(a) grove", "(c) foliage", "(d) timber"]
        },
        {
            id: "12b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **get back again**?",
            options: ["(a) caress", "(b) discard", "(c) recover", "(d) regain"],
            correctAnswers: ["(c) recover", "(d) regain"]
        },
        {
            id: "12b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **avoid**?",
            options: ["(a) clutch", "(b) shun", "(c) resist", "(d) prefer"],
            correctAnswers: ["(b) shun", "(c) resist"]
        },
        {
            id: "12b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **ask**?",
            options: ["(a) regain", "(b) recover", "(c) replace", "(d) request"],
            correctAnswer: "(d) request"
        }
    ]
};

export const b4_l12_story_3: Story = {
    id: "b4-l12-s3",
    title: "12C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l12_words.map(w => w.id),
    questions: [
        {
            id: "12c-q1",
            type: "multiple-choice",
            question: "1. Evan **clutched**",
            options: [
                "(a) when he should have ducked and was struck out.",
                "(b) his sister's hand when they crossed the street.",
                "(c) the ball in a tight grip before throwing it.",
                "(d) the deal when the price was finally agreed upon."
            ],
            correctAnswers: ["(b) his sister's hand when they crossed the street.", "(c) the ball in a tight grip before throwing it."]
        },
        {
            id: "12c-q2",
            type: "multiple-choice",
            question: "2. His **preference**",
            options: [
                "(a) was not going to change.",
                "(b) is to stay home and watch TV.",
                "(c) is for vanilla, but he also likes chocolate.",
                "(d) was missed by all those who knew him."
            ],
            correctAnswers: ["(a) was not going to change.", "(b) is to stay home and watch TV.", "(c) is for vanilla, but he also likes chocolate."]
        },
        {
            id: "12c-q3",
            type: "multiple-choice",
            question: "3. The **separation**",
            options: [
                "(a) was added to the spaghetti.",
                "(b) of paper and plastic into two piles took a long time to finish.",
                "(c) of the twins kept them from fighting.",
                "(d) of the large branch from the tree happened during the storm."
            ],
            correctAnswers: ["(b) of paper and plastic into two piles took a long time to finish.", "(c) of the twins kept them from fighting.", "(d) of the large branch from the tree happened during the storm."]
        },
        {
            id: "12c-q4",
            type: "multiple-choice",
            question: "4. They are **replacing**",
            options: [
                "(a) loudly that it wasn't their idea.",
                "(b) it high into the sky.",
                "(c) the old bike with the newer version.",
                "(d) coal with natural gas because it's cleaner."
            ],
            correctAnswers: ["(c) the old bike with the newer version.", "(d) coal with natural gas because it's cleaner."]
        },
        {
            id: "12c-q5",
            type: "multiple-choice",
            question: "5. Her **ability**",
            options: [
                "(a) was divided between good and bad.",
                "(b) to make friends was a great thing to have.",
                "(c) came out of the laundry looking as good as new.",
                "(d) to know what I was thinking sometimes astonished me."
            ],
            correctAnswers: ["(b) to make friends was a great thing to have.", "(d) to know what I was thinking sometimes astonished me."]
        },
        {
            id: "12c-q6",
            type: "multiple-choice",
            question: "6. **Coax**",
            options: [
                "(a) should be eaten three times a day for best results.",
                "(b) the cat down from the tree with this fake mouse.",
                "(c) all your friends into voting for me.",
                "(d) the horse back into the stable with a carrot."
            ],
            correctAnswers: ["(b) the cat down from the tree with this fake mouse.", "(c) all your friends into voting for me.", "(d) the horse back into the stable with a carrot."]
        },
        {
            id: "12c-q7",
            type: "multiple-choice",
            question: "7. She **gestured**",
            options: [
                "(a) her concern by writing a letter to the principal.",
                "(b) that her home was her castle.",
                "(c) for the people to go over there.",
                "(d) by raising her arm over her head."
            ],
            correctAnswers: ["(c) for the people to go over there.", "(d) by raising her arm over her head."]
        },
        {
            id: "12c-q8",
            type: "multiple-choice",
            question: "8. An **amiable**",
            options: [
                "(a) personality wins you lots of friends.",
                "(b) smell came from underneath the floor.",
                "(c) amount was raised from the ticket sales.",
                "(d) smile lit up Maria's face."
            ],
            correctAnswers: ["(a) personality wins you lots of friends.", "(d) smile lit up Maria's face."]
        }
    ]
};

export const b4_l12_story_4: Story = {
    id: "b4-l12-s4",
    title: "12D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l12_words.map(w => w.id),
    questions: [
        {
            id: "12d-q1",
            type: "multiple-choice",
            question: "1. If you have a **blissful** expression, you look",
            options: ["very happy", "sad and angry", "confused", "tired"],
            correctAnswer: "very happy"
        },
        {
            id: "12d-q2",
            type: "multiple-choice",
            question: "2. I move around **furiously** when",
            options: ["I am cleaning my room in a hurry", "I am sleeping", "I am reading a book", "I am watching TV"],
            correctAnswer: "I am cleaning my room in a hurry"
        },
        {
            id: "12d-q3",
            type: "multiple-choice",
            question: "3. A gentle **caress** feels",
            options: ["soft and loving", "rough and painful", "cold and wet", "sharp and prickly"],
            correctAnswer: "soft and loving"
        },
        {
            id: "12d-q4",
            type: "multiple-choice",
            question: "4. Something I wish I could **shun** is",
            options: ["doing chores", "eating ice cream", "playing games", "meeting friends"],
            correctAnswer: "doing chores"
        },
        {
            id: "12d-q5",
            type: "multiple-choice",
            question: "5. An example of an **amiable** greeting is",
            options: ["a warm smile and hello", "a frown", "turning your back", "yelling go away"],
            correctAnswer: "a warm smile and hello"
        },
        {
            id: "12d-q6",
            type: "multiple-choice",
            question: "6. Sometimes I **mope** when",
            options: ["I don't get what I want", "I win a game", "I eat dinner", "I see a movie"],
            correctAnswer: "I don't get what I want"
        },
        {
            id: "12d-q7",
            type: "multiple-choice",
            question: "7. I would like to **request**",
            options: ["a new bicycle", "a broken toy", "a bad grade", "a rainy day"],
            correctAnswer: "a new bicycle"
        },
        {
            id: "12d-q8",
            type: "multiple-choice",
            question: "8. If countries are **separate**, that means they are",
            options: ["apart from each other", "joined together", "the same country", "ruled by one king"],
            correctAnswer: "apart from each other"
        },
        {
            id: "12d-q9",
            type: "multiple-choice",
            question: "9. To **prefer** something is to",
            options: ["like it better than something else", "hate it", "throw it away", "ignore it"],
            correctAnswer: "like it better than something else"
        },
        {
            id: "12d-q10",
            type: "multiple-choice",
            question: "10. Something I like to **clutch** is",
            options: ["a pillow when I'm scared", "hot soup", "a cactus", "water"],
            correctAnswer: "a pillow when I'm scared"
        }
    ]
};

export const b4_l12_story_5: Story = {
    id: "b4-l12-s5",
    title: "Reading Passage: Communicating with Koko",
    type: "non-fiction",
    content: `
American Sign Language (ASL) is a form of communication that is as rich and flexible as spoken English. It is used by hundreds of thousands of hearing-impaired people. Each **gesture** of the hand or arm has a particular meaning. In the early 1970s, a most unusual student began learning to communicate through ASL. Her name was Koko, and her teacher was Dr. Francine Patterson.

Koko, a gorilla, was born in the San Francisco Zoo. While still a baby, she became ill and had to be **separated** from the other gorillas. She lived in a specially equipped trailer, where Dr. Patterson took care of her. Dr. Patterson is a scientist interested in animal behavior. While nursing Koko back to health, she had another goal as well. Slowly and with great difficulty, she taught the young gorilla to communicate using ASL.

Dr. Patterson made up little games for teaching Koko how to use her hands. She began by working on words for food and drink. She would show Koko an object, say the word, and make the sign. For example, she would sign the word for *drink* before giving Koko a drink. Koko began to show that she understood Dr. Patterson's **gestures** after only two weeks. Once she made the association between hand movements and the objects they represented, she quickly began to learn words. By eighteen months, she knew twenty-two signs; by three years and three months, she could make seventy-eight understandable signs. Over a period of six years, she learned over a thousand words. She could even string words together to form simple sentences.

Dr. Patterson also used picture books to teach Koko new words. Koko **preferred** looking at books with pictures of gorillas and cats. So when Dr. Patterson asked Koko what she wanted for her birthday, she wasn't surprised when Koko **requested** a cat. Koko was usually a very **amiable** creature. But when she opened Dr. Patterson's present and saw a stuffed animal, she was **furious**. She threw it away. Dr. Patterson tried to **coax** the unhappy gorilla to play with the toy cat. Her attempts failed. Koko knew the difference between a real cat and a toy one. She **shunned** the stuffed animal completely. She wanted a real cat.

A few weeks later Dr. Patterson gave Koko a little gray kitten. Koko picked up the kitten very carefully and **caressed** it gently. When asked what she was going to call it, she signed "All Ball." Perhaps she gave it this name because it had no tail. Without a tail it looked just like a ball of fur. Koko carried All Ball around on her back. The kitten **clutched** Koko's fur, the way baby gorillas do with their mothers. Koko loved to play games with All Ball; the two became close friends.

One day All Ball was hit by a car and died. For days afterward, Koko **moped**—miserable over the loss of her friend. Koko **recovered** her good spirits when Dr. Patterson gave her another kitten to **replace** All Ball. When Koko got her new pet, she picked it up and held it lovingly. A **blissful** look spread over her face.

With language comes the **ability** to make jokes—and also to lie. Koko learned to do both. One day she broke the sink in the trailer. When Dr. Patterson asked her who had done it, Koko signed the name of the person who had been in the trailer with her. Another time she pointed to a white towel and signed "red." She was corrected several times but refused to admit she had made a mistake. Then she slyly picked a tiny piece of lint off the towel. It was red!

Gorillas seldom live longer than about thirty-five years, but in 2015 Koko had a birthday. She was forty-four. The present she was given: a pair of kittens.
    `,
    wordsIncluded: b4_l12_words.map(w => w.id),
    questions: []
};

export const b4_l12_story_6: Story = {
    id: "b4-l12-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* You are likely to **caress** those who are most dear to you. This is not surprising, because the word comes from the Latin *caro*, which means "dear." You might think that the word *care* comes from this same Latin root because we *care* for those who are *dear* to us, but it comes from something totally different: the Old English word *cearu*.

* The noun **clutch** has an unusual meaning when it is used as the plural noun *clutches*. To be "in the *clutches*" of something or somebody is to be in the power of that thing or that person. People who are taken hostage are in the *clutches* of those who have taken them prisoner; criminals spend a lot of time trying to avoid the *clutches* of the law.
`,
    wordsIncluded: ["caress", "clutch"],
    questions: []
};
