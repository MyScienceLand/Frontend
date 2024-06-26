import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';
import { updateQuiz } from '../../redux/slices/quizSlice';
import { API_ROUTES } from '../../routes/apiRoutes';
import ToastNotification from '../ToastNotification/ToastNotification';
import PreLoader from '../common/Preloader/PreLoader';
import Button from '../common/buttons/Button/Button';

const StartAttemptQuiz = ({
  handleClose,
  setDisplayStartQuiz,
  clearPreferences,
  continueQuizData,
}) => {
  const [selectedPreferencesData, setSelectedPreferencesData] = useState({
    subjectId: '',
    qualificationId: '',
    boardLevelId: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(API_ROUTES.PREFERENCES);
  const {
    data: createPrimarilyQuizResponse,
    loading: createPrimarilyLoading,
    postData,
    error: createQuizError,
  } = usePost(API_ROUTES.CREATE_PRELIMINARY_QUIZ);

  const handelCreateAndStartQuiz = () => {
    if (
      selectedPreferencesData.subjectId === '' ||
      selectedPreferencesData.qualificationId === '' ||
      selectedPreferencesData.boardLevelId === ''
    ) {
      // ToastNotification.warn(
      //   'Please select an option before starting the quiz.'
      // );
      return;
    }
    const existingQuiz = continueQuizData.find(
      (quiz) => quiz.quizzes.subjectId === selectedPreferencesData.subjectId
    );

    if (existingQuiz) {
      dispatch(
        updateQuiz({
          quizId: existingQuiz.quizId,
          isContinue: true,
          totalCountOfAttemptedQuestion:
            existingQuiz?.totalCountOfAttemptedQuestion,
        })
      );
      navigate('/student-dashboard/primarily-quiz');
      handleClose();
      setDisplayStartQuiz(false);
      clearPreferences();
    } else {
      postData(selectedPreferencesData);
    }
  };

  useEffect(() => {
    if (createPrimarilyQuizResponse?.data.quizId) {
      dispatch(
        updateQuiz({
          quizId: createPrimarilyQuizResponse?.data.quizId,
          isContinue: false,
          totalCountOfAttemptedQuestion: 0,
        })
      );
      navigate('/student-dashboard/primarily-quiz');
      handleClose();
      setDisplayStartQuiz(false);
      clearPreferences();
    }
    if (createQuizError) {
      ToastNotification.error(createQuizError);
    }
  }, [createPrimarilyQuizResponse]);
  const isOptionSelected = Boolean(
    selectedPreferencesData.subjectId &&
      selectedPreferencesData.qualificationId &&
      selectedPreferencesData.boardLevelId
  );

  return (
    <>
      {createPrimarilyLoading ? (
        <PreLoader />
      ) : (
        <div>
          <h1 className="text-[18px] font-medium">
            Please Attempt Preliminary Quiz
          </h1>
          <p className="text-[16px] text-start font-normal text-[#696969] mb-4 w-[500px]">
            Thank you for submitting your preferences! In order to ensure the
            best possible experience and tailor our offerings to your needs, we
            kindly request that you attempt a preliminary quiz.
          </p>
          <h1 className="text-[18px] my-4 font-medium">
            Your Selected Subjects
          </h1>
          <div className="flex  mb-4 justify-start  gap-[33%]">
            {data &&
              data.data.map((item, index) => (
                <div key={index} className="items-center">
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
                    disabled={item.isPrimilary}
                  />
                </div>
              ))}
          </div>
          <p className="text-[18px] font-medium mb-5">
            Please click on selected Subjects to attempting preliminary Quiz
          </p>
          <div className="text-[18px] text-center font-normal w-full mt-4 text-white bg-primary py-1">
            <Button
              title={'Start'}
              onClick={handelCreateAndStartQuiz}
              disabled={!isOptionSelected}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StartAttemptQuiz;
