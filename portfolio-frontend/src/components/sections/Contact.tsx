import { ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";
import "../../styles/contact.css";
import type { portfolioContent } from "../../content";

type ContactContent = typeof portfolioContent["pt-BR"]["contact"];

const contactIcons: Record<string, IconType> = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
};

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-copy">
          <span className="contact-eyebrow">{content.eyebrow}</span>
          <h2>
            {content.titlePrefix} <span>{content.titleAccent}</span>
          </h2>
          <p>{content.description}</p>
        </div>

        <div className="contact-links">
          {content.links.map((link) => {
            const Icon = contactIcons[link.id];

            return (
              <a
                className="contact-link"
                href={link.href}
                key={link.id}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={link.ariaLabel}
              >
                <span className="contact-link-icon">
                  <Icon size={21} aria-hidden />
                </span>
                <span className="contact-link-copy">
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
