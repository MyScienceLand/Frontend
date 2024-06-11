import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';
import QuizComponent from '../QuizComponent/QuizComponent';
import Button from '../common/buttons/Button/Button';

const StartAttemptQuiz = ({ setDisplayQuizSummery }) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [selectedPreferencesData, setSelectedPreferencesData] = useState({
    subjectId: '',
    qualificationId: '',
    boardLevelId: '',
  });

  const { data, loading, error } = useFetch('/user-preferences');
  const {
    data: createPrimarilyQuizResponse,
    loading: createPrimarilyLoading,
    postData,
  } = usePost('/quiz/create-Primilaryquiz');

  const handelCreateAndStartQuiz = () => {
    if (
      selectedPreferencesData.subjectId === '' ||
      selectedPreferencesData.qualificationId === '' ||
      selectedPreferencesData.boardLevelId === ''
    ) {
      alert('Please select an option before starting the quiz.');
      return;
    }
    postData(selectedPreferencesData);
    setStartQuiz(true);
  };

  const {
    data: quizQuestionData,
    loading: questionLoading,
    refetch: refetchQuestion,
  } = useFetch(`/quiz/get-quiz/${createPrimarilyQuizResponse?.data.quizId}`);

  return (
    <>
      {startQuiz && !createPrimarilyLoading ? (
        <QuizComponent
          quizId={createPrimarilyQuizResponse?.data.quizId}
          quizQuestionData={quizQuestionData?.data}
          questionLoading={questionLoading}
          refetchQuestion={refetchQuestion}
          setDisplayQuizSummery={setDisplayQuizSummery}
        />
      ) : (
        <div>
          <h1 className="text-[18px] font-medium">
            Please Attempt Primarily Quiz
          </h1>
          <p className="text-[16px] text-start font-normal text-[#696969] mb-4 w-[500px]">
            Thank you for submitting your preferences! In order to ensure the
            best possible experience and tailor our offerings to your needs, we
            kindly request that you attempt a preliminary quiz.{' '}
          </p>
          <h1 className="text-[18px] my-4 font-medium">
            Your Selected Subjects
          </h1>
          <div className="flex items-center mb-4 justify-between">
            {data &&
              data.data.map((item, index) => (
                <div key={index}>
                  <p className="text-[16px] text-[#696969] font-medium">
                    {item.subjects.name}
                  </p>
                  <p className="text-[16px] text-[#696969] font-medium">
                    {item.qualification.name}
                  </p>
                  <p className="text-[16px] text-[#696969] font-medium">
                    {item.board?.name}
                  </p>
                  <input
                    type="radio"
                    id={`subject${index}`}
                    name="subject"
                    value={item.subjects.name}
                    className="ml-6"
                    onChange={() =>
                      setSelectedPreferencesData({
                        subjectId: item.subjectId,
                        qualificationId: item.qualificationId,
                        boardLevelId: item.boardId,
                      })
                    }
                  />
                </div>
              ))}
          </div>
          <p className="text-[18px] font-medium mb-5">
            Please click on selected Subjects to attempting primarily Quiz
          </p>
          <div className="">
            <Button title={'Start'} onClick={handelCreateAndStartQuiz} />
          </div>
        </div>
      )}
    </>
  );
};

export default StartAttemptQuiz;
