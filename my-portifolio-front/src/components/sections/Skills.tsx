import { Code2, Database, PanelsTopLeft, Wrench, type LucideIcon } from "lucide-react";
import "../../styles/skills.css";
import type { portfolioContent } from "../../content";

type SkillsContent = typeof portfolioContent["pt-BR"]["skills"];

const categoryIcons: Record<string, LucideIcon> = {
  backend: Code2,
  frontend: PanelsTopLeft,
  databases: Database,
  tools: Wrench,
} as const;

export function Skills({ content }: { content: SkillsContent }) {
  const featuredCategory = content.categories.find((category) => category.id === "backend");
  const otherCategories = content.categories.filter((category) => category.id !== "backend");

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <header className="skills-header">
          <span className="skills-eyebrow">{content.eyebrow}</span>
          <div className="skills-header-content">
            <h2>
              {content.titlePrefix} <span>{content.titleAccent}</span>
            </h2>
            <p>{content.description}</p>
          </div>
        </header>

        <div className="skills-layout">
          {featuredCategory && (
            <article className="skill-feature">
              <div className="skill-feature-top">
                <span className="skill-feature-icon">
                  <Code2 size={23} aria-hidden="true" />
                </span>
                <span className="skill-feature-label">{content.featuredLabel}</span>
              </div>
              <h3>{featuredCategory.title}</h3>
              <p className="skill-feature-description">{content.featuredDescription}</p>
              <ul className="skill-feature-list" aria-label={featuredCategory.title}>
                {featuredCategory.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <span className="skill-feature-watermark" aria-hidden="true">
                01
              </span>
            </article>
          )}

          <div className="skill-groups">
            {otherCategories.map((category) => {
            const Icon = categoryIcons[category.id];

            return (
              <article className="skill-group" key={category.id}>
                <div className="skill-card-heading">
                  <span className="skill-card-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3>{category.title}</h3>
                </div>

                <ul className="skill-list" aria-label={category.title}>
                  {category.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
