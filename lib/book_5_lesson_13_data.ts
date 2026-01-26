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

export const b5_l13_words: VocabularyWord[] = [
    createWord("b5-l13-w1", "Accommodate", "1. To have or to find room for. 2. To do a favor for.", "This bus, which accommodates thirty adults, will drive to the historic buildings in the center of the city. Tell me what you want, and I will try to accommodate you.", "🚌"),
    createWord("b5-l13-w2", "Aggressive", "1. Ready to attack or start fights; acting in a hostile way. 2. Bold and active.", "Many animals become aggressive when their young are threatened. Serena Williams, the American tennis star, plays a talented and aggressive game.", "😡"),
    createWord("b5-l13-w3", "Bask", "1. To relax where it is pleasantly warm. 2. To enjoy a warm or pleasant feeling.", "At lunch break, several students basked in the sunshine flooding the front steps. The twins basked in the praise heaped on them by their parents.", "☀️"),
    createWord("b5-l13-w4", "Carcass", "The dead body of an animal.", "We called the city to request that the raccoon carcass on our street be removed.", "☠️"),
    createWord("b5-l13-w5", "Conceal", "To keep something or someone from being seen or known; to hide.", "Playing hide-and-seek with my younger cousins, I concealed myself behind the kitchen door.", "🫣"),
    createWord("b5-l13-w6", "Flail", "To strike out or swing wildly; to thrash about.", "Matt's arms flailed desperately after he jumped in the pool.", "🏊"),
    createWord("b5-l13-w7", "Gorge", "1. A narrow passage between steep cliffs. 2. To stuff with food; to eat greedily.", "We crossed the gorge on a swaying rope bridge. The children gorged themselves on watermelon at the family picnic.", "🍉"),
    createWord("b5-l13-w8", "Morsel", "A small amount, especially of something good to eat; a tidbit.", "For appetizers we served stuffed mushrooms and other tasty morsels.", "🧀"),
    createWord("b5-l13-w9", "Protrude", "To stick out; to project.", "Watch out for the stone ledge that protrudes from the wall.", "🧱"),
    createWord("b5-l13-w10", "Ripple", "1. To form small waves. 2. A movement like a small wave.", "The breeze rippled the surface of the lake. Raindrops made ripples in the pond.", "🌊"),
    createWord("b5-l13-w11", "Slither", "To move with a sliding, side-to-side motion of the body.", "A snake slithered through the grass.", "🐍"),
    createWord("b5-l13-w12", "Sluggish", "1. Lacking energy; not active. 2. Slow moving.", "The heat made me sluggish. In the dry season, the river becomes little more than a sluggish stream.", "🐌"),
    createWord("b5-l13-w13", "Snout", "The nose or jaws that stick out in front of certain animals' heads.", "The snout of a crocodile is full of long, sharp teeth.", "🐊"),
    createWord("b5-l13-w14", "Taper", "1. To make or become less wide or less thick at one end. 2. To lessen gradually. 3. A thin candle.", "The little dog's tail tapers to a point. When a loud knock was heard at the door, the professor's voice tapered off until she fell silent. The only light in the room came from a flickering taper.", "🕯️"),
    createWord("b5-l13-w15", "Visible", "Able to be seen; exposed to view; not hidden.", "On a clear day Mount Shasta is visible from fifty miles away.", "👀", ["visibility"])
];

export const b5_l13_story_main: Story = {
    id: "b5-l13-story-main",
    title: "Beware the Silent Crocodile",
    type: "story",
    content: `Crocodiles are the largest and most ferocious of all reptiles. They live in swampy areas, close to the banks of tropical rivers or lakes. They have been around since the age of the dinosaurs. Back then they reached lengths of thirty feet or more. The crocodile of today, however, is much smaller than its ancient ancestors. It seldom grows longer than fifteen feet from its head to the tip of its long, **tapering** tail.

Crocodiles in the wild are almost unknown in North America. A few can be found in the remaining tidal marshes of the Everglades and the Florida Keys. There they might be mistaken for alligators, their close relatives. Crocodiles and alligators resemble each other in many ways. There are clear differences between them, however. The crocodile is the more **aggressive** of the two. It also has a longer and narrower **snout**, and the fourth tooth on each side of its jaw **protrudes**. That tooth remains in view even when its mouth is closed.

A crocodile in the water lies almost entirely **concealed** below the surface; only its eyes and nostrils are **visible**. It can stay like this for hours, its eyes fixed on the water's edge, waiting for a thirsty animal to come to drink. When this happens, the crocodile is careful not to scare away its prey. It disappears beneath the surface, swimming slowly toward the unsuspecting animal; it makes not even the slightest **ripple**.

If the thirsty animal is lucky, it senses the danger in time and escapes. If the crocodile is lucky, it seizes the animal in its jaws, knocks it off balance by **flailing** its powerful tail, and drags it into the water. There the creature drowns. The crocodile then finds a place where it can **gorge** on the dead animal without being disturbed. When it has eaten its fill, it will hide the remains of the **carcass**. Then it will return to feed on it later.

When not hunting for food, the crocodile spends much of its time on land. Its belly almost touches the ground as it **slithers** from the water and finds a comfortable spot to **bask** in the sun. Like other reptiles, the crocodile is a cold-blooded animal; therefore, its temperature changes with its surroundings. To escape the extreme heat of midday, it burrows into the soft ground with its sharp claws until it has made a hole large enough to **accommodate** itself. In the cool of the evening, its temperature drops and its movements become **sluggish**.

There are several different kinds of crocodile. The best known is the Nile crocodile of Africa, which has an unusual companion called the crocodile bird. This daring little creature feeds by hopping inside the crocodile's mouth and picking **morsels** of meat from its teeth. The crocodile shows its gratitude for having its teeth cleaned in this way by not eating the bird.`,
    wordsIncluded: [
        "carcass", "snout", "visible", "sluggish", "bask", "slither",
        "ripple", "aggressive", "gorge", "flail", "morsel", "protrude",
        "conceal", "taper", "accommodate"
    ]
};

export const b5_l13_story_1: Story = {
    id: "b5-l13-story-1",
    title: "Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 13.",
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) relax where it is pleasantly warm.\n(b) move by sliding from side to side.\n(c) To taper is to\n(d) To slither is to",
            options: ["d and b", "c and a", "d and a"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) An aggressive animal is one\n(b) A sluggish animal is one\n(c) that is a carnivore.\n(d) that is ready to fight.",
            options: ["a and d", "b and c", "a and c"],
            correctAnswer: "a and d"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) stuff oneself with food.\n(b) strike out wildly.\n(c) To gorge is to\n(d) To taper is to",
            options: ["c and a", "b and c", "d and a"],
            correctAnswer: "c and a"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) a small wave.\n(b) a tasty bit of food.\n(c) A carcass is\n(d) A ripple is",
            options: ["d and a", "c and b", "d and b"],
            correctAnswer: "d and a"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) To flail is to\n(b) To bask is to\n(c) hold out one's arms.\n(d) enjoy a pleasant feeling.",
            options: ["b and d", "a and c", "b and c"],
            correctAnswer: "b and d"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) within sight.\n(b) To be visible is to be\n(c) lacking energy.\n(d) To be concealed is to be",
            options: ["b and a", "d and c", "b and c"],
            correctAnswer: "b and a"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) keep out of sight.\n(b) To protrude is to\n(c) strike out wildly.\n(d) To flail is to",
            options: ["d and c", "a and b", "d and a"],
            correctAnswer: "d and c"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) an animal's slow movement.\n(b) an animal's projecting nose.\n(c) A morsel is\n(d) A snout is",
            options: ["d and b", "c and a", "c and b"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) speak favorably of that person.\n(b) To conceal someone is to\n(c) hide that person.\n(d) To accommodate someone is to",
            options: ["b and c", "d and a", "b and a"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) the body of a dead animal.\n(b) a narrow passage.\n(c) A carcass is\n(d) A morsel is",
            options: ["c and a", "d and b", "c and b"],
            correctAnswer: "c and a"
        }
    ],
    wordsIncluded: ["slither", "aggressive", "gorge", "ripple", "bask", "visible", "flail", "snout", "conceal", "carcass"]
};

export const b5_l13_story_2: Story = {
    id: "b5-l13-story-2",
    title: "Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. The company received an avalanche of mail the first day, but the orders soon began to **arrive in smaller and smaller numbers**.",
            options: ["taper off", "slither", "protrude", "accommodate"],
            correctAnswer: "taper off"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. A leaf dropped onto the pond and **made small waves** on the surface.",
            options: ["rippled", "gorged", "flailed", "basked"],
            correctAnswer: "rippled"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. The **narrow passage with cliffs on either side** is two hundred feet deep.",
            options: ["morsel", "carcass", "snout", "gorge"],
            correctAnswer: "gorge"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. Will you be able to **find room for** all five of us in your car?",
            options: ["conceal", "accommodate", "protrude", "bask"],
            correctAnswer: "accommodate"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. When a **small piece of something good to eat** fell to the floor, we let our dog eat it.",
            options: ["morsel", "carcass", "snout", "taper"],
            correctAnswer: "morsel"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. Customers who cannot pay their bills are pursued by the company in a **very active and forceful manner**.",
            options: ["sluggish", "visible", "aggressive", "rhythmic"],
            correctAnswer: "aggressive"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. The Inuit hunters carried the **dead body of the animal** back to their village.",
            options: ["morsel", "carcass", "snout", "gorge"],
            correctAnswer: "carcass"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The twins **wildly swung** their arms and legs as their parents tried to dress them in snowsuits.",
            options: ["rippled", "flailed", "slithered", "basked"],
            correctAnswer: "flailed"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. I am usually very **slow moving** on cold mornings.",
            options: ["aggressive", "visible", "sluggish", "accommodating"],
            correctAnswer: "sluggish"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. Watch out! There are several rusty nails **sticking out** from that board lying on the ground in front of you.",
            options: ["tapering", "protruding", "rippling", "concealing"],
            correctAnswer: "protruding"
        }
    ],
    wordsIncluded: ["taper", "ripple", "gorge", "accommodate", "morsel", "aggressive", "carcass", "flail", "sluggish", "protrude"]
};

export const b5_l13_story_3: Story = {
    id: "b5-l13-story-3",
    title: "Applying Meanings",
    type: "exercise",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "am-q1",
            type: "multiple-choice",
            question: "1. Which of the following would decrease visibility?\n(a) fog\n(b) a telescope\n(c) a blizzard\n(d) darkness",
            options: ["a and c", "b and d", "a, c and d"],
            correctAnswer: "a, c and d"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following is an aggressive remark?\n(a) \"Get out of my way!\"\n(b) \"I'm sorry.\"\n(c) \"Forget it!\"\n(d) \"Would you please repeat that?\"",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following might make a person sluggish?\n(a) a heavy meal\n(b) bracing air\n(c) lying in the sun\n(d) a stimulant",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following animals slither?\n(a) snakes\n(b) lizards\n(c) frogs\n(d) kangaroos",
            options: ["a only", "b and c", "a, b and c"],
            correctAnswer: "a only"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following can taper?\n(a) a twelve-inch ruler\n(b) the blade of a dinner knife\n(c) a candle\n(d) the toe of a shoe",
            options: ["a and b", "c and d", "b, c and d"],
            correctAnswer: "b, c and d"
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following protrudes from the head?\n(a) the neck\n(b) the nose\n(c) the ears\n(d) the brain",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. In which of the following places might one bask?\n(a) on the beach\n(b) besid the pool\n(c) near a campfire\n(d) on a tropical island",
            options: ["a and b", "c and d", "a, b, c and d"],
            correctAnswer: "a, b, c and d"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following might accommodate your neighbors?\n(a) lending them your toys\n(b) inviting them to celebrate\n(c) denouncing them to your friends\n(d) watching their dog while they're away",
            options: ["a and d", "b and c", "a, b and d"],
            correctAnswer: "a, b and d"
        }
    ],
    wordsIncluded: ["visible", "aggressive", "sluggish", "slither", "taper", "protrude", "bask", "accommodate"]
};

export const b5_l13_story_4: Story = {
    id: "b5-l13-story-4",
    title: "Word Study: Synonyms",
    type: "exercise",
    content: "Each group of words contains two, three, or four synonyms. Circle any words that are NOT synonyms.",
    questions: [
        {
            id: "ws-q1",
            type: "multiple-choice",
            question: "1. aggressive, visible, hostile, friendly",
            options: ["visible and friendly", "aggressive and hostile", "visible only"],
            correctAnswer: "visible and friendly"
        },
        {
            id: "ws-q2",
            type: "multiple-choice",
            question: "2. taper, conceal, hide, obscure",
            options: ["taper", "conceal and hide", "obscure"],
            correctAnswer: "taper"
        },
        {
            id: "ws-q3",
            type: "multiple-choice",
            question: "3. exasperate, annoy, infuriate, protrude",
            options: ["protrude", "exasperate and annoy", "infuriate"],
            correctAnswer: "protrude"
        },
        {
            id: "ws-q4",
            type: "multiple-choice",
            question: "4. anxious, worried, concerned, nervous",
            options: ["None", "anxious", "concerned"],
            correctAnswer: "None" // All are synonyms roughly.
        },
        {
            id: "ws-q5",
            type: "multiple-choice",
            question: "5. exultant, joyful, sluggish, methodical",
            options: ["sluggish and methodical", "exultant and joyful", "methodical only"],
            correctAnswer: "sluggish and methodical"
        },
        {
            id: "ws-q6",
            type: "multiple-choice",
            question: "6. absurd, nonchalant, silly, ridiculous",
            options: ["nonchalant", "absurd and silly", "ridiculous"],
            correctAnswer: "nonchalant"
        },
        {
            id: "ws-q7",
            type: "multiple-choice",
            question: "7. heroic, brave, fearless, bold",
            options: ["None", "heroic", "bold"],
            correctAnswer: "None"
        },
        {
            id: "ws-q8",
            type: "multiple-choice",
            question: "8. interest, fascinate, donate, attract",
            options: ["donate", "attract", "fascinate"],
            correctAnswer: "donate"
        },
        {
            id: "ws-q9",
            type: "multiple-choice",
            question: "9. feeble, evasive, puny, burly",
            options: ["evasive and burly", "feeble and puny", "burly only"],
            correctAnswer: "evasive and burly"
        },
        {
            id: "ws-q10",
            type: "multiple-choice",
            question: "10. yearn, loathe, dislike, hate",
            options: ["yearn", "loathe and dislike", "hate"],
            correctAnswer: "yearn"
        }
    ],
    wordsIncluded: ["aggressive", "visible", "taper", "conceal", "protrude", "anxious", "sluggish", "nonchalant", "heroic", "donate", "yearn"]
};

export const b5_l13_story_5_facts: Story = {
    id: "b5-l13-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   A **slug** is like a snail but without the shell; it moves very slow. *Slug* comes from an old Scandinavian word *slugje*, which means "a heavy, slow person." The noun *sluggard*, "a lazy, slow-moving person" and the adjective **sluggish** are formed from this word.

*   Don't confuse *tapir*, the name for a large piglike animal that lives in the forests of Central and South America, with **taper**. These two words sound the same but have different meanings and spellings.`,
    wordsIncluded: [
        "sluggish", "taper"
    ]
};
