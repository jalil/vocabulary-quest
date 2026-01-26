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

export const b5_l11_words: VocabularyWord[] = [
    createWord("b5-l11-w1", "Accelerate", "1. To go or to cause to go faster. 2. To bring about an earlier time.", "The morning train quickly accelerates once it leaves the station. Increased sunlight accelerates the growth of plants.", "⏩"),
    createWord("b5-l11-w2", "Altitude", "Height above sea level or the earth's surface.", "Mexico City lies at an altitude of almost 8,000 feet.", "🏔️"),
    createWord("b5-l11-w3", "Anxious", "1. Worried; concerned. 2. Eager; wishing strongly.", "I am anxious about how I did on the Spanish test. After writing to each other for over a year, the two pen pals are anxious to meet.", "😰", ["anxiety"]),
    createWord("b5-l11-w4", "Brace", "1. To make stronger by giving support to. 2. To make ready for a shock; to prepare. 3. Something used to support a weak part.", "Mom braced the table leg with a metal strip to keep it from wobbling. I wore a brace on my leg for four weeks after I injured it doing a high jump.", "🦵", ["bracing"]),
    createWord("b5-l11-w5", "Confident", "Certain; sure.", "We are confident we will win Saturday's hockey game.", "😎", ["confidence"]),
    createWord("b5-l11-w6", "Contact", "Noun 1. Communication with someone else. 2. When two or more people or things touch each other. Verb To communicate with.", "Paula and Ricardo have weekly contact on the phone with their favorite aunt. When vinegar and baking soda come into contact with each other, the result is a fizzy mess. Louise contacted her teacher by e-mail to ask about the assignment.", "📞"),
    createWord("b5-l11-w7", "Exult", "To be joyful; to show great happiness.", "Senator Gray's supporters exulted when she easily won reelection.", "🙌", ["exultant"]),
    createWord("b5-l11-w8", "Hangar", "A building where aircraft are kept and repaired.", "The pilot steered the plane out of the hangar and onto the runway.", "✈️"),
    createWord("b5-l11-w9", "Maximum", "The greatest or highest number or amount.", "The largest bus we have for school trips holds a maximum of fifty people.", "📈"),
    createWord("b5-l11-w10", "Methodical", "Done in a regular, orderly way.", "Our methodical search of the house failed to turn up any evidence of the lost key.", "📋"),
    createWord("b5-l11-w11", "Nonchalant", "Having the appearance of not caring; seeming to show a lack of concern.", "Your nonchalant attitude to schoolwork worries your parents.", "🤷"),
    createWord("b5-l11-w12", "Proceed", "To go on, especially after stopping for a while; to continue.", "The subway train proceeded on its way after I got off at 14th Street.", "🚦"),
    createWord("b5-l11-w13", "Saunter", "To walk without hurrying; to stroll in a relaxed, unhurried manner.", "Pedestrians saunter along the river bank, enjoying the afternoon sunshine.", "🚶"),
    createWord("b5-l11-w14", "Solo", "1. A musical piece for one voice or a single instrument. 2. Made or done by one person. 3. To fly alone, especially for the first time.", "The long guitar solo was the best part of the rock concert. Most student pilots solo after ten hours of lessons.", "🎸"),
    createWord("b5-l11-w15", "Stall", "1. A place for an animal in a barn. 2. A small stand or booth where things are sold. 3. To suddenly lose power. 4. To delay by being evasive.", "Each horse in the barn had its own stall. He will stall the engine if he doesn't give the car some gas.", "🐎")
];

export const b5_l11_story_main: Story = {
    id: "b5-l11-story-main",
    title: "Off You Go into the Wild Blue Yonder",
    type: "story",
    content: `After ten weeks of flying lessons, which is about the average instruction period, you are ready to take your first **solo** flight. Today, your instructor will be on the ground instead of sitting beside you. When you arrive at the airfield, you see her standing outside the **hangar**, and she greets you with a friendly wave. As the two of you chat, you try to sound as **nonchalant** as possible, even though your heart is pounding. She must see how nervous you are because she remarks that she has complete **confidence** in you. That makes you feel better, and you begin to relax a little as the two of you **saunter** over to the plane.

After climbing inside and taking a deep breath, you **methodically** complete the checklist of the plane's controls. Then, you wait for a signal from the control tower to **proceed**. As soon as it comes, your feelings of **anxiety** leave you. You start the engine and release the brake. You open the throttle a little, feeding more gasoline to the engine and causing the propeller to whirl faster. The plane starts to move forward. You taxi onto the runway, facing into the wind, and wait.

A voice from the control tower comes through your headphones, giving you permission to take off. You open the throttle wide, and the plane **accelerates** down the runway. Your right hand rests on the "stick," a control that lifts the plane's nose when pulled back and drops the nose when pushed forward. The plane is now traveling so fast that you can feel it trying to leave the ground. You pull back gently on the stick. The ground suddenly drops away beneath you. You are flying!

You have been told to go no faster than eighty-five miles an hour, although the plane has a **maximum** speed of twice that. You reach an **altitude** of five hundred feet and ease back on the throttle, watching your air speed carefully. If it drops below fifty-five miles an hour, the plane will **stall**. To increase speed, you push the stick forward, dropping the nose slightly. Already, it is time to make the first turn. You push the stick gently to the left, and the wing on that side drops, causing the plane to make a turn, or "bank" as you have learned to call it. There are so many things to think about that you hardly notice the view. After making three more left banks, you are on your final approach.

The control tower clears you for landing. You reduce the amount that the throttle is open and can feel the plane dropping. Not too fast. Not too steep an angle. Come in too high and you'll overshoot the runway; come in too low, and you'll fall short. You **brace** yourself as the runway comes rushing toward you.

When the plane is just inches off the ground, you close the throttle and pull back on the stick to raise the nose. Without power from the engine, the wings no longer support the plane, and it drops. You don't want to be too high when this happens or the plane will bounce as it makes **contact** with the ground. But you make a perfect landing. An **exultant** feeling sweeps over you as you roll down the runway and come to a stop. Flying is fun!`,
    wordsIncluded: [
        "solo", "hangar", "nonchalant", "confidence", "saunter", "methodical",
        "proceed", "anxiety", "accelerate", "maximum", "altitude", "stall",
        "brace", "contact", "exult"
    ]
};

export const b5_l11_story_5_facts: Story = {
    id: "b5-l11-story-5",
    title: "Fun & Fascinating MEANINGS",
    type: "story",
    content: `*   A plane's **altitude** is measured by an instrument called an *altimeter*, which shows the height above sea level, not the distance to the ground below. It does this by measuring the density of the air outside. If the **altitude** of a plane that is flying over the ocean is five thousand feet, that means the plane is literally five thousand feet high in the air. But if the plane is flying over land that is 4,900 feet above sea level, the **altitude** of the plane is still measured as five thousand feet. In the second case, the plane would actually be just barely skimming the ground.

*   The opposite of **maximum** is *minimum*. (For many years, most highways in the United States had a **maximum** speed of 55 m.p.h. and a *minimum* speed of 40 m.p.h.)

*   Don't confuse **hangar**, a large building where aircraft are kept, with *hanger*, a metal, wood, or plastic frame on which clothes are hung. These two words are homophones.

*   In Lesson 7, you learned several words formed from the Latin *solus*, which means "alone; without company." **Solo** is another of those words. A *solo* is an activity, musical or otherwise, performed by one person. A piece of music for two people is called a *duet*; for three people, a *trio*; and for four people, a *quartet*.`,
    wordsIncluded: [
        "altitude", "maximum", "hangar", "solo"
    ]
};

export const b5_l11_story_1: Story = {
    id: "b5-l11-story-1",
    title: "Finding Meanings",
    type: "exercise",
    content: "Choose two phrases to form a sentence that correctly uses a word from Word List 11.",
    questions: [
        {
            id: "fm-q1",
            type: "multiple-choice",
            question: "1. (a) A plane's hangar is\n(b) the amount of cargo it carries.\n(c) its height above sea level.\n(d) A plane's altitude is",
            options: ["a and d", "d and c", "a and c"], // a/c (hangar is height? No), d/c (altitude is height? Yes)
            correctAnswer: "d and c"
        },
        {
            id: "fm-q2",
            type: "multiple-choice",
            question: "2. (a) To accelerate an engine is to\n(b) cause it to lose power suddenly.\n(c) run it at its lowest speed.\n(d) To stall an engine is to",
            options: ["a and b", "d and c", "d and b"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q3",
            type: "multiple-choice",
            question: "3. (a) a performance by one person.\n(b) A saunter is\n(c) A solo is\n(d) a support for a broken part.",
            options: ["c and a", "b and a", "c and d"],
            correctAnswer: "c and a"
        },
        {
            id: "fm-q4",
            type: "multiple-choice",
            question: "4. (a) a place where goods are sold.\n(b) a place where planes are kept.\n(c) A brace is\n(d) A hangar is",
            options: ["d and b", "a and c", "c and b"],
            correctAnswer: "d and b"
        },
        {
            id: "fm-q5",
            type: "multiple-choice",
            question: "5. (a) stop suddenly.\n(b) To accelerate is to\n(c) go faster.\n(d) To exult is to",
            options: ["b and c", "d and a", "b and a"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q6",
            type: "multiple-choice",
            question: "6. (a) does things in an orderly way.\n(b) is filled with happiness.\n(c) An anxious person\n(d) A methodical person",
            options: ["d and a", "c and b", "d and b"],
            correctAnswer: "d and a"
        },
        {
            id: "fm-q7",
            type: "multiple-choice",
            question: "7. (a) A contact is\n(b) A brace is\n(c) a support for a broken part.\n(d) a place where business is done.",
            options: ["b and c", "a and d", "b and d"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q8",
            type: "multiple-choice",
            question: "8. (a) To be nonchalant about something is\n(b) To be anxious about something is\n(c) to be concerned about it.\n(d) to be very happy about it.",
            options: ["b and c", "a and d", "b and d"],
            correctAnswer: "b and c"
        },
        {
            id: "fm-q9",
            type: "multiple-choice",
            question: "9. (a) To be confident is to be\n(b) sure of oneself.\n(c) reluctant to act or speak.\n(d) To be exultant is to be",
            options: ["a and b", "d and c", "a and c"],
            correctAnswer: "a and b"
        },
        {
            id: "fm-q10",
            type: "multiple-choice",
            question: "10. (a) walk in a relaxed, unhurried manner.\n(b) show a willingness to help.\n(c) To saunter is to\n(d) To proceed is to",
            options: ["c and a", "d and b", "c and b"],
            correctAnswer: "c and a"
        }
    ],
    wordsIncluded: ["altitude", "stall", "solo", "hangar", "accelerate", "methodical", "brace", "anxious", "confident", "saunter"]
};

export const b5_l11_story_2: Story = {
    id: "b5-l11-story-2",
    title: "Just the Right Word",
    type: "exercise",
    content: "Replace each phrase in bold with a single word (or form of the word) from the word list.",
    questions: [
        {
            id: "jrw-q1",
            type: "multiple-choice",
            question: "1. Five striped bass is the **greatest number** you are allowed to catch this month.",
            options: ["maximum", "altitude", "methodical", "contact"],
            correctAnswer: "maximum"
        },
        {
            id: "jrw-q2",
            type: "multiple-choice",
            question: "2. After hanging up our coats, we will **make our way** to our seats in the nice restaurant.",
            options: ["saunter", "proceed", "stall", "brace"],
            correctAnswer: "proceed"
        },
        {
            id: "jrw-q3",
            type: "multiple-choice",
            question: "3. Baseball fans are **filled with happiness** when their favorite team makes it to the World Series.",
            options: ["anxious", "nonchalant", "exultant", "confident"],
            correctAnswer: "exultant"
        },
        {
            id: "jrw-q4",
            type: "multiple-choice",
            question: "4. I plan to fly a plane **without my instructor** tomorrow.",
            options: ["solo", "accelerated", "braced", "stalled"],
            correctAnswer: "solo"
        },
        {
            id: "jrw-q5",
            type: "multiple-choice",
            question: "5. The breeze off the ocean is very **refreshing and gives one renewed energy**.",
            options: ["bracing", "methodical", "confident", "anxious"],
            correctAnswer: "bracing"
        },
        {
            id: "jrw-q6",
            type: "multiple-choice",
            question: "6. The trainer led the horse back to its **enclosed place in the stable** after her ride.",
            options: ["hangar", "stall", "brace", "altitude"],
            correctAnswer: "stall"
        },
        {
            id: "jrw-q7",
            type: "multiple-choice",
            question: "7. I lost **the possibility to communicate** with my friends after they moved out of state.",
            options: ["contact", "confidence", "anxiety", "brace"],
            correctAnswer: "contact"
        },
        {
            id: "jrw-q8",
            type: "multiple-choice",
            question: "8. The skiers were **showing no concern** as they started down the steep slope.",
            options: ["nonchalant", "anxious", "methodical", "confident"],
            correctAnswer: "nonchalant"
        },
        {
            id: "jrw-q9",
            type: "multiple-choice",
            question: "9. Jayesh was up at dawn, **very eager** to be on his way.",
            options: ["nonchalant", "anxious", "stalled", "braced"],
            correctAnswer: "anxious"
        },
        {
            id: "jrw-q10",
            type: "multiple-choice",
            question: "10. I am telling you what the teacher told me in **the expectation that you will keep it a secret**.",
            options: ["confidence", "contact", "exultation", "brace"],
            correctAnswer: "confidence"
        }
    ],
    wordsIncluded: ["maximum", "proceed", "exult", "solo", "brace", "stall", "contact", "nonchalant", "anxious", "confident"]
};

export const b5_l11_story_3: Story = {
    id: "b5-l11-story-3",
    title: "Applying Meanings",
    type: "exercise",
    content: "Circle the letter or letters next to each correct answer. There may be more than one correct answer.",
    questions: [
        {
            id: "am-q1-fixed",
            type: "multiple-choice",
            question: "1. Which of the following are measurements of **altitude**?\n(a) three tons\n(b) twenty dollars\n(c) six miles\n(d) ten thousand feet",
            options: ["a and b", "c and d", "b and c"],
            correctAnswer: "c and d"
        },
        {
            id: "am-q2",
            type: "multiple-choice",
            question: "2. Which of the following might you find in a **hangar**?\n(a) airplanes\n(b) spare parts\n(c) tools\n(d) horses",
            options: ["a, b and c", "d only", "all of them"],
            correctAnswer: "a, b and c"
        },
        {
            id: "am-q3",
            type: "multiple-choice",
            question: "3. Which of the following might cause a person to **exult**?\n(a) receiving a scholarship\n(b) being liberated\n(c) an exceptional harvest\n(d) being thrown into bondage",
            options: ["a, b and c", "d only", "a and c"],
            correctAnswer: "a, b and c"
        },
        {
            id: "am-q4",
            type: "multiple-choice",
            question: "4. Which of the following remarks shows **confidence**?\n(a) 'I give up.'\n(b) 'I can do it.'\n(c) 'I'm not sure.'\n(d) 'Let me show you how.'",
            options: ["b and d", "a and c", "b only"],
            correctAnswer: "b and d"
        },
        {
            id: "am-q5",
            type: "multiple-choice",
            question: "5. Which of the following can be **accelerated**?\n(a) plant growth\n(b) an automobile\n(c) a route\n(d) a crevice",
            options: ["a and b", "c and d", "b only"],
            correctAnswer: "a and b"
        },
        {
            id: "am-q6",
            type: "multiple-choice",
            question: "6. Which of the following might cause **anxiety**?\n(a) becoming ill\n(b) losing a job\n(c) being denounced\n(d) finding a wallet",
            options: ["a, b and c", "d only", "a and b"],
            correctAnswer: "a, b and c"
        },
        {
            id: "am-q7",
            type: "multiple-choice",
            question: "7. Which of the following can **stall**?\n(a) a horse\n(b) an engine\n(c) an airplane\n(d) a person",
            options: ["b, c and d", "a only", "b and c"],
            correctAnswer: "b, c and d"
        },
        {
            id: "am-q8",
            type: "multiple-choice",
            question: "8. Which of the following could be used as a **brace**?\n(a) a steel rod\n(b) a broom handle\n(c) a length of string\n(d) a handkerchief",
            options: ["a and b", "c and d", "a only"],
            correctAnswer: "a and b"
        }
    ],
    wordsIncluded: ["altitude", "hangar", "exult", "confident", "accelerate", "anxiety", "stall", "brace"]
};

export const b5_l11_story_4: Story = {
    id: "b5-l11-story-4",
    title: "Word Study: Prefixes",
    type: "exercise",
    content: "The prefix **com-** means 'with'. To **complain** about something is to find fault *with* it. To make certain words easier to say, this prefix is sometimes written **con-**. Match the word to its definition.",
    questions: [
        {
            id: "ws-q1",
            type: "multiple-choice",
            question: "1. **connect**",
            options: ["to put together with", "to do away with or destroy", "pleased or satisfied with oneself", "get in touch with"],
            correctAnswer: "to put together with"
        },
        {
            id: "ws-q2",
            type: "multiple-choice",
            question: "2. **consume**",
            options: ["to put together with", "to do away with or destroy", "to put one thing with another", "satisfied with what one has"],
            correctAnswer: "to do away with or destroy"
        },
        {
            id: "ws-q3",
            type: "multiple-choice",
            question: "3. **confident**",
            options: ["pleased or satisfied with oneself", "to put together with", "getting along with another"],
            correctAnswer: "pleased or satisfied with oneself"
        },
        {
            id: "ws-q4",
            type: "multiple-choice",
            question: "4. **combine**",
            options: ["to put one thing with another", "to put together with", "a talk with someone"],
            correctAnswer: "to put one thing with another"
        },
        {
            id: "ws-q5",
            type: "multiple-choice",
            question: "5. **compatible**",
            options: ["getting along with another", "someone who travels with another", "satisfied with what one has"],
            correctAnswer: "getting along with another"
        },
        {
            id: "ws-q6",
            type: "multiple-choice",
            question: "6. **conversation**",
            options: ["a talk with someone", "get in touch with", "to understand or be familiar with"],
            correctAnswer: "a talk with someone"
        },
        {
            id: "ws-q7",
            type: "multiple-choice",
            question: "7. **content**",
            options: ["satisfied with what one has", "pleased or satisfied with oneself", "getting along with another"],
            correctAnswer: "satisfied with what one has"
        },
        {
            id: "ws-q8",
            type: "multiple-choice",
            question: "8. **comprehend**",
            options: ["to understand or be familiar with", "to do away with or destroy", "to put one thing with another"],
            correctAnswer: "to understand or be familiar with"
        },
        {
            id: "ws-q9",
            type: "multiple-choice",
            question: "9. **contact**",
            options: ["get in touch with", "a talk with someone", "someone who travels with another"],
            correctAnswer: "get in touch with"
        },
        {
            id: "ws-q10",
            type: "multiple-choice",
            question: "10. **companion**",
            options: ["someone who travels with another", "getting along with another", "pleased or satisfied with oneself"],
            correctAnswer: "someone who travels with another"
        }
    ],
    wordsIncluded: ["confident", "contact", "combine", "compatible", "content", "comprehend"] // prefixes
};
