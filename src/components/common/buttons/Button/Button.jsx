import React from "react";
import "../../../../index.scss";
import "./Button.scss";

function Button({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className={`text-[var(--primary-color)] flex justify-center items-center gap-2 text-[14px] w-full border border-transparent font-normal ${
        disabled
          ? "bg-gray-400"
          : "hover:border hover:border-primary hover:bg-[#852399] bg-[--secondary-color]"
      } py-2 w-full`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {Icon && <Icon />}
    </button>
  );
}

export default Button;