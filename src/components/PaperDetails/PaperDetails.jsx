import React from 'react';
import { topicArray } from '../../data/quiz';
import PaperCard from '../common/cards/PaperCard/PaperCard';
import NextStudyCard from './NextStudyCard';
const PaperDetails = () => {
  return (
    <div>
      <PaperCard topicArray={topicArray} />
      <NextStudyCard />
    </div>
  );
};

export default PaperDetails;
