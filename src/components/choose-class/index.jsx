import React, { useState } from "react";

const ChooseClass = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-[26px] font-medium text-[#2a2a2a]">Select Class</h1>

        <div className="grid grid-cols-2 gap-4 bg-white   px-12 py-8 shadow-lg rounded-lg mt-2">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map(
            (option, index) => (
              <button
                key={index}
                className={`px-4 py-2 border border-[#696969] border-opacity-45 rounded ${
                  selectedOption === option
                    ? "bg-[#102437] text-white"
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
    </div>
  );
};

export default ChooseClass;
