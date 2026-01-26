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

export const b5_l20_words: VocabularyWord[] = [
    createWord("b5-l20-w1", "Ample", "1. Plenty; more than enough. 2. Large in size.", "One large turkey will provide ample food for eight people. The cat's ample stomach was proof that he was given plenty of food.", "🥘"),
    createWord("b5-l20-w2", "Burden", "1. Something that is carried, especially a heavy load. 2. Anything that is hard to bear. 3. To add to what one has to bear. (Burdensome: Hard to bear; heavy.)", "Carrying his frail son on his shoulder was never a burden. The burden of caring for four sick children was too much for the babysitter. Don't burden your grandparents with this problem.", "🎒", ["burdensome"]),
    createWord("b5-l20-w3", "Compassion", "A feeling of sharing the suffering of others and of wanting to help; sympathy; pity. (Compassionate: The state of showing compassion.)", "Shazia's compassion for the homeless led to her working each weekend at the soup kitchen. The doctor's compassionate manner made her loved by all of her patients.", "❤️", ["compassionate"]),
    createWord("b5-l20-w4", "Comply", "To act in agreement with a rule or another's wishes.", "Unless you comply with the requirement to wear shoes, you cannot enter the restaurant.", "✅"),
    createWord("b5-l20-w5", "Cumbersome", "Awkward and hard to handle; unwieldy.", "The crate of oranges was cumbersome, but the clerk managed to get it up the stairs.", "📦"),
    createWord("b5-l20-w6", "Distress", "1. To cause pain or sorrow; to trouble or worry. 2. Pain, sorrow, or worry.", "It distresses me that no one offered to help when they saw the accident. Our class felt distress because of our friend's illness, so we made a large poster with our get-well wishes.", "😟"),
    createWord("b5-l20-w7", "Encounter", "1. To meet unexpectedly. 2. To be faced with. 3. A chance meeting. 4. A battle or fight.", "The actress encountered a crowd of fans in the lobby of her hotel. As the frightened children ran around the corner, they encountered a stone wall. Our encounter with our neighbor at the party was a pleasant surprise. The first major encounter of the Civil War occurred at Fort Sumter on April 12, 1861.", "🤝"),
    createWord("b5-l20-w8", "Exert", "To put forth effort. (Exertion: The act of bringing oneself a strong effort.)", "If Jane doesn't exert herself more in Spanish class, I'm sure she will not be able to speak the language. The exertion of climbing to the top of the ruins left the explorers feeling weak.", "💪", ["exertion"]),
    createWord("b5-l20-w9", "Indignant", "Angry or resentful about something that seems wrong or unfair. (Indignation: Anger that is caused by something mean or unfair.)", "Bonnie was indignant when her friend ignored her repeated texts. My indignation was aroused when I was not given a chance to defend myself.", "😠", ["indignation"]),
    createWord("b5-l20-w10", "Jest", "1. A joke or the act of joking. 2. To joke or say things lightheartedly.", "My remark was made in jest; I'm sorry you took me seriously. \"Surely you jest,\" I said when my aunt suggested throwing out the television set.", "🃏"),
    createWord("b5-l20-w11", "Mirth", "Laughter; joyfulness expressed through laughter.", "The sight of the three-year-old wearing her mother's hat and shoes provoked much mirth among the family.", "😂"),
    createWord("b5-l20-w12", "Moral", "1. A useful lesson about life. 2. Having to do with questions of right and wrong. 3. Based on what is right and proper.", "The play's moral was \"Look before you leap.\" Animal cruelty is a moral as well as a legal issue. You have a moral duty to report a crime if you see it.", "⚖️"),
    createWord("b5-l20-w13", "Outskirts", "The parts far from the center, as of a town.", "The plan to build another large shopping mall on the outskirts of town was voted down at the meeting.", "🏘️"),
    createWord("b5-l20-w14", "Resume", "1. To begin again after a pause. 2. To occupy again.", "The concert will resume after a fifteen-minute break. After the quick stop, the bus passengers resumed their seats for the next part of the journey.", "▶️"),
    createWord("b5-l20-w15", "Ridicule", "1. To make fun of; to mock. 2. Words or actions intended to make fun of or mock. (Ridiculous: Laughable; deserving of mockery.)", "People once ridiculed the idea that flight by heavier-than-air machines was possible. Their ridicule of my friend finally provoked me to lose my temper. It is ridiculous to suggest that a bridge could be built across the Atlantic Ocean.", "🤪", ["ridiculous"])
];

export const b5_l20_story_main: Story = {
    id: "b5-l20-story-main",
    title: "A Tale of Two Donkeys",
    type: "story",
    content: `Aesop was an enslaved person who lived in ancient Greece. Although little is known about his life, readers have enjoyed the fables he told for more than twenty-five centuries. Not only are his stories entertaining, but they also teach us something about human behavior, for a fable is a story with a lesson. The characters in them can be animals who talk and behave like humans, or they can be ordinary people, like those in the story that follows.

A farmer and his daughter were on their way to market to sell a donkey. The farmer rode on the animal's back while the daughter plodded along at his side. After they had gone about a mile, they happened to **encounter** a woman drawing water from a well. She was very **indignant** at the sight of the farmer riding in ease while his daughter had to walk. She told the farmer that he should be ashamed of himself. So, to please her, the father and daughter changed places. When the young woman was sitting comfortably on the donkey, they **resumed** their journey.

Just as they reached the **outskirts** of the town, they met a young man. He asked the farmer why he was walking when there was **ample** room for both of them on the donkey. To please the young man, the farmer climbed onto the donkey behind his daughter and they continued on their way.

A little later they passed by two women standing by the side of the road. When they saw the donkey carrying two grown people, the women were filled with **compassion** for the animal. "Have you any idea of the **distress** you are causing that poor donkey?" the older woman called out to the farmer. "The poor creature is half dead from having to carry such a **burden**." The younger woman loudly remarked that the farmer and his daughter should be carrying the donkey instead of the donkey carrying them. She spoke in **jest**. The farmer, however, took her seriously and at once set about to **comply** with her suggestion.

First, he tied the donkey's legs to a pole. This took some time, as the donkey had no desire to have its legs tied, but at last the task was accomplished. Such a **cumbersome** load was difficult for the farmer and his daughter to lift. But finally, they managed to hoist the pole onto their shoulders. With the donkey slung upside down between them and struggling to escape, they staggered down the road.

At last, panting from their **exertions**, they reached the market. Their arrival was greeted with considerable **mirth**, so that when the farmer tried to sell the donkey, his attempts were **ridiculed**. For, of course, no one was willing to buy a donkey that had to be carried.

Can you guess the **moral** of this fable? The Hidden Message puzzle in the review section at the end of this lesson will spell it out for you.`,
    wordsIncluded: [
        "encounter", "indignant", "resumed", "outskirts", "ample", "compassion",
        "distress", "burden", "jest", "comply", "cumbersome", "exertions",
        "mirth", "ridiculed", "moral"
    ]
};

export const b5_l20_story_1: Story = {
    id: "b5-l20-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, select 'Correct'. If the word is used incorrectly, select 'Incorrect'.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. (a) Being poor was never really a **burden** for my family. (b) The **burden** was heavy, but no one complained. (c) Candace doesn't like to **burden** her friends with all her troubles. (d) A bowl of **burden** is very refreshing on a hot day.",
            options: ["d is Incorrect", "a and c are Incorrect", "All are Correct"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. (a) The students show their **compassion** by volunteering at the animal shelter. (b) Alejandro is studying acting and feels **compassionately** about the theater. (c) The **compassion** of a light bulb causes it to heat up. (d) A **compassionate** note of kindness was given to the victims.",
            options: ["b and c are Incorrect", "a and d are Incorrect", "All are Correct"],
            correctAnswer: "b and c are Incorrect"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. (a) The large chair was too **cumbersome** for us to carry easily. (b) She smiled and gave me a **cumbersome** look as she skipped out the door. (c) Checking out all these books from the library will be **cumbersome**, but I need them. (d) Sunshine shone in **cumbersome** beams on the neighborhood.",
            options: ["b and d are Incorrect", "a and c are Incorrect", "All are Correct"],
            correctAnswer: "b and d are Incorrect"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. (a) We **encountered** a few bumps on our trip. (b) The **encounter** ended when the dog ran away and the cat purred. (c) I **encountered** an old friend when I returned to my hometown. (d) I **encountered** how many eggs we have, but I forget the number.",
            options: ["d is Incorrect", "a and b are Incorrect", "All are Correct"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. (a) The coach **exerted** that he was sure they would win the game. (b) You must **exert** pressure on the handle to release the brake. (c) The **exertion** of running all the way home made me so tired. (d) **Exert** the book back to me when you're done reading it.",
            options: ["a and d are Incorrect", "b and c are Incorrect", "All are Correct"],
            correctAnswer: "a and d are Incorrect"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. (a) The **jest** was funny enough to make some of us laugh. (b) I was speaking in **jest** when I said I was quitting the team. (c) Don't **jest** about something as serious as your safety! (d) Keep the good ones and throw the **jest** away.",
            options: ["d is Incorrect", "a and b are Incorrect", "All are Correct"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. (a) **Mirth** was piled up in the driveway. (b) My brother tried to hide his **mirth** when I saw what he did to my room. (c) The **mirth** in the car grew louder as more of us got the joke. (d) He tried to tell us that the **mirth** wasn't ready yet.",
            options: ["a and d are Incorrect", "b and c are Incorrect", "All are Correct"],
            correctAnswer: "a and d are Incorrect"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. (a) The **moral** of the story is \"Always tell the truth.\" (b) The **moral** thing to do is to return the money you found. (c) The **moral** we caught was at least three feet long. (d) The **moral** ended happily with the friends reunited.",
            options: ["c and d are Incorrect", "a and b are Incorrect", "All are Correct"],
            correctAnswer: "c and d are Incorrect"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. (a) I **resumed** that you would be coming with us. (b) The campers **resumed** all the food that we brought with us. (c) The play **resumed** after the actor stopped coughing. (d) Mrs. Muhammad **resumed** teaching after she had her baby.",
            options: ["a and b are Incorrect", "c and d are Incorrect", "All are Correct"],
            correctAnswer: "a and b are Incorrect"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. (a) The suggestion was met with **ridicule** by the class. (b) It's **ridiculous** to suggest that I could climb Mount Everest. (c) We got rid of the **ridicule** but managed to save the good stuff. (d) The **ridicule** was harvested in the spring by the farmers.",
            options: ["c and d are Incorrect", "a and b are Incorrect", "All are Correct"],
            correctAnswer: "c and d are Incorrect"
        }
    ],
    wordsIncluded: ["burden", "compassion", "cumbersome", "encounter", "exert", "jest", "mirth", "moral", "resume", "ridicule"]
};

export const b5_l20_story_2: Story = {
    id: "b5-l20-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Circle the letter next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *feeling bad*?\n(a) humiliated\n(b) distress\n(c) precious\n(d) forlorn",
            options: ["a, b, and d", "b only", "a and b"],
            correctAnswer: "a, b, and d"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *feeling angry*?\n(a) compassion\n(b) indignation\n(c) ridicule\n(d) outrage",
            options: ["b and d", "b only", "c and d"],
            correctAnswer: "b and d"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *not in the city*?\n(a) outskirts\n(b) urban\n(c) moral\n(d) jubilee",
            options: ["a only", "a and b", "c and d"],
            correctAnswer: "a only"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *make fun of*?\n(a) negotiate\n(b) mimic\n(c) mock\n(d) ridicule",
            options: ["b, c, and d", "c and d", "d only"],
            correctAnswer: "b, c, and d"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *sympathy*?\n(a) ample\n(b) artificial\n(c) somber\n(d) compassionate",
            options: ["d only", "c and d", "b and d"],
            correctAnswer: "d only"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *begin again*?\n(a) resume\n(b) comply\n(c) encounter\n(d) decline",
            options: ["a only", "b and c", "a and d"],
            correctAnswer: "a only"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *clumsy*?\n(a) indignant\n(b) unwieldy\n(c) cumbersome\n(d) hilarious",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *joke*?\n(a) vow\n(b) jest\n(c) prank\n(d) likeness",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *agree to do something*?\n(a) decline\n(b) resume\n(c) encounter\n(d) comply",
            options: ["d only", "a and b", "c and d"],
            correctAnswer: "d only"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *enough*?\n(a) sufficient\n(b) indignant\n(c) compassionate\n(d) ample",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        }
    ],
    wordsIncluded: ["distress", "indignation", "outskirts", "ridicule", "compassion", "resume", "cumbersome", "jest", "comply", "ample"]
};

export const b5_l20_story_3: Story = {
    id: "b5-l20-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. The **burdensome**\n(a) salad was eaten as soon as it was ready.\n(b) table was too heavy for one person.\n(c) road is always clear and easy for my mom to drive on.\n(d) lie was all I could think about.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. I was **distressed**\n(a) to read that everything was going to be OK.\n(b) into my seat on the giant roller coaster.\n(c) by reports that the park might close for good.\n(d) to hear about your injured dog.",
            options: ["c and d", "a and b", "c only"],
            correctAnswer: "c and d"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. The **jesting**\n(a) began, but I knew they weren't serious.\n(b) made Usma laugh harder and harder.\n(c) kept getting bigger and bigger until it exploded.\n(d) on the lake swirled in the early morning light.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. The **outskirts**\n(a) kept billowing in the wind until we tied them down.\n(b) of the town seemed the right place to have a bike race.\n(c) of the thunder crashed three times in a row.\n(d) had only a few houses but mostly trees.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. The **ridiculousness**\n(a) of the movie was obvious.\n(b) should be eaten in small amounts.\n(c) in the tissues are at the bottom of the stairs.\n(d) was almost too funny to ignore.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. She was **mirthless**\n(a) because she hadn't had much sleep.\n(b) as she hopped up and down with excitement.\n(c) about the difficult test that was coming up.\n(d) but said she would try to get in a good mood.",
            options: ["a, c, and d", "b only", "c and d"],
            correctAnswer: "a, c, and d"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. Paulo **encountered**\n(a) the ants on the bed and yelled.\n(b) all of us in his family's kitchen for the surprise party.\n(c) how many chairs he would need.\n(d) off the diving board into the pool.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. The **exertion**\n(a) on the sign told us not to go any farther.\n(b) during the first day of practice made us more tired than we expected.\n(c) was through the door at the end of the hall.\n(d) of playing two soccer games in a row will be intense.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        }
    ],
    wordsIncluded: ["burden", "distress", "jest", "outskirts", "ridicule", "mirth", "encounter", "exert"]
};

export const b5_l20_story_4: Story = {
    id: "b5-l20-story-4",
    title: "Completing Sentences",
    type: "exercise",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    questions: [
        {
            id: "cs-q1",
            type: "open-ended",
            question: "1. If you **ridicule** something, that means you...",
            sampleAnswer: "make fun of it in a mean way."
        },
        {
            id: "cs-q2",
            type: "open-ended",
            question: "2. I would feel **indignant** if...",
            sampleAnswer: "someone blamed me for something I didn't do."
        },
        {
            id: "cs-q3",
            type: "open-ended",
            question: "3. An example of something a **moral** person would do is...",
            sampleAnswer: "return a lost wallet to its owner."
        },
        {
            id: "cs-q4",
            type: "open-ended",
            question: "4. I **exerted** myself today when I...",
            sampleAnswer: "ran a mile in gym class without stopping."
        },
        {
            id: "cs-q5",
            type: "open-ended",
            question: "5. When you **comply** with a rule, that means you...",
            sampleAnswer: "follow it and do what you are told."
        },
        {
            id: "cs-q6",
            type: "open-ended",
            question: "6. Someone from history that I wish I could have an **encounter** with is...",
            sampleAnswer: "Abraham Lincoln, so I could ask him about the Civil War."
        },
        {
            id: "cs-q7",
            type: "open-ended",
            question: "7. Something that would **distress** me about school is...",
            sampleAnswer: "failing a test I studied hard for."
        },
        {
            id: "cs-q8",
            type: "open-ended",
            question: "8. One way to show you feel **compassion** for someone is to...",
            sampleAnswer: "listen to them when they are sad and offer to help."
        },
        {
            id: "cs-q9",
            type: "open-ended",
            question: "9. Something that would be a **burden** to carry is...",
            sampleAnswer: "a backpack filled with rocks."
        },
        {
            id: "cs-q10",
            type: "open-ended",
            question: "10. If you look full of **mirth**, that means...",
            sampleAnswer: "you look happy and ready to laugh."
        }
    ],
    wordsIncluded: ["ridicule", "indignant", "moral", "exert", "comply", "encounter", "distress", "compassion", "burden", "mirth"]
};

export const b5_l20_story_5_facts: Story = {
    id: "b5-l20-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   The Greek word *pathos*, which means "suffering," has passed unchanged into English via Latin. It means "something that moves a person to feel pity." By combining the Latin root with the prefix *con* (also written *com-* or *col-*), which means "with" or "together," we form the word **compassion**. Several other words are formed from this root. *Sympathy* has the same meaning as **compassion**, although the latter term suggests a greater depth of feeling. *Pathetic* means "arousing feelings of pity." (The *pathetic* cries of the injured animal moved us to tears.)

*   The language spoken in France from the ninth to the early sixteenth century is called Old French. The Old French verb *encombrer* meant "to put obstacles in the way of." **Cumbersome** and several other English words have been formed from this Old French verb. To *encumber* someone is to put a heavy load on that person. (Hikers who are *encumbered* with heavy backpacks are glad of a chance to rest.) An *encumbrance* is anything that is awkward, difficult, or heavy. (Heavy boots are an *encumbrance* when running to catch a school bus.)

*   **Resume** is a noun meaning "a brief outline or summary, especially of a person's education and work experience." It is sometimes written with a stroke, or accent, over each *e*: *résumé*. This is done because it is the French spelling, and *resume* is a French word brought into English. With this meaning, the word is pronounced the French way, REZ-oo-may.`,
    wordsIncluded: [
        "compassion", "cumbersome", "resume"
    ]
};
