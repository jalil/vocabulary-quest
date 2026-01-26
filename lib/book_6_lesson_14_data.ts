import { Story, VocabularyWord } from "./types";

export const b6_l14_words: VocabularyWord[] = [
    {
        id: "benevolent",
        word: "benevolent",
        definition: "(adj.) Wanting to do good; kind.",
        exampleSentence: "A benevolent employee paid for the team's Little League uniforms.",
        imageEmoji: "😇",
        category: "Grade 6"
    },
    {
        id: "consent",
        word: "consent",
        definition: "(v.) To agree; to allow to happen. (n.) Permission; approval.",
        exampleSentence: "The judges consented to hear the case.",
        imageEmoji: "👍",
        category: "Grade 6"
    },
    {
        id: "discreet",
        word: "discreet",
        definition: "(adj.) Showing care or wisdom in what one says or does. discretion (n.) The ability to handle matters wisely.",
        exampleSentence: "The counselor made discreet inquiries into the student's past.",
        imageEmoji: "🤫",
        category: "Grade 6"
    },
    {
        id: "engross",
        word: "engross",
        definition: "(v.) To take up one's complete attention. engrossing (adj.) Taking up one's complete attention.",
        exampleSentence: "The puzzle so engrossed me that I lost track of time.",
        imageEmoji: "🤩",
        category: "Grade 6"
    },
    {
        id: "esteem",
        word: "esteem",
        definition: "(v.) To think highly of; to respect. (n.) Respect; high regard. esteemed (adj.) Highly regarded.",
        exampleSentence: "Historians esteem Eleanor Roosevelt for her human rights work.",
        imageEmoji: "🏆",
        category: "Grade 6"
    },
    {
        id: "exaggerate",
        word: "exaggerate",
        definition: "(v.) To describe something as larger or greater than it really is. exaggeration (n.) Something that is exaggerated.",
        exampleSentence: "Some donors exaggerate the value of their contributions to the campaign.",
        imageEmoji: "🤥",
        category: "Grade 6"
    },
    {
        id: "extensive",
        word: "extensive",
        definition: "(adj.) 1. Covering a large area. 2. Ambitious; far-reaching.",
        exampleSentence: "Central Park is an extensive green expanse in the middle of Manhattan.",
        imageEmoji: "🏞️",
        category: "Grade 6"
    },
    {
        id: "fantastic",
        word: "fantastic",
        definition: "(adj.) 1. Almost unbelievable. 2. Unusual; odd.",
        exampleSentence: "The guests on the talk show told a fantastic tale of being followed by creatures from outer space.",
        imageEmoji: "🛸",
        category: "Grade 6"
    },
    {
        id: "intrigue",
        word: "intrigue",
        definition: "(v.) 1. To fascinate. 2. To plot in a secret way; to scheme. (n.) A secret plot or scheme.",
        exampleSentence: "The way stage magicians do their tricks intrigues me.",
        imageEmoji: "🎩",
        category: "Grade 6"
    },
    {
        id: "marvel",
        word: "marvel",
        definition: "(n.) A wonderful or amazing thing. (v.) To be filled with wonder or amazement. marvelous (adj.) 1. Causing wonder; astonishing. 2. Of the highest quality; splendid.",
        exampleSentence: "The Amazon River is one of the great marvels of nature.",
        imageEmoji: "😲",
        category: "Grade 6"
    },
    {
        id: "mission",
        word: "mission",
        definition: "(n.) 1. A special or important task or assignment. 2. A group sent on an important assignment.",
        exampleSentence: "The ambassador's mission was to arrange a meeting with the prime minister.",
        imageEmoji: "🚀",
        category: "Grade 6"
    },
    {
        id: "opportunity",
        word: "opportunity",
        definition: "(n.) 1. A time that is right for doing something. 2. A chance for getting ahead.",
        exampleSentence: "Isabella was waiting for the opportunity to talk to her mother alone.",
        imageEmoji: "🚪",
        category: "Grade 6"
    },
    {
        id: "relinquish",
        word: "relinquish",
        definition: "(v.) To let go; to give up.",
        exampleSentence: "The little boy who found the lost puppy didn't want to relinquish it.",
        imageEmoji: "👐",
        category: "Grade 6"
    },
    {
        id: "tyrant",
        word: "tyrant",
        definition: "(n.) A ruler or person who has complete power and uses it in cruel or unjust ways. tyranny (n.) Rule by a tyrant.",
        exampleSentence: "The tyrant lived in splendor while his people lived in squalor.",
        imageEmoji: "👑",
        category: "Grade 6"
    },
    {
        id: "vanquish",
        word: "vanquish",
        definition: "(v.) To defeat utterly and completely; to overcome.",
        exampleSentence: "Success quickly vanquishes fear.",
        imageEmoji: "⚔️",
        category: "Grade 6"
    }
];

export const b6_l14_story_1: Story = {
    id: "b6-l14-s1",
    title: "14A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l14_words.map(w => w.id),
    questions: [
        {
            id: "14a-q1",
            type: "multiple-choice",
            question: "1. (a) The pigeons pecked at the **marvels** on the ground at the park.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // marbles/morsels?
        },
        {
            id: "14a-q2",
            type: "multiple-choice",
            question: "1. (b) Many believe the cell phone to be a **marvelous** invention.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q3",
            type: "multiple-choice",
            question: "1. (c) The eighty-foot blue whale is one of the **marvels** of nature.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q4",
            type: "multiple-choice",
            question: "1. (d) The crew grew more and more **marvelous** as conditions worsened.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // nervous/anxious?
        },
        {
            id: "14a-q5",
            type: "multiple-choice",
            question: "2. (a) Many **esteemed** Barack Obama for his social policies as president.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q6",
            type: "multiple-choice",
            question: "2. (b) Students hold the respectful and intelligent teacher in high **esteem**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q7",
            type: "multiple-choice",
            question: "2. (c) Einstein was an **esteemed** member of the scientific community.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q8",
            type: "multiple-choice",
            question: "2. (d) The plumber **esteemed** that the repairs would cost a hundred dollars.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // estimated.
        },
        {
            id: "14a-q9",
            type: "multiple-choice",
            question: "3. (a) Scientists have **vanquished** many life-threatening diseases.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q10",
            type: "multiple-choice",
            question: "3. (b) A coat of **vanquish** will make your floors sparkle.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // varnish.
        },
        {
            id: "14a-q11",
            type: "multiple-choice",
            question: "3. (c) Bruno **vanquished** his fear of heights by going skydiving.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q12",
            type: "multiple-choice",
            question: "3. (d) The painting **vanquished** without a trace and was never found.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // vanished.
        },
        {
            id: "14a-q13",
            type: "multiple-choice",
            question: "4. (a) It would **relinquish** me greatly if you could help me study.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // relieve?
        },
        {
            id: "14a-q14",
            type: "multiple-choice",
            question: "4. (b) The team that lost the game **relinquished** the trophy gracefully.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q15",
            type: "multiple-choice",
            question: "4. (c) Josef finally **relinquished** my hand.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q16",
            type: "multiple-choice",
            question: "4. (d) A hot meal and a good night's sleep **relinquished** us.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // refreshed/revived?
        },
        {
            id: "14a-q17",
            type: "multiple-choice",
            question: "5. (a) I am **intrigued** by dinosaurs and want to learn more.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q18",
            type: "multiple-choice",
            question: "5. (b) A group of students **intrigued** all the way to the bus.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // talked/chanted?
        },
        {
            id: "14a-q19",
            type: "multiple-choice",
            question: "5. (c) We were **intrigued** by the spider spinning its web.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q20",
            type: "multiple-choice",
            question: "5. (d) The painting was just too interesting, so I had to take another **intrigue**.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // look.
        },
        {
            id: "14a-q21",
            type: "multiple-choice",
            question: "6. (a) We couldn't find the **mission** in the sandbox, so we gave up.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // missing item?
        },
        {
            id: "14a-q22",
            type: "multiple-choice",
            question: "6. (b) The **mission** to rescue the cat in the tree was successful.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q23",
            type: "multiple-choice",
            question: "6. (c) A **mission** to Mars in the next century is on NASA's agenda.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q24",
            type: "multiple-choice",
            question: "6. (d) He tripped on the **mission** sticking out of the ground.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "14a-q25",
            type: "multiple-choice",
            question: "7. (a) Ping Ho took every **opportunity** to practice on the basketball court.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q26",
            type: "multiple-choice",
            question: "7. (b) The **opportunity** to go up in a blimp was too good to be missed.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q27",
            type: "multiple-choice",
            question: "7. (c) Where others saw a problem, Sanji saw an **opportunity**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q28",
            type: "multiple-choice",
            question: "7. (d) My shoe fell into the **opportunity** and was never seen again.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // opening?
        },
        {
            id: "14a-q29",
            type: "multiple-choice",
            question: "8. (a) Randy was able to **exaggerate** himself from other people.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // distinguish?
        },
        {
            id: "14a-q30",
            type: "multiple-choice",
            question: "8. (b) Mika **exaggerated** when she said she had made a hundred dollars.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q31",
            type: "multiple-choice",
            question: "8. (c) My sister admitted that she **exaggerated** how big the spider was.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q32",
            type: "multiple-choice",
            question: "8. (d) The fence was **exaggerated** from six to eight feet.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // extended?
        },
        {
            id: "14a-q33",
            type: "multiple-choice",
            question: "9. (a) I was **engrossed** in reading my notes when lightning struck.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q34",
            type: "multiple-choice",
            question: "9. (b) Once the money is **engrossed**, you will never see it again.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // gone?
        },
        {
            id: "14a-q35",
            type: "multiple-choice",
            question: "9. (c) The novel is so **engrossing**; you should read it!",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q36",
            type: "multiple-choice",
            question: "9. (d) Everyone was **engrossed** by the news about the royal wedding.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q37",
            type: "multiple-choice",
            question: "10. (a) Indrajit's account of her adventures got more **fantastic** with each telling.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q38",
            type: "multiple-choice",
            question: "10. (b) The novel is filled with odd characters and **fantastic** situations.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q39",
            type: "multiple-choice",
            question: "10. (c) Houses in this part of town are selling for **fantastic** prices.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "14a-q40",
            type: "multiple-choice",
            question: "10. (d) The TV show was so **fantastic**, I fell asleep.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // boring.
        }
    ]
};

export const b6_l14_story_2: Story = {
    id: "b6-l14-s2",
    title: "14B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l14_words.map(w => w.id),
    questions: [
        {
            id: "14b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *give up*?",
            options: ["(a) forsake", "(b) abdicate", "(c) esteem", "(d) relinquish"],
            correctAnswers: ["(a) forsake", "(b) abdicate", "(d) relinquish"]
        },
        {
            id: "14b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *like a lot*?",
            options: ["(a) cherish", "(b) esteem", "(c) exaggerate", "(d) baffle"],
            correctAnswers: ["(a) cherish", "(b) esteem"]
        },
        {
            id: "14b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *wonderful*?",
            options: ["(a) fantastic", "(b) discreet", "(c) colossal", "(d) marvelous"],
            correctAnswers: ["(a) fantastic", "(d) marvelous"] // colossal means big.
        },
        {
            id: "14b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *defeat*?",
            options: ["(a) conquer", "(b) consent", "(c) vanquish", "(d) overpower"],
            correctAnswers: ["(a) conquer", "(c) vanquish", "(d) overpower"]
        },
        {
            id: "14b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *interesting*?",
            options: ["(a) sinister", "(b) benevolent", "(c) fascinating", "(d) engrossing"],
            correctAnswers: ["(c) fascinating", "(d) engrossing"]
        },
        {
            id: "14b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *ruler*?",
            options: ["(a) dictator", "(b) sentinel", "(c) tyrant", "(d) mission"],
            correctAnswers: ["(a) dictator", "(c) tyrant"]
        },
        {
            id: "14b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *large area*?",
            options: ["(a) consent", "(b) expanse", "(c) extensive", "(d) interpret"],
            correctAnswers: ["(b) expanse", "(c) extensive"] // extensive is adj, expanse is noun. "large area" is a noun phrase. Both fit the meaning concept. The question asks 'go with', not 'mean'.
        },
        {
            id: "14b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *keep a secret*?",
            options: ["(a) victorious", "(b) fantastic", "(c) discreet", "(d) marvelous"],
            correctAnswers: ["(c) discreet"]
        },
        {
            id: "14b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *kindness*?",
            options: ["(a) compassionate", "(b) extensive", "(c) benevolent", "(d) discreet"],
            correctAnswers: ["(a) compassionate", "(c) benevolent"]
        },
        {
            id: "14b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *agree*?",
            options: ["(a) exaggerate", "(b) consent", "(c) rejoice", "(d) vanquish"],
            correctAnswers: ["(b) consent"]
        }
    ]
};

export const b6_l14_story_3: Story = {
    id: "b6-l14-s3",
    title: "14C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l14_words.map(w => w.id),
    questions: [
        {
            id: "14c-q1",
            type: "multiple-choice",
            question: "1. She **esteemed**",
            options: ["(a) Martin Luther King Jr. for leading the Civil Rights movement in the 1960s.", "(b) all those who give their time to charity.", "(c) that the price of the purse was too much.", "(d) ahead in the race, while others lagged behind."],
            correctAnswers: ["(a) Martin Luther King Jr. for leading the Civil Rights movement in the 1960s.", "(b) all those who give their time to charity."]
        },
        {
            id: "14c-q2",
            type: "multiple-choice",
            question: "2. It's an **exaggeration**",
            options: ["(a) to say she made a million dollars before she was eighteen.", "(b) that was kept hidden from me until the holidays.", "(c) of the water in the fountain that is causing the problem.", "(d) that got more complicated every time I heard him say it."],
            correctAnswers: ["(a) to say she made a million dollars before she was eighteen.", "(d) that got more complicated every time I heard him say it."]
        },
        {
            id: "14c-q3",
            type: "multiple-choice",
            question: "3. The **mission**",
            options: ["(a) was to win more than half the votes.", "(b) to bring the friends back together was a success.", "(c) ran past us and knocked us over.", "(d) from Russia stayed at a hotel in Harlem for the \"green energy\" meetings."],
            correctAnswers: ["(a) was to win more than half the votes.", "(b) to bring the friends back together was a success.", "(d) from Russia stayed at a hotel in Harlem for the \"green energy\" meetings."]
        },
        {
            id: "14c-q4",
            type: "multiple-choice",
            question: "4. Some great **opportunities**",
            options: ["(a) always look best in sunlight.", "(b) can be found at school.", "(c) can pass you by if you don't take risks.", "(d) are listed in the newspaper article about summer jobs."],
            correctAnswers: ["(b) can be found at school.", "(c) can pass you by if you don't take risks.", "(d) are listed in the newspaper article about summer jobs."]
        },
        {
            id: "14c-q5",
            type: "multiple-choice",
            question: "5. The **tyrannical**",
            options: ["(a) Roman emperor would listen to no one.", "(b) six-stringed instrument is played like a banjo.", "(c) dancers spun across the stage.", "(d) dictator was replaced by someone even worse."],
            correctAnswers: ["(a) Roman emperor would listen to no one.", "(d) dictator was replaced by someone even worse."]
        },
        {
            id: "14c-q6",
            type: "multiple-choice",
            question: "6. An **extensively**",
            options: ["(a) detailed search failed to find the missing ring.", "(b) hilly area has been set aside for a skateboard park.", "(c) Spanish coin was found in the cave.", "(d) researched project is certain to be successful."],
            correctAnswers: ["(a) detailed search failed to find the missing ring.", "(d) researched project is certain to be successful."]
        },
        {
            id: "14c-q7",
            type: "multiple-choice",
            question: "7. **Engrossed**",
            options: ["(a) across the page were the letters RSVP.", "(b) by his disgusting behavior, I left the room in a hurry.", "(c) in my book, I didn't hear the knock at the front door.", "(d) in my studies, I had little time for fun."],
            correctAnswers: ["(c) in my book, I didn't hear the knock at the front door.", "(d) in my studies, I had little time for fun."]
        },
        {
            id: "14c-q8",
            type: "multiple-choice",
            question: "8. A **benevolently**",
            options: ["(a) evil act is one intended to do harm.", "(b) kind ruler is loved and respected.", "(c) bad story is hard to finish reading.", "(d) generous uncle always has gifts for his nieces."],
            correctAnswers: ["(b) kind ruler is loved and respected.", "(d) generous uncle always has gifts for his nieces."]
        }
    ]
};

export const b6_l14_story_4: Story = {
    id: "b6-l14-s4",
    title: "14D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l14_words.map(w => w.id),
    questions: [
        {
            id: "14d-q1",
            type: "open-ended",
            question: "1. You should use **discretion** when",
            sampleAnswer: "you are keeping a secret."
        },
        {
            id: "14d-q2",
            type: "open-ended",
            question: "2. It's an **exaggeration** if I say that",
            sampleAnswer: "I told you a million times."
        },
        {
            id: "14d-q3",
            type: "open-ended",
            question: "3. It would be **fantastic** if",
            sampleAnswer: "I won the lottery."
        },
        {
            id: "14d-q4",
            type: "open-ended",
            question: "4. My **mission** after school today is to",
            sampleAnswer: "finish my homework."
        },
        {
            id: "14d-q5",
            type: "open-ended",
            question: "5. If I had the **opportunity** to go anywhere I wanted, I would go",
            sampleAnswer: "to Japan."
        },
        {
            id: "14d-q6",
            type: "open-ended",
            question: "6. If you give your **consent** to do something, that means",
            sampleAnswer: "you agree to do it."
        },
        {
            id: "14d-q7",
            type: "open-ended",
            question: "7. One way to **vanquish** fear is to",
            sampleAnswer: "face it directly."
        },
        {
            id: "14d-q8",
            type: "open-ended",
            question: "8. A **tyrant** is",
            sampleAnswer: "a cruel and unjust ruler."
        },
        {
            id: "14d-q9",
            type: "open-ended",
            question: "9. If I were on a desert island, the one thing I wouldn't **relinquish** is",
            sampleAnswer: "my hope of rescue."
        },
        {
            id: "14d-q10",
            type: "open-ended",
            question: "10. One of the things that I **marvel** at is",
            sampleAnswer: "the stars in the night sky."
        }
    ]
};

export const b6_l14_story_passage: Story = {
    id: "b6-l14-passage",
    title: "Reading Passage: The Travels of Marco Polo",
    type: "non-fiction",
    content: `
One of the most **engrossing** travel books ever written is over seven hundred years old. *The Travels of Marco Polo* is a true account of a young Venetian's adventurous life. Although it was written so long ago, you can probably find a copy of it on the shelves of your neighborhood library.

Marco Polo was only seventeen when his adventures began. In the year 1271, he left his native Venice for the Chinese court of Kublai Khan, the absolute ruler of most of Asia. He accompanied members of his family who were employed in the service of Kublai Khan. They were now returning to China after a visit home. The journey took the Venetians four years.

The immense Mongol empire of Kublai Khan had been founded fifty years earlier by the emperor's grandfather, Genghis Khan. One of the most feared **tyrants** in history, Genghis Khan had **vanquished** most of his challengers in Asia. Kublai Khan, by contrast, was a wise and **benevolent** ruler. He soon determined that Marco Polo was an exceptionally intelligent young man. Marco Polo was **discreet** as well. He could be trusted with information that the emperor hesitated to share with others at the court. Furthermore, because Marco Polo planned to return to Venice later, he was unlikely to **intrigue** against the emperor. For these reasons, Kublai Khan trusted Marco Polo as his ambassador to travel **extensively** throughout Asia, carrying out important **missions**.

After seventeen years Marco Polo grew homesick; he yearned for his native Venice. However, he could not depart without the emperor's permission. Kublai Khan held his young advisor in high **esteem** and rewarded him with significant positions in his court. Naturally, he was reluctant to **relinquish** the services of such a valued friend and adviser. But finally the emperor gave his **consent**. In 1295, after a journey that lasted three years, Marco Polo arrived back in Venice.

He soon became a celebrated figure because of the stories he related of his travels. Many of his Venetian listeners thought he must be **exaggerating**. The things he claimed seemed to be too **fantastic** to be believed. But, in fact, Marco Polo was telling the truth. He had observed creatures with huge jaws and sharp teeth that could swallow a person whole (crocodiles); he had seen black stones that, when ignited, burned with a great heat (coal); and he had witnessed many other **marvels**.

Three years after his return, Marco Polo was taken prisoner when hostilities broke out between Venice and Genoa, both Italian city-states. The year he spent in captivity gave him the **opportunity** to dictate his travel adventures to a fellow prisoner. The book that eventually resulted became one of the most popular and widely translated literary works ever written. For hundreds of years, it has been entertaining readers all over the world.
    `,
    wordsIncluded: b6_l14_words.map(w => w.id),
    questions: [
        {
            id: "b6-l14-p-q1",
            type: "multiple-choice",
            question: "Why is *The Travels of Marco Polo* considered an **engrossing** book?",
            options: [
                "It is a true account of adventurous life.",
                "It is full of magic and dragons.",
                "It is a short story about Venice.",
                "It was written by a famous king."
            ],
            correctAnswer: "It is a true account of adventurous life."
        },
        {
            id: "b6-l14-p-q2",
            type: "multiple-choice",
            question: "Who was Kublai Khan?",
            options: [
                "The absolute ruler of most of Asia.",
                "Moving Venice's most famous artist.",
                "Marco Polo's uncle.",
                "The King of England."
            ],
            correctAnswer: "The absolute ruler of most of Asia."
        },
        {
            id: "b6-l14-p-q3",
            type: "multiple-choice",
            question: "How long did the journey from Venice to China take Marco Polo and his family?",
            options: [
                "Four years.",
                "One year.",
                "Six months.",
                "Ten years."
            ],
            correctAnswer: "Four years."
        },
        {
            id: "b6-l14-p-q4",
            type: "multiple-choice",
            question: "How was Kublai Khan different from his grandfather, Genghis Khan?",
            options: [
                "Kublai Khan was a wise and **benevolent** ruler, unlike the **tyrant** Genghis Khan.",
                "Kublai Khan was cruel, while Genghis Khan was kind.",
                "Kublai Khan was poor, while Genghis Khan was rich.",
                "Kublai Khan lived in Europe, while Genghis Khan lived in Asia."
            ],
            correctAnswer: "Kublai Khan was a wise and **benevolent** ruler, unlike the **tyrant** Genghis Khan."
        },
        {
            id: "b6-l14-p-q5",
            type: "multiple-choice",
            question: "Why did Kublai Khan trust Marco Polo?",
            options: [
                "He was intelligent, **discreet**, and unlikely to **intrigue** against the emperor.",
                "He was a famous warrior.",
                "He brought many expensive gifts.",
                "He spoke every language in the world."
            ],
            correctAnswer: "He was intelligent, **discreet**, and unlikely to **intrigue** against the emperor."
        },
        {
            id: "b6-l14-p-q6",
            type: "multiple-choice",
            question: "What did Marco Polo do for the Emperor?",
            options: [
                "He traveled **extensively** carrying out important **missions**.",
                "He built a great wall.",
                "He taught the Emperor how to cook Italian food.",
                "He wrote poetry for the court."
            ],
            correctAnswer: "He traveled **extensively** carrying out important **missions**."
        },
        {
            id: "b6-l14-p-q7",
            type: "multiple-choice",
            question: "Why could Marco Polo not leave China when he wanted to?",
            options: [
                "He could not depart without the emperor's permission.",
                "He had lost his passport.",
                "He was too sick to travel.",
                "He was in prison."
            ],
            correctAnswer: "He could not depart without the emperor's permission."
        },
        {
            id: "b6-l14-p-q8",
            type: "multiple-choice",
            question: "Why was the Emperor reluctant to let Marco Polo go?",
            options: [
                "He held him in high **esteem** and didn't want to **relinquish** his services.",
                "He thought Marco Polo owed him money.",
                "He wanted Marco Polo to marry his daughter.",
                "He was afraid Marco Polo would tell his secrets."
            ],
            correctAnswer: "He held him in high **esteem** and didn't want to **relinquish** his services."
        },
        {
            id: "b6-l14-p-q9",
            type: "multiple-choice",
            question: "What happened when Marco Polo returned to Venice?",
            options: [
                "He became a celebrated figure because of his stories.",
                "No one remembered him.",
                "He was immediately arrested.",
                "He became the ruler of Venice."
            ],
            correctAnswer: "He became a celebrated figure because of his stories."
        },
        {
            id: "b6-l14-p-q10",
            type: "multiple-choice",
            question: "Why did people think Marco Polo was **exaggerating**?",
            options: [
                "His stories seemed too **fantastic** to be believed.",
                "He had a reputation for lying.",
                "He couldn't prove anything he said.",
                "He spoke very loudly."
            ],
            correctAnswer: "His stories seemed too **fantastic** to be believed."
        },
        {
            id: "b6-l14-p-q11",
            type: "multiple-choice",
            question: "What were the 'black stones' that Marco Polo described?",
            options: [
                "Coal.",
                "Diamonds.",
                "Obsidian.",
                "Charcoal."
            ],
            correctAnswer: "Coal."
        },
        {
            id: "b6-l14-p-q12",
            type: "multiple-choice",
            question: "What were the creatures with huge jaws he described?",
            options: [
                "Crocodiles.",
                "Dragons.",
                "Lions.",
                "Sharks."
            ],
            correctAnswer: "Crocodiles."
        },
        {
            id: "b6-l14-p-q13",
            type: "multiple-choice",
            question: "How did Marco Polo get the **opportunity** to write his book?",
            options: [
                "While he was a prisoner of war in Genoa.",
                "While he was traveling on a ship.",
                "After he retired in his old age.",
                "While he was waiting for the Emperor."
            ],
            correctAnswer: "While he was a prisoner of war in Genoa."
        },
        {
            id: "b6-l14-p-q14",
            type: "multiple-choice",
            question: "What does the passage say about Genghis Khan?",
            options: [
                "He was one of the most feared **tyrants** in history who **vanquished** his challengers.",
                "He was a peaceful monk.",
                "He was a famous explorer like Marco Polo.",
                "He was the King of Venice."
            ],
            correctAnswer: "He was one of the most feared **tyrants** in history who **vanquished** his challengers."
        },
        {
            id: "b6-l14-p-q15",
            type: "multiple-choice",
            question: "What eventually happened to Marco Polo's book?",
            options: [
                "It became one of the most popular and widely translated literary works.",
                "It was lost for hundreds of years.",
                "It was banned by the church.",
                "It was only read by his family."
            ],
            correctAnswer: "It became one of the most popular and widely translated literary works."
        }
    ]
};

export const b6_l14_story_facts: Story = {
    id: "b6-l14-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The antonym of **benevolent** is *malevolent*. A *malevolent* person is someone who wishes to do evil to others.

* In Roman times, as indeed throughout history, when sailors headed toward port after a long voyage, they could at last look forward to having an **opportunity** to do all the things they had been unable to do while living in cramped fashion on board a small boat. The word *opportunity* suggests this; it is formed from the Latin prefix *ob-*, which means "to" or "toward" (*ob-* changes to *op-* before the letter *p*) and *portum*, which means "a port."
    `,
    wordsIncluded: ["benevolent", "opportunity"],
    questions: []
};
