// import React, { useState } from 'react';
// import useFetch from '../../hooks/useFetch';
// import PaperCard from '../common/cards/PaperCard/PaperCard';
// import NextStudyCard from './NextStudyCard';
// import QuizComponent from '../QuizComponent/QuizComponent';
// const PaperDetails = ({ paperId, paperNumber, subjectName }) => {
//   const { data, loading, error } = useFetch(`/topics/${paperId}`);

//   const [topicAndStartPaper, setTopicAndStartPaper] = useState('');
//   return (
//     <div>
//       <>
//       {
//         topicAndStartPaper ? (
//           <QuizComponent topicAndStartPaper={topicAndStartPaper} />
//         ):(
//           <>
//              <PaperCard
//         topicArray={data?.data}
//         paperNumber={paperNumber}
//         subjectName={subjectName}
//         setTopicAndStartPaper={setTopicAndStartPaper}
//       />
//       <NextStudyCard />)
//           </>

//       }
//       </>

//     </div>
//   );
// };

// export default PaperDetails;
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import QuizComponent from '../QuizComponent/QuizComponent';
import PaperCard from '../common/cards/PaperCard/PaperCard';
import NextStudyCard from './NextStudyCard';

const PaperDetails = ({ paperId, paperNumber, subjectName }) => {
  const { data, loading, error } = useFetch(`/topics/${paperId}`);

  const [topicAndStartPaper, setTopicAndStartPaper] = useState('');
  const [pdf, setPdf] = useState('');

  return (
    <div>
      {topicAndStartPaper ? (
        <QuizComponent topicAndStartPaper={topicAndStartPaper} />
      ) : (
        <>
          <PaperCard
            topicArray={data?.data}
            paperNumber={paperNumber}
            subjectName={subjectName}
            setTopicAndStartPaper={setTopicAndStartPaper}
            setPdf={setPdf}
          />
          <NextStudyCard />
          {pdf && (
            <iframe
              src={pdf}
              width="95%"
              height="1000px"
              className="mx-auto mt-16"
            />
          )}
        </>
      )}
    </div>
  );
};

export default PaperDetails;
