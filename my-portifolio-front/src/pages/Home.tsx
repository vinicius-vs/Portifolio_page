import { About } from "../components/sections/About";
import { Hero } from "../components/sections/hero";
import { Experience } from "../components/sections/Experience";
import { Navbar } from "../components/ui/Navbar";


export default function Home() {

  const language = "pt";
  return (
    <div>
      <Navbar lang={language} />
      <Hero language={language} />
      <About lang={language} />
      <Experience lang={language} />
    </div>

  )
}