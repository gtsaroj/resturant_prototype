import React from "react";
import { CartItem } from "../Components/Common/Card/Cart.card";

export const CartPage = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Chicken Burger",
      description: "Chicken Burger with extra fries",
      price: 210,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 2,
      name: "Chicken Pizza",
      description: "Large chicken pizza with extra cheese",
      price: 450,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg",
    },
    {
      id: 3,
      name: "Chicken Pizza",
      description: "Large chicken pizza with extra cheese",
      price: 450,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg",
    },
    {
      id: 4,
      name: "Chicken Burger",
      description: "Chicken Burger with extra fries",
      price: 210,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
  ]);

  const handleDeleteItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total: number = subtotal;

  return (
    <div className="w-full h-full max-w-[1800px] p-5">
      <div className="flex flex-col w-full gap-8">
        <h1 className="py-8 text-2xl sm:text-3xl text-center">Your Cart</h1>

        <div className="flex flex-col justify-center w-full gap-5">
          <div className="grid grid-cols-8 w-full space-x-8 text-[#9A9A9A] border-b pb-3 border-[#9A9A9A] px-3 text-sm">
            <div className="col-span-3 px-5 md:col-span-4">Product</div>
            <div className="hidden md:block md:col-span-1">Price</div>
            <div className="col-span-2 md:col-span-1">Quantity</div>
            <div className="col-span-2 md:col-span-1">Total</div>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div className="bg-[#F4F4F4] px-8 py-5 rounded w-full">
          <div className="py-3 mb-4 text-lg font-bold sm:py-0">
            Order Summary
          </div>
          <div className="grid w-full grid-cols-1 space-y-10 sm:space-x-10 sm:space-y-0 sm:grid-cols-2">
            {/* Promo code */}
            <div className="flex justify-center col-span-1 mb-4 max-w-[450px] flex-nowrap flex-col  gap-4">
              <p className="text-[#7a7a7a]">
                Do you have any promo code for discount?
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-3/4 px-3 py-2 mr-2 border border-gray-300 rounded-md"
                />
                <button className="px-4 py-2 font-medium text-white bg-[#FF3864]  rounded-md hover:bg-[#d32c50]">
                  Apply
                </button>
              </div>
            </div>
            {/* Sub total */}
            <div className="flex flex-col col-span-1 gap-4 max-w-[500px] justify-self-start w-full place-self-start sm:justify-center mx-auto sm:place-self-center">
              <div className="flex justify-between px-2">
                <span className="text-gray-700">Sub Total</span>
                <span>Rs {subtotal}</span>
              </div>
              <div className="flex justify-between px-2">
                <span className="text-gray-700">Discount</span>
                <span>-</span>
              </div>
              <div className="flex justify-between px-2 font-medium">
                <span className="text-gray-700">Total</span>
                <span>Rs {total}</span>
              </div>

              <button className="w-full flex justify-between px-5 py-2 font-medium text-white bg-[#FF3864] rounded-md hover:bg-[#d32c50]">
                Checkout
                <span>Rs {total}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
