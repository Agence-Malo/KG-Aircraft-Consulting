import Image, { StaticImageData } from "next/image";
import Herve from "@/public/graphics/images/about/herve.webp";
import Nicolas from "@/public/graphics/images/about/nicolas.webp";
import Tina from "@/public/graphics/images/about/tina.webp";

const Profile = ({
  name,
  position,
  img,
  description,
}: {
  name: string;
  position: string;
  img: StaticImageData;
  description: string;
}) => {
  return (
    <div
      className={
        "w-full lg:w-1/3 flex flex-col justify-start items-center text-center gap-[2vh]"
      }
    >
      <div
        className={
          "w-full flex flex-col justify-center items-center gap-[0.5vh]"
        }
      >
        <Image
          src={img}
          alt={`${name}'s photo`}
          className={
            "size-[48vw] lg:size-[16vw] object-cover object-top rounded-full"
          }
        />
        <h3 className={"font-medium"}>{name}</h3>
        <label className={"normal-case italic"}>{position}</label>
      </div>
      <label className={"normal-case"}>{description}</label>
    </div>
  );
};

const Board = () => {
  return (
    <section
      className={
        "containerize lg:px-[12vw] py-[8vh] h-max flex justify-center items-start flex-col gap-[4vh]"
      }
    >
      <div
        className={"flex flex-col w-full justify-center items-start gap-[2vh]"}
      >
        <label className={"uppercase"}>&mdash; Meet our board</label>
        <h1>
          The Essence Of Two
          <br className={"lg:block hidden"} /> Decades Of Dedication
        </h1>
        <p>
          JetHouse Ltd. is a Maltese operator founded by 3 Belgian aviation
          veterans. JetHouse begins with a management team of 8 professionals,
          boasting a collective aviation experience of nearly 175 years. The
          whole team are known to me, and they have swiftly embraced JetHouse’s
          vision: to establish itself as the unequivocal, trusted, experienced,
          and customer-centric boutique operator in Europe.
        </p>
      </div>
      <div
        className={
          "w-full flex flex-col lg:flex-row justify-between items-center gap-[4vh]"
        }
      >
        <Profile
          img={Herve}
          name={"Hervé Laitat"}
          position={"CEO and founder of JetHouse"}
          description={
            "Former CEO and Accountable Manager of Abelag/Luxaviation, overseeing a fleet of 25 business jets."
          }
        />
        <Profile
          name={"Nicolas Willemot"}
          position={"CFO of JetHouse"}
          img={Nicolas}
          description={
            "Former CFO and co-founder of Abelag Group, bringing over 35 years of experience in business aviation."
          }
        />
        <Profile
          name={"Tina Boeckx"}
          position={"NPFO/NPCT"}
          img={Tina}
          description={
            "Former NPFO of Abelag between 2011 and 2018, as well as an experienced pilot."
          }
        />
      </div>
    </section>
  );
};

export default Board;
