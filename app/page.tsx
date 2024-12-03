import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/view"));
import { Navbar } from "@/components/nav";
import Hero from "@/components/index/hero";
const Services = dynamic(() => import("@/components/index/services"));

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden justify-start">
      <Navbar invert={100} />
      <View />
      <Hero />
      <Services />
    </main>
  );
};

export default Home;
