import { DayLesson, BookTheme, EssayEvidence } from "./types";

export const mita_lessons: DayLesson[] = [
    // Lesson 1: The Boy Who Harnessed the Wind
    {
        id: "mita-1",
        dayNumber: 1,
        subtitle: "The Boy Who Harnessed the Wind: Innovation & Resilience",
        bookTitle: "The Boy Who Harnessed the Wind",
        theme: "Innovation & Resilience",
        storySummary: "In Malawi, a drought destroyed the maize crop. William saw that without electricity, his village was trapped. He decided to build a windmill using library books.",
        essayEvidence: {
            fact: "William was expelled from school for not paying the $80 fee, yet he self-educated using a library.",
            essayTopics: ["Education", "Poverty"]
        },
        words: [
            { id: "mita-l1-w1", category: "Books", word: "Scarcity", definition: "The state of being scarce or in short supply; shortage.", exampleSentence: "The scarcity of food led to the famine in the village.", pronunciation: "/ˈskeərsɪti/", imageEmoji: "📉" },
            { id: "mita-l1-w2", category: "Books", word: "Ingenuity", definition: "The quality of being clever, original, and inventive.", exampleSentence: "William showed ingenuity by using trash to build a generator.", pronunciation: "/ˌɪndʒəˈnuːəti/", imageEmoji: "💡" },
            { id: "mita-l1-w3", category: "Books", word: "Dynamo", definition: "A machine for converting mechanical energy into electrical energy; a generator.", exampleSentence: "The dynamo allowed him to convert wind into electricity.", pronunciation: "/ˈdaɪnəmoʊ/", imageEmoji: "⚡" },
            { id: "mita-l1-w4", category: "Books", word: "Famine", definition: "Extreme scarcity of food.", exampleSentence: "The famine forced families to eat only one meal a day.", pronunciation: "/ˈfæmɪn/", imageEmoji: "🍽️" }
        ],
        stories: []
    },
    // Lesson 2: The Scrapyard
    {
        id: "mita-2",
        dayNumber: 2,
        subtitle: "The Boy Who Harnessed the Wind: The Scrapyard",
        bookTitle: "The Boy Who Harnessed the Wind",
        theme: "Innovation & Resilience",
        storySummary: "William enters the scrapyard. While others see garbage, he sees opportunity. He finds a tractor fan and a shock absorber to build his machine.",
        essayEvidence: {
            fact: "William built his windmill entirely out of recycled waste (old bicycle, PVC pipe, tractor fan) because he had no money for new parts.",
            essayTopics: ["Recycling", "Innovation"]
        },
        words: [
            { id: "mita-l2-w1", category: "Books", word: "Resourceful", definition: "Having the ability to find quick and clever ways to overcome difficulties.", exampleSentence: "He had to be resourceful to find parts in the junk pile.", pronunciation: "/rɪˈzɔːrsfl/", imageEmoji: "🛠️" },
            { id: "mita-l2-w2", category: "Books", word: "Component", definition: "A part or element of a larger whole.", exampleSentence: "The tractor fan was the most important component of the windmill.", pronunciation: "/kəmˈpoʊnənt/", imageEmoji: "🧩" },
            { id: "mita-l2-w3", category: "Books", word: "Turbine", definition: "A machine for producing continuous power in which a wheel or rotor is made to revolve.", exampleSentence: "He needed to build a turbine to catch the wind.", pronunciation: "/ˈtɜːrbaɪn/", imageEmoji: "🌬️" },
            { id: "mita-l2-w4", category: "Books", word: "Dissipate", definition: "Disappear or cause to disappear.", exampleSentence: "He used a shock absorber to help dissipate the energy.", pronunciation: "/ˈdɪsɪpeɪt/", imageEmoji: "🌫️" }
        ],
        stories: []
    },
    // Lesson 3: The Doubt
    {
        id: "mita-3",
        dayNumber: 3,
        subtitle: "The Boy Who Harnessed the Wind: The Doubt",
        bookTitle: "The Boy Who Harnessed the Wind",
        theme: "Innovation & Resilience",
        storySummary: "The villagers think William has gone mad. They mock him as he works. He has to overcome the social pressure and fear of failure to keep building.",
        essayEvidence: {
            fact: "The villagers called William 'misala' (crazy) and mocked him, proving that innovators often face social rejection before success.",
            essayTopics: ["Peer Pressure", "Determination"]
        },
        words: [
            { id: "mita-l3-w1", category: "Books", word: "Skepticism", definition: "A skeptical attitude; doubt as to the truth of something.", exampleSentence: "He faced deep skepticism from the villagers who didn't understand science.", pronunciation: "/ˈskeptɪsɪzm/", imageEmoji: "🤨" },
            { id: "mita-l3-w2", category: "Books", word: "Persevere", definition: "Continue in a course of action even in the face of difficulty or with little or no prospect of success.", exampleSentence: "William chose to persevere despite being laughed at.", pronunciation: "/ˌpɜːrsəˈvɪr/", imageEmoji: "🧗" },
            { id: "mita-l3-w3", category: "Books", word: "Misala", definition: "A word meaning 'crazy' in the local language (Chichewa).", exampleSentence: "In his local language, they called him 'misala', meaning crazy.", pronunciation: "/miˈsɑːlə/", imageEmoji: "🤪" },
            { id: "mita-l3-w4", category: "Books", word: "Conductor", definition: "A material or device that conducts or transmits heat, electricity, or sound.", exampleSentence: "He learned that metal is a good conductor of electricity.", pronunciation: "/kənˈdʌktər/", imageEmoji: "🔌" }
        ],
        stories: [
            {
                id: "mita-l3-ws",
                title: "Word Study: Analogies",
                type: "exercise",
                content: "**Analogies** are like word puzzles! 🧩\nThey test how pairs of words are related.\n\n**Example:**\n**Hunger is to Famine as _____ is to Drought?**\n\nThink: Hunger is caused by Famine. What is caused by Drought?",
                wordsIncluded: ["mita-l3-w1", "mita-l3-w2"],
                questions: [
                    { id: "mita-l3-q1", type: "multiple-choice", question: "Hunger is to Famine as _____ is to Drought?", options: ["Thirst", "Water", "Rain", "Dry"], correctAnswer: "Thirst" },
                    { id: "mita-l3-q2", type: "multiple-choice", question: "Dynamo is to Electricity as Pump is to _____?", options: ["Water", "Gas", "Wind", "Energy"], correctAnswer: "Water" },
                    { id: "mita-l3-q3", type: "multiple-choice", question: "William : Library :: Scientist : _____?", options: ["Laboratory", "School", "Field", "Space"], correctAnswer: "Laboratory" }
                ]
            }
        ]
    },
    // Lesson 4: The Light
    {
        id: "mita-4",
        dayNumber: 4,
        subtitle: "The Boy Who Harnessed the Wind: The Light",
        bookTitle: "The Boy Who Harnessed the Wind",
        theme: "Innovation & Resilience",
        storySummary: "The moment of truth. William hooks the windmill to a small lightbulb. As the blades spin, the light flickers on. The villagers' mockery turns to wonder.",
        essayEvidence: {
            fact: "When the light turned on, the same villagers who mocked him began to line up to charge their phones, showing how success changes public opinion.",
            essayTopics: ["Success", "Technology Adoption"]
        },
        words: [
            { id: "mita-l4-w1", category: "Books", word: "Vindication", definition: "Proof that someone or something is right, reasonable, or justified.", exampleSentence: "The light turning on was his moment of total vindication.", pronunciation: "/ˌvɪndɪˈkeɪʃn/", imageEmoji: "✅" },
            { id: "mita-l4-w2", category: "Books", word: "Potential", definition: "Latent qualities or abilities that may be developed and lead to future success or usefulness.", exampleSentence: "The villagers finally saw the potential of his invention.", pronunciation: "/pəˈtenʃl/", imageEmoji: "🚀" },
            { id: "mita-l4-w3", category: "Books", word: "Alternating Current", definition: "An electric current that reverses its direction many times a second at regular intervals.", exampleSentence: "He had to learn the difference between direct current and alternating current.", pronunciation: "/ˈɔːltərneɪtɪŋ ˈkɜːrənt/", imageEmoji: "〰️" },
            { id: "mita-l4-w4", category: "Books", word: "Transmission", definition: "The action or process of transmitting something or the state of being transmitted.", exampleSentence: "He dreamed of the transmission of power to the whole village.", pronunciation: "/trænzˈmɪʃn/", imageEmoji: "📡" }
        ],
        stories: []
    },
    // Lesson 5: The Omnivore's Dilemma
    {
        id: "mita-5",
        dayNumber: 5,
        subtitle: "The Omnivore's Dilemma: Industrial Corn",
        bookTitle: "The Omnivore’s Dilemma",
        theme: "Environment & Ethics",
        storySummary: "This section explores 'Industrial Corn'. It explains how corn has taken over the American diet, feeding cows, cars, and humans.",
        essayEvidence: {
            fact: "Corn is found in 1/4 of all supermarket items, and growing it requires massive amounts of oil-based fertilizer.",
            essayTopics: ["Sustainability", "Climate Change"]
        },
        words: [
            { id: "mita-l5-w1", category: "Books", word: "Sustainable", definition: "Able to be maintained at a certain rate or level.", exampleSentence: "The current method of industrial farming is not sustainable.", pronunciation: "/səˈsteɪnəbl/", imageEmoji: "♻️" },
            { id: "mita-l5-w2", category: "Books", word: "Monoculture", definition: "The cultivation of a single crop in a given area.", exampleSentence: "Growing only corn in a monoculture destroys the soil quality.", pronunciation: "/ˈmɒnəˌkʌltʃər/", imageEmoji: "🌽" },
            { id: "mita-l5-w3", category: "Books", word: "Processed", definition: "Changed by mechanical or chemical operations.", exampleSentence: "Highly processed foods often contain hidden corn ingredients.", pronunciation: "/ˈprɒsest/", imageEmoji: "🏭" },
            { id: "mita-l5-w4", category: "Books", word: "Efficiency", definition: "Achieving maximum productivity with minimum wasted effort.", exampleSentence: "Industrial farms prioritize efficiency over taste.", pronunciation: "/ɪˈfɪʃnsi/", imageEmoji: "⏱️" }
        ],
        stories: []
    },
    // Lessons 6-8: Placeholders
    ...[6, 7, 8].map(i => ({
        id: `mita-${i}`,
        dayNumber: i,
        subtitle: "The Omnivore's Dilemma: Reading",
        words: [],
        stories: []
    })),
    // Lesson 9: I Am Malala
    {
        id: "mita-9",
        dayNumber: 9,
        subtitle: "I Am Malala: Education Under Attack",
        bookTitle: "I Am Malala",
        theme: "Human Rights & Education",
        storySummary: "Malala Yousafzai grows up in Swat Valley, Pakistan, where she loves school. However, the Taliban begins to take control and changes the laws.",
        essayEvidence: {
            fact: "The Taliban banned girls from going to school and destroyed over 400 schools in the area.",
            essayTopics: ["Gender Equality", "Censorship"]
        },
        words: [
            { id: "mita-l9-w1", category: "Books", word: "Deprive", definition: "Deny (a person or place) the possession or use of something.", exampleSentence: "The new laws tried to deprive girls of their right to learn.", pronunciation: "/dɪˈpraɪv/", imageEmoji: "⛔" },
            { id: "mita-l9-w2", category: "Books", word: "Advocate", definition: "A person who publicly supports or recommends a particular cause or policy.", exampleSentence: "Malala became an advocate for education despite the danger.", pronunciation: "/ˈædvəkət/", imageEmoji: "🗣️" },
            { id: "mita-l9-w3", category: "Books", word: "Fundamentalism", definition: "Strict, literal interpretation of scripture.", exampleSentence: "The rise of fundamentalism led to new strict rules.", pronunciation: "/ˌfʌndəˈmentəlɪzm/", imageEmoji: "📜" },
            { id: "mita-l9-w4", category: "Books", word: "Censorship", definition: "The suppression of speech, public communication, or other information.", exampleSentence: "Censorship prevented the people from getting outside news.", pronunciation: "/ˈsensərʃɪp/", imageEmoji: "🔇" }
        ],
        stories: []
    },
    // Lessons 10-12: Placeholders
    ...[10, 11, 12].map(i => ({
        id: `mita-${i}`,
        dayNumber: i,
        subtitle: "I Am Malala: Reading",
        words: [],
        stories: []
    })),
    // Lesson 13: How We Got to Now
    {
        id: "mita-13",
        dayNumber: 13,
        subtitle: "How We Got to Now: Glass",
        bookTitle: "How We Got to Now",
        theme: "Tech History & Connections",
        storySummary: "The story of 'Glass'. It traces how the fall of Constantinople sent glassmakers to Venice, eventually leading to lenses, spectacles, and telescopes.",
        essayEvidence: {
            fact: "The invention of spectacles allowed people to read later in life, doubling the collective knowledge of humanity.",
            essayTopics: ["Innovation", "Unintended Consequences"]
        },
        words: [
            { id: "mita-l13-w1", category: "Books", word: "Revolutionize", definition: "Change (something) radically or fundamentally.", exampleSentence: "The printing press helped revolutionize how information spread.", pronunciation: "/ˌrevəˈluːʃənaɪz/", imageEmoji: "🔄" },
            { id: "mita-l13-w2", category: "Books", word: "Link", definition: "A relationship or connection between two or more people or things.", exampleSentence: "There is a direct link between clear glass and the discovery of cells.", pronunciation: "/lɪŋk/", imageEmoji: "🔗" },
            { id: "mita-l13-w3", category: "Books", word: "Silicon", definition: "A nonmetal with semiconducting properties, used in making electronic circuits.", exampleSentence: "Fiberglass and silicon chips are modern descendants of ancient glass.", pronunciation: "/ˈsɪlɪkən/", imageEmoji: "💻" },
            { id: "mita-l13-w4", category: "Books", word: "Microscope", definition: "An optical instrument used for viewing very small objects.", exampleSentence: "The microscope revealed a hidden world of bacteria.", pronunciation: "/ˈmaɪkrəskoʊp/", imageEmoji: "🔬" }
        ],
        stories: []
    },
    // Lessons 14-16: Placeholders
    ...[14, 15, 16].map(i => ({
        id: `mita-${i}`,
        dayNumber: i,
        subtitle: "How We Got to Now: Reading",
        words: [],
        stories: []
    })),
    // Lesson 17: Refugee
    {
        id: "mita-17",
        dayNumber: 17,
        subtitle: "Refugee: Josef's Story",
        bookTitle: "Refugee",
        theme: "Global Conflict & Empathy",
        storySummary: "Josef is a Jewish boy in 1930s Germany facing the threat of concentration camps. His family attempts to flee to Cuba on a ship.",
        essayEvidence: {
            fact: "Josef's father was broken psychologically by his time in a concentration camp, showing the long-term scars of persecution.",
            essayTopics: ["War", "Mental Health"]
        },
        words: [
            { id: "mita-l17-w1", category: "Books", word: "Persecution", definition: "Hostility and ill-treatment, especially because of race or beliefs.", exampleSentence: "They fled the country to escape religious persecution.", pronunciation: "/ˌpɜːrsɪˈkjuːʃn/", imageEmoji: "🏃" },
            { id: "mita-l17-w2", category: "Books", word: "Desperation", definition: "A state of despair, typically resulting in extreme behavior.", exampleSentence: "Out of desperation, the family bought tickets to anywhere.", pronunciation: "/ˌdespəˈreɪʃn/", imageEmoji: "😰" },
            { id: "mita-l17-w3", category: "Books", word: "Asylum", definition: "The protection granted by a nation to someone who has left their native country as a political refugee.", exampleSentence: "The passengers hoped to be granted asylum in Cuba.", pronunciation: "/əˈsaɪləm/", imageEmoji: "🏛️" },
            { id: "mita-l17-w4", category: "Books", word: "Displacement", definition: "The action of moving something from its place or position.", exampleSentence: "War causes the displacement of millions of innocent families.", pronunciation: "/dɪsˈpleɪsmənt/", imageEmoji: "📦" }
        ],
        stories: []
    },
    // Lessons 18-20: Placeholders
    ...[18, 19, 20].map(i => ({
        id: `mita-${i}`,
        dayNumber: i,
        subtitle: "Refugee: Reading",
        words: [],
        stories: []
    }))
];
