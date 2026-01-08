'use client';

import { ListeningSession } from "@/components/game/ListeningSession";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ListeningPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6">
            <div className="mb-8">
                <Link href="/">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Exit Exam
                    </Button>
                </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <ListeningSession />
            </div>
        </div>
    );
}
