export type Language = "pt" | "en";

export const aboutContent: Record<Language, {
  title: string;
  description: string;
  cards: { title: string; description: string }[];
}> = {
  pt: {
    title: "Sobre mim",
    description:
      "Engenheiro de software com experiência no desenvolvimento de aplicações web e APIs, com foco em back-end utilizando .NET. Atuo na construção de sistemas voltados à área de RH, desenvolvendo soluções escaláveis, bem estruturadas e com foco em performance. \n\n Tenho experiência com diferentes tecnologias e boas práticas de desenvolvimento, sempre priorizando código limpo e de fácil manutenção.\n\nTambém possuo interesse em sistemas embarcados e desenvolvimento de baixo nível, buscando expandir meu conhecimento para áreas que envolvem maior proximidade com hardware e aplicações críticas.",

    cards: [
      {
        title: "Formação",
        description: "Ciencia da Computação\nESTACIO",
      },
      {
        title: "Experiência",
        description: "+4 anos\nDesenvolvendo soluções",
      },
      {
        title: "Localização",
        description: "Santa Catarina, Brasil\nDisponível para mudança",
      },
    ],
  },

  en: {
    title: "About me",
    description:
      "I am a software engineer with experience in web development and APIs. I have a strong interest in embedded systems, low-level programming, and critical applications, aiming to work in the space sector in the future.",

    cards: [
      {
        title: "Education",
        description: "Computer Science\nESTACIO",
      },
      {
        title: "Experience",
        description: "+4 years\nBuilding solutions",
      },
      {
        title: "Location",
        description: "Santa Catarina, Brazil\nOpen to relocation",
      },
    ],
  },
};