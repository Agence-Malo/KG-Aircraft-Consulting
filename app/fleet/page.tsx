import { Navbar } from "@/components/nav";
import Hero from "@/components/fleet/hero";
import Specs from "@/components/fleet/specs";
import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/view"));
const Gallery = dynamic(() => import("@/components/fleet/gallery"));

const Fleet = () => {
  return (
    <main className={"w-full flex flex-col justify-start items-center"}>
      <Navbar invert={100} />
      <View />
      <Hero />
      <Specs />
      <Gallery />
    </main>
  );
};

export default Fleet;
