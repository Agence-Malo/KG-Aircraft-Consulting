import about from "@/public/graphics/images/about.webp";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      className={
        "w-full lg:containerize h-screen flex flex-col lg:flex-row justify-center items-start gap-[4vh] lg:gap-[4vw]"
      }
    >
      <Image
        src={about}
        alt={"Herve Laitat"}
        className={
          "w-full h-[128vw] lg:h-full lg:w-auto object-cover object-bottom"
        }
      />
      <div
        className={
          "containerize flex flex-col justify-start items-start gap-[2vh]"
        }
      >
        <h4>&mdash; About us</h4>
        <h2>
          A Team Of Aviation Experts Driven By Trust, Integrity And Service.
        </h2>
        <p className={"w-full text-justify"}>
          We are a team of experienced and passionate business aviation
          professionals with a single objective: “Focus, and never deviate, from
          what business aviation clients expect from an operator.” At JetHouse,
          we want to restore the true meaning of what a boutique operation is.
        </p>
        <Link href={"#"} className={"glass-button glass-button-dark"}>
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default About;
