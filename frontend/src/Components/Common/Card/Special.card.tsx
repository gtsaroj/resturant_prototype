export const SpecialCard = ({ name, image, percentage, day }) => {
  return (
    <div className="min-w-[353px] flex flex-col items-start justify-center gap-[15px] min-h-[298px] ">
      <div className="w-full relative h-full">
        <img src={image} className="w-full object-cover h-full rounded-lg" alt="" />
        <div className="flex absolute p-3 left-0  gap-0.5 bottom-0 bg-[var(--primary-color)] rounded-tr-3xl  items-center justify-center ">
          <h1 className=" text-white font-extrabold text-[40px] tracking-wider h-full leading-8 ">
            {percentage}
          </h1>
          <p className="flex flex-col text-white items-start gap-1 justify-center">
            <span className=" h-5 text-[20px] font-bold ">%</span>
            <span className="text-sm font-semibold ">Off</span>
          </p>
        </div>
      </div>
      <div className="flex text-[18px]  flex-col items-start justify-center gap-1">
        <h2 className=" ">Gray Vage</h2>
        <p className=" p-2 rounded-lg tracking-wide bg-[#f1722852] text-xs text-[#F17228] ">
          {" "}
          {day} Days remaining{" "}
        </p>
      </div>
    </div>
  );
};
