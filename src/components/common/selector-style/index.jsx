import React from "react";

function SelectorStyle({ title, type, onClick, disabled, icon }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 text-[14px] text-primary font-normal ${"border border-primary  px-6 bg-transparent text-primary"} py-2 w-full`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon && icon}
    </button>
  );
}

export default SelectorStyle;
