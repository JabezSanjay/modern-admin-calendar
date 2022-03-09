import React from 'react';
import IMAGES from '../../images/index';

const AppSidebar = () => {
  return (
    <div className='flex-col w-24 min-h-full px-4 py-8 overflow-y-auto bg-white hidden md:flex'>
      <img src={IMAGES.logo} alt='' className='w-12 h-12 mx-auto' />
      <div className='flex flex-col justify-between mt-6'>
        <aside>
          <ul className='pt-12 space-y-12'>
            <li className='cursor-pointer'>
              <img
                src={IMAGES.homeIcon}
                alt='Home Icon'
                className='w-6 h-6 mx-auto'
              />
            </li>
            <li className='cursor-pointer'>
              <img
                src={IMAGES.mailIcon}
                alt='Home Icon'
                className='w-6 h-6 mx-auto'
              />
            </li>
            <li className='cursor-pointer'>
              <img
                src={IMAGES.teamIcon}
                alt='Home Icon'
                className='w-6 h-6 mx-auto'
              />
            </li>
            <li className='cursor-pointer'>
              <img
                src={IMAGES.userIcon}
                alt='Home Icon'
                className='w-6 h-6 mx-auto'
              />
            </li>
            <li className='cursor-pointer drop-shadow-2xl'>
              <img
                src={IMAGES.calendarIcon}
                alt='Home Icon'
                className='w-6 h-6 mx-auto rounded-lg '
              />
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AppSidebar;
