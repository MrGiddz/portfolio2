"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <section id="about" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/avatar.png"
          className="w-36 h-36 sm:w-56 sm:h-56 bg-white/80 object-contain -mb-28 md:mb-0 flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base m-0">
            Hey there, I&apos;m Olaniyi Gideon Olamide, but most folks just call
            me Olamide. Back in 2016, I kicked off my journey in software
            development, diving headfirst into a world filled with endless
            possibilities. Since then, I&apos;ve been wearing many hats, from
            freelancing gigs to teaming up with agencies and startups. I&apos;ve
            got my hands dirty in all sorts of tech stuff, like frontend and
            backend development, tinkering with network setups, and even taking
            the lead on some projects. I thrive on turning complex ideas into
            real-world solutions, whether it&apos;s tweaking lines of code or
            crafting seamless user experiences. For me, it&apos;s not just about
            the tech; it&apos;s about making a meaningful impact in this
            ever-changing tech landscape.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
