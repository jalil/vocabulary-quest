import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji
});

// Lesson 4 Words
export const b4_l4_words: VocabularyWord[] = [
    createWord("b4-l4-w1", "Active", "Taking part; working. Lively; quick; busy. Moving a lot; moving quickly.", "Luis has been an active member of the chess club for two years.", "🏃"),
    createWord("b4-l4-w2", "Astound", "To surprise; to amaze.", "The European Space Agency astounded the world in 2014 by landing a robot on a moving comet.", "😲"),
    createWord("b4-l4-w3", "Attend", "To go to or be present at. To pay attention to.", "If you are planning to attend the after-school party, please let Kwan know.", "🏫"),
    createWord("b4-l4-w4", "Cherish", "To cling to an idea or feeling. To take good care of; to love.", "Ramona cherished the hope that her father would return soon.", "💖"),
    createWord("b4-l4-w5", "Contract", "To make an agreement that has the force of law. To get; to come to have. To make or become smaller. An agreement that has the force of law.", "We contracted with carpenters to repair the stairs.", "📜"),
    createWord("b4-l4-w6", "Eager", "Wanting very much.", "We were eager to take part in the science project.", "🤩"),
    createWord("b4-l4-w7", "Expose", "To make known. To open to view. To leave unprotected.", "In her weekly newspaper column, Molly exposed the school's plan to cut recess time.", "🔓"),
    createWord("b4-l4-w8", "Grace", "Beauty of form or movement. A short prayer said before a meal. An extra period to do or pay something.", "Margot Fonteyn danced with such grace that she was hailed as one of the world's greatest ballerinas.", "🩰"),
    createWord("b4-l4-w9", "Impose", "To force someone to accept or put up with. To take unfair advantage of.", "The new coach imposed strict rules about arriving late or leaving practice early.", "😤"),
    createWord("b4-l4-w10", "Modest", "Not thinking too highly of oneself. Simple; not fancy or extreme.", "Nadia was too modest to accept all the credit for her part in writing the play.", "😳"),
    createWord("b4-l4-w11", "Parallel", "Lying in the same direction and always the same distance apart.", "The two edges of a ruler are parallel.", "⏸️"),
    createWord("b4-l4-w12", "Paralyze", "To stop all movement or feeling in. To make helpless or powerless.", "As the huge wave approached, fear paralyzed people walking at the water's edge.", "🧊"),
    createWord("b4-l4-w13", "Pessimist", "A person who expects things to turn out badly.", "A pessimist carries an umbrella even though the forecast is for fine weather.", "🌧️"),
    createWord("b4-l4-w14", "Recite", "To say aloud before an audience, usually from memory.", "Rozzie recited her favorite Emily Dickinson poem to the class.", "🗣️"),
    createWord("b4-l4-w15", "Respond", "To answer.", "When you want to respond to a question, please raise your hand.", "🙋")
];

// Fun Facts
export const b4_l4_story_6: Story = {
    id: "b4-l4-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
• **Antonyms** are words that are opposite in meaning. The antonym of **contract** in its meaning of "to make or become smaller" is *expand*.
Metals *contract* as they get colder; they *expand* as they get warmer.

• **Pessimist** and *optimist* are another pair of antonyms. An *optimist* has a cheerful outlook on life and expects things to go well. **Pessimist** is formed from the Latin word *pessimus*, which means "worst." *Optimist* is formed from the Latin word *optimus*, which means "best."
There is a saying that a *pessimist* is a person who sees the glass as half-empty; an *optimist* is a person who sees it as half-full.
`,
    wordsIncluded: [],
    questions: []
};

// Story 1: Using Words in Context
export const b4_l4_story_1: Story = {
    id: "b4-l4-s1",
    title: "Exercise: Using Words in Context",
    type: "non-fiction",
    content: "Read the following sentences. If the word in bold is used correctly, choose C. If the word is used incorrectly, choose I.",
    wordsIncluded: b4_l4_words.map(w => w.id),
    questions: [
        {
            id: "u-q1",
            type: "multiple-choice",
            question: "1. (a) **Paralysis** can make you need a wheelchair.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q2",
            type: "multiple-choice",
            question: "1. (b) You can draw a **paralysis** with just four straight lines.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Parallel
        },
        {
            id: "u-q3",
            type: "multiple-choice",
            question: "1. (c) We were **paralyzed** with fear as the tornado got closer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q4",
            type: "multiple-choice",
            question: "1. (d) A **paralysis** is a person who always looks on the bright side.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Pessimist/Optimist
        },
        {
            id: "u-q5",
            type: "multiple-choice",
            question: "2. (a) Movie stars **contract** a lot of attention from the radio.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Attract?
        },
        {
            id: "u-q6",
            type: "multiple-choice",
            question: "2. (b) Anyone who **contracts** the flu should stay home.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q7",
            type: "multiple-choice",
            question: "2. (c) The **contract** was written by someone who knows the law.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q8",
            type: "multiple-choice",
            question: "2. (d) The **contract** opens when you push on it.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Contact?
        },
        {
            id: "u-q9",
            type: "multiple-choice",
            question: "3. (a) We were kept in **response** as we waited to hear the answer.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Suspense?
        },
        {
            id: "u-q10",
            type: "multiple-choice",
            question: "3. (b) Did anyone **respond** to the ad in the newspaper?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q11",
            type: "multiple-choice",
            question: "3. (c) Does my drawing **respond** like my little sister?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Resemble?
        },
        {
            id: "u-q12",
            type: "multiple-choice",
            question: "3. (d) I rang the doorbell several times, but there was no **response** from inside.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q13",
            type: "multiple-choice",
            question: "4. (a) Tsakao stays **active** by running a mile every day.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q14",
            type: "multiple-choice",
            question: "4. (b) Mafaz has been an **active** member of her community for fifty years.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q15",
            type: "multiple-choice",
            question: "4. (c) Mount Saint Helens is an **active** volcano in Washington state.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q16",
            type: "multiple-choice",
            question: "4. (d) The cat's fur is the most **active** after we brush it.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Attractive? Soft?
        },
        {
            id: "u-q17",
            type: "multiple-choice",
            question: "5. (a) Mariah's guests **imposed** on her by staying too late in the night.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q18",
            type: "multiple-choice",
            question: "5. (b) The principal **imposed** new rules for the playground.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q19",
            type: "multiple-choice",
            question: "5. (c) I was having a quiet **impose** in the hammock when the dog jumped on me.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Repose?
        },
        {
            id: "u-q20",
            type: "multiple-choice",
            question: "5. (d) Are you **imposing** that Clayton cheated you of the money?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Proposing? Implying?
        },
        {
            id: "u-q21",
            type: "multiple-choice",
            question: "6. (a) I'm sorry that I won't be able to **attend** Veena's party.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q22",
            type: "multiple-choice",
            question: "6. (b) I did not **attend** to hurt Ashanique's feelings.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Intend
        },
        {
            id: "u-q23",
            type: "multiple-choice",
            question: "6. (c) **Attend** to everything I say because I don't want to repeat myself.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q24",
            type: "multiple-choice",
            question: "6. (d) I was asked which school I **attended**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q25",
            type: "multiple-choice",
            question: "7. (a) 'I hardly did anything,' said Josh **modestly**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q26",
            type: "multiple-choice",
            question: "7. (b) The concert raised a **modest** amount for the children's fund.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q27",
            type: "multiple-choice",
            question: "7. (c) The **modesty** had hardly been used and looked brand new.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "u-q28",
            type: "multiple-choice",
            question: "7. (d) Martina picked as the winner the **modest** one she could find.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Most?
        },
        {
            id: "u-q29",
            type: "multiple-choice",
            question: "8. (a) Paint that is **exposed** to lots of sunlight soon starts to fade.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q30",
            type: "multiple-choice",
            question: "8. (b) What do you **expose** he meant when he said that to you?",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Suppose
        },
        {
            id: "u-q31",
            type: "multiple-choice",
            question: "8. (c) I am **exposed** to keep my room neat at all times.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Supposed/Expected
        },
        {
            id: "u-q32",
            type: "multiple-choice",
            question: "8. (d) Tex removed his hat to **expose** his shaved head.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q33",
            type: "multiple-choice",
            question: "9. (a) Shayna was able to **recite** the poem without stumbling once.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q34",
            type: "multiple-choice",
            question: "9. (b) Josie **recited** so hard she couldn't breathe.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "u-q35",
            type: "multiple-choice",
            question: "9. (c) Wilma grew bored and left before the **recital** was over.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q36",
            type: "multiple-choice",
            question: "9. (d) Wendy rushed from the room, knocking over the **recital** as she fled.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "u-q37",
            type: "multiple-choice",
            question: "10. (a) **Astounding** the seeds from last year made them start to grow.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "u-q38",
            type: "multiple-choice",
            question: "10. (b) Marco Polo had **astounding** tales to tell of his visit to China.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "u-q39",
            type: "multiple-choice",
            question: "10. (c) The lighthouse was **astounded** on solid rock.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect" // Founded?
        },
        {
            id: "u-q40",
            type: "multiple-choice",
            question: "10. (d) I promise that what I have to tell you will **astound** you.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        }
    ]
};

// Story 2: Making Connections
export const b4_l4_story_2: Story = {
    id: "b4-l4-s2",
    title: "Exercise: Making Connections",
    type: "non-fiction",
    content: "Which word or words go with the phrase? (Circle the letter or letters next to each correct answer. There may be more than one correct answer.)",
    wordsIncluded: b4_l4_words.map(w => w.id),
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **care deeply**?",
            options: ["(a) astound", "(b) recite", "(c) cherish", "(d) approach"],
            correctAnswer: "(c) cherish"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **full of energy and enthusiasm**?",
            options: ["(a) modest", "(b) active", "(c) eager", "(d) vigorous"],
            correctAnswer: "(b) active (c) eager (d) vigorous" // All seem appropriate.
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **expect the worst**?",
            options: ["(a) pessimistic", "(b) eager", "(c) active", "(d) severe"],
            correctAnswer: "(a) pessimistic"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **sleepy**?",
            options: ["(a) active", "(b) drowsy", "(c) famished", "(d) doze"],
            correctAnswer: "(b) drowsy (d) doze"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **side by side**?",
            options: ["(a) contract", "(b) recital", "(c) paralysis", "(d) parallel"],
            correctAnswer: "(d) parallel"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **ballerina**?",
            options: ["(a) grace", "(b) malice", "(c) talent", "(d) nectar"],
            correctAnswer: "(a) grace (c) talent"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **performance**?",
            options: ["(a) act", "(b) recital", "(c) contract", "(d) response"],
            correctAnswer: "(a) act (b) recital"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **surprising**?",
            options: ["(a) ceasing", "(b) eager", "(c) astounding", "(d) pessimistic"],
            correctAnswer: "(c) astounding"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with **get smaller**?",
            options: ["(a) respond", "(b) reduce", "(c) impose", "(d) contract"],
            correctAnswer: "(b) reduce (d) contract"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **make known**?",
            options: ["(a) attend", "(b) expose", "(c) respond", "(d) impose"],
            correctAnswer: "(b) expose"
        }
    ]
};

// Story 3: Determining Meanings
export const b4_l4_story_3: Story = {
    id: "b4-l4-s3",
    title: "Exercise: Determining Meanings",
    type: "non-fiction",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    wordsIncluded: b4_l4_words.map(w => w.id),
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. I want to **respond**",
            options: ["(a) to something you said the other day.", "(b) to a column in yesterday's newspaper.", "(c) the money you lent me back in June.", "(d) but I can't think what to say."],
            correctAnswer: "(a), (d)" // (b) respond to? yes.
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. A **pessimistic** person",
            options: ["(a) is someone who might need to be cheered up.", "(b) is someone who cares deeply about nature.", "(c) loves the country where she was born.", "(d) says that the glass is half empty."],
            correctAnswer: "(a), (d)"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. An **active**",
            options: ["(a) mind is one that enjoys solving puzzles.", "(b) victory is one that brings no benefit to the winners.", "(c) person is never busy.", "(d) person tries to stay busy."],
            correctAnswer: "(a), (d)"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. We **cherished**",
            options: ["(a) our team above all others in the league.", "(b) the memory of those who were no longer with us.", "(c) the boots until the toes shone like mirrors.", "(d) the chestnuts by roasting them over an open fire."],
            correctAnswer: "(a), (b)"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. Do not **expose**",
            options: ["(a) your eyes to direct sunlight.", "(b) his mistakes, because he wants to confess on his own.", "(c) that you can get away with making up stories about me.", "(d) your pet rabbit to the cold."],
            correctAnswer: "(a), (b), (d)"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. A **modest**",
            options: ["(a) house in a nice part of our new town was Mom's greatest wish.", "(b) 'Oh, it was nothing,' was her reply when he thanked her.", "(c) amount of grapes was all I wanted for a snack.", "(d) time for the meeting would be noon on Tuesday."],
            correctAnswer: "(a), (b), (c)"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. He was **eagerly**",
            options: ["(a) waiting to see his friends after two weeks away at summer camp.", "(b) looking forward to feeling miserable.", "(c) hoping to win the chess tournament, so he practiced hard.", "(d) looking forward to eating after skipping lunch to play basketball."],
            correctAnswer: "(a), (c), (d)"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. I **attended**",
            options: ["(a) Highmount Junior School when I was younger.", "(b) to spend the holiday with my aunt.", "(c) to every word she said.", "(d) that I was a monster to scare my little brother."],
            correctAnswer: "(a), (c)"
        }
    ]
};

// Story 4: Completing Sentences
export const b4_l4_story_4: Story = {
    id: "b4-l4-s4",
    title: "Exercise: Completing Sentences",
    type: "non-fiction",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    wordsIncluded: b4_l4_words.map(w => w.id),
    questions: [
        {
            id: "cs-q1",
            type: "multiple-choice",
            question: "1. If someone **imposes** on me, I might feel",
            options: ["angry", "grateful", "happy", "relieved"],
            correctAnswer: "angry"
        },
        {
            id: "cs-q2",
            type: "multiple-choice",
            question: "2. If two lines are **parallel**, that means they are",
            options: ["crossing", "touching", "the same distance apart", "curved"],
            correctAnswer: "the same distance apart"
        },
        {
            id: "cs-q3",
            type: "multiple-choice",
            question: "3. An animal that is **paralyzed** is",
            options: ["able to run fast", "unable to move", "sleeping", "hungry"],
            correctAnswer: "unable to move"
        },
        {
            id: "cs-q4",
            type: "multiple-choice",
            question: "4. A **pessimist** thinks",
            options: ["things will go well", "things will turn out badly", "about the past", "about food"],
            correctAnswer: "things will turn out badly"
        },
        {
            id: "cs-q5",
            type: "multiple-choice",
            question: "5. I have seen a **graceful**",
            options: ["dancer", "clown", "truck", "rock"],
            correctAnswer: "dancer"
        },
        {
            id: "cs-q6",
            type: "multiple-choice",
            question: "6. To **expose** something means to",
            options: ["hide it", "reveal it", "break it", "fix it"],
            correctAnswer: "reveal it"
        },
        {
            id: "cs-q7",
            type: "multiple-choice",
            question: "7. If you **contract** with someone by law, that means",
            options: ["you make a legal agreement", "you fight them", "you ignore them", "you help them"],
            correctAnswer: "you make a legal agreement"
        },
        {
            id: "cs-q8",
            type: "multiple-choice",
            question: "8. Something important that I think people should **attend** to",
            options: ["is their health", "is their video games", "is their candy", "is their nap"],
            correctAnswer: "is their health"
        },
        {
            id: "cs-q9",
            type: "multiple-choice",
            question: "9. An **astounding** news story might be",
            options: ["boring", "common", "surprising", "short"],
            correctAnswer: "surprising"
        },
        {
            id: "cs-q10",
            type: "multiple-choice",
            question: "10. If you have been an **active** member of a club for three years, that means you",
            options: ["never went", "participated a lot", "quit", "watched"],
            correctAnswer: "participated a lot"
        }
    ]
};

// Story 5: Reading Passage
export const b4_l4_story_5: Story = {
    id: "b4-l4-s5",
    title: "Reading Passage: One Step at a Time",
    type: "non-fiction",
    content: `
Courage! That's all Sucheng Chan had to fight her battles, but it was enough. Her troubles began when she was young. She was an **active** child who liked nothing better than to run outside and play with the other children in the village in China where she was born. But at the age of four she **contracted** polio, a childhood disease that was once common but is now rare. Polio causes **paralysis**, and the muscles in Sucheng Chan's legs slowly wasted away until she could no longer run or even walk.The doctors were ** pessimistic ** about her chances of living more than a year or two, but they did not know her.With courage came determination, and Sucheng was determined to walk again.

For three years, Sucheng Chan lay helplessly in bed.But one day she surprised her mother.Sucheng Chan asked her mother to set up some chairs in two ** parallel ** lines, their backs facing each other.She then forced herself out of bed, and with great difficulty she made her way between the chairs, using their backs as support.She did this repeatedly to develop her limbs.Her body ached from her many falls.

At that time, China was at war with Japan.Sucheng Chan's father was serving in the army, unable to see his family. He **cherished** his daughter, though. It saddened him that he could not give her the comfort and support she needed. When the war ended, he finally returned home. Imagine how **astounded** he was to see Sucheng Chan walk up to him and welcome him! Her movements were not at all **graceful**. But to her father, there had never been such a beautiful sight.

Sucheng Chan had always been an intelligent child.She was ** eager ** to go to school.But in those days in China, education was not freely available, and her parents had only a ** modest ** income.Sucheng Chan was eight years old before they saved enough money for her to ** attend ** the American school in Shanghai.There she learned to speak English.She also began a lifelong study of Asian history and culture.

    In 1948, at the end of Sucheng Chan's first year in school, China's government became communist.The new government ** imposed ** strict rules forbidding contact with foreigners.One result was that the American school was closed.Sucheng Chan and her parents grew increasingly unhappy.They decided to leave China and settle in Malaysia.

Sucheng Chan spent her teenage years at a Malaysian high school.This was the happiest time of her life.She did very well in school and took piano lessons.Sometimes she gave ** recitals ** for visitors.Once, when she walked across the stage, her legs gave way, and she collapsed.She heard a voice say, "Ayah! Someone like you should not **expose** herself like that." Sucheng Chan's **response** was to struggle to her feet, walk to the piano, and sit down. She played so beautifully that the audience was moved to tears.

After graduating with honors from high school, Sucheng Chan was awarded scholarships to the University of Hawaii.She later became a professor of history and director of Asian American studies at the University of California, Santa Barbara.She tackled life vigorously and with enjoyment.Doctors told her that she might need a wheelchair by the time she approached forty; polio's lasting effects can cause more damage to muscles. The doctors were right. But Sucheng Chan did not mind the wheelchair. "I use it only when I am *not* in a hurry," she said.
    `,
    wordsIncluded: b4_l4_words.map(w => w.id),
    questions: []
};
