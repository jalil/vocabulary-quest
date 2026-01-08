
import { generateAcademicPassages } from './lib/generator';
import { KAAT_WORDS } from './lib/kaat_data';

const KAAT_LESSON_2 = KAAT_WORDS.slice(10, 20);

console.log("Testing KAAT Lesson 2 Generator...");
console.log("Words in lesson:", KAAT_LESSON_2.map(w => w.word));

try {
    const stories = generateAcademicPassages(KAAT_LESSON_2);
    console.log("Success! Generated " + stories.length + " stories.");
    if (stories.length > 0) {
        console.log("Story 1 Title: " + stories[0].title);
    } else {
        console.log("Warning: No stories generated.");
    }
} catch (e) {
    console.error("Generator Failed!");
    console.error(e);
}
