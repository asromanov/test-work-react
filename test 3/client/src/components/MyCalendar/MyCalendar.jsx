import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import 'moment/locale/ru';
import { Container } from '@mui/system';
import { setEventContent } from '../../redux/slices/oneEventSlice';
import { setActiveEdit } from '../../redux/slices/modalEditSlice';
import EditModalCard from '../EditModalCard/EditModalCard';
import { setReminderEvent } from '../../redux/slices/reminderEventSlice';
import ReminderModal from '../ReminderModal/ReminderModal';

moment.locale('ru');

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [open, setOpen] = useState(false);
  const activeEdit = useSelector((store) => store.activeEdit);
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const ev = events.find((el) => el.reminder.toString().match(/\d/gmi).join('') === now.toString().match(/\d/gmi).join(''));
      if (ev?.id) {
        dispatch(setReminderEvent(ev));
        setOpen((prev) => !prev);
      }
    }, 1000);
  }, [events]);

  // смена языка календаря
  const { messages } = useMemo(
    () => ({
      messages: {
        week: 'Неделя',
        work_week: 'Рабочая неделя',
        day: 'День',
        month: 'Месяц',
        previous: 'Предыдущий',
        next: 'Следующий',
        today: 'Сегодня',
        agenda: 'События',
        showMore: (total) => `+${total} еще`,
      },
    }),
    [],
  );

  const openEventClick = (ev) => {
    dispatch(setEventContent(ev));
    dispatch(setActiveEdit());
  };

  return (
    <Container>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        style={{ height: 500, margin: '50px' }}
        selectable
        popup
        events={events}
        onSelectEvent={openEventClick}
      />
      {activeEdit
        && <EditModalCard />}
      {open
        && <ReminderModal open={open} setOpen={setOpen} />}
    </Container>
  );
}
