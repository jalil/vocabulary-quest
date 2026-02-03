import { Story, VocabularyWord } from "./types";

export const b6_l20_words: VocabularyWord[] = [
    {
        id: "bluster",
        word: "bluster",
        definition: "(v.) To talk in a loud and bullying manner. (n.) Loud, boastful or threatening talk or commotion. blustering (adj.) Blowing loudly and violently.",
        exampleSentence: "\"It's none of your business,\" he blustered when asked why he had stolen the money.",
        imageEmoji: "🌬️",
        category: "Grade 6",
        synonyms: ["rant", "roar", "storm"],
        antonyms: ["be quiet", "whisper"]
    },
    {
        id: "council",
        word: "council",
        definition: "(n.) A group of people who meet to decide or plan something, give advice, or make laws.",
        exampleSentence: "Members of the town council are elected for a two-year term.",
        imageEmoji: "👥",
        category: "Grade 6",
        synonyms: ["board", "committee", "panel"],
        antonyms: []
    },
    {
        id: "dwell",
        word: "dwell",
        definition: "(v.) 1. To live or reside. 2. To keep thinking about. dwelling (n.) A house or home.",
        exampleSentence: "How long did you dwell in the house where you were born?",
        imageEmoji: "🏠",
        category: "Grade 6",
        synonyms: ["live", "reside", "inhabit"],
        antonyms: ["move", "leave", "vacate"]
    },
    {
        id: "exterminate",
        word: "exterminate",
        definition: "(v.) To kill or destroy completely.",
        exampleSentence: "The hardware store sells products to exterminate ants and cockroaches.",
        imageEmoji: "🚫",
        category: "Grade 6",
        synonyms: ["destroy", "eliminate", "eradicate"],
        antonyms: ["create", "build", "generate"]
    },
    {
        id: "fee",
        word: "fee",
        definition: "(n.) A fixed sum of money charged.",
        exampleSentence: "The admission fee for the art museum is five dollars.",
        imageEmoji: "💵",
        category: "Grade 6",
        synonyms: ["charge", "cost", "price"],
        antonyms: []
    },
    {
        id: "garment",
        word: "garment",
        definition: "(n.) Any piece of clothing.",
        exampleSentence: "These delicate garments should be washed by hand.",
        imageEmoji: "👗",
        category: "Grade 6",
        synonyms: ["clothing", "apparel", "dress"],
        antonyms: []
    },
    {
        id: "infest",
        word: "infest",
        definition: "(v.) To overrun in a way that causes harm or annoyance.",
        exampleSentence: "Drastic measures are needed to deal with rats that infest the neighborhood.",
        imageEmoji: "🐀",
        category: "Grade 6",
        synonyms: ["overrun", "invade", "plague"],
        antonyms: ["clean", "purify", "clear"]
    },
    {
        id: "insist",
        word: "insist",
        definition: "(v.) To take a stand and hold firmly to it. insistent (adj.) Unyielding; firm.",
        exampleSentence: "Her parents insist that she vacate her room so the walls can be scoured and painted.",
        imageEmoji: "😤",
        category: "Grade 6",
        synonyms: ["demand", "persist", "maintain"],
        antonyms: ["waver", "give up", "yield"]
    },
    {
        id: "paltry",
        word: "paltry",
        definition: "(adj.) Very small and worthless; hardly worth considering.",
        exampleSentence: "Five dollars may seem a paltry sum today, but in 1914 it was a day's wage for an automobile worker.",
        imageEmoji: "🤏",
        category: "Grade 6",
        synonyms: ["meager", "insignificant", "trivial"],
        antonyms: ["significant", "substantial", "important"]
    },
    {
        id: "peculiar",
        word: "peculiar",
        definition: "(adj.) 1. Odd; strange. 2. Limited to a person, country, group, or thing.",
        exampleSentence: "It seems peculiar that such a frugal person would give everyone extravagant gifts.",
        imageEmoji: "🤪",
        category: "Grade 6",
        synonyms: ["strange", "odd", "weird"],
        antonyms: ["normal", "ordinary", "common"]
    },
    {
        id: "rash",
        word: "rash",
        definition: "(n.) 1. A breaking out of red spots on the skin. 2. A series of outbreaks. (adj.) Too hasty or reckless.",
        exampleSentence: "This ointment will soothe the baby's rash.",
        imageEmoji: "🤒",
        category: "Grade 6",
        synonyms: ["hasty", "reckless", "impulsive"],
        antonyms: ["careful", "cautious", "thoughtful"]
    },
    {
        id: "revenge",
        word: "revenge",
        definition: "(n.) 1. The desire to return harm for harm done. 2. The act of paying back wrong done. (v.) To get even for a wrong done; to retaliate.",
        exampleSentence: "Revenge for past wrongs was the only thing on their minds.",
        imageEmoji: "😠",
        category: "Grade 6",
        synonyms: ["vengeance", "retribution", "reprisal"],
        antonyms: ["forgiveness", "pardon", "mercy"]
    },
    {
        id: "rodent",
        word: "rodent",
        definition: "(n.) An animal with sharp teeth for gnawing. (adj.) Of or relating to rodents.",
        exampleSentence: "Small rodents such as gerbils and hamsters are popular pets.",
        imageEmoji: "🐹",
        category: "Grade 6",
        synonyms: ["rat", "mouse", "beaver"],
        antonyms: []
    },
    {
        id: "swarm",
        word: "swarm",
        definition: "(v.) To move in large numbers. (n.) A large, moving crowd or mass.",
        exampleSentence: "Soccer fans swarmed into the stadium for the final game of the series.",
        imageEmoji: "🐝",
        category: "Grade 6",
        synonyms: ["crowd", "horde", "mob"],
        antonyms: []
    },
    {
        id: "vat",
        word: "vat",
        definition: "(n.) A large container such as a tub or barrel used for holding liquids.",
        exampleSentence: "Olive oil is stored in these large vats.",
        imageEmoji: "🛢️",
        category: "Grade 6",
        synonyms: ["tub", "tank", "barrel"],
        antonyms: []
    }
];

export const b6_l20_story_1: Story = {
    id: "b6-l20-s1",
    title: "20A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, write C on the line. If the word is used incorrectly, write I on the line.`,
    wordsIncluded: b6_l20_words.map(w => w.id),
    questions: [
        {
            id: "20a-q1",
            type: "multiple-choice",
            question: "1. insist",
            options: [
                "(a) The player was **insisted** by the referee for hitting someone with his elbow.",
                "(b) Aunt Winona was **insistent** that we stay for lunch.",
                "(c) Uncle Bao **insisted** on paying the restaurant bill.",
                "(d) The attic of the old house was **insisted** with wasps."
            ],
            correctAnswers: [
                "(b) Aunt Winona was **insistent** that we stay for lunch.",
                "(c) Uncle Bao **insisted** on paying the restaurant bill."
            ]
        },
        {
            id: "20a-q2",
            type: "multiple-choice",
            question: "2. dwell",
            options: [
                "(a) The people on the west side **dwell** in very expensive homes.",
                "(b) At ninety, Mr. Torres **dwells** on the past and loves to talk about old times.",
                "(c) In a shady **dwell** by the river, they found a gold nugget.",
                "(d) A **dwelling** at the bottom of the mountain provided shelter."
            ],
            correctAnswers: [
                "(a) The people on the west side **dwell** in very expensive homes.",
                "(b) At ninety, Mr. Torres **dwells** on the past and loves to talk about old times.",
                "(d) A **dwelling** at the bottom of the mountain provided shelter."
            ]
        },
        {
            id: "20a-q3",
            type: "multiple-choice",
            question: "3. swarm",
            options: [
                "(a) A **swarm** of locusts landed on the field.",
                "(b) People **swarmed** into town from all directions for the big event.",
                "(c) Priyansh was able to **swarm** his way out of a tricky predicament.",
                "(d) A **swarm** of meteors lit up the sky last night around midnight."
            ],
            correctAnswers: [
                "(a) A **swarm** of locusts landed on the field.",
                "(b) People **swarmed** into town from all directions for the big event.",
                "(d) A **swarm** of meteors lit up the sky last night around midnight."
            ]
        },
        {
            id: "20a-q4",
            type: "multiple-choice",
            question: "4. peculiar",
            options: [
                "(a) Tropical beaches are **peculiar** to Antarctica.",
                "(b) The duck-billed platypus is **peculiar** to Australia.",
                "(c) The pitcher adopts a **peculiar** grip on the ball before releasing it.",
                "(d) Dirt is a **peculiar** thing to grow a flower in."
            ],
            correctAnswers: [
                "(b) The duck-billed platypus is **peculiar** to Australia.",
                "(c) The pitcher adopts a **peculiar** grip on the ball before releasing it."
            ]
        },
        {
            id: "20a-q5",
            type: "multiple-choice",
            question: "5. council",
            options: [
                "(a) The thick **council** swirled around their legs as they walked.",
                "(b) The seven-member **council** meets every Wednesday.",
                "(c) The **council** voted to stop street parking during the blizzard.",
                "(d) My brother took the **council** up to his room and fell asleep on it."
            ],
            correctAnswers: [
                "(b) The seven-member **council** meets every Wednesday.",
                "(c) The **council** voted to stop street parking during the blizzard."
            ]
        },
        {
            id: "20a-q6",
            type: "multiple-choice",
            question: "6. bluster",
            options: [
                "(a) Without realizing it, Camilla had **blustered** into a trap.",
                "(b) The candidate **blustered** that he alone could fix everything.",
                "(c) The two friends **blustered** down the hill on the sled.",
                "(d) The **blustering** storm spread across three states."
            ],
            correctAnswers: [
                "(b) The candidate **blustered** that he alone could fix everything.",
                "(d) The **blustering** storm spread across three states."
            ]
        },
        {
            id: "20a-q7",
            type: "multiple-choice",
            question: "7. garment",
            options: [
                "(a) Each exquisite **garment** was made of silk.",
                "(b) The first **garments** worn by early humans were made of animal skins.",
                "(c) She wore elaborate **garments** for the ceremony.",
                "(d) **Garments** of flowers were hung around the necks of the dancers."
            ],
            correctAnswers: [
                "(a) Each exquisite **garment** was made of silk.",
                "(b) The first **garments** worn by early humans were made of animal skins.",
                "(c) She wore elaborate **garments** for the ceremony."
            ]
        },
        {
            id: "20a-q8",
            type: "multiple-choice",
            question: "8. revenge",
            options: [
                "(a) Their desire for **revenge** was so strong, they could think about nothing else.",
                "(b) The medieval knight **revenged** his father's death.",
                "(c) The students **revenged** to their tests when the teacher turned her back to them.",
                "(d) The children **revenged** each other with gifts they had made themselves."
            ],
            correctAnswers: [
                "(a) Their desire for **revenge** was so strong, they could think about nothing else.",
                "(b) The medieval knight **revenged** his father's death."
            ]
        },
        {
            id: "20a-q9",
            type: "multiple-choice",
            question: "9. rash",
            options: [
                "(a) A **rash** of crime happened the night the power went out.",
                "(b) The doctor looked at the **rash** on my arm and said not to worry about it.",
                "(c) His predicament was caused by the **rash** things he said.",
                "(d) The **rash** tomatoes grew on the vine in the sunshine."
            ],
            correctAnswers: [
                "(a) A **rash** of crime happened the night the power went out.",
                "(b) The doctor looked at the **rash** on my arm and said not to worry about it.",
                "(c) His predicament was caused by the **rash** things he said."
            ]
        },
        {
            id: "20a-q10",
            type: "multiple-choice",
            question: "10. infest",
            options: [
                "(a) Be careful, or you may become **infested** with the flu.",
                "(b) Our cat keeps the house from being **infested** by mice.",
                "(c) I put the bread in the oven to **infest**.",
                "(d) Ladybugs can **infest** homes on sunny days in the fall."
            ],
            correctAnswers: [
                "(b) Our cat keeps the house from being **infested** by mice.",
                "(d) Ladybugs can **infest** homes on sunny days in the fall."
            ]
        }
    ]
};

export const b6_l20_story_2: Story = {
    id: "b6-l20-s2",
    title: "20B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l20_words.map(w => w.id),
    questions: [
        {
            id: "20b-q1",
            type: "multiple-choice",
            question: "1. Which word goes with *house*?",
            options: ["(a) residence", "(b) council", "(c) dwelling", "(d) sentinel"],
            correctAnswer: "(c) dwelling"
        },
        {
            id: "20b-q2",
            type: "multiple-choice",
            question: "2. Which word goes with *very small*?",
            options: ["(a) minute", "(b) paltry", "(c) genuine", "(d) meager"],
            correctAnswers: ["(a) minute", "(b) paltry", "(d) meager"]
        },
        {
            id: "20b-q3",
            type: "multiple-choice",
            question: "3. Which word goes with *odd*?",
            options: ["(a) bluster", "(b) stern", "(c) benevolent", "(d) peculiar"],
            correctAnswer: "(d) peculiar"
        },
        {
            id: "20b-q4",
            type: "multiple-choice",
            question: "4. Which word goes with *kill*?",
            options: ["(a) infest", "(b) slay", "(c) bluster", "(d) exterminate"],
            correctAnswers: ["(b) slay", "(d) exterminate"]
        },
        {
            id: "20b-q5",
            type: "multiple-choice",
            question: "5. Which word goes with *money*?",
            options: ["(a) budget", "(b) hoax", "(c) fee", "(d) loom"],
            correctAnswers: ["(a) budget", "(c) fee"]
        },
        {
            id: "20b-q6",
            type: "multiple-choice",
            question: "6. Which word goes with *container*?",
            options: ["(a) fee", "(b) vat", "(c) garment", "(d) cask"],
            correctAnswers: ["(b) vat", "(d) cask"]
        },
        {
            id: "20b-q7",
            type: "multiple-choice",
            question: "7. Which word goes with *clothing*?",
            options: ["(a) outskirts", "(b) attire", "(c) apparel", "(d) garment"],
            correctAnswers: ["(b) attire", "(c) apparel", "(d) garment"]
        },
        {
            id: "20b-q8",
            type: "multiple-choice",
            question: "8. Which word goes with *hasty*?",
            options: ["(a) paltry", "(b) rash", "(c) curious", "(d) placid"],
            correctAnswer: "(b) rash"
        },
        {
            id: "20b-q9",
            type: "multiple-choice",
            question: "9. Which word goes with *harm*?",
            options: ["(a) infest", "(b) improvise", "(c) reinforce", "(d) contaminate"],
            correctAnswers: ["(a) infest", "(d) contaminate"]
        },
        {
            id: "20b-q10",
            type: "multiple-choice",
            question: "10. Which word goes with *rat*?",
            options: ["(a) antic", "(b) council", "(c) rodent", "(d) rural"],
            correctAnswer: "(c) rodent"
        }
    ]
};

export const b6_l20_story_3: Story = {
    id: "b6-l20-s3",
    title: "20C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l20_words.map(w => w.id),
    questions: [
        {
            id: "20c-q1",
            type: "multiple-choice",
            question: "1. Thiago **insisted**",
            options: [
                "(a) in planting the tree because of the garden.",
                "(b) that we go to the swim meet with him.",
                "(c) on getting a dog when he turned twelve.",
                "(d) quickly all the way to the museum."
            ],
            correctAnswers: [
                "(b) that we go to the swim meet with him.",
                "(c) on getting a dog when he turned twelve."
            ]
        },
        {
            id: "20c-q2",
            type: "multiple-choice",
            question: "2. The **fee**",
            options: [
                "(a) included a free beverage.",
                "(b) was paid to the lawyer before she accepted the case.",
                "(c) caught us by surprise because the forecast had predicted no storms.",
                "(d) is reduced for children under twelve."
            ],
            correctAnswers: [
                "(a) included a free beverage.",
                "(b) was paid to the lawyer before she accepted the case.",
                "(d) is reduced for children under twelve."
            ]
        },
        {
            id: "20c-q3",
            type: "multiple-choice",
            question: "3. We **exterminated**",
            options: [
                "(a) the bugs in the attic.",
                "(b) the water before we poured it.",
                "(c) sunshine through the window.",
                "(d) rats from three different locations."
            ],
            correctAnswers: [
                "(a) the bugs in the attic.",
                "(d) rats from three different locations."
            ]
        },
        {
            id: "20c-q4",
            type: "multiple-choice",
            question: "4. He began **blustering**",
            options: [
                "(a) very quietly across the room in his socks.",
                "(b) when his friends told him to be quiet.",
                "(c) about how I never listen to him.",
                "(d) politely and told them how happy he was."
            ],
            correctAnswers: [
                "(b) when his friends told him to be quiet.",
                "(c) about how I never listen to him."
            ]
        },
        {
            id: "20c-q5",
            type: "multiple-choice",
            question: "5. **Swarms**",
            options: [
                "(a) of ants showed up at the picnic.",
                "(b) of protesters made their way to the White House gates.",
                "(c) of money were needed to care for such a large family.",
                "(d) of bees accompany their queen on her first flight."
            ],
            correctAnswers: [
                "(a) of ants showed up at the picnic.",
                "(b) of protesters made their way to the White House gates.",
                "(d) of bees accompany their queen on her first flight."
            ]
        },
        {
            id: "20c-q6",
            type: "multiple-choice",
            question: "6. The **vats**",
            options: [
                "(a) of olive oil were kept in the farmhouse basement.",
                "(b) aren't meant to hold anything but liquid.",
                "(c) can be made of wood or metal.",
                "(d) measure the depth of the water in lakes."
            ],
            correctAnswers: [
                "(a) of olive oil were kept in the farmhouse basement.",
                "(b) aren't meant to hold anything but liquid.",
                "(c) can be made of wood or metal."
            ]
        },
        {
            id: "20c-q7",
            type: "multiple-choice",
            question: "7. She wanted **revenge**",
            options: [
                "(a) to drink because she was freezing.",
                "(b) in her room to help her study.",
                "(c) for the terrible thing her best friend had said to her.",
                "(d) on the movie theater that had kicked her out."
            ],
            correctAnswers: [
                "(c) for the terrible thing her best friend had said to her.",
                "(d) on the movie theater that had kicked her out."
            ]
        },
        {
            id: "20c-q8",
            type: "multiple-choice",
            question: "8. **Rodents**",
            options: [
                "(a) were hard to drive on at night.",
                "(b) gnawed their way through the door into the library.",
                "(c) eat many things, including grass, grains, and other plants.",
                "(d) such as rats are intelligent and can make very good pets."
            ],
            correctAnswers: [
                "(b) gnawed their way through the door into the library.",
                "(c) eat many things, including grass, grains, and other plants.",
                "(d) such as rats are intelligent and can make very good pets."
            ]
        }
    ]
};

export const b6_l20_story_4: Story = {
    id: "b6-l20-s4",
    title: "20D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l20_words.map(w => w.id),
    questions: [
        {
            id: "20d-q1",
            type: "multiple-choice",
            question: "1. If I could **dwell** anywhere in the world, I would choose",
            options: [
                "(a) a small cottage by the sea.",
                "(b) to run very fast.",
                "(c) an apple pie.",
                "(d) to hear a loud noise."
            ],
            correctAnswer: "(a) a small cottage by the sea."
        },
        {
            id: "20d-q2",
            type: "multiple-choice",
            question: "2. I pay a **fee** for",
            options: [
                "(a) my piano lessons every week.",
                "(b) free air to breathe.",
                "(c) sleeping at night.",
                "(d) liking my friends."
            ],
            correctAnswer: "(a) my piano lessons every week."
        },
        {
            id: "20d-q3",
            type: "multiple-choice",
            question: "3. My favorite **garment** is",
            options: [
                "(a) my warm, woolly sweater.",
                "(b) my ham sandwich.",
                "(c) my bicycle.",
                "(d) my pet dog."
            ],
            correctAnswer: "(a) my warm, woolly sweater."
        },
        {
            id: "20d-q4",
            type: "multiple-choice",
            question: "4. Someone who **blusters** probably feels",
            options: [
                "(a) insecure and tries to hide it by being loud.",
                "(b) very sleepy and wants to go to bed.",
                "(c) extremely happy and calm.",
                "(d) hungry for dinner."
            ],
            correctAnswer: "(a) insecure and tries to hide it by being loud."
        },
        {
            id: "20d-q5",
            type: "multiple-choice",
            question: "5. One thing I always **insist** on is",
            options: [
                "(a) telling the truth.",
                "(b) forgetting my name.",
                "(c) falling down.",
                "(d) losing my keys."
            ],
            correctAnswer: "(a) telling the truth."
        },
        {
            id: "20d-q6",
            type: "multiple-choice",
            question: "6. One of the most **peculiar** things I've ever seen was",
            options: [
                "(a) a cat walking on a leash.",
                "(b) a bird flying in the sky.",
                "(c) a fish swimming in water.",
                "(d) a car driving on the road."
            ],
            correctAnswer: "(a) a cat walking on a leash."
        },
        {
            id: "20d-q7",
            type: "multiple-choice",
            question: "7. If you are **rash** about something, that means",
            options: [
                "(a) you act too quickly without thinking.",
                "(b) you take a long time to decide.",
                "(c) you are very careful.",
                "(d) you are afraid to do it."
            ],
            correctAnswer: "(a) you act too quickly without thinking."
        },
        {
            id: "20d-q8",
            type: "multiple-choice",
            question: "8. A **paltry** meal might be",
            options: [
                "(a) just a slice of dry toast.",
                "(b) a Thanksgiving feast.",
                "(c) a large pizza with everything.",
                "(d) a four-course dinner."
            ],
            correctAnswer: "(a) just a slice of dry toast."
        },
        {
            id: "20d-q9",
            type: "multiple-choice",
            question: "9. I would be afraid of a **swarm** of",
            options: [
                "(a) angry bees.",
                "(b) one single fly.",
                "(c) cute puppies.",
                "(d) fluffy clouds."
            ],
            correctAnswer: "(a) angry bees."
        },
        {
            id: "20d-q10",
            type: "multiple-choice",
            question: "10. If you **exterminate** something, that means you",
            options: [
                "(a) destroy it completely.",
                "(b) make it grow larger.",
                "(c) keep it safe.",
                "(d) paint it a bright color."
            ],
            correctAnswer: "(a) destroy it completely."
        }
    ]

};

export const b6_l20_story_passage: Story = {
    id: "b6-l20-passage",
    title: "Reading Passage: The Pied Piper of Hamelin",
    type: "non-fiction",
    content: `
*Rats!
They fought the dogs, and killed the cats,
And bit the babies in the cradles,
And ate the cheeses out of the **vats**,
And licked the soup from the cooks' own ladles . . .*

There was no doubt that the people of Hamelin faced a very serious predicament. Their town was **infested** with rats, and the furry, beady-eyed **rodents** had grown so aggressive that they had invaded the townspeople's cellars, their kitchens, and even their bedrooms. There wasn't a **dwelling** in town that wasn't teeming with rats. The people threatened to run the mayor out of town unless he did something about the problem. The mayor promised to eliminate the rats; he vowed to **exterminate** every rat in town; he **blustered** that not a rat would survive his assault. But what could he do? Nothing except organize meetings with his **council** to discuss various ways of solving the problem. And the unpleasant truth was that neither he nor anyone else had the faintest idea what to do.

Suddenly a man dressed in a most **peculiar** fashion appeared at the meeting; his quaint **garments** drew hostile stares and rude comments from the townspeople.

*His queer long coat from heel to head
Was half of yellow and half of red.*

The stranger in the pied coat promised to rid the town of its rats by luring them away with the music from his pipe for a **fee** of one thousand guilders. The mayor was jubilant and replied instantly that this was too **paltry** a sum for performing such an assignment. He promised to compensate the piper no less than the amount of fifty thousand guilders!

Everyone followed as the Pied Piper stepped into the street. He raised his pipe to his lips and **commenced** playing. Over the sound of the music an unearthly noise could be heard.

*And the muttering grew to a grumbling;
And the grumbling grew to a mighty rumbling;
And out of the houses the rats came tumbling.*

Rats **swarmed** from the houses and into the streets, following the Pied Piper as he led them out of town while playing his tune. When they came to the river Weser, the rats plunged in and perished.

The people of Hamelin were most grateful to the Pied Piper and rang every bell in town to celebrate the occasion, but the mayor was now having second thoughts about the payment he had promised. He convinced himself that he had been **rash** to offer fifty thousand guilders. He now thought a mere fifty guilders would be more than sufficient. When the Pied Piper **insisted** on being paid in full, the mayor taunted him.

*You threaten us, fellow? Do your worst,
Blow your pipe there 'til you burst!*

As his **revenge**, the Pied Piper led away all the village's children, who were never seen or heard from again.

*The rhymes are quotations from Robert Browning's poem "The Pied Piper of Hamelin," a fanciful story about a town in Germany.*
    `,
    wordsIncluded: b6_l20_words.map(w => w.id),
    questions: [
        {
            id: "20p-q1",
            type: "multiple-choice",
            question: "1. Why were the inhabitants of Hamelin probably afraid to enter their homes?",
            options: [
                "Because every **dwelling** was **infested** with rats.",
                "Because they were haunted.",
                "Because it was dark.",
                "Because of the Pied Piper."
            ],
            correctAnswer: "Because every **dwelling** was **infested** with rats."
        },
        {
            id: "20p-q2",
            type: "multiple-choice",
            question: "2. Were any homes in the town free of rats?",
            options: [
                "No, there wasn't a **dwelling** that wasn't teeming with them.",
                "Yes, the mayor's house was free.",
                "Yes, the rich people's homes were free.",
                "Yes, the houses on the hill were free."
            ],
            correctAnswer: "No, there wasn't a **dwelling** that wasn't teeming with them."
        },
        {
            id: "20p-q3",
            type: "multiple-choice",
            question: "3. What was the mayor's problem in dealing with the town's **rodents**?",
            options: [
                "He had no idea how to **exterminate** them.",
                "He liked them.",
                "He was afraid of cats.",
                "He didn't have enough money."
            ],
            correctAnswer: "He had no idea how to **exterminate** them."
        },
        {
            id: "20p-q4",
            type: "multiple-choice",
            question: "4. What was aggravating the town's cheese makers?",
            options: [
                "The rats ate the cheeses out of the **vats**.",
                "The milk was sour.",
                "The cows were sick.",
                "The cheese wouldn't melt."
            ],
            correctAnswer: "The rats ate the cheeses out of the **vats**."
        },
        {
            id: "20p-q5",
            type: "multiple-choice",
            question: "5. Where did the Pied Piper make his offer to get rid of the rats?",
            options: [
                "At a meeting of the mayor and his **council**.",
                "In the town square.",
                "At the river.",
                "In the church."
            ],
            correctAnswer: "At a meeting of the mayor and his **council**."
        },
        {
            id: "20p-q6",
            type: "multiple-choice",
            question: "6. Why did the Pied Piper's **garments** arouse so much interest among the townspeople?",
            options: [
                "They were **peculiar** and colorful (yellow and red).",
                "They were made of gold.",
                "He wasn't wearing any.",
                "They were dirty."
            ],
            correctAnswer: "They were **peculiar** and colorful (yellow and red)."
        },
        {
            id: "20p-q7",
            type: "multiple-choice",
            question: "7. How much did the Pied Piper say he would charge for getting rid of the rats?",
            options: [
                "A **fee** of one thousand guilders.",
                "Fifty thousand guilders.",
                "Nothing.",
                "One million dollars."
            ],
            correctAnswer: "A **fee** of one thousand guilders."
        },
        {
            id: "20p-q8",
            type: "multiple-choice",
            question: "8. What did the mayor first think of the amount of money the Pied Piper requested?",
            options: [
                "He thought it was too **paltry** a sum.",
                "He thought it was too much.",
                "He thought it was fair.",
                "He didn't care."
            ],
            correctAnswer: "He thought it was too **paltry** a sum."
        },
        {
            id: "20p-q9",
            type: "multiple-choice",
            question: "9. Why do you think it was **rash** of the mayor to offer fifty thousand guilders to the Pied Piper?",
            options: [
                "It was a reckless promise he didn't intend to keep or couldn't afford.",
                "He was drunk.",
                "He loved the Piper.",
                "He was generous."
            ],
            correctAnswer: "It was a reckless promise he didn't intend to keep or couldn't afford."
        },
        {
            id: "20p-q10",
            type: "multiple-choice",
            question: "10. What did the astonished townspeople see when the Pied Piper began to play?",
            options: [
                "Rats **swarming** from the houses.",
                "Children dancing.",
                "Birds singing.",
                "Rain falling."
            ],
            correctAnswer: "Rats **swarming** from the houses."
        },
        {
            id: "20p-q11",
            type: "multiple-choice",
            question: "11. How did the Pied Piper **exterminate** the rats?",
            options: [
                "He led them into the river where they perished.",
                "He poisoned them.",
                "He trapped them.",
                "He scared them away."
            ],
            correctAnswer: "He led them into the river where they perished."
        },
        {
            id: "20p-q12",
            type: "multiple-choice",
            question: "12. How did the mayor behave when the Pied Piper rejected the fifty guilders?",
            options: [
                "He taunted him and told him to do his worst **blustering**.",
                "He apologized.",
                "He paid him the full amount.",
                "He cried."
            ],
            correctAnswer: "He taunted him and told him to do his worst **blustering**."
        },
        {
            id: "20p-q13",
            type: "multiple-choice",
            question: "13. What is the meaning of **peculiar** as it is used in the passage?",
            options: [
                "Odd or strange.",
                "Common.",
                "Beautiful.",
                "Expensive."
            ],
            correctAnswer: "Odd or strange."
        },
        {
            id: "20p-q14",
            type: "multiple-choice",
            question: "14. Why do you think the Pied Piper **insisted** on being paid in full?",
            options: [
                "Because a promise is a promise, and he did his job.",
                "He was greedy.",
                "He needed to buy a car.",
                "He wanted to buy the town."
            ],
            correctAnswer: "Because a promise is a promise, and he did his job."
        },
        {
            id: "20p-q15",
            type: "multiple-choice",
            question: "15. In what way does the passage end on a sinister note?",
            options: [
                "The Pied Piper took **revenge** by stealing the children.",
                "The rats came back.",
                "The mayor died.",
                "The town burned down."
            ],
            correctAnswer: "The Pied Piper took **revenge** by stealing the children."
        }
    ]
};

export const b6_l20_story_facts: Story = {
    id: "b6-l20-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* Low German was the language spoken in northern Germany for several centuries up to around 1500. The word for *rag* in that language is *palte*, and the adjective *paltrig* means "ragged." *Paltrig* passed into English as **paltry**. Something ragged is of little value, so it is easy to see how **paltry** came to mean "worthless."

* *Avenge* and **revenge** are similar in meaning. A person can both *avenge* a wrong and **revenge** a wrong. There is a difference that should be noted, however. *Avenge* suggests striking back at a wrongdoer in order to obtain justice. Hamlet, in the play of the same name, is called upon to *avenge* his father's murder by killing his uncle, who had committed the crime. Hamlet takes no satisfaction from his action, which he feels has been forced upon him. **Revenge** carries the suggestion of striking back at a wrongdoer for the personal satisfaction it brings. Note that **revenge** is both a verb and a noun. *Avenge* is a verb only.

* A **council** is a group of people that meets to decide or plan something, give advice, or make laws. A town **council** may be the ruling body of a town. A president may appoint a **council** to look into an issue and offer advice. Students may elect a student **council** to govern their affairs. People who are members of a **council** are called *councillors*. *Counsel* is advice or opinion. When one is faced with seemingly unsolvable problems, it may be advisable to seek *counsel*. A person who gives *counsel* as a profession is called a *counselor*.
    `,
    wordsIncluded: ["paltry", "revenge", "council"],
    questions: []
};
