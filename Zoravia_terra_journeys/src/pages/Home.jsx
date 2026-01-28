import React from "react";
import SpiritOfAfrica from "../components/SpiritOfAfrica";

import HomeIntro from "../components/HomeIntro";
import ParallaxDivider from "../components/ParallaxDivider";
import CoreOfferings from "../components/CoreOfferings";
import WhyTravel from "../components/WhyTravel";

const Home = () => {
  return (
    <>
      <HomeIntro />
      <WhyTravel />
       <ParallaxDivider
        image="/assets/imgs/tura.PNG"
        quote="Every journey into the wild is a step towards understanding our planet's soul."
      />
      <CoreOfferings />
      <ParallaxDivider
        image="/assets/imgs/intare.PNG"
        quote="Every journey into the wild is a step towards understanding our planet's soul."
      />
      {/* <SpiritOfAfrica /> */}
    </>
  );
};

export default Home;
