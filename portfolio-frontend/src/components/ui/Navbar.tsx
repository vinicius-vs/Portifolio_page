import type { Language } from '../../content';
import { portfolioContent } from '../../content';
import '../../styles/globals.css';
import '../../styles/navbar.css';
import { Button } from './Button';
import { Download } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';

export function Navbar({
  lang,
  onLanguageChange,
}: {
  lang: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const content = portfolioContent[lang].navbar;
  const resume = portfolioContent[lang].resume;
  const nextLanguage = lang === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <nav className="navbar">
      <span className="green-text icon">VS</span>
      <div className="menubar">
        {content.links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="navbar-actions">
        <button
          type="button"
          className="language-switch"
          role="switch"
          aria-checked={lang === 'en-US'}
          onClick={() => onLanguageChange(nextLanguage)}
          aria-label={content.languageSwitch.ariaLabel}
        >
          <span className="language-switch-label">{content.languageSwitch.portuguese}</span>
          <span className="language-switch-label">{content.languageSwitch.english}</span>
          <span className="language-switch-thumb" />
        </button>
        <Button
          variant="secondary"
          size="md"
          icon={Download}
          className="cv-download-button"
          onClick={() => {
            void downloadResume(resume, lang).catch((error: unknown) => {
              const detail = error instanceof Error ? error.message : String(error);
              window.alert(`${content.downloadCv}: ${detail}`);
            });
          }}
        >
          {content.downloadCv}
        </Button>
      </div>
    </nav>
  );
}