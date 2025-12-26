import { VocabularyWord, Story } from "./types";

// Simple Mad Libs style generator as a fallback or base
// In a real app, this would use an LLM API.

export function generateStory(type: 'fiction' | 'non-fiction', words: VocabularyWord[]): Story | null {
    if (words.length === 0) return null;

    const mainWord = words[0];
    const secondWord = words.length > 1 ? words[1] : words[0];
    const thirdWord = words.length > 2 ? words[2] : words[0];

    // Generic templates
    if (type === 'fiction') {
        const title = `The ${mainWord.word} Adventure`;
        const content = `Once upon a time, there was a ${mainWord.word} creature who lived in a magical forest. 
        It was very ${secondWord.word} and loved to explore everything nearby. 
        One day, it found a ${thirdWord.word} treasure chest under a tree!
        
        The creature learned that being ${mainWord.word} was actually a superpower.`;

        return {
            id: `story-${Date.now()}`,
            title,
            content,
            type: 'fiction',
            relatedWordIds: words.map(w => w.id),
            wordsIncluded: words.map(w => w.id)
        };
    } else {
        const title = `Understanding ${mainWord.word}`;
        const content = `Did you know that being ${mainWord.word} is very common in nature?
        Scientists have found that many animals are ${secondWord.word} when they are hunting for food.
        This behavior is considered ${thirdWord.word} by many experts.
        
        So next time you see something ${mainWord.word}, remember how amazing nature is!`;

        return {
            id: `story-${Date.now()}`,
            title,
            content,
            type: 'non-fiction',
            relatedWordIds: words.map(w => w.id),
            wordsIncluded: words.map(w => w.id)
        };
    }
}

// Generates two academic passages for reading comprehension
export function generateAcademicPassages(words: VocabularyWord[]): Story[] {
    if (words.length === 0) return [];

    // Pick a few target words to feature heavily
    const targets = words.slice(0, 5).map(w => w.word);

    // We use a pseudo-random rotation based on the first word's ID to ensure consistency
    // This way, the same set of words always generates the same 'random' stories
    const seed = words[0].id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Template Pool focusing on STEM/Grit & Environment/Social (Lexile 900-1100)

    // STEM / Grit / Overcoming Failure Templates
    const stemTemplates = [
        {
            title: "The Power of Grit in Science",
            content: `Many famous inventors faced huge failures before they found success. When we look at history, we see that true innovation requires ${targets[0] || 'character'} and the refusal to give up. Thomas Edison, for example, failed thousands of times before creating the lightbulb. How did he ${targets[1] || 'approach'} these failures? He didn't see them as endings, but as learning opportunities.

In science, it is important to ${targets[2] || 'support'} bold ideas, even if they don't work right away. An ${targets[3] || 'efficient'} experiment isn't always one that succeeds instantly; it's one that teaches us something new. To ${targets[4] || 'achieve'} greatness, scientists must embrace the struggle.

This "grit"—the passion and perseverance for long-term goals—is the secret ingredient. By taking ${targets[0] || 'responsibility'} for our mistakes and learning from them, we grow stronger. We must ${targets[1] || 'analyze'} what went wrong, adjust our plan, and try again. That is how we solve the world's toughest problems.`
        },
        {
            title: "Engineering the Future",
            content: `Building the future requires more than just math skills; it demands resilience. Engineers often strive to create structures that can withstand any disaster. To do this, they must ${targets[0] || 'identify'} potential weaknesses and address them early. They ${targets[1] || 'approach'} problems with a mindset of continuous improvement.

Sometimes, a design fails. When a bridge collapses or a rocket doesn't launch, it is a chance to learn. Instead of giving up, engineers ${targets[2] || 'support'} each other in finding a better solution. They know that ${targets[4] || 'achieve'}ing a breakthrough often comes after many setbacks.

This determination is vital. We must ${targets[1] || 'analyze'} our failures not as defeats, but as data. By maintaining a strong ${targets[0] || 'character'} and learning from every mistake, we can build a safer, more advanced world.`
        },
        {
            title: "The Math of Resilience",
            content: `Mathematics is often seen as a subject of pure logic, but it also teaches us about persistence. Solving a complex equation requires us to ${targets[0] || 'identify'} patterns and stick with a problem until it is solved. When we ${targets[1] || 'approach'} a difficult proof, we might get stuck many times.

Great mathematicians throughout history didn't solving things instantly. They had to ${targets[2] || 'support'} their theories with years of hard work. They knew that an ${targets[3] || 'efficient'} solution is beautiful, but a hard-earned one is valuable. To ${targets[4] || 'achieve'} understanding, one must be willing to fail and try again.

So, when you struggle with a problem, remember that this struggle is part of the process. It builds ${targets[0] || 'character'}. We must ${targets[1] || 'analyze'} our errors and keep going. That is the true spirit of discovery.`
        }
    ];

    // Environment / Social / Civic Templates
    const envTemplates = [
        {
            title: "Protecting Our Global Garden",
            content: `Our planet is a shared home, and protecting it is a challenge we all face together. Climate change and pollution are serious issues that we must ${targets[0] || 'identify'} and solve. It starts with understanding that our local actions have a global impact.

While some countries ${targets[4] || 'achieve'} success in recycling and renewable energy, others still struggle. Every community has a unique ${targets[2] || 'identity'}, but we all share the same atmosphere. We must ${targets[1] || 'observe'} nature closely to understand how fragile it is. We cannot just ${targets[3] || 'predict'} bad weather; we have to change our habits today.

We need to ${targets[2] || 'support'} leaders and businesses that care about the earth. Small changes, like using less plastic, can ${targets[4] || 'improve'} the health of our oceans and forests. By working together and staying positive, we can build a cleaner, greener future for everyone.`
        },
        {
            title: "The Voice of the Community",
            content: `A strong community is built on the voices of its people. To create a fair society, we must ${targets[0] || 'identify'} the needs of everyone, not just the powerful. Civic duty means taking ${targets[0] || 'responsibility'} for our shared space.

When we ${targets[1] || 'approach'} social problems, like homelessness or hunger, we need empathy. We should ${targets[2] || 'support'} programs that help those in need. It is not enough to just talk; we must take action to ${targets[4] || 'achieve'} real change.

Democracy thrives when people participate. We must ${targets[1] || 'analyze'} the laws and rules that govern us. If something is unfair, we use our voices to speak up. This active participation strengthens our collective ${targets[0] || 'character'} and ensures a better life for our neighbors.`
        },
        {
            title: "Conserving Our Waters",
            content: `Water is the most precious resource on Earth. Yet, many sources are threatened by pollution. We must ${targets[0] || 'identify'} the sources of contamination to save our rivers and oceans.

To ${targets[4] || 'achieve'} a clean water future, we need new technologies and better habits. We cannot assume water will always be there. We must ${targets[1] || 'observe'} how we use it daily. Do we waste it? Or do we use it in an ${targets[3] || 'efficient'} way?

We should ${targets[2] || 'support'} laws that keep factories from dumping waste. By taking personal ${targets[0] || 'responsibility'} for our water use, we protect the animals and people who rely on it. A healthy planet depends on healthy water.`
        }
    ];

    // Fiction Templates (Adventure, Mystery, Sci-Fi)
    const fictionTemplates = [
        {
            title: "The Mystery of the Hidden Key",
            content: `The old mansion stood silent on the hill. Everyone said it was empty, but Maya saw a light. She was a detective with strong ${targets[0] || 'character'}, and she wasn't afraid. She decided to ${targets[1] || 'approach'} the front door carefully.

Inside, the air was cold. "We need to ${targets[0] || 'identify'} where that light came from," whispered her friend, Leo. They found a strange map on the floor. It didn't look like a normal map; it looked like a puzzle.

"We have to be ${targets[3] || 'efficient'}," said Maya. "The sun is setting." They worked together to solve the riddle. Finally, they found a hidden key! It was a great moment. "We did it!" cheered Leo. "We ${targets[4] || 'achieve'}d our goal!"`
        },
        {
            title: "Journey to Planet X",
            content: `Captain Zara looked out at the stars. Her ship, the Starlight, was ready. Her mission was to ${targets[1] || 'observe'} a new planet. "This is a ${targets[3] || 'efficient'} ship," she said to her crew. "But space is full of surprises."

Suddenly, an alarm beeped. "Asteroid field ahead!" shouted the pilot. Zara knew she had to take ${targets[0] || 'responsibility'}. "Change course!" she ordered. The ship turned just in time.

They landed safely on Planet X. It was beautiful and purple. "We must ${targets[1] || 'analyze'} these rocks," said the scientist. "They might help us." Zara smiled. They were there to ${targets[2] || 'support'} discovery, and they had succeeded.`
        },
        {
            title: "The Secret of the Whispering Woods",
            content: `The Whispering Woods were famous for their magic. It was said that the trees could talk. Liam didn't believe it, but his sister, Mia, did. "You just have to listen," she said. "It builds ${targets[0] || 'character'} to believe in magic."

They walked deep into the forest. Liam tried to ${targets[1] || 'approach'} a squirrel, but it ran away. Then, he heard a sound. *Whoosh.* "Did you hear that?" he asked.

"Yes," said Mia. "The trees want us to ${targets[0] || 'identify'} the ancient stone."  They searched for hours. Finally, they found a glowing rock. "Pure magic," whispered Liam. He promised to ${targets[2] || 'support'} Mia's ideas from now on. They had ${targets[4] || 'achieve'}d a magical discovery.`
        }
    ];

    // Select templates based on seed (mod length)
    const stemIndex = seed % stemTemplates.length;
    const envIndex = seed % envTemplates.length;
    const fictionIndex = seed % fictionTemplates.length;

    const selectedStem = stemTemplates[stemIndex];
    const selectedEnv = envTemplates[envIndex];
    const selectedFiction = fictionTemplates[fictionIndex];

    const passage1: Story = {
        id: `academic-stem-${Date.now()}`,
        title: selectedStem.title,
        type: "non-fiction",
        content: selectedStem.content,
        relatedWordIds: words.map(w => w.id),
        wordsIncluded: words.map(w => w.id)
    };

    const passage2: Story = {
        id: `academic-env-${Date.now()}`,
        title: selectedEnv.title,
        type: "non-fiction",
        content: selectedEnv.content,
        relatedWordIds: words.map(w => w.id),
        wordsIncluded: words.map(w => w.id)
    };

    const passage3: Story = {
        id: `fiction-${Date.now()}`,
        title: selectedFiction.title,
        type: "fiction",
        content: selectedFiction.content,
        relatedWordIds: words.map(w => w.id),
        wordsIncluded: words.map(w => w.id)
    };

    return [passage1, passage2, passage3];
}
