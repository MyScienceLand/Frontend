import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuizComponent from '../../components/QuizComponent/QuizComponent';
import useFetch from '../../hooks/useFetch';
import { API_ROUTES } from '../../routes/apiRoutes';

const PrimarilyQuiz = () => {
  const quizState = useSelector((state) => state.quiz.quiz);
  const navigate = useNavigate();
  const {
    data: quizQuestionData,
    loading: questionLoading,
    refetch: refetchQuestion,
  } = useFetch(API_ROUTES.GET_QUESTION(quizState.quizId));
  return (
    <div>
      <QuizComponent
        quizId={quizState.quizId}
        isPreliminary={true}
        quizQuestionData={quizQuestionData?.data}
        questionLoading={questionLoading}
        refetchQuestion={refetchQuestion}
        navigateToHome={() => navigate('/student-dashboard/dashboard')}
      />
    </div>
  );
};

export default PrimarilyQuiz;
