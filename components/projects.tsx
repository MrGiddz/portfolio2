"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section id="projects" className="snap-start">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>

        <div className="flex relative overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1 , y:0}}
                transition={{ duration: 1.5 }}
                src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                alt="project"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index} of {projects.length}:
                  </span>{" "}
                  UPS Clone
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium sint harum similique pariatur vero repudiandae
                  soluta debitis ratione provident optio. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Accusantium sint harum
                  similique pariatur vero repudiandae soluta debitis ratione
                  provident optio.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </section>
  );
}

export default Projects;
