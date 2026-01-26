import { Story, VocabularyWord } from "@/lib/types";

// Helper function defined locally
function createWord(id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, relatedWords: string[] = []): VocabularyWord {
    return {
        id,
        word,
        definition,
        exampleSentence,
        imageEmoji,
        category: "Grade 5",
    };
}

export const b5_l15_words: VocabularyWord[] = [
    createWord("b5-l15-w1", "Disaster", "Something that causes great damage or harm. (Disastrous: Causing much damage or harm.)", "Hurricane Katrina was the worst disaster to hit New Orleans in many years.", "🌪️", ["disastrous"]),
    createWord("b5-l15-w2", "Flee", "To run away from danger or from something frightening. (Past tense: Fled)", "I quickly decided to flee from the park when I heard a noise behind me.", "🏃", ["fled"]),
    createWord("b5-l15-w3", "Fracture", "A crack or break, as in metal or bone. To crack or break.", "The plane was grounded because of a small fracture in the metal tail unit. Selena fractured her arm for the second time this summer.", "🦴"),
    createWord("b5-l15-w4", "Immense", "1. Great in size or extent. 2. Great in degree.", "The Pacific Ocean is an immense body of water. To the immense relief of his parents, the last child was soon found.", "🐘"),
    createWord("b5-l15-w5", "Intense", "1. Very strong; very great. 2. Showing great depth of feeling. (Intensity: Great strength or force.)", "The intense heat from the fire melted the plastic dishes. The scene in the play was so intense that the audience wept.", "🔥", ["intensity"]),
    createWord("b5-l15-w6", "Investigate", "To look into closely; to study in great detail.", "The fire marshal will investigate the cause of the fire in the library.", "🕵️"),
    createWord("b5-l15-w7", "Lurch", "To move forward or to one side suddenly and unexpectedly. A jerky or swaying movement.", "The car lurched to the left to avoid a bird on the road. The bus started with a lurch.", "🚌"),
    createWord("b5-l15-w8", "Major", "1. Great in size, number, or importance. 2. A military officer just above a captain in rank. 3. The main subject a student is studying. To study as one's most important subject.", "Seas and oceans make up the major part of the earth's surface. My cousin Karen majored in chemistry.", "⭐"),
    createWord("b5-l15-w9", "Minor", "1. Small; unimportant. 2. A person who is not yet an adult; a child.", "Steffi's knee injury was minor, so she finished the game. Minors may attend this movie if an adult goes with them.", "👶"),
    createWord("b5-l15-w10", "Petrify", "1. To make rigid with terror; to terrify. 2. To change into a stone-like substance.", "The director said that he felt his horror movies had failed if they did not petrify audiences. In Arizona's Painted Desert, we saw wood that had petrified.", "🗿"),
    createWord("b5-l15-w11", "Predict", "To say what will happen before it takes place. (Prediction: Something that is predicted.)", "The highway safety office predicts heavy traffic on the roads this weekend.", "🔮", ["prediction"]),
    createWord("b5-l15-w12", "Prone", "1. Likely to have or do. 2. Lying face downward.", "All of us are more prone to colds in the winter than in the summer. I had to lie in a prone position because my back was sunburned.", "🛌"),
    createWord("b5-l15-w13", "Sparse", "1. Thinly grown or spread. 2. Not crowded.", "The grass on the ball field was sparse, so we reseeded it. The town meeting had a sparse turnout this year.", "🌵"),
    createWord("b5-l15-w14", "Topple", "1. To fall or push over. 2. To overthrow.", "The cat toppled the pile of books. The student demonstrations helped topple the government.", "🧱"),
    createWord("b5-l15-w15", "Urban", "Having to do with cities.", "Traffic in urban areas is a serious problem during rush hour.", "🏙️")
];

export const b5_l15_story_main: Story = {
    id: "b5-l15-story-main",
    title: "When the Earth Quakes",
    type: "story",
    content: `Those who have lived through an earthquake describe it as one of the worst experiences of their lives. When one strikes, often without warning, people are usually too **petrified** to move. The ground, which a few moments before seemed so solid, suddenly **lurches** beneath their feet. Pictures are shaken from the walls. If the earthquake is severe enough, the walls themselves may **topple**. Water and gas pipes burst, fires flare up, and lives may be lost.

The **intensity** of an earthquake is determined by a measure called the Richter scale. An earthquake measuring 4.0 is considered **minor**, causing little, if any, harm. One measuring 8.0 is more than one thousand times as powerful; it can do **immense** damage. Another measure of the destructive power of an earthquake is the number of lives lost. One of the greatest natural **disasters** in history was the earthquake that struck China in 1556. That earthquake killed almost a million people.

Earthquakes do the greatest damage in **urban** areas where people are heavily concentrated. Most of the deaths and injuries occur when people are inside collapsing buildings. The San Francisco earthquake of 1906 measured 8.3 and killed 450 people. In 1964, Alaska, which is more **sparsely** settled, also experienced an earthquake measuring 8.3; there were fewer than 200 deaths there.

Scientists who **investigate** the causes of earthquakes are called seismologists. They have learned a great deal about these frightening occurrences. We know that the earth's crust, or surface, is made of rock five to twenty miles thick. That crust is **fractured** in many places. The separate pieces, or plates, fit more or less together along the break lines, which are known as "faults." Heat from the earth's interior puts pressure on these plates, causing them to move. Sometimes they rub against each other edge to edge; at other times one plate may ride up over another. These kinds of movements cause earthquakes.

Areas that lie along faults in the earth's crust are especially **prone** to earthquakes. But quakes can occur anywhere in the world. San Francisco lies on the San Andreas Fault, where the Pacific and North American plates meet. It has had two **major** earthquakes in the last century. The Pacific coast regions of Central and South America, where the Nazca and South American plates meet, have also suffered many earthquakes and will continue to do so.

Unfortunately, we still do not know enough about earthquakes to be able to **predict** accurately when one will occur. We do, however, make sure that today's buildings and bridges are strong enough to stand up to them. That is one reason why the 1989 San Francisco earthquake, which measured 6.9 on the Richter scale, took so few lives. But earthquakes are still to be feared. If you should have the misfortune to get caught in one, your first thought might be to **flee** to the nearest open space. Experts tell us, however, that if you are in a modern building, it is probably safer to stay inside. Look for shelter under a sturdy table or in a doorway.`,
    wordsIncluded: [
        "major", "disaster", "immense", "urban", "topple", "fracture", "intense", "flee",
        "lurch", "sparse", "predict", "investigate", "petrify", "minor", "prone"
    ]
};

export const b5_l15_story_1: Story = {
    id: "b5-l15-story-1",
    title: "Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 15.",
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) is one that is small and scattered. (c) is one that is very cold.\n(b) A sparse crowd (d) An immense crowd",
            options: ["a and b", "b and d", "c and a"],
            correctAnswer: "a and b"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) To investigate someone is to (c) To petrify someone is to\n(b) terrify that person. (d) come to that person's aid.",
            options: ["a and b", "c and b", "d and a"],
            correctAnswer: "c and b"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) An intense pain is one that (c) A minor pain is one that\n(b) lasts for a long time. (d) is very great.",
            options: ["a and d", "c and b", "b and a"],
            correctAnswer: "a and d"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) A prone figure is one (c) that stands alone.\n(b) that is lying facedown. (d) A fleeing figure is one",
            options: ["a and b", "c and d", "b and c"],
            correctAnswer: "a and b"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) keep it from happening. (c) look into it closely.\n(b) To predict an accident is to (d) To investigate an accident is to",
            options: ["d and c", "a and b", "c and b"],
            correctAnswer: "d and c"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) a person who works in a mine. (c) A minor is\n(b) a person who is not yet an adult. (d) A major is",
            options: ["c and b", "a and d", "b and a"],
            correctAnswer: "c and b"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) To lurch is to (c) lie in a facedown position.\n(b) To flee is to (d) move to the side suddenly.",
            options: ["a and d", "b and c", "c and a"],
            correctAnswer: "a and d"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) A prediction is (c) a reminder of a past event.\n(b) A disaster is (d) a forecast of what will happen.",
            options: ["a and d", "b and c", "c and b"],
            correctAnswer: "a and d"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) a student's main subject. (c) A fracture is\n(b) a small wavelike movement. (d) A major is",
            options: ["d and a", "c and b", "b and d"],
            correctAnswer: "d and a"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) An immense area is one (c) that is very large.\n(b) An urban area is one (d) that has few people.",
            options: ["a and c", "b and d", "c and b"],
            correctAnswer: "a and c"
        }
    ],
    wordsIncluded: ["sparse", "immense", "petrify", "investigate", "intense", "prone", "minor", "lurch", "predict", "major", "fracture"]
};

export const b5_l15_story_2: Story = {
    id: "b5-l15-story-2",
    title: "Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. We **ran away** when the dog behind the flimsy gate started barking.",
            options: ["fled", "lurched", "toppled", "predicted"],
            correctAnswer: "fled"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. Much of the eastern United States that was wilderness in the 1700s is now **made up of cities and towns**.",
            options: ["urban", "sparse", "immense", "prone"],
            correctAnswer: "urban"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The fire was a **terrible event that caused great damage**, but, fortunately, no lives were lost.",
            options: ["disaster", "fracture", "prediction", "major"],
            correctAnswer: "disaster"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. The car's **sudden movement** to the right told my dad we had a flat tire.",
            options: ["lurch", "fracture", "topple", "prediction"],
            correctAnswer: "lurch"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. The **crack or break** in my arm took several weeks to heal.",
            options: ["fracture", "minor", "disaster", "lurch"],
            correctAnswer: "fracture"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. The wood is millions of years old and has slowly **turned into a stonelike substance**.",
            options: ["petrified", "decayed", "predicted", "fractured"],
            correctAnswer: "petrified"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. The crossing guard's **first and most important** concern is the safety of the children as they are walking to school.",
            options: ["major", "minor", "urban", "sparse"],
            correctAnswer: "major"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The **great force** of the speaker's words brought silence to the large crowd gathered for the memorial service.",
            options: ["intensity", "brilliance", "prediction", "disaster"],
            correctAnswer: "intensity"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. Premature babies are **very likely** to suffer from lung problems.",
            options: ["prone", "immune", "sparse", "intense"],
            correctAnswer: "prone"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. The Mexican people **ended the rule of** President Diaz in 1910.",
            options: ["toppled", "investigated", "predicted", "fled"],
            correctAnswer: "toppled"
        }
    ],
    wordsIncluded: ["flee", "urban", "disaster", "lurch", "fracture", "petrify", "major", "intensity", "prone", "topple"]
};

export const b5_l15_story_3: Story = {
    id: "b5-l15-story-3",
    title: "Applying Meanings",
    type: "exercise",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following would you expect to see in an **urban** area?\n(a) farm animals\n(b) dirt roads\n(c) neon signs\n(d) skyscrapers",
            options: ["c and d", "a and b", "d only"],
            correctAnswer: "c and d"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following could be **disastrous**?\n(a) an avalanche\n(b) a blizzard\n(c) an accomplishment\n(d) a voyage",
            options: ["a and b", "c and d", "b only"],
            correctAnswer: "a and b"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following might one **predict**?\n(a) what happened last year\n(b) a blizzard\n(c) the result of an election\n(d) the result of an experiment",
            options: ["b, c and d", "a only", "c and d"],
            correctAnswer: "b, c and d"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following is a **minor** injury?\n(a) a scratched finger\n(b) a pulled muscle\n(c) a severed finger\n(d) a small bruise",
            options: ["a, b and d", "c only", "a and d"],
            correctAnswer: "a, b and d"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following is a **fracture**?\n(a) a broken leg\n(b) a broken promise\n(c) a broken heart\n(d) a broken arm",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d" // Medical definition usually
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following would be visible on a **prone** person?\n(a) the stomach\n(b) the nose\n(c) the back\n(d) the knees",
            options: ["c only", "a and b", "d and a"],
            correctAnswer: "c only" // Prone = face down, so back is visible.
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following might one **investigate**?\n(a) a decade\n(b) an explosion\n(c) a crime\n(d) an accident",
            options: ["b, c and d", "a only", "c and d"],
            correctAnswer: "b, c and d"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **toppled**?\n(a) a tower\n(b) a government\n(c) a stack of books\n(d) a statue",
            options: ["a, b, c and d", "c and d", "a and b"],
            correctAnswer: "a, b, c and d"
        }
    ],
    wordsIncluded: ["urban", "disastrous", "predict", "minor", "fracture", "prone", "investigate", "topple"]
};

export const b5_l15_story_5_facts: Story = {
    id: "b5-l15-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   This is an asterisk: *. It looks like a star, and in fact the word comes from the Latin word for "star," which is *aster*. **Disaster** comes from the Latin prefix *dis-*, which means "against," and *aster*. But what does a disaster have to do with the stars? It was once believed (and still is, by some people) that the position of the stars had an effect on people's daily lives. If something bad (a *disaster*) happened to you, it was because the *stars* were against you.
    
Two other words formed from this same root are *astronomy*, the scientific study of planets and stars, and *astrology*, the belief that the stars have an effect on people's daily lives.

*   **Flee** and *flea* are homophones. A *flea* is a small jumping insect. **Minor** and *miner* are also homophones. A *miner* is a person who works in a mine, digging for coal, gold, or other minerals.

*   If you *break* a leg, you have a **fracture**. If you drop a cup, it will break into *fragments*. If you break down the number 1 into smaller parts, such as halves, you get *fractions*. Something easily broken is *fragile*. All of these words come from the Latin *frangere* or *fractus*, which means "to break."

*   The Latin prefix *pre-* means "before." A *premature* baby is one born *before* it is *mature* enough to leave the womb. Knowing this, and keeping in mind the explanation of *dictate* at the very end of Lesson 12, you should be able to understand how **predict** is formed.`,
    wordsIncluded: ["disaster", "flee", "minor", "fracture", "predict"]
};
