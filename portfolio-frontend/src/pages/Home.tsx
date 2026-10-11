import { useEffect, useState } from "react";
import { About } from "../components/sections/About";
import { Hero } from "../components/sections/hero";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Navbar } from "../components/ui/Navbar";
import { portfolioContent, type Language } from "../content";

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "en-US" ? "en-US" : "pt-BR";
  });
  const content = portfolioContent[language];

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title = content.pageTitle;
  }, [content.pageTitle, language]);

  return (
    <div>
      <Navbar lang={language} onLanguageChange={setLanguage} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Experience content={content.experience} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
    </div>
  );
}