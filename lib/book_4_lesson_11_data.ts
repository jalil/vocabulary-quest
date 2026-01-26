import { Story, VocabularyWord } from "./types";

export const b4_l11_words: VocabularyWord[] = [
    {
        id: "annual",
        word: "annual",
        definition: "(adj.) Happening every year. (n.) 1. A plant that lives for one year. 2. A book that comes out once a year.",
        exampleSentence: "Our annual school fair is in March.",
        imageEmoji: "📅",
        category: "Grade 4"
    },
    {
        id: "artificial",
        word: "artificial",
        definition: "(adj.) Made by human beings and not by nature.",
        exampleSentence: "My aunt Rosa says she can taste the difference between artificial sweeteners and real sugar.",
        imageEmoji: "🤖",
        category: "Grade 4"
    },
    {
        id: "blend",
        word: "blend",
        definition: "(v.) 1. To come or mix together into one. 2. To go together. (n.) A mixture.",
        exampleSentence: "Make sure you blend the butter and sugar before you add the flour.",
        imageEmoji: "🌀",
        category: "Grade 4"
    },
    {
        id: "bore",
        word: "bore",
        definition: "(v.) 1. To make a round hole in by drilling. 2. To tire by being dull and uninteresting. (n.) A dull and uninteresting person.",
        exampleSentence: "If you bore a hole in the wood first, you won't split it when you put in the screw.",
        imageEmoji: "🥱",
        category: "Grade 4"
    },
    {
        id: "considerable",
        word: "considerable",
        definition: "(adj.) Great; large.",
        exampleSentence: "Although my grandmother's house is a considerable distance from town, she walks to the post office there every day.",
        imageEmoji: "🐘",
        category: "Grade 4"
    },
    {
        id: "crude",
        word: "crude",
        definition: "(adj.) 1. Raw; in an unrefined state. 2. Roughly made. 3. Ill-mannered.",
        exampleSentence: "Factories turn crude oil into gasoline.",
        imageEmoji: "🛢️",
        category: "Grade 4"
    },
    {
        id: "evaporate",
        word: "evaporate",
        definition: "(v.) 1. To change from water into steam or vapor. 2. To disappear.",
        exampleSentence: "The water in the kettle boiled so long that it all evaporated.",
        imageEmoji: "♨️",
        category: "Grade 4"
    },
    {
        id: "foliage",
        word: "foliage",
        definition: "(n.) The leaves of trees and other plants.",
        exampleSentence: "The house at the end of the road was completely hidden by foliage.",
        imageEmoji: "🍃",
        category: "Grade 4"
    },
    {
        id: "gash",
        word: "gash",
        definition: "(n.) A long, deep cut.",
        exampleSentence: "When Liza slipped on the rocks, she had to go to the hospital to have the gash in her leg stitched up.",
        imageEmoji: "🤕",
        category: "Grade 4"
    },
    {
        id: "hue",
        word: "hue",
        definition: "(n.) A color; especially a shade of color.",
        exampleSentence: "The apples in the painting stand out because of their vivid reddish-orange hue.",
        imageEmoji: "🎨",
        category: "Grade 4"
    },
    {
        id: "increase",
        word: "increase",
        definition: "(v.) To make or become larger; to add to. (n.) The amount by which something gets larger.",
        exampleSentence: "I'm going to ask my mother to increase my allowance on my next birthday.",
        imageEmoji: "📈",
        category: "Grade 4"
    },
    {
        id: "nourish",
        word: "nourish",
        definition: "(v.) To feed; to support or make grow. (n.) nourishment: Anything that feeds or helps to make grow.",
        exampleSentence: "We nourish our bodies best by eating fruits, vegetables, and grains.",
        imageEmoji: "🍲",
        category: "Grade 4"
    },
    {
        id: "vary",
        word: "vary",
        definition: "(v.) To make or have a change in. (n.) variation: A change in form, position, or condition.",
        exampleSentence: "The length of a calendar month varies between twenty-eight and thirty-one days.",
        imageEmoji: "🔄",
        category: "Grade 4"
    },
    {
        id: "vision",
        word: "vision",
        definition: "(n.) 1. Eyesight. 2. Something seen in the mind, especially of the future.",
        exampleSentence: "If you are lucky enough to have 20/20 vision, you'll be able to see well.",
        imageEmoji: "👁️",
        category: "Grade 4"
    },
    {
        id: "yield",
        word: "yield",
        definition: "(v.) 1. To give up someone or something; to surrender. 2. To produce. (n.) The amount produced.",
        exampleSentence: "My parents finally yielded to my requests to get a parakeet.",
        imageEmoji: "🏳️",
        category: "Grade 4"
    }
];

export const b4_l11_story_1: Story = {
    id: "b4-l11-s1",
    title: "11A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 11.`,
    wordsIncluded: b4_l11_words.map(w => w.id),
    questions: [
        {
            id: "11a-q1",
            type: "multiple-choice",
            question: "1. (a) one that is quite large. (b) A considerable amount is (c) An increased amount is (d) one that is reduced.",
            options: ["b-a", "c-d"], // considerable - large vs increased - reduced (no).
            correctAnswer: "b-a"
        },
        {
            id: "11a-q2",
            type: "multiple-choice",
            question: "2. (a) is not fully developed. (b) An artificial aid is one that (c) A visual aid is one that (d) helps one to see.",
            options: ["b-a", "c-d"],
            correctAnswer: "c-d"
        },
        {
            id: "11a-q3",
            type: "multiple-choice",
            question: "3. (a) A blend is (b) a long, deep cut. (c) A bore is (d) a dull and uninteresting person.",
            options: ["a-b", "c-d"],
            correctAnswer: "c-d"
        },
        {
            id: "11a-q4",
            type: "multiple-choice",
            question: "4. (a) A gash is (b) a round hole made by a drill. (c) something that appears once a year. (d) An annual is",
            options: ["d-c", "a-b"], // gash != round hole drill.
            correctAnswer: "d-c"
        },
        {
            id: "11a-q5",
            type: "multiple-choice",
            question: "5. (a) To increase is (b) to be mixed together. (c) to grow. (d) To evaporate is",
            options: ["a-c", "d-b"],
            correctAnswer: "a-c"
        },
        {
            id: "11a-q6",
            type: "multiple-choice",
            question: "6. (a) Crude rubber is (b) Artificial rubber is (c) still in a raw state. (d) a mixture of different kinds.",
            options: ["a-c", "b-d"],
            correctAnswer: "a-c"
        },
        {
            id: "11a-q7",
            type: "multiple-choice",
            question: "7. (a) Colors that blend (b) go well together. (c) quickly fade. (d) Colors that vary",
            options: ["a-b", "d-c"],
            correctAnswer: "a-b"
        },
        {
            id: "11a-q8",
            type: "multiple-choice",
            question: "8. (a) A gash is (b) a deep cut. (c) a careless remark. (d) A hue is",
            options: ["a-b", "d-c"], // hue != careless remark.
            correctAnswer: "a-b"
        },
        {
            id: "11a-q9",
            type: "multiple-choice",
            question: "9. (a) to give way. (b) To yield is (c) To evaporate is (d) to melt.",
            options: ["b-a", "c-d"], // To yield is to give way. Correct.
            correctAnswer: "b-a"
        },
        {
            id: "11a-q10",
            type: "multiple-choice",
            question: "10. (a) the wood that comes from it. (b) A tree's foliage is (c) its leaves. (d) A tree's hue is",
            options: ["b-c", "d-a"],
            correctAnswer: "b-c"
        },
        {
            id: "11a-q11",
            type: "multiple-choice",
            question: "11. (a) Something that nourishes (b) Something that varies (c) does not stay the same. (d) keeps getting smaller.",
            options: ["b-c", "a-d"],
            correctAnswer: "b-c"
        }
    ]
};

export const b4_l11_story_2: Story = {
    id: "b4-l11-s2",
    title: "11B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b4_l11_words.map(w => w.id),
    questions: [
        {
            id: "11b-q1",
            type: "multiple-choice",
            question: "1. The **amount produced** from these oil wells is a thousand barrels a day.",
            options: ["yield", "increase", "vision", "hue"],
            correctAnswer: "yield"
        },
        {
            id: "11b-q2",
            type: "multiple-choice",
            question: "2. Basil is one type of **plant that grows for just one season**.",
            options: ["annual", "foliage", "hybrid", "weed"],
            correctAnswer: "annual"
        },
        {
            id: "11b-q3",
            type: "multiple-choice",
            question: "3. Mr. Martinez loves to talk about his new computer, but he can get very **dull and uninteresting**.",
            options: ["boring", "crude", "artificial", "spacious"],
            correctAnswer: "boring"
        },
        {
            id: "11b-q4",
            type: "multiple-choice",
            question: "4. Spilled gasoline **turns to vapor** and mixes with the air quickly.",
            options: ["evaporates", "blends", "increases", "varies"],
            correctAnswer: "evaporates"
        },
        {
            id: "11b-q5",
            type: "multiple-choice",
            question: "5. Manure **provides food for growing plants**.",
            options: ["nourishes", "yields", "blends", "increases"],
            correctAnswer: "nourishes"
        },
        {
            id: "11b-q6",
            type: "multiple-choice",
            question: "6. The **roughly made** drawing was the work of a very young child.",
            options: ["crude", "artificial", "spacious", "visual"],
            correctAnswer: "crude"
        },
        {
            id: "11b-q7",
            type: "multiple-choice",
            question: "7. Julio's favorite sandwich filling is made by **mixing together** peanut butter and honey.",
            options: ["blending", "increasing", "varying", "yielding"],
            correctAnswer: "blending"
        },
        {
            id: "11b-q8",
            type: "multiple-choice",
            question: "8. These interior paints come in many different **shades of color**.",
            options: ["hues", "visions", "foliages", "blends"],
            correctAnswer: "hues"
        },
        {
            id: "11b-q9",
            type: "multiple-choice",
            question: "9. Isabel is a person whose **sense of the future** of the city's parks will be appealing to both young and old.",
            options: ["vision", "foliage", "yield", "increase"],
            correctAnswer: "vision"
        },
        {
            id: "11b-q10",
            type: "multiple-choice",
            question: "10. The flowers on the piano look so real that you cannot tell they are **made by human hands**.",
            options: ["artificial", "annual", "crude", "essential"],
            correctAnswer: "artificial" // or artificially made? But single word -> artificial.
        }
    ]
};

export const b4_l11_story_3: Story = {
    id: "b4-l11-s3",
    title: "11C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l11_words.map(w => w.id),
    questions: [
        {
            id: "11c-q1",
            type: "multiple-choice",
            question: "1. Which of the following might **evaporate**?",
            options: ["(a) coal", "(b) water", "(c) gasoline", "(d) electricity"],
            correctAnswers: ["(b) water", "(c) gasoline"]
        },
        {
            id: "11c-q2",
            type: "multiple-choice",
            question: "2. Which of the following is an **increase**?",
            options: ["(a) from Maine to Mexico", "(b) from A to Z", "(c) from scarcity to excess", "(d) from several to many"],
            correctAnswers: ["(c) from scarcity to excess", "(d) from several to many"]
        },
        {
            id: "11c-q3",
            type: "multiple-choice",
            question: "3. Which of the following is a **considerable** amount?",
            options: ["(a) ten cents", "(b) a thousand dollars", "(c) fifty tons", "(d) a modest sum"],
            correctAnswers: ["(b) a thousand dollars", "(c) fifty tons"]
        },
        {
            id: "11c-q4",
            type: "multiple-choice",
            question: "4. Which of the following have **foliage**?",
            options: ["(a) rose bushes", "(b) apple trees", "(c) mushrooms", "(d) tomatoes"],
            correctAnswers: ["(a) rose bushes", "(b) apple trees", "(d) tomatoes"] // Tomatoes have leaves (foliage). Mushrooms do not.
        },
        {
            id: "11c-q5",
            type: "multiple-choice",
            question: "5. Which of the following could cause a **gash**?",
            options: ["(a) a sharp rock", "(b) a baseball", "(c) a hammer", "(d) an ax"],
            correctAnswers: ["(a) a sharp rock", "(d) an ax"]
        },
        {
            id: "11c-q6",
            type: "multiple-choice",
            question: "6. Which of the following is a **hue**?",
            options: ["(a) pink", "(b) yellow", "(c) clear", "(d) dark"],
            correctAnswers: ["(a) pink", "(b) yellow"]
        },
        {
            id: "11c-q7",
            type: "multiple-choice",
            question: "7. For which of the following would you need your **vision**?",
            options: ["(a) making sure your socks match", "(b) observing Thanksgiving", "(c) listening to the radio", "(d) observing the moon"],
            correctAnswers: ["(a) making sure your socks match", "(d) observing the moon"]
        },
        {
            id: "11c-q8",
            type: "multiple-choice",
            question: "8. Which of the following would a seven-year-old probably find **boring**?",
            options: ["(a) a visit to a circus", "(b) a ride on a roller coaster", "(c) a speech by a state senator", "(d) a TV discussion of proper diet"],
            correctAnswers: ["(c) a speech by a state senator", "(d) a TV discussion of proper diet"]
        }
    ]
};

export const b4_l11_story_4: Story = {
    id: "b4-l11-s4",
    title: "11D Word Study: Antonyms",
    type: "exercise",
    content: `Write the antonym of each word on the left on the line next to it. Choose from the words on the right..`,
    wordsIncluded: b4_l11_words.map(w => w.id),
    questions: [
        {
            id: "11d-q1",
            type: "open-ended",
            question: "1. increase",
            options: ["natural", "lose", "cramped", "refined", "lessen", "new", "worthless", "rise", "slight", "upset"],
            correctAnswer: "lessen"
        },
        {
            id: "11d-q2",
            type: "open-ended",
            question: "2. descend", // from pool
            options: ["rise"],
            correctAnswer: "rise"
        },
        {
            id: "11d-q3",
            type: "open-ended",
            question: "3. considerable",
            options: ["slight"],
            correctAnswer: "slight"
        },
        {
            id: "11d-q4",
            type: "open-ended",
            question: "4. ancient",
            options: ["new"],
            correctAnswer: "new"
        },
        {
            id: "11d-q5",
            type: "open-ended",
            question: "5. spacious",
            options: ["cramped"],
            correctAnswer: "cramped"
        },
        {
            id: "11d-q6",
            type: "open-ended",
            question: "6. artificial",
            options: ["natural"],
            correctAnswer: "natural"
        },
        {
            id: "11d-q7",
            type: "open-ended",
            question: "7. regain",
            options: ["lose"],
            correctAnswer: "lose"
        },
        {
            id: "11d-q8",
            type: "open-ended",
            question: "8. console",
            options: ["upset"], // opposite of comfort
            correctAnswer: "upset"
        },
        {
            id: "11d-q9",
            type: "open-ended",
            question: "9. precious",
            options: ["worthless"],
            correctAnswer: "worthless"
        },
        {
            id: "11d-q10",
            type: "open-ended",
            question: "10. crude",
            options: ["refined"],
            correctAnswer: "refined"
        }
    ]
};

export const b4_l11_story_5: Story = {
    id: "b4-l11-s5",
    title: "Reading Passage: Maple Sugaring",
    type: "non-fiction",
    content: `
In the late fall, one of nature's most beautiful sights is the **foliage** of New England's maple trees. The leaves blaze with color. Their **hues** range from bright reds to rich golds.

In the spring, some trees offer more than just a **visual** treat. Early in the season, buckets hang from the sides of sugar maples. The buckets are collecting sap for the **annual** maple sugaring.

How much sap can be collected from a healthy tree? The amount **varies** from twelve to twenty gallons. Amounts in this range **yield** from two to four pounds of maple syrup. This leaves plenty of sap for the tree. The tree needs enough sap to **nourish** itself as it enters a new growing season.

The weather has a great deal to do with how much sap a tree produces. The flow is greatest when the days are sunny and the nights are cold. The flow of sap slows down at night; it **increases** during the day. Maple trees in low, wet areas produce more sap than trees in higher and drier parts. However, the sap from wetter areas contains less sugar.

Native Americans showed the first settlers how to make maple syrup. They made **gashes** in the trees with axes to let the sap run out. However, this could cause **considerable** damage to the tree. Today, tree farmers **bore** a small hole into each tree, about three feet above the ground. This way, they do no harm.

When it seeps from the tree, the syrup is in **crude** form; it needs to be refined before it is ready to use. It is boiled in large kettles until the water **evaporates**. The remaining syrup is passed through filters to clean it. It is then ready to be poured on waffles and pancakes. It can also be made into candy. Maple sugar candy is very popular with visitors to New England.

Maple syrup is produced only in North America. The sugaring season lasts just four to six weeks. Besides New England, several other northern states carry out maple sugaring. The Canadian provinces of Quebec and Ontario also produce maple syrup. Much of the syrup that Americans pour on their pancakes is not real maple syrup, however. It is made from cane sugar syrup with **artificial** maple flavoring added. Sometimes the makers **blend** it with real maple syrup. That way, the label can say "Contains Real Maple Syrup." One hundred percent maple syrup costs more. Still, those who enjoy its taste say there is nothing like the real thing.
    `,
    wordsIncluded: b4_l11_words.map(w => w.id),
    questions: []
};

export const b4_l11_story_6: Story = {
    id: "b4-l11-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* Here are two more pairs of homophones. The first is **bore** and *boar*; a *boar* is a male pig. The second is **hue** and *hew*; to *hew* something is to cut it or chop it with an ax.

* **Crude** and *refined* are antonyms. (*Crude* sugar is purified by boiling and filtering; it then becomes *refined* sugar.)
`,
    wordsIncluded: ["bore", "hue", "crude"],
    questions: []
};
