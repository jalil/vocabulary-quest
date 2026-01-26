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

export const b5_l19_words: VocabularyWord[] = [
    createWord("b5-l19-w1", "Dormant", "1. In a sleeplike state. 2. Not active, but able to become active.", "Groundhogs remain dormant through the winter. Japan's Mount Fuji is a dormant volcano.", "💤"),
    createWord("b5-l19-w2", "Elegant", "Graceful or refined in appearance or behavior.", "The tiny curved numbers and the slender hands made the old silver watch an elegant timepiece.", "🦢"),
    createWord("b5-l19-w3", "Erupt", "To burst forth violently. (Eruption: A violent bursting forth.)", "The woman erupted in anger when she learned the store had just closed. The eruption of Mount Saint Helens in 1980 caused immense damage.", "🌋", ["eruption"]),
    createWord("b5-l19-w4", "Excavate", "1. To dig out. 2. To uncover by digging. (Excavation: The place formed by digging or the process of digging out.)", "The backhoe will excavate this spot near the pine tree to create the basement of our new house. Workers began to excavate the ancient city of Troy in 1871. The excavation of Cahuachi, Peru, uncovered many pieces of pottery from the ancient Nazca culture.", "⛏️", ["excavation"]),
    createWord("b5-l19-w5", "Expel", "1. To eject; to release, as from a container. 2. To force to leave.", "Electric cars help keep the air clean because they don't expel poisonous gases. The school reserves the right to expel students for serious offenses.", "💨"),
    createWord("b5-l19-w6", "Fume", "1. (usually plural) A disagreeable smoke or gas. 2. To feel or show anger or resentment.", "Fumes from passing trucks and buses have damaged the oak trees. My father fumed when he discovered that I had left my bicycle out in the rain all night.", "😤"),
    createWord("b5-l19-w7", "Molten", "Made liquid by heat; melted.", "At the craft fair, we watched people make tapers by dipping wicks into pots of molten wax.", "🔥"),
    createWord("b5-l19-w8", "Painstaking", "Showing or taking great care or effort.", "After a painstaking search of the house, we found the missing car keys.", "🔍"),
    createWord("b5-l19-w9", "Perish", "To die; to be killed or destroyed.", "Approximately ten million people perished in World War I.", "💀"),
    createWord("b5-l19-w10", "Population", "1. The total number of people in a certain place. 2. The total number of plants or animals in a certain area. (Populate: To fill; to form the population of.)", "The population of the town declined by almost a quarter over the past decade. The elm tree population decreased greatly after the 1930s because of Dutch elm disease. I wish I had as many adventures as the characters who populate my favorite book.", "👥", ["populate"]),
    createWord("b5-l19-w11", "Prelude", "1. Something that comes before or introduces the main part. 2. A short musical piece played as an introduction.", "The October frost was a prelude to a harsh winter. Chang-lee played a piano prelude for the spring recital.", "🎼"),
    createWord("b5-l19-w12", "Scald", "To burn with hot liquid or steam. (Scalding: Very hot.)", "Boiling water from the overturned saucepan scalded the man's hand. The bath water was scalding, so I added some cold water.", "♨️", ["scalding"]),
    createWord("b5-l19-w13", "Stupendous", "Amazing because it is very great or very large.", "It took a stupendous effort to return the beached whales to the water.", "🐘"),
    createWord("b5-l19-w14", "Suffocate", "To kill or die by stopping access to air. (Suffocation: The act or process of suffocating.)", "The trapped miners suffocated when their air supply was cut off. Keep plastic bags away from young children to avoid any chance of suffocation.", "😶", ["suffocation"]),
    createWord("b5-l19-w15", "Tremor", "1. A shaking movement. 2. A nervous or excited feeling.", "Tremors following the 1994 Los Angeles earthquake continued for several weeks. When I heard the front door creak open, a tremor of fear ran through me.", "〰️")
];

export const b5_l19_story_main: Story = {
    id: "b5-l19-story-main",
    title: "The Lost City",
    type: "story",
    content: `Two thousand years ago, Pompeii was a prosperous town with a **population** of perhaps twenty thousand people. It was a busy port located on the Sarnus River, near the Bay of Naples. That is about 130 miles south of Rome. Rich landowners and retired Roman citizens built **elegant** homes in the town and paid for its fine public buildings and temples. The town was nestled in the shadow of four-thousand-foot-high Mount Vesuvius. Local farmers cultivated grapes in the mountainside's fertile soil as they had done for centuries.

In 62 CE, the town was shaken by **tremors** from an earthquake; for the next seventeen years, the people worked to repair the damage. They were not then aware of the danger they were in. If they had known what we know today, that earthquake would have been a warning to them. **Stupendous** forces were slowly building deep beneath the surface; the earthquake was merely the **prelude** to a far worse disaster.

Mount Vesuvius is a volcano. It had been **dormant** for eight hundred years; there had been no activity during this time. That was because a thick layer of **molten** rock, called lava, had hardened to form a plug, sealing off the mouth of the volcano like a cork in a bottle. Over the centuries, pressure deep below the earth's surface had been slowly building up inside the volcano. On August 24, 79 CE, it became so great that the plug of lava was suddenly **expelled** in a tremendous explosion.

So violent was the explosion that the top of the mountain was blown off. Cracks appeared in the earth. Water, heated to boiling by fires beneath the earth's crust, thrust its way to the surface. People and animals were **scalded** as they tried to flee. Smoke, poisonous **fumes**, and ash from the volcano filled the air, **suffocating** many people in their homes. Buildings were crushed by huge rocks hurled from the volcano. Then came a series of avalanches that buried the town, together with everything in it, in twenty feet of stones, cinders, and volcanic ash.

A vivid description of the **eruption** of Vesuvius was given by Pliny the Younger, who later became a famous Roman statesman. He was eighteen years old at the time. Pliny the Younger watched the disaster from twenty miles away on the other side of the bay. His uncle sailed to Pompeii to save the lives of some friends but died during the attempt. Pliny the Younger described the tragic events of that day in letters he wrote many years later.

For centuries Pompeii lay buried and forgotten. It was not until 1763 that the **excavation** of the ruins first began. **Painstaking** digging revealed streets and buildings filled with the objects of everyday life. Also uncovered were the bodies of the more than two thousand people who **perished** on that terrible day nearly two thousand years ago when the sleeping volcano suddenly woke up.`,
    wordsIncluded: [
        "population", "elegant", "tremor", "stupendous", "prelude",
        "dormant", "molten", "expel", "scald", "fume", "suffocate",
        "eruption", "excavate", "painstaking", "perish"
    ]
};

export const b5_l19_story_1: Story = {
    id: "b5-l19-story-1",
    title: "Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 19.",
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) forbid people to go into it.\n(b) fill it with people.\n(c) To populate an area is to\n(d) To excavate an area is to",
            options: ["c and b", "d and a", "c and a"],
            correctAnswer: "c and b"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) To perish\n(b) is to tire easily.\n(c) To fume\n(d) is to die.",
            options: ["a and d", "c and b", "a and b"],
            correctAnswer: "a and d"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) break up into smaller parts.\n(b) burst out violently.\n(c) To suffocate is to\n(d) To erupt is to",
            options: ["d and b", "c and a", "d and a"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) An excavated building is one\n(b) An elegant building is one\n(c) that is beautifully designed.\n(d) that has been completely rebuilt.",
            options: ["b and c", "a and d", "b and d"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) that is amazingly large.\n(b) A painstaking job is one\n(c) A stupendous job is one\n(d) that is very boring.",
            options: ["c and a", "b and d", "c and d"],
            correctAnswer: "c and a"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) To scald is\n(b) To expel is\n(c) to burn with a hot liquid.\n(d) to taunt.",
            options: ["a and c", "b and d", "a and d"],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) To be painstaking is to\n(b) be careless of others' feelings.\n(c) take very great care.\n(d) To be dormant is to",
            options: ["a and c", "d and b", "a and b"],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) be prevented from getting air.\n(b) be permitted to enter.\n(c) To erupt is to\n(d) To suffocate is to",
            options: ["d and a", "c and b", "d and b"],
            correctAnswer: "d and a"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) Something that is molten is\n(b) easily damaged.\n(c) made liquid by heat.\n(d) Something that is dormant is",
            options: ["a and c", "d and b", "a and b"],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) Fumes are\n(b) Tremors are\n(c) harmful gases.\n(d) burns caused by hot liquids.",
            options: ["a and c", "b and d", "a and d"],
            correctAnswer: "a and c"
        }
    ],
    wordsIncluded: ["populate", "perish", "erupt", "elegant", "stupendous", "scald", "painstaking", "suffocate", "molten", "fume"]
};

export const b5_l19_story_2: Story = {
    id: "b5-l19-story-2",
    title: "Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. In the hot, crowded room, he felt like he was **unable to breathe**.",
            options: ["suffocating", "scalding", "expelling", "fuming"],
            correctAnswer: "suffocating"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. When the pipe broke, there was a sudden **bursting out** of steam.",
            options: ["tremor", "eruption", "excavation", "prelude"],
            correctAnswer: "eruption"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The **total number of people living** in the city of New York is over eight million.",
            options: ["population", "excavation", "prelude", "tremor"],
            correctAnswer: "population"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. Some of the passengers began to **feel very angry** when they were told the train would be an hour late.",
            options: ["perish", "fume", "scald", "suffocate"],
            correctAnswer: "fume"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. Chopin made people appreciate the **short musical piece played as an introduction**.",
            options: ["prelude", "tremor", "eruption", "population"],
            correctAnswer: "prelude"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. The maple trees that line the driveway are **in an inactive state with no signs of life** during the winter.",
            options: ["dormant", "molten", "elegant", "painstaking"],
            correctAnswer: "dormant"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. Parkinson's disease causes **rapid back-and-forth shaking movements** in the hands.",
            options: ["tremors", "eruptions", "scalds", "fumes"],
            correctAnswer: "tremors"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The Martian volcano known as Olympus Mons is **amazing because of its great size**.",
            options: ["stupendous", "elegant", "painstaking", "dormant"],
            correctAnswer: "stupendous"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. The **process of digging a hole in the ground** revealed the remains of an ancient Chinese temple.",
            options: ["excavation", "eruption", "population", "prelude"],
            correctAnswer: "excavation"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. The school suspended the minor offenders, but those guilty of major offenses were **forced to leave for good**.",
            options: ["expelled", "excreted", "excavated", "erupted"],
            correctAnswer: "expelled"
        }
    ],
    wordsIncluded: ["suffocate", "eruption", "population", "fume", "prelude", "dormant", "tremor", "stupendous", "excavation", "expel"]
};

export const b5_l19_story_3: Story = {
    id: "b5-l19-story-3",
    title: "Applying Meanings",
    type: "exercise",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following could be **excavated**?\n(a) smoke\n(b) a secret\n(c) soil\n(d) a buried city",
            options: ["c and d", "a and b", "c only"],
            correctAnswer: "c and d"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following can be **dormant**?\n(a) a volcano\n(b) a rock\n(c) a tree\n(d) an animal",
            options: ["a, c, and d", "b only", "a and c"],
            correctAnswer: "a, c, and d"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following can **scald** someone?\n(a) a hot beverage\n(b) a hot iron\n(c) a hot temper\n(d) a hot day",
            options: ["a only", "a and b", "c and d"],
            correctAnswer: "a only" // A hot iron burns but "scald" specifically refers to hot liquid or steam.
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be **elegant**?\n(a) an aroma\n(b) a restaurant\n(c) a meal\n(d) a dress",
            options: ["b, c, and d", "a only", "d only"],
            correctAnswer: "b, c, and d"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following can **perish**?\n(a) people\n(b) time\n(c) hope\n(d) freedom",
            options: ["a, c, and d", "b only", "a and c"],
            correctAnswer: "a, c, and d" // Figurative use for hope/freedom is common.
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following can cause **tremors**?\n(a) a sickness\n(b) an earthquake\n(c) excitement\n(d) fear",
            options: ["a, b, c, and d", "a and b", "c and d"],
            correctAnswer: "a, b, c, and d"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following can **erupt**?\n(a) an excited crowd\n(b) a riot\n(c) an active volcano\n(d) an angry character",
            options: ["a, b, c, and d", "c only", "c and d"],
            correctAnswer: "a, b, c, and d"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following can give off **fumes**?\n(a) a faulty oil furnace\n(b) a car's exhaust\n(c) an angry person\n(d) a lighted oil lamp",
            options: ["a, b, and d", "c only", "a and b"],
            correctAnswer: "a, b, and d"
        }
    ],
    wordsIncluded: ["excavate", "dormant", "scald", "elegant", "perish", "tremor", "erupt", "fume"]
};

export const b5_l19_story_5_facts: Story = {
    id: "b5-l19-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   The **dormouse** is a European animal resembling a small squirrel. It hibernates in winter. This sleeplike state is what gives it its name: the Latin for "sleep" is *dormire*. Other English words formed from this Latin word are **dormant** and *dormitory*, a place where people sleep.

*   The noun and adjective *perishable* are formed from the verb **perish**. *Perishable* foods spoil quickly, and *perishables* are any foods, such as tomatoes and lettuce, that spoil quickly.

*   What do *premature* (Word List 3), *previous* (Word List 5), *predict* (Word List 15), and **prelude** all have in common? All four are formed from the Latin prefix *pre-*, which means "before." And notice where a *prefix* is found. It comes *before* the rest of the word.`,
    wordsIncluded: [
        "dormant", "perish", "prelude"
    ]
};
