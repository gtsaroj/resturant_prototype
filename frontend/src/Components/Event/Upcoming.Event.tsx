import React from "react";
import EventCard from "../Common/Card/Event.card";
import { useTranslation } from "react-i18next";
import { EventTypes } from "../../types/event.types";

export const UpcomingEvent: React.FC = () => {
  const { t } = useTranslation();
  const { title } = t("event") as any;
  const events = React.useMemo(
    () => t("eventData") as unknown as EventTypes[],
    [t]
  );

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 px-3 py-10">
      <div className="w-full flex-col gap-3 sm:text-3xl text-xl tracking-wide  justify-start font-bold flex items-start ">
        <h1 className="  ">Upcoming Event</h1>
        <p className=" text-sm  font-thin ">
          Want to be part of our great events in Kathmandu, Join our events. For
          more inquiry, Please message us.{" "}
        </p>
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
