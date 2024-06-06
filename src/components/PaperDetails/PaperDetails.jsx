import React from 'react';
import useFetch from '../../hooks/useFetch';
import PaperCard from '../common/cards/PaperCard/PaperCard';
import NextStudyCard from './NextStudyCard';
const PaperDetails = ({ paperId, paperNumber, subjectName }) => {
  const { data, loading, error } = useFetch(`/topics/${paperId}`);
  return (
    <div>
      <PaperCard
        topicArray={data?.data}
        paperNumber={paperNumber}
        subjectName={subjectName}
      />
      <NextStudyCard />
    </div>
  );
};

export default PaperDetails;
