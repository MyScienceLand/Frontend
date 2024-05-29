import React, { useState, useEffect, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddPrefrences from "../add-prefrences";
import AtemptQuiz from "../attemp-quiz";

const DialogBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [quizOpen, setQuizmodal] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setQuizmodal(true);
    setModalOpen(true);
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="-m-2.5 px-8 py-2 flex justify-center gap-2 items-center bg-secondary text-white text-gray-400 hover:text-gray-500"
      >
        <IoAddCircleOutline />
        Add Preferences
      </button>
      <div
        className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          // onBlur={() => setModalOpen(false)}
          className="md:px-17.5 w-full max-w-[700px] rounded-lg bg-white px-8 py-12 dark:bg-boxdark md:py-15"
        >
          {!quizOpen&&<AddPrefrences handleClose={handleClose} handleOpen={handleOpen} />}
          {quizOpen && <AtemptQuiz handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
