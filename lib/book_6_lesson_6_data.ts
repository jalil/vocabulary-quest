import { Story, VocabularyWord } from "./types";

export const b6_l6_words: VocabularyWord[] = [
    {
        id: "apparel",
        word: "apparel",
        definition: "(n.) The things that are worn by a person; clothing.",
        exampleSentence: "Partygoers dressed in their finest apparel for New Year's Eve.",
        imageEmoji: "👗",
        category: "Grade 6"
    },
    {
        id: "appreciate",
        word: "appreciate",
        definition: "(v.) 1. To see the worth or quality of. 2. To increase in value.",
        exampleSentence: "I appreciate handmade gifts my friends made for me.",
        imageEmoji: "👍",
        category: "Grade 6"
    },
    {
        id: "continuous",
        word: "continuous",
        definition: "(adj.) Going on without stopping.",
        exampleSentence: "The continuous flow of traffic makes it impossible to cross the street here.",
        imageEmoji: "♾️",
        category: "Grade 6"
    },
    {
        id: "dissolve",
        word: "dissolve",
        definition: "(v.) 1. To make or become liquid. 2. To bring or to come to an end.",
        exampleSentence: "Sugar dissolves easily in warm water.",
        imageEmoji: "🫠",
        category: "Grade 6"
    },
    {
        id: "domesticate",
        word: "domesticate",
        definition: "(v.) To tame; to bring plants or animals under human control. domesticated (adj.) Brought under human control; tamed or cultivated.",
        exampleSentence: "Some people claim that they can domesticate skunks and that they make good pets.",
        imageEmoji: "🐕",
        category: "Grade 6"
    },
    {
        id: "emerge",
        word: "emerge",
        definition: "(v.) 1. To come into view; to appear. 2. To become known.",
        exampleSentence: "A large brown bear emerged from the cave.",
        imageEmoji: "🐻",
        category: "Grade 6"
    },
    {
        id: "fiber",
        word: "fiber",
        definition: "(n.) 1. A thin, threadlike part of animal hair or plant tissue; also, an artificial thread that resembles this. 2. An arrangement of body cells that forms muscles and nerves. 3. A food substance that provides bulk but is not digested.",
        exampleSentence: "Cotton, wool, and rayon fibers can all be spun into yarn to make cloth.",
        imageEmoji: "🧵",
        category: "Grade 6"
    },
    {
        id: "function",
        word: "function",
        definition: "(v.) To serve a purpose. (n.) 1. The special purpose something is used for. 2. An important ceremony or gathering.",
        exampleSentence: "This couch also functions as a bed.",
        imageEmoji: "⚙️",
        category: "Grade 6"
    },
    {
        id: "hatch",
        word: "hatch",
        definition: "(v.) 1. To come or to bring forth from an egg. 2. To think up. (n.) A small opening with a door or cover.",
        exampleSentence: "A little yellow chick hatched last night.",
        imageEmoji: "🐣",
        category: "Grade 6"
    },
    {
        id: "inhibit",
        word: "inhibit",
        definition: "(v.) To prevent from doing something or to prevent from happening. inhibited (adj.) Held back because of shyness.",
        exampleSentence: "Oil inhibits the formation of rust on metal.",
        imageEmoji: "🚫",
        category: "Grade 6"
    },
    {
        id: "minute",
        word: "minute",
        definition: "(adj.) Very small; tiny.",
        exampleSentence: "A minute speck of dust in one's eye can be very annoying.",
        imageEmoji: "🔬",
        category: "Grade 6"
    },
    {
        id: "motion",
        word: "motion",
        definition: "(n.) 1. Movement. 2. A suggestion on which members at a meeting must vote. (v.) To signal. motionless (adj.) Not moving; stationary.",
        exampleSentence: "The motion of the train almost put me to sleep.",
        imageEmoji: "👋",
        category: "Grade 6"
    },
    {
        id: "sheathe",
        word: "sheathe",
        definition: "(v.) To cover with something that protects.",
        exampleSentence: "Metal workers will sheathe the ship's bottom with copper plates.",
        imageEmoji: "🗡️",
        category: "Grade 6"
    },
    {
        id: "shed",
        word: "shed",
        definition: "(v.) 1. To lose; to give up. 2. To cause to flow. 3. To throw off water without letting it soak through. 4. To send out or give off.",
        exampleSentence: "Cats shed hair in the summer.",
        imageEmoji: "🐕",
        category: "Grade 6"
    },
    {
        id: "transfer",
        word: "transfer",
        definition: "(v.) To move, carry, send, or change from one person or place to another. (n.) 1. The act of transferring. 2. A ticket used for transferring from one bus or train to another.",
        exampleSentence: "Transfer your notes to a fresh notebook.",
        imageEmoji: "🚌",
        category: "Grade 6"
    }
];

export const b6_l6_story_1: Story = {
    id: "b6-l6-s1",
    title: "6A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l6_words.map(w => w.id),
    questions: [
        {
            id: "6a-q1",
            type: "multiple-choice",
            question: "1. (a) We had to **shed** our way up the mountain in freezing cold.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q2",
            type: "multiple-choice",
            question: "1. (b) Latisha **shed** her last tear and then cleared her throat.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q3",
            type: "multiple-choice",
            question: "1. (c) The new information **sheds** light on an old mystery.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q4",
            type: "multiple-choice",
            question: "1. (d) Huang had a whole **shed** of reasons to explain Nick's behavior.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q5",
            type: "multiple-choice",
            question: "2. (a) Sugar **dissolves** quickly in hot tea.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q6",
            type: "multiple-choice",
            question: "2. (b) The club was **dissolved** when the members dropped out.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q7",
            type: "multiple-choice",
            question: "2. (c) I **dissolved** to get a summer job instead of going to camp.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q8",
            type: "multiple-choice",
            question: "2. (d) The brick was **dissolved** onto the wall.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q9",
            type: "multiple-choice",
            question: "3. (a) The groundhog **emerged** when it crawled back into its hole.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // usually emerge means come OUT.
        },
        {
            id: "6a-q10",
            type: "multiple-choice",
            question: "3. (b) Out of the darkness, the figure of a man **emerged**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q11",
            type: "multiple-choice",
            question: "3. (c) As the facts began to **emerge**, we knew there was trouble.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q12",
            type: "multiple-choice",
            question: "3. (d) The submarine could stay **emerged** underwater for days.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // submerged.
        },
        {
            id: "6a-q13",
            type: "multiple-choice",
            question: "4. (a) The bike is starting to **function**, so I need a new one.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // usually malfunctioning if you need a new one, or functioning properly if fixed. "starting to function" implies it was broken. If it's starting to function, you *don't* need a new one. Wait, context: you need a new one. So 'starting to function' implies... wait. Maybe 'malfunction'? Or 'starting to NOT function'? 'function' generally positive. "The bike is starting to function" -> good. "so I need a new one" -> contradiction. So incorrect.
        },
        {
            id: "6a-q14",
            type: "multiple-choice",
            question: "4. (b) The **function** is being held to award the volleyball team.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q15",
            type: "multiple-choice",
            question: "4. (c) What if someone invented a car that also **functions** as an airplane?",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q16",
            type: "multiple-choice",
            question: "4. (d) The machine has several different **functions**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q17",
            type: "multiple-choice",
            question: "5. (a) I **appreciate** the help you gave me.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q18",
            type: "multiple-choice",
            question: "5. (b) You can **appreciate** around the pool.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q19",
            type: "multiple-choice",
            question: "5. (c) The new restaurant is perfect for people who **appreciate** spicy food.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q20",
            type: "multiple-choice",
            question: "5. (d) The old toy my parents bought me for ten dollars has now **appreciated** to one hundred dollars!",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        // ... (skipping some for brevity if needed, but I'll try to do all visible)
        {
            id: "6a-q21",
            type: "multiple-choice",
            question: "6. (a) We opened the **hatch** to let in some fresh air.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q22",
            type: "multiple-choice",
            question: "6. (b) The hen sits on the eggs until they **hatch**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q23",
            type: "multiple-choice",
            question: "6. (c) We **hatched** an idea to convince the teacher to cancel the quiz.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q24",
            type: "multiple-choice",
            question: "6. (d) The drawing of a monkey was **hatched** in ink.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q25",
            type: "multiple-choice",
            question: "7. (a) The safety patrol **motioned** to us to not cross the street yet.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q26",
            type: "multiple-choice",
            question: "7. (b) I felt so much happy **motion** when my baby sister was born.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // emotion.
        },
        {
            id: "6a-q27",
            type: "multiple-choice",
            question: "7. (c) The **motion** for the school to take part in the city fair was voted down.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q28",
            type: "multiple-choice",
            question: "7. (d) Any **motion** in the room sets off the alarm.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q29",
            type: "multiple-choice",
            question: "8. (a) Our **transfer** kept us from climbing the hill.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "6a-q30",
            type: "multiple-choice",
            question: "8. (b) Can you **transfer** your books to another table?",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q31",
            type: "multiple-choice",
            question: "8. (c) After a short bus ride, we **transferred** to the ferry.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q32",
            type: "multiple-choice",
            question: "8. (d) The novel has been **transferred** into many different languages.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // translated.
        },
        {
            id: "6a-q33",
            type: "multiple-choice",
            question: "9. (a) A **continuous** stream of students kept the principal busy.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q34",
            type: "multiple-choice",
            question: "9. (b) If the patient becomes **continuous**, give him some juice to sip.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // conscious?
        },
        {
            id: "6a-q35",
            type: "multiple-choice",
            question: "9. (c) A **continuous** supply of fresh water came from the village well.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "6a-q36",
            type: "multiple-choice",
            question: "9. (d) The twins exchanged **continuous** looks when their mother found the spilled paint.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect" // maybe knowing? conspiring?
        }
    ]
};

export const b6_l6_story_2: Story = {
    id: "b6-l6-s2",
    title: "6B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l6_words.map(w => w.id),
    questions: [
        {
            id: "6b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *increase*?",
            options: ["(a) function", "(b) escalate", "(c) appreciate", "(d) transfer"],
            correctAnswers: ["(b) escalate", "(c) appreciate"] // appreciate: increase in value. escalate: increase intensity/amount.
        },
        {
            id: "6b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *without stopping*?",
            options: ["(a) transfer", "(b) domesticate", "(c) continuously", "(d) fiber"],
            correctAnswers: ["(c) continuously"]
        },
        {
            id: "6b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *boat*?",
            options: ["(a) eclipse", "(b) hatch", "(c) voyage", "(d) vessel"],
            correctAnswers: ["(b) hatch", "(c) voyage", "(d) vessel"] // Hatch is part of a boat? Yes, ships have hatches.
        },
        {
            id: "6b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *movement*?",
            options: ["(a) ceremony", "(b) accelerate", "(c) soar", "(d) motion"],
            correctAnswers: ["(b) accelerate", "(c) soar", "(d) motion"]
        },
        {
            id: "6b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *tame*?",
            options: ["(a) inhibit", "(b) domesticate", "(c) captivate", "(d) brace"],
            correctAnswers: ["(b) domesticate"]
        },
        {
            id: "6b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *food*?",
            options: ["(a) consume", "(b) edible", "(c) fiber", "(d) inhibit"],
            correctAnswers: ["(a) consume", "(b) edible", "(c) fiber"]
        },
        {
            id: "6b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *protect*?",
            options: ["(a) hatch", "(b) sheathe", "(c) minute", "(d) attain"],
            correctAnswers: ["(b) sheathe"]
        },
        {
            id: "6b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *size*?",
            options: ["(a) minute", "(b) vast", "(c) diligent", "(d) mammoth"],
            correctAnswers: ["(a) minute", "(b) vast", "(d) mammoth"]
        },
        {
            id: "6b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *prevent*?",
            options: ["(a) emerge", "(b) inhibit", "(c) stifle", "(d) vacate"],
            correctAnswers: ["(b) inhibit", "(c) stifle"]
        },
        {
            id: "6b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *clothing*?",
            options: ["(a) threadbare", "(b) apparel", "(c) attire", "(d) dense"],
            correctAnswers: ["(a) threadbare", "(b) apparel", "(c) attire"]
        }
    ]
};

export const b6_l6_story_3: Story = {
    id: "b6-l6-s3",
    title: "6C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l6_words.map(w => w.id),
    questions: [
        {
            id: "6c-q1",
            type: "multiple-choice",
            question: "1. The **functional**",
            options: ["(a) elevator has been working nonstop for five years.", "(b) cheese turned moldy.", "(c) toaster is broken.", "(d) parts of the bike are worth keeping."],
            correctAnswers: ["(a) elevator has been working nonstop for five years.", "(d) parts of the bike are worth keeping."]
        },
        {
            id: "6c-q2",
            type: "multiple-choice",
            question: "2. **Inhibiting**",
            options: ["(a) yourself by not speaking makes you seem shy.", "(b) how much water you give the flowers will keep them from blooming.", "(c) your sleep will make you more awake.", "(d) the forest are a huge number of deer."],
            correctAnswers: ["(a) yourself by not speaking makes you seem shy.", "(b) how much water you give the flowers will keep them from blooming."]
        },
        {
            id: "6c-q3",
            type: "multiple-choice",
            question: "3. Stop **shedding**",
            options: ["(a) the time if you have nothing to do.", "(b) the door so loudly.", "(c) on the couch, you silly dog!", "(d) so many tears and try to laugh instead."],
            correctAnswers: ["(c) on the couch, you silly dog!", "(d) so many tears and try to laugh instead."]
        },
        {
            id: "6c-q4",
            type: "multiple-choice",
            question: "4. Ari **transferred**",
            options: ["(a) to the wrong subway line.", "(b) his phone from his left pocket to his right pocket.", "(c) into a polite young man around his grandparents.", "(d) his stereo from his bedroom to the basement."],
            correctAnswers: ["(a) to the wrong subway line.", "(b) his phone from his left pocket to his right pocket.", "(d) his stereo from his bedroom to the basement."]
        },
        {
            id: "6c-q5",
            type: "multiple-choice",
            question: "5. The **fiber**",
            options: ["(a) must be shown to the security guard before you can go in.", "(b) that many people prefer for cloth is bamboo.", "(c) told the truth this time.", "(d) in whole-wheat flour is good for you."],
            correctAnswers: ["(b) that many people prefer for cloth is bamboo.", "(d) in whole-wheat flour is good for you."]
        },
        {
            id: "6c-q6",
            type: "multiple-choice",
            question: "6. Something **emerged**",
            options: ["(a) out of the fog and then disappeared again, right in front of me!", "(b) from the report that was not good.", "(c) me that the story wasn't true.", "(d) from the ocean that looked like a large lizard."],
            correctAnswers: ["(a) out of the fog and then disappeared again, right in front of me!", "(b) from the report that was not good.", "(d) from the ocean that looked like a large lizard."]
        },
        {
            id: "6c-q7",
            type: "multiple-choice",
            question: "7. The **domestication** of",
            options: ["(a) the poisonous weed into a household plant is going to be hard to do.", "(b) dogs began thousands of years ago.", "(c) the dancer is stiff and sore.", "(d) pasta should be sprinkled with cheese."],
            correctAnswers: ["(a) the poisonous weed into a household plant is going to be hard to do.", "(b) dogs began thousands of years ago."]
        },
        {
            id: "6c-q8",
            type: "multiple-choice",
            question: "8. Try **dissolving**",
            options: ["(a) the code before you can read the secret message.", "(b) the vitamins in orange juice to hide the taste.", "(c) the characters on the sign before we go any farther.", "(d) the sugar in water to make syrup."],
            correctAnswers: ["(b) the vitamins in orange juice to hide the taste.", "(d) the sugar in water to make syrup."]
        }
    ]
};

export const b6_l6_story_passage: Story = {
    id: "b6-l6-passage",
    title: "Reading Passage: The Story of Silk",
    type: "non-fiction",
    content: `
"As soft as silk" we say, and with good reason, for silk is among the softest and finest of all fabrics. But where does silk come from? The silkworms that produce it come mainly from China, where they have been **domesticated** for thousands of years by silk farmers. According to legend, a Chinese empress known as the Lady of Si-ling began the cultivation of silkworms in 2640 BCE. The practice then spread from China to other regions. Silk-producing areas today include Japan, Korea, India, Thailand, and Brazil.

The story of silk begins when the female moth lays its eggs, up to five hundred of them at a time; they are **minute**, each smaller than the head of a pin. The eggs are stored in a cool place to **inhibit** their growth until the silk farmer is ready to use them. At that time they are **transferred** to a heated container called an incubator. Twenty days later, tiny silkworms start to **hatch**.

At this stage of its life, a silkworm does just one thing: It eats. And it eats just one thing—the leaves of the mulberry tree. A silkworm eats **continuously**, and it grows bigger and bigger until it seems ready to burst out of its skin. Then it stops eating, and it remains **motionless** for about a day—a sign that it will soon **shed** its old skin and replace it with a new one. The shedding occurs four times altogether. When fully grown, at about six weeks, the silkworm has increased its size seventyfold. It now stops eating and prepares to enter the next stage of its life.

To accomplish this, the silkworm first **sheathes** itself in a cocoon. The cocoon is a kind of protective shell made from silk thread that the silkworm produces from a part of its body called the spinneret. During the three weeks it spends inside the cocoon, the silkworm turns into a fully grown moth. It has no teeth, so it cannot eat its way out; instead, it produces a liquid that **dissolves** the silk, making a hole in the cocoon. Then it slowly pulls itself through the hole. Once it has **emerged** from the cocoon, it is free to stretch its wings, although they serve no useful **function**. Centuries of careful breeding have resulted in the silk moth's wings being so feeble that it cannot fly.

Most silkworms, however, do not survive to become moths. The few that do are used for breeding. The farmer takes the rest while still in their cocoons and heats them in an oven to kill them. The silk, which is up to a mile long, is then carefully unwound from the cocoon by machines. It can then be spun and woven into cloth. The silk cloth is used to make men's and women's **apparel**, as well as upholstery, sheets, curtain materials, and even carpets.

Silk is the strongest of all natural **fibers**, and it is also light in weight, warmer than cotton, rayon, or linen, and wrinkle resistant. These qualities, together with its incredible softness, make it highly desirable to those who **appreciate** the finer things in life.
    `,
    wordsIncluded: b6_l6_words.map(w => w.id),
    questions: [
        {
            id: "b6-l6-p-q1",
            type: "multiple-choice",
            question: "What is the meaning of **hatch** as it is used in the passage?",
            options: [
                "It means to come forth from an egg.",
                "It means to think up.",
                "It means a small door.",
                "It means to close."
            ],
            correctAnswer: "It means to come forth from an egg."
        },
        {
            id: "b6-l6-p-q2",
            type: "multiple-choice",
            question: "What are coats, dresses, scarves, and shirts?",
            options: [
                "They are apparel.",
                "They are functions.",
                "They are motions.",
                "They are fibers."
            ],
            correctAnswer: "They are apparel."
        },
        {
            id: "b6-l6-p-q3",
            type: "multiple-choice",
            question: "What is the meaning of **emerge** as it is used in the passage?",
            options: [
                "It means to come into view.",
                "It means to hide.",
                "It means to dissolve.",
                "It means to eat."
            ],
            correctAnswer: "It means to come into view."
        },
        {
            id: "b6-l6-p-q4",
            type: "multiple-choice",
            question: "Why is a cocoon that produces a live silk moth useless for making silk cloth?",
            options: [
                "Because the moth produces a liquid that dissolves the silk to make a hole.",
                "Because the moth eats the silk.",
                "Because the silk becomes dirty.",
                "Because the cocoon is too small."
            ],
            correctAnswer: "Because the moth produces a liquid that dissolves the silk to make a hole."
        },
        {
            id: "b6-l6-p-q5",
            type: "multiple-choice",
            question: "What is the meaning of **function** as it is used in the passage?",
            options: [
                "It means a purpose or use.",
                "It means a party.",
                "It means a mathematical operation.",
                "It means to work."
            ],
            correctAnswer: "It means a purpose or use."
        },
        {
            id: "b6-l6-p-q6",
            type: "multiple-choice",
            question: "Why does the incubator used by the silk farmer not need to be large?",
            options: [
                "Because the eggs are minute.",
                "Because there are only a few eggs.",
                "Because the eggs are huge.",
                "Because the farmer wears a microscope."
            ],
            correctAnswer: "Because the eggs are minute."
        },
        {
            id: "b6-l6-p-q7",
            type: "multiple-choice",
            question: "What do you think causes the silkworm's size to increase so rapidly?",
            options: [
                "It eats continuously.",
                "It sleeps all day.",
                "It drinks a lot of water.",
                "It sheds its skin."
            ],
            correctAnswer: "It eats continuously."
        },
        {
            id: "b6-l6-p-q8",
            type: "multiple-choice",
            question: "What is the meaning of **shed** as it is used in the passage?",
            options: [
                "It means to lose or cast off (its old skin).",
                "It means a small building.",
                "It means to cry.",
                "It means to pour."
            ],
            correctAnswer: "It means to lose or cast off (its old skin)."
        },
        {
            id: "b6-l6-p-q9",
            type: "multiple-choice",
            question: "What is the Chinese empress, the Lady of Si-ling, known for?",
            options: [
                "She began the cultivation of silkworms in 2640 BCE.",
                "She invented silk.",
                "She was the first emperor of China.",
                "She traveled to Japan."
            ],
            correctAnswer: "She began the cultivation of silkworms in 2640 BCE."
        },
        {
            id: "b6-l6-p-q10",
            type: "multiple-choice",
            question: "How does the silkworm protect itself while it changes into a moth?",
            options: [
                "It sheathes itself in a cocoon.",
                "It hides underground.",
                "It builds a nest.",
                "It changes color."
            ],
            correctAnswer: "It sheathes itself in a cocoon."
        },
        {
            id: "b6-l6-p-q11",
            type: "multiple-choice",
            question: "What does the silk farmer do with cocoons not needed for breeding purposes?",
            options: [
                "Heats them in an oven to kill the worms, then unwinds the silk.",
                "Sets them free.",
                "Feeds them to birds.",
                "Buries them."
            ],
            correctAnswer: "Heats them in an oven to kill the worms, then unwinds the silk."
        },
        {
            id: "b6-l6-p-q12",
            type: "multiple-choice",
            question: "What effect does a cool temperature have on the growth of the silk moth's eggs?",
            options: [
                "It inhibits their growth.",
                "It speeds up their growth.",
                "It kills them.",
                "It makes them hatch immediately."
            ],
            correctAnswer: "It inhibits their growth."
        },
        {
            id: "b6-l6-p-q13",
            type: "multiple-choice",
            question: "How can one tell that a silkworm has outgrown its old skin and will shed it?",
            options: [
                "It remains motionless for about a day.",
                "It changes color.",
                "It spins a web.",
                "It makes a noise."
            ],
            correctAnswer: "It remains motionless for about a day."
        },
        {
            id: "b6-l6-p-q14",
            type: "multiple-choice",
            question: "What is the meaning of **appreciate** as it is used in the passage?",
            options: [
                "It means to see the worth or quality of.",
                "It means to increase in value.",
                "It means to say thank you.",
                "It means to understand."
            ],
            correctAnswer: "It means to see the worth or quality of."
        },
        {
            id: "b6-l6-p-q15",
            type: "multiple-choice",
            question: "What do silk, rayon, and wool have in common?",
            options: [
                "They are all fibers.",
                "They are all made by worms.",
                "They are all synthetic.",
                "They are all plants."
            ],
            correctAnswer: "They are all fibers."
        }
    ]
};

export const b6_l6_story_facts: Story = {
    id: "b6-l6-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Continuous** means "going on without stopping." *Continual* means "happening over and over again." When a telephone rings *continuously*, it does so without stopping, perhaps because no one answers and the person calling does not hang up. When a telephone rings *continually*, it starts to ring again as soon as one call ends, and this goes on repeatedly for some time.

* To **sheathe** something is to cover it for protection. A *sheath* is a case that fits over something, such as the blade of a knife. Note that *sheathe* rhymes with *breathe* and *sheath* rhymes with *teeth*.

* The adjective **minute** is pronounced my-NOOT. A *minute* amount is one that is very small. The noun *minute* is pronounced MIN-it. (There are sixty *minutes* in an hour.)
    `,
    wordsIncluded: ["continuous", "sheathe", "minute"],
    questions: []
};
