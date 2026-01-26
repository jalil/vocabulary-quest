"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiddleQuestion, REVIEW_QUESTIONS, REVIEW_RIDDLE_QUESTION, REVIEW_RIDDLE_ANSWER } from "@/lib/review_data";
import confetti from "canvas-confetti";
import { CheckCircle, ArrowRight, Key } from "lucide-react";

interface RiddleRunProps {
    onComplete: () => void;
}

export default function RiddleRun({ onComplete }: RiddleRunProps) {
    // Map the 44 questions to the answer letters (which are fewer)
    // We want to distribute the reveal so the last letter comes near the end.
    // Answer: "THEY LOOK AT THE FLAG" (21 chars including spaces)
    const ANSWER_TEXT = REVIEW_RIDDLE_ANSWER;
    const TOTAL_QUESTIONS = REVIEW_QUESTIONS.length; // 44
    const CHARS_TO_REVEAL = ANSWER_TEXT.split('').filter(c => c !== ' ').length; // 17 letters

    // Distribute 17 keys across 44 questions.
    // We create a Set of indices that act as "Key Questions".
    // We ensure they are roughly evenly spaced.
    // KEY_INDICES will be a Set of numbers representing the question index (0 to 43)
    const KEY_INDICES = new Set(
        Array.from({ length: CHARS_TO_REVEAL }, (_, i) =>
            Math.floor((i + 1) * (TOTAL_QUESTIONS / (CHARS_TO_REVEAL + 1)))
        )
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showTransition, setShowTransition] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    // Is this a key question?
    const isKeyQuestion = KEY_INDICES.has(currentIndex);

    const checkAnswer = (option: string) => {
        if (showTransition) return;

        const currentQ = REVIEW_QUESTIONS[currentIndex];
        setSelectedOption(option);

        if (option === currentQ.answer) {
            setIsCorrect(true);
            new Audio("/sounds/correct.mp3").play().catch(() => { });

            if (isKeyQuestion) {
                // Find which letter this corresponds to
                // Count how many keys were BEFORE or AT this index in our generated set
                const sortedKeys = Array.from(KEY_INDICES).sort((a, b) => a - b);
                const distinctKeyRank = sortedKeys.indexOf(currentIndex);

                // Get the (distinctKeyRank)-th non-space letter from answer
                const nonSpaceChars = ANSWER_TEXT.replace(/ /g, '').split('');
                const letter = nonSpaceChars[distinctKeyRank];

                setTimeout(() => {
                    setCollectedLetters(prev => [...prev, letter]);
                    setShowTransition(true);
                }, 800);
            } else {
                // Just move next after delay
                setTimeout(() => {
                    nextQuestion();
                }, 1000);
            }
        } else {
            setIsCorrect(false);
            new Audio("/sounds/incorrect.mp3").play().catch(() => { });
        }
    };

    const nextQuestion = () => {
        if (currentIndex < REVIEW_QUESTIONS.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowTransition(false);
        } else {
            setGameWon(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    // Generate distractors dynamically for each question
    const getOptions = (question: RiddleQuestion) => {
        // In a real app we'd seed this to be stable, but random is fine for now
        // We pick 3 random words from the full set excluding the answer
        const allAnswers = REVIEW_QUESTIONS.map(q => q.answer);
        const distractors = allAnswers
            .filter(a => a !== question.answer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        return [...distractors, question.answer].sort();
    };

    const currentQuestion = REVIEW_QUESTIONS[currentIndex];
    // Memoize options so they don't shuffle on re-render
    const [currentOptions, setCurrentOptions] = useState<string[]>([]);

    useEffect(() => {
        if (currentQuestion) {
            setCurrentOptions(getOptions(currentQuestion));
        }
    }, [currentIndex]);

    if (gameWon) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in fade-in duration-700">
                <div className="text-6xl mb-4">🎉🕵️‍♂️📬</div>
                <h2 className="text-4xl font-black text-slate-800">Mystery Solved!</h2>
                <div className="bg-amber-100 p-8 rounded-3xl border-4 border-amber-300 shadow-xl max-w-2xl transform rotate-1">
                    <p className="text-slate-500 font-bold uppercase tracking-widest mb-4">The Riddle Answer</p>
                    <p className="text-4xl md:text-5xl font-black text-amber-600 font-mono tracking-wider leading-relaxed">
                        {REVIEW_RIDDLE_ANSWER}
                    </p>
                </div>
                <p className="text-slate-600 text-lg max-w-md">
                    You've successfully decoded all the clues and mastered the vocabulary from Lessons 1-4!
                </p>
                <button
                    onClick={onComplete}
                    className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all"
                >
                    Finish Review Day
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header / HUD */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg flex justify-between items-center sticky top-4 z-20">
                <div>
                    <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Riddle Run</div>
                    <div className="text-xl font-semibold opacity-90">{REVIEW_RIDDLE_QUESTION}</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <div className="text-xs text-slate-400 font-bold">KEYS FOUND</div>
                        <div className="text-2xl font-mono text-amber-400 font-black">
                            {collectedLetters.length} <span className="text-slate-600">/ {CHARS_TO_REVEAL}</span>
                        </div>
                    </div>
                    <Key className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
            </div>

            {/* Answer Strip (The "Hidden Message" building up) */}
            <div className="flex flex-wrap justify-center gap-2 p-4 min-h-[80px]">
                {REVIEW_RIDDLE_ANSWER.split('').map((char, idx) => (
                    <div
                        key={idx}
                        className={`w-8 h-10 flex items-center justify-center rounded border-2 font-mono text-lg font-bold transition-all duration-500 ${
                            // Logic to determine if this char should be revealed
                            // We need to map collected letters back to positions
                            // This naive check "idx < collectedLetters.length" is WRONG for spaces
                            // Better: Check if we have revealed enough letters to cover this position
                            false // Placeholder, will fix below
                            }`}
                    // Let's refine the render logic instream
                    >
                        {/* We need a better rendering strategy for the reveal strip */}
                    </div>
                ))}
            </div>

            {/* 
               Wait, the render logic for the strip was:
               {char === ' ' ? ' ' : (idx < collectedLetters.length ? char : '?')}
               This assumes the answer array fills up 1-to-1 with the string indices.
               But collectedLetters only has non-space chars.
               So we need to interleave spaces.
            */}
            <AnswerStrip answer={REVIEW_RIDDLE_ANSWER} collectedLetters={collectedLetters} />

            {/* Game Card */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    {!showTransition ? (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-slate-100"
                        >
                            <div className="bg-indigo-500 p-2 h-2 w-full">
                                <div
                                    className="bg-amber-400 h-full rounded-r-full transition-all duration-500"
                                    style={{ width: `${(currentIndex / REVIEW_QUESTIONS.length) * 100}%` }}
                                ></div>
                            </div>

                            <div className="p-8 md:p-12 text-center space-y-8">
                                <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    Clue #{currentIndex + 1}
                                </span>

                                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                                    {currentQuestion.sentence.split("_____").map((part, i) => (
                                        <span key={i}>
                                            {part}
                                            {i === 0 && (
                                                <span className="inline-block border-b-4 border-indigo-300 text-indigo-600 px-4 min-w-[120px] mx-2">
                                                    {isCorrect ? currentQuestion.answer : "?"}
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6">
                                    {currentOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => checkAnswer(opt)}
                                            disabled={isCorrect !== null}
                                            className={`
                                                relative p-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-[1.02] border-2 text-left
                                                ${selectedOption === opt
                                                    ? (opt === currentQuestion.answer
                                                        ? "bg-green-100 border-green-500 text-green-800"
                                                        : "bg-red-100 border-red-500 text-red-800")
                                                    : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:shadow-md"
                                                }
                                                ${isCorrect !== null && opt !== selectedOption ? "opacity-50" : "opacity-100"}
                                            `}
                                        >
                                            {opt}
                                            {selectedOption === opt && (
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                                                    {opt === currentQuestion.answer
                                                        ? <CheckCircle className="w-6 h-6 text-green-600" />
                                                        : <span className="text-red-500 text-2xl">×</span>
                                                    }
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="transition"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500 text-white rounded-3xl shadow-xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                            <div className="text-8xl mb-8 animate-bounce">🗝️</div>
                            <h3 className="text-4xl font-black mb-4">Letter Found!</h3>
                            <button
                                onClick={nextQuestion}
                                className="bg-white text-green-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                            >
                                Next Clue <ArrowRight className="w-6 h-6" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Helper to render the answer strip correctly handling spaces
function AnswerStrip({ answer, collectedLetters }: { answer: string, collectedLetters: string[] }) {
    let letterIndex = 0;

    return (
        <div className="flex flex-wrap justify-center gap-2 p-4 min-h-[80px]">
            {answer.split('').map((char, idx) => {
                const isSpace = char === ' ';
                const isRevealed = !isSpace && letterIndex < collectedLetters.length;

                if (!isSpace) letterIndex++; // current char uses a collected letter slot

                return (
                    <div
                        key={idx}
                        className={`w-8 h-10 flex items-center justify-center rounded border-2 font-mono text-lg font-bold transition-all duration-500 ${isRevealed
                                ? "bg-amber-100 border-amber-400 text-amber-700 transform scale-100"
                                : (isSpace ? "border-transparent text-transparent" : "bg-slate-100 border-slate-200 text-transparent scale-90")
                            }`}
                    >
                        {isSpace ? '-' : (isRevealed ? char : '?')}
                    </div>
                );
            })}
        </div>
    );
}
