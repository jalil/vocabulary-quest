import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, VocabularyWord, UserData } from './types';

interface UserState extends UserProgress {
    addXp: (amount: number) => void;
    incrementStreak: () => void;
    completeDay: (date: string) => void;
    resetProgress: () => void;
    addCustomWord: (word: VocabularyWord) => void;
    deleteCategory: (category: string) => void;
    setUsername: (name: string) => void;
    logout: () => void;
    markWordAsWeak: (wordId: string) => void;
    markWordAsMastered: (wordId: string) => void;
    addBadge: (badge: string) => void;
    processReview: (wordId: string, isCorrect: boolean) => void;
    recordExerciseCompletion: (log: ExerciseLog) => void;
}

const DEFAULT_USER_DATA: UserData = {
    xp: 0,
    level: 1,
    streak: 0,
    completedDays: [],
    unlockedBadges: [],
    customWords: [],
    deletedCategories: [],
    lastLoginDate: undefined,
    weakWords: [],
    srsProgress: {},
    exerciseHistory: []
};

const INITIAL_STATE: UserProgress = {
    ...DEFAULT_USER_DATA,
    username: '',
    archivedUsers: {}
};

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            ...INITIAL_STATE,
            addXp: (amount) => set((state) => {
                const newXp = state.xp + amount;
                const newLevel = Math.floor(newXp / 100) + 1;
                return { xp: newXp, level: newLevel };
            }),
            incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
            completeDay: (date) => set((state) => {
                if (state.completedDays.includes(date)) return state;
                return { completedDays: [...state.completedDays, date] };
            }),
            resetProgress: () => set((state) => ({
                ...DEFAULT_USER_DATA,
                username: state.username,
                archivedUsers: state.archivedUsers
            })),
            addCustomWord: (word) => set((state) => ({ customWords: [...state.customWords, word] })),
            deleteCategory: (category) => set((state) => ({
                deletedCategories: [...(state.deletedCategories || []), category]
            })),
            markWordAsWeak: (wordId) => set((state) => {
                if (state.weakWords.includes(wordId)) return state;
                return { weakWords: [...state.weakWords, wordId] };
            }),
            markWordAsMastered: (wordId) => set((state) => ({
                weakWords: state.weakWords.filter(id => id !== wordId)
            })),
            addBadge: (badge) => set((state) => {
                if (state.unlockedBadges.includes(badge)) return state;
                return { unlockedBadges: [...state.unlockedBadges, badge] };
            }),
            recordExerciseCompletion: (log) => set((state) => ({
                exerciseHistory: [...(state.exerciseHistory || []), log]
            })),

            // SRS Logic (Simplified SM-2)
            processReview: (wordId, isCorrect) => set((state) => {
                const current = state.srsProgress[wordId] || {
                    wordId,
                    nextReviewDate: 0,
                    interval: 0,
                    repetition: 0,
                    easeFactor: 2.5
                };

                let newInterval = 0;
                let newRepetition = 0;
                let newEaseFactor = current.easeFactor;

                if (isCorrect) {
                    if (current.repetition === 0) {
                        newInterval = 1;
                    } else if (current.repetition === 1) {
                        newInterval = 6;
                    } else {
                        newInterval = Math.round(current.interval * current.easeFactor);
                    }
                    newRepetition = current.repetition + 1;
                    // Slight bump to EF for consistency
                    newEaseFactor = Math.min(newEaseFactor + 0.1, 5.0);
                } else {
                    newInterval = 1;
                    newRepetition = 0;
                    newEaseFactor = Math.max(1.3, newEaseFactor - 0.2);
                }

                const nextDate = Date.now() + (newInterval * 24 * 60 * 60 * 1000);

                return {
                    srsProgress: {
                        ...state.srsProgress,
                        [wordId]: {
                            wordId,
                            nextReviewDate: nextDate,
                            interval: newInterval,
                            repetition: newRepetition,
                            easeFactor: newEaseFactor
                        }
                    },
                    // Also auto-remove from weak words if correct, add if wrong
                    weakWords: isCorrect
                        ? state.weakWords.filter(id => id !== wordId)
                        : (state.weakWords.includes(wordId) ? state.weakWords : [...state.weakWords, wordId])
                };
            }),

            // Critical Profile Switching Logic
            setUsername: (name) => set((state) => {
                // 1. Archive current user if exists
                let newArchivedUsers = { ...state.archivedUsers };
                if (state.username) {
                    newArchivedUsers[state.username] = {
                        xp: state.xp,
                        level: state.level,
                        streak: state.streak,
                        completedDays: state.completedDays,
                        unlockedBadges: state.unlockedBadges,
                        customWords: state.customWords,
                        deletedCategories: state.deletedCategories,
                        lastLoginDate: state.lastLoginDate,
                        weakWords: state.weakWords,
                        srsProgress: state.srsProgress,
                        exerciseHistory: state.exerciseHistory || []
                    };
                }

                // 2. Load target user data OR default
                const targetUserData = newArchivedUsers[name] || DEFAULT_USER_DATA;

                return {
                    ...targetUserData,
                    // Ensure deep merge or default for new fields if loading old profile
                    srsProgress: targetUserData.srsProgress || {},
                    exerciseHistory: targetUserData.exerciseHistory || [],
                    username: name,
                    lastLoginDate: new Date().toISOString(),
                    archivedUsers: newArchivedUsers
                };
            }),

            logout: () => set((state) => {
                // 1. Archive current user
                let newArchivedUsers = { ...state.archivedUsers };
                if (state.username) {
                    newArchivedUsers[state.username] = {
                        xp: state.xp,
                        level: state.level,
                        streak: state.streak,
                        completedDays: state.completedDays,
                        unlockedBadges: state.unlockedBadges,
                        customWords: state.customWords,
                        deletedCategories: state.deletedCategories,
                        lastLoginDate: state.lastLoginDate,
                        weakWords: state.weakWords,
                        srsProgress: state.srsProgress,
                        exerciseHistory: state.exerciseHistory || []
                    };
                }

                // 2. Reset to empty state (keeping archives)
                return {
                    ...DEFAULT_USER_DATA,
                    username: '',
                    archivedUsers: newArchivedUsers
                };
            })
        }),
        {
            name: 'vocab-quest-storage',
        }
    )
);
