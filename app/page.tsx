import About from "@/components/about";
import Contact from "@/components/contact-me";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import WorkExperience from "@/components/work-experience";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className=" bg-[#242424] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
    >
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Experience */}
      <WorkExperience />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact Me */}
      <Contact />

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/avatar.png"
              alt="goto-hero"
              width={100}
              height={100}
              quality={95}
            />
          </div>
        </footer>
      </Link>
    </main>
  );
}
