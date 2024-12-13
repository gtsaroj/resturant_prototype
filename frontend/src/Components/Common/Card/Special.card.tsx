export const SpecialCard = ({ name, image, percentage, day }) => {
  return (
    <div className="w-[353px] flex flex-col items-start justify-center gap-[15px] h-[298px] ">
      <div className="w-full relative h-full">
        <img src={image} className="w-full object-cover h-full rounded-lg" alt="" />
        <div className="flex absolute left-0  gap-0.5 bottom-0 bg-[var(--primary-color)] rounded-tr-lg  items-center justify-center p-2">
          <h1 className=" text-white font-bold text-[32px] h-full leading-8 ">
            {percentage}
          </h1>
          <p className="flex flex-col text-white items-start justify-center">
            <span className=" h-5 text-[18px] font-semibold ">%</span>
            <span className="text-xs ">Off</span>
          </p>
        </div>
      </div>
      <div className="flex text-[18px]  flex-col items-start justify-center gap-1">
        <h2 className=" ">Gray Vage</h2>
        <p className=" p-2 rounded-lg tracking-wide bg-[#f1722852] text-xs text-[#F17228] ">
          {" "}
          2 Days remaining{" "}
        </p>
      </div>
    </div>
  );
};
