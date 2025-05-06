import React, { useState } from "react";
import ShopPageImage from "../../../assets/Images/Shoppage.jpg";
import Card from "../../Common/Card";
import UseFetch from "../../../hooks/UseFetch.jsx";

const ShopPage = () => {
  const { data } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/products`
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const Categories = ["All", ...new Set(data.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  const [selectedPrice, setSelectedPrice] = useState("All");
  const totalPrice = [
    "All",
    ...new Set(data.map((item) => item.originalPrice)),
  ];

  const filteredPrice =
    selectedPrice === "All"
      ? data
      : data.filter((product) => product.originalPrice === selectedPrice);

  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="relative">
        <img
          src={ShopPageImage}
          alt="ShopPageImage"
          className="w-full h-80 md:h-full object-cover p-8"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-4">
            Shop Page
          </h2>
          <p className="text-sm md:text-base">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>

      <div className="flex justify-center  gap-2 mt-4 mb-4">
        <div>
          <div className=" flex flex-col gap-3 mt-6 mb-6 px-4">
            <h2 className="text-md mb-3 font-semibold">CATEGORIES</h2>
            {Categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left text-sm  ${
                  selectedCategory === category
                    ? "font-semibold underline"
                    : "bg-white text-black border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}

            <h2 className="text-md mb-3 font-semibold">CATEGORIES</h2>
            {totalPrice.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedPrice(category)}
                className={`text-left text-sm  ${
                  selectedCategory === category
                    ? "font-semibold underline"
                    : "bg-white text-black border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map(({ id, ...product }) => (
              <Card key={id} id={id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;