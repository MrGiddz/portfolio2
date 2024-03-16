import About from "@/components/about";
import Contact from "@/components/contact-me";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import WorkExperience from "@/components/work-experience";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();


  return (
    <main
      className=" bg-[#242424] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
    >
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <Hero pageInfo={pageInfo} />

      {/* About */}
      <About pageInfo={pageInfo}/>

      {/* Experience */}
      <WorkExperience experience={experience} />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact Me */}
      <Contact />

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/avatar.png"
              alt="goto-hero"
              width={100}
              height={100}
              quality={95}
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}

