"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import falcon7x from "@/public/graphics/images/Falcon-7X-JetHouse.webp";
import { useEffect, useState } from "react";
import { getWeatherData } from "@/app/actions";
import AutoScroll from "embla-carousel-auto-scroll";

const Strip = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()]);
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
      console.log(res);
    });
  }, []);
  return (
    <section
      className={
        "w-full h-[15vh] mb-[5vh] border-red-500 border-1 text-blue-950 bg-blue-50"
      }
    >
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {temperatures.map((temp, index) => (
              <div
                key={index}
                className={
                  "embla__slide w-fit self-center border-1 border-red-600"
                }
              >
                <p className={"embla__slide__number text-4xl f50 w-[30vw]"}>
                  {temp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
