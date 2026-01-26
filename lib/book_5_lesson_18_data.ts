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

export const b5_l18_words: VocabularyWord[] = [
    createWord("b5-l18-w1", "Animated", "1. Alive or seeming to be alive. 2. Full of energy; lively.", "The movie combines animated cartoon figures with live actors. The class discussion became quite animated when we talked about raising the driving age.", "🎬"),
    createWord("b5-l18-w2", "Betray", "1. To be disloyal to. 2. To show; to reveal.", "Members of the Underground Railroad could be counted on not to betray enslaved people to the people who tried to capture them. Jonas insisted that he wasn't upset, but his tears betrayed his true feelings.", "🤫"),
    createWord("b5-l18-w3", "Convince", "To make someone feel sure or certain; to persuade.", "I tried to convince my parents that I was old enough to be left alone in the house.", "🗣️"),
    createWord("b5-l18-w4", "Decline", "1. To slope or pass to a lower level. 2. To refuse to accept. 3. To become less or weaker. 4. A change to a smaller amount or lower level. 5. A loss of strength or power.", "The path declines sharply here, then rises. Olga declined my offer of a ride to school because she wanted to walk. My grandmother's health could decline if she does not eat a variety of good foods. The decline in attendance at the ballpark worries the team's owner. The decline of our town stopped when new businesses moved in.", "📉"),
    createWord("b5-l18-w5", "Hilarious", "Very funny.", "The comedian's hilarious jokes had us all laughing.", "🤣"),
    createWord("b5-l18-w6", "Likeness", "The state of being similar; something that is similar.", "Your likeness to your sister is remarkable.", "👯"),
    createWord("b5-l18-w7", "Meager", "Poor in quality or insufficient in amount.", "A stale crust of bread makes a meager meal.", "🍞"),
    createWord("b5-l18-w8", "Mischief", "1. Harm or damage. 2. Behavior that causes harm or trouble. 3. Playfulness; harmless amusement. (Mischievous: Playful in a naughty way.)", "Our neighbor's meddling in other people's affairs caused a lot of mischief. Their mischief during class will get them in trouble. Hiding her mother's hat was just the child's mischief. The mischievous cat pawed at the dog's tail.", "😈", ["mischievous"]),
    createWord("b5-l18-w9", "Negotiate", "1. To arrange by talking over. 2. To travel successfully along or over.", "When my parents disagree over what to eat for dinner, they negotiate a compromise. This slope has some difficult sections that only accomplished hikers can negotiate.", "🤝"),
    createWord("b5-l18-w10", "Obsolete", "No longer sold or in wide use because it is out-of-date.", "Digital music players have made CDs nearly obsolete.", "💾"),
    createWord("b5-l18-w11", "Retain", "1. To hold on to; to keep possession of. 2. To hire the services of.", "Because of today's victory, we retained our position at the top of the girls' hockey league. Our school has retained a crossing guard who makes sure students cross the street safely.", "✊"),
    createWord("b5-l18-w12", "Sensation", "1. A feeling that comes from stimulation of the senses. 2. A feeling of great interest or excitement or the cause of such a feeling. (Sensational: 1. Causing excitement or interest. 2. Very great or excellent.)", "Drinking hot cocoa after two hours of sledding gave us a warm sensation. The appearance at our school of the basketball star caused a sensation. The sensational headlines led me to buy the newspaper. With your quick mind, you'll make a sensational addition to the debating team.", "🤩", ["sensational"]),
    createWord("b5-l18-w13", "Somber", "1. Dark; gloomy. 2. Sad; serious.", "We began our hike under a somber sky; fortunately, the sun came out in the afternoon. News from the ongoing wars put us in a somber mood.", "☁️"),
    createWord("b5-l18-w14", "Subsequent", "Coming later; following.", "The first book in the series was a disappointment, but subsequent ones have been very enjoyable.", "⏭️"),
    createWord("b5-l18-w15", "Vow", "1. To promise seriously. 2. A pledge; a promise.", "The rescue workers vowed to continue working until all those trapped in the building were freed. When my parents became citizens of the United States, they made a vow to support this country.", "✋")
];

export const b5_l18_story_main: Story = {
    id: "b5-l18-story-main",
    title: "A Mouse Is Born",
    type: "story",
    content: `In 1927, Walt Disney worked in the movie business, producing short **animated** cartoons. He had started his own film company in Los Angeles four years before, at the age of twenty-one, with five hundred dollars borrowed from a relative. During those four years, his business provided him with a **meager** living; he worked hard on his films, struggling to pay off the debt.

His cartoons were about a character called Oswald, the Lucky Rabbit. A film distributor in New York had been buying his films and renting them to movie houses. The distributor could make a big profit if a film was successful. Disney, on the other hand, was paid a fixed amount for each movie; he got no share of the profits. When the contract with the distributor came to an end, Walt Disney decided to go to New York with his wife, Lilly, to **negotiate** a better deal for himself.

At the meeting, the distributor not only **declined** all of Disney's proposals, but also told the young filmmaker that he would reduce the payments he was making for each cartoon. He knew very well that Disney had no money to pay lawyers to fight him in the courts. Even worse, the distributor boasted that he had secretly hired Disney's own artists to do the drawings for future Oswald movies. Disney was bitter that the distributor had **betrayed** him, but there was nothing he could do about it. He **vowed** never to sell another of his movies to anyone. He would rent them to distributors, of course. In the future, though, he would **retain** ownership.

Walt Disney was in a **somber** mood when he and Lilly boarded the train for Los Angeles. During the long journey across the country, he decided to create a new character to take the place of Oswald. After making a few marks on paper, he showed Lilly a sketch of a mouse. Immediately she noticed the **likeness** between her husband and the creature he had drawn; both had a look of harmless **mischief**. She was **convinced** that audiences would love the little mouse with the happy face. She was dismayed, however, when her husband told her he planned to name it Mortimer. That just didn't sound right to her. "What about Mickey?" she suggested. "Mickey Mouse."

As soon as he arrived in Los Angeles, Walt Disney went to work on the first Mickey Mouse cartoons. He had completed two and was working on *Steamboat Willie*, his third, when sound began to be added to movies. Suddenly silent movies were **obsolete**. Disney promptly added a soundtrack to *Steamboat Willie*. The shrill voice of Mickey was supplied by Walt Disney himself.

When the movie opened in New York in September 1928, it was a **sensation**. Audiences roared with laughter at Mickey's **hilarious** adventures; **subsequent** movies starring the lovable little mouse were equally successful at the box office. In just three years Walt Disney's company was worth hundreds of thousands of dollars, and Mickey Mouse was famous.`,
    wordsIncluded: [
        "negotiate", "somber", "retain", "likeness", "convince", "vow", "meager",
        "animated", "sensation", "mischievous", "hilarious", "obsolete", "decline",
        "betray", "subsequent"
    ]
};

export const b5_l18_story_1: Story = {
    id: "b5-l18-story-1",
    title: "Using Words in Context",
    type: "exercise",
    content: "Read the following sentences. If the word in bold is used correctly, select 'Correct'. If the word is used incorrectly, select 'Incorrect'.",
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. (a) The car chase provides a **sensational** ending to the movie. (b) I felt a tingling **sensation** in my foot. (c) The birth of the triplet polar bears was the **sensation** of the year. (d) The water grew more **sensational** as the storm approached.",
            options: ["d is Incorrect", "All are Correct", "a is Incorrect"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. (a) The false rumors caused a lot of **mischief** in the classroom. (b) My sister was just being **mischievous** and didn't mean to hurt anyone. (c) The heavy rain turned the mud **mischievous**. (d) I pressed the **mischief** over my sweaty forehead.",
            options: ["c and d are Incorrect", "a and b are Incorrect", "All are Correct"],
            correctAnswer: "c and d are Incorrect"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. (a) The teacher grew more and more **animated** as he taught. (b) She was very **animated** as she slept soundly and quietly. (c) My favorite **animated** movie is on TV tonight. (d) Ravi sat on the **animated** stone bench.",
            options: ["b and d are Incorrect", "a and c are Incorrect", "All are Correct"],
            correctAnswer: "b and d are Incorrect"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. (a) The **decline** in the number of Asian elephants is causing concern. (b) She ran up the **decline** as fast as she could. (c) A steep **decline** led to the water's edge. (d) I had to **decline** the offer.",
            options: ["b is Incorrect", "c is Incorrect", "All are Correct"],
            correctAnswer: "b is Incorrect"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. (a) My parents **retained** someone to paint our house. (b) If Marcus moves away, we will no longer **retain** the title of best baseball team. (c) I want to **retain** as much of my pizza as I can to eat later. (d) The swimmer **retained** his breath while underwater.",
            options: ["d is Incorrect", "c is Incorrect", "All are Correct"],
            correctAnswer: "d is Incorrect"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. (a) Three is **subsequent** to two. (b) My aunt wasn't home last month, but I saw her on a **subsequent** visit. (c) He **subsequently** denied that he said he would be there. (d) Deidre became quite **subsequent** after she got to know us.",
            options: ["a and d are Incorrect", "b and c are Incorrect", "All are Correct"],
            correctAnswer: "a and d are Incorrect"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. (a) I was mad about the **meager** portions at the restaurant. (b) She was feeling a bit **meager**, so she went to lie down. (c) We were eager for the **meager** bits of information that slowly started to come. (d) I received a **meager** fifteen presents for my birthday.",
            options: ["b and d are Incorrect", "a and c are Incorrect", "All are Correct"],
            correctAnswer: "b and d are Incorrect"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. (a) Ashanti became **convinced** that bees were following her. (b) My uncle **convinced** his shoes before he came down the stairs. (c) The principal **convinced** the parents that she knew what she was doing. (d) **Convince** the hot cocoa before you drink it, please.",
            options: ["b and d are Incorrect", "a and c are Incorrect", "All are Correct"],
            correctAnswer: "b and d are Incorrect"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. (a) A **hilarious** movie usually makes people sad. (b) Be careful of the wet floor when you walk because it's **hilarious**. (c) I couldn't stop laughing, because the show was so **hilarious**. (d) Akbar always tells the most **hilarious** stories.",
            options: ["a and b are Incorrect", "c and d are Incorrect", "All are Correct"],
            correctAnswer: "a and b are Incorrect"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. (a) Timone was **obsolete** that he couldn't go to the party. (b) The older skateboard is **obsolete** and has been replaced with the new model. (c) Arti said her relationship with her best friend is **obsolete**. (d) The automobile made horse-drawn travel **obsolete**.",
            options: ["a and c are Incorrect", "b and d are Incorrect", "All are Correct"],
            correctAnswer: "a and c are Incorrect"
        }
    ],
    wordsIncluded: ["sensational", "mischief", "animated", "decline", "retain", "subsequent", "meager", "convince", "hilarious", "obsolete"]
};

export const b5_l18_story_2: Story = {
    id: "b5-l18-story-2",
    title: "Making Connections",
    type: "exercise",
    content: "Circle the letter next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "mc-q1",
            type: "multiple-choice",
            question: "1. Which word or words go with *reveal*?\n(a) forsake\n(b) retain\n(c) assume\n(d) betray",
            options: ["d only", "a and d", "c only"],
            correctAnswer: "d only"
        },
        {
            id: "mc-q2",
            type: "multiple-choice",
            question: "2. Which word or words go with *the same*?\n(a) sensation\n(b) likeness\n(c) mischief\n(d) equivalent",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "mc-q3",
            type: "multiple-choice",
            question: "3. Which word or words go with *compromise*?\n(a) negotiate\n(b) retain\n(c) decline\n(d) intercept",
            options: ["a only", "b and c", "d only"],
            correctAnswer: "a only"
        },
        {
            id: "mc-q4",
            type: "multiple-choice",
            question: "4. Which word or words go with *gloomy*?\n(a) somber\n(b) drab\n(c) obsolete\n(d) hilarious",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        },
        {
            id: "mc-q5",
            type: "multiple-choice",
            question: "5. Which word or words go with *promise*?\n(a) vow\n(b) dominate\n(c) assume\n(d) pledge",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "mc-q6",
            type: "multiple-choice",
            question: "6. Which word or words go with *active*?\n(a) meager\n(b) boisterous\n(c) animated\n(d) obsolete",
            options: ["b and c", "a and d", "c only"],
            correctAnswer: "b and c"
        },
        {
            id: "mc-q7",
            type: "multiple-choice",
            question: "7. Which word or words go with *persuade*?\n(a) betray\n(b) convince\n(c) retain\n(d) provoke",
            options: ["b only", "a and c", "d only"],
            correctAnswer: "b only"
        },
        {
            id: "mc-q8",
            type: "multiple-choice",
            question: "8. Which word or words go with *become worse*?\n(a) decline\n(b) negotiate\n(c) deteriorate\n(d) pardon",
            options: ["a and c", "b and d", "a only"],
            correctAnswer: "a and c"
        },
        {
            id: "mc-q9",
            type: "multiple-choice",
            question: "9. Which word or words go with *silly*?\n(a) obsolete\n(b) somber\n(c) absurd\n(d) hilarious",
            options: ["c and d", "a and b", "c only"],
            correctAnswer: "c and d"
        },
        {
            id: "mc-q10",
            type: "multiple-choice",
            question: "10. Which word or words go with *out of date*?\n(a) animated\n(b) obsolete\n(c) hilarious\n(d) mischievous",
            options: ["b only", "a and c", "d only"],
            correctAnswer: "b only"
        }
    ],
    wordsIncluded: ["betray", "likeness", "negotiate", "somber", "vow", "animated", "convince", "decline", "hilarious", "obsolete"]
};

export const b5_l18_story_3: Story = {
    id: "b5-l18-story-3",
    title: "Determining Meanings",
    type: "exercise",
    content: "Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.",
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. The **hilariously**\n(a) funny clown made us laugh till we cried.\n(b) missed goal meant they had lost the championship.\n(c) miserable illness affected several dozen people.\n(d) silly puppy tried to sleep on top of the ball.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. **Somberly**\n(a) we told my dad about the hole we'd made in the fence.\n(b) we watched as the star quarterback was pulled from the game.\n(c) we decided not to go to the amusement park, because our dog was sick.\n(d) we jumped up and down when Zeniqua won the contest.",
            options: ["a, b, and c", "d only", "a and c"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. She **subsequently**\n(a) told a story that was the exact opposite of the story her friend had told.\n(b) found out that she could still join the volleyball team.\n(c) earned the money before she bought new clothes.\n(d) was able to balance the ball on her finger after lots of practice.",
            options: ["b and d", "a only", "c only"],
            correctAnswer: "b and d"
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. The **vows**\n(a) broke under the weight and had to be replaced.\n(b) they promised to each other were very serious.\n(c) were eaten quickly by the brothers.\n(d) to help the homeless were easy to make.",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. He **betrayed**\n(a) his friend's trust, which was unforgivable.\n(b) the newspapers and did the crossword puzzle.\n(c) down on the bed and tried to sleep.\n(d) how he really felt when he couldn't hide his smile.",
            options: ["a and d", "b and c", "a only"],
            correctAnswer: "a and d"
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. The **sensation**\n(a) of falling and hitting the ground woke me from a deep sleep.\n(b) caused by the movie star's unexpected arrival would be on all the gossip websites tomorrow.\n(c) that something was wrong made me nervous.\n(d) to California was something I'd always wanted to do.",
            options: ["a, b, and c", "d only", "a and b"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. We **negotiated**\n(a) to make sure we were both happy.\n(b) with our rivals to see who would play first.\n(c) down the hill on the sled.\n(d) the water quickly because we were late and had to leave the pool.",
            options: ["a and b", "c and d", "a, b, and c"],
            correctAnswer: "a, b, and c"
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. The **mischievous**\n(a) shoelace got caught in the wheel, pulling her shoe off.\n(b) cup was on the bottom shelf.\n(c) pranks were so funny that we had to laugh.\n(d) giraffe leaned down and grabbed the man's hat.",
            options: ["c and d", "a and b", "c only"],
            correctAnswer: "c and d"
        }
    ],
    wordsIncluded: ["hilarious", "somber", "subsequent", "vow", "betray", "sensation", "negotiate", "mischief"]
};

export const b5_l18_story_4: Story = {
    id: "b5-l18-story-4",
    title: "Completing Sentences",
    type: "exercise",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    questions: [
        {
            id: "cs-q1",
            type: "open-ended",
            question: "1. One **vow** I have made to myself is...",
            sampleAnswer: "to always finish my homework before playing video games."
        },
        {
            id: "cs-q2",
            type: "open-ended",
            question: "2. A **sensational** vacation might be a trip to...",
            sampleAnswer: "Hawaii to see active volcanoes and surf on big waves."
        },
        {
            id: "cs-q3",
            type: "open-ended",
            question: "3. An example of a **meager** amount of food is...",
            sampleAnswer: "a single cracker for lunch."
        },
        {
            id: "cs-q4",
            type: "open-ended",
            question: "4. Something a **mischievous** kitten might do is...",
            sampleAnswer: "unravel a ball of yarn and tangle it around the chair legs."
        },
        {
            id: "cs-q5",
            type: "open-ended",
            question: "5. I am **convinced** that...",
            sampleAnswer: "dogs understand more words than we think they do."
        },
        {
            id: "cs-q6",
            type: "open-ended",
            question: "6. If you **retain** something, that means you...",
            sampleAnswer: "keep it and don't give it away or lose it."
        },
        {
            id: "cs-q7",
            type: "open-ended",
            question: "7. I become **animated** whenever I...",
            sampleAnswer: "talk about my favorite soccer team."
        },
        {
            id: "cs-q8",
            type: "open-ended",
            question: "8. When something becomes **obsolete**, that means it...",
            sampleAnswer: "is no longer used because something newer and better has replaced it."
        },
        {
            id: "cs-q9",
            type: "open-ended",
            question: "9. I become **somber** when...",
            sampleAnswer: "I hear sad news or when it rains all day."
        },
        {
            id: "cs-q10",
            type: "open-ended",
            question: "10. A food I would **decline** is...",
            sampleAnswer: "Brussels sprouts because I don't like the taste."
        }
    ],
    wordsIncluded: ["vow", "sensation", "meager", "mischief", "convince", "retain", "animated", "obsolete", "somber", "decline"]
};

export const b5_l18_story_5_facts: Story = {
    id: "b5-l18-story-5",
    title: "Fun & Fascinating FACTS",
    type: "story",
    content: `*   The Latin word for both "air" and "breath" is *anima*. It provides the root of several English words having to do with being alive, which seems natural because all animals must breathe in order to live. **Animated** figures in movie cartoons seem to be alive, while something that is *inanimate* lacks life. Stones, cars, coat hangers, and television sets are all *inanimate* objects.

*   The adjective **somber** comes from the Latin word for "shade," which is *umbra*. Other words formed from this root include *umbrella*, which not only keeps off the rain but provides shade in bright sunlight, and *sombrero*, a Spanish or Mexican broad-brimmed hat worn to provide shade for the face.`,
    wordsIncluded: [
        "animated", "somber"
    ]
};
