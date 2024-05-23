"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import falcon7x from "@/public/graphics/images/Falcon-7X-JetHouse.webp";
import { useEffect, useState } from "react";
import { getWeatherData } from "@/app/actions";
import AutoScroll from "embla-carousel-auto-scroll";

const Strip = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      loop: true,
      speed: 2,
      align: "start",
    }),
  ]);
  const cities = [
    "Paris",
    "Brussels",
    "Valletta",
    "Los Angeles",
    "London",
    "New York",
    "Tokyo",
    "São Paulo",
  ];
  const [temperatures, setTemperatures] = useState<string[]>([]);

  useEffect(() => {
    getWeatherData(cities).then((res) => {
      setTemperatures(res);
    });
  }, []);

  return (
    <section
      className={
        "w-full h-[15vh] pb-[10vh] text-blue-950 bg-black/5 font-semibold flex"
      }
    >
      <div className="embla my-auto" ref={emblaRef}>
        <div className="embla__container cursor-grab">
          {temperatures.map((temp, index) => (
            <div key={index} className={"embla__slide w-fit mx-4 self-center"}>
              <h2 className={"w-fit select-none uppercase"}>{temp}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strip;
