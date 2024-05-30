import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import PreliminaryQuizModal from '../common/modals/PreliminaryQuizModal/PreliminaryQuizModal';

const PreliminaryQuiz = () => {
  const [modalOpen, setModalOpen] = useState(true); // Modal is open initially
  const [isClosable, setIsClosable] = useState(false);

  const handleClose = () => {
    if (isClosable) {
      setModalOpen(false);
    }
  };

  //   useEffect(() => {
  //     // // Simulate fetching status from backend
  //     // const fetchModalStatus = async () => {
  //     //   // Simulate an API call with a delay
  //     //   setTimeout(() => {
  //     //      // Example: Set to true when backend allows closing
  //     //   }, 5000); // Simulating 5 seconds delay for backend response
  //     // };

  //     setIsClosable(false);
  //   }, []);
  return (
    <div>
      <PreliminaryQuizModal
        open={modalOpen}
        onClose={handleClose}
        isClosable={isClosable}
        title="My Custom Modal"
      >
        <Quiz />
      </PreliminaryQuizModal>
    </div>
  );
};

export default PreliminaryQuiz;
