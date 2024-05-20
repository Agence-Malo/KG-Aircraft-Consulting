"use client";

import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { flatten } from "lottie-colorify";
import arrow from "@/public/graphics/images/services/arrow.json";
import management from "@/public/graphics/images/services/management.webp";
import charter from "@/public/graphics/images/services/charter.webp";
import consulting from "@/public/graphics/images/services/consulting.webp";
import { StaticImageData } from "next/image";

const Banner = ({
  heading,
  image,
  screen,
}: {
  heading: string;
  image: StaticImageData;
  screen: string;
}) => {
  const arrowRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div
      className={`w-full lg:w-1/3 lg:h-screen h-[48vh] bg-cover ${image === consulting ? "bg-[75%_0]" : "bg-center"} text-white`}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
      onMouseEnter={() => {
        arrowRef.current?.setSpeed(1.5);
        arrowRef.current?.play();
      }}
      onMouseLeave={() => {
        arrowRef.current?.goToAndStop(0, true);
      }}
    >
      <button
        className={
          "w-full h-full flex flex-col justify-center items-center px-[28%] gap-[4vh] md:gap-[2vh] bg-black/50 hover:bg-black/25 [transition:_background_1000ms_ease-in-out]"
        }
      >
        <h3>{heading}</h3>
        <Lottie
          autoplay={false}
          loop={false}
          lottieRef={arrowRef}
          animationData={flatten("#FFFFFF", arrow)}
          className={"size-[10vw] md:size-[3vw]"}
        />
      </button>
    </div>
  );
};

const Services = () => {
  const [service, setService] = useState<
    "management" | "charter" | "consulting" | null
  >(null);

  return (
    <section
      className={
        "w-full h-max flex flex-col justify-center items-center text-center mt-[10vh] md:mt-[28vh] lg:mt-0"
      }
    >
      <div
        className={
          "containerize flex flex-col justify-center items-center py-[12vh]"
        }
      >
        <h4>
          Our services
          <br />
          &mdash;
        </h4>
        <h2 className={"md:w-[48vw]"}>
          Boutique At JetHouse Means That Our Experience Is At The Service Of
          The Aircraft Owner.
        </h2>
      </div>
      <div
        className={
          "flex lg:flex-row flex-col justify-between items-center w-full"
        }
      >
        <Banner
          heading={"Aircraft Management"}
          image={management}
          screen={""}
        />
        <Banner heading={"Private Jet Charter"} image={charter} screen={""} />
        <Banner
          heading={"Consulting Services"}
          image={consulting}
          screen={""}
        />
      </div>
    </section>
  );
};

export default Services;
