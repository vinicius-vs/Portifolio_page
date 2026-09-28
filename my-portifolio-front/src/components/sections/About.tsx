import "../../styles/about.css";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import type { portfolioContent } from "../../content";
import profile from "../../assets/profile.jpeg";

const icons = [GraduationCap, Briefcase, MapPin];

export function About({ content }: { content: typeof portfolioContent["pt-BR"]["about"] }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt={content.profileAlt} />
        </div>

        <div className="about-text">
          <h2>{content.title}</h2>

          <p>{content.description}</p>
          <div className="about-cards">
            {content.cards.map((card, index) => {
              const Icon = icons[index];

              return (
                <div key={`${card.title}-${index}`} className="about-card">
                  <Icon className="about-card-icon" />

                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}