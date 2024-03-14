"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/background-circles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hello and welcome! 👋🏽",
      "I'm Olaniyi Gideon Olamide.",
      "However, I often go by the name Ola.",
      "I'm a self-taught developer located in Lagos, Nigeria.",
      "My passion lies in innovating and crafting exceptional solutions.",
      "I find joy in creating remarkable products.",
      "<BornToCreate />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="snap-start">
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden px-2"
      >
        <BackgroundCircles />
        <Image
          src="/avatar.png"
          width={100}
          height={100}
          alt="profile image"
          className="relative rounded-full object-cover"
        />
        <div className="z-20">
          <h2 className="test-sm uppercase font-semibold text-gray-500 pb-2 tracking-[1rem]">
            Software Engineer
          </h2>
          <h1 className="text-3xl sm:4xl lg:text-6xl">
            <span className="mr-3 capitalize">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="hero">About</button>
            </Link>
            <Link href="#experience">
              <button className="hero">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="hero">Skills</button>
            </Link>
            <Link href="projects">
              <button className="hero">Projects</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
