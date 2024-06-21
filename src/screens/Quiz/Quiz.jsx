// import React, { useEffect, useState } from 'react';

// import QuizComponent from '../../components/QuizComponent/QuizComponent';
// import QuizSummary from '../../components/QuizSummary/QuizSummary';
// import PaperCard from '../../components/common/cards/PaperCard/PaperCard';
// import { mapDataToSectionData } from '../../data/quiz';
// import useFetch from '../../hooks/useFetch';
// import usePost from '../../hooks/usePost';
// import { API_ROUTES } from '../../routes/apiRoutes';

// function Quiz() {
//   const [paperId, setPaperId] = useState('');
//   const [selectPaper, setSelectPaper] = useState(false);
//   const [topicAndStartPaper, setTopicAndStartPaper] = useState('');
//   const [subjectId, setSubjectId] = useState('');
//   const [qualificationId, setQualificationId] = useState('');
//   const [boardLevelId, setBoardLevelId] = useState('');
//   const [subjectName, setSubjectName] = useState('');
//   const [paperName, setPaperName] = useState('');

//   const { data } = useFetch(API_ROUTES.PREFERENCES);
//   const sectionData = data ? mapDataToSectionData(data.data) : [];
//   const handleSelectPaper = (paper) => {
//     setSelectPaper(true);
//     setPaperId(paper);
//   };
//   const {
//     data: topicsData,
//     loading,
//     error,
//   } = useFetch(API_ROUTES.TOPICS(paperId));
//   const { data: quizData, postData } = usePost(API_ROUTES.CREATE_QUIZ);

//   useEffect(() => {
//     if (topicAndStartPaper) {
//       postData({
//         subjectId: subjectId,
//         qualificationId: qualificationId,
//         boardLevelId: boardLevelId,
//         topicId: topicAndStartPaper,
//       });
//     }
//   }, [topicAndStartPaper]);
//   const {
//     data: quizQuestionData,
//     loading: questionLoading,
//     refetch: refetchQuestion,
//   } = useFetch(`/quiz/get-quiz/${quizData?.data.quizId}`);
//   const [displayQuizSummery, setDisplayQuizSummery] = useState(false);

//   return (
//     <>
//       {topicAndStartPaper && quizData?.data.quizId ? (
//         displayQuizSummery ? (
//           <QuizSummary quizId={quizData?.data.quizId} />
//         ) : (
//           <QuizComponent
//             topicAndStartPaper={topicAndStartPaper}
//             quizId={quizData?.data.quizId}
//             quizQuestionData={quizQuestionData?.data}
//             questionLoading={questionLoading}
//             refetchQuestion={refetchQuestion}
//             setDisplayQuizSummery={setDisplayQuizSummery}
//             isPreliminary={false}
//           />
//         )
//       ) : selectPaper ? (
//         <PaperCard
//           topicArray={topicsData?.data}
//           setTopicAndStartPaper={setTopicAndStartPaper}
//           startQuiz={true}
//           subjectName={subjectName}
//           paperName={paperName}
//           // handelCreateQuiz={handelCreateQuiz}
//         />
//       ) : (
//         <div className="bg-white py-10">
//           {sectionData.map((item, index) => (
//             <div
//               key={index}
//               className="flex gap-6 justify-center mb-4 items-center"
//             >
//               <div className={item.className}>{item.course}</div>
//               <div className="bg-gray-300 text-black px-4 py-2 text-[16px] font-normal cursor-pointer w-24 rounded-sm">
//                 {item.subject}
//               </div>

//               {item.papers.map((paper, idx) => (
//                 <button
//                   key={idx}
//                   className="text-[16px] px-40 py-2 font-normal border border-gray-400 rounded-sm"
//                   onClick={() => {
//                     handleSelectPaper(paper._id);
//                     setSubjectId(item.subjectId);
//                     setQualificationId(item.qualificationId);
//                     setBoardLevelId(item.boardLevelId);
//                     setSubjectName(item.subject);
//                     setPaperName(paper.name);
//                   }}
//                 >
//                   {paper.name}
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default Quiz;

import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import QuizComponent from '../../components/QuizComponent/QuizComponent';
import QuizSummary from '../../components/QuizSummary/QuizSummary';
import PaperCard from '../../components/common/cards/PaperCard/PaperCard';
import { mapDataToSectionData } from '../../data/quiz';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';
import { API_ROUTES } from '../../routes/apiRoutes';

function Quiz() {
  const [paperId, setPaperId] = useState('');
  const [selectPaper, setSelectPaper] = useState(false);
  const [topicAndStartPaper, setTopicAndStartPaper] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [qualificationId, setQualificationId] = useState('');
  const [boardLevelId, setBoardLevelId] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [paperName, setPaperName] = useState('');

  const { data } = useFetch(API_ROUTES.PREFERENCES);
  const sectionData = data ? mapDataToSectionData(data.data) : [];
  const handleSelectPaper = (paper) => {
    setSelectPaper(true);
    setPaperId(paper);
  };
  const {
    data: topicsData,
    loading,
    error,
  } = useFetch(API_ROUTES.TOPICS(paperId));
  const { data: quizData, postData } = usePost(API_ROUTES.CREATE_QUIZ);

  useEffect(() => {
    if (topicAndStartPaper) {
      postData({
        subjectId: subjectId,
        qualificationId: qualificationId,
        boardLevelId: boardLevelId,
        topicId: topicAndStartPaper,
      });
    }
  }, [topicAndStartPaper]);
  const quizState = useSelector((state) => state.quiz.quiz);
  console.log(quizState);
  const [actualQuizId, setActualQuizId] = useState('');
  const [displayQuizComponent, setDisplayQuizComponent] = useState(false);
  useEffect(() => {
    if (quizState?.isPending == true) {
      setActualQuizId(quizState.quizId);
      setDisplayQuizComponent(true);
    } else if (quizState?.isPending == false) {
      setActualQuizId(quizData?.data.quizId);
      if (topicAndStartPaper && quizData?.data.quizId) {
        setDisplayQuizComponent(true);
      }
    }
  }, [quizData]);

  const {
    data: quizQuestionData,
    loading: questionLoading,
    refetch: refetchQuestion,
  } = useFetch(`/quiz/get-quiz/${actualQuizId}`);
  const [displayQuizSummery, setDisplayQuizSummery] = useState(false);
  console.log(
    'topic id is = ',
    topicAndStartPaper,
    'and quiz id =',
    actualQuizId
  );

  return (
    <>
      {displayQuizComponent ? (
        displayQuizSummery ? (
          <QuizSummary quizId={actualQuizId} />
        ) : (
          <QuizComponent
            topicAndStartPaper={topicAndStartPaper}
            quizId={actualQuizId}
            quizQuestionData={quizQuestionData?.data}
            questionLoading={questionLoading}
            refetchQuestion={refetchQuestion}
            setDisplayQuizSummery={setDisplayQuizSummery}
            isPreliminary={false}
          />
        )
      ) : selectPaper ? (
        <PaperCard
          topicArray={topicsData?.data}
          setTopicAndStartPaper={setTopicAndStartPaper}
          startQuiz={true}
          subjectName={subjectName}
          paperName={paperName}
          // handelCreateQuiz={handelCreateQuiz}
        />
      ) : (
        <div className="bg-white py-10">
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 justify-center mb-4 items-center"
            >
              <div className={item.className}>{item.course}</div>
              <div className="bg-gray-300 text-black px-4 py-2 text-[16px] font-normal cursor-pointer w-24 rounded-sm">
                {item.subject}
              </div>

              {item.papers.map((paper, idx) => (
                <button
                  key={idx}
                  className="text-[16px] px-40 py-2 font-normal border border-gray-400 rounded-sm"
                  onClick={() => {
                    handleSelectPaper(paper._id);
                    setSubjectId(item.subjectId);
                    setQualificationId(item.qualificationId);
                    setBoardLevelId(item.boardLevelId);
                    setSubjectName(item.subject);
                    setPaperName(paper.name);
                    // console.log('this', item, paper);
                  }}
                >
                  {paper.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Quiz;
