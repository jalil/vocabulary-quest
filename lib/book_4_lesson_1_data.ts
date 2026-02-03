import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, synonyms?: string[], antonyms?: string[]): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji,
    synonyms,
    antonyms
});

// Lesson 1 Words
export const b4_l1_words: VocabularyWord[] = [
    createWord("b4-l1-w1", "Benefit", "To help or be helpful to; to be useful to.", "That preschool program benefits young children.", "🎁", ["help", "assist", "aid"], ["harm", "hinder"]),
    createWord("b4-l1-w2", "Complete", "Having no missing parts; whole. Finished.", "She bought a complete set of painting tools at a yard sale.", "✅", ["finish", "conclude"], ["start", "begin", "incomplete"]),
    createWord("b4-l1-w3", "Develop", "To go through a process of growth.", "Running regularly develops strong leg muscles.", "📈", ["grow", "evolve", "expand"], ["decrease", "shrivel"]),
    createWord("b4-l1-w4", "Dismay", "To cause feelings of fear, worry, or surprise.", "A large crack in the ceiling of our newly painted kitchen dismayed my parents.", "😨", ["alarm", "shock", "distress"], ["comfort", "reassure"]),
    createWord("b4-l1-w5", "Ease", "A state of being comfortable—without worry, pain, or trouble.", "My piano lessons allow me to play a concert with ease.", "😌", ["comfort", "relief"], ["trouble", "pain", "difficulty"]),
    createWord("b4-l1-w6", "Hail", "Small lumps of frozen rain. To fall as frozen rain. To greet or welcome.", "The hail bouncing off the metal roof of the garage made a terrible noise.", "🌨️", ["greet", "acclaim", "salute"], ["ignore", "shun"]),
    createWord("b4-l1-w7", "Lack", "To be without. A shortage.", "He never sees the funny side of things, because he lacks a sense of humor.", "🕳️", ["shortage", "scarcity", "need"], ["abundance", "plenty"]),
    createWord("b4-l1-w8", "Master", "Chief; main. Greatly skilled. To become skilled at.", "Rick is a master carpenter.", "🥋", ["expert", "chief", "conquer"], ["amateur", "novice", "learner"]),
    createWord("b4-l1-w9", "Patriot", "One who loves, supports, and is loyal to his or her country.", "George Washington was a patriot who helped unite the United States.", "🇺🇸", ["loyalist", "nationalist"], ["traitor"]),
    createWord("b4-l1-w10", "Project", "A plan or idea for doing something. To stick out. To show on a screen.", "My science project is going to show what acid rain does to plants.", "📽️", ["plan", "scheme", "protrude"], []),
    createWord("b4-l1-w11", "Recommend", "To make a statement of praise. To give advice; to suggest.", "I loved The Secret Garden, and I highly recommend it.", "👍", ["suggest", "advise", "endorse"], ["oppose", "discourage"]),
    createWord("b4-l1-w12", "Remark", "To say; to make a comment.", "My grandmother remarked on how well I looked.", "💬", ["comment", "observation", "statement"], ["silence"]),
    createWord("b4-l1-w13", "Represent", "To stand for or in place of.", "Three dots represent the letter \"S\" in the Morse code.", "🏛️", ["symbolize", "stand for", "exemplify"], []),
    createWord("b4-l1-w14", "Sufficient", "Enough to fill a need.", "Ten lessons on the oboe were sufficient to earn me a place in the school band.", "👌", ["enough", "adequate", "plenty"], ["insufficient", "lacking"]),
    createWord("b4-l1-w15", "Utter", "To make sounds with the voice; to speak.", "Please don't utter another word.", "🗣️", ["speak", "say", "pronounce"], ["mute", "silence"]),
];

// Story 1: Just the Right Word
export const b4_l1_story_1: Story = {
    id: "b4-l1-s1",
    title: "Exercise: Just the Right Word",
    type: "non-fiction",
    content: "Select the word that replaces the bold phrase.",
    wordsIncluded: b4_l1_words.map(w => w.id),
    questions: [
        {
            id: "q1",
            type: "multiple-choice",
            question: "1. I sensed a **total absence** of enthusiasm when I suggested that we climb Mount Monadnock.",
            options: ["lack", "remark", "ease", "benefit"],
            correctAnswer: "lack"
        },
        {
            id: "q2",
            type: "multiple-choice",
            question: "2. Martha Graham **brought into being** a new style of dance in America.",
            options: ["developed", "hailed", "uttered", "mastered"],
            correctAnswer: "developed"
        },
        {
            id: "q3",
            type: "multiple-choice",
            question: "3. The bookshelf **sticks out** too far into the room and has to be made narrower.",
            options: ["projects", "represents", "lacks", "completes"],
            correctAnswer: "projects"
        },
        {
            id: "q4",
            type: "multiple-choice",
            question: "4. I took a hot bath to help **take away the pain in** my aching muscles.",
            options: ["ease", "recommend", "benefit", "master"],
            correctAnswer: "ease"
        },
        {
            id: "q5",
            type: "multiple-choice",
            question: "5. Olga Ramirez expects her novel to be **at a point where no further work is necessary** by the end of the week.",
            options: ["complete", "sufficient", "remarkable", "patriotic"],
            correctAnswer: "complete"
        },
        {
            id: "q6",
            type: "multiple-choice",
            question: "6. My uncle **became very skilled at speaking** French after spending a year in France.",
            options: ["mastered", "uttered", "remarked", "represented"],
            correctAnswer: "mastered"
        },
        {
            id: "q7",
            type: "multiple-choice",
            question: "7. In English, the letter \"c\" **stands for** two different sounds.",
            options: ["represents", "projects", "recommends", "hails"],
            correctAnswer: "represents"
        },
        {
            id: "q8",
            type: "multiple-choice",
            question: "8. Young children **are helped** a great deal from being read to every day.",
            options: ["benefited", "dismayed", "hailed", "recommended"],
            correctAnswer: "benefited"
        },
        {
            id: "q9",
            type: "multiple-choice",
            question: "9. The article ended with a reminder that there is more to showing **love of one's country** than flying your country's flag.",
            options: ["patriotism", "dismay", "mastery", "ease"],
            correctAnswer: "patriotism"
        },
        {
            id: "q10",
            type: "multiple-choice",
            question: "10. The news that the last train had just left **worried and distressed** us.",
            options: ["dismayed", "hailed", "eased", "benefited"],
            correctAnswer: "dismayed"
        },
        {
            id: "q11",
            type: "multiple-choice",
            question: "11. The track coach **gave me the suggestion** that I warm up before starting my run.",
            options: ["recommended", "remarked", "uttered", "projected"],
            correctAnswer: "recommended"
        }
    ]
};

// Story 2: Applying Meanings
export const b4_l1_story_2: Story = {
    id: "b4-l1-s2",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Select the correct answer or answers for each question below.",
    wordsIncluded: b4_l1_words.map(w => w.id),
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following might fill someone with **dismay**?",
            options: ["losing ten dollars", "finding a staple in a tuna sandwich", "finding celery in a tuna sandwich", "eating a tuna sandwich"],
            correctAnswer: "",
            correctAnswers: ["losing ten dollars", "finding a staple in a tuna sandwich"]
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following might put someone at **ease**?",
            options: ["a friendly smile", "a warm welcome", "\"Keep Out\" sign", "a promise to help"],
            correctAnswer: "",
            correctAnswers: ["a friendly smile", "a warm welcome", "a promise to help"]
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following might be **hailed** by people?",
            options: ["a train crash", "a cure for a disease", "a popular president", "rain after a long dry spell"],
            correctAnswer: "",
            correctAnswers: ["a cure for a disease", "a popular president", "rain after a long dry spell"]
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following is a **complete** sentence and needs a period?",
            options: ["I'm cold", "The bus for Toledo", "Let's go", "My hockey puck"],
            correctAnswer: "",
            correctAnswers: ["I'm cold", "Let's go"]
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. A rich person could **lack** which of the following?",
            options: ["money", "time", "freedom", "good health"],
            correctAnswer: "",
            correctAnswers: ["time", "freedom", "good health"] // Technically possible to lack freedom and health and time.
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following could mean a person is **patriotic**?",
            options: ["making money", "voting in elections", "having a hobby", "serving one's country"],
            correctAnswer: "",
            correctAnswers: ["voting in elections", "serving one's country"]
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following is a **remark**?",
            options: ["You look tired.", "2 + 2 = 4", "What on earth are you doing?", "A B C D"],
            correctAnswer: "",
            correctAnswers: ["You look tired.", "What on earth are you doing?"]
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following **represent** other people?",
            options: ["state senators", "storekeepers", "taxi drivers", "lawyers"],
            correctAnswer: "",
            correctAnswers: ["state senators", "lawyers"]
        }
    ]
};

// Story 3: Word Study
export const b4_l1_story_3: Story = {
    id: "b4-l1-s3",
    title: "Exercise: Word Study",
    type: "non-fiction",
    content: "Select the **two synonyms** in each group of four words.",
    wordsIncluded: b4_l1_words.map(w => w.id),
    questions: [
        {
            id: "ws-q1",
            type: "multiple-choice",
            question: "1. Select the two **synonyms**.",
            options: ["harm", "hail", "benefit", "help"],
            correctAnswers: ["benefit", "help"],
            correctAnswer: ""
        },
        {
            id: "ws-q2",
            type: "multiple-choice",
            question: "2. Select the two **synonyms**.",
            options: ["rush", "finish", "complete", "lack"],
            correctAnswers: ["finish", "complete"],
            correctAnswer: ""
        },
        {
            id: "ws-q3",
            type: "multiple-choice",
            question: "3. Select the two **synonyms**.",
            options: ["dismay", "develop", "grow", "need"],
            correctAnswers: ["develop", "grow"],
            correctAnswer: ""
        },
        {
            id: "ws-q4",
            type: "multiple-choice",
            question: "4. Select the two **synonyms**.",
            options: ["alarm", "joy", "hunger", "dismay"],
            correctAnswers: ["alarm", "dismay"], // Alarm -> Fear, Dismay -> Fear/Worry
            correctAnswer: ""
        },
        {
            id: "ws-q5",
            type: "multiple-choice",
            question: "5. Select the two **synonyms**.",
            options: ["ease", "growth", "comfort", "project"],
            correctAnswers: ["ease", "comfort"],
            correctAnswer: ""
        },
        {
            id: "ws-q6",
            type: "multiple-choice",
            question: "6. Select the two **synonyms**.",
            options: ["remark", "hail", "forget", "greet"],
            correctAnswers: ["hail", "greet"],
            correctAnswer: ""
        },
        {
            id: "ws-q7",
            type: "multiple-choice",
            question: "7. Select the two **synonyms**.",
            options: ["shortage", "lack", "promise", "return"],
            correctAnswers: ["shortage", "lack"],
            correctAnswer: ""
        },
        {
            id: "ws-q8",
            type: "multiple-choice",
            question: "8. Select the two **synonyms**.",
            options: ["suggest", "satisfy", "recommend", "promise"],
            correctAnswers: ["suggest", "recommend"],
            correctAnswer: ""
        },
        {
            id: "ws-q9",
            type: "multiple-choice",
            question: "9. Select the two **synonyms**.",
            options: ["comment", "remark", "disturbance", "pause"],
            correctAnswers: ["comment", "remark"],
            correctAnswer: ""
        },
        {
            id: "ws-q10",
            type: "multiple-choice",
            question: "10. Select the two **synonyms**.",
            options: ["repeat", "utter", "represent", "say"],
            correctAnswers: ["utter", "say"],
            correctAnswer: ""
        }
    ]
};

// Story 4: Vocabulary in Context
export const b4_l1_story_4: Story = {
    id: "b4-l1-s4",
    title: "Exercise: Vocabulary in Context",
    type: "non-fiction",
    content: `
# Sequoya's Gift

Sequoya was a **remarkable** man in many ways. He was a skilled silversmith and painter. He also served as a soldier. But he is remembered today for inventing a written language.

Sequoya was a member of the Cherokee nation, the son of a Native American mother and a British father. A **patriotic** person, he was **dismayed** that white people were taking over more and more of the Cherokee lands.

There was no easy way for Cherokees to be in touch with each other because they **lacked** a written language. Words spoken in Cherokee were lost as soon as they were **uttered**. Sequoya believed that the Cherokee people would **benefit** greatly if they had a written language and could read and write. Newspapers could spread the word of what was happening to people. Books could record their history. He made up his mind that he would try to **develop** a written language for his people.

The **project**, which he began in 1809, took twelve years to **complete**. He and his daughter worked together. She carefully sounded out each syllable. Then Sequoya **represented** each one with a letter that he chose from the English, Greek, and Hebrew alphabets. Eighty-six letters were **sufficient** to cover all the sounds of the Cherokee language.

Sequoya used this new written language in a message he sent to the leaders of the Cherokee nation. The leaders were impressed with how simple the system was. They **recommended** that the new written language be taught to everyone who wanted to learn to read and write. People liked it because it could be learned quickly and with **ease**. Those who **mastered** it went on to teach others. The Cherokees set up schools to teach Sequoya's alphabet and began to publish books and newspapers in their new language. The first Native American newspaper, the *Cherokee Phoenix*, was published on February 21, 1828. It was followed by a flood of other newspapers and books.

In his later years, Sequoya travelled throughout North America studying other Native American languages. Everywhere he went he was **hailed** for his invention, which played such an important part in uniting the Cherokee people. He died in 1843. His memory is honored in California's giant sequoia trees, and its beautiful Sequoia National Park.
`,
    wordsIncluded: b4_l1_words.map(w => w.id),
    questions: []
};

// Story 5: Fun & Fascinating FACTS
export const b4_l1_story_5: Story = {
    id: "b4-l1-s5",
    title: "Exercise: Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
# Fun & Fascinating FACTS

* The Latin *bene* means "good" and forms a root of the word **benefit**. A *benefit* is something that is good for a person. Other words formed from this root include *benevolent*, which means "having a wish to do good," and *beneficial*, which means "doing good."

* In addition to its meaning as a verb, **utter** is also an adjective and means "total" or "absolute." (When the cellar door slammed shut behind us, we were left in *utter* darkness.); (I felt like an *utter* fool when the bike I reported stolen was found just where I left it.)
`,
    wordsIncluded: ["b4-l1-w1", "b4-l1-w15"],
    questions: []
};
