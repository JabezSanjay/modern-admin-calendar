import React from 'react';
import IMAGES from '../../images';

const AppCard = ({ event }) => {
  let borderLeft = `border-l-[${event.color}]`;
  console.log(borderLeft);
  return (
    <div className='w-full lg:w-80 h-36 bg-white shadow-md rounded-2xl py-5 flex items-center space-y-10 mt-10'>
      <div className={`border-l-2 h-[100%] ${borderLeft} w-full`}>
        <div className='flex items-center flex-row justify-between px-2 flex-wrap'>
          <div className='flex flex-col pl-3'>
            <span className='text-md font-semibold text-black'>
              {event.title}
            </span>
            <span className='font-light text-xs mt-1 text-gray-400'>
              2 Task
            </span>
          </div>
          <div className='w-12 h-12 rounded-2xl mr-5 flex-shrink-0 object-cover object-center bg-[#6F96AA]'></div>
        </div>
        <p className='pl-5 mt-4 text-sm text-orange-500 flex cursor-pointer font-semibold'>
          View Details
          <img
            src={IMAGES.arrowIcon}
            alt=''
            srcSet=''
            className='ml-2 w-4 h-4 my-auto'
          />
        </p>
      </div>
    </div>
  );
};

export default AppCard;
