
import { VocabularyWord, Story, Question } from "./types";

export const b8_l3_words: VocabularyWord[] = [
    {
        id: "anonymous",
        word: "anonymous",
        pronunciation: "/əˈnɒnɪməs/",
        definition: "Of an unknown source or unrevealed name.",
        exampleSentence: "We wish we could thank the person who gave this anonymous donation to our library fund.",
        imageEmoji: "👤",
        category: "Grade 8"
    },
    {
        id: "anthology",
        word: "anthology",
        pronunciation: "/ænˈθɒlədʒi/",
        definition: "A collection of various writings, such as songs, stories, or poems.",
        exampleSentence: "This anthology of science-fiction stories includes some by Ray Bradbury, Julian May, and Ursula Le Guin.",
        imageEmoji: "📚",
        category: "Grade 8"
    },
    {
        id: "conjecture",
        word: "conjecture",
        pronunciation: "/kənˈdʒektʃər/",
        definition: "A conclusion based on guesswork or insufficient evidence. To form an opinion while lacking sufficient evidence.",
        exampleSentence: "Dad's conjecture that the derelict building would be a problem proved to be correct when it caught on fire.",
        imageEmoji: "🤔",
        category: "Grade 8"
    },
    {
        id: "disposition",
        word: "disposition",
        pronunciation: "/ˌdɪspəˈzɪʃən/",
        definition: "1. A person's usual mood; temperament. 2. A regular tendency or inclination.",
        exampleSentence: "People enjoy Alice's company because of her sunny disposition.",
        imageEmoji: "😊",
        category: "Grade 8"
    },
    {
        id: "encompass",
        word: "encompass",
        pronunciation: "/ɪnˈkʌmpəs/",
        definition: "1. To enclose or encircle. 2. To include.",
        exampleSentence: "Except for one narrow pass, mountains encompass the village of Neudorf on all sides.",
        imageEmoji: "🏰",
        category: "Grade 8"
    },
    {
        id: "extricate",
        word: "extricate",
        pronunciation: "/ˈekstrɪkeɪt/",
        definition: "To free from a difficult or tangled situation.",
        exampleSentence: "Extricating our bags from the bus's crowded storage area was much simpler than we thought it would be.",
        imageEmoji: "🔓",
        category: "Grade 8"
    },
    {
        id: "generation",
        word: "generation",
        pronunciation: "/ˌdʒenəˈreɪʃən/",
        definition: "1. One step in the line of descent of a family. 2. All the people born and living about the same time. 3. The average span of time between the birth of parents and their children.",
        exampleSentence: "Four generations were represented at Naomi's family reunion last summer.",
        imageEmoji: "👪",
        category: "Grade 8"
    },
    {
        id: "guile",
        word: "guile",
        pronunciation: "/ɡaɪl/",
        definition: "Cunning or deceit in dealing with others; trickery.",
        exampleSentence: "The Grimm brothers vividly described the wolf's guile toward Little Red Riding Hood.",
        imageEmoji: "🦊",
        category: "Grade 8"
    },
    {
        id: "imperative",
        word: "imperative",
        pronunciation: "/ɪmˈperətɪv/",
        definition: "1. Urgent; pressing. 2. Having the power or authority to command.",
        exampleSentence: "It is imperative that I finish this English assignment before tomorrow's deadline.",
        imageEmoji: "🚨",
        category: "Grade 8"
    },
    {
        id: "instill",
        word: "instill",
        pronunciation: "/ɪnˈstɪl/",
        definition: "To introduce gradually in order to establish securely.",
        exampleSentence: "Juanita's love of animals was instilled in her during the summer vacations she spent at her uncle's farm as a child.",
        imageEmoji: "🌱",
        category: "Grade 8"
    },
    {
        id: "modify",
        word: "modify",
        pronunciation: "/ˈmɒdɪfaɪ/",
        definition: "1. To make less extreme or severe. 2. To make changes in. 3. In grammar, to limit or restrict in meaning.",
        exampleSentence: "My parents agreed to modify my weekend curfew after I promised to study Monday through Thursday evenings.",
        imageEmoji: "✏️",
        category: "Grade 8"
    },
    {
        id: "pivot",
        word: "pivot",
        pronunciation: "/ˈpɪvət/",
        definition: "1. A small bar or rod on which something else turns. 2. A person or thing on which others depend. To turn on or as if on a pivot.",
        exampleSentence: "The gate swung shut easily on its well-oiled pivot.",
        imageEmoji: "🔩",
        category: "Grade 8"
    },
    {
        id: "pivotal",
        word: "pivotal",
        pronunciation: "/ˈpɪvətl/",
        definition: "Vitally important; significant.",
        exampleSentence: "The first human landing on Mars will be a pivotal event in the history of space exploration.",
        imageEmoji: "🌟",
        category: "Grade 8"
    },
    {
        id: "prevalent",
        word: "prevalent",
        pronunciation: "/ˈprevələnt/",
        definition: "Commonly occurring; widely accepted or practiced.",
        exampleSentence: "Both chicken pox and the flu were prevalent in Edison Middle School last winter.",
        imageEmoji: "🦠",
        category: "Grade 8"
    },
    {
        id: "recur",
        word: "recur",
        pronunciation: "/rɪˈkɜːr/",
        definition: "1. To come up again or to happen again. 2. To come to mind again.",
        exampleSentence: "The same musical themes recur throughout all the movies in the series.",
        imageEmoji: "🔁",
        category: "Grade 8"
    },
    {
        id: "spontaneous",
        word: "spontaneous",
        pronunciation: "/spɒnˈteɪniəs/",
        definition: "1. Voluntary and unplanned. 2. Occurring or produced without human labor.",
        exampleSentence: "The crowd burst into a spontaneous chant of \"Go! Go! Go!\" as the first two runners neared the finish line.",
        imageEmoji: "🎊",
        category: "Grade 8"
    }
];

export const b8_l3_story_1: Story = {
    id: "b8-l3-s1",
    title: "3A Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 3. Then write the sentence.",
    wordsIncluded: ["pivotal", "prevalent", "guile", "conjecture", "modify", "extricate", "recur", "anthology", "anonymous", "spontaneous", "instill", "encompass"],
    questions: [
        {
            id: "b8-l3-q1",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **pivotal**.",
            options: [
                "To be pivotal is to be of great importance.",
                "To be pivotal is to be commonly accepted.",
                "To be pivotal is to occur without a known cause.",
                "To be pivotal is to be anonymous."
            ],
            correctAnswer: "To be pivotal is to be of great importance."
        },
        {
            id: "b8-l3-q2",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **guile**.",
            options: [
                "Guile is cunning or deceit in dealing with others.",
                "Guile is a failure to take proper precautions.",
                "Guile is a spontaneous donation.",
                "Guile is an anonymous deed."
            ],
            correctAnswer: "Guile is cunning or deceit in dealing with others."
        },
        {
            id: "b8-l3-q3",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **modify**.",
            options: [
                "To modify something is to make changes to it.",
                "To modify something is to set it free.",
                "To modify something is to extricate something.",
                "To modify something is to restore it to its proper place."
            ],
            correctAnswer: "To modify something is to make changes to it."
        },
        {
            id: "b8-l3-q4",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **anthology**.",
            options: [
                "An anthology is a collection of writings.",
                "An anthology is a recurrence.",
                "An anthology is a handwritten document.",
                "An anthology is a pivotal event."
            ],
            correctAnswer: "An anthology is a collection of writings."
        },
        {
            id: "b8-l3-q5",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **spontaneous**.",
            options: [
                "A spontaneous donation is one made without previous thought.",
                "A spontaneous donation is an anonymous donation.",
                "A spontaneous donation is one made with conditions attached.",
                "A spontaneous donation is a prevalent donation."
            ],
            correctAnswer: "A spontaneous donation is one made without previous thought."
        },
        {
            id: "b8-l3-q6",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **instill**.",
            options: [
                "To instill something is to introduce it gradually.",
                "To instill something is to bring it to an end.",
                "To instill something is to modify something.",
                "To instill something is to make changes to it."
            ],
            correctAnswer: "To instill something is to introduce it gradually."
        },
        {
            id: "b8-l3-q7",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **recur**.",
            options: [
                "A recurring event is one that happens again.",
                "A recurring event is a pivotal event.",
                "A recurring event is one that cannot be repeated.",
                "A recurring event is of great importance."
            ],
            correctAnswer: "A recurring event is one that happens again."
        },
        {
            id: "b8-l3-q8",
            type: "multiple-choice",
            question: "Choose the sentence that correctly uses **encompass**.",
            options: [
                "To encompass something is to enclose or encircle it.",
                "To encompass something is to instill something.",
                "To encompass something is to prevent it from occurring.",
                "To encompass something is to modify something."
            ],
            correctAnswer: "To encompass something is to enclose or encircle it."
        }
    ]
};

export const b8_l3_story_reading: Story = {
    id: "b8-l3-reading",
    title: "Reading Passage: Telling Tales",
    type: "non-fiction",
    content: `The invention of writing, more than five thousand years ago, was a **pivotal** event in human history; indeed, without it there could be no recorded history. But even before writing began, stories existed, often in the form of folk tales. This much older spoken tradition probably goes back to the very beginnings of language itself. Folk tales did not need to be written in order to be preserved. They were passed on by word of mouth from one **generation** to the next. Most were **anonymous** and the work of many different people. As the tale was told and retold, it changed. Each teller **modified** it to fit a particular audience.

One famous collection of folk tales, first recorded around the fourteenth century, is *The Arabian Nights*, also called *One Thousand and One Nights*. The title comes from the efforts of the storyteller, Scheherazade, to keep her husband, the king of what is now India and Indochina, from killing her. She stopped each night's story at a suspenseful point. That way, her husband would allow her to live one more night to tell its ending. Scholars think that many of these tales may have originated in Syria and Egypt, while others could have come from India. Their actual origin, however, remains a matter of **conjecture**.

Not until the early nineteenth century was a serious attempt made to give European folk tales a permanent written form. In Germany, two brothers, Jacob and Wilhelm Grimm, collected hundreds of folk tales from all parts of the country. They published them in an **anthology**, now well known as *Grimm's Fairy Tales*. In its pages Rapunzel, Hansel and Gretel, Cinderella, and Little Red Riding Hood make their first appearance in print.

One purpose of folk tales may have been to entertain. But that was not their only function. The reason they have survived for so long and are so **prevalent** in all human societies is that they educate their audiences. They seek to **instill** values that the society may consider **imperative** for its survival, such as a sense of right and wrong or the need for self-reliance. In addition to providing models for appropriate behavior, they give explanations, often derived from folklore, of the origin and meaning of the natural world.

Scholars have been struck by how frequently the same situations **recur** in folk tales from many different places; over three hundred versions of the Cinderella story, for example, have been identified. Perhaps the same stories appeared **spontaneously** in many distant societies. Or perhaps they were spread by travelers and adapted to fit the needs of their listeners. In addition to the same stories, the same themes are also found again and again. One of the commonest is the use of **guile** as a weapon of the helpless against the powerful. There are no better examples of this than the *Uncle Remus* stories of Joel Chandler Harris, based on African American folk tales of the American South.

One of the funniest of the *Uncle Remus* stories tells of Brer Rabbit, who falls into the clutches of Brer Fox. He begs his captor not to throw him into the briar patch, saying he would rather be drowned. Brer Fox, being of a mean **disposition**, promptly does what his victim has begged him not to do. Brer Rabbit, of course, **extricates** himself with ease from the briar patch. He mocks Brer Fox as he scampers away by calling out that he was "bred and born" in a briar patch.

Folk tales, coming from every part of the globe, **encompass** the whole of human experience. From their early beginnings, long before the dawn of history, until the fairly recent past, they had no competition from other forms of entertainment. Today, the Internet, videos, television, books, and movies compete for children's attention. Is there a danger that in the future folk tales will survive only in scholarly collections? Probably not as long as children, snuggled in their beds, experience the magic that begins with the spoken words, "Once upon a time."`,
    wordsIncluded: ["pivotal", "generation", "anonymous", "modify", "conjecture", "anthology", "prevalent", "instill", "imperative", "recur", "spontaneous", "guile", "disposition", "extricate", "encompass"],
    questions: [
        {
            id: "b8-l3-reading-q1",
            type: "multiple-choice",
            question: "Why was it **imperative** that Scheherazade keep the king entertained?",
            options: [
                "Her life depended on it; he would have killed her if she didn't.",
                "She wanted to be famous.",
                "She was paid to do it.",
                "He was bored."
            ],
            correctAnswer: "Her life depended on it; he would have killed her if she didn't."
        },
        {
            id: "b8-l3-reading-q2",
            type: "multiple-choice",
            question: "What is the meaning of **generation** as it is used in the passage?",
            options: [
                "One step in the line of descent of a family (or people born around the same time).",
                "The production of electricity.",
                "A group of friends.",
                "The time it takes to grow up."
            ],
            correctAnswer: "One step in the line of descent of a family (or people born around the same time)."
        },
        {
            id: "b8-l3-reading-q3",
            type: "multiple-choice",
            question: "Why are the Grimm brothers **pivotal** figures in the history of folk tales?",
            options: [
                "They were the first to collect and publish European folk tales in a permanent written form.",
                "They invented the story of Cinderella.",
                "They were famous storytellers.",
                "They wrote *The Arabian Nights*."
            ],
            correctAnswer: "They were the first to collect and publish European folk tales in a permanent written form."
        },
        {
            id: "b8-l3-reading-q4",
            type: "multiple-choice",
            question: "How would you describe the temperament of Scheherazade's husband?",
            options: [
                "He was cruel (killed his wives), suspicious, and needed to be entertained.",
                "He was kind and loving.",
                "He was funny.",
                "He was shy."
            ],
            correctAnswer: "He was cruel (killed his wives), suspicious, and needed to be entertained."
        },
        {
            id: "b8-l3-reading-q5",
            type: "multiple-choice",
            question: "Who first made up the stories of Cinderella and Little Red Riding Hood?",
            options: [
                "They were **anonymous** and the work of many different people over time.",
                "The Grimm Brothers.",
                "Walt Disney.",
                "Scheherazade."
            ],
            correctAnswer: "They were **anonymous** and the work of many different people over time."
        },
        {
            id: "b8-l3-reading-q6",
            type: "multiple-choice",
            question: "Why would it be inaccurate to say that Scheherazade's stories were **spontaneous**?",
            options: [
                "She likely planned them carefully to stop at a suspenseful point; folk tales are also retold and modified, not just spontaneous.",
                "She made them up on the spot.",
                "They were written down.",
                "She read them from a book."
            ],
            correctAnswer: "She likely planned them carefully to stop at a suspenseful point; folk tales are also retold and modified, not just spontaneous."
        },
        {
            id: "b8-l3-reading-q7",
            type: "multiple-choice",
            question: "In which parts of the world do folk tales commonly occur?",
            options: [
                "In every part of the globe (encompass the whole of human experience).",
                "Only in Europe.",
                "Only in Asia.",
                "Only in Africa."
            ],
            correctAnswer: "In every part of the globe (encompass the whole of human experience)."
        },
        {
            id: "b8-l3-reading-q8",
            type: "multiple-choice",
            question: "What purpose do folk tales have besides being entertaining?",
            options: [
                "They educate their audiences and seek to **instill** values (like right and wrong).",
                "To make money.",
                "To scare children.",
                "To teach math."
            ],
            correctAnswer: "They educate their audiences and seek to **instill** values (like right and wrong)."
        },
        {
            id: "b8-l3-reading-q9",
            type: "multiple-choice",
            question: "Why do you think folk tales using the theme of **guile** are so common?",
            options: [
                "It is a weapon of the helpless against the powerful (common theme in human experience).",
                "People like tricksters.",
                "It is funny.",
                "It is easy to write."
            ],
            correctAnswer: "It is a weapon of the helpless against the powerful (common theme in human experience)."
        },
        {
            id: "b8-l3-reading-q10",
            type: "multiple-choice",
            question: "Why did Brer Rabbit ask to be thrown in the briar patch?",
            options: [
                "He used **guile** to trick the Fox; he was 'bred and born' there and could **extricate** himself easily.",
                "He wanted to die.",
                "He liked thorns.",
                "He was confused."
            ],
            correctAnswer: "He used **guile** to trick the Fox; he was 'bred and born' there and could **extricate** himself easily."
        },
        {
            id: "b8-l3-reading-q11",
            type: "multiple-choice",
            question: "Why do you think the same themes **recur** in folk tales from different countries?",
            options: [
                "Because they encompass the whole of human experience, which is similar everywhere; possibly spread by travelers.",
                "Because everyone copied each other.",
                "Because there is only one story.",
                "Coincidence."
            ],
            correctAnswer: "Because they encompass the whole of human experience, which is similar everywhere; possibly spread by travelers."
        },
        {
            id: "b8-l3-reading-q12",
            type: "multiple-choice",
            question: "What is *The Arabian Nights*?",
            options: [
                "A famous **anthology** (collection) of folk tales first recorded around the fourteenth century.",
                "A movie.",
                "A song.",
                "A place."
            ],
            correctAnswer: "A famous **anthology** (collection) of folk tales first recorded around the fourteenth century."
        },
        {
            id: "b8-l3-reading-q13",
            type: "multiple-choice",
            question: "What is the meaning of **encompass** as it is used in the passage?",
            options: [
                "To include; to contain (encompass the whole of human experience).",
                "To surround.",
                "To point directions.",
                "To measure."
            ],
            correctAnswer: "To include; to contain (encompass the whole of human experience)."
        },
        {
            id: "b8-l3-reading-q14",
            type: "multiple-choice",
            question: "In what way might a written folk tale differ from a spoken one?",
            options: [
                "A spoken tale is **modified** to fit the audience and changes; a written one is permanent.",
                "It is longer.",
                "It is shorter.",
                "It has pictures."
            ],
            correctAnswer: "A spoken tale is **modified** to fit the audience and changes; a written one is permanent."
        },
        {
            id: "b8-l3-reading-q15",
            type: "multiple-choice",
            question: "What **conjecture** is made in the passage about the age of folk tales?",
            options: [
                "That they probably go back to the very beginnings of language itself (before writing).",
                "That they are new.",
                "That they are 100 years old.",
                "That they started with the Internet."
            ],
            correctAnswer: "That they probably go back to the very beginnings of language itself (before writing)."
        }
    ]
};

export const b8_l3_facts: Story = {
    id: "b8-l3-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
*   A person who collects the best writings of different authors or poets and arranges them into an **anthology** could be compared to a person who gathers a variety of flowers and arranges them into a bouquet. If this comparison seems a little far-fetched, consider the origin of the word *anthology*. It comes from two Greek words, *anthos*, "flower," and *legein*, "to gather."

*   In addition to the definitions given in the word list, **imperative** has a grammatical meaning. It is the name for the mood of a verb used in giving orders or commands. In the sentence, "Stop him from crossing the street!", the verb *stop* is in the imperative mood.

*   William Shakespeare (1564–1616) is rightly regarded as one of the world's great writers; yet it would seem that he couldn't spell his own name! Samples of his signature that have survived show his name spelled in several different ways. Such variation, however, was common then with the spelling of many words, not just names. Not until the eighteenth century when dictionaries came into use was a single spelling for each word accepted as correct. A few words, however, escaped being standardized in this way; **instill** (which can also be spelled *instil*) is one of them. When a dictionary gives two different spellings of a word, the one given first is preferred.
`,
    wordsIncluded: ["anthology", "imperative", "instill"]
};
