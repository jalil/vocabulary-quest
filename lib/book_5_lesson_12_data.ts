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

export const b5_l12_words: VocabularyWord[] = [
    createWord("b5-l12-w1", "Convalesce", "To get back health and strength after an illness.", "After the operation on my knee, I will convalesce at home.", "🛌"),
    createWord("b5-l12-w2", "Dedicate", "1. To set aside for a certain purpose. 2. To devote to a serious purpose. 3. To name, address, or set aside as an honor.", "My parents dedicate part of their income to saving for my college education. Madame Curie dedicated her life to science. The authors dedicated the book to their two children.", "🎗️", ["dedication"]),
    createWord("b5-l12-w3", "Dictate", "1. To give orders; to command. 2. To say aloud while another writes down the words.", "The law dictates that children attend school until they are sixteen. I dictated a letter to my little brother, and he wrote down every word I said.", "🗣️", ["dictator"]),
    createWord("b5-l12-w4", "Exasperate", "To make angry; to annoy.", "My brother exasperates my parents because he uses his phone so much.", "😤", ["exasperating"]),
    createWord("b5-l12-w5", "Notable", "Deserving of attention; outstanding.", "Michelle Obama was one of the most notable first ladies to ever occupy the White House.", "🌟"),
    createWord("b5-l12-w6", "Overdue", "1. Coming later than expected or needed. 2. Unpaid when owed.", "The bus from Boston is overdue. My aunt never allows her bills to become overdue.", "⏰"),
    createWord("b5-l12-w7", "Overthrow", "1. To end the rule of; to defeat, often by using force. 2. The action of overthrowing.", "If we overthrow the king, who will take his place? The Polish people finally overthrew the Communist government that had been in power for more than forty years. Countries sometimes attempt an overthrow of their ruler.", "✊"),
    createWord("b5-l12-w8", "Penetrate", "1. To pierce. 2. To pass into or through.", "Luckily, the piece of glass Irma stepped on did not penetrate her foot. Very little light penetrated the dense forest.", "📍"),
    createWord("b5-l12-w9", "Portrait", "A drawing, painting, or photograph of a person, especially the face.", "The famous portrait known as the Mona Lisa is in the Louvre, in Paris.", "🖼️"),
    createWord("b5-l12-w10", "Rebel", "1. A person who refuses to obey orders or the law. 2. To refuse to accept control by others.", "If the rebels continue to gain popular support, they will be a serious threat to the government. The small children rebelled when their parents told them to go to bed.", "🚩", ["rebellious", "rebellion"]),
    createWord("b5-l12-w11", "Restrict", "To keep within certain limits.", "We restrict this pathway to people riding bicycles.", "🚫", ["restriction"]),
    createWord("b5-l12-w12", "Seldom", "Not often; rarely.", "Because the sun's rays are so strong, we seldom spend the whole day at the beach.", "🌑"),
    createWord("b5-l12-w13", "Stimulate", "To make more active.", "The aroma of black bean soup from the kitchen stimulated my appetite for lunch.", "⚡"),
    createWord("b5-l12-w14", "Tempest", "A violent windstorm usually with snow, rain, or hail.", "A tempest at sea is a sailor's greatest fear.", "🌪️", ["tempestuous"]),
    createWord("b5-l12-w15", "Upbringing", "The care and training a child gets while growing up.", "My parents work very hard to give my brothers and me a wonderful upbringing.", "👪")
];

export const b5_l12_story_main: Story = {
    id: "b5-l12-story-main",
    title: "A Child of the Revolution",
    type: "story",
    content: `Frida Kahlo was born in Coyoacán, just outside Mexico City, in 1907. Her parents probably thought her life would develop much as the lives of other girls of that time. The Mexican **dictator** Porfirio Díaz had been governing for almost thirty years. Under his rule women were **restricted** from taking any part in public life. Furthermore, Frida's parents gave her and her three sisters a strict Catholic **upbringing**. The girls were expected to be obedient daughters and to become good Catholic wives and mothers.

But in 1910, when Frida was three years old, everything changed in Mexico. The people **overthrew** Díaz and established a much more open government. The new government speedily set about making many changes that were long **overdue**. Education and health care became more widely available. More significantly for Frida Kahlo's future, the new government set out to **stimulate** interest in the arts by supporting the work of Mexican artists.

Her three sisters were largely unaffected by these changes. But Frida, who was the **rebellious** one, took part in them. She seemed to enjoy shocking people. One of the ways she did this was to go about wearing men's clothes. She was a firm supporter of the 1910 revolution; as an adult she claimed to have been born that year so that she could call herself "a child of the revolution." Her Mexican mother and German father must have despaired of her at times. They couldn't have known that their lively daughter would grow up to become one of Latin America's most **notable** painters.

Frida Kahlo had a difficult childhood. At the age of six she contracted polio. That left her with a weakened right leg. Then, in her late teens, she suffered terrible injuries when she was thrown from a bus onto a metal spike. The spike **penetrated** her side, almost killing her.

While she **convalesced**, she began to paint. This was a way of taking her mind off the severe pain, from which she was **seldom** free for the rest of her life. Many of her paintings are self-**portraits**; in them she often included the parrots, monkeys, and other pets whose company gave her so much pleasure. Despite their bold, bright colors, however, the paintings clearly express the pain that lies behind them. Kahlo's art was her way of inviting the viewer to share her suffering.

She first met her future husband, the painter Diego Rivera, in 1922, when she was fifteen. They married seven years later. He was twice her age and already a world-famous artist. The marriage was a **tempestuous** one with many separations, a divorce, and later a remarriage. They both had strong personalities and each found the other **exasperating** to live with. Nevertheless, their love was strong and deep; Rivera appears frequently in her paintings.

Toward the end of her life, they lived together in the house where she was born, Casa Azul (the Blue House). After Kahlo's death in 1954, Rivera gave it to the people of Mexico. Now, known as the Frida Kahlo Museum, it is **dedicated** to her life and work. The fame of both artists has grown over the years. In 2015, the Detroit Institute of Arts brought together over seventy of their paintings and murals. The artwork on display showed clearly how much they had influenced each other's work.`,
    wordsIncluded: [
        "dictate", "restrict", "upbringing", "overthrow", "overdue", "stimulate",
        "rebel", "notable", "penetrate", "convalesce", "seldom", "portrait",
        "tempest", "exasperate", "dedicate"
    ]
};

export const b5_l12_story_5_facts: Story = {
    id: "b5-l12-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   **Dictate** is formed from the Latin verb *dicere*, which means "to say" or "to speak." Other words formed from this root include *diction*, "a person's manner or way of speaking," and *contradict*, "to say the opposite of."

*   Three nouns are formed from the verb **stimulate**. *Stimulation* is the act of stimulating. (The aroma of freshly baked bread was the only *stimulation* we needed to enter the bakery.) A *stimulant* is a substance that increases bodily activity. (The caffeine in coffee and cola drinks is a *stimulant*.) A *stimulus* is anything that increases activity of any kind. (The reward of $50 was a *stimulus* to the children who were looking for the lost dog.)`,
    wordsIncluded: [
        "dictate", "stimulate"
    ]
};

export const b5_l12_story_1: Story = {
    id: "b5-l12-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, choose C. If the word is used incorrectly, choose I.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. (a) The teacher **dictated** that no one could work together on the test.\n(b) One person should not **dictate** what happens to the whole group.\n(c) She **dictated** her speech to her secretary.\n(d) The park is **dictated** to everyone who enjoys it.",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. (a) A **rebellion** of yellow flowers covered the hillside.\n(b) My older sister has always been the **rebel** in our family.\n(c) It would cost **rebellions** of dollars to fix the broken windows.\n(d) Reading the long list of rules made us feel **rebellious**.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. (a) The **tempest** at sea made boats race toward the harbor.\n(b) The feud became more **tempestuous** when neither person would apologize.\n(c) I closed the door softly because of the **tempest** sleeping in the bed.\n(d) The **tempest** moment came just before the end of the race.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. (a) Active community members **dedicate** their lives to improving their neighborhoods.\n(b) The author **dedicated** her first novel to her family.\n(c) Ten dollars was **dedicated** from my purse.\n(d) The only **dedication** I took was a cough drop.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. (a) I **restricted** my remarks to safe topics like the weather.\n(b) The trails are **restricted** to foot travel, which means no vehicles are allowed.\n(c) The **restrictions** tasted like lemon and mint.\n(d) I **restrict** myself to one hour of TV a day.",
            options: ["a, b and d", "c only", "a and b"],
            correctAnswer: "a, b and d"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. (a) Jorge **seldom** thinks of the house he grew up in.\n(b) Dad's favorite **seldom** is making sure we get to school safely.\n(c) Anya had a short **seldom** published in the school paper.\n(d) Since Kaysha moved to Seattle, I **seldom** hear from her.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. (a) The **portrait** was done with watercolors and ink.\n(b) George Washington grew up in a **portrait** on a farm.\n(c) You have to show your **portrait** before boarding the school bus.\n(d) The two **portraits** show Frederick Douglass with and without a beard.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. (a) The soldiers won a **notable** victory at Gettysburg.\n(b) We took a few **notables** with us in case we got hungry.\n(c) I made a **notable** in my diary that today was the first day of spring.\n(d) The score wasn't **notable** until the last seconds of the game.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. (a) A person's **upbringing** should include the freedom to explore.\n(b) The **upbringing** of my birthday isn't necessary.\n(c) Maya's positive **upbringing** explains how kind she is to everyone.\n(d) We assembled the **upbringing** and set it in the corner.",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. (a) You pay a fine for library books that are **overdue**.\n(b) The plane is **overdue** because of strong winds.\n(c) I've learned to **overdue** the names of my friends.\n(d) I was able to **overdue** the others and won the race comfortably.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        }
    ],
    wordsIncluded: ["dictate", "rebel", "tempest", "dedicate", "restrict", "seldom", "portrait", "notable", "upbringing", "overdue"]
};

export const b5_l12_story_2: Story = {
    id: "b5-l12-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Match the definition to the correct word.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *get better*?",
            options: ["dedicate", "revive", "restrict", "convalesce"],
            correctAnswer: "convalesce"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *believe something strongly*?",
            options: ["overdue", "confident", "exasperate", "notable"],
            correctAnswer: "confident"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *annoy*?",
            options: ["frustrate", "stimulate", "exasperate", "liberate"],
            correctAnswer: "exasperate"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *defeat*?",
            options: ["overthrow", "utilize", "restrict", "penetrate"],
            correctAnswer: "overthrow"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *enter into*?",
            options: ["penetrate", "bore", "exasperate", "pierce"],
            correctAnswer: "penetrate"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *more active*?",
            options: ["penetrate", "stimulate", "convalesce", "dictate"],
            correctAnswer: "stimulate"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *famous*?",
            options: ["notable", "exasperating", "tempestuous", "celebrated"],
            correctAnswer: "notable"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *lack of respect*?",
            options: ["hearty", "melancholy", "modest", "rebellious"],
            correctAnswer: "rebellious"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *how often*?",
            options: ["reassuringly", "seldom", "occasionally", "frequently"],
            correctAnswer: "seldom"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *put a stop to*?",
            options: ["ban", "dedicate", "terminate", "restrict"],
            correctAnswer: "restrict"
        }
    ],
    wordsIncluded: ["convalesce", "exasperate", "overthrow", "penetrate", "stimulate", "notable", "rebellious", "seldom", "restrict"]
};

export const b5_l12_story_3: Story = {
    id: "b5-l12-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. She **dictated**\n(a) where and how people should live.\n(b) two sticks together to make a fire.\n(c) the dishes after midnight.\n(d) what time we should get up tomorrow.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. **Tempestuous**\n(a) times are when we most need calm leadership.\n(b) weather kept the kids indoors.\n(c) emotions could be seen in the audience at the graduation.\n(d) creatures three stories high once roamed Earth.",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. An **overdue**\n(a) bill needs to be paid promptly.\n(b) book must be returned to the library.\n(c) remark can sometimes hurt a person's feelings.\n(d) train will be late coming into the station.",
            options: ["a, b and d", "c only", "a and b"],
            correctAnswer: "a, b and d"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. The **overthrown**\n(a) governor has not yet said anything to the press.\n(b) leader of the country was actually happy to not be in charge any longer.\n(c) ice is kept in a separate container.\n(d) wind turned the boat upside down and almost sank it.",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. I was **exasperated**\n(a) when I wasn't allowed into the concert.\n(b) for not being truthful when I was asked a question.\n(c) in an ambulance to the hospital emergency room.\n(d) to see my name had been left off the list.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. The **dedication**\n(a) was to her parents and sisters.\n(b) was built in 1849 and is still standing.\n(c) at the cemetery entrance honored the lives of all those buried there.\n(d) of the new school took an hour, and then we went home.",
            options: ["a, c and d", "b only", "a and d"],
            correctAnswer: "a, c and d"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. Something **stimulated**\n(a) my appetite, and I suddenly felt hungry.\n(b) another painting for the wall.\n(c) on the chair in the corner of the room.\n(d) my curiosity, so I had to ask him why.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. The artist's **portrait**\n(a) gurgled and growled hungrily.\n(b) is in the back of the museum.\n(c) drank a full gallon of milk.\n(d) is of a woman holding flowers.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        }
    ],
    wordsIncluded: ["dictate", "tempestuous", "overdue", "overthrow", "exasperate", "dedicate", "stimulate", "portrait"]
};

export const b5_l12_story_4: Story = {
    id: "b5-l12-story-4",
    title: "Completing Sentences",
    type: "exercise",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    questions: [
        {
            id: "cs-q1",
            type: "multiple-choice",
            question: "1. If you **dedicate** your weekends to something, that means you",
            options: ["give all your time and attention to it.", "rarely do it.", "force others to do it.", "complain about it."],
            correctAnswer: "give all your time and attention to it."
        },
        {
            id: "cs-q2",
            type: "multiple-choice",
            question: "2. One thing I find **exasperating** is",
            options: ["waiting in long lines.", "eating ice cream.", "sleeping late.", "winning a game."],
            correctAnswer: "waiting in long lines."
        },
        {
            id: "cs-q3",
            type: "multiple-choice",
            question: "3. A **portrait** of me would be of",
            options: ["my face.", "my house.", "my pet.", "my car."],
            correctAnswer: "my face."
        },
        {
            id: "cs-q4",
            type: "multiple-choice",
            question: "4. A good **upbringing** means having",
            options: ["loving parents who teach you well.", "lots of toys.", "no rules.", "expensive clothes."],
            correctAnswer: "loving parents who teach you well."
        },
        {
            id: "cs-q5",
            type: "multiple-choice",
            question: "5. You need to **convalesce** if",
            options: ["you are recovering from surgery.", "you are perfectly healthy.", "you are late for school.", "you are hungry."],
            correctAnswer: "you are recovering from surgery."
        },
        {
            id: "cs-q6",
            type: "multiple-choice",
            question: "6. If a friendship is **tempestuous**, that means it is",
            options: ["stormy and full of arguments.", "calm and peaceful.", "boring.", "new."],
            correctAnswer: "stormy and full of arguments."
        },
        {
            id: "cs-q7",
            type: "multiple-choice",
            question: "7. Something that **stimulates** my mind is",
            options: ["a challenging puzzle.", "a boring movie.", "sleeping.", "staring at a wall."],
            correctAnswer: "a challenging puzzle."
        },
        {
            id: "cs-q8",
            type: "multiple-choice",
            question: "8. The name of one **notable** person I know of is",
            options: ["Martin Luther King Jr.", "my neighbor's cat.", "a random stranger.", "myself."],
            correctAnswer: "Martin Luther King Jr."
        },
        {
            id: "cs-q9",
            type: "multiple-choice",
            question: "9. Something I **seldom** do is",
            options: ["fly to the moon.", "eat dinner.", "brush my teeth.", "sleep."],
            correctAnswer: "fly to the moon."
        },
        {
            id: "cs-q10",
            type: "multiple-choice",
            question: "10. To **penetrate** a piece of paper, you could",
            options: ["poke a pencil through it.", "look at it.", "fold it.", "color it."],
            correctAnswer: "poke a pencil through it."
        }
    ],
    wordsIncluded: ["dedicate", "exasperate", "portrait", "upbringing", "convalesce", "tempestuous", "stimulate", "notable", "seldom", "penetrate"]
};
