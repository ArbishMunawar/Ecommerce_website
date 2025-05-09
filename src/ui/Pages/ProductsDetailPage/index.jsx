
import React, { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import UseFetch from "../../../hooks/UseFetch.jsx";
import Star from "../../../assets/icons/StarIcon.jsx";
import Timer from "../../common/Timer.jsx";
import HeartIcon from "../../../assets/icons/HeartIcon.jsx";
import Button from "../../common/Button.jsx";
import ProductAdditionalInfo from "../../common/ProductAdditionalInfo.jsx";
import NewsLetterSection from '../../Sections/HomeSections/NewsLetterSection.jsx'
const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/products/${id}`
  );
  const { addToCart } = useOutletContext();

  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(0);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Product not found.</p>;

  const {
    name,
    price,
    originalPrice,
    image,
    rating,
    description,
    colors = [],
    measurements,
    sku,
    category,
  } = data;

  const handleAddToCart = () => {
    if (count === 0) {
      alert("Please select a quantity before adding to cart.");
      return;
    }

    const product = {
      id,
      name,
      image,
      price,
      originalPrice,
      description,
      color: selectedColor,
      quantity: count,
    };

    addToCart(product);
    alert(`${name} has been added to your cart!`);
    // console.log("Product added to cart:", product);
    
  };

  const imageUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/${image}`;
  const stars = Math.round(rating || 0);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-10 lg:max-w-[1120px] lg:mx-auto">
        <div className="w-full md:w-1/2 bg-[#F3F5F7]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-96 object-contain rounded"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {Array.from({ length: stars }, (_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-500 mb-4">{description}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="text-xl font-semibold text-black">${price}</div>
            {originalPrice && (
              <div className="text-md text-gray-500 line-through">
                ${originalPrice}
              </div>
            )}
          </div>

          <div className="border-y border-gray-300 py-6 mt-4">
            <h2 className="text-gray-500 pb-3">Offer expires in:</h2>
            <Timer />
          </div>

          {measurements && (
            <div className="mb-4 pt-3">
              <h2 className="text-gray-600 font-medium mb-2">Measurements:</h2>
              <p className="text-gray-800">{measurements}</p>
            </div>
          )}

          {colors.length > 0 && (
            <div className="mb-4">
              <h2 className="text-gray-600 font-medium mb-2">Choose Color:</h2>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-1 rounded-full border text-sm ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "bg-white text-black border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex gap-7 justify-between">
            <div className="flex gap-4 bg-[#F3F5F7] rounded">
              <button
                className="font-bold text-2xl px-4 cursor-pointer"
                onClick={() =>
                  setCount((prev) => (prev > 0 ? prev - 1 : 0))
                }
              >
                -
              </button>
              <p className="flex items-center">{count}</p>
              <button
                className="font-bold text-2xl pl-3 pr-3 cursor-pointer"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button className="w-full cursor-pointer bg-white border flex justify-center border-gray-400 text-black py-2 px-6 rounded-lg">
              <HeartIcon /> Wishlist
            </button>
          </div>

          <Button
            className="bg-black w-full my-5 cursor-pointer"
            onClick={() => {
              console.log("Add to cart clicked");
              handleAddToCart();
            }}
          >
            Add to cart
          </Button>

          <div className="text-xs border-t border-gray-300">
            {sku && (
              <div className="mt-4 flex gap-2 items-center">
                <span className="text-gray-600">SKU:</span>
                <span className="text-gray-800">{sku}</span>
              </div>
            )}
            {category && (
              <div className="mt-4 flex gap-2 items-center">
                <span className="text-gray-600">CATEGORY:</span>
                <span className="text-gray-800">{category}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductAdditionalInfo />
      <NewsLetterSection />
    </>
  );
};

export default ProductDetail;
