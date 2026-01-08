'use client';

import { NewsSession } from "@/components/game/NewsSession";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col p-6">
            <div className="mb-8 max-w-4xl mx-auto w-full">
                <Link href="/">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Exit Newsroom
                    </Button>
                </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <NewsSession />
            </div>
        </div>
    );
}
