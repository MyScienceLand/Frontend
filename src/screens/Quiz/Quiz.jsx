import React, { useEffect, useState } from 'react';

import QuizComponent from '../../components/QuizComponent/QuizComponent';
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
  useEffect(() => {
    console.log('*********************************************');
    console.log(quizData);
    console.log('*********************************************');
  }, [topicsData]);

  const handelCreateQuiz = () => {
    postData({
      subjectId: subjectId,
      qualificationId: qualificationId,
      boardLevelId: boardLevelId,
      topicId: topicAndStartPaper,
    });
    // console.log(subjectId, qualificationId, boardLevelId, topicAndStartPaper);
  };
  console.log(
    'subjet id = ',
    subjectId,
    'qualification id  =',
    qualificationId,
    'bord id=',
    boardLevelId,
    'topic id',
    topicAndStartPaper
  );
  /**
   * 
   *  "subjectId": "665886c60e09c32300610779",
  "qualificationId": "665886930e09c32300610778",
  "boardLevelId": "665885d00e09c32300610775",
  "topicId": "6658872f0e09c3230061077c"
   */
  return (
    <>
      {topicAndStartPaper ? (
        <QuizComponent topicAndStartPaper={topicAndStartPaper} />
      ) : selectPaper ? (
        <PaperCard
          topicArray={topicsData?.data}
          setTopicAndStartPaper={setTopicAndStartPaper}
          startQuiz={true}
          handelCreateQuiz={handelCreateQuiz}
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
