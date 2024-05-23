import about from "@/public/graphics/images/about.webp";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      className={
        "w-full lg:containerize h-screen flex flex-col lg:flex-row justify-between items-start gap-[4vh] lg:gap-[8vw]"
      }
    >
      <Image
        src={about}
        alt={"Herve Laitat"}
        className={
          "w-full h-[100dvh] lg:h-[90dvh] lg:w-auto object-cover object-bottom"
        }
      />
      <div
        className={
          "flex flex-col justify-start items-start gap-[3vh] text-blue-950"
        }
      >
        <label>&mdash; About us</label>
        <h2>
          A Team Of Aviation
          <br className={"lg:block hidden"} />
          <span className={"lg:hidden"}> </span>
          Experts Driven By Trust,
          <br className={"lg:block hidden"} />
          <span className={"lg:hidden"}> </span>Integrity And Service.
        </h2>
        <p className={"lg:w-[75%] w-full text-justify"}>
          We are a team of experienced and passionate business aviation
          professionals with a single objective: “Focus, and never deviate, from
          what business aviation clients expect from an operator.” At JetHouse,
          we want to restore the true meaning of what a boutique operation is.
        </p>
        <Link href={"/about"} className={"glass-button glass-button-dark"}>
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default About;
