import { useTranslation } from "react-i18next";
import { Banner } from "../Components/Banner/Banner";
import { Event } from "../Components/Event/Recent.Event";
import { UpcomingEvent } from "../Components/Event/Upcoming.Event";

export const EventPage = () => {
  const { t } = useTranslation();
  const { title, description } = t("EventPage_banner") as unknown as {
    title: string;
    description: string;
  };
  return (
    <div className="w-full  flex flex-col items-center justify-center px-3">
      <Event />
      <UpcomingEvent />
    </div>
  );
};
