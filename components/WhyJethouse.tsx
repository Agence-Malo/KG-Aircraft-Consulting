"use client";
import Image from "next/image";
import image from "@/public/graphics/images/Falcon6X.webp";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Opened = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      className={"size-[2.5rem] fill-blue-950"}
    >
      <path d="M 32 12 C 30.896 12 30 12.896 30 14 L 30 30 L 14 30 C 12.896 30 12 30.896 12 32 C 12 33.104 12.896 34 14 34 L 30 34 L 30 50 C 30 51.104 30.896 52 32 52 C 33.104 52 34 51.104 34 50 L 34 34 L 50 34 C 51.104 34 52 33.104 52 32 C 52 30.896 51.104 30 50 30 L 34 30 L 34 14 C 34 12.896 33.104 12 32 12 z"></path>
    </svg>
  );
};

const Closed = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      className={"size-[2.5rem] fill-blue-950"}
    >
      <path d="M50,34H14c-1.104,0-2-0.896-2-2s0.896-2,2-2h36c1.104,0,2,0.896,2,2S51.104,34,50,34z"></path>
    </svg>
  );
};

const WhyJethouse = () => {
  return (
    <div className="flex justify-between items-start gap-[8vw] py-[10vh] lg:flex-row flex-col bg-black/5 text-blue-950 containerize">
      <div className={"lg:w-[48vw] w-full"}>
        <label>&mdash; Why Jethouse</label>
        <h2>
          The Passion To Deliver <br />A Good Service
        </h2>
        <Accordion
          variant="light"
          className={"my-10"}
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem
            key="1"
            indicator={({ isOpen }) => (isOpen ? <Opened /> : <Closed />)}
            aria-label="Our Experimented Team"
            title={
              <h3 className="font-medium text-blue-950">
                Our Experienced Team
              </h3>
            }
          >
            <p>
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
            indicator={({ isOpen }) => (isOpen ? <Opened /> : <Closed />)}
            title={
              <h3 className="font-medium text-blue-950">Our Technology</h3>
            }
          >
            <p>
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
            indicator={({ isOpen }) => (isOpen ? <Opened /> : <Closed />)}
            title={
              <h3 className="font-medium text-blue-950">Beyond the Ordinary</h3>
            }
          >
            <p>
              Novel yet robust, built on a conservative business plan, backed by
              a credible team respected in the industry. We pride ourselves on
              being a transparent operator with no hidden commissions – a
              refreshing change in this business landscape.
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Our Founding Aircraft"
            indicator={({ isOpen }) => (isOpen ? <Opened /> : <Closed />)}
            title={
              <h3 className="font-medium text-blue-950">
                Our Founding Aircraft
              </h3>
            }
          >
            <p>
              Launched with the long-range three-engine Dassault Falcon 7X
              aircraft. Our Falcon is based in Brussels and is immediately
              available for charter.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
      <Image
        className={"lg:h-full lg:w-auto w-full h-auto"}
        src={image}
        alt={"Falcon 6X"}
      />
    </div>
  );
};

export default WhyJethouse;
