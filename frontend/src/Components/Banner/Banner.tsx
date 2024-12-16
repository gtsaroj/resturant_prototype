export const Banner = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="relative group/banner w-full h-full ">
      {/* Banner Image */}
      <div className=" w-full group-hover/banner:blur-[1px] blur-0 duration-150  lg:h-[70vh] 2xl:h-max-[60vh]  sm:h-[50vh] h-[40vh] relative rounded-lg overflow-hidden">
        <img
          src={image}
          className="w-full group-hover/banner:scale-[1.01] scale-[1]   duration-150 h-full object-cover transform transition-transform "
          alt="banner"
        />
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Banner Text with Animation */}
      <h1 className="absolute px-5 flex flex-col w-full justify-center items-center  top-1/2 text-[1.5rem]  sm:text-[3rem]  lg:text-[3.5rem] font-bold text-white tracking-wider z-10  animate-fadeIn">
        {title as string}
        <span className=" text-[10px] sm:text-[15px] text-center font-thin text-gray-200 ">
          {" "}
          {description as string}
        </span>
      </h1>
    </div>
  );
};
