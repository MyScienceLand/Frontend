import React, { useState } from "react";
import SearchDropdown from "../common/search-dropdown";

const SelectClass = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div>
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">
          Select Students
        </h1>
        <SearchDropdown />
      </div>
      <div className="mt-4">
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">Select Class</h1>

        <div className="grid grid-cols-2 gap-4 bg-white   px-12 py-8 shadow-lg rounded-lg mt-2">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map(
            (option, index) => (
              <button
                key={index}
                className={`px-4 py-2 border border-[#696969] border-opacity-45 rounded ${
                  selectedOption === option
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <button
          className="text-[18px] text-center font-normal mt-4 text-white bg-primary py-1"
          style={{ width: "130px" }}
        >
          Later
        </button>
        <button
          className="text-[18px] text-center font-normal mt-4 text-white bg-primary py-1"
          style={{ width: "130px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectClass;
