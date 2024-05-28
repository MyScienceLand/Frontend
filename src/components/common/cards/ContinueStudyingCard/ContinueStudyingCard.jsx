import React from 'react';
import { Physics } from '../../../../assets';

const ContinueStudyingCard = () => {
  return (
    <div className="flex flex-wrap justify-between mt-6">
      <div className="bg-[var(--secondary-color)] px-8 py2 rounded-lg min-w-[484px]">
        <div className="flex justify-end mt-4">
          <button className="py-1 px-4 rounded-md bg-[var(--primary-color)]">
            Continue
          </button>
        </div>
        <div className="flex justify-start items-center gap-2">
          <img src={Physics} alt={'item?.text'} />
          <div>
            <span className="text-[var(--primary-color)]"></span>
            <p className="text-[16px] text-[var(--primary-color)] font-normal"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueStudyingCard;
