import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-languages';
import Navbar from '../Ui/Nav/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/action-creators/ui-actions';
import { calendarCurrentEvent } from '../../redux/action-creators/calendar-actions';
import { Fab } from '../Ui/Fab';

moment().locale('es');
const localizer = momentLocalizer(moment);
const CalendarPage = () => {
  // HOOKS GOES HERE
  const { events: calendar_events } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  // LOGIC GOES HERE

  const onDoubleClickEvent = (event) => {
    dispatch(openModal());
  };

  const onSelectEvent = (event) => {
    dispatch(calendarCurrentEvent(event));
    dispatch(openModal());
    console.log(event);
  };

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#36cf7',
      borderRadius: '0px',
      opacity: '0.8',
      display: 'block',
      color: '#fff',
    };

    return {
      style,
    };
  };

  // LOGIC ENDS HERE

  return (
    <div className={`calendar-page`}>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={calendar_events}
        startAccessor="start"
        endAccessor="end"
        messages={messages.spanish}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClickEvent}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <Fab />
      <CalendarModal />
    </div>
  );
};

export default CalendarPage;
