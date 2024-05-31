// CustomModal.js
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import '../../../../index.scss';
import { modalStyle } from '../modal.style';

const CustomModal = ({ open, onClose, title = '', children, width }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ overflow: 'scroll' }}
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
          <IconButton
            onClick={onClose}
            style={{
              backgroundColor: 'var(--secondary-color)',
              width: 12,
              height: 12,
              padding: 10,
              marginRight: 10,
            }}
          >
            <CloseIcon sx={{ width: 18, color: 'var(--primary-color)' }} />
          </IconButton>
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
