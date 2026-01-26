import { Story, VocabularyWord } from "./types";

const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Grade 4",
    exampleSentence,
    imageEmoji
});

// Lesson 2 Words
export const b4_l2_words: VocabularyWord[] = [
    createWord("b4-l2-w1", "Affect", "To bring about a change in. To pretend to be or to have.", "Do you think changing schools will affect my grades?", "🔄"),
    createWord("b4-l2-w2", "Calculate", "To find the answer by using arithmetic. To figure out by reasoning.", "We need to calculate the answers to the questions on the math quiz.", "🧮"),
    createWord("b4-l2-w3", "Climate", "The average weather conditions of an area.", "Florida's warm climate is perfect for growing oranges.", "☀️"),
    createWord("b4-l2-w4", "Column", "A row of figures or words running down a printed page; anything arranged like that. A tall, usually stone support that holds up something.", "Forty-six marble columns support the roof of the Parthenon in Greece.", "🏛️"),
    createWord("b4-l2-w5", "Decay", "To rot. A breaking down or rotting.", "Leaves left on the ground will decay over the winter.", "🍂"),
    createWord("b4-l2-w6", "Exceed", "To be more than. To go beyond what is allowed.", "The final score of Monday's game exceeded our best hopes.", "📈"),
    createWord("b4-l2-w7", "Forbid", "To order not to do something.", "School rules forbid running in the hallways.", "🚫"),
    createWord("b4-l2-w8", "Grove", "A group of trees growing together.", "The children walked hand in hand through the grove of lemon trees.", "🌳"),
    createWord("b4-l2-w9", "Limb", "An arm, leg, or wing. A large tree branch.", "Bats use their webbed front and back limbs to fly.", "🦾"),
    createWord("b4-l2-w10", "Mammoth", "Very large; huge.", "The mammoth National Stadium in Singapore holds over fifty thousand people.", "🐘"),
    createWord("b4-l2-w11", "Mature", "To become fully grown or developed. Fully grown or developed; adult.", "Rabbits mature in about six months and are then able to leave their parents.", "👩‍💼"),
    createWord("b4-l2-w12", "Permit", "To allow. A written notice that allows a person to do something.", "My parents do not permit me to stay out later than 7:00 p.m.", "💳"),
    createWord("b4-l2-w13", "Resist", "To refuse to give in to; to withstand. To work or fight against.", "Some kinds of corn resist disease better than others.", "🛡️"),
    createWord("b4-l2-w14", "Scorch", "To burn slightly. Very hot.", "If you press a shirt with an iron that is too hot, you might scorch the cloth.", "🔥"),
    createWord("b4-l2-w15", "Tower", "To stand above or higher than what is around it. Very high; tall.", "The Statue of Liberty towers above New York Harbor.", "🗼"),
];

// Story 1: Using Words in Context
export const b4_l2_story_1: Story = {
    id: "b4-l2-s1",
    title: "Exercise: Using Words in Context",
    type: "non-fiction",
    content: "If the word in bold is used correctly, select Correct (C). If used incorrectly, select Incorrect (I).",
    wordsIncluded: b4_l2_words.map(w => w.id),
    questions: [
        {
            id: "uwc-q1",
            type: "multiple-choice",
            question: "1. Juan has finally **affected** his swing and now hits lots of home runs.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "uwc-q2",
            type: "multiple-choice",
            question: "2. She was turned away because her **permit** was out of date.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q3",
            type: "multiple-choice",
            question: "3. Ten dollars is an **excessive** amount to pay for a candy bar.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q4",
            type: "multiple-choice",
            question: "4. The pages of a dictionary are sometimes printed in two **columns**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q5",
            type: "multiple-choice",
            question: "5. I **calculated** that the journey would take five hours.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q6",
            type: "multiple-choice",
            question: "6. Ranji will **forbid** up to fifty dollars to buy the skateboard.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        },
        {
            id: "uwc-q7",
            type: "multiple-choice",
            question: "7. Eating healthy foods helps us **resist** infection.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q8",
            type: "multiple-choice",
            question: "8. The dentist looks for signs of **decay**.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q9",
            type: "multiple-choice",
            question: "9. A **mature** mind is needed in a parent.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Correct"
        },
        {
            id: "uwc-q10",
            type: "multiple-choice",
            question: "10. You can change the **climate** by turning this knob.",
            options: ["Correct", "Incorrect"],
            correctAnswer: "Incorrect"
        }
    ]
};

// Story 2: Determining Meanings
export const b4_l2_story_2: Story = {
    id: "b4-l2-s2",
    title: "Exercise: Determining Meanings",
    type: "non-fiction",
    content: "Select the correct answer choice that correctly completes the sentence.",
    wordsIncluded: b4_l2_words.map(w => w.id),
    questions: [
        {
            id: "dm-q1",
            type: "multiple-choice",
            question: "1. The **climate** ...",
            options: ["is put back an hour each fall.", "of Australia is hot and dry.", "in the room warmed up once we got the fire going.", "of planet Earth is gradually changing."],
            correctAnswer: "of Australia is hot and dry."
        },
        {
            id: "dm-q2",
            type: "multiple-choice",
            question: "2. The **column** ...",
            options: ["in the center of the city honors the fallen soldiers.", "by the editor appears every week in the magazine.", "ran all the way from Bridgeport to Davenport.", "is formed when drips of water turn to ice."],
            correctAnswer: "by the editor appears every week in the magazine."
        },
        {
            id: "dm-q3",
            type: "multiple-choice",
            question: "3. **Decaying** ...",
            options: ["makes me believe his story more.", "of dead plants takes place more quickly where it is warm and moist.", "the loaf of bread into crumbs will help make the stuffing.", "begins once an apple has fallen from a tree."],
            correctAnswer: "of dead plants takes place more quickly where it is warm and moist."
        },
        {
            id: "dm-q4",
            type: "multiple-choice",
            question: "4. A **grove** ...",
            options: ["of homemade cookies makes a nice gift.", "had been cut in the drawer to enable it to slide in and out.", "of lilac trees added a touch of color to the painting.", "of elm trees marked the entrance to the park."],
            correctAnswer: "of elm trees marked the entrance to the park."
        },
        {
            id: "dm-q5",
            type: "multiple-choice",
            question: "5. The **limbless** ...",
            options: ["snake slithered along the desert sand.", "cat had four black-and-white legs.", "fire burned down the entire building.", "tree was knocked down by the storm."],
            correctAnswer: "snake slithered along the desert sand."
        },
        {
            id: "dm-q6",
            type: "multiple-choice",
            question: "6. The **mammoth** ...",
            options: ["sale at the toy store has everything for half price.", "caves are open to the public in the summer months.", "tiptoed around the sleeping children.", "sign over the entrance said \"Open For Business.\""],
            correctAnswer: "caves are open to the public in the summer months."
        },
        {
            id: "dm-q7",
            type: "multiple-choice",
            question: "7. **Maturity** ...",
            options: ["can be found in the very young.", "helps you deal with life's problems.", "in a tree can make it strong and tall.", "will likely make a person behave."],
            correctAnswer: "helps you deal with life's problems."
        },
        {
            id: "dm-q8",
            type: "multiple-choice",
            question: "8. The **permit** ...",
            options: ["learned to fly when he was just fifteen.", "allows fires to be lit on the beach.", "costs fifty dollars and is good for the whole summer.", "calls for a cup of flour, an egg, and a stick of butter."],
            correctAnswer: "costs fifty dollars and is good for the whole summer."
        }
    ]
};

// Story 3: Completing Sentences
export const b4_l2_story_3: Story = {
    id: "b4-l2-s3",
    title: "Exercise: Completing Sentences",
    type: "non-fiction",
    content: "Complete the sentences to demonstrate your knowledge of the words in bold.",
    wordsIncluded: b4_l2_words.map(w => w.id),
    questions: [
        {
            id: "cs-q1",
            type: "multiple-choice",
            question: "1. A **mature** person would...",
            options: ["act responsibly.", "cry a lot.", "play with toys.", "never sleep."],
            correctAnswer: "act responsibly."
        },
        {
            id: "cs-q2",
            type: "multiple-choice",
            question: "2. I would find it hard to **resist**...",
            options: ["a piece of chocolate cake.", "doing homework.", "cleaning my room.", "eating spinach."],
            correctAnswer: "a piece of chocolate cake."
        },
        {
            id: "cs-q3",
            type: "multiple-choice",
            question: "3. When you **scorch** a piece of toast, you...",
            options: ["burn it slightly.", "eat it happily.", "throw it away.", "butter it."],
            correctAnswer: "burn it slightly."
        },
        {
            id: "cs-q4",
            type: "multiple-choice",
            question: "4. If the school play is a **towering** success, that means the tickets...",
            options: ["sold out completely.", "were too expensive.", "were free.", "were lost."],
            correctAnswer: "sold out completely."
        },
        {
            id: "cs-q5",
            type: "multiple-choice",
            question: "5. To **affect** an interest in a book is to...",
            options: ["pretend to like it.", "read it thoroughly.", "buy it.", "write a review."],
            correctAnswer: "pretend to like it."
        },
        {
            id: "cs-q6",
            type: "multiple-choice",
            question: "6. When you **calculate** the answer to a math problem, you...",
            options: ["use arithmetic.", "guess.", "ask a friend.", "give up."],
            correctAnswer: "use arithmetic."
        },
        {
            id: "cs-q7",
            type: "multiple-choice",
            question: "7. If the weight in an elevator must not **exceed** four hundred pounds, that means...",
            options: ["it cannot be more than 400 lbs.", "it must be exactly 400 lbs.", "it should be less than 100 lbs.", "it counts people only."],
            correctAnswer: "it cannot be more than 400 lbs."
        }
    ]
};

// Story 4: Reading Passage
export const b4_l2_story_4: Story = {
    id: "b4-l2-s4",
    title: "Reading Passage: California's Forest Giants",
    type: "non-fiction",
    content: `
Along the coast of northern California grow huge, **towering** trees. Their trunks look like the **columns** of a great Greek temple. These are redwood trees—the tallest of all trees. They can reach a height of 385 feet. Their trunks can grow straight up for 150 feet before the first **limbs** branch out. One redwood, called the Rockefeller Tree, is as tall as a thirty-five-story skyscraper!

Because redwoods are so special, there are laws to protect them. In California, state laws **forbid** people to cut them down in some areas. But in other parts of the state, logging of redwoods is **permitted**. Redwood is sold for use in buildings and outdoor furniture. It is useful because it does not **decay** as quickly as other kinds of wood.

Another enormous California tree is the sequoia. Sequoias are slightly shorter than redwoods. They prefer the colder, drier **climate** found farther inland on the slopes of the Sierra Nevada. Sequoias have thicker trunks and contain more wood than redwoods. In fact, it has been **calculated** that a full-grown sequoia contains enough wood to build thirty houses. The **mammoth** General Grant sequoia is almost a hundred feet around. It would take twenty people with arms stretched out to join hands around it! Cutting down any sequoia is not allowed.

Redwoods and sequoias are among the oldest living things: The age of some of them **exceeds** three thousand years. One reason they live so long has to do with their bark. When they are **mature**, their bark is more than a foot thick. Forest fires don't usually **affect** these trees seriously; the flames only **scorch** their surface. The thick bark also helps them **resist** diseases that kill other trees.

Yosemite National Park and Sequoia National Park are the best places to see sequoias. Both parks are in eastern California. The best place to see redwoods is Redwood National Park, in northwest California. To wander through a **grove** of sequoia or redwood trees is to enter a strange and beautiful world. You will feel like you are walking among giants.
`,
    wordsIncluded: b4_l2_words.map(w => w.id),
    questions: []
};

// Story 5: Fun & Fascinating FACTS
export const b4_l2_story_5: Story = {
    id: "b4-l2-s5",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* An easy way to learn simple arithmetic is to set out pebbles in a row. By adding more pebbles and counting the total, or by taking some away and counting the ones that remain, one can see the results of addition and subtraction. By using rows of pebbles, one can also learn multiplication. Pebbles arranged in three rows of four can be counted one at a time to see that 3 times 4 equals 12. By separating the pebbles into equal-sized groups, one can also learn division. For example, dividing the pebbles into two equal groups and counting the pebbles in one of them shows that 12 divided by 2 equals six. The Romans long ago thought of this method of doing math. In fact, our word **calculate** comes from the Latin word *calculus*, which means ... "a pebble!"

* Tens of thousands of years ago, a giant elephant lived in Europe and North America. It was called a mammoth. It was bigger than today's elephants; the largest ones were almost fourteen feet from the ground to the shoulder. It had huge tusks that curved downward and a thick, hairy coat. Mammoths died out long ago, but the bodies of some of them were frozen solid in the northern regions of Canada and Russia. They are sometimes found when the ice around them melts. Because of this creature's great size, its name became the adjective **mammoth**, meaning "very large; huge."
`,
    wordsIncluded: ["b4-l2-w2", "b4-l2-w10"],
    questions: []
};
