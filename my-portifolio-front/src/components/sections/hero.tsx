import '../../styles/globals.css'
import '../../styles/hero.css'
import { Button } from '../ui/Button';
import { FaGithub, FaLinkedin ,FaWhatsapp} from "react-icons/fa";
import type { portfolioContent } from "../../content";

export function Hero({ content }: { content: typeof portfolioContent["pt-BR"]["hero"] }) {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">{content.subtitle}</p>
                <h1 className="hero-title">{content.name}</h1>

                <h2 className="hero-role">{content.role}</h2>

                <p className="hero-description">
                    {content.description}
                </p>

                <div className="hero-buttons">
                    <Button variant="primary">{content.buttons.projects}</Button>
                    <Button variant="secondary">{content.buttons.contact}</Button>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/vinicius-vs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={content.socialLinks.github}
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/vinicius-stumpf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={content.socialLinks.linkedin}
                    >
                   
                       <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://wa.me/5547997199275"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={content.socialLinks.whatsapp}
                    >
                        <FaWhatsapp size={22} />
                    </a>
                </div>
            </div>
        </section>
    )
}