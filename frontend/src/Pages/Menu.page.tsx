import { Menu } from "../Components/Menu/Menu";
import { Specials } from "../Components/Specials/Specials";

export const MenuPage = () => {

  return (
    <div className="w-full  mt-5  flex flex-col items-center justify-center px-4 gap-10 sm:gap-36 ">
    <Specials/>
      <Menu />
    </div>
  );
};
