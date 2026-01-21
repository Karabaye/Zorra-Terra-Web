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
      <ParallaxDivider
        image="/assets/imgs/lion.png"
        quote="Every journey into the wild is a step towards understanding our planet's soul."
      />
      <CoreOfferings />
      <WhyTravel />
      <SpiritOfAfrica />
    </>
  );
};

export default Home;
