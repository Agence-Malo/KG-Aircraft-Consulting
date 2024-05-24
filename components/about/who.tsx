import Image from "next/image";
import plane from "@/public/graphics/images/about/hangar.webp";

const Who = () => {
  return (
    <section
      className={
        "containerize lg:px-[12vw] flex flex-col lg:flex-row-reverse justify-between items-center gap-[2vh] py-[8vh]"
      }
    >
      <Image
        src={plane}
        alt={"Parked jet inside a hangar."}
        className={"w-full lg:w-[32vw] h-auto"}
      />
      <div
        className={
          "w-full lg:w-[32vw] h-max flex flex-col justify-start items-start gap-[2vh] text-blue-950"
        }
      >
        <label>&mdash; Who we are</label>
        <h2>Your Boutique Aviation Operator Crafted With Soul</h2>
        <p className={"text-justify"}>
          JetHouse is not just another business aviation operator. We are a team
          of experienced and passionate business aviation professionals with a
          single objective: “Focus, and never deviate, from what business
          aviation clients expect from an operator.” At JetHouse, we want to
          restore the true meaning of what a boutique operation is.
        </p>
      </div>
    </section>
  );
};

export default Who;
