import Testimonials from "../../assets/Testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
export const Testimonial = ({ users }) => {
  console.log(users);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[200px] h-full">
        <img
          className="w-full object-contain h-full"
          src={Testimonials}
          alt="customer"
        />
      </div>
      <div className="justify-center flex items-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {users?.map((user, index) => (
            <SwiperSlide className="w-[300px]" key={index}>
              <User {...user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const User = ({ name, image, description }) => {
  return (
    <div className="min-w-[250px] flex flex-col items-center justify-start min-h-[200px] ">
      <div className=" size-14 ">
        <img className="w-full h-full rounded-full" src={image} alt={name} />
      </div>
      <h2 className=" text-lg font-bold tracking-wide ">{name}</h2>
      <p className=" text-sm tracking-wide ">{description}</p>
    </div>
  );
};
