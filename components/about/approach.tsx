"use client";

import Image from "next/image";
import cabin from "@/public/graphics/images/about/cabin.webp";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const Approach = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    animate(
      scope.current,
      { x: "-10vw", opacity: 0 },
      { duration: 1, ease: "easeInOut" },
    );
  }, []);

  useEffect(() => {
    if (isInView)
      animate(
        scope.current,
        { x: 0, opacity: 1, delay: 1 },
        { duration: 1, ease: "easeInOut" },
      );
  }, [isInView]);

  return (
    <section
      className={
        "containerize flex flex-col lg:flex-row justify-center items-center gap-[4vh] lg:gap-[8vw] py-[8vh]"
      }
    >
      <Image
        ref={scope}
        src={cabin}
        alt={
          "Jet cabin featuring a double-bed with drinks placed on a plateau and a pair of headphones."
        }
        className={"h-full lg:h-auto lg:w-[32vw] w-auto"}
      />
      <div
        className={
          "w-full lg:w-[34vw] h-max flex flex-col justify-center items-start gap-[2vh]"
        }
      >
        <label>&mdash; Our approach</label>
        <h2>
          &quot;Boutique At JetHouse Means That Our Experience Is At The Service
          Of The Aircraft Owner.&quot;
        </h2>
        <p className={"text-justify"}>
          <b>Boutique means size.</b> Therefore, we pledge to cap our fleet of
          managed aircraft at 15 aircraft to ensure a continuous high standard
          of service for all clients, whether aircraft owners or charter
          clients.
        </p>
        <p className={"text-justify"}>
          <b>Boutique means human touch.</b> Therefore, our clients not only
          rely on a dedicated point of contact for the organization of their
          flights, but the management team is also personally involved all the
          way.
        </p>
        <p className={"text-justify"}>
          <b>Boutique means attention to detail.</b> Therefore besides the
          personalized service we strive to deliver, we also give the same
          attention to the cost of operating our owner’s aircraft, as if they
          were our own, committing to transparency in everything we deliver.
        </p>
      </div>
    </section>
  );
};

export default Approach;
