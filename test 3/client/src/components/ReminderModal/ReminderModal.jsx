import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export default function ReminderModal({ open, setOpen }) {
  const reminderEvent = useSelector((store) => store.reminder);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        key={'top' + 'center'}
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          У вас запланировано мероприятие
          {' '}
          "
          {reminderEvent?.title}
          "
          {' '}
          на
          {' '}
          {reminderEvent?.reminder.toLocaleString()}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
