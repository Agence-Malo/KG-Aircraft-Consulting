"use client";
import logo from "@/public/graphics/images/logo-white.png";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full h-[280px] flex flex-row items-center justify-around bg-blue-950 text-white">
      <div className=" w-[1/3] flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt={"JetHouse logo"}
          className={"h-[6vh] w-auto self-start"}
        />
        <p className={"text-white/70 text-left"}>
          Your Boutique Aviation Operator <br /> Crafted With Soul
        </p>
        <a
          className={"self-start my-2"}
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
      </div>
      <div className="w-[1/3] relative flex flex-col font-light items-center justify-center">
        <h1 className="text-2xl font-bold my-4">Quick Links </h1>
        <a href={"/"} className={"text-white/70 font-semibold"}>
          Home
        </a>
        <a href={"/about"} className={"text-white/70"}>
          About Us
        </a>
        <a href={"/services"} className={"text-white/70"}>
          Our Team
        </a>
        <a href={"/fleet"} className={"text-white/70"}>
          Contact
        </a>
        <p className={" w-fit my-2"}>© 2024 All Rights Reserved. </p>
      </div>
      <div className="w-[1/3] flex flex-col text-right justify-end">
        <h1 className="text-2xl right-0 font-bold my-2">Get in touch</h1>
        <p className={"text-right text-white/70"}>
          Avenue 77 Business Centre,
          <br />
          Triq in-Negozju, Birkirkara
          <br />
          CBD 3010, Malta
          <br />
          E: hello@jethouse.aero
          <br />
          T: +32 476 26 42 68
          <br />
          <br />
          Pravicy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
