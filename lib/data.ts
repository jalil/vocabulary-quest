import { DayLesson, VocabularyWord, Story } from "./types";
import { SAT_WORDS } from "./sat_data";
import { KAAT_WORDS } from "./kaat_data";
import { KA_5A_5B_WORDS } from "./ka_5a_5b_data";
import { KA_5A_WORDS } from "./ka_5a_data";
import { PRE_1_WORDS } from "./pre_1_data";
import { WORD_MASTERY_LESSONS } from "./word_mastery_data";

export const DAY_1_WORDS: VocabularyWord[] = [
    {
        id: "w1",
        word: "Gigantic",
        pronunciation: "/dʒaɪˈɡæntɪk/",
        definition: "Something that is very, very big. Huge!",
        exampleSentence: "The dinosaur was gigantic, similar to a tall building.",
        imageEmoji: "🦕",
        category: "Adjectives"
    },
    {
        id: "w2",
        word: "Curious",
        pronunciation: "/ˈkjʊəriəs/",
        definition: "Wanting to know more about something.",
        exampleSentence: "The curious cat looked inside the box.",
        imageEmoji: "🤔",
        category: "Emotions"
    },
    {
        id: "w3",
        word: "Observe",
        pronunciation: "/əbˈzɜːrv/",
        definition: "To watch carefully to learn something.",
        exampleSentence: "We observe the birds building their nest.",
        imageEmoji: "👀",
        category: "Verbs"
    },
    {
        id: "w4",
        word: "Habitat",
        pronunciation: "/ˈhæbɪtæt/",
        definition: "The natural home of an animal or plant.",
        exampleSentence: "The jungle is a habitat for many monkeys.",
        imageEmoji: "🌴",
        category: "Nature"
    },
    {
        id: "w5",
        word: "Brilliant",
        pronunciation: "/ˈbrɪljənt/",
        definition: "Very bright or very smart.",
        exampleSentence: "The diamond was brilliant and shiny.",
        imageEmoji: "💎",
        category: "Adjectives"
    }
];

export const MOCK_WORDS: VocabularyWord[] = [
    ...SAT_WORDS,
    ...KAAT_WORDS,
    ...KA_5A_WORDS,
    ...PRE_1_WORDS,
    ...KA_5A_5B_WORDS,
    ...WORD_MASTERY_LESSONS.flatMap(l => l.words)
];

export const MOCK_STORIES: Story[] = [
    {
        id: "s1",
        title: "The Curious Giant",
        type: "fiction",
        content: `Once upon a time, there was a **gigantic** giant named George. George was very **curious**. He wanted to know how small bugs lived.

One day, he bent down to **observe** a tiny shiny beetle. "Wow, you are **brilliant**!" said George.

The beetle didn't answer, but it crawled back to its **habitat** under a leaf. George smiled and learned that even big giants can learn from small things.`,
        wordsIncluded: ["w1", "w2", "w3", "w4", "w5"]
    },
    {
        id: "s2",
        title: "Amazing Animal Homes",
        type: "non-fiction",
        content: `Did you know every animal has a special place to live? This is called a **habitat**.

Some animals live in **gigantic** oceans, while others live in small caves. If you **observe** nature, you will see many different homes.

Nature is **brilliant** because every animal has exactly what it needs to survive!`,
        wordsIncluded: ["w1", "w3", "w4", "w5"]
    }
];

// Helper to chunk array
// Helper to chunk array
function chunkArray<T>(array: T[], size: number): T[][] {
    const chunked: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}

// Generate KAAT Lessons
// Explicitly setting chunk size to 10
const KAAT_CHUNKS = chunkArray(KAAT_WORDS, 10);

export const KAAT_LESSONS: DayLesson[] = KAAT_CHUNKS.map((chunk, index) => ({
    id: `kaat-day-${index + 1}`,
    dayNumber: index + 1, // Ensures starts at Day 1
    words: chunk,
    stories: []
}));

const KA_5A_5B_CHUNKS = chunkArray(KA_5A_5B_WORDS, 10);

export const KA_5A_5B_LESSONS: DayLesson[] = KA_5A_5B_CHUNKS.map((chunk, index) => ({
    id: `5a-5b-day-${index + 1}`,
    dayNumber: index + 1,
    words: chunk,
    stories: []
}));

export const DAY_1_LESSON: DayLesson = {
    id: "day-1",
    dayNumber: 0, // Demo day is Day 0
    words: DAY_1_WORDS,
    stories: MOCK_STORIES
};

export const ALL_LESSONS: DayLesson[] = [
    DAY_1_LESSON,
    ...KAAT_LESSONS,
    ...KA_5A_5B_LESSONS,
    ...WORD_MASTERY_LESSONS
];

export function getLesson(id: string): DayLesson | undefined {
    return ALL_LESSONS.find(l => l.id === id);
}

