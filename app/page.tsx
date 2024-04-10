import About from "@/components/About";
import ContactSection from "@/components/ContactSection";

import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center ml-20 sm:ml-0 px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ContactSection />
    </main>
  );
}
