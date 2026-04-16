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
        quote="I believe as human beings we are out of balance, out of sync with the earth."
        author="Kevin Richardson"
      />
      <CoreOfferings />
      <ParallaxDivider
        image="/assets/images/intare.PNG"
        quote="Climb mountains not so the world can see you, but so you can see the world."
        author="David McCullough Jr."
      />
      <WhyZoravia />
      <ParallaxDivider
        image="/assets/images/The Heart of Rwanda.png"
        quote="Travel is about the gorgeous feeling of teetering in the unknown—and finding connection."
        author="Anthony Bourdain"
      />
      <PlanningApproach />
      <ParallaxDivider
        image="/assets/images/Nature .jpg"
        quote="The world is a book, and those who do not travel read only one page."
        author="Saint Augustine"
      />
      <ClientValue />
      {/* <SpiritOfAfrica /> */}
    </>
  );
};





export default Home;
