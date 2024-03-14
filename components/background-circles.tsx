"use client";
import { motion } from "framer-motion";

type Props = {};
const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-l-stone-400 rounded-full h-[100px] w-[100px] sm:h-[160px] sm:w-[160px] lg:h-[200px] lg:w-[200px] mt-52 animate-ping-1" />
      <div className="absolute border border-l-stone-400 rounded-full h-[160px] w-[160px] sm:h-[260px] sm:w-[260px]  lg:h-[300px] lg:w-[300px] mt-52 animate-ping-2" />
      <div className="absolute border border-l-stone-400 rounded-full h-[240px] w-[240px] sm:h-[380px] sm:w-[380px]  lg:h-[500px] lg:w-[500px] mt-52 animate-ping-3" />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[340px] w-[340px] sm:h-[480px] sm:w-[480px] lg:h-[650px] lg:w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-l-stone-400 rounded-full h-[450px] w-[450px] sm:h-[600px] sm:w-[600px] lg:h-[800px] lg:w-[800px] mt-52 animate-ping-4" />
    </motion.div>
  );
};

export default BackgroundCircles;
