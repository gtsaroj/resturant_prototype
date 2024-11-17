import React, { useEffect } from "react";
import data from "../../data.json";
import { ProductCard } from "../Common/Card/Product.Card";
import { MenuProps, ProductTypes } from "../../types/product.types";

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
  const name = selectedProducts?.find(
    (product) => product.category === initialMenu
  )?.name;

  return (
    <div className="flex w-full flex-col items-start px-5 pt-10 justify-center gap-8">
      {/* Menu Selector */}
      <div className="w-full flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex items-center ">
          <h3 className="h-[2px] w-full sm:text-[22px] text-[16px]  bg-gradient-to-r from-black/100 dark:from-white/100  to-black/0 dark:to-white/0"></h3>
          <p className="font-bold text-center sm:text-[22px] text-[15px] sm:min-w-[300px] w-[512px] tracking-wide text-[var(--dark-text)]">
            What's on your mind?
          </p>
          <h3 className="h-[2px] w-full  bg-gradient-to-r from-black/0 dark:from-white/0 to-black/100 dark:to-white/100"></h3>
        </div>
        <div className="w-full overflow-x-auto ">
          <Menus menu={menu} action={(id) => setInitialMenu(id)} />
        </div>
      </div>

      {/* Product Listing or Empty State */}
      <div className="w-full flex flex-col p-5 rounded-xl  items-start justify-center gap-3 bg-neutral-50">
        <h1 className=" sm:text-xl text-[16px] tracking-wide ">{name as string}</h1>
        <div className="w-full  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-5 mt-5">
          {selectedProducts && selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <ProductCard
                key={product.id}
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
    </div>
  );
};

export const Menus = ({ action, menu }: MenuProps) => {
  const gridCol = `grid-cols-${menu.length/2} `
  return (
    <div
      className={`w-full min-w-96 text-nowrap grid gap-x-[7.5rem] sm:gap-x-5 gap-y-5  ${gridCol} `}
    >
      {menu?.map((product) => (
        <div
          onClick={() => action(product.id)}
          className="flex w-16 cursor-pointer flex-col items-center justify-center"
          key={product.id}
        >
          <img
            src={product.image}
            className="w-10 rounded-full h-8"
            alt="product"
          />
          <p className="text-sm text-[var(--primary-text)]">{product.name}</p>
        </div>
      ))}
    </div>
  );
};
