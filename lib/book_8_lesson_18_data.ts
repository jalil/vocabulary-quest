
import { VocabularyWord, Story, Question } from "./types";

export const b8_l18_words: VocabularyWord[] = [
    {
        id: "aperture",
        word: "aperture",
        pronunciation: "/ˈæpərtʃər/",
        definition: "An opening or hole.",
        exampleSentence: "Tony could see an eye peering at him through a small aperture in the door.",
        imageEmoji: "🕳️",
        category: "Grade 8",
        synonyms: ["opening", "gap"],
        antonyms: ["closure", "blockage"]
    },
    {
        id: "cache",
        word: "cache",
        pronunciation: "/kæʃ/",
        definition: "1. A hiding or storage place, especially for food or valuables. 2. Anything hidden or stored in such a place.",
        exampleSentence: "A hollowed-out book provided a cache for the family's jewels.",
        imageEmoji: "📦",
        category: "Grade 8",
        synonyms: ["hoard", "stash"],
        antonyms: []
    },
    {
        id: "combustible",
        word: "combustible",
        pronunciation: "/kəmˈbʌstəbl/",
        definition: "Capable of catching fire or burning.",
        exampleSentence: "Don't store combustible rags near the furnace.",
        imageEmoji: "🔥",
        category: "Grade 8",
        synonyms: ["flammable", "burnable"],
        antonyms: ["noncombustible", "fireproof"]
    },
    {
        id: "delegate",
        word: "delegate",
        pronunciation: "/ˈdelɪɡət/",
        definition: "1. A person appointed to act on behalf of others; a representative. 2. To assign or entrust to another.",
        exampleSentence: "Delegates from each section of the state attended the meeting.",
        imageEmoji: "👥",
        category: "Grade 8",
        synonyms: ["representative", "assign"],
        antonyms: []
    },
    {
        id: "inclement",
        word: "inclement",
        pronunciation: "/ɪnˈklemənt/",
        definition: "1. Stormy. 2. Harsh; not merciful.",
        exampleSentence: "We had such inclement weather on the scheduled day of our field trip to the zoo that we postponed it.",
        imageEmoji: "⛈️",
        category: "Grade 8",
        synonyms: ["stormy", "harsh"],
        antonyms: ["mild", "pleasant"]
    },
    {
        id: "indelible",
        word: "indelible",
        pronunciation: "/ɪnˈdeləbl/",
        definition: "Not able to be erased; permanent.",
        exampleSentence: "The beauty of Venice made an indelible impression on the visitors.",
        imageEmoji: "🖊️",
        category: "Grade 8",
        synonyms: ["permanent", "lasting"],
        antonyms: ["erasable", "temporary"]
    },
    {
        id: "malady",
        word: "malady",
        pronunciation: "/ˈmælədi/",
        definition: "A sickness or unhealthy condition.",
        exampleSentence: "Malaria is a malady prevalent in tropical areas.",
        imageEmoji: "🤒",
        category: "Grade 8",
        synonyms: ["illness", "disease"],
        antonyms: ["health", "wellness"]
    },
    {
        id: "memoir",
        word: "memoir",
        pronunciation: "/ˈmemwɑːr/",
        definition: "An account based on the author's personal experiences.",
        exampleSentence: "The Civil War anthology contains a moving memoir by a young Union officer.",
        imageEmoji: "📖",
        category: "Grade 8",
        synonyms: ["autobiography", "account"],
        antonyms: []
    },
    {
        id: "paramount",
        word: "paramount",
        pronunciation: "/ˈpærəmaʊnt/",
        definition: "Most important; chief.",
        exampleSentence: "It is paramount that my mother receive this message immediately.",
        imageEmoji: "🔝",
        category: "Grade 8",
        synonyms: ["supreme", "chief"],
        antonyms: ["minor", "unimportant"]
    },
    {
        id: "rectify",
        word: "rectify",
        pronunciation: "/ˈrektɪfaɪ/",
        definition: "To correct or adjust.",
        exampleSentence: "The teacher rectified his grading error on my narrative essay.",
        imageEmoji: "🔧",
        category: "Grade 8",
        synonyms: ["correct", "fix"],
        antonyms: ["damage", "ruin"]
    },
    {
        id: "requisite",
        word: "requisite",
        pronunciation: "/ˈrekwɪzɪt/",
        definition: "Required; necessary.",
        exampleSentence: "When Aunt Mercedes completed the requisite two-year course, she received her nursing degree.",
        imageEmoji: "✅",
        category: "Grade 8",
        synonyms: ["required", "necessary"],
        antonyms: ["optional", "unnecessary"]
    },
    {
        id: "squeamish",
        word: "squeamish",
        pronunciation: "/ˈskwiːmɪʃ/",
        definition: "1. Easily made to feel upset or sick to the stomach. 2. Easily disgusted.",
        exampleSentence: "There is no reason to feel squeamish about giving blood.",
        imageEmoji: "🤢",
        category: "Grade 8",
        synonyms: ["queasy", "sensitive"],
        antonyms: ["tough", "resilient"]
    },
    {
        id: "tract",
        word: "tract",
        pronunciation: "/trækt/",
        definition: "1. An area of land or water. 2. A system of organs in the body that performs some function together. 3. A pamphlet.",
        exampleSentence: "The students developed a tract of land in the center of the city for a vegetable garden.",
        imageEmoji: "🗺️",
        category: "Grade 8",
        synonyms: ["area", "region"],
        antonyms: []
    },
    {
        id: "tribulation",
        word: "tribulation",
        pronunciation: "/ˌtrɪbjəˈleɪʃn/",
        definition: "Great trouble or suffering.",
        exampleSentence: "The potato famine of 1845 caused great tribulation in Ireland.",
        imageEmoji: "😩",
        category: "Grade 8",
        synonyms: ["hardship", "suffering"],
        antonyms: ["joy", "happiness"]
    },
    {
        id: "vignette",
        word: "vignette",
        pronunciation: "/vɪnˈjet/",
        definition: "A short sketch that provides a clear picture.",
        exampleSentence: "The movie begins with a series of vignettes about life in Los Angeles.",
        imageEmoji: "🖼️",
        category: "Grade 8",
        synonyms: ["sketch", "scene"],
        antonyms: []
    }
];

export const b8_l18_story_1: Story = {
    id: "b8-l18-s1",
    title: "18A Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, choose 'Correct'. If not, choose 'Incorrect'.",
    wordsIncluded: ["tract", "inclement", "indelible", "memoir", "cache", "combustible", "tribulation"],
    questions: [
        {
            id: "b8-l18-q1",
            type: "multiple-choice",
            question: "The athletes took one last sprint around the **tract** to warm up.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l18-q2",
            type: "multiple-choice",
            question: "Playing video games was an **inclement** waste of time.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l18-q3",
            type: "multiple-choice",
            question: "My first sight of the Rockies left an **indelible** impression on me.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l18-q4",
            type: "multiple-choice",
            question: "The poor **memoir** outside is shivering in the cold.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "b8-l18-q5",
            type: "multiple-choice",
            question: "The pirates hid the **cache** in an abandoned house.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l18-q6",
            type: "multiple-choice",
            question: "Anything **combustible** is banned from entering an aircraft.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "b8-l18-q7",
            type: "multiple-choice",
            question: "History tells of the **tribulations** of the Jewish people over many centuries.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        }
    ]
};

export const b8_l18_story_reading: Story = {
    id: "b8-l18-reading",
    title: "Reading Passage: Prairie Women",
    type: "non-fiction",
    content: `One day in 1975, Joanna Stratton was exploring the attic in her grandmother's house in Topeka, Kansas, when she came across a large **cache** of yellowing documents stored in boxes. They turned out to be handwritten **memoirs** describing life on the Kansas frontier from the 1850s to the 1890s. They had been collected by Stratton's great-grandmother, Lilla Day Monroe. She herself had experienced the joys and **tribulations** of frontier life when her family had moved from Indiana to Kansas in 1884, as the frontier period was drawing to a close. Her family settled in Wakeeney on a treeless **tract** in the western part of the state. Monroe married and became an attorney; later, with her family, she moved to Topeka, where she practiced law and campaigned tirelessly for women's rights.

The hardships patiently borne by the Kansas pioneers remained fixed **indelibly** in her memory. By the early 1920s, Monroe became concerned that the vital role women had played would soon be forgotten because no written record of their experiences existed. She decided to **rectify** that by collecting personal, written passages from Kansas women who still remembered those days. As word of her project spread throughout the state, more and more women responded until Monroe had collected eight hundred first-hand accounts. They were filled with vivid **vignettes** of pioneer life on the Kansas frontier.

It was evident from these recollections that shelter was the **paramount** concern of new arrivals. For a family settling in the treeless western part of the state, a plow was the chief **requisite**. Drawn by oxen, horses, or humans, it prepared the land for farming and provided the only building material available—sods. These were solid blocks of earth cut from strips of soil. They were used for the walls and roofs of the one-room frontier homes. Emma Brown of Mitchell County recalled life with her children in a sod house during a period of **inclement** weather when her husband was away on a cattle drive. The dirt roof leaked, soaking everything inside. "How happy we were to have the sun shine out again," she wrote. She tells how she and the children carried everything outside to dry. "But, alas," her account goes on, "the next morning the rain was pouring down again." It continued for another week.

Emma Louisa Smith of South Sappa Creek pointed out another problem caused by the lack of timber. "There was not a tree or even a bush in sight to furnish us with fuel." Fortunately, the early settlers discovered an unusual source: the dried dung of cattle and buffalo. It was both **combustible** and plentiful. The task of collecting it was one of the many that were **delegated** to the children. Emma Smith concluded that "the sod house and cow chips were two great factors in making possible the settlement of this country at so early a date."

Despite the need for every pair of hands to do a share of the work, the children's schooling was not neglected. Those who could read and write taught their children at home. Later, when local settlers organized schools, Emma Handy conducted classes at Oak Creek in a dirt-floored schoolhouse built of sods. She wrote, "It had neither blackboard, teacher's desk, nor chairs. The seats were small logs split and supported by pegs." Two small **apertures** cut into one of the walls provided the only source of light. The dirt floor served as a chalkboard, with a long, pointed stick used to write letters and numbers.

Life on the frontier was not for the **squeamish**. There were no doctors, nurses, or hospitals. When women gave birth, usually no one but a neighbor was in attendance. With medical supplies difficult to obtain, **maladies** such as malaria had to run their course. Injuries were frequent, so residents in Kearny county were fortunate that a woman named Amy Loucks could act as surgeon when necessary. According to the account provided by her son, she closed wounds with fiddle string and a common needle. Once, "with a razor and her embroidery scissors, she removed three fingers from the crushed hand of a railroad brakeman."

Lilla Day Monroe died in 1929 before she had completed her project. The manuscripts lay undisturbed in the attic of the family home for many years until Joanna Stratton came upon them. She had the pleasure of editing the writings and of bringing her great-grandmother's work to completion when, in 1981, *Pioneer Women: Voices from the Kansas Frontier* was published.`,
    wordsIncluded: ["cache", "memoir", "tribulation", "tract", "indelible", "rectify", "vignette", "paramount", "requisite", "inclement", "combustible", "delegate", "aperture", "squeamish", "malady"],
    questions: [
        {
            id: "b8-l18-reading-q1",
            type: "multiple-choice",
            question: "How does the passage indicate that Monroe remembered her early life?",
            options: [
                "The hardships remained fixed indelibly in her memory.",
                "She wrote a book.",
                "She forgot everything.",
                "She moved back to Indiana."
            ],
            correctAnswer: "The hardships remained fixed indelibly in her memory."
        },
        {
            id: "b8-l18-reading-q2",
            type: "multiple-choice",
            question: "What does Stratton's book contain?",
            options: [
                "Vivid vignettes of pioneer life on the Kansas frontier (from 800 first-hand accounts).",
                "Recipes.",
                "Fictional stories.",
                "Pictures of cows."
            ],
            correctAnswer: "Vivid vignettes of pioneer life on the Kansas frontier (from 800 first-hand accounts)."
        },
        {
            id: "b8-l18-reading-q3",
            type: "multiple-choice",
            question: "What were the minimum requirements for teaching school at home?",
            options: [
                "Those who could read and write taught their children at home.",
                "A college degree.",
                "A blackboard.",
                "A large house."
            ],
            correctAnswer: "Those who could read and write taught their children at home."
        },
        {
            id: "b8-l18-reading-q4",
            type: "multiple-choice",
            question: "Why was the plow of **paramount** importance to settlers on the prairie?",
            options: [
                "It prepared the land for farming and provided building material (sods).",
                "It was used for transportation.",
                "It was used for defense.",
                "It was a decoration."
            ],
            correctAnswer: "It prepared the land for farming and provided building material (sods)."
        },
        {
            id: "b8-l18-reading-q5",
            type: "multiple-choice",
            question: "Why do you think it was necessary to dry the cow and buffalo dung?",
            options: [
                "To make it combustible for fuel.",
                "To clean it.",
                "To hide it.",
                "To eat it."
            ],
            correctAnswer: "To make it combustible for fuel."
        },
        {
            id: "b8-l18-reading-q6",
            type: "multiple-choice",
            question: "How do you know that the old papers Stratton found were a surprise to her?",
            options: [
                "She 'came across' a large cache while exploring the attic.",
                "She was looking for them.",
                "Her grandmother told her.",
                "She bought them."
            ],
            correctAnswer: "She 'came across' a large cache while exploring the attic."
        },
        {
            id: "b8-l18-reading-q7",
            type: "multiple-choice",
            question: "Which details in the passage suggest that the sod schoolhouses were rather dark?",
            options: [
                "Two small apertures provided the only source of light.",
                "There were no windows.",
                "They were underground.",
                "They had no candles."
            ],
            correctAnswer: "Two small apertures provided the only source of light."
        },
        {
            id: "b8-l18-reading-q8",
            type: "multiple-choice",
            question: "How do you know that Amy Loucks was not **squeamish**?",
            options: [
                "She removed three fingers from a crushed hand using a razor and embroidery scissors.",
                "She fainted at the sight of blood.",
                "She refused to help.",
                "She was a doctor."
            ],
            correctAnswer: "She removed three fingers from a crushed hand using a razor and embroidery scissors."
        },
        {
            id: "b8-l18-reading-q9",
            type: "multiple-choice",
            question: "What is one of the **tribulations** that the occupants of sod houses experienced?",
            options: [
                "Leaking roofs during inclement weather (soaking everything inside).",
                "Too much heat.",
                "Noisy neighbors.",
                "High rent."
            ],
            correctAnswer: "Leaking roofs during inclement weather (soaking everything inside)."
        },
        {
            id: "b8-l18-reading-q10",
            type: "multiple-choice",
            question: "How were most **maladies** treated by pioneer women?",
            options: [
                "They had to run their course (medical supplies were difficult to obtain).",
                "With antibiotics.",
                "At the hospital.",
                "By a doctor."
            ],
            correctAnswer: "They had to run their course (medical supplies were difficult to obtain)."
        },
        {
            id: "b8-l18-reading-q11",
            type: "multiple-choice",
            question: "How did Stratton **rectify** Monroe's failure to publish the book?",
            options: [
                "She edited the writings and brought the work to completion (published in 1981).",
                "She apologized.",
                "She burned the papers.",
                "She sold them."
            ],
            correctAnswer: "She edited the writings and brought the work to completion (published in 1981)."
        },
        {
            id: "b8-l18-reading-q12",
            type: "multiple-choice",
            question: "What is the meaning of **inclement** as it is used in the passage?",
            options: [
                "Stormy; referring to bad weather.",
                "Harsh and unmerciful behavior.",
                "Sunny and bright.",
                "Cold."
            ],
            correctAnswer: "Stormy; referring to bad weather."
        },
        {
            id: "b8-l18-reading-q13",
            type: "multiple-choice",
            question: "What were the sources for the information that appeared in Stratton's book?",
            options: [
                "Handwritten memoirs collected by Lilla Day Monroe from 800 Kansas women.",
                "Government records.",
                "Newspaper articles.",
                "Her own imagination."
            ],
            correctAnswer: "Handwritten memoirs collected by Lilla Day Monroe from 800 Kansas women."
        },
        {
            id: "b8-l18-reading-q14",
            type: "multiple-choice",
            question: "Why do you think Stratton did not **delegate** the work of editing Monroe's papers?",
            options: [
                "She likely wanted to do it herself to honor her great-grandmother and bring the work to completion herself.",
                "She didn't trust anyone.",
                "She was too busy.",
                "She didn't know how."
            ],
            correctAnswer: "She likely wanted to do it herself to honor her great-grandmother and bring the work to completion herself."
        },
        {
            id: "b8-l18-reading-q15",
            type: "multiple-choice",
            question: "What is the meaning of **tract** as it is used in the passage?",
            options: [
                "An area of land (treeless tract in western Kansas).",
                "A pamphlet.",
                "A system of organs.",
                "A path."
            ],
            correctAnswer: "An area of land (treeless tract in western Kansas)."
        }
    ]
};

export const b8_l18_facts: Story = {
    id: "b8-l18-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   The Latin *rectus* means "straight" or "right" and forms the root of *rectangle*, a shape made of four straight lines with four right angles. The Latin *ficere* means "to make" and forms the root of *factory*, a place where things are made. The two Latin roots combine to make **rectify**. When we *rectify* something, we make it right.

*   The French for "vine" is *vigne* and forms the root of the word **vignette**. The story of how these two terms came to be connected is an interesting one. It was once a common practice to place a decorative border on prints or the pages of books. The curling forms of grape vines and leaves, along with clusters of grapes, were often used for this purpose. These designs made little pictures in themselves. *Vignette*, therefore, came to be applied to any brief, descriptive sketch or a word picture.
`,
    wordsIncluded: ["rectify", "vignette"]
};
