import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Layers3,
  PanelsTopLeft,
  Terminal,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import "../../styles/projects.css";
import type { portfolioContent } from "../../content";

type ProjectsContent = typeof portfolioContent["pt-BR"]["projects"];
type Project = ProjectsContent["items"][number];

function ProjectPreview({ project }: { project: Project }) {
  if (project.preview === "desktop") {
    return (
      <div className="preview-screen desktop-preview" aria-hidden="true">
        <div className="preview-window-bar">
          <span />
          <span />
          <span />
          <small>Condomínios</small>
        </div>
        <div className="desktop-preview-content">
          <div className="preview-sidebar">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="preview-dashboard">
            <div className="preview-dashboard-heading" />
            <div className="preview-dashboard-cards">
              <i />
              <i />
              <i />
            </div>
            <div className="preview-table">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.preview === "web") {
    return (
      <div className="preview-screen portfolio-preview" aria-hidden="true">
        <div className="portfolio-laptop">
          <div className="portfolio-browser">
            <div className="preview-window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="portfolio-browser-content">
              <div className="portfolio-nav" />
              <div className="portfolio-hero">
                <div className="portfolio-copy">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>
                <div className="portfolio-avatar">
                  <PanelsTopLeft />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-phone">
          <span />
          <PanelsTopLeft />
          <i />
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className="preview-screen api-preview" aria-hidden="true">
      <div className="api-editor">
        <div className="preview-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="api-editor-content">
          <div className="api-editor-sidebar">
            <i />
            <i />
            <i />
          </div>
          <div className="api-code">
            <span />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="api-document">
        <small>API RESPONSE</small>
        <strong>{project.previewTitle}</strong>
        <div className="api-barcode" />
        <i />
        <i />
      </div>
    </div>
  );
}

export function Projects({ content }: { content: ProjectsContent }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const visibleProjects = content.items.filter(
    (project) => activeFilter === "all" || project.filters.includes(activeFilter),
  );

  useEffect(() => {
    const modal = modalRef.current;
    if (!selectedProject || !modal) {
      return;
    }

    if (!modal.open) {
      modal.showModal();
    }
  }, [selectedProject]);

  const closeProjectDetails = () => {
    modalRef.current?.close();
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2>
            {content.titlePrefix} <span>{content.titleAccent}</span>
          </h2>
          <p>{content.description}</p>
        </header>

        <div className="projects-filters" aria-label={content.filtersLabel}>
          {content.filters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={`projects-filter${activeFilter === filter.id ? " is-active" : ""}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-list" aria-live="polite">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-number" aria-hidden="true">
                <span>{String(content.items.indexOf(project) + 1).padStart(2, "0")}</span>
                <i />
              </div>

              <div className={`project-preview project-preview-${project.preview}`}>
                <ProjectPreview project={project} />
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies" aria-label={content.technologiesLabel}>
                  {project.technologies.map((technology) => {
                    const Icon =
                      technology === "C#" ? Terminal : technology.includes("SQL") ? Database : Layers3;

                    return (
                      <span className="project-tech" key={`${project.id}-${technology}`}>
                        <Icon size={15} aria-hidden="true" />
                        {technology}
                      </span>
                    );
                  })}
                </div>

                <a
                  className="project-link"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${content.repositoryLabel}: ${project.title}`}
                >
                  <FaGithub size={18} aria-hidden="true" />
                  {content.repositoryLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              <button
                type="button"
                className="project-open"
                aria-label={`${content.openProjectLabel}: ${project.title}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedProject(project);
                }}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

      </div>

      {selectedProject && (
        <dialog
          className="project-modal"
          ref={modalRef}
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
          onClose={() => {
            setSelectedProject(null);
            triggerRef.current?.focus();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeProjectDetails();
            }
          }}
        >
          <div className="project-modal-content">
            <button
              type="button"
              className="project-modal-close"
              aria-label={content.closeModalLabel}
              autoFocus
              onClick={closeProjectDetails}
            >
              <X size={20} aria-hidden="true" />
            </button>

            <span className="project-category">{selectedProject.category}</span>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p id="project-modal-description" className="project-description">
              {selectedProject.description}
            </p>

            <h3 className="project-modal-subtitle">{content.detailsLabel}</h3>
            <ul className="project-modal-details">
              {selectedProject.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <h3 className="project-modal-subtitle">{content.technologiesLabel}</h3>
            <div className="project-technologies">
              {selectedProject.technologies.map((technology) => (
                <span className="project-tech" key={`${selectedProject.id}-${technology}`}>
                  {technology}
                </span>
              ))}
            </div>

            <a
              className="project-link project-modal-link"
              href={selectedProject.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} aria-hidden="true" />
              {content.repositoryLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </dialog>
      )}
    </section>
  );
}
