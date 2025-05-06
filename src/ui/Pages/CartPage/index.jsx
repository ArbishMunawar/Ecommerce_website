import React from "react";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cartItems, setCartItems } = useOutletContext();

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    alert("Item removed from cart!");
  };

  if ( cartItems.length === 0) {
    return <p className="p-4">Cart is empty.</p>;
  }

  return (
    <div className="p-2 lg:max-w-[1120px] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="grid gap-4">
        {cartItems.map((product) => (
          <div key={product.id} className="p-4 max-w-md flex gap-6">
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-32 object-cover mb-2 bg-[#F3F5F7] rounded"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 text-sm mt-2 cursor-pointer"
              >
                Remove
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;