export type NavbarLanguage = "pt" | "en";

export const navbarContent: Record<NavbarLanguage, {
  logo: string;
  links: { label: string; href: string }[];
  cta: string;
}> = {
  pt: {
    logo: "Vinicius",
    links: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Experiência", href: "#experience" },
      { label: "Projetos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
    cta: "Fale comigo",
  },

  en: {
    logo: "Vinicius",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact me",
  },
};