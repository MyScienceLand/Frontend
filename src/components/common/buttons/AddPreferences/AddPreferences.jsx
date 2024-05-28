import React, { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import CustomModal from '../../modals/CustomModal/CustomModal';
const AddPreferences = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <>
      <button
        onClick={handleOpen}
        type="button"
        className="-m-2.5 px-8 h-10 flex justify-center gap-2 items-center bg-[var(--secondary-color)] text-white  hover:text-gray-500"
      >
        <IoAddCircleOutline />
        Add Preferences
      </button>

      <CustomModal
        open={modalOpen}
        onClose={handleClose}
        title="My Custom Modal"
      >
        <div>
          <p>This is some content inside the modal!</p>
          <p>You can put any valid JSX here.</p>
        </div>
      </CustomModal>
    </>
  );
};

export default AddPreferences;
