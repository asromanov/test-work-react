import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { Box, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

registerLocale('ru', ru);
export default function UpdateEvent({ modalContent, setInputGroup }) {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        Время начала:
        <DatePicker
          placeholderText="Start Date"
          value={modalContent.start}
          locale="ru"
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="start"
          selected={modalContent.start}
          onChange={(date) => { setInputGroup({ ...modalContent, start: date }); }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        Время окончания:
        <DatePicker
          value={modalContent.end}
          placeholderText="End Date"
          locale="ru"
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="end"
          selected={modalContent.end}
          onChange={(date) => { setInputGroup({ ...modalContent, end: date }); }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        Напомнить о мероприятии:
        <DatePicker
          placeholderText="Reminder Date"
          locale="ru"
          showTimeSelect
          selected={modalContent.reminder}
          onChange={(date) => { setInputGroup({ ...modalContent, reminder: date }); }}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="reminder"
          value={modalContent.reminder}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          id="fullWidth"
          style={{ marginTop: '30px' }}
          variant="standard"
          name="title"
          defaultValue={modalContent.title}
          onChange={(e) => setInputGroup({ ...modalContent, title: e.target.value })}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Textarea
          placeholder="Type in here…"
          minRows={2}
          maxRows={4}
          sx={{ minWidth: 30 }}
          name="text"
          defaultValue={modalContent.text}
          onChange={(e) => setInputGroup({ ...modalContent, text: e.target.value })}
        />
      </Box>
    </>
  );
}
