
import { VocabularyWord, Story, Question } from "./types";

export const b8_l20_words: VocabularyWord[] = [
    {
        id: "alienate",
        word: "alienate",
        pronunciation: "/ˈeɪliəneɪt/",
        definition: "1. To cause to feel unfriendly where friendliness once existed. 2. To cause to feel alone and cut off from.",
        exampleSentence: "Be careful not to alienate voters, because we need their support.",
        imageEmoji: "😒",
        category: "Grade 8"
    },
    {
        id: "fervent",
        word: "fervent",
        pronunciation: "/ˈfɜːrvənt/",
        definition: "Having or showing great warmth or deep feeling; intensely eager.",
        exampleSentence: "Looking meaningfully at the jury, the lawyer made a fervent plea for his client's life.",
        imageEmoji: "🔥",
        category: "Grade 8"
    },
    {
        id: "forbearance",
        word: "forbearance",
        pronunciation: "/fɔːrˈberəns/",
        definition: "A showing of self-control or patience.",
        exampleSentence: "With unusual forbearance, the principal asked the unruly student to explain the reason for his vandalism.",
        imageEmoji: "🧘",
        category: "Grade 8"
    },
    {
        id: "gullible",
        word: "gullible",
        pronunciation: "/ˈɡʌləbl/",
        definition: "Easily tricked or cheated; too trusting.",
        exampleSentence: "I was gullible enough to believe him when he said he would be on time.",
        imageEmoji: "😲",
        category: "Grade 8"
    },
    {
        id: "hindrance",
        word: "hindrance",
        pronunciation: "/ˈhɪndrəns/",
        definition: "Any person or thing that is an obstacle.",
        exampleSentence: "Heavy traffic on the expressway is always a hindrance to my getting to school on time.",
        imageEmoji: "🚧",
        category: "Grade 8"
    },
    {
        id: "inflammatory",
        word: "inflammatory",
        pronunciation: "/ɪnˈflæmətɔːri/",
        definition: "Causing anger or trouble.",
        exampleSentence: "Even though the defendant's rhetoric was inflammatory, the Supreme Court upheld his right to freedom of speech.",
        imageEmoji: "😡",
        category: "Grade 8"
    },
    {
        id: "ordain",
        word: "ordain",
        pronunciation: "/ɔːrˈdeɪn/",
        definition: "1. To order or prearrange. 2. To install as a minister, priest, or rabbi, often in a special ceremony.",
        exampleSentence: "The U.S. Constitution ordains three separate branches of government: the executive, the legislative, and the judicial.",
        imageEmoji: "📜",
        category: "Grade 8"
    },
    {
        id: "ovation",
        word: "ovation",
        pronunciation: "/oʊˈveɪʃn/",
        definition: "An enthusiastic reception; long and loud applause.",
        exampleSentence: "When the pianist stepped onto the stage, the audience rose with a spontaneous ovation.",
        imageEmoji: "👏",
        category: "Grade 8"
    },
    {
        id: "overt",
        word: "overt",
        pronunciation: "/oʊˈvɜːrt/",
        definition: "Not hidden; public.",
        exampleSentence: "After months of making small hints about my clothes, my older sister finally made an overt offer to buy me a new spring wardrobe.",
        imageEmoji: "🔓",
        category: "Grade 8"
    },
    {
        id: "recant",
        word: "recant",
        pronunciation: "/rɪˈkænt/",
        definition: "To take back an opinion or statement; to confess to being wrong.",
        exampleSentence: "After he talked to a lawyer, the young man recanted his confession and pleaded 'not guilty'.",
        imageEmoji: "🔙",
        category: "Grade 8"
    },
    {
        id: "rejoinder",
        word: "rejoinder",
        pronunciation: "/rɪˈdʒɔɪndər/",
        definition: "A reply to what has been said.",
        exampleSentence: "Uncle Paco was famous in our family for his funny, sharp rejoinders.",
        imageEmoji: "💬",
        category: "Grade 8"
    },
    {
        id: "reproach",
        word: "reproach",
        pronunciation: "/rɪˈproʊtʃ/",
        definition: "1. To find fault with; to blame. 2. Blame, disgrace, or discredit.",
        exampleSentence: "My mother reproached me for forgetting my little brother's birthday.",
        imageEmoji: "👉",
        category: "Grade 8"
    },
    {
        id: "servile",
        word: "servile",
        pronunciation: "/ˈsɜːrvl/",
        definition: "Excessively humble; overly willing to serve or to please.",
        exampleSentence: "Mari's servile attention to the teacher was her way of trying to get a good grade.",
        imageEmoji: "🙇",
        category: "Grade 8"
    },
    {
        id: "surpass",
        word: "surpass",
        pronunciation: "/sərˈpæs/",
        definition: "To exceed or go beyond.",
        exampleSentence: "The fact that Marta finished her first marathon surpassed her wildest dreams.",
        imageEmoji: "🚀",
        category: "Grade 8"
    },
    {
        id: "vilify",
        word: "vilify",
        pronunciation: "/ˈvɪlɪfaɪ/",
        definition: "To make vicious remarks about someone in a way that damages that person's character; to slander.",
        exampleSentence: "The candidates for governor agreed not to vilify each other in their commercials.",
        imageEmoji: "🗣️",
        category: "Grade 8"
    }
];

export const b8_l20_story_1: Story = {
    id: "b8-l20-s1",
    title: "20A Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, choose 'Correct'. If not, choose 'Incorrect'.",
    wordsIncluded: ["hindrance", "inflammatory", "ordain", "reproach", "recant", "rejoinder", "alienate", "fervent", "forbearance", "gullible"],
    questions: [
        {
            id: "b8-l20-q1",
            type: "multiple-choice",
            question: "Refusal to learn is the biggest **hindrance** to success in anything.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q2",
            type: "multiple-choice",
            question: "The senator's **inflammatory** accusations made national headlines.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q3",
            type: "multiple-choice",
            question: "Priests are **ordained** at a solemn ceremony attended by a bishop.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q4",
            type: "multiple-choice",
            question: "My best friend **reproached** me for not coming to her birthday party.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q5",
            type: "multiple-choice",
            question: "The extra food will be **surpassed** to the homeless.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l20-q6",
            type: "multiple-choice",
            question: "Her **rejoinders** always showed her great sense of humor.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q7",
            type: "multiple-choice",
            question: "The girl felt **alienated** in the corner of the schoolyard.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q8",
            type: "multiple-choice",
            question: "The **fervent** Russian winter has had record low temperatures.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l20-q9",
            type: "multiple-choice",
            question: "The young leader urged **forbearance** on his followers.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l20-q10",
            type: "multiple-choice",
            question: "Those who are **gullible** are often tricked into giving away money.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        }
    ]
};

export const b8_l20_story_reading: Story = {
    id: "b8-l20-reading",
    title: "Reading Passage: Paul Robeson: All-American",
    type: "non-fiction",
    content: `In his 1958 autobiography, Paul Robeson tells of bringing home from school a test on which he had scored ninety-nine out of a possible one hundred. When his father **reproached** him for not getting a perfect score, Paul tried to explain that "no one ever gets one hundred." His father's **rejoinder** was a simple question: "Then why do they have it?"

Robeson's father had encountered and overcome great difficulties in his life. Born an enslaved person in 1845, he escaped to freedom at the age of fifteen and joined the Union army at the outbreak of the Civil War. Later, he attended Lincoln University near Philadelphia and was **ordained** a minister. At a time when African Americans were expected to be **servile**, Mr. Robeson was a strong advocate of racial justice and equality.

As Robeson instilled a strong sense of purpose and principle in his eight children, he demanded much of them. Paul, the youngest, born in 1898, especially rose to the challenge. In 1915, he won a four-year scholarship to Rutgers College. However, as the third African American student ever to attend and the only one enrolled at that time, he felt **alienated** from his classmates. His presence on campus provoked both verbal and physical abuse from the more **overtly** racist students. But Robeson showed great **forbearance** in the face of these attacks. His response was to excel in everything he attempted. He won prizes for public speaking and served on the student council. He earned twelve varsity letters in football, baseball, basketball, and track. In 1917 and 1918, he earned a place on the All-American football team. He ended his final year with the highest grades of his graduating class.

To finance an education at Columbia Law School, Robeson worked at various jobs, playing professional football and acting in plays on weekends. However, after graduation he practiced law only briefly. He was hired by a white law firm in New York City, but the pervasive racism he encountered led him to abandon that career. He believed he would be prevented from working effectively as a lawyer. Instead Robeson began devoting his time to acting in plays and giving concerts in which he sang spirituals, the traditional folk songs of African Americans. His rich, deep, expressive singing voice, along with the friendly, warm rapport he developed with his audiences, made him a successful and popular performer.

When Robeson appeared in the musical *Show Boat* in 1928, he was given a tumultuous **ovation** for his singing of "Ol' Man River." His performances in William Shakespeare's *Othello* in London in 1930 and New York in 1943 were no less **fervently** received. He was the first African American actor to interpret the role on Broadway. This production ran for 296 performances, a record for a Shakespearean play that has never been **surpassed**.

In addition to being an actor and singer, Robeson was an activist in the struggle for racial justice. In the late 1940s, he spoke to huge crowds in the United States and abroad. He spoke about the link between the treatment of African Americans at home and the people living under colonial rule in Africa and Asia. He often ended his talks by singing "Ol' Man River," but he changed the words. Instead of "I'm tired of livin' and skeered of dyin'," he sang, "I must keep fightin' until I'm dyin'."

Some government officials were fearful of Robeson's influence. They accused him of being a Communist, a charge he denied. He was a **hindrance** to their efforts to present the United States to the world as a united country in its opposition to communism. In 1950, when Robeson refused to sign an oath stating he was not a Communist, the State Department took away his passport. He was barred from leaving the country for eight years. He was also "blacklisted"; theater owners refused to rent him their stages, and consequently his income dropped from over $100,000 a year to less than $6,000.

Even African American leaders felt Robeson had gone too far. They were afraid his comments would antagonize the government, so they felt it necessary to distance themselves from him. Robeson was **vilified** in the press. But despite the pressure to **recant** his political beliefs, he refused to do so. In his autobiography, he wrote that he had learned from his father "that the Negro was in every way the equal of the white man. And we defied anybody to tell us otherwise."

Paul Robeson died in 1976. But his **inflammatory** speeches and the songs he made famous remain part of our history. Robeson is remembered as a person of great courage and integrity who never gave up the fight for racial equality.`,
    wordsIncluded: ["reproach", "rejoinder", "ordain", "servile", "alienate", "overt", "forbearance", "ovation", "fervent", "surpass", "hindrance", "vilify", "recant", "inflammatory", "gullible"],
    questions: [
        {
            id: "b8-l20-reading-q1",
            type: "multiple-choice",
            question: "What was Paul Robeson's father's **rejoinder** meant to suggest?",
            options: [
                "He suggested that striving for perfection (100%) is worthwhile because the standard exists.",
                "He meant to say that grades don't matter.",
                "He meant that he was angry.",
                "He meant that Paul should quit school."
            ],
            correctAnswer: "He suggested that striving for perfection (100%) is worthwhile because the standard exists."
        },
        {
            id: "b8-l20-reading-q2",
            type: "multiple-choice",
            question: "What is the meaning of **ordained** as it is used in the passage?",
            options: [
                "Installed as a minister (Robeson's father was ordained a minister).",
                "Ordered or prearranged.",
                "To order a pizza.",
                "To write a book."
            ],
            correctAnswer: "Installed as a minister (Robeson's father was ordained a minister)."
        },
        {
            id: "b8-l20-reading-q3",
            type: "multiple-choice",
            question: "Why did the United States government object to Robeson's views in 1950?",
            options: [
                "They feared his influence and accused him of being a Communist, seeing him as a hindrance to their unified front.",
                "They didn't like his singing.",
                "They thought he was too tall.",
                "They wanted him to play football."
            ],
            correctAnswer: "They feared his influence and accused him of being a Communist, seeing him as a hindrance to their unified front."
        },
        {
            id: "b8-l20-reading-q4",
            type: "multiple-choice",
            question: "What **overt** step did the United States government officials take against Robeson?",
            options: [
                "They took away his passport and barred him from leaving the country.",
                "They arrested him.",
                "They gave him an award.",
                "They ignored him."
            ],
            correctAnswer: "They took away his passport and barred him from leaving the country."
        },
        {
            id: "b8-l20-reading-q5",
            type: "multiple-choice",
            question: "Would it be accurate to say the United States government and press treated Robeson with **forbearance** in the 1950s? Explain.",
            options: [
                "No, they vilified him, took his passport, and blacklisted him, showing no patience or restraint.",
                "Yes, they were very patient.",
                "Yes, they gave him money.",
                "No, but they were nice."
            ],
            correctAnswer: "No, they vilified him, took his passport, and blacklisted him, showing no patience or restraint."
        },
        {
            id: "b8-l20-reading-q6",
            type: "multiple-choice",
            question: "How do you know that Robeson was a great success in *Show Boat*?",
            options: [
                "He was given a tumultuous ovation for his singing of 'Ol' Man River'.",
                "He won a Tony award.",
                "The show was cancelled.",
                "No one came to see him."
            ],
            correctAnswer: "He was given a tumultuous ovation for his singing of 'Ol' Man River'."
        },
        {
            id: "b8-l20-reading-q7",
            type: "multiple-choice",
            question: "Why would it be inaccurate to describe Robeson as uninterested in social issues?",
            options: [
                "He was an activist who spoke to huge crowds about racial justice and colonialism.",
                "He never spoke about politics.",
                "He only cared about singing.",
                "He lived in a bubble."
            ],
            correctAnswer: "He was an activist who spoke to huge crowds about racial justice and colonialism."
        },
        {
            id: "b8-l20-reading-q8",
            type: "multiple-choice",
            question: "What is one adjective that could not be used to describe Robeson? Explain.",
            options: [
                "Servile (he was a man of courage and integrity who refused to recant his beliefs).",
                "Talented.",
                "Courageous.",
                "Intelligent."
            ],
            correctAnswer: "Servile (he was a man of courage and integrity who refused to recant his beliefs)."
        },
        {
            id: "b8-l20-reading-q9",
            type: "multiple-choice",
            question: "Why was Robeson banned from foreign travel between 1950 and 1958?",
            options: [
                "The State Department took away his passport because he refused to sign an oath stating he was not a Communist.",
                "He was sick.",
                "He didn't want to travel.",
                "He was in prison."
            ],
            correctAnswer: "The State Department took away his passport because he refused to sign an oath stating he was not a Communist."
        },
        {
            id: "b8-l20-reading-q10",
            type: "multiple-choice",
            question: "For what did Robeson **reproach** the United States after World War II ended?",
            options: [
                "For the treatment of African Americans at home (linking it to colonial rule abroad).",
                "For entering the war.",
                "For not entering the war.",
                "For the food."
            ],
            correctAnswer: "For the treatment of African Americans at home (linking it to colonial rule abroad)."
        },
        {
            id: "b8-l20-reading-q11",
            type: "multiple-choice",
            question: "Why didn't Robeson practice law for very long?",
            options: [
                "The pervasive racism he encountered in the white law firm led him to abandon the career.",
                "He wasn't good at it.",
                "He liked football better.",
                "He moved to Europe."
            ],
            correctAnswer: "The pervasive racism he encountered in the white law firm led him to abandon the career."
        },
        {
            id: "b8-l20-reading-q12",
            type: "multiple-choice",
            question: "How did the **rapport** between Robeson and his admirers change during the 1950s?",
            options: [
                "It was damaged; even African American leaders distanced themselves from him, and he was vilified.",
                "It got stronger.",
                "It stayed the same.",
                "They loved him more."
            ],
            correctAnswer: "It was damaged; even African American leaders distanced themselves from him, and he was vilified."
        },
        {
            id: "b8-l20-reading-q13",
            type: "multiple-choice",
            question: "How does the passage illustrate that news reporters wanted to destroy Robeson's reputation?",
            options: [
                "Robeson was vilified in the press.",
                "They ignored him.",
                "They wrote nice things about him.",
                "They interviewed him."
            ],
            correctAnswer: "Robeson was vilified in the press."
        },
        {
            id: "b8-l20-reading-q14",
            type: "multiple-choice",
            question: "Why would it be inaccurate to describe Robeson's father as **gullible**?",
            options: [
                "He was a strong advocate of justice who overcame great difficulties (escaped slavery, joined army, ordained minister).",
                "He believed everything he heard.",
                "He was easily tricked.",
                "He was Naive."
            ],
            correctAnswer: "He was a strong advocate of justice who overcame great difficulties (escaped slavery, joined army, ordained minister)."
        },
        {
            id: "b8-l20-reading-q15",
            type: "multiple-choice",
            question: "What might Robeson's father have thought of his son's accomplishments?",
            options: [
                "He would have been proud (Paul excelled in school, sports, and arts, and fought for justice like his father).",
                "He would have been ashamed.",
                "He would have been jealous.",
                "He wouldn't have cared."
            ],
            correctAnswer: "He would have been proud (Paul excelled in school, sports, and arts, and fought for justice like his father)."
        }
    ]
};

export const b8_l20_facts: Story = {
    id: "b8-l20-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   **Inflammatory** comes from the Latin *inflammare*, "to set on fire." An infection that is red, swollen, and burning is an inflammation. But the word is also used figuratively. **Inflammatory** remarks are those that heat up the atmosphere by exciting anger or even violence.

*   To check the origin of a word in a dictionary, you look for the etymology, usually usually enclosed in square brackets. You will find that **servile** comes from the Latin *servus*, which means "slave." Someone who is **servile** is behaving like a slave.
`,
    wordsIncluded: ["inflammatory", "servile"]
};
