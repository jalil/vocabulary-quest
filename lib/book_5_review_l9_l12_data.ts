import { CrosswordData } from "@/lib/types";

export const review_l9_l12_crossword: CrosswordData = {
    id: "review-l9-l12",
    width: 15,
    height: 15,
    clues: [
        // ACROSS
        { number: 1, direction: "across", text: "Not often", answer: "SELDOM", row: 0, col: 0 },
        { number: 4, direction: "across", text: "A tied ball game goes into ____ innings", answer: "EXTRA", row: 0, col: 7 },
        { number: 7, direction: "across", text: "To chase after", answer: "PURSUE", row: 3, col: 9 }, // Adjusted col to 9 to fit width? 9+6=15. Fits (0-14).
        { number: 9, direction: "across", text: "To walk in a relaxed, unhurried manner", answer: "SAUNTER", row: 6, col: 6 },
        { number: 10, direction: "across", text: "To copy closely", answer: "MIMIC", row: 2, col: 7 },
        { number: 11, direction: "across", text: "To prepare; to make ready for a shock", answer: "BRACE", row: 5, col: 10 },
        { number: 14, direction: "across", text: "Opposite of 'under'", answer: "OVER", row: 8, col: 0 }, // Guess
        { number: 15, direction: "across", text: "To name or address as an honor", answer: "DEDICATE", row: 10, col: 2 }, // Guess
        { number: 17, direction: "across", text: "To stop for a while before going on", answer: "SUSPEND", row: 13, col: 0 }, // Guess
        { number: 19, direction: "across", text: "The state of being enslaved", answer: "BONDAGE", row: 11, col: 5 }, // Intersects Contact/Dictate guess
        { number: 21, direction: "across", text: "To give to a fund or cause", answer: "DONATE", row: 13, col: 8 }, // Guess
        { number: 22, direction: "across", text: "A building where aircraft are kept", answer: "HANGAR", row: 12, col: 9 }, // Guess
        { number: 23, direction: "across", text: "It covers the floor", answer: "RUG", row: 14, col: 0 }, // Guess
        { number: 24, direction: "across", text: "One who watches an activity", answer: "SPECTATOR", row: 14, col: 6 }, // Guess

        // DOWN
        { number: 2, direction: "down", text: "To keep away from", answer: "EVADE", row: 0, col: 1 },
        { number: 3, direction: "down", text: "Tightly packed; crowded close together", answer: "DENSE", row: 0, col: 3 },
        { number: 5, direction: "down", text: "A violent storm", answer: "TEMPEST", row: 0, col: 9 },
        { number: 6, direction: "down", text: "To go to a higher level", answer: "ASCEND", row: 0, col: 11 },
        { number: 7, direction: "down", text: "To go on after stopping for a while", answer: "PROCEED", row: 8, col: 8 }, // Guess
        { number: 8, direction: "down", text: "To fly high in the sky", answer: "SOAR", row: 3, col: 12 },
        { number: 12, direction: "down", text: "Opposite of 'subtract'", answer: "ADD", row: 5, col: 13 }, // Guess
        { number: 13, direction: "down", text: "To keep within certain limits", answer: "RESTRICT", row: 5, col: 5 }, // Guess
        { number: 14, direction: "down", text: "Past the time set for arrival", answer: "OVERDUE", row: 8, col: 0 }, // Matches 14A
        { number: 15, direction: "down", text: "To give orders", answer: "DICTATE", row: 7, col: 4 }, // Guess
        { number: 16, direction: "down", text: "To get in touch with", answer: "CONTACT", row: 8, col: 6 }, // Guess
        { number: 18, direction: "down", text: "Planet known for its rings", answer: "SATURN", row: 9, col: 2 }, // Guess
        { number: 20, direction: "down", text: "Opposite of 'sad'", answer: "GLAD", row: 11, col: 12 }, // Guess
    ]
};
