import { DayLesson } from "./types";
import { b8_l1_words, b8_l1_story_1, b8_l1_story_reading, b8_l1_facts } from "./book_8_lesson_1_data";
import { b8_l2_words, b8_l2_story_1, b8_l2_story_reading, b8_l2_facts } from "./book_8_lesson_2_data";
import { b8_l3_words, b8_l3_story_1, b8_l3_story_reading, b8_l3_facts } from "./book_8_lesson_3_data";
import { b8_l4_words, b8_l4_story_1, b8_l4_story_reading, b8_l4_facts } from "./book_8_lesson_4_data";
import { b8_l5_words, b8_l5_story_1, b8_l5_story_reading, b8_l5_facts } from "./book_8_lesson_5_data";
import { b8_l6_words, b8_l6_story_1, b8_l6_story_reading, b8_l6_facts } from "./book_8_lesson_6_data";
import { b8_l7_words, b8_l7_story_1, b8_l7_story_reading, b8_l7_facts } from "./book_8_lesson_7_data";
import { b8_l8_words, b8_l8_story_1, b8_l8_story_reading, b8_l8_facts } from "./book_8_lesson_8_data";
import { b8_l9_words, b8_l9_story_1, b8_l9_story_reading, b8_l9_facts } from "./book_8_lesson_9_data";
import { b8_l10_words, b8_l10_story_1, b8_l10_story_reading, b8_l10_facts } from "./book_8_lesson_10_data";
import { b8_l11_words, b8_l11_story_1, b8_l11_story_reading, b8_l11_facts } from "./book_8_lesson_11_data";
import { b8_l12_words, b8_l12_story_1, b8_l12_story_reading, b8_l12_facts } from "./book_8_lesson_12_data";
import { b8_l13_words, b8_l13_story_1, b8_l13_story_reading, b8_l13_facts } from "./book_8_lesson_13_data";
import { b8_l14_words, b8_l14_story_1, b8_l14_story_reading, b8_l14_facts } from "./book_8_lesson_14_data";
import { b8_l15_words, b8_l15_story_1, b8_l15_story_reading, b8_l15_facts } from "./book_8_lesson_15_data";
import { b8_l16_words, b8_l16_story_1, b8_l16_story_reading } from "./book_8_lesson_16_data";
import { b8_l17_words, b8_l17_story_1, b8_l17_story_reading, b8_l17_facts } from "./book_8_lesson_17_data";
import { b8_l18_words, b8_l18_story_1, b8_l18_story_reading, b8_l18_facts } from "./book_8_lesson_18_data";
import { b8_l19_words, b8_l19_story_1, b8_l19_story_reading, b8_l19_facts } from "./book_8_lesson_19_data";
import { b8_l20_words, b8_l20_story_1, b8_l20_story_reading, b8_l20_facts } from "./book_8_lesson_20_data";

export const BOOK_8_LESSONS: DayLesson[] = [
    {
        id: "b8-l1",
        dayNumber: 1,
        subtitle: "Lesson 1: A Poet of the People",
        words: b8_l1_words,
        stories: [b8_l1_story_reading, b8_l1_facts, b8_l1_story_1]
    },
    {
        id: "b8-l2",
        dayNumber: 2,
        subtitle: "Lesson 2: The Iceman",
        words: b8_l2_words,
        stories: [b8_l2_story_reading, b8_l2_facts, b8_l2_story_1]
    },
    {
        id: "b8-l3",
        dayNumber: 3,
        subtitle: "Lesson 3: Telling Tales",
        words: b8_l3_words,
        stories: [b8_l3_story_reading, b8_l3_facts, b8_l3_story_1]
    },
    {
        id: "b8-l4",
        dayNumber: 4,
        subtitle: "Lesson 4: The Tiger's Whisker",
        words: b8_l4_words,
        stories: [b8_l4_story_reading, b8_l4_facts, b8_l4_story_1]
    },
    {
        id: "b8-l5",
        dayNumber: 5,
        subtitle: "Lesson 5: The Bounty",
        words: b8_l5_words,
        stories: [b8_l5_story_reading, b8_l5_facts, b8_l5_story_1]
    },
    {
        id: "b8-l6",
        dayNumber: 6,
        subtitle: "Lesson 6: The Bounty, Part Two",
        words: b8_l6_words,
        stories: [b8_l6_story_reading, b8_l6_facts, b8_l6_story_1]
    },
    {
        id: "b8-l7",
        dayNumber: 7,
        subtitle: "Lesson 7: Women in Space, Part One",
        words: b8_l7_words,
        stories: [b8_l7_story_reading, b8_l7_facts, b8_l7_story_1]
    },
    {
        id: "b8-l8",
        dayNumber: 8,
        subtitle: "Lesson 8: Women in Space, Part Two",
        words: b8_l8_words,
        stories: [b8_l8_story_reading, b8_l8_facts, b8_l8_story_1]
    },
    {
        id: "b8-l9",
        dayNumber: 9,
        subtitle: "Lesson 9: The Children of the Bounty",
        words: b8_l9_words,
        stories: [b8_l9_story_reading, b8_l9_facts, b8_l9_story_1]
    },
    {
        id: "b8-l10",
        dayNumber: 10,
        subtitle: "Lesson 10: Rigoberta Menchu",
        words: b8_l10_words,
        stories: [b8_l10_story_reading, b8_l10_facts, b8_l10_story_1]
    },
    {
        id: "b8-l11",
        dayNumber: 11,
        subtitle: "Lesson 11: A Gift from the Sea",
        words: b8_l11_words,
        stories: [b8_l11_story_reading, b8_l11_facts, b8_l11_story_1]
    },
    {
        id: "b8-l12",
        dayNumber: 12,
        subtitle: "Lesson 12: Hearst Castle's Master Builder",
        words: b8_l12_words,
        stories: [b8_l12_story_reading, b8_l12_facts, b8_l12_story_1]
    },
    {
        id: "b8-l13",
        dayNumber: 13,
        subtitle: "Lesson 13: More Than Just a Pretty Flower",
        words: b8_l13_words,
        stories: [b8_l13_story_reading, b8_l13_facts, b8_l13_story_1]
    },
    {
        id: "b8-l14",
        dayNumber: 14,
        subtitle: "Lesson 14: Leonardo da Vinci: Renaissance Man",
        words: b8_l14_words,
        stories: [b8_l14_story_reading, b8_l14_facts, b8_l14_story_1]
    },
    {
        id: "b8-l15",
        dayNumber: 15,
        subtitle: "Lesson 15: Who's Afraid of the Big, Bad Wolf?",
        words: b8_l15_words,
        stories: [b8_l15_story_reading, b8_l15_facts, b8_l15_story_1]
    },
    {
        id: "b8-l16",
        dayNumber: 16,
        subtitle: "Lesson 16: The Wisdom of Rabbi Rabinowicz",
        words: b8_l16_words,
        stories: [b8_l16_story_1, b8_l16_story_reading]
    },
    {
        id: "b8-l17",
        dayNumber: 17,
        subtitle: "Lesson 17: The Country Without an Army",
        words: b8_l17_words,
        stories: [b8_l17_story_1, b8_l17_story_reading, b8_l17_facts]
    },
    {
        id: "b8-l18",
        dayNumber: 18,
        subtitle: "Lesson 18: Prairie Women",
        words: b8_l18_words,
        stories: [b8_l18_story_1, b8_l18_story_reading, b8_l18_facts]
    },
    {
        id: "b8-l19",
        dayNumber: 19,
        subtitle: "Lesson 19: The Thousand-Year Battle",
        words: b8_l19_words,
        stories: [b8_l19_story_1, b8_l19_story_reading, b8_l19_facts]
    },
    {
        id: "b8-l20",
        dayNumber: 20,
        subtitle: "Lesson 20: Paul Robeson: All-American",
        words: b8_l20_words,
        stories: [b8_l20_story_1, b8_l20_story_reading, b8_l20_facts]
    }
];
