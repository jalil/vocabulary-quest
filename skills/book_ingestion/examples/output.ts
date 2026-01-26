import { Story, VocabularyWord } from "./types";

export const b4_l19_words: VocabularyWord[] = [
    {
        id: "audition",
        word: "audition",
        definition: "(n.) A short performance by an actor or musician as a test for a particular job. (v.) To try out for.",
        exampleSentence: "Auditions for the school band will be held tomorrow.",
        imageEmoji: "🎭",
        category: "Grade 4"
    },
    {
        id: "create",
        word: "create",
        definition: "(v.) To bring into being; to produce for the first time. (adj.) creative: Having new and original ideas. (n.) creation: The act of bringing into being; something created.",
        exampleSentence: "The computer industry has created many new jobs.",
        imageEmoji: "🎨",
        category: "Grade 4"
    }
];

export const b4_l19_story_1: Story = {
    id: "b4-l19-s1",
    title: "19A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 19.`,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: [
        {
            id: "19a-q1",
            type: "multiple-choice",
            question: "1. (a) the things that are left out. (c) Essentials are (b) Traditions are (d) the things considered necessary.",
            options: ["c-d", "b-a", "c-a", "b-d"], // Options generated based on context or manually filled if unclear
            correctAnswer: "c-d"
        },
        {
            id: "19a-q2",
            type: "multiple-choice",
            question: "2. (a) know or remember it. (c) To create a piece of work is to (b) To recognize a piece of work is to (d) make changes in it.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        }
    ]
};

export const b4_l19_story_5: Story = {
    id: "b4-l19-s5",
    title: "Reading Passage: Martha Graham: Artist and Teacher",
    type: "non-fiction",
    content: `
Freedom! Free to be what you want to be, and free to do what you want to do. That's all Martha Graham wanted, but it wasn't easy. She was a dancer who went on to become one of the **foremost** artists of her time. She was also **recognized** as one of the greatest teachers of modern dance. But before she could do any of this, Martha Graham had to change the rules.
    `,
    wordsIncluded: b4_l19_words.map(w => w.id),
    questions: []
};
