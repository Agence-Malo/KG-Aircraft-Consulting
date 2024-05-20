import Hero from "@/components/hero";
import { Navbar } from "@/components/nav";
import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/view"));
const Quote = dynamic(() => import("@/components/quote"));
const About = dynamic(() => import("@/components/about"));
const Services = dynamic(() => import("@/components/services"));
const Fleet = dynamic(() => import("@/components/fleet"));

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      <Navbar invert={100} />
      <View />
      <Hero />
      <Quote />
      <About />
      <Services />
      <Fleet />
    </main>
  );
};

export default Home;
