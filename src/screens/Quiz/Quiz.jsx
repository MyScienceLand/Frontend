import React, { useEffect, useState } from 'react';

import QuizComponent from '../../components/QuizComponent/QuizComponent';
import QuizSummary from '../../components/QuizSummary/QuizSummary';
import PaperCard from '../../components/common/cards/PaperCard/PaperCard';
import { mapDataToSectionData } from '../../data/quiz';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';

function Quiz() {
  const [paperId, setPaperId] = useState('');
  const [selectPaper, setSelectPaper] = useState(false);
  const [topicAndStartPaper, setTopicAndStartPaper] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [qualificationId, setQualificationId] = useState('');
  const [boardLevelId, setBoardLevelId] = useState('');

  const { data } = useFetch('/user-preferences');
  const sectionData = data ? mapDataToSectionData(data.data) : [];
  const handleSelectPaper = (paper) => {
    setSelectPaper(true);
    setPaperId(paper);
  };
  const { data: topicsData, loading, error } = useFetch(`/topics/${paperId}`);
  // console.log(topicAndStartPaper);
  const { data: quizData, postData } = usePost('/quiz/create-quiz');
  // useEffect(() => {
  //   console.log('*********************************************');
  //   console.log(quizData?.data.quizId, 'In main quiz');
  //   console.log('*********************************************');
  // }, [quizData]);
  // let topicId = '';

  // const handelCreateQuiz = () => {
  //   topicId = topicAndStartPaper;
  //   postData({
  //     subjectId: subjectId,
  //     qualificationId: qualificationId,
  //     boardLevelId: boardLevelId,
  //     topicId: topicId,
  //   });
  // };
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
  const {
    data: quizQuestionData,
    loading: questionLoading,
    refetch: refetchQuestion,
  } = useFetch(`/quiz/get-quiz/${quizData?.data.quizId}`);
  const [displayQuizSummery, setDisplayQuizSummery] = useState(false);
  return (
    <>
      {topicAndStartPaper && quizData?.data.quizId ? (
        displayQuizSummery ? (
          <QuizSummary quizId={quizData?.data.quizId} />
        ) : (
          <QuizComponent
            topicAndStartPaper={topicAndStartPaper}
            quizId={quizData?.data.quizId}
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
                    console.log(item);
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
