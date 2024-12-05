"use client";

import Image from "next/image";
import operator from "@/public/images/index/services/Operator Audits.webp";
import sales from "@/public/images/index/services/Aircraft Sales & Acquisitions.webp";
import charter from "@/public/images/index/services/Private JetCharter.webp";
import corporate from "@/public/images/index/services/Corporate Well-Being Services.webp";

import { useState } from "react";

const Services = () => {
  const tabs = [
      {
        title: "Operator Audits",
        content:
          "Selecting the right operator is crucial to ensure both safety and operational efficiency. We perform thorough audits of potential or current operators to verify that they meet your unique standards and regulatory requirements. Our audits cover every aspect, from operational capabilities to financial transparency, giving you confidence in the partners you choose.",
        image: operator,
      },
      {
        title: "Aircraft Sales & Acquisitions",
        content:
          "Buying or selling an aircraft is a significant investment that requires expert guidance and a deep understanding of the market. At KG Aircraft Consulting, we simplify this complex process by leveraging our extensive network and close partnerships with leading manufacturers and key trading players worldwide.\n" +
          "From identifying the right aircraft type to negotiating favorable terms, we ensure a seamless experience tailored to each client’s specific needs. Our collaboration with industry leaders guarantees that every recommendation aligns with the latest innovations and market insights, maximizing the value of every transaction. Whether you’re a first-time buyer or a seasoned owner, KGAC provides the expertise and strategic advice needed to navigate the complexities of aircraft sales and acquisitions with confidence.",
        image: sales,
      },
      {
        title: "Private Jet Charter",
        content:
          "Enjoy bespoke private jet charter services tailored to fit your specific travel needs. KG Aircraft Consulting offers access to an extensive fleet of aircraft, ensuring that every journey meets the highest standards of luxury, flexibility, and discretion. Our team coordinates each detail of your travel, providing a seamless experience so you can focus on what matters most.",
        image: charter,
      },
      {
        title: "Corporate Well-Being Services",
        content:
          "The business aviation sector is demanding, often exposing employees like pilots, crews, and executives to stress, irregular schedules, and high performance expectations. KGAC offers tailored well-being solutions that combine physical coaching, such as mobility training and muscle relaxation, with psychological support like stress management, mental resilience coaching, and mindfulness practices. These programs are designed to enhance safety, performance, and overall team satisfaction, integrating seamlessly into your company culture with management support and innovative delivery methods, including virtual sessions and team seminars.",
        image: corporate,
      },
    ],
    [currentTab, setCurrentTab] = useState<(typeof tabs)[number]>(tabs[0]),
    [fade, setFade] = useState<boolean>(false);

  const navigate = (direction: "left" | "right") => {
    setFade(true);
    setTimeout(() => {
      const currentIndex = tabs.findIndex(
        (tab) => tab.title === currentTab.title,
      );
      let nextIndex = currentIndex + (direction === "left" ? -1 : 1);
      if (nextIndex < 0) nextIndex = tabs.length - 1;
      if (nextIndex >= tabs.length) nextIndex = 0;
      setCurrentTab(tabs[nextIndex]);
      setFade(false);
    }, 400);
  };

  return (
    <div className={"w-full flex flex-col justify-center items-center"}>
      <section
        className={
          "w-full px-[4vw] lg:px-[22vw] flex flex-col justify-center items-center gap-[2vh] my-[16vh] text-center"
        }
      >
        <h2>Business Aviation for a Sustainable Future</h2>
        <h3>
          KG Aircraft Consulting combines decades of aviation expertise with a
          forward-thinking and eco-conscious approach, delivering tailored
          solutions that empower aircraft owners and operators to achieve
          operational excellence while embracing environmental responsibility.
        </h3>
      </section>
      <section
        className={"containerize flex flex-col justify-center items-baseline"}
      >
        <div
          className={
            "w-full flex justify-start items-baseline flex-wrap border-b-[0.15vh] border-vitsippa-600 py-[2vh]"
          }
        >
          <h2 className={"w-1/4"}>Services</h2>
          <div
            className={
              "w-full lg:w-3/4 pr-[8vw] lg:pr-[4vw] [mask:_linear-gradient(to_right,_black_90%,_transparent_100%)] flex justify-start items-baseline gap-[6vh] overflow-y-hidden overflow-x-auto"
            }
          >
            {tabs.map((tab) => (
              <button
                type={"button"}
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setCurrentTab(tab);
                    setFade(false);
                  }, 400);
                }}
                key={tab.title}
                className={`
                  ${
                    tab.title === currentTab.title
                      ? "text-coffee font-semibold"
                      : "text-vitsippa-500 font-medium"
                  } [transition:_color_0.2s_ease-in-out,_font-weight_0.2s_ease-in-out] flex flex-col justify-end items-center text-nowrap
                py-[2vh] lg:py-0`}
              >
                {tab.title}
                <span className={"font-semibold h-0 invisible"}>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div
          className={`w-full flex justify-end items-center py-[6vh] lg:pb-0 lg:pt-[4vw] ${fade ? "opacity-0" : "opacity-100"} transition-opacity duration-400 ease-in-out`}
        >
          <article
            className={
              "w-full lg:w-3/4 flex justify-center items-center flex-col lg:flex-row gap-[6vh] md:gap-[4vw]"
            }
          >
            <p className={"text-vitsippa-500 text-justify w-full lg:w-1/2"}>
              {currentTab.content}
            </p>
            <Image
              src={currentTab.image}
              alt={currentTab.title}
              width={currentTab.image.width}
              height={currentTab.image.height}
              className={
                "w-full lg:w-1/2 h-[36vh] lg:h-[33vw] rounded-xl object-cover object-center"
              }
            />
          </article>
        </div>
        <div
          className={
            "w-full flex justify-start items-center gap-[2vh] md:gap-[0.5vw] pb-[4vw]"
          }
        >
          <button
            type={"button"}
            onClick={() => navigate("left")}
            className={
              "size-[5vh] flex justify-center items-center p-[1.5vh] border-[0.15vh] border-black rounded-full"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              className={"size-full"}
            >
              <path d="M 16 4 L 8 12 L 16 20 L 16 4 z"></path>
            </svg>
          </button>
          <button
            type={"button"}
            onClick={() => navigate("right")}
            className={
              "size-[5vh] flex justify-center items-center p-[1.5vh] border-[0.15vh] border-black rounded-full"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              className={"size-full"}
            >
              <path d="M 8 4 L 8 20 L 16 12 L 8 4 z"></path>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
