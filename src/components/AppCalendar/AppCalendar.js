import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './AppCalendar.css';

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

const AppCalendar = ({ events }) => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        eventBorderColor='red'
        customButtons={{
          myCustomButton: {
            text: '+ Add new agenda',
          },
        }}
        headerToolbar={{
          end: 'prev next myCustomButton',
        }}
        events={events}
        // dayHeaderContent={function (arg) {
        //   return days[arg.date.getDay()];
        // }}
      />
    </>
  );
};

export default AppCalendar;
