import { Event } from "../Components/Event/Recent.Event";
import { UpcomingEvent } from "../Components/Event/Upcoming.Event";

export const EventPage = () => {

  return (
    <div className="w-full sm:gap-20 gap-10 py-5 sm:py-10  flex flex-col items-center justify-center px-4">
      <Event />
      <UpcomingEvent />
    </div>
  );
};
