import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience
};

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] span-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 xl:w-[200px] object-contain object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript"
          />
          <Image
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript"
          />
          <Image
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript"
          />
          <Image
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
