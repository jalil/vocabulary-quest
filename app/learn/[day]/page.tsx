import { getLesson, ALL_LESSONS } from '@/lib/data';
import { LearningSession } from '@/components/game/LearningSession';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
    return ALL_LESSONS.map(lesson => ({ day: lesson.id }));
}

export default async function Page({ params }: { params: Promise<{ day: string }> }) {
    const { day } = await params;
    const lesson = getLesson(day);

    if (!lesson) notFound();

    // Create a shallow copy to avoid mutating global state permanently
    const debugLesson = {
        ...lesson,
        subtitle: `${lesson.subtitle} [SRV: ${lesson.stories.length}]`
    };

    return <LearningSession lesson={debugLesson} />;
}
