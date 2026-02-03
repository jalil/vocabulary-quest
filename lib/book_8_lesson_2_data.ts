
import { VocabularyWord, Story, Question } from "./types";

export const b8_l2_words: VocabularyWord[] = [
    {
        id: "abrasion",
        word: "abrasion",
        pronunciation: "/əˈbreɪʒən/",
        definition: "1. A wearing away or rubbing away by friction. 2. A scraped or worn area.",
        exampleSentence: "Natalie's fall during the basketball game resulted in an abrasion on her knee.",
        imageEmoji: "🤕",
        category: "Grade 8",
        synonyms: ["scrape", "injury"],
        antonyms: ["healing"]
    },
    {
        id: "clad",
        word: "clad",
        pronunciation: "/klæd/",
        definition: "Clothed or covered.",
        exampleSentence: "Clad in a black rubber suit, the diver jumped from the side of the rescue boat.",
        imageEmoji: "👗",
        category: "Grade 8",
        synonyms: ["dressed", "clothed"],
        antonyms: ["naked", "bare"]
    },
    {
        id: "corroborate",
        word: "corroborate",
        pronunciation: "/kəˈrɒbəreɪt/",
        definition: "To provide evidence to make more certain; to confirm.",
        exampleSentence: "Because he was standing at the stoplight when the accident occurred, Javier could corroborate the driver's statement.",
        imageEmoji: "✅",
        category: "Grade 8",
        synonyms: ["confirm", "verify"],
        antonyms: ["contradict", "deny"]
    },
    {
        id: "cursory",
        word: "cursory",
        pronunciation: "/ˈkɜːrsəri/",
        definition: "Done in a hurry and with little attention to detail.",
        exampleSentence: "Sherlock Holmes made a cursory search of the bedroom before going into the dining room to question the family.",
        imageEmoji: "🏃",
        category: "Grade 8",
        synonyms: ["hasty", "superficial"],
        antonyms: ["thorough", "detailed"]
    },
    {
        id: "dehydrate",
        word: "dehydrate",
        pronunciation: "/diːˈhaɪdreɪt/",
        definition: "1. To remove the water from. 2. To cause to lose bodily fluids.",
        exampleSentence: "The hot, dry desert air dehydrated the hikers, who had not brought enough water.",
        imageEmoji: "💧",
        category: "Grade 8",
        synonyms: ["dry out", "parch"],
        antonyms: ["hydrate", "moisten"]
    },
    {
        id: "derive",
        word: "derive",
        pronunciation: "/dɪˈraɪv/",
        definition: "1. To take or receive from a source. 2. To obtain through reasoning.",
        exampleSentence: "After practicing so diligently, Hugo derived great satisfaction from the enthusiastic applause following his performance.",
        imageEmoji: "💡",
        category: "Grade 8",
        synonyms: ["get", "obtain"],
        antonyms: ["give", "lose"]
    },
    {
        id: "electrify",
        word: "electrify",
        pronunciation: "/ɪˈlektrɪfaɪ/",
        definition: "1. To wire or equip with electric power. 2. To thrill or shock.",
        exampleSentence: "Marissa's skating performance, which included a layback spin and several perfectly executed triple axels, electrified the audience.",
        imageEmoji: "⚡",
        category: "Grade 8",
        synonyms: ["thrill", "shock"],
        antonyms: ["bore", "calm"]
    },
    {
        id: "endeavor",
        word: "endeavor",
        pronunciation: "/enˈdevər/",
        definition: "To attempt earnestly. A serious, earnest effort toward a goal.",
        exampleSentence: "The person we spoke to at the school office said she would endeavor to find the papers we needed.",
        imageEmoji: "🎯",
        category: "Grade 8",
        synonyms: ["attempt", "try"],
        antonyms: ["give up", "quit"]
    },
    {
        id: "gingerly",
        word: "gingerly",
        pronunciation: "/ˈdʒɪndʒərli/",
        definition: "Cautious; very careful. Extremely cautiously.",
        exampleSentence: "Mr. Wu made a gingerly attempt to finish the science experiment without spilling the liquid.",
        imageEmoji: "🐾",
        category: "Grade 8",
        synonyms: ["cautiously", "carefully"],
        antonyms: ["carelessly", "recklessly"]
    },
    {
        id: "grimace",
        word: "grimace",
        pronunciation: "/ˈɡrɪməs/",
        definition: "To make a face expressing feelings of pain, disgust, or contempt. A facial expression that seems to express pain, contempt, or disgust.",
        exampleSentence: "Hana grimaced when her computer froze and she realized she'd lost her book report.",
        imageEmoji: "😬",
        category: "Grade 8",
        synonyms: ["scowl", "frown"],
        antonyms: ["smile", "grin"]
    },
    {
        id: "gruesome",
        word: "gruesome",
        pronunciation: "/ˈɡruːsəm/",
        definition: "Causing horror or disgust.",
        exampleSentence: "The book told the gruesome details of living in Europe during the time of the Black Plague.",
        imageEmoji: "🧟",
        category: "Grade 8",
        synonyms: ["horrible", "ghastly"],
        antonyms: ["pleasant", "delightful"]
    },
    {
        id: "inventory",
        word: "inventory",
        pronunciation: "/ˈɪnvəntɔːri/",
        definition: "1. A list of possessions or goods on hand. 2. The stock of goods on hand. To make a complete list of.",
        exampleSentence: "Before buying school supplies for the coming year, we make an inventory of all the supplies we already have.",
        imageEmoji: "📦",
        category: "Grade 8",
        synonyms: ["list", "stock"],
        antonyms: []
    },
    {
        id: "simulate",
        word: "simulate",
        pronunciation: "/ˈsɪmjuleɪt/",
        definition: "1. To take on the qualities of another; to imitate. 2. To pretend.",
        exampleSentence: "AstroTurf simulates real grass.",
        imageEmoji: "🤖",
        category: "Grade 8",
        synonyms: ["imitate", "pretend"],
        antonyms: ["be real"]
    },
    {
        id: "succumb",
        word: "succumb",
        pronunciation: "/səˈkʌm/",
        definition: "1. To give up or give in to; to yield. 2. To cease to exist; to die.",
        exampleSentence: "After twenty-four hours on their feet, the relief workers succumbed to exhaustion, falling soundly asleep on their cots.",
        imageEmoji: "🏳️",
        category: "Grade 8",
        synonyms: ["yield", "surrender"],
        antonyms: ["resist", "withstand"]
    },
    {
        id: "surmise",
        word: "surmise",
        pronunciation: "/sərˈmaɪz/",
        definition: "To suppose something without sufficient evidence. A guess.",
        exampleSentence: "Heloise surmised that her visitors were late because of traffic.",
        imageEmoji: "🤔",
        category: "Grade 8",
        synonyms: ["guess", "infer"],
        antonyms: ["know", "prove"]
    }
];

export const b8_l2_story_1: Story = {
    id: "b8-l2-s1",
    title: "2C Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    wordsIncluded: ["grimace", "gruesome", "inventory", "clad"],
    questions: [
        {
            id: "b8-l2-q1",
            type: "multiple-choice",
            question: "A **grimace** ...",
            options: [
                "on the principal's face made him look unfriendly.",
                "told me that Taj didn't like the idea of going to the party.",
                "in the calculations was quickly corrected.",
                "in the ice was narrowly avoided by the skaters."
            ],
            correctAnswer: "on the principal's face made him look unfriendly."
        },
        {
            id: "b8-l2-q2",
            type: "multiple-choice",
            question: "A **gruesome** ...",
            options: [
                "sea monster attacked the ship in the movie.",
                "attempt was made to save the library, but it proved unsuccessful.",
                "story about the history of surgery was published last month.",
                "mix of hay and oats provided food for the horses."
            ],
            correctAnswer: "sea monster attacked the ship in the movie."
        },
        {
            id: "b8-l2-q3",
            type: "multiple-choice",
            question: "An **inventory** ...",
            options: [
                "of items needed for summer camp was given to the campers' parents.",
                "that changed history was the steam engine.",
                "of the clothes in my suitcase revealed I had forgotten socks.",
                "should be set out to dry regularly."
            ],
            correctAnswer: "of items needed for summer camp was given to the campers' parents."
        },
        {
            id: "b8-l2-q4",
            type: "multiple-choice",
            question: "He was **clad** ...",
            options: [
                "in a suit of armor at the medieval costume party.",
                "as a Scottish warrior when he played Macbeth on stage.",
                "two ways and just couldn't make up his mind.",
                "in deep thought and didn't hear me when I spoke."
            ],
            correctAnswer: "in a suit of armor at the medieval costume party."
        }
    ]
};

export const b8_l2_story_reading: Story = {
    id: "b8-l2-reading",
    title: "Reading Passage: The Iceman",
    type: "non-fiction",
    content: `The date was September 19, 1991. A German couple, returning from a day of hiking in the ten-thousand-foot-high Otztaler region of the Alps made a **gruesome** discovery. The head and shoulders of a body protruded from the glacial ice in a shallow trench in the rock. With the nose and upper lip twisted up to the side, the face was set in a terrible **grimace**. The couple believed they had discovered some unfortunate hiker. They reported their find at the mountain lodge where they were spending the night.

The first **endeavors** by mountain rescuers to free the body were unsuccessful; the location was remote, and winter weather was beginning. A day or two later, the police asked medical experts from Innsbruck to assist in the recovery. Flying by helicopter to the site, they proceeded in a **gingerly** manner to chip away the ice until the body was free. Quickly placing it in a plastic body bag, they had it transported to Innsbruck for examination.

There it was stored in a freezer that **simulated** the conditions on the mountain. At the same time, an **inventory** of the objects found with or near the body was taken. Because some of these items appeared to be at least a hundred years old and to have historical significance, scientists at the University of Innsbruck were consulted. When they estimated that the find was four thousand years old, everyone was astounded. Further tests established that the remains were actually 5,300 years old, an age later **corroborated** by tests at several independent institutions.

Scientists were **electrified** by the discovery. Not only would they be able to study the man's body, but also they would be able to **derive** information from his clothing and equipment about the age in which he had lived, the Late Neolithic period or Late Stone Age. A **cursory** examination of the body showed it to be in a remarkable state of preservation. Scientists believed that soon after the man **succumbed** to the cold, his body was **dehydrated** by the dry, icy winds of the high Alps. Subsequently, it was buried in snow, which filled the trench. As time passed this turned into packed ice, sealing the body and protecting it from harmful exposure to the air.

Further investigation revealed several interesting details. From the **abrasion** of his front teeth and the wear on his joints, scientists estimated the man's age at death to have been somewhere between thirty and forty years. His height was just over five feet. He had been **clad** in neatly sewn deerskin garments, with a grass cape to keep out the cold. With him were an ax with a long wooden handle, an unfinished bow, and a leather quiver filled with arrows. He also had a small leather pouch containing a flint scraper, some arrow tips, and a small knife.

At first, scientists were puzzled by several tattoos on the man's body—a blue cross on the back of one knee and a number of small parallel lines grouped together on his back and ankles. But examinations indicated that in each of these places the man's joints and bones showed wear or injury. The scientists **surmised** that the markings may have been associated with some kind of primitive medical treatment.

In 2016, a team of scientists thawed the body to make possible a more complete examination. They worked quickly, and afterward, the body was frozen again to preserve it. An arrowhead was found buried in the Iceman's left shoulder that had pierced a major artery. Death would have followed very quickly. The contents of his stomach showed that he had enjoyed a large meal and was digesting it when he was taken by surprise and shot from behind.

Otzi, as the Iceman is called, has given us a revealing glimpse of life in the Late Stone Age. Both his well-preserved body and the clothing and tools that were with him are unique remains of a time before writing or cities had come into existence.`,
    wordsIncluded: ["gruesome", "grimace", "endeavor", "gingerly", "simulate", "inventory", "corroborate", "electrify", "derive", "cursory", "succumb", "dehydrate", "abrasion", "clad", "surmise"],
    questions: [
        {
            id: "b8-l2-p-q1",
            type: "multiple-choice",
            question: "How do we know that the Iceman had been prepared for cold weather?",
            options: [
                "He was clad in warm clothing, including a grass cape and neatly sewn deerskin garments.",
                "He had built a sturdy igloo nearby.",
                "He was carrying a large supply of firewood.",
                "He had fat reserves indicating a heavy diet."
            ],
            correctAnswer: "He was clad in warm clothing, including a grass cape and neatly sewn deerskin garments."
        },
        {
            id: "b8-l2-p-q2",
            type: "multiple-choice",
            question: "What is the meaning of **succumb** as it is used in the passage?",
            options: [
                "To die or cease to exist.",
                "To fight bravely against.",
                "To recover quickly from.",
                "To surrender to an enemy army."
            ],
            correctAnswer: "To die or cease to exist."
        },
        {
            id: "b8-l2-p-q3",
            type: "multiple-choice",
            question: "What did the German climbers **surmise** about their discovery?",
            options: [
                "They surmised that they had discovered the body of an unfortunate hiker.",
                "They surmised it was a neatly preserved doll.",
                "They surmised it was a soldier from a recent war.",
                "They surmised it was a scientific experiment gone wrong."
            ],
            correctAnswer: "They surmised that they had discovered the body of an unfortunate hiker."
        },
        {
            id: "b8-l2-p-q4",
            type: "multiple-choice",
            question: "What kind of **abrasion** did scientists examine on the Iceman?",
            options: [
                "Scientists examined the abrasion on his front teeth to estimate his age.",
                "Scientists examined an abrasion on his knee from a fall.",
                "Scientists examined an abrasion on his leather boots.",
                "Scientists examined an abrasion on his copper axe."
            ],
            correctAnswer: "Scientists examined the abrasion on his front teeth to estimate his age."
        },
        {
            id: "b8-l2-p-q5",
            type: "multiple-choice",
            question: "Would you describe this story of the Iceman as **gruesome**?",
            options: [
                "Yes, the discovery of a frozen body with a twisted expression is gruesome.",
                "No, it is a delightful fairy tale.",
                "Yes, but only because of the snow.",
                "No, it is purely scientific and boring."
            ],
            correctAnswer: "Yes, the discovery of a frozen body with a twisted expression is gruesome."
        },
        {
            id: "b8-l2-p-q6",
            type: "multiple-choice",
            question: "Why was it necessary to remove the body from the ice in a **gingerly** manner?",
            options: [
                "To avoid damaging the ancient remains.",
                "Because the ice was melting too fast.",
                "Because they were afraid of waking him up.",
                "To ensure the tools didn't break."
            ],
            correctAnswer: "To avoid damaging the ancient remains."
        },
        {
            id: "b8-l2-p-q7",
            type: "multiple-choice",
            question: "Why do you think it was important to place the body in conditions that **simulated** those on the mountain?",
            options: [
                "To preserve it and prevent decay.",
                "To make the Iceman feel at home.",
                "To test if he would come back to life.",
                "To see if the ice would melt naturally."
            ],
            correctAnswer: "To preserve it and prevent decay."
        },
        {
            id: "b8-l2-p-q8",
            type: "multiple-choice",
            question: "From the **inventory** of items found with his body, what conclusion can be drawn about the Iceman's life?",
            options: [
                "He was likely a hunter or warrior prepared for survival.",
                "He was a wealthy merchant carrying goods to sell.",
                "He was a farmer looking for new land.",
                "He was a musician carrying instruments."
            ],
            correctAnswer: "He was likely a hunter or warrior prepared for survival."
        },
        {
            id: "b8-l2-p-q9",
            type: "multiple-choice",
            question: "What are three things the scientists learned about the Iceman that could not be determined by a **cursory** examination?",
            options: [
                "His age, the cause of death, and details about his health.",
                "His hair color, eye color, and height.",
                "His name, his village, and his language.",
                "The brand of his clothing and boots."
            ],
            correctAnswer: "His age, the cause of death, and details about his health."
        },
        {
            id: "b8-l2-p-q10",
            type: "multiple-choice",
            question: "How can we be certain that the body was 5,300 years old?",
            options: [
                "The age was corroborated by tests performed at several independent institutions.",
                "A diary with the date was found in his pocket.",
                "Scientists guessed based on the depth of the ice.",
                "His clothing style is still popular today."
            ],
            correctAnswer: "The age was corroborated by tests performed at several independent institutions."
        },
        {
            id: "b8-l2-p-q11",
            type: "multiple-choice",
            question: "Why do you think the Iceman's face looked as it did?",
            options: [
                "His face was set in a grimace likely due to the pain of his injury.",
                "He was smiling because he was happy.",
                "He was sleeping peacefully.",
                "His face was distorted by the helicopter ride."
            ],
            correctAnswer: "His face was set in a grimace likely due to the pain of his injury."
        },
        {
            id: "b8-l2-p-q12",
            type: "multiple-choice",
            question: "How did weather conditions in the Alps preserve the body?",
            options: [
                "The dry, icy winds dehydrated the body before it was buried in snow.",
                "The heavy rain washed away bacteria.",
                "The warm sun dried him out like a mummy.",
                "The constant snowfall froze him instantly."
            ],
            correctAnswer: "The dry, icy winds dehydrated the body before it was buried in snow."
        },
        {
            id: "b8-l2-p-q13",
            type: "multiple-choice",
            question: "What was the first step after the body was discovered?",
            options: [
                "The discoverers reported their find to the mountain lodge.",
                "They immediately dug him out with their bare hands.",
                "They called a press conference.",
                "They took the body home with them."
            ],
            correctAnswer: "The discoverers reported their find to the mountain lodge."
        },
        {
            id: "b8-l2-p-q14",
            type: "multiple-choice",
            question: "What information could the scientists **derive** from the amount of wear on the Iceman's teeth?",
            options: [
                "They estimated his age at 30 to 40 years.",
                "They determined his favorite food.",
                "They found out he had a toothache.",
                "They realized he had perfect dental hygiene."
            ],
            correctAnswer: "They estimated his age at 30 to 40 years."
        },
        {
            id: "b8-l2-p-q15",
            type: "multiple-choice",
            question: "Why would it be inaccurate to say that scientists had no interest in the Iceman?",
            options: [
                "Scientists were 'electrified' by the discovery and studied it extensively.",
                "Scientists only cared about the tools, not the body.",
                "Scientists were too busy with other discoveries.",
                "Scientists thought it was a hoax."
            ],
            correctAnswer: "Scientists were 'electrified' by the discovery and studied it extensively."
        }
    ]
};

export const b8_l2_facts: Story = {
    id: "b8-l2-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   The prefix *de-* has a number of meanings, including "to remove." To *dethrone* a king is to remove him from the throne. This prefix is combined with the Greek root *hydro*, "water," to form **dehydrate**. To *dehydrate* something is to remove the water from it. Other words formed from *hydro* include *hydrogen*, "a gas that combines with oxygen to form water," and *hydrant*, "a closed pipe with a spout from which water is drawn to fight fires."

*   An adjective is usually changed into an adverb by adding the *-ly* suffix; a *slow* driver is someone who drives *slowly*. But what if the adjective itself ends in *-ly*, as is the case with **gingerly**? Faced with writing *gingerlyly* as the adverbial form, users of the English language wisely decided that the adjective and adverb forms would be the same.

*   **Simulate** means "to imitate." (An animal will sometimes prevent an attack by *simulating* death.) Don't confuse this word with *stimulate*, which means "to make active." (*Light stimulates* growth in plants.) A word related to *simulate* is *dissimulate*, which means "to hide one's true feelings" or "to put up a false appearance." (The judge's penetrating questions made it very difficult for the witness to *dissimulate*.)
`,
    wordsIncluded: ["dehydrate", "gingerly", "simulate"]
};
