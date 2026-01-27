import { DayLesson, VocabularyWord, Story } from "./types";

import { PRE_1_WORDS } from "./pre_1_data";
import { IDIOM_WORDS } from "./idioms_data";
import { PASSAGE_LESSONS } from "./passages_data";
import { BOOK_5_LESSONS } from "./book_5_data_v2";

import { BOOK_4_LESSONS } from "./book_4_data";
import { book_6_lessons } from "./book_6_data";
import { BOOK_7_LESSONS } from "./book_7_data";
import { BOOK_8_LESSONS } from "./book_8_data";
import { mita_lessons } from "./mita_data";

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
    ...PRE_1_WORDS,
    ...IDIOM_WORDS,
    ...BOOK_5_LESSONS.flatMap(l => l.words),

    ...BOOK_4_LESSONS.flatMap(l => l.words),
    ...book_6_lessons.flatMap(l => l.words),
    ...BOOK_7_LESSONS.flatMap(l => l.words),
    ...BOOK_8_LESSONS.flatMap(l => l.words),
    ...mita_lessons.flatMap(l => l.words)
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
function chunkArray<T>(array: T[], size: number): T[][] {
    const chunked: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}


const IDIOM_CHUNKS = chunkArray(IDIOM_WORDS, 10);

export const IDIOM_LESSONS: DayLesson[] = IDIOM_CHUNKS.map((chunk, index) => ({
    id: `idioms-day-${index + 1}`,
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
    ...IDIOM_LESSONS,
    ...PASSAGE_LESSONS,
    ...BOOK_5_LESSONS,
    ...BOOK_4_LESSONS,
    ...book_6_lessons,
    ...BOOK_7_LESSONS,
    ...BOOK_8_LESSONS,
    ...mita_lessons
];

export function getLesson(id: string): DayLesson | undefined {
    return ALL_LESSONS.find(l => l.id === id);
}

