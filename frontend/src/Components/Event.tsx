import React from "react";
import EventCard from "./Common/Card/Event.card";
import { useTranslation } from "react-i18next";
import { EventTypes } from "../types/event.types";

export const Event: React.FC = () => {
  const { t } = useTranslation();
  const { title } = t("event") as any;
  const events = React.useMemo(
    () => t("eventData") as unknown as EventTypes[],
    [t]
  );

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 px-3 py-10">
      <div className="w-full flex items-center ">
        <h3 className="h-[2px] w-full sm:text-[22px] text-[16px]  bg-gradient-to-r from-black/100 dark:from-black/100  to-black/0 dark:to-black/0"></h3>
        <p className="font-bold text-center sm:text-[22px] text-[15px] sm:min-w-[300px] w-[512px] tracking-wide text-[var(--dark-text)]">
          {title}
        </p>
        <h3 className="h-[2px] w-full  bg-gradient-to-r from-black/0 dark:from-black/0 to-black/100 dark:to-black/100"></h3>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-items-center sm:justify-items-stretch sm:grid-cols-2 gap-4">
        {events?.map((event, index) => (
          <EventCard
            ctaLink={event.ctaLink}
            date={event.date}
            image={event.image}
            location={event.location}
            price={event.price}
            tags={event.tags}
            time={event.time}
            title={event.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
