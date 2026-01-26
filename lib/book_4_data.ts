import { DayLesson } from "./types";
import {
    b4_l1_words,
    b4_l1_story_1,
    b4_l1_story_2,
    b4_l1_story_3,
    b4_l1_story_4,
    b4_l1_story_5
} from "./book_4_lesson_1_data";
import {
    b4_l2_words,
    b4_l2_story_1,
    b4_l2_story_2,
    b4_l2_story_3,
    b4_l2_story_4,
    b4_l2_story_5
} from "./book_4_lesson_2_data";
import {
    b4_l3_words,
    b4_l3_story_1,
    b4_l3_story_2,
    b4_l3_story_3,
    b4_l3_story_4,
    b4_l3_story_5
} from "./book_4_lesson_3_data";
import {
    b4_l4_words,
    b4_l4_story_1,
    b4_l4_story_2,
    b4_l4_story_3,
    b4_l4_story_4,
    b4_l4_story_5,
    b4_l4_story_6
} from "./book_4_lesson_4_data";
import {
    b4_l5_words,
    b4_l5_story_1,
    b4_l5_story_2,
    b4_l5_story_3,
    b4_l5_story_4,
    b4_l5_story_5
} from "./book_4_lesson_5_data";
import {
    b4_l6_words,
    b4_l6_story_1,
    b4_l6_story_2,
    b4_l6_story_3,
    b4_l6_story_4,
    b4_l6_story_5,
    b4_l6_story_6
} from "./book_4_lesson_6_data";
import {
    b4_l7_words,
    b4_l7_story_1,
    b4_l7_story_2,
    b4_l7_story_3,
    b4_l7_story_5,
    b4_l7_story_6
} from "./book_4_lesson_7_data";
import {
    b4_l8_words,
    b4_l8_story_1,
    b4_l8_story_2,
    b4_l8_story_3,
    b4_l8_story_4,
    b4_l8_story_5,
    b4_l8_story_6
} from "./book_4_lesson_8_data";
import {
    b4_l9_words,
    b4_l9_story_1,
    b4_l9_story_2,
    b4_l9_story_3,
    b4_l9_story_5,
    b4_l9_story_6
} from "./book_4_lesson_9_data";
import {
    b4_l10_words,
    b4_l10_story_1,
    b4_l10_story_2,
    b4_l10_story_3,
    b4_l10_story_4,
    b4_l10_story_5,
    b4_l10_story_6
} from "./book_4_lesson_10_data";
import {
    b4_l11_words,
    b4_l11_story_1,
    b4_l11_story_2,
    b4_l11_story_3,
    b4_l11_story_4,
    b4_l11_story_5,
    b4_l11_story_6
} from "./book_4_lesson_11_data";
import {
    b4_l12_words,
    b4_l12_story_1,
    b4_l12_story_2,
    b4_l12_story_3,
    b4_l12_story_4,
    b4_l12_story_5,
    b4_l12_story_6
} from "./book_4_lesson_12_data";
import {
    b4_l16_words,
    b4_l16_story_1,
    b4_l16_story_2,
    b4_l16_story_3,
    b4_l16_story_4,
    b4_l16_story_5,
    b4_l16_story_6
} from "./book_4_lesson_16_data";
import {
    b4_l17_words,
    b4_l17_story_1,
    b4_l17_story_2,
    b4_l17_story_3,
    b4_l17_story_4,
    b4_l17_story_5,
    b4_l17_story_6
} from "./book_4_lesson_17_data";
import {
    b4_l18_words,
    b4_l18_story_1,
    b4_l18_story_2,
    b4_l18_story_3,
    b4_l18_story_4,
    b4_l18_story_5,
    b4_l18_story_6
} from "./book_4_lesson_18_data";
import {
    b4_l19_words,
    b4_l19_story_1,
    b4_l19_story_2,
    b4_l19_story_3,
    b4_l19_story_4,
    b4_l19_story_5,
    b4_l19_story_6
} from "./book_4_lesson_19_data";
import {
    b4_l20_words,
    b4_l20_story_1,
    b4_l20_story_2,
    b4_l20_story_3,
    b4_l20_story_4,
    b4_l20_story_5,
    b4_l20_story_6
} from "./book_4_lesson_20_data";

import {
    b4_l13_words,
    b4_l13_story_1,
    b4_l13_story_2,
    b4_l13_story_3,
    b4_l13_story_4,
    b4_l13_story_5,
    b4_l13_story_6
} from "./book_4_lesson_13_data";
import {
    b4_l14_words,
    b4_l14_story_1,
    b4_l14_story_2,
    b4_l14_story_3,
    b4_l14_story_4,
    b4_l14_story_5,
    b4_l14_story_6
} from "./book_4_lesson_14_data";
import {
    b4_l15_words,
    b4_l15_story_1,
    b4_l15_story_2,
    b4_l15_story_3,
    b4_l15_story_4,
    b4_l15_story_5,
    b4_l15_story_6
} from "./book_4_lesson_15_data";

export const BOOK_4_LESSONS: DayLesson[] = [
    {
        id: "b4-l1",
        dayNumber: 1,
        subtitle: "Lesson 1: Sequoya's Gift",
        words: b4_l1_words,
        stories: [b4_l1_story_1, b4_l1_story_2, b4_l1_story_3, b4_l1_story_4, b4_l1_story_5]
    },
    {
        id: "b4-l2",
        dayNumber: 2,
        subtitle: "Lesson 2: California's Forest Giants",
        words: b4_l2_words,
        stories: [b4_l2_story_1, b4_l2_story_2, b4_l2_story_3, b4_l2_story_4, b4_l2_story_5]
    },
    {
        id: "b4-l3",
        dayNumber: 3,
        subtitle: "Lesson 3: A Long Winter Nap",
        words: b4_l3_words,
        stories: [b4_l3_story_1, b4_l3_story_2, b4_l3_story_3, b4_l3_story_4, b4_l3_story_5]
    },
    {
        id: "b4-l4",
        dayNumber: 4,
        subtitle: "Lesson 4: The Chimpanzee",
        words: b4_l4_words,
        stories: [b4_l4_story_1, b4_l4_story_2, b4_l4_story_3, b4_l4_story_4, b4_l4_story_5]
    },
    {
        id: "b4-l5",
        dayNumber: 5,
        subtitle: "Lesson 5: Antarctic Antics",
        words: b4_l5_words,
        stories: [b4_l5_story_1, b4_l5_story_2, b4_l5_story_3, b4_l5_story_4, b4_l5_story_5]
    },
    {
        id: "b4-l6",
        dayNumber: 6,
        subtitle: "Lesson 6: The Last Great Race",
        words: b4_l6_words,
        stories: [b4_l6_story_1, b4_l6_story_2, b4_l6_story_3, b4_l6_story_4, b4_l6_story_5]
    },
    {
        id: "b4-l7",
        dayNumber: 7,
        subtitle: "Lesson 7: Armed But Not Dangerous",
        words: b4_l7_words,
        stories: [b4_l7_story_1, b4_l7_story_2, b4_l7_story_3, b4_l7_story_5, b4_l7_story_6]
    },
    {
        id: "b4-l8",
        dayNumber: 8,
        subtitle: "Lesson 8: The Great Pyramid",
        words: b4_l8_words,
        stories: [b4_l8_story_1, b4_l8_story_2, b4_l8_story_3, b4_l8_story_4, b4_l8_story_5, b4_l8_story_6]
    },
    {
        id: "b4-l9",
        dayNumber: 9,
        subtitle: "Lesson 9: The Forty-Niners",
        words: b4_l9_words,
        stories: [b4_l9_story_1, b4_l9_story_2, b4_l9_story_3, b4_l9_story_5, b4_l9_story_6]
    },
    {
        id: "b4-l10",
        dayNumber: 10,
        subtitle: "Lesson 10: Tokoyo and the Sea Monster",
        words: b4_l10_words,
        stories: [b4_l10_story_1, b4_l10_story_2, b4_l10_story_3, b4_l10_story_4, b4_l10_story_5, b4_l10_story_6]
    },
    {
        id: "b4-l11",
        dayNumber: 11,
        subtitle: "Lesson 11: Maple Sugaring",
        words: b4_l11_words,
        stories: [b4_l11_story_1, b4_l11_story_2, b4_l11_story_3, b4_l11_story_4, b4_l11_story_5, b4_l11_story_6]
    },
    {
        id: "b4-l12",
        dayNumber: 12,
        subtitle: "Lesson 12: Communicating with Koko",
        words: b4_l12_words,
        stories: [b4_l12_story_1, b4_l12_story_2, b4_l12_story_3, b4_l12_story_4, b4_l12_story_5, b4_l12_story_6]
    },
    {
        id: "b4-l13",
        dayNumber: 13,
        subtitle: "Lesson 13: Anne Frank's Diary",
        words: b4_l13_words,
        stories: [b4_l13_story_1, b4_l13_story_2, b4_l13_story_3, b4_l13_story_4, b4_l13_story_5, b4_l13_story_6]
    },
    {
        id: "b4-l14",
        dayNumber: 14,
        subtitle: "Lesson 14: How Water Lilies Began",
        words: b4_l14_words,
        stories: [b4_l14_story_1, b4_l14_story_2, b4_l14_story_3, b4_l14_story_4, b4_l14_story_5, b4_l14_story_6]
    },
    {
        id: "b4-l15",
        dayNumber: 15,
        subtitle: "Lesson 15: The Fall and Rise of the Bald Eagle",
        words: b4_l15_words,
        stories: [b4_l15_story_1, b4_l15_story_2, b4_l15_story_3, b4_l15_story_4, b4_l15_story_5, b4_l15_story_6]
    },
    {
        id: "b4-l16",
        dayNumber: 16,
        subtitle: "Lesson 16: The Story of Johnny Appleseed",
        words: b4_l16_words,
        stories: [b4_l16_story_1, b4_l16_story_2, b4_l16_story_3, b4_l16_story_4, b4_l16_story_5, b4_l16_story_6]
    },
    {
        id: "b4-l17",
        dayNumber: 17,
        subtitle: "Lesson 17: An African Folktale",
        words: b4_l17_words,
        stories: [b4_l17_story_1, b4_l17_story_2, b4_l17_story_3, b4_l17_story_4, b4_l17_story_5, b4_l17_story_6]
    },
    {
        id: "b4-l18",
        dayNumber: 18,
        subtitle: "Lesson 18: The Great Wall of China",
        words: b4_l18_words,
        stories: [b4_l18_story_1, b4_l18_story_2, b4_l18_story_3, b4_l18_story_4, b4_l18_story_5, b4_l18_story_6]
    },
    {
        id: "b4-l19",
        dayNumber: 19,
        subtitle: "Lesson 19: Martha Graham: Artist and Teacher",
        words: b4_l19_words,
        stories: [b4_l19_story_1, b4_l19_story_2, b4_l19_story_3, b4_l19_story_4, b4_l19_story_5, b4_l19_story_6]
    },
    {
        id: "b4-l20",
        dayNumber: 20,
        subtitle: "Lesson 20: The Story of William Tell",
        words: b4_l20_words,
        stories: [b4_l20_story_1, b4_l20_story_2, b4_l20_story_3, b4_l20_story_4, b4_l20_story_5, b4_l20_story_6]
    }
];
