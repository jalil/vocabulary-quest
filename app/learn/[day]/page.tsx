import { getLesson, ALL_LESSONS } from '@/lib/data';
import { LearningSession } from '@/components/game/LearningSession';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return ALL_LESSONS.map(lesson => ({ day: lesson.id }));
}

export default async function Page({ params }: { params: Promise<{ day: string }> }) {
    const { day } = await params;
    const lesson = getLesson(day);

    if (!lesson) notFound();

    return <LearningSession lesson={lesson} />;
}
