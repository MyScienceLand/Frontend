import React, { useEffect, useState } from 'react';
import PaperDetails from '../../components/PaperDetails/PaperDetails';
import ToastNotification from '../../components/ToastNotification/ToastNotification';
import PreLoader from '../../components/common/Preloader/PreLoader';
import SubjectAndPaper from '../../components/common/cards/SubjectAndPaper/SubjectAndPaper';
import useFetch from '../../hooks/useFetch';

const Content = () => {
  const [openDetailsQuiz, setOpenDetailsQuiz] = useState(false);
  const [paperId, setPaperId] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [paperNumber, setPaperNumber] = useState('');
  const { data, loading, error } = useFetch('/user-preferences');

  const classesArray = [
    [
      'bg-[var(--secondary-color)] text-white',
      'bg-[var(--secondary-color)] text-white',
      'bg-[var(--secondary-color)] text-white',
    ],
    [
      'bg-[#006C8D] text-white',
      'bg-[#006C8D] text-white',
      'bg-[#006C8D] text-white',
    ],
    [
      'bg-[#007353] text-white',
      'bg-[#007353] text-white',
      'bg-[#007353] text-white',
    ],
  ];

  useEffect(() => {
    if (error) {
      ToastNotification.error('No preferences are found');
    }
  }, [data]);

  return (
    <>
      <h1 className=" px-12 text-[28px] font-medium text-secondary">
        Course Content
      </h1>
      {loading && <PreLoader />}
      {openDetailsQuiz ? (
        <PaperDetails
          paperId={paperId}
          subjectName={subjectName}
          paperNumber={paperNumber}
        />
      ) : (
        <div className="px-12" onClick={() => setOpenDetailsQuiz(true)}>
          <div className=" flex space-x-6">
            {data &&
              data?.data?.data.map((section, index) => (
                <SubjectAndPaper
                  key={section._id}
                  className={classesArray[index % classesArray.length]}
                  data={section}
                  setPaperId={setPaperId}
                  setPaperNumber={setPaperNumber}
                  setSubjectName={setSubjectName}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
