import React from 'react';
import { ProgressArrow } from '../../../../assets';

const DashboardSubjectCard = ({ cardsArray }) => {
  console.log('🚀 ~ CardComponent ~ cardsArray:', cardsArray);
  return (
    <>
      <div className="flex flex-wrap justify-between mt-6">
        {cardsArray?.map((item, index) => (
          <div key={index} className={item?.className}>
            <div className="flex justify-end mt-4">
              <button className="py-1 px-4 rounded-md bg-[var(--primary-color)]">
                Courses
              </button>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img src={item?.image} alt={item?.text} />
              <div>
                <span className="text-[var(--primary-color)]">{item.text}</span>
                <p className="text-[16px] text-[var(--primary-color)] font-normal">
                  {item.content}
                </p>
                <div className="flex gap-2 justify-center items-center">
                  <img src={ProgressArrow} alt="Uper Icon" />
                  <p className="text-[var(--primary-color)] text-[12px] font-normal">
                    75% higher than last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardSubjectCard;
