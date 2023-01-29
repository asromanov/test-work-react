import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ServiceCard from './components/ServiceCard/ServiceCard';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id/details" element={<ServiceCard />} />
      </Routes>
    </Container>
  );
}

export default App;
