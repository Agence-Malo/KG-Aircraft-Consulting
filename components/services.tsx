"use client";

import React, { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { flatten } from "lottie-colorify";
import arrow from "@/public/graphics/images/services/arrow.json";
import management from "@/public/graphics/images/services/management.webp";
import charter from "@/public/graphics/images/services/charter.webp";
import consulting from "@/public/graphics/images/services/consulting.webp";
import Image, { StaticImageData } from "next/image";

const Banner = ({
  heading,
  image,
  screen,
  id,
  setService,
}: {
  setService: (service: "management" | "charter" | "consulting") => void;
  heading: string;
  id: string;
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
          onClick={() => {
            setService(id as "management" | "charter" | "consulting");
          }}
        />
      </button>
    </div>
  );
};

const Services = () => {
  const [service, setService] = useState<
    "management" | "charter" | "consulting" | null
  >(null);
  const Close = () => {
    return (
      <button
        className={"fixed right-10 top-10 z-50"}
        type={"button"}
        onClick={() => setService(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          className={
            "lg:size-[1.5vw] size-[4vh] lg:hover:rotate-90 transition-transform duration-200 ease-in-out fill-white"
          }
        >
          <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
        </svg>
      </button>
    );
  };
  const comps = {
    management: (
      <div
        className={
          service == "management"
            ? "animated-entry w-full h-screen text-white"
            : "hidden"
        }
      >
        <Image
          className={"w-full min-h-full h-auto absolute -z-10"}
          src={management}
          alt={"management"}
        />
        <Close />
        <div className={"w-full h-full bg-blue-900/50 text-white/80"}>
          <div
            className={
              "w-[50%] pt-20 pl-[15%] flex flex-col items-start text-start"
            }
          >
            <h1 className={"font-light py-10"}>Aircraft Management</h1>
            <p className={"block font-light"}>
              We are a team of experienced and passionate business aviation
              professionals with a single objective: “Focus, and never deviate,
              from what business aviation clients expect from an operator.” At
              JetHouse, we want to restore the true meaning of what a boutique
              operation is.
            </p>
          </div>
          <h1
            className={
              "font-light absolute text-3xl text-start pl-[15%] bottom-[50%]"
            }
          >
            Aircraft Management & Aircraft CAMO
          </h1>
          <div
            className={
              "w-screen absolute bottom-[25%] h-[20%] px-10 gap-x-5 flex justify-center items-center text-white/80"
            }
          >
            <div className={"w-full h-full flex bg-blue-950"}>
              <p className={"text-xl font-light px-5 mx-auto my-auto"}>
                Operational Management <br /> of the aircraft Flight <br />
                Coordination
              </p>
            </div>
            <div className={"w-full h-full flex bg-blue-950"}>
              <p className={"text-xl font-light px-5 mx-auto my-auto"}>
                Financial, Fiscal, Legal <br /> & Administrative <br /> support
              </p>
            </div>
            <div className={"w-full h-full flex bg-blue-950"}>
              <p className={"text-xl font-light px-5 mx-auto my-auto"}>
                Provision of <br /> Operational <br /> Control
              </p>
            </div>
            <div className={"w-full h-full flex bg-blue-950"}>
              <p className={"text-xl font-light px-5 mx-auto my-auto"}>
                Control & <br /> Reporting
              </p>
            </div>
            <div className={"w-full h-full flex bg-blue-950"}>
              <p className={"text-xl font-light px-5 mx-auto my-auto"}>
                CAMO by <br /> JetHouse
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    charter: (
      <div
        className={
          service == "charter"
            ? "animated-fade w-full h-screen text-white"
            : "hidden"
        }
      >
        <Image
          className={"w-full min-h-full h-auto absolute -z-10"}
          src={charter}
          alt={"charter"}
        />
        <Close />
        <div className={"w-full h-full bg-blue-900/50 text-white/80"}>
          <div
            className={
              "w-[50%] pt-20 pl-[15%] flex flex-col items-start text-start"
            }
          >
            <h1 className={"font-light py-10"}>Private Jet Charter</h1>
            <p className={"block font-light"}>
              From the moment you step aboard to the warmth of our farewell,
              every flight is crafted to leave an indelible impression. Our
              commitment is to provide not just a means to an end but a series
              of memorable moments.
            </p>
          </div>
        </div>
      </div>
    ),
    consulting: (
      <div
        className={
          service == "consulting"
            ? "animated-entry-right w-full h-screen text-white"
            : "hidden"
        }
      >
        <Image
          className={"w-full min-h-full h-auto absolute -z-10"}
          src={consulting}
          alt={"consulting"}
        />
        <Close />
        <div className={"w-full h-full bg-blue-900/50 text-white/80"}>
          <div
            className={
              "w-[50%] pt-20 pl-[15%] flex flex-col items-start text-start"
            }
          >
            <h1 className={"font-light py-10"}>Consulting Services</h1>
            <p className={"block font-light"}>
              Our consulting services are informed by a deep well of industry
              knowledge and a network of connections, providing you with
              unparalleled insights and opportunities. At JetHouse, we believe
              informed decisions are the bedrock of successful aircraft
              ownership.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section
      className={
        "w-full h-max flex flex-col justify-center items-center text-center mt-[10vh] md:mt-[28vh] lg:mt-0"
      }
    >
      {service ? (
        <div className={"w-screen h-screen inset-0 fixed z-50"}>
          {comps[service]}
        </div>
      ) : null}
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
          id={"management"}
          setService={setService}
        />
        <Banner
          setService={setService}
          heading={"Private Jet Charter"}
          image={charter}
          screen={""}
          id={"charter"}
        />
        <Banner
          heading={"Consulting Services"}
          image={consulting}
          screen={""}
          id={"consulting"}
          setService={setService}
        />
      </div>
    </section>
  );
};

export default Services;
