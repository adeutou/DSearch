import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <p className='text-4xl font-bold text-blue-500 py-1 px-2 dark:text-white'>
                    Dsearch
                </p>
            </Link>
            <Search />
            <button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-xl text-white dark:bg-white dark:text-gray-900 bg-gray-800 border rounded-full px-2 py-1 hover:shadow-lg" >
                {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        
    </div>
  )
}
