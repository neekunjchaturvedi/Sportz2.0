import HeroSection from "./herosection";
import Navbar from "./navbar";
import PricingPlans from "./plans";
import WhyChooseUs from "./whychooseus";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <PricingPlans />
    </>
  );
}

export default Home;
