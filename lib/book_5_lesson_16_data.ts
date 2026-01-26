import { Story, VocabularyWord } from "@/lib/types";

// Helper function defined locally
function createWord(id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, relatedWords: string[] = []): VocabularyWord {
    return {
        id,
        word,
        definition,
        exampleSentence,
        imageEmoji,
        category: "Grade 5",
    };
}

export const b5_l16_words: VocabularyWord[] = [
    createWord("b5-l16-w1", "Abdicate", "To give up a high office.", "When Edward VIII abdicated the throne in 1936, his younger brother became king of England.", "👑"),
    createWord("b5-l16-w2", "Assume", "1. To take for granted; to suppose. 2. To take over; to occupy. 3. To pretend to have.", "We cannot assume that Mom and Dad will meet us at the station if the train is two hours late. Ruth Bader Ginsburg assumed office as a justice of the Supreme Court in 1993. Edin assumed a look of innocence.", "🤔"),
    createWord("b5-l16-w3", "Bungle", "To do something badly or without skill.", "Because the shortstop bungled the double play, the runner made it safely to first base.", "🤪"),
    createWord("b5-l16-w4", "Dominate", "1. To rule or control; to have a very important place or position. 2. To rise high above.", "Rock dominated popular music in America for several decades. The Willis Tower dominates the Chicago skyline.", "🏙️"),
    createWord("b5-l16-w5", "Former", "1. Coming before in time; having been at an earlier time. 2. The first of two just mentioned.", "Three former mayors were invited to the dedication of our new city hall. Both the crocodile and the alligator are dangerous, but the former is more aggressive.", "⏮️"),
    createWord("b5-l16-w6", "Guardian", "1. One who protects. 2. One who legally has the care of another person.", "This ferocious dog acts as guardian of the property at night. You need the permission of your parent or guardian to go on field trips.", "🛡️"),
    createWord("b5-l16-w7", "Hoist", "To lift or raise, especially by using a rope. Something used to lift, as a crane or pulley.", "The sailors hoisted the sails as we left the harbor. We cannot move this heavy machine without a hoist.", "🏗️"),
    createWord("b5-l16-w8", "Intercept", "To stop or seize something while it is on its way somewhere.", "The Coast Guard can intercept boats in United States waters to investigate their cargoes.", "✋"),
    createWord("b5-l16-w9", "Jubilee", "The celebration of an anniversary, especially a fiftieth anniversary or beyond.", "The school marked its jubilee with a banquet for graduates from the past fifty years.", "🎉"),
    createWord("b5-l16-w10", "Kin", "Related by birth or marriage. (Kinfolk: Relatives; family. Next of kin: The person most closely related to someone.)", "Are you kin to the Jordans, or are you just a friend of theirs? She celebrated her ninetieth birthday with all her kin around her.", "👪", ["kinfolk"]),
    createWord("b5-l16-w11", "Pardon", "1. To forgive. 2. To free from legal punishment. The act of forgiving or freeing from legal punishment.", "Alice pardoned the Red Queen's rude remark. The president granted a pardon to the man who showed many years of good behavior.", "🙇"),
    createWord("b5-l16-w12", "Proclaim", "To make known publicly; to announce.", "The mayor proclaimed May 18 a city holiday.", "📢"),
    createWord("b5-l16-w13", "Provoke", "1. To annoy or make angry. 2. To call forth; to rouse. (Provocative: Calling forth anger, amusement, or thoughtfulness; trying to cause a response.)", "Cho said he took Katie's toys away because she provoked him with her constant talking. Senator Rodriguez's comments provoked laughter in the audience.", "😠", ["provocative"]),
    createWord("b5-l16-w14", "Reign", "1. To rule as a queen or king. 2. To be widespread.", "King Hussein of Jordan reigned for over forty years. Terror reigned in the streets of Paris during the French Revolution.", "👑"),
    createWord("b5-l16-w15", "Riot", "1. Public disorder or violence. 2. A great and seemingly disordered quantity of something. To take part in a disorder.", "Good citizens did all they could to prevent riots after the local team lost in the playoffs. My dad's rose garden is a riot of color in the summer.", "🔥")
];

export const b5_l16_story_main: Story = {
    id: "b5-l16-story-main",
    title: "The Last Queen of the Islands",
    type: "story",
    content: `Although she never dreamed it would happen, Liliuokalani grew up to become the queen of the Hawaiian Islands. Born on the island of Oahu in 1838, she was in her teens when her parents died. Her older brother Kalakaua became her **guardian**. They were **kin** to the Hawaiian royal family, but Kalakaua was not expected to succeed to the throne.

When King Lunalilo died in 1874, after ruling for barely one year, many believed that Queen Emma, widow of a **former** king, would be chosen to succeed him. It came as a surprise to Queen Emma's supporters that the elected members of Hawaii's governing body passed her by and **proclaimed** Kalakaua king instead.

King Kalakaua **reigned** for seventeen years. The islands were **dominated** at that time by powerful planters and businessmen. Chief among them was Sanford Dole. Dole was a lawyer, a politician, and the planters' natural leader. In 1887, this group forced Kalakaua to sign away almost all of his powers. That made him Hawaii's ruler in name only. Kalakaua had no children; following the death of his younger brother in 1877, he chose Liliuokalani to succeed him to the throne. She ruled in her brother's place when he was absent from the kingdom. She also represented him at Queen Victoria's Golden **Jubilee** in London in 1887.

Liliuokalani ascended the throne of Hawaii following her brother's death in 1891. She promptly set about regaining real power. The Hawaiian people resented the takeover of their government by the *haoles*, as the white-skinned Americans are called in Hawaiian. They supported their queen. Liliuokalani declared a plan for government that gave more power to native Hawaiians. The *haoles* formed a committee to stop her. On January 16, 1893, the *haole* leaders brought in American sailors and marines who were stationed on nearby ships. They were there to prevent **riots** from breaking out in support of the queen.

The next day, the committee of *haoles* set up its own government with Sanford Dole as leader. Liliuokalani opposed this. She asked the president of the United States for help. After an investigation, President Grover Cleveland ordered that Liliuokalani be returned to power. But Dole claimed that the U.S. government had no right to interfere in Hawaii's affairs. On July 4, 1894, he **assumed** the presidency of the new Republic of Hawaii. Liliuokalani remained queen, but with no power to govern.

Early the next year, a group of Liliuokalani's supporters rebelled against the new government. The attempt was badly **bungled**, failing miserably. Dole accused Liliuokalani of **provoking** it and arrested her. She steadfastly denied being involved. But messages between her and her followers had been **intercepted**, and weapons were found in her home. Liliuokalani was told that if she would **abdicate**, her supporters, who were then in jail, would not be put to death. To save their lives, she agreed to step down. She was sentenced to five years imprisonment for her role in the revolt. After eight months Dole **pardoned** her on the condition that she take no further part in politics. Liliuokalani withdrew to her home, where she continued to fly the Hawaiian flag.

In 1898, Hawaii became part of the United States, with Sanford Dole serving as governor. For many years, Liliuokalani brought lawsuits against the United States to seek compensation for the injustice of stealing Hawaii from its people. Then, in 1917, during World War I, the first Hawaiians died fighting for the United States against Germany. The day she received the news, Liliuokalani lowered the Hawaiian flag and **hoisted** the Stars and Stripes.`,
    wordsIncluded: [
        "former", "dominate", "riot", "proclaimed", "abdicate", "reign", "intercept",
        "bungle", "guardian", "provoke", "pardon", "jubilee", "kin", "assume", "hoist"
    ]
};

export const b5_l16_story_1: Story = {
    id: "b5-l16-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, select 'Correct'. If the word is used incorrectly, select 'Incorrect'.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. (a) The **bungle** was delivered on Tuesday. (b) They built the playground so fast, they **bungled** it pretty badly.",
            options: ["a: Incorrect, b: Correct", "a: Correct, b: Incorrect", "Both Correct", "Both Incorrect"],
            correctAnswer: "a: Incorrect, b: Correct"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. (a) I was able to **hoist** myself up the rope. (b) We **hoisted** the flag. (c) The book club is **hoisting** a party. (d) We need a **hoist** to lift this boulder.",
            options: ["c is Incorrect", "All are Correct", "a and b are Incorrect"],
            correctAnswer: "c is Incorrect"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. (a) The Roman Empire **reigned** from 27 BCE to 476 CE. (b) The **reign** of Queen Elizabeth II began in 1952. (c) The driver took the **reigns** and told the horse to stop.",
            options: ["c is Incorrect", "All are Correct", "a is Incorrect"],
            correctAnswer: "c is Incorrect" // Reins vs Reigns
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. (a) The governor can grant a **pardon**. (b) **Pardon** my interruption. (c) William **pardoned** everyone for coming. (d) **Pardon** the lunch before you sit down.",
            options: ["c and d are Incorrect", "All are Correct", "a is Incorrect"],
            correctAnswer: "c and d are Incorrect"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. (a) He **provoked** a funny story about a clown. (b) My little brother is being **provocative**. (c) Your insults **provoked** Emily into anger.",
            options: ["a is Incorrect", "b is Incorrect", "All are Correct"],
            correctAnswer: "a is Incorrect"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. (a) The fire chief said the house was **proclaimed** in the fire. (b) Lincoln **proclaimed** the end of slavery.",
            options: ["a is Incorrect", "b is Incorrect", "Both are Correct"],
            correctAnswer: "a is Incorrect"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. (a) Mr. Jackson will **assume** the office of mayor. (b) Binh **assumed** a hurt look. (c) We **assume** traffic will be heavy.",
            options: ["All are Correct", "a is Incorrect", "c is Incorrect"],
            correctAnswer: "All are Correct"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. (a) Her paintings are a **riot** of blues. (b) The **riot** ended quickly. (c) Though many people **rioted**, it was those who spoke calmly who made the difference. (d) I **rioted** quietly as I climbed the stairs.",
            options: ["d is Incorrect", "c is Incorrect", "All are Correct"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. (a) Muhammad Ali **dominated** boxing. (b) The Freedom Tower **dominates** the skyline. (c) The robot is **dominated** once you push the green button.",
            options: ["c is Incorrect", "All are Correct", "a is Incorrect"],
            correctAnswer: "c is Incorrect" // Likely meant 'activated' or similar
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. (a) There's an **intercepting** story online. (b) The note was **intercepted** by the teacher. (c) Suki keeps **intercepting** me whenever I try to talk.",
            options: ["a is Incorrect", "b is Incorrect", "c is Incorrect"],
            correctAnswer: "a is Incorrect" // Interesting
        }
    ],
    wordsIncluded: ["bungle", "hoist", "reign", "pardon", "provoke", "proclaim", "assume", "riot", "dominate", "intercept"]
};

export const b5_l16_story_2: Story = {
    id: "b5-l16-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Which word or words go with the phrase? Select the best match.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. give up",
            options: ["abdicate", "assume", "provoke", "yield"],
            correctAnswer: "abdicate"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. earlier time",
            options: ["former", "duration", "previous", "delicate"],
            correctAnswer: "former"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. protect",
            options: ["guardian", "bungle", "reign", "pardon"],
            correctAnswer: "guardian"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. special occasion",
            options: ["riot", "jubilee", "celebrate", "provoke"],
            correctAnswer: "jubilee"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. family",
            options: ["ancestor", "kinfolk", "bungle", "intercept"],
            correctAnswer: "kinfolk"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. disorder",
            options: ["rebellion", "transformation", "illumination", "riot"],
            correctAnswer: "riot"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. give up office",
            options: ["employ", "reign", "abdicate", "riot"],
            correctAnswer: "abdicate"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. forgive",
            options: ["dominate", "intercept", "employ", "pardon"],
            correctAnswer: "pardon"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. make known",
            options: ["assume", "intercept", "provoke", "proclaim"],
            correctAnswer: "proclaim"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. higher",
            options: ["collapse", "elevate", "escalate", "hoist"],
            correctAnswer: "hoist"
        }
    ],
    wordsIncluded: ["abdicate", "former", "guardian", "jubilee", "kin", "riot", "pardon", "proclaim", "hoist"]
};

export const b5_l16_story_3: Story = {
    id: "b5-l16-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. We **intercepted**\n(a) the package before it could be delivered.\n(b) the ball after the game began.\n(c) ourselves between the two dogs.\n(d) the other team before the game began.",
            options: ["a and b", "a only", "c and d"],
            correctAnswer: "a only"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. The **abdication**\n(a) was put in an envelope and mailed.\n(b) of the queen after fifteen years was shocking.\n(c) of the light bulb was amazing.\n(d) of the presidential office to the vice president happened quickly.",
            options: ["b and d", "a only", "c and d"],
            correctAnswer: "b and d"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. The **kinfolk**\n(a) lasted just a short while.\n(b) gathered around the table.\n(c) are all invited to the big family birthday party.\n(d) is kept in the barn.",
            options: ["b and c", "a only", "d only"],
            correctAnswer: "b and c"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. What **provoked**\n(a) such an aggressive response?\n(b) Santos to challenge Hernandez to a game?\n(c) Hermione in the hand?\n(d) the disease was a bite from a tick.",
            options: ["a and b", "c only", "d only"],
            correctAnswer: "a and b"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. The **assumption**\n(a) that he could get away with it was unbelievable.\n(b) is that if she studies enough, she will pass.\n(c) of ice into water will happen quickly.\n(d) is that the weather will clear up.",
            options: ["a, b, and d", "c only", "a and b"],
            correctAnswer: "a, b, and d"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. Her **former**\n(a) letter is addressed to the president.\n(b) old bike has been fixed up like new!\n(c) dress is ready to wear.\n(d) sad face is now happy.",
            options: ["b only", "a and c", "d only"],
            correctAnswer: "b only"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. He **dominated**\n(a) the weight-lifting competition.\n(b) the honey by first finding the beehive.\n(c) the Spanish words into English.\n(d) the room with his loud voice.",
            options: ["a and d", "b only", "c and d"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. We **bungled**\n(a) our chance to win by not working as a team.\n(b) the quiz because we didn't study.\n(c) and danced gracefully on the stage.\n(d) my mom into letting us go inside.",
            options: ["a and b", "c only", "d only"],
            correctAnswer: "a and b"
        }
    ],
    wordsIncluded: ["intercept", "abdicate", "kin", "provoke", "assume", "former", "dominate", "bungle"]
};

export const b5_l16_story_4: Story = {
    id: "b5-l16-story-4",
    title: "Completing Sentences",
    type: "exercise",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    questions: [
        {
            id: "cs-q1",
            type: "open-ended",
            question: "1. I **assume** that...",
            sampleAnswer: "we will have a pop quiz today since the teacher hinted at it."
        },
        {
            id: "cs-q2",
            type: "open-ended",
            question: "2. One animal that would **dominate** an elephant's height would be a...",
            sampleAnswer: "giraffe."
        },
        {
            id: "cs-q3",
            type: "open-ended",
            question: "3. If you **pardon** someone, that means you...",
            sampleAnswer: "forgive them for something they did wrong."
        },
        {
            id: "cs-q4",
            type: "open-ended",
            question: "4. Something a teacher might **proclaim** is...",
            sampleAnswer: "that everyone who got an A on the test will get extra recess."
        },
        {
            id: "cs-q5",
            type: "open-ended",
            question: "5. Someone who **reigns** might be a...",
            sampleAnswer: "king, queen, or emperor."
        },
        {
            id: "cs-q6",
            type: "open-ended",
            question: "6. My **former** teacher's name was...",
            sampleAnswer: "Mrs. Johnson."
        },
        {
            id: "cs-q7",
            type: "open-ended",
            question: "7. I'm sure I would **bungle** it if I tried to...",
            sampleAnswer: "juggle five balls at once."
        },
        {
            id: "cs-q8",
            type: "open-ended",
            question: "8. The name of one of my **kin** is...",
            sampleAnswer: "my brother David."
        },
        {
            id: "cs-q9",
            type: "open-ended",
            question: "9. Something that is a **riot** of color is...",
            sampleAnswer: "a field of wildflowers in spring."
        },
        {
            id: "cs-q10",
            type: "open-ended",
            question: "10. A **provocative** statement might be...",
            sampleAnswer: "that video games should replace homework."
        }
    ],
    wordsIncluded: ["assume", "dominate", "pardon", "proclaim", "reign", "former", "bungle", "kin", "riot", "provoke"]
};

export const b5_l16_story_5_facts: Story = {
    id: "b5-l16-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   The antonym of **former** is *latter*. If given a choice between silk and cotton, and you choose the *latter*, you will get cotton. If you choose the **former**, you will get silk.

*   The Latin prefix *inter-* means "between." *International* affairs are those conducted *between* nations; *interstate* commerce is business conducted *between* states. This prefix is combined with the root from the Latin verb *capere*, "to take," to form the word **intercept**. Something that is *intercepted* is *taken* as it passes *between* the sender and the receiver.

*   **Jubilee** comes from the Hebrew *yobhel*, which was a ram's horn used as a trumpet. It was blown every fifty years to celebrate the release of the Jewish people from bondage. The word applies especially to a fiftieth anniversary but is used to mark other anniversaries as well. In 1897, Queen Victoria celebrated her Diamond **Jubilee**, by which time she had occupied the British throne for sixty years.

*   Homophones usually come in pairs but sometimes come in threes. **Reign**, *rain*, and *rein* are homophones. To *rein* in a horse is to control its speed by pulling on the *reins*.`,
    wordsIncluded: [
        "former", "intercept", "jubilee", "reign"
    ]
};
