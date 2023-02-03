import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogTitle, Dialog, DialogContent, Button, DialogActions,
} from '@mui/material';
import UpdateEvent from '../UpdateEvent/UpdateEvent';
import { setActiveEdit } from '../../redux/slices/modalEditSlice';
import { deleteEvent, updateEvent } from '../../redux/slices/eventsSlice';

export default function EditModalCard() {
  const oneEvent = useSelector((store) => store.oneEvent);
  const [inputGroup, setInputGroup] = useState({
    start: new Date(oneEvent.start),
    end: new Date(oneEvent.end),
    reminder: new Date(oneEvent.reminder),
    title: oneEvent.title,
    text: oneEvent.text,
    id: oneEvent.id,
  });
  const dispatch = useDispatch();
  const clickEditHandler = () => {
    dispatch(updateEvent(inputGroup));
    dispatch(setActiveEdit());
  };
  const deleteHandler = () => {
    dispatch(deleteEvent(oneEvent.id));
    dispatch(setActiveEdit());
  };
  return (
    <Dialog open maxWidth="md" fullWidth>
      <DialogTitle>Редактировать</DialogTitle>
      <DialogContent>
        <UpdateEvent modalContent={inputGroup} setInputGroup={setInputGroup} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setActiveEdit())}>Закрыть</Button>
        <Button onClick={clickEditHandler}>
          Принять изменения
        </Button>
        <Button onClick={deleteHandler}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>

  );
}
