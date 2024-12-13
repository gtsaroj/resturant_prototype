import { useTranslation } from "react-i18next";
import { Banner } from "../Components/Banner/Banner";
import { Menu } from "../Components/Menu/Menu";
import { Specials } from "../Components/Specials/Specials";

export const MenuPage = () => {
  const { t } = useTranslation();
  const { title, description } = t("MenuPage_banner") as unknown as {
    title: string;
    description: string;
  };
  return (
    <div className="w-full mt-32 flex flex-col items-center justify-center px-3 ">
    <Specials/>
      <Menu />
    </div>
  );
};
