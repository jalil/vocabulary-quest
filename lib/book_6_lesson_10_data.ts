import { Story, VocabularyWord } from "./types";

export const b6_l10_words: VocabularyWord[] = [
    {
        id: "anticipate",
        word: "anticipate",
        definition: "(v.) 1. To look forward to; to expect. 2. To be aware of and to provide for beforehand.",
        exampleSentence: "We anticipated having a good time at the party.",
        imageEmoji: "🔮",
        category: "Grade 6"
    },
    {
        id: "bankrupt",
        word: "bankrupt",
        definition: "(adj.) 1. Unable to pay one's debts and freed by law from doing so. 2. Left without any worth or value. (v.) To leave without worth or value.",
        exampleSentence: "The store owner was bankrupt after the business failed.",
        imageEmoji: "💸",
        category: "Grade 6"
    },
    {
        id: "brief",
        word: "brief",
        definition: "(adj.) Short; not long-lasting. (v.) To give a short explanation or set of instructions to. (n.) A statement giving the main points in a case, for use in a court of law.",
        exampleSentence: "The guests had time for just a brief visit, so they did not linger when it was time to leave.",
        imageEmoji: "⏱️",
        category: "Grade 6"
    },
    {
        id: "brisk",
        word: "brisk",
        definition: "(adj.) 1. Quick; active. 2. Stimulating; refreshing.",
        exampleSentence: "The runners kept up a brisk pace at the start of the race.",
        imageEmoji: "🏃",
        category: "Grade 6"
    },
    {
        id: "budget",
        word: "budget",
        definition: "(n.) A plan for spending money during a certain period. (v.) To plan the use of carefully.",
        exampleSentence: "The extravagant dinner caused the family to overspend their weekly food budget.",
        imageEmoji: "💰",
        category: "Grade 6"
    },
    {
        id: "compete",
        word: "compete",
        definition: "(v.) To try to win against others. competition (n.) 1. The act of trying to win against others. 2. A contest. competitor (n.) One who competes against others.",
        exampleSentence: "Five students competed for first prize.",
        imageEmoji: "🏆",
        category: "Grade 6"
    },
    {
        id: "complicate",
        word: "complicate",
        definition: "(v.) To make difficult. complicated (adj.) Not easy or simple; having many different parts.",
        exampleSentence: "An extra guest may complicate the seating arrangements.",
        imageEmoji: "🧩",
        category: "Grade 6"
    },
    {
        id: "effect",
        word: "effect",
        definition: "(v.) To make happen. (n.) A result. effective (adj.) 1. Bringing about the desired result. 2. In operation; active. 3. Making a strong and favorable impression.",
        exampleSentence: "The new principal will effect many changes.",
        imageEmoji: "💥",
        category: "Grade 6"
    },
    {
        id: "err",
        word: "err",
        definition: "(v.) To be wrong or to do wrong. error (n.) A mistake. erroneous (adj.) Mistaken; wrong.",
        exampleSentence: "I erred when I accused you of lying.",
        imageEmoji: "❌",
        category: "Grade 6"
    },
    {
        id: "factor",
        word: "factor",
        definition: "(n.) Something that contributes to a result.",
        exampleSentence: "Paying attention and studying diligently are two factors in getting good grades.",
        imageEmoji: "➕",
        category: "Grade 6"
    },
    {
        id: "fad",
        word: "fad",
        definition: "(n.) Something that is very popular for a short time, then forgotten.",
        exampleSentence: "Ankle bracelets were the fad one summer.",
        imageEmoji: "💫",
        category: "Grade 6"
    },
    {
        id: "gripe",
        word: "gripe",
        definition: "(v.) 1. To complain. 2. To annoy or irritate. (n.) A complaint.",
        exampleSentence: "The children always gripe about having to get up early.",
        imageEmoji: "🗣️",
        category: "Grade 6"
    },
    {
        id: "knack",
        word: "knack",
        definition: "(n.) A special talent or skill; ability to do something easily.",
        exampleSentence: "My mother has a knack for making friends wherever she goes.",
        imageEmoji: "🤹",
        category: "Grade 6"
    },
    {
        id: "leisure",
        word: "leisure",
        definition: "(n.) Free time not taken up with work. leisurely (adj.) Slow; relaxed.",
        exampleSentence: "My father's sixty-hour work week allows little time for leisure.",
        imageEmoji: "🏖️",
        category: "Grade 6"
    },
    {
        id: "unique",
        word: "unique",
        definition: "(adj.) The only one of its kind.",
        exampleSentence: "The platypus, a mammal that lays eggs, is unique among animals.",
        imageEmoji: "🦄",
        category: "Grade 6"
    }
];

export const b6_l10_story_1: Story = {
    id: "b6-l10-s1",
    title: "10A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l10_words.map(w => w.id),
    questions: [
        {
            id: "10a-q1",
            type: "multiple-choice",
            question: "1. (a) Dinner is at six, so please get **effective** for it.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q2",
            type: "multiple-choice",
            question: "1. (b) The new coach plans to **effect** some changes on the team.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q3",
            type: "multiple-choice",
            question: "1. (c) The rule was **effective** immediately.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q4",
            type: "multiple-choice",
            question: "1. (d) The tea I drank for the flu had the desired **effect**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q5",
            type: "multiple-choice",
            question: "2. (a) For a **brief** moment, I thought I was dreaming.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q6",
            type: "multiple-choice",
            question: "2. (b) The mayor was **briefed** on the earthquake that night.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q7",
            type: "multiple-choice",
            question: "2. (c) The lawyer took her **brief** to the courthouse.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q8",
            type: "multiple-choice",
            question: "2. (d) We **briefed** a sigh of relief when we made it through the snow.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // breathed.
        },
        {
            id: "10a-q9",
            type: "multiple-choice",
            question: "3. (a) When my little brother starts to get **erroneous**, I tell him to be quiet.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // rambunctious? annoying?
        },
        {
            id: "10a-q10",
            type: "multiple-choice",
            question: "3. (b) It is **erroneous** to say that a kitten is a baby dog.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q11",
            type: "multiple-choice",
            question: "3. (c) There is an **error** in the book.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q12",
            type: "multiple-choice",
            question: "3. (d) I **erred** to the top of the hill.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q13",
            type: "multiple-choice",
            question: "4. (a) The **competition** for the spelling bee is intense.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q14",
            type: "multiple-choice",
            question: "4. (b) Over two hundred nations **compete** in the Olympic Games.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q15",
            type: "multiple-choice",
            question: "4. (c) She was a **competitor** who hated to lose.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q16",
            type: "multiple-choice",
            question: "4. (d) I **competed** that we had only one slice of bread left.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // complained? computed?
        },
        {
            id: "10a-q17",
            type: "multiple-choice",
            question: "5. (a) Four teams **anticipated** in the finals.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // participated.
        },
        {
            id: "10a-q18",
            type: "multiple-choice",
            question: "5. (b) We **anticipated** a few problems, but nothing serious happened.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q19",
            type: "multiple-choice",
            question: "5. (c) They **anticipated** that a lot of people would be at the carnival.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q20",
            type: "multiple-choice",
            question: "5. (d) I **anticipated** the cat down from the tree.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q21",
            type: "multiple-choice",
            question: "6. (a) Jana started her day with a **brisk** cold shower.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q22",
            type: "multiple-choice",
            question: "6. (b) His **brisk** personality did not make him very popular.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // brusque.
        },
        {
            id: "10a-q23",
            type: "multiple-choice",
            question: "6. (c) Why **brisk** the floor if it's already clean?",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // whisk? broom?
        },
        {
            id: "10a-q24",
            type: "multiple-choice",
            question: "6. (d) You need plenty of **brisk** to win the game.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // risk?
        },
        {
            id: "10a-q25",
            type: "multiple-choice",
            question: "7. (a) The instructions were very **complicated**, so I wrote them down.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q26",
            type: "multiple-choice",
            question: "7. (b) Cheyenne **complicates** things more than they need to be.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q27",
            type: "multiple-choice",
            question: "7. (c) The teacher **complicated** that the students did a great job on the homework.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // complimented.
        },
        {
            id: "10a-q28",
            type: "multiple-choice",
            question: "7. (d) Josiah was **complicated** for having the highest grade on the test.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // complimented.
        },
        {
            id: "10a-q29",
            type: "multiple-choice",
            question: "8. (a) The weather will be a **factor** in whether we play.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q30",
            type: "multiple-choice",
            question: "8. (b) Several **factors** led to the Great Deperession.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q31",
            type: "multiple-choice",
            question: "8. (c) The **factors** make the parts for the cars.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // factories.
        },
        {
            id: "10a-q32",
            type: "multiple-choice",
            question: "8. (d) You can't **factor** if you want me to like you.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q33",
            type: "multiple-choice",
            question: "9. (a) My mom said my **leisure** was crooked.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q34",
            type: "multiple-choice",
            question: "9. (b) My **leisure** time is spent reading.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q35",
            type: "multiple-choice",
            question: "9. (c) We took a **leisurely** walk through the park.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q36",
            type: "multiple-choice",
            question: "9. (d) Crack open the **leisure** so we can see what's inside.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "10a-q37",
            type: "multiple-choice",
            question: "10. (a) Tiana **griped** because she was in a bad mood.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q38",
            type: "multiple-choice",
            question: "10. (b) My **gripe** is that we have too much schoolwork to do.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "10a-q39",
            type: "multiple-choice",
            question: "10. (c) The **gripes** are picked in October before it gets too cold.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // grapes.
        },
        {
            id: "10a-q40",
            type: "multiple-choice",
            question: "10. (d) The teacher listened to our **gripes** and promised to make some changes.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        }
    ]
};

export const b6_l10_story_2: Story = {
    id: "b6-l10-s2",
    title: "10B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l10_words.map(w => w.id),
    questions: [
        {
            id: "10b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *money*?",
            options: ["(a) bankrupt", "(b) motion", "(c) budget", "(d) fad"],
            correctAnswers: ["(a) bankrupt", "(c) budget"]
        },
        {
            id: "10b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *short*?",
            options: ["(a) brisk", "(b) brief", "(c) minute", "(d) elusive"],
            correctAnswers: ["(b) brief", "(c) minute"]
        },
        {
            id: "10b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *mistake*?",
            options: ["(a) rouse", "(b) compete", "(c) err", "(d) bungle"],
            correctAnswers: ["(c) err", "(d) bungle"]
        },
        {
            id: "10b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *look forward to*?",
            options: ["(a) effect", "(b) ancestor", "(c) anticipate", "(d) brisk"],
            correctAnswers: ["(c) anticipate"]
        },
        {
            id: "10b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *successful*?",
            options: ["(a) brief", "(b) complicated", "(c) effective", "(d) erroneous"],
            correctAnswers: ["(c) effective"]
        },
        {
            id: "10b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *complain*?",
            options: ["(a) restrict", "(b) gripe", "(c) fad", "(d) knack"],
            correctAnswers: ["(b) gripe"]
        },
        {
            id: "10b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *talent*?",
            options: ["(a) ability", "(b) budget", "(c) knack", "(d) factor"],
            correctAnswers: ["(a) ability", "(c) knack"]
        },
        {
            id: "10b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *sports*?",
            options: ["(a) linger", "(b) compete", "(c) challenge", "(d) complicate"],
            correctAnswers: ["(b) compete", "(c) challenge"]
        },
        {
            id: "10b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *the only one*?",
            options: ["(a) erroneous", "(b) solitary", "(c) effective", "(d) unique"],
            correctAnswers: ["(b) solitary", "(d) unique"]
        },
        {
            id: "10b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *fashion*?",
            options: ["(a) apparel", "(b) fad", "(c) attire", "(d) factor"],
            correctAnswers: ["(a) apparel", "(b) fad", "(c) attire"]
        }
    ]
};

export const b6_l10_story_3: Story = {
    id: "b6-l10-s3",
    title: "10C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l10_words.map(w => w.id),
    questions: [
        {
            id: "10c-q1",
            type: "multiple-choice",
            question: "1. His **uniqueness**",
            options: ["(a) makes him special.", "(b) comes from his sense of humor.", "(c) always hurts when he bends his arm.", "(d) looks like he spent a lot of time on it."],
            correctAnswers: ["(a) makes him special.", "(b) comes from his sense of humor."]
        },
        {
            id: "10c-q2",
            type: "multiple-choice",
            question: "2. A **leisurely**",
            options: ["(a) piece of paper is very light.", "(b) girl tried to finish her book as fast as she could.", "(c) meal can take an hour or more.", "(d) afternoon may be spent resting."],
            correctAnswers: ["(c) meal can take an hour or more.", "(d) afternoon may be spent resting."]
        },
        {
            id: "10c-q3",
            type: "multiple-choice",
            question: "3. **Factors**",
            options: ["(a) that might make you late are bad weather and traffic.", "(b) get bigger the more you try to stop them.", "(c) are formed at the end of rainbows.", "(d) such as who can come to your birthday party are important for planning."],
            correctAnswers: ["(a) that might make you late are bad weather and traffic.", "(d) such as who can come to your birthday party are important for planning."]
        },
        {
            id: "10c-q4",
            type: "multiple-choice",
            question: "4. **Fads**",
            options: ["(a) in space are made of dust and gas.", "(b) are things that are briefly popular.", "(c) burrowed into the dirt to escape the predator.", "(d) that summer involved rolling up your pants."],
            correctAnswers: ["(b) are things that are briefly popular.", "(d) that summer involved rolling up your pants."]
        },
        {
            id: "10c-q5",
            type: "multiple-choice",
            question: "5. A **complicated**",
            options: ["(a) design involving different shapes was chosen for the wall.", "(b) plot makes it hard to follow what's happening in the movie.", "(c) glass of water sat on the table.", "(d) person is very simple and easy to understand."],
            correctAnswers: ["(a) design involving different shapes was chosen for the wall.", "(b) plot makes it hard to follow what's happening in the movie."]
        },
        {
            id: "10c-q6",
            type: "multiple-choice",
            question: "6. The **budgets**",
            options: ["(a) were let out of the cage to fly around the room.", "(b) left me with ten extra dollars each week.", "(c) were set in August for the new school year.", "(d) had a crack in it that was easy to repair."],
            correctAnswers: ["(b) left me with ten extra dollars each week.", "(c) were set in August for the new school year."]
        },
        {
            id: "10c-q7",
            type: "multiple-choice",
            question: "7. **Bankruptcy**",
            options: ["(a) left Mr. Simon unable to pay anyone back.", "(b) frustrated the owner's dreams of expanding her store.", "(c) creates flowers that attract bees.", "(d) in bones can make them break more easily."],
            correctAnswers: ["(a) left Mr. Simon unable to pay anyone back.", "(b) frustrated the owner's dreams of expanding her store."]
        },
        {
            id: "10c-q8",
            type: "multiple-choice",
            question: "8. I **briskly**",
            options: ["(a) ran a mile in gym class.", "(b) poured the syrup slowly onto the waffle.", "(c) tiptoed up the stairs so I wouldn't wake anyone.", "(d) chased my sister up and down the street during a game of tag."],
            correctAnswers: ["(a) ran a mile in gym class.", "(d) chased my sister up and down the street during a game of tag."]
        }
    ]
};

export const b6_l10_story_4: Story = {
    id: "b6-l10-s4",
    title: "10D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l10_words.map(w => w.id),
    questions: [
        {
            id: "10d-q1",
            type: "open-ended",
            question: "1. I would win a **competition** in",
            sampleAnswer: "swimming."
        },
        {
            id: "10d-q2",
            type: "open-ended",
            question: "2. An **effective** way to get a good night's sleep is to",
            sampleAnswer: "go to bed early and relax."
        },
        {
            id: "10d-q3",
            type: "open-ended",
            question: "3. An example of an **error** in punctuation might be",
            sampleAnswer: "forgetting a period at the end of a sentence."
        },
        {
            id: "10d-q4",
            type: "open-ended",
            question: "4. A company is **bankrupted** when",
            sampleAnswer: "it cannot pay its debts."
        },
        {
            id: "10d-q5",
            type: "open-ended",
            question: "5. A **factor** that might make me run home after school is",
            sampleAnswer: "a thunderstorm."
        },
        {
            id: "10d-q6",
            type: "open-ended",
            question: "6. Something I **anticipate** about tomorrow is",
            sampleAnswer: "seeing my friends at school."
        },
        {
            id: "10d-q7",
            type: "open-ended",
            question: "7. A **fad** I know about is",
            sampleAnswer: "wearing silly bands."
        },
        {
            id: "10d-q8",
            type: "open-ended",
            question: "8. Something I **gripe** about is",
            sampleAnswer: "having to clean my room."
        },
        {
            id: "10d-q9",
            type: "open-ended",
            question: "9. **Complicated** math problems make me feel",
            sampleAnswer: "frustrated or confused."
        },
        {
            id: "10d-q10",
            type: "open-ended",
            question: "10. A **budget** is",
            sampleAnswer: "a plan for spending money."
        }
    ]
};

export const b6_l10_story_passage: Story = {
    id: "b6-l10-passage",
    title: "Reading Passage: Fun and Games",
    type: "non-fiction",
    content: `
Have you ever invented a new game or toy? Lots of people have, and most of them would tell you that it's not all fun and games. In fact, inventing and producing games is a very serious business.

Many of those who have tried to interest a company in their inventions have a common **gripe**: Most companies will not consider an idea from someone unknown to them. Companies prefer to deal only with established inventors with whom they have developed a long-term relationship. These veteran inventors have a **knack** for thinking up ideas—lots of them—for new toys and games. Just as important, they are willing to spend the time to develop their ideas. Only then do they take their new game or toy to a company and try to sell it.

Toys and games are big business. People may complain that they have less **leisure** time than they used to, but today they spend far more money on ways to fill this time. Billions of dollars are spent this way in the United States alone each year. Toy stores do a **brisk** business in the weeks between Thanksgiving and the end of the year. They can **anticipate** selling more toys and games in this one period than in the entire rest of the year! Companies **compete** to meet the enormous demand by engaging in a perpetual search for new products. These companies aren't interested in warmed-over ideas from previous years; they are looking for something **unique**.

Originality may be the main consideration, but companies must also keep other **factors** in mind when deciding which games or toys to produce. First, the cost of producing a new product is very important; the less **complicated** the toy or game is, the cheaper it will be to make. Companies also take into account the age of the children for whom the toy or game is intended; if it is easy to understand, then younger children will be able to play it. The result is an increase in the number of likely buyers. Finally, the larger companies with big advertising **budgets** must ask whether they can make an **effective** television commercial for the new product.

Producing a new toy or game is risky, but the rewards can be great. If a company **errs** by putting a lot of money into a new toy or game that fails to sell, the company can go **bankrupt**. If it is successful, on the other hand, everyone is ecstatic. Even success is not without risks. Should a game or toy catch on, the maker may not be in a position to meet the sudden demand. By the time the factory is able to turn out the items, the **fad** may have died down. Then the company is left with tens of thousands of items it cannot sell.

In fact, most toys and games do have **brief** lives, but there are always exceptions. Monopoly has been a popular game for more than eighty years. Over 250 million Monopoly games have been sold. Of course, only a handful of lucky inventors create highly successful new toys or games and become millionaires. But inventors are natural optimists. That is why there is no shortage of newcomers eager to break into this high-stakes business.
    `,
    wordsIncluded: b6_l10_words.map(w => w.id),
    questions: [
        {
            id: "b6-l10-p-q1",
            type: "multiple-choice",
            question: "Why are large companies able to advertise heavily on television?",
            options: [
                "They have big advertising budgets.",
                "They own the television stations.",
                "The government pays for their ads.",
                "Television stations give them free airtime."
            ],
            correctAnswer: "They have big advertising budgets."
        },
        {
            id: "b6-l10-p-q2",
            type: "multiple-choice",
            question: "How long do most toys and games remain popular?",
            options: [
                "They have brief lives.",
                "They remain popular for decades.",
                "They are popular for exactly one year.",
                "They never become popular."
            ],
            correctAnswer: "They have brief lives."
        },
        {
            id: "b6-l10-p-q3",
            type: "multiple-choice",
            question: "Why might a toy-store owner **gripe** about a severe storm in December?",
            options: [
                "Because it would hurt business during the brisk selling period.",
                "Because the store roof might leak.",
                "Because they wanted to go skiing.",
                "Because the delivery trucks would be late."
            ],
            correctAnswer: "Because it would hurt business during the brisk selling period."
        },
        {
            id: "b6-l10-p-q4",
            type: "multiple-choice",
            question: "Is the belief that one can get rich by inventing games an **erroneous** one?",
            options: [
                "No, because some lucky inventors become millionaires, though it is risky.",
                "Yes, because no one ever makes money inventing games.",
                "No, because it is guaranteed that you will get rich.",
                "Yes, because the government takes all the money."
            ],
            correctAnswer: "No, because some lucky inventors become millionaires, though it is risky."
        },
        {
            id: "b6-l10-p-q5",
            type: "multiple-choice",
            question: "What is the meaning of **brisk** as it is used in the passage?",
            options: [
                "Active or busy.",
                "Cold and windy.",
                "Slow and sluggish.",
                "Short and brief."
            ],
            correctAnswer: "Active or busy."
        },
        {
            id: "b6-l10-p-q6",
            type: "multiple-choice",
            question: "What happens when more and more companies get into the games business?",
            options: [
                "They **compete** to meet the enormous demand.",
                "They join together to form one big company.",
                "They stop making new games.",
                "They lower the prices of all games."
            ],
            correctAnswer: "They **compete** to meet the enormous demand."
        },
        {
            id: "b6-l10-p-q7",
            type: "multiple-choice",
            question: "According to the passage, what is true about **leisure** time today versus the past?",
            options: [
                "People spend far more money on ways to fill their leisure time today.",
                "People have much more leisure time today than they used to.",
                "People spend less money on leisure activities today.",
                "People prefer to work during their leisure time."
            ],
            correctAnswer: "People spend far more money on ways to fill their leisure time today."
        },
        {
            id: "b6-l10-p-q8",
            type: "multiple-choice",
            question: "Why would it be incorrect to call Monopoly a **fad**?",
            options: [
                "Because it has been popular for more than eighty years.",
                "Because it is a board game, not a toy.",
                "Because it costs too much money.",
                "Because fads are only for clothing."
            ],
            correctAnswer: "Because it has been popular for more than eighty years."
        },
        {
            id: "b6-l10-p-q9",
            type: "multiple-choice",
            question: "What is the meaning of **anticipate** as it is used in the passage?",
            options: [
                "To expect.",
                "To doubt.",
                "To fear.",
                "To prevent."
            ],
            correctAnswer: "To expect."
        },
        {
            id: "b6-l10-p-q10",
            type: "multiple-choice",
            question: "What kind of toy or game usually appeals to very young children?",
            options: [
                "One that is not complicated.",
                "One that is expensive.",
                "One that has many small pieces.",
                "One that requires reading instructions."
            ],
            correctAnswer: "One that is not complicated."
        },
        {
            id: "b6-l10-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **effective** as it is used in the passage?",
            options: [
                "Making a strong and favorable impression.",
                "Cheapest to produce.",
                "Lasting a short time.",
                "Hard to understand."
            ],
            correctAnswer: "Making a strong and favorable impression."
        },
        {
            id: "b6-l10-p-q12",
            type: "multiple-choice",
            question: "Why is the decision to make a new toy not a quick and easy process for a company?",
            options: [
                "They have to consider many factors like cost, age group, and uniqueness.",
                "They have to wait for the government to approve it.",
                "They have to ask every child in the country first.",
                "They operate blindly without any planning."
            ],
            correctAnswer: "They have to consider many factors like cost, age group, and uniqueness."
        },
        {
            id: "b6-l10-p-q13",
            type: "multiple-choice",
            question: "What does a person need in order to be a successful games inventor?",
            options: [
                "A **knack** for thinking up ideas.",
                "A lot of money.",
                "A large factory.",
                "A degree in engineering."
            ],
            correctAnswer: "A **knack** for thinking up ideas."
        },
        {
            id: "b6-l10-p-q14",
            type: "multiple-choice",
            question: "What is the meaning of **bankrupt** as it is used in the passage?",
            options: [
                "Unable to pay one's debts.",
                "Having a lot of money.",
                "Winning a competition.",
                "Breaking a rule."
            ],
            correctAnswer: "Unable to pay one's debts."
        },
        {
            id: "b6-l10-p-q15",
            type: "multiple-choice",
            question: "What is the most important thing that games companies look for when considering a game?",
            options: [
                "Uniqueness.",
                "Complexity.",
                "Similarity to other games.",
                "High price."
            ],
            correctAnswer: "Uniqueness."
        }
    ]
};

export const b6_l10_story_facts: Story = {
    id: "b6-l10-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Effect** is a verb and means "to make happen." It is also a noun and means "a result." *Affect* is a verb and means "to cause a change in." (The bus strike will *affect* our travel plans.) It also means "to pretend to have." (He *affected* a British accent when in England because he didn't want to sound like a tourist.)

* **Unique** means "the only one of its kind." It is incorrect to say that something is "very *unique*" or "most *unique*"; if something is the only one of its kind, it cannot be compared to something else.

* In addition to meaning "something that contributes to a result," **factor** is also a term used in mathematics, where it has two separate but related meanings. A *factor* is one of two or more numbers that divide a given number without a remainder: 2, 3, and 5 are *factors* of 30, as are 5 and 6, 3 and 10, and 2 and 15. A *factor* is also the number of times a given number is increased or decreased. A population that goes from 2 million to 6 million has increased by a *factor* of 3.
    `,
    wordsIncluded: ["effect", "unique", "factor"],
    questions: []
};
