import React, { useEffect, useRef } from "react";

import { ProductCard } from "../Common/Card/Product.Card";
import { MenuProps, MenuTypes, ProductTypes } from "../../types/product.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const { t } = useTranslation();
  const menu = React.useMemo(
    () => t("menu") as unknown as Array<MenuTypes>,
    [t]
  );
  const products = React.useMemo(
    () => t("products") as unknown as Array<ProductTypes>,
    [t]
  );

  const {  noProductsTitle, noProductsDescription } = t(
    "category"
  ) as any;

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

  const name = menu?.find((product) => product.id === initialMenu)?.name;
const navigate = useNavigate();
  const menuReference = useRef<null | HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8">
      {/* Menu Selector */}
      <div className="w-full group/category relative flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex items-center justify-between ">
          <h1 className=" text-xl sm:text-3xl  font-semibold tracking-wide ">
            Search By Food
          </h1>
          <button
            className="flex items-center justify-start hover:gap-1 duration-150 gap-0.5
           text-[var(--primary-color)] text-xs sm:text-sm font-bold "
          >
            <span onClick={()=> navigate("menu")}>View All</span>
            <ChevronRight className=" sm:size-6 size-5 " />
          </button>
        </div>
        <div ref={menuReference} className=" overflow-auto max-w-full ">
          <Menus menu={menu} action={(id) => setInitialMenu(id)} />
          <button
            onClick={() =>
              menuReference.current?.scrollBy({
                behavior: "smooth",
                left: -300,
              })
            }
            className="absolute  invisible group-hover/category:visible group-hover/category:opacity-100 opacity-0 duration-150 p-3 left-[0rem] top-[53%] rounded-full bg-[var(--primary-color)] text-white "
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() =>
              menuReference.current?.scrollBy({
                behavior: "smooth",
                left: 300,
              })
            }
            className="absolute invisible group-hover/category:visible group-hover/category:opacity-100 opacity-0 duration-150 p-3 right-[0rem] top-[53%] rounded-full  bg-[var(--primary-color)] text-white  "
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Product Listing or Empty State */}
      <div className="w-full flex flex-col p-5 rounded-xl  items-start justify-center gap-3 bg-neutral-50">
        <h1 className=" sm:text-xl font-semibold text-[16px] tracking-wide ">
          {name as string}
        </h1>
        <div className="w-full  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2    gap-16 mt-5">
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
            <div className="w-full col-span-5 flex flex-col items-center justify-center text-center gap-4 p-5 rounded-lg  ">
              <img
                src="https://via.placeholder.com/150/FFB6C1/000000?text=No+Products"
                alt="No Products Available"
                className="w-24 h-24 opacity-75"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {noProductsTitle}
              </h2>
              <p className="text-gray-500">{noProductsDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Menus = ({ action, menu }: MenuProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${menu.length / 2}, minmax(0,1fr) ) `,
      }}
      className={`sm:w-[1600px] w-[600px] text-nowrap grid  gap-x-16 justify-items-start gap-y-5  sm:gap-y-10`}
    >
      {menu?.map((product) => (
        <div
          onClick={() => action(product.id)}
          className="flex min-w-28  gap-1 cursor-pointer flex-col items-center justify-center"
          key={product.id}
        >
          <img
            src={product.image}
            className="sm:size-32  size-20 rounded-full overflow-hidden object-cover"
            alt="product"
          />
          <p className="sm:text-[15px] font-semibold text-[12px] tracking-wider text-[var(--primary-text)]">
            {product.name}
          </p>
        </div>
      ))}
    </div>
  );
};
