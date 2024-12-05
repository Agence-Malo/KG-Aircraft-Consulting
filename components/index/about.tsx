import Image from "next/image";
import Karol from "@/public/images/index/Karol Gueremy.webp";
import Falcon from "@/public/images/index/Falcon 6X.webp";

import Section, { Paragraph, Divider } from "@/components/section";
import Link from "next/link";

const About = () => (
  <div
    className={
      "w-full flex flex-col justify-center items-center bg-vitsippa-50"
    }
  >
    <Section title={"About Us"}>
      <div className={"section-content"}>
        <article
          className={
            "w-full lg:w-[42vw] gap-[6vh] lg:h-[32vw] flex flex-col justify-start items-start"
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
          <Link
            href={"/about-us"}
            className={
              "flex justify-center items-center gap-[0.6rem] bg-vitsippa-400/75 hover:bg-vitsippa-400/50 scale-100 focus:scale-90 transition-transform-colors duration-200 ease-in-out text-base px-[2vw] py-[0.75vh] rounded-full"
            }
          >
            Learn More
            <div
              className={
                "size-[0.5rem] bg-black rounded-full transition-colors duration-200 ease-in-out"
              }
            />
          </Link>
        </article>
        <Image
          src={Karol}
          alt={"Karole Gueremy"}
          width={Karol.width}
          height={Karol.height}
          className={"section-image"}
        />
      </div>
    </Section>
    <Section title={"Why choose KG Aircraft Consulting ?"}>
      <div className={"section-content"}>
        <article className={"section-article"}>
          <p className={"text-vitsippa-500 text-justify"}>
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
            classNames={{ p: "text-justify" }}
          />
          <Divider />
          <Paragraph
            title={"Unmatched Expertise"}
            content={
              "We collaborate with leading aircraft manufacturers and global trading experts to bring you the most efficient and sustainable solutions. By utilizing advanced technologies and fuel-efficient jets, we guarantee a travel experience that is both high-performing and environmentally responsible."
            }
            classNames={{ p: "text-justify" }}
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
