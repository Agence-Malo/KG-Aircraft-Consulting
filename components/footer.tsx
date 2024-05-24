"use client";
import logo from "@/public/graphics/images/logo-white.png";
import Image from "next/image";
import { useView } from "@/context/view";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname(),
    { openView } = useView();

  return (
    <footer className="containerize max-lg:px-5 flex flex-col md:gap-[1vh] gap-[2vh] items-center justify-center bg-blue-950 text-white py-[6vh]">
      <div
        className={
          "w-full flex md:flex-row flex-col gap-[2vh] md:gap-0 justify-between items-center"
        }
      >
        <div
          className={
            "md:w-1/3 w-full flex md:justify-start justify-center items-start"
          }
        >
          <Image
            src={logo}
            alt={"JetHouse logo"}
            className={"h-[6vh] w-auto"}
          />
        </div>
        <p
          className={
            "text-white text-center md:hidden w-full flex justify-center items-center"
          }
        >
          Your Boutique Aviation Operator <br /> Crafted With Soul
        </p>
        <a
          className={"md:hidden w-full flex justify-center items-center"}
          href={"https://www.linkedin.com/company/jethouse-ltd/"}
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            className={"size-[6vh] fill-white m-[-1vh]"}
          >
            <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"></path>
          </svg>
        </a>
        <div className={"w-5/6 h-[0.25] md:hidden bg-blue-50/50"} />
        <h1 className="text-2xl font-bold my-4 w-1/3 flex justify-center items-center">
          Quick Links
        </h1>
        <div
          className={
            "w-full md:hidden flex flex-col justify-start items-center gap-[1vh] md:gap-0"
          }
        >
          <Link
            href={"/"}
            className={`${path === "/" && "font-bold"} text-white`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${path === "/about" && "font-bold"} text-white`}
          >
            About Us
          </Link>
          <Link href={"/about/#team"} className={`text-white`}>
            Our Team
          </Link>
          <button
            onClick={() => openView("contact")}
            className={`${path === "/contact" && "font-bold"} text-white`}
          >
            Contact
          </button>
        </div>
        <div className={"w-5/6 h-[0.25] md:hidden bg-blue-50/50"} />
        <h1 className="text-2xl font-bold my-2 w-1/3 flex justify-center md:justify-end items-center">
          Get in touch
        </h1>
        <p className={"text-justify text-white md:hidden"}>
          Avenue 77 Business Centre,
          <br />
          Triq in-Negozju, Birkirkara
          <br />
          CBD 3010, Malta
        </p>
        <a href={"mailto:hello@jethouse.aero"} className={"md:hidden"}>
          E: hello@jethouse.aero
        </a>
        <a href={"tel:0032476264268"} className={"md:hidden"}>
          T: +32 476 26 42 68
        </a>
      </div>
      <div className={"w-5/6 h-[0.25] md:hidden bg-blue-50/50"} />
      <div
        className={
          "w-full flex md:flex-row flex-col justify-between items-start"
        }
      >
        <div className="w-1/3 flex flex-col items-start justify-center">
          <p
            className={
              "text-white text-left hidden w-full md:flex justify-start items-center"
            }
          >
            Your Boutique Aviation Operator <br /> Crafted With Soul
          </p>
          <a
            href={"https://www.linkedin.com/company/jethouse-ltd/"}
            target={"_blank"}
            className={"hidden md:block"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className={"size-[6vh] fill-white m-[-1vh]"}
            >
              <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"></path>
            </svg>
          </a>
        </div>
        <div className="w-1/3 hidden md:flex flex-col font-light items-center justify-center">
          <Link
            href={"/"}
            className={`${path === "/" && "font-bold"} text-white`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${path === "/about" && "font-bold"} text-white`}
          >
            About Us
          </Link>
          <Link href={"/about/#team"} className={`text-white`}>
            Our Team
          </Link>
          <button
            onClick={() => openView("contact")}
            className={`${path === "/contact" && "font-bold"} text-white`}
          >
            Contact
          </button>
        </div>
        <div className="w-1/3 hidden md:flex flex-col text-right justify-end">
          <p className={"md:text-right text-justify text-white"}>
            Avenue 77 Business Centre,
            <br />
            Triq in-Negozju, Birkirkara
            <br />
            CBD 3010, Malta
          </p>
          <a href={"mailto:hello@jethouse.aero"}>E: hello@jethouse.aero</a>
          <a href={"tel:0032476264268"}>T: +32 476 26 42 68</a>
        </div>
      </div>
      <div
        className={
          "w-full flex md:flex-row flex-col justify-between items-center gap-[1vh] md:gap-0"
        }
      >
        <label
          className={
            "md:w-1/3 w-full flex md:justify-start justify-center items-center"
          }
        >
          Credits
        </label>
        <label className={"md:w-1/3 w-full flex justify-center items-center"}>
          © 2024 All Rights Reserved.
        </label>
        <label
          className={
            "md:w-1/3 w-full flex md:justify-end justify-center items-center"
          }
        >
          Privacy Policy
        </label>
      </div>
    </footer>
  );
};

export default Footer;
