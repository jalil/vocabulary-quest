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
    if (!words || words.length === 0) {
        console.warn("generateAcademicPassages called with empty words");
        return [];
    }

    // --- KAAT Day 1-6 Static Overrides ---
    // User requested specific essays for the first 6 days of KAAT.
    // We identify the day by the first word of the lesson.

    const firstWord = words[0].word;

    const KAAT_STATIC_STORIES: Record<string, { title: string; content: string }> = {
        // Day 1: Starts with 'Anticipate'
        "Anticipate": {
            title: "The Nature vs. Nurture Debate",
            content: `The nature versus nurture debate is about which part of a person is more important—their inherited qualities, which includes genes, or their personal experiences and the way they were brought up. For years, scientists have tried to find out what causes people to have different personalities, behaviors, and characteristics.

Scientific Approach
The nature versus nurture debate poses a very complicated scientific question: how do scientists figure out which one plays a greater role in the development of a person? Many scientists study twins that have separated at birth to answer this research question. Scientists use twins because they have identical genes, so it makes it easier to observe the effect of a person’s environment. Do you think twins raised in different homes will grow up to have the same personalities?

The Nurture Side
The view that humans acquire all or almost all of their behavioral traits from “nurture” was termed tabula rasa, Latin for “blank slate,” by philosopher John Locke. This idea proposes that humans develop only from environmental influences. One example of a person’s trait that is completely determined by their environment is native language. Studies show that children, regardless of where they're born, can learn any language with equal facility.

The term “nurture” has historically been defined as the care given to children by the parents, with the mother playing an important role. Now, this term is regarded by some as the environmental (non-genetic) factor of a person’s environment. This new definition of “nurture” has been expanded to include, not just a person’s family upbringing, but also everything else they experience in daily life including advertisements, media, education, peer influences, and home environments.

The Nature Side
Some scientists have concluded that a person’s nature—meaning the traits they got from their parents—have more power in determining a person’s identity than how they are nurtured, or raised. Inherited traits are traits that are developed before birth.

Some genetic traits are highly heritable, such as eye color. Some disorders or diseases are also heritable. However, environments are still influential in how that disease affects a person’s life; for example, people who are born with a disease may live a long time depending on how they are cared for. There are also some non-genetic factors that are highly heritable. For example, a wealth and social status are two non-genetic factors that are generally passed down from family.

Conclusions
Some people criticize the whole concept of “nature versus nurture.” They claim that it is an overly simple way to think about a person’s identity. Perhaps the answer is not as simple. Are there other factors beyond genes and environment that make us who we are?`
        },
        // Day 2: Starts with 'Resistant'
        "Resistant": {
            title: "How Do I Look?",
            content: `Have you ever wondered why you look the way you do? Do you ever think about what you are going to look like in five years, or in 25 years? When you were born, you didn’t look the way you do today. In fact, when you were born, you probably looked like a lot of other babies: small, a bit round, no hair, no teeth and little chubby arms and legs. Although we start out looking like other babies, we all change and grow to look different, as we get older. Some people grow tall, and some do not. Some people’s feet are bigger than others. Some people need glasses, and others see clearly. Some people have skin that is smooth, and some have skin that is wrinkled or freckled. Some people seem to have strong muscles and others look like they have no muscles at all. We all look very different. The reason for our differences involves both what we were born with and what happens to us after we are born.

Some things about us are set before we are born. When a mother and father have a child, they give things like eye color and hair color to their child. Traits are the parts of us, and all living things, that we get from our parents that make up what we look like. Traits are things like eye color, hair color, height, and whether our second toe is longer than our big toe. Let’s say a mother and father both have red hair. Their child will most likely have red hair too. Even if their child is born with no hair at all, you can make a good guess that the hair that will grow will be red because his or her hair color is already decided. It is a trait that the child’s parents passed along to their baby.

Some things about us, though, are shaped by what happens after we are born. Imagine twin girls who are born with the same exact traits: same hair, same eyes, and same size. As they grow up together they will look alike, and most likely will sound alike. If they dress alike, too, it could be very hard to tell them apart. Now think about what would happen if those twins spend their childhood living in two different homes. One home might be in a very cold place and the other in a warm area. Then these girls would most likely wear different clothes, play different sports and eat different foods. They might have been born with the trait of having crooked teeth, but if one twin gets braces and the other does not, their smiles will end up looking very different. When they become adults, even though they were born with the same traits, the way they grew up may have changed them in some ways. Environmental influences are things in the world around us that change what we need and the way we grow. Even if two people start out almost the same, like twins, where and how they live can change the way they look as they grow up.

If twins who are born with many of the same traits can grow up to look different, then what is it that really makes us who we are? Believe it or not, scientists have been talking about this question for hundreds of years. Some believe that it is mostly the traits that we get from our parents that decide who we are. They call this our nature, or all the parts we get from our parents that make up who we are when we are born. Think about making chocolate chip cookies. You need sugar, flour, butter, eggs and chocolate chips. The nature of the chocolate chip cookie comes from those ingredients that have been mixed together. If you use raisins instead of chocolate chips, they would no longer be chocolate chip cookies. They would be raisin cookies. Your nature is all of your body’s ingredients put together. They are the parts and pieces of you that you have when you enter the world. If you change one of them, like the chocolate chips and the raisins, then you would be different too.

However, we know from our look at those twins that a person’s nature can be changed by where they live and the way they grow up. Nurture is the way the world around us acts upon us and changes us as we live and grow. Over the years, many people have believed that this is what really decides who we are, no matter what we have in us when we are born. They thought that we could raise a child to become just what we wanted him or her to be.

Let’s go back to that cookie. We know the nature of the cookie, or all the stuff that goes into it, but that’s only the first part of what your cookie will be like. Once you have everything mixed together, you shape the cookie dough into balls, put them on the baking sheet and place it in the oven. The heat of the oven bakes the dough, and the cookie becomes flat and round. Now, if you put that cookie dough into a square-shaped pan, it would not come out round. The shape of the pan, or the cookie’s environment, changes the way the cookie “grows up.” You get two different looking chocolate chip cookies, even though all the ingredients are the same. Now make believe that you are the cookie. Your nature might say that your feet will grow to be a certain size, but if you grow up wearing shoes that are too small for you, your feet might not reach their full size. You can change the way your feet grow just by wearing the wrong size shoe!

As these two ideas of nature and nurture have been studied over the years, many people have come to agree that both are very important to how we grow and who we become. What we get from our parents forms the beginning of what we are going to look like and act like. It has a hand in how we look at the world and how the world looks at us. However, the place where we live and the way we grow up matters very much as well. What we go through in our lives and the way the world changes us plays a big part in how we become who we are.`
        },
        // Day 3: Starts with 'Essential'
        "Essential": {
            title: "Where Did I Come From?",
            content: `Children often ask their parents: “Where do babies come from?” The easy answer is that when cells from a mother and father are combined, they form the beginnings of a new person. Of course, there’s a lot more to it than that. Scientists have been studying this subject for thousands of years, and some answers have been easier to figure out than others. You may know you came from your parents and that most people look a little like both of their parents. Science helps us to understand all the other interesting things that go into making people the way they are on the inside and the outside.

When you look around your classroom at school, what do you see? You might see friends or teammates or even some kids that you do not know very well. You may all have very different hair colors, heights, or taste in the things you like to eat and games you like to play. However, no matter how many differences you have, you are all children that came from parents. Most people may use the word children, but scientists use a different name to talk about living things that come from parents. Offspring are new living things that come from one or more parents. In some living things, like plants, there might be only one parent. A tree can make another tree with one seed that falls from its own branches. Human beings are different because they need two parents – a mother and a father – to make each child.

You may have noticed the ways you look like your parents. Maybe you have dark hair like your mother or brown eyes like your dad. If your grandmother is tall, you might grow to be tall as well. You may look the same as your mother in some ways, but different from her in others. The reason we do not look exactly like just one of our parents is because we get some traits from the other parent, too. Together, both of your parents contribute to you. You are absolutely your own person, but you are more likely to look like your parents, and their parents, than like any other person in the world. This is because all of your traits were given to you by your parents, and theirs were given to them by their parents, and so on. Heredity is the passing of traits down from parents to offspring.

How exactly do our parents give us these things like hair color and eye color? Imagine a really long, thin piece of paper that stretches across your classroom. Write a list of everything about yourself on that paper. That list has every part of you on it and even has directions for how to make each part. Now imagine rolling that piece of paper up into a little ball and sticking it inside of a small bag. Inside that little bag is all the information that makes you what you are. Every one of the cells in your body is just like the bag with the piece of paper inside it. From your skin cells, to your blood cells, to your eye cells, each cell in your body has all of these written directions stored inside.

Your mother’s and father’s cells also have directions stored inside of them. However, those cells each have only one half of the directions that make them who they are. When one of your father’s cells and one of your mother’s cells came together, each gave half of their directions. Together, they created you. Even though you are a completely new person, you include one half of the directions that made each of your parents. That is why you look so much like them. Genes are the directions that we get from our parents that tell our bodies what they will look like.

For every single part of us, there is a gene that decides how that part will look. If you have brown hair, it’s because the codes for hair color that you got from each one of your parents added up to brown when they were put together. This is the case even for things that will form later, like what your teeth are going to look like or the full-grown size of your feet. You may not know how tall you are going to be when you grow up, but your genes had the directions for your height before you were even born!

Think about your school. How do you think it got there? It didn’t just magically appear. It took time and planning. Someone starts by making drawings that show what parts the building needs to have and where they need to go. These drawings are given to someone else who gathers all the pieces needed to start to build the building. That builder needs to see the drawings and measurements to find out what size to make the building, how many stories to build, and how big to make the rooms.

Every single part of the building is connected to all of its other parts. Like that building, you came with a set of plans and directions that work together to build you! Instructions tell how to make something and how it will work, just like your genes do for your body. Everything about how you are made is inside of you and was given to you by your parents. So, if you ever start to wonder how big your ears are going to grow or why your hair is curly, just take a look at your family. Your body got the instructions from them!`
        },
        // Day 4: Starts with 'Detestable'
        "Detestable": {
            title: "Things That Show and Things That Don't",
            content: `Romeo and Juliet are having a baby boy. They are trying to guess who the baby will look like. Romeo has brown eyes and black hair. Juliet has blue eyes, and blonde hair. Will their son look like his mom or his dad? Will he look like both of them? Maybe he won’t look like either of them!

No two people are exactly alike. Our bodies have many different parts, and each part is built in a different way. As your body grows, it needs directions to tell all of these parts how to grow. Picture your body as a library full of books. Each book in the library has instructions for a different body part. There is a book for eye color, a book for nose shape, a book for hair color, a book for ear shape and so on. Scientists call each one of these books a gene. Every person has almost 25,000 genes. This means that your library has 25,000 books of directions for your body.

Genes make us look the way we do. Most people look like their parents because they get their genes from their parents. Each of our parents have their own set of genes, or library of directions that make them look the way they do. When two people have a child, the child gets half of each parent’s genes. The dad’s genes join up with the mother’s to makes a new person!

Just as we got our genes from our parents, they got theirs from their parents. Genes are passed down through families from grandparents to parents to children. Inherit means to have something given to you by your parents. Our genes are given to us by our parents, which means that we inherited them from our parents. When your mom decides to give you her piano, you have inherited the piano from her. However, even though she gave you that piano, you might not play it like she plays it. In the same way, having your parents’ genes does not mean you look completely like them.

Like a book with two chapters, each of our genes has two parts, or two sets of directions. Parents pass one set of directions from each of their genes on to their children. Picture your mom and dad each holding a book with two chapters. The pages of your mom’s book are red and your dad’s are blue. Your mom and dad each rip their book in half and give one chapter to you. You put the two together and you now have a book with one red and one blue chapter. The two parts of a gene are called alleles. Every one of your genes has one allele from your mom’s genes and one from your dad’s; they mix together and make a new and different book of instructions that tell how to make you.

Body parts can come out looking different ways. That’s why each gene has two sets of directions. Remember how Romeo has brown eyes while Juliet has blue eyes? That means that Juliet has a book with a set of directions, or alleles, for making blue eyes and Romeo has a book with a set of alleles for making brown eyes. However, each of those books has two sets of directions; there are two alleles in each gene. Some people might have a book for eye color with two sets of brown directions, and some might have a book with two sets of blue directions. Others might have a book with one brown set of directions and one blue set of directions.

People with an eye color gene that has two brown alleles will always have brown eyes. The same is true for two blue alleles. However, we also have people with two different alleles, or sets of directions in their eye color gene. What color does that make their eyes? If Romeo and Juliet each give their son one allele from each gene, he will have directions for brown eyes and blue eyes. Which eye color will he have? How will his body know what color to make his eyes?

The simple answer is that some alleles, or chapters of directions, are stronger than others. When a baby duck hatches, the first thing it sees is its mom. From that point on it will only follow her. If the baby duck’s dad comes around, the baby duck will still only follow its mom. Our bodies are the same way. We will read and follow the strongest set of directions. When one set of directions is stronger than the other it is called a dominant allele.

Do our bodies ever follow the weaker set of directions? They won’t if the stronger set is there. It’s just like the mom and dad duck with their baby. The daddy duck may really want his baby to follow him, but the baby will only follow its mom because it saw her first. What happens, though, if one of the chapters in a book is not stronger than the other? What if the stronger allele isn’t there? If the mother duck was not there when the baby duck was born and it saw its dad first, would it follow its dad? Yes! Sometimes a book can have two weak chapters in it. If a gene has two weak alleles one is not stronger than the other. The body will read and then follow the weaker set of directions. The weaker set of directions is called a recessive allele.

Most of the way we look is based on which genes, or chapters, we have, and which are strong and which are weak. That is why people look so different. It all depends on which directions you have and how they mix together. Romeo has brown eyes, which come from stronger alleles than Juliet’s blue eyes. He has black hair, which comes from stronger alleles than blonde hair. However, the genes for his attached ear lobes are weaker than Juliet’s genes for her free ear lobes. Their son will most likely have Romeo’s eyes and hair, but Juliet’s ears.

Here are some more sets of stronger and weaker directions:
Brown eyes are stronger than green eyes and blue eyes.
Green eyes are stronger than blue.
Having a pointed hairline is stronger than having a straight hairline.
Being able to curl your tongue is stronger than not being able to.
Being able to bend your thumb backwards is weaker than having a straight thumb.
Having a cleft or split chin is weaker than having a smooth chin.

We can only guess what Romeo and Juliet’s son will look like based on the stronger and weaker chapters in their books of directions. In truth, the way we look is not that simple. It takes many different genes all acting together to make a body look the way it does. There might be five different books that have directions for your nose. Romeo and Juliet’s son could have either one of his parent’s nose or, a mix of each, or it could be completely different. He might even have his great Uncle Melvin’s crooked nose. It all depends on what sets of directions he gets, how they mix together, and which ones are weak or strong.`
        },
        // Day 5: Starts with 'Audacious'
        "Audacious": {
            title: "Don't Hate on the Trait",
            content: `Think about the building where you live. If it’s a house or an apartment building, it’s made up of water pipes, a roof, different rooms, and thousands of wooden boards. On your street there are probably many different buildings and each building is very, very complicated. For people to be able to live inside, all the thousands of different parts have to work and fit together. To build something with so many parts, architects have to draw every single part. They need to think about every electrical plug, toilet, and wall. The architects then give their drawings to people who build the house. These drawings are the instructions that show them what to build. Since there are so many different parts to put together, every building needs its own instructions.

Just like buildings, all people are built differently too. For instance, the people in your class might all have different colors of eyes, hair, and skin. People can change what they look like somewhat by cutting their hair or wearing different clothes. You can decide what some parts of you look like on the outside, but you can’t decide how you are built. The parts of you that you cannot change are in your genes. Genes are the instructions for your body and they are inside of every one of your cells. They are found in every other living thing on earth too, and are the instructions for how to make each of those things. Your genes tell your cells what to do. They tell your body how to grow, make you look a certain way, and even decide what your personality will be like.

Genes give you characteristics that can make you look the same as other people or very different from them. Your genes might give you brown eyes, black hair, and make you 5 feet 4 inches tall. All other living things also have characteristics that came from their genes. A palm tree might be tall, brown, skinny, and have green leaves at the top. Each of those is a characteristic of that palm tree. Another name for a characteristic that we use in science is trait. A trait is any part of a living thing that was determined by its genes, by its environment, or by both.

There are three different reasons why the person and the palm tree are the way they are:
1. Their genes make them that way. (Your genes make your eyes brown, blue, or green.)
2. Their environment makes them that way. (You are around people who smoke and you get cancer, or you are not around people who smoke and you don’t get cancer.)
3. Their genes and their environment made them that way. (Your genes tell your cells to grow tall, but you don’t eat healthy food and you grow up to be 5 feet 8 inches instead of 6 feet tall.)

You might have some of the same traits as your parents. The parts of you that you share with your parents were either passed down in their genes to you, or come from the environment where you both live. Every child gets half of each of their parent’s genes. Heredity is the name for when genes are passed from parents to children. It is one of the reasons why you look like both of your parents.

Genes are not the only things that make you and your parents look the same. You and your parents may also spend time in the same environments or different ones, and that will also change how you look. If you and your parents have a gene for dark skin, and you spend more time than them outside, your skin will be darker than theirs. If you spend time inside and your parents spend most of the day outside, they will have darker skin than you. The environment is very important in how the same trait looks on different people.

In humans, each child gets half of each of their parents’ genes. This means that every child will get half of their father’s genes and half of their mother’s genes. No child is exactly the same as either of their parents, because they only have half of each parents’ genes. This also means that every single person is different or varied. Variation means that there are differences between things. If you look at the chairs in your classroom, they might all look the same. There is no variation in the chairs. Now look at what the students in your class use to write. Some may use lead pencils, while others use pens. All of these might be different sizes or colors. There is variation in the colors, types, and sizes of what your classmates use to write with in your class. In science we use variation to describe differences between organisms.`
        },
        // Day 6: Starts with 'Meticulous'
        "Meticulous": {
            title: "From Bite to Bark: The Evolution of Dogs",
            content: `A little goldendoodle puppy may look more like a teddy bear than a wolf. But behind those cute curls is a bit of wild animal. From fluffy goldendoodles to sleek greyhounds to giant mastiffs — all dogs come from ancient wolves. How those wild wolves turned into dogs is one of the coolest stories of animal evolution.

Taming Wolves
Dogs were the first domesticated animal. This means that they were the first animal that became tame enough to live with humans. People take credit for domesticating dogs, but scientists have figured out that it didn’t happen that way. The wolves tamed themselves.
“Wolves chose us,” Brian Hare told the news program 60 Minutes. He is an expert on animal evolution. “A population of wolves actually became attracted to humans.”
It wasn’t our fun personalities that won them over. It was our leftovers!
More than 20,000 years ago, humans hunted animals to survive. After feasting and using the most useful parts, they threw away the rest. Some wolves weren’t too afraid of people. These clever wolves realized that the leftovers would make easy meals for them. They started hanging around people to get those tasty treats. Over thousands of years, wolves slowly bonded with people and changed into dogs.

Humans’ Best Friend
The tamer these wolves became, the more they began to look and act dog-like. They no longer needed their large size and powerful jaws to hunt. So they evolved to be a little smaller. This was better for surviving on scraps.
It wasn’t only their bodies that became smaller. Their snouts, paws, and teeth also shrunk. Some of their pointy ears flopped down, and their fur became different colors.
All living things pass along many different traits. Traits refer to how a living thing looks, how they behave, and how they are built. Living things pass down traits to their children through microscopic sets of instructions called genes. As wolves evolved into dogs, their genes changed. These changes affected the wolves’ looks and behaviors.

Scientists have found interesting differences between wolf and dog genes. Scientist Bridgett vonHoldt is an expert on the study of genes. She told 60 Minutes that there are genes in dogs that make them friendlier than wolves.
Dogs became good at communicating with humans. They learned how to read our expressions and body language. They even learned some of our spoken words and signals. They also figured out how to attract our attention — by being cute. They learned to rest their chins on our laps or tap us with a paw. They even learned to raise their inner eyebrows in that “puppy eyes” way that people love. According to The New York Times, dogs have a special muscle that helps them raise their eyebrows. Wolves do not.

As the bond between people and dogs grew stronger, dogs made people’s lives easier in many important ways. They helped people hunt. They learned how to herd sheep. They pulled sleds piled with our stuff. They protected us and kept us company. As the saying goes, dogs became our best friends.
But the amazing story of how wolves evolved into dogs doesn’t explain how we ended up with pups as different as Chihuahuas and St. Bernards. That’s where people came in.

The Best Dog for the Job
Over time, people created dog breeds. They did it through a practice called selective breeding. People picked the “best dogs” — ones with traits the people really liked and wanted to see in other dogs. Then, they made sure the dogs had puppies. The desired traits were passed on to some of the puppies, so people repeated the practice. As a trait became stronger in each generation of dog, the pups with the trait became more different. Eventually, these special traits became a unique breed.
Of course, not everyone agreed on the “best dogs” or the most desirable traits. Some people wanted dogs with an excellent sense of smell or the ability to run fast. Both traits were helpful in hunting. Others bred nimble dogs that could herd sheep. They also wanted big, patient dogs to guard the livestock. And other people needed strong dogs with a lot of energy to pull sleds over snow. All of these dogs became different breeds.

Even More Dog Breeds
For many years, people bred dogs for work or protection. But by the mid-1800s, people realized that they loved having dogs simply as pets, too. They began to breed little dogs that could sit on their laps. They bred dogs with interesting looks that they could show off in a new competition: dog shows.
Today, we have more than 400 different dog breeds according to National Geographic’s Dog Breed Guide. And that’s not even counting the “designer dog” crossbreeds. This includes breeds like cockapoos (cocker spaniel-poodle), puggles (pug-beagle), goldendoodles (golden retriever-poodle), and chiweenies (Chihuahua-dachshund). Or the many mixed-breeds called “mutts.”
Dogs now come in many different shapes, colors, and sizes. They also have many different types of behaviors. This makes dogs the most diverse land mammal. The largest dogs are a whopping 40 times bigger than the smallest dogs! That’s quite a change from the lone wolf.`
        },
        // Day 7: Starts with 'Skeptical'
        "Skeptical": {
            title: "Understanding Eclipses",
            content: `An eclipse takes place when one heavenly body such as a moon or planet moves into the shadow of another heavenly body. There are two types of eclipses on Earth: an eclipse of the moon and an eclipse of the sun.

What Is a Lunar Eclipse?
The moon moves in an orbit around Earth, and at the same time, Earth orbits the sun. Sometimes Earth moves between the sun and the moon. When this happens, Earth blocks the sunlight that normally is reflected by the moon. (This sunlight is what causes the moon to shine.) Instead of light hitting the moon’s surface, Earth’s shadow falls on it. This is an eclipse of the moon — a lunar eclipse. A lunar eclipse can occur only when the moon is full.

A lunar eclipse can be seen from Earth at night. There are two types of lunar eclipses: total lunar eclipses and partial lunar eclipses. 

A total lunar eclipse occurs when the moon and the sun are on exact opposite sides of Earth. Although the moon is in Earth’s shadow, some sunlight reaches the moon. The sunlight passes through Earth’s atmosphere, which causes Earth’s atmosphere to filter out most of the blue light. This makes the moon appear red to people on Earth.

A partial lunar eclipse happens when only a part of the moon enters Earth’s shadow. In a partial eclipse, Earth’s shadow appears very dark on the side of the moon facing Earth. What people see from Earth during a partial lunar eclipse depends on how the sun, Earth and moon are lined up.

A lunar eclipse usually lasts for a few hours. At least two partial lunar eclipses happen every year, but total lunar eclipses are rare. It is safe to look at a lunar eclipse. 

What Is a Solar Eclipse?
Sometimes when the moon orbits Earth, it moves between the sun and Earth. When this happens, the moon blocks the light of the sun from reaching Earth. This causes an eclipse of the sun, or solar eclipse. During a solar eclipse, the moon casts a shadow onto Earth.

There are three types of solar eclipses.

The first is a total solar eclipse. A total solar eclipse is only visible from a small area on Earth. The people who see the total eclipse are in the center of the moon’s shadow when it hits Earth. The sky becomes very dark, as if it were night. For a total eclipse to take place, the sun, moon and Earth must be in a direct line.

The second type of solar eclipse is a partial solar eclipse. This happens when the sun, moon and Earth are not exactly lined up. The sun appears to have a dark shadow on only a small part of its surface.

The third type is an annular solar eclipse. An annular eclipse happens when the moon is farthest from Earth. Because the moon is farther away from Earth, it seems smaller. It does not block the entire view of the sun. The moon in front of the sun looks like a dark disk on top of a larger sun-colored disk. This creates what looks like a ring around the moon.

During a solar eclipse, the moon casts two shadows on Earth. The first shadow is called the umbra. This shadow gets smaller as it reaches Earth. It is the dark center of the moon’s shadow. The second shadow is called the penumbra. The penumbra gets larger as it reaches Earth. People standing in the penumbra will see a partial eclipse. People standing in the umbra will see a total eclipse.

Solar eclipses happen once every 18 months. Unlike lunar eclipses, solar eclipses only last for a few minutes.

NEVER look directly at the sun: It can permanently damage your eyes! You must use proper safety equipment to look at any type of solar eclipse.

Why Does NASA Study Eclipses?
Hundreds of years ago, when people observed the moon during an eclipse, they discovered that the shape of Earth is round. Even after all these years, scientists are still learning about the moon from lunar eclipses. In December 2011, NASA’s Lunar Reconnaissance Orbiter gathered data about how quickly the moon’s day side (the side that always faces Earth) cools during a lunar eclipse. NASA can learn what the moon’s surface is made of from this data. If an area of the moon’s surface is flat, it will cool quickly. Scientists use this data to know which areas of the moon are rough with boulders and which are flat.

NASA also studies solar eclipses. Scientists use solar eclipses as an opportunity to study the sun’s corona. The corona is the sun’s top layer. During an annular eclipse, NASA uses ground and space instruments to view the corona when the moon blocks the sun’s glare. 

When Is the Next Solar Eclipse? 
On Monday, April 8, 2024, most of North and Central America will be treated to an eclipse of the sun that has been dubbed by some the “Great North American Eclipse.” While most of North and Central America will experience a partial solar eclipse, anyone within the path of totality can see one of nature’s most awe-inspiring sights — a total solar eclipse. This path, where the moon will completely cover the sun so the sun’s corona can be seen, will stretch from Mexico’s Pacific coast, across parts of the U.S. Midwest and East Coast, and through eastern Canada and the Atlantic coast of Newfoundland. Observers outside this path will still see a partial solar eclipse where the moon covers part of the sun’s disk.

REMEMBER: NEVER look directly at the sun: It can permanently damage your eyes! You must use proper safety equipment to look at any type of solar eclipse.`
        },
        // Day 8: Starts with 'Vindictive'
        "Vindictive": {
            title: "What Are Clouds?",
            content: `A cloud is made of water drops or ice crystals floating in the sky. There are many kinds of clouds. Clouds are an important part of Earth’s weather.

How Do Clouds Form?
The sky can be full of water. But most of the time you can’t see the water. The drops of water are too small to see. They have turned into a gas called water vapor. As the water vapor goes higher in the sky, the air gets cooler. The cooler air causes the water droplets to start to stick to things like bits of dust, ice, or sea salt.

What Are Some Types of Clouds?
Clouds get their names in two ways. One way is by where they are found in the sky. Some clouds are high up in the sky. Low clouds form closer to Earth’s surface. In fact, low clouds can even touch the ground. These clouds are called fog. Middle clouds are found between low and high clouds.
Another way clouds are named is by their shape. Cirrus clouds are high clouds. They look like feathers. Cumulus clouds are middle clouds. These clouds look like giant cotton balls in the sky. Stratus clouds are low clouds. They cover the sky like bed sheets.

What Causes Rain?
Most of the water in clouds is in very small droplets. The droplets are so light they float in the air. Sometimes those droplets join with other droplets. Then they turn into larger drops. When that happens, gravity causes them to fall to Earth. We call the falling water drops “rain.” When the air is colder, the water may form snowflakes instead. Freezing rain, sleet, or even hail can fall from clouds.

Why Does NASA Study Clouds?
Clouds are important for many reasons. Rain and snow are two of those reasons. At night, clouds reflect heat and keep the ground warmer. During the day, clouds make shade that can keep us cooler. Studying clouds helps NASA better understand Earth’s weather. NASA uses satellites in space to study clouds.
NASA also studies clouds on other planets. Mars has clouds that are like the clouds on Earth. But other planets have clouds that aren’t made of water. For example, Jupiter has clouds made of a gas called ammonia.`
        },
        // Day 9: Starts with 'Redundant'
        "Redundant": {
            title: "What is an Orbit?",
            content: `An orbit is a regular, repeating path that one object in space takes around another one. An object in an orbit is called a satellite. A satellite can be natural, like Earth or the moon. Many planets have moons that orbit them. A satellite can also be man-made, like the International Space Station.
Planets, comets, asteroids and other objects in the solar system orbit the sun. Most of the objects orbiting the sun move along or close to an imaginary flat surface. This imaginary surface is called the ecliptic plane. 

What Shape Is an Orbit?
Orbits come in different shapes. All orbits are elliptical, which means they are an ellipse, similar to an oval. For the planets, the orbits are almost circular. The orbits of comets have a different shape. They are highly eccentric or “squashed.” They look more like thin ellipses than circles.
Satellites that orbit Earth, including the moon, do not always stay the same distance from Earth. Sometimes they are closer, and at other times they are farther away. The closest point a satellite comes to Earth is called its perigee. The farthest point is the apogee. For planets, the point in their orbit closest to the sun is perihelion. The farthest point is called aphelion. Earth reaches its aphelion during summer in the Northern Hemisphere. The time it takes a satellite to make one full orbit is called its period. For example, Earth has an orbital period of one year. The inclination is the angle the orbital plane makes when compared with Earth’s equator. 

How Do Objects Stay in Orbit?
An object in motion will stay in motion unless something pushes or pulls on it. This statement is called Newton’s first law of motion. Without gravity, an Earth-orbiting satellite would go off into space along a straight line. With gravity, it is pulled back toward Earth. A constant tug-of-war takes place between the satellite’s tendency to move in a straight line, or momentum, and the tug of gravity pulling the satellite back.
An object’s momentum and the force of gravity have to be balanced for an orbit to happen. If the forward momentum of one object is too great, it will speed past and not enter into orbit. If momentum is too small, the object will be pulled down and crash. When these forces are balanced, the object is always falling toward the planet, but because it’s moving sideways fast enough, it never hits the planet. Orbital velocity is the speed needed to stay in orbit. At an altitude of 150 miles (242 kilometers) above Earth, orbital velocity is about 17,000 miles per hour. Satellites that have higher orbits have slower orbital velocities. 

Where Do Satellites Orbit Earth?
The International Space Station is in low Earth orbit, or LEO. LEO is the first 100 to 200 miles (161 to 322 km) of space. LEO is the easiest orbit to get to and stay in. One complete orbit in LEO takes about 90 minutes.
Satellites that stay above a location on Earth are in geosynchronous Earth orbit, or GEO. These satellites orbit about 23,000 miles (37,015 km) above the equator and complete one revolution around Earth precisely every 24 hours. Satellites headed for GEO first go to an elliptical orbit with an apogee about 37,015 km. Firing the rocket engines at apogee then makes the orbit round. Geosynchronous orbits are also called geostationary.
Any satellite with an orbital path going over or near the poles maintains a polar orbit. Polar orbits are usually low Earth orbits. Eventually, Earth’s entire surface passes under a satellite in polar orbit. When a satellite orbits Earth, the path it takes makes an angle with the equator. This angle is called the inclination. A satellite that orbits parallel to the equator has a zero-degree orbital inclination. A satellite in a polar orbit has a 90-degree inclination.`
        },
        // Day 10: Starts with 'Opulent'
        "Opulent": {
            title: "Kindness and Well-being",
            content: `Everybody can appreciate acts of kindness. But when it comes to explaining why we do them, people often take one of two extreme positions. Some think kindness is something completely selfless that we do out of love and care, while others believe it is just a tool that we cunningly use to become more popular and reap the benefits.
But research shows that being kind to others can actually make us genuinely happy in a number of different ways. We know that deciding to be generous or cooperating with others activates an area of the brain called the striatum. Interestingly, this area responds to things we find rewarding, such as nice food and even addictive drugs. The feel-good emotion from helping has been termed “warm glow” and the activity we see in the striatum is the likely biological basis of that feeling.
Of course, you don’t have to scan brains to see that kindness has this kind of benefit. Research in psychology shows a link between kindness and well-being throughout life, starting at a very young age. In fact, even just reflecting on having been kind in the past may be enough to improve teenagers’ mood. Research has also shown that spending extra money on other people may be more powerful in increasing happiness than spending it on yourself.
But why and how does kindness make us so happy? There are a number of different mechanisms involved, and how powerful they are in making us feel good may depend on our personalities.

1. Contagious smiling
Being kind is likely to make someone smile and if you see that smile for yourself, it might be catchy. A key theory about how we understand other people in neuroscience suggests that seeing someone else show an emotion automatically activates the same areas of the brain as if we experienced that emotion for ourselves. 
You may have been in a situation where you find yourself laughing just because someone else is — why not set off that chain of good feelings with a nice surprise for someone? 

2. Righting a wrong
The same mechanism also makes us empathize with others when they are feeling negative, which could make us feel down. This is particularly true for close friends and family, as our representations of them in the brain physically overlap with our representations of ourselves. Doing a kind act to make someone who is sad feel better can also make us feel good — partly because we feel the same relief they do and partly because we are putting something right. Although this effect is especially powerful for people we are close to, it can even apply to humanitarian problems such as poverty or climate change. Getting engaged with charities that tackle these issues provide a way to have a positive impact, which in turn improves mood. 

3. Making connections
Being kind opens up many different possibilities to start or develop a social connection with someone. Kind acts such as a buying someone a thoughtful present or even just a coffee strengthens friendships, and that in itself is linked to improved mood.
Similarly, charities offer the opportunity to connect with someone on the other side of the world through donating to improve their life. Volunteering also opens up new circles of people to connect with, both other volunteers and those you are helping. 

4. A kind identity
Most people would like to think of themselves as a kind person, so acts of kindness help us to demonstrate that positive identity and make us feel proud of ourselves. In one recent study, even children in their first year of secondary school recognized how being kind can make you feel “better as a person … more complete,” leading to feelings of happiness. This effect is even more powerful when the kind act links with other aspects of our personality, perhaps creating a more purposeful feeling. For example, an animal-lover could rescue a bird, an art-lover could donate to a gallery or a retired teacher could volunteer at an after-school group. Research suggests that the more someone identifies with the organization they volunteer for, the more satisfied they are. 

5. Kindness comes back around
Work on the psychology of kindness shows that one out of several possible motivations is reciprocity, the returning of a favor. This can happen directly or indirectly. Someone might remember that you helped them out last time and therefore be more likely to help you in the future. It could also be that one person being kind makes others in the group more kind, which lifts everyone’s spirits. Imagine that you bake cakes for the office and it catches on so someone does it each month. That is a lot more days that you’re getting cakes than providing them.
The story doesn’t end there. Being kind may boost your mood, but research has also shown that being in a good mood can make you more kind. This makes it a wonderful two-way relationship which just keeps giving.`
        },
        // Day 11: Starts with 'Dubious'
        "Dubious": {
            title: "An Overview of the Great Depression",
            content: `On a fateful Tuesday in October 1929, American citizens experienced the beginning of the worst economic disaster in the country’s history. The day marked the beginning of the Great Depression, a severe economic crisis that lasted for more than ten years and hurt millions of people around the country.

Why Did it Happen?
The Great Depression had many causes. In fact, economists still debate over all the factors that led to the crisis. The following are some of the most important causes:
The Stock Market
Maybe you have heard your parents or news commentators talk about the stock market. Essentially, it is where people can buy stocks, or very small pieces of big companies like Walmart or Facebook. If the company makes money, the stock-holder also gets a small profit. Investing in a stock is like taking a gamble, because the company could earn a lot of money, or it could lose money.
In the years before 1929, the stock market was an extremely popular way for everyday people to earn some extra money. Because of this, the prices of stocks kept getting higher and higher. By 1929, many prices were much higher than the actual values of companies.
Some people started getting skeptical. Prices could not keep going up forever. So they started selling their stocks while they were still at high prices. More and more people started catching on, until everyone was scrambling to sell their stocks at once. There was no one left to buy all these available stocks, so the prices dropped steeply.
This caused what is known as a stock market crash. In just one day, on October 29, 1929, the whole stock market lost over $14 billion. 

Bank Failures
When the stock market was highly popular, most banks had very few rules about loaning out money. They would loan money to customers so those customers could go use it to buy more stocks.
When the stock market lost so much money, suddenly all those customers had no way to pay back their loans. But when people heard about the crash, they started to panic and wanted to pull the money out of their savings accounts just to keep it safe.
With no money back from all the loans they had given out, the banks did not have enough money to pay out everything from everyone’s savings. The bank failures rippled throughout the nation, causing even more economic problems and panic for average Americans.

The Dust Bowl
A record-setting drought hit the middle states, especially Oklahoma, around the same time. The timing could not have been worse. Farmers, who usually remained stable during economic uncertainty because they could at least grow their own food, were suddenly in just as much trouble as the rest of the country.
The drought brought hot, dry winds sweeping across the plains, blowing huge clouds of dust across the plains and into many peoples’ houses and lungs. Families could not stay in the area. They packed up and left the Great Plains, heading west to places like California to find work. Unfortunately, other states already had their own unemployment problems; there were not enough jobs for the newcomers.  

Effects of the Depression
At the beginning of the financial problems, few people predicted the crisis would last over a decade. But the problems were more extensive and much deeper than analysts realized at first. 
One of the most important effects of the Great Depression was unemployment. At its peak in 1933, around 25% of adults were unemployed — this means 1 in 4 adults did not have jobs. 
Without steady income, many families were forced out of their homes. Some found other family members to live with, while others had to take to the streets. Some people moved into small shanty towns called Hoovervilles, named after the president at the time Herbert Hoover. These people often had to rely on charity soup kitchens to get enough food to eat.

Political Interventions
In 1932, near the worst of the Depression, President Franklin D. Roosevelt was elected. He immediately started working to fix the problems. The set of policies and government programs he instituted are known as the New Deal.
To address the banking issues, he temporarily closed all banks to give them a chance to restructure themselves. He set guidelines for future bank operations. He also made more rules for how investors on the stock market could buy and sell stocks more responsibly.
To help families affected by unemployment, he created many employment programs. Groups like the Civilian Conservation Corps (CCC) and Works Progress Administration (WPA) used government funds to pay young men for services like building roads and cleaning parks. This gave families some money to start buying necessities again.
President Roosevelt started dozens of programs during his time in the White House. Not all of them were successful, and a few were even deemed unconstitutional, but many did have positive results. 

Culture Amid Crisis
Even though Americans faced one of the greatest challenges in our nation’s history during the 1930s, they were able to produce art and entertainment to raise everyone’s spirits.
Radio became a central aspect of many people’s home lives. They could listen for free to comedy shows like Amos ‘n’ Andy and The Jack Benny Show. President Roosevelt also made regular speeches on the radio, known as his fireside chats, to reassure the American people and explain his newest New Deal policies.
Movies continued to grow in popularity. Many movies featured tough gangsters and witty city-dwellers with exciting plots. Viewers could escape into this world for a few hours any time they watched a movie. 
Music portrayed a more complex, and for many people more relatable, view of society during the Great Depression. Some songs recalled the better days of the 1920s when the country was happy. The mid 1930s introduced swing music and the big band genre, full of upbeat and exciting melodies. The dancing that accompanied it was fast paced. But other artists, like Bing Crosby, did not shy away from music that reflected the hard times. His song “Brother, Can You Spare a Dime?” became popular.

Recovery
Even though the worst of the Great Depression came in 1933, its negative effects and high unemployment continued throughout the 1930s.
When the United States entered World War II in 1941, things began to change. The military needed new equipment and supplies, so thousands of new manufacturing jobs opened to support the war effort. This cut down on the still-soaring unemployment rates. Living standards still remained relatively low, because so many factories built war materials instead of everyday goods for households. Still, Americans began to regain their sense of hope for the future. After the war ended, their hopes were realized as living standards rose and economic prosperity spread across the country. 
The Great Depression lives on through famous literature like John Steinbeck’s novel The Grapes of Wrath, published in 1939. But the Great Depression’s legacy may best be seen in the Social Security Act, which was passed by Congress in 1935. Since then, the government has provided Americans with pensions for the retired, as well as assistance to the unemployed and those with disabilities.`
        },
        // Day 12: Starts with 'Egregious'
        "Egregious": {
            title: "Financial Literacy",
            content: `Money is one of the most complicated and controversial things in the world. Some people are very cautious about having and using it, while others try to earn (or even steal) as much of it as possible. Financial systems are extremely complicated, which unfortunately means there are too many people who do not understand how to use their money in the best ways.
In order to understand money and some of the ways you can use it, let’s do a thought experiment: a very generous aunt just gave you $1,000 and said you can use it however you want. What are some of the options you have?

Banks
Maybe the first idea you had was to put your $1,000 into a bank. There are two different ways to put money into a bank. The first option is to put money into a checking account. This is the simplest option, because a checking account holds your money and allows you to access it very easily at any time you would like.
The second option is to use a savings account. Money in a savings account is harder to access on demand, but the bank will pay you a small percentage of the total for keeping your money in that account. This is called interest. For example, if you put all $1,000 in a savings account, and the bank’s interest rate is 3%, at the end of the year you will have $1,030.
Why does the bank want your money, if they have to pay to hold it for you? Actually, banks are very happy when you store your money with them, because they use the money when you do not. If you put $1,000 into a savings account, the bank will hold onto a small portion of it, maybe $100, and give the other $900 out to other customers as loans. 

Loans
A bank gives loans to people who temporarily need more money than they have. For example, you might need some extra money in the form of a loan to buy a house or start a business.
Banks like to give out loans because when someone borrows money, they have to pay that money back along with interest on the money (it’s the same idea as the interest you’ll receive from your savings account, except this time the customer is paying it).
Remember that $900 the bank is borrowing from your savings account? If the bank gave that $900 as a loan to a customer, at a 10% interest rate, then at the end of the year that customer will owe the bank $990. Now the bank has made a profit from that loan.

Credit
Credit and credit cards are special types of loans. When you use a credit card to buy things, instead of paying for them immediately, each purchase goes onto a big list. At the end of the month, the credit card company adds everything on the list together and sends you a one bill for the total amount of money you spent that month.
The special feature of credit cards is that you do not have to pay back the entire bill right then. Imagine you spent $5,000 last month. When you get the bill, you might only have to use your $1,000 to pay the bill, but you still have all $5,000 worth of stuff you bought.
This functions as a loan because the credit card company has, in a round-about way, loaned you that leftover $4,000. As with a loan, you will still have to pay that $4,000 back eventually, and the credit card company will charge you interest on it. So, in the end, you might owe $4,500 (plus the $1,000 you used to pay the minimum part of the original bill).
It is usually not smart to pay off only small portions of your monthly credit card bill. The longer you wait to pay it off, the more money you will eventually owe to the credit card company. 

Credit Scores and Banks
A credit score keeps track of how often you are not able to pay back your full credit card bill right away, as well as other data related to your credit usage. If you pay your whole bill on time every single month, you will have a very good credit score. This usually means a number around 700 or higher. But if you frequently pay only the minimum requirement, or if you often pay your bills late, you will have a bad credit score. This is usually a number below 600.
Banks are more likely to give out loans to people with very high credit scores. People with high credit scores will probably be more responsible with the loan and are far more likely to pay the loan back on time and with interest. This is why it is important to spend money wisely and be careful how you use credit cards.

The Stock Market
Let’s go back to your $1,000. One other option you have is to invest it in the stock market. The stock market is a place where you can buy stocks, or very small percentages, of big companies like Walmart or Facebook. Each stock can cost anywhere from a few dollars to a few hundred dollars. If the company makes money, each stock-holder gets to share a small percentage of their profit. 
This is how you can earn money on the stock market. Let’s say you use your $1,000 to buy 20 stocks in Facebook, at $50 per stock. You are taking a gamble – if Facebook does well in the next year, the value of those stocks will go up, but if it does poorly, their value will go down. Fortunately for you, at the end of the year, you discover Facebook’s value has increased! Now each stock is worth $55. This means your total is $1,100, and you made $100. But it was still a gamble, because Facebook’s value might have decreased. If each stock dropped to $45, your total would be only $900, and you could have lost $100.
So, what do you think you will do with the $1,000 from your aunt? Now you know you have some options: to put it in a checking account for easy access, or to keep it in a savings account to earn interest. You’ve learned how the bank could use that money to provide loans to other people. You might even choose to use the money your aunt gave you to invest in the stock market. Yes, there are many options and you could choose from any one of them. Just don’t spend it all at once!`
        },
        // Day 13: Starts with 'Obsequious'
        "Obsequious": {
            title: "Entertain Me!",
            content: `The end of World War I (1914–1918) brought the dawning of an era of peace and prosperity. Many Americans’ thoughts turned to more frivolous ideas. The Roaring 20s were filled with new and exciting forms of entertainment. Americans embraced them with gusto.

Radio had been in development since the late 1800s. It was employed by the U.S. military during the war, and it became popular for home use during the 1920s. The first radio networks began broadcasting in the early part of the decade. Soon, radio stations sprang up across the country. The Golden Age of Radio had begun.

Imagine a time before the invention of the personal phone, the iPad, and the personal computer. Now, go back further in history, before big screen movies and television. The radio was Americans’ first source of mechanized entertainment — and Americans enthusiastically embraced the invention.

In the 1920s, entire families gathered around one radio. Together, they listened to broadcasts ranging from comedy and variety shows to news, drama, and sporting events. Children would rush home after school to catch their favorite adventure stories. Young people would roll back the living room rug and dance to the popular music of the day — jazz.

Similar to radio, moving pictures had been in production since the late 1800s, thanks to inventors such as George Eastman and Thomas A. Edison. The earliest films showcased the stars of the day, such as comic actor Charlie Chaplin, “America’s Sweetheart” Mary Pickford, and the dashing Rudolph Valentino. The first moving pictures were silent, although theaters provided orchestras or other music to accompany the action.

The public demand for movies prompted the growth of movie studios in the 1920s. The studios grouped as the “Big Five” owned their own theaters to show their movies. The Big Five included Metro-Goldwyn-Mayer (MGM), Paramount Pictures, RKO Pictures, Warner Brothers, and 20th Century Fox. The “Little Three” — Columbia Pictures, Universal, and United Artists — just made movies. Soon, people were making their way out to southern California to a part of Los Angeles known as Hollywood. They were hoping for a chance to “make it big” in the area’s growing film industry. 

The addition of sound was a major turning point in the production of movies. The first “talkie,” the 1927 movie The Jazz Singer, was actually mostly silent. But it did feature some words and singing by the popular entertainer Al Jolson. The following year, Walt Disney made the first talking animated film, Steamboat Willie. It was the beginning of the long career of one of America’s most beloved characters — Mickey Mouse.

Even as the film industry was thriving, a new idea in home entertainment captured Americans’ interest by the end of the 1920s. Like radio and movies, experiments with television had been performed in the late 1800s. Combining the work and discoveries of many inventors and scientists, the black-and-white picture that the earliest televisions showed was not big or clear. Yet, that “box” eventually would change how Americans viewed entertainment in a way that few living during the Roaring 20s could imagine.`
        },
        // Day 14: Starts with 'Animosity'
        "Animosity": {
            title: "Friendship",
            content: `A dictionary contains a definition of friendship somewhere in the F's between the words "fear" and "Friday." An encyclopedia supplies interesting facts on friendship. But all the definitions and facts do not convey what friendship is really all about. It cannot be understood through words or exaggerations. {{THESIS}}The only way to understand friendship is through experience. It is an experience that involves all the senses.{{/THESIS}}

{{SUPPORT}}Friendship can be seen.{{/SUPPORT}} It is seen in an old couple sitting in the park holding hands. It is the way they touch, a touch as light as a leaf floating in the autumn air, a touch so strong that years of living could not pull them apart. Friendship is seen in a child freely sharing the last cookie. It is the small arm over the shoulder of another as they walk on the playground. Seeing friendship is not casual. It is watching for subtlety, but friendship is there for eyes that can see.

{{SUPPORT}}Friendship can be heard.{{/SUPPORT}} It is heard in the words of two friends who squeezed in lunch together on an extremely busy day. It is the way they talk to each other, not the words. Their tone is unique. Friendship can be heard by those willing to listen.

{{SUPPORT}}Friendship is felt in a touch.{{/SUPPORT}} It is a pat on the back from a teammate, a high five between classes, the slimy, wet kiss from the family dog. It's a touch that reassures that someone is there, someone who cares. The touch communicates more than words or gestures. It is instantly understood and speaks volumes beyond the point of contact, to the heart.

{{SUPPORT}}Friendship has a taste.{{/SUPPORT}} It tastes like homemade bread, the ingredients all measured and planned, then carefully mixed and kneaded, then the quiet waiting as the dough rises. Hot from the oven, the bread tastes more than the sum of its ingredients. There is something else there, perhaps the thoughts of the baker as her hands knead the dough, or her patience as she waits for the dough to rise. Unseen and unmeasured, this is the ingredient that makes the difference. Warm, fresh from the oven with a little butter, the difference you taste is friendship.

{{SUPPORT}}Friendship has a smell.{{/SUPPORT}} It smells like the slightly burnt cookies your brother made especially for you. It smells like your home when stepping into it after being away for a long time. It smells like a sandbox or a sweaty gym. Friendship has a variety of smells. Taken for granted at the moment, they define the memory of friendship.

{{SUPPORT}}Finally, more than the other senses, friendship is an experience of the heart.{{/SUPPORT}} It is the language of the heart—a language without words, vowels, or consonants; a language that, whether seen, felt, heard, or tasted, is understood by the heart. Like air fills the lungs, friendship fills the heart, allowing us to experience the best life has to offer: a friend.`
        },
        // Day 15: Starts with 'Cathartic'
        "Cathartic": {
            title: "Why Students Should Eat Breakfast Every Day",
            content: `A lot of people, especially young people, go through the day without having breakfast. Many people believe that it is not necessary, or they say that they don’t have time for that, and begin their day with no meal. I believe that everyone should eat breakfast before going to their activities. {{THESIS}}The purpose of this paper is to show the importance of breakfast, especially for students.{{/THESIS}}

{{SUPPORT}}The first reason why you should eat breakfast before going to school is for your health.{{/SUPPORT}} When you skip breakfast and go to school, you are looking for a disease because it’s not healthy to have an empty stomach all day long. It’s very important to have a meal and not let your stomach work empty. All you are going to get is gastritis and a lot of problems with your health if you don’t eat breakfast.

{{SUPPORT}}Another reason for eating breakfast is because you need food for to do well in your classes.{{/SUPPORT}} You body and your brain are not going to function as good as they could because you have no energy and no strength. When you try to learn something and have nothing in your stomach, you are going to have a lot of trouble succeeding. A lot of people think that they should not eat because they are going to feel tired, but that’s not true. Breakfast is not a very big meal, and on the contrary, you’re going to feel tired if you don’t have breakfast because you have spent the entire previous night without food.

{{SUPPORT}}The last reason to have breakfast every day is because you can avoid diseases if you eat some breakfast in the morning.{{/SUPPORT}} If you don’t eat, you are going to get sick, and these diseases will have a stronger effect on you because you’re going to get sick easier than people who have breakfast every day.

You have to realize that breakfast is the most important meal of the day, and you cannot skip it without consequences for your health, your school and your defense mechanism. It is better to wake up earlier and have a good breakfast that run to school without eating anything. It is time for you to do something for your health, and eating breakfast is the better way to start your day.`
        },
        // Day 16: Starts with 'Coerce'
        "Coerce": {
            title: "The Importance of Reading and Writing",
            content: `Today science and technology has come to pervade every aspect of our lives. Computer, television and radio have almost replaced the newspaper and letter once dominated our lives. Accordingly, the issue about whether the ability to read and write is more important today may attract our attentions. It is clear that classified views have converged into two: some think reading and writing ability is more important today than in the past, while others deny its importance. {{THESIS}}As I see it, I agree with the former view without any hesitation and my choice is based on a careful consideration of the following reasons.{{/THESIS}}

{{SUPPORT}}The main reason{{/SUPPORT}} which may win most of people's support is that if lack the reading and writing ability, one would be considered as illiterate who has been deprived of the most basic right of human beings in the 21st century. It will be hard for us to imagine how somebody who can't read and write communicates with other people. A case in point is that one of my neighbors who is an old man and cannot read and write may only talk with others face to face. As for making friends by email and search information in newspaper, it is absolutely impossible.

{{SUPPORT}}The second reason{{/SUPPORT}} I would like to point out is that people today who cannot read and write cannot even make a living. Good jobs are difficult to find because of economic depression. Nearly all the jobs require people who can read and write very well. Even if one just plans to be a driver, he must read the road sign and know where he is and where he will go.

{{SUPPORT}}Furthermore{{/SUPPORT}}, the ability to read and write could bring us lots of advantages. Suppose that people who have tired out with a hard week's sweat and effort may get lots of benefits and relief from reading a short novel and broaden his horizon by appreciating a nice poem. Many friends around me would believe reading and writing some effective ways to relax themselves.

People today especially those children may find it easier for them to manipulate the mouse of the computer than to write things down by hand. Watching TV instead of reading may still occupy someone's most leisure time. Yet if all the factors I discussed above are contemplated and we are to minimize the losses and maximize the gains, it will not be hard for us to realize that the ability to read and write is more important today than in the past.`
        },
        // Day 17: Starts with 'Didactic'
        "Didactic": {
            title: "The Importance of Reading and Writing (2)",
            content: `Is the ability to read and write more important today than in the past? Everyone has his answer depending on his experience and life style. Some people think it is true because people need not read and write in past. On the contrary, other people believe there is not big difference between today and yesterday. {{THESIS}}As far as I am concerned, I would like to say that reading and writing are getting more important for our life day by day.{{/THESIS}} In the following discussion, I will provide some reasons and examples to support my viewpoints.

{{SUPPORT}}The main reason{{/SUPPORT}} for my propensity is that knowledge is very important for us today. Without education, it is very hard to find a good job and you will have a hard time to do the work. There is too much new knowledge today. In the past days, people can teach each other by oral, therefore, reading and writing is not as important as now. However, if you enter a company today, your supervisor will only give you a instruction book and tell you begin to study it. Nobody has time to teach you by oral. If you can read and write well, you will get more smoothly at work.

{{SUPPORT}}Communication is another head and chief reason{{/SUPPORT}} I have chosen to put here. Many professions require people to work in team to solve problems and make decisions. Reading and writing can help you to know other colleague are doing, on the other hand, it can also help you to tell other people what you have done and your plan for next step.

To be honest, I cannot deny that some people who cannot read or write also have a nice life today. Nevertheless, for the normal people, the benefits of reading and writing carry much more weight than illiterate, so the conclusion is obvious. For all factors presented above, we can safely draw the conclusion that reading and writing are more important today than in the past. Furthermore, we should pay more attention to improve our ability of reading and writing`
        },
        // Day 18: Starts with 'Disdain'
        "Disdain": {
            title: "Why You Should Not Smoke",
            content: `I am sure that you know that smoking harms your body. Then why do you continue smoking? Maybe you do it because you haven’t really become conscious about all the effects that smoking has. {{THESIS}}There are a lot of reasons why you shouldn’t smoke. Some of them are that smoking affects your health, that you spend a lot of money on cigarettes, and that when you smoke you are not respecting people around you.{{/THESIS}}

{{SUPPORT}}The first reason{{/SUPPORT}} why you shouldn’t smoke is that smoking affects your health. If you smoke, your physical condition will be negatively affected, so it will be very difficult for you to succeed in sports. Also, smoking produces lethal diseases like cancer and reduces the length and quality of your life. Maybe you don’t notice all the physical effects of smoking immediately, but you surely will be sorry one day.

{{SUPPORT}}The second reason{{/SUPPORT}} why you shouldn’t smoke is because of all the money that you spend on it. Maybe you start smoking only when someone offers you a cigarette, but there will be a day when you will feel the need of a cigarette. By this time, you will pay whatever to smoke, and each time you will smoke more, and you will spend more money. All the money you would spend on cigars could have be spent in something better, don’t you think?

{{SUPPORT}}The last reason{{/SUPPORT}} why you shouldn’t smoke is out of respect for the people around you. When you smoke, you not only harm yourself, but you also harm all the people around you. So you mustn’t be selfish; you should at least avoid smoking in front of people who don’t smoke. Also, many people don’t like the cigarette’s smell, so they won’t enjoy your company. Would you like that?

I have said just some reasons of why you shouldn’t smoke, so I hope that now those of you who smoke are able to think a little and try to make a smart decision. In addition to all the reasons I’ve said, I would like you to think about how much you love yourself and then whether you want to continue harming yourself. Think also about all the people who love you, like your family who doesn’t want to see you suffering or sick. If you decide to continue smoking, what a pity. But if you decide to stop smoking, congratulations! Remember that "If you can dream it, you can do it."`
        },
        // Day 19: Starts with 'Enumerate'
        "Enumerate": {
            title: "Why People Should Read for Pleasure",
            content: `In the past years the use of the television and the internet has increased; this situation has caused many people to change their likes and the way that they enjoy their free time. Because of television and the internet, many people spend less time reading, so the purpose for this essay is to present reasons why people should read just for pleasure. {{THESIS}}The reasons that I give you are quite simple: to improve your knowledge, to expand your general culture, to have more fun, to make your imagination fly, to find new ways to express your ideas, and finally to expand your vocabulary.{{/THESIS}}

{{SUPPORT}}The first reason{{/SUPPORT}} that I give you to enjoy reading is that when you read, you can expand your knowledge and also your culture. There are a lot of good books in which you can find history, novels, tragedies, comedies and a variety of other themes. You can see that people who read more often frequently have a bigger knowledge of life and also a bigger perspective of their environment. I think that fact gives them an advantage over all others who do not read frequently.

{{SUPPORT}}The second reason{{/SUPPORT}} to read more often is that through books you can have fun and even travel in your imagination. Children have not yet lost the ability of getting into their dreams, and because of this, in their first years the parents read a lot of tales in which they use their imagination. Adults should try to keep this ability, so we do not forget the importance of the use of the imagination. The imagination also represents a tool that could help you to develop your professional career in a creative way.

{{SUPPORT}}Finally, the third and the most important feature{{/SUPPORT}} that reading offers you is that it does not matter the age that you have, you always could expand your vocabulary and the ways to express your ideas to the others in a simple and correct form. By the time you can improve the kind of books that you read, there are a lot of categories, so you will never stop learning from the pleasure of reading. People who know how to choose a book generally have the capability of choosing a formal book in which they can find formal grammatical structures and obviously a formal vocabulary. All these things allow them to gain greater fluency in their communication.

In conclusion, I recommend that you enjoy reading more often. There are excellent reasons for doing it; you just have to want to expand your knowledge and your culture, to improve your imagination and also your vocabulary. I know that we should evolve with the technology; that is, it is good to know how to navigate in the internet, but we must also not forget the books. Try to choose good books at the beginning, and then I ensure you that you never will stop reading`
        },
        // Day 20: Starts with 'Fallacious'
        "Fallacious": {
            title: "Why We Should Not Compare Ourselves with Others",
            content: `In our culture a lot of times people advise us to compare ourselves with others. "You should be like your father," "You can win; the others aren’t as good as you," "You must be the best of your class," etc., and this is not always the best way of thinking. {{THESIS}}There are many reasons to change this way of thinking and begin to compare ourselves only with ourselves. This is the way it should be, and in this paper I will discuss some of the most important reasons for this.{{/THESIS}}

{{SUPPORT}}The first reason{{/SUPPORT}} to avoid comparing yourself with others is that there will be always someone better than you. It doesn’t mater in which aspect, but it is always true. Therefore, you could feel inferior to others and maybe without a real reason. For example, you can be an incredible architect and the best of your generation, and this can make you feel incredibly good, but if someday someone is better than you are, you could feel sad although you are still the same incredible architect that you were before.

{{SUPPORT}}The second reason{{/SUPPORT}} to elude this kind of comparison is that you will always find someone worse than you, but as opposed to the first reason, this can make you feel better than the others, and this feeling can turn into a horrible pride. For example, if you are the second best student of your class, and one day the very best student leaves the school, you will then be the best one although you are still only as good as you were before.

{{SUPPORT}}These two first reasons{{/SUPPORT}} leads us to a third one: If you want to be better than the others, you don’t need to improve yourself; you only have to make the others look bad. If I want to be the leader of the group, but you are the leader now, what I need to do is to make you look like a traitor or stupid and then I can take your place. Then I will be better than you.

{{SUPPORT}}A fourth reason{{/SUPPORT}} to stop comparing ourselves is that the one who compares him/herself with others is judging, and this doesn’t help us develop as human beings. Nobody knows the internal reality of the other; nobody knows his/her story and his/her most deep intentions, and when we judge it’s harder to accept the others.

{{SUPPORT}}The last but most important reason{{/SUPPORT}} to avoid comparing ourselves with others is that when we do, we can be tempted to copy them, to do the same things, and to act and think like them. The problem with this is that if we copy someone, we will never know who we really are and what we really want, and then we will never grow spiritually.

For all these reasons and because we are unique, we should not compare ourselves with others, only with ourselves. The only comparison pattern that we really have is our consciousness. So, if we use this pattern we will not feel less or more than others; we will not try to make others look bad; we will not judge so much; and we will accept ourselves as we really are. In other words, we will live happier`
        },
        // Day 21: Starts with 'Fervent'
        "Fervent": {
            title: "Why People Should Exercise",
            content: `In the past, I have never been inclined to participate in sports. Honestly, I didn’t like it, but many persons whom I lived with kept telling me everyday how good it was. Since the peer pressure was growing, I decided to go to the gym. {{THESIS}}It wasn’t until then that I could really understand people when they said exercise really helped a person get organized and keep yourself in a healthy physically and mentally.{{/THESIS}}

{{SUPPORT}}For starters{{/SUPPORT}}, when you are a lazy person, it is difficult to take the first step, but it is all a matter of committing yourself to something that will provide you a lot of positive feedback. Once you start doing exercise and observing positive results, you actually enjoy it. It takes a lot of effort and strong will, but it's worth it. The principal thing to do is to participate in an activity you like. If you do you’ll start organizing your day in a way that enables you to do everything you have to, including exercising. You will no longer be a person stressed-out without time to carry on with all your activities.

{{SUPPORT}}Second{{/SUPPORT}}, it is obvious that once you exercise you will have a better condition. You will be healthier in a physical way. It is probable that you will lose weight and your muscles will get stronger and stronger. Your body will feel good, full of energy and it will respond immediately to any action you want to do, any activity that has to be done with high spirits.

{{SUPPORT}}The third reason{{/SUPPORT}} why exercising is good is that it affects you positively in a mental and psychological way. Doing exercise helps you set specific goals which along with strong will can be achieved. When you do that, you are aware of your abilities, accept your weaknesses, and your self-esteem goes up. Any sport distracts you because it helps you not to think about school, friends, problems, among other things. It brings you time to think about yourself and no one else. It helps you keep your mind busy and to avoid dangerous habits like drugs.

Doing exercise is very important to any person of any age. The positive effects of exercising, which I’ve already mentioned, are like a chain. Once you do a sports activity that you like, you get organized; therefore, you start doing things the right way and get enormous benefits which make you feel good as a whole human being. You start living your life happily`
        },
        // Day 22: Starts with 'Hackneyed'
        "Hackneyed": {
            title: "Why You Should Communicate Effectively",
            content: `Establishing and developing effective communication is important in order to be heard and change your environment according to your own thoughts. No one will guess what you want or what you think if you don’t tell them, and nothing is going to change if you do not propose a change. {{THESIS}}The purpose of this essay is to discuss four important skills that will help you communicate effectively. Such skills are not to be afraid of speaking, always defend what you want to say, express exactly what you mean to say, and listen while you are not speaking.{{/THESIS}}

{{SUPPORT}}The first{{/SUPPORT}} aspect to communicate effectively is not to be afraid of speaking. Anytime you need to say something, go ahead and do it. Most of the times people are afraid of speaking because they are not sure if it is the right thing to say and/or the right moment to say it. Be sure, say what you want to say, and do not regret it. If you speak you will be heard and taken into account. You are important so you need to be heard. There is one thing you should not do somehow: Do not say something that will hurt somebody’s feelings. Unless that something has to be said inevitably, say it, but as softly and gently as you can. Never hurt anyone intentionally. Always think twice before saying something. You choose what to say, just be sure to say the right thing at the right time. If you do that, you won’t regret a thing.

{{SUPPORT}}Second,{{/SUPPORT}} if you want to communicate effectively, defend what you say. Once you have said something you can never go backward; you must back it up. The worst thing that you can do when speaking is to hesitate. Hesitance means self-insecurity and this means weakness. The strength of your words will surely determine their effect on the listener. The way that you speak and the content of your speech tell a lot about yourself and your personality. A conversation allows speakers and listeners to get to know each other better. Besides, people will only know what you say; they cannot go any further if you do not let them. It is only by means of intelligence, strength, and security that you will be able to change the world around you. And, it is also by means of intelligence, strength, and security that you will be heard and taken into account.

{{SUPPORT}}The third main aspect{{/SUPPORT}} of effective communication is to express exactly what you mean to say. Pick up the words that will express exactly what you are thinking of. Do not forget that one half of a word belongs to the listener and the other to the speaker. The listener gets his or her own version of what is said. However your job is to express yourself clearly, so that you can avoid misunderstandings. Although, avoiding misunderstandings is a hard task (not impossible), when it is achieved you will be expressing yourself effectively. Everybody will be able to identify exactly what you say, what you think, and what you want. Words are double edged weapons which can be used either to defend or to attack. If you make a good use of them, you will be able to do almost everything.

{{SUPPORT}}The fourth main point{{/SUPPORT}} to effective communication, and probably the most important of all, is the listening part. Listen and do not interrupt when it is no longer your turn to speak. You will surely learn new things from listening to others. If a person is speaking, it’s because she or he wants to be heard. Effective communication is based on both listening and speaking. If communication were based only on speaking, it would be an absolute tyranny. Nevertheless, communication is the means through which you express yourself in order to be heard and change your environment according to your own version of reality. Thus, it would be impossible to change anything if there were no one to listen, learn, and accept new ideas. Listening is a gift, and good listeners are always very appreciated because there are only a few.

Effective communication will help you to express yourself better, allow you to let other people express themselves, and help you to change your environment toward your own thoughts and beliefs. Words inspire no fear. Speak them. Words make you strong. Support them. Words show what you are and what you think. Do not let yourself be misunderstood. Words are valuable. Listen to them!`
        },
    };

    if (KAAT_STATIC_STORIES[firstWord]) {
        const story = KAAT_STATIC_STORIES[firstWord];
        // Create Story Objects
        const essay1: Story = {
            id: `static-essay-${Date.now()}`,
            title: story.title, // Fixed title
            type: "non-fiction",
            content: story.content,
            relatedWordIds: words.map(w => w.id),
            wordsIncluded: []
        };
        // Dummy fiction fallback if needed
        const essay2: Story = {
            id: `static-essay-fic-${Date.now()}`,
            title: story.title,
            type: "fiction",
            content: story.content,
            relatedWordIds: words.map(w => w.id),
            wordsIncluded: []
        };
        return [essay1, essay2];
    }
    // --- End Static Overrides ---

    // Continue with "Mita IC Entrance Exam" Generator for other lessons
    // Target: 11-13 years old, bilingual/returnee.
    // Tone: Clear, natural, sincere. NO complex academic jargon.
    // Structure: Intro -> Reason -> Example -> Reflection -> Conclusion.
    // Length: 200-250 words.

    // To ensure logical flow, we group components by "Topic" rather than random mix-and-match.
    const TOPICS = [
        {
            id: "teamwork",
            type: "Opinion Essay",
            title: "The Power of Teamwork",
            intro: "I believe that working together is the most effective way to solve problems. In school, we often have to complete big projects that are too hard for one person. When we share ideas and help each other, we can achieve much more than we could alone.",
            reason: "Some people prefer to work alone because it is faster, but I think teamwork is better because it allows us to combine our different strengths. I have seen many times how a group can come up with a creative solution that a single person might miss.",
            example: "For example, last year I had to organize a class event with a group of friends. At first, we argued about what to do and nobody wanted to listen. It was very stressful. However, we decided to stop and listen to everyone's ideas one by one. We realized that by combining our ideas, we could create something better than any of us imagined.",
            reflection: "Through this experience, I learned that being a good listener is just as important as being a leader. I realized that my own ideas are not always the best, and that is okay. It changed me from wanting to do everything myself to trusting my team.",
            conclusion: "In the future at Mita International, I want to be a student who supports my classmates. I hope to bring this spirit of cooperation to my new school life and learn from the diverse perspectives of my peers."
        },
        {
            id: "failure",
            type: "Challenge / Failure",
            title: "Learning from Mistakes",
            intro: "I used to get very upset when I made a mistake. I thought it meant I wasn't smart enough. But recently, I changed my mind. I realized that making an error is actually the best way to learn something new.",
            reason: "Growing up, I was often afraid to try new activities because I didn't want to fail. This fear stopped me from improving. Then, one specific experience changed my thinking and taught me that stepping out of my comfort zone is the only way to truly grow.",
            example: "For instance, I once tried to learn a new song on the piano for a recital. It was much harder than I expected, and I kept playing the wrong notes. I wanted to quit. But my teacher told me that every wrong note was a lesson. I practiced every day for weeks, slowly correcting my mistakes.",
            reflection: "This experience made me stronger. I learned that it is okay not to be perfect as long as I keep trying. The satisfaction of finally playing the song correctly was worth all the frustration. I realized that growth happens when we struggle.",
            conclusion: "At my next school, I want to challenge myself without being afraid of failure. I look forward to solving new problems and growing even more in the future, knowing that mistakes are just part of the journey."
        },
        {
            id: "responsibility",
            type: "Responsibility",
            title: "Taking Responsibility",
            intro: "A few years ago, I didn't understand the importance of responsibility. I just did what I was told and didn't think much about the consequences. But after a specific event, I started to see that my actions affect the people around me.",
            reason: "I believe that being responsible means owning your choices, even when no one is watching. It is easy to blame others when things go wrong, but true maturity is admitting your part in the situation.",
            example: "One specific example was when I forgot to feed my neighbor's cat while they were away. I was busy playing games and completely forgot. When they came back, they were disappointed. I felt terrible, not because I got in trouble, but because I had broken their trust.",
            reflection: "From this, I learned to be more honest with myself. I changed my attitude and started taking ownership of my tasks. I realized that trust is hard to build but very easy to break. It taught me to prioritize my duties over my entertainment.",
            conclusion: "I want to continue being a responsible student who contributes to the school community. I know this skill will help me in high school and beyond, and I am ready to take on new responsibilities at Mita International."
        },
        {
            id: "communication",
            type: "Personal Experience",
            title: "The Value of Communication",
            intro: "I remember a time when I had a disagreement with a close friend. It was hard because I didn't want to hurt their feelings, but I also felt misunderstood. This situation taught me that clear communication is essential for any relationship.",
            reason: "Often, conflicts happen not because we are mean, but because we don't explain our feelings clearly. We assume others know what we are thinking. I realized that speaking up is brave, but listening is even braver.",
            example: "For example, my friend and I both wanted to be the leader of a group project. We stopped talking to each other for a few days. Finally, I decided to ask him why he wanted to be leader. He explained his reasons, and I explained mine. We realized we could co-lead the team together.",
            reflection: "I learned that meaningful communication solves conflicts. I changed how I speak to people, listening more than I talk. I realized that being right is less important than preserving a friendship.",
            conclusion: "I want to be a friend who helps build a peaceful atmosphere at school. By understanding these social dynamics, we can build a stronger community. I hope to apply these communication skills to my friendships at Mita."
        },
        {
            id: "diversity",
            type: "School / Society Topic",
            title: "Embracing Differences",
            intro: "The world is full of different people with different ideas. Sometimes it is easy to stay with people who are just like us. However, I believe that interacting with people who are different is the best way to open our minds.",
            reason: "In a global society, we must learn to respect different cultures and perspectives. If we only listen to people who agree with us, we never learn anything new. Diversity is not just about where you are from, but how you think.",
            example: "For instance, I joined a summer camp where I met students from many different countries. At first, it was hard to agree on games because we had different rules. But as we played, we learned to combine our rules into a new, fun game that everyone enjoyed.",
            reflection: "This experience taught me that difference is not a barrier, but a bridge. I became more curious about the world. I learned that there is no single 'right' way to do things, just different ways.",
            conclusion: "I am excited to join an international environment like Mita. I want to be a student who welcomes new ideas and bridges cultures. I believe this open-mindedness is the key to a better future for everyone."
        }
    ];

    // Select random Topic
    // Use valid word data for seed if available, otherwise date
    const seedSrc = (words && words.length > 0) ? words.reduce((acc, w) => acc + w.word.length, 0) : Date.now();
    const topic = TOPICS[seedSrc % TOPICS.length];

    // Construct Essay
    // Structure: Intro -> Reason -> Example -> Reflection -> Conclusion
    // We concatenate them with double newlines.

    let baseContent = `
${topic.intro}

${topic.reason}

${topic.example}

${topic.reflection}

${topic.conclusion}
    `.trim();

    // --- WORD COUNT ENFORCEMENT (200-250 words) ---
    const countWords = (text: string) => text.trim().split(/\s+/).length;
    let currentCount = countWords(baseContent);

    // If the base essay is too short (usually these templates are ~180-200 words), we expand.
    // We add a "Bridge Paragraph" to the Reflection section.

    const BRIDGE_PARAGRAPHS = [
        "Thinking deeply about this, I realize it is not just about a single moment. It is about a pattern of behavior that we build over time. Every small choice we make adds up to create our character, and that character defines our future path.",
        "Moreover, this is not something that happens overnight. It requires consistent effort and checking in with ourselves. When we pay attention to our daily actions, we can start to see how they affect the perception others have of us.",
        "It is also important to consider the impact on our community. Our actions ripple out and touch the lives of our friends and family. By being mindful of this, we can ensure that our contribution is always positive and meaningful.",
        "Furthermore, logical thinking helps us navigate complex situations. Instead of reacting with emotion, we should analyze the facts and make informed decisions. This approach has helped me overcome many obstacles in my school life."
    ];

    let safety = 0;
    while (currentCount < 200 && safety < 3) {
        const bridge = BRIDGE_PARAGRAPHS[(seedSrc + safety) % BRIDGE_PARAGRAPHS.length];
        // Insert bridge before conclusion (last paragraph)
        const parts = baseContent.split('\n\n');
        const conclusion = parts.pop();
        baseContent = [...parts, bridge, conclusion].join('\n\n');
        currentCount = countWords(baseContent);
        safety++;
    }

    // Create Story Objects
    const essay1: Story = {
        id: `mita-essay-${Date.now()}`,
        title: topic.title,
        type: "non-fiction",
        content: baseContent,
        relatedWordIds: words.map(w => w.id), // Still link to lesson for tracking
        wordsIncluded: [] // No highlighting
    };

    const essay2: Story = {
        id: `mita-essay-fic-${Date.now()}`,
        title: topic.title,
        type: "fiction",
        content: baseContent,
        relatedWordIds: words.map(w => w.id),
        wordsIncluded: []
    };

    return [essay1, essay2];
}
