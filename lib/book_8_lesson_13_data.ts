
import { VocabularyWord, Story, Question } from "./types";

export const b8_l13_words: VocabularyWord[] = [
    {
        id: "ardent",
        word: "ardent",
        pronunciation: "/ˈɑːrdnt/",
        definition: "Intensely eager; passionate.",
        exampleSentence: "In spite of Miriam's ardent praise of Dontrell, I was not convinced of his ability.",
        imageEmoji: "🔥",
        category: "Grade 8",
        synonyms: ["passionate", "eager"],
        antonyms: ["indifferent", "apathetic"]
    },
    {
        id: "assail",
        word: "assail",
        pronunciation: "/əˈseɪl/",
        definition: "1. To attack violently or verbally. 2. To trouble in the mind.",
        exampleSentence: "Critics assailed the book when it first appeared, but the reading public loved it.",
        imageEmoji: "⚔️",
        category: "Grade 8",
        synonyms: ["attack", "assault"],
        antonyms: ["defend", "protect"]
    },
    {
        id: "asset",
        word: "asset",
        pronunciation: "/ˈæset/",
        definition: "1. Anything owned that is of value and can be sold or otherwise disposed of. 2. A quality that can be used to advantage.",
        exampleSentence: "The late Mr. Kim's assets include a valuable coin collection.",
        imageEmoji: "💎",
        category: "Grade 8",
        synonyms: ["possession", "advantage"],
        antonyms: ["liability", "disadvantage"]
    },
    {
        id: "barter",
        word: "barter",
        pronunciation: "/ˈbɑːrtər/",
        definition: "To exchange goods or services without the use of money.",
        exampleSentence: "Instead of taking cash for fixing the Walkers' garage window, DeRay bartered for a batch of their famous gumbo.",
        imageEmoji: "🔄",
        category: "Grade 8",
        synonyms: ["trade", "swap"],
        antonyms: []
    },
    {
        id: "bonanza",
        word: "bonanza",
        pronunciation: "/bəˈnænzə/",
        definition: "A source of great wealth; something that brings great riches.",
        exampleSentence: "The discovery of gold in 1848 was a bonanza for the newly acquired territory that would become the state of California.",
        imageEmoji: "💰",
        category: "Grade 8",
        synonyms: ["windfall", "gold mine"],
        antonyms: []
    },
    {
        id: "contagious",
        word: "contagious",
        pronunciation: "/kənˈteɪdʒəs/",
        definition: "Able to be passed easily from one person to another.",
        exampleSentence: "They say that laughter is contagious.",
        imageEmoji: "😷",
        category: "Grade 8",
        synonyms: ["infectious", "spreading"],
        antonyms: []
    },
    {
        id: "contemplate",
        word: "contemplate",
        pronunciation: "/ˈkɑːntəmpleɪt/",
        definition: "1. To give careful thought to; to ponder. 2. To have a possible plan to; to intend.",
        exampleSentence: "Einstein contemplated the relationship between matter and energy.",
        imageEmoji: "🤔",
        category: "Grade 8",
        synonyms: ["ponder", "consider"],
        antonyms: ["ignore", "disregard"]
    },
    {
        id: "deter",
        word: "deter",
        pronunciation: "/dɪˈtɜːr/",
        definition: "To discourage or prevent from taking action.",
        exampleSentence: "Yesterday's rough seas deterred the divers from exploring the sunken ship.",
        imageEmoji: "✋",
        category: "Grade 8",
        synonyms: ["discourage", "dissuade"],
        antonyms: ["encourage", "persuade"]
    },
    {
        id: "flair",
        word: "flair",
        pronunciation: "/fler/",
        definition: "A natural gift or ability; a talent.",
        exampleSentence: "The comedian's flair for bantering with audience members has made him a popular entertainer.",
        imageEmoji: "✨",
        category: "Grade 8",
        synonyms: ["talent", "gift"],
        antonyms: ["inability"]
    },
    {
        id: "forfeit",
        word: "forfeit",
        pronunciation: "/ˈfɔːrfɪt/",
        definition: "To be forced to give up or lose.",
        exampleSentence: "If you leave the stadium before the end of the concert, you forfeit the right to return.",
        imageEmoji: "🏳️",
        category: "Grade 8",
        synonyms: ["give up", "lose"],
        antonyms: ["keep", "retain"]
    },
    {
        id: "innovation",
        word: "innovation",
        pronunciation: "/ˌɪnəˈveɪʃn/",
        definition: "Something new; a new way of doing something.",
        exampleSentence: "Adding apps to cell phones was an innovation that transformed cell-phone technology.",
        imageEmoji: "💡",
        category: "Grade 8",
        synonyms: ["novelty", "invention"],
        antonyms: []
    },
    {
        id: "mania",
        word: "mania",
        pronunciation: "/ˈmeɪniə/",
        definition: "An intense or extreme enthusiasm or excitement.",
        exampleSentence: "The trendy new video-game system caused a mania in toy stores.",
        imageEmoji: "🤪",
        category: "Grade 8",
        synonyms: ["craze", "obsession"],
        antonyms: ["indifference"]
    },
    {
        id: "stymie",
        word: "stymie",
        pronunciation: "/ˈstaɪmi/",
        definition: "To thwart; to make difficulties for or find problems with.",
        exampleSentence: "Rosa's efforts to start her own lawn-mowing business were stymied when the mower kept breaking down.",
        imageEmoji: "🚧",
        category: "Grade 8",
        synonyms: ["thwart", "block"],
        antonyms: ["help", "assist"]
    },
    {
        id: "synonymous",
        word: "synonymous",
        pronunciation: "/sɪˈnɑːnɪməs/",
        definition: "Alike or close in meaning; closely related.",
        exampleSentence: "The company boasts that its name is synonymous with quality.",
        imageEmoji: "🔗",
        category: "Grade 8",
        synonyms: ["equivalent", "identical"],
        antonyms: ["opposite", "antonymous"]
    },
    {
        id: "wrangle",
        word: "wrangle",
        pronunciation: "/ˈræŋɡl/",
        definition: "To quarrel in a noisy or angry way.",
        exampleSentence: "Sue and Mario wrangled over whose turn it was to cut the grass.",
        imageEmoji: "🗣️",
        category: "Grade 8",
        synonyms: ["quarrel", "argue"],
        antonyms: ["agree", "reconcile"]
    }
];

export const b8_l13_story_1: Story = {
    id: "b8-l13-s1",
    title: "13A Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 13. Then write the sentence.",
    wordsIncluded: ["contemplate", "innovation", "stymie", "deterrent", "barter"],
    questions: [
        {
            id: "b8-l13-q1",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **contemplate**.",
            options: [
                "To contemplate something is to recover it.",
                "To contemplate something is to consider it.",
                "To contemplate something is to barter something.",
                "To contemplate something is to forfeit something."
            ],
            correctAnswer: "To contemplate something is to consider it."
        },
        {
            id: "b8-l13-q2",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **innovation**.",
            options: [
                "An innovation is a new method or improvement.",
                "An innovation is a mania.",
                "An innovation is a collection of objects.",
                "An innovation is a source of great wealth."
            ],
            correctAnswer: "An innovation is a new method or improvement."
        },
        {
            id: "b8-l13-q3",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **stymie**.",
            options: [
                "To be stymied is to be friendly.",
                "To be stymied is to be thwarted.",
                "To be stymied is to be contagious.",
                "To be stymied is to be synonymous."
            ],
            correctAnswer: "To be stymied is to be thwarted."
        },
        {
            id: "b8-l13-q4",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **deterrent**.",
            options: [
                "A deterrent is anything that discourages or prevents.",
                "A deterrent is a flair.",
                "A deterrent is a bright signal light.",
                "A deterrent is an asset."
            ],
            correctAnswer: "A deterrent is anything that discourages or prevents."
        }
    ]
};

export const b8_l13_story_reading: Story = {
    id: "b8-l13-reading",
    title: "Reading Passage: More Than Just a Pretty Flower",
    type: "non-fiction",
    content: `The Winkel family lived in the town of Alkmaar in Holland. There were Mr. Winkel himself; his wife, Elisabeth; and their seven children. Winkel had a **flair** for business, and the family was well provided for. He kept a tavern in Alkmaar and also raised tulips, which were just then becoming fashionable in Holland. Sadly, sometime between 1631 and 1635 (the date is uncertain), Elisabeth died, leaving her husband a widower with three boys and four young girls to care for.

More misfortune was to follow; in 1636, Mr. Winkel died. In those days, it was not uncommon for children to lose both parents, and in fact, the Winkel children were luckier than most. Thanks to its trade with the East Indies, Holland was one of the wealthiest countries in Europe. Money was being poured into fine houses in Amsterdam and Haarlem, into paintings and other works of art (this was the age of Rembrandt and Franz Hals), and into all manner of luxury goods. But money also went into such **innovations** as government-run orphanages. And it was to the Alkmaar orphanage that the seven Winkel children were taken. There, you may be sure, they were very unhappy, although well cared for by the standards of the time.

Winkel's **assets** had been the tavern, worth very little, and his patch of tulip bulbs planted several years earlier. In the spring of 1636, just before he died, records show that he owned about seventy bulbs, prized for their rarity and beauty, as well as a number of lesser varieties. Several years earlier, the prices that some bulbs fetched at tulip auctions had begun to rise, slowly at first. The trend accelerated as more and more people saw a rare opportunity to get rich. Prices could double in a week. It was important to act quickly.

Soon, single bulbs were selling for hundreds, then thousands of guilders. This was at a time when a carpenter's annual earnings were about 250 guilders a year. For a deposit of a hundred guilders and a written promise to pay the balance at a later date, a person could buy a bulb worth a thousand guilders. Then it was just a matter of waiting for the price to double; when that happened, the bulb could be sold for a profit of a thousand guilders. A carpenter could make as much in a week as he could by working for four years! Repeat this a few times and he could now **contemplate** a life of ease. To raise the hundred guilders, of course, he had to sell his tools.

Greed is **contagious**! The number of buyers increased rapidly even as the supply of bulbs remained unchanged. Those who had been indifferent to the tulip craze now became **ardent** bidders at the bulb auctions held throughout the land. Most knew little or nothing of business, or of tulips for that matter, but that did not **deter** buyers.

The **mania** was at its height by February 5, 1637. On that day, Winkel's collection of tulip bulbs was sold at auction. The proceeds were to be shared among his children, who, you may remember, were living at the Alkmaar orphanage. Those attending were, for the most part, wealthy connoisseurs seeking to add to their already exquisite collections. This was a unique opportunity for them to obtain some of the rarest, most beautiful tulips in the world, for Mr. Winkel had known just what he was doing when he planted his tulip patch several years earlier. That night, the bidding exceeded the most wildly optimistic forecasts. Seventy exceptionally rare tulip bulbs, plus a number of lesser varieties, realized ninety thousand guilders (about twelve million today in U.S. dollars).

Almost immediately, those involved in the tulip trade were **assailed** by doubts. Surely, prices couldn't possibly go any higher. All at once everyone wanted to sell, and no one wanted to buy. Buyers and sellers were **stymied** in their efforts to settle accounts. Those who had previously agreed to buy refused to take delivery and **forfeited** their deposits. Those who had **bartered** their homes for a tulip bulb were now homeless.

The Winkel children were not involved in any of this **wrangling**. The three boys and four little girls were rich, and their **bonanza** was secure. But thousands of bewildered traders in the bulb business were ruined. Ironically, Holland never lost its love for tulips. In fact, Holland and tulips are **synonymous** to this day, as any visitor to that country will tell you.`,
    wordsIncluded: ["flair", "innovation", "asset", "contemplate", "contagious", "ardent", "deter", "mania", "assail", "stymie", "forfeit", "barter", "wrangle", "bonanza", "synonymous"],
    questions: [
        {
            id: "b8-l13-reading-q1",
            type: "multiple-choice",
            question: "Before 1630, what were the Winkel family's **assets**?",
            options: [
                "The tavern and the tulip patch.",
                "A fleet of ships.",
                "Gold bars.",
                "A large farm."
            ],
            correctAnswer: "The tavern and the tulip patch."
        },
        {
            id: "b8-l13-reading-q2",
            type: "multiple-choice",
            question: "Trade meant wealth for Holland. Give some examples of what wealth brought.",
            options: [
                "Fine houses, paintings, luxury goods, and **innovations** like government-run orphanages.",
                "Better roads.",
                "More cows.",
                "Bigger ships."
            ],
            correctAnswer: "Fine houses, paintings, luxury goods, and **innovations** like government-run orphanages."
        },
        {
            id: "b8-l13-reading-q3",
            type: "multiple-choice",
            question: "Explain how the rise in price of bulbs gave workers a new future to **contemplate**.",
            options: [
                "They could make enough money to live a life of ease.",
                "They could become famous.",
                "They could travel the world.",
                "They could buy a castle."
            ],
            correctAnswer: "They could make enough money to live a life of ease."
        },
        {
            id: "b8-l13-reading-q4",
            type: "multiple-choice",
            question: "Did Winkel have good business sense?",
            options: [
                "Yes, he had a **flair** for business and provided well for his family.",
                "No, he lost everything.",
                "No, he was lazy.",
                "No, he was unlucky."
            ],
            correctAnswer: "Yes, he had a **flair** for business and provided well for his family."
        },
        {
            id: "b8-l13-reading-q5",
            type: "multiple-choice",
            question: "What does **contagious** mean as it is used in the passage?",
            options: [
                "Able to be passed easily from one person to another (referring to greed).",
                "Causing sickness.",
                "Deadly.",
                "Invisible."
            ],
            correctAnswer: "Able to be passed easily from one person to another (referring to greed)."
        },
        {
            id: "b8-l13-reading-q6",
            type: "multiple-choice",
            question: "What should have **deterred** bidders at the bulb auctions?",
            options: [
                "Their lack of knowledge about business or tulips.",
                "The high prices.",
                "The bad weather.",
                "The police."
            ],
            correctAnswer: "Their lack of knowledge about business or tulips."
        },
        {
            id: "b8-l13-reading-q7",
            type: "multiple-choice",
            question: "When did the **mania** for tulip sales reach its height?",
            options: [
                "February 5, 1637.",
                "1630.",
                "1640.",
                "1625."
            ],
            correctAnswer: "February 5, 1637."
        },
        {
            id: "b8-l13-reading-q8",
            type: "multiple-choice",
            question: "What happened to the **ardor** of bidders after this date?",
            options: [
                "It cooled rapidly; everyone wanted to sell, and no one wanted to buy.",
                "It increased.",
                "It stayed the same.",
                "They bought more."
            ],
            correctAnswer: "It cooled rapidly; everyone wanted to sell, and no one wanted to buy."
        },
        {
            id: "b8-l13-reading-q9",
            type: "multiple-choice",
            question: "If bulb traders were **assailed** by doubts, how did that affect the business?",
            options: [
                "Everyone wanted to sell and no one wanted to buy; business collapsed.",
                "Prices went up.",
                "They traded more.",
                "They opened new markets."
            ],
            correctAnswer: "Everyone wanted to sell and no one wanted to buy; business collapsed."
        },
        {
            id: "b8-l13-reading-q10",
            type: "multiple-choice",
            question: "What **stymied** the bulb trade?",
            options: [
                "Buyers and sellers couldn't settle accounts; buyers refused delivery.",
                "Lack of bulbs.",
                "War.",
                "Floods."
            ],
            correctAnswer: "Buyers and sellers couldn't settle accounts; buyers refused delivery."
        },
        {
            id: "b8-l13-reading-q11",
            type: "multiple-choice",
            question: "What did many **forfeit**?",
            options: [
                "Their deposits.",
                "Their lives.",
                "Their citizenship.",
                "Their children."
            ],
            correctAnswer: "Their deposits."
        },
        {
            id: "b8-l13-reading-q12",
            type: "multiple-choice",
            question: "How did some become homeless?",
            options: [
                "They **bartered** their homes for a tulip bulb (and then were ruined).",
                "Their houses burned down.",
                "They lost their jobs.",
                "They moved."
            ],
            correctAnswer: "They **bartered** their homes for a tulip bulb (and then were ruined)."
        },
        {
            id: "b8-l13-reading-q13",
            type: "multiple-choice",
            question: "Before the trade collapsed, who enjoyed a **bonanza**?",
            options: [
                "The Winkel children (sold their bulbs for 90,000 guilders).",
                "The king.",
                "The carpenters.",
                "The farmers."
            ],
            correctAnswer: "The Winkel children (sold their bulbs for 90,000 guilders)."
        },
        {
            id: "b8-l13-reading-q14",
            type: "multiple-choice",
            question: "What do you think the ruined traders were **wrangling** about?",
            options: [
                "About settling accounts and who owed what.",
                "About the weather.",
                "About politics.",
                "About sports."
            ],
            correctAnswer: "About settling accounts and who owed what."
        },
        {
            id: "b8-l13-reading-q15",
            type: "multiple-choice",
            question: "If Holland is **synonymous** with tulips, what might Hawaii be **synonymous** with?",
            options: [
                "Pineapples or surfing.",
                "Snow.",
                "Deserts.",
                "Factories."
            ],
            correctAnswer: "Pineapples or surfing."
        }
    ]
};

export const b8_l13_facts: Story = {
    id: "b8-l13-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   The Latin *ardere*, "to burn," forms the root of **ardent**. An *ardent* person is one who is "burning" with enthusiasm. Another word formed from this root is *arson*, which is the crime of deliberately setting fire to a building.

*   Something that is **contagious** (such as a disease) is spread by contact. The word comes from the Latin *con-*, "together," and *tangere*, "to touch."

*   The Latin *syn-*, "alike" or "same," and *onoma*, "name," form the Greek word *synonumous*. This word passed into English as **synonymous**, which means "having the same name or meaning."
`,
    wordsIncluded: ["ardent", "contagious", "synonymous"]
};
