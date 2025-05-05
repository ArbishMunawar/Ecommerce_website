import React from "react";
import Sale from "../../../assets/Images/Sale.png";
const SaleSection = () => {
  return (
    <section className="md:grid md:grid-cols-2 bg-[#F3F5F7] ">
      <div>
        <img src={Sale} alt="" />
      </div>
      <div className="bg-[#F3F5F7] p-8 pb-0 lg:flex lg:flex-col lg:justify-center lg:gap-4">
        <h2 className="text-[#377DFF] text-[16px] font-bold">SALE UP TO 35% OFF</h2>
        <h1 className="text-4xl font-semibold py-3">HUNDREDS of  <br/>
        New lower prices!</h1>
        <p className="text-lg font-normal pt-2 pb-4 lg:pr-[40%]" >It’s more affordable than ever to give every room in your  home a stylish makeover</p>
        <button className="underline font-semibold lg:flex lg:justify-start">Shop Now</button>
      </div>
    </section>
  );
};

export default SaleSection; 
