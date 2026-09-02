export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  architecture?: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  date: string;
  description: string;
  certificateImage?: string;
}

export const PORTFOLIO_DATA = {
  name: "Youssef Saber",
  displayName: "YOUSSEF",
  title: "Cloud & DevOps Engineer",
  subtitle: "Computer Engineering Student | AWS | DevOps | Cloud Infrastructure",
  location: "Egypt",
  availableForWork: true,
  bio: "Computer Engineering student focused on Cloud Computing, DevOps, AWS infrastructure, networking, and automation. I enjoy building reliable, scalable, and secure systems while continuously improving my engineering skills.",
  
  stats: {
    collaborations: "50+",
    experiences: "3+",
    certifications: "Multiple",
  },

  socials: {
    github: "https://github.com/youssefsaber592-netizen",
    linkedin: "YOUR_LINKEDIN_URL", // Update when ready
    email: "YOUR_EMAIL", // Update when ready
    resume: "/resume.pdf",
  },

  // Leave empty to hide YouTube section automatically
  youtubeUrl: "",

  originStory: [
    { title: "Academic Path", desc: "Started my journey in Computer Engineering." },
    { title: "Networking", desc: "Built a foundation in networking and CCNA concepts." },
    { title: "Cloud & Infrastructure", desc: "Started working deeply with AWS, Linux, Docker, and cloud infrastructure." },
    { title: "DevOps", desc: "Focused on automation, CI/CD, Infrastructure as Code, and scalable systems." },
  ],

  educationCards: [
    { title: "EDUCATION", subtitle: "Computer Engineering Student", detail: "Shoubra Engineering" },
    { title: "KEY FOCUS", subtitle: "Cloud Computing", detail: "DevOps & Infrastructure" },
    { title: "INTERESTS", subtitle: "AWS & Automation", detail: "Linux | Networking | Docker" },
  ],

  techStack: {
    programming: ["C++", "Python", "Java", "JavaScript", "Dart"],
    cloud: ["AWS", "Docker", "Linux", "Terraform", "Ansible", "Networking", "CCNA"],
    devops: ["Git", "GitHub", "CI/CD", "GitHub Actions", "Infrastructure as Code"],
    development: ["Flutter", "React", "Next.js", "HTML", "CSS", "SQL"],
    tools: ["VS Code", "Cisco Packet Tracer", "Postman", "Godot"],
  },

  experiences: [
    {
      id: "nti-2025",
      role: "Network Infrastructure Training",
      organization: "National Telecommunication Institute (NTI)",
      type: "TRAINING / INTERNSHIP",
      date: "2025",
      description: "Hands-on training in network infrastructure, routing, switching, VLANs, DHCP, ACLs, NAT/PAT, and multi-branch network design using Cisco technologies.",
      certificateImage: "", // Optional image path
    },
    {
      id: "itgate-2026",
      role: "CCNA / Networking Training",
      organization: "IT Gate",
      type: "TRAINING",
      date: "2025–2026",
      description: "Training focused on networking fundamentals, Cisco CLI, routing, switching, NAT, VLANs, ACLs, and practical network configuration using Cisco Packet Tracer.",
      certificateImage: "",
    },
    {
      id: "depi-2026",
      role: "Digital Egypt Pioneers Initiative",
      organization: "DEPI",
      type: "TRAINING",
      date: "2026",
      description: "Cloud and DevOps focused training covering AWS cloud infrastructure, Linux, networking, automation, deployment workflows, and modern cloud engineering practices.",
      certificateImage: "",
    },
    {
      id: "enactus-2026",
      role: "Enactus Modern Academy",
      organization: "Enactus Modern Academy",
      type: "VOLUNTEERING / STUDENT ACTIVITY",
      date: "2024–2026",
      description: "Participated in student activities, teamwork, event organization, communication, and community-focused initiatives.",
    },
    {
      id: "exfresher-2026",
      role: "Ex-Fresher",
      organization: "Ex-Fresher",
      type: "VOLUNTEERING / EVENT ORGANIZATION",
      date: "2024–2026",
      description: "Contributed to organizing student activities, coordinating teams, communicating with participants, and supporting events.",
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "cs-platform",
      title: "CS Platform",
      category: "Education Platform",
      description: "An educational platform concept for computer science learning, designed to organize technical courses and learning resources.",
      fullDescription: "Detailed digital solutions platform designed for computer science education. Includes responsive UI layouts, course catalog displays, dynamic track selectors, and interactive registration forms.",
      architecture: "Frontend architecture constructed with responsive HTML/CSS layouts and dynamic JavaScript interactions.",
      tags: ["C++", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen/cs-platform",
    },
    {
      id: "egyptian-league",
      title: "Egyptian League",
      category: "Console / Programming",
      description: "A programming project implementing an Egyptian football league management system using C++.",
      fullDescription: "Simulates Premier League workflows applying foundational Data Structures (Linked Lists, Stacks, Queues, Vectors) and Object-Oriented Programming (OOP) in C++.",
      architecture: "Console-driven architecture utilizing algorithms for ranking teams, match scheduling, and data retrieval.",
      tags: ["C++", "Data Structures", "OOP"],
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen/Egyptian-League-using-C-",
    },
    {
      id: "discrete-math",
      title: "Discrete Mathematics Project",
      category: "Academic / Software",
      description: "An academic project implementing concepts and problem solving related to discrete mathematics.",
      fullDescription: "Implements theoretical discrete mathematics models into algorithmic code including set operations, graph theory traversals, propositional logic, and combinatorics.",
      architecture: "Modular C++ codebase engineered with algorithmic logic solvers and interactive console inputs.",
      tags: ["C++", "Algorithms", "Mathematics"],
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen/Discrete-Mathematics-project",
    },
    {
      id: "aws-cloud-infra",
      title: "AWS Cloud Infrastructure",
      category: "Cloud / DevOps",
      description: "Cloud infrastructure architecture and automation experiments using AWS services, Linux, containers, Infrastructure as Code, and CI/CD concepts.",
      fullDescription: "Practical deployments testing Infrastructure as Code with Terraform, Ansible automated provisioning, Docker container management, and continuous integration workflows.",
      architecture: "AWS VPC architecture integrating EC2, S3, IAM policies, security groups, and automated GitHub Actions pipelines.",
      tags: ["AWS", "Terraform", "Docker", "Linux", "GitHub Actions"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen",
    },
    {
      id: "flutter-apps",
      title: "Flutter Applications",
      category: "Mobile Development",
      description: "Cross-platform mobile application experiments built using Flutter and Dart.",
      fullDescription: "Mobile user interface implementations featuring responsive screen navigation, state management, custom widget trees, and backend integrations.",
      architecture: "Dart client architecture following clean UI patterns and modular widget trees.",
      tags: ["Flutter", "Dart", "Mobile"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen",
    },
  ] as ProjectItem[],

  chatbot: {
    enabled: true,
  },
};