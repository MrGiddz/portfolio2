"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./experience-card";
import { Experience } from "@/typings";

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  return (
    <section id="experience" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
          {experience.map((exp) => (
            <ExperienceCard experience={exp} key={exp._id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WorkExperience;
