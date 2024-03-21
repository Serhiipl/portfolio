import About from "@/components/About";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
