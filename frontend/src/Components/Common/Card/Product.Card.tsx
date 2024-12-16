import React, { useState } from "react";
import { ProductTypes } from "../../../types/product.types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

// id, image, name, price

export const ProductCard: React.FC<ProductTypes> = ({
  image,
  name,
  price,
}: ProductTypes) => {

  const [activeCart, setActiveCart] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  const handleClick = () => {
    if (cartQuantity == 1) {
      setActiveCart(!activeCart);
    }
    setCartQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const addProductToCartFn = async () => {
    try {
      setActiveCart((prevValue) => !prevValue);
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <>
      <div
        // onDragEnd={(event) => {
        //   event.preventDefault();
        //   const target = event.target as HTMLElement;
        //   target.classList.remove("dragged");
        // }}
        // draggable
        // onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
        //   const element = event.target as HTMLDivElement;
        //   element.classList.add("dragged");
        //   event.dataTransfer.setData("product", JSON.stringify(prop));
        // }}
        className={`flex flex-col  w-full md:w-[250px]"
           
        } group/heart  cursor-pointer rounded-xl border border-[var(--dark-border)] pb-3 overflow-hidden  relative snap-start
          `}
      >
        <div className="w-full h-[103px] sm:h-[180px] ">
          <img
            alt={name}
            src={image}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="flex  items-center text-[var(--dark-text)] justify-between gap-1 px-5 pt-2 sm:pt-4 pb-2">
          <div className="flex flex-col gap-1 pt-2">
            <h4 className="font-semibold tracking-wide text-[13px] sm:text-[16px] ">
              {name}
            </h4>
            <p className="flex gap-2 tracking-wider text-[12px] sm:text-[14px] ">
              Rs <span className="tracking-wide ">{price}</span>
            </p>
          </div>
        </div>

        <div
          className={`p-1.5 ${
            activeCart
              ? ""
              : "duration-200 cursor-pointer hover:bg-[var(--primary-color)] hover:text-[var(--dark-text)]"
          }   bg-[var(--light-foreground)] rounded-full text-[var(--primary-color)]   shadow-sm flex justify-between items-center absolute top-[80px] sm:top-[165px] right-1 border border-[var(--dark-border)]  `}
        >
          {activeCart ? (
            <div className="flex items-center gap-2 px-1 text-xs select-none ">
              <button aria-label="cart-button" onClick={() => handleClick()}>
                <Minus
                  className={` sm:size-5 size-3 hover:text-[var(--secondary-color)]`}
                  aria-disabled={"true"}
                />
              </button>

              <p className="px-1">{cartQuantity ? cartQuantity : "Add"}</p>
              <Plus
                className=" sm:size-5 size-3 cursor-pointer hover:text-[var(--secondary-color)]"
                onClick={() => {
                  setCartQuantity((prevValue) => prevValue + 1);
                }}
              />
            </div>
          ) : (
            <ShoppingCart
              className="sm:size-6 hover:text-white size-5 "
              onClick={() => addProductToCartFn()}
            />
          )}
        </div>
      </div>
    </>
  );
};
