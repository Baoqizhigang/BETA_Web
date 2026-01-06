import { projectsData } from '@/src/data/hackathon-projects';
import EventPageTemplate from '@/components/templates/EventPageTemplate';
import WinningProjectsGrid from '@/components/templates/WinningProjectsGrid';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData.find((p) => p.id === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} | Scoop AI Hackathon`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.certificateImage],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const project = projectsData.find((p) => p.id === slug);
    if (!project) {
        notFound();
    }

    const isSmallTeam = project.teamMembers.length < 4;

    return (
        <EventPageTemplate
            title={project.title}
            description={project.description}
            date="NOV 22-23 2025"
            location="Santa Clara"
            topLabel={
                <span className="text-sm font-mono tracking-[0.3em] uppercase" style={{ color: project.themeColor }}>
                    {project.prize}
                </span>
            }
            videoUrl={project.videoUrl}
            posterLeftSrc={project.certificateImage}
            posterLeftHref={project.certificateUrl}
            // Right poster intentionally omitted as per requirements
            ctaText="Back to Event"
        >
            <div className="w-full flex flex-col gap-24 pb-20 mt-20">

                {/* Team Members Section */}
                <div className="w-full flex flex-col items-center">
                    {/* 
                      Responsive Team Layout:
                      - If < 4 members: Use Flexbox to center the partial row (1, 2, or 3 cards).
                      - If >= 4 members: Use Grid (Stack -> 2x2 -> 4x1) for optimal space usage.
                    */}
                    <div className={`
                        w-full max-w-7xl px-6 mx-auto gap-6
                        ${isSmallTeam
                            ? 'flex flex-wrap justify-center'
                            : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'}
                    `}>
                        {project.teamMembers.map((member, idx) => {
                            const CardTag = member.linkedin ? 'a' : 'div';

                            return (
                                <CardTag
                                    key={idx}
                                    href={member.linkedin || undefined}
                                    target={member.linkedin ? "_blank" : undefined}
                                    rel={member.linkedin ? "noopener noreferrer" : undefined}
                                    className={`
                                        flex flex-row items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-4 
                                        transition-all duration-300 group
                                        ${member.linkedin ? 'cursor-pointer hover:scale-105 hover:bg-white/10 hover:border-white/30 hover:shadow-xl' : 'cursor-default'}
                                        ${isSmallTeam
                                            // Flex Item Sizing for centered cards:
                                            // Full width on mobile, fixed modest width on desktop to mimic grid sizing
                                            ? 'w-full sm:w-[300px] flex-none'
                                            // Grid Item Sizing:
                                            // Fills the grid cell completely
                                            : 'w-full min-w-0'}
                                    `}
                                >
                                    {/* Square Avatar */}
                                    <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden bg-white/10">
                                        <Image
                                            src={member.avatar}
                                            alt={member.name}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Name Only */}
                                    <div className="flex-1 text-center min-w-0">
                                        <h4 className={`font-bold text-lg md:text-xl truncate transition-colors ${member.linkedin ? 'text-white group-hover:text-cyan-400' : 'text-white/80'}`}>
                                            {member.name}
                                        </h4>
                                    </div>
                                </CardTag>
                            );
                        })}
                    </div>
                </div>

                {/* Footer: Other Winners */}
                <WinningProjectsGrid />

            </div>
        </EventPageTemplate>
    );
}
