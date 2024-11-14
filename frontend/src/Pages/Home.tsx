import { Banner } from "../Components/Banner/Banner";
import { Inquiry } from "../Components/Inquiry/Inquiry";
import { Menu } from "../Components/Menu/Menu";
import { Navbar } from "../Components/Navbar/Navbar";

export const Homepage = () => {
  return (
    <div className="w-full 2xl:w-[1500px]   flex flex-col items-center justify-center ">
      <Navbar />
      <div className="flex flex-col px-5 w-full">
        <Banner />
        <Inquiry />
      </div>
      <Menu />
    </div>
  );
};
