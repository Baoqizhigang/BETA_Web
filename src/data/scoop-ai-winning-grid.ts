
export const THEMES = {
    CYAN: { color: "#26F0FF", speed: 9, spread: 85 },
    GREEN: { color: "#0DFC96", speed: 4, spread: 45 },
    CYAN1: { color: "#26F0FF", speed: 6, spread: 95 },
    GREEN1: { color: "#0DFC96", speed: 8, spread: 75 },
    BLUE: { color: "#310DFC", speed: 2, spread: 125 },
};

export const projects = [
    // --- First Prize (Cyan) ---
    {
        prize: "First Prize",
        title: "Slack-A-Vibe",
        members: "Peggy Zhao, Yukt Mitash, Vincent Deng",
        theme: THEMES.CYAN,
        link: "/events/scoop-ai-hackathon/projects/slack-a-vibe"
    },
    // --- Second Prize (Green) ---
    { prize: "Second Prize", title: "StreamSentry", members: "Achyuth Chembu, Arnav Shyam, Satvik Sharma", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/streamsentry" },
    { prize: "Second Prize", title: "Parallel", members: "Yug Amol More, Severin Spagnola,\nSean Aminov, Nayab Hossain", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/parallel" },
    { prize: "Second Prize", title: "Genius Loci", members: "Wenjie Fu", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/genius-loci" },
    // --- Third Prize (Blue) ---
    { prize: "Third Prize", title: "Whaisper", members: "Jinghan Ma, Xiaochen Yang, Jiqi Yang", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/whaisper" },
    { prize: "Third Prize", title: "Tasteract", members: "Advit Deepak , Garni Gharibian, Nitish Reube", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/tasteract" },
    { prize: "Third Prize", title: "OpenMedicine", members: "Ethan Yang, Himalaya Dua, Pranav Patel", theme: THEMES.CYAN1, link: "/events/scoop-ai-hackathon/projects/openmedicine" },
    { prize: "Third Prize", title: "Research Bro", members: "Chuyao Hua, Lumingyuan Tang, Qihong Ruan", theme: THEMES.CYAN, link: "/events/scoop-ai-hackathon/projects/research-bro" },
    // --- Trae Special (Purple) ---
    { prize: "Trae Special", title: "Orienta", members: "Yanning Zhang, Jincheng Ou, Hao Deng", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/orienta" },
    { prize: "Trae Special", title: "Agent Gig", members: "Allen Shen, Paul Lin, Aakash Sriram", theme: THEMES.GREEN1, link: "/events/scoop-ai-hackathon/projects/agent-gig" },
    { prize: "Trae Special", title: "NEO-NEXUS", members: "Qiao Liu", theme: THEMES.GREEN, link: "/events/scoop-ai-hackathon/projects/neo-nexus" },
    // --- Special: News Letter ---
    {
        prize: "Follow Us On X", // No top label
        title: "News Letter",
        members: "Click to view full story on X",
        theme: THEMES.BLUE,
        isExternal: true,
        link: "https://x.com/Beta_ucb/status/2005187566551871929?s=20"
    }
];
