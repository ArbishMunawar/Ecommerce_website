import React from "react";
import Living from "../../../assets/Images/Living.png";
import Bedroom from "../../../assets/Images/Bedroom.png";
import Kitchen from "../../../assets/Images/Kitchen.png";
const FurnitureSection = () => {
  return (
    <section className="lg:max-w-[1120px] mx-auto px-8">
      <div className="md:grid md:grid-cols-2 gap-6 ">
        <div className="relative md:mt-6">
          <img src={Living} alt="" />
          <h2 className="absolute top-8 px-8 text-2xl font-semibold">
            Living Room
          </h2>
          <button className="absolute top-18 underline px-8 text-sm">Shop Now</button>
        </div>

        <div className="mt-6">
          <div className="relative">
            {" "}
            <img src={Bedroom} alt="" />
            <h2 className="absolute top-25 px-8 text-2xl font-semibold">
              Bedroom
            </h2>
            <button className="absolute top-34 underline px-8 text-sm">Shop Now</button>
          </div>

          <div className="relative mt-6">
            {" "}
            <img src={Kitchen} alt="" />
            <h2 className="absolute top-25 px-8 text-2xl font-semibold">
              Kitchen
            </h2>
            <button className="absolute top-34 underline px-8 text-sm">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
