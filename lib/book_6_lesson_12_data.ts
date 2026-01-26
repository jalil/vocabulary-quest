import { Story, VocabularyWord } from "./types";

export const b6_l12_words: VocabularyWord[] = [
    {
        id: "abandon",
        word: "abandon",
        definition: "(v.) 1. To give up by leaving in a time of danger. 2. To lose or give up completely. 3. To withdraw help or support from one in need.",
        exampleSentence: "The captain gave the order to abandon the ship when it began to sink.",
        imageEmoji: "🏃",
        category: "Grade 6"
    },
    {
        id: "adversary",
        word: "adversary",
        definition: "(n.) An enemy or opponent.",
        exampleSentence: "France and Germany were adversaries in two world wars but now enjoy friendly relations.",
        imageEmoji: "🤺",
        category: "Grade 6"
    },
    {
        id: "baffle",
        word: "baffle",
        definition: "(v.) To confuse; to prevent from understanding.",
        exampleSentence: "Alice was baffled by their inappropriate behavior and didn't know how to respond.",
        imageEmoji: "😕",
        category: "Grade 6"
    },
    {
        id: "blunder",
        word: "blunder",
        definition: "(n.) A stupid or careless mistake. (v.) 1. To make such a mistake. 2. To move in a clumsy or careless way.",
        exampleSentence: "The mayor's rude comment was a major blunder that cost him the election.",
        imageEmoji: "🤦",
        category: "Grade 6"
    },
    {
        id: "colossal",
        word: "colossal",
        definition: "(adj.) Very big; enormous.",
        exampleSentence: "The colossal size of the Great Wall is what impressed the tourists most.",
        imageEmoji: "🐘",
        category: "Grade 6"
    },
    {
        id: "detect",
        word: "detect",
        definition: "(v.) To discover something not easily noticed.",
        exampleSentence: "The witness did not detect anything unusual that day.",
        imageEmoji: "🕵️",
        category: "Grade 6"
    },
    {
        id: "haul",
        word: "haul",
        definition: "(v.) To pull or carry with effort. (n.) 1. The amount caught or taken at one time. 2. The distance traveled or to be traveled.",
        exampleSentence: "We haul the boat out of the water every winter.",
        imageEmoji: "🚛",
        category: "Grade 6"
    },
    {
        id: "overpower",
        word: "overpower",
        definition: "(v.) To get the better of; to defeat.",
        exampleSentence: "The spider overpowered the insect caught in its web.",
        imageEmoji: "💪",
        category: "Grade 6"
    },
    {
        id: "rejoice",
        word: "rejoice",
        definition: "(v.) To be very happy.",
        exampleSentence: "Family members rejoiced when they heard that members of the Mount Everest expedition had returned safely.",
        imageEmoji: "🎉",
        category: "Grade 6"
    },
    {
        id: "scoff",
        word: "scoff",
        definition: "(v.) To mock; to ridicule.",
        exampleSentence: "People once scoffed at the idea of space travel.",
        imageEmoji: "😒",
        category: "Grade 6"
    },
    {
        id: "sentinel",
        word: "sentinel",
        definition: "(n.) One who keeps watch or guards a point of entry.",
        exampleSentence: "Sentinels were posted to warn of the enemy's approach.",
        imageEmoji: "💂",
        category: "Grade 6"
    },
    {
        id: "siege",
        word: "siege",
        definition: "(n.) The surrounding of a place in order to force it to surrender.",
        exampleSentence: "The siege of Leningrad by the German army lasted from 1941 to 1944.",
        imageEmoji: "🏰",
        category: "Grade 6"
    },
    {
        id: "sinister",
        word: "sinister",
        definition: "(adj.) Suggesting or leading to evil or harm.",
        exampleSentence: "The villain's sinister words, \"I'll be back!\" sent shivers down our spines.",
        imageEmoji: "😈",
        category: "Grade 6"
    },
    {
        id: "victor",
        word: "victor",
        definition: "(n.) The winner in a contest or struggle. victorious (adj.) Successful in a contest or battle.",
        exampleSentence: "The victors of the semifinal competition will meet in the finals tomorrow.",
        imageEmoji: "🥇",
        category: "Grade 6"
    },
    {
        id: "woe",
        word: "woe",
        definition: "(n.) 1. Deep distress or misery. 2. Trouble; misfortune. woeful (adj.) 1. Full of woe; unhappy. 2. Very bad; wretched.",
        exampleSentence: "The students' woe was evident as they were led off to the principal's office.",
        imageEmoji: "😩",
        category: "Grade 6"
    }
];

export const b6_l12_story_1: Story = {
    id: "b6-l12-s1",
    title: "12A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l12_words.map(w => w.id),
    questions: [
        {
            id: "12a-q1",
            type: "multiple-choice",
            question: "1. (a) The climber **blundered** in the fog and almost fell.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q2",
            type: "multiple-choice",
            question: "1. (b) When the player dropped the ball, it was a **blunder** that cost them the game.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q3",
            type: "multiple-choice",
            question: "1. (c) Forgetting how to solve the math problem on the test was a major **blunder**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q4",
            type: "multiple-choice",
            question: "1. (d) The pirates buried their **blunder** in a secret location.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // plunder.
        },
        {
            id: "12a-q5",
            type: "multiple-choice",
            question: "2. (a) We **hauled** the tiles onto the roof and started working.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q6",
            type: "multiple-choice",
            question: "2. (b) The **haul** of the ship was made of plywood.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // hull.
        },
        {
            id: "12a-q7",
            type: "multiple-choice",
            question: "2. (c) The gold miners took their monthly **haul** into town and sold it for cash.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q8",
            type: "multiple-choice",
            question: "2. (d) The seven inches of rain yesterday was the largest **haul** of the year.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "12a-q9",
            type: "multiple-choice",
            question: "3. (a) The **woeful** look on his face made me think something was wrong.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q10",
            type: "multiple-choice",
            question: "3. (b) She sat down and told me all about her **woes**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q11",
            type: "multiple-choice",
            question: "3. (c) Texting while driving shows a **woeful** lack of concern for other drivers.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q12",
            type: "multiple-choice",
            question: "3. (d) \"I won't **woe** you with my problems,\" my grandma said when I asked how she was.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // bore/burden?
        },
        {
            id: "12a-q13",
            type: "multiple-choice",
            question: "4. (a) The sprinter **abandoned** his time for the one-hundred-meter race to ten seconds.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // lowered?
        },
        {
            id: "12a-q14",
            type: "multiple-choice",
            question: "4. (b) Buildings that were **abandoned** in the past are now being restored.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q15",
            type: "multiple-choice",
            question: "4. (c) He **abandoned** his cozy home and went out into the snow.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q16",
            type: "multiple-choice",
            question: "4. (d) When people **abandon** their pets, they often end up in shelters.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q17",
            type: "multiple-choice",
            question: "5. (a) Lupe was **scoffed** that her name had been left off the list.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // shocked?
        },
        {
            id: "12a-q18",
            type: "multiple-choice",
            question: "5. (b) My friends **scoffed** at me when I said I could climb the wall.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q19",
            type: "multiple-choice",
            question: "5. (c) Xavier **scoffed** his opponent into thinking he was about to quit.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // bluffed?
        },
        {
            id: "12a-q20",
            type: "multiple-choice",
            question: "5. (d) Queen Isabella of Spain did not **scoff** at Columbus's plan to find the New World.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q21",
            type: "multiple-choice",
            question: "6. (a) When we reached the gate, we were **baffled** as to what to do next.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q22",
            type: "multiple-choice",
            question: "6. (b) The ship **baffled** its way through stormy seas and ten-foot waves.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // battled.
        },
        {
            id: "12a-q23",
            type: "multiple-choice",
            question: "6. (c) The secret code **baffled** the experts who tried to break it.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q24",
            type: "multiple-choice",
            question: "6. (d) The **baffle** broke out when someone started laughing.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // scuffle?
        },
        {
            id: "12a-q25",
            type: "multiple-choice",
            question: "7. (a) The students **rejoiced** when it was time for recess.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q26",
            type: "multiple-choice",
            question: "7. (b) The broken fan was easily **rejoiced**.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // replaced.
        },
        {
            id: "12a-q27",
            type: "multiple-choice",
            question: "7. (c) She **rejoiced** when she found out her grade on the project.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q28",
            type: "multiple-choice",
            question: "7. (d) We **rejoice** our muscles with regular exercise.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "12a-q29",
            type: "multiple-choice",
            question: "8. (a) The **sentinels** guarding the palace wore fancy uniforms.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q30",
            type: "multiple-choice",
            question: "8. (b) Geese were used as **sentinels** by the Romans to warn of an attack.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q31",
            type: "multiple-choice",
            question: "8. (c) The plants are grown in long **sentinels** three feet apart.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // rows?
        },
        {
            id: "12a-q32",
            type: "multiple-choice",
            question: "8. (d) The **sentinels** in the pasta tasted like tomatoes.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "12a-q33",
            type: "multiple-choice",
            question: "9. (a) The teacher **detected** the student for lying.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // detention? caught?
        },
        {
            id: "12a-q34",
            type: "multiple-choice",
            question: "9. (b) Doctors are learning to **detect** diseases before you get sick.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q35",
            type: "multiple-choice",
            question: "9. (c) My mom left England fifteen years ago, but I can still **detect** a British accent.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q36",
            type: "multiple-choice",
            question: "9. (d) The mother duck **detected** her ducklings from the storm.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // protected.
        },
        {
            id: "12a-q37",
            type: "multiple-choice",
            question: "10. (a) We decided to have a **siege** at my house on the last day of school.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // party.
        },
        {
            id: "12a-q38",
            type: "multiple-choice",
            question: "10. (b) The **siege** was made of iron that was heated and then beaten into shape.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // sword?
        },
        {
            id: "12a-q39",
            type: "multiple-choice",
            question: "10. (c) The **siege** of Troy ended when the Greeks forced their way into the city.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "12a-q40",
            type: "multiple-choice",
            question: "10. (d) The **siege** of Leningrad by the German army lasted for 872 days.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        }
    ]
};

export const b6_l12_story_2: Story = {
    id: "b6-l12-s2",
    title: "12B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l12_words.map(w => w.id),
    questions: [
        {
            id: "12b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *happiness*?",
            options: ["(a) abandon", "(b) baffle", "(c) rejoice", "(d) jubilation"],
            correctAnswers: ["(c) rejoice", "(d) jubilation"] // Jubilation is correct meaning.
        },
        {
            id: "12b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *make fun of*?",
            options: ["(a) ridicule", "(b) scoff", "(c) jeer", "(d) woe"],
            correctAnswers: ["(a) ridicule", "(b) scoff", "(c) jeer"]
        },
        {
            id: "12b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *sad*?",
            options: ["(a) forlorn", "(b) melancholy", "(c) sinister", "(d) woeful"],
            correctAnswers: ["(a) forlorn", "(b) melancholy", "(d) woeful"]
        },
        {
            id: "12b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *enemy*?",
            options: ["(a) woe", "(b) adversary", "(c) error", "(d) opponent"],
            correctAnswers: ["(b) adversary", "(d) opponent"]
        },
        {
            id: "12b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *large*?",
            options: ["(a) gigantic", "(b) colossal", "(c) mammoth", "(d) sinister"],
            correctAnswers: ["(a) gigantic", "(b) colossal", "(c) mammoth"]
        },
        {
            id: "12b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *winning*?",
            options: ["(a) sinister", "(b) triumphant", "(c) victorious", "(d) woeful"],
            correctAnswers: ["(b) triumphant", "(c) victorious"]
        },
        {
            id: "12b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *mistake*?",
            options: ["(a) haul", "(b) blunder", "(c) error", "(d) bungle"],
            correctAnswers: ["(b) blunder", "(c) error", "(d) bungle"]
        },
        {
            id: "12b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *scary*?",
            options: ["(a) complicated", "(b) monstrous", "(c) colossal", "(d) sinister"],
            correctAnswers: ["(b) monstrous", "(d) sinister"] // monstrous can mean scary, or large.
        },
        {
            id: "12b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *war*?",
            options: ["(a) baffle", "(b) siege", "(c) skirmish", "(d) campaign"],
            correctAnswers: ["(b) siege", "(c) skirmish", "(d) campaign"] // Campaign in war context.
        },
        {
            id: "12b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *defeat*?",
            options: ["(a) overpower", "(b) overdue", "(c) overthrow", "(d) scoff"],
            correctAnswers: ["(a) overpower", "(c) overthrow"]
        }
    ]
};

export const b6_l12_story_3: Story = {
    id: "b6-l12-s3",
    title: "12C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l12_words.map(w => w.id),
    questions: [
        {
            id: "12c-q1",
            type: "multiple-choice",
            question: "1. The **victorious**",
            options: ["(a) chess player proudly accepted her trophy.", "(b) grows mostly in the cracks of sidewalks.", "(c) rumors were spread by an enemy.", "(d) athletes paraded down Main Street after the championship."],
            correctAnswers: ["(a) chess player proudly accepted her trophy.", "(d) athletes paraded down Main Street after the championship."]
        },
        {
            id: "12c-q2",
            type: "multiple-choice",
            question: "2. We are **hauling**",
            options: ["(a) loudly to make sure people hear us.", "(b) the suitcases up three flights of stairs tomorrow.", "(c) the song in front of the whole class.", "(d) the nets from the ocean when they fill up with fish."],
            correctAnswers: ["(b) the suitcases up three flights of stairs tomorrow.", "(d) the nets from the ocean when they fill up with fish."]
        },
        {
            id: "12c-q3",
            type: "multiple-choice",
            question: "3. The **sentinels**",
            options: ["(a) let us through after we gave the password.", "(b) fell asleep while on duty.", "(c) went on for two days until the sun finally came out.", "(d) build nests twenty feet from the ground."],
            correctAnswers: ["(a) let us through after we gave the password.", "(b) fell asleep while on duty."]
        },
        {
            id: "12c-q4",
            type: "multiple-choice",
            question: "4. I **detected**",
            options: ["(a) the smell of something burning.", "(b) that something was wrong with the computer.", "(c) myself against harm while we camped.", "(d) something moving in the bushes."],
            correctAnswers: ["(a) the smell of something burning.", "(b) that something was wrong with the computer.", "(d) something moving in the bushes."]
        },
        {
            id: "12c-q5",
            type: "multiple-choice",
            question: "5. There was an **adversarial**",
            options: ["(a) look in his eye as he stepped onto the soccer field.", "(b) relationship between me and my cousin.", "(c) feeling in the air when we started to play.", "(d) stone on the ground that almost looked like a diamond."],
            correctAnswers: ["(a) look in his eye as he stepped onto the soccer field.", "(b) relationship between me and my cousin.", "(c) feeling in the air when we started to play."]
        },
        {
            id: "12c-q6",
            type: "multiple-choice",
            question: "6. A **colossally**",
            options: ["(a) gray mouse ran through the hole in the door.", "(b) mammoth statue of four presidents is carved into Mount Rushmore.", "(c) enormous wave soaked the sunbathers.", "(d) dumb mistake made me fail the test."],
            correctAnswers: ["(b) mammoth statue of four presidents is carved into Mount Rushmore.", "(c) enormous wave soaked the sunbathers.", "(d) dumb mistake made me fail the test."]
        },
        {
            id: "12c-q7",
            type: "multiple-choice",
            question: "7. We were **baffled**",
            options: ["(a) across the hall and into a small classroom with no windows.", "(b) when we were told it would snow on the first day of summer.", "(c) by strong winds as we walked home from the park.", "(d) by the riddle and had to look up the answer."],
            correctAnswers: ["(b) when we were told it would snow on the first day of summer.", "(d) by the riddle and had to look up the answer."]
        },
        {
            id: "12c-q8",
            type: "multiple-choice",
            question: "8. I **abandoned**",
            options: ["(a) my bike when I got a flat tire and had to walk home.", "(b) any thoughts of winning when our star player twisted her ankle.", "(c) myself in the basement when the tornado struck.", "(d) my way to Mexico with my family."],
            correctAnswers: ["(a) my bike when I got a flat tire and had to walk home.", "(b) any thoughts of winning when our star player twisted her ankle."]
        }
    ]
};

export const b6_l12_story_4: Story = {
    id: "b6-l12-s4",
    title: "12D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l12_words.map(w => w.id),
    questions: [
        {
            id: "12d-q1",
            type: "open-ended",
            question: "1. I would **rejoice** if",
            sampleAnswer: "I got an A on my math test."
        },
        {
            id: "12d-q2",
            type: "open-ended",
            question: "2. I **scoff** at the idea that",
            sampleAnswer: "ghosts are real."
        },
        {
            id: "12d-q3",
            type: "open-ended",
            question: "3. A **woeful** situation makes you feel",
            sampleAnswer: "sad or miserable."
        },
        {
            id: "12d-q4",
            type: "open-ended",
            question: "4. I might have a **sinister** look if",
            sampleAnswer: "I was planning a prank."
        },
        {
            id: "12d-q5",
            type: "open-ended",
            question: "5. Something you might **abandon** is",
            sampleAnswer: "an old toy."
        },
        {
            id: "12d-q6",
            type: "open-ended",
            question: "6. To **overpower** your pessimistic thoughts, you could",
            sampleAnswer: "focus on positive things."
        },
        {
            id: "12d-q7",
            type: "open-ended",
            question: "7. It's good manners for a **victor** to",
            sampleAnswer: "congratulate the loser."
        },
        {
            id: "12d-q8",
            type: "open-ended",
            question: "8. I admit I'm sometimes **baffled** by",
            sampleAnswer: "complex math problems."
        },
        {
            id: "12d-q9",
            type: "open-ended",
            question: "9. An example of a **colossal** animal is",
            sampleAnswer: "a blue whale."
        },
        {
            id: "12d-q10",
            type: "open-ended",
            question: "10. It's hard to **detect** something if",
            sampleAnswer: "it is hidden or camouflaged."
        }
    ]
};

export const b6_l12_story_passage: Story = {
    id: "b6-l12-passage",
    title: "Reading Passage: The Trojan Horse",
    type: "non-fiction",
    content: `
Many captivating tales have come down to us from ancient Greece. They tell of great heroes, of goddesses and gods, and of stirring adventures. One of the best-known stories concerns the Trojan Horse. It began when Helen, wife of the Greek king Menelaus, was kidnapped and taken to the city of Troy.

The Greeks assembled a mighty fleet and sailed across the Aegean Sea in pursuit. After landing their army near Troy, they began laying **siege** to the city, the home of the Trojans. Although many battles were fought outside the city's thick, high walls, the Trojans kept their **adversaries** at bay, so the Greeks were unable to force their way inside.

The war dragged on for ten long years. Then one day the Trojan **sentinels** saw the Greeks sail away! Further investigation revealed that the Greeks had **abandoned** their camp. The delighted Trojans at once declared the war over and themselves **victorious**. One thing **baffled** them, though. The Greeks had left behind an enormous wooden horse. What was it for? The Trojans finally decided that their enemies had left it as a gift to the gods.

Cassandra, a member of the Trojan royal family, warned the citizens of Troy that the wooden horse was a trick intended to bring about the destruction of their city. The Trojans, however, **scoffed** at her warning. They saw nothing **sinister** in the "gift" left by the Greeks, and they joyfully **hauled** the wooden horse through the gates and into the city. It could not have been otherwise. Some years before, Apollo, one of the gods of Mount Olympus, had fallen in love with Cassandra and had given her the ability to predict the future. But when she failed to return his love, Apollo spitefully declared that when she made a prediction, no one would believe her.

The people of Troy **rejoiced** far into the night. They were too busy enjoying themselves to pay close attention to the **colossal** wooden horse in their midst. They failed to examine it closely enough to **detect** the heavily armed Greek soldiers huddled inside, waiting for the right moment. At last the celebrations came to an end as the Trojans grew sleepy and one by one began to slumber. A stillness fell over the city. All seemed tranquil within Troy's walls.

Then a concealed hatch in the wooden horse opened, and the Greek soldiers emerged, dropping silently to the ground. They quickly **overpowered** the Trojan guards and opened the city gates to admit the rest of the Greek soldiers, who had only pretended to sail away and were now hiding outside. The Trojans paid a terrible price for their **blunder**. Their city was destroyed, and many of its people perished; the rest of the **woeful** inhabitants, including Cassandra, were taken into captivity. As for Helen, according to the most popular version of the story, she returned to Greece with Menelaus, and they lived happily ever after.
    `,
    wordsIncluded: b6_l12_words.map(w => w.id),
    questions: [
        {
            id: "b6-l12-p-q1",
            type: "multiple-choice",
            question: "How did the Trojan War begin?",
            options: [
                "Helen, wife of the Greek king Menelaus, was kidnapped and taken to Troy.",
                "The Trojans attacked a Greek city.",
                "The Greeks wanted to conquer the Trojan gold mines.",
                "A disagreement over a trade route."
            ],
            correctAnswer: "Helen, wife of the Greek king Menelaus, was kidnapped and taken to Troy."
        },
        {
            id: "b6-l12-p-q2",
            type: "multiple-choice",
            question: "What did the Greeks do after landing near Troy?",
            options: [
                "They began laying **siege** to the city.",
                "They immediately climbed the walls.",
                "They challenged the Trojans to a single combat.",
                "They built a new city next to Troy."
            ],
            correctAnswer: "They began laying **siege** to the city."
        },
        {
            id: "b6-l12-p-q3",
            type: "multiple-choice",
            question: "Why were the Greeks unable to force their way inside the city for ten years?",
            options: [
                "The Trojans kept their **adversaries** at bay outside the thick walls.",
                "The Greeks ran out of weapons.",
                "The Trojan army was much larger than the Greek army.",
                "The gods protected the city with a magical shield."
            ],
            correctAnswer: "The Trojans kept their **adversaries** at bay outside the thick walls."
        },
        {
            id: "b6-l12-p-q4",
            type: "multiple-choice",
            question: "What did the Trojan **sentinels** see one day?",
            options: [
                "The Greeks sailing away.",
                "A new army arriving to help.",
                "The gods descending from Mount Olympus.",
                "A dragon attacking the Greek ships."
            ],
            correctAnswer: "The Greeks sailing away."
        },
        {
            id: "b6-l12-p-q5",
            type: "multiple-choice",
            question: "What did investigation reveal about the Greek camp?",
            options: [
                "The Greeks had **abandoned** their camp.",
                "The camp was full of sick soldiers.",
                "The Greeks were hiding in tunnels underground.",
                "The camp had been burned down."
            ],
            correctAnswer: "The Greeks had **abandoned** their camp."
        },
        {
            id: "b6-l12-p-q6",
            type: "multiple-choice",
            question: "What did the Trojans declare themselves after the Greeks left?",
            options: [
                "**Victorious**.",
                "Defeated.",
                "Anxious.",
                "Neutral."
            ],
            correctAnswer: "**Victorious**."
        },
        {
            id: "b6-l12-p-q7",
            type: "multiple-choice",
            question: "What **baffled** the Trojans about the abandoned camp?",
            options: [
                "The enormous wooden horse left behind.",
                "The lack of any footprints.",
                "The piles of treasure left behind.",
                "The message written in the sand."
            ],
            correctAnswer: "The enormous wooden horse left behind."
        },
        {
            id: "b6-l12-p-q8",
            type: "multiple-choice",
            question: "What warning did Cassandra give the citizens of Troy?",
            options: [
                "That the wooden horse was a trick to destroy their city.",
                "That the Greeks would return in a week.",
                "That the gods were angry with them.",
                "That they should burn the horse immediately."
            ],
            correctAnswer: "That the wooden horse was a trick to destroy their city."
        },
        {
            id: "b6-l12-p-q9",
            type: "multiple-choice",
            question: "How did the Trojans react to Cassandra's warning?",
            options: [
                "They **scoffed** at her.",
                "They listened carefully and burned the horse.",
                "They put her in prison.",
                "They asked Apollo for advice."
            ],
            correctAnswer: "They **scoffed** at her."
        },
        {
            id: "b6-l12-p-q10",
            type: "multiple-choice",
            question: "How did the Trojans view the wooden horse?",
            options: [
                "They saw nothing **sinister** in it and thought it was a gift.",
                "They thought it was a weapon of war.",
                "They thought it was an idol to a foreign god.",
                "They thought it was filled with gold."
            ],
            correctAnswer: "They saw nothing **sinister** in it and thought it was a gift."
        },
        {
            id: "b6-l12-p-q11",
            type: "multiple-choice",
            question: "What did the Trojans do with the horse?",
            options: [
                "They **hauled** it through the gates and into the city.",
                "They left it on the beach.",
                "They pushed it into the sea.",
                "They burned it as an offering."
            ],
            correctAnswer: "They **hauled** it through the gates and into the city."
        },
        {
            id: "b6-l12-p-q12",
            type: "multiple-choice",
            question: "What did the people of Troy do that night?",
            options: [
                "They **rejoiced** far into the night.",
                "They slept with their armor on.",
                "They doubled the guards on the walls.",
                "They prayed for forgiveness."
            ],
            correctAnswer: "They **rejoiced** far into the night."
        },
        {
            id: "b6-l12-p-q13",
            type: "multiple-choice",
            question: "Why did the Trojans fail to notice the soldiers inside the horse?",
            options: [
                "They failed to examine the **colossal** horse closely enough to **detect** them.",
                "The soldiers were invisible.",
                "The horse was covered in a thick blanket.",
                "The Trojans were all blindfolded."
            ],
            correctAnswer: "They failed to examine the **colossal** horse closely enough to **detect** them."
        },
        {
            id: "b6-l12-p-q14",
            type: "multiple-choice",
            question: "What happened when the Greek soldiers emerged from the horse?",
            options: [
                "They **overpowered** the guards and opened the city gates.",
                "They were immediately captured by the Trojans.",
                "They ran away back to their ships.",
                "They set fire to the horse."
            ],
            correctAnswer: "They **overpowered** the guards and opened the city gates."
        },
        {
            id: "b6-l12-p-q15",
            type: "multiple-choice",
            question: "What was the result of the Trojans' **blunder**?",
            options: [
                "Their city was destroyed and the **woeful** inhabitants were taken captive.",
                "They managed to drive the Greeks back into the sea.",
                "They made peace with the Greeks.",
                "They escaped through a secret tunnel."
            ],
            correctAnswer: "Their city was destroyed and the **woeful** inhabitants were taken captive."
        }
    ]
};

export const b6_l12_story_facts: Story = {
    id: "b6-l12-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* One of the Seven Wonders of the ancient world was a huge statue of the sun god Helios, erected at the entrance of the harbor at Rhodes, one of the Greek islands. The statue was called the Colossus of Rhodes and stood there for about sixty years until it was destroyed by an earthquake in 224 BCE.

The word *colossus* came to be applied to anything that is very large. That is why the United States is sometimes called "the *Colossus* of the North" by people of South and Central America. **Colossal** is the adjective form of this word.

* The ancient Romans regarded the left side as unlucky. Soothsayers, people who were believed to have the power to foretell the future, looked upon signs that appeared on the left as evidence of misfortune. Because the Latin word for "left" is **sinister**, it is easy to see how the word came to have its present meaning.

* **Haul** and *hall* are homophones, words that sound alike but have different meanings and spellings. A *hall* is (1) a large room held for public meeting, (2) a passageway providing access to rooms along it, and (3) an entrance room in a building.
    `,
    wordsIncluded: ["colossal", "sinister", "haul"],
    questions: []
};
