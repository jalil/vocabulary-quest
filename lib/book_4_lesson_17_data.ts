import { Story, VocabularyWord } from "./types";

export const b4_l17_words: VocabularyWord[] = [
    {
        id: "address",
        word: "address",
        definition: "(v.) 1. To direct one's words to. 2. To apply oneself to something. (n.) 1. A written or spoken speech. 2. The place where someone lives or receives mail.",
        exampleSentence: "The head of the honor society addressed all the students.",
        imageEmoji: "🎤",
        category: "Grade 4"
    },
    {
        id: "approve",
        word: "approve",
        definition: "(v.) To think well of; to agree to. (n.) approval: Thinking well of; agreeing to.",
        exampleSentence: "My friend Lucia approved my choice of a dress for the party.",
        imageEmoji: "👍",
        category: "Grade 4"
    },
    {
        id: "conclude",
        word: "conclude",
        definition: "(v.) 1. To bring or come to an end. 2. To form an opinion. (n.) conclusion: 1. The end. 2. A judgment.",
        exampleSentence: "It took us at least ten minutes to reach the exit after the concert concluded.",
        imageEmoji: "🏁",
        category: "Grade 4"
    },
    {
        id: "deprive",
        word: "deprive",
        definition: "(v.) To keep from having; to take away from.",
        exampleSentence: "The thunderstorm at 3:00 a.m. deprived me of a good night's sleep.",
        imageEmoji: "🚫",
        category: "Grade 4"
    },
    {
        id: "elder",
        word: "elder",
        definition: "(n.) 1. A person who is older. 2. Someone people look up to because of age and experience. (adj.) Older.",
        exampleSentence: "Sometimes we can learn a lot from our elders just by observing the way they live their lives.",
        imageEmoji: "👵",
        category: "Grade 4"
    },
    {
        id: "escort",
        word: "escort",
        definition: "(v.) To travel with; to guide or protect a person. (n.) One or more persons that escort.",
        exampleSentence: "When her father was away, Anna asked her older sister to escort her to a movie with her friends.",
        imageEmoji: "🛡️",
        category: "Grade 4"
    },
    {
        id: "fare",
        word: "fare",
        definition: "(n.) 1. Money paid for a trip, by bus or train, for example. 2. Food and drink. (v.) To get along.",
        exampleSentence: "What is the fare from Chicago to Orlando by plane?",
        imageEmoji: "🎫",
        category: "Grade 4"
    },
    {
        id: "forlorn",
        word: "forlorn",
        definition: "(adj.) Sad and lonely.",
        exampleSentence: "Sam looked lost and forlorn as he sat waiting for his mother.",
        imageEmoji: "😔",
        category: "Grade 4"
    },
    {
        id: "hearty",
        word: "hearty",
        definition: "(adj.) 1. Healthy; strong. 2. Satisfying and full of flavor; tasty. 3. Friendly and enthusiastic.",
        exampleSentence: "Grandpa liked to boast that at the age of eighty-five, he still had a hearty appetite at every meal.",
        imageEmoji: "🥘",
        category: "Grade 4"
    },
    {
        id: "inhale",
        word: "inhale",
        definition: "(v.) To breathe in.",
        exampleSentence: "I tried to catch my breath by inhaling deeply several times.",
        imageEmoji: "🌬️",
        category: "Grade 4"
    },
    {
        id: "merit",
        word: "merit",
        definition: "(v.) To deserve. (n.) Good qualities; worth. (n. pl.) merits: The actual facts.",
        exampleSentence: "The students' ideas for changes in the sports program merit attention by the principal.",
        imageEmoji: "🎖️",
        category: "Grade 4"
    },
    {
        id: "stingy",
        word: "stingy",
        definition: "(adj.) Not generous.",
        exampleSentence: "Azania is too stingy to share her candy with anyone.",
        imageEmoji: "😠",
        category: "Grade 4"
    },
    {
        id: "summon",
        word: "summon",
        definition: "(v.) 1. To call or send for. 2. To call forth; to gather.",
        exampleSentence: "My father summoned me to the phone.",
        imageEmoji: "📢",
        category: "Grade 4"
    },
    {
        id: "valiant",
        word: "valiant",
        definition: "(adj.) Full of courage; brave.",
        exampleSentence: "The firefighters were honored for their valiant deeds.",
        imageEmoji: "⚔️",
        category: "Grade 4"
    },
    {
        id: "waft",
        word: "waft",
        definition: "(v.) To move or be moved lightly over water or air; to drift.",
        exampleSentence: "Petals from the cherry blossoms wafted over the path on the gentle breeze.",
        imageEmoji: "🍃",
        category: "Grade 4"
    }
];

export const b4_l17_story_1: Story = {
    id: "b4-l17-s1",
    title: "17A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 17.`,
    wordsIncluded: b4_l17_words.map(w => w.id),
    questions: [
        {
            id: "17a-q1",
            type: "multiple-choice",
            question: "1. (a) An address is (c) time spent alone. (b) A fare is (d) the money charged for a trip.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "b-d"
        },
        {
            id: "17a-q2",
            type: "multiple-choice",
            question: "2. (a) breathe it in. (c) To conclude something is to (b) do without it. (d) To inhale something is to",
            options: ["d-a", "c-b", "d-b", "c-a"],
            correctAnswer: "d-a"
        },
        {
            id: "17a-q3",
            type: "multiple-choice",
            question: "3. (a) one that is enthusiastic. (c) A forlorn expression is (b) one that shows agreement. (d) A hearty laugh is",
            options: ["d-a", "c-b", "d-b", "c-a"],
            correctAnswer: "d-a"
        },
        {
            id: "17a-q4",
            type: "multiple-choice",
            question: "4. (a) The conclusion of a play is (c) the beginning of it. (b) The merit of a play is (d) the end of it.",
            options: ["a-d", "b-c", "a-c", "b-d"],
            correctAnswer: "a-d"
        },
        {
            id: "17a-q5",
            type: "multiple-choice",
            question: "5. (a) shun that person. (c) To deprive someone is to (b) ask that person to come. (d) To summon someone is to",
            options: ["d-b", "c-a", "d-a", "c-b"],
            correctAnswer: "d-b"
        },
        {
            id: "17a-q6",
            type: "multiple-choice",
            question: "6. (a) to be worthy of it. (c) To be deprived of something is (b) To merit something is (d) to value it.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        },
        {
            id: "17a-q7",
            type: "multiple-choice",
            question: "7. (a) A person's approval is (c) A person's address is (b) the place he lives. (d) a feeling of distrust.",
            options: ["c-b", "a-d", "c-d", "a-b"],
            correctAnswer: "c-b"
        },
        {
            id: "17a-q8",
            type: "multiple-choice",
            question: "8. (a) Someone who is forlorn (c) feels good about the future. (b) Someone who is valiant (d) feels sad and lonely.",
            options: ["a-d", "b-c", "a-c", "b-d"],
            correctAnswer: "a-d"
        },
        {
            id: "17a-q9",
            type: "multiple-choice",
            question: "9. (a) a business partner. (c) a wise, old person. (b) An escort is (d) An elder is",
            options: ["d-c", "b-a", "d-a", "b-c"],
            correctAnswer: "d-c"
        },
        {
            id: "17a-q10",
            type: "multiple-choice",
            question: "10. (a) A stingy person is (c) one who is full of courage. (b) A valiant person is (d) one who is generous.",
            options: ["b-c", "a-d", "b-d", "a-c"],
            correctAnswer: "b-c"
        }
    ]
};

export const b4_l17_story_2: Story = {
    id: "b4-l17-s2",
    title: "17B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b4_l17_words.map(w => w.id),
    questions: [
        {
            id: "17b-q1",
            type: "multiple-choice",
            question: "1. The smell of freshly mown hay **was carried by the breeze** across the meadow.",
            options: ["wafted", "inhaled", "escorted", "summoned"],
            correctAnswer: "wafted"
        },
        {
            id: "17b-q2",
            type: "multiple-choice",
            question: "2. Trees that are **prevented from getting a supply** of water will die.",
            options: ["deprived", "concluded", "approved", "merited"],
            correctAnswer: "deprived"
        },
        {
            id: "17b-q3",
            type: "multiple-choice",
            question: "3. The New Town Inn boasts that it offers the finest **food and drink** at the lowest prices in town.",
            options: ["fare", "merits", "hearty", "addresses"],
            correctAnswer: "fare"
        },
        {
            id: "17b-q4",
            type: "multiple-choice",
            question: "4. My **view, after thinking about all the issues,** is that no real harm was done.",
            options: ["conclusion", "approval", "address", "fare"],
            correctAnswer: "conclusion"
        },
        {
            id: "17b-q5",
            type: "multiple-choice",
            question: "5. \"Allow me to **stay beside you and walk with you** to the dining room,\" Grandpa said to Grandma with a wink.",
            options: ["escort", "summon", "address", "approve"],
            correctAnswer: "escort"
        },
        {
            id: "17b-q6",
            type: "multiple-choice",
            question: "6. Samantha cannot go to the party without her parents' **agreement that she is doing the right thing**.",
            options: ["approval", "merit", "address", "conclusion"],
            correctAnswer: "approval"
        },
        {
            id: "17b-q7",
            type: "multiple-choice",
            question: "7. After such a **tasty and satisfying** meal, we all felt like taking naps.",
            options: ["hearty", "stingy", "forlorn", "valiant"],
            correctAnswer: "hearty"
        },
        {
            id: "17b-q8",
            type: "multiple-choice",
            question: "8. They are so **unwilling to spend any more than they absolutely have to** that they expect me to babysit for fifty cents an hour.",
            options: ["stingy", "valiant", "hearty", "forlorn"],
            correctAnswer: "stingy"
        },
        {
            id: "17b-q9",
            type: "multiple-choice",
            question: "9. The lawyer said that as long as the case is decided on its **facts as they are known**, her client will win.",
            options: ["merits", "conclusions", "fares", "approvals"],
            correctAnswer: "merits"
        },
        {
            id: "17b-q10",
            type: "multiple-choice",
            question: "10. Mayor Coffey **made a few remarks to** the people gathered outside City Hall, thanking them for their support.",
            options: ["addressed", "summoned", "escorted", "wafted"],
            correctAnswer: "addressed"
        }
    ]
};

export const b4_l17_story_3: Story = {
    id: "b4-l17-s3",
    title: "17C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l17_words.map(w => w.id),
    questions: [
        {
            id: "17c-q1",
            type: "multiple-choice",
            question: "1. Which of the following can be **concluded**?",
            options: ["(a) a speech", "(b) an agreement", "(c) a meeting", "(d) a project"],
            correctAnswers: ["(a) a speech", "(b) an agreement", "(c) a meeting", "(d) a project"] // All can be concluded (ended or finalized).
        },
        {
            id: "17c-q2",
            type: "multiple-choice",
            question: "2. Which of the following can **waft**?",
            options: ["(a) smoke", "(b) smells", "(c) stars", "(d) hail"],
            correctAnswers: ["(a) smoke", "(b) smells"]
        },
        {
            id: "17c-q3",
            type: "multiple-choice",
            question: "3. Which of the following can be **hearty**?",
            options: ["(a) a meal", "(b) a greeting", "(c) a storm", "(d) an appetite"],
            correctAnswers: ["(a) a meal", "(b) a greeting", "(d) an appetite"]
        },
        {
            id: "17c-q4",
            type: "multiple-choice",
            question: "4. Which of the following show **approval**?",
            options: ["(a) turning thumbs down", "(b) applauding", "(c) cheering", "(d) booing"],
            correctAnswers: ["(b) applauding", "(c) cheering"]
        },
        {
            id: "17c-q5",
            type: "multiple-choice",
            question: "5. Which of the following is a **valiant** act?",
            options: ["(a) giving up easily", "(b) standing up for one's beliefs", "(c) running away", "(d) blaming someone else"],
            correctAnswer: "(b) standing up for one's beliefs"
        },
        {
            id: "17c-q6",
            type: "multiple-choice",
            question: "6. Of which of the following can one be **deprived**?",
            options: ["(a) one's freedom", "(b) one's rights", "(c) one's good name", "(d) one's business"],
            correctAnswers: ["(a) one's freedom", "(b) one's rights", "(c) one's good name", "(d) one's business"]
        },
        {
            id: "17c-q7",
            type: "multiple-choice",
            question: "7. Which of the following can be **addressed**?",
            options: ["(a) a meeting", "(b) a person", "(c) a package", "(d) a nation"],
            correctAnswers: ["(a) a meeting", "(b) a person", "(c) a package", "(d) a nation"]
        },
        {
            id: "17c-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **inhaled**?",
            options: ["(a) air", "(b) concrete", "(c) steam", "(d) music"],
            correctAnswers: ["(a) air", "(c) steam"]
        }
    ]
};

export const b4_l17_story_4: Story = {
    id: "b4-l17-s4",
    title: "17D Word Study: Homophones",
    type: "exercise",
    content: `Choose the correct word from the homophone pair to complete each sentence.`,
    wordsIncluded: b4_l17_words.map(w => w.id),
    questions: [
        {
            id: "17d-q1",
            type: "multiple-choice",
            question: "1. The rain turned to _______ as the temperature fell.",
            options: ["hail", "hale"],
            correctAnswer: "hail"
        },
        {
            id: "17d-q2",
            type: "multiple-choice",
            question: "2. He was over ninety, but looked as _______ as ever.",
            options: ["hail", "hale"],
            correctAnswer: "hale"
        },
        {
            id: "17d-q3",
            type: "multiple-choice",
            question: "3. We joined the fishermen at the end of the _______.",
            options: ["pier", "peer"],
            correctAnswer: "pier"
        },
        {
            id: "17d-q4",
            type: "multiple-choice",
            question: "4. I had to stand on tiptoe to _______ into the room.",
            options: ["pier", "peer"],
            correctAnswer: "peer"
        },
        {
            id: "17d-q5",
            type: "multiple-choice",
            question: "5. A _______ carries blood to the heart.",
            options: ["vein", "vain"],
            correctAnswer: "vein"
        },
        {
            id: "17d-q6",
            type: "multiple-choice",
            question: "6. A _______ person loves to be flattered.",
            options: ["vein", "vain"],
            correctAnswer: "vain"
        },
        {
            id: "17d-q7",
            type: "multiple-choice",
            question: "7. I used a drill to _______ the hole.",
            options: ["bore", "boar"],
            correctAnswer: "bore"
        },
        {
            id: "17d-q8",
            type: "multiple-choice",
            question: "8. A male pig is called a _______.",
            options: ["bore", "boar"],
            correctAnswer: "boar"
        },
        {
            id: "17d-q9",
            type: "multiple-choice",
            question: "9. The bus _______ to Hoboken is ten dollars.",
            options: ["fare", "fair"],
            correctAnswer: "fare"
        },
        {
            id: "17d-q10",
            type: "multiple-choice",
            question: "10. The county _______ begins this Saturday.",
            options: ["fare", "fair"],
            correctAnswer: "fair"
        },
        {
            id: "17d-q11",
            type: "multiple-choice",
            question: "11. Jonah played a _______ on his guitar.",
            options: ["chord", "cord"],
            correctAnswer: "chord"
        },
        {
            id: "17d-q12",
            type: "multiple-choice",
            question: "12. We tied the bundle of wood with a length of _______.",
            options: ["chord", "cord"],
            correctAnswer: "cord"
        },
        {
            id: "17d-q13",
            type: "multiple-choice",
            question: "13. Every _______ of the tree was full of apples.",
            options: ["bough", "bow"],
            correctAnswer: "bough"
        },
        {
            id: "17d-q14",
            type: "multiple-choice",
            question: "14. The old man greeted the strangers with a polite _______.",
            options: ["bough", "bow"],
            correctAnswer: "bow"
        }
    ]
};

export const b4_l17_story_5: Story = {
    id: "b4-l17-s5",
    title: "Reading Passage: An African Folktale",
    type: "non-fiction",
    content: `
Some folktales tell of **valiant** deeds performed by great heroes; an example is the Japanese story of Tokoyo and the sea monster. Others explain how things came to be. The Welsh tale of the silver cows and the water lilies is one such story. A third group tells how the weak and helpless defeat the strong and powerful. This does not always happen in real life, but it does happen in folktales. An example is this East African story of the *maskini* and the *tajiri*.

Every evening, the *tajiri*, or rich man, sat down to a **hearty** meal prepared for him in his own kitchen. The food that was left over would have been enough to feed a whole family. But the *tajiri* was extremely **stingy**. The leftovers from his table went to his pigs to fatten them up for later use.

The *maskini*, or poor man, lived on simple **fare**. He owned a goat that gave him milk and cheese, but his evening meal was usually nothing more than a bowl of porridge. However, he had found a way to make it more enjoyable. He would eat his meal while hidden outside the *tajiri*'s kitchen. There, wonderful smells came **wafting** through the open window. They made the *maskini*'s mouth water, so the simple porridge seemed like a feast.

One evening, the *tajiri* decided to take a walk in his garden to work up an appetite for dinner. He saw the *maskini* sitting outside the kitchen window. As the *tajiri* watched, he saw the *maskini* **inhale** deeply. A blissful look came over the poor man's face. How dare he help himself to my smells, thought the *tajiri*. He ordered his servants to seize the *maskini* and **escort** him to the village jail.

A few days later, the *maskini* was **summoned** before the court that met weekly in the village center. The village **elders** would decide the case on its **merits**. The *tajiri* explained that the smells from the kitchen belonged to him; the *maskini* was **depriving** him of them. As payment, he demanded the *maskini*'s goat, which was the only thing he owned. When asked to respond, the *maskini*, looking very **forlorn**, could only stare at the ground and shuffle his feet, afraid to speak. The village elders now withdrew to the shade of a nearby baobab tree. After a brief discussion, the village chief came forward and **addressed** the crowd.

"The *maskini* did help himself to the smells from the *tajiri*'s kitchen," she said. "However, he did not receive any food from him. We have **concluded**, therefore, that the *tajiri* should not be given the goat. However, in fairness to him we believe he should have the right to smell the *maskini*'s goat whenever he wants."

The *tajiri* was furious. He left without saying a word. But the people of the village **approved** the court's decision. They felt that justice had been done.
    `,
    wordsIncluded: b4_l17_words.map(w => w.id),
    questions: []
};

export const b4_l17_story_6: Story = {
    id: "b4-l17-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* President Lincoln gave a famous speech at Gettysburg in 1863 that begins, "Four score and seven years ago." Why do we refer to it as the Gettysburg **Address** rather than the Gettysburg Speech? One reason is that *address* suggests something grander and more important than a *speech*. Anyone can make a *speech*, but you have to be someone important and the occasion a special one for it to be called an *address*.

* **Fare** and *fair* are homophones. They sound exactly the same but have different meanings and spellings. *Fair* is an adjective with several meanings and is also a noun, as visitors to a county *fair* know very well.

* As an adjective, **elder** means "greater than another in age or seniority." If we refer to someone greatest in age or seniority, we use *eldest*. (Mark is my **elder** brother. He is not the *eldest*.) (Sheila is the *eldest* of six children.) *Elder* and *eldest* are used when referring to persons. *Older* and *oldest* can refer either to persons or things.

* We turn many words into their opposites simply by changing the prefix. **Inhale** means "to breathe in." It is made up of the prefix *in-*, meaning "in" and the root formed from the Latin verb *halare*, meaning "to breathe." By knowing that the prefix *ex-* means "out," you can turn *inhale* into its opposite and make a word that means "to breathe out." What is that word?
`,
    wordsIncluded: ["address", "fare", "elder", "inhale"],
    questions: []
};
