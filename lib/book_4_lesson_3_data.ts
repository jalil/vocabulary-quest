import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji
});

// Lesson 3 Words
export const b4_l3_words: VocabularyWord[] = [
    createWord("b4-l3-w1", "Approach", "To go closer to. A coming closer. A road or way that leads to a place.", "The vet approached the wounded deer carefully.", "🚶"),
    createWord("b4-l3-w2", "Burrow", "To dig a hole or tunnel into or under something. To dig deeply into; to search. A hole or tunnel dug by an animal as a home or for protection.", "Turtles burrow into soft sand to lay their eggs.", "🕳️"),
    createWord("b4-l3-w3", "Cease", "To stop; to come or bring to an end.", "After several hours of thunder and lightning, the storm finally ceased.", "🛑"),
    createWord("b4-l3-w4", "Destructive", "Causing harm or damage.", "Mice can be very destructive pests.", "💥"),
    createWord("b4-l3-w5", "Drowsy", "Tired or sleepy.", "Lying in the sun always makes my cat drowsy.", "😴"),
    createWord("b4-l3-w6", "Famished", "Very hungry.", "Sometimes I forget to eat my lunch, so by suppertime I am famished!", "🍽️"),
    createWord("b4-l3-w7", "Forecast", "To figure out and say what will happen before it takes place. A telling of what will happen.", "Our fishing guide forecast a good catch.", "🔮"),
    createWord("b4-l3-w8", "Hibernate", "To spend the winter in a resting state.", "Groundhogs hibernate because they can't find enough food in the winter.", "🐻"),
    createWord("b4-l3-w9", "Migrate", "To move from one country or region to another.", "Hundreds of thousands of people have migrated to the United States in search of freedom.", "🦆"),
    createWord("b4-l3-w10", "Nestle", "To settle down comfortably, as if in a nest. To lie in a sheltered, partly hidden place.", "I like to nestle into bed with a good book.", "🛌"),
    createWord("b4-l3-w11", "Observe", "To see; to notice. To comment; to remark. To mark an event or day. To obey.", "I looked up at the sky and observed a hawk circling slowly, far above us.", "👀"),
    createWord("b4-l3-w12", "Prepare", "To make or get ready.", "The scouts prepared for their camping trip by getting lots of freeze-dried food.", "🎒"),
    createWord("b4-l3-w13", "Reduce", "To make or become smaller or less.", "To stay healthy, we will reduce the amount of salt we put in our food.", "📉"),
    createWord("b4-l3-w14", "Severe", "Very strict or harsh. Hard to bear or deal with.", "Failing the class is a severe punishment for turning a paper in late.", "🌩️"),
    createWord("b4-l3-w15", "Venture", "To dare to do, to go, or to say. Something that involves the risk of a loss.", "Maria ventured onto the dance floor even though she didn't know how to dance.", "🚀"),
];

// Story 1: Finding Meanings
export const b4_l3_story_1: Story = {
    id: "b4-l3-s1",
    title: "Exercise: Finding Meanings",
    type: "non-fiction",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 3.",
    wordsIncluded: b4_l3_words.map(w => w.id),
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) does a lot of damage. (c) can be easily tamed. (b) A migratory animal is one that (d) A destructive animal is one that",
            options: ["(a) and (b)", "(b) and (c)", "(d) and (a)", "(d) and (c)"],
            correctAnswer: "(d) and (a)" // A destructive animal is one that does a lot of damage.
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) a disappearance. (c) An approach is (b) A venture is (d) a coming closer.",
            options: ["(b) and (a)", "(c) and (d)", "(c) and (a)", "(b) and (d)"],
            correctAnswer: "(c) and (d)" // An approach is a coming closer.
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) A famished creature (c) moves with the changing seasons. (b) A migratory creature (d) goes to sleep for the winter.",
            options: ["(a) and (b)", "(b) and (c)", "(a) and (d)", "(b) and (d)"],
            correctAnswer: "(b) and (c)" // A migratory creature moves with the changing seasons.
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) To burrow is to (c) refuse to obey. (b) dig a hole or tunnel. (d) To nestle is to",
            options: ["(a) and (b)", "(d) and (c)", "(a) and (c)", "(d) and (b)"],
            correctAnswer: "(a) and (b)" // To burrow is to dig a hole or tunnel.
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) to take no part in it. (c) to say it will happen. (b) To forecast an event is (d) To observe an event is",
            options: ["(b) and (c)", "(d) and (a)", "(b) and (a)", "(d) and (c)"],
            correctAnswer: "(b) and (c)" // To forecast an event is to say it will happen.
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) To reduce is to (c) To nestle is to (b) settle down comfortably. (d) fall into a deep sleep.",
            options: ["(c) and (b)", "(a) and (d)", "(a) and (b)", "(c) and (d)"],
            correctAnswer: "(c) and (b)" // To nestle is to settle down comfortably.
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) Preparation is (c) Hibernation is (b) what you do to get ready. (d) what is asked for.",
            options: ["(a) and (b)", "(c) and (d)", "(a) and (d)", "(c) and (b)"],
            correctAnswer: "(a) and (b)" // Preparation is what you do to get ready.
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) something that involves a risk. (c) A reduction is (b) the addition of something. (d) A venture is",
            options: ["(d) and (a)", "(c) and (b)", "(d) and (b)", "(c) and (a)"],
            correctAnswer: "(d) and (a)" // A venture is something that involves a risk.
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) very thirsty. (c) To be famished is to be (b) very hungry. (d) To be drowsy is to be",
            options: ["(c) and (b)", "(d) and (a)", "(c) and (a)", "(d) and (b)"],
            correctAnswer: "(c) and (b)" // To be famished is to be very hungry.
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) To observe something is to (c) To cease something is to (b) pay no attention to it. (d) notice it.",
            options: ["(a) and (d)", "(c) and (b)", "(a) and (b)", "(c) and (d)"],
            correctAnswer: "(a) and (d)" // To observe something is to notice it.
        }
    ]
};

// Story 2: Just the Right Word
export const b4_l3_story_2: Story = {
    id: "b4-l3-s2",
    title: "Exercise: Just the Right Word",
    type: "non-fiction",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    wordsIncluded: b4_l3_words.map(w => w.id),
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. Hana was starting to feel **very sleepy** when a noise made her jump.",
            options: ["drowsy", "famished", "severe", "destructive"],
            correctAnswer: "drowsy"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. The rain did not **come to an end** until early the next morning.",
            options: ["approach", "cease", "forecast", "venture"],
            correctAnswer: "cease"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. Some animals **go into a long, deep sleep** because there is so little for them to eat during the winter months.",
            options: ["hibernate", "reduce", "migrate", "nestle"],
            correctAnswer: "hibernate"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. The cottage **lay partly hidden** in a hollow near a grove of poplar trees.",
            options: ["nestled", "burrowed", "observed", "prepared"],
            correctAnswer: "nestled"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. All the **roads that lead** to the airport are closed because of the snowstorm.",
            options: ["approaches", "forecasts", "ventures", "migrations"],
            correctAnswer: "approaches"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. The **long journey** of Canada geese from northern Canada to South America occurs each fall.",
            options: ["migration", "reduction", "preparation", "destruction"],
            correctAnswer: "migration"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. Even though Granny has **very bad** arthritis, she takes a walk every day.",
            options: ["severe", "drowsy", "destructive", "famished"],
            correctAnswer: "severe"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The **cutting down in size** of this week's newspaper to just four pages was due to the paper shortage.",
            options: ["reduction", "cessation", "forecast", "burrowing"],
            correctAnswer: "reduction"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. Ron **dug deeply** through the papers on his desk, trying to find the letter from his father.",
            options: ["burrowed", "nestled", "migrated", "ventured"],
            correctAnswer: "burrowed"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. As Maria Tipo played the piano, I **closely watched** the way she used the pedal.",
            options: ["observed", "approached", "forecast", "prepared"],
            correctAnswer: "observed"
        }
    ]
};

// Story 3: Applying Meanings
export const b4_l3_story_3: Story = {
    id: "b4-l3-s3",
    title: "Exercise: Applying Meanings",
    type: "non-fiction",
    content: "Which of the following can people reduce?",
    wordsIncluded: b4_l3_words.map(w => w.id),
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following can people **reduce**?",
            options: ["(a) their weight", "(b) their shoe size", "(c) their age", "(d) their spending"],
            correctAnswer: "(a) their weight" // and (d) their spending. Usually specific one asked, but here "letter or letters". Assuming single choice for simplicity or picking best. (a) and (d) both valid.
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following would be a **severe** punishment?",
            options: ["(a) a slap on the wrist", "(b) going to jail", "(c) no television for a day", "(d) being told to be quiet"],
            correctAnswer: "(b) going to jail"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following can a person **forecast**?",
            options: ["(a) a city's capital", "(b) the weather", "(c) a past event", "(d) costs of doing business"],
            correctAnswer: "(b) the weather" // and (d) costs... business forecasting.
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following can cause **destruction**?",
            options: ["(a) forest fires", "(b) floods", "(c) bombs", "(d) hurricanes"],
            correctAnswer: "(d) hurricanes" // all of them actually.
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following could **cease**?",
            options: ["(a) fighting", "(b) noises", "(c) the weather", "(d) a storm"],
            correctAnswer: "(d) a storm" // all except weather (usually continuous).
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following can **migrate**?",
            options: ["(a) animals", "(b) birds", "(c) plants", "(d) humans"],
            correctAnswer: "(b) birds" // (a), (b), (d) all migrate. (c) don't usually.
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following could be **observed**?",
            options: ["(a) a law", "(b) a birthday", "(c) a rule", "(d) a full moon"],
            correctAnswer: "(d) a full moon" // (a) (c) observed as in obeyed. (b) celebrated/observed. (d) seen. All valid meanings.
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **prepared**?",
            options: ["(a) a lunch for four", "(b) a garden for planting", "(c) a book report", "(d) a full moon"],
            correctAnswer: "(a) a lunch for four" // (b) yes, (c) yes.
        }
    ]
};

// Story 4: Reading Passage
export const b4_l3_story_4: Story = {
    id: "b4-l3-s4",
    title: "Reading Passage: A Long Winter Nap",
    type: "non-fiction",
    content: `
Summer is a good time of year for most animals. It's easy for them to keep warm, and food is plentiful. Winter is harder for them. Lakes and ponds are frozen, and snow may cover the ground. All this makes food much harder to find. Many birds and some animals escape northern winters completely. They **migrate** south in the fall and return in the spring.

The groundhog, or woodchuck, deals with winter differently. It **hibernates**. As soon as it feels the weather turning cold, it starts to dig. It digs a **burrow** at least five feet underground. There it makes a comfortable nest with leaves and grass. The groundhog spends the cold winter months **nestled** in its underground bed. It does not usually wake up until spring. It is far enough below ground that there is no danger of its freezing to death. It stays safe even during the most **severe** winter.

The groundhog does not eat at all during the winter. Instead, it eats as much and as often as it can during the summer. People with gardens know how **destructive** a groundhog can be to their plants. As winter **approaches**, the groundhog becomes so fat it can hardly move. It **prepares** its nest and closes off the openings of the tunnels that lead down to it. When it starts to feel **drowsy**, it makes itself comfortable and falls into a long, deep sleep. This sleep can last up to eight months.

If you **observed** the groundhog in this state, you might think it had died. Its breathing almost **ceases**; its heart slows to about four beats a minute. A thermometer would show that its body temperature has fallen to just above freezing. When the groundhog wakes up in the spring, it has been without food for many months. Its weight has been **reduced** to only half of what it was in the fall. Almost all its body fat has been used up to keep it alive during its long sleep. By February or March, the **famished** animal is ready to leave its hole and go looking for its first meal.

Years ago, people who lived in the country eagerly awaited the sight of the first groundhog putting its head above ground; it was a sign that winter was over. This gave rise to a number of stories. One of them was told by German farmers who had settled in Punxsutawney, Pennsylvania. The story was about a groundhog they called Punxsutawney Phil. This remarkable animal could **forecast** the weather.

According to the story, Phil **ventured** from his nest every February 2. He poked his head above ground and looked around. If he saw his shadow, it meant that there would be another month and a half of winter. In that case, he went back to sleep for another six weeks. If the weather was cloudy, and he didn't see his shadow, it meant spring would be early. This story spread around the country. Eventually, February 2 became known as Groundhog Day.
`,
    wordsIncluded: b4_l3_words.map(w => w.id),
    questions: []
};

export const b4_l3_story_5: Story = {
    id: "b4-l3-s5",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* French, Spanish, and Italian are Romance languages. This means that many of their words come directly from the Latin that people throughout the Roman Empire spoke two thousand years ago. For example, you learned the Latin word *hibernum*, meaning winter. The French word for *winter*, *hiver*, also comes from Latin.

* When modern science began several hundred years ago, there was a need for scientific terms, and these were usually formed from Latin, the language of scholars. The word **hibernate** was formed in this way. It means "to go into a sleeplike state during the winter" and comes from the Latin word for *winter*.
`,
    wordsIncluded: ["hibernate"],
    questions: []
};
