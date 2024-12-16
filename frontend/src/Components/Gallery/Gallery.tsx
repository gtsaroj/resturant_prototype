import Image from "../../assets/gallery/restaurant.jpeg";
import Image1 from "../../assets/gallery/chef.png";
import Image2 from "../../assets/gallery/waiter.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


export const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-start gap-10 justify-center">
      <h1 className=" sm:text-3xl text-xl tracking-wide font-bold text-start  ">
        Gallery
      </h1>
      <Swiper
        loop
        navigation
        pagination
        modules={[Pagination, Navigation]}
        className="w-full mx-4 "
      >
        {[Image, Image1, Image2]?.map((image) => (
          <SwiperSlide>
            <img
              className="w-full min-h-[150px] object-cover max-h-[600px] sm:min-h-[450px] h-full"
              src={image}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
