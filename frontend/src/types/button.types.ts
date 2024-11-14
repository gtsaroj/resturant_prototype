import react from "react";
export interface ButtonTypes {
  ariaLabel: string;
  type: "submit" | "button" | "reset";
  children?: string;
  icons?: react.ReactNode;
  style?: string;
  loading?: boolean;
}
