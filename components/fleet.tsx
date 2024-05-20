"use client";
import fleet from "@/public/graphics/images/fleet.webp";
import falcon7x from "@/public/graphics/images/Falcon-7X-JetHouse.webp";
import global6500 from "@/public/graphics/images/Global-6500.webp";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Fleet = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);
  return (
    <section
      className={
        "w-full h-[95vh] md:px-[8vw] flex justify-end text-blue-950 items-center bg-blue-50"
      }
    >
      <Image
        src={fleet}
        alt={"Photo from plane cabin looking towards the sunset"}
        className={
          "w-2/3 h-[85vh] left-0 object-cover absolute overflow-y-clip z-10"
        }
      />
      <div
        className={
          "flex h-[60vh] px-10 w-[40vw] bg-white flex-col justify-center items-start z-20"
        }
      >
        <h4>&mdash; Our fleet</h4>
        <h2>Boutique means</h2>
        <p className={"text-sm"}>
          Therefore, we pledge to cap our fleet of managed aircraft at 15
          aircraft to ensure a continuous high standard of service for all
          clients, whether aircraft owners or charter clients.
        </p>
        <div className={"embla"} ref={emblaRef}>
          <div className="embla__container">
            <Image
              src={falcon7x}
              alt={"Falcon 7X"}
              className={"embla__slide f100"}
            />
            <Image
              src={global6500}
              alt={"Falcon 7X"}
              className={"embla__slide f100"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
