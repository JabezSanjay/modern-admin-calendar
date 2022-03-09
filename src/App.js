import React from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AppSidebar from './components/AppSidebar/AppSidebar';

const App = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <AppSidebar />
        </div>
        <div className='w-full py-8 px-10'>
          <AppNavbar />
        </div>
      </div>
    </>
  );
};

export default App;
