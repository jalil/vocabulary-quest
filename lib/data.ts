import { DayLesson, VocabularyWord, Story } from "./types";
import { SAT_WORDS } from "./sat_data";
import { KAAT_WORDS } from "./kaat_data";
import { KA_5A_WORDS } from "./ka_5a_data";
import { PRE_1_WORDS } from "./pre_1_data";

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
    ...DAY_1_WORDS,
    ...SAT_WORDS,
    ...KAAT_WORDS,
    ...KA_5A_WORDS,
    ...PRE_1_WORDS
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

export const DAY_1_LESSON: DayLesson = {
    id: "day-1",
    dayNumber: 1,
    words: DAY_1_WORDS,
    stories: MOCK_STORIES
};
