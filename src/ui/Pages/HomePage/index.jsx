import React, { useRef } from "react";
import Placeholder from "../../../assets/Images/Placeholder.png";
import Placeholder2 from "../../../assets/Images/P2.avif";
import Placeholder3 from "../../../assets/Images/P3.avif";
import LeftArrow from "../../../assets/icons/LeftArrow.jsx";
import RightArrow from "../../../assets/icons/RightArrow.jsx";
import FurnitureSection from '../../Sections/homeSections/FurnitureSection.jsx'
import ServicesSection from '../../Sections/homeSections/ServicesSection.jsx'
import SaleSection from "../../Sections/homeSections/SaleSection.jsx";
import ArticlesSection from "../../Sections/homeSections/ArticlesSection.jsx";
import NewsLetterSection from "../../Sections/homeSections/NewsLetterSection.jsx";
import NewArrival from "../../Sections/homeSections/NewArrival.jsx";

const HomePage = () => {
  const scrollRef = useRef(null);

  const scrollImages = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
    <div className="relative w-full lg:max-w-[1120px] mx-auto">
      <div className="hidden sm:flex absolute md:top-[8rem] lg:top-[13rem] top-[14rem] justify-between items-center w-full px-6 z-10">
        <button
          className="text-white p-2 rounded-full "
          onClick={() => scrollImages("left")}
        >
          <LeftArrow />
        </button>
        <button
          className="text-white p-2 rounded-full "
          onClick={() => scrollImages("right")}
        >
          <RightArrow />
        </button>
      </div>

      <div
        className="overflow-x-auto snap-x scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        <div className="flex gap-2">
          <img
            src={Placeholder}
            alt=""
            className="snap-start h-[20rem] w-full shrink-0 object-cover object-center lg:h-full px-8"
          />
          <img
            src={Placeholder2}
            alt=""
            className="snap-start w-full shrink-0 h-[20rem] object-cover px-8 lg:h-[32rem]"
          />
          <img
            src={Placeholder3}
            alt=""
            className="snap-start w-full shrink-0 h-[20rem] object-cover px-8 lg:h-[32rem]"
          />
        </div>
      </div>

      <div className="p-8 md:grid md:grid-cols-2 gap-15 lg:max-w-[1120px] mx-auto">
        <h2 className="text-4xl font-semibold md:text-[2.5rem] lg:text-6xl ">
          Simply Unique <span className="text-[#6C7275]">/</span>
          <br /> Simply Better.
        </h2>
        <div className="flex items-center">
        <h3 className="text-[#6C7275] pt-2">
          <span className="text-black font-semibold">3legant</span> is a gift & decorations store based in HCMC, Vietnam.
          Est since 2019.{" "}
        </h3>
        </div>
      </div>
    </div>

    <FurnitureSection />
    <NewArrival />
    <ServicesSection />
    <SaleSection />
    <ArticlesSection />
    <NewsLetterSection/>
    </>
  );
};

export default HomePage;
