import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import Star from "../../assets/icons/StarIcon.jsx";
import Button from "./Button.jsx";
import { Link } from "react-router";
import { Toaster, toast } from 'sonner';
const Card = ({
  id,
  name,
  image,
  isNew,
  price,
  rating,
  discount,
  description,
  originalPrice,
  addToCart,
}) => {
  const stars = Math.round(rating || 0);

  const handleAddToCart = () => {
    const product = { id, name, image, price, originalPrice, description };
    addToCart(product); 
    toast.success(`${name} has been added to your cart!`);
  };

  return (
    <div className="relative shadow-lg rounded bg-[#F3F5F7] w-full">
      <Link to={`/products/${id}`}>
        <div className="p-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-contain rounded"
          />

          <div className="bg-white rounded-full absolute top-3 p-1 right-[6%]">
            <HeartIcon />
          </div>

          {isNew && (
            <div className="absolute top-2 left-2 bg-white text-black text-xs font-semibold py-1 px-2 rounded">
              New
            </div>
          )}
        </div>
      </Link>

      <div className="px-4">
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {Array.from({ length: stars }, (_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-500">({rating || "0.0"})</p>
        </div>
        <h2 className="text-lg font-bold">{name}</h2>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-md font-semibold text-black">${price}</p>
          {discount && (
            <p className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </p>
          )}
        </div>
      </div>

      <div
        className="flex justify-center w-full mt-3 mb-3 cursor-pointer"
        onClick={handleAddToCart}
      >
        <Button className="bg-black w-[90%] cursor-pointer">Add to cart</Button>
      </div>
        <Toaster />
    </div>
  );
};

export default Card;
