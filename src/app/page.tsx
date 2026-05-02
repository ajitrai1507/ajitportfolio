import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <AnimatedSection>
        <About />
      </AnimatedSection>
      
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </main>
  );
}
