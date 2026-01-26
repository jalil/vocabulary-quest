
import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 5",
    exampleSentence,
    imageEmoji
});

export const b5_l9_words: VocabularyWord[] = [
    createWord("b5-l9-w1", "Absurd", "So unreasonable as to be laughable; foolish or silly.", "You'd look absurd in a suit and tie at the beach.", "🤪"),
    createWord("b5-l9-w2", "Accomplish", "To do something by making an effort; to complete successfully.", "I know I will accomplish these errands by noon.", "🏆"),
    createWord("b5-l9-w3", "Ascend", "To rise, usually in a steady way.", "The rocket ascended to a height of five hundred feet before falling to Earth.", "🚀"),
    createWord("b5-l9-w4", "Dense", "Tightly packed; crowded close together. Also: Thick; hard to see through. Stupid, thickheaded.", "The tired explorers hacked their way through dense vines and bushes.", "🌳"),
    createWord("b5-l9-w5", "Experiment", "A test to prove or discover something. To carry out experiments.", "The experiment shows that oxygen and hydrogen combine to form water.", "🧪"),
    createWord("b5-l9-w6", "Flimsy", "Easily damaged or broken; not strongly made. Not believable.", "The cart was too flimsy to carry such a heavy load.", "🏚️"),
    createWord("b5-l9-w7", "Heroic", "Very brave; showing great courage. Also: Showing great determination.", "The teenager made a heroic rescue of the child who couldn't swim.", "🦸"),
    createWord("b5-l9-w8", "Lumber", "Wood that has been sawed into boards. To move in a clumsy or heavy way.", "Have you ordered the lumber for the deck you are building?", "🪵"),
    createWord("b5-l9-w9", "Mimic", "To copy or imitate closely. To make fun of by imitating.", "The parrot fascinated us because it could mimic human speech so well.", "🦜"),
    createWord("b5-l9-w10", "Significant", "Important; full of meaning.", "July 4, 1776, is a significant date in American history.", "📅"),
    createWord("b5-l9-w11", "Soar", "To fly high in the sky. To rise suddenly and rapidly.", "We watched the eagles soar until they were just specks in the sky.", "🦅"),
    createWord("b5-l9-w12", "Spectator", "A person who watches an activity; an onlooker.", "The spectators jostled each other as they rushed onto the field.", "👀"),
    createWord("b5-l9-w13", "Suspend", "To hang while attached to something above. To stop for a while. To bar from working.", "The hammock was suspended from the porch ceiling.", "⛓️"),
    createWord("b5-l9-w14", "Terminate", "To bring or to come to an end.\nWord Family: terminated, terminating, termination.\nSynonyms: conclude, end, finish.\nAntonyms: begin, open, start.", "Heavy rain terminated the tennis match after only ten minutes of play.", "🛑"),
    createWord("b5-l9-w15", "Unwieldy", "Hard to handle or control because of large size or heaviness.", "The sofa was so unwieldy that getting it up the stairs was a real challenge.", "📦")
];

export const b5_l9_story_main: Story = {
    id: "b5-l9-story-main",
    title: "The Sky's the Limit",
    type: "fiction",
    wordsIncluded: b5_l9_words.map(w => w.id),
    content: `
# The Sky's the Limit

The crowd of **spectators** watched in silence as the hot air balloon began to fill. It was a **significant** moment for the town of Riverdale—the first flight of the *Eagle*. For years, inventors had **experimented** with different designs, but most were too **flimsy** to be safe or too **unwieldy** to control.

Dr. Aris, the lead engineer, had made a **heroic** effort to finish the project on time. "We must **accomplish** this today," she told her team. "The weather is perfect, and we cannot **suspend** the launch again."

The basket, made of sturdy **lumber**, was securely attached. As the burners roared, the balloon began to **ascend**. It rose slowly at first, then started to **soar** above the **dense** forest surrounding the launch site.

"Look at it go!" shouted a boy in the crowd, trying to **mimic** the sound of the burner.

It would be **absurd** to say that nothing could go wrong, but Dr. Aris was an optimist. She knew they had checked every rope and valve. The flight was not just a stunt; it was an experiment to test new navigation tools.

As the balloon disappeared into the clouds, the town mayor prepared to **terminate** the event with a speech. "Today," he said, "we proved that with hard work and courage, the sky really is the limit."
    `,
    questions: [
        {
            id: "l9-main-q1",
            type: "multiple-choice",
            question: "Why was the balloon launch considered significant?",
            options: ["It was a holiday", "It was the first flight of the Eagle", "The mayor was speaking", "It was raining"],
            correctAnswer: "It was the first flight of the Eagle"
        },
        {
            id: "l9-main-q2",
            type: "multiple-choice",
            question: "What material was the basket made of?",
            options: ["Steel", "Plastic", "Lumber", "Canvas"],
            correctAnswer: "Lumber"
        }
    ]
};

// Exercise 1: Finding Meanings
export const b5_l9_story_1: Story = {
    id: "b5-l9-s1",
    title: "Exercise: Finding Meanings",
    type: "non-fiction",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 9.",
    wordsIncluded: b5_l9_words.map(w => w.id),
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) If you suspend something,\n(b) you make a copy of it.\n(c) you bring it to an end.\n(d) If you terminate something,",
            options: [
                "a and b",
                "a and c",
                "d and c"
            ],
            correctAnswer: "d and c"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) is easily broken.\n(b) is tightly packed.\n(c) Something that is dense\n(d) Something that is unwieldy",
            options: [
                "c and b",
                "c and a",
                "d and a"
            ],
            correctAnswer: "c and b"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) To accomplish something\n(b) is to complete it successfully.\n(c) is to raise it to a higher level.\n(d) To mimic something",
            options: [
                "a and b",
                "d and b",
                "a and c"
            ],
            correctAnswer: "a and b"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) that ends quickly.\n(b) A heroic effort is one\n(c) that shows great determination.\n(d) An absurd effort is one",
            options: [
                "b and c",
                "d and c",
                "b and a"
            ],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) To ascend is to\n(b) To experiment is to\n(c) test or try out an idea.\n(d) increase in size or amount.",
            options: [
                "b and c",
                "a and c",
                "b and d"
            ],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) A flimsy container is one that\n(b) An unwieldy container is one that\n(c) is not strongly made.\n(d) is meant to hold liquids.",
            options: [
                "a and c",
                "b and c",
                "a and d"
            ],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) go to a higher level.\n(b) To ascend is to\n(c) fall into a drowsy state.\n(d) To lumber is to",
            options: [
                "b and a",
                "d and a",
                "b and c"
            ],
            correctAnswer: "b and a"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) someone who plays.\n(b) someone who watches.\n(c) A spectator is\n(d) A mimic is",
            options: [
                "c and b",
                "c and a",
                "d and b"
            ],
            correctAnswer: "c and b"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) move in a clumsy way.\n(b) To lumber is to\n(c) To soar is to\n(d) feel pain or discomfort.",
            options: [
                "b and a",
                "c and a",
                "b and d"
            ],
            correctAnswer: "b and a"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) that is meaningful.\n(b) A significant statement is one\n(c) An absurd statement is one\n(d) that goes on longer than necessary.",
            options: [
                "b and a",
                "c and a",
                "b and d"
            ],
            correctAnswer: "b and a"
        }
    ]
};

// Exercise 2: Just the Right Word
export const b5_l9_story_2: Story = {
    id: "b5-l9-s2",
    title: "Exercise: Just the Right Word",
    type: "fiction",
    content: "Replace the bold phrase with a single word from the list.",
    wordsIncluded: b5_l9_words.map(w => w.id),
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. The movie is about the **very brave** women and men who fight forest fires.",
            options: ["heroic", "flimsy", "dense", "significant"],
            correctAnswer: "heroic"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. The bicyclists could not see through the **very thick** fog.",
            options: ["dense", "unwieldy", "absurd", "brittle"],
            correctAnswer: "dense"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The comedian usually gets lots of laughs when he **imitates the sound of** the voices of famous movie stars.",
            options: ["mimics", "soars", "suspends", "terminates"],
            correctAnswer: "mimics"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. Francine's story about seeing a live dinosaur is **too silly to be believed**.",
            options: ["absurd", "significant", "heroic", "dense"],
            correctAnswer: "absurd"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. The *Mayflower* passengers' spirits **suddenly rose** when they got their first sight of land.",
            options: ["soared", "lumbered", "suspended", "terminated"],
            correctAnswer: "soared"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. Leave the box where it is if you think it is too **large to be picked up and carried easily**.",
            options: ["unwieldy", "flimsy", "significant", "dense"],
            correctAnswer: "unwieldy"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. Coach Louis told us that any player who fails a course will be **not allowed to take part in any games** for the rest of the season.",
            options: ["suspended", "terminated", "accomplished", "ascended"],
            correctAnswer: "suspended"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. My family's visit to the Vietnam Veterans Memorial was especially **full of meaning** because my uncle's name appears there.",
            options: ["significant", "heroic", "flimsy", "absurd"],
            correctAnswer: "significant"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. The class's **carefully controlled attempt to discover if it was possible** to create a tiny volcano was very successful.",
            options: ["experiment", "accomplishment", "significance", "mimic"],
            correctAnswer: "experiment"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. The **wood that has been sawed into boards** is stacked outside so that it will dry.",
            options: ["lumber", "spectator", "prey", "hue"],
            correctAnswer: "lumber"
        }
    ]
};

// Exercise 3: Applying Meanings
export const b5_l9_story_3: Story = {
    id: "b5-l9-s3",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Select the correct answer(s).",
    wordsIncluded: b5_l9_words.map(w => w.id),
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **dense**?",
            options: ["a person", "a crowd", "a hole", "a forest"],
            correctAnswers: ["a person", "a crowd", "a forest"], // "Dense" can mean stupid (person), crowded (crowd), thick (forest).
            correctAnswer: ""
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following can **soar**?",
            options: ["hopes", "cows", "prices", "birds"],
            correctAnswers: ["hopes", "prices", "birds"],
            correctAnswer: ""
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following would be an **accomplishment**?",
            options: ["going to the kitchen", "winning a gold medal", "cheating on a test", "eating a pizza"],
            correctAnswers: ["winning a gold medal"],
            correctAnswer: ""
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following can be **suspended**?",
            options: ["a bird feeder", "a mistake", "work", "a student"],
            correctAnswers: ["a bird feeder", "work", "a student"],
            correctAnswer: ""
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following would be **unwieldy**?",
            options: ["a piano", "a flute", "a 72-inch television set", "a sleep sofa"],
            correctAnswers: ["a piano", "a 72-inch television set", "a sleep sofa"],
            correctAnswer: ""
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following could have **significance**?",
            options: ["a marriage", "a death", "a graduation", "a birth"],
            correctAnswers: ["a marriage", "a death", "a graduation", "a birth"], // All are significant life events.
            correctAnswer: ""
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following might you **experiment** with?",
            options: ["hair styles", "a chemistry set", "clothing", "food"],
            correctAnswers: ["hair styles", "a chemistry set", "clothing", "food"], // All valid.
            correctAnswer: ""
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **flimsy**?",
            options: ["an aroma", "a task", "a shelter", "an excuse"],
            correctAnswers: ["a shelter", "an excuse"],
            correctAnswer: ""
        }
    ]
};

// Exercise 4: Word Study (Homophones)
export const b5_l9_story_4: Story = {
    id: "b5-l9-s4",
    title: "Exercise: Word Study (Homophones)",
    type: "non-fiction",
    content: "Words that sound the same but have different meanings/spellings are called homophones.\nPairs: prey/pray, course/coarse, route/root, hew/hue, soar/sore.\n\nChoose the correct word for each sentence.",
    wordsIncluded: b5_l9_words.map(w => w.id),
    questions: [
        {
            id: "ws-q1",
            type: "multiple-choice",
            question: "1. We tried to get to the **route** of the problem.",
            options: ["Correct", "Incorrect (should be 'root')"],
            correctAnswer: "Incorrect (should be 'root')"
        },
        {
            id: "ws-q2",
            type: "multiple-choice",
            question: "2. The wolf seized its **prey** in its jaws.",
            options: ["Correct", "Incorrect (should be 'pray')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q3",
            type: "multiple-choice",
            question: "3. I will **prey** for the safe return of those still missing.",
            options: ["Correct", "Incorrect (should be 'pray')"],
            correctAnswer: "Incorrect (should be 'pray')"
        },
        {
            id: "ws-q4",
            type: "multiple-choice",
            question: "4. The coastal **root** is the quickest way into town.",
            options: ["Correct", "Incorrect (should be 'route')"],
            correctAnswer: "Incorrect (should be 'route')"
        },
        {
            id: "ws-q5",
            type: "multiple-choice",
            question: "5. Mauricio's manners are rather **course**.",
            options: ["Correct", "Incorrect (should be 'coarse')"],
            correctAnswer: "Incorrect (should be 'coarse')"
        },
        {
            id: "ws-q6",
            type: "multiple-choice",
            question: "6. We watched the rocket **soar** until it was out of sight.",
            options: ["Correct", "Incorrect (should be 'sore')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q7",
            type: "multiple-choice",
            question: "7. We **pray** that we will get there on time.",
            options: ["Correct", "Incorrect (should be 'prey')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q8",
            type: "multiple-choice",
            question: "8. A **soar** knee kept me from racing.",
            options: ["Correct", "Incorrect (should be 'sore')"],
            correctAnswer: "Incorrect (should be 'sore')"
        },
        {
            id: "ws-q9",
            type: "multiple-choice",
            question: "9. We left the harbor and set a **coarse** for Nantucket.",
            options: ["Correct", "Incorrect (should be 'course')"],
            correctAnswer: "Incorrect (should be 'course')"
        },
        {
            id: "ws-q10",
            type: "multiple-choice",
            question: "10. The **route** to the mountain summit is well marked.",
            options: ["Correct", "Incorrect (should be 'root')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q11",
            type: "multiple-choice",
            question: "11. Sharp tools were needed to **hew** the boat from a single log.",
            options: ["Correct", "Incorrect (should be 'hue')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q12",
            type: "multiple-choice",
            question: "12. My job was to **hue** the branches from the tree.",
            options: ["Correct", "Incorrect (should be 'hew')"],
            correctAnswer: "Incorrect (should be 'hew')"
        },
        {
            id: "ws-q13",
            type: "multiple-choice",
            question: "13. The cost of living is expected to **sore** in the coming year.",
            options: ["Correct", "Incorrect (should be 'soar')"],
            correctAnswer: "Incorrect (should be 'soar')"
        },
        {
            id: "ws-q14",
            type: "multiple-choice",
            question: "14. **Coarse** salt is made up of larger grains.",
            options: ["Correct", "Incorrect (should be 'course')"],
            correctAnswer: "Correct"
        },
        {
            id: "ws-q15",
            type: "multiple-choice",
            question: "15. The daffodils were a deep yellow **hue**.",
            options: ["Correct", "Incorrect (should be 'hew')"],
            correctAnswer: "Correct"
        }
    ]
};

// Exercise 5: Fun & Fascinating FACTS
export const b5_l9_story_5: Story = {
    id: "b5-l9-s5",
    title: "Exercise: Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
# Fun & Fascinating FACTS

* The noun formed from **ascend** is *ascent*, the act of rising or going higher. (Our *ascent* to the summit took four hours.) The antonyms of these words are *descend* and *descent*. Don't confuse *ascent* with its homophone *assent*. *Assent* means "agreement." (We cannot give our *assent* to the project until these changes are made.)

* **Soar** and *sore* are also homophones. A *sore* is a painful spot on the body, often with the skin broken. *Sore* is also an adjective and means "painful."

* A *pendant* is something that hangs from a chain around a person's neck. This word comes from the Latin *pendere*, which means "to hang." **Suspend** comes from the same Latin root.

* **Spectator** is formed from the Latin *spectare*, which means "to see" or "to look at." Two other words formed from this root are *inspect* and *spectacles*. When you *inspect* something, you look at it closely; *spectacles*, another word for *eyeglasses*, help a person see better.

* The Latin *terminus* means "end." It provides the root for the verb **terminate**. Several other words are formed from this root. A *terminus* is the end of a bus or train line. *Terminal* means "of or relating to an end." A *terminal illness* is one that ends in death. Something that is *interminable* seems to go on without an end. (After an *interminable* wait, we finally saw the doctor.)
    `,
    wordsIncluded: [
        "b5-l9-w3", // ascend
        "b5-l9-w11", // soar
        "b5-l9-w13", // suspend
        "b5-l9-w12", // spectator
        "b5-l9-w14"  // terminate
    ],
    questions: []
};


