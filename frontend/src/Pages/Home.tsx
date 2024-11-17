import { Banner } from "../Components/Banner/Banner";
import { Inquiry } from "../Components/Inquiry/Inquiry";
import { Menu } from "../Components/Menu/Menu";
import { Event } from "./Event";

export const Homepage = () => {
  return (
    <div className="w-full  px-2  flex flex-col items-center justify-center ">
      <Banner />
      <Inquiry />
      <Event />
      <Menu />
    </div>
  );
};
