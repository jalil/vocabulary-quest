export interface VocabularyWord {
    id: string;
    word: string;
    pronunciation?: string;
    definition: string;
    exampleSentence: string;
    imageEmoji: string; // Using emoji for MVP, can be replace with URL
    category?: string; // e.g. "SAT", "Science"
}

export type StoryType = 'fiction' | 'non-fiction';

export interface Story {
    id: string;
    title: string;
    type: StoryType;
    content: string; // Markdown or plain text
    wordsIncluded: string[]; // IDs of words
    relatedWordIds?: string[];
}

// Spaced Repetition System Data
export interface SRSItem {
    wordId: string;
    nextReviewDate: number; // Timestamp (Date.now())
    interval: number; // Days until next review
    repetition: number; // Consecutive correct answers
    easeFactor: number; // Multiplier for interval (default 2.5)
}

// Data specific to a single user's progress
export interface UserData {
    xp: number;
    level: number;
    streak: number;
    completedDays: string[];
    unlockedBadges: string[];
    customWords: VocabularyWord[];
    deletedCategories?: string[];
    lastLoginDate?: string;
    weakWords: string[];
    srsProgress: Record<string, SRSItem>; // Map wordId -> SRS data
}

export interface UserProgress extends UserData {
    username?: string;
    archivedUsers: Record<string, UserData>; // Persistence for other users
}

export interface DayLesson {
    id: string; // e.g., "day-1"
    dayNumber: number;
    words: VocabularyWord[];
    stories: Story[];
}
