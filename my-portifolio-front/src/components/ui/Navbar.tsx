import { navbarContent, type NavbarLanguage } from '../../content/navbar';
import '../../styles/globals.css';
import '../../styles/navbar.css';
import { Button } from './Button';
import { Download } from 'lucide-react';

export function Navbar({ lang = 'pt' }: { lang?: NavbarLanguage }) {
  const content = navbarContent[lang];

  return (
    <nav className="navbar">
      <span className="green-text icon">VS</span>
      <div className="menubar">
        {content.links.map((link: { label: string; href: string }) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <Button variant="secondary" size="md" icon={Download}>
        Download CV
      </Button>
    </nav>
  );
}