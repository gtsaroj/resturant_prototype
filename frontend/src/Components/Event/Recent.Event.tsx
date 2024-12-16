import React from "react";
import { useTranslation } from "react-i18next";
import { EventTypes } from "../../types/event.types";

export const Event: React.FC = () => {
  const { t } = useTranslation();
  const events = React.useMemo(
    () => t("eventData") as unknown as EventTypes[],
    [t]
  );

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 ">
      <div className="w-full flex-col gap-1 sm:text-3xl text-xl tracking-wide  justify-start font-bold flex items-start ">
        <h1 className="  ">Recent Event</h1>
        <p className=" text-sm sm:text-lg text-[var(--secondary-text)]  font-thin ">Here are some of the glimpse of our recent events.</p>
      </div>
      <div className="sm:w-[1500px] w-[1000px] animate-marquee ">
      <div className="w-full flex  gap-4">
        {events?.map((event, index) => (
          <RecentCard {...event} key={index} />
        ))}
      </div>
     </div>
    </div>
  );
};

const RecentCard = ({ image }: { image: string }) => {
  return (
    <div className=" w-full  h-[150px] sm:min-h-[250px] ">
      <img
        src={image}
        className="w-full object-cover rounded-lg h-full"
        alt={"recent-img"}
      />
    </div>
  );
};
