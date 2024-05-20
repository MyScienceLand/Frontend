import React from "react";
import "./Button.scss";
import "../../../../index.scss";
function Button({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className="text-[#fff] flex justify-center text-[14px] border border-transparent font-normal hover:border hover:border-primary hover:bg-transparent hover:text-[#303033] bg-[--secondary-color] py-2 w-full"
      type={type}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2" />}
      {title}
    </button>
  );
}

export default Button;
