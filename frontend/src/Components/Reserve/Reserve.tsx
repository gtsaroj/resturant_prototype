import { Armchair, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { User } from "../../types/user.types";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";

export const Reserve = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col items-end justify-start gap-16 px-2 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-[400px]  flex items-center mt-20 justify-center gap-2">
          {[...Array(3)].map((_, index) => (
            <div className="relative" key={index}>
              <div className="h-1 bg-slate-400 w-52 "></div>
              <div
                className={`absolute w-52 ${
                  activeIndex === index ? "bg-green-500" : ""
                } top-0 left-0 right-0  h-1`}
              ></div>
            </div>
          ))}
        </div>
        {activeIndex === 0 && <Tables />}
        {activeIndex === 1 && <UserDetails />}
        {activeIndex === 2 && (
          <ReserveSummary
            {...(JSON.parse(localStorage.getItem("user")) as User)}
          />
        )}
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1))}
          className="flex items-center justify-end gap-1 px-8 py-2 duration-150 border rounded-lg hover:gap-2 "
        >
          <ChevronLeft />
          Back
        </button>
        <button
          onClick={() => setActiveIndex((prev) => prev + 1)}
          className="flex items-center justify-end gap-1 px-8 py-2 duration-150 border rounded-lg hover:gap-2 "
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const Tables = () => {
  const tables = [
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
    {
      table: 1,
      seat: 4,
    },
    {
      table: 2,
      seat: 6,
    },
    {
      table: 3,
      seat: 2,
    },
  ];
  return (
    <div className="flex flex-wrap items-center gap-20 px-10 justify-evenly">
      {tables?.map((table) => (
        <div className="relative ">
          <div className=" w-[50px]  rounded-full h-[100px]  border-[var(--dark-border)] border-[2px] "></div>
          <div className="absolute left-[-30px] top-0 gap-y-5   gap-x-16  grid grid-cols-2 rounded-full">
            {[...Array(table.seat)]?.map((table) => (
              <Armchair className=" fill-emerald-400 cursor-pointer  min-w-10 rotate-90 text-[var(--dark-border)] " />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const UserDetails = () => {
  const [user, setUser] = React.useState<User>();

  const haveUser = localStorage.getItem("user");
  console.log(haveUser);
  useEffect(() => {
    if (haveUser !== "undefined") {
      setUser(JSON.parse(haveUser));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex flex-col items-start justify-start gap-10 ">
      <h1 className="font-bold tracking-wide sm:text-3xl">
        Information Details
      </h1>
      <form
        className="flex gap-6 flex-col items-start justify-start w-[400px]"
        action=""
      >
        {/* fullName */}
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className=" text-[18px] tracking-wide  " htmlFor="">
            Full name
          </label>
          <input
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, name: e.target.value }))
            }
            className=" border-[1px] focus:ring-[1px] duration-150 focus:ring-[var(--dark-border)] px-3 py-1.5 w-full rounded-lg border-[var(--dark-border)] outline-none  "
            type="text"
            value={user?.name}
          />
        </div>
        {/* phoneNumber */}
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <label className=" text-[18px] tracking-wide  " htmlFor="">
            Phone number
          </label>
          <input
            className=" border-[1px] focus:ring-[1px] duration-150 focus:ring-[var(--dark-border)] px-3 py-1.5 w-full rounded-lg border-[var(--dark-border)] outline-none  "
            type="text"
            value={user?.phoneNumber}
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, phoneNumber: e.target.value }))
            }
          />
        </div>
        {/* date */}

        <div className="flex items-center justify-between w-full gap-5 ">
          <div className="flex flex-col items-start gap-1">
            <label className=" text-[18px] tracking-wide  " htmlFor="">
              Date to come
            </label>
            <DatePicker
      
              className=" !w-[180px] h-[35px] "
              multiple
              onChange={(date) =>
                setUser((prev) => ({
                  ...prev!,
                  dateToCome: dayjs(date).format("YYYY-MM-DD"),
                }))
              }
              maxTagCount="responsive"
              size="small"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className=" text-[18px] tracking-wide  " htmlFor="">
              Date to come
            </label>
            <TimePicker
            
              className=" !w-[180px] h-[35px] "
              onChange={(_, timeString: string) =>
                setUser((prev) => ({ ...prev!, timeToCome: timeString }))
              }
            />
          </div>
        </div>

        {/* Number of person */}
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <label className=" text-[18px] tracking-wide  " htmlFor="">
            No of person
          </label>
          <input
            className=" border-[1px] focus:ring-[1px] duration-150 focus:ring-[var(--dark-border)] px-3 py-1.5 w-full rounded-lg border-[var(--dark-border)] outline-none  "
            type="text"
            value={user?.noOfPerson}
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, noOfPerson: e.target.value }))
            }
          />
        </div>
        {/* notes */}
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <label className=" text-[18px] tracking-wide  " htmlFor="">
            Notes
          </label>
          <textarea
            className=" border-[1px] focus:ring-[1px] duration-150 focus:ring-[var(--dark-border)] px-3 py-1.5 w-full rounded-lg border-[var(--dark-border)] outline-none  "
            cols={10}
            rows={5}
            value={user?.notes}
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, notes: e.target.value }))
            }
          />
        </div>
      </form>
    </div>
  );
};

const ReserveSummary = ({
  name,
  phoneNumber,
  dateToCome,
  timeToCome,
  noOfPerson,
  notes,
}) => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-5">
      <h1 className="text-xl tracking-wide sm:text-3xl">Order summary</h1>
      <div className="flex flex-col items-start justify-center w-full gap-9">
        <div className="flex flex-col items-start justify-start w-full gap-8">
          <div className="w-full  pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5">
            <label className=" text-[18px] text-[var(--secondary-text)] tracking-wide  ">
              Name:
            </label>
            <p className=" text-[18px] tracking-wide  ">{name}</p>
          </div>
          <div className="w-full  pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5">
            <label className=" text-[18px] text-[var(--secondary-text)] tracking-wide  ">
              Phone Number:
            </label>
            <p className=" text-[18px] tracking-wide  ">{phoneNumber}</p>
          </div>

          <div className="w-full  pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5">
            <label className=" text-[18px] text-[var(--secondary-text)] tracking-wide  ">
              Date:
            </label>
            <p className=" text-[18px] tracking-wide  ">{dateToCome}</p>
          </div>
          <div className="w-full  pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5">
            <label className=" text-[18px] text-[var(--secondary-text)] tracking-wide  ">
              Time:
            </label>
            <p className=" text-[18px] tracking-wide  ">{timeToCome}</p>
          </div>
          <div className="w-full  pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5">
            <label className=" text-[18px] text-[var(--secondary-text)] tracking-wide  ">
              Number of Person:
            </label>
            <p className=" text-[18px] tracking-wide  ">{noOfPerson}</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <div className="flex items-center justify-between w-full">
            <h1 className=" text-[18px] text-[var(--secondary-text)] ">
              Subtotal
            </h1>
            <p className=" text-[18px] ">Rs. 4500</p>
          </div>
          <div className="flex w-full border-b-[1px] border-[var(--dark-border)] items-center justify-between">
            <h1 className=" text-[18px] text-[var(--secondary-text)] ">Tax</h1>
            <p className=" text-[18px] ">Rs. 0</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <h1 className=" text-[18px] text-[var(--secondary-text)] ">
              Total
            </h1>
            <p className=" text-[18px] ">Rs. 4500</p>
          </div>
        </div>
      </div>
    </div>
  );
};
