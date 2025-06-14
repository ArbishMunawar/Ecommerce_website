import React, { useState,useContext } from "react";
import { CartContext } from "../../../hooks/useContext/cartContext";


const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


   const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map((item) => {
      if (item.id === id) {
        // Update the quantity and price based on the new quantity
        return { ...item, quantity: newQuantity, price: item.originalPrice * newQuantity };
      }
      return item;
    }));
  };


  if (cartItems.length === 0) {
    return <p className="p-6 text-center text-lg">Your cart is empty.</p>;
  }
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-[1120px] mx-auto">
      <h2 className="text-3xl font-semibold text-center md:pb-[4rem] md:text-5xl">
        Cart
      </h2>

      <div className="hidden md:grid grid-cols-3 font-semibold text-gray-500 border-b pb-2 mb-4 md:w-[65%]">
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Price</div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded bg-gray-100"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 text-sm mt-1 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-4 bg-[#F3F5F7] rounded">
                  <button
                    className="font-bold text-2xl px-4 cursor-pointer"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </button>
                  <p className="flex items-center">{count}</p>
                  <button
                    className="font-bold text-2xl px-4 cursor-pointer"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">${item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <label className="block font-medium mb-2">Have a coupon?</label>
            <div className="flex max-w-md">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-2 flex-1"
              />
              <button className="bg-black text-white px-4">Apply</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-400 w-full md:max-w-sm self-start h-fit">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Cart Summary
          </h3>

          <div className="mb-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer border border-gray-300 rounded p-2">
                <input
                  type="radio"
                  name="delivery"
                  className="accent-black"
                  defaultChecked
                />
                <span className="text-gray-700">Free Delivery (3-5 days)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer border border-gray-300 rounded p-2">
                <input type="radio" name="delivery" className="accent-black" />
                <span className="text-gray-700">Express ($10 - 12 days)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer border border-gray-300 rounded p-2">
                <input type="radio" name="delivery" className="accent-black" />
                <span className="text-gray-700">
                  Store Pickup (Free - Today)
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Subtotal</span>
            <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <span>Total</span>
                     <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
