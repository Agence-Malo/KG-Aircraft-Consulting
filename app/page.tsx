import Hero from "@/components/index/hero";
import { Navbar } from "@/components/nav";
import dynamic from "next/dynamic";
import WhyJethouse from "@/components/WhyJethouse";
import Expertise from "@/components/expertise";
import Footer from "@/components/footer";

const View = dynamic(() => import("@/components/view"));
const Quote = dynamic(() => import("@/components/quote"));
const About = dynamic(() => import("@/components/about"));
const Services = dynamic(() => import("@/components/services"));
const Fleet = dynamic(() => import("@/components/fleet"));
const Stripe = dynamic(() => import("@/components/tempStripe"));

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden justify-start">
      <Navbar invert={100} />
      <View />
      <Hero />
      {/*<Quote />
        <About />
        <Services />
        <Fleet />
        <Stripe />
        <WhyJethouse />
        <Expertise />
        <Footer />*/}
    </main>
  );
};

export default Home;
