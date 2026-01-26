import { Story, VocabularyWord } from "@/lib/types";

// Helper function defined locally
function createWord(id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, relatedWords: string[] = []): VocabularyWord {
    return {
        id,
        word,
        definition,
        exampleSentence,
        imageEmoji,
        category: "Grade 5",
    };
}

export const b5_l14_words: VocabularyWord[] = [
    createWord("b5-l14-w1", "Access", "1. Freedom or permission to enter. 2. A way of approach or entry. Able to be used or entered (accessible).", "The students want access to the gym this summer. The only access to the harbor is this channel. Franklin's Restaurant is accessible to people in wheelchairs.", "🚪", ["accessible"]),
    createWord("b5-l14-w2", "Associate", "1. To bring together in the mind. 2. To come or be together as friends or companions. 3. A person with whom one is connected in some way, as in business.", "Many people associate Florida with oranges. Because of her love of racehorses, Anne often associated with others who shared that love—jockeys and trainers. My father discussed a project with his associate at work.", "🤝"),
    createWord("b5-l14-w3", "Boisterous", "Noisy and uncontrolled.", "The Dixons' party became so boisterous that their neighbors complained.", "📢"),
    createWord("b5-l14-w4", "Brilliant", "1. Very bright; sparkling. 2. Very clever or smart.", "My black leather shoes had a brilliant shine. My oldest sister is so brilliant she might finish high school in three years.", "💎"),
    createWord("b5-l14-w5", "Decade", "A ten-year period.", "I have hope that the next decade will be better than the last.", "🗓️"),
    createWord("b5-l14-w6", "Delicate", "1. Easily broken or damaged. 2. Needing care and skill. 3. In poor health; weak.", "We always wash this delicate antique plate by hand. Convincing small children to share a toy can be a delicate task. Although Isabella Bird Bishop was a delicate child, as an adult, she traveled through many different parts of the world.", "🥚"),
    createWord("b5-l14-w7", "Employ", "1. To hire and put to work for pay. 2. To use.", "Carmen's gift shop employs four people. The clown employed every trick he knew to make the children laugh.", "💼"),
    createWord("b5-l14-w8", "Idle", "Doing nothing; not working. 1. To spend one's time doing nothing. 2. To run (an engine) slowly.", "The workers were idle while the power was shut off. Last Sunday, while my brother idled for more than an hour in the house, I raked leaves in the yard. Let the car idle for a few minutes so that the engine can warm up.", "🛑"),
    createWord("b5-l14-w9", "Illuminate", "1. To light up; to supply with light. 2. To make clear or understandable.", "The full moon illuminated the path through the woods to our cabin. The teacher's explanation illuminated the math problem for me.", "💡"),
    createWord("b5-l14-w10", "Provide", "1. To give what is needed; to supply. 2. To set forth as a condition.", "Two local companies provided the money to buy our school band uniforms. Our agreement with the teacher provides for a party if we turn our work in on time all year.", "🤲"),
    createWord("b5-l14-w11", "Require", "To need or demand. (Requirement: Something that is necessary.)", "Plants require light and water in order to grow. A place to sleep and a simple meal were Johnny Appleseed's only requirements.", "📋", ["requirement"]),
    createWord("b5-l14-w12", "Taunt", "To make fun of in an insulting way; to jeer. An insulting remark.", "Don't taunt someone just because that person appears different. An umpire learns to ignore the taunts of the crowd and just get on with the job.", "😝"),
    createWord("b5-l14-w13", "Tolerant", "Willing to let others have their own beliefs and ways, even if different from one's own. (Tolerate: To accept willingly and without complaining.)", "Traveling is both interesting and enjoyable if you are tolerant of customs that seem strange to you. You learn to tolerate a certain amount of noise when you live near an airport.", "😌", ["tolerate"]),
    createWord("b5-l14-w14", "Transform", "To change the form, looks, or nature of. (Transformation: A complete change.)", "A fresh coat of paint will transform this room. The transformation of the frog into a prince comes at the end of the story.", "🦋", ["transformation"]),
    createWord("b5-l14-w15", "Wilderness", "An area where there are few people living; an area still in its natural state.", "The Rocky Mountain states contain large areas of wilderness.", "🌲")
];

export const b5_l14_story_main: Story = {
    id: "b5-l14-story-main",
    title: "The Wizard of Menlo Park",
    type: "story",
    content: `Like other cities and towns in the late 1800s, New York City was a gloomy place at night. Streets were lit by flickering gas lights, if they were lit at all. Oil lamps or candles were all that people had to **illuminate** their homes. Thomas Edison had a better idea. In 1881, he built the world's first electric power station in Manhattan. He helped change New York into the **brilliantly** lit city we know today.

Edison was born in Ohio in 1847. When he was a small child, his family moved to Port Huron, Michigan. An attack of scarlet fever left him in **delicate** health. This worried his parents; they did not allow him to join in the **boisterous** games played at his school. The other children were not very **tolerant** of someone who stood apart from the rest, and young Edison had to suffer their **taunts**. His mother, who was a teacher, decided to take him out of school. She taught him at home, where he learned quickly. He asked many questions and liked to experiment on his own to find answers.

At that time, much of Michigan was **wilderness**. But the railroad was **transforming** America by making even the most remote places **accessible** to the rest of the country. When the railroad came to Port Huron, it **provided** Edison with his first job. At the age of twelve, he was given permission to sell newspapers and candy on the train that ran between his hometown and Detroit. He even printed his own newspaper, which he sold for three cents a copy.

At sixteen, he started working full time on the railroad. For the next four years, he was **employed** as a telegraph operator in different towns. However, there were large portions of the day when he had nothing to do, and Thomas Edison hated to be **idle**. In addition, he **required** only five or six hours of sleep a night. So it was during this time that he began working on inventions along with his experiments.

At twenty-one, he invented an electrical vote counter, for which he was given a patent. This meant that the government identified him as the person who thought up the idea and protected it so that it could not be made or sold by others without his permission. When he was thirty, Edison established a research center at Menlo Park, New Jersey. There he and his **associates** ran what was really an inventions factory.

Over the next five **decades**, Edison was granted over a thousand patents by the United States government. Perhaps his most famous invention was the electric light bulb. Other inventions included the record player (which he called a phonograph) and the movie camera. These things seemed like magic to people; it isn't surprising that he became known as the "Wizard of Menlo Park." The once sickly child outlived most of his schoolmates—when he died in 1931, he was eighty-four years old.`,
    wordsIncluded: [
        "brilliant", "decade", "transform", "idle", "employ", "illuminate", "delicate",
        "tolerant", "taunt", "require", "provide", "access", "wilderness", "associate", "boisterous"
    ]
};

export const b5_l14_story_1: Story = {
    id: "b5-l14-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, choose it. Select all that apply.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. **access**\n(a) Use as much paint as you need and throw the **access** away.\n(b) My sister has **access** to all the clothes in my closet, too.\n(c) The only **access** to the theater was through the stage door.\n(d) The top shelf was only **accessible** when using a stool.",
            options: ["b, c and d", "a only", "b and c"],
            correctAnswer: "b, c and d"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. **delicate**\n(a) The glass ornaments are **delicate** and must be handled carefully.\n(b) Igasho's fear of cats was a **delicate** subject that we never talked about.\n(c) A person in **delicate** health is told to stay home during flu season.\n(d) Chocolate candy and other **delicates** were laid out on the counter.",
            options: ["a, b and c", "d only", "a and c"],
            correctAnswer: "a, b and c"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. **brilliant**\n(a) The **brilliants** were full of water.\n(b) It took a team of **brilliant** minds to crack the secret code.\n(c) A **brilliant** emerald ring sold for fifteen hundred dollars.\n(d) Using lots of **brilliant** will make your teeth shine.",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. **tolerant**\n(a) Some viruses become **tolerant** of drugs developed to fight them.\n(b) Living with siblings makes you **tolerant** of other people.\n(c) The weather had become more **tolerant** by the time May arrived.\n(d) My teacher **tolerated** my report a good grade.",
            options: ["a and b", "c and d", "b only"],
            correctAnswer: "a and b"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. **transform**\n(a) Within a few years, the invention of the airplane had **transformed** travel.\n(b) We were **transformed** that the restaurant was closed for the evening.\n(c) The man closed the door with a **transformation**.\n(d) The beautiful day was suddenly **transformed** into a stormy mess.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. **illuminate**\n(a) The **illuminates** flickered and went out, leaving us in total darkness.\n(b) A beam of sunlight **illuminated** the tree.\n(c) What the teacher said **illuminated** something I hadn't understood before.\n(d) I became more and more **illuminated** as I turned out the lights.",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. **idle**\n(a) The **idle** child was too lazy to get out of bed in the morning.\n(b) We didn't have one **idle** moment during the whole trip.\n(c) Allow the engine to **idle** for a minute before turning it off.\n(d) The magazine was full of pictures of Hollywood movie **idles**.",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. **employ**\n(a) Try not to **employ** the flowers before they're fully bloomed.\n(b) The tire factory **employs** over five thousand people.\n(c) Davonne **employed** a brilliant attack that won the video game.\n(d) We **employed** her to stay longer, but her mind was made up.",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. **require**\n(a) Visitors to the park are **required** to keep dogs on leashes.\n(b) You are **required** to check your backpack at the gate.\n(c) Give me a hug before I **require** for the night.\n(d) There were many **requires** to be answered after I got back.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. **associate**\n(a) Eight **associate** justices and one chief justice form the Supreme Court.\n(b) I **associate** Florida with the beach.\n(c) We **associated** with all kinds of people during our field trip.\n(d) Tomiko grew more and more **associated** as the days passed.",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        }
    ],
    wordsIncluded: ["access", "delicate", "brilliant", "tolerant", "transform", "illuminate", "idle", "employ", "require", "associate"]
};

export const b5_l14_story_2: Story = {
    id: "b5-l14-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Circle the letter next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *weak*?\n(a) puny\n(b) brilliant\n(c) feeble\n(d) delicate",
            options: ["a, c and d", "b only", "c and d"],
            correctAnswer: "a, c and d"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *not busy*?\n(a) idle\n(b) boisterous\n(c) sluggish\n(d) tolerant",
            options: ["a only", "c and d", "a and c"],
            correctAnswer: "a only"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *make fun of*?\n(a) humiliate\n(b) transform\n(c) taunt\n(d) dedicate",
            options: ["c only", "a and c", "b and d"],
            correctAnswer: "c only" // Humiliate is stronger/different
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *change*?\n(a) transform\n(b) provide\n(c) employ\n(d) associate",
            options: ["a only", "b and c", "d and a"],
            correctAnswer: "a only"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *forest*?\n(a) suspect\n(b) wilderness\n(c) bondage\n(d) taunt",
            options: ["b only", "a and c", "d and b"],
            correctAnswer: "b only"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *smart*?\n(a) shrewd\n(b) delicate\n(c) boisterous\n(d) brilliant",
            options: ["a and d", "b and c", "d only"],
            correctAnswer: "a and d"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *easygoing*?\n(a) patient\n(b) tolerant\n(c) rebellious\n(d) tempestuous",
            options: ["a and b", "c and d", "b only"],
            correctAnswer: "a and b"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *give*?\n(a) provide\n(b) employ\n(c) donate\n(d) transform",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *time*?\n(a) duration\n(b) century\n(c) decade\n(d) requirement",
            options: ["a, b and c", "d only", "b and c"],
            correctAnswer: "a, b and c"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *uncontrolled*?\n(a) boisterous\n(b) delicate\n(c) spacious\n(d) tolerant",
            options: ["a only", "b and d", "c and a"],
            correctAnswer: "a only"
        }
    ],
    wordsIncluded: ["delicate", "idle", "taunt", "transform", "wilderness", "brilliant", "tolerant", "provide", "decade", "boisterous"]
};

export const b5_l14_story_3: Story = {
    id: "b5-l14-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. We associated\n(a) the kangaroos with Australia.\n(b) with all kinds of people.\n(c) crossing your fingers with good luck.\n(d) the ball back and forth before the game.",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. The illumination\n(a) of the pictures on the wall make them show up better at night.\n(b) of nostalgic thoughts occupy my mind.\n(c) in the dirt was cleaned off the sidewalk.\n(d) suddenly hit me—I knew the answer to the math problem.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. You provided\n(a) whatever was needed to get the project started.\n(b) for those who depended on you.\n(c) that you can be trusted.\n(d) the cake into eight pieces.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b" // (c) is "proved" maybe? "Provided that" is a phrase but "You provided that you can be trusted" sounds awkward vs "You proved". "Our agreement provides for/that" is correct.
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. The requirement\n(a) for attending the lunch was to choose between pizza or a veggie burger.\n(b) at recess was extremely tall and skinny.\n(c) to dance was full of sunshine and meadows.\n(d) before riding the Ferris wheel was to read the warning.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. The taunting\n(a) kept us dry when it started to rain.\n(b) on the shirt came off in the wash.\n(c) of the crowd didn't bother him at all.\n(d) rang in my ears for the rest of the day.",
            options: ["c and d", "a and b", "c only"],
            correctAnswer: "c and d"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. Employment\n(a) is promised to the first twenty people who apply.\n(b) of all the wood will make the biggest bonfire.\n(c) on the sunflower seeds, water, and soil.\n(d) number 507 is on the fifth floor.",
            options: ["a only", "b and d", "a and b"], // (b) Employ/Use wood? Maybe. "Employment of wood". Valid.
            correctAnswer: "a and b"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. A boisterous\n(a) look from my mom told me I was in trouble.\n(b) child should be told to calm down.\n(c) party can be annoying to the neighbors.\n(d) relaxation spread over me.",
            options: ["b and c", "a and d", "b only"],
            correctAnswer: "b and c"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. Leon accessed\n(a) the house through the back door.\n(b) if he could take the test tomorrow.\n(c) into the tissue.\n(d) the mine by traveling down the shaft.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        }
    ],
    wordsIncluded: ["associate", "illuminate", "provide", "require", "taunt", "employ", "boisterous", "access"]
};

export const b5_l14_story_4: Story = {
    id: "b5-l14-story-4",
    title: "Completing Sentences",
    type: "exercise",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    questions: [
        {
            id: "cs-q1",
            type: "multiple-choice",
            question: "1. If you are in **delicate** health, that means you",
            options: ["get sick easily.", "are very strong.", "like to exercise.", "eat healthy food."],
            correctAnswer: "get sick easily."
        },
        {
            id: "cs-q2",
            type: "multiple-choice",
            question: "2. A **brilliant** scientist is one who",
            options: ["is very clever and makes great discoveries.", "wears bright clothes.", "works in the dark.", "is lazy."],
            correctAnswer: "is very clever and makes great discoveries."
        },
        {
            id: "cs-q3",
            type: "multiple-choice",
            question: "3. Something I often **tolerate** is",
            options: ["loud noise from the street.", "eating ice cream.", "winning games.", "receiving gifts."],
            correctAnswer: "loud noise from the street."
        },
        {
            id: "cs-q4",
            type: "multiple-choice",
            question: "4. An example of a **taunt** might be",
            options: ["calling someone a mean name.", "giving a compliment.", "saying hello.", "waving goodbye."],
            correctAnswer: "calling someone a mean name."
        },
        {
            id: "cs-q5",
            type: "multiple-choice",
            question: "5. One **requirement** for college is",
            options: ["graduating from high school.", "owning a boat.", "being tall.", "liking pizza."],
            correctAnswer: "graduating from high school."
        },
        {
            id: "cs-q6",
            type: "multiple-choice",
            question: "6. If someone is an **associate**, he or she is",
            options: ["a partner or colleague.", "a fierce enemy.", "a stranger.", "a pet."],
            correctAnswer: "a partner or colleague."
        },
        {
            id: "cs-q7",
            type: "multiple-choice",
            question: "7. Something I **provided** today was",
            options: ["help to my friend.", "a secret.", "a nap.", "nothing."],
            correctAnswer: "help to my friend."
        },
        {
            id: "cs-q8",
            type: "multiple-choice",
            question: "8. In the **wilderness**, you will find",
            options: ["trees, animals, and few people.", "skyscrapers and subways.", "shopping malls.", "factories."],
            correctAnswer: "trees, animals, and few people."
        },
        {
            id: "cs-q9",
            type: "multiple-choice",
            question: "9. To **access** my bedroom, I need to",
            options: ["open the door.", "climb the roof.", "dig a tunnel.", "swim."],
            correctAnswer: "open the door."
        },
        {
            id: "cs-q10",
            type: "multiple-choice",
            question: "10. I like to spend my **idle** time by",
            options: ["reading a book.", "rushing to school.", "working hard.", "doing chores."],
            correctAnswer: "reading a book."
        }
    ],
    wordsIncluded: ["delicate", "brilliant", "tolerate", "taunt", "require", "associate", "provide", "wilderness", "access", "idle"]
};

export const b5_l14_story_5_facts: Story = {
    id: "b5-l14-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   Several nouns are formed from the verb **employ**. An *employee* is a person who works for someone else and is paid for this. An *employer* is a person who gives work to others and pays them. *Employment* is the state of having work or the work itself.

*   **Idle** and *idol* are homophones. An *idol* is something, such as a carved figure, that is worshiped as a god. It can also be a person, such as an author, who is admired.

*   **Illuminate** comes from *lumen*, the Latin word for "light." Other English words that are formed from this root include *luminous*, which means "glowing with light," and *luminosity*, which refers to the amount of light given off from something—for example, from a star. (One of the stars with the greatest *luminosity* that we can see without a telescope, apart from our own sun, is Sirius, also known as the Dog Star.)`,
    wordsIncluded: [
        "employ", "idle", "illuminate"
    ]
};
