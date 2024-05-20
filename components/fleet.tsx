import fleet from "@/public/graphics/images/fleet.webp";
import Image from "next/image";

const Fleet = () => {
  return (
    <section
      className={
        "w-full h-[72vh] md:px-[8vw] flex justify-end items-center bg-blue-100"
      }
    >
      <Image
        src={fleet}
        alt={"Photo from plane cabin looking towards the sunset"}
        className={
          "w-5/6 h-[56vh] left-0 object-cover absolute overflow-y-clip z-0"
        }
      />
      <div className={"flex flex-col justify-center items-start z-10 bg-white"}>
        <h4>&mdash; Our fleet</h4>
        <h2>Boutique means</h2>
      </div>
    </section>
  );
};

export default Fleet;
