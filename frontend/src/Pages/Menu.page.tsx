import { useTranslation } from "react-i18next";
import { Banner } from "../Components/Banner/Banner";
import { Menu } from "../Components/Menu/Menu";

export const MenuPage = () => {
  const { t } = useTranslation();
  const { title, description } = t("MenuPage_banner") as unknown as {
    title: string;
    description: string;
  };
  return (
    <div className="w-full flex flex-col items-center justify-center px-3 ">
      <Banner
        image="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
        title={title}
        description={description}
      />
      <Menu />
    </div>
  );
};
