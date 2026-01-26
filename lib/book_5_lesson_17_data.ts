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

export const b5_l17_words: VocabularyWord[] = [
    createWord("b5-l17-w1", "Afflict", "To bring or cause pain and suffering. (Affliction: A condition of pain, suffering, or trouble.)", "The patient has been afflicted with swollen feet for several months. Frida Kahlo's affliction was the result of a serious accident.", "🤕", ["affliction"]),
    createWord("b5-l17-w2", "Barren", "Not fruitful; not reproducing.", "When the topsoil is washed away, the land is barren.", "🏜️"),
    createWord("b5-l17-w3", "Consist", "To be made up; to contain.", "The wedding banquet will consist of many dishes from India.", "🍱"),
    createWord("b5-l17-w4", "Drought", "A long period without rain.", "The poor harvest was due to the drought.", "☀️"),
    createWord("b5-l17-w5", "Erode", "To wear away bit by bit; to wear away by action of wind, water, or ice. (Erosion: The process or state of eroding.)", "Heavy seas from yesterday's storm have eroded parts of the cliff. Cutting down many trees in one area leads to soil erosion.", "🌊", ["erosion"]),
    createWord("b5-l17-w6", "Expand", "1. To make or become larger. 2. To give further details of. (Expansion: The act, process, or result of enlarging.)", "You can expand your chest by taking a very deep breath. Mr. da Silva asked me to expand on some of the information in my report. The lunchroom expansion will allow our school to offer more food choices.", "🎈", ["expansion"]),
    createWord("b5-l17-w7", "Famine", "A widespread and long-lasting shortage of food that may cause starvation.", "The famine in Somalia was the result of several poor harvests in a row.", "🥣"),
    createWord("b5-l17-w8", "Fertile", "1. Able to produce good crops. 2. Able to produce offspring. 3. Able to produce ideas; inventive.", "The major reason we grow such large tomatoes is the fertile soil. A female cat is fertile at six months. Many ideas sprang from Thomas Edison's fertile brain.", "🌱"),
    createWord("b5-l17-w9", "Oasis", "A place where there is water in an otherwise dry area.", "Travelers across the Sahara try to reach the next oasis before nightfall.", "🌴"),
    createWord("b5-l17-w10", "Pasture", "A field of growing grass where animals can eat; a meadow. To put animals out in a field to eat grass.", "We put the sheep in a different pasture to give the grass in this one a chance to grow back. We pasture our horses on a neighbor's land.", "🐑"),
    createWord("b5-l17-w11", "Primitive", "1. From earliest times; ancient. 2. Simple or crude.", "The primitive cave drawings are over fifteen thousand years old. We are proud of the primitive racecar we built for the school race.", "🗿"),
    createWord("b5-l17-w12", "Refuge", "1. Shelter or protection from harm. 2. A place of safety. (Refugee: A person forced to leave her or his home or country to seek protection from danger.)", "The hikers found refuge from the blizzard in a nearby cave. During the hurricane, families living in beach houses found refuge in the high school gym. A camp for Kurdish refugees was set up between Turkey and Iraq.", "🛖", ["refugee"]),
    createWord("b5-l17-w13", "Revert", "To go back to an earlier condition, often one that is not as satisfactory.", "During the week that the electric power lines were being repaired, we reverted to eating our meals by candlelight.", "↩️"),
    createWord("b5-l17-w14", "Teem", "To be filled; to occur in large numbers.", "The Columbia River once teemed with salmon.", "🐟"),
    createWord("b5-l17-w15", "Wither", "To become dried out; to lose freshness.", "The crops will wither unless we have rain soon.", "🥀")
];

export const b5_l17_story_main: Story = {
    id: "b5-l17-story-main",
    title: "A Harvest of Sand",
    type: "story",
    content: `The ability of the earth to support life depends on the amount of rainfall it receives. The tropical rain forests of Africa, Asia, and Central and South America are **teeming** with life. They get up to four hundred inches of rain a year. Yet in other parts of the world, little or no rain falls, making the land **barren**. Areas where the annual rainfall is less than ten inches a year are called deserts.

The largest of the earth's deserts is the Sahara, in northern Africa. The Sahara covers an area almost as big as the United States. Apart from the central portion, which is mountainous, the Sahara **consists** mostly of sand. There is water, but it lies far below the surface in ancient underground lakes. In some places it bubbles to the surface in the form of springs. More often, though, wells have to be dug to get to it. In these places the soil is **fertile**, and people can grow crops and raise animals. **Oases** spring up around these places, often becoming the size of small towns. They are a welcome sight to the travelers who cross this harsh land on the backs of camels, or, more commonly today, in four-wheel-drive vehicles.

South of the Sahara are the countries that make up the Sahel. The Sahel is an area that stretches four thousand miles, from Senegal in the west to Ethiopia in the east. This part of Africa was once mostly grassland. As grassland, it provided good **pasture** for cattle and made it possible for the people of these countries to be reasonably well fed. In recent years, however, it has been **afflicted** with long dry spells. They have been the worst ones in nearly two centuries. As the **droughts** continue, rivers and lakes dry up; without water, the grass **withers** and the cattle are left with nothing to feed on. To make matters worse, too many trees that held the soil in place have been cut down for firewood. This has resulted in widespread soil **erosion**.

Because of changing weather patterns, the Sahara is spreading into the Sahel. As it continues to **expand** southward, the Sahara has taken over more than a quarter of a million square miles since the 1950s. This is equivalent to an area roughly the size of France and Austria combined. Although nothing can be done to change weather patterns, scientists believe that in time conditions will change. If that happens, the land that is now desert may **revert** to grassland.

The people of the Sahel have suffered greatly, however. Hundreds of thousands have already died as a result of **famine**. One third of all the children born in the Sahel still die before their fifth birthdays. Millions have left their once prosperous villages and have poured into the overcrowded cities to the south, where they live in **primitive** shelters. Nouakchott, on Africa's west coast, was home to fifteen thousand people in the 1950s. Accurate counts are hard to come by in this part of Africa, but a 2016 estimate put the figure as high as two million, most of them **refugees** from the slowly spreading desert to the north.`,
    wordsIncluded: [
        "drought", "fertile", "barren", "wither", "famine", "refuge", "primitive",
        "oasis", "erode", "pasture", "expand", "teem", "revert", "afflict", "consist"
    ]
};

export const b5_l17_story_1: Story = {
    id: "b5-l17-story-1",
    title: "Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 17.",
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) go beyond what is permitted.\n(b) To expand is to\n(c) To erode is to\n(d) gradually wear away.",
            options: ["c and d", "b and a", "c and a"],
            correctAnswer: "c and d"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) a place with water in an otherwise dry area.\n(b) a condition from which one suffers.\n(c) An oasis is\n(d) A pasture is",
            options: ["c and a", "d and b", "c and b"],
            correctAnswer: "c and a"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) give more details about it.\n(b) To expand on something is to\n(c) To revert to something is to\n(d) mention it for the first time.",
            options: ["b and a", "c and d", "b and d"],
            correctAnswer: "b and a"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) To consist of something is to\n(b) To teem with something is to\n(c) be made up of it.\n(d) be associated with it.",
            options: ["a and c", "b and d", "a and d"],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) To wither is to\n(b) continue to improve.\n(c) go back to an earlier condition.\n(d) To revert is to",
            options: ["d and c", "a and b", "d and b"],
            correctAnswer: "d and c"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) a place of safety in time of danger.\n(b) a grassy area where animals feed.\n(c) A drought is\n(d) A pasture is",
            options: ["d and b", "c and a", "d and a"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) To wither is to\n(b) To teem is to\n(c) dry out from lack of water.\n(d) sink to a lower level.",
            options: ["a and c", "b and d", "a and d"],
            correctAnswer: "a and c"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) A famine is\n(b) A drought is\n(c) a long period without rain.\n(d) an area where little can grow.",
            options: ["b and c", "a and d", "b and d"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) An expansion is\n(b) a place of great danger.\n(c) An affliction is\n(d) a condition causing suffering.",
            options: ["c and d", "a and b", "c and b"],
            correctAnswer: "c and d"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) A refuge is\n(b) a place of safety.\n(c) a person in poor health.\n(d) A famine is",
            options: ["a and b", "c and d", "a and c"],
            correctAnswer: "a and b"
        }
    ],
    wordsIncluded: ["erode", "oasis", "expand", "consist", "revert", "pasture", "wither", "drought", "afflict", "refuge"]
};

export const b5_l17_story_2: Story = {
    id: "b5-l17-story-2",
    title: "Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. Al Kufrah is a well-known **place where water is found in an otherwise dry area** in Libya.",
            options: ["pasture", "oasis", "refuge", "famine"],
            correctAnswer: "oasis"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. When children taunted her, it led to the **gradual wearing away** of her confidence.",
            options: ["expansion", "erosion", "affliction", "reversion"],
            correctAnswer: "erosion"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The way the villagers draw water from the river may be **the same as that used in very early times**, but it is quite effective.",
            options: ["primitive", "fertile", "barren", "withered"],
            correctAnswer: "primitive"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. If the cow you bought is not **capable of producing calves**, the dealer will return the money you paid for it.",
            options: ["fertile", "barren", "primitive", "afflicted"],
            correctAnswer: "fertile"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. Our breakfast usually **is made up** of cereal, milk, fruit, and juice.",
            options: ["expands", "consists", "teems", "reverts"],
            correctAnswer: "consists"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. Because the number of children taking tennis lessons is **growing larger** every year, we now offer three sessions during the summer.",
            options: ["expanding", "eroding", "withering", "teeming"],
            correctAnswer: "expanding"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. Acid rain destroys lakes that once **were filled** with fish.",
            options: ["teemed", "consisted", "reverted", "withered"],
            correctAnswer: "teemed"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. President Roosevelt was **made to suffer** when he came down with polio.",
            options: ["afflicted", "eroded", "reverted", "expanded"],
            correctAnswer: "afflicted"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. We **provide grass for** our goats in a neighbor's field.",
            options: ["pasture", "refuge", "oasis", "famine"],
            correctAnswer: "pasture"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. Many **persons fleeing for their safety** from Nazi Germany came to the United States in the 1930s.",
            options: ["refugees", "primitives", "pastures", "expansions"],
            correctAnswer: "refugees"
        }
    ],
    wordsIncluded: ["oasis", "erode", "primitive", "fertile", "consist", "expand", "teem", "afflict", "pasture", "refuge"]
};

export const b5_l17_story_3: Story = {
    id: "b5-l17-story-3",
    title: "Applying Meanings",
    type: "exercise",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following might **wither**?\n(a) crops\n(b) trees\n(c) leaves\n(d) beaches",
            options: ["a, b, and c", "d only", "a and c"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following could one **expand**?\n(a) one's knowledge\n(b) one's age\n(c) one's home\n(d) one's chest",
            options: ["a, c, and d", "b only", "a and c"],
            correctAnswer: "a, c, and d"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following can result from **famine**?\n(a) despair\n(b) sickness\n(c) death\n(d) hunger",
            options: ["a, b, c, and d", "a and d", "b and c"],
            correctAnswer: "a, b, c, and d"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following can be **barren**?\n(a) a goat\n(b) a valley\n(c) a pear tree\n(d) a pasture",
            options: ["a, b, c, and d", "a and c", "b and d"],
            correctAnswer: "a, b, c, and d" // All can be barren (unproductive/sterile/empty)
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following might occur during a **drought**?\n(a) restrictions on water use\n(b) forest fires\n(c) a yearning for rain\n(d) flooding",
            options: ["a, b, and c", "d only", "a and c"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following can be **fertile**?\n(a) a kitten\n(b) soil\n(c) a mind\n(d) a morsel",
            options: ["a, b, and c", "d only", "a and b"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following might one find in a **pasture**?\n(a) cargo\n(b) cows\n(c) sheep\n(d) grass",
            options: ["b, c, and d", "a only", "b and c"],
            correctAnswer: "b, c, and d"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **eroded**?\n(a) soil\n(b) confidence\n(c) cliffs\n(d) savings",
            options: ["a, b, c, and d", "a and c", "b and d"],
            correctAnswer: "a, b, c, and d" // Figurative erosion of confidence/savings is valid usage.
        }
    ],
    wordsIncluded: ["wither", "expand", "famine", "barren", "drought", "fertile", "pasture", "erode"]
};

export const b5_l17_story_4: Story = {
    id: "b5-l17-story-4",
    title: "Word Study: Homophones",
    type: "exercise",
    content: "Read the pairs of sentences. Then choose the word that best completes each sentence.",
    questions: [
        {
            id: "ws-q1",
            type: "fill-in-the-blank",
            question: "1. We didn't ______.",
            options: ["idle", "idol"],
            correctAnswer: "idle"
        },
        {
            id: "ws-q2",
            type: "fill-in-the-blank",
            question: "2. The ______ was made of gold with rubies for its eyes.",
            options: ["idol", "idle"],
            correctAnswer: "idol"
        },
        {
            id: "ws-q3",
            type: "fill-in-the-blank",
            question: "3. The ______ was dripping wax onto the table.",
            options: ["taper", "tapir"],
            correctAnswer: "taper"
        },
        {
            id: "ws-q4",
            type: "fill-in-the-blank",
            question: "4. The ______ is an animal with a long, flexible snout.",
            options: ["tapir", "taper"],
            correctAnswer: "tapir"
        },
        {
            id: "ws-q5",
            type: "fill-in-the-blank",
            question: "5. The streets ______ with tourists during the summer months.",
            options: ["teem", "team"],
            correctAnswer: "teem"
        },
        {
            id: "ws-q6",
            type: "fill-in-the-blank",
            question: "6. May the best ______ win.",
            options: ["team", "teem"],
            correctAnswer: "team"
        },
        {
            id: "ws-q7",
            type: "fill-in-the-blank",
            question: "7. The chart lists the ______ of all the English kings and queens.",
            options: ["reigns", "reins"],
            correctAnswer: "reigns"
        },
        {
            id: "ws-q8",
            type: "fill-in-the-blank",
            question: "8. The ______ are used to control the horse.",
            options: ["reins", "reigns"],
            correctAnswer: "reins"
        },
        {
            id: "ws-q9",
            type: "fill-in-the-blank",
            question: "9. The Sahara is ______ except for the occasional oasis.",
            options: ["barren", "baron"],
            correctAnswer: "barren"
        },
        {
            id: "ws-q10",
            type: "fill-in-the-blank",
            question: "10. A ______ can sit in the British House of Lords.",
            options: ["baron", "barren"],
            correctAnswer: "baron"
        },
        {
            id: "ws-q11",
            type: "fill-in-the-blank",
            question: "11. In the U.S., anyone under eighteen is considered a ______.",
            options: ["minor", "miner"],
            correctAnswer: "minor"
        },
        {
            id: "ws-q12",
            type: "fill-in-the-blank",
            question: "12. Every gold ______ in California hoped to strike it rich.",
            options: ["miner", "minor"],
            correctAnswer: "miner"
        },
        {
            id: "ws-q13",
            type: "fill-in-the-blank",
            question: "13. A ______ can jump many times its height.",
            options: ["flea", "flee"],
            correctAnswer: "flea"
        },
        {
            id: "ws-q14",
            type: "fill-in-the-blank",
            question: "14. Most people were able to ______ inland before the hurricane struck.",
            options: ["flee", "flea"],
            correctAnswer: "flee"
        }
    ],
    wordsIncluded: ["idle", "taper", "teem", "reign", "barren", "minor", "flee"]
};

export const b5_l17_story_5_facts: Story = {
    id: "b5-l17-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   To **afflict** is to cause pain and suffering. To *inflict* (Word List 6) is to cause something damaging or painful to be felt. If you are confused by the similarity in meaning of these two words, you are not alone. The difference between them is that **afflict** deals with what is *felt*, whereas *inflict* deals with what is *done*. In the sentence "The judge *inflicted* a severe sentence," the judge *did* something. In the sentence "The prisoner was *afflicted* with guilt," the prisoner *felt* something.

*   **Barren** and *baron* are homophones. A *baron* is a nobleman. It was the English barons who, in 1215, forced King John to sign the Magna Carta, granting civil rights to English citizens.

*   **Teem** and *team* form another pair of homophones. A *team* is a group of people who play or work together.

*   **Primitive** tools, which may be tens of thousand of years old, are found buried in many parts of the world. They are among the first tools made by humans, as the word **primitive** suggests. It comes from the Latin *primus*, which means "first." A number of other English words share this root. A *primary* reason is one that comes first in importance; a *primer* is a book of *first* instruction in a subject; and a *prime* minister in many countries is the leader who is *first* in importance.

*   **Wither**, a verb, should not be confused with the adverb *whither*, meaning "to what place; where." These two words are not homophones, because the "h" in *whither* is sounded. *Whither* is a poetic word that is falling out of use. Once when people wished to know where someone was going, they would ask, "Whither are you going?" or "Whither goest thou?"`,
    wordsIncluded: [
        "afflict", "barren", "teem", "primitive", "wither"
    ]
};
