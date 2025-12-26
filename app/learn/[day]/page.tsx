import { DAY_1_LESSON } from '@/lib/data';
import { LearningSession } from '@/components/game/LearningSession';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return [{ day: 'day-1' }];
}

export default async function Page({ params }: { params: Promise<{ day: string }> }) {
    const { day } = await params;
    if (day !== 'day-1') notFound();

    return <LearningSession lesson={DAY_1_LESSON} />;
}
