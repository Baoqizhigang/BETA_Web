// src/data/hackathon-projects.ts

export interface TeamMember {
    name: string;
    linkedin?: string; // 如果没有链接，填 undefined 或空字符串，代码会自动处理为不可点击
    avatar: string;    // 例如 "/images/profiles/profilepicture1.jpg"
}

export interface ProjectDetails {
    id: string;        // 路由 slug，例如 "slack-a-vibe"
    title: string;     // 项目名称
    prize: string;     // 奖项名称
    description: string; // 项目介绍文案
    videoUrl: string;    // YouTube 链接
    certificateImage: string; // 电子奖状图片路径
    certificateUrl: string;   // 点击奖状跳转的 X (Twitter) 链接
    teamMembers: TeamMember[]; // 队员列表
    themeColor: string; // 主题色，用于标题光效
}

export const projectsData: ProjectDetails[] = [
    {
        id: "slack-a-vibe",
        title: "Slack-A-Vibe",
        prize: "First Prize",
        themeColor: "#26F0FF", // Cyan
        description: "Slack-a-vibe is a coding agent that lives inside Slack, right where all your stakeholders already are. It integrates with GitHub, SpoonOS, Jira, and supports concurrent runs.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/01-slack-a-vibe.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001748579854196886?s=20",

        // 队员配置 
        teamMembers: [
            {
                name: "Peggy Zhao",
                linkedin: "https://www.linkedin.com/in/peiqi-zhao2/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Yukt Mitash",
                linkedin: "https://www.linkedin.com/in/yukt-mitash/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Vincent Deng",
                linkedin: "https://www.linkedin.com/in/vincent-deng-76a41961/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #2
    {
        id: "streamsentry",
        title: "StreamSentry",
        prize: "Second Prize",
        themeColor: "#26F0FF", // Cyan
        description: "StreamSentry uses AI to analyze video streams in real time, automatically detecting dangerous events (medical emergencies, violence, suspicious activity) and instantly alerting security with video evidence. Every incident is logged to an immutable blockchain ledger via SpoonOS for legal compliance and tamper-proof audit trails.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/02-stream-sentry.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001364369582813241?s=20",

        // 队员配置 
        teamMembers: [
            {
                name: "Achyuth Chembu",
                linkedin: "https://www.linkedin.com/in/achyuth-chembu-1b9716345/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Arnav Shyam",
                linkedin: "https://www.linkedin.com/in/arnav-shyam-798561380/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Satvik Sharma",
                linkedin: "https://www.linkedin.com/in/satvik-sharma-006b1336a/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #03
    {
        id: "parallel",
        title: "Parallel",
        prize: "Second Prize",
        themeColor: "#26F0FF", // Cyan
        description: "Parallel AI is an agentic project management infrastructure meant to greatly streamline the development process. Using Trae we developed a SpoonOS network with agent representatives as nodes that communicate.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/03-parallel.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001732761640665263?s=20",

        // 队员配置
        teamMembers: [
            {
                name: "Yug Amol More",
                linkedin: "https://www.linkedin.com/in/yugmore13/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Severin Spagnola",
                linkedin: "https://www.linkedin.com/in/severin-spagnola-a5b941396/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Sean Aminov",
                linkedin: "https://www.linkedin.com/in/sean-aminov/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            },
            {
                name: "Nayab Hossain",
                linkedin: "https://www.linkedin.com/in/nayabhossain/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture4.png"
            }
        ]
    },

    // ... #04
    {
        id: "genius-loci",
        title: "Genius Loci",
        prize: "Second Prize",
        themeColor: "#26F0FF", // Cyan
        description: "Genius Loci turns physical locations into autonomous agent swarms that pay humans to keep them alive. Instead of passive locations on maps, we transform them into agents with GPT 5.1 “eyes” and crypto wallets, allowing them to post bounties for visual data—like verifying a closed sign or checking for long lines—and instantly pay users who provide it. Welcome to the inverted economy where locations pay you.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/04-genius-loci.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001719298574946533?s=20",

        // 队员配置 
        teamMembers: [
            {
                name: "Wenjie Fu",
                linkedin: "https://www.linkedin.com/in/wenjiefu",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture5.png"
            }
        ]
    },

    // ... #05
    {
        id: "whaisper",
        title: "Whaisper",
        prize: "Third Prize",
        themeColor: "#26F0FF", // Cyan
        description: "Whaisper is an AI ring, serving as a small wearable personal assistant. Whaisper is powered by AI agents to act and respond to user's request, such as calendar management, short notes taking.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/05-whaisper.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001737407897702590?s=20",

        // 队员配置 
        teamMembers: [
            {
                name: "Jinghan Ma",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Xiaochen Yang",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Jiqi Yang",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #06
    {
        id: "tasteract",
        title: "Tasteract",
        prize: "Third Prize",
        themeColor: "#26F0FF", // Cyan
        description: "We are building the first universal taste-embedding model—a missing sensory component of world models—to let machines understand flavor the way they understand vision or text. This unlocks breakthroughs in food science, personalized nutrition, quality control, and even better-tasting pharmaceuticals.",
        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/06-tasteract.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001723869196161520?s=20",

        // 队员配置 
        teamMembers: [
            {
                name: "Advit Deepak",
                linkedin: "https://www.linkedin.com/in/advitdeepak/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Garni Gharibian",
                linkedin: "https://www.linkedin.com/in/garni-gharibian/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Nitish Reube",
                linkedin: "https://www.linkedin.com/in/nitishreuben/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #07
    {
        id: "openmedicine",
        title: "OpenMedicine",
        prize: "Third Prize",
        themeColor: "#26F0FF", // Cyan
        description: "OpenMedicine is an AI-powered virtual care platform that turns “something is wrong” moments into fast, evidence-based treatment across general medicine. Patients connect by text chat, video, or voice; our AI handles intake and generates a structured, clinician-ready note with guideline-linked suggestions so licensed clinicians can quickly finalize care and follow up asynchronously. Each visit becomes structured longitudinal data that personalizes future care and powers SDKs/APIs for health systems, employers, and researchers.",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/07-openmedicine.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2001755565278793902?s=20",

        // 队员配置 (自动堆叠)
        teamMembers: [
            {
                name: "Himalaya Dua",
                linkedin: "https://www.linkedin.com/in/himalayadua/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Pranav Patel",
                linkedin: "https://www.linkedin.com/in/pranavpatel08/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Ethan Yang",
                linkedin: "https://www.linkedin.com/in/ethan-yang-md-phd/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #08
    {
        id: "research-bro",
        title: "Research Bro",
        prize: "Third Prize",
        themeColor: "#26F0FF", // Cyan
        description: "We built an AI Research Workbench that turns a fuzzy research question into a fully structured experimental plan using a coordinated multi-agent pipeline. By combining literature extraction, hypothesis structuring, experimental design, stimulus generation, and synthetic participant simulation, the system accelerates scientific reasoning while keeping researchers in control. The result is faster, clearer, and more reproducible cognitive science",

        // 暂时使用 scoop 页面视频作为占位符
        videoUrl: "https://www.youtube.com/embed/enrIyX4Btks?si=tGJfySd4Hj-DyAr1",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/08-research-bro.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2002753152219570673?s=20",

        // 队员配置 (根据你的要求，自动堆叠)
        teamMembers: [
            {
                name: "Qihong Ruan",
                linkedin: "https://www.linkedin.com/in/qihong-ruan/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Lumingyuan Tang",
                linkedin: "https://www.linkedin.com/in/tanglumy/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Chuyao Hua",
                linkedin: "https://www.linkedin.com/in/chuyaohua/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #09
    {
        id: "orienta",
        title: "Orienta",
        prize: "TRAE Special Prize",
        themeColor: "#26F0FF", // Cyan
        description: "What separates a wandering path from a legendary journey? Not just talent, but direction.By digitizing career counseling, Orienta empowers users to make data-driven amazing professional decisions.",

        // 暂时使用参赛选手自己提交的演示视频
        videoUrl: "https://drive.google.com/file/d/1e5UIWqxGlSFLCCKh2N9gKlUVq2m5fmbl/view?t=134",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/09-orienta.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2002762019309781111?s=20",

        // 队员配置 (根据你的要求，自动堆叠)
        teamMembers: [
            {
                name: "Yanning Zhang",
                linkedin: "https://linkedin.com/in/晏宁-张-795133399",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Jincheng Ou",
                linkedin: "https://linkedin.com/in/jincheng-ou",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Hao Deng",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #10
    {
        id: "agent-gig",
        title: "Agent Gig",
        prize: "TRAE Special Prize",
        themeColor: "#26F0FF", // Cyan
        description: "AI agents can not efficiently transact with each other—each integration requires custom API work, fixed pricing with no negotiation, and manual orchestration across multiple services. We have created a marketplace where agents list their capabilities with flexible pricing, and our broker automatically discovers, negotiates, and orchestrates multi-agent workflows. This transforms agent commerce from expensive point-to-point integrations into an intelligent, cost-optimized network.",

        // 暂时使用参赛选手自己提交的演示视频
        videoUrl: "https://drive.google.com/file/d/14cu7umpEWsvRWSgcvT-PE9J43W5ZYWoy/view?usp=sharing",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/10-agent-gig.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2002762019309781111?s=20",

        // 队员配置 (自动堆叠)
        teamMembers: [
            {
                name: "Allen Shen",
                linkedin: "https://www.linkedin.com/in/allenshenca/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture1.png"
            },
            {
                name: "Paul Lin",
                linkedin: "https://www.linkedin.com/in/paul8/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
            {
                name: "Aakash Sriram",
                linkedin: " https://www.linkedin.com/in/aakashsriram/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture3.png"
            }
        ]
    },

    // ... #11
    {
        id: "neo-nexus",
        title: "Neo-NEXUS",
        prize: "TRAE Special Prize",
        themeColor: "#26F0FF", // Cyan
        description: "Neo-Nexus solves the 'Tragedy of the Commons' in blockchain governance by automating the complex voting process for token holders. Our AI agent acts as a 'Yield Recovery Engine,' identifying over $20 billion in potential annual waste across the crypto market and capturing it instantly. We create a virtuous cycle that turns user apathy into network security and tangible financial returns.",

        // 暂时使用参赛选手自己提交的演示视频
        videoUrl: "https://drive.google.com/file/d/12F0wnRCtlOLDhCOeSH1bSamhwm4U8zEz/view?usp=sharing",

        // 电子奖状配置
        certificateImage: "/images/ScoopAIHackathon/certificates/11-neo-nexus.png",
        certificateUrl: "https://x.com/Beta_ucb/status/2002762019309781111?s=20",

        // 队员配置 (自动堆叠)
        teamMembers: [
            {
                name: "Qiao Liu",
                linkedin: "https://www.linkedin.com/in/qiaoliu/",
                avatar: "/images/ScoopAIHackathon/profiles/profilepicture2.png"
            },
        ]
    },

];