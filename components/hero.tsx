"use client";

import { motion } from "framer-motion";
import { FullLogo } from "@/public/graphics/images/logo";

const Hero = () => {
  return (
    <section
      className={
        "w-full h-[90vh] md:h-screen max-h-[90vh] md:max-h-screen min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center gap-[2vh]"
      }
    >
      <video
        className={
          "w-full h-[90vh] md:h-screen inset-0 object-cover object-[80%_0] md:object-center absolute -z-20"
        }
        autoPlay
        muted
        preload={"none"}
        playsInline
        loop
      >
        <source src={"../graphics/videos/aerial.webm"} type={"video/webm"} />
      </video>
      <motion.span
        initial={{ y: "-6vh", opacity: 0, scale: 1.05 }}
        animate={{ y: "0", opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FullLogo
          mono={true}
          className={"w-[48vw] md:w-[32vw] lg:w-[18vw] fill-white"}
        />
      </motion.span>
      <motion.h1
        initial={{ y: "6vh", opacity: 0, scale: 1.05 }}
        animate={{ y: "0", opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={
          "text-white md:text-center text-center containerize font-light"
        }
      >
        Website Coming Soon
      </motion.h1>
      {/*<div
        className={
          "bg-gradient-to-b from-transparent to-white w-full h-[32vh] -z-10"
        }
      />*/}
    </section>
  );
};

export default Hero;
