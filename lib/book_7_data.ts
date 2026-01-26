import { DayLesson } from "./types";
import { b7_l1_words, b7_l1_story_1, b7_l1_story_reading, b7_l1_facts } from "./book_7_lesson_1_data";
import { b7_l2_words, b7_l2_story_1, b7_l2_story_reading, b7_l2_facts } from "./book_7_lesson_2_data";
import { b7_l3_words, b7_l3_story_1, b7_l3_story_reading, b7_l3_facts } from "./book_7_lesson_3_data";
import { b7_l4_words, b7_l4_story_1, b7_l4_story_reading, b7_l4_facts } from "./book_7_lesson_4_data";
import { b7_l5_words, b7_l5_story_1, b7_l5_story_reading, b7_l5_facts } from "./book_7_lesson_5_data";
import { b7_l6_words, b7_l6_story_1, b7_l6_story_reading, b7_l6_facts } from "./book_7_lesson_6_data";
import { b7_l7_words, b7_l7_story_1, b7_l7_story_reading, b7_l7_facts } from "./book_7_lesson_7_data";
import { b7_l8_words, b7_l8_story_1, b7_l8_story_reading, b7_l8_facts } from "./book_7_lesson_8_data";
import { b7_l9_words, b7_l9_story_1, b7_l9_story_reading, b7_l9_facts } from "./book_7_lesson_9_data";
import { b7_l10_words, b7_l10_story_1, b7_l10_story_reading, b7_l10_facts } from "./book_7_lesson_10_data";
import { b7_l11_words, b7_l11_story_1, b7_l11_story_reading, b7_l11_facts } from "./book_7_lesson_11_data";
import { b7_l12_words, b7_l12_story_1, b7_l12_story_reading, b7_l12_facts } from "./book_7_lesson_12_data";
import { b7_l13_words, b7_l13_story_1, b7_l13_story_reading, b7_l13_facts } from "./book_7_lesson_13_data";
import { b7_l14_words, b7_l14_story_1, b7_l14_story_reading, b7_l14_facts } from "./book_7_lesson_14_data";
import { b7_l15_words, b7_l15_story_1, b7_l15_story_reading, b7_l15_facts } from "./book_7_lesson_15_data";
import { b7_l16_words, b7_l16_story_1, b7_l16_story_reading, b7_l16_facts } from "./book_7_lesson_16_data";
import { b7_l17_words, b7_l17_story_1, b7_l17_story_reading, b7_l17_facts } from "./book_7_lesson_17_data";
import { b7_l18_words, b7_l18_story_1, b7_l18_story_reading, b7_l18_facts } from "./book_7_lesson_18_data";
import { b7_l19_words, b7_l19_story_1, b7_l19_story_reading, b7_l19_facts } from "./book_7_lesson_19_data";
import { b7_l20_words, b7_l20_story_1, b7_l20_story_reading, b7_l20_facts } from "./book_7_lesson_20_data";

export const BOOK_7_LESSONS: DayLesson[] = [
    {
        id: "b7-l1",
        dayNumber: 1, // Lesson 1
        subtitle: "Lesson 1: The Trail of Tears",
        words: b7_l1_words,
        stories: [b7_l1_story_reading, b7_l1_facts, b7_l1_story_1]
    },
    {
        id: "b7-l2",
        dayNumber: 2,
        subtitle: "Lesson 2: The Dodo",
        words: b7_l2_words,
        stories: [b7_l2_story_reading, b7_l2_facts, b7_l2_story_1]
    },
    {
        id: "b7-l3",
        dayNumber: 3,
        subtitle: "Lesson 3: Pandora's Box",
        words: b7_l3_words,
        stories: [b7_l3_story_reading, b7_l3_facts, b7_l3_story_1]
    },
    {
        id: "b7-l4",
        dayNumber: 4,
        subtitle: "Lesson 4: Mount Vernon",
        words: b7_l4_words,
        stories: [b7_l4_story_reading, b7_l4_facts, b7_l4_story_1]
    },
    {
        id: "b7-l5",
        dayNumber: 5,
        subtitle: "Lesson 5: Harvest of Shame",
        words: b7_l5_words,
        stories: [b7_l5_story_reading, b7_l5_facts, b7_l5_story_1]
    },
    {
        id: "b7-l6",
        dayNumber: 6,
        subtitle: "Lesson 6: Out of Her League?",
        words: b7_l6_words,
        stories: [b7_l6_story_reading, b7_l6_facts, b7_l6_story_1]
    },
    {
        id: "b7-l7",
        dayNumber: 7,
        subtitle: "Lesson 7: The Midas Touch",
        words: b7_l7_words,
        stories: [b7_l7_story_reading, b7_l7_facts, b7_l7_story_1]
    },
    {
        id: "b7-l8",
        dayNumber: 8,
        subtitle: "Lesson 8: The Triangle Fire",
        words: b7_l8_words,
        stories: [b7_l8_story_reading, b7_l8_facts, b7_l8_story_1]
    },
    {
        id: "b7-l9",
        dayNumber: 9,
        subtitle: "Lesson 9: The Spanish Conquest of Mexico",
        words: b7_l9_words,
        stories: [b7_l9_story_reading, b7_l9_facts, b7_l9_story_1]
    },
    {
        id: "b7-l10",
        dayNumber: 10,
        subtitle: "Lesson 10: Danger: Manatees at Play",
        words: b7_l10_words,
        stories: [b7_l10_story_reading, b7_l10_facts, b7_l10_story_1]
    },
    {
        id: "b7-l11",
        dayNumber: 11,
        subtitle: "Lesson 11: Fathoming the Deep",
        words: b7_l11_words,
        stories: [b7_l11_story_reading, b7_l11_facts, b7_l11_story_1]
    },
    {
        id: "b7-l15",
        dayNumber: 15,
        subtitle: "Lesson 15: Bluegrass",
        words: b7_l15_words,
        stories: [b7_l15_story_reading, b7_l15_facts, b7_l15_story_1]
    },
    {
        id: "b7-l16",
        dayNumber: 16,
        subtitle: "Lesson 16: Harbor Seals",
        words: b7_l16_words,
        stories: [b7_l16_story_reading, b7_l16_facts, b7_l16_story_1]
    },
    {
        id: "b7-l17",
        dayNumber: 17,
        subtitle: "Lesson 17: A Noble Bargain",
        words: b7_l17_words,
        stories: [b7_l17_story_reading, b7_l17_facts, b7_l17_story_1]
    },
    {
        id: "b7-l18",
        dayNumber: 18,
        subtitle: "Lesson 18: A Raisin in the Sun",
        words: b7_l18_words,
        stories: [b7_l18_story_reading, b7_l18_facts, b7_l18_story_1]
    },
    {
        id: "b7-l19",
        dayNumber: 19,
        subtitle: "Lesson 19: The Ultimate Test",
        words: b7_l19_words,
        stories: [b7_l19_story_reading, b7_l19_facts, b7_l19_story_1]
    },
    {
        id: "b7-l20",
        dayNumber: 20,
        subtitle: "Lesson 20: Saving the Planet",
        words: b7_l20_words,
        stories: [b7_l20_story_reading, b7_l20_facts, b7_l20_story_1]
    }
];
