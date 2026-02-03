
import { VocabularyWord, Story, Question } from "./types";

export const b8_l9_words: VocabularyWord[] = [
    {
        id: "abet",
        word: "abet",
        pronunciation: "/əˈbet/",
        definition: "To encourage or assist in some activity, typically a questionable one.",
        exampleSentence: "Randy abetted his friend in hiding the teacher's chalk.",
        imageEmoji: "🤝",
        category: "Grade 8",
        synonyms: ["help", "assist"],
        antonyms: ["hinder", "stop"]
    },
    {
        id: "agile",
        word: "agile",
        pronunciation: "/ˈædʒl/",
        definition: "1. Able to move quickly and easily; nimble. 2. Able to think quickly.",
        exampleSentence: "Alexandra's agile steps allowed her to avoid the defender's attempt to steal the basketball.",
        imageEmoji: "🤸",
        category: "Grade 8",
        synonyms: ["nimble", "quick"],
        antonyms: ["clumsy", "slow"]
    },
    {
        id: "allot",
        word: "allot",
        pronunciation: "/əˈlɒt/",
        definition: "To assign or distribute as a portion or share.",
        exampleSentence: "Ms. Kape allotted fifteen minutes for the test, but I finished in ten.",
        imageEmoji: "➗",
        category: "Grade 8",
        synonyms: ["assign", "distribute"],
        antonyms: ["keep", "withhold"]
    },
    {
        id: "balmy",
        word: "balmy",
        pronunciation: "/ˈbɑːmi/",
        definition: "Soothing, mild.",
        exampleSentence: "Instead of the balmy spring weather we were expecting, the skies turned gray and a light snow fell.",
        imageEmoji: "🌤️",
        category: "Grade 8",
        synonyms: ["mild", "pleasant"],
        antonyms: ["harsh", "stormy"]
    },
    {
        id: "congregate",
        word: "congregate",
        pronunciation: "/ˈkɒŋɡrɪɡeɪt/",
        definition: "To come together in a group; to assemble.",
        exampleSentence: "The principal told the students not to congregate in the hallways before school.",
        imageEmoji: "👨‍👩‍👧‍👦",
        category: "Grade 8",
        synonyms: ["gather", "assemble"],
        antonyms: ["disperse", "scatter"]
    },
    {
        id: "divert",
        word: "divert",
        pronunciation: "/dɪˈvɜːrt/",
        definition: "1. To turn aside. 2. To entertain or amuse.",
        exampleSentence: "By diverting the creek into a ditch, Grandpa saved the wheat field from being flooded.",
        imageEmoji: "🔀",
        category: "Grade 8",
        synonyms: ["distract", "amuse"],
        antonyms: ["bore"]
    },
    {
        id: "humdrum",
        word: "humdrum",
        pronunciation: "/ˈhʌmdrʌm/",
        definition: "Lacking excitement; boring or monotonous.",
        exampleSentence: "Bagging groceries is a humdrum job, but the flexible hours allow me to finish all my homework.",
        imageEmoji: "🥱",
        category: "Grade 8",
        synonyms: ["boring", "dull"],
        antonyms: ["exciting", "interesting"]
    },
    {
        id: "influx",
        word: "influx",
        pronunciation: "/ˈɪnflʌks/",
        definition: "A flowing or pouring in; arrival in massive numbers.",
        exampleSentence: "Local hotel owners are hoping for an influx of tourists during the holiday weekend.",
        imageEmoji: "📥",
        category: "Grade 8",
        synonyms: ["arrival", "inflow"],
        antonyms: ["outflow", "exodus"]
    },
    {
        id: "intricate",
        word: "intricate",
        pronunciation: "/ˈɪntrɪkət/",
        definition: "Complicated; having many related details or parts.",
        exampleSentence: "Chen builds intricate sculptures using metal pieces he finds at the junkyard.",
        imageEmoji: "🧩",
        category: "Grade 8",
        synonyms: ["complex", "complicated"],
        antonyms: ["simple", "plain"]
    },
    {
        id: "memento",
        word: "memento",
        pronunciation: "/məˈmentoʊ/",
        definition: "Something kept as a reminder of a past event; a souvenir.",
        exampleSentence: "Madeline kept the sand dollar as a memento of her day at the beach.",
        imageEmoji: "🎗️",
        category: "Grade 8",
        synonyms: ["souvenir", "keepsake"],
        antonyms: []
    },
    {
        id: "query",
        word: "query",
        pronunciation: "/ˈkwɪri/",
        definition: "A question. To ask or ask about.",
        exampleSentence: "Naomi's job is to answer queries from customers about their bills.",
        imageEmoji: "❓",
        category: "Grade 8",
        synonyms: ["question", "inquiry"],
        antonyms: ["answer", "reply"]
    },
    {
        id: "sporadic",
        word: "sporadic",
        pronunciation: "/spəˈrædɪk/",
        definition: "Happening occasionally; not regularly.",
        exampleSentence: "Last summer, between sporadic acting jobs, I worked as a waiter.",
        imageEmoji: "📉",
        category: "Grade 8",
        synonyms: ["occasional", "irregular"],
        antonyms: ["constant", "steady"]
    },
    {
        id: "staple",
        word: "staple",
        pronunciation: "/ˈsteɪpl/",
        definition: "1. A basic food that is used frequently and in large amounts. 2. A U-shaped fastener with sharp ends. 3. To attach with staples. 4. Most important, principal.",
        exampleSentence: "Rice and beans are staples in many Caribbean households.",
        imageEmoji: "🍞",
        category: "Grade 8",
        synonyms: ["basic", "essential"],
        antonyms: ["extra", "luxury"]
    },
    {
        id: "tumult",
        word: "tumult",
        pronunciation: "/ˈtuːmʌlt/",
        definition: "Noisy excitement; an uproar or disturbance.",
        exampleSentence: "Entering the house through the chimney, the squirrel caused a tumult until the door was opened.",
        imageEmoji: "🌩️",
        category: "Grade 8",
        synonyms: ["uproar", "chaos"],
        antonyms: ["peace", "calm"]
    },
    {
        id: "unseemly",
        word: "unseemly",
        pronunciation: "/ʌnˈsiːmli/",
        definition: "Not suitable; inappropriate or improper.",
        exampleSentence: "The two fathers had an unseemly argument at the monthly PTA meeting.",
        imageEmoji: "🚫",
        category: "Grade 8",
        synonyms: ["inappropriate", "improper"],
        antonyms: ["proper", "suitable"]
    }
];

export const b8_l9_story_1: Story = {
    id: "b8-l9-s1",
    title: "9A Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 9. Then write the sentence.",
    wordsIncluded: ["allot", "staple", "tumult", "influx", "humdrum"],
    questions: [
        {
            id: "b8-l9-q1",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **allot**.",
            options: [
                "To allot funds is to distribute them.",
                "To allot funds is to account fully for them.",
                "To allot funds is to divert funds.",
                "To allot funds is to save them."
            ],
            correctAnswer: "To allot funds is to distribute them."
        },
        {
            id: "b8-l9-q2",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **staple**.",
            options: [
                "A staple is a basic food.",
                "A staple is a short note.",
                "A staple is a memento.",
                "A staple is a drink."
            ],
            correctAnswer: "A staple is a basic food."
        },
        {
            id: "b8-l9-q3",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **tumult**.",
            options: [
                "Tumult is quickness of mind or body.",
                "Tumult is agitation or excitement.", // "noisy excitement"
                "Tumult is a feeling of unreasonable panic.", // close but "uproar"
                "Tumult is agility."
            ],
            correctAnswer: "Tumult is agitation or excitement."
        },
        {
            id: "b8-l9-q4",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **influx**.",
            options: [
                "An influx is something kept as a reminder of a past event.",
                "An influx is arrival in massive numbers.", // "flowing or pouring in"
                "An influx is something inappropriate and out of place.",
                "An influx is a memento."
            ],
            correctAnswer: "An influx is arrival in massive numbers."
        },
        {
            id: "b8-l9-q5",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **humdrum**.",
            options: [
                "A humdrum task is one that is quickly completed.",
                "A humdrum task is one that lacks interest or excitement.",
                "A humdrum task is an intricate task.",
                "A humdrum task is a simple task."
            ],
            correctAnswer: "A humdrum task is one that lacks interest or excitement."
        }
    ]
};

export const b8_l9_story_reading: Story = {
    id: "b8-l9-reading",
    title: "Reading Passage: The Children of the Bounty",
    type: "non-fiction",
    content: `Many people dream of living on a remote tropical island where there are no cars and little crime. For the people of Pitcairn Island, this dream is their reality. Until 1789, Pitcairn was uninhabited. In that year, Fletcher Christian arrived at and settled on this tiny island in the South Pacific. With him were eight other mutineers from the *Bounty* and eighteen Tahitians. By the late 1800s the island's population had grown to over two hundred. Today, the number has dwindled to fewer than fifty. However, the island's governing council is not greatly concerned about the declining population. It receives thousands of **queries** from people all over the world who would like to live there. Nevertheless, it rarely issues the official entry document called "Licence to Land and Reside." Pitcairners have no wish to be swamped by an **influx** of new residents.

Life on Pitcairn is easygoing. The inhabitants enjoy **balmy** weather all year round, and the island has plenty of water. Sweet potatoes, melons, bananas, and coffee are among the crops grown in its fertile soil. The older inhabitants spend most of their time fishing, growing vegetables, and making wooden carvings and woven baskets.

Because life changes little from day to day, visits from ships passing by on their way from the Panama Canal to New Zealand are eagerly awaited. The island's steep cliffs and lack of harbors make it impossible for ships to come to land; they must anchor about a mile offshore. When a ship arrives, islanders **congregate** at the landing in Adamstown, the island's only town. There they watch the launching of the forty-foot longboat that goes out to meet the ship to replenish supplies and to sell **mementos**. During rough weather, when the longboat is pitching wildly, those on board have a formidable task getting from the boat to the deck of the ship by rope ladder. Only the most **agile** attempt it.

The crews on these passing ships are eager to buy the carvings and baskets made by the islanders. **Intricately** carved replicas of the *Bounty* are popular items. They can sell for several hundred dollars or more, depending on the skill of the carver. The ships' visits are **sporadic**; weeks or even months go by without one. For this reason, the Pitcairners take advantage of these visits to trade fish, fruits, and vegetables for canned goods and **staples**, such as flour and sugar, that they cannot provide for themselves. Everything obtained from passing ships is **allotted** equally among the island's families. In this way, no one lacks the necessities.

This tropical paradise, however, is not for everyone. Young people often feel frustrated by the lack of opportunity. Many of them wish to exchange what they regard as the **humdrum** existence on the island for what they believe will be more exciting lives in the outside world. Not only do they find limitations in jobs unappealing, but they also complain that life on Pitcairn offers few **diversions**. Pitcairn Island once had very strict moral codes, which prohibited displays of affection, such as holding hands in public, and dancing, which was regarded as **unseemly**. While the rules aren't as strict these days, many young people leave the island, though some return later, unable to cope with the **tumult** of the modern world.

Pitcairn, a volcanic speck of rock less than two square miles in area and inhabited by only nine families, has a fascination for the outside world out of all proportion to its size. It has been the subject of no fewer than 2,500 books and articles. One reason, of course, is obvious—its dramatic past, a past that began on an April morning in 1789 when Captain Bligh was rudely awakened to discover that Fletcher Christian, **abetted** by mutinous crew members, had seized control of the *Bounty*.`,
    wordsIncluded: ["query", "influx", "balmy", "congregate", "memento", "agile", "intricate", "sporadic", "staple", "allot", "humdrum", "divert", "unseemly", "tumult", "abet"],
    questions: [
        {
            id: "b8-l9-reading-q1",
            type: "multiple-choice",
            question: "Why are there no heating bills on Pitcairn?",
            options: [
                "Because they have **balmy** weather all year round.",
                "Because they use solar power.",
                "Because they burn wood.",
                "Because they like the cold."
            ],
            correctAnswer: "Because they have **balmy** weather all year round."
        },
        {
            id: "b8-l9-reading-q2",
            type: "multiple-choice",
            question: "Why hasn't there been an **influx** of tourists to Pitcairn?",
            options: [
                "Because the island's governing council rarely issues entry documents.",
                "Because there are no hotels.",
                "Because it is too expensive.",
                "Because it is dangerous."
            ],
            correctAnswer: "Because the island's governing council rarely issues entry documents."
        },
        {
            id: "b8-l9-reading-q3",
            type: "multiple-choice",
            question: "What is the meaning of **staples** as it is used in the passage?",
            options: [
                "Basic foods used frequently and in large amounts.",
                "Fasteners.",
                "Principal crops.",
                "Mementos."
            ],
            correctAnswer: "Basic foods used frequently and in large amounts."
        },
        {
            id: "b8-l9-reading-q4",
            type: "multiple-choice",
            question: "Why do you suppose the ships' visits are **sporadic**?",
            options: [
                "Because Pitcairn is remote and lacks a harbor, so ships only stop occasionally.",
                "Because the islanders don't like visitors.",
                "Because of pirates.",
                "Because of storms."
            ],
            correctAnswer: "Because Pitcairn is remote and lacks a harbor, so ships only stop occasionally."
        },
        {
            id: "b8-l9-reading-q5",
            type: "multiple-choice",
            question: "Name two activities that Pitcairn teenagers might find **humdrum**.",
            options: [
                "Fishing, growing vegetables, and making wooden carvings.",
                "Watching TV.",
                "Playing video games.",
                "Surfing."
            ],
            correctAnswer: "Fishing, growing vegetables, and making wooden carvings."
        },
        {
            id: "b8-l9-reading-q6",
            type: "multiple-choice",
            question: "In what ways might teenagers from Pitcairn Island find life in a U. S. city **tumultuous**?",
            options: [
                "There is much noise and excitement.",
                "It is humdrum.",
                "It is balmy.",
                "It is sporadic."
            ],
            correctAnswer: "There is much noise and excitement."
        },
        {
            id: "b8-l9-reading-q7",
            type: "multiple-choice",
            question: "According to the passage, what is the content of a lot of the mail sent to Pitcairn?",
            options: [
                "**Queries** from people who would like to live there.",
                "Bills.",
                "Magazines.",
                "Newspapers."
            ],
            correctAnswer: "**Queries** from people who would like to live there."
        },
        {
            id: "b8-l9-reading-q8",
            type: "multiple-choice",
            question: "How do the islanders make sure no one lacks necessary food?",
            options: [
                "Everything obtained from passing ships is **allotted** equally among the island's families.",
                "They have a food bank.",
                "The king distributes it.",
                "They grow everything they need."
            ],
            correctAnswer: "Everything obtained from passing ships is **allotted** equally among the island's families."
        },
        {
            id: "b8-l9-reading-q9",
            type: "multiple-choice",
            question: "What is the meaning of **diversions** as it is used in the passage?",
            options: [
                "Amusements or entertainments.",
                "Roads.",
                "Jobs.",
                "Schools."
            ],
            correctAnswer: "Amusements or entertainments."
        },
        {
            id: "b8-l9-reading-q10",
            type: "multiple-choice",
            question: "Why is it inaccurate to say that few Pitcairners are interested in a ship's arrival?",
            options: [
                "Because they **congregate** at the landing; visits are eagerly awaited.",
                "Because they hide.",
                "Because they are asleep.",
                "Because they are busy."
            ],
            correctAnswer: "Because they **congregate** at the landing; visits are eagerly awaited."
        },
        {
            id: "b8-l9-reading-q11",
            type: "multiple-choice",
            question: "Why was showing affection in public banned on Pitcairn?",
            options: [
                "It was regarded as **unseemly** (improper) by strict moral codes.",
                "It was illegal.",
                "It was dangerous.",
                "It was noisy."
            ],
            correctAnswer: "It was regarded as **unseemly** (improper) by strict moral codes."
        },
        {
            id: "b8-l9-reading-q12",
            type: "multiple-choice",
            question: "Why is a carving of the *Bounty* considered a suitable **memento** of Pitcairn?",
            options: [
                "Because the island was settled by mutineers from the *Bounty*.",
                "Because it is a famous ship.",
                "Because it is easy to carve.",
                "Because it floats."
            ],
            correctAnswer: "Because the island was settled by mutineers from the *Bounty*."
        },
        {
            id: "b8-l9-reading-q13",
            type: "multiple-choice",
            question: "What determines the price of an **intricately** carved model of the *Bounty*?",
            options: [
                "The skill of the carver.",
                "The size of the model.",
                "The type of wood.",
                "The color."
            ],
            correctAnswer: "The skill of the carver."
        },
        {
            id: "b8-l9-reading-q14",
            type: "multiple-choice",
            question: "How many of those who originally sailed to Pitcairn with Christian had helped him with the mutiny?",
            options: [
                "Eight other mutineers **abetted** him.",
                "Everyone.",
                "None.",
                "Twenty."
            ],
            correctAnswer: "Eight other mutineers **abetted** him."
        },
        {
            id: "b8-l9-reading-q15",
            type: "multiple-choice",
            question: "Why would it be inaccurate to say that any of the islanders could be sent out on the longboat to board the ship?",
            options: [
                "Only the most **agile** attempt it because it is a formidable task during rough weather.",
                "Everyone goes.",
                "Only the children go.",
                "Only the women go."
            ],
            correctAnswer: "Only the most **agile** attempt it because it is a formidable task during rough weather."
        }
    ]
};

export const b8_l9_facts: Story = {
    id: "b8-l9-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   We usually use the adjective **balmy** to refer to conditions of climate or weather (a *balmy* day; a *balmy* breeze). But *balmy* has a secondary, slang meaning of "odd or peculiar in behavior." An alternative spelling for this meaning is *barmy*, which has an interesting origin. *Barm* is the yeasty foam that rises to the top of certain alcoholic beverages as they are brewed. A connection was made between this substance and odd or peculiar behavior. A person acting strangely was described as *barmy*. Confusion then occurred between two quite separate and distinct words. The result is that a person acting oddly can be described as *balmy* or *barmy*. A gentle breeze, however, can only be *balmy*, not *barmy*.

*   The Latin verb *fluere* means "to flow" and forms the root of **influx**, "a flowing or pouring in." Other words formed from this root include *fluid*, "any substance that flows"; *fluent*, "able to write or speak in a flowing, easy way"; *fluctuate*, "to move back and forth or up and down in a wavelike or flowing manner"; *flux*, "a flowing movement," also "a state of constant change"; and *confluence*, "a flowing together, as of two streams or rivers."
`,
    wordsIncluded: ["balmy", "influx"]
};
