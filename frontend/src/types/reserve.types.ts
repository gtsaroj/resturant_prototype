import { User } from "./user.types";

export interface ReserveTypes {
  seatPlan: BookTypes[];
  user  : User
}

export interface BookTypes {
  category: string;
  table: {
    table: number;
    seat: string[];
  }[]
}
