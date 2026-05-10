import '../../styles/globals.css'
import '../../styles/hero.css'
import { LucideFolderGit, LinkIcon, Mail, MessageCircle } from "lucide-react";
import { Button } from '../ui/Button';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">- Olá, eu sou</p>

                <h1 className="hero-title">Vinicius Stumpf</h1>

                <h2 className="hero-role">Software Engineer</h2>

                <p className="hero-description">
                    Desenvolvedor de software apaixonado por criar soluções escaláveis e eficientes...
                </p>

                <div className="hero-buttons">
                    <Button variant="primary">Ver Projetos</Button>
                    <Button variant="secondary">Entrar em Contato</Button>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/seu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LucideFolderGit size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkIcon size={22} />
                    </a>

                    <a href="mailto:seuemail@email.com">
                        <Mail size={22} />
                    </a>

                    <a
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={22} />
                    </a>
                </div>
            </div>
        </section>
    )
}