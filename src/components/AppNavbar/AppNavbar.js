import React from 'react';
import IMAGES from '../../images';
import AppInput from '../AppInput/AppInput';

const AppNavbar = () => {
  return (
    <div className='flex flex-wrap justify-between items-center'>
      <AppInput />

      <div className='flex items-center justify-center w-full md:w-auto space-x-8 mt-5 md:mt-0'>
        <img
          src={IMAGES.chatIcon}
          alt=''
          srcSet=''
          className='w-6 cursor-pointer'
        />
        <img
          src={IMAGES.announcementIcon}
          alt=''
          srcSet=''
          className='w-6 cursor-pointer'
        />
        <img
          src={IMAGES.userIcon}
          alt=''
          srcSet=''
          className='w-6 cursor-pointer'
        />
        <div className='items-center hidden md:inline-flex'>
          <div className='w-12 h-12 rounded-2xl flex-shrink-0 object-cover object-center bg-[#6F96AA]'></div>
          <div className='flex-grow flex flex-col pl-3 text-[#6F96AA]'>
            <span className='font-bold'>Madison Eve</span>
            <span className='font-light text-sm mt-1'>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
