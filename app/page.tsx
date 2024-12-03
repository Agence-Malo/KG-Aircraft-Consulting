import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/view"));
import { Navbar } from "@/components/nav";
import Hero from "@/components/index/hero";
const Services = dynamic(() => import("@/components/index/services"));
const About = dynamic(() => import("@/components/index/about"));
const Footer = dynamic(() => import("@/components/footer"));

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden justify-start">
      <Navbar invert={850} />
      <View />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
