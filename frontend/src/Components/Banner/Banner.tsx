import BannerImg from "../../assets/pinkputali_banner.jpg";

export const Banner: React.FC = () => {
  return (
    <div className="relative group/banner w-full    py-1 sm:py-2">
      {/* Banner Image */}
      <div className="w-full group-hover/banner:blur-[1px] blur-0 duration-150 lg:h-[70vh] sm:h-[50vh] h-[30vh] relative rounded-lg overflow-hidden">
        <img
          src={BannerImg}
          className="w-full group-hover/banner:scale-[1.01] scale-[1]   duration-150 h-full object-cover rounded-lg transform transition-transform "
          alt="banner"
        />
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Banner Text with Animation */}
      <h1 className="absolute top-[50%] left-[30%]  text-[1rem]  sm:text-[3rem]  lg:text-[3.5rem] font-bold text-white tracking-wider z-10  animate-fadeIn">
        Welcome To Putali Pink
      </h1>
    </div>
  );
};
