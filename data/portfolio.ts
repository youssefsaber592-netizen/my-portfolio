export const PORTFOLIO_DATA = {
  name: "Youssef Saber",
  displayName: "YOUSSEF",
  title: "Cloud & DevOps Engineer | AWS Specialist",
  subtitle: "Computer Science Student | Cloud Infrastructure & Security",
  location: "Qalyubia, Egypt",
  availableForWork: true,
  bio: "Computer Science student and AWS-focused Cloud & DevOps Engineer with hands-on experience across cloud architecture, IAM security, Linux administration, and CI/CD pipelines. Selected for the Digital Egypt Pioneers Initiative (DEPI) AWS Cloud Architecting track and certified in DevOps Foundations.",
  
  stats: {
    collaborations: 50,
    experiences: 3,
    certifications: 6,
  },

  socials: {
    github: "https://github.com/youssefsaber592-netizen",
    linkedin: "https://linkedin.com/in/youssef-saber-",
    email: "youssefsaber592@gmail.com",
    phone: "+20 120 658 3435",
    resume: "/Youssef_Saber_CV.pdf",
  },

  image: "/profile.jpg",
  youtubeUrl: "",

  techStack: {
    cloudSecurity: ["AWS (IAM, Cloud Security)", "Firebase Cloud Firestore", "TryHackMe", "Least-Privilege & RBAC"],
    devopsInfra: ["CI/CD Pipelines", "Linux Administration", "Git/GitHub", "DevOps Fundamentals", "Infrastructure Hardening"],
    networking: ["CCNA Concepts", "TCP/IP", "Routing & Switching", "Subnetting", "Network Security"],
    programming: ["Python", "Bash", "Java", "C++", "SQL", "HTML/CSS"],
    coreCS: ["Object-Oriented Programming", "Data Structures", "Software Engineering", "3-Tier Architecture"],
  },

  experiences: [
    {
      id: "depi",
      role: "Digital Egypt Pioneers Initiative (DEPI) Scholar",
      organization: "Ministry of Communications and Information Technology (MCIT)",
      type: "TRAINING / SCHOLARSHIP",
      date: "2026",
      description: "AWS Academy Cloud Architecting Track focusing on cloud infrastructure, security, architecture fundamentals, and automated deployments.",
    },
    {
      id: "ccna",
      role: "CCNA Training",
      organization: "IT Gates Academy",
      type: "NETWORKING TRAINING",
      date: "2025 - 2026",
      description: "Hands-on training in TCP/IP, routing protocols, VLANs, switching, subnetting, and network security fundamentals.",
    },
    {
      id: "enactus",
      role: "ICT Team Member",
      organization: "Enactus, Modern Academy",
      type: "VOLUNTEERING",
      date: "2024 - 2026",
      description: "Delivered technical and IT infrastructure support for team initiatives, digital presentation systems, and organizational operations.",
    },
  ],

  projects: [
    {
      id: "electrical-erp",
      title: "ElectricalStoreERP - 3-Tier ERP System",
      category: "Cloud & Software Engineering",
      description: "Architected and developed a 3-tier enterprise ERP application in Java integrated with Firebase Cloud Firestore for real-time inventory synchronization.",
      fullDescription: "Enforced strict separation between presentation, business logic, and data-access layers to maximize modularity and maintainability. Integrated Firestore for secure NoSQL data access.",
      tags: ["Java", "Firebase Firestore", "3-Tier Architecture", "OOP"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen",
    },
    {
      id: "cs-platform",
      title: "CS Platform",
      category: "Computer Science & E-Learning",
      description: "A comprehensive computer science platform designed for interactive learning, algorithms, and technical resources.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/youssefsaber592-netizen/cs-platform",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "aws-security-labs",
      title: "AWS & Cloud Security Labs",
      category: "Cloud Security / DevOps",
      description: "Implemented AWS IAM policies applying least-privilege access and role-based access control (RBAC) across simulated environments.",
      fullDescription: "Ran simulated security audits, access-control reviews, and hardened infrastructure configurations against common cloud misconfigurations on TryHackMe.",
      tags: ["AWS IAM", "Cloud Security", "RBAC", "TryHackMe"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/youssefsaber592-netizen",
    },
    {
      id: "cs-platform", // معرّف فريد للمشروع
      title: "CS Platform",
      category: "Computer Science & E-Learning Platform",
      description: "A comprehensive platform for computer science concepts, interactive learning modules, and resource sharing.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"], // عدل التقنيات حسب مشروعك
      githubUrl: "https://github.com/youssefsaber592-netizen/cs-platform", // ضع رابط المستودع الخاص بك
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" // رابط صورة تعبر عن المشروع
},
  ],
};