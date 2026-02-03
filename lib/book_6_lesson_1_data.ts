import { Story, VocabularyWord } from "./types";

export const b6_l1_words: VocabularyWord[] = [
    {
        id: "affection",
        word: "affection",
        definition: "(n.) A fond or tender feeling. affectionate (adj.) Gentle and loving.",
        exampleSentence: "Hugging is one way to show affection.",
        imageEmoji: "🤗",
        category: "Grade 6",
        synonyms: ["fondness", "tenderness", "love", "warmth"],
        antonyms: ["hatred", "dislike", "animosity"]
    },
    {
        id: "appeal",
        word: "appeal",
        definition: "(v.) 1. To make an earnest request; to ask. 2. To be of interest to; to be attractive to. (n.) 1. An earnest request for help. 2. The power to attract or be of interest.",
        exampleSentence: "Three students appealed for more time to finish the work.",
        imageEmoji: "🙏",
        category: "Grade 6",
        synonyms: ["request", "plea", "attract", "interest"],
        antonyms: ["repel", "bore"]
    },
    {
        id: "clasp",
        word: "clasp",
        definition: "(v.) To grasp or hold tightly. (n.) 1. A strong grasp or hold. 2. Something, such as a hook or fastener, that holds two parts together.",
        exampleSentence: "The dancers clasped hands and circled the maypole.",
        imageEmoji: "🤝",
        category: "Grade 6",
        synonyms: ["grasp", "grip", "fastener", "hook"],
        antonyms: ["release", "loose"]
    },
    {
        id: "conspicuous",
        word: "conspicuous",
        definition: "(adj.) Easily or plainly seen.",
        exampleSentence: "His great height made him conspicuous in any crowd.",
        imageEmoji: "👀",
        category: "Grade 6",
        synonyms: ["noticeable", "prominent", "obvious"],
        antonyms: ["hidden", "inconspicuous", "obscure"]
    },
    {
        id: "contribute",
        word: "contribute",
        definition: "(v.) 1. To give along with others who are giving. 2. To have a part in bringing about. contribution (n.) That which is given. contributor (n.) One who gives.",
        exampleSentence: "I contributed a spinach salad to the potluck supper.",
        imageEmoji: "🎁",
        category: "Grade 6",
        synonyms: ["give", "donate", "supply"],
        antonyms: ["take", "withhold"]
    },
    {
        id: "declare",
        word: "declare",
        definition: "(v.) To make known; to state openly. declaration (n.) A public statement.",
        exampleSentence: "\"I will not share a room with my sister anymore,\" she declared.",
        imageEmoji: "🗣️",
        category: "Grade 6",
        synonyms: ["state", "announce", "proclaim"],
        antonyms: ["conceal", "suppress"]
    },
    {
        id: "eloquent",
        word: "eloquent",
        definition: "(adj.) Skilled at speaking or writing; having the power to move people. eloquence (n.) Skill at speaking or writing; the power to move people.",
        exampleSentence: "Anne Frank's eloquent diary often moves readers to tears.",
        imageEmoji: "✍️",
        category: "Grade 6",
        synonyms: ["expressive", "moving", "articulate"],
        antonyms: ["inarticulate", "dull"]
    },
    {
        id: "exhibit",
        word: "exhibit",
        definition: "(v.) To show in public. (n.) An item or collection of items in a public show. exhibition (n.) A large-scale public show.",
        exampleSentence: "Local artists exhibited their paintings at the library.",
        imageEmoji: "🖼️",
        category: "Grade 6",
        synonyms: ["show", "display", "demonstrate"],
        antonyms: ["hide", "conceal"]
    },
    {
        id: "ferry",
        word: "ferry",
        definition: "(n.) A boat that carries people and goods back and forth across a stretch of water. (v.) To move people or goods by boat across a stretch of water.",
        exampleSentence: "The ferry will stop running when the new bridge opens.",
        imageEmoji: "⛴️",
        category: "Grade 6",
        synonyms: ["boat", "transport", "shuttle", "convey"],
        antonyms: []
    },
    {
        id: "immigrant",
        word: "immigrant",
        definition: "(n.) A person who comes into a country to live there.",
        exampleSentence: "Many Polish immigrants settled in Chicago.",
        imageEmoji: "🧳",
        category: "Grade 6",
        synonyms: ["newcomer", "settler"],
        antonyms: ["native", "emigrant"]
    },
    {
        id: "lofty",
        word: "lofty",
        definition: "(adj.) 1. Very tall or high. 2. Noble in feeling or ideals. 3. Showing a too-proud or superior attitude.",
        exampleSentence: "Lofty elm trees provided welcome shade along the streets.",
        imageEmoji: "🏙️",
        category: "Grade 6",
        synonyms: ["tall", "high", "noble", "arrogant"],
        antonyms: ["low", "short", "humble"]
    },
    {
        id: "pedestal",
        word: "pedestal",
        definition: "(n.) A base or support on which something stands.",
        exampleSentence: "At the museum, I backed up to get a better view of the painting and almost knocked the sculpture off its pedestal.",
        imageEmoji: "🏛️",
        category: "Grade 6",
        synonyms: ["base", "stand", "support"],
        antonyms: []
    },
    {
        id: "persecute",
        word: "persecute",
        definition: "(v.) To treat cruelly or harshly because of political, religious, or other differences. persecution (n.) The state or condition of being persecuted.",
        exampleSentence: "The First Amendment to the United States Constitution does not allow anyone to be persecuted based on religious beliefs.",
        imageEmoji: "🚫",
        category: "Grade 6",
        synonyms: ["oppress", "harass", "mistreat"],
        antonyms: ["comfort", "support"]
    },
    {
        id: "poverty",
        word: "poverty",
        definition: "(n.) The state of being poor.",
        exampleSentence: "The food stamp program was started to help feed families living in poverty.",
        imageEmoji: "🏚️",
        category: "Grade 6",
        synonyms: ["neediness", "destitution"],
        antonyms: ["wealth", "riches", "abundance"]
    },
    {
        id: "unveil",
        word: "unveil",
        definition: "(v.) 1. To remove a covering from. 2. To make known or reveal for the first time.",
        exampleSentence: "The American Red Cross held a ceremony to unveil the portrait of its founder, Clara Barton.",
        imageEmoji: "🎭",
        category: "Grade 6",
        synonyms: ["reveal", "expose", "uncover"],
        antonyms: ["cover", "hide", "mask"]
    }
];

export const b6_l1_story_1: Story = {
    id: "b6-l1-s1",
    title: "1A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 1.`,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "1a-q1",
            type: "multiple-choice",
            question: "1. (a) let that person go free. (c) treat that person badly. (b) To clasp someone is to (d) To persecute someone is to",
            options: ["b-a", "d-c", "b-c", "d-a"],
            correctAnswer: "d-c"
        },
        {
            id: "1a-q2",
            type: "multiple-choice",
            question: "2. (a) If something is lofty, (c) it is hidden from view. (b) If something has appeal, (d) it has the power to attract.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "b-d"
        },
        {
            id: "1a-q3",
            type: "multiple-choice",
            question: "3. (a) To exhibit something is to (c) understand it fully. (b) To unveil something is to (d) reveal it for the first time.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "b-d"
        }
    ]
};

export const b6_l1_story_2: Story = {
    id: "b6-l1-s2",
    title: "1B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "1b-q1",
            type: "multiple-choice",
            question: "To **make known** one's intentions is to state them openly.",
            options: ["declare", "appeal", "exhibit", "contribute"],
            correctAnswer: "declare"
        },
        {
            id: "1b-q2",
            type: "multiple-choice",
            question: "Many **people who come into a country to live there** face challenges.",
            options: ["immigrants", "ferries", "pedestals", "exhibitions"],
            correctAnswer: "immigrants"
        },
        {
            id: "1b-q3",
            type: "multiple-choice",
            question: "The **state of being poor** is a difficult condition to overcome.",
            options: ["poverty", "affection", "appeal", "clasp"],
            correctAnswer: "poverty"
        },
        {
            id: "1b-q4",
            type: "multiple-choice",
            question: "The child **grasped tightly** his mother's hand.",
            options: ["clasped", "contributed", "exhibited", "unveiled"],
            correctAnswer: "clasped"
        },
        {
            id: "1b-q5",
            type: "multiple-choice",
            question: "The speaker was **skilled at speaking** and moved the audience.",
            options: ["eloquent", "conspicuous", "lofty", "affectionate"],
            correctAnswer: "eloquent"
        },
        {
            id: "1b-q6",
            type: "multiple-choice",
            question: "The red bird was **easily seen** against the snow.",
            options: ["conspicuous", "eloquent", "lofty", "affectionate"],
            correctAnswer: "conspicuous"
        },
        {
            id: "1b-q7",
            type: "multiple-choice",
            question: "The museum **showed in public** a collection of ancient coins.",
            options: ["exhibited", "declared", "appealed", "contributed"],
            correctAnswer: "exhibited"
        },
        {
            id: "1b-q8",
            type: "multiple-choice",
            question: "The statue stood on a marble **base**.",
            options: ["pedestal", "ferry", "immigrant", "poverty"],
            correctAnswer: "pedestal"
        },
        {
            id: "1b-q9",
            type: "multiple-choice",
            question: "No one should be **treated cruelly** for their beliefs.",
            options: ["persecuted", "contributed", "exhibited", "clasped"],
            correctAnswer: "persecuted"
        },
        {
            id: "1b-q10",
            type: "multiple-choice",
            question: "She felt a **fond feeling** for her old school.",
            options: ["affection", "appeal", "poverty", "eloquence"],
            correctAnswer: "affection"
        },
        {
            id: "1b-q11",
            type: "multiple-choice",
            question: "They plan to **remove the covering from** the new monument tomorrow.",
            options: ["unveil", "clasp", "exhibit", "declare"],
            correctAnswer: "unveil"
        },
        {
            id: "1b-q12",
            type: "multiple-choice",
            question: "The **very tall** mountains were covered in snow.",
            options: ["lofty", "conspicuous", "eloquent", "affectionate"],
            correctAnswer: "lofty"
        },
        {
            id: "1b-q13",
            type: "multiple-choice",
            question: "Everyone **gave along with others** to the charity fund.",
            options: ["contributed", "appealed", "declared", "exhibited"],
            correctAnswer: "contributed"
        },
        {
            id: "1b-q14",
            type: "multiple-choice",
            question: "The lawyer **made an earnest request** for a new trial.",
            options: ["appealed", "declared", "contributed", "clasped"],
            correctAnswer: "appealed"
        },
        {
            id: "1b-q15",
            type: "multiple-choice",
            question: "We took a **boat that carries people** to the island.",
            options: ["ferry", "immigrant", "pedestal", "exhibition"],
            correctAnswer: "ferry"
        }
    ]
};

export const b6_l1_story_3: Story = {
    id: "b6-l1-s3",
    title: "1C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "1c-q1",
            type: "multiple-choice",
            question: "1. Which of the following could be **unveiled**?",
            options: ["(a) a statue", "(b) a cloud", "(c) a painting", "(d) a plan"],
            correctAnswers: ["(a) a statue", "(c) a painting", "(d) a plan"]
        },
        {
            id: "1c-q2",
            type: "multiple-choice",
            question: "2. Which of the following can be **declared**?",
            options: ["(a) a winner", "(b) one's friends", "(c) one's love", "(d) a holiday"],
            correctAnswers: ["(a) a winner", "(c) one's love", "(d) a holiday"]
        },
        {
            id: "1c-q3",
            type: "multiple-choice",
            question: "3. Which of the following can be **contributed**?",
            options: ["(a) money", "(b) time", "(c) clothing", "(d) space"],
            correctAnswers: ["(a) money", "(b) time", "(c) clothing", "(d) space"]
        },
        {
            id: "1c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be **ferried**?",
            options: ["(a) hopes", "(b) fears", "(c) people", "(d) cars"],
            correctAnswers: ["(c) people", "(d) cars"]
        },
        {
            id: "1c-q5",
            type: "multiple-choice",
            question: "5. For which of the following might someone be subjected to **persecution**?",
            options: ["(a) driving too fast", "(b) having political views", "(c) breaking into someone's home", "(d) practicing a religion"],
            correctAnswers: ["(b) having political views", "(d) practicing a religion"]
        },
        {
            id: "1c-q6",
            type: "multiple-choice",
            question: "6. Which of the following would be **conspicuous**?",
            options: ["(a) a lighthouse on a cliff", "(b) a pebble on the beach", "(c) a billboard by the roadside", "(d) a purple house"],
            correctAnswers: ["(a) a lighthouse on a cliff", "(c) a billboard by the roadside", "(d) a purple house"]
        },
        {
            id: "1c-q7",
            type: "multiple-choice",
            question: "7. Which of the following could be **exhibited**?",
            options: ["(a) pottery", "(b) days", "(c) uncertainty", "(d) coins"],
            correctAnswers: ["(a) pottery", "(d) coins"]
        },
        {
            id: "1c-q8",
            type: "multiple-choice",
            question: "8. Which of the following could you say to give someone a clue that you are an **immigrant**?",
            options: ["(a) \"Math is my favorite subject.\"", "(b) \"I have a dog.\"", "(c) \"I plan to live in a new country.\"", "(d) \"I have left my home country.\""],
            correctAnswers: ["(d) \"I have left my home country.\""]
        }
    ]
};





export const b6_l1_story_4: Story = {
    id: "b6-l1-s4",
    title: "1D Word Study: Synonyms",
    type: "exercise",
    content: `**Synonyms** are words that have the same or similar meanings.\n\nFor example, **big** and **large** are synonyms! 🐘\n\nFind the two words in each group that mean the same thing.`,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "1d-q1",
            type: "multiple-choice",
            question: "1. tall / eloquent / hidden / lofty",
            options: ["tall/lofty", "eloquent/hidden", "hidden/lofty", "tall/eloquent"],
            correctAnswer: "tall/lofty"
        },
        {
            id: "1d-q2",
            type: "multiple-choice",
            question: "2. understand / contribute / declare / state",
            options: ["declare/state", "understand/contribute", "contribute/state", "understand/declare"],
            correctAnswer: "declare/state"
        },
        {
            id: "1d-q3",
            type: "multiple-choice",
            question: "3. show / return / exhibition / appeal",
            options: ["show/exhibition", "return/appeal", "show/appeal", "return/exhibition"],
            correctAnswer: "show/exhibition"
        },
        {
            id: "1d-q4",
            type: "multiple-choice",
            question: "4. eloquent / moving / conspicuous / tired",
            options: ["eloquent/moving", "conspicuous/tired", "moving/tired", "eloquent/conspicuous"],
            correctAnswer: "eloquent/moving"
        },
        {
            id: "1d-q5",
            type: "multiple-choice",
            question: "5. contribute / request / return / appeal",
            options: ["request/appeal", "contribute/return", "contribute/request", "return/appeal"],
            correctAnswer: "request/appeal"
        },
        {
            id: "1d-q6",
            type: "multiple-choice",
            question: "6. fastener / base / poverty / pedestal",
            options: ["base/pedestal", "fastener/poverty", "base/poverty", "fastener/pedestal"],
            correctAnswer: "base/pedestal"
        },
        {
            id: "1d-q7",
            type: "multiple-choice",
            question: "7. affectionate / fond / conspicuous / sad",
            options: ["affectionate/fond", "conspicuous/sad", "fond/sad", "affectionate/conspicuous"],
            correctAnswer: "affectionate/fond"
        },
        {
            id: "1d-q8",
            type: "multiple-choice",
            question: "8. persecution / anger / grasp / clasp",
            options: ["grasp/clasp", "persecution/anger", "anger/grasp", "persecution/clasp"],
            correctAnswer: "grasp/clasp"
        },
        {
            id: "1d-q9",
            type: "multiple-choice",
            question: "9. ferry / poverty / poor / unveil",
            options: ["poverty/poor", "ferry/unveil", "ferry/poor", "poverty/unveil"],
            correctAnswer: "poverty/poor"
        },
        {
            id: "1d-q10",
            type: "multiple-choice",
            question: "10. clasp / immigrant / supply / fastener",
            options: ["clasp/fastener", "immigrant/supply", "clasp/supply", "immigrant/fastener"],
            correctAnswer: "clasp/fastener"
        }
    ]
};

export const b6_l1_story_passage: Story = {
    id: "b6-l1-passage",
    title: "Reading Passage: Lady Liberty",
    type: "non-fiction",
    content: `
The Statue of Liberty is a symbol of freedom to people all over the world. Since 1886 it has welcomed **immigrants** who sail into New York harbor to begin a new life in the United States. Like many of them, Lady Liberty, as the statue is **affectionately** known, had to overcome some difficulties before reaching these shores.

The statue was a gift from the people of France to the people of the United States. It was given in honor of the friendship between the two countries and the one-hundredth anniversary of the American Revolution. But before the statue could be put in place, the people of the United States had to provide a **pedestal** for it at a cost of one hundred thousand dollars. That turned out to be no easy task. A fund-raising drive was launched and ran into immediate difficulties. Newspapers across the United States ridiculed the effort. They argued that because the French were sending over the statue, they should be the ones to pay the extra costs involved for the base.

Despite this opposition, the effort to raise the money continued. A forty-foot-high section of the right arm, with the hand **clasping** the torch of liberty, was sent to the United States. It was displayed at the 1876 Philadelphia **exhibition** marking the one-hundredth birthday of the United States. Visitors paid fifty cents to climb onto the balcony surrounding the torch. Many other fund-raising events were also held. But even after several years, **contributions** fell far short of the total needed. The future of the entire project seemed in doubt. Not until a newspaper **appeal** promised to print donors' names was the necessary money raised.

With the success of the project assured, the rest of the statue was finally shipped from France. It arrived in pieces packed in over two hundred wooden crates. The work of assembling it proceeded without further delay. A public holiday was **declared** on October 28, 1886, when the Statue of Liberty was at last **unveiled**. It was one of the largest gatherings ever in New York City. The island where the statue stands is called Liberty Island. It is reached by a short **ferry** ride from lower Manhattan. At just over 305 feet, the statue was the tallest structure in New York City. Though it is now dwarfed by the **lofty** skyscrapers of Manhattan, at the time it was the most **conspicuous** landmark in the city.

In the 1880s, people seeking a better life were flooding into the United States. They arrived at the rate of one million a year. Many of them came from Russia and Eastern Europe; they had been cruelly **persecuted** by their governments and were fleeing to safety. Others were escaping the **poverty** of their native lands in search of a more prosperous life in America.

The museum at the base of the statue contains a bronze tablet placed there in 1903. On it is a poem written twenty years earlier by Emma Lazarus, whose own family had fled Russia. The poem has captured the imagination of the American people and has become forever associated with the Statue of Liberty. It ends with these **eloquent** lines:

Give me your tired, your poor,
Your huddled masses yearning to breathe free,
The wretched refuse of your teeming shore;
Send these, the homeless, tempest-tost to me,
I lift my lamp beside the golden door!
    `,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "b6-l1-p-q1",
            type: "multiple-choice",
            question: "What is the meaning of **lofty** as it is used in the passage?",
            options: [
                "Very tall or high.",
                "Noble in feeling.",
                "Showing a superior attitude.",
                "Made of wood."
            ],
            correctAnswer: "Very tall or high."
        },
        {
            id: "b6-l1-p-q2",
            type: "multiple-choice",
            question: "What finally caused Americans to **contribute** the necessary funds?",
            options: [
                "A newspaper appeal promised to print donors' names.",
                "The President gave a speech.",
                "A lottery was held.",
                "The French government threatened to take the statue back."
            ],
            correctAnswer: "A newspaper appeal promised to print donors' names."
        },
        {
            id: "b6-l1-p-q3",
            type: "multiple-choice",
            question: "What was done with the statue's arm in Philadelphia in 1876?",
            options: [
                "It was displayed at an exhibition.",
                "It was hidden in a warehouse.",
                "It was sold to a wealthy collector.",
                "It was accidentally dropped in the ocean."
            ],
            correctAnswer: "It was displayed at an exhibition."
        },
        {
            id: "b6-l1-p-q4",
            type: "multiple-choice",
            question: "How can you tell that the author has a favorable opinion of Lazarus's poem?",
            options: [
                "The author describes the lines as eloquent.",
                "The author says it is too long.",
                "The author says it is boring.",
                "The author doesn't mention the poem."
            ],
            correctAnswer: "The author describes the lines as eloquent."
        },
        {
            id: "b6-l1-p-q5",
            type: "multiple-choice",
            question: "What is the meaning of **appeal** as it is used in the passage?",
            options: [
                "An earnest request for help.",
                "To be attractive to.",
                "To legal decision.",
                "A fruit skin."
            ],
            correctAnswer: "An earnest request for help."
        },
        {
            id: "b6-l1-p-q6",
            type: "multiple-choice",
            question: "Why were so many people able to attend the first showing of the statue?",
            options: [
                "A public holiday was declared.",
                "It was on a weekend.",
                "It was free.",
                "Everyone was given a day off work by law."
            ],
            correctAnswer: "A public holiday was declared."
        },
        {
            id: "b6-l1-p-q7",
            type: "multiple-choice",
            question: "What was the hope of people who came to America to escape the **poverty** of their homelands?",
            options: [
                "They hoped to find a more prosperous life in America.",
                "They hoped to become famous.",
                "They hoped to return home rich.",
                "They hoped to join the army."
            ],
            correctAnswer: "They hoped to find a more prosperous life in America."
        },
        {
            id: "b6-l1-p-q8",
            type: "multiple-choice",
            question: "Why did the American people have to raise one hundred thousand dollars?",
            options: [
                "They had to pay for the pedestal for the statue.",
                "To pay for the statue itself.",
                "To pay for the shipping costs.",
                "To buy the island."
            ],
            correctAnswer: "They had to pay for the pedestal for the statue."
        },
        {
            id: "b6-l1-p-q9",
            type: "multiple-choice",
            question: "How is the torch of liberty supported by the statue?",
            options: [
                "It is clasped in the hand of the right arm.",
                "It is balanced on her head.",
                "It is held in the left hand.",
                "It hangs from a chain."
            ],
            correctAnswer: "It is clasped in the hand of the right arm."
        },
        {
            id: "b6-l1-p-q10",
            type: "multiple-choice",
            question: "How do visitors reach the Statue of Liberty?",
            options: [
                "They take a ferry from lower Manhattan.",
                "They drive across a bridge.",
                "They take a helicopter.",
                "They swim."
            ],
            correctAnswer: "They take a ferry from lower Manhattan."
        },
        {
            id: "b6-l1-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **unveil** as it is used in the passage?",
            options: [
                "To reveal for the first time.",
                "To remove a veil.",
                "To cover up.",
                "To paint."
            ],
            correctAnswer: "To reveal for the first time."
        },
        {
            id: "b6-l1-p-q12",
            type: "multiple-choice",
            question: "Why do you think the United States has been called a nation of **immigrants**?",
            options: [
                "Because so many people from other countries have settled there.",
                "Because no one is native to it.",
                "Because it has strict immigration laws.",
                "Because it is very large."
            ],
            correctAnswer: "Because so many people from other countries have settled there."
        },
        {
            id: "b6-l1-p-q13",
            type: "multiple-choice",
            question: "Why is the statue not such a **conspicuous** landmark as it once was?",
            options: [
                "It is dwarfed by the lofty skyscrapers of Manhattan.",
                "It has been moved to a different location.",
                "It has faded in color.",
                "Trees have grown around it."
            ],
            correctAnswer: "It is dwarfed by the lofty skyscrapers of Manhattan."
        },
        {
            id: "b6-l1-p-q14",
            type: "multiple-choice",
            question: "Why would **persecuted** people want to come to the United States?",
            options: [
                "They would want to be free to practice their religion or hold political views without fear.",
                "They wanted to become rich.",
                "They liked the weather.",
                "They were invited by the President."
            ],
            correctAnswer: "They would want to be free to practice their religion or hold political views without fear."
        },
        {
            id: "b6-l1-p-q15",
            type: "multiple-choice",
            question: "Do you think the people fleeing to the United States for safety in the 1880s felt **affection** for their governments?",
            options: [
                "No, because they were being persecuted by them.",
                "Yes, they missed their homeland.",
                "Yes, but they wanted to travel.",
                "No, because they were forced to leave for economic reasons only."
            ],
            correctAnswer: "No, because they were being persecuted by them."
        }
    ]
};

export const b6_l1_story_facts: Story = {
    id: "b6-l1-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The Latin word for *foot* is *ped*, and several English words, such as *pedal* (a lever worked by the foot) and *pedestrian* (a person going on foot), come from it. Because a **pedestal** is a base that stands at the foot, or lowest part, of a statue, column, or similar object, you might think that *pedestal* comes directly from *ped*. Actually it comes from an Italian phrase, *pie di stallo*, which means "a foot (or lowest part) of a stall." Because the Italian word for *foot* comes from *ped*, it_s correct to say that the English word *pedestal* also comes from it, but in a roundabout manner.

* An **immigrant** is a person who enters a country intending to live there. An *emigrant* is a person who leaves one country to settle in another. In the late nineteenth and early twentieth centuries, many people *emigrated* from Europe and arrived in the United States as **immigrants**.

* **Persecute** and *prosecute* are similar-sounding words that are sometimes confused even though they have quite separate meanings. To **persecute** someone is to make that person suffer because of political, religious, or other beliefs or characteristics. To *prosecute* someone is to bring that person to trial for criminal acts.
    `,
    wordsIncluded: ["pedestal", "immigrant", "persecute"],
    questions: []
};
