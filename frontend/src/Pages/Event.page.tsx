import { useTranslation } from "react-i18next";
import { Banner } from "../Components/Banner/Banner";
import { Event } from "../Components/Event/Recent.Event";

export const EventPage = () => {
  const { t } = useTranslation();
  const { title, description } = t("EventPage_banner") as unknown as {
    title: string;
    description: string;
  };
  return (
    <div className="w-full flex flex-col items-center justify-center px-3">
      <Banner
        image="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
        title={title}
        description={description}
      />
      <Event />
    </div>
  );
};
