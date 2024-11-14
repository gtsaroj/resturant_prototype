import React, { useEffect } from "react";
import data from "../../data.json";
import { ProductCard } from "../Common/Card/Product.Card";
import { MenuProps, MenuTypes, ProductTypes } from "../../types/product.types";

export const Menu = () => {
  const { menu, products } = data;

  const [initialMenu, setInitialMenu] = React.useState<string>("");
  const [selectedProducts, setSelectedProducts] = React.useState<
    ProductTypes[]
  >([]);

  useEffect(() => {
    setInitialMenu(menu[0].id);
  }, [menu]);

  useEffect(() => {
    const selectedMenu = products?.filter(
      (product) => product.category === initialMenu
    );
    setSelectedProducts(selectedMenu);
  }, [initialMenu, products]);

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8">
      {/* Menu Selector */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl tracking-wide mb-5 font-semibold text-gray-800">
          What's on your mind?
        </h1>
        <Menus menu={menu} action={(id) => setInitialMenu(id)} />
      </div>

      {/* Product Listing or Empty State */}
      <div className="w-full p-3 min-h-14 h-[25rem] bg-white flex flex-wrap overflow-auto items-center justify-start gap-5 mt-5">
        {selectedProducts && selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-center gap-4 p-5 rounded-lg  ">
            <img
              src="https://via.placeholder.com/150/FFB6C1/000000?text=No+Products"
              alt="No Products Available"
              className="w-24 h-24 opacity-75"
            />
            <h2 className="text-lg font-semibold text-gray-700">
              No products available at the moment
            </h2>
            <p className="text-gray-500">
              Please check back later or explore other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Menus = ({ action, menu }: MenuProps) => {
  return (
    <div className="w-full flex flex-wrap items-center md:justify-evenly justify-start gap-x-4 gap-y-3">
      {menu?.map((product) => (
        <div
          onClick={() => action(product.id)}
          className="flex cursor-pointer flex-col  items-center justify-center"
          key={product.id}
        >
          <img
            src={product.image}
            className="w-10 rounded-full h-8"
            alt="product"
          />
          <p className="text-sm text-[var(--primary-text)] ">{product.name}</p>
        </div>
      ))}
    </div>
  );
};
