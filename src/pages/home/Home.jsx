import React from "react";
import Banner from "./sections/Banner";
import ChefeSection from "./sections/ChefeSection";
import Pricing from "./sections/Pricing";
import Sliding from "../../components/slidering/Sliding";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <ChefeSection></ChefeSection>

      <Sliding></Sliding>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
