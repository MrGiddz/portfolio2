"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const navigate = useRouter();
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            network={social.network}
            bgColor="gray"
            style={{
              height: "30px",
              width: "30px",
              margin: "0 5px",
            }}
          />
        ))}
      </motion.div>

      {/* Avatar */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center text-gray-300 cursor-pointer"
        onClick={() => navigate.push("#contact")}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
