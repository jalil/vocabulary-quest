import { DayLesson, VocabularyWord, Story } from "./types";

// Helper to create word objects
const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 5",
    exampleSentence,
    imageEmoji
});

// Book 5 Lessons - Words to be populated from PDF

// Lesson 1: Friends for Life
const b5_l1_words: VocabularyWord[] = [
    createWord("b5-l1-w1", "Accustom", "To make familiar.", "Every fall the students accustom themselves to the new schedule.", "🔄"),
    createWord("b5-l1-w2", "Alert", "Watchful; wide-awake.", "The shortstop was not alert and missed the catch.", "🚨"),
    createWord("b5-l1-w3", "Assign", "To select for a position or for what has to be done.", "For this year's basketball team, the coach assigned me to play as a forward.", "📋"),
    createWord("b5-l1-w4", "Budge", "To move or shift.", "The old metal trunk was so heavy we could not budge it.", "🪨"),
    createWord("b5-l1-w5", "Burly", "Big and strongly built.", "Most football players are quite burly.", "💪"),
    createWord("b5-l1-w6", "Companion", "One who spends time with or does things with another.", "My grandmother was always an interesting companion when we went to the city.", "👥"),
    createWord("b5-l1-w7", "Compatible", "Getting along well together.", "Julie and I didn't mind sharing a room because we were so compatible.", "🧩"),
    createWord("b5-l1-w8", "Concept", "A general idea or thought about something.", "For our project, we started with the concept of helping our community.", "💡"),
    createWord("b5-l1-w9", "Distract", "To draw one's thoughts or attention away from the subject at hand.", "The police sirens distracted me, so I didn't hear what you said.", "📢"),
    createWord("b5-l1-w10", "Jostle", "To push or shove.", "I dropped my phone when someone in the crowd jostled me.", "💥"),
    createWord("b5-l1-w11", "Obedient", "Doing what one is asked or told.", "When giving orders, a ship's captain expects all of the crew to be obedient.", "🫡"),
    createWord("b5-l1-w12", "Obstacle", "Something that prevents one from moving forward.", "The obstacle holding up traffic was a tree blown over by last night's storm.", "🚧"),
    createWord("b5-l1-w13", "Patient", "Willing to wait without complaining.", "The audience was very patient even though the show started thirty minutes late.", "🧘"),
    createWord("b5-l1-w14", "Pedestrian", "A person who is walking; someone traveling on foot.", "Pedestrians should use the crosswalk to avoid accidents.", "🚶"),
    createWord("b5-l1-w15", "Retire", "To stop working because one has reached a certain age.", "My grandfather worked for the railroad until he decided to retire.", "🌴")
];

// Lesson 2: When Money Grows on Trees
const b5_l2_words: VocabularyWord[] = [];

// Lesson 3: The Last Dinosaurs
const b5_l3_words: VocabularyWord[] = [];

// Lesson 4: A Difficult Journey
const b5_l4_words: VocabularyWord[] = [];

// Lesson 5: On Top of the World
const b5_l5_words: VocabularyWord[] = [];

// Lesson 6: The Pen Is Mightier Than the Sword
const b5_l6_words: VocabularyWord[] = [];

// Lesson 7: Birds in Tuxedos
const b5_l7_words: VocabularyWord[] = [];

// Lesson 8: The First Thanksgiving
const b5_l8_words: VocabularyWord[] = [];

// Lesson 9: The Sky's the Limit
const b5_l9_words: VocabularyWord[] = [];

// Lesson 10: With Moses to the Promised Land
const b5_l10_words: VocabularyWord[] = [];

// Lesson 11: Off You Go Into the Wild
const b5_l11_words: VocabularyWord[] = [];

// Lesson 12: A Child of the Revolution
const b5_l12_words: VocabularyWord[] = [];

// Lesson 13: Bewate the Silent Crocodile
const b5_l13_words: VocabularyWord[] = [];

// Lesson 14: The Wizard of Menlo Park
const b5_l14_words: VocabularyWord[] = [];

// Lesson 15: When the Earth Quakes
const b5_l15_words: VocabularyWord[] = [];

// Lesson 16: The Last Queen of the Islands
const b5_l16_words: VocabularyWord[] = [];

// Lesson 17: A Harvest of Sand
const b5_l17_words: VocabularyWord[] = [];

// Lesson 18: A Mouse Is Born
const b5_l18_words: VocabularyWord[] = [];

// Lesson 19: The Lost City
const b5_l19_words: VocabularyWord[] = [];

// Lesson 20: A Tale of Two Donkeys
const b5_l20_words: VocabularyWord[] = [];

// Lesson 1 Story - Exercise
const b5_l1_story_1: Story = {
    id: "b5-l1-s1",
    title: "Exercise: Just the Right Word",
    type: "non-fiction",
    content: `Select the word that replaces the bold phrase.`,
    wordsIncluded: [
        "b5-l1-w11", "b5-l1-w15", "b5-l1-w4", "b5-l1-w7", "b5-l1-w2",
        "b5-l1-w12", "b5-l1-w9", "b5-l1-w3", "b5-l1-w14", "b5-l1-w13"
    ],
    questions: [
        {
            id: "q1",
            type: "multiple-choice",
            question: "1. They expected their children to be **willing to do as they were told**.",
            options: ["obedient", "alert", "budge", "concept"],
            correctAnswer: "obedient"
        },
        {
            id: "q2",
            type: "multiple-choice",
            question: "2. My grandparents plan to travel to other countries when they **give up working at their jobs**.",
            options: ["retire", "assign", "jostle", "patient"],
            correctAnswer: "retire"
        },
        {
            id: "q3",
            type: "multiple-choice",
            question: "3. They refused to **make the slightest move** even though we pleaded with them to step aside.",
            options: ["budge", "burly", "distract", "pedestrian"],
            correctAnswer: "budge"
        },
        {
            id: "q4",
            type: "multiple-choice",
            question: "4. If you and your roommate are not **able to get along**, you should split up.",
            options: ["compatible", "companion", "obstacle", "accustom"],
            correctAnswer: "compatible"
        },
        {
            id: "q5",
            type: "multiple-choice",
            question: "5. Elido sounded the **signal that warned of danger** when he saw smoke.",
            options: ["alert", "obedient", "retire", "concept"],
            correctAnswer: "alert"
        },
        {
            id: "q6",
            type: "multiple-choice",
            question: "6. We made our way around the **objects that were blocking our way** and continued on our journey.",
            options: ["objects", "obstacle", "companion", "jostle"], // Fixed options to include 'obstacle' as correct
            correctAnswer: "obstacle"
        },
        {
            id: "q7",
            type: "multiple-choice",
            question: "7. A buzzing mosquito can be a **thing that draws your attention away** when you are trying to read.",
            options: ["distract", "alert", "compatible", "patient"], // Note: Sentence implies noun ('thing'), 'distraction' fits better but aiming for 'distract' verb root as per word list often
            // Actually word list has 'Distract' (verb). Sentence says "can be a thing". 
            // The prompt says "Replace... with a single word (or form of the word)".
            // I will use "distraction" as an option or just "distract" if we are strict. 
            // The user's text had "distract". Let's use "distract" but maybe "distraction" is better English.
            // Sticking to word list form "distract" for simplicity unless requested.
            correctAnswer: "distract"
        },
        {
            id: "q8",
            type: "multiple-choice",
            question: "8. The camp director **gave out jobs and sent** us to the kitchen crew.",
            options: ["assigned", "budged", "pedestrian", "retire"], // "assigned" (past tense)
            correctAnswer: "assigned"
        },
        {
            id: "q9",
            type: "multiple-choice",
            question: "9. You see very few **people out walking** this early in the morning.",
            options: ["pedestrians", "burly", "obstacle", "obedient"], // Plural
            correctAnswer: "pedestrians"
        },
        {
            id: "q10",
            type: "multiple-choice",
            question: "10. My sister is more **willing to accept delays without complaining** than I am.",
            options: ["patient", "accustom", "distract", "compatible"],
            correctAnswer: "patient"
        }
    ]
};

const b5_l1_story_2: Story = {
    id: "b5-l1-s2",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Select the correct answer or answers for each question below. There may be **more than one** correct answer!",
    questions: [
        {
            id: "am-q1",
            question: "1. Which of the following could be an **obstacle**?",
            options: ["lack of money", "a fallen tree", "poor eyesight", "a pleasant voice"],
            correctAnswer: "",
            correctAnswers: ["lack of money", "a fallen tree", "poor eyesight"],
            type: "multiple-choice"
        },
        {
            id: "am-q2",
            question: "2. In which of the following places would a **pedestrian** be?",
            options: ["on the sidewalk", "inside a car", "in a favorite armchair", "on a plane"],
            correctAnswer: "",
            correctAnswers: ["on the sidewalk"],
            type: "multiple-choice"
        },
        {
            id: "am-q3",
            question: "3. Which of the following could **distract** someone?",
            options: ["loud noises", "whispering", "dreams", "the radio"],
            correctAnswer: "",
            correctAnswers: ["loud noises", "whispering", "the radio"],
            type: "multiple-choice"
        },
        {
            id: "am-q4",
            question: "4. Which of the following usually learn **obedience**?",
            options: ["dogs", "soldiers", "raccoons", "children"],
            correctAnswer: "",
            correctAnswers: ["dogs", "soldiers", "children"],
            type: "multiple-choice"
        },
        {
            id: "am-q5",
            question: "5. Which of the following must be **alert**?",
            options: ["a watchman", "a babysitter", "a driver", "a pilot"],
            correctAnswer: "",
            correctAnswers: ["a watchman", "a babysitter", "a driver", "a pilot"],
            type: "multiple-choice"
        },
        {
            id: "am-q6",
            question: "6. Which of the following would you expect to be **compatible**?",
            options: ["friends", "partners", "enemies", "teammates"],
            correctAnswer: "",
            correctAnswers: ["friends", "partners", "teammates"],
            type: "multiple-choice"
        },
        {
            id: "am-q7",
            question: "7. Which of the following could be **assigned**?",
            options: ["jobs", "rooms", "seats", "birthdays"],
            correctAnswer: "",
            correctAnswers: ["jobs", "rooms", "seats"],
            type: "multiple-choice"
        },
        {
            id: "am-q8",
            question: "8. Which of the following might make a good **companion**?",
            options: ["a dog", "a canoe", "a friend", "a meal"],
            correctAnswer: "",
            correctAnswers: ["a dog", "a friend"],
            type: "multiple-choice"
        }
    ],
    wordsIncluded: [
        "b5-l1-w12", // Obstacle
        "b5-l1-w14", // Pedestrian
        "b5-l1-w9",  // Distract
        "b5-l1-w11", // Obedient
        "b5-l1-w2",  // Alert
        "b5-l1-w7",  // Compatible
        "b5-l1-w3",  // Assign
        "b5-l1-w6"   // Companion
    ]
};

const b5_l1_story_3: Story = {
    id: "b5-l1-s3",
    title: "Exercise: Word Study",
    type: "non-fiction",
    content: "Synonyms and Antonyms. Select the **two** correct words for each group.",
    questions: [
        // Synonyms
        {
            id: "ws-q1",
            type: "multiple-choice",
            question: "1. Select the two **synonyms** (same meaning).",
            options: ["budge", "warn", "shift", "accustom"],
            correctAnswers: ["budge", "shift"],
            correctAnswer: ""
        },
        {
            id: "ws-q2",
            type: "multiple-choice",
            question: "2. Select the two **synonyms** (same meaning).",
            options: ["distract", "return", "retire", "quit"],
            correctAnswers: ["retire", "quit"],
            correctAnswer: ""
        },
        {
            id: "ws-q3",
            type: "multiple-choice",
            question: "3. Select the two **synonyms** (same meaning).",
            options: ["concept", "barrier", "venture", "obstacle"],
            correctAnswers: ["barrier", "obstacle"],
            correctAnswer: ""
        },
        {
            id: "ws-q4",
            type: "multiple-choice",
            question: "4. Select the two **synonyms** (same meaning).",
            options: ["warning", "light", "sound", "alert"],
            correctAnswers: ["warning", "alert"],
            correctAnswer: ""
        },
        {
            id: "ws-q5",
            type: "multiple-choice",
            question: "5. Select the two **synonyms** (same meaning).",
            options: ["jostle", "shove", "assign", "choose"],
            correctAnswers: ["jostle", "shove"],
            correctAnswer: ""
        },
        // Antonyms
        {
            id: "ws-q6",
            type: "multiple-choice",
            question: "6. Select the two **antonyms** (opposite meaning).",
            options: ["alert", "drowsy", "compatible", "patient"],
            correctAnswers: ["alert", "drowsy"],
            correctAnswer: ""
        },
        {
            id: "ws-q7",
            type: "multiple-choice",
            question: "7. Select the two **antonyms** (opposite meaning).",
            options: ["familiar", "slight", "alert", "burly"],
            correctAnswers: ["slight", "burly"],
            correctAnswer: ""
        },
        {
            id: "ws-q8",
            type: "multiple-choice",
            question: "8. Select the two **antonyms** (opposite meaning).",
            options: ["precious", "dreary", "unfamiliar", "accustomed"],
            correctAnswers: ["unfamiliar", "accustomed"],
            correctAnswer: ""
        },
        {
            id: "ws-q9",
            type: "multiple-choice",
            question: "9. Select the two **antonyms** (opposite meaning).",
            options: ["unsteady", "obedient", "defiant", "watchful"],
            correctAnswers: ["obedient", "defiant"],
            correctAnswer: ""
        },
        {
            id: "ws-q10",
            type: "multiple-choice",
            question: "10. Select the two **antonyms** (opposite meaning).",
            options: ["assign", "retire", "jostle", "arise"],
            correctAnswers: ["retire", "arise"],
            correctAnswer: ""
        }
    ],
    wordsIncluded: []
};

export const BOOK_5_LESSONS: DayLesson[] = [
    { id: "book5-lesson-1", dayNumber: 1, subtitle: "Friends for Life", words: b5_l1_words, stories: [b5_l1_story_1, b5_l1_story_2, b5_l1_story_3] },
    { id: "book5-lesson-2", dayNumber: 2, subtitle: "When Money Grows on Trees", words: b5_l2_words, stories: [] },
    { id: "book5-lesson-3", dayNumber: 3, subtitle: "The Last Dinosaurs", words: b5_l3_words, stories: [] },
    { id: "book5-lesson-4", dayNumber: 4, subtitle: "A Difficult Journey", words: b5_l4_words, stories: [] },
    { id: "book5-lesson-5", dayNumber: 5, subtitle: "On Top of the World", words: b5_l5_words, stories: [] },
    { id: "book5-lesson-6", dayNumber: 6, subtitle: "The Pen Is Mightier Than the Sword", words: b5_l6_words, stories: [] },
    { id: "book5-lesson-7", dayNumber: 7, subtitle: "Birds in Tuxedos", words: b5_l7_words, stories: [] },
    { id: "book5-lesson-8", dayNumber: 8, subtitle: "The First Thanksgiving", words: b5_l8_words, stories: [] },
    { id: "book5-lesson-9", dayNumber: 9, subtitle: "The Sky's the Limit", words: b5_l9_words, stories: [] },
    { id: "book5-lesson-10", dayNumber: 10, subtitle: "With Moses to the Promised Land", words: b5_l10_words, stories: [] },
    { id: "book5-lesson-11", dayNumber: 11, subtitle: "Off You Go Into the Wild", words: b5_l11_words, stories: [] },
    { id: "book5-lesson-12", dayNumber: 12, subtitle: "A Child of the Revolution", words: b5_l12_words, stories: [] },
    { id: "book5-lesson-13", dayNumber: 13, subtitle: "Beware the Silent Crocodile", words: b5_l13_words, stories: [] },
    { id: "book5-lesson-14", dayNumber: 14, subtitle: "The Wizard of Menlo Park", words: b5_l14_words, stories: [] },
    { id: "book5-lesson-15", dayNumber: 15, subtitle: "When the Earth Quakes", words: b5_l15_words, stories: [] },
    { id: "book5-lesson-16", dayNumber: 16, subtitle: "The Last Queen of the Islands", words: b5_l16_words, stories: [] },
    { id: "book5-lesson-17", dayNumber: 17, subtitle: "A Harvest of Sand", words: b5_l17_words, stories: [] },
    { id: "book5-lesson-18", dayNumber: 18, subtitle: "A Mouse Is Born", words: b5_l18_words, stories: [] },
    { id: "book5-lesson-19", dayNumber: 19, subtitle: "The Lost City", words: b5_l19_words, stories: [] },
    { id: "book5-lesson-20", dayNumber: 20, subtitle: "A Tale of Two Donkeys", words: b5_l20_words, stories: [] }
    // Note: Once words are added, filter empty ones if preferred, but for now we keep them to show structure
];
