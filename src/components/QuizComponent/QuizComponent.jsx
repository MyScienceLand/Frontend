import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LuClock } from 'react-icons/lu';
import { MdOutlineReportProblem } from 'react-icons/md';
import { TbBulb } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import { handelLogout } from '../../utils/helper/HelperFunctions';
import ReportQuestion from '../ReportQuestion/ReportQuestion';
import PreLoader from '../common/Preloader/PreLoader';
import CustomModal from '../common/modals/CustomModal/CustomModal';

const QuizComponent = ({
  topicAndStartPaper,
  quizId,
  quizQuestionData,
  questionLoading,
  refetchQuestion,
  setDisplayQuizSummery,
  isPreliminary,
  navigateToHome,
}) => {
  const {
    questionId,
    topicName,
    question,
    difficultyLevel,
    type,
    hint,
    explaination,
    tag,
    correctAnswer,
    answers,
  } = quizQuestionData || {};

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(60); // Set the initial time
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [selectedOption, setSelectedOption] = useState(undefined); // State to track selected option
  const [showHint, setShowHint] = useState(false);
  const { postData: submitQuestion, loading: submitQuestionLoading } = usePost(
    `/quiz/submit-question/${quizId}`
  );
  const { postData: finishQuiz, loading: finishQuizLoading } = usePost(
    `/quiz/finishQuiz/${quizId}`
  );
  const [optionColors, setOptionColors] = useState(
    answers ? answers.map(() => 'white') : []
  );

  const commonFunction = () => {
    setIsTimeUp(true);
    setSelectedOption(undefined);
    setShowHint(false);
    submitQuestion({
      answer: {
        questionId: questionId,
        question: question,
        difficultyLevel: difficultyLevel,
        type: type,
        tag: tag,
        submittedAnswer: selectedOption,
      },
    });
  };

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else {
      setTime('Times up!');
      commonFunction();
      if (questionNumber === 20) {
        finishQuiz();
        if (isPreliminary) {
          navigateToHome();
        } else {
          setDisplayQuizSummery(true);
        }
      }
    }
    return () => clearTimeout(timer);
  }, [time]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTimeUp) {
      refetchQuestion();
      setTime(60);
      setQuestionNumber(questionNumber + 1);
      setIsTimeUp(false);
    }
  }, [isTimeUp]);

  const handleOptionChange = (index) => {
    // Reset all option colors to white
    const newOptionColors = answers.map(() => 'white');
    // Set the selected option's color to grey (or any color indicating selection)
    newOptionColors[index] = 'grey';
    // Update the state
    setOptionColors(newOptionColors);
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    const newOptionColors = [...optionColors];
    if (selectedOption !== undefined) {
      if (answers[selectedOption] === correctAnswer) {
        newOptionColors[selectedOption] = correctQuizColor;
      } else {
        newOptionColors[selectedOption] = wrongQuizColor;
      }
      setOptionColors(newOptionColors);
    }
  };

  const handelOpenNewQuestion = () => {
    if (questionNumber === 20) {
      finishQuiz();
      if (isPreliminary) {
        navigateToHome();
      } else {
        setDisplayQuizSummery(true);
      }
    } else {
      refetchQuestion();
      commonFunction();
    }
  };

  const wrongQuizColor = '#DA525D';
  const correctQuizColor = '#65BF7A';

  return (
    <>
      {questionLoading || submitQuestionLoading ? (
        <PreLoader />
      ) : (
        <div>
          <div className="bg-[var(--primary-color)]  mx-auto h-[100%] ms-8 rounded-lg">
            <div className="container flex-1 flex-col gap-6 justify-center items-center">
              <div className="bg-[var(--primary-color)] px-6 py-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-[var(--text-color)] mb-4 text-[20px] font-bold">
                    Question: {questionNumber}
                  </h1>
                  <div className="flex justify-end  items-center gap-2">
                    <div className="flex gap-2 items-center">
                      <Tooltip title={hint} placement="top-start">
                        <div className="bg-[var(--secondary-color)] py-1 px-4 text-[var(--primary-color)] flex items-center  rounded-sm">
                          <TbBulb />
                          Hint
                        </div>
                      </Tooltip>
                      <LuClock />
                      <span>{time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-5">
                  <p className="text-secondary mb-4 text-[18px] font-medium">
                    {question}
                  </p>
                  <button
                    onClick={handleOpen}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[14px] font-medium">Report</span>
                    <MdOutlineReportProblem />
                  </button>
                </div>
                <div>
                  {answers &&
                    answers.map((item, index) => (
                      <div
                        key={index}
                        className={`flex gap-5 border rounded-sm border-[#696969] mb-6 border-opacity-55 px-6 py-2`}
                        style={{ backgroundColor: optionColors[index] }}
                      >
                        <input
                          type="radio"
                          name="option"
                          id={index}
                          onChange={() => handleOptionChange(index)}
                        />
                        <p className="text-[18px] text-secondary font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                </div>
                {selectedOption !== undefined && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Explanation</h2>
                    <p className="text-gray-600">{explaination}</p>
                  </div>
                )}
              </div>
            </div>
            <CustomModal
              open={modalOpen}
              onClose={handleClose}
              title="Add Your Preferences"
            >
              <ReportQuestion />
            </CustomModal>
          </div>
          <div className="w-full gap-4 flex justify-center items-center">
            {isPreliminary ? (
              <button
                onClick={handelLogout}
                className="bg-transparent text-[#232B3E] mt-6 px-6 py-2 hover:bg-slate-100 hover:text-black rounded-sm border border-[#232B3E]"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/')}
                className="bg-transparent text-[#232B3E] mt-6 px-6 py-2 hover:bg-slate-100 hover:text-black rounded-sm border border-[#232B3E]"
              >
                Home
              </button>
            )}
            <button
              className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-600  rounded-sm"
              onClick={
                selectedOption !== undefined
                  ? handelOpenNewQuestion
                  : () => alert('Please Select any option')
              }
            >
              Continue
            </button>
            <button
              className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-600  rounded-sm"
              onClick={handleCheckAnswer}
            >
              Check
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
