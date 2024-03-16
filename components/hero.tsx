"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/background-circles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import useScrambleAnimation from "@/hooks/useTextScramble";
import { useState } from "react";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [headerText, setText] = useState<string>(pageInfo.role);

  const delay = 140; // Adjust delay as needed
  const scrambledText = useScrambleAnimation(headerText, delay);

  const [text, count] = useTypewriter({
    words: pageInfo.extraInfo,
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
        <motion.div
          initial={{
            y: -50,
          }}
          transition={{
            duration: 2.5,
          }}
          whileInView={{ y: 0 }}
        >
          <Image
            src={urlFor(pageInfo.heroImage).url()}
            width={100}
            height={100}
            alt="profile image"
            className="relative rounded-full object-cover"
          />
        </motion.div>
        <div className="z-20">
          <div className="h-8 w-full">
            <h2 className="test-sm role-text uppercase font-semibold text-gray-500 pb-2 tracking-[1rem]">
              {scrambledText}
            </h2>
          </div>

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
