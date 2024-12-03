const Hero = () => {
  return (
    <section
      className={
        "w-full h-[90vh] md:h-screen flex flex-col justify-end items-center"
      }
    >
      <video
        className={
          "w-full h-[90vh] md:h-screen inset-0 object-cover object-[80%_0] md:object-center absolute -z-20"
        }
        autoPlay
        muted
        preload={"none"}
        playsInline
        loop
      >
        <source src={"../videos/aerial.webm"} type={"video/webm"} />
      </video>
      <h1 className={"text-white containerize py-[6vh]"}>
        Personalized Consulting for Aircraft Owners & Operators
      </h1>
    </section>
  );
};

export default Hero;
