import React, { useEffect, useState } from 'react';
import { LuClock } from 'react-icons/lu';
import { MdOutlineReportProblem } from 'react-icons/md';
import { TbBulb } from 'react-icons/tb';
import usePost from '../../hooks/usePost';
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
        setDisplayQuizSummery(true);
      }
    }
    return () => clearTimeout(timer);
  }, [time]);

  useEffect(() => {
    if (isTimeUp) {
      refetchQuestion();
      setTime(60);
      setQuestionNumber(questionNumber + 1);
      setIsTimeUp(false);
    }
  }, [isTimeUp]); //
  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handelOpenNewQuestion = () => {
    if (questionNumber === 20) {
      finishQuiz();
      setDisplayQuizSummery(true);
    } else {
      refetchQuestion();
      commonFunction();
      console.log('new question');
    }
  };

  return (
    <>
      {questionLoading || submitQuestionLoading ? (
        <PreLoader />
      ) : (
        <div>
          <div className="bg-[var(--primary-color)]  mx-auto h-[100%] ms-8 rounded-lg">
            <div className="container flex-1 flex-col gap-6 justify-center items-center">
              <div className="bg-[var(--primary-color)] px-6 py-8">
                <div className="flex justify-between  items-center gap-2">
                  {showHint ? (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-600">{hint}</p>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => setShowHint(true)}
                      className="bg-[var(--secondary-color)] py-1 px-4 text-[var(--primary-color)] flex items-center hover:bg-slate-100 hover:text-black rounded-sm"
                    >
                      <TbBulb className="text-[var(--primary-color)] hover:text-black" />
                      Hint
                    </button>
                    <LuClock />
                    <span>{time}</span>
                  </div>
                </div>
                <h1 className="text-[var(--text-color)] mb-4 text-[20px] font-bold">
                  Question:{questionNumber}
                </h1>
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
                    answers?.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-5 border rounded-sm border-[#696969] mb-6 border-opacity-55 px-6 py-2 "
                      >
                        <input
                          type="radio"
                          name="option"
                          id={index}
                          onChange={() => handleOptionChange(item)}
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
              // width={displayStartQuiz ? 400 : 600}
            >
              <ReportQuestion />
            </CustomModal>
          </div>

          <div className="w-full gap-4 flex justify-center items-center">
            <button className="bg-transparent text-[#232B3E] mt-6 px-6 py-2 hover:bg-slate-100 hover:text-black rounded-sm border border-[#232B3E]">
              Home
            </button>
            <button
              className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-600  rounded-sm"
              onClick={
                selectedOption
                  ? handelOpenNewQuestion
                  : () => alert('Please Select any option')
              }
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
