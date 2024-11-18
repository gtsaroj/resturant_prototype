import { Banner } from "../Components/Banner/Banner";
import { Event } from "../Components/Event";

export const EventPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-3">
      <Banner
        image="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
        title="Join Our Exciting Events"
        description="Don’t miss out on our special events – good food, great company, and unforgettable moments."
      />
      <Event />
    </div>
  );
};
