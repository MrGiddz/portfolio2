"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type InputProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<InputProps>();
  const onSubmit: SubmitHandler<InputProps> = (formData) => {
    window.location.href = `mailto:mideolaniyi@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <section id="skills" className="snap-start">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I would like to work with you.{" "}
            <span className="underline decoration-[#F7AB0A]/50">
              Let&apos;s Talk
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center justify-center">
              <PhoneIcon className="mr-3 text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+23480576865</p>
            </div>
            <div className="flex items-center justify-center">
              <EnvelopeIcon className="mr-3 text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">mideolaniyi@outlook.com</p>
            </div>
            <div className="flex items-center justify-center">
              <MapPinIcon className="mr-3 text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Lagos Nigeria</p>
            </div>
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contact-input"
                type="text"
              />
              <input
                placeholder="Email"
                className="contact-input"
                type="text"
                {...register("email")}
              />
            </div>

            <input
              placeholder="Subject"
              className="contact-input"
              type="text"
              id=""
              {...register("subject")}
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contact-input"
            />

            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
