import "../../styles/experience.css";
import { Briefcase, Calendar } from "lucide-react";
import { experienceContent, type ExperienceLanguage } from "../../content/experience";

export function Experience({ lang = "pt" }: { lang?: ExperienceLanguage }) {
  const content = experienceContent[lang];
  const items = content.jobs;

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="experience-timeline">
          {items.map((job, index) => (
            <div key={job.id} className="experience-item">
              <div className="experience-timeline-dot">
                <Briefcase size={20} />
              </div>

              {index !== items.length - 1 && <div className="experience-line" />}

              <div className="experience-content">
                <div className="experience-header-info">
                  <h3>{job.position}</h3>
                  <span className="experience-company">{job.company}</span>
                </div>

                <div className="experience-period">
                  <Calendar size={16} />
                  <p>{job.period}</p>
                </div>

                <p className="experience-description">{job.description}</p>

                {job.technologies?.length ? (
                  <div className="experience-technologies">
                    {job.technologies.map((tech) => (
                      <span key={`${job.id}-${tech}`} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
