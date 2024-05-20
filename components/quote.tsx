import { IconLogo } from "@/public/graphics/images/logo";

const Quote = () => {
  return (
    <section
      className={
        "containerize h-screen bg-white flex flex-col justify-center items-center text-blue-950 gap-[4vh]"
      }
    >
      <h2 className={"text-center"}>
        Your Boutique Aviation Operator
        <br className={"hidden md:block"} />
        <span className={"md:hidden"}> </span>
        Crafted With Soul
      </h2>
      <p className={"md:w-[48vw] text-justify"}>
        JetHouse is a fresh face in business aviation, holding a Maltese Air
        Operator Certificate (AOC MT-82). JetHouse offers bespoke business
        aircraft management, charter, and consulting services. We stand as the
        prime choice when larger operators fall short of meeting the discerning
        expectations of business aircraft owners.
      </p>
      <IconLogo mono={false} className={"w-[6vh]"} />
    </section>
  );
};

export default Quote;
