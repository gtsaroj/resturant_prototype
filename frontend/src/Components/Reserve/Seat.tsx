import { Armchair } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { addSeat } from "../../Reducer/reserver.reducer";
import { Link } from "react-router-dom";

export const Seats = () => {
  const leftSide = [
    {
      table: 1,
      seat: ["1A", "1B", "1C", "1D"],
    },
    {
      table: 2,
      seat: ["2A", "2B", "2C", "2D", "E", "2F"],
    },
    {
      table: 3,
      seat: ["3A", "3B"],
    },
    {
      table: 4,
      seat: ["4A", "4B", "4C", "4D"],
    },
    {
      table: 5,
      seat: ["5A", "5B", "5C", "5D", "5E", "5F"],
    },
    {
      table: 6,
      seat: ["6A", "6B"],
    },
    {
      table: 7,
      seat: ["7A", "7B", "7C", "7D"],
    },
    {
      table: 8,
      seat: ["8A", "8B", "8C", "8D", "8E", "8F"],
    },
    {
      table: 9,
      seat: ["9A", "9B"],
    },
    {
      table: 10,
      seat: ["10A", "10B"],
    },
  ];
  const rightSide = [
    {
      table: 1,
      seat: ["A", "B", "C", "D"],
    },
    {
      table: 2,
      seat: ["A", "B", "C", "D", "E", "F"],
    },
    {
      table: 3,
      seat: ["A", "B"],
    },
    {
      table: 8,
      seat: ["A", "B", "C", "D", "E", "F"],
    },
    {
      table: 9,
      seat: ["A", "B"],
    },
    {
      table: 10,
      seat: ["A", "B", "C", "D"],
    },
    {
      table: 11,
      seat: ["A", "B", "C", "D", "E", "F"],
    },
    {
      table: 3,
      seat: ["A", "B"],
    },
    {
      table: 12,
      seat: ["A", "B", "C", "D"],
    },
    {
      table: 13,
      seat: ["A", "B", "C", "D", "E", "F"],
    },
    {
      table: 14,
      seat: ["A", "B"],
    },
  ];

  const [table, setTable] = useState<{ table: number; seat: string[] }[]>([]);
  const [category, setCategory] = useState<"leftSide" | "rightSide">(
    "leftSide"
  );

  const dispatch = useDispatch<AppDispatch>();

  const seats = useSelector((state: RootState) => state.root.seatPlan);

  useEffect(() => {
    if (category === "leftSide") {
      setTable(leftSide);
    } else if (category === "rightSide") {
      setTable(rightSide);
    }
  }, [category]);
  return (
    <div className="w-full mb-24  py-8 flex flex-col items-start justify-center gap-10">
      <div className="flex px-5 flex-col items-start gap-3">
        <h2 className="sm:text-3xl text-xl mt-4 sm:mt-8 font-medium text-gray-800 ">Category</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCategory("leftSide")}
            className={`px-4 py-2 text-[16px] font-medium border rounded-lg transition duration-150 
            ${
              category === "leftSide"
                ? " bg-[var(--primary-color)] text-white "
                : " border-[1px] border-[var(--dark-border)] "
            }`}
          >
            Left
          </button>
          <button
            onClick={() => setCategory("rightSide")}
            className={`px-4 py-2 text-[16px] font-medium border rounded-lg transition duration-150 
            ${
              category === "rightSide"
                ? " bg-[var(--primary-color)] text-white "
                : " border-[1px] border-[var(--dark-border)] "
            }`}
          >
            Right
          </button>
        </div>
        {category && (
          <p className="mt-2 text-sm  ">
            Selected Category:{" "}
            <span className="font-semibold text-[var(--primary-color)] ">{category}</span>
          </p>
        )}
      </div>
      <div className="flex  w-full flex-wrap px-10  items-center justify-evenly gap-20">
        {table?.map((table) => (
          <div className=" relative ">
            <div className=" w-[50px]  rounded-full h-[100px]  border-[var(--dark-border)] border-[2px] "></div>
            <div className="absolute left-[-30px] top-0 gap-y-5   gap-x-16  grid grid-cols-2 rounded-full">
              {table.seat?.map((tableNo) => (
                <div
                  onClick={() =>
                    dispatch(
                      addSeat({
                        category: category,
                        seat: tableNo,
                        table: table.table,
                      })
                    )
                  }
                  className=" relative "
                >
                  <Armchair
                    className={`relative ${
                      seats
                        ?.find((cat) => cat.category === category)
                        ?.table?.find(
                          (categoryTable) => categoryTable.table === table.table
                        )
                        ?.seat?.includes(tableNo)
                        ? "fill-purple-950"
                        : ""
                    } size-10  cursor-pointer  min-w-10 rotate-90 text-[var(--dark-border)] `}
                  ></Armchair>
                  <span className=" text-xs text-[var(--secondary-text)]  top-[10px] left-[17px] absolute ">
                    {tableNo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BookingModal />
    </div>
  );
};

const BookingModal = () => {
  const seats = useSelector((state: RootState) => state.root.seatPlan);
  const allSeats = seats?.flatMap((categoryPlan) =>
    categoryPlan.table.flatMap((tablePlan) => tablePlan.seat)
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (allSeats.length > 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [allSeats.length]);
  return (
    <div
      className={`w-screen p-3 sm:p-5 bg-white shadow-md shadow-black duration-150  ${
        showModal ? "bottom-0" : "bottom-[-100px] invisible "
      } left-0 z-[1001] fixed flex flex-col items-end justify-start gap-5 h-[200px]`}
    >
      <div className="w-full border-b-[1px] pb-7 border-[var(--dark-border)] flex items-center justify-between">
        <div className="flex gap-2  items-center justify-center">
          <div className=" size-4 sm:size-5 border-[var(--dark-border)] border-[1px] rounded-sm "></div>
          <span className=" sm:text-xs text-[10px] ">Available</span>
        </div>
        <div className="flex  gap-2 items-center justify-center">
          <div className=" size-4 sm:size-5 bg-purple-950  rounded-sm "></div>
          <span className=" sm:text-xs text-[10px] tracking-wide ">
            Selected
          </span>
        </div>
        <div className="flex  gap-2 items-center justify-center">
          <div className=" size-4 sm:size-5 bg-purple-200  rounded-sm "></div>
          <span className=" sm:text-xs text-[10px] tracking-wide ">
            Reserved
          </span>
        </div>
        <div className="flex gap-2  items-center justify-center">
          <div className=" size-4 sm:size-5 bg-red-600  rounded-sm "></div>
          <span className=" sm:text-xs text-[10px] tracking-wide ">Sold</span>
        </div>
        <div className="flex  gap-2 items-center justify-center">
          <div className=" size-4 sm:size-5 bg-gray-300  rounded-sm "></div>
          <span className=" sm:text-xs text-[10px] tracking-wide ">
            Unavailable
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          Regular Seats :{" "}
          {allSeats.length <= 1 ? allSeats : ", " + "  " + allSeats}{" "}
        </div>
        <div>Amount : Rs. {allSeats.length * 300}</div>
      </div>
      <Link
        to={"reserve"}
        className=" w-full p-2 rounded-md text-center  hover:bg-[var(--secondary-dark)] bg-[var(--secondary-color)] text-white sm:w-[250px] "
      >
        Reserve {allSeats.length} Seat
      </Link>
    </div>
  );
};
