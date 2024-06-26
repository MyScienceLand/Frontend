import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProgressArrow } from '../../../../assets';
import { updateQuiz } from '../../../../redux/slices/quizSlice';

const DashboardSubjectCard = ({ cardsArray }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelContinueQuiz = (quizId, totalCountOfAttemptedQuestion) => {
    dispatch(
      updateQuiz({
        quizId: quizId,
        isPending: true,
        totalCountOfAttemptedQuestion: totalCountOfAttemptedQuestion,
      })
    );
    navigate('/quiz');
    console.log('This id is in card  = ', quizId);
  };
  console.log(cardsArray);
  return (
    <>
      <div className="flex flex-wrap justify-between mt-6">
        {cardsArray &&
          cardsArray?.map((item, index) => (
            <div key={index} className={item?.className}>
              <div className="flex justify-end mt-4">
                <button
                  className="py-1 px-4 rounded-md bg-[var(--primary-color)]"
                  onClick={() =>
                    handelContinueQuiz(
                      item?.quizId,
                      item?.totalCountOfAttemptedQuestion
                    )
                  }
                >
                  Continue
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img src={item?.image} alt={item?.text} />
                <div>
                  <span className="text-[var(--primary-color)]">
                    {item.subjects?.name}
                  </span>
                  <p className="text-[16px] text-[var(--primary-color)] font-normal">
                    {item.topic?.name}
                  </p>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={ProgressArrow} alt="Uper Icon" />
                    <p className="text-[var(--primary-color)] text-[12px] font-normal">
                      {item?.progress}% higher than last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default DashboardSubjectCard;