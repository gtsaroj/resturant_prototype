import { Banner } from "../Components/Banner/Banner";
import { Inquiry } from "../Components/Inquiry/Inquiry";
import { Menu } from "../Components/Menu/Menu";
import { Event } from "../Components/Event/Recent.Event";
import Image from "../assets/image.webp";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

import { Feedback } from "../Components/Feedback/Feedback";
import { useTranslation } from "react-i18next";
import Carousel from "../Components/Common/Corosol/Corosol";
import { Specials } from "../Components/Specials/Specials";
import { Location } from "../Components/Location/Location";
import { UpcomingEvent } from "../Components/Event/Upcoming.Event";
import { TestimonialPage } from "./Testimonial.page";

export const Homepage = () => {
  const { t } = useTranslation();
  const { title, description } = t("HomePage_banner") as unknown as {
    title: string;
    description: string;
  };

  return (
    <div className="w-full  px-2  gap-20 flex flex-col items-center justify-center ">
      <div className="w-screen h-[550px]   mt-9">
        <Carousel props={[Image, Image1, Image2, Image3]} time={5000} />
      </div>

      <Specials />
      <Location />
      <Menu />
      <Event />
      <UpcomingEvent />
      <TestimonialPage/>
      <Feedback />
    </div>
  );
};
