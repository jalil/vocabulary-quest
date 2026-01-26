
import { book_6_lessons } from './lib/book_6_data';

console.log("Auditing Book 6 Lessons...");

book_6_lessons.forEach(lesson => {
    const stories = lesson.stories;
    const titles = stories.map(s => s.title);

    const hasPassage = titles.some(t => t.toLowerCase().includes('reading passage'));
    const hasSectionA = titles.some(t => /^\d+A(\s|$)/i.test(t));
    const hasSectionB = titles.some(t => /^\d+B(\s|$)/i.test(t));

    // Check for "Finding Meanings" and "Just the Right Word" specifically
    const hasFindingMeanings = titles.some(t => t.toLowerCase().includes('finding meanings'));
    const hasJustRightWord = titles.some(t => t.toLowerCase().includes('just the right word'));

    if (!hasPassage || !hasSectionA || !hasSectionB) {
        console.log(`\nLesson ${lesson.dayNumber} (ID: ${lesson.id}) is MISSING components:`);
        if (!hasPassage) console.log("  - Missing Reading Passage");
        if (!hasSectionA) console.log("  - Missing Section A");
        if (!hasSectionB) console.log("  - Missing Section B");

        console.log("  Current Titles:", titles);
    } else {
        // console.log(`Lesson ${lesson.dayNumber} OK.`);
    }

    if (hasSectionA && !hasFindingMeanings && lesson.dayNumber === 20) {
        console.log(`\nLesson ${lesson.dayNumber} has Section A but title mismatch:`);
        console.log("  Titles:", titles);
    }
});
