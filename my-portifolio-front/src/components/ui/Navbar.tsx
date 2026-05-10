import '../../styles/globals.css'
import '../../styles/navbar.css'
import { Button } from './Button'
import { Download } from "lucide-react";

export function Navbar() {
  const links = ["Home","About", "Skills", "Projects", "Contact"]

  return (
    <nav className="navbar">
     <span className='green-text icon'>VS</span>
     <div className='menubar'>
      {links.map(link => (
        <a href={`#${link}`} key={link}>{link}</a>
      ))}
     </div>
     <Button variant='secondary' size='md' icon={Download} >
       Download CV
     </Button>
    </nav>
  )
}