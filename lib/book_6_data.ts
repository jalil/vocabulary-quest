import { DayLesson, Story, VocabularyWord } from "./types";

import * as L1 from "./book_6_lesson_1_data";
import * as L2 from "./book_6_lesson_2_data";
import * as L3 from "./book_6_lesson_3_data";
import * as L4 from "./book_6_lesson_4_data";
import * as L5 from "./book_6_lesson_5_data";
import * as L6 from "./book_6_lesson_6_data";
import * as L7 from "./book_6_lesson_7_data";
import * as L8 from "./book_6_lesson_8_data";
import * as L9 from "./book_6_lesson_9_data";
import * as L10 from "./book_6_lesson_10_data";
import * as L11 from "./book_6_lesson_11_data";
import * as L12 from "./book_6_lesson_12_data";
import * as L13 from "./book_6_lesson_13_data";
import * as L14 from "./book_6_lesson_14_data";
import * as L15 from "./book_6_lesson_15_data";
import * as L16 from "./book_6_lesson_16_data";
import * as L17 from "./book_6_lesson_17_data";
import * as L18 from "./book_6_lesson_18_data";
import * as L19 from "./book_6_lesson_19_data";
import * as L20 from "./book_6_lesson_20_data";

const lessonModules = [
    L1, L2, L3, L4, L5, L6, L7, L8, L9, L10,
    L11, L12, L13, L14, L15, L16, L17, L18, L19, L20
];

export const book_6_lessons: DayLesson[] = lessonModules.map((mod, index) => {
    const lessonNum = index + 1;

    // Extract words - finding the export that is an array and ends with 'words'
    const wordsEntry = Object.entries(mod).find(([key, val]) => key.endsWith('_words') && Array.isArray(val));
    const words = wordsEntry ? (wordsEntry[1] as VocabularyWord[]) : [];

    // Extract stories
    // Stories are exported individually as Story objects. We assume anything confirming to shape is a story.
    // Or we check export names containing 'story'.
    const stories: Story[] = Object.entries(mod)
        .filter(([key, val]) => key.includes('story') && typeof val === 'object' && (val as any).type)
        .map(([_, val]) => val as Story);

    return {
        id: `day-6-${lessonNum}`,
        dayNumber: lessonNum,
        words: words.map(w => ({
            ...w,
            category: "Grade 6" // Ensure category is Grade 6 for proper grouping in Sidebar
        })),
        stories: stories
    };
});
