import Image from "next/image";
import Karole from "@/public/images/index/Karole Gueremy.webp";
import Falcon from "@/public/images/index/Falcon 6X.webp";

import Section, { Paragraph, Divider } from "@/components/section";
import Button from "@/components/button";
import Link from "next/link";

const About = () => (
  <div
    className={
      "w-full flex flex-col justify-center items-center bg-vitsippa-50"
    }
  >
    <Section title={"About Us"}>
      <div
        className={
          "w-full flex justify-between items-start flex-col lg:flex-row gap-[6vh] lg:gap-0"
        }
      >
        <article
          className={
            "w-full lg:w-[32vw] flex flex-col justify-start items-start gap-[4vh]"
          }
        >
          <h3 className={"text-justify"}>
            We are forward-thinking aviation consultancy dedicated to delivering
            exceptional, tailored solutions for aircraft owners and operators.
            With a commitment to precision, trust, and innovation, we provide
            strategic guidance and support that align seamlessly with each
            client’s unique vision. KGAC brings together deep industry expertise
            and a client-first approach to elevate the standards of aviation
            consulting.
          </h3>
          <Link href={"/about-us"}>
            <Button label={"Learn More"} variant={"flat"} dark />
          </Link>
        </article>
        <Image
          src={Karole}
          alt={"Karole Gueremy"}
          width={Karole.width}
          height={Karole.height}
          className={"section-image"}
        />
      </div>
    </Section>
    <Section title={"Why choose KG Aircraft Consulting ?"}>
      <div className={"section-content"}>
        <article
          className={
            "w-full h-max gap-[6vh] lg:gap-0 lg:h-[32vw] flex flex-col justify-between items-center"
          }
        >
          <p className={"text-vitsippa-500"}>
            By partnering with KG Aircraft Consulting, you are embracing a new
            vision of private aviation. One that seamlessly combines excellence,
            comfort, and a commitment to sustainability. We provide an
            opportunity to travel responsibly while upholding the highest
            standards of quality, innovation, and service.
          </p>
          <Paragraph
            title={"Environmental responsibility"}
            content={
              "Every flight we manage is designed to minimize its carbon footprint and adhere to the strictest environmental standards. From sustainable aviation fuels (SAF) to carbon offset programs, we ensure that your journeys align with a greener future without compromising on performance or luxury."
            }
          />
          <Divider />
          <Paragraph
            title={"Unmatched Expertise"}
            content={
              "We collaborate with leading aircraft manufacturers and global trading experts to bring you the most efficient and sustainable solutions. By utilizing advanced technologies and fuel-efficient jets, we guarantee a travel experience that is both high-performing and environmentally responsible."
            }
          />
          <Divider />
        </article>
        <Image
          src={Falcon}
          alt={"Falcon 6X"}
          width={Falcon.width}
          height={Falcon.height}
          className={"section-image"}
        />
      </div>
    </Section>
  </div>
);

export default About;
