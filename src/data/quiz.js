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

const mapDataToSectionData = (data) => {
  return data.map((item) => {
    const subjectId = item.subjectId;
    const qualificationId = item.qualificationId;
    const boardLevelId = item.boardId;

    const course = item.qualification.name;
    const subject = item.subjects.name;
    const papers = item.papers.map((paper) => paper);

    let className;
    switch (course) {
      case 'A Levels':
        className =
          'bg-purple-800 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm';
        break;
      case 'GCSE':
        className =
          'bg-cyan-700 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm';
        break;
      default:
        className =
          'bg-gray-700 text-white px-4 py-2 text-[16px] font-normal cursor-pointer w-24  rounded-sm';
        break;
    }

    return {
      course,
      className,
      subject,
      papers,
      subjectId,
      qualificationId,
      boardLevelId,
    };
  });
};
export { mapDataToSectionData, topicArray };
