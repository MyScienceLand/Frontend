import React from 'react';

const PaperCard = ({ topicArray, setTopicAndStartPaper }) => {
  return (
    <div className="px-12">
      <div className="rounded-lg overflow-hidden border border-secondary">
        <div className="flex">
          <div className="flex-1 border-r last:border-r-0 border-secondary">
            <div className="bg-[var(--accent-color)] py-2 rounded-t-lg">
              <div className="text-[18px] font-medium text-[var(--primary-color)] text-center">
                Biology
              </div>
            </div>
            <div className="bg-[var(--primary-color)] py-2">
              <div className="text-[18px] font-medium text-secondary text-center">
                Paper 1
              </div>
            </div>
            <div className="grid grid-cols-3 py-2 bg-[var(--secondary-color)]">
              {topicArray.map((item, index) => (
                <>
                  {setTopicAndStartPaper ? (
                    <button
                      onClick={() => setTopicAndStartPaper(item.topic)}
                      key={index}
                      className="text-[16px] text-center py-4 text-[var(--primary-color)] border-opacity-50 border-b border-r border-[var(--primary-color)] font-medium last:border-r-0"
                    >
                      {item.topic}
                    </button>
                  ) : (
                    <div
                      key={index}
                      className="text-[16px] text-center py-4 text-[var(--primary-color)] border-opacity-50 border-b border-r border-[var(--primary-color)] font-medium last:border-r-0"
                    >
                      {item.topic}
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
