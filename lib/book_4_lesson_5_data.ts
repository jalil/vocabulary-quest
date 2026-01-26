import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji
});

// Lesson 5 Words
export const b4_l5_words: VocabularyWord[] = [
    createWord("b4-l5-w1", "Abrupt", "Happening suddenly, without warning.", "When the bus made an abrupt stop, several people were thrown off balance.", "🛑"),
    createWord("b4-l5-w2", "Achieve", "To do what one sets out to do.", "Even though she was blind and deaf, Helen Keller achieved her goal of graduating from college.", "🏆"),
    createWord("b4-l5-w3", "Attempt", "To try; to make an effort. A try.", "When I attempted to leave class early, the teacher asked me to wait until the period was over.", "🏋️"),
    createWord("b4-l5-w4", "Contempt", "A feeling that someone or something is bad or unworthy.", "Their classmates felt nothing but contempt for those who refused to help the new student.", "😠"),
    createWord("b4-l5-w5", "Entertain", "To interest and amuse. To have guests. To have in mind.", "My little brother Ramon entertained himself for hours with his new paints.", "🤹"),
    createWord("b4-l5-w6", "Glimpse", "To get a quick look at. A quick or hasty look.", "I glimpsed a black bear near our campground.", "👀"),
    createWord("b4-l5-w7", "Mock", "To make fun of. Not real; pretend.", "Cinderella's stepsisters mocked her for thinking she could go to the ball.", "🤡"),
    createWord("b4-l5-w8", "Persist", "To keep on doing or trying. To go on and on.", "In spite of many falls on the ice, I persisted and finally was able to skate backward.", "🔁"),
    createWord("b4-l5-w9", "Persuade", "To win someone over by arguing or asking.", "Frank finally persuaded me to read The Adventures of Tom Sawyer.", "🗣️"),
    createWord("b4-l5-w10", "Phase", "A stage in a series of changes.", "The full moon is one of the phases of the moon.", "🌖"),
    createWord("b4-l5-w11", "Quaint", "Odd or unusual in a pleasing or old-fashioned way.", "Wooden shoes seem quaint to Americans, but not to the people of Holland.", "🏘️"),
    createWord("b4-l5-w12", "Recall", "To remember. To call or take back.", "Do you recall what time we left for the soccer game?", "💭"),
    createWord("b4-l5-w13", "Reject", "To refuse to accept or use. Something that falls short of what is acceptable.", "The school board rejected the plan for the new gym because the cost was excessive.", "❌"),
    createWord("b4-l5-w14", "Revise", "To go over carefully in order to correct or improve. To change in order to bring up to date.", "I don't like to revise my stories, but they get better when I do.", "📝"),
    createWord("b4-l5-w15", "Sensitive", "Quick to notice or feel. Easily affected by even slight change.", "My mom is very sensitive to my feelings.", "🥺")
];

// Fun Facts
export const b4_l5_story_5: Story = {
    id: "b4-l5-s5",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
• The Latin *abruptus* means "broken" and forms the root of the adjective **abrupt**. If there is an **abrupt** end to something—a song, for example—it means it was *broken* off suddenly and unexpectedly.

• Other words formed from this root include *interrupt* (When you *interrupt* a conversation, you *break* into it) and *disrupt* (If you *disrupt* a party, you *break* it up).
`,
    wordsIncluded: [],
    questions: []
};

// Story 1: Finding Meanings
export const b4_l5_story_1: Story = {
    id: "b4-l5-s1",
    title: "Exercise: Finding Meanings",
    type: "non-fiction",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 5.",
    wordsIncluded: b4_l5_words.map(w => w.id),
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) one stage in a process. (c) A glimpse is (b) something overheard. (d) A phase is",
            options: ["(a) and (b)", "(c) and (b)", "(d) and (a)", "(c) and (a)"],
            correctAnswer: "(d) and (a)" // A phase is one stage in a process.
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) An achievement is (c) Contempt is (b) something done by making (d) something that is changed. an effort.",
            options: ["(a) and (b)", "(c) and (b)", "(a) and (d)", "(c) and (d)"],
            correctAnswer: "(a) and (b)" // An achievement is something done by making an effort.
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) loud noise. (c) A glimpse is a (b) quick look. (d) A reject is a",
            options: ["(c) and (a)", "(c) and (b)", "(d) and (a)", "(d) and (b)"],
            correctAnswer: "(c) and (b)" // A glimpse is a quick look.
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) Persistence is (c) a feeling that something is unworthy. (b) Contempt is (d) a wish to do better.",
            options: ["(a) and (c)", "(b) and (c)", "(a) and (d)", "(b) and (d)"],
            correctAnswer: "(b) and (c)" // Contempt is a feeling that something is unworthy.
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) that is not accepted. (c) An attempt is something (b) that goes on longer than (d) A reject is something expected.",
            options: ["(d) and (a)", "(d) and (b)", "(c) and (a)", "(c) and (b)"],
            correctAnswer: "(d) and (a)" // A reject is something that is not accepted.
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) Sensitive people (c) are skilled at getting their ideas across. (b) expect the worst to happen. (d) Persuasive people",
            options: ["(a) and (c)", "(d) and (c)", "(a) and (b)", "(d) and (b)"],
            correctAnswer: "(d) and (c)" // Persuasive people are skilled at getting their ideas across.
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) To attempt something is to (c) take it back. (b) try to do it. (d) To revise something is to",
            options: ["(a) and (b)", "(d) and (b)", "(a) and (c)", "(d) and (c)"],
            correctAnswer: "(a) and (b)" // To attempt something is to try to do it.
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) give up. (c) refuse to give up. (b) To persist is to (d) To recall is to",
            options: ["(b) and (a)", "(b) and (c)", "(d) and (a)", "(d) and (c)"],
            correctAnswer: "(b) and (c)" // To persist is to refuse to give up.
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) To mock an idea is to (c) To entertain an idea is to (b) give it serious thought. (d) keep it to oneself.",
            options: ["(a) and (b)", "(c) and (b)", "(a) and (d)", "(c) and (d)"],
            correctAnswer: "(c) and (b)" // To entertain an idea is to give it serious thought. (Definition 3: To have in mind)
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) To recall something is to (c) to take it back. (b) To revise something is (d) to throw it with force.",
            options: ["(a) and (c)", "(a) and (d)", "(b) and (c)", "(b) and (d)"],
            correctAnswer: "(a) and (c)" // To recall something is to take it back. (Definition 2)
        }
    ]
};

// Story 2: Just the Right Word
export const b4_l5_story_2: Story = {
    id: "b4-l5-s2",
    title: "Exercise: Just the Right Word",
    type: "non-fiction",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    wordsIncluded: b4_l5_words.map(w => w.id),
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. This thermometer is very **quick to show changes** to the temperature.",
            options: ["abrupt", "sensitive", "quaint", "persistent"],
            correctAnswer: "sensitive"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. His top hat and long cape seemed **pleasingly old-fashioned** to the audience.",
            options: ["sensitive", "quaint", "entertaining", "abrupt"],
            correctAnswer: "quaint"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The **unexpectedly sudden** change in the weather surprised everyone.",
            options: ["abrupt", "mock", "phase", "persist"],
            correctAnswer: "abrupt"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. Juanita **did what she set out to do**, which was to get a perfect score on the test.",
            options: ["attempted", "achieved", "rejected", "recalled"],
            correctAnswer: "achieved"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. We **had people staying with us** almost every weekend last summer.",
            options: ["entertained", "persuaded", "recalled", "glimpsed"],
            correctAnswer: "entertained"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. If the fog **goes on for a long time**, the plane will be unable to leave on time.",
            options: ["persists", "phases", "mocks", "rejects"],
            correctAnswer: "persists"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. The coach **made fun of** the shortstop's unusual way of running.",
            options: ["revised", "recalled", "mocked", "achieved"],
            correctAnswer: "mocked"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. I **caught a quick look at** him through the window of the bus.",
            options: ["recalled", "glimpsed", "persuaded", "attempted"],
            correctAnswer: "glimpsed"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. She needs to **make changes in** her speech before she gives it.",
            options: ["revise", "reject", "recall", "mock"],
            correctAnswer: "revise"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. Each **stage in the series of changes** must be carefully planned, or the project will fail.",
            options: ["phase", "attempt", "glimpse", "achievement"],
            correctAnswer: "phase"
        }
    ]
};

// Story 3: Applying Meanings
export const b4_l5_story_3: Story = {
    id: "b4-l5-s3",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    wordsIncluded: b4_l5_words.map(w => w.id),
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **sensitive**?",
            options: ["(a) a person's clothing", "(b) a person's hearing", "(c) a person's feelings", "(d) a person's skin"],
            correctAnswer: "(b), (c), (d)"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following might a person think **quaint**?",
            options: ["(a) a full moon", "(b) an old Valentine card", "(c) a hundred-year-old toy", "(d) pictures in a 1910 book of fairy tales"],
            correctAnswer: "(b), (c), (d)"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following might a person **glimpse**?",
            options: ["(a) someone leaving a crowded room", "(b) a letter someone is trying to hide", "(c) a loud noise", "(d) a strange smell"],
            correctAnswer: "(a), (b)"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following can a person **achieve**?",
            options: ["(a) a goal one sets for oneself", "(b) a calm frame of mind", "(c) naturally curly hair", "(d) high marks on a test"],
            correctAnswer: "(a), (b), (d)"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following would you probably **reject**?",
            options: ["(a) being given a lot of money", "(b) an offer of a ride from a stranger", "(c) bad advice", "(d) a plan with too many steps"],
            correctAnswer: "(b), (c), (d)"
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following might be **persistent**?",
            options: ["(a) a flash of lightning", "(b) cold and rainy weather", "(c) a back pain", "(d) a bad smell"],
            correctAnswer: "(b), (c), (d)"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following can be **revised**?",
            options: ["(a) a written report", "(b) a person's height", "(c) a set of calculations", "(d) a weather forecast"],
            correctAnswer: "(a), (c), (d)" // Weather forecast can be revised? Yes. Calculations? Yes. Height? No.
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following might be **entertaining**?",
            options: ["(a) a magician's tricks", "(b) a football game", "(c) a bus timetable", "(d) an aching tooth"],
            correctAnswer: "(a), (b)"
        }
    ]
};

// Story 4: Reading Passage
export const b4_l5_story_4: Story = {
    id: "b4-l5-s4",
    title: "Reading Passage: A Life That Changed",
    type: "non-fiction",
    content: `
Hans Christian Andersen's famous story "The Ugly Duckling" tells of a little duckling that looks different from others. The duckling is **mocked** for being odd. The little creature turns out not to be a duck at all but a beautiful swan. From a quick **glimpse** into the life of the author, we learn that a dramatic change took place in Andersen's own childhood. He also took a long time to fit in and to find a special place for himself.

Hans Christian Andersen was born in Denmark in 1805. His father was a shoemaker who struggled to make a living. Hans always felt loved by his parents. He had a happy childhood. He had no brothers or sisters. Andersen was a **sensitive** child who lived in a private world of his own. His greatest joy was a toy theater his father made for him. The little boy **entertained** his parents by putting on plays. He dressed the people of his little toy theater in **quaint** clothes that he made himself.

When Hans was eleven, his father died. The young boy's life changed **abruptly**. He had to go to work, but he failed at every job he **attempted**. His fellow workers could not understand the strange boy who spent all his time daydreaming. They treated him with **contempt**, making his life miserable. When he was fourteen, Hans **persuaded** his mother to let him go to the big city of Copenhagen. He tried to get work there as an actor, but was unsuccessful. He also tried dancing and singing, but he was not very good at these either. He tried writing plays, but theater owners **rejected** them. In this **phase** of his life, he didn't seem to fit in anywhere.

But Andersen **persisted** in his efforts to be a writer. Over the next fifteen years he wrote poems, travel articles, novels, and plays. He worked very hard, taking care to **revise** each sentence carefully until he got the words just right. No one paid much attention to his work, however, until he began writing fairy tales. He did not have to search for ideas for these; all he had to do was **recall** the stories his father had told him when he was a little boy. He wrote more than 150 wonderful fairy tales. **Achieving** fame at last, he became one of the best-loved writers in the world. You will read one of his stories in the next lesson.
`,
    wordsIncluded: b4_l5_words.map(w => w.id),
    questions: []
};
