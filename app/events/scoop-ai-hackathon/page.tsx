import EventPageTemplate from '@/components/templates/EventPageTemplate';

export default function ScoopAIHackathonPage() {
    return (
        <EventPageTemplate
            title="SCOOP AI HACKATHON"
            date="NOV 22-23 2025"
            location="Santa Clara"
            description="Over 200 developers, researchers, entrepreneurs, and designers from around the world came together and, within just two days, built 70+ cutting-edge projects at the intersection of AI × Web3 × Agentic Systems."
            videoUrl="https://www.youtube.com/watch?v=enrIyX4Btks" // ✅ Correct: Full URL
        />
    );
}
