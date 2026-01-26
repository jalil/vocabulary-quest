import { Story, VocabularyWord } from "@/lib/types";

// Helper function defined locally since not exported globally
function createWord(id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string, relatedWords: string[] = []): VocabularyWord {
    return {
        id,
        word,
        definition,
        exampleSentence,
        imageEmoji,
        category: "Grade 5",
        // pronunciation: "" // simplified
    };
}

export const b5_l10_words: VocabularyWord[] = [
    createWord("b5-l10-w1", "Available", "Easy to get; present and ready for use.", "The salesperson said the jacket was available in black, brown, and white.", "✅"),
    createWord("b5-l10-w2", "Bondage", "The state of being enslaved.", "It is shocking that some people still live in bondage in the twenty-first century.", "🔗"),
    createWord("b5-l10-w3", "Donate", "To give to those in need, often through an organization.", "People across the country donated food and clothing to the victims of the flood.", "🎁", ["donation"]),
    createWord("b5-l10-w4", "Establish", "1. To set up or begin. 2. To find out facts that show something to be true.", "The principal wants to establish an after-school music program. Space scientists are trying to establish if there is water on Mars.", "🏛️", ["establishment", "established"]),
    createWord("b5-l10-w5", "Evade", "To keep away from; to avoid being caught.", "The chipmunk evaded the cat by scrambling up a tree.", "🏃", ["evasive"]),
    createWord("b5-l10-w6", "Liberate", "To free.", "A group objecting to trapping animals opened the monkey cages and liberated the animals inside them.", "🕊️"),
    createWord("b5-l10-w7", "Numerous", "A large number; very many.", "The bus makes numerous stops before it leaves us at school.", "🔢"),
    createWord("b5-l10-w8", "Occasion", "A particular time; A special event.", "My grandparents' anniversary party was a fun occasion for the whole family.", "🎉", ["occasional"]),
    createWord("b5-l10-w9", "Oppose", "To be or act against.", "Moin, my best friend, will oppose me in the chess tournament.", "🆚", ["opposition"]),
    createWord("b5-l10-w10", "Prohibit", "To forbid by law or order.", "The law now prohibits smoking in many public places.", "🚫"),
    createWord("b5-l10-w11", "Pursue", "To follow in order to capture; to chase.", "Police pursued the stolen car in a high-speed chase across town.", "🚓", ["pursuit"]),
    createWord("b5-l10-w12", "Reassure", "To make less worried or fearful; to comfort.", "I was nervous before the recital, but my piano teacher reassured me.", "😌", ["reassurance", "reassuring"]),
    createWord("b5-l10-w13", "Reluctant", "Not wanting to do something; unwilling.", "We were reluctant to leave our warm beds when we saw the ice on the windows.", "😒", ["reluctance"]),
    createWord("b5-l10-w14", "Superior", "Excellent of its kind; Higher in position or rank.", "Margot made the team because she is a superior runner.", "🥇"),
    createWord("b5-l10-w15", "Yearn", "To want very badly; to be filled with longing.", "Dorothy told the Wizard of Oz that she yearned to be back in Kansas.", "🌠", ["yearning"])
];

export const b5_l10_story_main: Story = {
    id: "b5-l10-story-main",
    title: "With Moses to the Promised Land",
    type: "story",
    content: `Harriet Tubman was born enslaved in Maryland in 1820. From the time she was a young child, she **yearned** to be free. The hard physical work that she was forced to do made her very strong. And though as an enslaved person she received no education, she was also intelligent and quick-thinking. She put these qualities to good use, first in making her own escape and later in helping others to do the same.

When Harriet was in her late twenties, the slave owner she was forced to work for died. She feared she would be sold and sent to the deep South. There the work was harder and slave owners more cruel. She decided to escape instead. She urged her brothers to come with her on the journey north. They **reluctantly** joined her. Soon after they set out, though, her brothers turned back. They were afraid of being caught. So Harriet continued alone, traveling mostly at night. Eventually she made it safely to Philadelphia. Although she had found freedom, she couldn't enjoy it; so many others, including her family, were still living in **bondage**.

In 1850, Congress passed a law making it a crime to help runaway enslaved people. But over the next eleven years, Harriet returned **numerous** times to the South to lead other enslaved people to Canada. In Canada, slavery was **prohibited** and people who had escaped slavery were welcome. Altogether during this time she helped to **liberate** over three hundred people. That number included her parents and brothers and sisters. Along the way she stayed with people who offered food and shelter in their homes, often at great risk to themselves. These houses were called "stations" on what became known as the Underground Railroad.

Between trips, Harriet took whatever jobs were **available**—cooking, sewing, or cleaning. She used some of her money to help formerly enslaved people start new lives. She always saved some of it for her next journey south. She had many friends who **opposed** slavery; when she needed money for her work, they would help her by making **donations**.

Slave owners were furious at having their "property" stolen. They offered as much as forty thousand dollars for Harriet Tubman's capture. She was often **pursued** by people who wanted the reward. She had many narrow escapes, but she always managed to **evade** being caught. The enslaved people she helped called her Moses because she led them to freedom, just as Moses had led the Jewish people out of slavery in Egypt thousands of years earlier.

During the Civil War, Harriet Tubman worked for the North as a nurse in the Union army. Enslaved people had been taught by slave owners to be afraid of the Union soldiers. But Harriet went behind enemy lines and was able to **reassure** them. They believed her when she told them they had nothing to fear from the Union army. On some **occasions** while there, she acted as a spy, reporting to her **superiors** when she returned to the Union side. After the war she worked energetically to start schools in the South for freed people, even though she herself could not read or write. She eventually settled in Auburn, New York, where she **established** a nursing home for elderly African Americans. When she died in 1913, thousands mourned this courageous woman who had helped so many people.`,
    wordsIncluded: [
        "bondage", "yearn", "evade", "oppose", "liberate", "numerous", "occasion",
        "reluctant", "reassure", "superior", "pursue", "establish", "available", "prohibit"
    ]
};

export const b5_l10_story_1_context: Story = {
    id: "b5-l10-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Select the sentences that use the word in bold correctly.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. **donate**\n(a) The donation said I was hired and asked when I could start.\n(b) I donated ten dollars to the Animal Welfare Fund.\n(c) People can donate blood if they choose to.\n(d) The man's donations thumped his chest.",
            options: ["b", "c", "b and c"],
            correctAnswer: "b and c"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. **evade**\n(a) People who evade doing their homework may find themselves in trouble.\n(b) Tiger ants are evading the country through the south.\n(c) The prey must stay alert at all times to evade the hunter.\n(d) Wanda was evasive when her mother asked where she'd been.",
            options: ["a, c and d", "b only", "all of them"],
            correctAnswer: "a, c and d"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. **prohibit**\n(a) The trophy is prohibited with the name of the winner.\n(b) Campfires are prohibited when the weather is very dry.\n(c) The rainbow prohibited a rush of people to the window.\n(d) Eating is prohibited in the classroom.",
            options: ["b and d", "a and c", "All of them"],
            correctAnswer: "b and d"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. **reluctant**\n(a) I was reluctant to enter because I was afraid of what I'd find.\n(b) I earn reluctance from my parents for doing the dishes every night.\n(c) Nadine showed some reluctance when she was asked to talk in front of the crowd.\n(d) The weather here is too reluctant for snow.",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. **superior**\n(a) Soldiers should salute their superior officers.\n(b) Some believe cheddar cheese is superior to Swiss cheese.\n(c) There are hidden chambers in the Great Pyramid's superior.\n(d) The earth's superior is a core of molten iron.",
            options: ["a and b", "c and d", "All of them"],
            correctAnswer: "a and b"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. **pursuit**\n(a) Eva grabbed her pursuit and took out some money.\n(b) One of the pursuits Tasha enjoys is jogging.\n(c) Purple is my favorite pursuit.\n(d) We were in pursuit of the cute rabbit when it ducked under a fence and disappeared.",
            options: ["b and d", "a and c", "All of them"],
            correctAnswer: "b and d"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. **occasion**\n(a) I visit my aunt In Sacramento occasionally.\n(b) Your birthday is an occasion to celebrate.\n(c) We met three times, and on each occasion he ignored me.\n(d) My favorite occasion is the baseball diamond.",
            options: ["a, b and c", "d only", "All of them"],
            correctAnswer: "a, b and c"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. **oppose**\n(a) There was no opposition to the students' request for a baseball club.\n(b) He said I owed him money, but actually the opposition was true.\n(c) Judah will oppose Shakir in the tennis final.\n(d) I oppose to stay in New York before leaving for Miami.",
            options: ["a and c", "b and d", "All of them"],
            correctAnswer: "a and c"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. **numerous**\n(a) There are numerous stars in the night sky.\n(b) We started to feel numerous as the temperature dropped.\n(c) See a doctor right away if the wound starts to get numerous.\n(d) The orange leaves on the tree are starting to become more numerous.",
            options: ["a and d", "b and c", "All of them"],
            correctAnswer: "a and d"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. **establish**\n(a) My favorite old establishment in town is the drive-in movie theater.\n(b) The U.S. Marine Corps was established in 1798.\n(c) The study established that texting is the main cause of car accidents.\n(d) The girl established her best friend and then went into the house.",
            options: ["a, b and c", "d only", "All of them"],
            correctAnswer: "a, b and c"
        }
    ],
    wordsIncluded: ["b5-l10-w3", "b5-l10-w5", "b5-l10-w10", "b5-l10-w13", "b5-l10-w14", "b5-l10-w11", "b5-l10-w8", "b5-l10-w9", "b5-l10-w7", "b5-l10-w4"]
};

export const b5_l10_story_2_connections: Story = {
    id: "b5-l10-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Match the word to its meaning.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with **slavery**?",
            options: ["bondage", "liberate", "victim", "donation"],
            correctAnswer: "bondage"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with **ready for something**?",
            options: ["occasional", "reluctant", "evasive", "available"],
            correctAnswer: "available"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with **once in a while**?",
            options: ["eventually", "occasionally", "numerously", "desperately"],
            correctAnswer: "occasionally"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with **not serious**?",
            options: ["foolhardy", "absurd", "frivolous", "occasional"],
            correctAnswer: "frivolous"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with **begin**?",
            options: ["evade", "donation", "launch", "establish"],
            correctAnswer: "establish"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with **want a lot**?",
            options: ["establish", "desire", "occasion", "yearn"],
            correctAnswer: "yearn"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with **comfort**?",
            options: ["establish", "embrace", "prohibit", "reassure"],
            correctAnswer: "reassure"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with **better than most**?",
            options: ["superior", "numerous", "exceptional", "reluctant"],
            correctAnswer: "superior"
        },
        {
            id: "mc-q9b",
            type: "multiple-choice",
            question: "9. Which word or words go with **give**?",
            options: ["evade", "prohibit", "donate", "assemble"],
            correctAnswer: "donate"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with **not allowed**?",
            options: ["pursued", "prohibited", "banned", "liberated"],
            correctAnswer: "prohibited"
        }
    ],
    wordsIncluded: ["b5-l10-w2", "b5-l10-w1", "b5-l10-w8", "b5-l10-w4", "b5-l10-w15", "b5-l10-w12", "b5-l10-w14", "b5-l10-w3", "b5-l10-w10"]
};

export const b5_l10_story_3_meanings: Story = {
    id: "b5-l10-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Choose the correct endings for the sentences.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. We **evaded**...",
            options: ["her parents and got inside quickly", "our way through the maze", "ourselves into thinking", "their questions by changing the subject"],
            correctAnswer: "their questions by changing the subject"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. The **opposition**...",
            options: ["to the new gym is growing", "of the word up is down", "of each bus is yellow", "wanted more homework"],
            correctAnswer: "to the new gym is growing"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. He **pursued**...",
            options: ["the opposing team's player", "every goal he thought he could achieve", "gravity as it held Earth", "pasta topped with sauce"],
            correctAnswer: "every goal he thought he could achieve"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. We **liberated**...",
            options: ["the caged bird", "ourselves a cold beverage", "ourselves by taking off coats", "the question"],
            correctAnswer: "the caged bird"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. The **yearning**...",
            options: ["was sold to a farm", "to escape was all Evangeline thought about", "to learn more kept Albert Einstein working", "was part of the cargo"],
            correctAnswer: "to escape was all Evangeline thought about"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. I **reluctantly**...",
            options: ["lent my catcher's mitt", "stepped into the darkness", "always love swimming", "get good grades"],
            correctAnswer: "lent my catcher's mitt"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. The rules **prohibited**...",
            options: ["skateboarding in the park", "fishing from the pier", "what was allowed", "spectators from going onto the track"],
            correctAnswer: "skateboarding in the park"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. We were **reassured**...",
            options: ["when our friend kept his promise", "down the hall", "a glass of water", "that everything was being done"],
            correctAnswer: "that everything was being done"
        }
    ],
    wordsIncluded: ["b5-l10-w5", "b5-l10-w9", "b5-l10-w11", "b5-l10-w6", "b5-l10-w15", "b5-l10-w13", "b5-l10-w10", "b5-l10-w12"]
}

export const b5_l10_story_5_facts: Story = {
    id: "b5-l10-story-5",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `*   The Statue of Liberty is a symbol of freedom to people all over the world. To hand out money *liberally* is to hand it out freely, without exercising very much control. Both these words, together with **liberate**, are formed from the Latin *liber*, which means "free." It's interesting to note that the Latin word for "book" is also *liber*. (A *library* is a place where *books* are kept.) There is a clear connection between books and freedom. A person who cannot read a book is in a kind of prison; learning to read sets the mind free to explore the world and everything in it.

*   The noun formed from the verb **prohibit** is *prohibition*, an order to stop or the act of forbidding. The word is associated with a fascinating period in United States history. In 1919, the Eighteenth Amendment to the Constitution **prohibited** the sale of alcoholic beverages. The result was that many citizens ignored the law, and gangsters such as Al Capone grew rich by illegally selling alcoholic beverages. Within a few years it was clear that the amendment had failed. Prohibition, as this time was known, ended in 1933 when the Twenty-First Amendment was added to the Constitution. This one abolished the Eighteenth.`,
    wordsIncluded: []
};
