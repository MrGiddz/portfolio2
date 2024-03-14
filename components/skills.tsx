"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./skill-item";

type Props = {};

function Skills({}: Props) {
  const skills = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <section id="skills" className="snap-start">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
        <div className="grid grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillItem
              key={i}
              directionLeft={
                i <
                (Math.ceil(skills.length / 2) % 4 === 0
                  ? Math.ceil(skills.length / 2)
                  : Math.ceil(skills.length / 2) -
                    (Math.ceil(skills.length / 2) % 4))
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
