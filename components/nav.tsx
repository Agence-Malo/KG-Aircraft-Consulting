"use client";

import { useEffect, useState } from "react";
import { useView } from "@/context/view";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Button from "@/components/button";
import { FullLogo } from "@/public/images/logo";
import { UrlObject } from "node:url";

export const Close = () => {
  const { openView } = useView();

  return (
    <button type={"button"} onClick={() => openView(null)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        className={
          "lg:size-[1.5vw] size-[4vh] lg:hover:rotate-90 transition-transform duration-200 ease-in-out fill-white"
        }
      >
        <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
      </svg>
    </button>
  );
};

export const Social = () => {
  return (
    <div
      className={"flex flex-col justify-center items-start w-full gap-[2vh]"}
    >
      <small>
        <span className={"font-medium text-lg"}>Headquarters</span>
        <br />
        Bâtiment 37, Hangar 4,
        <br />
        Avenue de l’Europe
        <br />
        93350 Le Bourget Cedex,
        <br />
        France
      </small>
      <a href={""} target={"_blank"}>
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
  );
};

export const Connect = () => {
  return (
    <div
      className={
        "w-full flex justify-start items-center flex-wrap gap-x-[1vh] gap-y-[1vh] uppercase"
      }
    >
      <Link
        href={"https://wa.me/+33620304540"}
        target={"_blank"}
        className={"connect-link"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          className={"h-[1rem] w-auto fill-axolotl"}
        >
          <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 36.065 11.10725 39.869719 13.03125 43.136719 L 10.214844 53.683594 L 21.277344 51.208984 C 24.450344 52.983984 28.106 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 28.269 50 24.803687 48.864875 21.929688 46.921875 L 15.791016 48.294922 L 17.353516 42.439453 C 15.250516 39.493453 14 35.896 14 32 C 14 22.059 22.059 14 32 14 z M 24.472656 21.736328 C 24.105656 21.736328 23.515672 21.871969 23.013672 22.417969 C 22.520672 22.964969 21.113281 24.278844 21.113281 26.964844 C 21.113281 29.640844 23.057078 32.23675 23.330078 32.59375 C 23.603078 32.96075 27.100531 38.639266 32.644531 40.822266 C 37.240531 42.632266 38.179547 42.273688 39.185547 42.179688 C 40.183547 42.093688 42.408328 40.866703 42.861328 39.595703 C 43.313328 38.323703 43.312875 37.232906 43.171875 37.003906 C 43.034875 36.781906 42.676859 36.644094 42.130859 36.371094 C 41.584859 36.097094 38.906297 34.777656 38.404297 34.597656 C 37.909297 34.417656 37.542547 34.323141 37.185547 34.869141 C 36.818547 35.415141 35.778125 36.643953 35.453125 37.001953 C 35.138125 37.368953 34.823344 37.411672 34.277344 37.138672 C 33.731344 36.865672 31.975531 36.292594 29.894531 34.433594 C 28.275531 32.992594 27.182188 31.208063 26.867188 30.664062 C 26.551188 30.119062 26.832469 29.821828 27.105469 29.548828 C 27.353469 29.310828 27.652781 28.916563 27.925781 28.601562 C 28.189781 28.277563 28.282891 28.056453 28.462891 27.689453 C 28.651891 27.332453 28.555922 27.007375 28.419922 26.734375 C 28.284922 26.460375 27.226234 23.765406 26.740234 22.691406 C 26.332234 21.787406 25.905672 21.760953 25.513672 21.751953 C 25.196672 21.735953 24.829656 21.736328 24.472656 21.736328 z"></path>
        </svg>
        <span>WhatsApp</span>
      </Link>
      <Link href={"tel:+33620304540"} className={"connect-link"}>
        <span>+33 6 20 30 45 40</span>
      </Link>
      <Link
        href={"mailto:sales@kg-aircraft-consulting.com"}
        className={"connect-link"}
      >
        <span>sales@kg-aircraft-consulting.com</span>
      </Link>
    </div>
  );
};

const Nav = () => {
  const path = usePathname(),
    { openView } = useView();

  const links: { href: string | UrlObject; label: string }[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about-us",
      label: "About Us",
    },
  ];

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`fixed left-0 top-0 z-40 min-h-[100dvh] max-h-max lg:w-[32vw] w-full lg:px-[2vw] px-[4vw] py-[2vh] bg-axolotl text-white flex justify-between items-start flex-col overflow-x-hidden overflow-y-auto`}
    >
      <div className={"w-full flex flex-col justify-center items-start"}>
        <div className={"w-full flex justify-end items-center"}>
          <Close />
        </div>
        <div
          className={
            "w-full flex flex-col justify-center items-start text-5xl gap-[1vh] font-light text-vitsippa-300"
          }
        >
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <h1 className={`${path === link.href && "text-white"} nav-link`}>
                {link.label}
              </h1>
            </Link>
          ))}
          <button onClick={() => openView("contact")}>
            <h1 className={"nav-link"}>Contact</h1>
          </button>
        </div>
      </div>
      <div
        className={"w-full flex flex-col justify-center items-start gap-[3vh]"}
      >
        <span className={"lg:block hidden"}>
          <Social />
        </span>
        <div
          className={
            "lg:hidden flex flex-col justify-center items-start gap-[2vh] w-full"
          }
        >
          <Social />
        </div>
        <div className={"w-full h-[0.25vh] bg-white"} />
        <div
          className={
            "flex flex-col justify-center items-start gap-[4vh] w-full mb-[8vh]"
          }
        >
          <Link href={"/"}>
            <FullLogo mono={true} className={"h-[6vh] w-auto"} />
          </Link>
          <Connect />
        </div>
      </div>
    </motion.nav>
  );
};

export const Navbar = ({ invert }: { invert: number }) => {
  const [scrolled, scroll] = useState<boolean>(false),
    { openView } = useView();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const threshold = invert;
      if (position > threshold) scroll(true);
      else if (position <= threshold) scroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <div
        className={`fixed top-0 w-full h-[12vh] bg-gradient-to-b from-white ${scrolled ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-in-out`}
      />
      <section
        className={`fixed z-30 w-[92vw] px-[2vw] pb-[1.25vh] top-[2vh] flex justify-between items-center border-b-[0.15vh] border-white`}
      >
        <div className={"w-1/3 flex justify-start items-center"}>
          <button
            onClick={() => openView("nav")}
            className={`flex justify-center items-center flex-col lg:w-[2vw] w-[6vw] group gap-[0.5vh] lg:hover:gap-[0.75vh] transition-[gap] duration-200 ease-in-out ${scrolled ? "fill-black" : "fill-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 8"
              className={"burger-bar"}
            >
              <rect width="128" height="8" rx="4" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 8"
              className={"burger-bar"}
            >
              <rect width="128" height="8" rx="4" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 8"
              className={"burger-bar"}
            >
              <rect width="128" height="8" rx="4" />
            </svg>
          </button>
        </div>

        <div className={"w-1/3 flex justify-center items-center"}>
          <Link href={"/"}>
            <FullLogo mono={true} className={"w-[16vh] py-[1vh]"} />
          </Link>
        </div>

        <div className={"w-1/3 flex justify-end items-center"}>
          <Button
            label={{
              default: "Get in touch",
              compact: "Contact",
            }}
            variant={"solid"}
            onPress={() => openView("contact")}
          />
        </div>
      </section>
    </>
  );
};

export default Nav;
