import { Menu } from "../Components/Menu/Menu";
import { Event } from "../Components/Event/Recent.Event";
import Image1 from "../assets/image1.jpg";

import Carousel from "../Components/Common/Corosol/Corosol";
import { Specials } from "../Components/Specials/Specials";
import { Location } from "../Components/Location/Location";
import { UpcomingEvent } from "../Components/Event/Upcoming.Event";
import { TestimonialPage } from "./Testimonial.page";
import { Gallery } from "../Components/Gallery/Gallery";

export const Homepage = () => {


  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 px-2 ">
      <div className="w-screen h-[300px] sm:h-[450px] md:h-[550px]">
        <Carousel
          props={[
            "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640773.jpg&fm=jpg",
            Image1,
            "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
          ]}
          time={5000}
        />
      </div>

      <Specials />
      <Menu />
      <Event />
      <UpcomingEvent />
      <Gallery />
      <TestimonialPage />
      <Location />
    </div>
  );
};
