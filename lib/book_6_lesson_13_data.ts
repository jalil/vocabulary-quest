import { Story, VocabularyWord } from "./types";

export const b6_l13_words: VocabularyWord[] = [
    {
        id: "adapt",
        word: "adapt",
        definition: "(v.) 1. To change to fit new conditions. 2. To make changes in something to make it useful. adaptation (n.) 1. A changing to fit new conditions. 2. Something that is changed from something else.",
        exampleSentence: "Whales were once land animals but adapted well to life in the ocean.",
        imageEmoji: "🦎",
        category: "Grade 6",
        synonyms: ["adjust", "modify", "change"],
        antonyms: ["preserve", "keep"]
    },
    {
        id: "deplete",
        word: "deplete",
        definition: "(v.) To use up.",
        exampleSentence: "Unless we are frugal, we will deplete our savings by the end of March.",
        imageEmoji: "📉",
        category: "Grade 6",
        synonyms: ["use up", "exhaust", "drain"],
        antonyms: ["replenish", "fill", "restore"]
    },
    {
        id: "efficient",
        word: "efficient",
        definition: "(adj.) Producing results without waste.",
        exampleSentence: "Tube lights are more efficient than light bulbs.",
        imageEmoji: "⚡",
        category: "Grade 6",
        synonyms: ["effective", "productive", "organized"],
        antonyms: ["inefficient", "wasteful", "disorganized"]
    },
    {
        id: "fatigue",
        word: "fatigue",
        definition: "(n.) A feeling of tiredness from work or exercise. (v.) To make or become tired.",
        exampleSentence: "Although overcome with fatigue, the runner persevered to the finish line.",
        imageEmoji: "😫",
        category: "Grade 6",
        synonyms: ["tiredness", "exhaustion", "weariness"],
        antonyms: ["energy", "vigor", "vitality"]
    },
    {
        id: "gait",
        word: "gait",
        definition: "(n.) The way a person or animal moves on foot.",
        exampleSentence: "A horse's gait changes as it goes from a walk to a trot.",
        imageEmoji: "🐎",
        category: "Grade 6",
        synonyms: ["walk", "pace", "stride"],
        antonyms: []
    },
    {
        id: "glare",
        word: "glare",
        definition: "(v.) 1. To shine with a strong, harsh light. 2. To stare angrily at. (n.) 1. A strong, blinding light. 2. An angry stare. glaring (adj.) 1. Shining with a harsh, brilliant light. 2. Very obvious.",
        exampleSentence: "The bright sun glared off the icy snowbanks, making it difficult to see.",
        imageEmoji: "😠",
        category: "Grade 6",
        synonyms: ["stare", "frown", "scowl"],
        antonyms: ["smile", "grin"]
    },
    {
        id: "habitat",
        word: "habitat",
        definition: "(n.) The place or type of place where a plant or animal is normally found.",
        exampleSentence: "The habitat of the saguaro cactus is the desert of southwest Arizona.",
        imageEmoji: "🌵",
        category: "Grade 6",
        synonyms: ["home", "environment", "territory"],
        antonyms: []
    },
    {
        id: "oblivious",
        word: "oblivious",
        definition: "(adj.) Not aware of. oblivion (n.) A state of forgetting or being forgotten.",
        exampleSentence: "The audience was oblivious to everything except the actor's inspired performance.",
        imageEmoji: "🤷",
        category: "Grade 6",
        synonyms: ["unaware", "unconscious", "ignorant"],
        antonyms: ["aware", "conscious", "mindful"]
    },
    {
        id: "outmoded",
        word: "outmoded",
        definition: "(adj.) No longer needed or fashionable.",
        exampleSentence: "The coming of the railroad made the stagecoach an outmoded way to travel.",
        imageEmoji: "💾",
        category: "Grade 6",
        synonyms: ["old-fashioned", "obsolete", "dated"],
        antonyms: ["modern", "new", "current"]
    },
    {
        id: "prominent",
        word: "prominent",
        definition: "(adj.) 1. Projecting; standing out. 2. Very easy to see; easily noticed. 3. Famous; well known.",
        exampleSentence: "Mount Rushmore is a prominent feature of the Black Hills in South Dakota.",
        imageEmoji: "🌟",
        category: "Grade 6",
        synonyms: ["famous", "well-known", "important"],
        antonyms: ["unknown", "obscure", "insignificant"]
    },
    {
        id: "quench",
        word: "quench",
        definition: "(v.) 1. To put out; to extinguish. 2. To satisfy with a liquid.",
        exampleSentence: "Not even reading three books on the subject could quench his interest in the mysterious stories about the haunted house.",
        imageEmoji: "🥤",
        category: "Grade 6",
        synonyms: ["satisfy", "slake", "extinguish"],
        antonyms: ["ignite", "start"]
    },
    {
        id: "rigor",
        word: "rigor",
        definition: "(n.) (often plural) 1. A condition that makes life difficult. 2. Strictness or severity. rigorous (adj.) 1. Severe; extreme. 2. Thorough; complete.",
        exampleSentence: "The orange tree couldn't survive the rigors of a Canadian winter.",
        imageEmoji: "⛓️",
        category: "Grade 6",
        synonyms: ["difficulty", "severity", "hardship"],
        antonyms: ["ease", "comfort", "luxury"]
    },
    {
        id: "sear",
        word: "sear",
        definition: "(v.) 1. To wither; to dry up. 2. To burn the surface of with sudden heat.",
        exampleSentence: "A long drought, as well as heat, can sear grass.",
        imageEmoji: "🔥",
        category: "Grade 6",
        synonyms: ["burn", "scorch", "char"],
        antonyms: ["freeze", "cool"]
    },
    {
        id: "transport",
        word: "transport",
        definition: "(v.) To carry or move from one place to another. (n.) The act of carrying from one place to another.",
        exampleSentence: "A large truck transports sets and costumes for the acting company.",
        imageEmoji: "🚚",
        category: "Grade 6",
        synonyms: ["carry", "move", "convey"],
        antonyms: ["hold", "keep"]
    },
    {
        id: "wend",
        word: "wend",
        definition: "(v.) To travel; to go on one's way.",
        exampleSentence: "It took two weeks to wend our way over the mountain pass.",
        imageEmoji: "🚶",
        category: "Grade 6",
        synonyms: ["travel", "go", "proceed"],
        antonyms: ["stay", "remain"]
    }
];

export const b6_l13_story_1: Story = {
    id: "b6-l13-s1",
    title: "13A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 13.`,
    wordsIncluded: b6_l13_words.map(w => w.id),
    questions: [
        {
            id: "13a-q1",
            type: "multiple-choice",
            question: "1. (a) a state of uncertainty. (c) Oblivion is (b) a feeling of tiredness. (d) Fatigue is",
            options: ["c-b", "d-a", "d-b", "c-a"],
            correctAnswer: "d-b"
        },
        {
            id: "13a-q2",
            type: "multiple-choice",
            question: "2. (a) A glaring error is one (c) A rigorous rule is one (b) to which no one pays attention. (d) that should be obvious to anyone.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "a-d"
        },
        {
            id: "13a-q3",
            type: "multiple-choice",
            question: "3. (a) a feeling of worry or concern. (c) Adaptation is (b) Oblivion is (d) a total lack of awareness.",
            options: ["b-d", "c-a", "b-a", "c-d"],
            correctAnswer: "b-d"
        },
        {
            id: "13a-q4",
            type: "multiple-choice",
            question: "4. (a) is in a rundown condition. (c) stands out from those around it. (b) A prominent building is one that (d) An efficient building is one that",
            options: ["b-c", "d-a", "b-a", "d-c"],
            correctAnswer: "b-c"
        },
        {
            id: "13a-q5",
            type: "multiple-choice",
            question: "5. (a) Transport is (c) An adaptation is (b) a change to fit a new condition. (d) a breaking down of something into its parts.",
            options: ["a-b", "c-d", "c-b", "a-d"],
            correctAnswer: "c-b"
        },
        {
            id: "13a-q6",
            type: "multiple-choice",
            question: "6. (a) A gait is (c) an angry stare. (b) a slight burn. (d) A glare is",
            options: ["d-c", "a-b", "d-b", "a-c"],
            correctAnswer: "d-c"
        },
        {
            id: "13a-q7",
            type: "multiple-choice",
            question: "7. (a) To sear something is to (c) To quench something is to (b) burn its surface. (d) store it for later use.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "a-b"
        },
        {
            id: "13a-q8",
            type: "multiple-choice",
            question: "8. (a) An animal's gait is (c) An animal's habitat is (b) its sense of smell. (d) the way it walks.",
            options: ["c-b", "a-d", "c-d", "a-b"],
            correctAnswer: "a-d"
        },
        {
            id: "13a-q9",
            type: "multiple-choice",
            question: "9. (a) is thorough and complete. (c) A rigorous test is one that (b) is carried out carelessly. (d) An outmoded test is one that",
            options: ["c-a", "d-b", "c-b", "d-a"],
            correctAnswer: "c-a"
        },
        {
            id: "13a-q10",
            type: "multiple-choice",
            question: "10. (a) a change in manner. (c) the place a plant naturally grows. (b) A habitat is (d) Transport is",
            options: ["b-a", "d-c", "b-c", "d-a"],
            correctAnswer: "b-c"
        }
    ]
};

export const b6_l13_story_2: Story = {
    id: "b6-l13-s2",
    title: "13B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l13_words.map(w => w.id),
    questions: [
        {
            id: "13b-q1",
            type: "multiple-choice",
            question: "If we aren't careful, we will **completely use up** the water we brought on the hike.",
            options: ["deplete", "adapt", "quench", "transport"],
            correctAnswer: "deplete"
        },
        {
            id: "13b-q2",
            type: "multiple-choice",
            question: "Even a short walk **causes a feeling of tiredness to come over** my old dog.",
            options: ["fatigues", "glares", "wends", "sears"],
            correctAnswer: "fatigues"
        },
        {
            id: "13b-q3",
            type: "multiple-choice",
            question: "Animals that do not **make changes to fit new conditions** fail to survive.",
            options: ["adapt", "deplete", "outmode", "transport"],
            correctAnswer: "adapt"
        },
        {
            id: "13b-q4",
            type: "multiple-choice",
            question: "The mighty Mississippi **moves along** its way to the sea.",
            options: ["wends", "adapts", "glares", "fatigues"],
            correctAnswer: "wends"
        },
        {
            id: "13b-q5",
            type: "multiple-choice",
            question: "The Empire State Building is a **well-known and easily spotted** landmark in New York City.",
            options: ["prominent", "efficient", "outmoded", "oblivious"],
            correctAnswer: "prominent"
        },
        {
            id: "13b-q6",
            type: "multiple-choice",
            question: "The **carrying of goods to where they have to go** is the responsibility of the shipping department.",
            options: ["transport", "gait", "habitat", "rigor"],
            correctAnswer: "transport"
        },
        {
            id: "13b-q7",
            type: "multiple-choice",
            question: "The **harsh and brilliant light** of the welding torch almost blinded me.",
            options: ["glare", "gait", "habitat", "fatigue"],
            correctAnswer: "glare"
        },
        {
            id: "13b-q8",
            type: "multiple-choice",
            question: "The lemur's **natural home and the place where it is normally found** is Madagascar.",
            options: ["habitat", "gait", "transport", "glare"],
            correctAnswer: "habitat"
        },
        {
            id: "13b-q9",
            type: "multiple-choice",
            question: "The children can **have a drink to satisfy** their thirst at the water fountain.",
            options: ["quench", "sear", "deplete", "adapt"],
            correctAnswer: "quench"
        },
        {
            id: "13b-q10",
            type: "multiple-choice",
            question: "A tune-up will help an engine be **able to work properly while using less energy**.",
            options: ["efficient", "prominent", "outmoded", "oblivious"],
            correctAnswer: "efficient"
        },
        {
            id: "13b-q11",
            type: "multiple-choice",
            question: "The method you propose is **no longer in use because a better one has been discovered**.",
            options: ["outmoded", "efficient", "prominent", "oblivious"],
            correctAnswer: "outmoded"
        },
        {
            id: "13b-q12",
            type: "multiple-choice",
            question: "Penguins are well suited to the **harsh conditions** of the Antarctic.",
            options: ["rigors", "gaits", "habitats", "transports"],
            correctAnswer: "rigors"
        }
    ]
};

export const b6_l13_story_3: Story = {
    id: "b6-l13-s3",
    title: "13C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l13_words.map(w => w.id),
    questions: [
        {
            id: "13c-q1",
            type: "multiple-choice",
            question: "1. Which of the following could be **transported**?",
            options: ["(a) animals", "(b) terrain", "(c) veterans", "(d) supplies"],
            correctAnswers: ["(a) animals", "(c) veterans", "(d) supplies"]
        },
        {
            id: "13c-q2",
            type: "multiple-choice",
            question: "2. Which of the following is **outmoded**?",
            options: ["(a) a fashion model", "(b) the nineteenth century", "(c) gaslight", "(d) silent movies"],
            correctAnswers: ["(c) gaslight", "(d) silent movies"] // 19th century is a time, not a thing? Gaslight and silent movies are definitely outmoded technologies.
        },
        {
            id: "13c-q3",
            type: "multiple-choice",
            question: "3. Which of the following can be **quenched**?",
            options: ["(a) a sneer", "(b) a campfire", "(c) thirst", "(d) plans"],
            correctAnswers: ["(b) a campfire", "(c) thirst"]
        },
        {
            id: "13c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be **adapted**?",
            options: ["(a) a method", "(b) a baby", "(c) a tool", "(d) a book"],
            correctAnswers: ["(a) a method", "(c) a tool", "(d) a book"] // A baby? you don't adapt a baby.
        },
        {
            id: "13c-q5",
            type: "multiple-choice",
            question: "5. Which of the following can be **depleted**?",
            options: ["(a) resources", "(b) savings", "(c) supplies", "(d) clouds"],
            correctAnswers: ["(a) resources", "(b) savings", "(c) supplies"]
        },
        {
            id: "13c-q6",
            type: "multiple-choice",
            question: "6. Which of the following might **glare**?",
            options: ["(a) a spotlight", "(b) a radio", "(c) an angry person", "(d) light reflected in a mirror"],
            correctAnswers: ["(a) a spotlight", "(c) an angry person", "(d) light reflected in a mirror"]
        },
        {
            id: "13c-q7",
            type: "multiple-choice",
            question: "7. Which of the following can be **rigorous**?",
            options: ["(a) a fitness program", "(b) an inspection", "(c) a climate", "(d) a blunder"],
            correctAnswers: ["(a) a fitness program", "(b) an inspection", "(c) a climate"]
        },
        {
            id: "13c-q8",
            type: "multiple-choice",
            question: "8. Which of the following is a **gait**?",
            options: ["(a) a posture", "(b) a gallop", "(c) a limp", "(d) a haul"],
            correctAnswers: ["(b) a gallop", "(c) a limp"]
        }
    ]
};

export const b6_l13_story_4: Story = {
    id: "b6-l13-s4",
    title: "13D Word Study: Similar Meanings",
    type: "exercise",
    content: `**Don't get tricked!** 🎩✨

Some words look or sound alike, but they have different meanings. 
Read the sentences carefully and pick the **perfect** word for the blank! 

Can you tell the difference? 🤔`,
    wordsIncluded: b6_l13_words.map(w => w.id),
    questions: [
        {
            id: "13d-q1",
            type: "fill-in-the-blank",
            question: "1. I saw Mom **carry** the baby upstairs.",
            correctAnswer: "carry"
        },
        {
            id: "13d-q2",
            type: "fill-in-the-blank",
            question: "2. A jet was waiting to **transport** the important papers to the president.",
            correctAnswer: "transport"
        },
        {
            id: "13d-q3",
            type: "fill-in-the-blank",
            question: "3. I was **unaware** of the fact that Mars has an atmosphere.",
            correctAnswer: "unaware"
        },
        {
            id: "13d-q4",
            type: "fill-in-the-blank",
            question: "4. My dog Dickens was happily running around, **oblivious** to his surroundings.",
            correctAnswer: "oblivious"
        },
        {
            id: "13d-q5",
            type: "fill-in-the-blank",
            question: "5. Cries of **woe** came from the people who had watched their houses slide down into the ocean.",
            correctAnswer: "woe"
        },
        {
            id: "13d-q6",
            type: "fill-in-the-blank",
            question: "6. I was in such **misery** that I had to call the dentist about my toothache.",
            correctAnswer: "misery"
        },
        {
            id: "13d-q7",
            type: "fill-in-the-blank",
            question: "7. I made a **mistake** when I wrote down the address.",
            correctAnswer: "mistake"
        },
        {
            id: "13d-q8",
            type: "fill-in-the-blank",
            question: "8. The candidate's major **blunder** cost him the election.",
            correctAnswer: "blunder"
        },
        {
            id: "13d-q9",
            type: "fill-in-the-blank",
            question: "9. The child was in **danger** of slipping on the ice.",
            correctAnswer: "danger"
        },
        {
            id: "13d-q10",
            type: "fill-in-the-blank",
            question: "10. The Argonauts faced each new **peril** with steadfast courage.",
            correctAnswer: "peril"
        },
        {
            id: "13d-q11",
            type: "fill-in-the-blank",
            question: "11. I told the sales clerk that I would **complain** to the manager.",
            correctAnswer: "complain"
        },
        {
            id: "13d-q12",
            type: "fill-in-the-blank",
            question: "12. People **gripe** at having to stand in line at airports.",
            correctAnswer: "gripe"
        },
        {
            id: "13d-q13",
            type: "fill-in-the-blank",
            question: "13. Buying your ticket on the Internet will **save** you time.",
            correctAnswer: "save"
        },
        {
            id: "13d-q14",
            type: "fill-in-the-blank",
            question: "14. Modern houses are built to **conserve** heat and lower fuel costs.",
            correctAnswer: "conserve"
        },
        {
            id: "13d-q15",
            type: "fill-in-the-blank",
            question: "15. I will **reduce** the amount of fat I use in that recipe by one half.",
            correctAnswer: "reduce"
        },
        {
            id: "13d-q16",
            type: "fill-in-the-blank",
            question: "16. The winds did not **diminish** until after midnight.",
            correctAnswer: "diminish"
        },
        {
            id: "13d-q17",
            type: "fill-in-the-blank",
            question: "17. The **captive** was released by the rebels after six months.",
            correctAnswer: "captive"
        },
        {
            id: "13d-q18",
            type: "fill-in-the-blank",
            question: "18. Each **prisoner** in the county jail is awaiting trial.",
            correctAnswer: "prisoner"
        },
        {
            id: "13d-q19",
            type: "fill-in-the-blank",
            question: "19. I turned back to the **beginning** of the story.",
            correctAnswer: "beginning"
        },
        {
            id: "13d-q20",
            type: "fill-in-the-blank",
            question: "20. Do you know the **origin** of the word *boycott*?",
            correctAnswer: "origin"
        }
    ]
};

export const b6_l13_story_passage: Story = {
    id: "b6-l13-passage",
    title: "Reading Passage: The Ship of the Desert",
    type: "non-fiction",
    content: `
Picture a long line of camels **wending** its way slowly across the skyline. This sight was once a common one in the North African and Arabian deserts. The animals are dromedaries, the kind of camel most familiar to people in the West. The Bedouins, the migrant people of the Arabian and Sahara deserts, call the dromedary "the ship of the desert." This creature has **transported** goods and people over some of the most arid regions in the world for thousands of years.

Bearing its burden patiently, and seemingly **oblivious** to hunger and thirst, the dromedary can keep up a steady, plodding **gait** over great distances. It can travel fifty miles a day for up to five days without showing signs of **fatigue**. When it reaches water, it **quenches** its thirst by drinking as much as fifteen gallons at a time. When food is not available, it lives on the fat stored in its hump. The hump is not filled with water as some people think. The dromedary's hump fills out and is quite **prominent** when the animal is well fed; it gets smaller as the fat stored inside is **depleted**.

The dromedary is very well **adapted** to life in the desert. Its broad feet do not sink into soft sand. It can close its nostrils completely during sandstorms while protecting its eyes with double rows of eyelashes. The dromedary is comfortable in the **searing** heat of the desert. It will stretch out in the full **glare** of the noonday sun even though shade may be available. The dromedary is capable of carrying up to six hundred pounds on its back. It knows its limits, though. If given too heavy a burden, it will obstinately refuse to budge until the load is lightened.

Closely related to the dromedary is the Bactrian camel. Its **habitat** is the cold desert regions of Siberia in central Asia. The Bactrian camel is smaller and sturdier than the dromedary. It has shorter legs and is covered with long, shaggy hair. Its coat protects it from the **rigorous** Siberian climate. But the most obvious difference between the two types of camel is their humps. The dromedary has a single hump; the Bactrian camel has two. Although both kinds have been domesticated for thousands of years, the Bactrian camel, unlike its cousin, is still found in the wild. d

To the Bedouins and the migrant people of central Asia, the dromedary and Bactrian camel are much more than beasts of burden. Their hair provides wool for making clothes and carpets; their hides can be used to make tents and footwear; they can be milked like cows; and their meat, which tastes like veal or beef, forms an important part of these peoples' diets.

In spite of their great versatility, both kinds of camels are becoming **outmoded** means of transportation. Four-wheel-drive vehicles are more **efficient**; they can travel faster and further and carry heavier loads. That long line of camels wending its way across the Arabian desert is disappearing from the modern world. Like the American wagon train that headed west in the 1800s, it may someday be seen only in the movies.
    `,
    wordsIncluded: b6_l13_words.map(w => w.id),
    questions: [
        {
            id: "b6-l13-p-q1",
            type: "multiple-choice",
            question: "What is the meaning of **wending** as it is used in the passage?",
            options: [
                "Traveling slowly along a route.",
                "Running quickly.",
                "Getting lost.",
                "Stopping frequently."
            ],
            correctAnswer: "Traveling slowly along a route."
        },
        {
            id: "b6-l13-p-q2",
            type: "multiple-choice",
            question: "Why do the Bedouins call the dromedary 'the ship of the desert'?",
            options: [
                "It has **transported** goods and people over arid regions for thousands of years.",
                "It sways like a ship when it walks.",
                "It can float on water.",
                "It is as large as a ship."
            ],
            correctAnswer: "It has **transported** goods and people over arid regions for thousands of years."
        },
        {
            id: "b6-l13-p-q3",
            type: "multiple-choice",
            question: "How does the passage describe the dromedary's attitude toward hunger and thirst?",
            options: [
                "It seems **oblivious** to them.",
                "It complains loudly.",
                "It refuses to move.",
                "It becomes aggressive."
            ],
            correctAnswer: "It seems **oblivious** to them."
        },
        {
            id: "b6-l13-p-q4",
            type: "multiple-choice",
            question: "What kind of **gait** does the dromedary maintain over great distances?",
            options: [
                "A steady, plodding one.",
                "A fast gallop.",
                "A clumsy shuffle.",
                "A graceful trot."
            ],
            correctAnswer: "A steady, plodding one."
        },
        {
            id: "b6-l13-p-q5",
            type: "multiple-choice",
            question: "How far can a dromedary travel without showing signs of **fatigue**?",
            options: [
                "Fifty miles a day for up to five days.",
                "Ten miles a day.",
                "One hundred miles without stopping.",
                "It gets tired after one hour."
            ],
            correctAnswer: "Fifty miles a day for up to five days."
        },
        {
            id: "b6-l13-p-q6",
            type: "multiple-choice",
            question: "How does a dromedary **quench** its thirst when water is available?",
            options: [
                "By drinking as much as fifteen gallons at a time.",
                "By sipping slowly.",
                "By absorbing moisture through its skin.",
                "It never drinks water."
            ],
            correctAnswer: "By drinking as much as fifteen gallons at a time."
        },
        {
            id: "b6-l13-p-q7",
            type: "multiple-choice",
            question: "When is the dromedary's hump most **prominent**?",
            options: [
                "When the animal is well fed.",
                "When the animal is starving.",
                "When the animal is young.",
                "When the animal is sleeping."
            ],
            correctAnswer: "When the animal is well fed."
        },
        {
            id: "b6-l13-p-q8",
            type: "multiple-choice",
            question: "What happens to the hump as the fat stored inside is **depleted**?",
            options: [
                "It gets smaller.",
                "It gets larger.",
                "It changes color.",
                "It falls off."
            ],
            correctAnswer: "It gets smaller."
        },
        {
            id: "b6-l13-p-q9",
            type: "multiple-choice",
            question: "How is the dromedary **adapted** to the desert sand?",
            options: [
                "Its broad feet do not sink into soft sand.",
                "It has wheels instead of feet.",
                "It flies over the sand.",
                "It digs tunnels under the sand."
            ],
            correctAnswer: "Its broad feet do not sink into soft sand."
        },
        {
            id: "b6-l13-p-q10",
            type: "multiple-choice",
            question: "How does the dromedary deal with the **searing** heat of the desert?",
            options: [
                "It is comfortable and will stretch out in the full sun.",
                "It hides in caves during the day.",
                "It pants like a dog to cool down.",
                "It sweats profusely."
            ],
            correctAnswer: "It is comfortable and will stretch out in the full sun."
        },
        {
            id: "b6-l13-p-q11",
            type: "multiple-choice",
            question: "What allows the dromedary to handle the full **glare** of the noonday sun?",
            options: [
                "Its ability to withstand heat and light.",
                "It wears sunglasses.",
                "It keeps its eyes closed at all times.",
                "It only travels at night."
            ],
            correctAnswer: "Its ability to withstand heat and light."
        },
        {
            id: "b6-l13-p-q12",
            type: "multiple-choice",
            question: "What is the **habitat** of the Bactrian camel?",
            options: [
                "The cold desert regions of Siberia in central Asia.",
                "The hot Sahara desert.",
                "The rainforests of South America.",
                "The mountains of Europe."
            ],
            correctAnswer: "The cold desert regions of Siberia in central Asia."
        },
        {
            id: "b6-l13-p-q13",
            type: "multiple-choice",
            question: "How does the Bactrian camel handle the **rigorous** Siberian climate?",
            options: [
                "Its long, shaggy hair coats protects it.",
                "It migrates south for the winter.",
                "It builds warm nests.",
                "It hibernates underground."
            ],
            correctAnswer: "Its long, shaggy hair coats protects it."
        },
        {
            id: "b6-l13-p-q14",
            type: "multiple-choice",
            question: "Why are camels becoming **outmoded** means of transportation?",
            options: [
                "Because four-wheel-drive vehicles are more **efficient**.",
                "Because they are too dangerous to ride.",
                "Because there are no more camels left.",
                "Because people prefer to walk."
            ],
            correctAnswer: "Because four-wheel-drive vehicles are more **efficient**."
        },
        {
            id: "b6-l13-p-q15",
            type: "multiple-choice",
            question: "What is one way four-wheel-drive vehicles are more **efficient** than camels?",
            options: [
                "They can travel faster and further and carry heavier loads.",
                "They use less fuel.",
                "They are cheaper to buy.",
                "They look cooler."
            ],
            correctAnswer: "They can travel faster and further and carry heavier loads."
        }
    ]
};

export const b6_l13_story_facts: Story = {
    id: "b6-l13-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Adapt** means "to change in order to fit new conditions" or "to make changes in, so as to be of use." *Adopt* means "to take into one's family." (Childless couples often would like to *adopt* a child.) *Adopt* also means "to take and use as one's own." (The English writer Mary Ann Evans *adopted* the name George Eliot because women novelists were not taken seriously in mid-nineteenth-century England.) *Adapt* and *adopt* can be confused because their meanings overlap slightly. It is possible to *adopt* someone else's idea and then *adapt* it so as to improve it or use it for a different purpose.

* A **gait** is a manner or way of walking. A person in a hurry may walk with a fast *gait*. A sailor, used to being on a ship, may walk with a rolling *gait*.
A *gate* is a hinged door in a fence or wall. The words *gait* and *gate* are homophones.

* Don't confuse **oblivious** with *obvious*, which means "easy to see or understand." (The answers to the questions were *obvious* to anyone who had read the book.)
*Oblivious* always has either *of* or *to* after it. (I was *oblivious of* the danger. The principal remained *oblivious to* the need for change.)

* **Fatigue** is a French word that comes from the Latin verb *fatigare*, which means "to tire." *Fatigue* has been taken into English with its spelling and pronunciation unchanged.
This word has two other meanings, which are used in the military. *Fatigue* is domestic duty performed by people in the military; *fatigues* are special clothing worn by military personnel while performing these tasks and while in the field.
    `,
    wordsIncluded: ["adapt", "gait", "oblivious", "fatigue"],
    questions: []
};
