import React from 'react';
import { feedbackContentArray } from '../../data/dashboard';
import EmptyDataFields from '../EmptyDataFields/EmptyDataFields';

const FeedBack = () => {
  return (
    <div>
      {feedbackContentArray.length > 0 ? (
        <div className="shadow-lg rounded-md">
          <div className="bg-[var(--primary-color)] px-8 rounded py-2">
            <h1 className="text-[18px] font-medium">Feedback</h1>
          </div>
          <div className="bg-[var(--primary-color)] px-6 py-4">
            <div className="flex justify-start mb-12 items-center gap-6">
              <p className="text-[18px] font-medium text-secondary">Score</p>
              <span className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-1 rounded-md">
                -9621
              </span>
            </div>
            <p>Work On:</p>
            <div className="border border-[#696969] px-4 py-2 rounded-md">
              {feedbackContentArray.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center gap-8 border border-[#696969] px-4 py-2 rounded-md mb-4 mt-4"
                >
                  <span>#</span> <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyDataFields />
      )}
    </div>
  );
};

export default FeedBack;
