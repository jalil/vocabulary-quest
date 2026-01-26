'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { CrosswordData, CrosswordClue } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Check, X, ArrowLeft, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface CrosswordSessionProps {
    data: CrosswordData;
    onComplete?: () => void;
    onExit?: () => void;
}

export function CrosswordSession({ data, onComplete, onExit }: CrosswordSessionProps) {
    // 2D grid of user inputs: grid[row][col] = char
    const [grid, setGrid] = useState<string[][]>(
        Array(data.height).fill(null).map(() => Array(data.width).fill(''))
    );

    const [selectedClue, setSelectedClue] = useState<CrosswordClue | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    // Map to quickly find which clues occupy a cell
    // cellClues[row][col] = [clueIndex1, clueIndex2...]
    const cellClues = useMemo(() => {
        const map = new Map<string, number[]>();

        data.clues.forEach((clue, index) => {
            const dr = clue.direction === 'across' ? 0 : 1;
            const dc = clue.direction === 'across' ? 1 : 0;

            for (let i = 0; i < clue.answer.length; i++) {
                const r = clue.row + (i * dr);
                const c = clue.col + (i * dc);
                const key = `${r},${c}`;

                const list = map.get(key) || [];
                list.push(index);
                map.set(key, list);
            }
        });

        return map;
    }, [data]);

    // Focus a cell input
    const focusCell = (r: number, c: number) => {
        const el = document.getElementById(`cell-${r}-${c}`);
        if (el) el.focus();
    };

    const handleCellClick = (r: number, c: number) => {
        // Find clue for this cell. Prefer the one matching current direction if any.
        const key = `${r},${c}`;
        const indices = cellClues.get(key);

        if (indices && indices.length > 0) {
            // Logic to cycle clues or pick best one
            // Simple logic: pick first one, or toggle if already selected
            let nextIndex = indices[0];
            if (selectedClue && indices.includes(data.clues.indexOf(selectedClue))) {
                // If current clue is valid for this cell, see if there's another one (intersection)
                const currentIndexInList = indices.indexOf(data.clues.indexOf(selectedClue));
                if (indices.length > 1) {
                    nextIndex = indices[(currentIndexInList + 1) % indices.length];
                }
            }
            setSelectedClue(data.clues[nextIndex]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
        if (!selectedClue) return;

        const isAcross = selectedClue.direction === 'across';

        if (e.key === 'Backspace') {
            e.preventDefault();
            const newGrid = [...grid];
            newGrid[r] = [...newGrid[r]];

            if (newGrid[r][c] !== '') {
                newGrid[r][c] = '';
                setGrid(newGrid);
            } else {
                // Move back
                if (isAcross && c > selectedClue.col) focusCell(r, c - 1);
                if (!isAcross && r > selectedClue.row) focusCell(r - 1, c);
            }
        } else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
            e.preventDefault();
            const char = e.key.toUpperCase();
            const newGrid = [...grid];
            newGrid[r] = [...newGrid[r]];
            newGrid[r][c] = char;
            setGrid(newGrid);

            // Move forward
            const indexInWord = isAcross ? c - selectedClue.col : r - selectedClue.row;
            if (indexInWord < selectedClue.answer.length - 1) {
                if (isAcross) focusCell(r, c + 1);
                else focusCell(r + 1, c);
            } else {
                // Check completion
                checkCompletion(newGrid);
            }
        } else if (e.key === 'ArrowRight') {
            focusCell(r, c + 1);
        } else if (e.key === 'ArrowLeft') {
            focusCell(r, c - 1);
        } else if (e.key === 'ArrowDown') {
            focusCell(r + 1, c);
        } else if (e.key === 'ArrowUp') {
            focusCell(r - 1, c);
        }
    };

    const checkCompletion = (currentGrid: string[][]) => {
        let allCorrect = true;
        for (const clue of data.clues) {
            const dr = clue.direction === 'across' ? 0 : 1;
            const dc = clue.direction === 'across' ? 1 : 0;
            let currentWord = "";
            for (let i = 0; i < clue.answer.length; i++) {
                const r = clue.row + (i * dr);
                const c = clue.col + (i * dc);
                currentWord += currentGrid[r]?.[c] || "";
            }
            if (currentWord !== clue.answer) {
                allCorrect = false;
                break;
            }
        }

        if (allCorrect && !isComplete) {
            setIsComplete(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            if (onComplete) onComplete();
        }
    };

    // Render helpers
    const getCellStatus = (r: number, c: number) => {
        const key = `${r},${c}`;
        const indices = cellClues.get(key);
        if (!indices) return 'void'; // No input here (black square)

        const isSelected = selectedClue && indices.includes(data.clues.indexOf(selectedClue));
        const isFocused = false; // Handled by CSS :focus-within mostly or manual

        return isSelected ? 'selected' : 'active';
    };

    const isCellInActiveWord = (r: number, c: number, clue: CrosswordClue | null) => {
        if (!clue) return false;
        const dr = clue.direction === 'across' ? 0 : 1;
        const dc = clue.direction === 'across' ? 1 : 0;

        // Is this cell part of the selected clue?
        if (clue.direction === 'across') {
            return r === clue.row && c >= clue.col && c < clue.col + clue.answer.length;
        } else {
            return c === clue.col && r >= clue.row && r < clue.row + clue.answer.length;
        }
    };

    // Numbering
    const cellNumbers = new Map<string, number>();
    data.clues.forEach(clue => {
        const key = `${clue.row},${clue.col}`;
        if (!cellNumbers.has(key)) {
            cellNumbers.set(key, clue.number);
        }
    });

    return (
        <div className="flex flex-col md:flex-row h-full bg-slate-50 overflow-hidden">
            {/* Left Panel: Grid */}
            <div className="flex-1 overflow-auto p-4 flex flex-col items-center justify-center">
                <div className="mb-4 w-full max-w-2xl flex flex-wrap justify-between items-center gap-2">
                    {onExit ? (
                        <Button variant="ghost" className="text-slate-500 hover:text-slate-800" onClick={onExit}>
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">Exit</span>
                        </Button>
                    ) : (
                        <Link href="/">
                            <Button variant="ghost" className="text-slate-500 hover:text-slate-800">
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                <span className="hidden sm:inline">Exit</span>
                            </Button>
                        </Link>
                    )}
                    <h1 className="text-lg sm:text-xl font-bold text-slate-800 text-center flex-1 order-first sm:order-none w-full sm:w-auto">
                        Review: Lessons 5-8
                    </h1>
                    <Button variant="ghost" className="text-slate-500 hover:text-slate-800" onClick={() => window.location.reload()}>
                        <RotateCcw className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Reset</span>
                    </Button>
                </div>

                <div
                    className="grid gap-px border-2 border-slate-800 bg-slate-800 shadow-xl w-full"
                    style={{
                        gridTemplateColumns: `repeat(${data.width}, minmax(0, 1fr))`,
                        maxWidth: '80vmin',
                        aspectRatio: `${data.width}/${data.height}`
                    }}
                >
                    {grid.map((row, r) =>
                        row.map((val, c) => {
                            const status = getCellStatus(r, c);
                            const number = cellNumbers.get(`${r},${c}`);
                            const isActiveWord = isCellInActiveWord(r, c, selectedClue);

                            if (status === 'void') {
                                return <div key={`${r}-${c}`} className="bg-slate-900/10" />;
                            }

                            return (
                                <div
                                    key={`${r}-${c}`}
                                    className={`relative bg-white transition-colors duration-200 aspect-square
                                        ${isActiveWord ? 'bg-indigo-50' : ''}
                                        ${selectedClue && isActiveWord && selectedClue.row === r && selectedClue.col === c ? 'ring-2 ring-indigo-500 z-10' : ''}
                                    `}
                                    onClick={() => handleCellClick(r, c)}
                                >
                                    {number && (
                                        <span className="absolute top-0.5 left-0.5 text-[0.6rem] font-bold text-slate-500 leading-none select-none">
                                            {number}
                                        </span>
                                    )}
                                    <input
                                        id={`cell-${r}-${c}`}
                                        type="text"
                                        maxLength={1}
                                        className="w-full h-full text-center text-lg md:text-xl font-bold bg-transparent outline-none uppercase p-0"
                                        value={val}
                                        onChange={() => { }} // Controlled by onKeyDown
                                        onKeyDown={(e) => handleKeyDown(e, r, c)}
                                        autoComplete="off"
                                    />
                                </div>
                            );
                        })
                    )}
                </div>

                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 bg-green-100 border-2 border-green-500 text-green-800 p-4 rounded-xl flex items-center space-x-3 shadow-lg"
                    >
                        <CheckCircleIcon className="w-8 h-8 text-green-600" />
                        <div>
                            <h3 className="font-bold text-lg">Puzzle Solved!</h3>
                            <p className="text-sm">Great job reviewing Lessons 5-8!</p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Right Panel: Clues */}
            <div className="w-full md:w-80 bg-white border-l border-slate-200 overflow-y-auto p-6 md:h-screen shadow-lg z-20">
                <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white rounded-lg p-1 mr-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </span>
                    Clues
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-400 uppercase tracking-wider text-xs mb-3">Across</h3>
                        <div className="space-y-2">
                            {data.clues.filter(c => c.direction === 'across').map(clue => (
                                <button
                                    key={`clue-${clue.number}-across`}
                                    onClick={() => {
                                        setSelectedClue(clue);
                                        focusCell(clue.row, clue.col);
                                    }}
                                    className={`w-full text-left p-3 rounded-lg text-sm transition-all duration-200 border-l-4
                                        ${selectedClue === clue
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm'
                                            : 'border-transparent hover:bg-slate-50 text-slate-600'
                                        }
                                    `}
                                >
                                    <span className="font-bold mr-2 text-slate-400">{clue.number}.</span>
                                    {clue.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-400 uppercase tracking-wider text-xs mb-3">Down</h3>
                        <div className="space-y-2">
                            {data.clues.filter(c => c.direction === 'down').map(clue => (
                                <button
                                    key={`clue-${clue.number}-down`}
                                    onClick={() => {
                                        setSelectedClue(clue);
                                        focusCell(clue.row, clue.col);
                                    }}
                                    className={`w-full text-left p-3 rounded-lg text-sm transition-all duration-200 border-l-4
                                        ${selectedClue === clue
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm'
                                            : 'border-transparent hover:bg-slate-50 text-slate-600'
                                        }
                                    `}
                                >
                                    <span className="font-bold mr-2 text-slate-400">{clue.number}.</span>
                                    {clue.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckCircleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}
