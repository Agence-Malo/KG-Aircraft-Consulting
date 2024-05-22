"use client";
import Image from "next/image";
import image from "@/public/graphics/images/Falcon6X.webp";
import { Accordion, AccordionItem } from "@nextui-org/react";

const WhyJethouse = () => {
  return (
    <div className="flex px-5 h-fit py-5 flex-row bg-blue-50 text-blue-950  w-full">
      <div className={"w-1/2 max-lg:w-full px-[6vw]"}>
        <p className="text-3xl my-1 font-light">&mdash; Why Jethouse?</p>
        <p className=" text-5xl  font-semibold">
          The Passion To Deliver <br />A Good Service
        </p>
        <Accordion
          variant="light"
          className={"my-10"}
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem
            key="1"
            aria-label="Our Experimented Team"
            title={
              <p className="text-3xl font-semibold text-blue-950">
                Our Experienced Team
              </p>
            }
          >
            <p className={"text-xl"}>
              We are a founding management team of 8 people with over 175 years
              of combined experience in business aviation. We are equipped to
              advise and maintain the value of your aircraft asset. Including a
              French, Dutch, and Italian-speaking contingent, we’re always ready
              to assist. Led by a CEO with an eye on your aviation journey.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Our Technology"
            title={
              <p className="text-3xl font-semibold text-blue-950">
                Our Technology
              </p>
            }
          >
            <p className={"text-xl"}>
              Investing in state-of-the-art integrated aviation IT tools to
              address owners’ inquiries promptly, deliver accurate operational
              cost data, and ensure clear and transparent reporting. This tech
              advantage translates into a lean cost structure, benefitting the
              aircraft owner directly.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Beyond the Ordinary"
            title={
              <p className="text-3xl font-semibold text-blue-950">
                Beyond the Ordinary
              </p>
            }
          >
            <p className={"text-xl"}>
              Novel yet robust, built on a conservative business plan, backed by
              a credible team respected in the industry. We pride ourselves on
              being a transparent operator with no hidden commissions – a
              refreshing change in this business landscape.
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Our Founding Aircraft"
            title={
              <p className="text-3xl font-semibold text-blue-950">
                Our Founding Aircraft
              </p>
            }
          >
            <p className={"text-xl"}>
              Launched with the long-range three-engine Dassault Falcon 7X
              aircraft. Our Falcon is based in Brussels and is immediately
              available for charter.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={"w-1/2 max-lg:hidden flex items-center  h-auto"}>
        <Image className={"w-4/5 mx-auto"} src={image} alt={"Falcon 6X"} />
      </div>
    </div>
  );
};

export default WhyJethouse;
