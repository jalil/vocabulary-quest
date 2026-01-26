import { Story, VocabularyWord } from "./types";

export const b6_l18_words: VocabularyWord[] = [
    {
        id: "abroad",
        word: "abroad",
        definition: "(adv.) Away from one's own country.",
        exampleSentence: "Mark Twain wrote humorous stories of his travels abroad.",
        imageEmoji: "✈️",
        category: "Grade 6"
    },
    {
        id: "anguish",
        word: "anguish",
        definition: "(n.) Extreme pain of the body or mind. (v.) To suffer extreme doubts or uncertainties.",
        exampleSentence: "I felt anguish when no one turned up for the vote to protect the forest.",
        imageEmoji: "😫",
        category: "Grade 6"
    },
    {
        id: "commence",
        word: "commence",
        definition: "(v.) To start; to begin.",
        exampleSentence: "The school year commences on September 9.",
        imageEmoji: "🏁",
        category: "Grade 6"
    },
    {
        id: "commend",
        word: "commend",
        definition: "(v.) 1. To speak of with approval; to praise. 2. To put in the care of.",
        exampleSentence: "The teacher commended the students who excelled on the test.",
        imageEmoji: "👏",
        category: "Grade 6"
    },
    {
        id: "controversy",
        word: "controversy",
        definition: "(n.) A public dispute that arouses strong feelings. controversial (adj.) Causing controversy.",
        exampleSentence: "The plan to build a new power station in an unspoiled rural area created controversy.",
        imageEmoji: "🗣️",
        category: "Grade 6"
    },
    {
        id: "cordial",
        word: "cordial",
        definition: "(adj.) Sincerely warm and friendly.",
        exampleSentence: "The guests received a cordial welcome at the party.",
        imageEmoji: "🤝",
        category: "Grade 6"
    },
    {
        id: "dissent",
        word: "dissent",
        definition: "(v.) To disagree. (n.) The expression of a difference of opinion.",
        exampleSentence: "Only one senator dissented when the vote was taken.",
        imageEmoji: "👎",
        category: "Grade 6"
    },
    {
        id: "earnest",
        word: "earnest",
        definition: "(adj.) Serious and important; not light and playful.",
        exampleSentence: "The tornado victim's earnest appeal for help could not be ignored.",
        imageEmoji: "😐",
        category: "Grade 6"
    },
    {
        id: "elicit",
        word: "elicit",
        definition: "(v.) To draw out or to cause.",
        exampleSentence: "The fiery speech elicited an angry response from the crowd.",
        imageEmoji: "🎣",
        category: "Grade 6"
    },
    {
        id: "exhilaration",
        word: "exhilaration",
        definition: "(n.) Excitement; a state of elation. exhilarating (adj.) Exciting; stimulating. exhilarate (v.) To excite; to cause to feel lively.",
        exampleSentence: "The baseball fans showed their exhilaration by running onto the field and carrying the players off on their shoulders.",
        imageEmoji: "🎢",
        category: "Grade 6"
    },
    {
        id: "genuine",
        word: "genuine",
        definition: "(adj.) 1. Real; being what it seems to be. 2. Honest; sincere.",
        exampleSentence: "This is a genuine diamond, not a fake.",
        imageEmoji: "💎",
        category: "Grade 6"
    },
    {
        id: "hoax",
        word: "hoax",
        definition: "(n.) An act intended to fool or deceive others. (v.) To fool; to play a trick on.",
        exampleSentence: "We knew the player's injury was a hoax when he jumped to his feet and laughed at us.",
        imageEmoji: "🃏",
        category: "Grade 6"
    },
    {
        id: "manipulate",
        word: "manipulate",
        definition: "(v.) 1. To operate using the hands, especially in a skillful way. 2. To control in a secret or unfair way.",
        exampleSentence: "The deft players manipulated the controls of the video game with incredible speed.",
        imageEmoji: "🎮",
        category: "Grade 6"
    },
    {
        id: "recount",
        word: "recount",
        definition: "(v.) To give a detailed account of. (n.) A second count, as of the vote in an election.",
        exampleSentence: "The judge asked the witness to recount what happened just before the accident.",
        imageEmoji: "📖",
        category: "Grade 6"
    },
    {
        id: "skeptic",
        word: "skeptic",
        definition: "(n.) A person who is not easy to convince unless positive proof is offered. skeptical (adj.) Showing doubt or an unwillingness to believe. skepticism (n.) An attitude of doubt or disbelief.",
        exampleSentence: "When it comes to astrology, my cousin remains a skeptic.",
        imageEmoji: "🤨",
        category: "Grade 6"
    }
];

export const b6_l18_story_1: Story = {
    id: "b6-l18-s1",
    title: "18A Using Words in Context",
    type: "exercise",
    content: `Read the following sentences. If the word in bold is used correctly, write C on the line. If the word is used incorrectly, write I on the line.`,
    wordsIncluded: b6_l18_words.map(w => w.id),
    questions: [
        {
            id: "18a-q1",
            type: "multiple-choice",
            question: "1. manipulate",
            options: [
                "(a) The jury was **manipulated** into voting 'guilty' by the treacherous lawyer.",
                "(b) The clown **manipulated** the balloons into all kinds of animal shapes.",
                "(c) Six **manipulated** by five equals thirty.",
                "(d) American bison once **manipulated** the prairie in huge herds."
            ],
            correctAnswers: [
                "(a) The jury was **manipulated** into voting 'guilty' by the treacherous lawyer.",
                "(b) The clown **manipulated** the balloons into all kinds of animal shapes."
            ]
        },
        {
            id: "18a-q2",
            type: "multiple-choice",
            question: "2. recount",
            options: [
                "(a) A **recount** changed the result of the voting.",
                "(b) Yoshiko **recounted** to her mother her reasons for staying home from school.",
                "(c) This month we learned to **recount** the names of all the U.S. presidents in order.",
                "(d) I told my uncle I was **recounting** on his help with my homework."
            ],
            correctAnswers: [
                "(a) A **recount** changed the result of the voting.",
                "(b) Yoshiko **recounted** to her mother her reasons for staying home from school.",
                "(c) This month we learned to **recount** the names of all the U.S. presidents in order."
            ]
        },
        {
            id: "18a-q3",
            type: "multiple-choice",
            question: "3. earnest",
            options: [
                "(a) The candidate's **earnest** speech convinced many people to vote for her.",
                "(b) We made an **earnest** effort to win the game, but we failed.",
                "(c) We were too **earnest** to sleep, so we drank some hot chocolate.",
                "(d) I never know when Andreas is joking and when he is being **earnest**."
            ],
            correctAnswers: [
                "(a) The candidate's **earnest** speech convinced many people to vote for her.",
                "(b) We made an **earnest** effort to win the game, but we failed.",
                "(d) I never know when Andreas is joking and when he is being **earnest**."
            ]
        },
        {
            id: "18a-q4",
            type: "multiple-choice",
            question: "4. dissent",
            options: [
                "(a) Their **dissent** soon turned into a loud argument.",
                "(b) I **dissented** deeper and deeper into the cave.",
                "(c) Parents expressed their **dissent** at the meeting by raising their hands.",
                "(d) Two of us **dissented** to the library on our bikes."
            ],
            correctAnswers: [
                "(a) Their **dissent** soon turned into a loud argument.",
                "(c) Parents expressed their **dissent** at the meeting by raising their hands."
            ]
        },
        {
            id: "18a-q5",
            type: "multiple-choice",
            question: "5. hoax",
            options: [
                "(a) Mehar wrote a note on a piece of colored **hoax**.",
                "(b) We were **hoaxed** into thinking we were going to be on TV.",
                "(c) We discovered the **hoax** and told the teacher.",
                "(d) We made our way across fields of **hoax** to the top of the hill."
            ],
            correctAnswers: [
                "(b) We were **hoaxed** into thinking we were going to be on TV.",
                "(c) We discovered the **hoax** and told the teacher."
            ]
        },
        {
            id: "18a-q6",
            type: "multiple-choice",
            question: "6. cordial",
            options: [
                "(a) We gave **cordial** smiles to everyone as they arrived.",
                "(b) The **cordial** holding the rod snapped, and we lost the fish.",
                "(c) Most of the entries in her journal were **cordial** thoughts about her friends.",
                "(d) Britain and France maintained **cordial** relations during this period."
            ],
            correctAnswers: [
                "(a) We gave **cordial** smiles to everyone as they arrived.",
                "(d) Britain and France maintained **cordial** relations during this period."
            ]
        },
        {
            id: "18a-q7",
            type: "multiple-choice",
            question: "7. elicit",
            options: [
                "(a) My joke **elicited** laughter from my friend.",
                "(b) The magician **elicited** an apple from a top hat.",
                "(c) The farmers around here **elicit** mostly sheep.",
                "(d) Try to **elicit** intelligent questions when you talk to a group."
            ],
            correctAnswers: [
                "(a) My joke **elicited** laughter from my friend.",
                "(d) Try to **elicit** intelligent questions when you talk to a group."
            ]
        },
        {
            id: "18a-q8",
            type: "multiple-choice",
            question: "8. genuine",
            options: [
                "(a) If the signature is **genuine**, this old letter could be worth a lot of money.",
                "(b) If his offer of help had been **genuine**, I would have accepted.",
                "(c) A **genuine** Stradivarius violin sells for tens of millions of dollars.",
                "(d) I was not **genuine** to his plans."
            ],
            correctAnswers: [
                "(a) If the signature is **genuine**, this old letter could be worth a lot of money.",
                "(b) If his offer of help had been **genuine**, I would have accepted.",
                "(c) A **genuine** Stradivarius violin sells for tens of millions of dollars."
            ]
        },
        {
            id: "18a-q9",
            type: "multiple-choice",
            question: "9. exhilarating",
            options: [
                "(a) Snowboarding for the first time was **exhilarating**.",
                "(b) My bike **exhilarated** down the hill.",
                "(c) I **exhilarated** the air from my lungs.",
                "(d) The **exhilaration** of the crowd could be heard from the parking lot."
            ],
            correctAnswers: [
                "(a) Snowboarding for the first time was **exhilarating**.",
                "(d) The **exhilaration** of the crowd could be heard from the parking lot."
            ]
        },
        {
            id: "18a-q10",
            type: "multiple-choice",
            question: "10. skeptical",
            options: [
                "(a) I was **skeptical** when Zayid said he could get us in for free.",
                "(b) The judges were **skeptical** that Maya could beat the record.",
                "(c) There was a lot of **skepticism** about whether the snowstorm would turn into a blizzard.",
                "(d) I keep a spare **skeptical** just in case I run out."
            ],
            correctAnswers: [
                "(a) I was **skeptical** when Zayid said he could get us in for free.",
                "(b) The judges were **skeptical** that Maya could beat the record.",
                "(c) There was a lot of **skepticism** about whether the snowstorm would turn into a blizzard."
            ]
        }
    ]
};

export const b6_l18_story_2: Story = {
    id: "b6-l18-s2",
    title: "18B Making Connections",
    type: "exercise",
    content: `Circle the letter next to each correct answer. There may be more than one correct answer.`,
    wordsIncluded: b6_l18_words.map(w => w.id),
    questions: [
        {
            id: "18b-q1",
            type: "multiple-choice",
            question: "1. Which word goes with *give details about*?",
            options: ["(a) manipulate", "(b) obscure", "(c) recount", "(d) dissent"],
            correctAnswer: "(c) recount"
        },
        {
            id: "18b-q2",
            type: "multiple-choice",
            question: "2. Which word goes with *sincere*?",
            options: ["(a) earnest", "(b) cordial", "(c) vast", "(d) genuine"],
            correctAnswer: "(a) earnest"
        },
        {
            id: "18b-q3",
            type: "multiple-choice",
            question: "3. Which word goes with *fool*?",
            options: ["(a) hoax", "(b) commend", "(c) deceive", "(d) collide"],
            correctAnswer: "(a) hoax"
        },
        {
            id: "18b-q4",
            type: "multiple-choice",
            question: "4. Which word goes with *excite*?",
            options: ["(a) commend", "(b) exhilarate", "(c) manipulate", "(d) rouse"],
            correctAnswer: "(b) exhilarate"
        },
        {
            id: "18b-q5",
            type: "multiple-choice",
            question: "5. Which word goes with *friendly*?",
            options: ["(a) affectionate", "(b) skeptical", "(c) cordial", "(d) earnest"],
            correctAnswer: "(c) cordial"
        },
        {
            id: "18b-q6",
            type: "multiple-choice",
            question: "6. Which word goes with *dispute*?",
            options: ["(a) commence", "(b) hoax", "(c) catastrophe", "(d) controversy"],
            correctAnswer: "(d) controversy"
        },
        {
            id: "18b-q7",
            type: "multiple-choice",
            question: "7. Which word goes with *start*?",
            options: ["(a) commend", "(b) originate", "(c) recount", "(d) commence"],
            correctAnswer: "(d) commence"
        },
        {
            id: "18b-q8",
            type: "multiple-choice",
            question: "8. Which word goes with *approve*?",
            options: ["(a) manipulate", "(b) commend", "(c) jest", "(d) applaud"],
            correctAnswer: "(b) commend"
        },
        {
            id: "18b-q9",
            type: "multiple-choice",
            question: "9. Which word goes with *pain*?",
            options: ["(a) anguish", "(b) controversy", "(c) priority", "(d) torment"],
            correctAnswer: "(a) anguish"
        },
        {
            id: "18b-q10",
            type: "multiple-choice",
            question: "10. Which word goes with *far from home*?",
            options: ["(a) abroad", "(b) jeopardy", "(c) predicament", "(d) dissent"],
            correctAnswer: "(a) abroad"
        }
    ]
};

export const b6_l18_story_3: Story = {
    id: "b6-l18-s3",
    title: "18C Determining Meanings",
    type: "exercise",
    content: `Circle the letter next to each answer choice that correctly completes the sentence. There may be more than one correct answer.`,
    wordsIncluded: b6_l18_words.map(w => w.id),
    questions: [
        {
            id: "18c-q1",
            type: "multiple-choice",
            question: "1. The **skeptical**",
            options: [
                "(a) person is always optimistic about the future.",
                "(b) piece of toast tastes great with butter and jam.",
                "(c) voice in your head will tell you that lottery tickets are a waste of money.",
                "(d) mother was surprised when her son actually cleaned his room."
            ],
            correctAnswers: [
                "(c) voice in your head will tell you that lottery tickets are a waste of money.",
                "(d) mother was surprised when her son actually cleaned his room."
            ]
        },
        {
            id: "18c-q2",
            type: "multiple-choice",
            question: "2. I am **commencing**",
            options: [
                "(a) dancing lessons on Tuesday.",
                "(b) eating lunch after I wash my hands.",
                "(c) the engine by pressing this button.",
                "(d) that you weren't too happy to see me."
            ],
            correctAnswers: [
                "(a) dancing lessons on Tuesday.",
                "(b) eating lunch after I wash my hands.",
                "(c) the engine by pressing this button."
            ]
        },
        {
            id: "18c-q3",
            type: "multiple-choice",
            question: "3. The **controversial**",
            options: [
                "(a) book was in the news almost every day this week.",
                "(b) rule was put into effect on March 1.",
                "(c) air was bitterly cold.",
                "(d) skin on my right hand is always dry."
            ],
            correctAnswers: [
                "(a) book was in the news almost every day this week.",
                "(b) rule was put into effect on March 1."
            ]
        },
        {
            id: "18c-q4",
            type: "multiple-choice",
            question: "4. The **manipulation**",
            options: [
                "(a) in a flower is what attracts bees.",
                "(b) of a person is done by betraying his or her trust.",
                "(c) on the floor was so shiny you could see your reflection.",
                "(d) of puppets can be achieved by pulling on their strings."
            ],
            correctAnswers: [
                "(b) of a person is done by betraying his or her trust.",
                "(d) of puppets can be achieved by pulling on their strings."
            ]
        },
        {
            id: "18c-q5",
            type: "multiple-choice",
            question: "5. Martina **elicited**",
            options: [
                "(a) juice from the lemons by squeezing them.",
                "(b) the grapes into raisins by drying them.",
                "(c) information from various sources by going online.",
                "(d) praise from her parents when she made the volleyball team."
            ],
            correctAnswers: [
                "(a) juice from the lemons by squeezing them.",
                "(c) information from various sources by going online.",
                "(d) praise from her parents when she made the volleyball team."
            ]
        },
        {
            id: "18c-q6",
            type: "multiple-choice",
            question: "6. We **anguished**",
            options: [
                "(a) over silly things we shouldn't have worried about.",
                "(b) the tomatoes and carrots and added them to the soup.",
                "(c) the guest room so that everything was nice for Aunt Celia.",
                "(d) over whether we should mention his lost dog to him."
            ],
            correctAnswers: [
                "(a) over silly things we shouldn't have worried about.",
                "(d) over whether we should mention his lost dog to him."
            ]
        },
        {
            id: "18c-q7",
            type: "multiple-choice",
            question: "7. I **recounted**",
            options: [
                "(a) onto the bed and slept for twelve hours.",
                "(b) to my dad what had happened to the broken TV.",
                "(c) the story to anyone who would listen.",
                "(d) the ball all the way down the hill."
            ],
            correctAnswers: [
                "(b) to my dad what had happened to the broken TV.",
                "(c) the story to anyone who would listen."
            ]
        },
        {
            id: "18c-q8",
            type: "multiple-choice",
            question: "8. The **hoaxes**",
            options: [
                "(a) started as a joke and then got out of hand.",
                "(b) involved a large number of people.",
                "(c) had been nailed to the wall to hang the painting.",
                "(d) were cruel, and hurt people's feelings."
            ],
            correctAnswers: [
                "(a) started as a joke and then got out of hand.",
                "(b) involved a large number of people.",
                "(d) were cruel, and hurt people's feelings."
            ]
        }
    ]
};

export const b6_l18_story_4: Story = {
    id: "b6-l18-s4",
    title: "18D Completing Sentences",
    type: "exercise",
    content: `Complete the sentences to demonstrate your knowledge of the words in bold.`,
    wordsIncluded: b6_l18_words.map(w => w.id),
    questions: [
        {
            id: "18d-q1",
            type: "multiple-choice",
            question: "1. I think it would be **exhilarating** to",
            options: [
                "(a) ski down a steep mountain.",
                "(b) sleep all day long.",
                "(c) wait in line at the post office.",
                "(d) tie my shoes."
            ],
            correctAnswer: "(a) ski down a steep mountain."
        },
        {
            id: "18d-q2",
            type: "multiple-choice",
            question: "2. Something that fills me with **skepticism** is",
            options: [
                "(a) stories about seeing UFOs.",
                "(b) the fact that the sun rises in the east.",
                "(c) knowing my name.",
                "(d) drinking water when I'm thirsty."
            ],
            correctAnswer: "(a) stories about seeing UFOs."
        },
        {
            id: "18d-q3",
            type: "multiple-choice",
            question: "3. Doctors should be **commended** for",
            options: [
                "(a) their dedication to helping sick people.",
                "(b) forgetting to wash their hands.",
                "(c) sleeping during surgery.",
                "(d) losing their patients' files."
            ],
            correctAnswer: "(a) their dedication to helping sick people."
        },
        {
            id: "18d-q4",
            type: "multiple-choice",
            question: "4. To **dissent** means to",
            options: [
                "(a) disagree or have a different opinion.",
                "(b) agree completely.",
                "(c) say nothing at all.",
                "(d) walk away quietly."
            ],
            correctAnswer: "(a) disagree or have a different opinion."
        },
        {
            id: "18d-q5",
            type: "multiple-choice",
            question: "5. If I were going **abroad**, I would go to",
            options: [
                "(a) France to visit Paris.",
                "(b) the grocery store down the street.",
                "(c) my kitchen.",
                "(d) the living room."
            ],
            correctAnswer: "(a) France to visit Paris."
        },
        {
            id: "18d-q6",
            type: "multiple-choice",
            question: "6. A **controversial** issue is something that",
            options: [
                "(a) people have strong and different opinions about.",
                "(b) everyone agrees on essential facts.",
                "(c) no one cares about.",
                "(d) is very simple to understand."
            ],
            correctAnswer: "(a) people have strong and different opinions about."
        },
        {
            id: "18d-q7",
            type: "multiple-choice",
            question: "7. I would **commence** planning for a picnic by",
            options: [
                "(a) checking the weather forecast.",
                "(b) cleaning up after the picnic is over.",
                "(c) going to sleep.",
                "(d) eating the leftovers."
            ],
            correctAnswer: "(a) checking the weather forecast."
        },
        {
            id: "18d-q8",
            type: "multiple-choice",
            question: "8. If I'm asked to **recount** a story, that means I",
            options: [
                "(a) tell it again or give a detailed account of it.",
                "(b) count the number of words in it.",
                "(c) forget what happened.",
                "(d) write it backwards."
            ],
            correctAnswer: "(a) tell it again or give a detailed account of it."
        },
        {
            id: "18d-q9",
            type: "multiple-choice",
            question: "9. I would give a **cordial** welcome to",
            options: [
                "(a) new neighbors moving in next door.",
                "(b) a swarm of mosquitoes.",
                "(c) a burglar breaking in.",
                "(d) a cold flu virus."
            ],
            correctAnswer: "(a) new neighbors moving in next door."
        },
        {
            id: "18d-q10",
            type: "multiple-choice",
            question: "10. A **hoax** is",
            options: [
                "(a) a trick or act intended to deceive others.",
                "(b) a type of garden tool.",
                "(c) a very honest mistake.",
                "(d) a serious scientific experiment."
            ],
            correctAnswer: "(a) a trick or act intended to deceive others."
        }
    ]
};

export const b6_l18_story_passage: Story = {
    id: "b6-l18-passage",
    title: "Reading Passage: Journey to the Soviet Union",
    type: "non-fiction",
    content: `
A war without battles! What kind of war is that? Answer: the Cold War. It was fought between the Soviet Union and the United States, and it lasted from 1945 to 1990. Each side had more than enough weapons to destroy the other if the Cold War turned hot. Fear was in the air. People built bomb shelters in their homes, and at school children were taught what to do if the country came under attack. Most people accepted that this was just the way it was. Not Samantha Smith, a fifth grader from Maine, who **anguished** over the possibility of nuclear war and decided to do something about it. In 1983, she wrote a letter to the leader of the Soviet Union containing an **earnest** plea for the two superpowers to settle their differences peacefully.

She waited several months before her letter **elicited** a reply, which came in the form of a mysterious phone call. A man speaking with a strong Russian accent thanked her for her letter and told her she would be receiving a written reply within a few days. Samantha was not sure that the phone call was **genuine**; she thought that it might be a **hoax** by one of her father's friends. Although her father denied it, Samantha remained **skeptical**. Her doubts were ended, however, when an envelope from the Soviet embassy in Washington was delivered to her home in Maine. Inside it was a **cordial** letter from Yuri Andropov, the Soviet leader, who thanked her for taking the trouble to write and expressed a concern similar to her own about the threat of nuclear war. The letter also included an invitation to Samantha and her parents to visit the Soviet Union.

Samantha found herself famous overnight. She appeared on national television, and she was written about in magazines. Not everyone agreed that her visit to the Soviet Union would be desirable, though. People nationwide were soon discussing the issue. Those who supported her **commended** her for what she was doing and praised her as an example to young people everywhere. Those who **dissented** from this view believed that she should decline the invitation and stay home; they thought that she was being **manipulated** by the Communists, who would use her visit for their own purposes. Samantha ignored the **controversy** swirling about her, and in July 1983, accompanied by her parents, she went to the Soviet Union.

She had never been **abroad** before, and she found the experience **exhilarating**. On her return she wrote a book called *Journey to the Soviet Union*, in which she **recounts** everything that happened during her visit. She was also invited to costar in a television series. Her life at that point must have seemed like a fairy tale, and all because of a letter she had written.

With the collapse of communism in the Soviet Union in 1991, the threat of nuclear war was greatly reduced. Unfortunately, Samantha did not live to see this event. In 1985, shortly after she had **commenced** filming the new television series, she and her father died in a plane crash. During her short life, Samantha accomplished a great deal. She showed that if a young person, even one in elementary school, is willing to make her voice heard, the world will sometimes listen.
    `,
    wordsIncluded: b6_l18_words.map(w => w.id),
    questions: [
        {
            id: "18p-q1",
            type: "multiple-choice",
            question: "1. Was Samantha's visit to the Soviet Union her first trip out of the United States?",
            options: [
                "Yes, she had never been **abroad** before.",
                "No, she had been to France.",
                "Yes, but she didn't like it.",
                "No, she traveled often."
            ],
            correctAnswer: "Yes, she had never been **abroad** before."
        },
        {
            id: "18p-q2",
            type: "multiple-choice",
            question: "2. How does the passage make clear that Samantha was a concerned citizen?",
            options: [
                "She **anguished** over nuclear war and wrote to the Soviet leader.",
                "She built a bomb shelter.",
                "She joined the army.",
                "She stopped going to school."
            ],
            correctAnswer: "She **anguished** over nuclear war and wrote to the Soviet leader."
        },
        {
            id: "18p-q3",
            type: "multiple-choice",
            question: "3. Do you think Samantha is to be **commended** for writing the letter? Why or why not?",
            options: [
                "Yes, because she tried to make peace.",
                "No, she should have stayed quiet.",
                "Yes, because she got famous.",
                "No, it was a waste of time."
            ],
            correctAnswer: "Yes, because she tried to make peace."
        },
        {
            id: "18p-q4",
            type: "multiple-choice",
            question: "4. Why do you think the Soviet leaders took Samantha's letter seriously?",
            options: [
                "It was an **earnest** plea for peace.",
                "It was written in Russian.",
                "It was a joke.",
                "They were afraid of her."
            ],
            correctAnswer: "It was an **earnest** plea for peace."
        },
        {
            id: "18p-q5",
            type: "multiple-choice",
            question: "5. What does Samantha's show of **skepticism** tell you about her?",
            options: [
                "She didn't easily believe things without proof (like the phone call).",
                "She believed everything she heard.",
                "She was very trusting.",
                "She didn't like phone calls."
            ],
            correctAnswer: "She didn't easily believe things without proof (like the phone call)."
        },
        {
            id: "18p-q6",
            type: "multiple-choice",
            question: "6. What is the meaning of **genuine** as it is used in the passage?",
            options: [
                "Real; not a fake (referring to the phone call).",
                "Friendly.",
                "Scary.",
                "Loud."
            ],
            correctAnswer: "Real; not a fake (referring to the phone call)."
        },
        {
            id: "18p-q7",
            type: "multiple-choice",
            question: "7. When did Samantha realize that the phone call she had received was not a **hoax**?",
            options: [
                "When she received the letter from the Soviet embassy.",
                "When her father told her.",
                "When she saw it on TV.",
                "She never realized it."
            ],
            correctAnswer: "When she received the letter from the Soviet embassy."
        },
        {
            id: "18p-q8",
            type: "multiple-choice",
            question: "8. What kind of response to her letter did Samantha receive?",
            options: [
                "A **cordial** letter inviting her to visit.",
                "An angry letter.",
                "No response.",
                "A gift basket."
            ],
            correctAnswer: "A **cordial** letter inviting her to visit."
        },
        {
            id: "18p-q9",
            type: "multiple-choice",
            question: "9. Why did Samantha's letter **elicit** so much attention?",
            options: [
                "Because a young girl was writing to a world leader about peace.",
                "Because it was written in gold ink.",
                "Because she was already famous.",
                "Because she sent money."
            ],
            correctAnswer: "Because a young girl was writing to a world leader about peace."
        },
        {
            id: "18p-q10",
            type: "multiple-choice",
            question: "10. Why was Samantha's planned trip **controversial**?",
            options: [
                "Some people **dissented** and thought she was being used.",
                "Everyone loved the idea.",
                "It was too expensive.",
                "It was during the school year."
            ],
            correctAnswer: "Some people **dissented** and thought she was being used."
        },
        {
            id: "18p-q11",
            type: "multiple-choice",
            question: "11. What is the meaning of **manipulated** as it is used in the passage?",
            options: [
                "Controlled in a secret or unfair way.",
                "Moved by hand.",
                "Helped kindly.",
                "Ignored."
            ],
            correctAnswer: "Controlled in a secret or unfair way."
        },
        {
            id: "18p-q12",
            type: "multiple-choice",
            question: "12. Did everyone agree that Samantha's trip to the Soviet Union was a good idea? Why or why not?",
            options: [
                "No, there was **controversy** and some **dissented**.",
                "Yes, everyone agreed.",
                "No, because she was too young.",
                "Yes, because they wanted to go too."
            ],
            correctAnswer: "No, there was **controversy** and some **dissented**."
        },
        {
            id: "18p-q13",
            type: "multiple-choice",
            question: "13. When did Samantha's trip to the Soviet Union **commence**?",
            options: [
                "In July 1983.",
                "In 1945.",
                "In 1991.",
                "In 1985."
            ],
            correctAnswer: "In July 1983."
        },
        {
            id: "18p-q14",
            type: "multiple-choice",
            question: "14. What is the meaning of **recounts** as it is used in the passage?",
            options: [
                "Tells in detail.",
                "Counts again.",
                "Remembers.",
                "Invents."
            ],
            correctAnswer: "Tells in detail."
        },
        {
            id: "18p-q15",
            type: "multiple-choice",
            question: "15. How do you think Samantha must have felt about appearing in a television series?",
            options: [
                "She likely found it **exhilarating**.",
                "She was bored.",
                "She was angry.",
                "She was scared."
            ],
            correctAnswer: "She likely found it **exhilarating**."
        }
    ]
};

export const b6_l18_story_facts: Story = {
    id: "b6-l18-facts",
    title: "Fun & Fascinating FACTS",
    type: "non-fiction",
    content: `
* The Latin word for *heart* is *cor* and forms the root of the adjective **cordial**. The heart was once believed to be the place where the emotions were located, and this is still reflected in our language. If someone speaks "from the heart," that person is being honest and sincere. Similarly, a **cordial** greeting is one that is *heartwarming*.

* Don't confuse the verb **elicit**, which means "to draw out" or "to cause," with the adjective *illicit*, which means "illegal" or "forbidden." (A person selling illegal goods is engaging in an *illicit* activity.)

* An antonym of **dissent** is *assent*. To **dissent** from a decision that is made is to express one's disagreement with it. To *assent* to a decision is to agree with it and to voice one's approval.
    `,
    wordsIncluded: ["cordial", "elicit", "dissent"],
    questions: []
};
