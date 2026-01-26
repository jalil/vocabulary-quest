import { Story, VocabularyWord } from "./types";

export const b4_l18_words: VocabularyWord[] = [
    {
        id: "abreast",
        word: "abreast",
        definition: "(adj. or adv.) 1. Side-by-side. 2. Up-to-date.",
        exampleSentence: "We walked three abreast, except where the path was so narrow that we had to walk single file.",
        imageEmoji: "👯",
        category: "Grade 4"
    },
    {
        id: "barrier",
        word: "barrier",
        definition: "(n.) Anything that stops progress or blocks the way.",
        exampleSentence: "Lack of education is often a barrier to success in life.",
        imageEmoji: "🚧",
        category: "Grade 4"
    },
    {
        id: "breadth",
        word: "breadth",
        definition: "(n.) 1. The distance of something from side to side; width. 2. Wide range; largeness.",
        exampleSentence: "The arrow missed the target by no more than a hand's breadth.",
        imageEmoji: "📏",
        category: "Grade 4"
    },
    {
        id: "capital",
        word: "capital",
        definition: "(n.) 1. Wealth that can be used to produce more wealth. 2. The city where the government of a state or country is located. (adj.) Punishable by death.",
        exampleSentence: "You don't need much capital to buy that pizza business.",
        imageEmoji: "💰",
        category: "Grade 4"
    },
    {
        id: "ensure",
        word: "ensure",
        definition: "(v.) To make sure or certain.",
        exampleSentence: "Wearing a seat belt will help ensure your safety in case of an accident.",
        imageEmoji: "✅",
        category: "Grade 4"
    },
    {
        id: "external",
        word: "external",
        definition: "(adj.) On or related to the outside.",
        exampleSentence: "The external walls of the building are brick.",
        imageEmoji: "🧱",
        category: "Grade 4"
    },
    {
        id: "feud",
        word: "feud",
        definition: "(n.) A long, bitter quarrel, especially between two families. (v.) To be enemies, to quarrel.",
        exampleSentence: "We did not want the argument between neighbors to turn into a feud.",
        imageEmoji: "⚔️",
        category: "Grade 4"
    },
    {
        id: "fortress",
        word: "fortress",
        definition: "(n.) A building with strong walls made to be defended against attack; a fort.",
        exampleSentence: "Rather than attack the fortress directly, the invaders went around it.",
        imageEmoji: "🏰",
        category: "Grade 4"
    },
    {
        id: "frequent",
        word: "frequent",
        definition: "(adj.) Happening often or over and over. (v.) To go to over and over. (n.) frequency: The number of times something is repeated.",
        exampleSentence: "My mother's business requires her to make frequent visits to Japan.",
        imageEmoji: "🔄",
        category: "Grade 4"
    },
    {
        id: "frontier",
        word: "frontier",
        definition: "(n.) 1. The line between two countries. 2. The outer limits of the settled part of a country. 3. The outer limits of knowledge.",
        exampleSentence: "We said goodbye to France and crossed the frontier into Spain in the early morning.",
        imageEmoji: "🗺️",
        category: "Grade 4"
    },
    {
        id: "peasant",
        word: "peasant",
        definition: "(n.) A person who makes a living from working the soil, especially historically or in poorer countries.",
        exampleSentence: "The peasants of the Middle Ages worked hard to feed their families.",
        imageEmoji: "🌾",
        category: "Grade 4"
    },
    {
        id: "petty",
        word: "petty",
        definition: "(adj.) Of little importance; small.",
        exampleSentence: "A petty disagreement over a game of kickball led to an argument.",
        imageEmoji: "🤏",
        category: "Grade 4"
    },
    {
        id: "threat",
        word: "threat",
        definition: "(n.) A warning that one may do harm. (v.) threaten: To make a threat. (adj.) threatening: Suggesting harm or danger.",
        exampleSentence: "Olivia tried to quiet her dog after her neighbor's threat to call the police.",
        imageEmoji: "⚠️",
        category: "Grade 4"
    },
    {
        id: "utilize",
        word: "utilize",
        definition: "(v.) To put to use.",
        exampleSentence: "We utilized whatever scraps of fabric we had to make a costume.",
        imageEmoji: "🔧",
        category: "Grade 4"
    },
    {
        id: "vast",
        word: "vast",
        definition: "(adj.) Very great in area or amount.",
        exampleSentence: "The Pacific Ocean is a vast body of water.",
        imageEmoji: "🌊",
        category: "Grade 4"
    }
];

export const b4_l18_story_1: Story = {
    id: "b4-l18-s1",
    title: "18A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select Correct (C). If the word is used incorrectly, select Incorrect (I).`,
    wordsIncluded: b4_l18_words.map(w => w.id),
    questions: [
        {
            id: "18a-q1",
            type: "multiple-choice",
            question: "1. (a) Lovers of corn muffins **frequent** the local bakery.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q1b",
            type: "multiple-choice",
            question: "1. (b) Jerri's **frequent** visits to the hospital were hard on her.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q1c",
            type: "multiple-choice",
            question: "1. (c) Every **frequency** sang louder than we thought possible.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "18a-q1d",
            type: "multiple-choice",
            question: "1. (d) The **frequency** of the crowd was over a thousand.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // magnitude/size?
        },
        {
            id: "18a-q2",
            type: "multiple-choice",
            question: "2. (a) The scoundrel's **threats** are serious.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q2b",
            type: "multiple-choice",
            question: "2. (b) I **threatened** to call the police if they didn't turn down their music.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q2c",
            type: "multiple-choice",
            question: "2. (c) Our team was **threatened** with defeat unless we played better.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q2d",
            type: "multiple-choice",
            question: "2. (d) The **threatening** breakfast was the best I've had in a long time.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "18a-q3",
            type: "multiple-choice",
            question: "3. (a) The **frontiers** of the Roman Empire were under constant attack.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q3b",
            type: "multiple-choice",
            question: "3. (b) The **frontiers** crossed the street looking for Sam.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // volunteers?
        },
        {
            id: "18a-q3c",
            type: "multiple-choice",
            question: "3. (c) The bold woman wants to end all **frontiers**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Maybe, but context suggests "frontiers" as borders? Or limits? "End all frontiers" is weird. Usually "explore new frontiers". I'll mark Incorrect.
        },
        {
            id: "18a-q3d",
            type: "multiple-choice",
            question: "3. (d) They traveled by wagon to the **frontier** hoping for a better life.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q4",
            type: "multiple-choice",
            question: "4. (a) Sonya keeps **abreast** of the news through social media.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q4b",
            type: "multiple-choice",
            question: "4. (b) I had to stay **abreast** of the clock in order to beat my best time.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // ahead?
        },
        {
            id: "18a-q4c",
            type: "multiple-choice",
            question: "4. (c) The members try to stay **abreast** of each other by phone.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // in touch with?
        },
        {
            id: "18a-q4d",
            type: "multiple-choice",
            question: "4. (d) We strolled three **abreast** along the boardwalk.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q5",
            type: "multiple-choice",
            question: "5. (a) The **breadth** of the teacher's knowledge is amazing.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q5b",
            type: "multiple-choice",
            question: "5. (b) I waited until I got my **breadth** back before going on with the race.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // breath
        },
        {
            id: "18a-q5c",
            type: "multiple-choice",
            question: "5. (c) The **breadth** was made with flour and water and a little yeast.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // bread
        },
        {
            id: "18a-q5d",
            type: "multiple-choice",
            question: "5. (d) The **breadth** of the hole was almost two feet.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q6",
            type: "multiple-choice",
            question: "6. (a) No one living can remember how the **feud** started.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q6b",
            type: "multiple-choice",
            question: "6. (b) The two men picked up their **feuds** and began working.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // tools?
        },
        {
            id: "18a-q6c",
            type: "multiple-choice",
            question: "6. (c) Mr. Gonzalez **feuded** us for not showing up in class.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // scolded?
        },
        {
            id: "18a-q6d",
            type: "multiple-choice",
            question: "6. (d) The students took the time to divide into three separate **feuds**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // groups?
        },
        {
            id: "18a-q7",
            type: "multiple-choice",
            question: "7. (a) A **vast** country can be crossed by plane.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q7b",
            type: "multiple-choice",
            question: "7. (b) The water was stored in forty-gallon **vasts**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // vats
        },
        {
            id: "18a-q7c",
            type: "multiple-choice",
            question: "7. (c) The dancer's **vast** knowledge of ballet helped her win the audition.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q7d",
            type: "multiple-choice",
            question: "7. (d) No one was **vaster** than Aahil when it came to sports.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // faster
        },
        {
            id: "18a-q8",
            type: "multiple-choice",
            question: "8. (a) The **barriers** at the park were taken down.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q8b",
            type: "multiple-choice",
            question: "8. (b) The **barriers** are too heavy to move.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct" // Could be physical barriers.
        },
        {
            id: "18a-q8c",
            type: "multiple-choice",
            question: "8. (c) The mountains were the greatest **barrier** to those traveling west.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q8d",
            type: "multiple-choice",
            question: "8. (d) The twins were **barrier** than ever, now that they had been chosen.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // happier?
        },
        {
            id: "18a-q9",
            type: "multiple-choice",
            question: "9. (a) **External** voices came from outside.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q9b",
            type: "multiple-choice",
            question: "9. (b) An **external** organ like the skin is one that is outside the body.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q9c",
            type: "multiple-choice",
            question: "9. (c) The writer takes **external** notes before she writes.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // extensive? internal?
        },
        {
            id: "18a-q9d",
            type: "multiple-choice",
            question: "9. (d) The **external** dream woke me from a deep sleep.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // eternal? internal?
        },
        {
            id: "18a-q10",
            type: "multiple-choice",
            question: "10. (a) The **capital** of Ohio is Columbus.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q10b",
            type: "multiple-choice",
            question: "10. (b) The rate of **capital** crime is falling.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q10c",
            type: "multiple-choice",
            question: "10. (c) They raised the **capital** they needed by selling homemade bread.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "18a-q10d",
            type: "multiple-choice",
            question: "10. (d) The dome of the U.S. **Capital** is 288 feet high.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Capitol (building) vs Capital (city/money/adj). The building is Capitol.
        }
    ]
};

export const b4_l18_story_2: Story = {
    id: "b4-l18-s2",
    title: "18B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l18_words.map(w => w.id),
    questions: [
        {
            id: "18b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **menace**?",
            options: ["(a) threaten", "(b) ensure", "(c) wander", "(d) utilize"],
            correctAnswer: "(a) threaten"
        },
        {
            id: "18b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **castle**?",
            options: ["(a) ancient", "(b) tower", "(c) orchard", "(d) fortress"],
            correctAnswers: ["(b) tower", "(d) fortress"] // fortress is closest. Tower is part of it.
        },
        {
            id: "18b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **countryside**?",
            options: ["(a) newcomer", "(b) orchard", "(c) meadow", "(d) feud"],
            correctAnswers: ["(b) orchard", "(c) meadow"]
        },
        {
            id: "18b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **small**?",
            options: ["(a) familiar", "(b) humble", "(c) frequent", "(d) petty"],
            correctAnswers: ["(b) humble", "(d) petty"] // humble (plain/simple/modest or low rank), petty (small/unimportant). Correct.
        },
        {
            id: "18b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **put to use**?",
            options: ["(a) detest", "(b) utilize", "(c) threaten", "(d) wander"],
            correctAnswer: "(b) utilize"
        },
        {
            id: "18b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **unhappy**?",
            options: ["(a) forlorn", "(b) plain", "(c) shallow", "(d) dejected"],
            correctAnswers: ["(a) forlorn", "(d) dejected"]
        },
        {
            id: "18b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **plenty of room**?",
            options: ["(a) vast", "(b) external", "(c) spacious", "(d) frequent"],
            correctAnswers: ["(a) vast", "(c) spacious"]
        },
        {
            id: "18b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **money**?",
            options: ["(a) feud", "(b) shun", "(c) slay", "(d) capital"],
            correctAnswer: "(d) capital"
        },
        {
            id: "18b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **business**?",
            options: ["(a) contract", "(b) net", "(c) trophy", "(d) venture"],
            correctAnswers: ["(a) contract", "(b) net", "(d) venture"]
        },
        {
            id: "18b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **often**?",
            options: ["(a) frequent", "(b) petty", "(c) stout", "(d) humble"],
            correctAnswer: "(a) frequent"
        }
    ]
};

export const b4_l18_story_3: Story = {
    id: "b4-l18-s3",
    title: "18C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l18_words.map(w => w.id),
    questions: [
        {
            id: "18c-q1",
            type: "multiple-choice",
            question: "1. The **breadth**",
            options: [
                "(a) of the waterfall is 2,600 feet.",
                "(b) of the gap in the fence allowed us to peep outside.",
                "(c) is collected and stored for later use.",
                "(d) of a hair is extremely small."
            ],
            correctAnswers: ["(a) of the waterfall is 2,600 feet.", "(b) of the gap in the fence allowed us to peep outside.", "(d) of a hair is extremely small."]
        },
        {
            id: "18c-q2",
            type: "multiple-choice",
            question: "2. The **fortress**",
            options: [
                "(a) had a tower at each corner.",
                "(b) was large enough to cover the entire hill.",
                "(c) guarded the only road to the town.",
                "(d) was handwritten and was hard to read."
            ],
            correctAnswers: ["(a) had a tower at each corner.", "(b) was large enough to cover the entire hill.", "(c) guarded the only road to the town."]
        },
        {
            id: "18c-q3",
            type: "multiple-choice",
            question: "3. The **utilization** of",
            options: [
                "(a) wood shavings makes a great bed for a rabbit.",
                "(b) water dripping told me there was a leak somewhere.",
                "(c) a screwdriver will help you make some needed repairs.",
                "(d) leftover food made a quick meal."
            ],
            correctAnswers: ["(a) wood shavings makes a great bed for a rabbit.", "(c) a screwdriver will help you make some needed repairs.", "(d) leftover food made a quick meal."]
        },
        {
            id: "18c-q4",
            type: "multiple-choice",
            question: "4. The **barrier**",
            options: [
                "(a) kept people from getting into the cave.",
                "(b) of the river keeps the fire from the houses.",
                "(c) is too high to crawl over.",
                "(d) is two hundred pages long and very funny."
            ],
            correctAnswers: ["(a) kept people from getting into the cave.", "(b) of the river keeps the fire from the houses.", "(c) is too high to crawl over."]
        },
        {
            id: "18c-q5",
            type: "multiple-choice",
            question: "5. The **capital**",
            options: [
                "(a) moves slowly to keep from attracting attention.",
                "(b) needed for the new project shouldn't be hard to get.",
                "(c) of the United States was moved from Philadelphia to Washington, D.C.",
                "(d) crime is a very serious issue."
            ],
            correctAnswers: ["(b) needed for the new project shouldn't be hard to get.", "(c) of the United States was moved from Philadelphia to Washington, D.C.", "(d) crime is a very serious issue."]
        },
        {
            id: "18c-q6",
            type: "multiple-choice",
            question: "6. To be **ensured**",
            options: [
                "(a) that the TV works, turn it on.",
                "(b) of his place in history, President Andrew Jackson did whatever it took.",
                "(c) around the boat, use a paddle.",
                "(d) of your safety, please remain in your seats."
            ],
            correctAnswers: ["(b) of his place in history, President Andrew Jackson did whatever it took.", "(d) of your safety, please remain in your seats."]
        },
        {
            id: "18c-q7",
            type: "multiple-choice",
            question: "7. The **feud**",
            options: [
                "(a) could be lit with one match.",
                "(b) was extinguished before we went to sleep.",
                "(c) went on for years but never got really violent.",
                "(d) was too deep for the wagons to cross."
            ],
            correctAnswer: "(c) went on for years but never got really violent."
        },
        {
            id: "18c-q8",
            type: "multiple-choice",
            question: "8. A **threatening**",
            options: [
                "(a) storm kept us from playing baseball.",
                "(b) wave looked like it might ruin the picnic on the beach.",
                "(c) strawberry shortcake needs lots of whipped cream.",
                "(d) kitten walked softly over the carpet and curled up in my lap."
            ],
            correctAnswers: ["(a) storm kept us from playing baseball.", "(b) wave looked like it might ruin the picnic on the beach."]
        }
    ]
};

export const b4_l18_story_4: Story = {
    id: "b4-l18-s4",
    title: "18D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l18_words.map(w => w.id),
    questions: [
        {
            id: "18d-q1",
            type: "multiple-choice",
            question: "1. A **barrier** to getting good grades might be",
            options: ["watching too much TV", "doing homework regularly", "listening in class", "asking questions"],
            correctAnswer: "watching too much TV"
        },
        {
            id: "18d-q2",
            type: "multiple-choice",
            question: "2. To **ensure** a good night's sleep, I",
            options: ["go to bed early", "drink coffee", "play loud music", "watch a scary movie"],
            correctAnswer: "go to bed early"
        },
        {
            id: "18d-q3",
            type: "multiple-choice",
            question: "3. A **frequent** wish of mine is",
            options: ["to fly like a bird", "that I never have fun", "to be sick", "to lose my toys"],
            correctAnswer: "to fly like a bird"
        },
        {
            id: "18d-q4",
            type: "multiple-choice",
            question: "4. You might keep **abreast** of what's happening in the world by",
            options: ["watching the news", "sleeping all day", "hiding under a rock", "ignoring everyone"],
            correctAnswer: "watching the news"
        },
        {
            id: "18d-q5",
            type: "multiple-choice",
            question: "5. If you cross the **frontier** into another country, that means you",
            options: ["are entering a new nation", "are staying home", "are going to sleep", "are eating dinner"],
            correctAnswer: "are entering a new nation"
        },
        {
            id: "18d-q6",
            type: "multiple-choice",
            question: "6. A **peasant** is someone who",
            options: ["works the land", "rules a kingdom", "lives in a castle", "flies a plane"],
            correctAnswer: "works the land"
        },
        {
            id: "18d-q7",
            type: "multiple-choice",
            question: "7. A **threat** to a mouse might be",
            options: ["a hungry cat", "a piece of cheese", "a small hole", "a squeak"],
            correctAnswer: "a hungry cat"
        },
        {
            id: "18d-q8",
            type: "multiple-choice",
            question: "8. A **vast** distance is one that",
            options: ["is very long", "is very short", "can be walked in a minute", "is easy to jump over"],
            correctAnswer: "is very long"
        },
        {
            id: "18d-q9",
            type: "multiple-choice",
            question: "9. An example of an **external** item of clothing is",
            options: ["a coat", "underwear", "a sock (inside a shoe)", "a shirt (under a sweater)"],
            correctAnswer: "a coat" // External means outside. Coat is outermost.
        },
        {
            id: "18d-q10",
            type: "multiple-choice",
            question: "10. To **utilize** is to",
            options: ["make use of something", "throw something away", "ignore something", "break something"],
            correctAnswer: "make use of something"
        }
    ]
};

export const b4_l18_story_5: Story = {
    id: "b4-l18-s5",
    title: "Reading Passage: The Great Wall of China",
    type: "non-fiction",
    content: `
Most visitors to China make a point of seeing the Great Wall. It is hard to miss because of its enormous size. The wall is about twenty-five feet high. Its **breadth** at the top is nearly twenty feet. That's wide enough for ten people to walk **abreast**. It covers a distance of fifteen hundred miles. The wall starts in Gansu province in the south and ends at the Yellow Sea in the northeast. The part tourists visit most **frequently** goes from Beijing, the **capital** of China, to the Yellow Sea.

The Great Wall of China was built more than two thousand years ago. It served as a **barrier** against tribes from the north. The person responsible for having it built was Shi Huangdi, known as "the First Emperor of China." Before the country was united under his leadership, China was divided into a large number of **petty** kingdoms. They were ruled by local warlords who spent most of their time **feuding** among themselves. By the year 221 BCE, Shi Huangdi had taken control of the whole country and made himself emperor.

Because the empire was so **vast**, it was not easy to defend. Shi Huangdi had nothing to fear at home. However, he worried about **external** attacks. Especially **threatening** were tribes from the north in central Asia. To **ensure** the safety of his empire, he had the Great Wall built along China's northern **frontier**. It had watchtowers every few miles. It also had **fortresses**. The emperor's soldiers were housed there, ready to fight off attacks. Building began in 214 BCE. Later rulers of China added to it in the west and south. Work on the wall was still being carried out four centuries ago.

Hundreds of thousands of Chinese **peasants** were forced to leave their farms to do the actual work of building the Great Wall. Everything had to be carried on the workers' backs or slung on poles; the wheelbarrow had not yet been invented. The builders **utilized** whatever was close at hand. They used blocks of stone in mountain areas and timber from forests. In other places, they used earth or sand mixed with twigs and reeds. Later on, bricks and tiles were used.

Shi Huangdi is an important figure in Chinese history. He improved the workings of government. He also ordered the building of roads and canals to improve communications throughout the empire. He built a magnificent palace as well as many other fine public buildings. But his greatest achievement, and the thing for which he is remembered, is the Great Wall of China.
    `,
    wordsIncluded: b4_l18_words.map(w => w.id),
    questions: []
};

export const b4_l18_story_6: Story = {
    id: "b4-l18-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* Don't confuse the word **capital**, which has several meanings as an adjective and is also a noun, with the word *capitol*, which is a noun only. The *Capitol* (with an uppercase C) is the building in which the United States Congress meets. A *capitol* (with a lowercase c) is the building in which the governing body of a state meets. It might help you to remember the difference between **capital** and *capitol* if you note that most *capitols* are buildings with *domes*, a word with an *o* in it.

* **External** refers to that which is outside, rather than inside. Its antonym, *internal*, refers to that which is inside rather than outside. The skin is the body's only **external** organ. The heart, lungs, liver, and kidneys are *internal* organs. A related word to **external** is *exterior*; its antonym is *interior*. An *exterior* door is one on the outside; an *interior* door is one inside a building that connects one room with another.
`,
    wordsIncluded: ["capital", "external"],
    questions: []
};
