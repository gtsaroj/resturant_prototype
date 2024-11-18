import React from "react";
import { ProductTypes } from "../../../types/product.types";

export const ProductCard: React.FC<ProductTypes> = ({
  id,
  image,
  name,
  price,
}: ProductTypes) => {
  return (
    <div
      key={id}
      className="w-full bg-[var(--light-foreground)] sm:w-64 bg-white border border-gray-200 rounded-lg transition-shadow duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="w-full h-40 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-sm tracking-wider font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* Price */}
        <p className="text-[14px] font-medium text-gray-700 mt-2">
          {price ? `Rs. ${price}` : "Free"}
        </p>

        {/* Add to Cart Button */}
        <button className="w-full border-[var(--border-color)] border-[1px] py-2 text-[13px]  text-[var(--primary-text)] font-semibold hover:text-white  rounded-md mt-3 bg-transparent hover:bg-[var(--primary-dark)] transition-colors">
          Order now
        </button>
      </div>
    </div>
  );
};
