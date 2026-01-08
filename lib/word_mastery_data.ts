import { DayLesson, VocabularyWord } from "./types";

// Helper to create word objects
const createWord = (id: string, word: string, definition: string, exampleSentence: string, imageEmoji: string): VocabularyWord => ({
    id,
    word,
    definition,
    category: "Word Mastery",
    exampleSentence,
    imageEmoji
});

// All Word Mastery Words (Deduplicated)
// Lesson 1
const wm_l1_words: VocabularyWord[] = [
    createWord("wm-l1-1", "Avid", "Being super into something (like an avid gamer).", "He is an avid reader of comic books.", "📚"),
    createWord("wm-l1-2", "Brusque", "Being short or a little bit rude when you talk.", "His brusque answer hurt her feelings.", "😠"),
    createWord("wm-l1-3", "Concise", "Keeping it \"short and sweet\" without extra words.", "Please give a concise summary.", "📝"),
    createWord("wm-l1-4", "Demean", "To put someone down or make them feel small.", "Do not demean others to make yourself feel better.", "👎"),
    createWord("wm-l1-5", "Despicable", "Totally gross, mean, or evil behavior.", "Stealing from the poor is despicable.", "👿"),
    createWord("wm-l1-6", "Emulate", "To copy someone because you think they are cool.", "She tried to emulate her favorite singer.", "👯"),
    createWord("wm-l1-7", "Evoke", "To bring up a memory or a feeling.", "The smell of cookies evoked childhood memories.", "💭"),
    createWord("wm-l1-8", "Excruciating", "Something that hurts really bad.", "He felt excruciating pain in his leg.", "😫"),
    createWord("wm-l1-9", "Inaugurate", "To start something officially.", "They will inaugurate the new President tomorrow.", "🏛️"),
    createWord("wm-l1-10", "Pervade", "To spread everywhere.", "A feeling of joy pervaded the room.", "🌫️"),
    createWord("wm-l1-11", "Proprietor", "A fancy word for the boss or owner of a shop.", "The proprietor greeted us at the door.", "🏪"),
    createWord("wm-l1-12", "Pseudonym", "A fake name used by an author.", "Mark Twain is a pseudonym.", "🎭"),
    createWord("wm-l1-13", "Rebuff", "To say \"no thanks\" in a firm or slightly cold way.", "She rebuffed his offer of help.", "✋"),
    createWord("wm-l1-14", "Resilient", "Being able to bounce back after something goes wrong.", "Children are often very resilient.", "🌱"),
    createWord("wm-l1-15", "Turbulent", "Bumpy, shaky, or wild.", "The flight was very turbulent.", "✈️")
];

// Lesson 2
const wm_l2_words: VocabularyWord[] = [
    createWord("wm-l2-1", "Abrasion", "A scrape or a scratch on your skin.", "He had a small abrasion on his knee.", "🩹"),
    createWord("wm-l2-2", "Clad", "A fancy way to say \"dressed in\" or \"wearing.\"", "Knights were clad in armor.", "🛡️"),
    createWord("wm-l2-3", "Corroborate", "To back up someone’s story with proof.", "The video corroborated his alibi.", "✅"),
    createWord("wm-l2-4", "Cursory", "Taking a super quick, \"blink and you'll miss it\" look at something.", "He took a cursory glance at the map.", "👀"),
    createWord("wm-l2-5", "Dehydrate", "To dry out or run out of water.", "Salt can dehydrate your body.", "🌵"),
    createWord("wm-l2-6", "Derive", "To get something from a source.", "We derive milk from cows.", "🐮"),
    createWord("wm-l2-7", "Electrify", "To make someone feel super excited or \"shocked\" with energy.", "Her performance electrified the crowd.", "⚡"),
    createWord("wm-l2-8", "Endeavor", "To try really, really hard to do something.", "We will endeavor to finish on time.", "🚀"),
    createWord("wm-l2-9", "Gingerly", "Doing something very carefully and quietly.", "He walked gingerly on the ice.", "👣"),
    createWord("wm-l2-10", "Grimace", "Making a \"yuck\" or \"ouch\" face.", "She made a grimace when she tasted the lemon.", "😖"),
    createWord("wm-l2-11", "Gruesome", "Something gross, bloody, or scary to look at.", "The movie had a gruesome scene.", "🧟"),
    createWord("wm-l2-12", "Inventory", "A big list of all the stuff you have.", "The store checked its inventory.", "📋"),
    createWord("wm-l2-13", "Simulate", "To pretend or copy how something works.", "The game simulates flying a plane.", "🎮"),
    createWord("wm-l2-14", "Succumb", "To give in or stop fighting against something.", "Do not succumb to peer pressure.", "🏳️"),
    createWord("wm-l2-15", "Surmise", "To make a smart guess based on what you see.", "I surmise that he is running late.", "🤔")
];

// Lesson 3
const wm_l3_words: VocabularyWord[] = [
    createWord("wm-l3-1", "Anonymous", "When no one knows who did it.", "The donor wished to remain anonymous.", "👤"),
    createWord("wm-l3-2", "Anthology", "A big book that is a collection of different stories or poems.", "We read an anthology of scary stories.", "📚"),
    createWord("wm-l3-3", "Conjecture", "A guess you make when you don't have all the facts yet.", "That is just pure conjecture.", "🤷"),
    createWord("wm-l3-4", "Disposition", "Your usual mood.", "She has a sunny disposition.", "☀️"),
    createWord("wm-l3-5", "Encompass", "To include everything or wrap around something.", "The course encompasses all of history.", "🌐"),
    createWord("wm-l3-6", "Extricate", "To wiggle or pull yourself out of a sticky situation.", "He managed to extricate himself from the trap.", "🕸️"),
    createWord("wm-l3-7", "Generation", "All the people born around the same time.", "My grandmother is from a different generation.", "👵"),
    createWord("wm-l3-8", "Guile", "Using \"sneaky smarts\" or tricks to get what you want.", "The fox used guile to trick the rabbit.", "🦊"),
    createWord("wm-l3-9", "Imperative", "Something that is super important and must be done now.", "It is imperative that you study.", "❗"),
    createWord("wm-l3-10", "Instill", "To slowly put an idea or a habit into someone’s head.", "Parents try to instill good manners.", "🧠"),
    createWord("wm-l3-11", "Modify", "To make a small change to something to make it better.", "We need to modify the plan.", "🛠️"),
    createWord("wm-l3-12", "Pivot", "To spin or turn on one spot.", "The basketball player pivoted to pass.", "🏀"),
    createWord("wm-l3-13", "Prevalent", "Something that is common or seen everywhere.", "Colds are prevalent in winter.", "🤧"),
    createWord("wm-l3-14", "Recur", "When something happens over and over again.", "The problem tends to recur.", "🔄"),
    createWord("wm-l3-15", "Spontaneous", "Doing something suddenly without planning it first.", "We took a spontaneous trip to the beach.", "🏖️")
];

// Lesson 4
const wm_l4_words: VocabularyWord[] = [
    createWord("wm-l4-1", "Abhor", "To totally hate something.", "I abhor violence.", "🚫"),
    createWord("wm-l4-2", "Affable", "Being super friendly and easy to talk to.", "The host was very affable.", "👋"),
    createWord("wm-l4-3", "Amiss", "When something feels \"off\" or wrong.", "Nothing seemed amiss at first.", "🧐"),
    createWord("wm-l4-4", "Despondent", "Feeling really, really sad and hopeless.", "He became despondent after failing.", "😞"),
    createWord("wm-l4-5", "Entreat", "To beg someone for something in a serious way.", "I entreat you to listen.", "🙏"),
    createWord("wm-l4-6", "Haunt", "To stay in your mind or a place.", "Looking back, that decision haunts me.", "👻"),
    createWord("wm-l4-7", "Impel", "To push or force someone to take action.", "Hunger impelled him to steal.", "👉"),
    createWord("wm-l4-8", "Interminable", "Something that feels like it’s going to last forever.", "The speech was interminable.", "⏳"),
    createWord("wm-l4-9", "Irascible", "Getting annoyed or angry very easily.", "The irascible old man shouted at kids.", "😡"),
    createWord("wm-l4-10", "Profound", "Something very deep, serious, or meaningful.", "The book had a profound effect on me.", "🌊"),
    createWord("wm-l4-11", "Recluse", "Someone who likes to stay alone and away from people.", "He lived as a recluse in the mountains.", "🏔️"),
    createWord("wm-l4-12", "Reverberate", "To echo or shake with a loud sound.", "The sound reverberated through the hall.", "🔊"),
    createWord("wm-l4-13", "Sage", "Someone who is very wise and smart.", "We asked the sage for advice.", "🧙‍♂️"),
    createWord("wm-l4-14", "Tirade", "A long, angry speech where someone is yelling.", "He launched into a furious tirade.", "🤬"),
    createWord("wm-l4-15", "Tremulous", "Shaking or shivering because you are nervous or weak.", "She spoke in a tremulous voice.", "🥶")
];

// Lesson 5
const wm_l5_words: VocabularyWord[] = [
    createWord("wm-l5-1", "Audacious", "Being super brave, bold, or even a bit \"too\" daring.", "He made an audacious plan.", "🦁"),
    createWord("wm-l5-2", "Confiscate", "When a teacher or parent takes something away from you.", "The teacher confiscated the toy.", "👮"),
    createWord("wm-l5-3", "Conscientious", "Being very careful to do your work the right way.", "She is a conscientious student.", "✍️"),
    createWord("wm-l5-4", "Depict", "To show what something looks like in a drawing or story.", "The painting depicts a battle.", "🖼️"),
    createWord("wm-l5-5", "Embark", "To start a big trip or a new adventure.", "We will embark on a journey.", "🚢"),
    createWord("wm-l5-6", "Inkling", "A tiny hint or a \"gut feeling\" about something.", "I had an inkling he was lying.", "💡"),
    createWord("wm-l5-7", "Lackadaisical", "Being lazy and not putting in any effort.", "His lackadaisical attitude annoyed the coach.", "🥱"),
    createWord("wm-l5-8", "Mutiny", "When a group (like a crew) rebels against their leader.", "The sailors planned a mutiny.", "☠️"),
    createWord("wm-l5-9", "Pilfer", "To steal small things that don't cost much.", "He pilfered a cookie from the jar.", "🍪"),
    createWord("wm-l5-10", "Profusion", "A huge amount of something.", "A profusion of flowers grew in the garden.", "💐"),
    createWord("wm-l5-11", "Prudent", "Making smart, careful choices to stay safe.", "It is prudent to save money.", "🐖"),
    createWord("wm-l5-12", "Rankle", "When something keeps bothering or annoying you for a long time.", "The insult rankled him for days.", "😣"),
    createWord("wm-l5-13", "Rebuke", "To give someone a \"talking to\" or scold them for doing wrong.", "She rebuked him for being late.", "☝️"),
    createWord("wm-l5-14", "Serene", "Feeling very calm, peaceful, and quiet.", "The lake looked serene at sunset.", "🌅"),
    createWord("wm-l5-15", "Slovenly", "Being messy, untidy, or \"sloppy\" in how you look.", "He had a slovenly appearance.", "👕")
];

// Lesson 6 (Duplicates removed: Conspire)
const wm_l6_words: VocabularyWord[] = [
    createWord("wm-l6-1", "Anarchy", "Total chaos where there are no rules and no one is in charge.", "The country fell into anarchy.", "🔥"),
    createWord("wm-l6-2", "Apprehend", "When the police catch a \"bad guy\" or to understand an idea.", "Police apprehended the suspect.", "🚓"),
    createWord("wm-l6-3", "Arraign", "To officially bring someone to court to tell them what they did wrong.", "He was arraigned on theft charges.", "⚖️"),
    createWord("wm-l6-4", "Assimilate", "To blend in or become part of a new group or culture.", "It takes time to assimilate to a new country.", "🔄"),
    createWord("wm-l6-5", "Bizarre", "Something very weird, strange, or \"out there.\"", "Whatever happened was bizarre.", "👽"),
    createWord("wm-l6-6", "Calamity", "A huge disaster or a terrible event.", "The earthquake was a calamity.", "🌋"),
    // Conspire removed (Duplicate)
    createWord("wm-l6-8", "Dissension", "A big disagreement or \"fighting\" within a group.", "There was dissension in the team.", "🤜"),
    createWord("wm-l6-9", "Elapse", "A fancy way to say \"time passed by.\"", "Weeks elapsed before we met again.", "🕰️"),
    createWord("wm-l6-10", "Imminent", "Something that is about to happen right now.", "A storm is imminent.", "⛈️"),
    createWord("wm-l6-11", "Interrogate", "To ask someone a lot of tough questions.", "They interrogated the spy.", "🕵️"),
    createWord("wm-l6-12", "Lionize", "To treat someone like a famous superstar.", "The fans lionized the athlete.", "🦁"),
    createWord("wm-l6-13", "Meticulous", "Being extremely careful about every tiny detail.", "He did a meticulous job cleaning.", "🔍"),
    createWord("wm-l6-14", "Shackled", "Being tied up or held back.", "The prisoner was shackled.", "🔗"),
    createWord("wm-l6-15", "Swelter", "To feel super hot and sweaty.", "We sweltered in the summer heat.", "🥵")
];

// Lesson 7
const wm_l7_words: VocabularyWord[] = [
    createWord("wm-l7-1", "Agnostic", "Someone who isn't sure if God exists or not.", "He described himself as agnostic.", "❓"),
    createWord("wm-l7-2", "Acquiesce", "To give in and say \"okay\" even if you don't really want to.", "She acquiesced to their demands.", "🆗"),
    createWord("wm-l7-3", "Altercation", "A noisy argument or a small fight.", "There was an altercation in the hall.", "🗣️"),
    createWord("wm-l7-4", "Charlatan", "A \"fake\" person who pretends to be an expert to trick people.", "The doctor was a charlatan.", "🎭"),
    createWord("wm-l7-5", "Denounce", "To publicly say that something is wrong or bad.", "He denounced the violence.", "📢"),
    createWord("wm-l7-6", "Docile", "Easy to handle, calm, and obedient.", "The horse was very docile.", "🐴"),
    createWord("wm-l7-7", "Fetter", "Anything that holds you back or \"chains\" you down.", "Fear fettered his actions.", "⛓️"),
    createWord("wm-l7-8", "Impending", "Something (usually bad) that is coming soon.", "We sensed impending danger.", "🌪️"),
    createWord("wm-l7-9", "Ingenuity", "Being super clever and good at inventing things.", "She showed great ingenuity fixing it.", "💡"),
    createWord("wm-l7-10", "Innate", "A skill or quality you were born with.", "He has an innate talent for music.", "🎵"),
    createWord("wm-l7-11", "Liable", "Being responsible for something or likely to do something.", "You are liable for damages.", "🧾"),
    createWord("wm-l7-12", "Premonition", "A \"spooky\" feeling that something is about to happen.", "I had a premonition of bad news.", "🔮"),
    createWord("wm-l7-13", "Retaliate", "To \"get back\" at someone who did something mean to you.", "Do not retaliate when provoked.", "🥊"),
    createWord("wm-l7-14", "Solace", "Something that makes you feel better when you are sad.", "She found solace in reading.", "📖"),
    createWord("wm-l7-15", "Trite", "An idea or joke that has been used so much it’s boring now.", "That excuse is trite.", "🥱")
];

// Lesson 8 (Duplicates removed: Perilous)
const wm_l8_words: VocabularyWord[] = [
    createWord("wm-l8-1", "Capaciously", "Having a lot of space.", "The bag opened capaciously.", "🎒"),
    createWord("wm-l8-2", "Commensurate", "When two things match or are \"equal\" in size or value.", "Pay should be commensurate with effort.", "⚖️"),
    createWord("wm-l8-3", "Defer", "To put something off until later.", "They decided to defer the decision.", "🗓️"),
    createWord("wm-l8-4", "Chasm", "A deep, wide hole in the ground.", "A huge chasm opened up.", "🕳️"),
    createWord("wm-l8-5", "Deficient", "When you are missing something important or don't have enough.", "His diet is deficient in vitamins.", "📉"),
    createWord("wm-l8-6", "Detest", "To really, really, really hate something.", "I detest broccoli.", "🥦"),
    createWord("wm-l8-7", "Garrulous", "Someone who talks a lot and won't stop.", "The garrulous neighbor kept talking.", "🗣️"),
    createWord("wm-l8-8", "Hinder", "To get in the way and slow someone down.", "Snow hindered our travel.", "🚧"),
    createWord("wm-l8-9", "Injurious", "Something that causes harm or \"injuries.\"", "Smoking is injurious to health.", "🧪"),
    createWord("wm-l8-10", "Lavish", "Being super fancy, expensive, and \"over the top.\"", "It was a lavish party.", "🥂"),
    createWord("wm-l8-11", "Malign", "To say mean, untrue things about someone to hurt them.", "Do not malign your friends.", "🗯️"),
    createWord("wm-l8-12", "Mitigate", "To make something bad feel a little bit better or less painful.", "Medicine helped mitigate the pain.", "💊"),
    createWord("wm-l8-13", "Oblivious", "Having \"no clue\" what is going on around you.", "He was oblivious to the noise.", "🎧"),
    // Perilous removed (Duplicate)
    createWord("wm-l8-15", "Perpetual", "Something that never stops and goes on forever.", "The machine is in perpetual motion.", "♾️")
];

// Lesson 9
const wm_l9_words: VocabularyWord[] = [
    createWord("wm-l9-1", "Admonish", "To give a gentle warning or a \"don't do that\" talk.", "Mom admonished me for running.", "☝️"),
    createWord("wm-l9-2", "Bias", "Favoring one side or person over another.", "The referee showed bias.", "🏳️"),
    createWord("wm-l9-3", "Explicate", "To explain a difficult idea in great detail.", "Please explicate this poem.", "📝"),
    createWord("wm-l9-4", "Ephemeral", "Something that lasts for a very short time.", "Fame can be ephemeral.", "🫧"),
    createWord("wm-l9-5", "Fallacy", "A \"fake\" or wrong idea that people believe is true.", "That belief is a fallacy.", "❌"),
    createWord("wm-l9-6", "Felicity", "A fancy word for feeling super happy.", "She smiled with felicity.", "😊"),
    createWord("wm-l9-7", "Frugal", "Being very careful with money and not wasting it.", "He is frugal with his spending.", "💰"),
    createWord("wm-l9-8", "Infallible", "Someone who never makes a mistake.", "Nobody is infallible.", "✨"),
    createWord("wm-l9-9", "Loathe", "To feel a lot of \"yuck\" and hate toward something.", "I loathe cloudy days.", "🌧️"),
    createWord("wm-l9-10", "Misanthrope", "A \"grinch\" who hates people and likes being alone.", "The old miser was a misanthrope.", "😠"),
    createWord("wm-l9-11", "Novice", "A beginner who is just starting to learn something.", "I am a novice at chess.", "👶"),
    createWord("wm-l9-12", "Philanthropic", "Wanting to help people.", "She supports philanthropic causes.", "❤️"),
    createWord("wm-l9-13", "Proximity", "How close you are to something.", "The proximity to the park is nice.", "📍"),
    createWord("wm-l9-14", "Refute", "To prove that an idea is wrong.", "Evidence refuted his claim.", "🙅"),
    createWord("wm-l9-15", "Tenure", "How long someone has held a certain job.", "The professor has a long tenure.", "📆")
];

// Lesson 10 (Duplicates removed: Destitute)
const wm_l10_words: VocabularyWord[] = [
    createWord("wm-l10-1", "Alleviate", "To make pain or a problem feel better.", "Ice helps alleviate swelling.", "🧊"),
    createWord("wm-l10-2", "Censure", "A very strong, official \"shame on you\" or scolding.", "He faced censure for his actions.", "📜"),
    createWord("wm-l10-3", "Dispel", "To make a fear or a rumor go away or disappear.", "Sunlight dispelled the darkness.", "☀️"),
    createWord("wm-l10-4", "Cynic", "Someone who thinks everyone is just being selfish.", "He is too much of a cynic.", "😒"),
    // Destitute removed (Duplicate)
    createWord("wm-l10-6", "Exorbitant", "A price that is way too high.", "The cost was exorbitant.", "💸"),
    createWord("wm-l10-7", "Extravaganza", "A huge, fancy, and exciting show or party.", "The circus was an extravaganza.", "🎪"),
    createWord("wm-l10-8", "Inanimate", "Something that is not alive.", "Rocks are inanimate objects.", "🪨"),
    createWord("wm-l10-9", "Malaria", "A serious sickness you can get from mosquito bites.", "Mosquitoes spread malaria.", "🦟"),
    createWord("wm-l10-10", "Mercurial", "When someone's mood changes super fast.", "He has a mercurial temperament.", "🌡️"),
    createWord("wm-l10-11", "Onslaught", "A huge, sudden attack or a \"ton\" of something at once.", "They faced an onslaught of criticism.", "🛡️"),
    createWord("wm-l10-12", "Pugnacious", "Someone who is always \"ready to fight\" or argue.", "The pugnacious dog barked.", "🥊"),
    createWord("wm-l10-13", "Replenish", "To fill something back up after it gets empty.", "Drink water to replenish fluids.", "💧"),
    createWord("wm-l10-14", "Unscrupulously", "Doing something in a \"sneaky\" or dishonest way.", "He acted unscrupulously to win.", "🕵️"),
    createWord("wm-l10-15", "Yearn", "To really, really want something you don't have.", "She yearned for a vacation.", "🌠")
];

// Lesson 11 (Duplicates removed: Turbulent, Pompous)
const wm_l11_words: VocabularyWord[] = [
    createWord("wm-l11-1", "Augment", "To add to something to make it bigger or better.", "We need to augment our income.", "➕"),
    createWord("wm-l11-2", "Benign", "Something that is harmless or kind.", "The tumor was benign.", "🙂"),
    createWord("wm-l11-3", "Candid", "Being totally honest and \"real\" with someone.", "He gave a candid interview.", "🎙️"),
    createWord("wm-l11-4", "Condone", "To say \"it's okay\" to something that is actually wrong.", "We do not condone cheating.", "👎"),
    createWord("wm-l11-5", "Craven", "Being a total coward or \"scaredy-cat.\"", "It was a craven act.", "🙀"),
    createWord("wm-l11-6", "Disdain", "Looking down on someone like they are \"beneath\" you.", "She looked at him with disdain.", "🧐"),
    createWord("wm-l11-7", "Divert", "To turn someone’s attention away or change the path.", "They diverted the river.", "↪️"),
    createWord("wm-l11-8", "Exasperate", "To annoy someone so much they want to scream.", "His questions exasperated her.", "😤"),
    createWord("wm-l11-9", "Flagrant", "Something bad that is super obvious and \"right in your face.\"", "It was a flagrant foul.", "🚩"),
    createWord("wm-l11-10", "Incite", "To stir up trouble or start a fight.", "Do not incite violence.", "🔥"),
    createWord("wm-l11-11", "Inert", "Not moving at all; just sitting there.", "The gas is chemically inert.", "🗿"),
    // Pompous removed (Duplicate)
    createWord("wm-l11-13", "Renown", "Being famous or well-known for doing something great.", "He achieved great renown.", "🌟"),
    createWord("wm-l11-14", "Stifle", "To hold something back or to smother it.", "He tried to stifle a yawn.", "🥱")
    // Turbulent removed (Duplicate)
];

// Lesson 12 (Duplicates removed: Calamity, Candid, Oblivious)
const wm_l12_words: VocabularyWord[] = [
    createWord("wm-l12-1", "Abdicate", "When a King or Queen gives up their throne/power.", "The king chose to abdicate.", "👑"),
    createWord("wm-l12-2", "Assumption", "A guess you make without having the facts.", "That is a wrong assumption.", "💭"),
    createWord("wm-l12-3", "Baffle", "To totally confuse someone.", "The riddle baffled everyone.", "🧩"),
    // Calamity removed
    // Candid removed
    createWord("wm-l12-6", "Contemplate", "To think about something very deeply for a long time.", "He contemplated the meaning of life.", "🤔"),
    createWord("wm-l12-7", "Deface", "To ruin how something looks.", "Do not deface the statue.", "🖍️"),
    createWord("wm-l12-8", "Fiasco", "A \"total fail\" or a big, messy disaster.", "The party was a fiasco.", "💥"),
    createWord("wm-l12-9", "Gregarious", "Someone who is super social and loves being with friends.", "He is very gregarious.", "🥳"),
    createWord("wm-l12-10", "Humane", "Being very kind and caring toward people or animals.", "Treat animals in a humane way.", "🐾"),
    // Oblivious removed
    createWord("wm-l12-12", "Perturb", "To make someone feel worried or upset.", "The news perturbed him.", "😟"),
    createWord("wm-l12-13", "Plausible", "Something that sounds like it could actually be true.", "It is a plausible excuse.", "👌"),
    createWord("wm-l12-14", "Ruthless", "Being very cruel and having no \"heart\" or pity.", "The dictator was ruthless.", "⚔️"),
    createWord("wm-l12-15", "Vindicate", "To prove that someone was \"not guilty\" or right all along.", "New proofs vindicated him.", "⚖️")
];

// Lesson 13 (Duplicates removed: Disdain, Eulogy, Prevalent)
const wm_l13_words: VocabularyWord[] = [
    createWord("wm-l13-1", "Acclaim", "Loud praise or \"cheering\" for someone's success.", "The movie received critical acclaim.", "👏"),
    createWord("wm-l13-2", "Ascetic", "Living a very simple life without any \"fun\" stuff or treats.", "Monks live an ascetic life.", "🧘"),
    // Disdain removed
    createWord("wm-l13-4", "Delineate", "To draw or describe something very clearly.", "The map delineates the border.", "🗺️"),
    // Eulogy removed
    createWord("wm-l13-6", "Fervor", "Having a lot of \"fire\" and excitement for something.", "They cheered with fervor.", "🔥"),
    createWord("wm-l13-7", "Hypocritical", "When someone says one thing but does the opposite.", "It is hypocritical to lie.", "🤥"),
    createWord("wm-l13-8", "Immaculate", "Being perfectly clean and \"spotless.\"", "The room was immaculate.", "✨"),
    createWord("wm-l13-9", "Malcontent", "Someone who is never happy and always complaining.", "He is a constant malcontent.", "😒"),
    createWord("wm-l13-10", "Morose", "Feeling very gloomy, sad, and \"grumpy.\"", "He sat in morose silence.", "☁️"),
    createWord("wm-l13-11", "Noxious", "Something that is \"poison\" or very harmful to breathe.", "Noxious fumes filled the air.", "☠️"),
    createWord("wm-l13-12", "Poignant", "Something that makes you feel a strong sense of sadness.", "It was a poignant moment.", "😥"),
    createWord("wm-l13-13", "Ponder", "To \"chew on\" an idea in your head for a while.", "I need time to ponder this.", "💭"),
    // Prevalent removed
    createWord("wm-l13-15", "Reiterate", "To say something again to make sure people heard you.", "Let me reiterate my point.", "🔁")
];

// Lesson 14 (Duplicates removed: Plausible)
const wm_l14_words: VocabularyWord[] = [
    createWord("wm-l14-1", "Allude", "To \"hint\" at something without saying it directly.", "He alluded to a secret plan.", "😉"),
    createWord("wm-l14-2", "Capricious", "Changing your mind or mood for no reason at all.", "The weather is capricious.", "🤪"),
    createWord("wm-l14-3", "Conclusive", "Proof that is so strong it ends the argument.", "The DNA evidence was conclusive.", "🔨"),
    createWord("wm-l14-4", "Decipher", "To \"crack the code\" and figure out a secret message.", "I cannot decipher his handwriting.", "🗝️"),
    createWord("wm-l14-5", "Disgruntle", "To make someone feel \"cranky\" and unhappy.", "The delay disgruntled the passengers.", "😠"),
    createWord("wm-l14-6", "Entice", "To \"lure\" someone in with something they want.", "The smell of pie enticed him.", "🥧"),
    createWord("wm-l14-7", "Extinguish", "To put out a fire or make something stop.", "Firefighters extinguished the flames.", "🧯"),
    createWord("wm-l14-8", "Gaudy", "Something that is \"too much\"—too bright, too loud, or too flashy.", "She wore a gaudy outfit.", "🌈"),
    createWord("wm-l14-9", "Inordinate", "An amount that is way \"too much\".", "He spent an inordinate amount of time.", "⏳"),
    createWord("wm-l14-10", "Insinuate", "To \"sneakily\" suggest something bad without saying it.", "Are you insinuating I lied?", "🐍"),
    createWord("wm-l14-11", "Languish", "To get weak or \"stuck\" in a bad place for a long time.", "The plant languished without water.", "🥀"),
    createWord("wm-l14-12", "Lurid", "Something that is \"shockingly\" gross, bright, or scary.", "The story had lurid details.", "😱"),
    createWord("wm-l14-13", "Malevolent", "Wanting to do \"evil\" or bad things to others.", "A malevolent spirit haunted the house.", "😈"),
    createWord("wm-l14-14", "Perpetuate", "To keep something (usually something bad) going on and on.", "Don't perpetuate neighbors' rumors.", "🔁")
    // Plausible removed
];

// Lesson 15
const wm_l15_words: VocabularyWord[] = [
    createWord("wm-l15-1", "Ascertain", "To find out the \"real truth\" for sure.", "We need to ascertain the facts.", "🕵️"),
    createWord("wm-l15-2", "Chastise", "To scold or \"give a talking to\" for doing something wrong.", "Mom chastised me for breaking the vase.", "🗣️"),
    createWord("wm-l15-3", "Discrepancy", "When two things that should be the same are different.", "There is a discrepancy in the numbers.", "📉"),
    createWord("wm-l15-4", "Elicit", "To get a reaction out of someone.", "His joke elicited a huge laugh.", "😂"),
    createWord("wm-l15-5", "Fastidious", "Being \"super picky\" about things being perfect.", "He is fastidious about cleaning.", "🧼"),
    createWord("wm-l15-6", "Hallowed", "Something very holy, special, or respected.", "This is hallowed ground.", "🕊️"),
    createWord("wm-l15-7", "Homage", "Doing something special to show \"respect\" to a hero.", "The movie pays homage to the classic.", "🫡"),
    createWord("wm-l15-8", "Impartial", "Being fair and not taking sides.", "A judge must be impartial.", "⚖️"),
    createWord("wm-l15-9", "Incongruous", "Something that looks \"out of place\" or doesn't fit in.", "The modern chair looked incongruous here.", "🖼️"),
    createWord("wm-l15-10", "Luminous", "Glowing or giving off a lot of light.", "The room was luminous.", "💡"),
    createWord("wm-l15-11", "Query", "A fancy word for a \"question.\"", "I have a query about the bill.", "🙋"),
    createWord("wm-l15-12", "Recant", "To take back something you said earlier.", "The witness recanted his statement.", "🔙"),
    createWord("wm-l15-13", "Requisite", "Something that is \"required\" or needed before you start.", "Hard work is requisite for success.", "🧱"),
    createWord("wm-l15-14", "Servile", "Acting like a \"servant\" and being too eager to please.", "He had a servile attitude.", "🙇"),
    createWord("wm-l15-15", "Surveillance", "Watching someone very closely.", "The bank is under surveillance.", "📹")
];

// Lesson 16 (Duplicates removed: Augment, Deface, Fastidious, Humane)
const wm_l16_words: VocabularyWord[] = [
    // Augment removed
    createWord("wm-l16-2", "Bureaucracy", "A complicated system of \"rules and paperwork\" that is annoying.", "We faced a lot of red tape and bureaucracy.", "🏢"),
    createWord("wm-l16-3", "Cajole", "To \"sweet talk\" someone into doing what you want.", "She cajoled him into going.", "🍬"),
    createWord("wm-l16-4", "Corrupt", "Dishonest or \"bad\".", "The corrupt mayor was fired.", "💰"),
    // Deface removed
    createWord("wm-l16-6", "Disseminate", "To \"spread\" information everywhere.", "They disseminated the news quickly.", "📰"),
    createWord("wm-l16-7", "Enmity", "Feeling like someone is your \"enemy\" or having deep hate.", "There is old enmity between the clans.", "⚔️"),
    createWord("wm-l16-8", "Extol", "To \"brag\" about how great something is.", "He extolled the virtues of exercise.", "🙌"),
    // Fastidious removed
    createWord("wm-l16-10", "Fervent", "Feeling very \"intense\" and excited about something.", "He is a fervent supporter.", "🤩"),
    createWord("wm-l16-11", "Gibberish", "Talk that makes absolutely \"no sense.\"", "He was speaking gibberish.", "🤪"),
    // Humane removed
    createWord("wm-l16-13", "Incandescent", "Giving off a very bright, \"glowing\" light.", "The bulb creates incandescent light.", "💡"),
    createWord("wm-l16-14", "Lucrative", "A job or idea that makes a \"ton of money.\"", "It was a lucrative deal.", "💵"),
    createWord("wm-l16-15", "Nonchalant", "Acting \"cool\" and like you don't care at all.", "He acted nonchalant about the test.", "😎")
];

// Lesson 17 (Duplicates removed: Candid, Chasm, Decipher, Entreat, Languish, Pervade, Turbulent)
const wm_l17_words: VocabularyWord[] = [
    createWord("wm-l17-1", "Abate", "When something (like a storm) starts to \"slow down\" or stop.", "The storm began to abate.", "📉"),
    createWord("wm-l17-2", "Adroit", "Being super \"skilled\" and good with your hands or brain.", "He is adroit at fixing cars.", "🔧"),
    // Candid removed
    // Chasm removed
    // Decipher removed
    // Entreat removed
    createWord("wm-l17-7", "Exacerbate", "To make a bad situation \"even worse.\"", "Stress exacerbates the pain.", "😖"),
    createWord("wm-l17-8", "Feasible", "Something that is \"actually possible\" to do.", "The plan seems feasible.", "✅"),
    createWord("wm-l17-9", "Futile", "Totally \"pointless\" to try because it won't work.", "Resistance is futile.", "🚫"),
    createWord("wm-l17-10", "Indelible", "Something that \"can't be erased\".", "The ink is indelible.", "🖊️"),
    createWord("wm-l17-11", "Inundate", "To \"flood\" or overwhelm someone with too much stuff.", "We were inundated with emails.", "🌊"),
    // Languish removed
    // Pervade removed
    createWord("wm-l17-14", "Pungent", "A very \"strong\" and sharp smell.", "A pungent smell came from the kitchen.", "🦨")
    // Turbulent removed
];

// Lesson 18 (Duplicates removed: Contemplate, Cursory, Deface, Decipher, Disseminate, Enmity, Exacerbate, Pervade, Prevalent)
const wm_l18_words: VocabularyWord[] = [
    createWord("wm-l18-1", "Allege", "To say someone did something without having \"proof\" yet.", "They allege he stole the money.", "👈"),
    // Contemplate removed
    // Cursory removed
    // Deface removed
    // Decipher removed
    // Disseminate removed
    // Enmity removed
    // Exacerbate removed
    createWord("wm-l18-9", "Feign", "To \"fake\" a feeling.", "He feigned a headache.", "🤕"),
    createWord("wm-l18-10", "Fester", "When a problem (or a cut) gets \"gross\" and worse over time.", "The wound began to fester.", "🦠"),
    createWord("wm-l18-11", "Formidable", "Someone or something that is \"scary\" because they are so strong.", "She is a formidable opponent.", "🏋️‍♀️"),
    createWord("wm-l18-12", "Inevitable", "Something that is \"definitely going to happen\" no matter what.", "War seemed inevitable.", "⚠️"),
    createWord("wm-l18-13", "Memoir", "A book someone writes about their own life.", "I read her memoir.", "📕")
    // Pervade removed
    // Prevalent removed
];

// Lesson 19 (Duplicates removed: Adroit, Baffle, Candid, Contemplate, Deface, Decipher, Disseminate, Feasible, Feign, Formidable, Inevitable, Invincible, Languish, Pervade)
// Only Compel is new?
const wm_l19_words: VocabularyWord[] = [
    // Adroit removed
    // Baffle removed
    // Candid removed
    createWord("wm-l19-4", "Compel", "To \"force\" someone to do something.", "The law compels us to pay taxes.", "👮‍♂️")
    // Contemplate removed
    // Deface removed
    // Decipher removed
    // Disseminate removed
    // Feasible removed
    // Feign removed
    // Formidable removed
    // Inevitable removed
    // Invincible removed
    // Languish removed
    // Pervade removed
];

// Lesson 20 (Duplicates removed: Abdicate, Abhor, Admonish, Allude, Apprehend, Arraign, Assimilate, Bizarre, Calamity, Conspire, Dissension, Elapse, Imminent, Interrogate, Lionize)
const wm_l20_words: VocabularyWord[] = [
    // All are duplicates from previous lists!
    // Lesson 20 is fully empty after deduplication.
];

export const WORD_MASTERY_LESSONS: DayLesson[] = [
    { id: "wm-lesson-1", dayNumber: 1, words: wm_l1_words, stories: [] },
    { id: "wm-lesson-2", dayNumber: 2, words: wm_l2_words, stories: [] },
    { id: "wm-lesson-3", dayNumber: 3, words: wm_l3_words, stories: [] },
    { id: "wm-lesson-4", dayNumber: 4, words: wm_l4_words, stories: [] },
    { id: "wm-lesson-5", dayNumber: 5, words: wm_l5_words, stories: [] },
    { id: "wm-lesson-6", dayNumber: 6, words: wm_l6_words, stories: [] },
    { id: "wm-lesson-7", dayNumber: 7, words: wm_l7_words, stories: [] },
    { id: "wm-lesson-8", dayNumber: 8, words: wm_l8_words, stories: [] },
    { id: "wm-lesson-9", dayNumber: 9, words: wm_l9_words, stories: [] },
    { id: "wm-lesson-10", dayNumber: 10, words: wm_l10_words, stories: [] },
    { id: "wm-lesson-11", dayNumber: 11, words: wm_l11_words, stories: [] },
    { id: "wm-lesson-12", dayNumber: 12, words: wm_l12_words, stories: [] },
    { id: "wm-lesson-13", dayNumber: 13, words: wm_l13_words, stories: [] },
    { id: "wm-lesson-14", dayNumber: 14, words: wm_l14_words, stories: [] },
    { id: "wm-lesson-15", dayNumber: 15, words: wm_l15_words, stories: [] },
    { id: "wm-lesson-16", dayNumber: 16, words: wm_l16_words, stories: [] },
    { id: "wm-lesson-17", dayNumber: 17, words: wm_l17_words, stories: [] },
    { id: "wm-lesson-18", dayNumber: 18, words: wm_l18_words, stories: [] },
    { id: "wm-lesson-19", dayNumber: 19, words: wm_l19_words, stories: [] },
    { id: "wm-lesson-20", dayNumber: 20, words: wm_l20_words, stories: [] }
].filter(l => l.words.length > 0); // Remove empty lessons (like Lesson 20 might be)
