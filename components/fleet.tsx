"use client";
import fleet from "@/public/graphics/images/fleet.webp";
import falcon7x from "@/public/graphics/images/Falcon-7X-JetHouse.webp";
import global6500 from "@/public/graphics/images/Global-6500.webp";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, PropsWithChildren } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { useAnimate, useInView } from "framer-motion";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

const Fleet = () => {
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [box, animate] = useAnimate();
  const [background, animateBackground] = useAnimate();
  const isInView = useInView(box);

  useEffect(() => {
    animate(
      box.current,
      { x: "10vw", opacity: 0 },
      { duration: 1, ease: "easeInOut" },
    );
    animateBackground(
      background.current,
      { x: "-10vw", opacity: 0 },
      { duration: 1, ease: "easeInOut" },
    );
  }, []);

  useEffect(() => {
    if (isInView) {
      animate(
        box.current,
        { x: 0, opacity: 1 },
        { duration: 1, ease: "easeInOut" },
      );
      animateBackground(
        background.current,
        { x: 0, opacity: 1 },
        { duration: 1, ease: "easeInOut" },
      );
    }
  }, [isInView]);

  return (
    <section
      className={
        "w-full lg:px-[20vw] h-[128dvh] flex justify-end text-blue-950 items-center bg-black/5"
      }
    >
      <Image
        src={fleet}
        ref={background}
        alt={"Photo from plane cabin looking towards the sunset"}
        className={
          "w-2/3 h-[85vh] left-0 object-cover absolute overflow-y-clip -z-10"
        }
      />
      <div
        className={
          "flex h-[60vh] max-lg:w-[70vw] px-[4vw] w-[38vw] bg-white flex-col justify-center items-start gap-[2vh]"
        }
        ref={box}
      >
        <label>&mdash; Our fleet</label>
        <h2>Boutique Means Size</h2>
        <p>
          Therefore, we pledge to cap our fleet of managed aircraft at 15
          aircraft to ensure a continuous high standard of service for all
          clients, whether aircraft owners or charter clients.
        </p>
        <div className={"embla flex flex-col justify-center items-center"}>
          <div className={"flex justify-center items-center w-full"}>
            <button className={"embla__prev z-10"} onClick={scrollPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 72 72"
                className={"fill-black/25 size-[1.5rem]"}
              >
                <path d="M46.023,59.542c-1.008,0-2.016-0.378-2.794-1.137L23.183,38.844c-0.771-0.752-1.206-1.785-1.206-2.863	s0.435-2.11,1.206-2.863L43.19,13.596c1.582-1.542,4.113-1.512,5.657,0.069c1.542,1.581,1.512,4.114-0.069,5.656l-17.074,16.66	l17.113,16.698c1.581,1.542,1.611,4.075,0.069,5.656C48.103,59.138,47.063,59.542,46.023,59.542z"></path>
              </svg>
            </button>
            <div className={"embla__viewport"} ref={emblaRef}>
              <div className="embla__container">
                <Image
                  onClick={() => router.push("/fleet")}
                  src={falcon7x}
                  alt={"Falcon 7X"}
                  className={"embla__slide f100 cursor-pointer"}
                />
                <Image
                  src={global6500}
                  alt={"Falcon 7X"}
                  className={"embla__slide f100"}
                />
              </div>
            </div>
            <button className={"embla__next"} onClick={scrollNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 72 72"
                className={"fill-black/25 size-[1.5rem]"}
              >
                <path d="M25.977,59.542c-1.04,0-2.079-0.403-2.863-1.207c-1.542-1.581-1.512-4.114,0.069-5.656l17.113-16.698l-17.074-16.66	c-1.581-1.542-1.611-4.075-0.069-5.656c1.544-1.582,4.076-1.612,5.657-0.069l20.008,19.522c0.771,0.752,1.206,1.785,1.206,2.863	s-0.435,2.11-1.206,2.863L28.771,58.404C27.992,59.164,26.984,59.542,25.977,59.542z"></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "w-full flex justify-center items-center embla__dots gap-[1vw]"
            }
          >
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot size-[0.5rem] rounded-full ${index === selectedIndex ? "bg-black" : "bg-black/25"}`.concat(
                  index === selectedIndex
                    ? " embla__dot--selected bg-black"
                    : "",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
