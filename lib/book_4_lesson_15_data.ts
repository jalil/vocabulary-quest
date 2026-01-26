import { Story, VocabularyWord } from "./types";

export const b4_l15_words: VocabularyWord[] = [
    {
        id: "apparent",
        word: "apparent",
        definition: "(adj.) 1. Clear. 2. Seeming or appearing to be.",
        exampleSentence: "It's apparent that no one's home.",
        imageEmoji: "👀",
        category: "Grade 4"
    },
    {
        id: "ban",
        word: "ban",
        definition: "(v.) To forbid, especially by passing a law or making a rule. (n.) A law or rule that forbids something.",
        exampleSentence: "The hospital bans children from visiting patients.",
        imageEmoji: "🚫",
        category: "Grade 4"
    },
    {
        id: "concentrate",
        word: "concentrate",
        definition: "(v.) 1. To focus all one's thoughts or efforts on. 2. To bring or come together in one place. (n.) concentration: Giving total attention to something. (adj.) concentrated: Of increased strength or thickness.",
        exampleSentence: "It's hard for me to concentrate on homework when I hear the kids outside.",
        imageEmoji: "🧠",
        category: "Grade 4"
    },
    {
        id: "concern",
        word: "concern",
        definition: "(v.) 1. To be about; to interest. 2. To trouble or worry. (n.) 1. Something that involves a person or people. 2. A business organization.",
        exampleSentence: "Homelessness is a subject that should concern everyone.",
        imageEmoji: "😟",
        category: "Grade 4"
    },
    {
        id: "consider",
        word: "consider",
        definition: "(v.) 1. To think about carefully. 2. To take into account. 3. To believe.",
        exampleSentence: "Because my dog-sitting job is temporary, it's time to consider what I should do next.",
        imageEmoji: "🤔",
        category: "Grade 4"
    },
    {
        id: "contrast",
        word: "contrast",
        definition: "(v.) To compare in order to show the differences. (n.) A difference. 2. To show differences when compared.",
        exampleSentence: "Before deciding on the design for the new gym, we are going to contrast the two suggested plans.",
        imageEmoji: "🌗", // Contrast light/dark or similar
        category: "Grade 4"
    },
    {
        id: "fragile",
        word: "fragile",
        definition: "(adj.) Easily broken or damaged.",
        exampleSentence: "This ancient chair is so fragile that it would break if anyone sat on it.",
        imageEmoji: "🥚",
        category: "Grade 4"
    },
    {
        id: "menace",
        word: "menace",
        definition: "(n.) Something that is likely to do harm or is regarded as dangerous. (v.) To be a danger to; to put at risk.",
        exampleSentence: "Icebergs are a menace to ships in the North Atlantic.",
        imageEmoji: "⚠️",
        category: "Grade 4"
    },
    {
        id: "pounce",
        word: "pounce",
        definition: "(v.) To swoop down on and seize.",
        exampleSentence: "The cat pounced on the mouse as soon as it ventured from its hole.",
        imageEmoji: "🐈",
        category: "Grade 4"
    },
    {
        id: "prompt",
        word: "prompt",
        definition: "(adj.) Quick; without too much time passing. (v.) To cause to act.",
        exampleSentence: "I sent a prompt reply to Ahmed's letter.",
        imageEmoji: "⏱️",
        category: "Grade 4"
    },
    {
        id: "recent",
        word: "recent",
        definition: "(adj.) Of a time just before the present.",
        exampleSentence: "The recent outbreak of the flu resulted in the temporary closing of our school.",
        imageEmoji: "🕒",
        category: "Grade 4"
    },
    {
        id: "symbol",
        word: "symbol",
        definition: "(n.) Something that stands for something else.",
        exampleSentence: "The dove is a symbol of peace.",
        imageEmoji: "🕊️",
        category: "Grade 4"
    },
    {
        id: "talon",
        word: "talon",
        definition: "(n.) The claw of a bird, usually one that kills animals for food.",
        exampleSentence: "The hawk clutched its victim firmly in its talons.",
        imageEmoji: "🦅",
        category: "Grade 4"
    },
    {
        id: "trophy",
        word: "trophy",
        definition: "(n.) Something, such as a prize or award, given to show success in an activity.",
        exampleSentence: "The Heisman Trophy is a top football honor.",
        imageEmoji: "🏆",
        category: "Grade 4"
    },
    {
        id: "widespread",
        word: "widespread",
        definition: "(adj.) 1. Spread or stretched out over a large area. 2. Happening or found over a large area.",
        exampleSentence: "The widespread wings of the golden eagle can reach eight feet from tip to tip.",
        imageEmoji: "🌍",
        category: "Grade 4"
    }
];

export const b4_l15_story_1: Story = {
    id: "b4-l15-s1",
    title: "15A Finding Meanings",
    type: "exercise",
    content: `Choose two phrases to form a sentence that correctly uses a word from Word List 15.`,
    wordsIncluded: b4_l15_words.map(w => w.id),
    questions: [
        {
            id: "15a-q1",
            type: "multiple-choice",
            question: "1. (a) total attention. (c) Concern is (b) a lack of interest. (d) Concentration is",
            options: ["c-b", "d-a", "c-a", "d-b"],
            correctAnswer: "d-a" // Concentration is total attention.
        },
        {
            id: "15a-q2",
            type: "multiple-choice",
            question: "2. (a) An apparent winner is (c) A recent winner is (b) one who always wins. (d) one who seems to have won.",
            options: ["a-d", "c-b", "a-b", "c-d"],
            correctAnswer: "a-d"
        },
        {
            id: "15a-q3",
            type: "multiple-choice",
            question: "3. (a) A concern is (c) a business organization. (b) A symbol is (d) something that is likely to do harm.",
            options: ["a-c", "b-d", "a-d", "b-c"],
            correctAnswer: "a-c"
        },
        {
            id: "15a-q4",
            type: "multiple-choice",
            question: "4. (a) To concentrate things is to (c) To pounce is to (b) become scarce. (d) bring them together in one place.",
            options: ["c-b", "a-d", "c-d", "a-b"],
            correctAnswer: "a-d"
        },
        {
            id: "15a-q5",
            type: "multiple-choice",
            question: "5. (a) took place a short time ago. (c) A widespread storm is one that (b) A recent storm is one that (d) lasted for just a short time.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        },
        {
            id: "15a-q6",
            type: "multiple-choice",
            question: "6. (a) A contrast is (c) a rule that forbids something. (b) an unintended result. (d) A ban is",
            options: ["d-c", "a-b", "d-b", "a-c"],
            correctAnswer: "d-c"
        },
        {
            id: "15a-q7",
            type: "multiple-choice",
            question: "7. (a) To prompt something is (c) to be a danger to it. (b) To menace something is (d) to allow it to happen.",
            options: ["b-c", "a-d", "b-d", "a-c"],
            correctAnswer: "b-c"
        },
        {
            id: "15a-q8",
            type: "multiple-choice",
            question: "8. (a) to show how they differ. (c) To consider two things is (b) To contrast two things is (d) to prefer one over the other.",
            options: ["b-a", "c-d", "b-d", "c-a"],
            correctAnswer: "b-a"
        },
        {
            id: "15a-q9",
            type: "multiple-choice",
            question: "9. (a) found all over. (c) Something that is widespread is (b) broken into pieces. (d) Something that is fragile is",
            options: ["c-a", "d-b", "c-b", "d-a"],
            correctAnswer: "c-a" // Widespread is found all over. (Also d-b: fragile is broken easily, maybe not pieces. )
        },
        {
            id: "15a-q10",
            type: "multiple-choice",
            question: "10. (a) To prompt something is to (c) To consider something is to (b) take it into account. (d) forbid it.",
            options: ["c-b", "a-d", "c-d", "a-b"],
            correctAnswer: "c-b" // Consider is take into account.
        },
        {
            id: "15a-q11",
            type: "multiple-choice",
            question: "11. (a) A trophy is (c) something that stands for something else. (b) A symbol is (d) an animal's claw.",
            options: ["b-c", "a-d", "b-d", "a-c"],
            correctAnswer: "b-c"
        }
    ]
};

export const b4_l15_story_2: Story = {
    id: "b4-l15-s2",
    title: "15B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b4_l15_words.map(w => w.id),
    questions: [
        {
            id: "15b-q1",
            type: "multiple-choice",
            question: "1. My grandmother's teacups are too **easily broken** to use every day.",
            options: ["fragile", "apparent", "widespread", "recent"],
            correctAnswer: "fragile"
        },
        {
            id: "15b-q2",
            type: "multiple-choice",
            question: "2. The kitten **leaped through the air and landed** on the ball of yarn.",
            options: ["pounced", "menaced", "prompted", "banned"],
            correctAnswer: "pounced"
        },
        {
            id: "15b-q3",
            type: "multiple-choice",
            question: "3. What **caused** you to become a writer?",
            options: ["prompted", "contrasted", "concerned", "considered"],
            correctAnswer: "prompted"
        },
        {
            id: "15b-q4",
            type: "multiple-choice",
            question: "4. The eagle's **sharp, curved claws** grasped the fish and lifted it out of the water.",
            options: ["talons", "trophies", "symbols", "chords"],
            correctAnswer: "talons"
        },
        {
            id: "15b-q5",
            type: "multiple-choice",
            question: "5. Her golfing **award for victory** was the thing she took great pride in.",
            options: ["trophy", "symbol", "concern", "concentrate"],
            correctAnswer: "trophy"
        },
        {
            id: "15b-q6",
            type: "multiple-choice",
            question: "6. This chapter in the history book **points out the differences between** school life today with that of a century ago.",
            options: ["contrasts", "considers", "concerns", "bans"],
            correctAnswer: "contrasts"
        },
        {
            id: "15b-q7",
            type: "multiple-choice",
            question: "7. Please **keep your mind only** on your homework, and forget about watching TV.",
            options: ["concentrate", "consider", "concern", "prompt"],
            correctAnswer: "concentrate"
        },
        {
            id: "15b-q8",
            type: "multiple-choice",
            question: "8. Have you **given any thought to** trading in your old bike for a new one?",
            options: ["considered", "prompted", "contrasted", "banned"],
            correctAnswer: "considered" // or "given consideration to" implies considered (past tense). "Have you considered"
        },
        {
            id: "15b-q9",
            type: "multiple-choice",
            question: "9. My grandmother's future is a subject that is **of great interest to** my parents.",
            options: ["concerns", "prompts", "contrasts", "bans"],
            correctAnswer: "concerns"
        }
    ]
};

export const b4_l15_story_3: Story = {
    id: "b4-l15-s3",
    title: "15C Applying Meanings",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l15_words.map(w => w.id),
    questions: [
        {
            id: "15c-q1",
            type: "multiple-choice",
            question: "1. Which of the following is a **recent** event?",
            options: ["(a) this morning's breakfast", "(b) your grandparents' wedding", "(c) last night's supper", "(d) your first day of kindergarten"],
            correctAnswers: ["(a) this morning's breakfast", "(c) last night's supper"]
        },
        {
            id: "15c-q2",
            type: "multiple-choice",
            question: "2. Which of the following is **fragile**?",
            options: ["(a) a baseball bat", "(b) a glass ornament", "(c) a gold ring", "(d) a tree"],
            correctAnswer: "(b) a glass ornament"
        },
        {
            id: "15c-q3",
            type: "multiple-choice",
            question: "3. Which of the following might cause **concern**?",
            options: ["(a) a toothache", "(b) rising prices", "(c) a hurricane warning", "(d) a furious customer"],
            correctAnswers: ["(a) a toothache", "(b) rising prices", "(c) a hurricane warning", "(d) a furious customer"] // All seem valid causes for concern.
        },
        {
            id: "15c-q4",
            type: "multiple-choice",
            question: "4. Which of the following could be a **menace** as you walk to school?",
            options: ["(a) icy sidewalks", "(b) thick fog", "(c) sunshine", "(d) shoes"],
            correctAnswers: ["(a) icy sidewalks", "(b) thick fog"]
        },
        {
            id: "15c-q5",
            type: "multiple-choice",
            question: "5. Which of the following might **pounce** on another animal?",
            options: ["(a) an elephant", "(b) a wolf", "(c) a tiger", "(d) a mouse"],
            correctAnswers: ["(b) a wolf", "(c) a tiger"]
        },
        {
            id: "15c-q6",
            type: "multiple-choice",
            question: "6. Which of the following is a **symbol** of the United States?",
            options: ["(a) the Stars and Stripes", "(b) the Statue of Liberty", "(c) the bald eagle", "(d) the Liberty Bell"],
            correctAnswers: ["(a) the Stars and Stripes", "(b) the Statue of Liberty", "(c) the bald eagle", "(d) the Liberty Bell"] // All are symbols.
        },
        {
            id: "15c-q7",
            type: "multiple-choice",
            question: "7. For which of the following might you be given a **trophy**?",
            options: ["(a) taking care of a little sister", "(b) winning a tennis match", "(c) catching the biggest fish", "(d) catching a cold"],
            correctAnswers: ["(b) winning a tennis match", "(c) catching the biggest fish"]
        },
        {
            id: "15c-q8",
            type: "multiple-choice",
            question: "8. Which of the following might do **widespread** damage?",
            options: ["(a) a flood", "(b) a hurricane", "(c) a leaky roof", "(d) an earthquake"],
            correctAnswers: ["(a) a flood", "(b) a hurricane", "(d) an earthquake"]
        }
    ]
};

export const b4_l15_story_4: Story = {
    id: "b4-l15-s4",
    title: "15D Word Study: Prefixes",
    type: "exercise",
    content: `Complete the word by writing the correct form of the prefix con- or com-.`,
    wordsIncluded: b4_l15_words.map(w => w.id),
    questions: [
        {
            id: "15d-q1",
            type: "multiple-choice",
            question: "1. _____trast to compare one thing _____ another",
            options: ["contrast", "comtrast"],
            correctAnswer: "contrast"
        },
        {
            id: "15d-q2",
            type: "multiple-choice",
            question: "2. _____centrate to bring or come _____ in one place",
            options: ["concentrate", "comcentrate"],
            correctAnswer: "concentrate"
        },
        {
            id: "15d-q3",
            type: "multiple-choice",
            question: "3. _____municate to be in touch _____",
            options: ["communicate", "conmunicate"],
            correctAnswer: "communicate"
        },
        {
            id: "15d-q4",
            type: "multiple-choice",
            question: "4. _____plete _____ nothing missing",
            options: ["complete", "conplete"],
            correctAnswer: "complete"
        },
        {
            id: "15d-q5",
            type: "multiple-choice",
            question: "5. _____cern to have to do _____",
            options: ["concern", "comcern"],
            correctAnswer: "concern"
        },
        {
            id: "15d-q6",
            type: "multiple-choice",
            question: "6. _____fuse to mix one thing up _____ another",
            options: ["confuse", "comfuse"],
            correctAnswer: "confuse"
        },
        {
            id: "15d-q7",
            type: "multiple-choice",
            question: "7. _____sider to think over _____ care",
            options: ["consider", "comsider"],
            correctAnswer: "consider"
        },
        {
            id: "15d-q8",
            type: "multiple-choice",
            question: "8. _____tract to draw closer _____",
            options: ["contract", "comtract"],
            correctAnswer: "contract"
        },
        {
            id: "15d-q9",
            type: "multiple-choice",
            question: "9. _____plain to find fault _____",
            options: ["complain", "conplain"],
            correctAnswer: "complain"
        },
        {
            id: "15d-q10",
            type: "multiple-choice",
            question: "10. _____nect to join one thing _____ another",
            options: ["connect", "comnect"],
            correctAnswer: "connect"
        }
    ]
};

export const b4_l15_story_5: Story = {
    id: "b4-l15-s5",
    title: "Reading Passage: The Fall and Rise of the Bald Eagle",
    type: "non-fiction",
    content: `
For over two hundred years, the bald eagle has been the **symbol** of America. The likeness of this powerful bird is found on our coins and on the Great Seal of the United States. Two hundred years ago, bald eagles were found throughout North America. By the 1970s, however, there were very few left outside of Alaska. The only creatures that **menace** the bald eagle are human beings. Why were there so few of these birds left? What are they like?

The bald eagle is a large, strong bird that is not really bald. It gets its name from its white-feathered head. The bird's head **contrasts** sharply with the rest of its brown-feathered body. When it flies, it looks as if it is a master of the air. The bald eagle is well equipped to live by hunting; it has keen vision, great **talons**, and a large, strongly hooked beak. Small animals and fish form the greater part of its diet. Sometimes it will **pounce** on a small lamb or piglet. Because of this, ranchers and farmers waged war on bald eagles. For hundreds of years they killed the birds in large numbers. In addition, hunters shot them in order to have them stuffed as **trophies**.

In the 1950s, it became **apparent** that there was a sharp drop in the number of bald eagles. The reason for this was soon discovered. The eagles' eggs were **fragile**. When they broke, the chicks inside died. The cause of the thin shells remained unknown for a number of years. Finally, the mystery was solved by a scientist named Rachel Carson.

Rachel Carson was **concerned** about the use of pesticides. Pesticides are chemicals used to kill insects that damage crops. In 1962, she wrote a book called *Silent Spring*. Her book showed how some chemicals were harming the nation's wildlife. It also explained why the eagle shells were thin: The cause was DDT. This pesticide had been in **widespread** use in the United States for over ten years. DDT had become **concentrated** in lakes and streams. Once it was in the water, it poisoned fish. Bald eagles ate fish that contained DDT. This caused them to lay eggs with thin shells that broke easily.

Rachel Carson hoped that Congress would act **promptly** to end the use of DDT and save the national bird. But it was not until 1973 that Congress passed a law **banning** the use of DDT. In the same year, it also passed a law that made it a crime to harm certain birds and animals that were **considered** to be in danger. The bald eagle was among them.

In 2007, this grand bird was removed from the national list of animals in danger of dying out. Laws continue to protect the bald eagle, and it is still illegal to harm them or their eggs. The bald eagle's **recent** numbers continue to rise. A 2016 estimate put the total number of bald eagles in North America at seventy thousand.
    `,
    wordsIncluded: b4_l15_words.map(w => w.id),
    questions: []
};

export const b4_l15_story_6: Story = {
    id: "b4-l15-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* When the Apollo astronauts returned to Earth, they brought back *fragments* of rocks from the moon. The word means "parts that are broken off," and comes from the Latin *fractus*, which means "broken." Several other English words are formed from this same Latin root. If you break a bone, you have a *fracture*. If you break down the number one into smaller parts, such as halves or quarters, you get *fractions*. Finally, something that is **fragile** is easily broken.

* When a stage actor forgets the next line, a person off to the side may **prompt** him or her by saying the line aloud. The *prompter* must say the line loud enough for the actor to hear but not so loud that the audience hears. If the audience does hear the *prompter*, the play usually gets an unintended laugh.

* A *cymbal* is a musical instrument; it is one of a pair of brass plates that are struck together to make a ringing sound. This word and **symbol** are homophones, words that sound alike but have different meanings and spellings.
`,
    wordsIncluded: ["fragile", "prompt", "symbol"],
    questions: []
};
