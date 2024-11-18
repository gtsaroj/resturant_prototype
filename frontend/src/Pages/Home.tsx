import { Banner } from "../Components/Banner/Banner";
import { Inquiry } from "../Components/Inquiry/Inquiry";
import { Menu } from "../Components/Menu/Menu";
import { Event } from "../Components/Event";
import BannerImg from "../assets/pinkputali_banner.jpg";

export const Homepage = () => {
  return (
    <div className="w-full  px-2  flex flex-col items-center justify-center ">
      <Banner
        image={BannerImg}
        title="Welcome to Pink Putali"
        description="Savor the fusion of Nepalese flavors with a sip of cocktails"
      />
      <Inquiry />
      <Event />
      <Menu />
    </div>
  );
};
