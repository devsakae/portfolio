import About from "./components/About";
import FunFacts from "./components/FunFacts";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <FunFacts />
    </main>
  )
}
