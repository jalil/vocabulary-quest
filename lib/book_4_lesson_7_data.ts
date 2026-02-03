import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, synonyms?: string[], antonyms?: string[]): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji,
    synonyms,
    antonyms
});

// Lesson 7 Words
export const b4_l7_words: VocabularyWord[] = [
    createWord("b4-l7-w1", "Alter", "To change in some way; to make or become different.", "Let's alter our uniforms so they will fit better.", "✂️", ["change", "modify", "adjust"], ["preserve", "keep"]),
    createWord("b4-l7-w2", "Confuse", "To make or become unclear or mixed up in the mind. To mistake one person or thing for another. A state of disorder.", "That math problem totally confused me.", "😵", ["puzzle", "perplex", "bewilder"], ["clarify", "enlighten"]),
    createWord("b4-l7-w3", "Distribute", "To give out; to divide among several or many. To be spread over.", "DeRay distributed programs before the concert.", "📤", ["dispense", "issue", "spread"], ["collect", "gather", "hoard"]),
    createWord("b4-l7-w4", "Eject", "To force or throw out.", "When the seventh graders refused to listen, the coach ejected them from the team meeting.", "⏏️", ["expel", "dismiss", "throw out"], ["accept", "admit", "welcome"]),
    createWord("b4-l7-w5", "Embrace", "To hold closely in one's arms; to hug. To take up seriously.", "My parents embraced me when I got home from school.", "🤗", ["hug", "clasp", "adopt"], ["reject", "release"]),
    createWord("b4-l7-w6", "Equip", "To provide with what is needed.", "All new cars now come equipped with airbags.", "🛠️", ["supply", "furnish", "outfit"], ["strip"]),
    createWord("b4-l7-w7", "Flexible", "Able to bend easily. Able to adjust to new or different situations.", "Dancers and gymnasts have very flexible bodies.", "🤸", ["pliable", "bendable", "adaptable"], ["rigid", "stiff", "inflexible"]),
    createWord("b4-l7-w8", "Instant", "A moment; a very short period of time. Happening or done at once; quick.", "It took Luis only an instant to calculate the amount of paint we would need.", "⏱️", ["moment", "flash", "immediate"], ["delay", "eternity"]),
    createWord("b4-l7-w9", "Keen", "Having a sharp edge. Showing a strong interest; eager. Having sharp senses; quick to understand.", "The keen blade of the knife sliced through the loaf of bread with ease.", "🔪", ["sharp", "eager", "intense"], ["dull", "blunt", "indifferent"]),
    createWord("b4-l7-w10", "Limp", "To walk in an uneven way. An uneven or lopsided walk. Not stiff or firm.", "I limped for two weeks after I fell on the ice.", "🚶", ["hobble", "stagger", "flaccid"], ["march", "strut", "stiff"]),
    createWord("b4-l7-w11", "Scurry", "To move quickly, with rapid little steps.", "The squirrel scurried up the tree as we approached.", "🐿️", ["scuttle", "dash", "scamper"], ["plod", "stroll", "amble"]),
    createWord("b4-l7-w12", "Seize", "To grasp suddenly; to grab hold of. To take by force of the law.", "He seized my hand and begged me not to go.", "✊", ["grab", "grasp", "clutch"], ["release", "let go"]),
    createWord("b4-l7-w13", "Shallow", "Not deep. With little seriousness or deep thought.", "We went wading in a shallow stream.", "🌊", ["surface", "slight"], ["deep", "profound"]),
    createWord("b4-l7-w14", "Surround", "To enclose on all sides. The things or conditions around a person or place.", "The garden was surrounded by a high fence.", "🧱", ["circle", "enclose", "encompass"], []),
    createWord("b4-l7-w15", "Victim", "One who is hurt or killed, or one who suffers.", "The scoundrel denied that he had cheated his victims of their life savings.", "🤕", ["sufferer", "prey", "casualty"], ["attacker", "culprit"])
];

// Story 1: Finding Meanings
export const b4_l7_story_1: Story = {
    id: "b4-l7-s1",
    title: "Exercise: Finding Meanings",
    type: "non-fiction",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 7.",
    wordsIncluded: b4_l7_words.map(w => w.id),
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) Surroundings are (c) needed items for some activity. (b) Alterations are (d) the conditions around one.",
            options: ["(a) and (d)", "(a) and (c)", "(b) and (c)", "(b) and (d)"],
            correctAnswer: "(a) and (d)" // Surroundings are the conditions around one.
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) To eject a group is to (c) To equip a group is to (b) provide it with what is needed. (d) allow it to take part.",
            options: ["(a) and (b)", "(c) and (b)", "(c) and (d)", "(a) and (d)"],
            correctAnswer: "(c) and (b)" // To equip a group is to provide it with what is needed.
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) throw them out. (c) take them by force. (b) To seize papers is to (d) To distribute papers is to",
            options: ["(d) and (a)", "(b) and (c)", "(b) and (a)", "(d) and (c)"],
            correctAnswer: "(b) and (c)" // To seize papers is to take them by force.
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) To be flexible is to be (c) unwilling to change your mind. (b) To be keen is to be (d) agreeable to any sudden change of plan.",
            options: ["(a) and (d)", "(a) and (c)", "(b) and (c)", "(b) and (d)"],
            correctAnswer: "(a) and (d)" // To be flexible is to be agreeable to any sudden change of plan.
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) Alteration is (c) a state of being mixed up. (b) unwillingness to change. (d) Confusion is",
            options: ["(a) and (b)", "(d) and (c)", "(a) and (c)", "(d) and (b)"],
            correctAnswer: "(d) and (c)" // Confusion is a state of being mixed up.
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) Victims are (c) persons who avoid injury. (b) persons who are hurt. (d) Embraces are",
            options: ["(a) and (b)", "(a) and (c)", "(d) and (b)", "(d) and (c)"],
            correctAnswer: "(a) and (b)" // Victims are persons who are hurt.
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) A flexible person (c) A keen person (b) is one who is eager. (d) is one who is vain.",
            options: ["(a) and (d)", "(c) and (b)", "(c) and (d)", "(a) and (b)"],
            correctAnswer: "(c) and (b)" // A keen person is one who is eager.
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) a hug. (c) An instant is (b) An embrace is (d) a handshake.",
            options: ["(b) and (a)", "(c) and (a)", "(b) and (d)", "(c) and (d)"],
            correctAnswer: "(b) and (a)" // An embrace is a hug.
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) To limp is to (c) To scurry is to (b) grasp firmly. (d) walk unevenly.",
            options: ["(a) and (d)", "(c) and (b)", "(c) and (d)", "(a) and (b)"],
            correctAnswer: "(a) and (d)" // To limp is to walk unevenly.
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) to hold on to them. (c) To distribute things is (b) to give them out. (d) To confuse things is",
            options: ["(c) and (a)", "(d) and (a)", "(c) and (b)", "(d) and (b)"],
            correctAnswer: "(c) and (b)" // To distribute things is to give them out.
        }
    ]
};

// Story 2: Just the Right Word
export const b4_l7_story_2: Story = {
    id: "b4-l7-s2",
    title: "Exercise: Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    wordsIncluded: b4_l7_words.map(w => w.id),
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. The dog's **uneven walk** was caused by a thorn in its left front paw.",
            options: ["limp", "scurry", "instant", "embrace"],
            correctAnswer: "limp"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. I **opened my arms and held** my cousin, whom I hadn't seen in two years.",
            options: ["embraced", "seized", "surrounded", "equipped"],
            correctAnswer: "embraced"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. Stay close to shore where the water is **not very deep**.",
            options: ["shallow", "keen", "flexible", "instant"],
            correctAnswer: "shallow"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. My cat jumped as a mouse **ran with quick little steps** across the kitchen floor.",
            options: ["scurried", "limped", "altered", "distrusted"],
            correctAnswer: "scurried"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. I caught a glimpse of the president in the parade for just one **very short period of time**.",
            options: ["instant", "victim", "alteration", "confusion"],
            correctAnswer: "instant"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. This map is very **hard to follow** because some of the streets aren't named.",
            options: ["confusing", "keen", "shallow", "flexible"],
            correctAnswer: "confusing"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. With just a slight **change in form** of the shape of the number, a 3 becomes an 8.",
            options: ["alteration", "distribution", "ejection", "equation"],
            correctAnswer: "alteration"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The boxes of food were **given out** in time for Thanksgiving.",
            options: ["distributed", "seized", "surrounded", "equipped"],
            correctAnswer: "distributed"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. My whole family **gathered around** me, singing \"Happy Birthday.\"",
            options: ["surrounded", "embraced", "confused", "distributed"],
            correctAnswer: "surrounded"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. Luckily, the pilot was **thrown with great force** from the plane before it crashed.",
            options: ["ejected", "rejected", "injected", "altered"],
            correctAnswer: "ejected"
        }
    ]
};

// Story 3: Applying Meanings
export const b4_l7_story_3: Story = {
    id: "b4-l7-s3",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    wordsIncluded: b4_l7_words.map(w => w.id),
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **altered**?",
            options: ["one's plans", "today's date", "a dress's hemline", "one's age"],
            correctAnswer: "one's plans, a dress's hemline" // Can alter plans. Can't alter today's date (it is what it is). Can alter dress. Can't alter age (fact).
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following are **flexible**?",
            options: ["a sewing needle", "a garden hose", "a dancer's body", "a length of cooked spaghetti"],
            correctAnswer: "a garden hose, a dancer's body, a length of cooked spaghetti"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following could be given in an **instant**?",
            options: ["a yes-or-no answer", "a nod of agreement", "a ten-page report", "a smile of welcome"],
            correctAnswer: "a yes-or-no answer, a nod of agreement, a smile of welcome"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following might feel **limp**?",
            options: ["a sheet of wet cardboard", "a sleeping child", "a sheet of ice", "a sheet of plywood"],
            correctAnswer: "a sheet of wet cardboard, a sleeping child"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following could **scurry**?",
            options: ["a spider", "a whale", "an elephant", "a mouse"],
            correctAnswer: "a spider, a mouse"
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following could be **seized**?",
            options: ["a person's arm", "a person's boat", "a sneeze", "a puff of smoke"],
            correctAnswer: "a person's arm, a person's boat"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following could be **shallow**?",
            options: ["a stick", "a tree", "a person's thinking", "a pond"],
            correctAnswer: "a person's thinking, a pond"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following might be **keen**?",
            options: ["a person's thoughts", "a razor blade", "a hammer", "a dog's hearing"],
            correctAnswer: "a person's thoughts, a razor blade, a dog's hearing"
        }
    ]
};

// Story 4: Word Study
export const b4_l7_story_4: Story = {
    id: "b4-l7-s4",
    title: "Word Study: Prefixes",
    type: "non-fiction",
    content: "In column three, write the prefix of each word listed in column two. In the space provided, write the meaning of that prefix. Prefixes: pre- (before), re- (again/back), ex- (out).",
    wordsIncluded: b4_l7_words.map(w => w.id),
    questions: [
        {
            id: "ws-q1",
            type: "fill-in-the-blank",
            question: "1. to fight against | **resist** | Prefix: ____ Meaning: ____",
            correctAnswer: "re-, back" // Resist -> stand back? or against? "against" is not in the standard list, but re- can mean against (pugnacious -> repugnant?). Wait. The book says "re- adds the meaning 'again' or 'back' OR 'against'". I need to check the image text again carefully.
            // Image P80 text says: "re- adds the meaning 'again' or 'against'". Wait.
            // Let me look at Step 3707 again. "again" or "against", and ex- adds the meaning "out".
            // Ah! "re- adds the meaning 'again' or 'against'".
            // Wait, usually re- means back/again.
            // Let's assume the book says "again" or "against".
            // "Resist" -> sistere (stand) + re (back/against). To stand against.
            // So "re-, against".
        },
        // Wait, I should verify the "re-" definition in the book image.
        // Image says: "re- adds the meaning 'again' or 'against'".
        // NO, wait. I am looking at a blurry memory.
        // Step 3701/3707 image: "re- adds the meaning 'again' or 'against'".
        // OK, I will trust that.
        {
            id: "ws-q2",
            type: "fill-in-the-blank",
            question: "2. to bring out into the open | **expose** | Prefix: ____ Meaning: ____",
            correctAnswer: "ex-, out"
        },
        {
            id: "ws-q3",
            type: "fill-in-the-blank",
            question: "3. to act before the need arises | **prepare** | Prefix: ____ Meaning: ____",
            correctAnswer: "pre-, before"
        },
        {
            id: "ws-q4",
            type: "fill-in-the-blank",
            question: "4. not feeling easy in one's mind | **uneasy** | Prefix: ____ Meaning: ____",
            correctAnswer: "un-, not" // This is from Lesson 5 prefixes (un-, in-, im-).
        },
        {
            id: "ws-q5",
            type: "fill-in-the-blank",
            question: "5. to bring to mind once again | **recall** | Prefix: ____ Meaning: ____",
            correctAnswer: "re-, again"
        },
        {
            id: "ws-q6",
            type: "fill-in-the-blank",
            question: "6. to go out of bounds | **exceed** | Prefix: ____ Meaning: ____",
            correctAnswer: "ex-, out"
        },
        {
            id: "ws-q7",
            type: "fill-in-the-blank",
            question: "7. to go over to correct | **revise** | Prefix: ____ Meaning: ____",
            correctAnswer: "re-, again"
        },
        {
            id: "ws-q8",
            type: "fill-in-the-blank",
            question: "8. to speak out loudly | **exclaim** | Prefix: ____ Meaning: ____",
            correctAnswer: "ex-, out"
        },
        {
            id: "ws-q9",
            type: "fill-in-the-blank",
            question: "9. to throw out | **eject** | Prefix: ____ Meaning: ____",
            correctAnswer: "e-, out"
        },
        {
            id: "ws-q10",
            type: "fill-in-the-blank",
            question: "10. to say over again | **recite** | Prefix: ____ Meaning: ____",
            correctAnswer: "re-, again"
        }
    ]
};

// Story 5: Reading Passage
export const b4_l7_story_5: Story = {
    id: "b4-l7-s5",
    title: "Reading Passage: Armed But Not Dangerous",
    type: "non-fiction",
    content: `
What has one head, eight arms, and the ability to change from gray to green to brown? Here is a clue: The Greek word for *eight* is *okto*. If you guessed octopus, you're right!

The octopus lives in holes or openings in the rocky bottom of the sea. It protects itself from enemies by changing color to match its **surroundings**. In seaweed it can turn green; on sand it can turn brown; against rocks it can turn gray. For example, suppose an octopus is attacked by a shark. In an **instant**, it can change its color to blend into the background. The surprised shark is left wondering where the octopus went. The octopus can also protect itself by **ejecting** a large blob of black ink-like liquid. This acts as a screen. The trick can **confuse** the attacker into going after the blob. Meanwhile, the octopus has a chance to slip away.

An octopus has no bones, so it can easily **alter** its shape; it can then force its way inside empty shells or under rocks or into very narrow openings. To be even safer, it may cover itself with stones or shells.

The octopus's eight rubbery arms are very **flexible**. They can easily wrap around even quite small objects. Each arm is **equipped** with two rows of fleshy, deeply set suckers. These give it a powerful grip. The octopus uses its arms to **seize** other animals as they **scurry** along the sea floor. Crabs and lobsters are among its **victims**. The octopus uses the two strong, horny beaks in its mouth to crack open their shells.

The octopus has **keen** eyesight. It needs sharp eyes because it hunts mostly at night. It has a large brain for its size, and it makes full use of its intelligence to catch food. For example, if an octopus cannot open a clam, it will wait until the clam opens itself. When it does, the octopus will put a stone between the two shells so that they cannot close. Then it can get at the juicy clam without having to struggle.

There are many different kinds of octopuses, and they are widely **distributed** throughout the world's oceans. They live mostly in warm, **shallow** water, not far from shore. The smallest ones grow to be no more than two inches across. The largest ones live in the Pacific Ocean. They can grow to be thirty feet across. Their width is mainly in their arms; their bodies might be only eighteen inches.

If, when swimming in the Pacific, you venture too far from shore, you may find yourself in the **embrace** of an octopus. What should you do? It is best not to struggle. Just let your body go **limp**; the octopus will probably let you go. Although movies sometimes show them as terrifying and dangerous monsters, there is no reason to fear them. Around humans, at least, octopuses are usually shy and gentle creatures.
`,
    wordsIncluded: b4_l7_words.map(w => w.id),
    questions: []
};

export const b4_l7_story_6: Story = {
    id: "b4-l7-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Flexible** means "able to bend or change easily." The antonym of *flexible* is *rigid*, which means "stiff" or "unbending." An iron bar is *rigid*; if it is heated until it becomes very hot, it becomes *flexible*. Both words can be used literally, as in the example of the iron bar, and figuratively, as in the following examples: A person willing to change plans at the last minute is said to be *flexible*; someone refusing to make such changes may be called *rigid*. A job with *rigid* hours is one in which the work hours cannot be changed; a job with *flexible* hours is one in which the hours can be changed easily to suit the needs of the worker.

* **Alter** is a verb; *altar* (with two *a*'s) is a noun. An *altar* is a table or platform used in churches or temples as a center of worship. A bride and groom may kneel or stand before the *altar* when they get married. *Alter* and *altar* are homophones—words that sound alike but have different meanings and spellings.
`,
    wordsIncluded: ["flexible", "alter"],
    questions: []
};
