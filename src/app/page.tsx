import About from "./components/About";
import Calendar from "./components/Calendar";
import Documents from "./components/Documents";
import Footer from "./components/Footer";
import FunFacts from "./components/FunFacts";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Documents />
        <FunFacts />
      </main>
      <Footer />
    </>
  )
}
