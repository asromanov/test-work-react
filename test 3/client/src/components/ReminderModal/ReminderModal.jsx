import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export default function ReminderModal({ open, setOpen }) {
  const reminder = useSelector((store) => store.reminder);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} style={{ borderRadius: '7px' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          У вас запланировано
          {' '}
          "
          {reminder?.title}
          "
          {' '}
          на
          {' '}
          {reminder?.start?.toLocaleString()}
        </Typography>
      </Box>
    </Modal>
  );
}