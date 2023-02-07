import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export default function NotificationModal({ open, setOpen }) {
  const notificationEvent = useSelector((store) => store.notificationEvent);
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
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Мероприятие
          {' '}
          {notificationEvent.title}
          {' '}
          началось!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
