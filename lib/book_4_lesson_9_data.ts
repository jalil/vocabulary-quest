import { Story, VocabularyWord } from "./types";

export const b4_l9_words: VocabularyWord[] = [
    {
        id: "advantage",
        word: "advantage",
        definition: "(n.) Something that is helpful or useful.",
        exampleSentence: "It is an advantage to be able to speak more than one language when looking for a job.",
        imageEmoji: "👍",
        category: "Grade 4"
    },
    {
        id: "astonish",
        word: "astonish",
        definition: "(v.) To surprise or amaze.",
        exampleSentence: "It astonished me to discover that my new friend and I were born on the same day in the same town.",
        imageEmoji: "😲",
        category: "Grade 4"
    },
    {
        id: "confirm",
        word: "confirm",
        definition: "(v.) 1. To show or prove to be true. 2. To approve or give one's agreement to.",
        exampleSentence: "Before giving me a library card, the librarian asked me to confirm my address.",
        imageEmoji: "✅",
        category: "Grade 4"
    },
    {
        id: "distant",
        word: "distant",
        definition: "(adj.) 1. Very far away in time. 2. Very far away; not near or close by.",
        exampleSentence: "Space travel in the very distant future may involve journeys to the stars.",
        imageEmoji: "🔭",
        category: "Grade 4"
    },
    {
        id: "founder",
        word: "founder",
        definition: "(n.) A person who sets up something that lasts. (v.) To sink below the surface of the water.",
        exampleSentence: "George Washington and Thomas Jefferson are two of the founders of the United States.",
        imageEmoji: "🏛️",
        category: "Grade 4"
    },
    {
        id: "hamlet",
        word: "hamlet",
        definition: "(n.) A small village.",
        exampleSentence: "One street ran through the hamlet, which had one school, a small store, and about fifty houses.",
        imageEmoji: "🏘️",
        category: "Grade 4"
    },
    {
        id: "host",
        word: "host",
        definition: "(n.) 1. A large number. 2. One who greets and entertains guests and takes care of their needs at a party or restaurant.",
        exampleSentence: "Graceland is visited by hosts of people from all over the world who come to see the house where Elvis Presley lived.",
        imageEmoji: "👨‍🍳",
        category: "Grade 4"
    },
    {
        id: "misgiving",
        word: "misgiving",
        definition: "(n.) A feeling of doubt, uncertainty, or concern about what may happen in the future.",
        exampleSentence: "If Ellen had any misgivings about joining the group, she gave no sign of it.",
        imageEmoji: "😟",
        category: "Grade 4"
    },
    {
        id: "parch",
        word: "parch",
        definition: "(v.) To make or become very dry.",
        exampleSentence: "The sun parched the fields and made the grass turn brown.",
        imageEmoji: "🏜️",
        category: "Grade 4"
    },
    {
        id: "prospect",
        word: "prospect",
        definition: "(n.) Something that is waited for, expected, or hoped for. (v.) To look in the ground for valuable metals like gold and silver.",
        exampleSentence: "All the restaurants were full, and there seemed little prospect of our finding a place to eat.",
        imageEmoji: "⛏️",
        category: "Grade 4"
    },
    {
        id: "scarce",
        word: "scarce",
        definition: "(adj.) In short supply; not plentiful.",
        exampleSentence: "When gasoline is scarce, the price goes up.",
        imageEmoji: "💧",
        category: "Grade 4"
    },
    {
        id: "shrewd",
        word: "shrewd",
        definition: "(adj.) Clever; good at understanding what is needed and acting on it.",
        exampleSentence: "A shrewd teacher knows students need recess so they can take a break from schoolwork.",
        imageEmoji: "🧠",
        category: "Grade 4"
    },
    {
        id: "sole",
        word: "sole",
        definition: "(adj.) Being the only one of its kind; belonging to only one person or group. (n.) 1. The bottom surface of the foot or of a shoe or boot. 2. A flat fish that is caught and eaten for food.",
        exampleSentence: "After her husband died, Mrs. Mazoor became the sole owner of the toy store.",
        imageEmoji: "🐟",
        category: "Grade 4"
    },
    {
        id: "torment",
        word: "torment",
        definition: "(n.) Great pain or suffering. (v.) To cause pain or suffering.",
        exampleSentence: "Our dog was a big torment to our cat, so we kept them apart.",
        imageEmoji: "😫",
        category: "Grade 4"
    },
    {
        id: "typical",
        word: "typical",
        definition: "(adj.) Being like others of its kind.",
        exampleSentence: "A typical apartment in this area has two bedrooms, a kitchen, a living room, and one bathroom.",
        imageEmoji: "🏠",
        category: "Grade 4"
    }
];

export const b4_l9_story_1: Story = {
    id: "b4-l9-s1",
    title: "9A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 9.`,
    wordsIncluded: b4_l9_words.map(w => w.id),
    questions: [
        {
            id: "9a-q1",
            type: "multiple-choice",
            question: "1. (a) A hamlet is (b) a small village. (c) An advantage is (d) a large number.",
            options: ["a-b", "c-d"],
            correctAnswer: "a-b" // (a) A hamlet is (b) a small village.
        },
        {
            id: "9a-q2",
            type: "multiple-choice",
            question: "2. (a) is to hurt that person. (b) To torment someone (c) is to care for that person. (d) To astonish someone",
            options: ["b-a", "d-c"],
            correctAnswer: "b-a" // (b) To torment someone (a) is to hurt that person.
        },
        {
            id: "9a-q3",
            type: "multiple-choice",
            question: "3. (a) A typical city (b) is one that is very old. (c) is one that is far away. (d) A distant city",
            options: ["a-b", "d-c"],
            correctAnswer: "d-c" // (d) A distant city (c) is one that is far away.
        },
        {
            id: "9a-q4",
            type: "multiple-choice",
            question: "4. (a) The only one of its kind. (b) A sole is (c) A founder is (d) a flat fish used for food.",
            options: ["b-d", "b-a", "c-a"],
            correctAnswers: ["b-d", "b-a"] // "A sole is a flat fish used for food" or "A sole is the only one of its kind" (adj vs noun). Usually matching definition. (b)-(d) fits well. Also (b)-(a) works grammatically but usually definition matches part of speech. Let's accept both effectively or pick best match. 
            // Text: (b) A sole is ... (d) a flat fish used for food.
        },
        {
            id: "9a-q5",
            type: "multiple-choice",
            question: "5. (a) A shrewd plan (b) is one that is kept secret. (c) is one that is cleverly thought out. (d) A typical plan",
            options: ["a-c", "d-b"],
            correctAnswer: "a-c"
        },
        {
            id: "9a-q6",
            type: "multiple-choice",
            question: "6. (a) To astonish someone (b) is to get rid of that person. (c) To confirm someone (d) is to approve that person's appointment.",
            options: ["a-b", "c-d", "d-c"], // d-c makes sense: To confirm someone is to approve...
            correctAnswer: "c-d" // Wait, "To confirm someone" -> "is to approve that person's appointment". Yes.
        },
        {
            id: "9a-q7",
            type: "multiple-choice",
            question: "7. (a) doubts about the future. (b) unwanted gifts. (c) Advantages are (d) Misgivings are",
            options: ["d-a", "c-b"],
            correctAnswer: "d-a"
        },
        {
            id: "9a-q8",
            type: "multiple-choice",
            question: "8. (a) To founder is to (b) sink below the surface. (c) To prospect is to (d) start over.",
            options: ["a-b", "c-d"],
            correctAnswer: "a-b"
        },
        {
            id: "9a-q9",
            type: "multiple-choice",
            question: "9. (a) very thirsty. (b) To be scarce is to be (c) To be parched is to be (d) not wanted or needed.",
            options: ["b-d", "c-a"],
            correctAnswer: "c-a"
        },
        {
            id: "9a-q10",
            type: "multiple-choice",
            question: "10. (a) To take advantage of someone (b) is to amaze that person. (c) To astonish someone (d) is to dislike that person.",
            options: ["a-d", "c-b"], // (c) To astonish someone (b) is to amaze that person.
            correctAnswer: "c-b"
        }
    ]
};

export const b4_l9_story_2: Story = {
    id: "b4-l9-s2",
    title: "9B Just the Right Word",
    type: "exercise",
    content: `Select the word that replaces the bold phrase.`,
    wordsIncluded: b4_l9_words.map(w => w.id),
    questions: [
        {
            id: "9b-q1",
            type: "multiple-choice",
            question: "1. The **length of an imaginary line** from Earth to the moon is about a quarter of a million miles.",
            options: ["distance", "region", "prospect", "hamlet"],
            correctAnswer: "distance"
        },
        {
            id: "9b-q2",
            type: "multiple-choice",
            question: "2. The hot sun had **taken every drop of moisture out of** the soil so that nothing grew.",
            options: ["parched", "founded", "tormented", "astonished"],
            correctAnswer: "parched"
        },
        {
            id: "9b-q3",
            type: "multiple-choice",
            question: "3. Being tall is a great **helpful thing that can make all the difference** to a basketball player.",
            options: ["advantage", "prospect", "host", "misgiving"],
            correctAnswer: "advantage"
        },
        {
            id: "9b-q4",
            type: "multiple-choice",
            question: "4. After twenty-two miles, Asad was the **one and only** runner left in the race.",
            options: ["sole", "typical", "shrewd", "distant"],
            correctAnswer: "sole"
        },
        {
            id: "9b-q5",
            type: "multiple-choice",
            question: "5. Simon was very **good at knowing what to do in every situation**, and he managed to cause trouble for others without ever getting into trouble himself.",
            options: ["shrewd", "typical", "scarce", "sole"],
            correctAnswer: "shrewd"
        },
        {
            id: "9b-q6",
            type: "multiple-choice",
            question: "6. Mr. Bullwhistle is the **person who was the first owner** of this company.",
            options: ["founder", "host", "prospect", "sole"],
            correctAnswer: "founder"
        },
        {
            id: "9b-q7",
            type: "multiple-choice",
            question: "7. Blankets were **in short supply, without enough to go around**, so some campers got one, and some got none.",
            options: ["scarce", "typical", "distant", "shrewd"],
            correctAnswer: "scarce"
        },
        {
            id: "9b-q8",
            type: "multiple-choice",
            question: "8. Today's weather was **just like it usually is** on the island: It rained in the morning and poured in the afternoon.",
            options: ["typical", "sole", "scarce", "shrewd"],
            correctAnswer: "typical"
        },
        {
            id: "9b-q9",
            type: "multiple-choice",
            question: "9. A **very large number** of people came together in the park to celebrate Earth Day.",
            options: ["host", "founder", "hamlet", "advantage"],
            correctAnswer: "host"
        },
        {
            id: "9b-q10",
            type: "multiple-choice",
            question: "10. Baby Alice was busy **being cruel and causing pain to** the cat by pulling its tail.",
            options: ["tormenting", "founding", "parching", "astonishing"],
            correctAnswer: "tormenting"
        }
    ]
};

export const b4_l9_story_3: Story = {
    id: "b4-l9-s3",
    title: "9C Applying Meanings",
    type: "exercise",
    content: `Circle the letter or letters next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l9_words.map(w => w.id),
    questions: [
        {
            id: "9c-q1",
            type: "multiple-choice",
            question: "1. Which of the following could cause **torment**?",
            options: ["(a) a bad sunburn", "(b) a broken shoelace", "(c) looking at the moon", "(d) scoring the winning goal"],
            correctAnswer: "(a) a bad sunburn"
        },
        {
            id: "9c-q2",
            type: "multiple-choice",
            question: "2. Which of the following has a **sole**?",
            options: ["(a) a fish", "(b) a foot", "(c) a boot", "(d) a shoe"],
            correctAnswers: ["(a) a fish", "(b) a foot", "(c) a boot", "(d) a shoe"] // All are correct physically or biologically (sole fish, sole of foot/boot/shoe).
        },
        {
            id: "9c-q3",
            type: "multiple-choice",
            question: "3. Which of the following might affect a person's **prospects** for getting into college?",
            options: ["(a) red hair", "(b) leadership qualities", "(c) poor grades", "(d) ability at sports"],
            correctAnswers: ["(b) leadership qualities", "(c) poor grades", "(d) ability at sports"]
        },
        {
            id: "9c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could easily be taken **advantage** of?",
            options: ["(a) a weak person", "(b) a foolish person", "(c) a strong person", "(d) a small child"],
            correctAnswers: ["(a) a weak person", "(b) a foolish person", "(d) a small child"]
        },
        {
            id: "9c-q5",
            type: "multiple-choice",
            question: "5. Which of the following might a **typical** person traveling on vacation carry?",
            options: ["(a) a camera", "(b) a guide book", "(c) a bucket", "(d) a lamp"],
            correctAnswers: ["(a) a camera", "(b) a guide book"]
        },
        {
            id: "9c-q6",
            type: "multiple-choice",
            question: "6. Which of the following might cause a **scarcity** of water?",
            options: ["(a) too much demand for it", "(b) too little rain", "(c) a flood", "(d) anger"],
            correctAnswers: ["(a) too much demand for it", "(b) too little rain"]
        },
        {
            id: "9c-q7",
            type: "multiple-choice",
            question: "7. Which of the following might cause **astonishment**?",
            options: ["(a) a summer snowstorm", "(b) a flying car", "(c) a talking cat", "(d) a red apple"],
            correctAnswers: ["(a) a summer snowstorm", "(b) a flying car", "(c) a talking cat"]
        },
        {
            id: "9c-q8",
            type: "multiple-choice",
            question: "8. Which of the following can be **confirmed**?",
            options: ["(a) a sigh", "(b) a result", "(c) a fact", "(d) beauty"],
            correctAnswers: ["(b) a result", "(c) a fact"]
        }
    ]
};

export const b4_l9_story_4: Story = {
    id: "b4-l9-s4",
    title: "9D Word Study: Suffixes",
    type: "exercise",
    content: `Change each of the verbs into a noun by adding the correct suffix and writing the word in the space provided. All the words are from earlier lessons.
    
    Suffixes: -ment, -tion, -ation, -ion`,
    wordsIncluded: [], // Intro/Suffix words
    questions: [
        {
            id: "9d-q1",
            type: "open-ended",
            question: "1. alter",
            correctAnswer: "alteration"
        },
        {
            id: "9d-q2",
            type: "open-ended",
            question: "2. confuse",
            correctAnswer: "confusion"
        },
        {
            id: "9d-q3",
            type: "open-ended",
            question: "3. exclaim",
            correctAnswer: "exclamation"
        },
        {
            id: "9d-q4",
            type: "open-ended",
            question: "4. intend",
            correctAnswer: "intention"
        },
        {
            id: "9d-q5",
            type: "open-ended",
            question: "5. persist",
            correctAnswer: "persistence" // Wait, -ence isn't in list? Ah, checking conventions. "persistence" is correct word. List says -ment, -tion, -ation, -ion. Maybe "persistence" is accepted or source text implies general suffix knowledge. Let's assume standard english. 
            // Wait, previous lessons words. 
            // Let's stick to standard noun forms.
        },
        {
            id: "9d-q6",
            type: "open-ended",
            question: "6. migrate",
            correctAnswer: "migration"
        },
        {
            id: "9d-q7",
            type: "open-ended",
            question: "7. prepare",
            correctAnswer: "preparation"
        },
        {
            id: "9d-q8",
            type: "open-ended",
            question: "8. locate",
            correctAnswer: "location"
        }
    ]
};

export const b4_l9_story_5: Story = {
    id: "b4-l9-s5",
    title: "Reading Passage: The Forty-Niners",
    type: "non-fiction",
    content: `
The story was so exciting; it was in all the newspapers. It was December of 1848. Television and radio were discoveries that lay in the **distant** future; newspapers were the **sole** means of finding out what was happening in the world. And something to stir the readers' imaginations was going on in California! Millions of people in homes across the United States read about it over the breakfast table. President James Polk had just **confirmed** what until then only a relatively few people knew for certain. Gold had been discovered in California—lots of it. Now everyone was in on the secret.

A **typical** worker in the 1840s earned about a dollar a day. Gold sold for twenty dollars an ounce. And in California, gold was lying on the ground and in streambeds, exposed to view, just waiting to be picked up. Not surprisingly, thousands of Americans quit their jobs and headed for the promised land in the West. Many left behind their families. If they had **misgivings**, they tried to disguise them from their wives and children. The plan was to return as soon as they struck it rich. It was now 1849. Those who joined the **hosts** taking part in the California Gold Rush were called the "forty-niners."

There were no airplanes, no trains, no cars, and no roads to California in 1849. San Francisco was a **hamlet** of less than two thousand people. Many Easterners took the hazardous journey by ship. From New York, they had to sail seventeen thousand miles around the tip of South America. The journey took about six months. Those with families and lots of goods to carry traveled overland by covered wagon. This journey also took about six months. Crossing the Nevada desert, they experienced the worst part of the journey. Water was **scarce**; often the exhausted travelers had drunk the last drop with days to go before journey's end. They were easy victims for merchants who set out from San Francisco and traveled east to meet the **parched** travelers. These businessmen brought wagons loaded with barrels of water. The travelers could now get water—for a price. **Tormented** by thirst, they paid a dollar, five dollars, even a hundred dollars for a glass of the precious liquid.

Merchants like these took **advantage** of the law of supply and demand. This law states that something is worth whatever someone is willing to pay for it. Sam Brannan understood this law better than anyone. He was a San Francisco merchant and one of the city's **founders**. The people who had first discovered the gold had tried to keep it quiet. But word leaked out. Soon after Brannan heard the news, he repeated it to large gatherings of eager listeners. He waved a jar of gold dust as proof. Suddenly, lots of people wanted tools for gold digging. They needed pickaxes and shovels. They needed the metal pans necessary for sifting through small rocks, water, and sand. And people could get this equipment—again, for a price. Before spreading the good news, Brannan had prepared. He had gone around the area **shrewdly** buying up every pickax, shovel, and pan he could **locate**. A metal pan Brannan bought for twenty cents he could now sell for fifteen dollars. And even at that price, there was no shortage of takers. In nine weeks, Brannan made thirty-six thousand dollars. He went on to become the richest man in California. He was so rich he even circulated his own money!

Over a quarter of a million people had poured into California by the mid-1850s. Many of the new arrivals were attracted to San Francisco. The city grew at an **astonishing** rate. The price of a house went up tenfold in less than a year. For a period of time, the number of people living there doubled every ten days. Most never got rich, and many who did were not able to hold on to their newfound wealth. Sam Brannan died a poor man in 1889; he didn't even leave enough money to pay for his own funeral. There were some winners, though. These were the forty-niners who had come not to **prospect** for gold but to work hard at ordinary jobs. These were the trailblazers who built California and made it what it is today: the Golden State.
    `,
    wordsIncluded: b4_l9_words.map(w => w.id),
    questions: [
        {
            id: "rp-q1",
            type: "open-ended",
            question: "1. By what nickname were the **hosts** of people heading for California known?",
            correctAnswer: "They were known as the forty-niners."
        },
        {
            id: "rp-q2",
            type: "open-ended",
            question: "2. How did some businessmen get rich off the suffering of **parched** travelers?",
            correctAnswer: "They sold water at very high prices to travelers crossing the desert who had run out of water."
        },
        {
            id: "rp-q3",
            type: "open-ended",
            question: "3. Why do you think these businessmen took **advantage** of these travelers?",
            correctAnswer: "They knew the travelers were desperate for water and would pay anything for it."
        },
        {
            id: "rp-q4",
            type: "open-ended",
            question: "4. Why did water cost so much?",
            correctAnswer: "Because it was scarce (supply low) and travelers needed it to survive (demand high)."
        },
        {
            id: "rp-q5",
            type: "open-ended",
            question: "5. Did most people earn a lot of money in the 1840s?",
            correctAnswer: "No, a typical worker earned about a dollar a day."
        },
        {
            id: "rp-q6",
            type: "open-ended",
            question: "6. Describe some of the **torments** travelers in the desert suffered.",
            correctAnswer: "They suffered from extreme thirst and exhaustion."
        },
        {
            id: "rp-q7",
            type: "open-ended",
            question: "7. Was San Francisco a big city in the early 1840s?",
            correctAnswer: "No, it was a hamlet of less than two thousand people."
        },
        {
            id: "rp-q8",
            type: "open-ended",
            question: "8. What **misgivings** might some of the people who left their homes in the East have had?",
            correctAnswer: "They might have been worried about leaving their families, the dangerous journey, or if they would actually find gold."
        },
        {
            id: "rp-q9",
            type: "open-ended",
            question: "9. Who was Sam Brannan?",
            correctAnswer: "He was a San Francisco merchant and one of the city's founders who became rich selling supplies."
        },
        {
            id: "rp-q10",
            type: "open-ended",
            question: "10. In what way had Sam Brannan acted **shrewdly** before spreading the news that gold had been discovered?",
            correctAnswer: "He bought up all the pickaxes, shovels, and pans in the area so he could sell them at a huge profit."
        }
    ]
};

export const b4_l9_story_6: Story = {
    id: "b4-l9-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* *Astound* (Lesson 4) and **astonish** are synonyms. A third synonym, less common, is *thunderstruck*. It expresses even greater surprise. If you are *thunderstruck*, you feel as if you have been struck by lightning, thunder's frequent companion. *Astound* and *astonish* are formed from the Latin word *tonere*, meaning "to thunder"!

* In Exercise D you learned how suffixes change one part of speech to another; for example, the suffix *-ation* changes the verb **alter** into the noun *alteration*. Another suffix, *-ess*, changes nouns that refer to males into nouns that refer to females. *Lion* becomes *lioness*, *actor* becomes *actress*, and **host** becomes *hostess*.
`,
    wordsIncluded: ["astonish", "host"],
    questions: []
};
