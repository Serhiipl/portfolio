import About from "@/components/About";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
    </main>
  );
}
