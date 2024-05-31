import React from "react";
import { uper } from "../../assets";

const CardComponent = ({ cardsArray }) => {
  console.log("🚀 ~ CardComponent ~ cardsArray:", cardsArray);
  return (
    <>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-12 mt-6">
        {cardsArray?.map((item, index) => (
          <div key={index} className={item?.className}>
            {item && (
              <>
                <div className="flex justify-end mt-4">
                  <button className="py-1 px-4 rounded-md bg-white">
                    Courses
                  </button>
                </div>
                <div className="flex justify-start items-center gap-2">
                  {item?.image && <img src={item?.image} alt={item?.text} />}
                  <div>
                    {item?.text && (
                      <span className="text-white">{item.text}</span>
                    )}
                    {item?.content && (
                      <p className="text-[16px] text-white font-normal">
                        {item.content}
                      </p>
                    )}
                    <div className="flex gap-2 justify-center items-center">
                      <img src={uper} alt="Uper Icon" />
                      <p className="text-white text-[12px] font-normal">
                        75% higher than last month
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
