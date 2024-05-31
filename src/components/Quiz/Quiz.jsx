import React, { useState } from 'react';
import { LuClock } from 'react-icons/lu';
import { MdOutlineReportProblem } from 'react-icons/md';
import { TbBulb } from 'react-icons/tb';
import ReportQuestion from '../ReportQuestion/ReportQuestion';
import CustomModal from '../common/modals/CustomModal/CustomModal';

const Quiz = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const questionArray = [
    {
      text: 'Story genetic information',
    },
    {
      text: 'Story genetic information',
    },
    {
      text: 'Story genetic information',
    },
    {
      text: 'Story genetic information',
    },
  ];
  return (
    <div className="bg-[var(--primary-color)]  mx-auto h-[100%] ms-8 rounded-lg">
      <div className="container flex-1 flex-col gap-6 justify-center items-center">
        <div className="bg-[var(--primary-color)] px-6 py-8">
          <div className="flex justify-end  items-center gap-2">
            <button className="bg-[var(--secondary-color)] py-1 px-4 text-[var(--primary-color)] flex items-center hover:bg-slate-100 hover:text-black rounded-sm">
              <TbBulb className="text-[var(--primary-color)] hover:text-black" />
              Hint
            </button>
            <LuClock />
            <span>00:15</span>
          </div>
          <h1 className="text-[var(--text-color)] mb-4 text-[20px] font-bold">
            Question:1
          </h1>
          <div className="flex justify-between items-center gap-5">
            <p className="text-secondary mb-4 text-[18px] font-medium">
              What is the function of the nucleolus within the nucleus of
              eukaryotic cells?
            </p>
            <button onClick={handleOpen} className="flex items-start gap-2">
              <span className="text-[14px] font-medium">Report</span>
              <MdOutlineReportProblem />
            </button>
          </div>
          <div>
            {questionArray.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 border rounded-sm border-[#696969] mb-6 border-opacity-55 px-6 py-2 "
              >
                <input type="radio" name="option" id={index} />
                <p className="text-[18px] text-secondary font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
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
      <div className="w-full gap-4 flex justify-center items-center">
        <button className="bg-[#232B3E] text-[var(--primary-color)] mt-6 px-6 py-2 hover:bg-slate-100 hover:text-black rounded-sm">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Quiz;
