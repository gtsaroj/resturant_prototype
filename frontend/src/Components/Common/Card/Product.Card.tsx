import { ProductTypes } from "../../../types/product.types";
import { Button } from "../Button/Button";

export const ProductCard = ({ id, image, name, price }: ProductTypes) => {
  return (
    <div
      className="w-full sm:max-w-[300px] max-w-[200px] p-2 sm:p-4 flex flex-col items-start justify-center gap-2 bg-[var(--light-foreground)] rounded-lg shadow-lg transform transition duration-200 hover:shadow-2xl "
      key={id}
    >
      <div className="w-full sm:h-[150px] h-[100px] rounded-lg overflow-hidden relative">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
          alt={`${name} image`}
        />
      </div>

      <div className="w-full flex items-center justify-between mt-1 sm:mt-2">
        <h2 className="sm:text-lg text-[14px] font-bold text-gray-800">
          {name}
        </h2>
        <p className="sm:text-sm text-[var(--secondary-text)] tracking-wider text-[12px] ">
          Rs.{price}
        </p>
      </div>
      <Button
        ariaLabel="Order now"
        type="button"
        style="sm:mt-3 mt-1.5 sm:text-[18px] text-[14px] w-full py-2 bg-[var(--primary-color)] text-white rounded-lg font-semibold transition duration-200 hover:bg-[var(--primary-dark)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        children="Order Now"
        loading={false}
      />
    </div>
  );
};
