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
      <motion.video
        initial={{ bottom: "-24vh" }}
        animate={{ bottom: "-18vh" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={
          "w-full h-full object-cover absolute brightness-150 opacity-50 -z-10"
        }
        autoPlay
        muted
        preload={"none"}
        playsInline
        loop
      >
        <source src={"../graphics/videos/vapor.webm"} type={"video/webm"} />
      </motion.video>
      <div
        className={
          "bg-gradient-to-b from-transparent to-white absolute bottom-0 w-full h-[24vh] -z-10"
        }
      />
      <motion.h1
        initial={{ y: "-6vh", opacity: 0, scale: 1.05 }}
        animate={{ y: "-12vh", opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={"text-white md:text-center text-left uppercase"}
      >
        Not just another
        <br className={"md:block hidden"} />
        <span className={"md:hidden"}> </span>business aviation operator
      </motion.h1>
    </section>
  );
};

export default Hero;
