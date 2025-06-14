import React, { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router";
import ShopPageImage from "../../../assets/Images/Shoppage.jpg";
import Card from "../../common/Card.jsx";
import UseFetch from "../../../hooks/UseFetch.jsx";
import { CartContext } from "../../../hooks/useContext/cartContext.jsx";
import NewsLetterSection from "../../Sections/homeSections/NewsLetterSection.jsx";

const shopPage = () => {
  const { addToCart } = useContext(CartContext);
  const { data } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/products`
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const Categories = ["All", ...new Set(data.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const handleCategoryClick = (category) => {
    setSearchParams(category === "All" ? {} : { category });
  };

  return (
    <>
      <div className="max-w-[1120px] mx-auto">
        <div className="relative">
          <img
            src={ShopPageImage}
            alt="ShopPageImage"
            className="w-full h-96 md:full lg:full object-cover p-5"
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

        <div className="flex flex-col md:flex-row gap-4 mt-4 mb-4 px-4">
          <div className="md:w-1/4 w-full">
            <div className=" flex flex-col gap-3 mt-6 mb-6 px-4">
              <h2 className="text-md mb-3 font-semibold">CATEGORIES</h2>
              {Categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-left text-sm cursor-pointer ${
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

          <div className="md:w-3/4 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
              {filteredProducts.map(({ id, ...product }) => (
                <Card key={id} id={id} {...product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetterSection />
    </>
  );
};

export default shopPage;
