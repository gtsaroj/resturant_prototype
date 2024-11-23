import { Banner } from "../Components/Banner/Banner";
import { Inquiry } from "../Components/Inquiry/Inquiry";
import { Menu } from "../Components/Menu/Menu";
import { Event } from "../Components/Event";
import BannerImg from "../assets/pinkputali_banner.jpg";
import { Feedback } from "../Components/Feedback/Feedback";
import { useTranslation } from "react-i18next";

export const Homepage = () => {
  const { t } = useTranslation();
  const { title, description } = t("HomePage_banner") as unknown as {
    title: string;
    description: string;
  };

  return (
    <div className="w-full  px-2  flex flex-col items-center justify-center ">
      <Banner image={BannerImg} title={title} description={description} />
      <Inquiry />
      <Menu />
      <Event />
      <Feedback />
    </div>
  );
};
