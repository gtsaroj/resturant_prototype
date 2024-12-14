import Image from "../../assets/gallery/image (1).png";
import Image1 from "../../assets/gallery/image.png";
import Image2 from "../../assets/gallery/image (2).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
              className="w-full min-h-[150px] sm:min-h-[450px] h-full"
              src={image}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
