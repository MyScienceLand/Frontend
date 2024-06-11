import React from 'react';

const PaperCard = ({
  topicArray,
  setTopicAndStartPaper,
  subjectName,
  paperNumber,
  setPdf,
  startQuiz,
  handelCreateQuiz,
}) => {
  return (
    <>
      <div className="px-12">
        <div className="rounded-lg overflow-hidden border border-secondary">
          <div className="flex">
            <div className="flex-1 border-r last:border-r-0 border-secondary">
              <div className="bg-[var(--accent-color)] py-2 rounded-t-lg">
                <div className="text-[18px] font-medium text-[var(--primary-color)] text-center">
                  {subjectName}
                </div>
              </div>
              <div className="bg-[var(--primary-color)] py-2">
                <div className="text-[18px] font-medium text-secondary text-center">
                  {paperNumber}
                </div>
              </div>
              <div className="grid grid-cols-3 py-2 bg-[var(--secondary-color)]">
                {startQuiz ? (
                  <>
                    {topicArray &&
                      topicArray.map((item, index) => (
                        <button
                          onClick={() => {
                            setTopicAndStartPaper(item._id);
                            // handelCreateQuiz();
                          }}
                          key={index}
                          className="text-[16px] text-center py-4 text-[var(--primary-color)] border-opacity-50 border-b border-r border-[var(--primary-color)] font-medium last:border-r-0"
                        >
                          {item.name}
                        </button>
                      ))}
                  </>
                ) : (
                  <>
                    {topicArray &&
                      topicArray.map((item, index) => (
                        <button
                          onClick={() => setPdf(item.pdfLink)}
                          key={index}
                          className="text-[16px] text-center py-4 text-[var(--primary-color)] border-opacity-50 border-b border-r border-[var(--primary-color)] font-medium last:border-r-0"
                        >
                          {item.name}
                        </button>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaperCard;
