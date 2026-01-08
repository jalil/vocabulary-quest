export interface NewsBrief {
    id: string;
    title: string;
    category: 'Environment' | 'Technology' | 'Society' | 'Economy';
    content: string;
    questions: {
        id: number;
        type: 'fact' | 'opinion' | 'inference';
        question: string;
        options: string[];
        correctIndex: number;
    }[];
}

export const NEWS_BRIEFS: NewsBrief[] = [
    {
        id: "news-01",
        title: "Microplastics in Clouds",
        category: "Environment",
        content: "High above Mount Fuji, scientists have made a startling discovery: clouds containing microplastics. Fog water collected from the summit revealed polymers commonly used in packaging and clothing. Researchers warn that these airborne particles could influence cloud formation and potentially alter the climate. While the full extent of the damage is yet to be understood, this finding suggests that plastic pollution has reached even the most remote corners of our atmosphere. It is imperative that we rethink our reliance on single-use plastics immediately.",
        questions: [
            {
                id: 1,
                type: "fact",
                question: "Where were the microplastics found in this report?",
                options: [
                    "In the drinking water of Tokyo",
                    "In fog water at the summit of Mount Fuji",
                    "In the soil surrounding Mount Fuji",
                    "In the rain falling over Osaka"
                ],
                correctIndex: 1
            },
            {
                id: 2,
                type: "opinion",
                question: "Which statement represents the speaker's opinion?",
                options: [
                    "Fog water contained polymers used in packaging.",
                    "Airborne particles could influence cloud formation.",
                    "Scientists collected water from the summit.",
                    "It is imperative that we rethink our reliance on single-use plastics."
                ],
                correctIndex: 3
            },
            {
                id: 3,
                type: "inference",
                question: "What does this discovery imply about plastic pollution?",
                options: [
                    "It is confined to urban areas.",
                    "It has pervaded environmental systems previously thought unaffected.",
                    "It is primarily a problem for the ocean.",
                    "It has no impact on weather patterns."
                ],
                correctIndex: 1
            }
        ]
    },
    {
        id: "news-02",
        title: "The Rise of Vertical Farming",
        category: "Technology",
        content: "As urban populations swell, feeding the world's cities becomes a logistical puzzle. Enter vertical farming: the practice of growing crops in stacked layers, often in controlled indoor environments. Proponents argue this method uses 95% less water than traditional agriculture and eliminates the need for pesticides. However, critics point out the immense energy required to power the artificial lighting. Despite the energy costs, vertical farming represents a crucial step toward food security in a destabilized climate.",
        questions: [
            {
                id: 1,
                type: "fact",
                question: "According to the report, how much less water does vertical farming use?",
                options: [
                    "50% less",
                    "75% less",
                    "95% less",
                    "100% less"
                ],
                correctIndex: 2
            },
            {
                id: 2,
                type: "fact",
                question: "What is the main criticism of vertical farming mentioned?",
                options: [
                    "The food tastes bland.",
                    "It requires too much energy for lighting.",
                    "It cannot grow fruit.",
                    "It uses too many pesticides."
                ],
                correctIndex: 1
            },
            {
                id: 3,
                type: "opinion",
                question: "What is the speaker's concluding view?",
                options: [
                    "Vertical farming is a waste of resources.",
                    "Traditional agriculture is superior.",
                    "It is a crucial step toward food security.",
                    "Urban populations are shrinking."
                ],
                correctIndex: 2
            }
        ]
    }
];
