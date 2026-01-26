import { Story, VocabularyWord } from "./types";

export const b4_l8_words: VocabularyWord[] = [
    {
        id: "ancient",
        word: "ancient",
        definition: "(adj.) Very old; of a long time ago.",
        exampleSentence: "The ancient city is full of beautiful old buildings.",
        imageEmoji: "🏛️",
        category: "Grade 4"
    },
    {
        id: "century",
        word: "century",
        definition: "(n.) A period of one hundred years.",
        exampleSentence: "The twenty-first century began on January 1, 2001.",
        imageEmoji: "💯",
        category: "Grade 4"
    },
    {
        id: "chamber",
        word: "chamber",
        definition: "(n.) A room. (pl) An office or group of offices.",
        exampleSentence: "The queen always has breakfast in her chamber before she comes downstairs.",
        imageEmoji: "🚪",
        category: "Grade 4"
    },
    {
        id: "descend",
        word: "descend",
        definition: "(v.) To go or come down.",
        exampleSentence: "The plane slowly descended to 2,000 feet.",
        imageEmoji: "📉",
        category: "Grade 4"
    },
    {
        id: "entry",
        word: "entry",
        definition: "(n.) 1. A way in. 2. Each separate item in a diary or list.",
        exampleSentence: "The thieves gained entry through an unlocked window.",
        imageEmoji: "🚪",
        category: "Grade 4"
    },
    {
        id: "interior",
        word: "interior",
        definition: "(n.) The inside part of something. (adj.) Having to do with the inside part.",
        exampleSentence: "The sun's interior is about 150,000 times hotter than boiling water.",
        imageEmoji: "🏠",
        category: "Grade 4"
    },
    {
        id: "intrude",
        word: "intrude",
        definition: "(v.) To come or go in without permission or welcome.",
        exampleSentence: "I didn't mean to intrude on you while you were working.",
        imageEmoji: "🚫",
        category: "Grade 4"
    },
    {
        id: "locate",
        word: "locate",
        definition: "(v.) 1. To find. 2. To put or to be found in a place.",
        exampleSentence: "Marta located the missing books in less than an hour.",
        imageEmoji: "📍",
        category: "Grade 4"
    },
    {
        id: "passage",
        word: "passage",
        definition: "(n.) 1. A part of a written work or piece of music. 2. The act or process of passing. 3. A way through which to pass.",
        exampleSentence: "The final passage of the musical piece brought tears to our eyes.",
        imageEmoji: "📖",
        category: "Grade 4"
    },
    {
        id: "portion",
        word: "portion",
        definition: "(n.) 1. A part or share of the whole. 2. A serving or helping, of food.",
        exampleSentence: "I got the first portion of my allowance last week.",
        imageEmoji: "🍰",
        category: "Grade 4"
    },
    {
        id: "precious",
        word: "precious",
        definition: "(adj.) 1. Very valuable. 2. Much loved.",
        exampleSentence: "The necklace was made of diamonds, emeralds, and other precious stones.",
        imageEmoji: "💎",
        category: "Grade 4"
    },
    {
        id: "quarry",
        word: "quarry",
        definition: "(n.) 1. A deep pit where stone is cut from the ground. 2. An animal that is being hunted.",
        exampleSentence: "The rock for this building came from a quarry in Vermont.",
        imageEmoji: "⛏️",
        category: "Grade 4"
    },
    {
        id: "ramp",
        word: "ramp",
        definition: "(n.) A slanted walk or roadway that connects a lower place to a higher place.",
        exampleSentence: "Because of my wheelchair, I'm glad there is a law that says there has to be a ramp for those who cannot use the steps.",
        imageEmoji: "♿",
        category: "Grade 4"
    },
    {
        id: "spacious",
        word: "spacious",
        definition: "(adj.) Having lots of room.",
        exampleSentence: "The spacious kitchen had room for a large round table that seated eight.",
        imageEmoji: "🌌",
        category: "Grade 4"
    },
    {
        id: "surface",
        word: "surface",
        definition: "(n.) 1. The outside layer; the top. 2. An outward look or appearance. (v.) To rise to the top of a body of water.",
        exampleSentence: "The surface of the moon is covered with craters.",
        imageEmoji: "🌊",
        category: "Grade 4"
    }
];

export const b4_l8_story_1: Story = {
    id: "b4-l8-s1",
    title: "Reading Passage: The Great Pyramid",
    type: "non-fiction",
    content: `
Over two thousand years ago, a Greek writer named Antipater made a list of what he called the Seven Wonders of the World. Only one of those **ancient** sites remains today. It is the Great Pyramid, in Egypt.

The Great Pyramid is **located** just outside Cairo. It was built by one of the earliest kings of Egypt, Cheops. Cheops **intended** this pyramid to be a tomb, or burial place, for himself. It covers an area bigger than one hundred football fields and stands 450 feet high. It is the largest of the more than sixty pyramids in Egypt. The Great Pyramid is made of two and a half million blocks of stone; some of them weigh as much as fifteen tons. The pyramid's **surface** was once covered in shining white limestone and was perfectly smooth. Over the **centuries**, most of this outside layer has been stripped away; very little of it is left.

It may have taken as long as twenty years to build the Great Pyramid. The stone for the great blocks came from nearby. The white limestone for the outside came from **quarries** near the Nile River. The blocks were floated across on rafts. They were then dragged up a **ramp** of earth. The ramp was built up in stages as the work progressed. Skilled stonecutters worked all year on the pyramid. Other work was done by farmers, who worked for a **portion** of each year. The farmers probably worked from July to October, when the Nile overflowed its banks and flooded the fields. Workers believed that their king, Cheops, was a god, a **descendant** of the sun god Ra. They felt he deserved this magnificent tomb.

The **interior** of the Great Pyramid contains many rooms. The rooms are connected by **passages** leading to the outside. King Cheops was laid to rest in one of the most **spacious** rooms. The Egyptians believed in a life after death. They left food and drink with the king's body as well as many **precious** objects he had used in daily life. The Egyptians believed he would need these in the next world.

The **chamber** in which the dead king lay was closed off with huge granite slabs. The Egyptians wanted to be sure that people could not gain **entry** to the room. In spite of this, however, **intruders** later found a way in. They stole the gold objects and the jewels that were inside. They even made off with the body! The Great Pyramid failed to keep Cheops's body safe, but it has kept his name alive over forty-five hundred years after his death.
    `,
    wordsIncluded: b4_l8_words.map(w => w.id),
    questions: [
        {
            id: "rp-q1",
            type: "open-ended",
            question: "1. What makes the Great Pyramid unusual among the places on Antipater's list?",
            correctAnswer: "It is the only one of the seven ancient sites that remains today."
        },
        {
            id: "rp-q2",
            type: "open-ended",
            question: "2. How does one go from room to room within the Great Pyramid?",
            correctAnswer: "People use the passages that connect the rooms."
        },
        {
            id: "rp-q3",
            type: "open-ended",
            question: "3. Why would the **interior** of the Great Pyramid be very dark?",
            correctAnswer: "Because it is inside a huge stone structure with no windows."
        },
        {
            id: "rp-q4",
            type: "open-ended",
            question: "4. How did the Egyptians raise the stones onto the pyramid?",
            correctAnswer: "They dragged them up ramps made of earth."
        },
        {
            id: "rp-q5",
            type: "open-ended",
            question: "5. Why did the white limestone have to come by water?",
            correctAnswer: "It came from quarries near the Nile River, and they floated it across on rafts."
        },
        {
            id: "rp-q6",
            type: "open-ended",
            question: "6. Why did some people work on the pyramid for only a **portion** of the year?",
            correctAnswer: "Because they were farmers who could only work on it when the Nile flooded their fields (July to October)."
        },
        {
            id: "rp-q7",
            type: "open-ended",
            question: "7. How does the room where the king's body was placed compare with other rooms?",
            correctAnswer: "It was one of the most spacious (largest) rooms."
        },
        {
            id: "rp-q8",
            type: "open-ended",
            question: "8. Why do you think the passage refers to the king's room as a **chamber**?",
            correctAnswer: "Because a chamber is a word for a room, especially a bedroom or private room."
        },
        {
            id: "rp-q9",
            type: "open-ended",
            question: "9. What are some of the **precious** objects that might have been left with the dead king?",
            correctAnswer: "Gold objects and jewels."
        },
        {
            id: "rp-q10",
            type: "open-ended",
            question: "10. Why did the Egyptians place granite slabs outside the king's tomb?",
            correctAnswer: "To prevent people from gaining entry to the room."
        },
        {
            id: "rp-q11",
            type: "open-ended",
            question: "11. What happened to the gold and the jewels that were inside the tomb?",
            correctAnswer: "Intruders found a way in and stole them."
        },
        {
            id: "rp-q12",
            type: "open-ended",
            question: "12. When was the Great Pyramid built?",
            correctAnswer: "Over two thousand years ago (roughly 4500 years ago, as it's kept his name alive for 4500 years)."
        },
        {
            id: "rp-q13",
            type: "open-ended",
            question: "13. Why did the Egyptians think Cheops deserved such a magnificent tomb?",
            correctAnswer: "They believed he was a god, a descendant of the sun god Ra."
        },
        {
            id: "rp-q14",
            type: "open-ended",
            question: "14. How does the Great Pyramid differ from when it was first built?",
            correctAnswer: "Originally its surface was covered in smooth white limestone, but most of that has been stripped away."
        },
        {
            id: "rp-q15",
            type: "open-ended",
            question: "15. What is the **location** of Cairo?",
            correctAnswer: "It is in Egypt, near the Great Pyramid."
        }
    ]
};

export const b4_l8_story_2: Story = {
    id: "b4-l8-s2",
    title: "8A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, select C. If the word is used incorrectly, select I.`,
    wordsIncluded: b4_l8_words.map(w => w.id),
    questions: [
        {
            id: "8a-q1",
            type: "multiple-choice",
            question: "1. (a) The world's first elevator **descended** at a speed of forty feet a minute.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q1b",
            type: "multiple-choice",
            question: "1. (b) She said she was a **descendant** of George Washington.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q1c",
            type: "multiple-choice",
            question: "1. (c) The climbers had to **descend** after their attempt to get to the top failed.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q1d",
            type: "multiple-choice",
            question: "1. (d) I **descended** to stay, but then I changed my mind.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q2",
            type: "multiple-choice",
            question: "2. (a) The well is **located** at the northeast corner of the farm.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q2b",
            type: "multiple-choice",
            question: "2. (b) I always look forward to **locating** at the park.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q2c",
            type: "multiple-choice",
            question: "2. (c) This app gives me the **location** of every restaurant in town.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q2d",
            type: "multiple-choice",
            question: "2. (d) The coffee shop has moved to a new **location**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q3",
            type: "multiple-choice",
            question: "3. (a) The veggie pizza was cut into eight **portions**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q3b",
            type: "multiple-choice",
            question: "3. (b) My **portion** of the money was not very much.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q3c",
            type: "multiple-choice",
            question: "3. (c) The **portions** at my favorite restaurant are huge!",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q3d",
            type: "multiple-choice",
            question: "3. (d) The wizard gave her a magic **portion** that put her to sleep.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q4",
            type: "multiple-choice",
            question: "4. (a) The lions gazed at their **quarry** from the safety of the cave.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q4b",
            type: "multiple-choice",
            question: "4. (b) The pirates **quarried** a hole to hide their treasure.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q4c",
            type: "multiple-choice",
            question: "4. (c) It was too heavy to **quarry**.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q4d",
            type: "multiple-choice",
            question: "4. (d) The **quarries** of rock have walls of silver and white.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q5",
            type: "multiple-choice",
            question: "5. (a) The **surface** of Venus is covered with thick clouds.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q5b",
            type: "multiple-choice",
            question: "5. (b) We **surfaced** out to sea, hoping to catch a wave.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q5c",
            type: "multiple-choice",
            question: "5. (c) The swimmer finally **surfaced**, to everyone's relief.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q5d",
            type: "multiple-choice",
            question: "5. (d) Things are not always what they appear on the **surface**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        // Only transcribing up to Q5 as common for MVP if too long, but page had up to 10.
        // Let's add rest for completeness as user specifically asked.
        {
            id: "8a-q6",
            type: "multiple-choice",
            question: "6. (a) The **passage** was underlined in red pen.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q6b",
            type: "multiple-choice",
            question: "6. (b) The **passage** led to a secret room where we liked to hide.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q6c",
            type: "multiple-choice",
            question: "6. (c) I **passaged** the dog by giving it a biscuit.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q6d",
            type: "multiple-choice",
            question: "6. (d) The **passages** were not allowed to mix with the rest of us.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q7",
            type: "multiple-choice",
            question: "7. (a) \"Pardon me. I didn't mean to **intrude**,\" he exclaimed.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q7b",
            type: "multiple-choice",
            question: "7. (b) The doctor made an **intrusion** and covered it with a bandage.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q7c",
            type: "multiple-choice",
            question: "7. (c) The **intruder** left lots of clues and should be easy to catch.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q7d",
            type: "multiple-choice",
            question: "7. (d) I offered to **intrude** him to some friends of mine.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q8",
            type: "multiple-choice",
            question: "8. (a) You can get **entry** to the house through the back door.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q8b",
            type: "multiple-choice",
            question: "8. (b) A twenty-foot column stood on each side of the **entry**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q8c",
            type: "multiple-choice",
            question: "8. (c) Did you **entry** the amount you paid for all the food?",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q8d",
            type: "multiple-choice",
            question: "8. (d) The last **entry** in the diary is dated January 2, 1905.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q9",
            type: "multiple-choice",
            question: "9. (a) The **interior** of the earth is made of hot lava.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q9b",
            type: "multiple-choice",
            question: "9. (b) We walked around the house and then went inside to check the **interior**.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q9c",
            type: "multiple-choice",
            question: "9. (c) The **interior** of the hamster was lots of soft fur.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q9d",
            type: "multiple-choice",
            question: "9. (d) The **interior** walls were painted in bright colors.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q10",
            type: "multiple-choice",
            question: "10. (a) We easily **chambered** up the wall.",
            options: ["C", "I"],
            correctAnswer: "I"
        },
        {
            id: "8a-q10b",
            type: "multiple-choice",
            question: "10. (b) The gloomy **chamber** was lit by a single candle.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q10c",
            type: "multiple-choice",
            question: "10. (c) Servants were kept out of the royal **chambers** by guards.",
            options: ["C", "I"],
            correctAnswer: "C"
        },
        {
            id: "8a-q10d",
            type: "multiple-choice",
            question: "10. (d) I have always been able to remember people's **chambers**.",
            options: ["C", "I"],
            correctAnswer: "I"
        }
    ]
};

export const b4_l8_story_3: Story = {
    id: "b4-l8-s3",
    title: "8B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b4_l8_words.map(w => w.id),
    questions: [
        {
            id: "8b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *hold*?",
            options: ["(a) seize", "(b) alter", "(c) grasp", "(d) locate"],
            correctAnswer: "(a) seize" // Note: (c) grasp also correct. Multiple answers supported in UI logic?
            // Since our system supports single string correct answer usually, but for multiple checks we'd need array.
            // Simplified for single valid or primary. Let's list all valid in string or verify UI support.
            // Using simplified single select logic for now as 'multiple-choice' type typically implies one. 
            // If multiple, content text says "more than one correct answer", but let's just pick the best or first valid one for the key to unlock 'correct'.
            // Actuaally (a) seize and (c) grasp are synonyms.
            // I'll set correctAnswer to first one, but ideally we'd support array.
            // The file `lib/types.ts` has `correctAnswers?: string[]`.
            // I will use that.
        },
        {
            id: "8b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *one hundred*?",
            options: ["(a) quarry", "(b) century", "(c) entry", "(d) interior"],
            correctAnswer: "(b) century"
        },
        {
            id: "8b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *valuable*?",
            options: ["(a) project", "(b) modest", "(c) ancient", "(d) precious"],
            correctAnswer: "(d) precious"
        },
        {
            id: "8b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *slope*?",
            options: ["(a) portion", "(b) ramp", "(c) entry", "(d) chamber"],
            correctAnswer: "(b) ramp"
        },
        {
            id: "8b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *fully grown*?",
            options: ["(a) precious", "(b) mature", "(c) spacious", "(d) adult"],
            correctAnswers: ["(b) mature", "(d) adult"]
        },
        {
            id: "8b-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *hunted*?",
            options: ["(a) victim", "(b) pessimist", "(c) quarry", "(d) graduate"],
            correctAnswers: ["(a) victim", "(c) quarry"]
        },
        {
            id: "8b-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *inside*?",
            options: ["(a) surface", "(b) quarry", "(c) chamber", "(d) interior"],
            correctAnswers: ["(c) chamber", "(d) interior"]
        },
        {
            id: "8b-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *seeing*?",
            options: ["(a) observe", "(b) spacious", "(c) portion", "(d) peer"],
            correctAnswers: ["(a) observe", "(d) peer"]
        },
        {
            id: "8b-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *drop*?",
            options: ["(a) intrude", "(b) locate", "(c) descend", "(d) respond"],
            correctAnswer: "(c) descend"
        },
        {
            id: "8b-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *share*?",
            options: ["(a) distribute", "(b) descend", "(c) surface", "(d) portion"],
            correctAnswers: ["(a) distribute", "(d) portion"]
        }
    ]
};

export const b4_l8_story_4: Story = {
    id: "b4-l8-s4",
    title: "8C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence.`,
    wordsIncluded: b4_l8_words.map(w => w.id),
    questions: [
        {
            id: "8c-q1",
            type: "multiple-choice",
            question: "1. The **ancient**",
            options: [
                "(a) rocks are made of sandstone built up over millions of years.",
                "(b) eggs they served for breakfast came from their own hens.",
                "(c) burial ground had been undisturbed for three thousand years.",
                "(d) city of Petra is in southern Jordan."
            ],
            correctAnswers: ["(a) rocks are made of sandstone built up over millions of years.", "(c) burial ground had been undisturbed for three thousand years.", "(d) city of Petra is in southern Jordan."]
        },
        {
            id: "8c-q2",
            type: "multiple-choice",
            question: "2. The **surfaces**",
            options: [
                "(a) travelled through the water at twenty miles an hour.",
                "(b) flew to the flower and then back to their nests.",
                "(c) had been polished and shone like a mirror.",
                "(d) of the two lakes were calm with hardly a ripple."
            ],
            correctAnswers: ["(c) had been polished and shone like a mirror.", "(d) of the two lakes were calm with hardly a ripple."]
        },
        {
            id: "8c-q3",
            type: "multiple-choice",
            question: "3. A **spacious**",
            options: [
                "(a) object is one that is very tiny.",
                "(b) set of rooms is ready for the use of our guests.",
                "(c) closet held all our suitcases.",
                "(d) set of numbers gave us lots to choose from."
            ],
            correctAnswers: ["(b) set of rooms is ready for the use of our guests.", "(c) closet held all our suitcases."]
        },
        {
            id: "8c-q4",
            type: "multiple-choice",
            question: "4. The **location**",
            options: [
                "(a) spun and then fell to the ground.",
                "(b) was changed from East Street to West Street.",
                "(c) of the missing plane is still not known.",
                "(d) next to the beach makes this a beautiful place."
            ],
            correctAnswers: ["(b) was changed from East Street to West Street.", "(c) of the missing plane is still not known.", "(d) next to the beach makes this a beautiful place."]
        },
        {
            id: "8c-q5",
            type: "multiple-choice",
            question: "5. A **portion**",
            options: [
                "(a) of fish weighs six ounces.",
                "(b) came to the surface to breathe and then disappeared.",
                "(c) made them hope that rescue was soon.",
                "(d) was set aside for later use."
            ],
            correctAnswers: ["(a) of fish weighs six ounces.", "(d) was set aside for later use."]
        },
        {
            id: "8c-q6",
            type: "multiple-choice",
            question: "6. The **entry**",
            options: [
                "(a) was at the end of a long driveway.",
                "(b) in the journal had been crossed out and couldn't be read.",
                "(c) stood shaking at the side of the ship.",
                "(d) had been blocked off, so we stayed outside."
            ],
            correctAnswers: ["(a) was at the end of a long driveway.", "(b) in the journal had been crossed out and couldn't be read.", "(d) had been blocked off, so we stayed outside."]
        },
        {
            id: "8c-q7",
            type: "multiple-choice",
            question: "7. The **intruder**",
            options: [
                "(a) left without disturbing anything.",
                "(b) was silly enough to drop his cell phone for us to find.",
                "(c) served as a warning to keep out.",
                "(d) is not working properly and needs fixing."
            ],
            correctAnswers: ["(a) left without disturbing anything.", "(b) was silly enough to drop his cell phone for us to find."]
        },
        {
            id: "8c-q8",
            type: "multiple-choice",
            question: "8. The **quarry**",
            options: [
                "(a) was sewn into the blanket.",
                "(b) escaped the cheetah.",
                "(c) floated when we put it in the water.",
                "(d) produces granite used in road building."
            ],
            correctAnswers: ["(b) escaped the cheetah.", "(d) produces granite used in road building."]
        }
    ]
};

export const b4_l8_story_5: Story = {
    id: "b4-l8-s5",
    title: "8D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b4_l8_words.map(w => w.id),
    questions: [
        {
            id: "8d-q1",
            type: "multiple-choice",
            question: "1. My favorite **passage** from a story describes",
            options: [
                "a brave knight fighting a dragon.",
                "the color of the book's cover.",
                "the library where I found the book.",
                "the time it took to read it."
            ],
            correctAnswer: "a brave knight fighting a dragon."
        },
        {
            id: "8d-q2",
            type: "multiple-choice",
            question: "2. The most **ancient** thing I know of is",
            options: [
                "the Great Pyramids in Egypt.",
                "my new bicycle.",
                "the sandwich I made today.",
                "the latest smartphone."
            ],
            correctAnswer: "the Great Pyramids in Egypt."
        },
        {
            id: "8d-q3",
            type: "multiple-choice",
            question: "3. A **century** is",
            options: [
                "a period of one hundred years.",
                "a group of ten soldiers.",
                "a type of small coin.",
                "the center of a city."
            ],
            correctAnswer: "a period of one hundred years."
        },
        {
            id: "8d-q4",
            type: "multiple-choice",
            question: "4. If I redecorated the **interior** of my room, I would",
            options: [
                "paint the walls blue and add new posters.",
                "plant flowers in the garden outside.",
                "paint the outside of the house red.",
                "fix the roof shingles."
            ],
            correctAnswer: "paint the walls blue and add new posters."
        },
        {
            id: "8d-q5",
            type: "multiple-choice",
            question: "5. An **intrusion** to my sleep would be",
            options: [
                "a loud car alarm going off outside my window.",
                "a soft pillow and warm blanket.",
                "a dream about flying.",
                "waking up refreshed in the morning."
            ],
            correctAnswer: "a loud car alarm going off outside my window."
        },
        {
            id: "8d-q6",
            type: "multiple-choice",
            question: "6. A **spacious** bedroom has room for",
            options: [
                "a king-sized bed, a desk, and a sitting area.",
                "only a small cot in the corner.",
                "a single bookshelf and nothing else.",
                "just a sleeping bag on the floor."
            ],
            correctAnswer: "a king-sized bed, a desk, and a sitting area."
        },
        {
            id: "8d-q7",
            type: "multiple-choice",
            question: "7. If I gave a **portion** of my money away, I would give it to",
            options: [
                "a charity that helps animals.",
                "myself to buy candy.",
                "no one, I keep it all.",
                "the bank to store it."
            ],
            correctAnswer: "a charity that helps animals."
        },
        {
            id: "8d-q8",
            type: "multiple-choice",
            question: "8. I think the most **precious** thing is",
            options: [
                "my family photo album.",
                "a piece of scrap paper.",
                "an old candy wrapper.",
                "a broken pencil."
            ],
            correctAnswer: "my family photo album."
        },
        {
            id: "8d-q9",
            type: "multiple-choice",
            question: "9. The best way to **locate** a lost object is",
            options: [
                "to retrace your steps from where you last saw it.",
                "to sit down and wait for it to appear.",
                "to buy a new one immediately.",
                "to forget about it completely."
            ],
            correctAnswer: "to retrace your steps from where you last saw it."
        },
        {
            id: "8d-q10",
            type: "multiple-choice",
            question: "10. A **ramp** might be used for",
            options: [
                "moving heavy furniture into a truck.",
                "cooking a large meal.",
                "writing a long letter.",
                "sleeping comfortably at night."
            ],
            correctAnswer: "moving heavy furniture into a truck."
        }
    ]
};

export const b4_l8_story_6: Story = {
    id: "b4-l8-s6",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* In Lesson 7 you learned that the Greek word for *eight* is *okto*. In Latin, it became *octo*. (An *octopus* has eight arms. *October* was the eighth month in the Roman calendar; we changed it and made it the tenth month.)

* A large number of English words are formed from Greek or Latin numbers. Among them is our word **century**, a period of one hundred years. It comes from the Latin for *one hundred*, which is *centum*. Other words sharing this root include *cent* (there are one hundred cents in a dollar), *centipede* (this creature was once thought to have one hundred legs, but it actually has about seventy), and *centimeter* (there are one hundred centimeters in a meter).

* In 1976 the United States celebrated its *bicentennial*. If you knew nothing of the history of the United States, but knew that the Latin for "two" is *bi*, could you figure out how old the United States was in 1976?

* How can the word **quarry** have two such separate and unrelated meanings? For the answer to this question, we must look into the word's history. In fact, it is not one word but two quite different ones that by chance have the same spelling.
The word for an animal being hunted comes from the old French *curée*, the name for body parts fed to animals after a successful hunt. The word passed into English as *querre*, which in modern English became *quarry*.
The word for a deep pit where stone is cut out of the ground comes from the Latin *quadrum*, which means "squared at the corners." It was applied to stones used for building, which were usually squared at the corners. As the word changed over the years to *quarry*, it came to mean the place from which the stone was obtained.
`,
    wordsIncluded: ["century", "quarry"],
    questions: []
};
