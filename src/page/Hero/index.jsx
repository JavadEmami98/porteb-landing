import React from "react";
import Part1 from "../../component/Part1/Part1";
import Part2 from "../../component/Part2/Part2";
import Part3 from "../../component/Part3/Part3";
import Part4 from "../../component/Part4/Part4";
import Footer from "../../component/layout/footer/Footer";
import Header from "../../component/layout/header";

const Hero = () => {
  return (
    <div className="bg-[#ECF7EF]">
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
      {/* <Part4 /> */}
      <Footer />
    </div>
  );
};

export default Hero;
