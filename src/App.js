import React from 'react';
import { events } from './api/mock';
import AppCalendar from './components/AppCalendar/AppCalendar';
import AppCard from './components/AppCard/AppCard';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AppSidebar from './components/AppSidebar/AppSidebar';

const App = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <AppSidebar />
        </div>
        <div className='w-full py-8 px-5 lg:px-10'>
          <AppNavbar />
          <div className='mt-10'>
            <h1 className='font-bold text-2xl mb-11'>Calendar</h1>
            <div className='calendar-section bg-white shadow-md rounded-2xl'>
              <div>
                <AppCalendar />
              </div>
            </div>
            <div className='schedule-details-section mt-10'>
              <h1 className='font-bold text-xl'>Schedule Details</h1>
              <div className='flex flex-wrap justify-between'>
                {events.map((event) => {
                  return <AppCard event={event} key={event.color} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
