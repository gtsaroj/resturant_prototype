import { createSlice } from "@reduxjs/toolkit";
import { ReserveTypes } from "../types/reserve.types";

const bookState: ReserveTypes = {
  seatPlan: [],
  user: {
    name: "",
    phoneNumber: "",
    dateToCome: "",
    timeToCome: "",
    noOfPerson: "",
    notes: "",
  },
};

export const reserveSlice = createSlice({
  initialState: bookState,
  name: "reservation",
  reducers: {
    addSeat: (state, action) => {
      const { category, table: actionTable, seat } = action.payload;

      // Find the category
      let categoryPlan = state.seatPlan.find(
        (plan) => plan.category === category
      );

      if (!categoryPlan) {
        // If the category doesn't exist, add a new category with the seat and table
        state.seatPlan.push({
          category,
          table: [{ table: actionTable, seat: [seat] }],
        });
        return; // Exit early since the seat is already added
      }

      // Find the table within the category
      let tablePlan = categoryPlan.table.find(
        (table) => table.table === actionTable
      );

      if (!tablePlan) {
        // If the table doesn't exist, add a new table with the seat
        categoryPlan.table.push({ table: actionTable, seat: [seat] });
        return; // Exit early since the seat is already added
      }

      // Check if the seat already exists
      if (!tablePlan.seat.includes(seat)) {
        // Add the seat if it doesn't already exist
        tablePlan.seat.push(seat);
        return;
      } else
        tablePlan.seat = tablePlan.seat?.filter((seatNum) => seatNum !== seat);
    },
    addUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.phoneNumber = action.payload.phoneNumber;
      state.user.noOfPerson = action.payload.noOfPerson;
      state.user.notes = action.payload.notes;
      state.user.dateToCome = action.payload.dateToCome;
      state.user.timeToCome = action.payload.timeToCome;
    },
  },
});

export default reserveSlice.reducer;
export const { addSeat,addUser } = reserveSlice.actions;
