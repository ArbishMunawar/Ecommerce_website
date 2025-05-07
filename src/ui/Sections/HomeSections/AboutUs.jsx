import React from "react";
import Sale from "../../../assets/Images/Sale.png";
const AboutUs = () => {
  return (
    <section className="md:grid md:grid-cols-2 bg-[#F3F5F7] ">
      <div>
        <img src={Sale} alt="" />
      </div>
      <div className="bg-[#F3F5F7] p-8 pb-0 lg:flex lg:flex-col lg:justify-center lg:gap-4">
        <h1 className="text-4xl font-semibold py-3">About Us</h1>
        <p className="text-lg font-normal pt-2 pb-4 lg:pr-[15%]" >3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
        Our customer service is always prepared to support you 24/7</p>
        <button className="underline font-semibold lg:flex lg:justify-start">Shop Now</button>
      </div>
    </section>
  );
};

export default AboutUs; 
