import React from 'react';
import IMAGES from '../../images';

const AppInput = () => {
  return (
    <div class='relative text-gray-600 focus-within:text-gray-400'>
      <span class='absolute inset-y-0 left-0 flex items-center pl-2'>
        <button
          type='submit'
          class='p-1 focus:outline-none focus:shadow-outline'
        >
          <img src={IMAGES.searchIcon} className='h-5 w-5 ml-2' alt='' />
        </button>
      </span>
      <input
        type='search'
        class='py-2 text-md rounded-2xl pl-14 focus:outline-none placeholder:text-sm w-72 h-12'
        placeholder='Search here...'
        autocomplete='off'
      />
    </div>
  );
};

export default AppInput;
