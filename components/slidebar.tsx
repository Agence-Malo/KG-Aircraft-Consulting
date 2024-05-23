"use client";
import { AnimatePresence, useScroll, motion } from "framer-motion";

const SlideBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div
      className={
        "fixed z-0 right-20 bottom-[40%] max-lg:right-2 w-[30px] h-[200px] opacity-80"
      }
    >
      <AnimatePresence>
        <motion.div
          className={"w-[2px] mx-auto h-[80%] mt-5 bg-blue-950"}
          style={{
            originY: 0,
            scaleY: scrollYProgress,
          }}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};
export default SlideBar;
