import React from "react";
import drawer from "../../../assets/Images/drawer2.png";
import sofa from "../../../assets/Images/sofa2.png";

const NewsLetterSection = () => {
  return (
    <section className="relative bg-gray-100 py-10 px-6 overflow-hidden">
      <div>
        <img
          src={drawer}
          alt="Drawer"
          className="hidden md:block absolute left-[-170px] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] object-contain"
        />
      </div>
      <div className="relative z-10">
        <img
          src={sofa}
          alt="Sofa"
          className="hidden md:block absolute lg:right-[-310px]  md:right-[-450px]  top-[100px] transform -translate-y-1/2 w-[700px]  object-cover"
        />
      </div>
      <div className="relative z-10  text-center ">
        <h2 className="text-2xl font-semibold mb-2">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-4">
          Sign up for deals, new products and promotions
        </p>
        <form className="inline-flex border-b border-gray-500 py-2 gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border-none text-gray-700 py-1 px-2 w-[200px] sm:w-[250px] leading-tight focus:outline-none"
          />
          <button type="submit" className=" underline text-gray-500">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;
