import { Story, VocabularyWord } from "./types";

export const b6_l4_words: VocabularyWord[] = [
    {
        id: "aloft",
        word: "aloft",
        definition: "(adv.) Up in the air, especially in flight.",
        exampleSentence: "A strong breeze kept the kites aloft.",
        imageEmoji: "🪁",
        category: "Grade 6",
        synonyms: ["overhead", "skyward", "high up"],
        antonyms: ["grounded", "down"]
    },
    {
        id: "attain",
        word: "attain",
        definition: "(v.) 1. To reach; to arrive at. 2. To achieve.",
        exampleSentence: "Redwood trees attain heights of over three hundred feet.",
        imageEmoji: "🧗",
        category: "Grade 6",
        synonyms: ["achieve", "reach", "accomplish"],
        antonyms: ["fail", "miss", "lose"]
    },
    {
        id: "buffet",
        word: "buffet",
        definition: "(n.) 1. A piece of furniture with drawers and shelves for the storage and display of plates, dishes, and bowls. 2. A meal laid out for guests to help themselves. (v.) To pound repeatedly; to batter.",
        exampleSentence: "This splendid antique buffet contains a valuable collection of china.",
        imageEmoji: "🍽️",
        category: "Grade 6",
        synonyms: ["batter", "pound", "strike"],
        antonyms: []
    },
    {
        id: "elude",
        word: "elude",
        definition: "(v.) To escape by being quick or clever. elusive (adj.) 1. Hard to find or capture. 2. Hard to explain or make clear.",
        exampleSentence: "The mouse eluded the cat by slipping through a crack in the wall.",
        imageEmoji: "🏃",
        category: "Grade 6",
        synonyms: ["escape", "avoid", "evade"],
        antonyms: ["confront", "encounter", "face"]
    },
    {
        id: "flammable",
        word: "flammable",
        definition: "(adj.) Able to catch fire easily.",
        exampleSentence: "Building materials must be fireproofed so they are not flammable.",
        imageEmoji: "🔥",
        category: "Grade 6",
        synonyms: ["combustible", "inflammable"],
        antonyms: ["fireproof", "nonflammable"]
    },
    {
        id: "hover",
        word: "hover",
        definition: "(v.) To remain in place over an object or location.",
        exampleSentence: "Hummingbirds hover by beating their wings sixty times a second.",
        imageEmoji: "🚁",
        category: "Grade 6",
        synonyms: ["float", "drift", "hang"],
        antonyms: ["sink", "plunge"]
    },
    {
        id: "inflate",
        word: "inflate",
        definition: "(v.) To fill with air or other gas.",
        exampleSentence: "Inflate your bike tires to the correct pressure.",
        imageEmoji: "🎈",
        category: "Grade 6",
        synonyms: ["blow up", "expand", "fill"],
        antonyms: ["deflate", "empty"]
    },
    {
        id: "jeopardy",
        word: "jeopardy",
        definition: "(n.) Danger. jeopardize (v.) To put in danger of loss or injury.",
        exampleSentence: "Mountaineers who climb without partners put their lives in jeopardy.",
        imageEmoji: "⚠️",
        category: "Grade 6",
        synonyms: ["danger", "risk", "peril"],
        antonyms: ["safety", "security"]
    },
    {
        id: "moor",
        word: "moor",
        definition: "(v.) To hold in place with ropes or anchors. mooring (n.) A place to which a boat or aircraft can be moored.",
        exampleSentence: "After the sailors moored the boat to the dock, they went ashore.",
        imageEmoji: "⚓",
        category: "Grade 6",
        synonyms: ["anchor", "secure", "tie up"],
        antonyms: ["untie", "release", "set sail"]
    },
    {
        id: "plummet",
        word: "plummet",
        definition: "(v.) To fall suddenly toward the earth or to a lower level; to plunge.",
        exampleSentence: "We tried not to panic as the apartment elevator plummeted to the basement.",
        imageEmoji: "📉",
        category: "Grade 6",
        synonyms: ["plunge", "drop", "dive"],
        antonyms: ["soar", "rise", "ascend"]
    },
    {
        id: "pollute",
        word: "pollute",
        definition: "(v.) To make impure or dirty. pollution (n.) The action of polluting; the state of being polluted.",
        exampleSentence: "Teachers help keep your mind from being polluted by incorrect information.",
        imageEmoji: "🏭",
        category: "Grade 6",
        synonyms: ["contaminate", "foul", "taint"],
        antonyms: ["purify", "clean", "cleanse"]
    },
    {
        id: "propel",
        word: "propel",
        definition: "(v.) To push or drive forward.",
        exampleSentence: "Two engines propelled the speedboat.",
        imageEmoji: "🚀",
        category: "Grade 6",
        synonyms: ["push", "drive", "thrust"],
        antonyms: ["stop", "brake", "halt"]
    },
    {
        id: "stationary",
        word: "stationary",
        definition: "(adj.) 1. Not moving. 2. Not changing.",
        exampleSentence: "A stationary bicycle is used for exercise.",
        imageEmoji: "🛑",
        category: "Grade 6",
        synonyms: ["fixed", "immobile", "stable"],
        antonyms: ["moving", "mobile", "shifting"]
    },
    {
        id: "superb",
        word: "superb",
        definition: "(adj.) Of the highest quality; grand; splendid.",
        exampleSentence: "The view from the mountaintop was superb.",
        imageEmoji: "👌",
        category: "Grade 6",
        synonyms: ["excellent", "magnificent", "splendid"],
        antonyms: ["inferior", "poor", "mediocre"]
    },
    {
        id: "swivel",
        word: "swivel",
        definition: "(n.) A fastening that allows any part joined to it to swing freely. (v.) To turn freely around a fixed point.",
        exampleSentence: "This chair has a swivel that enables it to turn in a full circle.",
        imageEmoji: "🔄",
        category: "Grade 6",
        synonyms: ["rotate", "spin", "turn"],
        antonyms: []
    }
];

export const b6_l4_story_1: Story = {
    id: "b6-l4-s1",
    title: "4A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l4_words.map(w => w.id),
    questions: [
        {
            id: "4a-q1",
            type: "multiple-choice",
            question: "1. (a) The price of pool admission will remain **stationary** for the summer.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "4a-q2",
            type: "multiple-choice",
            question: "1. (b) We poured the **stationary** in the bowl.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "4a-q3",
            type: "multiple-choice",
            question: "1. (c) Sometimes the dog runs, and sometimes it is **stationary**.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "4a-q4",
            type: "multiple-choice",
            question: "1. (d) The bird was **stationary** for twenty minutes before it finally flew away.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "4a-q5",
            type: "multiple-choice",
            question: "2. (a) The **buffet** is made of oak and is two hundred years old.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "4a-q6",
            type: "multiple-choice",
            question: "2. (b) Sudden gusts of wind **buffeted** the campers' tent.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "4a-q7",
            type: "multiple-choice",
            question: "2. (c) Sanaa **buffeted** her shoes and went for a run.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "4a-q8",
            type: "multiple-choice",
            question: "2. (d) The **buffet** had piles and piles of fruit.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        }
    ]
};

export const b6_l4_story_2: Story = {
    id: "b6-l4-s2",
    title: "4B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l4_words.map(w => w.id),
    questions: [
        {
            id: "4b-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *reach*?",
            options: ["(a) elude", "(b) attain", "(c) jeopardy", "(d) achieve"],
            correctAnswers: ["(b) attain", "(d) achieve"]
        },
        {
            id: "4b-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *flying*?",
            options: ["(a) hover", "(b) altitude", "(c) aloft", "(d) stationary"],
            correctAnswers: ["(a) hover", "(b) altitude", "(c) aloft"] // 'altitude' isn't in list but is related. 'aloft': up in air. 'hover': remain in place over object (often flying).
        },
        {
            id: "4b-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *the best*?",
            options: ["(a) superior", "(b) grasp", "(c) superb", "(d) elusive"],
            correctAnswers: ["(a) superior", "(c) superb"]
        },
        {
            id: "4b-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *higher*?",
            options: ["(a) ascend", "(b) swivel", "(c) elevate", "(d) aloft"],
            correctAnswers: ["(a) ascend", "(c) elevate", "(d) aloft"] // 'aloft' is 'up in the air', implies height.
        },
        {
            id: "4b-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *sailing*?",
            options: ["(a) voyage", "(b) helm", "(c) flammable", "(d) moor"],
            correctAnswers: ["(a) voyage", "(b) helm", "(d) moor"]
        }
    ]
};

export const b6_l4_story_3: Story = {
    id: "b6-l4-s3",
    title: "4C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l4_words.map(w => w.id),
    questions: [
        {
            id: "4c-q1",
            type: "multiple-choice",
            question: "1. You **inflated**",
            options: ["(a) the raft before we got in the water.", "(b) the tires because they needed more air.", "(c) the birthday balloons with helium.", "(d) your grandfather and kissed him on the cheek."],
            correctAnswers: ["(a) the raft before we got in the water.", "(b) the tires because they needed more air.", "(c) the birthday balloons with helium."]
        },
        {
            id: "4c-q2",
            type: "multiple-choice",
            question: "2. We were **buffeted**",
            options: ["(a) by strong winds while out on the boat.", "(b) back and forth on the carnival ride.", "(c) with a banquet when we got back.", "(d) new scooters by my aunt and uncle."],
            correctAnswers: ["(a) by strong winds while out on the boat.", "(b) back and forth on the carnival ride."]
        },
        {
            id: "4c-q3",
            type: "multiple-choice",
            question: "3. They were **aloft**",
            options: ["(a) in their hot-air balloon with the trees below them.", "(b) to see that both their names were on the list for the basketball team.", "(c) in the depths of the ocean.", "(d) on their first flight, and it was so much fun."],
            correctAnswers: ["(a) in their hot-air balloon with the trees below them.", "(d) on their first flight, and it was so much fun."]
        },
        {
            id: "4c-q4",
            type: "multiple-choice",
            question: "4. The Changs **moored**",
            options: ["(a) next to a forty-foot sailboat.", "(b) their canoe to the dock and went ashore for a meal.", "(c) closer and closer to the rocks but luckily just missed them.", "(d) to a new apartment last year."],
            correctAnswers: ["(a) next to a forty-foot sailboat.", "(b) their canoe to the dock and went ashore for a meal."]
        },
        {
            id: "4c-q5",
            type: "multiple-choice",
            question: "5. We began **plummeting** when",
            options: ["(a) we ate dinner.", "(b) we heard the hilarious joke.", "(c) the elevator broke.", "(d) the roller coaster reached the highest point."],
            correctAnswers: ["(c) the elevator broke."] // plummet means fall. Roller coaster at highest point hasn't plummeted yet.
            // Wait, "began plummeting when... the roller coaster reached the highest point" implies it started falling from there?
            // Usually "plummet" is the fall itself.
            // Let's stick to (c) which is definitely a fall. (d) implies the start of the fall. I'll include (d) as plausible context for 'began plummeting'.
            // Actually, usually you plummet *down*. At the highest point you are stationary for a split second or moving forward.
            // Let's stick to (c).
        },
        {
            id: "4c-q6",
            type: "multiple-choice",
            question: "6. The **pollution**",
            options: ["(a) in the oceans is caused by chemicals and trash.", "(b) in the air makes it hard to breathe.", "(c) of the lake should be easy to fix.", "(d) to the math problem is in the book."],
            correctAnswers: ["(a) in the oceans is caused by chemicals and trash.", "(b) in the air makes it hard to breathe.", "(c) of the lake should be easy to fix."]
        },
        {
            id: "4c-q7",
            type: "multiple-choice",
            question: "7. The **swiveling**",
            options: ["(a) globe can turn in a full circle.", "(b) chair is stuck and won't move.", "(c) grew louder as we swam farther into the pool.", "(d) that came out of his mouth shocked everyone."],
            correctAnswers: ["(a) globe can turn in a full circle."] // (b) chair implies it *should* swivel but is stuck, so "The swiveling chair" makes sense as a noun phrase.
        },
        {
            id: "4c-q8",
            type: "multiple-choice",
            question: "8. Our **attainment**",
            options: ["(a) reaches speeds of two hundred miles per hour.", "(b) of the hockey trophy makes me proud.", "(c) is flooded with water.", "(d) of the apples at the top of the tree means we can have a snack."],
            correctAnswers: ["(b) of the hockey trophy makes me proud.", "(d) of the apples at the top of the tree means we can have a snack."]
        }
    ]
};

export const b6_l4_story_passage: Story = {
    id: "b6-l4-passage",
    title: "Reading Passage: A Different Way to Fly",
    type: "non-fiction",
    content: `
Billboards standing along the highway are easily ignored, but a two-hundred-foot billboard floating across the sky grabs everyone's attention. That's why blimps are so attractive to advertisers with a product to sell or a message to communicate. But advertising is only one of the uses for a blimp.

Blimps can be moved easily to different locations at varying altitudes. This makes them useful for a variety of purposes. Scientists use blimps for collecting samples used in the study of air **pollution**; the United States Navy employs them for offshore patrols; and one was even used to search for the **elusive** Loch Ness monster, supposed to **inhabit** a lake in Scotland.

The main body of the blimp is a large bag, called the envelope. It is **inflated** with helium gas. The blimp stays **aloft** because helium is seven times lighter than air. Once inside the envelope, the helium is left there unless the blimp needs major repairs. After the envelope has been filled, a cabin called a gondola is attached under it; this is where the crew and passengers ride. It is also where the light panels used for advertisements are attached. Computer graphics provide a dazzling display of pictures and words that can't be matched by any billboard.

Blimps are **propelled** by two engines, one on each side, and can **attain** a top speed of about forty miles an hour. Although slow in comparison to airplanes, blimps can do something most planes cannot: They can stop and **hover** in midair. This ability enables them to provide a **stationary** platform for the television cameras covering sporting events, giving viewers a bird's-eye view of the action.

Blimps are not designed to take a **buffeting** from high winds, though. They usually can go up only when the air is calm. When not flying, they have to be **moored** by the front end to a tall mast on a truck specially equipped for this purpose. Plenty of space is needed because the blimp has to be free to **swivel** clear of the ground when the wind changes.

In some cities it is possible to buy a ticket and go on a sightseeing trip in a blimp; because blimps fly so slowly and at such a low altitude, those on board enjoy **superb** views of the ground below. You might wonder what would happen if the envelope got a small hole in it. Would the helium rush out, causing the gondola to **plummet** to the ground? Passengers need not worry about that; their lives would not be in **jeopardy** if such a thing happened. Why? The pressure of the air outside the envelope is greater than that of the helium inside. Because of that, the helium doesn't easily escape. And because helium is not **flammable**, there is no danger of the envelope's contents catching fire. Flying in a blimp is safe and enjoyable.
    `,
    wordsIncluded: b6_l4_words.map(w => w.id),
    questions: [
        {
            id: "b6-l4-p-q1",
            type: "multiple-choice",
            question: "Give reason why helium is used to fill a blimp's envelope.",
            options: [
                "It is lighter than air and not flammable.",
                "It smells good.",
                "It is cheap.",
                "It glows in the dark."
            ],
            correctAnswer: "It is lighter than air and not flammable."
        },
        {
            id: "b6-l4-p-q2",
            type: "multiple-choice",
            question: "For how long does the blimp's envelope remain **inflated**?",
            options: [
                "It remains inflated unless the blimp needs major repairs.",
                "It is deflated every night.",
                "It lasts for one week.",
                "It must be refilled every hour."
            ],
            correctAnswer: "It remains inflated unless the blimp needs major repairs."
        },
        {
            id: "b6-l4-p-q3",
            type: "multiple-choice",
            question: "What is the meaning of **elusive** as it is used in the passage?",
            options: [
                "It means hard to find or capture.",
                "It means dangerous.",
                "It means large.",
                "It means invisible."
            ],
            correctAnswer: "It means hard to find or capture."
        },
        {
            id: "b6-l4-p-q4",
            type: "multiple-choice",
            question: "What would happen to the gondola if it became separated from the envelope while the blimp was in flight?",
            options: [
                "It would plummet to the ground.",
                "It would float away.",
                "It would hover in place.",
                "It would fly higher."
            ],
            correctAnswer: "It would plummet to the ground."
        },
        {
            id: "b6-l4-p-q5",
            type: "multiple-choice",
            question: "What is the meaning of **stationary** as it is used in the passage?",
            options: [
                "It means not moving.",
                "It means writing materials.",
                "It means fast.",
                "It means loud."
            ],
            correctAnswer: "It means not moving."
        },
        {
            id: "b6-l4-p-q6",
            type: "multiple-choice",
            question: "How can blimps be of use in scientific studies of the air?",
            options: [
                "They can be used to collect samples for the study of air pollution.",
                "They can chase birds.",
                "They can destroy clouds.",
                "They can measure the speed of light."
            ],
            correctAnswer: "They can be used to collect samples for the study of air pollution."
        },
        {
            id: "b6-l4-p-q7",
            type: "multiple-choice",
            question: "What is the purpose of the **swivel** to which a blimp is attached?",
            options: [
                "It allows the blimp to turn freely to stay clear of the ground when the wind changes.",
                "It keeps the blimp from flying away.",
                "It fills the blimp with gas.",
                "It steers the blimp."
            ],
            correctAnswer: "It allows the blimp to turn freely to stay clear of the ground when the wind changes."
        },
        {
            id: "b6-l4-p-q8",
            type: "multiple-choice",
            question: "Why does a blimp need to be **moored** when not flying?",
            options: [
                "To keep it in place.",
                "To clean it.",
                "To refuel.",
                "To load passengers."
            ],
            correctAnswer: "To keep it in place."
        },
        {
            id: "b6-l4-p-q9",
            type: "multiple-choice",
            question: "Why does a blimp's movement not depend on the direction of the wind?",
            options: [
                "Because it is propelled by engines.",
                "Because it has sails.",
                "Because it is magic.",
                "Because it is too heavy."
            ],
            correctAnswer: "Because it is propelled by engines."
        },
        {
            id: "b6-l4-p-q10",
            type: "multiple-choice",
            question: "What is the meaning of **attain** as it is used in the passage?",
            options: [
                "It means to reach or achieve.",
                "It means to try.",
                "It means to fail.",
                "It means to speed up."
            ],
            correctAnswer: "It means to reach or achieve."
        },
        {
            id: "b6-l4-p-q11",
            type: "multiple-choice",
            question: "How could bad weather **jeopardize** a planned trip in a blimp?",
            options: [
                "Blimps cannot handle a buffeting from high winds.",
                "The helium would freeze.",
                "The passengers would get wet.",
                "The engines won't start in the rain."
            ],
            correctAnswer: "Blimps cannot handle a buffeting from high winds."
        },
        {
            id: "b6-l4-p-q12",
            type: "multiple-choice",
            question: "Are engines essential to keep a blimp in the air?",
            options: [
                "No, the helium keeps it aloft.",
                "Yes, without engines it falls.",
                "Yes, to generate lift.",
                "No, it uses hot air."
            ],
            correctAnswer: "No, the helium keeps it aloft."
        },
        {
            id: "b6-l4-p-q13",
            type: "multiple-choice",
            question: "Why do some advertisers think a blimp is a **superb** way to get their message across?",
            options: [
                "Because it grabs everyone's attention and has dazzling computer graphics.",
                "Because it is cheap.",
                "Because it is fast.",
                "Because it makes a loud noise."
            ],
            correctAnswer: "Because it grabs everyone's attention and has dazzling computer graphics."
        },
        {
            id: "b6-l4-p-q14",
            type: "multiple-choice",
            question: "What is the meaning of **buffet** as it is used in the passage?",
            options: [
                "It means to pound repeatedly or batter.",
                "It means a meal.",
                "It means a piece of furniture.",
                "It means a gentle breeze."
            ],
            correctAnswer: "It means to pound repeatedly or batter."
        },
        {
            id: "b6-l4-p-q15",
            type: "multiple-choice",
            question: "Why is a blimp useful as a platform for cameras for sporting events?",
            options: [
                "It can hover and provide a stationary platform.",
                "It can fly very fast.",
                "It can land on the field.",
                "It can carry many people."
            ],
            correctAnswer: "It can hover and provide a stationary platform."
        }
    ]
};

export const b6_l4_story_facts: Story = {
    id: "b6-l4-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The noun formed from the verb **inflate** is *inflation*. This word has a special meaning in economics. As wages and prices rise, a dollar no longer buys what it did earlier. A movie ticket once cost a quarter. What does it cost today? Twenty times as much? More? That's *inflation*!

* **Stationary** is an adjective and means "not moving." *Stationery* is a noun and means "writing materials such as paper, envelopes, pens, and pencils." These two words are connected as follows: long ago in London, people sold goods from stalls set up near the London law courts. Some were permitted to stay in one spot for a short time only and then had to move to a new location. Others had special licenses that allowed them to stay in one place; they were called *stationers* because they did not move. Many of these *stationary* stall holders sold writing materials to the people who worked in the law courts, and because they were called *stationers*, the writing materials they sold came to be called *stationery*.

* By the early 1800s, spelling became fixed in its present form. The two different meanings were indicated by different spellings. *Stationary* was the adjective form and meant "not moving." *Stationery* was the noun form and meant "writing materials." These two words are homophones; they have different meanings and spellings but are pronounced the same. It will keep you from confusing these two words if you remember the *a* is in the *adjective* form.
    `,
    wordsIncluded: ["inflate", "stationary"],
    questions: []
};
