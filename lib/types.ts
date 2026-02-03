export interface VocabularyWord {
    id: string;
    word: string;
    pronunciation?: string;
    definition: string;
    exampleSentence: string;
    imageEmoji: string; // Using emoji for MVP, can be replace with URL
    category?: string; // e.g. "SAT", "Science"
    synonyms?: string[];
    antonyms?: string[];
}

export type StoryType = 'fiction' | 'non-fiction' | 'review-riddle' | 'story' | 'exercise';

export interface Question {
    id: string;
    question: string;
    options?: string[];
    correctAnswer?: string;
    correctAnswers?: string[]; // For multi-select questions
    sampleAnswer?: string; // For open-ended questions
    type: 'fill-in-the-blank' | 'multiple-choice' | 'open-ended';
}


export interface CrosswordClue {
    number: number;
    direction: 'across' | 'down';
    text: string;
    answer: string;
    row: number; // 0-indexed start row
    col: number; // 0-indexed start col
}

export interface CrosswordData {
    id: string;
    width: number;
    height: number;
    clues: CrosswordClue[];
}

export interface Story {
    id: string;
    title: string;
    type: StoryType;
    content: string; // Markdown or plain text
    questions?: Question[]; // Interactive questions
    wordsIncluded: string[]; // IDs of words
    relatedWordIds?: string[];
    crossword?: CrosswordData; // Optional crossword data
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
export interface ExerciseLog {
    id: string; // Unique ID for the log entry
    lessonId: string; // e.g., "b8-l1"
    lessonTitle: string;
    timestamp: number; // Date.now()
    durationSeconds: number;
    score: number; // percentage or raw count
    totalQuestions: number;
    mistakes: string[]; // IDs of questions answered wrong
    readingSpeedWpm?: number; // Words Per Minute
}

export interface UserData {
    xp: number;
    level: number;
    streak: number;
    completedDays: string[];
    unlockedBadges: string[];
    customWords: VocabularyWord[];
    deletedCategories?: string[];
    hiddenExercises?: string[];
    lastLoginDate?: string;
    weakWords: string[];
    srsProgress: Record<string, SRSItem>; // Map wordId -> SRS data
    exerciseHistory: ExerciseLog[];
}

export interface UserProgress extends UserData {
    username?: string;
    archivedUsers: Record<string, UserData>; // Persistence for other users
}

// Books Specific Types
export type BookTheme =
    | 'Innovation & Resilience'
    | 'Environment & Ethics'
    | 'Human Rights & Education'
    | 'Tech History & Connections'
    | 'Global Conflict & Empathy';

export interface EssayEvidence {
    fact: string;
    essayTopics: string[];
}

export interface WordStudyQuestion {
    type: 'synonym' | 'antonym' | 'analogy';
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface DayLesson {
    id: string; // e.g., "day-1"
    dayNumber: number;
    subtitle?: string; // e.g. "Friends for Life"
    words: VocabularyWord[];
    stories: Story[];
    // Books Optional Fields
    bookTitle?: string;
    theme?: BookTheme;
    essayEvidence?: EssayEvidence;
    storySummary?: string;
    wordStudy?: WordStudyQuestion[];
}
