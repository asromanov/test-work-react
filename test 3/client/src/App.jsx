import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AddEvent from './components/AddEvent/AddEvent';
import MyCalendar from './components/MyCalendar/MyCalendar';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyCalendar />} />
        <Route path="/event" element={<AddEvent />} />
      </Routes>
    </Container>
  );
}

export default App;
