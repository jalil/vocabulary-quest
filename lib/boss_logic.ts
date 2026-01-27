
import { VocabularyWord } from "./types";
import { book_6_lessons } from "./book_6_data";

export interface BossCheckpoint {
    isCheckpoint: boolean;
    bookTitle?: string;
    theme?: string;
    badgeName?: string;
    words: VocabularyWord[];
}

const BADGE_MAP: Record<number, string> = {
    4: "The Innovator",
    8: "The Ecologist",
    12: "The Activist",
    16: "The Historian",
    20: "The Global Citizen"
};

const BOOK_MAP: Record<number, string> = {
    4: "The Boy Who Harnessed the Wind",
    8: "The Omnivore’s Dilemma",
    12: "I Am Malala",
    16: "How We Got to Now",
    20: "Refugee"
};

export function getBossQuestionsForBook(userLevel: number): BossCheckpoint {
    // 1. Check if checkpoint (every 4 levels)
    if (userLevel % 4 !== 0 || userLevel > 20) {
        return { isCheckpoint: false, words: [] };
    }

    const bookTitle = BOOK_MAP[userLevel];
    const badgeName = BADGE_MAP[userLevel];

    if (!bookTitle) return { isCheckpoint: false, words: [] };

    // 2. Filter lessons associated with this book
    // E.g. Level 4 -> Lessons 1-4. Level 8 -> Lessons 5-8.
    const startLesson = userLevel - 3;
    const endLesson = userLevel;

    // Get target lessons from Book 6 data
    const targetLessons = book_6_lessons.filter(l =>
        l.dayNumber >= startLesson && l.dayNumber <= endLesson
    );

    // 3. Extract words
    let pool: VocabularyWord[] = [];

    targetLessons.forEach(lesson => {
        // Map Mita words to compatible VocabularyWord format for the game
        const gameWords: VocabularyWord[] = lesson.words.map((w, i) => ({
            id: `b6-l${lesson.dayNumber}-w${i}`,
            word: w.word,
            definition: w.definition,
            pronunciation: w.pronunciation,
            exampleSentence: w.exampleSentence,
            imageEmoji: "📖",
            category: w.category || "Grade 6"
        }));
        pool = [...pool, ...gameWords];
    });

    // 4. Prioritize Domain Specific (Optional logic: sort so they appear first? Or just mix them?)
    // Game typically shuffles, but we can ensure they are in the pool.
    // Let's return them all, the game will slice/shuffle.
    const theme = targetLessons[0]?.theme || "General Knowledge";

    return {
        isCheckpoint: true,
        bookTitle,
        theme,
        badgeName,
        words: pool
    };
}
