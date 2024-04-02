import About from "@/components/About";
// import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/* <Contact /> */}
    </main>
  );
}
