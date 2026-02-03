import { Story, VocabularyWord } from "./types";

export const b6_l11_words: VocabularyWord[] = [
    {
        id: "abbreviate",
        word: "abbreviate",
        definition: "(v.) To shorten by leaving out certain parts. abbreviation (n.) The result of abbreviating.",
        exampleSentence: "Main Street can be abbreviated to Main St.",
        imageEmoji: "✂️",
        category: "Grade 6",
        synonyms: ["shorten", "abridge", "condense"],
        antonyms: ["lengthen", "extend", "expand"]
    },
    {
        id: "appropriate",
        word: "appropriate",
        definition: "(adj.) Suitable or right for the purpose. (v.) To set aside for a particular purpose.",
        exampleSentence: "Sandals are not appropriate footwear for hiking.",
        imageEmoji: "👍",
        category: "Grade 6",
        synonyms: ["suitable", "proper", "fitting"],
        antonyms: ["inappropriate", "unsuitable", "improper"]
    },
    {
        id: "exclude",
        word: "exclude",
        definition: "(v.) To leave out; to keep from being a part of.",
        exampleSentence: "The gym teacher excluded everyone who could not run a mile from the advanced gym class.",
        imageEmoji: "🚫",
        category: "Grade 6",
        synonyms: ["leave out", "bar", "ban"],
        antonyms: ["include", "admit", "welcome"]
    },
    {
        id: "fanciful",
        word: "fanciful",
        definition: "(adj.) 1. Not based on reason; unrealistic. 2. Not real; imaginary.",
        exampleSentence: "One inventor came up with a fanciful scheme to turn water into gasoline.",
        imageEmoji: "🦄",
        category: "Grade 6",
        synonyms: ["imaginary", "unreal", "whimsical"],
        antonyms: ["realistic", "practical", "serious"]
    },
    {
        id: "futile",
        word: "futile",
        definition: "(adj.) Certain to fail; hopeless or useless.",
        exampleSentence: "Before giving up, we made several futile attempts to retrieve the car keys that had fallen into the lake.",
        imageEmoji: "😩",
        category: "Grade 6",
        synonyms: ["useless", "hopeless", "vain"],
        antonyms: ["useful", "successful", "effective"]
    },
    {
        id: "grudge",
        word: "grudge",
        definition: "(n.) A feeling of resentment. (v.) To be unwilling to give. grudging (adj.) Done or said with reluctance.",
        exampleSentence: "Rosa held a grudge against her friends because of the way they treated her brother.",
        imageEmoji: "😠",
        category: "Grade 6",
        synonyms: ["resentment", "bitterness", "grievance"],
        antonyms: ["forgiveness", "goodwill"]
    },
    {
        id: "inspire",
        word: "inspire",
        definition: "(v.) To fill with emotion or great excitement. inspiration (n.) The power to affect the mind or the emotions; anything that has this effect.",
        exampleSentence: "Einstein's discoveries inspired me to become a scientist.",
        imageEmoji: "💡",
        category: "Grade 6",
        synonyms: ["encourage", "motivate", "stimulate"],
        antonyms: ["discourage", "dishearten"]
    },
    {
        id: "majority",
        word: "majority",
        definition: "(n.) 1. The greater number or part; more than half. 2. The amount by which one number of votes is greater than another.",
        exampleSentence: "The majority of teachers at this school live in town.",
        imageEmoji: "📊",
        category: "Grade 6",
        synonyms: ["most", "bulk", "mass"],
        antonyms: ["minority"]
    },
    {
        id: "persevere",
        word: "persevere",
        definition: "(v.) To refuse to give up despite difficulties. perseverance (n.) Continued efforts in spite of difficulties.",
        exampleSentence: "The workers persevered through the blizzard until the house for the needy family was complete.",
        imageEmoji: "💪",
        category: "Grade 6",
        synonyms: ["persist", "carry on", "endure"],
        antonyms: ["give up", "quit"]
    },
    {
        id: "possess",
        word: "possess",
        definition: "(v.) 1. To have or to own. 2. To get power or control over. possession (n.) 1. The act of owning or holding. 2. The thing that is held or owned.",
        exampleSentence: "The children possess three pairs of shoes.",
        imageEmoji: "🗝️",
        category: "Grade 6",
        synonyms: ["own", "have", "hold"],
        antonyms: ["lack", "want"]
    },
    {
        id: "prejudice",
        word: "prejudice",
        definition: "(n.) An opinion or strong feeling formed without careful thought or regard to the facts. (v.) To cause to have such a feeling. prejudiced (adj.) Having such a feeling.",
        exampleSentence: "Her prejudice against tomatoes keeps her from trying many delicious dishes.",
        imageEmoji: "🙈",
        category: "Grade 6",
        synonyms: ["bias", "bigotry", "unfairness"],
        antonyms: ["fairness", "impartiality", "justice"]
    },
    {
        id: "resolute",
        word: "resolute",
        definition: "(adj.) Determined not to give in; unyielding.",
        exampleSentence: "The shelter was resolute about finding good homes for the kittens.",
        imageEmoji: "😤",
        category: "Grade 6",
        synonyms: ["determined", "firm", "steadfast"],
        antonyms: ["irresolute", "wavering", "undecided"]
    },
    {
        id: "sneer",
        word: "sneer",
        definition: "(v.) To look down on with scorn; to mock or insult by words or manner. (n.) A scornful look; a mocking or insulting remark.",
        exampleSentence: "\"That was the most mediocre acting I've ever seen,\" someone sneered.",
        imageEmoji: "😏",
        category: "Grade 6",
        synonyms: ["mock", "scorn", "jeer"],
        antonyms: ["praise", "compliment"]
    },
    {
        id: "unanimous",
        word: "unanimous",
        definition: "(adj.) Without any disagreement. unanimity (n.) The condition of being unanimous.",
        exampleSentence: "The motion passed by a unanimous vote of 57 to 0.",
        imageEmoji: "🤝",
        category: "Grade 6",
        synonyms: ["agreed", "united", "accordant"],
        antonyms: ["divided", "split"]
    },
    {
        id: "unruly",
        word: "unruly",
        definition: "(adj.) 1. Badly behaved. 2. Hard to control.",
        exampleSentence: "An unruly child in a restaurant can be very annoying to the other diners.",
        imageEmoji: "🤪",
        category: "Grade 6",
        synonyms: ["disorderly", "wild", "rowdy"],
        antonyms: ["orderly", "well-behaved", "disciplined"]
    }
];

export const b6_l11_story_1: Story = {
    id: "b6-l11-s1",
    title: "11A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 11.`,
    wordsIncluded: b6_l11_words.map(w => w.id),
    questions: [
        {
            id: "11a-q1",
            type: "multiple-choice",
            question: "1. (a) be without it. (c) To possess money is to (b) To appropriate money is to (d) set it aside for a purpose.",
            options: ["b-d", "c-a", "b-a", "c-d"],
            correctAnswer: "b-d"
        },
        {
            id: "11a-q2",
            type: "multiple-choice",
            question: "2. (a) An inspiration is (c) A sneer is (b) a mocking or insulting remark. (d) an opinion held without regard to the facts.",
            options: ["c-b", "d-b", "c-a", "a-d"],
            correctAnswer: "c-b"
        },
        {
            id: "11a-q3",
            type: "multiple-choice",
            question: "3. (a) more than half. (c) A prejudice is (b) A majority is (d) a number that is too large to be counted.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        },
        {
            id: "11a-q4",
            type: "multiple-choice",
            question: "4. (a) who is easily upset. (c) An unruly person is one (b) who behaves badly. (d) A resolute person is one",
            options: ["c-b", "d-a", "c-a", "d-b"],
            correctAnswer: "c-b"
        },
        {
            id: "11a-q5",
            type: "multiple-choice",
            question: "5. (a) Perseverance is (c) Inspiration is (b) the expectation that things (d) the power to affect one's emotions. will improve.",
            options: ["c-d", "a-b", "c-b", "a-d"],
            correctAnswer: "c-d"
        },
        {
            id: "11a-q6",
            type: "multiple-choice",
            question: "6. (a) An abbreviation is (c) a thought that is shared. (b) A possession is (d) a thing that is owned.",
            options: ["b-d", "a-c", "b-c", "a-d"],
            correctAnswer: "b-d"
        },
        {
            id: "11a-q7",
            type: "multiple-choice",
            question: "7. (a) A grudge is (c) a feeling of resentment. (b) Unanimity is (d) a feeling of helplessness.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "a-c"
        },
        {
            id: "11a-q8",
            type: "multiple-choice",
            question: "8. (a) An abbreviation is (c) a shortened form of a word. (b) Perseverance is (d) an incorrectly pronounced word.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "a-c"
        },
        {
            id: "11a-q9",
            type: "multiple-choice",
            question: "9. (a) a lack of caring. (c) complete agreement. (b) Unanimity is (d) Futility is",
            options: ["b-c", "d-a", "b-a", "d-c"],
            correctAnswer: "b-c"
        }
    ]
};

export const b6_l11_story_2: Story = {
    id: "b6-l11-s2",
    title: "11B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l11_words.map(w => w.id),
    questions: [
        {
            id: "11b-q1",
            type: "multiple-choice",
            question: "Greed **got power over** them and led to their downfall.",
            options: ["possessed", "inspired", "excluded", "prejudiced"],
            correctAnswer: "possessed"
        },
        {
            id: "11b-q2",
            type: "multiple-choice",
            question: "I soon discovered that asking my parents if I could stay out later was a **waste of my time**.",
            options: ["futile", "fanciful", "resolute", "unanimous"],
            correctAnswer: "futile"
        },
        {
            id: "11b-q3",
            type: "multiple-choice",
            question: "How do you write the **shortened form of** the word *adjective*?",
            options: ["abbreviation", "possession", "inspiration", "prejudice"],
            correctAnswer: "abbreviation"
        },
        {
            id: "11b-q4",
            type: "multiple-choice",
            question: "The idea that the stork brings a new baby is **one that does not seem very reasonable**.",
            options: ["fanciful", "resolute", "appropriate", "unruly"],
            correctAnswer: "fanciful"
        },
        {
            id: "11b-q5",
            type: "multiple-choice",
            question: "The decision was **made with everyone in agreement**.",
            options: ["unanimous", "unruly", "fanciful", "grudging"],
            correctAnswer: "unanimous"
        },
        {
            id: "11b-q6",
            type: "multiple-choice",
            question: "Thoughtful people do not let **opinions formed without regard for the facts** affect their judgment.",
            options: ["prejudices", "inspirations", "abbreviations", "grudges"],
            correctAnswer: "prejudices"
        },
        {
            id: "11b-q7",
            type: "multiple-choice",
            question: "I believe they **parted unwillingly with** the dollar they gave to the Red Cross.",
            options: ["grudged", "inspired", "possessed", "excluded"],
            correctAnswer: "grudged"
        },
        {
            id: "11b-q8",
            type: "multiple-choice",
            question: "The club is for teenagers only, and adults are **not allowed to be members of** it.",
            options: ["excluded", "inspired", "possessed", "abbreviated"],
            correctAnswer: "excluded"
        },
        {
            id: "11b-q9",
            type: "multiple-choice",
            question: "Only by a **firm refusal to give up** can you hope to succeed.",
            options: ["perseverance", "majority", "inspiration", "prejudice"],
            correctAnswer: "perseverance"
        },
        {
            id: "11b-q10",
            type: "multiple-choice",
            question: "Do not **direct your scornful remarks** at things you don't understand.",
            options: ["sneer", "inspire", "persevere", "exclude"],
            correctAnswer: "sneer"
        },
        {
            id: "11b-q11",
            type: "multiple-choice",
            question: "Some people like to wear jeans, but they aren't always **suitable** for the occasion.",
            options: ["appropriate", "fanciful", "unruly", "resolute"],
            correctAnswer: "appropriate"
        },
        {
            id: "11b-q12",
            type: "multiple-choice",
            question: "I think you're making a mistake, but I see you are quite **determined not to change your mind** about going.",
            options: ["resolute", "futile", "fanciful", "unruly"],
            correctAnswer: "resolute"
        },
        {
            id: "11b-q13",
            type: "multiple-choice",
            question: "The thrill of flying for the first time **had a great effect on** me and caused me to want to be a pilot.",
            options: ["inspired", "sneered", "excluded", "possessed"],
            correctAnswer: "inspired"
        }
    ]
};

export const b6_l11_story_3: Story = {
    id: "b6-l11-s3",
    title: "11C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l11_words.map(w => w.id),
    questions: [
        {
            id: "11c-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **possessed**?",
            options: ["(a) a pair of shoes", "(b) a knack", "(c) a rainbow", "(d) courage"],
            correctAnswers: ["(a) a pair of shoes", "(b) a knack", "(d) courage"]
        },
        {
            id: "11c-q2",
            type: "multiple-choice",
            question: "2. Which of the following would be **futile**?",
            options: ["(a) proving that 1+1=3", "(b) appealing a verdict", "(c) counting to a million", "(d) boycotting a business"],
            correctAnswers: ["(a) proving that 1+1=3", "(c) counting to a million"] // counting to a million is possible but futile? usually means pointless. 1+1=3 is impossible.
        },
        {
            id: "11c-q3",
            type: "multiple-choice",
            question: "3. Which of the following is a **majority**?",
            options: ["(a) one-half", "(b) three-quarters", "(c) one-third", "(d) all but one"],
            correctAnswers: ["(b) three-quarters", "(d) all but one"]
        },
        {
            id: "11c-q4",
            type: "multiple-choice",
            question: "4. Which of the following groups **exclude** even numbers?",
            options: ["(a) 1, 3, 5, 7, 9", "(b) 1, 3, 3, 5, 7, 9", "(c) 1, 3, 7, 9", "(d) 1, 2, 3, 4, 5, 6"],
            correctAnswers: ["(a) 1, 3, 5, 7, 9", "(b) 1, 3, 3, 5, 7, 9", "(c) 1, 3, 7, 9"]
        },
        {
            id: "11c-q5",
            type: "multiple-choice",
            question: "5. Which of the following statements show **prejudice**?",
            options: ["(a) 'Americans are rude.'", "(b) 'Men don't have feelings.'", "(c) 'Women have too many feelings.'", "(d) 'All politicians are liars.'"],
            correctAnswers: ["(a) 'Americans are rude.'", "(b) 'Men don't have feelings.'", "(c) 'Women have too many feelings.'", "(d) 'All politicians are liars.'"] // All seem to be prejudices.
        },
        {
            id: "11c-q6",
            type: "multiple-choice",
            question: "6. Which of the following are **appropriate** at a funeral?",
            options: ["(a) antics", "(b) weeping", "(c) flowers", "(d) brawling"],
            correctAnswers: ["(b) weeping", "(c) flowers"]
        },
        {
            id: "11c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might cause a person to **persevere**?",
            options: ["(a) laziness", "(b) ambition", "(c) fear", "(d) greed"],
            correctAnswers: ["(b) ambition", "(c) fear", "(d) greed"] // Fear/greed can motivate perseverance too.
        },
        {
            id: "11c-q8",
            type: "multiple-choice",
            question: "8. Which of the following would be **unruly** behavior?",
            options: ["(a) brushing a friend's hair", "(b) reading books", "(c) pulling a friend's hair", "(d) throwing books"],
            correctAnswers: ["(c) pulling a friend's hair", "(d) throwing books"]
        }
    ]
};

export const b6_l11_story_4: Story = {
    id: "b6-l11-s4",
    title: "11D Word Study: Prefixes",
    type: "exercise",
    content: `The Greek prefix *mono-* and the Latin prefix *uni-* both mean "one." Match each definition with the correct word chosen from the list.`,
    wordsIncluded: ["unique"], // unique is in word list
    questions: [
        {
            id: "11d-q1",
            type: "fill-in-the-blank",
            question: "1. Attire in which any one person looks like all the rest.",
            correctAnswer: "uniform"
        },
        {
            id: "11d-q2",
            type: "fill-in-the-blank",
            question: "2. A train system with just one rail.",
            correctAnswer: "monorail"
        },
        {
            id: "11d-q3",
            type: "fill-in-the-blank",
            question: "3. Being the only one of its kind.",
            correctAnswer: "unique"
        },
        {
            id: "11d-q4",
            type: "fill-in-the-blank",
            question: "4. A cycle with just one wheel.",
            correctAnswer: "unicycle"
        },
        {
            id: "11d-q5",
            type: "fill-in-the-blank",
            question: "5. A dramatic speech given by one person.",
            correctAnswer: "monologue"
        },
        {
            id: "11d-q6",
            type: "fill-in-the-blank",
            question: "6. A sound that stays on one note.",
            correctAnswer: "monotone"
        },
        {
            id: "11d-q7",
            type: "fill-in-the-blank",
            question: "7. Affecting only one of two or more sides.",
            correctAnswer: "unilateral"
        },
        {
            id: "11d-q8",
            type: "fill-in-the-blank",
            question: "8. A single large stone, standing alone.",
            correctAnswer: "monolith"
        }
    ]
};

export const b6_l11_story_passage: Story = {
    id: "b6-l11-passage",
    title: "Reading Passage: Elizabeth Blackwell, M.D.",
    type: "non-fiction",
    content: `
In the early 1800s, a woman in the United States had few rights. She was not allowed to vote; that would not happen for a hundred years. She was not allowed to own property, and if she married, everything she **possessed** became the property of her husband. And if she wanted to work, she soon learned that careers in medicine or law were not considered **appropriate** for women; only men were admitted to medical or law schools. Most people regarded this as a perfectly normal state of affairs, but Elizabeth Blackwell was not one of them.

Born in England in 1821, Blackwell came to America as a young girl with her parents. Later, when she expressed a desire to become a doctor, her parents and friends told her to put aside such **fanciful** ideas because it would be **futile** for her to try to get into medical school. But Blackwell was **resolute** in her determination. She studied medicine privately and began applying to medical schools. Despite one rejection after another, she **persevered**.

One of the places to which she applied was the Geneva Medical School in western New York, now part of Syracuse University. The professors there were just as **prejudiced** as those at other medical schools and were quite ready to reject her application. However, in the belief that a **majority** would be against Blackwell's admission, they decided to let the students vote. Just to be sure, they ruled that a single *no* vote would **exclude** her. To the professors' surprise, the students **unanimously** voted *yes*. Blackwell later found out that they had done it as a joke. That had no effect on the result, however, and the professors **grudgingly** accepted her as a student.

In 1847, Elizabeth Blackwell became the first woman in America to be admitted to medical school. Life in the classroom, however, was uncomfortable for her at first. Some students found it amusing to throw paper darts at her, touch her hair, and make offensive remarks about her in her presence. Blackwell responded to the **sneers** and bullying with a dignified silence, and the **unruly** behavior soon ended, to the relief of the more serious students. Blackwell worked hard, earned the respect of the faculty, and received high marks in all her courses. She graduated at the top of her class on January 23, 1849.

Not only had Blackwell become a Doctor of Medicine with the right to put the **abbreviation** M.D. after her name, she had also entered the history books as the first woman in the United States to do so. Her younger sister Emily followed in Elizabeth's footsteps, and she also became a doctor. Together they established the New York Infirmary for Women and Children. During the Civil War, Blackwell trained nurses to tend the wounded. Most of all, her courage in challenging tradition **inspired** other women and opened up the medical profession to them. By the end of the century, over seven thousand women were practicing medicine in the United States.
    `,
    wordsIncluded: b6_l11_words.map(w => w.id),
    questions: [
        {
            id: "b6-l11-p-q1",
            type: "multiple-choice",
            question: "How did most people in the early 1800s view the rights of women?",
            options: [
                "They believed women should not have careers in medicine or law.",
                "They believed women should have equal rights to men.",
                "They believed women should only work in factories.",
                "They believed women should be allowed to vote but not own property."
            ],
            correctAnswer: "They believed women should not have careers in medicine or law."
        },
        {
            id: "b6-l11-p-q2",
            type: "multiple-choice",
            question: "What happened to a woman's possessions when she married in the early 1800s?",
            options: [
                "Everything she **possessed** became the property of her husband.",
                "She kept everything she owned.",
                "She had to give half to the government.",
                "She had to sell them to pay for a dowry."
            ],
            correctAnswer: "Everything she **possessed** became the property of her husband."
        },
        {
            id: "b6-l11-p-q3",
            type: "multiple-choice",
            question: "Why did Elizabeth Blackwell's parents and friends tell her to put aside her **fanciful** ideas?",
            options: [
                "They thought it would be **futile** for a woman to try to get into medical school.",
                "They wanted her to become a lawyer instead.",
                "They thought she was too young to make such a decision.",
                "They thought she didn't have enough money."
            ],
            correctAnswer: "They thought it would be **futile** for a woman to try to get into medical school."
        },
        {
            id: "b6-l11-p-q4",
            type: "multiple-choice",
            question: "How did Elizabeth Blackwell react to the discouragement she received?",
            options: [
                "She was **resolute** in her determination to become a doctor.",
                "She gave up and became a teacher.",
                "She decided to travel to Europe instead.",
                "She got angry and stopped speaking to her parents."
            ],
            correctAnswer: "She was **resolute** in her determination to become a doctor."
        },
        {
            id: "b6-l11-p-q5",
            type: "multiple-choice",
            question: "Why did the professors at Geneva Medical School allow the students to vote on Blackwell's admission?",
            options: [
                "They believed a **majority** would be against it, ensuring her rejection.",
                "They wanted to be fair and democratic.",
                "They were unsure of the rules and asked the students for help.",
                "They wanted to play a trick on the students."
            ],
            correctAnswer: "They believed a **majority** would be against it, ensuring her rejection."
        },
        {
            id: "b6-l11-p-q6",
            type: "multiple-choice",
            question: "What condition did the professors set for the student vote?",
            options: [
                "A single *no* vote would **exclude** her.",
                "A simple majority was needed to accept her.",
                "Two-thirds of the students had to vote yes.",
                "The vote had to be **unanimous** against her."
            ],
            correctAnswer: "A single *no* vote would **exclude** her."
        },
        {
            id: "b6-l11-p-q7",
            type: "multiple-choice",
            question: "How did the students vote regarding Blackwell's admission?",
            options: [
                "They **unanimously** voted yes.",
                "They unanimously voted no.",
                "The majority voted yes, but there were a few no votes.",
                "They refused to vote."
            ],
            correctAnswer: "They **unanimously** voted yes."
        },
        {
            id: "b6-l11-p-q8",
            type: "multiple-choice",
            question: "How did the professors react to the result of the student vote?",
            options: [
                "They **grudgingly** accepted her as a student.",
                "They were delighted and welcomed her warmly.",
                "They cancelled the vote and rejected her anyway.",
                "They resigned in protest."
            ],
            correctAnswer: "They **grudgingly** accepted her as a student."
        },
        {
            id: "b6-l11-p-q9",
            type: "multiple-choice",
            question: "How did some students treat Blackwell when she first arrived?",
            options: [
                "They **sneered** at her and made offensive remarks.",
                "They ignored her completely.",
                "They were helpful and shared their notes.",
                "They asked her for medical advice."
            ],
            correctAnswer: "They **sneered** at her and made offensive remarks."
        },
        {
            id: "b6-l11-p-q10",
            type: "multiple-choice",
            question: "How did Blackwell respond to the bullying?",
            options: [
                "With a dignified silence.",
                "She complained to the dean.",
                "She fought back and argued with them.",
                "She cried and left the classroom."
            ],
            correctAnswer: "With a dignified silence."
        },
        {
            id: "b6-l11-p-q11",
            type: "multiple-choice",
            question: "What happened to the students' **unruly** behavior over time?",
            options: [
                "It soon ended as Blackwell earned their respect.",
                "It got worse and worse.",
                "It continued until she graduated.",
                "It stopped only when the professors intervened."
            ],
            correctAnswer: "It soon ended as Blackwell earned their respect."
        },
        {
            id: "b6-l11-p-q12",
            type: "multiple-choice",
            question: "What distinction did Elizabeth Blackwell achieve in 1849?",
            options: [
                "She became the first woman in the U.S. to earn the **abbreviation** M.D.",
                "She founded the first medical school for women.",
                "She invented a new surgical procedure.",
                "She became the personal physician to the President."
            ],
            correctAnswer: "She became the first woman in the U.S. to earn the **abbreviation** M.D."
        },
        {
            id: "b6-l11-p-q13",
            type: "multiple-choice",
            question: "Who followed in Elizabeth Blackwell's footsteps and also became a doctor?",
            options: [
                "Her younger sister Emily.",
                "Her mother.",
                "Her best friend from England.",
                "Her daughter."
            ],
            correctAnswer: "Her younger sister Emily."
        },
        {
            id: "b6-l11-p-q14",
            type: "multiple-choice",
            question: "What effect did Blackwell's career have on other women?",
            options: [
                "It **inspired** them and opened up the medical profession to them.",
                "It discouraged them because it was so difficult.",
                "It made them want to become nurses instead of doctors.",
                "It had very little effect on history."
            ],
            correctAnswer: "It **inspired** them and opened up the medical profession to them."
        },
        {
            id: "b6-l11-p-q15",
            type: "multiple-choice",
            question: "What is the meaning of **appropriate** as it is used in the passage?",
            options: [
                "Suitable or right for the purpose.",
                "Legally required.",
                "Difficult to achieve.",
                "Rare and expensive."
            ],
            correctAnswer: "Suitable or right for the purpose."
        }
    ]
};

export const b6_l11_story_facts: Story = {
    id: "b6-l11-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Majority** takes a plural form of the verb if the emphasis is on individual members. (The *majority* of my friends are planning to go to college when they graduate.) If the emphasis is on the group, **majority** takes a singular form. (The *majority* of the human race is still living in poverty.)

* An associated word is *minority*, which means "the lesser number or part; less than half." (Most students take the school bus, but a *minority* walk or ride bicycles to school.)

* The Latin verb *judicare* means "to judge." By combining the root from *judicare* with the Latin prefix *pre-*, which means "before," we form the word **prejudice**. To *judge* the merits of a case *before* having all the facts is to show *prejudice*.

* Two Latin words, *unus* (one) and *animus* (mind) combine to form the word **unanimous**. When people are *unanimous* about something, they are of *one mind*, which means that they all agree.
    `,
    wordsIncluded: ["majority", "prejudice", "unanimous"],
    questions: []
};
