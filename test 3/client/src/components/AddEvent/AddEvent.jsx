import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Textarea from '@mui/joy/Textarea';
import { Button, TextField } from '@mui/material';
import { addEvent } from '../../redux/slices/eventsSlice';

export default function AddEvent() {
  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({
    start: new Date(),
    end: new Date(),
    title: '',
    text: '',
    reminder: new Date(),
    id: uuidv4(),
  });
  const dispatch = useDispatch();
  const handleAddEvent = () => {
    dispatch(addEvent(newEvent));
    navigate('/');
  };
  return (
    <Container maxWidth="sm">
      <h2>Добавить новое мероприятие</h2>
      <Box sx={{ mb: 2 }}>
        Время начала:
        <DatePicker
          placeholderText="Start Date"
          locale="ru"
          showTimeSelect
          selected={newEvent.start}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="start"
          value={newEvent.start}
          onChange={(date) => { setNewEvent({ ...newEvent, start: date }); }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        Время окончания:
        <DatePicker
          placeholderText="End Date"
          locale="ru"
          showTimeSelect
          selected={newEvent.end}
          onChange={(date) => { setNewEvent({ ...newEvent, end: date }); }}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="end"
          value={newEvent.end}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        Напомнить о мероприятии:
        <DatePicker
          placeholderText="Reminder Date"
          locale="ru"
          showTimeSelect
          selected={newEvent.reminder}
          onChange={(date) => { setNewEvent({ ...newEvent, reminder: date }); }}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="reminder"
          value={newEvent.reminder}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          id="fullWidth"
          style={{ marginTop: '30px' }}
          label="Title:"
          variant="standard"
          name="title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Textarea
          placeholder="Type in here…"
          minRows={2}
          maxRows={4}
          sx={{ minWidth: 30 }}
          name="text"
          value={newEvent.text}
          onChange={(e) => setNewEvent({ ...newEvent, text: e.target.value })}
        />
      </Box>
      <Button onClick={handleAddEvent} variant="contained">Добавить</Button>
    </Container>
  );
}
