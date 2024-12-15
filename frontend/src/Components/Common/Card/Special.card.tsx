import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const SpecialCard = ({ name, image, percentage, day }) => {
  const [activeCart, setActiveCart] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(1);
  
  const handleClick = (productId?: string) => {
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
    <div className="sm:min-w-[353px] relative min-w-[250px] min-h-[270px] flex flex-col items-start justify-center gap-[15px] sm:min-h-[298px] ">
      <div className="w-full relative h-full">
        <img src={image} className="w-full object-cover h-full rounded-lg" alt="" />
        <div className="flex absolute p-2 sm:p-3 left-0  gap-0.5 bottom-0 bg-[var(--primary-color)] rounded-tr-3xl  items-center justify-center ">
          <h1 className=" text-white font-extrabold text-[30px] sm:text-[40px] tracking-wider h-full leading-8 ">
            {percentage}
          </h1>
          <p className="flex flex-col text-white items-start gap-1 justify-center">
            <span className=" h-5 text-[15px] sm:text-[20px] font-bold ">%</span>
            <span className="sm:text-sm text-xs font-semibold ">Off</span>
          </p>
        </div>
      </div>
      <div className="flex text-[18px] w-full  flex-col items-start justify-center gap-1">
        <h2 className=" sm:text-xl text-lg ">Gray Vage</h2>
        <div className="w-full flex items-center justify-start gap-6">
          <p className=" text-sm tracking-wide line-through text-red-700 ">
            Rs. 500
          </p>
          <p className="text-sm tracking-wide " >
            Rs. 400
          </p>
          <div
          className={`p-2 ${
            activeCart
              ? ""
              : "duration-200 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white"
          }   bg-[var(--light-foreground)] rounded-full text-[var(--primary-color)]   shadow-sm flex justify-between items-center absolute top-[205px] sm:top-[255px] right-1 border border-[var(--dark-border)]  `}
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
              className="sm:size-6  size-5 "
              onClick={() => addProductToCartFn()}
            />
          )}
        </div>
       </div>
      </div>
    </div>
  );
};
