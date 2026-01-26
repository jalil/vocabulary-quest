export interface RiddleQuestion {
    id: number;
    sentence: string;
    answer: string;
    lesson: number;
    hiddenIndex: number; // 0-based index of the letter to highlight
}

export const REVIEW_RIDDLE_QUESTION = "How can mail carriers tell how many letters there are in a mailbox without looking inside?";
export const REVIEW_RIDDLE_ANSWER = "THEY LOOK AT THE FLAG"; // The final reveal string

export const REVIEW_QUESTIONS: RiddleQuestion[] = [
    { id: 1, sentence: "I don't let anything _____ me while I'm working.", answer: "DISTRACT", lesson: 1, hiddenIndex: 6 },
    { id: 2, sentence: "A(n) _____ of mine fought in the Civil War.", answer: "ANCESTOR", lesson: 3, hiddenIndex: 6 },
    { id: 3, sentence: "Cats _____ on mice, chipmunks, and birds.", answer: "PREY", lesson: 3, hiddenIndex: 3 },
    { id: 4, sentence: "The bus's _____ was New York City.", answer: "DESTINATION", lesson: 4, hiddenIndex: 4 },
    { id: 5, sentence: "The dog looks _____ but it's quite harmless.", answer: "FEROCIOUS", lesson: 3, hiddenIndex: 5 },
    { id: 6, sentence: "Your eyes will soon _____ themselves to the dark.", answer: "ACCUSTOM", lesson: 1, hiddenIndex: 5 },
    { id: 7, sentence: "My parents hope to _____ a new car this year.", answer: "PURCHASE", lesson: 2, hiddenIndex: 5 },
    { id: 8, sentence: "The tires on the bulldozer were _____.", answer: "GIGANTIC", lesson: 3, hiddenIndex: 5 },
    { id: 9, sentence: "We have no other _____ but to continue.", answer: "OPTION", lesson: 3, hiddenIndex: 3 },
    { id: 10, sentence: "The _____ was admitted to the hospital this morning.", answer: "PATIENT", lesson: 1, hiddenIndex: 3 },
    { id: 11, sentence: "A(n) _____ dog does not have to be told twice.", answer: "OBEDIENT", lesson: 1, hiddenIndex: 3 },
    { id: 12, sentence: "If I _____ this storm, I'm never going sailing again.", answer: "SURVIVE", lesson: 3, hiddenIndex: 4 },
    { id: 13, sentence: "Last night's _____ blew several tiles off the roof.", answer: "GALE", lesson: 4, hiddenIndex: 2 },
    { id: 14, sentence: "My _____ on the trip was my best friend.", answer: "COMPANION", lesson: 1, hiddenIndex: 4 },
    { id: 15, sentence: "The speck on the _____ turned out to be an island.", answer: "HORIZON", lesson: 4, hiddenIndex: 3 },
    { id: 16, sentence: "I refused to _____ when told to give up my seat.", answer: "BUDGE", lesson: 1, hiddenIndex: 2 },
    { id: 17, sentence: "A drink and a short rest will soon _____ us.", answer: "REVIVE", lesson: 4, hiddenIndex: 2 },
    { id: 18, sentence: "Give me the _____ day of your arrival.", answer: "APPROXIMATE", lesson: 4, hiddenIndex: 4 },
    { id: 19, sentence: "The teacher will _____ you to your new seat.", answer: "ASSIGN", lesson: 1, hiddenIndex: 2 },
    { id: 20, sentence: "Those trees _____ the view of the lake.", answer: "OBSCURE", lesson: 3, hiddenIndex: 3 },
    { id: 21, sentence: "Are you and your roommate _____?", answer: "COMPATIBLE", lesson: 1, hiddenIndex: 4 },
    { id: 22, sentence: "A large _____ of grapes hung from the vine.", answer: "CLUSTER", lesson: 2, hiddenIndex: 3 },
    { id: 23, sentence: "The _____ from Seattle to Sydney took a month.", answer: "VOYAGE", lesson: 4, hiddenIndex: 2 },
    { id: 24, sentence: "A single blow from an ax will _____ the rope.", answer: "SEVER", lesson: 4, hiddenIndex: 2 },
    { id: 25, sentence: "You can _____ mushrooms in any dark, damp place.", answer: "CULTIVATE", lesson: 2, hiddenIndex: 4 },
    { id: 26, sentence: "We will _____ by the stars on our ocean crossing.", answer: "NAVIGATE", lesson: 4, hiddenIndex: 4 },
    { id: 27, sentence: "I felt a sudden wave of _____ for the good old days.", answer: "NOSTALGIA", lesson: 4, hiddenIndex: 4 },
    { id: 28, sentence: "A driver needs to be _____ at all times.", answer: "ALERT", lesson: 1, hiddenIndex: 1 },
    { id: 29, sentence: "Do you _____ the meaning of the message?", answer: "COMPREHEND", lesson: 3, hiddenIndex: 4 },
    { id: 30, sentence: "I plan to _____ early as I have to be up at six.", answer: "RETIRE", lesson: 1, hiddenIndex: 2 },
    { id: 31, sentence: "Candy canes are very _____, so don't drop any.", answer: "BRITTLE", lesson: 2, hiddenIndex: 3 },
    { id: 32, sentence: "The _____ we had to follow was laid out for us.", answer: "COURSE", lesson: 4, hiddenIndex: 2 },
    { id: 33, sentence: "I went up and said, 'Allow me to _____ myself.'", answer: "INTRODUCE", lesson: 2, hiddenIndex: 4 },
    { id: 34, sentence: "You can _____ peaches by canning them.", answer: "PRESERVE", lesson: 3, hiddenIndex: 3 },
    { id: 35, sentence: "The tiger is a(n) _____ and eats only meat.", answer: "CARNIVORE", lesson: 3, hiddenIndex: 4 },
    { id: 36, sentence: "I'm trying to cut down on the sweets that I _____.", answer: "CONSUME", lesson: 2, hiddenIndex: 3 },
    { id: 37, sentence: "The Rockies were a(n) _____ to those heading west.", answer: "OBSTACLE", lesson: 1, hiddenIndex: 3 },
    { id: 38, sentence: "The _____ of popcorn made our mouths water.", answer: "AROMA", lesson: 2, hiddenIndex: 2 },
    { id: 39, sentence: "What is the _____ of a dollar in Mexican money?", answer: "EQUIVALENT", lesson: 2, hiddenIndex: 4 },
    { id: 40, sentence: "Wood will _____ if it is not properly cared for.", answer: "DETERIORATE", lesson: 4, hiddenIndex: 5 },
    { id: 41, sentence: "I felt someone in the crowd _____ me.", answer: "JOSTLE", lesson: 1, hiddenIndex: 2 },
    { id: 42, sentence: "Two _____ men piled the wood in the truck.", answer: "BURLY", lesson: 1, hiddenIndex: 2 },
    { id: 43, sentence: "Sam cannot understand the _____ of how big the universe is.", answer: "CONCEPT", lesson: 1, hiddenIndex: 2 },
    { id: 44, sentence: "We _____ grain to many countries.", answer: "EXPORT", lesson: 2, hiddenIndex: 2 }
];
