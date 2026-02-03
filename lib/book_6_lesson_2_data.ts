import { Story, VocabularyWord } from "./types";

export const b6_l2_words: VocabularyWord[] = [
    {
        id: "arrogant",
        word: "arrogant",
        definition: "(adj.) Showing too much pride in oneself. arrogance (n.) A feeling of too much pride in oneself.",
        exampleSentence: "You were arrogant to claim that you knew all the answers.",
        imageEmoji: "😤",
        category: "Grade 6",
        synonyms: ["haughty", "conceited", "proud"],
        antonyms: ["humble", "modest"]
    },
    {
        id: "boycott",
        word: "boycott",
        definition: "(v.) To join others in refusing to support an organization. (n.) The act of boycotting.",
        exampleSentence: "Customers plan to boycott that store if it continues to discriminate.",
        imageEmoji: "🚫",
        category: "Grade 6",
        synonyms: ["refuse", "reject", "ban"],
        antonyms: ["support", "patronize"]
    },
    {
        id: "campaign",
        word: "campaign",
        definition: "(n.) 1. A series of actions intended to accomplish a goal. 2. A series of military actions in a particular area. (v.) To take part in actions planned to accomplish a particular goal.",
        exampleSentence: "Picking up litter was the first step in the campaign to clean up the town center.",
        imageEmoji: "📢",
        category: "Grade 6",
        synonyms: ["crusade", "operation", "drive"],
        antonyms: []
    },
    {
        id: "ceremony",
        word: "ceremony",
        definition: "(n.) A formal event held in honor of a special occasion.",
        exampleSentence: "The bride and groom exchanged rings during the wedding ceremony.",
        imageEmoji: "🎎",
        category: "Grade 6",
        synonyms: ["ritual", "service", "observance"],
        antonyms: []
    },
    {
        id: "custody",
        word: "custody",
        definition: "(n.) 1. Control over and responsibility for care. 2. In the keeping of the police; in jail.",
        exampleSentence: "The stolen Picasso painting was returned to the custody of the Museum of Modern Art.",
        imageEmoji: "👮",
        category: "Grade 6",
        synonyms: ["care", "protection", "imprisonment"],
        antonyms: []
    },
    {
        id: "degrade",
        word: "degrade",
        definition: "(v.) To bring shame or disgrace upon. degrading (adj.) Causing shame or disgrace.",
        exampleSentence: "By lying to cover up his cheating, Sam degraded himself even more.",
        imageEmoji: "😔",
        category: "Grade 6",
        synonyms: ["shame", "disgrace", "humiliate"],
        antonyms: ["honor", "respect", "dignify"]
    },
    {
        id: "detain",
        word: "detain",
        definition: "(v.) To stop or hold; to keep from going on.",
        exampleSentence: "The hall monitor detained us until we could prove we had permission to leave the classroom.",
        imageEmoji: "🛑",
        category: "Grade 6",
        synonyms: ["hold", "keep", "delay"],
        antonyms: ["release", "free"]
    },
    {
        id: "extend",
        word: "extend",
        definition: "(v.) 1. To reach out. 2. To offer. 3. To make longer. 4. To stretch or spread outward from a certain point.",
        exampleSentence: "The conductor extended her arms as a signal to the orchestra to be ready.",
        imageEmoji: "📏",
        category: "Grade 6",
        synonyms: ["stretch", "expand", "offer"],
        antonyms: ["shorten", "withdraw"]
    },
    {
        id: "integrate",
        word: "integrate",
        definition: "(v.) To unite into a whole; especially to end the separation of people of different races. integration (n.) The act of uniting or bringing together, especially people of different races.",
        exampleSentence: "In 1948, President Truman integrated the armed forces of the United States.",
        imageEmoji: "🤝",
        category: "Grade 6",
        synonyms: ["unite", "mix", "combine"],
        antonyms: ["segregate", "separate"]
    },
    {
        id: "segregate",
        word: "segregate",
        definition: "(v.) To keep separate or apart. segregation (n.) The act of keeping separate or apart.",
        exampleSentence: "Ranchers segregate sick animals from the herd to prevent diseases from spreading.",
        imageEmoji: "💔",
        category: "Grade 6",
        synonyms: ["separate", "isolate", "divide"],
        antonyms: ["integrate", "mix"]
    },
    {
        id: "supreme",
        word: "supreme",
        definition: "(adj.) 1. The highest in rank or position. 2. Of the greatest importance.",
        exampleSentence: "The supreme commander was happy to retire after years of responsibility.",
        imageEmoji: "👑",
        category: "Grade 6",
        synonyms: ["highest", "greatest", "paramount"],
        antonyms: ["lowest", "least"]
    },
    {
        id: "triumph",
        word: "triumph",
        definition: "(n.) 1. A noteworthy success. 2. The joy winning brings. (v.) To win.",
        exampleSentence: "Helen Keller’s graduation from college was a triumph.",
        imageEmoji: "🏆",
        category: "Grade 6",
        synonyms: ["victory", "success", "win"],
        antonyms: ["defeat", "failure", "loss"]
    },
    {
        id: "vacate",
        word: "vacate",
        definition: "(v.) To make empty, as by leaving.",
        exampleSentence: "We will vacate the house at the end of June to let the painters work.",
        imageEmoji: "🚪",
        category: "Grade 6",
        synonyms: ["leave", "empty", "abandon"],
        antonyms: ["occupy", "inhabit"]
    },
    {
        id: "verdict",
        word: "verdict",
        definition: "(n.) 1. The decision reached at the end of a trial. 2. A judgment or opinion.",
        exampleSentence: "The jury found him innocent, and the crowd cheered the verdict.",
        imageEmoji: "⚖️",
        category: "Grade 6",
        synonyms: ["judgment", "decision", "ruling"],
        antonyms: []
    },
    {
        id: "violate",
        word: "violate",
        definition: "(v.) 1. To break, as a law or a promise. 2. To treat in an improper or disrespectful way. violation (n.) A breaking of or failing to keep something like a law or a promise.",
        exampleSentence: "The students were warned that anyone who violated the dress code would be sent home.",
        imageEmoji: "🚱",
        category: "Grade 6",
        synonyms: ["break", "breach", "disobey"],
        antonyms: ["obey", "observe", "respect"]
    }
];

export const b6_l2_story_1: Story = {
    id: "b6-l2-s1",
    title: "2A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, answer "correct", otherwise answer "incorrect".`,
    wordsIncluded: b6_l2_words.map(w => w.id),
    questions: [
        {
            id: "2a-q1",
            type: "multiple-choice",
            question: "1. (a) The woman claims to be able to **verdict** the future.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "2a-q2",
            type: "multiple-choice",
            question: "1. (b) The jury came back after an hour with a **verdict** of \"not guilty.\"",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "2a-q3",
            type: "multiple-choice",
            question: "1. (c) The **verdict** on the new restaurant is that it is amazing.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "2a-q4",
            type: "multiple-choice",
            question: "1. (d) The **verdict** becomes soft as soon as you pop it.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "2a-q5",
            type: "multiple-choice",
            question: "2. (a) Selma **triumphed** in the 200- and 400-meter events.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "2a-q6",
            type: "multiple-choice",
            question: "2. (b) We cheered for the **triumphant** team in the parade.",
            options: ["correct", "incorrect"],
            correctAnswer: "correct"
        },
        {
            id: "2a-q7",
            type: "multiple-choice",
            question: "2. (c) I was so sad, I covered my **triumphant** face with my hands.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        },
        {
            id: "2a-q8",
            type: "multiple-choice",
            question: "2. (d) The dog sniffed the **triumph** and then walked away.",
            options: ["correct", "incorrect"],
            correctAnswer: "incorrect"
        }
    ]
};

export const b6_l2_story_2: Story = {
    id: "b6-l2-s2",
    title: "2B Just the Right Word",
    type: "exercise",
    content: `Replace each phrase in bold with a single word (or form of the word) from the word list.`,
    wordsIncluded: b6_l2_words.map(w => w.id),
    questions: [
        {
            id: "2b-q1",
            type: "multiple-choice",
            question: "The students planned to **join together in refusing to buy** products from the company.",
            options: ["boycott", "campaign", "violate", "detain"],
            correctAnswer: "boycott"
        },
        {
            id: "2b-q2",
            type: "multiple-choice",
            question: "The **decision reached by the jury** was announced after two hours of deliberation.",
            options: ["verdict", "ceremony", "custody", "triumph"],
            correctAnswer: "verdict"
        },
        {
            id: "2b-q3",
            type: "multiple-choice",
            question: "It is cruel to **bring shame upon** another person by mocking them.",
            options: ["degrade", "segregate", "integrate", "extend"],
            correctAnswer: "degrade"
        },
        {
            id: "2b-q4",
            type: "multiple-choice",
            question: "The police took the suspect into **control and responsibility**.",
            options: ["custody", "campaign", "verdict", "ceremony"],
            correctAnswer: "custody"
        },
        {
            id: "2b-q5",
            type: "multiple-choice",
            question: "We must not **break the promise** we made to our friends.",
            options: ["violate", "vacate", "detain", "segregate"],
            correctAnswer: "violate"
        },
        {
            id: "2b-q6",
            type: "multiple-choice",
            question: "The general planned a new **series of military actions** to win the war.",
            options: ["campaign", "ceremony", "triumph", "verdict"],
            correctAnswer: "campaign"
        },
        {
            id: "2b-q7",
            type: "multiple-choice",
            question: "Please **make empty** the room so we can clean the carpets.",
            options: ["vacate", "integrate", "extend", "violate"],
            correctAnswer: "vacate"
        },
        {
            id: "2b-q8",
            type: "multiple-choice",
            question: "The custom officer **kept from going on** the traveler at the border.",
            options: ["detained", "extended", "degraded", "boycotted"],
            correctAnswer: "detained"
        },
        {
            id: "2b-q9",
            type: "multiple-choice",
            question: "The **formal event** to honor the winners will be held tonight.",
            options: ["ceremony", "campaign", "verdict", "custody"],
            correctAnswer: "ceremony"
        },
        {
            id: "2b-q10",
            type: "multiple-choice",
            question: "Winning the championship was a huge **noteworthy success** for the team.",
            options: ["triumph", "disaster", "violation", "campaign"],
            correctAnswer: "triumph"
        },
        {
            id: "2b-q11",
            type: "multiple-choice",
            question: "She felt it was **showing too much pride** to brag about her grades.",
            options: ["arrogant", "supreme", "degrading", "triumphant"],
            correctAnswer: "arrogant"
        },
        {
            id: "2b-q12",
            type: "multiple-choice",
            question: "The **highest in rank** court in the land will hear the case.",
            options: ["supreme", "arrogant", "triumphant", "extended"],
            correctAnswer: "supreme"
        },
        {
            id: "2b-q13",
            type: "multiple-choice",
            question: "The school decided to **end the separation of** the two classes for recess.",
            options: ["integrate", "segregate", "vacate", "detain"],
            correctAnswer: "integrate"
        },
        {
            id: "2b-q14",
            type: "multiple-choice",
            question: "It is wrong to **keep separate** people based on their appearance.",
            options: ["segregate", "integrate", "violate", "extend"],
            correctAnswer: "segregate"
        },
        {
            id: "2b-q15",
            type: "multiple-choice",
            question: "I will **offer** my hand in friendship.",
            options: ["extend", "vacate", "detain", "degrade"],
            correctAnswer: "extend"
        }
    ]
};

export const b6_l2_story_3: Story = {
    id: "b6-l2-s3",
    title: "2C Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l2_words.map(w => w.id),
    questions: [
        {
            id: "2c-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *against and refuse*?",
            options: ["(a) oppose", "(b) extend", "(c) boycott", "(d) vacate"],
            correctAnswers: ["(a) oppose", "(c) boycott"] // oppose isn't in list but fits meaning, wait, only List words? Or general knowledge? Instructions: "correct answer". Boycott is list word. Oppose is synonym.
            // book usually tests knowledge of synonyms too. "boycott: to join others in refusing to support".
        },
        {
            id: "2c-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *jail*?",
            options: ["(a) ceremony", "(b) custody", "(c) horizon", "(d) exhibit"],
            correctAnswers: ["(b) custody"]
        },
        {
            id: "2c-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *shame*?",
            options: ["(a) depend", "(b) degrade", "(c) detain", "(d) descend"],
            correctAnswers: ["(b) degrade"]
        },
        {
            id: "2c-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *bigger*?",
            options: ["(a) integrate", "(b) extend", "(c) declare", "(d) expand"],
            correctAnswers: ["(b) extend", "(d) expand"]
        },
        {
            id: "2c-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *bring together*?",
            options: ["(a) combine", "(b) segregate", "(c) integrate", "(d) unveil"],
            correctAnswers: ["(a) combine", "(c) integrate"]
        }
    ]
};

export const b6_l2_story_passage: Story = {
    id: "b6-l2-passage",
    title: "Reading Passage: The Mother of the Civil Rights Movement",
    type: "non-fiction",
    content: `
Many people believe that the Civil Rights Movement in America began on December 1, 1955. On that date, an African American woman named Rosa Parks refused to **vacate** her seat on a Montgomery, Alabama, bus so that a white person could sit there. At the time, local laws unjustly allowed African Americans to be treated as second-class citizens. Many hotels, restaurants, and even drinking fountains throughout the South were for whites only. And in Montgomery, the state capital of Alabama, as elsewhere throughout the South, city buses were **segregated**. The front ten seats were set aside for whites; African American passengers had to ride in the back.

Rosa Parks found it **degrading** to have to sit in the back of the bus. For that reason, she usually walked home from her job in a Montgomery department store. But on that winter evening, Parks was feeling tired and decided to take the bus home. Soon all ten seats in the front of the bus were occupied by white people. When another white man got on, the driver told Parks and three others to give up their seats so that he could **extend** the "whites only" section. The three others gave up their seats, but Parks refused to move. The driver called the police, who took her into **custody**.

Parks was **detained** at the police station for three hours. When she was released, she was ordered to appear in court four days later. There she was found guilty and fined ten dollars. Her lawyers appealed the **verdict**, and the case slowly began making its way through the courts.

Meanwhile, the battle for civil rights was also being fought in the streets of Montgomery. African American people **boycotted** the city's buses. This resulted in heavy losses to the company. An African American minister from Atlanta, Georgia, Dr. Martin Luther King Jr., found himself suddenly thrust into a position of leadership. Many white citizens felt that the boycotters were being **arrogant** in demanding equal treatment under the law. There were numerous outbreaks of violence. However, Dr. King preached a message of nonviolence. He urged his supporters never to use force even if they were attacked. The country was moved by his eloquence; they could no longer ignore the racial injustice that had been previously taken for granted.

The **campaign** lasted 381 days. It ended on December 20, 1956, when the United States **Supreme** Court made a historic ruling. The court agreed with a lower court ruling that the Montgomery law **violated** the United States Constitution. The nation's highest court ordered the bus company to **integrate** its buses. In doing so, it sent a powerful message: African American people could no longer be treated as second-class citizens.

It was clear that the movement sparked by Rosa Parks had **triumphed** when Congress passed the 1964 Civil Rights Act. This law opened up public housing, schools, and employment to people of all races. In 1989, Parks was invited to attend **ceremonies** at the White House marking the twenty-fifth anniversary of its passage. In 2002, her former home in Montgomery was placed on the National Register of Historic Places. Rosa Parks died in 2005, but she will always be remembered as the mother of the Civil Rights Movement. Her hundredth birthday would have been February 4, 2013. To mark the date, the United States Postal Service created a Rosa Parks stamp, and later that month President Barack Obama unveiled a statue of her in the U.S. Capitol building. It was one small way to apologize for what had happened nearly sixty years before.
    `,
    wordsIncluded: b6_l2_words.map(w => w.id),
    questions: [
        {
            id: "b6-l2-p-q1",
            type: "multiple-choice",
            question: "How do you think African Americans were affected by the bus **boycott**?",
            options: [
                "They probably walked more or carpooled, but it empowered them.",
                "They stopped going to work.",
                "They bought their own buses.",
                "They left the city."
            ],
            correctAnswer: "They probably walked more or carpooled, but it empowered them."
        },
        {
            id: "b6-l2-p-q2",
            type: "multiple-choice",
            question: "What is the meaning of **extend** as it is used in the passage?",
            options: [
                "It means to make the section larger.",
                "It means to reach out.",
                "It means to offer.",
                "It means to delay."
            ],
            correctAnswer: "It means to make the section larger."
        },
        {
            id: "b6-l2-p-q3",
            type: "multiple-choice",
            question: "Why did Rosa Parks get home late on December 1, 1955?",
            options: [
                "She was taken into custody by the police.",
                "She worked late.",
                "She missed the bus.",
                "She walked home."
            ],
            correctAnswer: "She was taken into custody by the police."
        },
        {
            id: "b6-l2-p-q4",
            type: "multiple-choice",
            question: "What is the meaning of **custody** as it is used in the passage?",
            options: [
                "It means in the keeping of the police.",
                "It means care and protection.",
                "It means ownership.",
                "It means a court order."
            ],
            correctAnswer: "It means in the keeping of the police."
        },
        {
            id: "b6-l2-p-q5",
            type: "multiple-choice",
            question: "What did the **Supreme** Court rule in 1956?",
            options: [
                "They ruled that the Montgomery law violated the Constitution and ordered the buses to integrate.",
                "They ruled against the boycott.",
                "They fined the bus company.",
                "They released Rosa Parks."
            ],
            correctAnswer: "They ruled that the Montgomery law violated the Constitution and ordered the buses to integrate."
        },
        {
            id: "b6-l2-p-q6",
            type: "multiple-choice",
            question: "How did **segregation** in the South affect African Americans?",
            options: [
                "It treated them as second-class citizens, separating them in public places.",
                "It gave them special privileges.",
                "It allowed them to sit anywhere.",
                "It had no effect."
            ],
            correctAnswer: "It treated them as second-class citizens, separating them in public places."
        },
        {
            id: "b6-l2-p-q7",
            type: "multiple-choice",
            question: "What is the meaning of **campaign** as it is used in the passage?",
            options: [
                "It refers to the series of actions (boycott) to achieve the goal of integration.",
                "It means a military operation.",
                "It means running for office.",
                "It means a nature walk."
            ],
            correctAnswer: "It refers to the series of actions (boycott) to achieve the goal of integration."
        },
        {
            id: "b6-l2-p-q8",
            type: "multiple-choice",
            question: "How did local laws throughout the South **degrade** African Americans?",
            options: [
                "By treating them as inferior and separating them.",
                "By giving them too much power.",
                "By ignoring them completely.",
                "By raising taxes."
            ],
            correctAnswer: "By treating them as inferior and separating them."
        },
        {
            id: "b6-l2-p-q9",
            type: "multiple-choice",
            question: "Why did some whites believe that the African American protesters in Montgomery were behaving **arrogantly**?",
            options: [
                "They thought demanding equal treatment was showing too much pride.",
                "They thought they were being too loud.",
                "They thought they were being violent.",
                "They thought they were disorganized."
            ],
            correctAnswer: "They thought demanding equal treatment was showing too much pride."
        },
        {
            id: "b6-l2-p-q10",
            type: "multiple-choice",
            question: "What was the **verdict** in Rosa Parks's first court case?",
            options: [
                "She was found guilty.",
                "She was found innocent.",
                "The case was dismissed.",
                "The jury couldn't decide."
            ],
            correctAnswer: "She was found guilty."
        },
        {
            id: "b6-l2-p-q11",
            type: "multiple-choice",
            question: "What was the result of the **integration** of Montgomery's buses?",
            options: [
                "African American people could sit anywhere; the 'whites only' section was gone.",
                "The buses stopped running.",
                "More sections were added.",
                "Prices went up."
            ],
            correctAnswer: "African American people could sit anywhere; the 'whites only' section was gone."
        },
        {
            id: "b6-l2-p-q12",
            type: "multiple-choice",
            question: "What is the meaning of **triumph** as it is used in the passage?",
            options: [
                "It means a noteworthy success (the success of the movement).",
                "It means a parade.",
                "It means a battle.",
                "It means a tragedy."
            ],
            correctAnswer: "It means a noteworthy success (the success of the movement)."
        },
        {
            id: "b6-l2-p-q13",
            type: "multiple-choice",
            question: "What did those sitting next to Rosa Parks on December 1, 1955, do when they were told to move?",
            options: [
                "They gave up their seats.",
                "They refused to move.",
                "They argued with the driver.",
                "They left the bus."
            ],
            correctAnswer: "They gave up their seats."
        },
        {
            id: "b6-l2-p-q14",
            type: "multiple-choice",
            question: "What is one thing you might do if called upon to organize a **ceremony** honoring Rosa Parks?",
            options: [
                "Unveil a statue.",
                "Close the schools.",
                "Stop the buses.",
                "Write a book."
            ],
            correctAnswer: "Unveil a statue."
        },
        {
            id: "b6-l2-p-q15",
            type: "multiple-choice",
            question: "What is the meaning of **violated** as it is used in the passage?",
            options: [
                "It means broke (the law/Constitution).",
                "It means treated with disrespect.",
                "It means interrupted.",
                "It means destroyed."
            ],
            correctAnswer: "It means broke (the law/Constitution)."
        }
    ]
};

export const b6_l2_story_facts: Story = {
    id: "b6-l2-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* **Captain Charles Boycott** ran the Irish estates of the Earl of Erne in the 1880s, a time of great **poverty** in Ireland. He refused to lower rents and threw those who couldn't afford to pay out of their homes. In an attempt to force him to change his harsh ways, the people of County Mayo banded together and refused to have any dealings with him. Servants would not work in his house, and shopkeepers would not supply him with goods. In a very short time the captain's name had entered the English language. To **boycott** someone or something is to join with others in refusing to have any dealings with that person or organization. The word soon spread to other languages and has the same meaning in French, German, Dutch, and Russian.

* The word **campaign** entered the English language from Latin by way of the French. The Latin word for field is *campus*. Soldiers on active duty are sometimes said to be "in the field"; thus, a series of military actions in a particular area came to be called a *campaign*. The meaning of the word has been expanded so that it no longer refers only to a military course of action. We now have voter registration *campaigns*, anti-drug *campaigns*, and *campaigns* to clean up our city streets and parks.

* The Latin word *integer* means "complete" or "whole," and whole numbers such as 1, 2, 3, and 4 are known as *integers*. The word **integrate** is formed from this Latin word; to be **integrated** is to be made whole or complete.

* The Latin word for a herd or flock is *grex* or *greg*. The word **segregate** is formed by combining this root with the Latin prefix *sed-* or *se-*, which means "apart from." To **segregate** a group is to keep it apart from the rest of the flock.

* A **verdict** is a decision reached at the end of a trial. The person who announces the *verdict* must speak the truth, as the word itself suggests. It comes from the Latin *dicere*, "to speak," and the Latin *verus*, "true."
    `,
    wordsIncluded: ["boycott", "campaign", "integrate", "segregate", "verdict"],
    questions: []
};
