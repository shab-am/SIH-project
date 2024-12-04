import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 z-[1000]">
        <button
          className="text-white ml-2 sm:ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/products"
            className="text-zinc-300 text-sm sm:text-md pt-serif-regular px-4 sm:px-5 py-2 sm:py-1.5 bg-[#452c63] hover:bg-[#2a1b3d] hover:text-white rounded-md transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/get-started"
            className="text-zinc-300 text-sm sm:text-md pt-serif-regular px-3 sm:px-5 py-1 sm:py-1.5 bg-[#452c63] hover:bg-[#2a1b3d] hover:text-white rounded-md transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[350px] md:w-[400px] bg-zinc-900 transform transition-transform duration-300 ease-in-out z-[1001] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        <div className="flex flex-col h-full pt-16 sm:pt-20 px-6 sm:px-10">
          <ul className="space-y-0">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact Us', path: '/contact' }
            ].map((item, index, array) => (
              <li 
                key={item.name}
                className={`
                  ${index === 0 ? 'border-t border-b' : 'border-t'} 
                  ${index === array.length - 1 ? 'border-b' : ''} 
                  border-zinc-700
                `}
              >
                <div className="relative">
                  <Link
                    to={item.path}
                    className="block text-white text-sm sm:text-md hover:text-purple-400 hover:translate-x-3 hover:text-lg sm:hover:text-xl hover:py-6 sm:hover:py-8 transition-all ease-in-out duration-500 cursor-pointer pt-serif-regular py-4 sm:py-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className='mt-[5rem] sm:mt-[7rem] mb-6 sm:mb-8 -ml-6 sm:-ml-10'>
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-[60px] sm:h-[80px] w-[150px] sm:w-[190px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;