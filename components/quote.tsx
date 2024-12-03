"use client";

import { IconLogo } from "@/public/images/logo";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Quote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={"w-full h-screen bg-pattern bg-repeat bg-[25%]"}>
      <div
        className={
          "containerize h-full flex flex-col justify-center items-center text-blue-950 gap-[4vh] bg-gradient-to-b from-white via-white/50 to-white"
        }
      >
        <h2
          className={`text-center ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
        >
          Your Boutique Aviation Operator
          <br className={"hidden md:block"} />
          <span className={"md:hidden"}> </span>
          Crafted With Soul
        </h2>
        <p
          className={`md:w-[48vw] text-justify ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula, tellus nec gravida porttitor, arcu ex ornare est, eget
          tristique ipsum libero sed felis. Praesent libero sapien, aliquam non
          enim posuere, mollis placerat libero. Donec at felis eget nisl
          ultrices tempus eu a lacus. Cras ultricies dignissim scelerisque.
          Nullam eu enim ipsum. Suspendisse diam sem, ullamcorper et odio eget,
          lobortis bibendum nibh. Duis accumsan semper aliquam. Aliquam sit amet
          quam ac dolor porttitor mattis sed sed sapien.
        </p>
        <span ref={ref}>
          <IconLogo
            mono={false}
            className={`h-[8vh] w-[8vh] ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
          />
        </span>
      </div>
    </section>
  );
};

export default Quote;
