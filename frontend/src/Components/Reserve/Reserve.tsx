import React, { useEffect } from "react";
import { User } from "../../types/user.types";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { addUser } from "../../Reducer/reserver.reducer";
import { bookEvent } from "../../services/event.services";

export const Reserve = () => {
  return (
    <div className="w-full md:flex-row  flex-col mt-10 flex items-center justify-evenly gap-16 sm:gap-10 px-5 ">
      <UserDetails />
      <ReserveSummary />
    </div>
  );
};

const UserDetails = () => {
  const [user, setUser] = React.useState<User>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(addUser({ ...user }));
  }, [user, dispatch]);

  return (
    <div className=" flex w-full flex-col items-start justify-start gap-10">
      <h1 className=" text-2xl tracking-wide font-bold ">
        Information Details
      </h1>
      <form
        className="flex gap-6 flex-col items-start justify-start w-full sm:w-[400px]"
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
          <div className="flex  w-1/2 flex-col items-start gap-1">
            <label className=" text-[18px] tracking-wide  " htmlFor="">
              Date to come
            </label>
            <DatePicker
              className=" !w-full h-[35px] "
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
          <div className="flex w-1/2 flex-col items-start gap-1">
            <label className=" text-[18px] tracking-wide  " htmlFor="">
              Date to come
            </label>
            <TimePicker
              className=" !w-full h-[35px] "
              onChange={(_, timeString: any) =>
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

const ReserveSummary = () => {
  const user = useSelector((state: RootState) => state.root.user);
  const store = useSelector((state: RootState) => state.root);

  if (!user) {
    return <div>Loading...</div>; // Handle no user case gracefully
  }

  return (
    <div className="flex w-full max-w-md flex-col items-start justify-start gap-10">
      <h1 className="text-2xl  font-semibold tracking-wide">Order summary</h1>
      <div className="flex flex-col items-start justify-center gap-9 w-full">
        <div className="w-full flex flex-col items-start justify-start gap-8">
          {[
            { label: "Name", value: user.name },
            { label: "Phone Number", value: user.phoneNumber },
            { label: "Date", value: user.dateToCome },
            { label: "Time", value: user.timeToCome },
            { label: "Number of Person", value: user.noOfPerson },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full pb-1 flex border-b-[1px] border-[var(--dark-border)] items-center justify-between gap-5"
            >
              <label className="text-[18px] text-[var(--secondary-text)] tracking-wide">
                {item.label}:
              </label>
              <p className="text-[18px] tracking-wide">{item.value || "N/A"}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full items-start justify-start gap-2">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-[18px] text-[var(--secondary-text)]">
              Subtotal
            </h1>
            <p className="text-[18px]">Rs. 4500</p>
          </div>
          <div className="flex w-full border-b-[1px] border-[var(--dark-border)] items-center justify-between">
            <h1 className="text-[18px] text-[var(--secondary-text)]">Tax</h1>
            <p className="text-[18px]">Rs. 0</p>
          </div>
          <div className="flex items-center w-full justify-between">
            <h1 className="text-[18px] text-[var(--secondary-text)]">Total</h1>
            <p className="text-[18px]">Rs. 4500</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => bookEvent(store as any)}
        className=" w-full text-[16px] font-semibold tracking-wider text-white bg-[var(--primary-color)] p-2 rounded-md hover:bg-[var(--primary-dark)] "
      >
        Book now
      </button>
    </div>
  );
};
