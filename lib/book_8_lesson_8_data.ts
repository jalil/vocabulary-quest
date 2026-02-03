
import { VocabularyWord, Story, Question } from "./types";

export const b8_l8_words: VocabularyWord[] = [
    {
        id: "adept",
        word: "adept",
        pronunciation: "/əˈdept/",
        definition: "Highly skilled; expert.",
        exampleSentence: "Blake is adept at decorating cakes, and he always brings a fancy cake to special events.",
        imageEmoji: "🎨",
        category: "Grade 8",
        synonyms: ["skilled", "expert"],
        antonyms: ["clumsy", "inept"]
    },
    {
        id: "audible",
        word: "audible",
        pronunciation: "/ˈɔːdəbl/",
        definition: "Capable of being heard.",
        exampleSentence: "The sound of the harp was barely audible in the large hall.",
        imageEmoji: "🔊",
        category: "Grade 8",
        synonyms: ["hearable", "loud"],
        antonyms: ["inaudible", "silent"]
    },
    {
        id: "azure",
        word: "azure",
        pronunciation: "/ˈæʒər/",
        definition: "The blue color of a cloudless sky.",
        exampleSentence: "The azure of Caribbean waters is in striking contrast to the grayish green of more northern seas.",
        imageEmoji: "🔵",
        category: "Grade 8",
        synonyms: ["blue", "sky-blue"],
        antonyms: []
    },
    {
        id: "banter",
        word: "banter",
        pronunciation: "/ˈbæntər/",
        definition: "1. To exchange playful, teasing remarks. 2. Light, playful conversation.",
        exampleSentence: "The opposing players bantered nervously before the soccer match.",
        imageEmoji: "🗣️",
        category: "Grade 8",
        synonyms: ["joke", "tease"],
        antonyms: []
    },
    {
        id: "capacious",
        word: "capacious",
        pronunciation: "/kəˈpeɪʃəs/",
        definition: "Able to hold a large amount; roomy.",
        exampleSentence: "The capacious closets of their new apartment would provide enough room for the clothes of her two teenagers, Mrs. Gupta decided.",
        imageEmoji: "👜",
        category: "Grade 8",
        synonyms: ["roomy", "spacious"],
        antonyms: ["cramped", "small"]
    },
    {
        id: "copious",
        word: "copious",
        pronunciation: "/ˈkoʊpiəs/",
        definition: "Large in quantity; abundant.",
        exampleSentence: "Mediterranean cooking uses copious amounts of olive oil.",
        imageEmoji: "🏺",
        category: "Grade 8",
        synonyms: ["abundant", "plentiful"],
        antonyms: ["scarce", "meager"]
    },
    {
        id: "crucial",
        word: "crucial",
        pronunciation: "/ˈkruːʃl/",
        definition: "Extremely important; vital in resolving something.",
        exampleSentence: "It is crucial that I get to school on time so I don't miss the test.",
        imageEmoji: "❗",
        category: "Grade 8",
        synonyms: ["critical", "vital"],
        antonyms: ["unimportant", "insignificant"]
    },
    {
        id: "decelerate",
        word: "decelerate",
        pronunciation: "/diːˈseləreɪt/",
        definition: "To slow down or to cause to slow down.",
        exampleSentence: "The train decelerated to make a stop at the station.",
        imageEmoji: "🛑",
        category: "Grade 8",
        synonyms: ["slow down", "brake"],
        antonyms: ["accelerate", "speed up"]
    },
    {
        id: "deploy",
        word: "deploy",
        pronunciation: "/dɪˈplɔɪ/",
        definition: "1. To arrange troops or equipment in position for battle. 2. To put into use.",
        exampleSentence: "The failure to deploy air support led to the army's defeat.",
        imageEmoji: "🚀",
        category: "Grade 8",
        synonyms: ["position", "arrange"],
        antonyms: ["withdraw"]
    },
    {
        id: "facilitate",
        word: "facilitate",
        pronunciation: "/fəˈsɪlɪteɪt/",
        definition: "To make easier.",
        exampleSentence: "Living in Mexico for two years facilitated my learning Spanish.",
        imageEmoji: "✅",
        category: "Grade 8",
        synonyms: ["ease", "help"],
        antonyms: ["hinder", "obstruct"]
    },
    {
        id: "fastidious",
        word: "fastidious",
        pronunciation: "/fæˈstɪdiəs/",
        definition: "1. Paying close attention to detail. 2. Difficult to please.",
        exampleSentence: "The mustard stain on his sweater suggested to Lilly that Simon was not as fastidious about his clothes as he was about his desk, which was spotless.",
        imageEmoji: "🧐",
        category: "Grade 8",
        synonyms: ["picky", "fussy"],
        antonyms: ["easygoing", "sloppy"]
    },
    {
        id: "fitful",
        word: "fitful",
        pronunciation: "/ˈfɪtfl/",
        definition: "Not steady; irregular.",
        exampleSentence: "After a fitful sleep, I awoke feeling groggy and unprepared for the first day of school.",
        imageEmoji: "🛌",
        category: "Grade 8",
        synonyms: ["irregular", "restless"],
        antonyms: ["steady", "constant"]
    },
    {
        id: "grapple",
        word: "grapple",
        pronunciation: "/ˈɡræpl/",
        definition: "1. To struggle with in close combat; to wrestle. 2. To come to grips with. 3. An iron shaft with a claw for grasping and holding things.",
        exampleSentence: "Jake grappled with the dog to get it into the tub for a bath.",
        imageEmoji: "🤼",
        category: "Grade 8",
        synonyms: ["struggle", "wrestle"],
        antonyms: []
    },
    {
        id: "pang",
        word: "pang",
        pronunciation: "/pæŋ/",
        definition: "A sudden sharp feeling of pain or distress.",
        exampleSentence: "Jarvis felt a pang of regret when he sold his old bicycle.",
        imageEmoji: "💔",
        category: "Grade 8",
        synonyms: ["twinge", "stab"],
        antonyms: []
    },
    {
        id: "precede",
        word: "precede",
        pronunciation: "/prɪˈsiːd/",
        definition: "To go or come before in time, rank, or position.",
        exampleSentence: "Omar's eighth-grade graduation preceded his attempts to get a summer job.",
        imageEmoji: "⏮️",
        category: "Grade 8",
        synonyms: ["come before", "lead"],
        antonyms: ["follow", "succeed"]
    }
];

export const b8_l8_story_1: Story = {
    id: "b8-l8-s1",
    title: "8A Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, select C. If the word is used incorrectly, select I.",
    wordsIncluded: ["deploy", "grapple", "adept", "audible", "banter", "copious", "fastidious"],
    questions: [
        {
            id: "b8-l8-q1",
            type: "multiple-choice",
            question: "The millionaire **deployed** an army of lawyers to protect his money.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l8-q2",
            type: "multiple-choice",
            question: "The captain **deployed** the navy with great skill.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l8-q3",
            type: "multiple-choice",
            question: "Erin had many natural gifts, and in math she **deployed** them well.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l8-q4",
            type: "multiple-choice",
            question: "The **grapple** hooked on to the derelict boat, and the crew hauled it away.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l8-q5",
            type: "multiple-choice",
            question: "Alonso **grappled** with many problems during baseball practice.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l8-q6",
            type: "multiple-choice",
            question: "Teddy was an **adept** wielder of a fishing rod.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l8-q7",
            type: "multiple-choice",
            question: "The specks of dust are so small, they are barely **audible** to the naked eye.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        }
    ]
};

export const b8_l8_story_reading: Story = {
    id: "b8-l8-reading",
    title: "Reading Passage: Women in Space, Part Two",
    type: "non-fiction",
    content: `On June 18, 1983, the space shuttle *Challenger* rose from the launch pad to begin a five-day mission. Astronaut Sally Ride, the flight engineer, was not the first woman in space. Two Soviet female cosmonauts had **preceded** her. But she was making history as the first American woman to make such a flight.

The thunderous roar of the rockets filled her headphones, and a **pang** of fear gripped her as she wondered if everything was working properly. The feeling quickly passed. In less than ten minutes *Challenger* was in orbit, floating almost two hundred miles above Earth. The only sound was the barely **audible** hum of the fans circulating the air. Outside, the sky was jet black; with no air at this altitude to scatter the sunlight, the sky had lost its familiar **azure** hue.

Released from the harnesses that held them in place, the five crew members floated weightlessly in zero gravity. It was a novel experience for all but the shuttle commander, Bob Crippen. He was the only crew member to have flown in space before. As the astronauts relaxed, they began **bantering** among themselves. Dr. Ride informed ground control that they had "three turkeys and two hams" aboard, although she did not reveal their identities.

Because the shuttle orbited Earth every ninety minutes, the sun rose and set sixteen times every twenty-four hours; night and day, therefore, had little meaning for the five astronauts. During her first rest period, Dr. Ride slept **fitfully**, but soon she adjusted to the routine aboard the shuttle. She once admitted that she was not a **fastidious** housekeeper, but she was careful to stow away everything she did not have an immediate need for. The cramped space of the shuttle's living quarters made neatness important. Eating in space was no problem. Of course the astronauts didn't sprinkle salt on their food; it would just float away. Disposing of bodily waste—a subject that had intrigued reporters—was **facilitated** by using an air suction device in the toilet.

The **capacious** cargo bay was located behind the crew's living quarters. On this particular mission it held two large communication satellites, known as comsats. It also held a $23 million orbiting laboratory designed to carry out various experiments while separated from the shuttle. In addition to her duties as the flight engineer, responsible for checking the workings of the spacecraft, Dr. Ride was also in charge of **deploying** the orbiting laboratory once the two comsats had been released.

One of Dr. Ride's qualifications for this mission had been that she was especially **adept** at handling the robot arm. The arm was a jointed fifty-foot pole with a **grapple** at the end. It was operated by remote control from the shuttle's flight deck. Dr. Ride used the robot arm to remove the orbiting laboratory from the cargo bay and to release it so that it could float freely away from the shuttle. From a distance of one thousand feet, a camera in the orbiting laboratory took spectacular photographs of the shuttle. These were beamed to Earth and shown on television. At the conclusion of the experiments, the shuttle moved closer to the orbiting laboratory. Dr. Ride then recovered the lab and tucked it away in the cargo bay, again using the robot arm.

With their work completed and the flight nearing its end, the shuttle's five crew members prepared to return to Earth. Because their bodies had lost fluids to adjust to weightlessness, they drank **copious** amounts of water. In addition, they put away everything that had been floating freely in the cabin. Once within Earth's gravity, these objects would crash to the floor.

The astronauts knew that reentering Earth's atmosphere at just the right angle was **crucial** for a successful landing. During reentry, the shuttle needed to **decelerate** sharply. The friction caused by air resistance would heat up its exterior to over 2,500 degrees Fahrenheit. But the special heat tiles on the outside would prevent the shuttle from burning up and would keep the interior comfortable.

All went well at the conclusion of Space Transportation System 7; after a ninety-eight-orbit flight of two and a half million miles, *Challenger* landed safely at Edwards Air Force Base in California. One of the banners that greeted Dr. Ride as she emerged read "HERSTORY MADE TODAY BY SALLY RIDE."`,
    wordsIncluded: ["precede", "pang", "audible", "azure", "banter", "fitful", "fastidious", "facilitate", "capacious", "deploy", "adept", "grapple", "copious", "crucial", "decelerate"],
    questions: [
        {
            id: "b8-l8-reading-q1",
            type: "multiple-choice",
            question: "How does the sky change as one gets above Earth's atmosphere?",
            options: [
                "It changes from **azure** (blue) to black.",
                "It becomes green.",
                "It stays blue.",
                "It becomes white."
            ],
            correctAnswer: "It changes from **azure** (blue) to black."
        },
        {
            id: "b8-l8-reading-q2",
            type: "multiple-choice",
            question: "Why would it be inaccurate to describe the shuttle living quarters as **capacious**?",
            options: [
                "Because they are cramped, not spacious (capacious means able to hold much).",
                "Because they are huge.",
                "Because they are blue.",
                "Because they are expensive."
            ],
            correctAnswer: "Because they are cramped, not spacious (capacious means able to hold much)."
        },
        {
            id: "b8-l8-reading-q3",
            type: "multiple-choice",
            question: "In what ways do you think the lack of gravity **facilitated** the astronauts' work on the space ship?",
            options: [
                "It made it easier to move heavy objects (they float).",
                "It made it harder.",
                "It made them sleep.",
                "It made them sick."
            ],
            correctAnswer: "It made it easier to move heavy objects (they float)."
        },
        {
            id: "b8-l8-reading-q4",
            type: "multiple-choice",
            question: "How was Dr. Ride's sleep affected when she first went into orbit?",
            options: [
                "It was **fitful** (restless) at first.",
                "She slept soundly.",
                "She didn't sleep at all.",
                "She had nightmares."
            ],
            correctAnswer: "It was **fitful** (restless) at first."
        },
        {
            id: "b8-l8-reading-q5",
            type: "multiple-choice",
            question: "What is the meaning of **grapple** as it is used in the passage?",
            options: [
                "A device for seizing or holding (at the end of the robot arm).",
                "To fight.",
                "To wrestle.",
                "To think hard."
            ],
            correctAnswer: "A device for seizing or holding (at the end of the robot arm)."
        },
        {
            id: "b8-l8-reading-q6",
            type: "multiple-choice",
            question: "What task **preceded** the release of the orbiting laboratory?",
            options: [
                "Removing it from the cargo bay using the robot arm.",
                "Eating lunch.",
                "Landing the shuttle.",
                "Sleep."
            ],
            correctAnswer: "Removing it from the cargo bay using the robot arm."
        },
        {
            id: "b8-l8-reading-q7",
            type: "multiple-choice",
            question: "Do you think crew members are likely to **banter** as they board the space shuttle? Explain.",
            options: [
                "Possibly not; they might be too serious or focused for playful conversation.",
                "Yes, they always tell jokes.",
                "No, silence is mandatory.",
                "Yes, they sing songs."
            ],
            correctAnswer: "Possibly not; they might be too serious or focused for playful conversation."
        },
        {
            id: "b8-l8-reading-q8",
            type: "multiple-choice",
            question: "What did Dr. Ride hear as the *Challenger* lifted off?",
            options: [
                "An **audible** roar (able to be heard).",
                "Silence.",
                "Music.",
                "Birds singing."
            ],
            correctAnswer: "An **audible** roar (able to be heard)."
        },
        {
            id: "b8-l8-reading-q9",
            type: "multiple-choice",
            question: "Why did the astronauts need to be **fastidious** about putting everything away before reentry?",
            options: [
                "Because loose objects would crash to the floor when gravity returned.",
                "Because they like cleaning.",
                "Because of the aliens.",
                "Because they were bored."
            ],
            correctAnswer: "Because loose objects would crash to the floor when gravity returned."
        },
        {
            id: "b8-l8-reading-q10",
            type: "multiple-choice",
            question: "What would probably happen if the shuttle failed to **decelerate** on reentry?",
            options: [
                "It would burn up due to excessive friction/heat.",
                "It would bounce.",
                "It would fly to Mars.",
                "It would freeze."
            ],
            correctAnswer: "It would burn up due to excessive friction/heat."
        },
        {
            id: "b8-l8-reading-q11",
            type: "multiple-choice",
            question: "Why is a plentiful supply of drinking water required on a shuttle mission?",
            options: [
                "Because astronauts need to drink **copious** amounts of water to adjust to weightlessness.",
                "To wash the ship.",
                "To swim.",
                "To water plants."
            ],
            correctAnswer: "Because astronauts need to drink **copious** amounts of water to adjust to weightlessness."
        },
        {
            id: "b8-l8-reading-q12",
            type: "multiple-choice",
            question: "What is the meaning of **deploy** as it is used in the passage?",
            options: [
                "To position or arrange; to utilize (the orbiting lab).",
                "To destroy.",
                "To hide.",
                "To sleep."
            ],
            correctAnswer: "To position or arrange; to utilize (the orbiting lab)."
        },
        {
            id: "b8-l8-reading-q13",
            type: "multiple-choice",
            question: "What **crucial** role did the heat tiles on the outside of the shuttle play?",
            options: [
                "They prevented the shuttle from burning up and kept the interior comfortable.",
                "They looked nice.",
                "They were aerodynamic.",
                "They were heavy."
            ],
            correctAnswer: "They prevented the shuttle from burning up and kept the interior comfortable."
        },
        {
            id: "b8-l8-reading-q14",
            type: "multiple-choice",
            question: "In what way must the pilot be **adept** during the return to Earth?",
            options: [
                "The pilot must be highly skilled to enter the atmosphere at just the right angle.",
                "He must be strong.",
                "He must be funny.",
                "He must be fast."
            ],
            correctAnswer: "The pilot must be highly skilled to enter the atmosphere at just the right angle."
        },
        {
            id: "b8-l8-reading-q15",
            type: "multiple-choice",
            question: "Why might the astronauts feel a **pang** of regret upon returning to Earth?",
            options: [
                "Because their amazing journey is over.",
                "Because they are hungry.",
                "Because they are tired.",
                "Because they missed Earth."
            ],
            correctAnswer: "Because their amazing journey is over."
        }
    ]
};

export const b8_l8_facts: Story = {
    id: "b8-l8-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   The adjective **crucial** comes from the Latin *crux*, which means "a cross." Ancient Romans used tall wooden crosses for a variety of reasons, including as signposts in the road. If a traveler came to a fork in the road, it was extremely important, or *crucial*, to take the correct path; the cross placed there as a signpost guided the traveler in the right direction.
`,
    wordsIncluded: ["crucial"]
};
