import Image from "next/image";
import turbine from "@/public/images/about-us/Our Approach & Values.webp";
import Karol from "@/public/images/about-us/Karol Gueremy.webp";

import Section, { Divider, Paragraph } from "@/components/section";

const Articles = () => (
  <div
    className={
      "w-full flex flex-col justify-center items-center bg-vitsippa-50"
    }
  >
    <Section title={"Our Approach & Values"}>
      <div className={"section-content"}>
        <article className={"section-article"}>
          <p className={"text-vitsippa-500"}>
            At KG Aircraft Consulting, we believe in an approach that’s both
            strategic and personal. Our values form the core of everything we
            do, ensuring that each client receives support that’s precise,
            effective, and truly customized.
          </p>
          <Paragraph
            title={"Trust"}
            content={
              "We build lasting relationships founded on integrity,\ntransparency, and dedication."
            }
          />
          <Divider />
          <Paragraph
            title={"Expertise"}
            content={
              "Every recommendation is backed by years of experience and an unwavering commitment to high standards."
            }
          />
          <Divider />
          <Paragraph
            title={"Client-First Mindset"}
            content={
              "We prioritize each client’s unique goals, focusing on delivering impactful and meaningful results."
            }
          />
          <Divider />
        </article>
        <Image
          src={turbine}
          alt={"Jet turbine"}
          width={turbine.width}
          height={turbine.height}
          className={"section-image"}
        />
      </div>
    </Section>
    <Section title={"Meet The Founder"}>
      <div className={"section-content"}>
        <article
          className={
            "w-full lg:w-[42vw] flex flex-col justify-between items-center"
          }
        >
          <Paragraph
            title={"Karol Gueremy"}
            content={
              "A powerhouse in the aviation industry, Karol Gueremy brings unmatched expertise, dedication, and a keen understanding of client needs to every project she undertakes. Her unique blend of strategic insight and operational excellence allows her to navigate the complexities of aviation consulting with ease and precision.\n\nKarol began her journey as a Financial Auditor, where she developed a strong analytical foundation and a commitment to precision. Her transition into the aviation sector came in 1999 when she joined Masterjet as Controller. Her passion for the industry, combined with her dedication to excellence, quickly propelled her to leadership roles, ultimately becoming Associate Director of Masterjet, responsible for finance and HR.\n\nIn 2014, when Masterjet was acquired, Karol was appointed CEO of Luxaviation Portugal, where she led the company through a period of significant transformation and growth. The following year, in 2015, she became CEO of Unijet, continuing her legacy of driving strategic direction and operational excellence within the Luxaviation Group. Her expertise expanded further as she took on the role of Managing Director of Luxaviation Malta, achieving the prestigious Maltese AOC accreditation in 2021..\n\nIn 2024, Karol founded KG Aircraft Consulting (KGAC) with a vision to offer tailored consulting services that prioritize each client’s unique needs. Her approach is grounded in trust, integrity, and a genuine commitment to helping clients maximize the value of their investments. Karol’s years of experience, combined with her relentless pursuit of excellence, make her a trusted partner for aircraft owners and operators worldwide."
            }
            classNames={{ p: "text-justify" }}
          />
        </article>
        <Image
          src={Karol}
          alt={"Karol Gueremy"}
          width={Karol.width}
          height={Karol.height}
          className={
            "w-full lg:w-[46vw] h-[64vh] md:h-[92vh] lg:h-[38vw] object-cover object-[50%_40%] rounded-xl"
          }
        />
      </div>
    </Section>
  </div>
);

export default Articles;
