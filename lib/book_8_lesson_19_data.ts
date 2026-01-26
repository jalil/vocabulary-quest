
import { VocabularyWord, Story, Question } from "./types";

export const b8_l19_words: VocabularyWord[] = [
    {
        id: "bulwark",
        word: "bulwark",
        pronunciation: "/ˈbʊlwərk/",
        definition: "1. A wall-like structure used as a defense. 2. A person or thing that protects or defends.",
        exampleSentence: "A wall of sandbags acted as a bulwark against the rising floodwaters.",
        imageEmoji: "🧱",
        category: "Grade 8"
    },
    {
        id: "culminate",
        word: "culminate",
        pronunciation: "/ˈkʌlmɪneɪt/",
        definition: "To reach or bring to the highest point.",
        exampleSentence: "The Fourth of July celebrations culminated in a spectacular fireworks display.",
        imageEmoji: "🎆",
        category: "Grade 8"
    },
    {
        id: "engulf",
        word: "engulf",
        pronunciation: "/ɪnˈɡʌlf/",
        definition: "To swallow up by covering completely; to overwhelm.",
        exampleSentence: "During the hurricane, a huge wave engulfed the boat and almost swept the crew overboard.",
        imageEmoji: "🌊",
        category: "Grade 8"
    },
    {
        id: "feasible",
        word: "feasible",
        pronunciation: "/ˈfiːzəbl/",
        definition: "Able to be done; possible or likely.",
        exampleSentence: "Building a new library is feasible if the town allots sufficient funds for it.",
        imageEmoji: "👍",
        category: "Grade 8"
    },
    {
        id: "glut",
        word: "glut",
        pronunciation: "/ɡlʌt/",
        definition: "1. A much larger supply than is needed. 2. To supply a much larger amount than is needed. 3. To eat or consume to excess.",
        exampleSentence: "A glut of office space in downtown buildings resulted in a sharp drop in rents.",
        imageEmoji: "🏢",
        category: "Grade 8"
    },
    {
        id: "havoc",
        word: "havoc",
        pronunciation: "/ˈhævək/",
        definition: "1. Widespread destruction or devastation. 2. Great confusion.",
        exampleSentence: "This morning we warily surveyed the havoc caused by yesterday's storm.",
        imageEmoji: "🌪️",
        category: "Grade 8"
    },
    {
        id: "impregnable",
        word: "impregnable",
        pronunciation: "/ɪmˈpreɡnəbl/",
        definition: "Impossible to attack successfully.",
        exampleSentence: "The citadel was impregnable because of its hilltop location and strong defenses.",
        imageEmoji: "🏰",
        category: "Grade 8"
    },
    {
        id: "indefatigable",
        word: "indefatigable",
        pronunciation: "/ˌɪndɪˈfætɪɡəbl/",
        definition: "Not easily made tired; tireless.",
        exampleSentence: "Rescuers were indefatigable in their all-night efforts to reach the trapped miners.",
        imageEmoji: "🏃",
        category: "Grade 8"
    },
    {
        id: "onslaught",
        word: "onslaught",
        pronunciation: "/ˈɑːnslɔːt/",
        definition: "A fierce attack.",
        exampleSentence: "The Union troops were able to repulse the onslaught of the Confederate forces at Gettysburg.",
        imageEmoji: "⚔️",
        category: "Grade 8"
    },
    {
        id: "phenomenon",
        word: "phenomenon",
        pronunciation: "/fəˈnɑːmɪnən/",
        definition: "1. Any fact or event that can be observed or described. 2. An unusual fact, event, or person.",
        exampleSentence: "The Aurora Borealis, or Northern Lights, is a phenomenon visible in the night sky in the far north.",
        imageEmoji: "🌠",
        category: "Grade 8"
    },
    {
        id: "picturesque",
        word: "picturesque",
        pronunciation: "/ˌpɪktʃəˈresk/",
        definition: "Like a picture; pleasing or charming to look at.",
        exampleSentence: "The view of the sun setting over the water was picturesque.",
        imageEmoji: "📸",
        category: "Grade 8"
    },
    {
        id: "simultaneous",
        word: "simultaneous",
        pronunciation: "/ˌsaɪmlˈteɪniəs/",
        definition: "Happening or existing at the same time.",
        exampleSentence: "When the thunder and lightning are almost simultaneous, the storm is very close to you.",
        imageEmoji: "⚡",
        category: "Grade 8"
    },
    {
        id: "stipulate",
        word: "stipulate",
        pronunciation: "/ˈstɪpjuleɪt/",
        definition: "To require as part of an agreement or contract.",
        exampleSentence: "My agreement with my coach stipulates that I must attend all practice sessions.",
        imageEmoji: "📝",
        category: "Grade 8"
    },
    {
        id: "susceptible",
        word: "susceptible",
        pronunciation: "/səˈseptəbl/",
        definition: "Open or subject to; easily influenced or affected by.",
        exampleSentence: "Because I am susceptible to hay fever, I take an antihistamine.",
        imageEmoji: "🤧",
        category: "Grade 8"
    },
    {
        id: "wrest",
        word: "wrest",
        pronunciation: "/rest/",
        definition: "1. To pull away from with a twist. 2. To take by force or as if by force.",
        exampleSentence: "Tamika wrested the ball from the player on the opposing team.",
        imageEmoji: "🤼",
        category: "Grade 8"
    }
];

export const b8_l19_story_1: Story = {
    id: "b8-l19-s1",
    title: "19A Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 19. Then write the sentence.",
    wordsIncluded: ["feasible", "simultaneous", "onslaught", "bulwark", "indefatigable", "susceptible", "picturesque", "impregnable", "havoc", "glut", "culminate", "phenomenon", "stipulate", "wrest", "engulf"],
    questions: [
        {
            id: "b8-l19-q1",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **feasible**.",
            options: [
                "Feasible events are those that occur at the same time.",
                "Feasible events are those that are possible or likely.",
                "Simultaneous events are those that occur at the same time.",
                "Simultaneous events are those that are possible or likely."
            ],
            correctAnswer: "Simultaneous events are those that occur at the same time."
        },
        {
            id: "b8-l19-q2",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **onslaught**.",
            options: [
                "An onslaught is a fierce attack.",
                "A bulwark is a fierce attack.",
                "An onslaught is a demand greater than the supply.",
                "A bulwark is a demand greater than the supply."
            ],
            correctAnswer: "An onslaught is a fierce attack."
        },
        {
            id: "b8-l19-q3",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **indefatigable**.",
            options: [
                "To be indefatigable is to be easily affected by something.",
                "To be susceptible is to be easily affected by something.",
                "To be indefatigable is to be overwhelmed by something.",
                "To be susceptible is to be overwhelmed by something."
            ],
            correctAnswer: "To be susceptible is to be easily affected by something."
        },
        {
            id: "b8-l19-q4",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **impregnable**.",
            options: [
                "An impregnable place is one that exists only in the imagination.",
                "A picturesque place is one that exists only in the imagination.",
                "An impregnable place is one that is impossible to attack successfully.",
                "A picturesque place is one that is impossible to attack successfully."
            ],
            correctAnswer: "An impregnable place is one that is impossible to attack successfully."
        },
        {
            id: "b8-l19-q5",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **havoc**.",
            options: [
                "To create havoc is to cause a temporary shortage.",
                "To create a glut is to cause a temporary shortage.",
                "To create havoc is to cause large-scale destruction.",
                "To create a glut is to cause large-scale destruction."
            ],
            correctAnswer: "To create havoc is to cause large-scale destruction."
        }
    ]
};

export const b8_l19_story_reading: Story = {
    id: "b8-l19-reading",
    title: "Reading Passage: The Thousand-Year Battle",
    type: "non-fiction",
    content: `What can a small country do if more than a quarter of its land lies below sea level, threatened continuously by inundation? How can it **wrest** control of the land from the sea so it can be used productively? For over a thousand years, the people of Holland worked **indefatigably** to accomplish this task. They succeeded by building a system of dikes—great walls of earth and rock—as a **bulwark** against the sea.

In 1953, however, a freak combination of unusually high tides and hurricane-force winds along the southwestern coast caused this system to break down. Unable to withstand the storm's **onslaught**, many dikes gave way. The sea poured through. It **engulfed** the land, flooding 450,000 acres. The disaster killed eighteen hundred people. It drove thousands more from their homes.

The Dutch responded to this renewed challenge from the sea with the Delta Project. This plan involved the construction of a complex system of greatly strengthened dikes and dams. Its most innovative feature was a gigantic barrier designed to seal off Holland's southern coast, the area most **susceptible** to flooding. Begun shortly after the 1953 flood, the five-billion-dollar Delta Project took over thirty years to build. It was opened officially on October 4, 1986, by Queen Beatrix.

The barrier's sixty-five 130-foot-high concrete piers, each weighing eighteen thousand tons, were constructed in a specially built dry dock. When the dry dock was flooded, specialized ships carried the piers to the open sea. They were then lowered into position and anchored to the sea bed. Sixty-two steel gates, each 135 feet wide, are suspended between the piers. Under normal conditions, they are raised to allow the tides to flow in and out. This is a **stipulation** insisted on by Holland's fishing industry and by environmentalists concerned about the area's sea life. But when storms threaten, the gates are lowered. The task of closing them takes about an hour. They are capable of withstanding the crash of massive waves, protecting the land behind them.

The opening ceremony marked the **culmination** of the Delta Project. It was a proud moment for the Dutch people. However, they know the sea is a relentless foe; they know they must always be vigilant. Global warming, which causes polar ice to melt and ocean levels to rise, has increased the danger. In 1995, a "greenhouse effect" storm came close to causing a disaster equal to the one in 1953. It created **havoc** in northern Europe, and although the dikes held, a quarter of a million people were evacuated from low-lying areas of Holland.

This close call led the government to reconsider its ability to protect the country from the sea. Nature may have the final word. It may be that a total victory is not **feasible** and that the Dutch may have to give ground to their oldest enemy. A "Plan B" is being discussed which calls for returning a tenth of the country to the sea. The **glut** of water from the overflowing Rhine and Meuse rivers would be contained in this area. New wetlands would be created, and although the map of Holland would change, the country would be safer. This approach is more respectful of nature and less confrontational. It is also cheaper to let the water flow in than to try to keep it out. In the future, the Dutch may rely less on **impregnable** barriers and more on working with nature to ensure their survival.`,
    wordsIncluded: ["wrest", "indefatigable", "bulwark", "onslaught", "engulf", "susceptible", "stipulate", "culminate", "havoc", "feasible", "glut", "impregnable", "phenomenon"],
    questions: [
        {
            id: "b8-l19-reading-q1",
            type: "multiple-choice",
            question: "What made the Dutch realize that the dikes were not **impregnable**?",
            options: [
                "The freak storm of 1953 caused them to break, flooding the land.",
                "They were old.",
                "They crumbled.",
                "They were too short."
            ],
            correctAnswer: "The freak storm of 1953 caused them to break, flooding the land."
        },
        {
            id: "b8-l19-reading-q2",
            type: "multiple-choice",
            question: "How does the modern, efficient technology the Dutch use to pump water differ from the old-fashioned windmills?",
            options: [
                "Modern technology provides more efficient methods (pumps) compared to the picturesque windmills.",
                "They use solar power.",
                "They use magic.",
                "The windmills were fake."
            ],
            correctAnswer: "Modern technology provides more efficient methods (pumps) compared to the picturesque windmills."
        },
        {
            id: "b8-l19-reading-q3",
            type: "multiple-choice",
            question: "Why did the high tides and strong winds do so much damage in 1953?",
            options: [
                "The storm's onslaught broke through the dikes, flooding the land.",
                "There were no dikes.",
                "The gates were left open.",
                "People were asleep."
            ],
            correctAnswer: "The storm's onslaught broke through the dikes, flooding the land."
        },
        {
            id: "b8-l19-reading-q4",
            type: "multiple-choice",
            question: "What is the meaning of **bulwark** as it is used in the passage?",
            options: [
                "A defensive wall (dikes acting as a bulwark against the sea).",
                "A person who protects.",
                "A large ship.",
                "A type of fish."
            ],
            correctAnswer: "A defensive wall (dikes acting as a bulwark against the sea)."
        },
        {
            id: "b8-l19-reading-q5",
            type: "multiple-choice",
            question: "What did the Dutch decide to do when they realized that their fight against nature might no longer be **feasible**?",
            options: [
                "Consider 'Plan B' to return a tenth of the country to the sea to contain overflowing water.",
                "Build higher walls.",
                "Move to another country.",
                "Give up."
            ],
            correctAnswer: "Consider 'Plan B' to return a tenth of the country to the sea to contain overflowing water."
        },
        {
            id: "b8-l19-reading-q6",
            type: "multiple-choice",
            question: "Why is Holland **susceptible** to flooding?",
            options: [
                "More than a quarter of its land lies below sea level.",
                "It rains a lot.",
                "There are no rivers.",
                "The land is flat."
            ],
            correctAnswer: "More than a quarter of its land lies below sea level."
        },
        {
            id: "b8-l19-reading-q7",
            type: "multiple-choice",
            question: "What did the Delta Project mean to the Dutch people?",
            options: [
                "It was the culmination of their battle against the sea, a source of pride (opened by the Queen).",
                "It was a waste of money.",
                "It was a failure.",
                "It was a secret."
            ],
            correctAnswer: "It was the culmination of their battle against the sea, a source of pride (opened by the Queen)."
        },
        {
            id: "b8-l19-reading-q8",
            type: "multiple-choice",
            question: "What is the meaning of **phenomenon** as it is used in the passage?",
            options: [
                "An event or fact observed (referring to the rise in sea level/greenhouse effect).",
                "A person.",
                "A ghost.",
                "A miracle."
            ],
            correctAnswer: "An event or fact observed (referring to the rise in sea level/greenhouse effect)."
        },
        {
            id: "b8-l19-reading-q9",
            type: "multiple-choice",
            question: "For over a thousand years, how did the Dutch **wrest** control of the land from the sea?",
            options: [
                "By building a system of dikes (great walls of earth and rock).",
                "By praying.",
                "By using magic.",
                "By asking politely."
            ],
            correctAnswer: "By building a system of dikes (great walls of earth and rock)."
        },
        {
            id: "b8-l19-reading-q10",
            type: "multiple-choice",
            question: "How does the passage suggest that the Dutch have worked tirelessly?",
            options: [
                "They worked indefatigably for over a thousand years.",
                "They never slept.",
                "They hired other people.",
                "They gave up."
            ],
            correctAnswer: "They worked indefatigably for over a thousand years."
        },
        {
            id: "b8-l19-reading-q11",
            type: "multiple-choice",
            question: "How effective were the dikes against the freak storm of 1953?",
            options: [
                "Not effective; many gave way and the sea engulfed the land.",
                "Very effective.",
                "They held up perfectly.",
                "They disappeared."
            ],
            correctAnswer: "Not effective; many gave way and the sea engulfed the land."
        },
        {
            id: "b8-l19-reading-q12",
            type: "multiple-choice",
            question: "What happened to Dutch farms when the dikes gave way?",
            options: [
                "The sea engulfed the land, flooding 450,000 acres.",
                "They flourished.",
                "They turned into forests.",
                "They burned down."
            ],
            correctAnswer: "The sea engulfed the land, flooding 450,000 acres."
        },
        {
            id: "b8-l19-reading-q13",
            type: "multiple-choice",
            question: "What is the meaning of **havoc** as it is used in the passage?",
            options: [
                "Widespread destruction or devastation (created by the 'greenhouse effect' storm).",
                "Confusion.",
                "Happiness.",
                "Order."
            ],
            correctAnswer: "Widespread destruction or devastation (created by the 'greenhouse effect' storm)."
        },
        {
            id: "b8-l19-reading-q14",
            type: "multiple-choice",
            question: "Why did it become important for European countries to reduce their farmland?",
            options: [
                "There was a glut of agricultural products.",
                "To plant forests.",
                "To build cities.",
                "To save water."
            ],
            correctAnswer: "There was a glut of agricultural products."
        },
        {
            id: "b8-l19-reading-q15",
            type: "multiple-choice",
            question: "Which group made Holland take some farmland out of production?",
            options: [
                "The European Community (which Holland belongs to).",
                "The United Nations.",
                "The Dutch government.",
                "The farmers."
            ],
            correctAnswer: "The European Community (which Holland belongs to)."
        }
    ]
};

export const b8_l19_facts: Story = {
    id: "b8-l19-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   **Phenomenon** is a singular noun; its plural form is *phenomena*. It comes from the Greek *phainein*, "to show" or "to appear."

*   The singular noun **havoc** has no plural form. It comes from the Old French *havot*, which was a signal to soldiers to seize as much plunder as possible. (The expression "Cry 'Havoc!' and let slip the dogs of war," from Shakespeare's *Julius Caesar*, suggests that the victors are free to smash and destroy.) *Havoc* appears in the phrase *play havoc with* (or *wreak havoc on*), as in "The storm played havoc with (or wreaked havoc on) the communications system."
`,
    wordsIncluded: ["phenomenon", "havoc"]
};
