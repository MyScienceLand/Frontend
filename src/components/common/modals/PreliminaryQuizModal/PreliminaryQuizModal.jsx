// CustomModal.js
import { Box, Divider, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import '../../../../index.scss';
import { modalStyle } from '../modal.style';

const CustomModal = ({ open, onClose, title, children, width, isClosable }) => {
  const handleBackdropClick = (event) => {
    if (!isClosable) {
      event.stopPropagation();
    } else {
      onClose(event);
    }
  };

  const handleCloseClick = (event) => {
    if (isClosable) {
      onClose(event);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleBackdropClick}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ overflow: 'scroll' }}
      // BackdropProps={{
      //   onClick: handleBackdropClick,
      // }}
      slotProps={{
        backdrop: {
          onClick: (event) => {
            if (!isClosable) {
              event.stopPropagation();
            } else {
              onClose(event);
            }
          },
        },
      }}
    >
      <Box sx={modalStyle(width)}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            style={{ padding: 10, paddingLeft: 15 }}
          >
            {title}
          </Typography>
          {/* <IconButton
            onClick={handleCloseClick}
            style={{
              backgroundColor: 'var(--secondary-color)',
              width: 12,
              height: 12,
              padding: 10,
              marginRight: 10,
            }}
          >
            <CloseIcon sx={{ width: 18, color: 'var(--primary-color)' }} />
          </IconButton> */}
        </Box>
        <Divider />
        <Box mt={2} id="modal-modal-description" style={{ padding: 15 }}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  isClosable: PropTypes.bool,
};

CustomModal.defaultProps = {
  title: '',
  isClosable: true,
};

export default CustomModal;
