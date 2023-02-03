import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => navigate('/')} color="inherit">Календарь</Button>
          <Button onClick={() => navigate('/newevent')} color="inherit">Добавить мероприятие</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
