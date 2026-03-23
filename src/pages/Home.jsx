import React from "react";
import SpiritOfAfrica from "../components/SpiritOfAfrica";

import HomeIntro from "../components/HomeIntro";
import ParallaxDivider from "../components/ParallaxDivider";
import CoreOfferings from "../components/CoreOfferings";
import WhyTravel from "../components/WhyTravel";
import WhyZoravia from "../components/WhyZoravia";
import PlanningApproach from "../components/PlanningApproach";
import ClientValue from "../components/ClientValue";

const Home = () => {
  return (
    <>
      <HomeIntro />
      <WhyTravel />
      <ParallaxDivider
        image="/assets/images/tura.PNG"
        quote="Every journey into the wild is a step towards understanding our planet's soul."
      />
      <CoreOfferings />
      <ParallaxDivider
        image="/assets/images/intare.PNG"
        quote="Every journey into the wild is a step towards understanding our planet's soul."
      />
      <WhyZoravia />
      <ParallaxDivider
        image="/assets/images/The Heart of Rwanda.png"
        quote="A thoughtful process replaces uncertainty."
      />
      <PlanningApproach />
      <ParallaxDivider
        image="/assets/images/Nature .jpg"
        quote="Seamless travel is designed with quiet precision."
      />
      <ClientValue />
      {/* <SpiritOfAfrica /> */}
    </>
  );
};





export default Home;
