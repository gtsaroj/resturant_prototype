import React from "react";
import { ButtonTypes } from "../../../types/button.types";

export const Button: React.FC<ButtonTypes> = ({
  children,
  type,
  icons,
  loading,
  style,
  ariaLabel,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      type={type || "button"}
      disabled={loading}
      className={`${
        style
          ? style
          : "w-full flex items-center justify-center gap-2 py-2 px-1 "
      }`}
    >
      {children && children}
      {icons && icons}
    </button>
  );
};
