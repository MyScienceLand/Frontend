import React from "react";
import { check } from "../../assets";

const SuccessfullyAdded = () => {
  return (
    <div>
      <img src={check} />
      <p className="text-[18px] text-[18px]">
        Subject preferences added Successfully
      </p>
    </div>
  );
};

export default SuccessfullyAdded;
