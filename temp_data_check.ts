import { Story, VocabularyWord } from "./types";

export const b6_l1_words: VocabularyWord[] = [
    {
        id: "affection",
        word: "affection",
        definition: "(n.) A fond or tender feeling. affectionate (adj.) Gentle and loving.",
        exampleSentence: "Hugging is one way to show affection.",
        imageEmoji: "🤗",
        category: "Grade 6"
    },
    {
        id: "appeal",
        word: "appeal",
        definition: "(v.) 1. To make an earnest request; to ask. 2. To be of interest to; to be attractive to. (n.) 1. An earnest request for help. 2. The power to attract or be of interest.",
        exampleSentence: "Three students appealed for more time to finish the work.",
        imageEmoji: "🙏",
        category: "Grade 6"
    },
    {
        id: "clasp",
        word: "clasp",
        definition: "(v.) To grasp or hold tightly. (n.) 1. A strong grasp or hold. 2. Something, such as a hook or fastener, that holds two parts together.",
        exampleSentence: "The dancers clasped hands and circled the maypole.",
        imageEmoji: "🤝",
        category: "Grade 6"
    },
    {
        id: "conspicuous",
        word: "conspicuous",
        definition: "(adj.) Easily or plainly seen.",
        exampleSentence: "His great height made him conspicuous in any crowd.",
        imageEmoji: "👀",
        category: "Grade 6"
    },
    {
        id: "contribute",
        word: "contribute",
        definition: "(v.) 1. To give along with others who are giving. 2. To have a part in bringing about. contribution (n.) That which is given. contributor (n.) One who gives.",
        exampleSentence: "I contributed a spinach salad to the potluck supper.",
        imageEmoji: "🎁",
        category: "Grade 6"
    },
    {
        id: "declare",
        word: "declare",
        definition: "(v.) To make known; to state openly. declaration (n.) A public statement.",
        exampleSentence: "\"I will not share a room with my sister anymore,\" she declared.",
        imageEmoji: "🗣️",
        category: "Grade 6"
    },
    {
        id: "eloquent",
        word: "eloquent",
        definition: "(adj.) Skilled at speaking or writing; having the power to move people. eloquence (n.) Skill at speaking or writing; the power to move people.",
        exampleSentence: "Anne Frank's eloquent diary often moves readers to tears.",
        imageEmoji: "✍️",
        category: "Grade 6"
    },
    {
        id: "exhibit",
        word: "exhibit",
        definition: "(v.) To show in public. (n.) An item or collection of items in a public show. exhibition (n.) A large-scale public show.",
        exampleSentence: "Local artists exhibited their paintings at the library.",
        imageEmoji: "🖼️",
        category: "Grade 6"
    },
    {
        id: "ferry",
        word: "ferry",
        definition: "(n.) A boat that carries people and goods back and forth across a stretch of water. (v.) To move people or goods by boat across a stretch of water.",
        exampleSentence: "The ferry will stop running when the new bridge opens.",
        imageEmoji: "⛴️",
        category: "Grade 6"
    },
    {
        id: "immigrant",
        word: "immigrant",
        definition: "(n.) A person who comes into a country to live there.",
        exampleSentence: "Many Polish immigrants settled in Chicago.",
        imageEmoji: "🧳",
        category: "Grade 6"
    },
    {
        id: "lofty",
        word: "lofty",
        definition: "(adj.) 1. Very tall or high. 2. Noble in feeling or ideals. 3. Showing a too-proud or superior attitude.",
        exampleSentence: "Lofty elm trees provided welcome shade along the streets.",
        imageEmoji: "🏙️",
        category: "Grade 6"
    },
    {
        id: "pedestal",
        word: "pedestal",
        definition: "(n.) A base or support on which something stands.",
        exampleSentence: "At the museum, I backed up to get a better view of the painting and almost knocked the sculpture off its pedestal.",
        imageEmoji: "🏛️",
        category: "Grade 6"
    },
    {
        id: "persecute",
        word: "persecute",
        definition: "(v.) To treat cruelly or harshly because of political, religious, or other differences. persecution (n.) The state or condition of being persecuted.",
        exampleSentence: "The First Amendment to the United States Constitution does not allow anyone to be persecuted based on religious beliefs.",
        imageEmoji: "🚫",
        category: "Grade 6"
    },
    {
        id: "poverty",
        word: "poverty",
        definition: "(n.) The state of being poor.",
        exampleSentence: "The food stamp program was started to help feed families living in poverty.",
        imageEmoji: "🏚️",
        category: "Grade 6"
    },
    {
        id: "unveil",
        word: "unveil",
        definition: "(v.) 1. To remove a covering from. 2. To make known or reveal for the first time.",
        exampleSentence: "The American Red Cross held a ceremony to unveil the portrait of its founder, Clara Barton.",
        imageEmoji: "🎭",
        category: "Grade 6"
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

export const b6_l1_story_3: Story = {
    id: "b6-l1-s3",
    title: "1D Word Study: Synonyms",
    type: "exercise",
    content: `Circle the two synonyms in each group of four words.`,
    wordsIncluded: b6_l1_words.map(w => w.id),
    questions: [
        {
            id: "1d-q1",
            type: "multiple-choice",
            question: "1. tall / eloquent / hidden / lofty",
            options: ["tall", "eloquent", "hidden", "lofty"],
            correctAnswers: ["tall", "lofty"]
        },
        {
            id: "1d-q2",
            type: "multiple-choice",
            question: "2. understand / contribute / declare / state",
            options: ["understand", "contribute", "declare", "state"],
            correctAnswers: ["declare", "state"]
        },
        {
            id: "1d-q3",
            type: "multiple-choice",
            question: "3. show / return / exhibition / appeal",
            options: ["show", "return", "exhibition", "appeal"],
            correctAnswers: ["show", "exhibition"] // Note: exhibit is v. show. exhibition is n. show.
            // Wait, "show"(v) and "exhibition"(n)? Or "show"(n)? "Show" can be noun.
            // Looking at the list: exhibit (v) show. exhibit (n) item in show. exhibition (n) public show.
            // Synonyms: exhibition / show.
        },
        {
            id: "1d-q4",
            type: "multiple-choice",
            question: "4. eloquent / moving / conspicuous / tired",
            options: ["eloquent", "moving", "conspicuous", "tired"],
            correctAnswers: ["eloquent", "moving"]
        },
        {
            id: "1d-q5",
            type: "multiple-choice",
            question: "5. contribute / request / return / appeal",
            options: ["contribute", "request", "return", "appeal"],
            correctAnswers: ["request", "appeal"]
        },
        {
            id: "1d-q6",
            type: "multiple-choice",
            question: "6. fastener / base / poverty / pedestal",
            options: ["fastener", "base", "poverty", "pedestal"],
            correctAnswers: ["base", "pedestal"]
        },
        {
            id: "1d-q7",
            type: "multiple-choice",
            question: "7. affectionate / fond / conspicuous / sad",
            options: ["affectionate", "fond", "conspicuous", "sad"],
            correctAnswers: ["affectionate", "fond"]
        },
        {
            id: "1d-q8",
            type: "multiple-choice",
            question: "8. persecution / anger / grasp / clasp",
            options: ["persecution", "anger", "grasp", "clasp"],
            correctAnswers: ["grasp", "clasp"]
        },
        {
            id: "1d-q9",
            type: "multiple-choice",
            question: "9. ferry / poverty / poor / unveil",
            options: ["ferry", "poverty", "poor", "unveil"],
            correctAnswers: ["poverty", "poor"] // Wait, poverty is noun, poor is adj. But "the poor" is noun.
            // Check context. "poverty: state of being poor".
        },
        {
            id: "1d-q10",
            type: "multiple-choice",
            question: "10. clasp / immigrant / supply / fastener",
            options: ["clasp", "immigrant", "supply", "fastener"],
            correctAnswers: ["clasp", "fastener"] // Clasp (n) is a fastener.
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
            type: "open-ended",
            question: "What is the meaning of **lofty** as it is used in the passage?",
            sampleAnswer: "It means very tall or high."
        },
        {
            id: "b6-l1-p-q2",
            type: "open-ended",
            question: "What finally caused Americans to **contribute** the necessary funds?",
            sampleAnswer: "A newspaper appeal promised to print donors' names."
        },
        {
            id: "b6-l1-p-q3",
            type: "open-ended",
            question: "What was done with the statue's arm in Philadelphia in 1876?",
            sampleAnswer: "It was displayed at an exhibition."
        },
        {
            id: "b6-l1-p-q4",
            type: "open-ended",
            question: "How can you tell that the author has a favorable opinion of Lazarus's poem?",
            sampleAnswer: "The author describes the lines as eloquent."
        },
        {
            id: "b6-l1-p-q5",
            type: "open-ended",
            question: "What is the meaning of **appeal** as it is used in the passage?",
            sampleAnswer: "It means an earnest request for help."
        },
        {
            id: "b6-l1-p-q6",
            type: "open-ended",
            question: "Why were so many people able to attend the first showing of the statue?",
            sampleAnswer: "A public holiday was declared."
        },
        {
            id: "b6-l1-p-q7",
            type: "open-ended",
            question: "What was the hope of people who came to America to escape the **poverty** of their homelands?",
            sampleAnswer: "They hoped to find a more prosperous life in America."
        },
        {
            id: "b6-l1-p-q8",
            type: "open-ended",
            question: "Why did the American people have to raise one hundred thousand dollars?",
            sampleAnswer: "They had to pay for the pedestal for the statue."
        },
        {
            id: "b6-l1-p-q9",
            type: "open-ended",
            question: "How is the torch of liberty supported by the statue?",
            sampleAnswer: "It is clasped in the hand of the right arm."
        },
        {
            id: "b6-l1-p-q10",
            type: "open-ended",
            question: "How do visitors reach the Statue of Liberty?",
            sampleAnswer: "They take a ferry from lower Manhattan."
        },
        {
            id: "b6-l1-p-q11",
            type: "open-ended",
            question: "What is the meaning of **unveil** as it is used in the passage?",
            sampleAnswer: "It means to reveal for the first time."
        },
        {
            id: "b6-l1-p-q12",
            type: "open-ended",
            question: "Why do you think the United States has been called a nation of **immigrants**?",
            sampleAnswer: "Because so many people from other countries have settled there."
        },
        {
            id: "b6-l1-p-q13",
            type: "open-ended",
            question: "Why is the statue not such a **conspicuous** landmark as it once was?",
            sampleAnswer: "It is dwarfed by the lofty skyscrapers of Manhattan."
        },
        {
            id: "b6-l1-p-q14",
            type: "open-ended",
            question: "Why would **persecuted** people want to come to the United States?",
            sampleAnswer: "They would want to be free to practice their religion or hold political views without fear."
        },
        {
            id: "b6-l1-p-q15",
            type: "open-ended",
            question: "Do you think the people fleeing to the United States for safety in the 1880s felt **affection** for their governments? Why or why not?",
            sampleAnswer: "No, because they were being persecuted by them."
        }
    ]
};
