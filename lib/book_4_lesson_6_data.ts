import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji
});

// Lesson 6 Words
export const b4_l6_words: VocabularyWord[] = [
    createWord("b4-l6-w1", "Applaud", "To show approval, especially by clapping hands.", "The audience applauded until the actors came back on stage to take another bow.", "👏"),
    createWord("b4-l6-w2", "Crafty", "Skilled at tricking others.", "Templeton, the crafty and mean rat in Charlotte's Web, adds humor to the book.", "🎭"),
    createWord("b4-l6-w3", "Disclose", "To make known.", "The principal told us we must disclose the names of those who broke the window.", "🗣️"),
    createWord("b4-l6-w4", "Drab", "Dull and without color; not cheerful or colorful.", "A brown sparrow is a drab little bird compared to a bright red cardinal.", "🌫️"),
    createWord("b4-l6-w5", "Entire", "Having nothing left out; whole; complete.", "I recited the entire Robert Frost poem from memory.", "🌕"),
    createWord("b4-l6-w6", "Exclaim", "To speak suddenly and with strong feeling.", "\"Today was the worst day of my life!\" she exclaimed.", "📢"),
    createWord("b4-l6-w7", "Exquisite", "Finely done or made; very beautiful.", "The exquisite wood carvings on the museum door came from the island of Bali.", "💎"),
    createWord("b4-l6-w8", "Intend", "To plan; to have in mind.", "I intend to give a piano recital on Monday.", "📅"),
    createWord("b4-l6-w9", "Jeer", "To speak or cry out in scorn; to mock. Something said that is meant to hurt or insult.", "My brother told me to ignore the older boys if they jeered when I sang.", "😝"),
    createWord("b4-l6-w10", "Peer", "To look closely; to stare, especially at something that is hard to see or to understand.", "Ahmed peered at the sign, trying to read what it said.", "🧐"),
    createWord("b4-l6-w11", "Progress", "Moving toward a goal. An improvement. To move forward. To advance to a higher stage; to improve.", "The stormy sea slowed the small boat's progress.", "📈"),
    createWord("b4-l6-w12", "Refine", "To make pure by removing all unwanted matter. Having good manners and good taste.", "We take oil from deep inside the earth and refine it into gasoline.", "✨"),
    createWord("b4-l6-w13", "Scoundrel", "A mean or wicked person.", "I am glad the police caught the scoundrel who stole my wallet.", "🦹"),
    createWord("b4-l6-w14", "Uneasy", "Not comfortable; worried or nervous.", "I felt uneasy walking down the dark street until I observed my dad on the corner.", "😟"),
    createWord("b4-l6-w15", "Vain", "Having too high an opinion of one's looks or achievements. Without success.", "Charlie is so vain he has a full-length mirror in every room.", "🪞")
];

// Story 1: Using Words in Context
export const b4_l6_story_1: Story = {
    id: "b4-l6-s1",
    title: "Exercise: Using Words in Context",
    type: "non-fiction",
    content: "Read the following sentences. If the word in bold is used correctly, select True. If the word is used incorrectly, select False.",
    wordsIncluded: b4_l6_words.map(w => w.id),
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. \"Ouch,\" Alejandro **exclaimed** when he bumped his head on the beam.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. The camels made slow **progress** over the Mojave Desert.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. After making several **vain** attempts, we gave up and went home.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. We **intended** the pathway for thirty feet more.",
            options: ["True", "False"],
            correctAnswer: "False" // Intended vs Extended
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. The **entire** world feels the rays of the sun.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. Sybil **disclosed** to her friends that she was afraid of the dark.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. The **applause** after the show went on for at least five minutes.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. Yolinda lifted the lid of the box and **peered** inside.",
            options: ["True", "False"],
            correctAnswer: "True"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. They say that Spanish is an **uneasy** language to learn.",
            options: ["True", "False"],
            correctAnswer: "False"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. The judge **refined** him a hundred dollars for littering.",
            options: ["True", "False"],
            correctAnswer: "False" // Refined vs Fined
        }
    ]
};

// Story 2: Making Connections
export const b4_l6_story_2: Story = {
    id: "b4-l6-s2",
    title: "Exercise: Making Connections",
    type: "non-fiction",
    content: "Which word or words go with the meaning? There may be more than one correct answer.",
    wordsIncluded: b4_l6_words.map(w => w.id),
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *tricking others*?",
            options: ["cunning", "uneasy", "drab", "crafty"],
            correctAnswer: "cunning, crafty"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *nothing missing*?",
            options: ["entire", "cunning", "complete", "exquisite"],
            correctAnswer: "entire, complete"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *not showy*?",
            options: ["exquisite", "drab", "modest", "vain"],
            correctAnswer: "drab, modest"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *uncomfortable*?",
            options: ["quaint", "uneasy", "crafty", "drab"],
            correctAnswer: "uneasy"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *move ahead*?",
            options: ["banner", "disclose", "progress", "applaud"],
            correctAnswer: "progress"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *change direction*?",
            options: ["disclose", "cultivate", "reverse", "applaud"],
            correctAnswer: "reverse" // Wait, reverse isn't in the list? Ah, "reverse" is probably from previous lessons or general vocab. But "progress" is L6. The question is "change direction". Progress is "move forward".
        }, // Correction: Q5 is progress. Q6: disclose (make known), cultivate (grow), reverse (change direction), applaud (clap). Answer is reverse.
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *to plan*?",
            options: ["jeer", "intend", "applaud", "arrange"],
            correctAnswer: "intend, arrange"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *doing bad things*?",
            options: ["destructive", "refined", "scoundrel", "vain"],
            correctAnswer: "destructive, scoundrel"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *mock*?",
            options: ["jeer", "applaud", "exclaim", "refine"],
            correctAnswer: "jeer"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *beautiful*?",
            options: ["attractive", "drab", "exquisite", "modest"],
            correctAnswer: "attractive, exquisite"
        }
    ]
};

// Story 3: Determining Meanings
export const b4_l6_story_3: Story = {
    id: "b4-l6-s3",
    title: "Exercise: Determining Meanings",
    type: "non-fiction",
    content: "Choose the statement that correctly explains the meaning of the word in bold.",
    wordsIncluded: b4_l6_words.map(w => w.id),
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. The **applause**",
            options: [
                "(a) was signed by the artist, making it worth more.",
                "(b) started back in the corner and soon filled the entire room.",
                "(c) rang in our ears long after the performance ended.",
                "(d) needs some repairs and then it will sound great."
            ],
            correctAnswer: "(b), (c)" // Applause can ring in ears. Start back in the corner? Yes. (a) is signature? No. (d) repairs? No.
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. His **drab**",
            options: [
                "(a) smile was the best thing about my day.",
                "(b) costume needs brightening up with something colorful.",
                "(c) speech got a wonderful response from the audience.",
                "(d) clothing made it possible to hide himself in the crowd."
            ],
            correctAnswer: "(b), (d)" // Drab clothing -> blend in/hide? Maybe. Drab costume needs brightening? Yes. Drab smile? No. Drab speech -> wonderful response? No.
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. A **vain**",
            options: [
                "(a) attempt was made to rescue the ball stuck in the tree.",
                "(b) person is always looking in the mirror.",
                "(c) on the roof of the barn shows the wind direction.",
                "(d) carries blood back to the heart."
            ],
            correctAnswer: "(a), (b)" // Vain attempt (unsuccessful). Vain person. (c) is vane. (d) is vein.
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. The **scoundrel**",
            options: [
                "(a) holds the boat in place while it is docked.",
                "(b) lied to everyone about his crimes.",
                "(c) was warned never to show his face again.",
                "(d) was written in rhyme and was twelve lines long."
            ],
            correctAnswer: "(b), (c)" // Scoundrel lied. Scoundrel warned. (a) is anchor? (d) is sonnet?
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. She **craftily**",
            options: [
                "(a) watched the TV show on her phone when she should have been studying.",
                "(b) came up with a plan that should be kept secret.",
                "(c) slept all night.",
                "(d) forgot the name of her neighbor's dog."
            ],
            correctAnswer: "(a), (b)" // Tricking/secret.
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. The **jeers**",
            options: [
                "(a) were worn inside out as a kind of joke.",
                "(b) decided to give the girl a hug.",
                "(c) of the audience soon turned to cheers.",
                "(d) led the big parade as it made its way down Main Street."
            ],
            correctAnswer: "(c)" // Jeers (mocking) turned to cheers. (a) is jeans? (d) is cheers/leaders?
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. Very **refined**",
            options: [
                "(a) manners were expected from those invited to dinner.",
                "(b) people don't swear in public.",
                "(c) foods are not as healthy as raw foods.",
                "(d) dogs are larger than cats."
            ],
            correctAnswer: "(a), (b), (c)" // Refined manners. Refined people. Refined foods (processed).
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. Have you **disclosed**",
            options: [
                "(a) where you are going?",
                "(b) a card with your gift?",
                "(c) to him what I told you?",
                "(d) enough food for the picnic?"
            ],
            correctAnswer: "(a), (c)" // Make known. (b) enclosed. (d) disposed/composed?
        }
    ]
};

// Story 4: Completing Sentences
export const b4_l6_story_4: Story = {
    id: "b4-l6-s4",
    title: "Exercise: Completing Sentences",
    type: "non-fiction",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    wordsIncluded: b4_l6_words.map(w => w.id),
    questions: [
        {
            id: "cs-q1",
            type: "multiple-choice",
            question: "1. An **exquisite** performance I have seen is",
            options: ["a ballet dancer moving with perfect grace", "a clown falling down"],
            correctAnswer: "a ballet dancer moving with perfect grace"
        },
        {
            id: "cs-q2",
            type: "multiple-choice",
            question: "2. If I met a **crafty** person, I would",
            options: ["trust them completely", "be careful not to be tricked"],
            correctAnswer: "be careful not to be tricked"
        },
        {
            id: "cs-q3",
            type: "multiple-choice",
            question: "3. If you could **peer** into the future, you might see",
            options: ["flying cars and robots", "what happened yesterday"],
            correctAnswer: "flying cars and robots"
        },
        {
            id: "cs-q4",
            type: "multiple-choice",
            question: "4. You should never **disclose** a friend's secret because",
            options: ["it would break their trust", "everyone already knows it"],
            correctAnswer: "it would break their trust"
        },
        {
            id: "cs-q5",
            type: "multiple-choice",
            question: "5. Something I have **applauded** is",
            options: ["a bad movie", "a great concert"],
            correctAnswer: "a great concert"
        },
        {
            id: "cs-q6",
            type: "multiple-choice",
            question: "6. A **vain** person is someone who",
            options: ["is very humble", "thinks too highly of themselves"],
            correctAnswer: "thinks too highly of themselves"
        },
        {
            id: "cs-q7",
            type: "multiple-choice",
            question: "7. To **jeer** at someone means to",
            options: ["make fun of them unkindly", "cheer them on"],
            correctAnswer: "make fun of them unkindly"
        },
        {
            id: "cs-q8",
            type: "multiple-choice",
            question: "8. I expect to make **progress** in",
            options: ["learning to play the guitar", "forgetting my name"],
            correctAnswer: "learning to play the guitar"
        },
        {
            id: "cs-q9",
            type: "multiple-choice",
            question: "9. I feel **uneasy** when",
            options: ["I am with my best friend", "I have to give a speech to a large crowd"],
            correctAnswer: "I have to give a speech to a large crowd"
        },
        {
            id: "cs-q10",
            type: "multiple-choice",
            question: "10. Something I **intend** to do someday is",
            options: ["visit Mars", "fall down stairs"],
            correctAnswer: "visit Mars"
        }
    ]
};

// Story 5: Reading Passage
export const b4_l6_story_5: Story = {
    id: "b4-l6-s5",
    title: "Reading Passage: The Emperor's New Clothes",
    type: "non-fiction",
    content: `
A Retelling of the Hans Christian Andersen Fairy Tale

Once there was an emperor who was very **vain**. He spent hour after hour **peering** at himself in the mirror. Whenever he got new clothes, he would gather his ministers around him so that they could tell him how wonderful he looked.

One day, two men came to see the emperor. They said they were master tailors. They told the emperor they could make him a suit of clothes so magnificent that everything else he owned would seem **drab**. The cloth would be so unusual that only those with the most **refined** taste would be able to see it. The emperor was foolish enough to believe them. He agreed to pay whatever they asked.

The "tailors" started work at once. Every day the emperor sent his ministers to check on their **progress**. Of course, they could see perfectly well that the **crafty** pair was only pretending to weave the cloth, and cut it, and stitch it. But they didn't dare **disclose** the truth to the emperor. Disagreeing with the emperor would be like confessing that they had poor taste. They felt **uneasy** about lying, but they believed they had no choice. They told the emperor only what he wanted to hear: that his new clothes were the most **exquisite** they had ever seen.

Finally the two **scoundrels** told the emperor that their work was complete. Excited by the news, the emperor announced that the next day would be a public holiday. He **intended** to walk through the streets of the town in his new clothes so that everyone could admire him. The next morning, the "tailors" carefully laid out the emperor's new clothes and helped him dress. The ministers gathered around to watch. And when at last the emperor stood proudly before them, turning this way and that, they forced out loud **exclamations** of delight. But of course the emperor was wearing only his underwear.

Meanwhile, officers of the palace guard had been up since before dawn. They were busy making sure that the townspeople turned out to **applaud** the emperor as he went by. Now the **entire** town lined the streets to see him. Under the watchful eyes of the officers, the people cheered and waved flags. The emperor loved every minute of it. But then something unexpected happened. Above the roar of the crowd, the emperor heard a child's voice. A little boy shouted, "Look! The emperor has no clothes!" The cry was at once taken up by the crowd. "THE EMPEROR HAS NO CLOTHES! THE EMPEROR HAS NO CLOTHES!"

The emperor looked down at himself and saw that it was true. He knew that he had been tricked. Feeling very foolish, he ran back to the palace as fast as he could, the **jeers** of the crowd ringing in his ears.
`,
    wordsIncluded: b4_l6_words.map(w => w.id),
    questions: []
};

// Fun Facts
export const b4_l6_story_6: Story = {
    id: "b4-l6-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
• The adjective **drab** is also the name of a color — a light green-brown. (U.S. soldiers wear olive-drab clothing.) *Drab* is also a noun meaning "a small amount," but it is found only in the phrase "in dribs and drabs," meaning "a little bit at a time." (Instead of paying me the money all at once, they gave it to me *in dribs and drabs*.)

• **Vain** and *vein* are homophones. They sound alike but have different meanings and spellings. A *vein* is a blood vessel that carries blood to the heart.

• As well as being a verb, **peer** is also a noun. It means "an equal; a person of the same rank or position as another." For example, "Those fourth graders are my *peers*. We are all in the same class." Or, to say that Daniel Webster had no *peer* as a public speaker is to say that no one could equal him in the art of public speaking. A *peer* is also the name for a member of the British House of Lords.

• Like *vain* and *vein*, note that **peer** and *pier* are homophones.
`,
    wordsIncluded: [],
    questions: []
};
