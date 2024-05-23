"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className={"containerize h-screen flex justify-center items-center over"}
    >
      <video
        className={"w-full h-full object-cover object-center absolute -z-20"}
        autoPlay
        muted
        preload={"none"}
        playsInline
        loop
      >
        <source src={"../graphics/videos/aerial.mp4"} type={"video/mp4"} />
      </video>
      <div
        className={
          "bg-gradient-to-b from-transparent to-white absolute bottom-0 w-full h-[32vh] -z-10"
        }
      />
      <motion.h1
        initial={{ y: "-6vh", opacity: 0, scale: 1.05 }}
        animate={{ y: "-12vh", opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={"text-white md:text-center text-left font-normal"}
      >
        Not Just Another
        <br className={"md:block hidden"} />
        <span className={"md:hidden"}> </span>
        <span className={"font-bold"}>Business Aviation Operator</span>
      </motion.h1>
    </section>
  );
};

export default Hero;
