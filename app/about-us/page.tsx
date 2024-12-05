import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Navbar } from "@/components/nav";
const View = dynamic(() => import("@/components/view"));
import Hero from "@/components/hero";
const Quote = dynamic(() => import("@/components/about-us/quote"));
const Articles = dynamic(() => import("@/components/about-us/articles"));
const Accordion = dynamic(() => import("@/components/about-us/accordion"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs = () => {
  return (
    <main className={"w-full flex flex-col justify-start items-center"}>
      <Navbar invert={500} />
      <View />
      <Hero title={"About Us"} />
      <Quote />
      <Articles />
      <Accordion />
      <Footer />
    </main>
  );
};

export default AboutUs;
