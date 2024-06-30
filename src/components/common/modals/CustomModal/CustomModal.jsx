import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import '../../../../index.scss';

const CustomModal = ({
  open,
  onClose,
  title = '',
  children,
  width,
  isClosable,
  displayCrossButton,
}) => {
  const trigger = useRef(null);
  const modal = useRef(null);
  const handleBackdropClick = (event) => {
    if (!isClosable) {
      event.stopPropagation();
    } else {
      onClose(event);
    }
  };
  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div
        ref={modal}
        // onFocus={()/z/ => setOpen(!open)}
        // onBlur={() => setModalOpen(false)}
        className="md:px-17.5 w-full max-w-[700px] rounded-lg bg-white px-8 py-12 dark:bg-boxdark md:py-15"
      >
        {children}
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default CustomModal;

/**
 *   
 const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
 * 
 *         <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Modal
        </Button>
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
 */
