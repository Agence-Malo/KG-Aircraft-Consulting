"use client";
import montage from "../public/graphics/images/Montage.webp";
import Image from "next/image";
import { blob } from "node:stream/consumers";
import { Button } from "@nextui-org/react";

const Expertise = () => {
  return (
    <div
      className={
        "w-full h-[110vh] flex flex-col items-center text-center px-[15%] text-blue-950"
      }
    >
      <div className={"w-[2px] h-[60px] bg-blue-950/70 my-[50px]"}></div>
      <h2 className={"font-light text-xl mb-5"}>OUR EXPERTISE</h2>
      <p className={"text-2xl font-semibold"}>
        At JetHouse, our team has forged strong relationships with leading
        business jet manufacturers such as Dassault Falcon, Bombardier, and
        Gulfstream. We deeply understand these aircraft and have built an
        extensive network with these manufacturers. <br />
        <br /> This specialisation enables us to guarantee precise technical
        management and flawless operational efficiency, which are essential for
        offering our clients an optimal flying experience.
      </p>
      <div className={"w-[2px] h-[60px] bg-blue-950/70 my-[50px]"}></div>
      <div className={"relative flex flex-col items-center h-[350px] w-full"}>
        <Image src={montage} alt={"Montage"} className={" w-full h-full"} />
        <h1 className={"absolute top-20 z-20 text-3l font-light text-white"}>
          Begin Your Journey <br /> With JetHouse
        </h1>
        <Button
          radius={"none"}
          variant={"bordered"}
          className={
            "border-2 h-[50px]  font-light absolute text-xl bottom-[80px]  text-white border-white"
          }
        >
          <a href={"/graphics/Brochure%20-%20JetHouse%20VF.pdf"} download>
            DOWNLOAD THE BROCHURE
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Expertise;
