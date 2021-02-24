import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import {messages} from "../../helpers/calendar-languages";
import Navbar from "../Ui/Nav/Navbar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";

moment().locale('es');
const localizer = momentLocalizer(moment);
const CalendarPage = () => {
  // HOOKS GOES HERE
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
  // LOGIC GOES HERE

  const onDoubleClickEvent = (event) => {
    console.log(event);
  }

  const onSelectEvent = (event) => {
    console.log(event);
  }

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event);
  }


  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#36cf7',
      borderRadius: '0px',
      opacity: '0.8',
      display: 'block',
      color: '#fff',
    }

    return {
      style
    }
  }

  const eventList = [{
    title: 'Birthday',
    user: {
      id: 12345,
      name: 'Darth Vader'
    },
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    background: '#fafafa',
  }]

// LOGIC ENDS HERE

  return (
      <div className={`calendar-page`}>
        <Navbar/>

        <Calendar
            localizer={localizer}
            events={eventList}
            startAccessor="start"
            endAccessor="end"
            messages={messages.spanish}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={onDoubleClickEvent}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            view={lastView}
            components={{
              event: CalendarEvent
            }}
        />

        <CalendarModal modalIsOpen={true}/>
      </div>
  );
};

export default CalendarPage;
