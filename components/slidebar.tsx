"use client";
import { AnimatePresence, useScroll, motion, useSpring } from "framer-motion";

const SlideBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={"fixed z-0 right-[4vw] inset-y-[40%] w-[0.3vh] h-[20vh]"}>
      <div
        className={
          "h-full bg-black/25 flex flex-col justify-start items-center"
        }
      >
        <div className={"w-full h-[15%] bg-white mix-blend-difference"} />
        <motion.div
          className={
            "w-full mx-auto h-full bg-white flex flex-col justify-start items-center"
          }
          style={{
            originY: 0,
            scaleY: scaleY,
          }}
        />
        <div className={""} />
      </div>
    </div>
  );
};
export default SlideBar;
