import React from 'react';

const PaperDetails = () => {
  const topicArray = [
    {
      topic: 'Biological Molecules',
    },
    {
      topic: 'Biological Molecules',
    },
    {
      topic: 'Biological Molecules',
    },
    {
      topic: 'Cells',
    },
    {
      topic: 'Cells',
    },
    {
      topic: 'Cells',
    },
    {
      topic: 'Organize exchange substances with their enviornment ',
    },
    {
      topic: 'Organize exchange substances with their enviornment ',
    },
    {
      topic: 'Organize exchange substances with their enviornment ',
    },
    {
      topic: '',
    },
    {
      topic: '',
    },
    {
      topic: '',
    },
  ];

  // Helper function to chunk array into groups of three
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedTopics = chunkArray(topicArray, 3);
  return (
    <div className="px-12">
      <div className="rounded-lg overflow-hidden border border-secondary">
        <div className="flex">
          <div className="flex-1 border-r last:border-r-0 border-secondary">
            <div className="bg-secondary py-2 rounded-t-lg">
              <div className="text-[18px] font-medium text-white text-center">
                Biology
              </div>
            </div>
            <div className="bg-white py-2">
              <div className="text-[18px] font-medium text-secondary text-center">
                Paper 1
              </div>
            </div>
            <div className="grid grid-cols-3 py-2 bg-primary">
              {topicArray.map((item, index) => (
                <div
                  key={index}
                  className="text-[16px] text-center py-4 text-white border-opacity-50 border-b border-r border-white font-medium last:border-r-0"
                >
                  {item.topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperDetails;
