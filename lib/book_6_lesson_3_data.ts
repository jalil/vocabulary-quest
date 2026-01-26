import { Story, VocabularyWord } from "./types";

export const b6_l3_words: VocabularyWord[] = [
    {
        id: "abundant",
        word: "abundant",
        definition: "(adj.) More than enough; plentiful. abundance (n.) A great amount.",
        exampleSentence: "If good weather continues, farmers can expect an abundant harvest.",
        imageEmoji: "🌊",
        category: "Grade 6"
    },
    {
        id: "arid",
        word: "arid",
        definition: "(adj.) Having little or no rainfall; very dry.",
        exampleSentence: "Much of North Africa is arid land.",
        imageEmoji: "🌵",
        category: "Grade 6"
    },
    {
        id: "distinct",
        word: "distinct",
        definition: "(adj.) 1. Not the same; different or separate. 2. Unmistakable; definite.",
        exampleSentence: "Apples come in over two thousand distinct varieties.",
        imageEmoji: "🍎",
        category: "Grade 6"
    },
    {
        id: "graze",
        word: "graze",
        definition: "(v.) 1. To feed on growing grass. 2. To touch lightly in passing.",
        exampleSentence: "A small herd of cows grazed in the meadow.",
        imageEmoji: "🐄",
        category: "Grade 6"
    },
    {
        id: "hectic",
        word: "hectic",
        definition: "(adj.) Full of feverish activity, haste, or confusion.",
        exampleSentence: "After a hectic week of sightseeing, the tourists were glad to go home and relax.",
        imageEmoji: "🤯",
        category: "Grade 6"
    },
    {
        id: "horde",
        word: "horde",
        definition: "(n.) A large group or crowd, especially one on the move.",
        exampleSentence: "Hordes of swimmers head for the pool in summer.",
        imageEmoji: "👥",
        category: "Grade 6"
    },
    {
        id: "humid",
        word: "humid",
        definition: "(adj.) Having a large amount of water or moisture in the air. humidity (n.) The amount of moisture in the air.",
        exampleSentence: "Residents of Hong Kong escape the hot, humid weather by going inside where it is cool and dry.",
        imageEmoji: "😓",
        category: "Grade 6"
    },
    {
        id: "incredible",
        word: "incredible",
        definition: "(adj.) Hard or impossible to believe.",
        exampleSentence: "It seems incredible that humans and stars are made of the same stuff.",
        imageEmoji: "😲",
        category: "Grade 6"
    },
    {
        id: "inhabit",
        word: "inhabit",
        definition: "(v.) To live in or on. inhabitant (n.) A person or animal that lives in a certain place.",
        exampleSentence: "Millions of bison once inhabited the great plains of America.",
        imageEmoji: "🏠",
        category: "Grade 6"
    },
    {
        id: "peninsula",
        word: "peninsula",
        definition: "(n.) A piece of land, connected to a larger land mass, that juts out and is almost completely surrounded by water.",
        exampleSentence: "Bays along the Baja peninsula provide shelter for several kinds of whales.",
        imageEmoji: "🏝️",
        category: "Grade 6"
    },
    {
        id: "rural",
        word: "rural",
        definition: "(adj.) Of or relating to the country and the people who live there.",
        exampleSentence: "The villagers believe that a shopping mall has no place in a rural area.",
        imageEmoji: "🚜",
        category: "Grade 6"
    },
    {
        id: "sanctuary",
        word: "sanctuary",
        definition: "(n.) 1. A place of safety or shelter. 2. Protection offered by such a place.",
        exampleSentence: "The neighboring country was a sanctuary to those who were being persecuted.",
        imageEmoji: "🕊️",
        category: "Grade 6"
    },
    {
        id: "splendor",
        word: "splendor",
        definition: "(n.) Magnificence; brilliance of appearance. splendid (adj.) Very impressive; magnificent.",
        exampleSentence: "The splendor of the palace at Versailles took our breath away.",
        imageEmoji: "🏰",
        category: "Grade 6"
    },
    {
        id: "squalor",
        word: "squalor",
        definition: "(n.) Filth; misery. squalid (adj.) Dirty and unfit for living, especially as a result of neglect.",
        exampleSentence: "People lived in squalor after their homes were destroyed by the hurricane.",
        imageEmoji: "🗑️",
        category: "Grade 6"
    },
    {
        id: "terrain",
        word: "terrain",
        definition: "(n.) 1. An area of land; a region. 2. The surface features of a region.",
        exampleSentence: "After hiking for several days, we knew the terrain quite well.",
        imageEmoji: "⛰️",
        category: "Grade 6"
    }
];

export const b6_l3_story_1: Story = {
    id: "b6-l3-s1",
    title: "3A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 3.`,
    wordsIncluded: b6_l3_words.map(w => w.id),
    questions: [
        {
            id: "3a-q1",
            type: "multiple-choice",
            question: "1. (a) Squalid areas are those (c) Rural areas are those (b) with little rainfall. (d) away from large cities.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "c-d"
        },
        {
            id: "3a-q2",
            type: "multiple-choice",
            question: "2. (a) a place where prisoners are held before trial. (c) A sanctuary is (b) land almost completely surrounded by water. (d) A peninsula is",
            options: ["a-c", "b-d", "c-a", "d-b"],
            correctAnswer: "d-b"
        },
        {
            id: "3a-q3",
            type: "multiple-choice",
            question: "3. (a) Something that is abundant is (c) Something that is incredible is (b) hard to understand. (d) hard to believe.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "c-d"
        },
        {
            id: "3a-q4",
            type: "multiple-choice",
            question: "4. (a) dampness in the air. (c) Humidity is (b) Terrain is (d) the condition of being hot.",
            options: ["a-b", "c-a", "b-d", "c-d"], // Wait, Humidity is dampness in the air.
            correctAnswer: "c-a"
        },
        {
            id: "3a-q5",
            type: "multiple-choice",
            question: "5. (a) A squalid building is (c) one that is not lived in. (b) A splendid building is (d) one that is dirty and neglected.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "a-d"
        },
        {
            id: "3a-q6",
            type: "multiple-choice",
            question: "6. (a) A horde is (c) An abundance is (b) a place where one may find safety. (d) a large crowd on the move.",
            options: ["a-b", "c-d", "a-d", "c-b"],
            correctAnswer: "a-d"
        },
        {
            id: "3a-q7",
            type: "multiple-choice",
            question: "7. (a) A splendid change is (c) one that goes unnoticed. (b) A distinct change is (d) one that is unmistakable.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "b-d"
        },
        {
            id: "3a-q8",
            type: "multiple-choice",
            question: "8. (a) Sanctuary is (c) Terrain is (b) the surface features of an area. (d) a lack of confidence in oneself.",
            options: ["a-b", "c-b", "a-d", "c-d"],
            correctAnswer: "c-b"
        }
    ]
};

export const b6_l3_story_2: Story = {
    id: "b6-l3-s2",
    title: "3B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l3_words.map(w => w.id),
    questions: [
        {
            id: "3b-q1",
            type: "multiple-choice",
            question: "The Underground Railroad offered a **place of shelter** to enslaved people who were escaping to freedom.",
            options: ["sanctuary", "peninsula", "horde", "splendor"],
            correctAnswer: "sanctuary"
        },
        {
            id: "3b-q2",
            type: "multiple-choice",
            question: "The first ball from the pitcher **just barely hit** the batter’s shoulder.",
            options: ["grazed", "inhabited", "stifled", "evolved"],
            correctAnswer: "grazed"
        },
        {
            id: "3b-q3",
            type: "multiple-choice",
            question: "The **large numbers** of fans surrounded the stage door waiting for autographs.",
            options: ["hordes", "sanctuaries", "terrains", "peninsulas"],
            correctAnswer: "hordes"
        },
        {
            id: "3b-q4",
            type: "multiple-choice",
            question: "Pitcairn Island has fewer than fifty **people who make their homes there**.",
            options: ["inhabitants", "hordes", "anticipations", "sanctuaries"],
            correctAnswer: "inhabitants"
        },
        {
            id: "3b-q5",
            type: "multiple-choice",
            question: "Her life was **full of feverish activity** because she had soccer practice every day and a big test coming up.",
            options: ["hectic", "arid", "humid", "distinct"],
            correctAnswer: "hectic"
        },
        {
            id: "3b-q6",
            type: "multiple-choice",
            question: "Mark Twain wrote mostly about **life away from the cities and towns** of America.",
            options: ["rural", "urban", "hectic", "squalid"],
            correctAnswer: "rural"
        },
        {
            id: "3b-q7",
            type: "multiple-choice",
            question: "The sounds of a flute and a trombone are quite **different from each other**, so you can easily tell them apart.",
            options: ["distinct", "abundant", "incredible", "humid"],
            correctAnswer: "distinct"
        },
        {
            id: "3b-q8",
            type: "multiple-choice",
            question: "Few crops can be grown where the land is **very dry and gets little rain**.",
            options: ["arid", "humid", "fertile", "rural"],
            correctAnswer: "arid"
        },
        {
            id: "3b-q9",
            type: "multiple-choice",
            question: "Monet’s later paintings capture the **magnificent appearance** of his garden at Giverny.",
            options: ["splendor", "squalor", "terrain", "sanctuary"],
            correctAnswer: "splendor"
        },
        {
            id: "3b-q10",
            type: "multiple-choice",
            question: "Italy is a large **country that is almost completely surrounded by water**.",
            options: ["peninsula", "sanctuary", "island", "terrain"],
            correctAnswer: "peninsula"
        },
        {
            id: "3b-q11",
            type: "multiple-choice",
            question: "The rough **surface features of the land** made travel difficult.",
            options: ["terrain", "horde", "splendor", "peninsula"],
            correctAnswer: "terrain"
        },
        {
            id: "3b-q12",
            type: "multiple-choice",
            question: "Crops grow in **quantities that provide more than is needed** in such fertile soil.",
            options: ["abundance", "squalor", "humidity", "splendor"],
            correctAnswer: "abundance"
        }
    ]
};

export const b6_l3_story_3: Story = {
    id: "b6-l3-s3",
    title: "3C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l3_words.map(w => w.id),
    questions: [
        {
            id: "3c-q1",
            type: "multiple-choice",
            question: "1. Which of the following animals **graze**?",
            options: ["(a) crocodiles", "(b) sheep", "(c) horses", "(d) cats"],
            correctAnswers: ["(b) sheep", "(c) horses"]
        },
        {
            id: "3c-q2",
            type: "multiple-choice",
            question: "2. Which of the following would you find in an **arid** region?",
            options: ["(a) ponds", "(b) streams", "(c) snow", "(d) cactus plants"],
            correctAnswers: ["(d) cactus plants"]
        },
        {
            id: "3c-q3",
            type: "multiple-choice",
            question: "3. Which of the following are **abundant**?",
            options: ["(a) fish in the sea", "(b) water in the desert", "(c) food at a feast", "(d) trees in a forest"],
            correctAnswers: ["(a) fish in the sea", "(c) food at a feast", "(d) trees in a forest"]
        },
        {
            id: "3c-q4",
            type: "multiple-choice",
            question: "4. Which of the following might be found in **hordes**?",
            options: ["(a) tourists", "(b) ants", "(c) eagles", "(d) water"],
            correctAnswers: ["(a) tourists", "(b) ants"]
        },
        {
            id: "3c-q5",
            type: "multiple-choice",
            question: "5. Which of the following might live in **splendor**?",
            options: ["(a) a supreme ruler", "(b) a famous movie star", "(c) a coal miner", "(d) a person in custody"],
            correctAnswers: ["(a) a supreme ruler", "(b) a famous movie star"]
        },
        {
            id: "3c-q6",
            type: "multiple-choice",
            question: "6. Which of the following places might be **hectic**?",
            options: ["(a) a restaurant's kitchen", "(b) backstage on opening night", "(c) an airport over a holiday", "(d) a mall on a day in December"],
            correctAnswers: ["(a) a restaurant's kitchen", "(b) backstage on opening night", "(c) an airport over a holiday", "(d) a mall on a day in December"]
        },
        {
            id: "3c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might **inhabit** a tropical island?",
            options: ["(a) ice sculptors", "(b) penguins", "(c) polar bears", "(d) monkeys"],
            correctAnswers: ["(d) monkeys"]
        },
        {
            id: "3c-q8",
            type: "multiple-choice",
            question: "8. Which of the following could cause one to seek **sanctuary**?",
            options: ["(a) fear", "(b) danger", "(c) happiness", "(d) safety"],
            correctAnswers: ["(a) fear", "(b) danger"]
        }
    ]
};

export const b6_l3_story_4: Story = {
    id: "b6-l3-s4",
    title: "3D Word Study: Analogies",
    type: "exercise",
    content: `**Analogies** test your understanding of the relationship between pairs of words. Example:
    
**HOT : COLD ::**
(a) hungry : tired
(b) light : heavy

When we read the analogy we say, "*Hot* is to *cold* as *light* is to *heavy*."

The relationship between **HOT** and **COLD** is that they are opposites, or antonyms. So, to find the answer, look for a pair of words that are also opposites. *Light* and *heavy* are opposites.

**HINT!** Keep antonyms in mind as you do this exercise.`,
    wordsIncluded: b6_l3_words.map(w => w.id),
    questions: [
        {
            id: "3d-q1",
            type: "multiple-choice",
            question: "1. HUMID : ARID ::",
            options: ["(a) square : round", "(b) sloppy : careless", "(c) thirsty : hungry", "(d) wet : dry"],
            correctAnswer: "(d) wet : dry"
        },
        {
            id: "3d-q2",
            type: "multiple-choice",
            question: "2. SPLENDID : SQUALID ::",
            options: ["(a) attractive : ugly", "(b) loud : noisy", "(c) lofty : towering", "(d) lonely : alone"],
            correctAnswer: "(a) attractive : ugly"
        },
        {
            id: "3d-q3",
            type: "multiple-choice",
            question: "3. POVERTY : WEALTH ::",
            options: ["(a) love : marriage", "(b) sickness : health", "(c) age : beauty", "(d) affection : friend"],
            correctAnswer: "(b) sickness : health"
        },
        {
            id: "3d-q4",
            type: "multiple-choice",
            question: "4. ARROGANT : HUMBLE ::",
            options: ["(a) cruel : kind", "(b) hectic : eloquent", "(c) abundant : plentiful", "(d) friendly : loving"],
            correctAnswer: "(a) cruel : kind"
        },
        {
            id: "3d-q5",
            type: "multiple-choice",
            question: "5. AFFECTIONATE : HATEFUL ::",
            options: ["(a) loud : noisy", "(b) colorful : bright", "(c) afraid : terrified", "(d) abundant : scarce"],
            correctAnswer: "(d) abundant : scarce"
        },
        {
            id: "3d-q6",
            type: "multiple-choice",
            question: "6. VACATE : OCCUPY ::",
            options: ["(a) release : detain", "(b) graze : touch", "(c) appeal : demand", "(d) exhibit : show"],
            correctAnswer: "(a) release : detain"
        }
    ]
};

export const b6_l3_story_passage: Story = {
    id: "b6-l3-passage",
    title: "Reading Passage: Land of Contrasts",
    type: "non-fiction",
    content: `
Thailand is a country about the size of France, with a population of over sixty-five million people. About fifty percent of the people live in **rural** areas, away from Bangkok, the nation's capital and its only major city. Tourism is the country's top industry. Every year visitors from all over the world vacation in Bangkok, but most of them leave without seeing the rest of this fascinating country. This is a pity, for Thailand is a land of startling contrasts. It is made up of four **distinct** regions.

The northwestern region is the least accessible part of the country because of its mountainous **terrain** and many forests. Tigers, leopards, bears, and monkeys **inhabit** the more remote areas. Deer and buffalo **graze** on the grasslands that cover the lower slopes of the mountains. One of the world's great wildlife **sanctuaries** is located near the city of Chiang Mai. Its population is only a small fraction of Bangkok's. The two most important industries in this part of the country are lumber and tin mining.

The northeastern part of Thailand is vastly different from the northwestern part. It is by far the poorest region. Few crops grow there because of its **arid** climate and barren soil. Poor highways and a lack of railroads add to its problems. This region has little industry, and most of its people live in poverty. Many have left the land hoping to find work in Bangkok.

The most prosperous region is the great central plain. There the soil is fertile and crops grow in **abundance**. Farmers produce enough rice to feed the people of Thailand and still have some for export. Other crops include cotton, sugar, corn, tobacco, and peanuts. Bangkok is located on the southern edge of the central plain. It is a modern city with huge luxury hotels that have sprung up in recent years to accommodate the ever-increasing **hordes** of tourists. Many of them visit Bangkok to explore its rich cultural history. Among the city's attractions are over four hundred Buddhist temples and numerous universities. There is also a huge Grand Palace where the rulers of Thailand once lived in luxury. Not all of the capital is **splendid**, though. Tourists seldom stray from the downtown area, with its many expensive shops and fine restaurants. But not far off are the more **squalid** parts of Bangkok. There the city's poor live in overcrowded conditions.

The fourth distinctive region is the southern part of the country. It reaches to the Malaysian **peninsula**, within five hundred miles of the equator. This part of Thailand is mostly tropical rainforest, with a **humid** climate and over two hundred inches of rain a year. It has an **incredible** variety of plant and animal life. For example, over one thousand different kinds of butterflies live there! It also has some of the finest beaches in the world to lure those tourists seeking a change from the **hectic** city life of Bangkok.

Visitors who spend a week or two in Bangkok may go home and tell their families and friends that they have seen Thailand. However, only those who have explored all four regions of the country can truly say, "I have seen Thailand."
    `,
    wordsIncluded: b6_l3_words.map(w => w.id),
    questions: [
        {
            id: "b6-l3-p-q1",
            type: "multiple-choice",
            question: "What is the meaning of **terrain** as it is used in the passage?",
            options: [
                "It means the surface features of the land.",
                "It means a type of vehicle.",
                "It means the weather conditions.",
                "It means a political boundary."
            ],
            correctAnswer: "It means the surface features of the land."
        },
        {
            id: "b6-l3-p-q2",
            type: "multiple-choice",
            question: "Why would many people in Thailand be unaccustomed to city life?",
            options: [
                "Because about fifty percent live in rural areas.",
                "Because they are forbidden from entering cities.",
                "Because cities don't exist in Thailand.",
                "Because they prefer the ocean."
            ],
            correctAnswer: "Because about fifty percent live in rural areas."
        },
        {
            id: "b6-l3-p-q3",
            type: "multiple-choice",
            question: "Which parts of Bangkok would *not* be shown in tourist brochures?",
            options: [
                "The squalid parts where the poor live.",
                "The Grand Palace.",
                "The luxury hotels.",
                "The Buddhist temples."
            ],
            correctAnswer: "The squalid parts where the poor live."
        },
        {
            id: "b6-l3-p-q4",
            type: "multiple-choice",
            question: "Why have so many large new hotels been built in Bangkok?",
            options: [
                "To accommodate the hordes of tourists.",
                "To house the homeless.",
                "To serve as government offices.",
                "To replace old temples."
            ],
            correctAnswer: "To accommodate the hordes of tourists."
        },
        {
            id: "b6-l3-p-q5",
            type: "multiple-choice",
            question: "Why would you expect daily life in Bangkok to be more **hectic** than in Chiang Mai?",
            options: [
                "Bangkok is a modern major city with many tourists, while Chiang Mai is smaller and in a more remote area.",
                "Chiang Mai is the capital city.",
                "Bangkok has no cars.",
                "People in Bangkok sleep all day."
            ],
            correctAnswer: "Bangkok is a modern major city with many tourists, while Chiang Mai is smaller and in a more remote area."
        },
        {
            id: "b6-l3-p-q6",
            type: "multiple-choice",
            question: "How can you tell that no one in Malaysia lives far from the sea?",
            options: [
                "It is on a peninsula.",
                "It is an island.",
                "It is a desert.",
                "It is underwater."
            ],
            correctAnswer: "It is on a peninsula."
        },
        {
            id: "b6-l3-p-q7",
            type: "multiple-choice",
            question: "What is one of the most **splendid** sights in Bangkok?",
            options: [
                "The Grand Palace.",
                "The squalid slums.",
                "The traffic jams.",
                "The airport."
            ],
            correctAnswer: "The Grand Palace."
        },
        {
            id: "b6-l3-p-q8",
            type: "multiple-choice",
            question: "Why would Thailand's tropical rainforest be a good place to make a nature film?",
            options: [
                "It has an incredible variety of plant and animal life.",
                "It is completely empty of life.",
                "It has snowy mountains.",
                "It is very dry and easy to film in."
            ],
            correctAnswer: "It has an incredible variety of plant and animal life."
        },
        {
            id: "b6-l3-p-q9",
            type: "multiple-choice",
            question: "What is the meaning of **distinct** as it is used in the passage?",
            options: [
                "It means separate or different.",
                "It means clear and loud.",
                "It means similar.",
                "It means confusing."
            ],
            correctAnswer: "It means separate or different."
        },
        {
            id: "b6-l3-p-q10",
            type: "multiple-choice",
            question: "What is an example of Thailand's **abundance** of animal life?",
            options: [
                "Over one thousand kinds of butterflies live in the south.",
                "There are no animals in Thailand.",
                "Only one type of bird lives there.",
                "Tigers are extinct there."
            ],
            correctAnswer: "Over one thousand kinds of butterflies live in the south."
        },
        {
            id: "b6-l3-p-q11",
            type: "multiple-choice",
            question: "What is the meaning of **sanctuary** as it is used in the passage?",
            options: [
                "It means a place of safety or shelter (for wildlife).",
                "It means a holy place.",
                "It means a dangerous place.",
                "It means a marketplace."
            ],
            correctAnswer: "It means a place of safety or shelter (for wildlife)."
        },
        {
            id: "b6-l3-p-q12",
            type: "multiple-choice",
            question: "Which of the four regions of Thailand gets the least amount of rain?",
            options: [
                "The northeastern part (arid climate).",
                "The southern part (rainforest).",
                "The central plain.",
                "The northwestern region."
            ],
            correctAnswer: "The northeastern part (arid climate)."
        },
        {
            id: "b6-l3-p-q13",
            type: "multiple-choice",
            question: "How many **inhabitants** does Thailand have?",
            options: [
                "Over sixty-five million.",
                "One million.",
                "Ten thousand.",
                "One billion."
            ],
            correctAnswer: "Over sixty-five million."
        },
        {
            id: "b6-l3-p-q14",
            type: "multiple-choice",
            question: "Why would you be likely to sweat a lot in the rainforest?",
            options: [
                "It has a humid climate.",
                "It is very cold.",
                "It is very windy.",
                "It is always night."
            ],
            correctAnswer: "It has a humid climate."
        },
        {
            id: "b6-l3-p-q15",
            type: "multiple-choice",
            question: "What is the meaning of **graze** as it is used in the passage?",
            options: [
                "It means to feed on growing grass.",
                "It means to touch lightly.",
                "It means to scratch.",
                "It means to sleep."
            ],
            correctAnswer: "It means to feed on growing grass."
        }
    ]
};

export const b6_l3_story_facts: Story = {
    id: "b6-l3-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Horde** comes from the Polish word *horda*, which in turn came from the Turkish word *ordu*, meaning "military camp" or "army." Centuries ago, the Turkish Mongols swept across Asia and eastern Europe in vast numbers, conquering the people in those areas. The word *horde* came to mean "a large number (of people) on the move." Don't confuse this word with *hoard*, which is a noun and means "a hidden supply or store." *Hoard* is also a verb that means "to save and store away in a greedy or secret manner." *Horde* and *hoard* are homophones; they sound the same but have different meanings and spellings.

* The antonym of **rural** is *urban*. New York City is a large *urban* center; upper New York State, with its many farms and small towns, is mostly **rural**.

* In Latin, *sanctus* means "holy," and the original meaning of **sanctuary** is "a holy place." Churches, temples, and mosques were considered **sanctuaries**; people in trouble with the law could find protection in such places because officers of the law would not enter them. The word **sanctuary** came to mean "protection offered by being in a holy place," and its meaning was later extended to include any place that offers safety. A bird **sanctuary**, for example, offers protection to the birds that nest there.
    `,
    wordsIncluded: ["horde", "rural", "sanctuary"],
    questions: []
};
