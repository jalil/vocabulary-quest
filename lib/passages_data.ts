import { VocabularyWord, Story, DayLesson } from './types';

// Topic #1: AI and Creativity
export const PASSAGE_1_WORDS: VocabularyWord[] = [
    {
        id: 'p1-w1',
        word: 'Inevitable',
        pronunciation: '/ɪnˈɛvɪtəbəl/',
        definition: 'Certain to happen; unavoidable.',
        exampleSentence: 'With the rise of computers, the shift to digital records was inevitable.',
        imageEmoji: '⏳',
        category: 'Passages'
    },
    {
        id: 'p1-w2',
        word: 'Augment',
        pronunciation: '/ɔːɡˈmɛnt/',
        definition: 'To make something greater by adding to it; to increase.',
        exampleSentence: 'The teacher used videos to augment the textbook lesson.',
        imageEmoji: '➕',
        category: 'Passages'
    },
    {
        id: 'p1-w3',
        word: 'Detrimental',
        pronunciation: '/ˌdɛtrɪˈmɛntl/',
        definition: 'Tending to cause harm.',
        exampleSentence: 'Lack of sleep can be detrimental to your health.',
        imageEmoji: '⚠️',
        category: 'Passages'
    },
    {
        id: 'p1-w4',
        word: 'Foster',
        pronunciation: '/ˈfɔːstər/',
        definition: 'To encourage the development of something.',
        exampleSentence: 'The club tries to foster a sense of community among students.',
        imageEmoji: '🌱',
        category: 'Passages'
    },
    {
        id: 'p1-w5',
        word: 'Innovation',
        pronunciation: '/ˌɪnəˈveɪʃən/',
        definition: 'A new method, idea, or product.',
        exampleSentence: 'The smartphone was a major innovation in communication.',
        imageEmoji: '💡',
        category: 'Passages'
    }
];

export const PASSAGE_1_STORY: Story = {
    id: 'passage-1-story',
    title: 'Topic: Is Artificial Intelligence a Threat to Human Creativity?',
    type: 'non-fiction',
    content: `For centuries, creativity has been considered a uniquely human trait, safe from the reach of machines. Today, however, that assumption is being challenged. Artificial Intelligence is not a replacement for human creativity but a powerful partner that can **foster** new forms of expression.
    
Calculators did not ruin mathematics; they allowed us to solve complex problems faster. Similarly, AI can handle the repetitive parts of creation. For example, AI can generate hundreds of design prototypes in minutes, which humans can then refine and perfect. This partnership **augments** human potential rather than reducing it. It forces us to focus on the "why" of art, rather than just the "how." The result is a surge of **innovation** that was previously impossible.

On the other hand, some critics argue that reliance on AI leads to the obsolescence of true skill. While it is true that relying solely on machines can be **detrimental** to our basic abilities, history shows that tools usually expand our capabilities rather than limit them. The camera did not kill painting; it forced painting to evolve into abstract art. In the same way, AI will push human writers and artists to explore new frontiers that machines cannot reach.

The integration of AI into the creative process is **inevitable**. Instead of fearing it, we should learn to guide it. So what? If we embrace this partnership, we can unlock a future where technology and humanity work together to create beauty we cannot yet imagine.`,
    wordsIncluded: ['p1-w1', 'p1-w2', 'p1-w3', 'p1-w4', 'p1-w5']
};

export const PASSAGE_1_LESSON: DayLesson = {
    id: 'passages-day-1',
    dayNumber: 1,
    words: PASSAGE_1_WORDS,
    stories: [PASSAGE_1_STORY]
};

// Topic #2: Space Exploration
export const PASSAGE_2_WORDS: VocabularyWord[] = [
    {
        id: 'p2-w1',
        word: 'Imperative',
        pronunciation: '/ɪmˈpɛrətɪv/',
        definition: 'Of vital importance; crucial.',
        exampleSentence: 'It is imperative that we protect our environment.',
        imageEmoji: '❗',
        category: 'Passages'
    },
    {
        id: 'p2-w2',
        word: 'Allocation',
        pronunciation: '/ˌæləˈkeɪʃən/',
        definition: 'The action of distributing something for a particular purpose.',
        exampleSentence: 'The allocation of funds for the school trip was decided by the committee.',
        imageEmoji: '🥧',
        category: 'Passages'
    },
    {
        id: 'p2-w3',
        word: 'Neglect',
        pronunciation: '/nɪˈɡlɛkt/',
        definition: 'To fail to care for properly.',
        exampleSentence: 'If you neglect your teeth, they will get cavities.',
        imageEmoji: '🏚️',
        category: 'Passages'
    },
    {
        id: 'p2-w4',
        word: 'Pioneer',
        pronunciation: '/ˌpaɪəˈnɪər/',
        definition: 'A person who is among the first to explore or settle a new area.',
        exampleSentence: 'Neil Armstrong was a pioneer of space exploration.',
        imageEmoji: '🚀',
        category: 'Passages'
    },
    {
        id: 'p2-w5',
        word: 'Viable',
        pronunciation: '/ˈvaɪəbl/',
        definition: 'Capable of working successfully; feasible.',
        exampleSentence: 'Solar power is a viable alternative to fossil fuels.',
        imageEmoji: '✅',
        category: 'Passages'
    }
];

export const PASSAGE_2_STORY: Story = {
    id: 'passage-2-story',
    title: 'Topic: Should We Prioritize Earth Over Space Exploration?',
    type: 'non-fiction',
    content: `We look up at the stars and dream of Mars, but when I look down at the street, I see homeless people and crumbling roads. This contrast makes me question our priorities. While exploring space is inspiring, it is **imperative** that we solve the problems on Earth before spending billions on Mars.

Our planet is in crisis. Climate change, poverty, and disease are threats that are happening right now, not in the distant future. The logical step is to fix our home before trying to build a new one. The **allocation** of massive resources to space travel feels irresponsible when millions of people lack clean water. We cannot **neglect** the suffering of our neighbors for the sake of planting a flag on a red rock.

On the other hand, some supporters argue that space exploration drives technology that helps us here. While it is true that we are **pioneer**s by nature and satellites have improved our lives, these benefits do not justify the astronomical costs of manned Mars missions. We can send robots to explore for a fraction of the price, keeping the focus and funds where they are truly needed: right here.

Making Mars a **viable** backup planet is a fantasy we cannot afford yet. So what? If we don't save Earth first, there will be no one left to launch the rockets. Let's fix our own ship before we try to jump to another one.`,
    wordsIncluded: ['p2-w1', 'p2-w2', 'p2-w3', 'p2-w4', 'p2-w5']
};

export const PASSAGE_2_LESSON: DayLesson = {
    id: 'passages-day-2',
    dayNumber: 2,
    words: PASSAGE_2_WORDS,
    stories: [PASSAGE_2_STORY]
};

// Topic #3: The Digital Memory
export const PASSAGE_3_WORDS: VocabularyWord[] = [
    {
        id: 'p3-w1',
        word: 'Permanent',
        pronunciation: '/ˈpɜːrmənənt/',
        definition: 'Lasting or intended to last or remain unchanged indefinitely.',
        exampleSentence: 'Tattoos are permanent, so think carefully before getting one.',
        imageEmoji: '🗿',
        category: 'Passages'
    },
    {
        id: 'p3-w2',
        word: 'Erroneous',
        pronunciation: '/ɪˈroʊniəs/',
        definition: 'Wrong; incorrect.',
        exampleSentence: 'The news report contained erroneous information.',
        imageEmoji: '❌',
        category: 'Passages'
    },
    {
        id: 'p3-w3',
        word: 'Scrutiny',
        pronunciation: '/ˈskruːtəni/',
        definition: 'Critical observation or examination.',
        exampleSentence: 'The politician faced public scrutiny after the scandal.',
        imageEmoji: '🧐',
        category: 'Passages'
    },
    {
        id: 'p3-w4',
        word: 'Redeem',
        pronunciation: '/rɪˈdiːm/',
        definition: 'To do something that changes a negative opinion to a positive one.',
        exampleSentence: 'He tried to redeem himself by apologizing to everyone.',
        imageEmoji: '🎟️',
        category: 'Passages'
    },
    {
        id: 'p3-w5',
        word: 'Inhibit',
        pronunciation: '/ɪnˈhɪbɪt/',
        definition: 'To hinder, restrain, or prevent (an action or process).',
        exampleSentence: 'Fear can inhibit you from trying new things.',
        imageEmoji: '🛑',
        category: 'Passages'
    }
];

export const PASSAGE_3_STORY: Story = {
    id: 'passage-3-story',
    title: 'Topic: Is the Internet Making Us Lose Our Memory?',
    type: 'non-fiction',
    content: `Have you ever said something stupid? Probably. Now, imagine if that mistake was tattooed on your forehead forever. That is what the internet is becoming. We need a "Right to be Forgotten" because a **permanent** digital record prevents people from growing and moving on from their pasts.

People change. The silly 13-year-old who posted a rude comment is not the same person as the 25-year-old looking for a job. However, the internet freezes us in our worst moments. Constant **scrutiny** of past mistakes can **inhibit** personal growth, making people afraid to speak or evolve. If we are haunting by every **erroneous** judgment we ever made, we lose the chance to start fresh.

Some tech experts might argue that removing information ruins the "truth" of the internet. While it is true that history shouldn't be erased, there is a difference between public interest and private embarrassment. Keeping a decades-old embarrassing photo serves no historical purpose; it only serves to hurt.

We must allow people the chance to **redeem** themselves. So what? If we don't allow digital forgiveness, we create a society where one mistake defines a lifetime. We need the freedom to grow up, both offline and online.`,
    wordsIncluded: ['p3-w1', 'p3-w2', 'p3-w3', 'p3-w4', 'p3-w5']
};

export const PASSAGE_3_LESSON: DayLesson = {
    id: 'passages-day-3',
    dayNumber: 3,
    words: PASSAGE_3_WORDS,
    stories: [PASSAGE_3_STORY]
};



// Topic #4: Genetic Engineering
export const PASSAGE_4_WORDS: VocabularyWord[] = [
    { id: 'p4-w1', word: 'Ethical', definition: 'Relating to moral principles.', exampleSentence: 'Cloning raises many ethical questions.', imageEmoji: '⚖️', category: 'Passages' },
    { id: 'p4-w2', word: 'Dilemma', definition: 'A difficult situation or problem.', exampleSentence: 'The doctor faced a moral dilemma.', imageEmoji: '🤔', category: 'Passages' },
    { id: 'p4-w3', word: 'Manipulation', definition: 'The action of handling or controlling something.', exampleSentence: 'Genetic manipulation can cure diseases.', imageEmoji: '🧬', category: 'Passages' },
    { id: 'p4-w4', word: 'Potential', definition: 'Qualities that may be developed.', exampleSentence: 'She has the potential to be a great leader.', imageEmoji: '✨', category: 'Passages' },
    { id: 'p4-w5', word: 'Alter', definition: 'To change or cause to change.', exampleSentence: 'We cannot alter the past.', imageEmoji: '🔄', category: 'Passages' }
];

export const PASSAGE_4_STORY: Story = {
    id: 'passage-4-story',
    title: 'Topic: Should We Genetically Engineer Humans?',
    type: 'non-fiction',
    content: `Science fiction often predicts a future of "designer babies," but today, that future is knocking on our door. We now have the tools to rewrite the code of life itself. Genetic engineering offers a miraculous chance to end hereditary diseases, but we must use it only for healing, not for "enhancing" human traits.
    
Imagine a world without cancer or cystic fibrosis. This is the **potential** of genetic science. Using gene editing to eliminate suffering is an **ethical** duty. Just as we use vaccines to prevent polio, we should use genetic **manipulation** to save children from painful, life-shortening conditions. It is a tool for compassion.

However, some critics argue that "playing God" is a slippery slope. While it is true that allowing parents to choose eye color or IQ creates a dangerous social **dilemma**, we can regulate this technology without banning it entirely. We can draw a strict line between curing illness and "upgrading" people.

If we ban this technology out of fear, we doom millions to unnecessary suffering. So what? We must have the courage to **alter** our biology to save lives, while having the wisdom to stop there.`,
    wordsIncluded: ['p4-w1', 'p4-w2', 'p4-w3', 'p4-w4', 'p4-w5']
};

export const PASSAGE_4_LESSON: DayLesson = { id: 'passages-day-4', dayNumber: 4, words: PASSAGE_4_WORDS, stories: [PASSAGE_4_STORY] };

// Topic #5: Automation
export const PASSAGE_5_WORDS: VocabularyWord[] = [
    { id: 'p5-w1', word: 'Redundant', definition: 'No longer needed or useful.', exampleSentence: 'Robots made the factory workers redundant.', imageEmoji: '🚫', category: 'Passages' },
    { id: 'p5-w2', word: 'Liberate', definition: 'To set free.', exampleSentence: 'Technology can liberate us from boring tasks.', imageEmoji: '🕊️', category: 'Passages' },
    { id: 'p5-w3', word: 'Monotonous', definition: 'Dull, tedious, and repetitious.', exampleSentence: 'Assembly line work can be monotonous.', imageEmoji: '💤', category: 'Passages' },
    { id: 'p5-w4', word: 'Displacement', definition: 'The moving of something from its place.', exampleSentence: 'The displacement of workers is a major concern.', imageEmoji: '📦', category: 'Passages' },
    { id: 'p5-w5', word: 'Efficiency', definition: 'Achieving maximum productivity with minimum wasted effort.', exampleSentence: 'We need to improve the efficiency of our process.', imageEmoji: '⚡', category: 'Passages' }
];

export const PASSAGE_5_STORY: Story = {
    id: 'passage-5-story',
    title: 'Topic: Will Automation Destroy More Jobs Than It Creates?',
    type: 'non-fiction',
    content: `Robots are taking our jobs. From self-checkout counters to AI drivers, machines are everywhere. Is this the end of work, or the beginning of freedom? Automation is not a disaster but an opportunity to **liberate** humans from dangerous and **monotonous** labor.
    
No one dreams of screwing on toothpaste caps for 40 years. Machines should do the tasks that are dangerous or dull, allowing humans to focus on creative, social, and complex work. This shift increases **efficiency** and allows us to spend our time on things that actually matter, like family, art, and innovation.

On the other hand, unions argue that this leads to mass unemployment. While it is true that job **displacement** is painful in the short term, history shows that technology creates more jobs than it destroys. The car made the horse carriage driver **redundant**, but it created mechanics, road builders, and travelers.

We are not losing our purpose; we are upgrading it. So what? If we manage this transition well, we can build a society where people work because they want to, not because they have to survive.`,
    wordsIncluded: ['p5-w1', 'p5-w2', 'p5-w3', 'p5-w4', 'p5-w5']
};

export const PASSAGE_5_LESSON: DayLesson = { id: 'passages-day-5', dayNumber: 5, words: PASSAGE_5_WORDS, stories: [PASSAGE_5_STORY] };

// Topic #6: Role of Teacher
export const PASSAGE_6_WORDS: VocabularyWord[] = [
    { id: 'p6-w1', word: 'Facilitator', definition: 'Someone who makes an action or process easier.', exampleSentence: 'The teacher acted as a facilitator for the discussion.', imageEmoji: '🤝', category: 'Passages' },
    { id: 'p6-w2', word: 'Acquisition', definition: 'The learning or developing of a skill, habit, or quality.', exampleSentence: 'Language acquisition takes time.', imageEmoji: '🧠', category: 'Passages' },
    { id: 'p6-w3', word: 'Synthesize', definition: 'To combine a number of things into a coherent whole.', exampleSentence: 'Students must synthesize information from many sources.', imageEmoji: '🔗', category: 'Passages' },
    { id: 'p6-w4', word: 'Obsolete', definition: 'No longer produced or used; out of date.', exampleSentence: 'Typewriters are largely obsolete.', imageEmoji: '📼', category: 'Passages' },
    { id: 'p6-w5', word: 'Critical', definition: 'Involving an analysis of the merits and faults of a work.', exampleSentence: 'Critical thinking is a key skill.', imageEmoji: '🧐', category: 'Passages' }
];

export const PASSAGE_6_STORY: Story = {
    id: 'passage-6-story',
    title: 'Topic: Are Teachers Obsolete in the Age of Google?',
    type: 'non-fiction',
    content: `In the age of the smartphone, I can find the capital of Mongolia in three seconds. If facts are free, why do we still need teachers? The modern teacher should no longer be a source of facts, but a **facilitator** of wisdom and **critical** thinking.
    
The "sage on the stage" model is **obsolete**. We don't need teachers to lecture us on dates and formulas; we need them to help us **synthesize** that information into understanding. A good mentor teaches you how to tell a fake news story from a real one, or how to solve a conflict with a peer—things Siri cannot do.

Some might say that students still need a strong foundation of knowledge. While it is true that the **acquisition** of basic facts is necessary, memorization is the lowest form of learning. Any machine can memorize; only a human can understand context and nuance.

We need guides, not encyclopedias. So what? If schools don't evolve, they will become museums. We need teachers who teach us how to think, not just what to know.`,
    wordsIncluded: ['p6-w1', 'p6-w2', 'p6-w3', 'p6-w4', 'p6-w5']
};

export const PASSAGE_6_LESSON: DayLesson = { id: 'passages-day-6', dayNumber: 6, words: PASSAGE_6_WORDS, stories: [PASSAGE_6_STORY] };

// Topic #7: Failure as Teacher
export const PASSAGE_7_WORDS: VocabularyWord[] = [
    { id: 'p7-w1', word: 'Resilience', definition: 'The capacity to recover quickly from difficulties.', exampleSentence: 'Her resilience helped her overcome the tragedy.', imageEmoji: '💪', category: 'Passages' },
    { id: 'p7-w2', word: 'Invaluable', definition: 'Extremely useful; indispensable.', exampleSentence: 'His advice was invaluable to the project.', imageEmoji: '💎', category: 'Passages' },
    { id: 'p7-w3', word: 'Obstacle', definition: 'A thing that blocks one\'s way or prevents or hinders progress.', exampleSentence: 'They overcame every obstacle to win the race.', imageEmoji: '🚧', category: 'Passages' },
    { id: 'p7-w4', word: 'Character', definition: 'The mental and moral qualities distinctive to an individual.', exampleSentence: 'Sports can build good character.', imageEmoji: '🦸', category: 'Passages' },
    { id: 'p7-w5', word: 'Persevere', definition: 'Continue in a course of action even in the face of difficulty.', exampleSentence: 'You must persevere if you want to succeed.', imageEmoji: '⛰️', category: 'Passages' }
];

export const PASSAGE_7_STORY: Story = {
    id: 'passage-7-story',
    title: 'Topic: Is Failure Necessary for Success?',
    type: 'non-fiction',
    content: `No one posts their failures on Instagram. We live in a culture that worships success, but I believe we learn nothing from winning. Failure is an **invaluable** teacher because it builds **resilience** and forces us to innovate in ways that success never does.

When you get an A+, you smile and move on. When you get an F, you stop and ask "Why?" Every **obstacle** forces you to analyze your methods and try a new approach. This struggle builds **character**. It teaches you that falling down isn't the end; it's just part of the process.

On the other hand, parents often try to protect children from disappointment. While it is true that failure hurts, shielding kids from it creates fragile adults who cannot **persevere** when life gets hard. A child who never loses never learns how to stand back up.

We should celebrate our stumbles. So what? If we demonize failure, we kill the courage to try. Let's teach that a mistake is just a stepping stone to something better.`,
    wordsIncluded: ['p7-w1', 'p7-w2', 'p7-w3', 'p7-w4', 'p7-w5']
};

export const PASSAGE_7_LESSON: DayLesson = { id: 'passages-day-7', dayNumber: 7, words: PASSAGE_7_WORDS, stories: [PASSAGE_7_STORY] };

// Topic #8: Soft vs Hard Skills
export const PASSAGE_8_WORDS: VocabularyWord[] = [
    { id: 'p8-w1', word: 'Interpersonal', definition: 'Relating to relationships or communication between people.', exampleSentence: 'She has excellent interpersonal skills.', imageEmoji: '🗣️', category: 'Passages' },
    { id: 'p8-w2', word: 'Technical', definition: 'Relating to a particular subject, art, or craft, or its techniques.', exampleSentence: 'He has great technical knowledge of computers.', imageEmoji: '💻', category: 'Passages' },
    { id: 'p8-w3', word: 'Collaboration', definition: 'The action of working with someone to produce or create something.', exampleSentence: 'The project was a successful collaboration.', imageEmoji: '🤝', category: 'Passages' },
    { id: 'p8-w4', word: 'Adaptability', definition: 'The quality of being able to adjust to new conditions.', exampleSentence: 'Adaptability is key in a changing world.', imageEmoji: '🦎', category: 'Passages' },
    { id: 'p8-w5', word: 'Vital', definition: 'Absolutely necessary or important; essential.', exampleSentence: 'Water is vital for life.', imageEmoji: '❤️', category: 'Passages' }
];

export const PASSAGE_8_STORY: Story = {
    id: 'passage-8-story',
    title: 'Topic: Are Soft Skills More Important Than Hard Skills?',
    type: 'non-fiction',
    content: `In the past, knowing how to use a machine was enough to get a job. Today, machines can code, calculate, and build. So what is left for us? In an AI world, "soft skills" like **collaboration** and empathy are more **vital** than **technical** hard skills.

You can teach a robot to process data, but you cannot teach it to calm an angry client or lead a disorganized team. Human connection and **interpersonal** intelligence are the only things that cannot be automated. **Adaptability**—the ability to pivot when things change—is far more valuable than memorizing a specific coding language that will be outdated in five years.

Some critics argue that STEM skills run the economy. While it is true that we need engineers, a brilliant engineer who cannot communicate is useless to a team. The best products are built by people who understand people, not just code.

We need to redefine "skill." So what? The future doesn't belong to the smartest computer; it belongs to the most human human.`,
    wordsIncluded: ['p8-w1', 'p8-w2', 'p8-w3', 'p8-w4', 'p8-w5']
};

export const PASSAGE_8_LESSON: DayLesson = { id: 'passages-day-8', dayNumber: 8, words: PASSAGE_8_WORDS, stories: [PASSAGE_8_STORY] };

// Topic #9: Generalist vs Specialist
export const PASSAGE_9_WORDS: VocabularyWord[] = [
    { id: 'p9-w1', word: 'Versatile', definition: 'Able to adapt or be adapted to many different functions or activities.', exampleSentence: 'He is a versatile actor.', imageEmoji: '🎭', category: 'Passages' },
    { id: 'p9-w2', word: 'Niche', definition: 'A specialized segment of the market for a particular kind of product or service.', exampleSentence: 'She found her niche in medical law.', imageEmoji: '🎯', category: 'Passages' },
    { id: 'p9-w3', word: 'Perspective', definition: 'A particular attitude toward or way of regarding something; a point of view.', exampleSentence: 'Travel gives you a new perspective.', imageEmoji: '🔭', category: 'Passages' },
    { id: 'p9-w4', word: 'Breadth', definition: 'Wide range or extent.', exampleSentence: 'Her breadth of knowledge is amazing.', imageEmoji: '↔️', category: 'Passages' },
    { id: 'p9-w5', word: 'Integration', definition: 'The action or process of combining things.', exampleSentence: 'The integration of art and science is fascinating.', imageEmoji: '🧩', category: 'Passages' }
];

export const PASSAGE_9_STORY: Story = {
    id: 'passage-9-story',
    title: 'Topic: Is It Better to Be a Generalist or a Specialist?',
    type: 'non-fiction',
    content: `There is an old saying: "The fox knows many things; the hedgehog knows one big thing." For years, we were told to be hedgehogs—specialists. But the world has changed. The future belongs to the generalist, the **versatile** thinker who can connect ideas across different fields.
    
Innovation happens at the intersection. The **integration** of biology and technology created prosthetics; the mix of psychology and design created the iPhone. A generalist has the **breadth** of knowledge to see these connections, while a specialist is often stuck in their deep but narrow tunnel. **Perspective** matters more than raw data.

On the other hand, society needs brain surgeons and rocket scientists who know one **niche** perfectly. While it is true that we need deep experts for specific tasks, a world of only specialists is a world that cannot talk to itself. We need people who can translate between the silos.

Don't limit yourself to one label. So what? If you only have a hammer, everything looks like a nail. But if you have a full toolbox, you can build anything.`,
    wordsIncluded: ['p9-w1', 'p9-w2', 'p9-w3', 'p9-w4', 'p9-w5']
};

export const PASSAGE_9_LESSON: DayLesson = { id: 'passages-day-9', dayNumber: 9, words: PASSAGE_9_WORDS, stories: [PASSAGE_9_STORY] };

// Topic #10: Purpose of School
export const PASSAGE_10_WORDS: VocabularyWord[] = [
    { id: 'p10-w1', word: 'Vocation', definition: 'A strong feeling of suitability for a particular career or occupation.', exampleSentence: 'Nursing is not just a job, it is a vocation.', imageEmoji: '👨‍⚕️', category: 'Passages' },
    { id: 'p10-w2', word: 'Civic', definition: 'Relating to a city or town, especially its administration; municipal.', exampleSentence: 'Voting is a civic duty.', imageEmoji: '🗳️', category: 'Passages' },
    { id: 'p10-w3', word: 'Engagement', definition: 'The action of engaging or being engaged.', exampleSentence: 'Student engagement is higher in active classes.', imageEmoji: '💍', category: 'Passages' },
    { id: 'p10-w4', word: 'Standardized', definition: 'Cause (something) to conform to a standard.', exampleSentence: 'Standardized tests are controversial.', imageEmoji: '📏', category: 'Passages' },
    { id: 'p10-w5', word: 'Enlightened', definition: 'Having or showing a rational, modern, and well-informed outlook.', exampleSentence: 'an enlightened society values education.', imageEmoji: '🕯️', category: 'Passages' }
];

export const PASSAGE_10_STORY: Story = {
    id: 'passage-10-story',
    title: 'Topic: What Is the True Purpose of Education?',
    type: 'non-fiction',
    content: `Ask most students why they go to school, and they will say: "To get a job." This is a tragic misunderstanding of education's true power. The purpose of school is not just to prepare us for a **vocation**, but to mold us into **enlightened**, active citizens who can sustain a democracy.
    
If school is just job training, then why teach history or poetry? We learn these things to understand our **civic** duties and our shared humanity. Education should foster **engagement** with the world, not just submission to an employer. We are building a society, not just an economy.

Some argue that in a competitive market, **standardized** skills for employment must come first. While it is true that we need to pay the bills, a worker who cannot think critically is easily manipulated. A democracy cannot survive if its people only know how to take orders.

We are more than our paychecks. So what? If we treat school as a factory, we will produce robots. If we treat it as a garden, we will grow citizens.`,
    wordsIncluded: ['p10-w1', 'p10-w2', 'p10-w3', 'p10-w4', 'p10-w5']
};

export const PASSAGE_10_LESSON: DayLesson = { id: 'passages-day-10', dayNumber: 10, words: PASSAGE_10_WORDS, stories: [PASSAGE_10_STORY] };




// Topic #11: Globalization
export const PASSAGE_11_WORDS: VocabularyWord[] = [
    { id: 'p11-w1', word: 'Homogenize', definition: 'Make uniform or similar.', exampleSentence: 'Globalization tends to homogenize cultures.', imageEmoji: '🥣', category: 'Passages' },
    { id: 'p11-w2', word: 'Interconnected', definition: 'Having all constituent parts linked or connected.', exampleSentence: 'The world economy is highly interconnected.', imageEmoji: '🌐', category: 'Passages' },
    { id: 'p11-w3', word: 'Erode', definition: 'Gradually wear away or destroy.', exampleSentence: 'The ocean can erode the coastline.', imageEmoji: '🌊', category: 'Passages' },
    { id: 'p11-w4', word: 'Prosperity', definition: 'The state of being prosperous.', exampleSentence: 'Peace brings prosperity.', imageEmoji: '💰', category: 'Passages' },
    { id: 'p11-w5', word: 'Preserve', definition: 'Maintain (something) in its original or existing state.', exampleSentence: 'We must preserve our traditions.', imageEmoji: '🏺', category: 'Passages' }
];

export const PASSAGE_11_STORY: Story = {
    id: 'passage-11-story',
    title: 'Topic: Does Globalization Destroy Cultural Diversity?',
    type: 'non-fiction',
    content: `Walk into a mall in Tokyo, New York, or Paris, and you will see the same brands: Starbucks, Nike, H&M. The world is getting smaller, but is it getting less interesting? Globalization brings economic **prosperity**, but we must fight to ensure it does not **homogenize** our unique cultures into a single, bland identity.
    
An **interconnected** world allows us to share ideas and goods instantly. This exchange has lifted millions out of poverty and fostered peace by making nations dependent on each other. However, this connection often comes at the cost of local tradition. When Hollywood movies dominate every theater, local stories can fade away.

Some economists argue that a unified market is the only path to progress. While it is true that efficiency is good for business, it can **erode** the cultural soul of a nation. If we all eat the same food and speak the same language, we lose the diversity that makes humanity beautiful.

We can be global citizens without losing our roots. So what? We must **preserve** our local heritage while enjoying the benefits of a global world. Unity does not have to mean uniformity.`,
    wordsIncluded: ['p11-w1', 'p11-w2', 'p11-w3', 'p11-w4', 'p11-w5']
};

export const PASSAGE_11_LESSON: DayLesson = { id: 'passages-day-11', dayNumber: 11, words: PASSAGE_11_WORDS, stories: [PASSAGE_11_STORY] };

// Topic #12: Youth Activism
export const PASSAGE_12_WORDS: VocabularyWord[] = [
    { id: 'p12-w1', word: 'Complacent', definition: 'Showing smug or uncritical satisfaction with oneself or one\'s achievements.', exampleSentence: 'We cannot afford to be complacent about safety.', imageEmoji: '😏', category: 'Passages' },
    { id: 'p12-w2', word: 'Catalyst', definition: 'A person or thing that precipitates an event.', exampleSentence: 'The protest was a catalyst for change.', imageEmoji: '🧪', category: 'Passages' },
    { id: 'p12-w3', word: 'Burden', definition: 'A load, especially a heavy one.', exampleSentence: 'The burden of debt is heavy.', imageEmoji: '🎒', category: 'Passages' },
    { id: 'p12-w4', word: 'Advocate', definition: 'Publicly recommend or support.', exampleSentence: 'She is an advocate for animal rights.', imageEmoji: '📢', category: 'Passages' },
    { id: 'p12-w5', word: 'Legacy', definition: 'Something left or handed down by a predecessor.', exampleSentence: 'We want to leave a positive legacy.', imageEmoji: '📜', category: 'Passages' }
];

export const PASSAGE_12_STORY: Story = {
    id: 'passage-12-story',
    title: 'Topic: Is Youth Activism Effective or Performative?',
    type: 'non-fiction',
    content: `Greta Thunberg. Malala. The faces of modern change are surprisingly young. But should the weight of the world really be on the shoulders of teenagers? Youth activism is a powerful **catalyst** for change because young people are not yet **complacent**, but adults must support them rather than relying on them to fix broken systems.

Adults often accept the world as it is; young people see it as it should be. This idealism is necessary to challenge old, unjust laws. When students **advocate** for climate action or gun control, they force society to look at uncomfortable truths. They are fighting for their own future.

However, critics say that children lack the experience to lead. While it is true that passion needs to be tempered with wisdom, history is full of young leaders who made a difference. The real problem is when adults use youth energy as an excuse to do nothing themselves.

It is unfair to leave the entire **burden** on the next generation. So what? We need an intergenerational partnership. We should honor their courage, but we must also take responsibility for the **legacy** we are leaving them.`,
    wordsIncluded: ['p12-w1', 'p12-w2', 'p12-w3', 'p12-w4', 'p12-w5']
};

export const PASSAGE_12_LESSON: DayLesson = { id: 'passages-day-12', dayNumber: 12, words: PASSAGE_12_WORDS, stories: [PASSAGE_12_STORY] };

// Topic #13: Truth in Media
export const PASSAGE_13_WORDS: VocabularyWord[] = [
    { id: 'p13-w1', word: 'Objective', definition: 'Not influenced by personal feelings or opinions in considering and representing facts.', exampleSentence: 'We need objective reporting.', imageEmoji: '⚖️', category: 'Passages' },
    { id: 'p13-w2', word: 'Bias', definition: 'Prejudice in favor of or against one thing, person, or group.', exampleSentence: 'The article showed clear bias.', imageEmoji: '🕶️', category: 'Passages' },
    { id: 'p13-w3', word: 'Disseminate', definition: 'Spread (something, especially information) widely.', exampleSentence: 'The internet helps disseminate news.', imageEmoji: '📡', category: 'Passages' },
    { id: 'p13-w4', word: 'Verify', definition: 'Make sure or demonstrate that (something) is true, accurate, or justified.', exampleSentence: 'Please verify your password.', imageEmoji: '✅', category: 'Passages' },
    { id: 'p13-w5', word: 'Skepticism', definition: 'A skeptical attitude; doubt as to the truth of something.', exampleSentence: 'Treat internet rumors with skepticism.', imageEmoji: '🤨', category: 'Passages' }
];

export const PASSAGE_13_STORY: Story = {
    id: 'passage-13-story',
    title: 'Topic: Can We Trust the Media in the Digital Age?',
    type: 'non-fiction',
    content: `In an era of "fake news" and viral tweets, the truth has become a matter of opinion. Who gets to decide what is real? We must maintain a healthy **skepticism** of all media because true **objective** journalism is rare in an age where clicks matter more than facts.

Social media algorithms are designed to show us what we want to believe, reinforcing our existing **bias**. Information is **disseminate**d faster than it can be verified, leading to the spread of dangerous lies. We live in echo chambers where "truth" is whatever makes us feel good.

Some argue that fact-checkers and governments should police the internet. While it is true that we need to stop misinformation, giving a central authority the power to delete "lies" is a slippery slope to censorship. Who watches the watchmen?

The responsibility falls on us. So what? We must learn to **verify** sources before we share. In a world of noise, the truth is something you have to actively search for.`,
    wordsIncluded: ['p13-w1', 'p13-w2', 'p13-w3', 'p13-w4', 'p13-w5']
};

export const PASSAGE_13_LESSON: DayLesson = { id: 'passages-day-13', dayNumber: 13, words: PASSAGE_13_WORDS, stories: [PASSAGE_13_STORY] };

// Topic #14: Language and Identity
export const PASSAGE_14_WORDS: VocabularyWord[] = [
    { id: 'p14-w1', word: 'Nuance', definition: 'A subtle difference in or shade of meaning, expression, or sound.', exampleSentence: 'Translation often loses the nuance of a poem.', imageEmoji: '🎨', category: 'Passages' },
    { id: 'p14-w2', word: 'Dominant', definition: 'Most important, powerful, or influential.', exampleSentence: 'English is a dominant language.', imageEmoji: '👑', category: 'Passages' },
    { id: 'p14-w3', word: 'Intrinsic', definition: 'Belonging naturally; essential.', exampleSentence: 'Access to art is intrinsic to a good life.', imageEmoji: '💎', category: 'Passages' },
    { id: 'p14-w4', word: 'Diversity', definition: 'The state of being diverse; variety.', exampleSentence: 'We celebrate cultural diversity.', imageEmoji: '🌈', category: 'Passages' },
    { id: 'p14-w5', word: 'Expression', definition: 'The process of making known one\'s thoughts or feelings.', exampleSentence: 'Art is a form of self-expression.', imageEmoji: '🎭', category: 'Passages' }
];

export const PASSAGE_14_STORY: Story = {
    id: 'passage-14-story',
    title: 'Topic: Is Language Essential to Cultural Identity?',
    type: 'non-fiction',
    content: `If you lose your language, do you lose a part of yourself? There are over 7,000 languages in the world, but one dies every two weeks. Language is **intrinsic** to identity; it shapes how we think and how we see the world, not just how we speak.

Different languages have words for concepts that don't exist in others. For example, Japanese has "komorebi" (sunlight filtering through trees), a specific appreciation of nature that is hard to express in English. When a **dominant** language wipes out a smaller one, we lose these unique **nuance**s of human thought. We lose a way of being.

Some pragmatists argue that a single global language would improve communication. While it is true that a common tongue facilitates trade, we should treat English as a bridge, not a steamroller. We can have a lingua franca without destroying linguistic **diversity**.

Protecting language is protecting culture. So what? Every language is a unique window into the human mind. If we close them all, our world becomes a dark room.`,
    wordsIncluded: ['p14-w1', 'p14-w2', 'p14-w3', 'p14-w4', 'p14-w5']
};

export const PASSAGE_14_LESSON: DayLesson = { id: 'passages-day-14', dayNumber: 14, words: PASSAGE_14_WORDS, stories: [PASSAGE_14_STORY] };

// Topic #15: Individual vs Collective
export const PASSAGE_15_WORDS: VocabularyWord[] = [
    { id: 'p15-w1', word: 'Mandate', definition: 'An official order or commission to do something.', exampleSentence: 'The government issued a mandate.', imageEmoji: '📜', category: 'Passages' },
    { id: 'p15-w2', word: 'Obligation', definition: 'An act or course of action to which a person is morally or legally bound.', exampleSentence: 'We have an obligation to help.', imageEmoji: '🤝', category: 'Passages' },
    { id: 'p15-w3', word: 'Infringe', definition: 'Actively break the terms of (a law, agreement, etc.).', exampleSentence: 'Do not infringe on my rights.', imageEmoji: '🚫', category: 'Passages' },
    { id: 'p15-w4', word: 'Voluntary', definition: 'Done, given, or acting of one\'s own free will.', exampleSentence: 'Participation is voluntary.', imageEmoji: '🙋', category: 'Passages' },
    { id: 'p15-w5', word: 'Compliance', definition: 'The action or fact of complying with a wish or command.', exampleSentence: 'Compliance with the rules is expected.', imageEmoji: '✅', category: 'Passages' }
];

export const PASSAGE_15_STORY: Story = {
    id: 'passage-15-story',
    title: 'Topic: Should Individual Freedom Be Sacrificed for the Common Good?',
    type: 'non-fiction',
    content: `Should you be forced to recycle? Should vaccines be mandatory? These questions are the battleground between individual freedom and public good. A society cannot function on **voluntary** kindness alone; we need laws and **mandate**s to ensure that individual actions do not harm the collective.

Your freedom to swing your fist ends where my nose begins. When personal choices, like polluting or spreading disease, hurt others, the government has an **obligation** to step in. Total freedom is just anarchy. We accept speed limits and taxes for the safety and stability of the group.

Libertarians argue that any mandate **infringe**s on personal liberty. While it is true that we must be wary of government overreach, asking for **compliance** in matters of public safety is the price we pay for civilization. Behaving responsibly is part of the social contract.

We are not islands. So what? If we prioritize "me" over "we," our society will crumble. Real freedom requires responsibility.`,
    wordsIncluded: ['p15-w1', 'p15-w2', 'p15-w3', 'p15-w4', 'p15-w5']
};

export const PASSAGE_15_LESSON: DayLesson = { id: 'passages-day-15', dayNumber: 15, words: PASSAGE_15_WORDS, stories: [PASSAGE_15_STORY] };



// Topic #16: Challenge of Collaboration
export const PASSAGE_16_WORDS: VocabularyWord[] = [
    { id: 'p16-w1', word: 'Cohesion', definition: 'The action or fact of forming a united whole.', exampleSentence: 'Team cohesion is important for success.', imageEmoji: '🔗', category: 'Passages' },
    { id: 'p16-w2', word: 'Mediate', definition: 'Intervene between people in a dispute in order to bring about an agreement or reconciliation.', exampleSentence: 'He tried to mediate the argument.', imageEmoji: '⚖️', category: 'Passages' },
    { id: 'p16-w3', word: 'Divergent', definition: 'Tending to be different or develop in different directions.', exampleSentence: 'They held divergent views on the topic.', imageEmoji: '🔀', category: 'Passages' },
    { id: 'p16-w4', word: 'Consensus', definition: 'General agreement.', exampleSentence: 'The committee reached a consensus.', imageEmoji: '🤝', category: 'Passages' },
    { id: 'p16-w5', word: 'Constructive', definition: 'Serving a useful purpose; tending to build up.', exampleSentence: 'Constructive criticism helps us improve.', imageEmoji: '🏗️', category: 'Passages' }
];

export const PASSAGE_16_STORY: Story = {
    id: 'passage-16-story',
    title: 'Topic: Is Collaboration Essential for Innovation?',
    type: 'non-fiction',
    content: `Group projects. Two words that strike fear into the heart of every student. Why is working together so hard? Collaboration is challenging because it requires us to navigate **divergent** opinions, but valid conflict is necessary to reach a strong **consensus**.

It is easy to work alone; you never have to compromise. However, the best ideas often come from the friction of different minds rubbing against each other. A team that agrees on everything produces boring work. We need **constructive** disagreement to find flaws and improve solutions.

Some people avoid conflict to keep the peace. While it is true that fighting is toxic, "fake peace" destroys **cohesion** just as fast. If we hide our true thoughts, we build resentment. A real leader knows how to **mediate** this tension, turning "me vs. you" into "us vs. the problem."

Don't fear the argument. So what? If we can learn to fight fair, we turn a group of strangers into a team that is stronger than the sum of its parts.`,
    wordsIncluded: ['p16-w1', 'p16-w2', 'p16-w3', 'p16-w4', 'p16-w5']
};

export const PASSAGE_16_LESSON: DayLesson = { id: 'passages-day-16', dayNumber: 16, words: PASSAGE_16_WORDS, stories: [PASSAGE_16_STORY] };

// Topic #17: Defining Innovation
export const PASSAGE_17_WORDS: VocabularyWord[] = [
    { id: 'p17-w1', word: 'Iteration', definition: 'Repetition of a mathematical or computational procedure applied to the result of a previous application.', exampleSentence: 'Software goes through many iterations.', imageEmoji: '🔁', category: 'Passages' },
    { id: 'p17-w2', word: 'Novelty', definition: 'The quality of being new, original, or unusual.', exampleSentence: 'The novelty of the toy wore off quickly.', imageEmoji: '✨', category: 'Passages' },
    { id: 'p17-w3', word: 'Utility', definition: 'The state of being useful, profitable, or beneficial.', exampleSentence: 'We questioned the utility of the new rule.', imageEmoji: '🛠️', category: 'Passages' },
    { id: 'p17-w4', word: 'Disrupt', definition: 'Interrupt (an event, activity, or process) by causing a disturbance or problem.', exampleSentence: 'The storm disrupted our travel plans.', imageEmoji: '⚡', category: 'Passages' },
    { id: 'p17-w5', word: 'Incremental', definition: 'Relating to or denoting an increase or addition, especially one of a series on a fixed scale.', exampleSentence: 'We made incremental progress.', imageEmoji: '📈', category: 'Passages' }
];

export const PASSAGE_17_STORY: Story = {
    id: 'passage-17-story',
    title: 'Topic: What Defines True Innovation?',
    type: 'non-fiction',
    content: `Everyone wants to be an "innovator." Companies paste the word on everything from toasters to socks. But what does it actually mean? True innovation is not just about **novelty**; it is about **utility**—solving a real problem in a way that creates value.

A shiny gadget that does nothing is not innovative; it is just new. Real innovation often looks boring at first. It is the **incremental** improvement of a battery, or a new way to organize data. It is the process of **iteration**, failing and fixing until something works perfectly.

Silicon Valley loves to talk about "disruptive" tech. While it is true that some inventions **disrupt** entire industries (like the smartphone), most progress is slow and steady. We overlook the small changes that make life better because we are looking for the next explosion.

Stop trying to be cool; try to be useful. So what? If we chase only the shiny and new, we fill the world with junk. If we chase solutions, we build a better future.`,
    wordsIncluded: ['p17-w1', 'p17-w2', 'p17-w3', 'p17-w4', 'p17-w5']
};

export const PASSAGE_17_LESSON: DayLesson = { id: 'passages-day-17', dayNumber: 17, words: PASSAGE_17_WORDS, stories: [PASSAGE_17_STORY] };

// Topic #18: Intellectual Curiosity
export const PASSAGE_18_WORDS: VocabularyWord[] = [
    { id: 'p18-w1', word: 'Inquisitive', definition: 'Curious or inquiring.', exampleSentence: 'She has an inquisitive mind.', imageEmoji: '🕵️‍♀️', category: 'Passages' },
    { id: 'p18-w2', word: 'Mundane', definition: 'Lacking interest or excitement; dull.', exampleSentence: 'He found the job mundane.', imageEmoji: '😐', category: 'Passages' },
    { id: 'p18-w3', word: 'Pursuit', definition: 'The action of following or pursuing someone or something.', exampleSentence: 'The pursuit of happiness is a right.', imageEmoji: '🏃', category: 'Passages' },
    { id: 'p18-w4', word: 'Intrinsic', definition: 'Belonging naturally; essential.', exampleSentence: 'Curiosity is intrinsic to learning.', imageEmoji: '💎', category: 'Passages' },
    { id: 'p18-w5', word: 'Cultivate', definition: 'Try to acquire or develop (a quality, sentiment, or skill).', exampleSentence: 'He tried to cultivate a love for reading.', imageEmoji: '🌱', category: 'Passages' }
];

export const PASSAGE_18_STORY: Story = {
    id: 'passage-18-story',
    title: 'Topic: Is Intellectual Curiosity More Important Than Intelligence?',
    type: 'non-fiction',
    content: `When we were five, we asked "Why?" about everything. "Why is grass green?" "Why do dogs bark?" Then, somewhere along the way, we stopped asking and started answering test questions. We must **cultivate** intellectual curiosity because the **intrinsic**  joy of learning is the only thing that keeps life from becoming **mundane**.

School often treats learning as a chore, a means to an end. But the **pursuit** of knowledge should be fun. An **inquisitive** mind finds wonder in a bug on the sidewalk or a strange word in a book. It turns the world into a playground.

Some say that we should only learn useless things that help our career. While it is true that we need practical skills, a life without curiosity is just an existence. The most successful people are often those who explored random topics just because they were interested. Steve Jobs studied calligraphy, and it changed how computers look forever.

Stay curious. So what? If we lose our sense of wonder, we get old, no matter our age. Keep asking "Why?"`,
    wordsIncluded: ['p18-w1', 'p18-w2', 'p18-w3', 'p18-w4', 'p18-w5']
};

export const PASSAGE_18_LESSON: DayLesson = { id: 'passages-day-18', dayNumber: 18, words: PASSAGE_18_WORDS, stories: [PASSAGE_18_STORY] };

// Topic #19: Overcoming Bias
export const PASSAGE_19_WORDS: VocabularyWord[] = [
    { id: 'p19-w1', word: 'Preconception', definition: 'An idea or opinion formed before enough information is available to form it correctly.', exampleSentence: 'We must challenge our preconceptions.', imageEmoji: '🧠', category: 'Passages' },
    { id: 'p19-w2', word: 'Valid', definition: 'Having a sound basis in logic or fact.', exampleSentence: 'She raised a valid point.', imageEmoji: '✅', category: 'Passages' },
    { id: 'p19-w3', word: 'Dissonance', definition: 'Lack of agreement or harmony.', exampleSentence: 'Cognitive dissonance is uncomfortable.', imageEmoji: '⚡', category: 'Passages' },
    { id: 'p19-w4', word: 'Reinforce', definition: 'Strengthen or support, especially with additional personnel or material.', exampleSentence: 'He used data to reinforce his argument.', imageEmoji: '🧱', category: 'Passages' },
    { id: 'p19-w5', word: 'Subjective', definition: 'Based on or influenced by personal feelings, tastes, or opinions.', exampleSentence: 'Beauty is subjective.', imageEmoji: '👀', category: 'Passages' },
    { id: 'p19-w6', word: 'Receptiveness', definition: 'Willingness to consider or accept new suggestions and ideas.', exampleSentence: 'Her receptiveness to feedback helped her grow.', imageEmoji: '🤲', category: 'Passages' }
];

export const PASSAGE_19_STORY: Story = {
    id: 'passage-19-story',
    title: 'Topic: Is It Possible to Be Truly Objective?',
    type: 'non-fiction',
    content: `It feels good to be right. It feels terrible to admit you were wrong. That is why changing your mind is the hardest thing to do. Overcoming bias requires a **receptiveness** to new ideas and the courage to face the cognitive **dissonance** that comes when our **preconception**s are challenged.

We all view the world through a **subjective** lens. We seek out news that **reinforce**s what we already believe and ignore what we don't. Breaking this cycle requires active effort. We have to listen to people we disagree with, not to defeat them, but to understand them.

Some argue that their values are non-negotiable. While it is true that some things are moral absolutes, most of our opinions are just that—opinions. Accepting that an opposing view might be **valid** does not make you weak; it makes you smart.

Don't be a statue; be a river. So what? If we never change our minds, we never grow. The goal of a debate shouldn't be to win, but to learn.`,
    wordsIncluded: ['p19-w1', 'p19-w2', 'p19-w3', 'p19-w4', 'p19-w5']
};

export const PASSAGE_19_LESSON: DayLesson = { id: 'passages-day-19', dayNumber: 19, words: PASSAGE_19_WORDS, stories: [PASSAGE_19_STORY] };

// Topic #20: Leadership Style
export const PASSAGE_20_WORDS: VocabularyWord[] = [
    { id: 'p20-w1', word: 'Charisma', definition: 'Compelling attractiveness or charm that can inspire devotion in others.', exampleSentence: 'The leader had great charisma.', imageEmoji: '✨', category: 'Passages' },
    { id: 'p20-w2', word: 'Subtlety', definition: 'The quality or state of being subtle.', exampleSentence: 'She handled the issue with subtlety.', imageEmoji: '🤫', category: 'Passages' },
    { id: 'p20-w3', word: 'Assertive', definition: 'Having or showing a confident and forceful personality.', exampleSentence: 'You need to be more assertive.', imageEmoji: '🗣️', category: 'Passages' },
    { id: 'p20-w4', word: 'Consensus', definition: 'General agreement.', exampleSentence: 'They reached a consensus.', imageEmoji: '🤝', category: 'Passages' },
    { id: 'p20-w5', word: 'Empower', definition: 'Give (someone) the authority or power to do something.', exampleSentence: 'Education empowers people.', imageEmoji: '🔋', category: 'Passages' }
];

export const PASSAGE_20_STORY: Story = {
    id: 'passage-20-story',
    title: 'Topic: Is Introverted Leadership Underrated?',
    type: 'non-fiction',
    content: `When we think of a leader, we imagine a general shouting orders or a CEO giving a speech. But is volume the same thing as power? Quiet leadership is often more effective than loud **charisma** because it focuses on **subtlety** and **empower**ing others rather than commanding them.
    
The loud leader sucks all the air out of the room. The quiet leader listens. By building **consensus** rather than demanding obedience, the quiet leader creates a team that is loyal because they want to be, not because they are afraid. This style requires a mix of patience and being **assertive** only when necessary.

Of course, sometimes a crisis strikes, and we need a loud voice to take charge. While it is true that decisiveness is key in an emergency, leading by fear is not sustainable. People burn out.

You don't need a microphone to change the world. So what? True leadership isn't about how many people follow you; it's about how many leaders you create. Speak softly, but lead strong.`,
    wordsIncluded: ['p20-w1', 'p20-w2', 'p20-w3', 'p20-w4', 'p20-w5']
};

export const PASSAGE_20_LESSON: DayLesson = { id: 'passages-day-20', dayNumber: 20, words: PASSAGE_20_WORDS, stories: [PASSAGE_20_STORY] };


export const PASSAGE_LESSONS: DayLesson[] = [
    PASSAGE_1_LESSON,
    PASSAGE_2_LESSON,
    PASSAGE_3_LESSON,
    PASSAGE_4_LESSON,
    PASSAGE_5_LESSON,
    PASSAGE_6_LESSON,
    PASSAGE_7_LESSON,
    PASSAGE_8_LESSON,
    PASSAGE_9_LESSON,
    PASSAGE_10_LESSON,
    PASSAGE_11_LESSON,
    PASSAGE_12_LESSON,
    PASSAGE_13_LESSON,
    PASSAGE_14_LESSON,
    PASSAGE_15_LESSON,
    PASSAGE_16_LESSON,
    PASSAGE_17_LESSON,
    PASSAGE_18_LESSON,
    PASSAGE_19_LESSON,
    PASSAGE_20_LESSON
];
