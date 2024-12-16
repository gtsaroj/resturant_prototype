import { useState } from "react";
import Testimonials from "../../assets/Testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../../index.css";

export const Testimonial = ({ users } : any) => {
  const [activeSlide, setActiveSlide] = useState<number>();
  return (
    <div className="container max-w-[1480px] px-2 flex flex-col items-start justify-start gap-16">
      <h1 className=" text-xl  tracking-wide font-bold sm:text-3xl ">
        Testimonials
      </h1>
      <div className="w-full flex sm:flex-row flex-col items-center gap-28 justify-center">
        <div className="w-[400px] sm:flex hidden h-full">
          <img
            className="w-full object-contain h-full"
            src={Testimonials}
            alt="customer"
          />
        </div>
        <div className="justify-center sm:w-[500px] w-[300px]  flex items-center">
          <Swiper
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
            watchSlidesProgress={true}
            slidesPerView={"auto"}
            modules={[EffectCoverflow, Pagination]}
            pagination
            effect="coverflow"
            centeredSlides={true}
            spaceBetween={0} // No gaps between slides for a clean layout
            grabCursor={true}
            loop={true} // Enable infinite looping
            coverflowEffect={{
              rotate: 0, // No rotation for side cards
              stretch: 0, // No stretching
              depth: 200, // Adds perspective depth
              modifier: 1, // Multiplier for depth effect
              slideShadows: false, // Disable shadows for simplic5ity
            }}
            className="w-full sm:min-w-[500px] "
          >
            {users?.map((user : any, index : number) => (
              <SwiperSlide key={index} className="flex justify-center">
                <User
                  {...user}
                  index={index}
                  activeSlide={activeSlide}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const User = ({ name, image, description }: any) => {
  return (
    <div
      className={`min-w-[250px] p-6   bg-white
      shadow-md rounded-lg flex flex-col items-center justify-start min-h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-xl
      `}
      role="article"
      aria-label={`User profile of ${name}`}
    >
      <div className="w-20 h-20 mb-4">
        <img
          className="w-full h-full rounded-full object-cover"
          src={image}
          alt={`Profile picture of ${name}`}
          loading="lazy"
        />
      </div>
      <h2 className="text-lg font-bold tracking-wide  text-[var(--primary-text)] ">
        {name}
      </h2>
      <p className="pt-4 text-sm text-center tracking-wide text-[var(--secondary-text)] ">
        {description}
      </p>
    </div>
  );
};

export default User;
