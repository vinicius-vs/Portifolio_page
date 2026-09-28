export type ExperienceLanguage = "pt" | "en";

export const experienceContent: Record<
  ExperienceLanguage,
  {
    title: string;
    description: string;
    jobs: {
      id: number;
      position: string;
      company: string;
      period: string;
      description: string;
      technologies: string[];
    }[];
  }
> = {
  pt: {
    title: "Experiência",
    description: "Minha trajetória profissional em desenvolvimento de software",
    jobs: [
      {
        id: 1,
        position: "Desenvolvedor Backend Sênior",
        company: "TechCorp Solutions",
        period: "2023 - Presente",
        description: "Líder técnico no desenvolvimento de APIs REST e microserviços utilizando .NET. Responsável pela arquitetura de sistemas escaláveis e mentoria de desenvolvedores juniores.",
        technologies: ["C#", ".NET 8", "SQL Server", "Docker", "Kubernetes"],
      },
      {
        id: 2,
        position: "Desenvolvedor Full Stack",
        company: "Innovate Tech",
        period: "2021 - 2023",
        description: "Desenvolvimento de aplicações web full stack com foco em backend. Implementação de APIs, otimização de performance e integração de sistemas.",
        technologies: ["C#", ".NET Core", "React", "PostgreSQL", "Azure"],
      },
      {
        id: 3,
        position: "Desenvolvedor Junior",
        company: "StartUp Digital",
        period: "2020 - 2021",
        description: "Primeiras experiências em desenvolvimento profissional. Trabalho com manutenção de código, correção de bugs e implementação de features simples.",
        technologies: ["C#", "ASP.NET", "JavaScript", "MySQL"],
      },
    ],
  },

  en: {
    title: "Experience",
    description: "My professional journey in software development",
    jobs: [
      {
        id: 1,
        position: "Senior Backend Developer",
        company: "TechCorp Solutions",
        period: "2023 - Present",
        description: "Technical lead in REST APIs and microservices development using .NET. Responsible for scalable system architecture and junior developer mentoring.",
        technologies: ["C#", ".NET 8", "SQL Server", "Docker", "Kubernetes"],
      },
      {
        id: 2,
        position: "Full Stack Developer",
        company: "Innovate Tech",
        period: "2021 - 2023",
        description: "Full stack web application development with focus on backend. API implementation, performance optimization, and system integration.",
        technologies: ["C#", ".NET Core", "React", "PostgreSQL", "Azure"],
      },
      {
        id: 3,
        position: "Junior Developer",
        company: "StartUp Digital",
        period: "2020 - 2021",
        description: "First professional experience in development. Code maintenance, bug fixes, and simple feature implementation.",
        technologies: ["C#", "ASP.NET", "JavaScript", "MySQL"],
      },
    ],
  },
};
