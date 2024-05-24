const Expertise = () => {
  return (
    <div
      className={
        "w-full h-fit flex flex-col items-center text-center text-blue-950 py-[12vh]"
      }
    >
      <div className={"w-[2px] h-[60px] bg-blue-950/70 my-[50px]"}></div>
      <label className={"mb-5"}>Our expertise</label>
      <h3 className={"max-lg:text-xl font-medium w-[92vw] lg:w-[76vw]"}>
        At JetHouse, our team has forged strong relationships with leading
        business jet manufacturers such as Dassault Falcon, Bombardier, and
        Gulfstream. We deeply understand these aircraft and have built an
        extensive network with these manufacturers. <br />
        <br /> This specialisation enables us to guarantee precise technical
        management and flawless operational efficiency, which are essential for
        offering our clients an optimal flying experience.
      </h3>
      <div className={"w-[2px] h-[60px] bg-blue-950/70 my-[50px]"}></div>
      <div
        className={
          "flex flex-col items-center w-[92vw] lg:w-[76vw] bg-mountains bg-cover bg-bottom py-[10vh] gap-[4vh] mt-[8vh]"
        }
      >
        <h2 className={"top-20 z-0 text-white"}>
          Begin Your Journey <br /> With JetHouse
        </h2>
        <button className={"glass-button glass-button-light"}>
          <a href={"/graphics/Brochure%20-%20JetHouse%20VF.pdf"} download>
            DOWNLOAD THE BROCHURE
          </a>
        </button>
      </div>
    </div>
  );
};

export default Expertise;
