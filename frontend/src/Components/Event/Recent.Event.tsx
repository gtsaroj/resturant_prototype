import React from "react";
import { useTranslation } from "react-i18next";
import { EventTypes } from "../../types/event.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        <p className=" text-sm sm:text-lg text-[var(--secondary-text)]  font-thin ">
          Here are some of the glimpse of our recent events.
        </p>
      </div>
      <div className="sm:w-[1500px] w-[1000px]  ">
        <div className="w-full flex  gap-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
              delay: 0,
              pauseOnMouseEnter: true,

            }}
            speed={2000}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide per view on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides per view on medium screens
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on large screens
              },
            }}
            effect="slide"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <img
                  src={event.image}
                  alt={`event-${index}`}
                  className="object-cover rounded w-full  h-[150px] sm:min-h-[250px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};


