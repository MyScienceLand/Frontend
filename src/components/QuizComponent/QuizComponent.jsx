import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { API_ROUTES } from "../../routes/apiRoutes";
import { handelLogout } from "../../utils/helper/HelperFunctions";
import ReportQuestion from "../ReportQuestion/ReportQuestion";
import ToastNotification from "../ToastNotification/ToastNotification";
import PreLoader from "../common/Preloader/PreLoader";
import CustomModal from "../common/modals/CustomModal/CustomModal";
import { Logo, PurpleLogoWithText } from "../../assets";
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
    // totalCountOfAttemptedQuestion,
  } = quizQuestionData || {};
  const quizState = useSelector((state) => state?.quiz?.quiz);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  // const [questionNumber, setQuestionNumber] = useState(
  //   totalCountOfAttemptedQuestion + 1
  // );
  const [questionNumber, setQuestionNumber] = useState(
    typeof quizState?.totalCountOfAttemptedQuestion === "number"
      ? quizState?.totalCountOfAttemptedQuestion + 1
      : 1
  );

  // console.log(totalCountOfAttemptedQuestion);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [displayExplanation, setDisplayExplanation] = useState(false);
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [correctOption, setCorrectOption] = useState("");

  const {
    data: submitQuestionResponse,
    postData: submitQuestion,
    loading: submitQuestionLoading,
  } = usePost(API_ROUTES.SUBMIT_QUESTION(quizId));
  const {
    data: finishQuizResponse,
    postData: finishQuiz,
    loading: finishQuizLoading,
  } = usePost(API_ROUTES.FINISH_QUIZ(quizId));
  const [optionColors, setOptionColors] = useState(
    answers ? answers.map(() => "white") : []
  );

  const commonFunction = () => {
    setSelectedOption(undefined);
    setOptionColors(answers.map(() => "white"));
    setDisplayExplanation(false);
    setQuestionNumber(questionNumber + 1);
  };

  const navigate = useNavigate();

  const handleCheckAnswer = () => {
    if (selectedOption === undefined) {
      alert("Please select any option");
      return;
    }

    submitQuestion({
      answer: {
        questionId: questionId,
        question: question,
        difficultyLevel: difficultyLevel,
        type: type,
        tag: tag,
        submittedAnswer: correctOption,
      },
    });
    setIsOptionChecked(true);
    setDisplayExplanation(true);
  };

  const handelOpenNewQuestion = () => {
    if (questionNumber === 20) {
      finishQuiz();
      // ToastNotification.success('Quiz Completed');
      if (isPreliminary) {
        navigateToHome();
        window.location.reload();
      } else {
        setDisplayQuizSummery(true);
      }
    } else {
      refetchQuestion();
      setIsOptionChecked(false);
      commonFunction();
    }
  };

  const handleOptionChange = (index) => {
    if (isOptionChecked) {
      return;
    }
    const newOptionColors = answers.map(() => "white");
    newOptionColors[index] = "grey"; // Indicate selected option
    setOptionColors(newOptionColors);
    setSelectedOption(index);
    setCorrectOption(answers[index]);
  };

  useEffect(() => {
    if (finishQuizResponse) {
      ToastNotification.success(finishQuizResponse?.message);
    }
  }, [finishQuizResponse]);

  const wrongQuizColor = "#DA525D";
  const correctQuizColor = "#65BF7A";

  useEffect(() => {
    if (submitQuestionResponse) {
      const newOptionColors = [...optionColors];
      if (submitQuestionResponse.statusCode === 200) {
        if (submitQuestionResponse.data == true) {
          newOptionColors[selectedOption] = correctQuizColor;
        } else {
          newOptionColors[selectedOption] = wrongQuizColor;
        }
        setOptionColors(newOptionColors);
      } else {
        alert(submitQuestionResponse.message);
      }
    }
  }, [submitQuestionResponse]);

  return (
    <>
      {questionLoading ? (
        <PreLoader />
      ) : (
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-8">
            <img src={PurpleLogoWithText} className="w-24 " />
          </div>
          <div className="bg-[var(--primary-color)]   rounded-lg">
            <div className=" flex-1 flex-col gap-6 justify-center items-center">
              <div className="bg-[var(--primary-color)] px-6 py-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-[var(--text-color)] mb-4 text-[20px] font-bold">
                    Question: {questionNumber}
                  </h1>
                  <div className="flex justify-end  items-center gap-2">
                    <div className="flex gap-2 items-center">
                      <Tooltip
                        title={hint}
                        placement="left-start"
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#1A202F",
                              "& .MuiTooltip-arrow": {
                                color: "common.black",
                              },
                            },
                          },
                        }}
                      >
                        <div className="bg-[var(--secondary-color)] py-1 px-4 text-[var(--primary-color)] flex items-center  rounded-sm gap-1">
                          <TbBulb />
                          <div className="mt-1">Hint</div>
                        </div>
                      </Tooltip>
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
                      <label
                        key={index}
                        className={`flex gap-5 border rounded-sm border-[#696969] mb-6 border-opacity-55 px-6 py-2`}
                        style={{ backgroundColor: optionColors[index] }}
                        onClick={() => handleOptionChange(index)}
                      >
                        {/* <input type="radio" name="option" id={index} /> */}
                        <p className="text-[18px] text-secondary font-medium">
                          {item}
                        </p>
                      </label>
                    ))}
                </div>
                {displayExplanation && (
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
              title="Report Question"
            >
              <ReportQuestion
                questionId={questionId}
                handleClose={handleClose}
              />
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
                onClick={() => navigate("/")}
                className="bg-transparent text-[#232B3E] mt-6 px-6 py-2 hover:bg-slate-100 hover:text-black rounded-sm border border-[#232B3E]"
              >
                Home
              </button>
            )}

            {displayExplanation ? (
              <button
                className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-600  rounded-sm"
                onClick={submitQuestionLoading ? null : handelOpenNewQuestion}
              >
                {submitQuestionLoading
                  ? "Checking..."
                  : questionNumber === 20
                  ? "Complete"
                  : "Continue"}
              </button>
            ) : (
              <button
                className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-600  rounded-sm"
                onClick={handleCheckAnswer}
              >
                Check
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
