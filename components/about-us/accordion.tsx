"use client";

import { Accordion as NextUIAccordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import commitment from "@/public/images/about-us/Our Commitments to Sustainable Business Aviation.webp";

import Section from "@/components/section";

const Accordion = () => {
  const accordion = [
    {
      title: "Charter using Sustainable Fuels (SAF)",
      content:
        "At KG Aircraft Consulting, we are dedicated to promoting the use of Sustainable Aviation Fuels (SAF), which significantly reduce CO2 emissions compared to traditional fuels. By offering this eco-conscious option to all our clients, we enable responsible travel without compromising on performance or luxury.",
    },
    {
      title: "Flight path optimization",
      content:
        "With state-of-the-art flight planning technology, we optimize routes in real-time to reduce fuel consumption, minimize emissions, and maximize operational efficiency. Every journey is designed to achieve the perfect balance of sustainability and convenience.",
    },
    {
      title: "Carbon Offsetting",
      content:
        "We provide comprehensive carbon offsetting programs that allow our clients to neutralize the environmental impact of their flights. By supporting global initiatives such as reforestation and renewable energy projects, we help turn every journey into a step toward a greener future.",
    },
    {
      title: "Purchase of New-Generation Jets",
      content:
        "We guide our clients in selecting new-generation aircraft that feature advanced technologies, delivering exceptional fuel efficiency and reduced CO2 emissions. Our recommendations are backed by close collaboration with manufacturers and market leaders to ensure optimal choices for performance and sustainability.",
    },
  ];

  return (
    <div
      className={
        "w-full flex flex-col justify-center items-center bg-vitsippa-50"
      }
    >
      <Section title={"Our Commitments to Sustainable Business Aviation"}>
        <div className={"section-content"}>
          <NextUIAccordion
            className={"w-full lg:w-[42vw]"}
            defaultExpandedKeys={["0"]}
          >
            {accordion.map((item, i) => (
              <AccordionItem
                key={i}
                textValue={item.title}
                title={<h2 className={"cursor-pointer"}>{item.title}</h2>}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 64 64"
                      className={"size-[1.81rem] fill-axolotl -rotate-90"}
                    >
                      <path d="M50,34H14c-1.104,0-2-0.896-2-2s0.896-2,2-2h36c1.104,0,2,0.896,2,2S51.104,34,50,34z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 64 64"
                      className={"size-[1.82rem] fill-axolotl"}
                    >
                      <path d="M 32 12 C 30.896 12 30 12.896 30 14 L 30 30 L 14 30 C 12.896 30 12 30.896 12 32 C 12 33.104 12.896 34 14 34 L 30 34 L 30 50 C 30 51.104 30.896 52 32 52 C 33.104 52 34 51.104 34 50 L 34 34 L 50 34 C 51.104 34 52 33.104 52 32 C 52 30.896 51.104 30 50 30 L 34 30 L 34 14 C 34 12.896 33.104 12 32 12 z"></path>
                    </svg>
                  )
                }
              >
                <p className={"text-vitsippa-500 pb-[2vh]"}>{item.content}</p>
              </AccordionItem>
            ))}
          </NextUIAccordion>
          <Image
            src={commitment}
            alt={"A truck refueling a jet"}
            width={commitment.width}
            height={commitment.height}
            className={"section-image"}
          />
        </div>
      </Section>
    </div>
  );
};

export default Accordion;
