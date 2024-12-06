import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 sm:py-4 z-[1000] transition-opacity duration-300">
      <div className="flex items-center ml-2 sm:ml-4">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="h-[50px] sm:h-[70px] w-[120px] sm:w-[150px] object-contain"
        />
      </div>

      <div className="flex items-center justify-center flex-1 mx-4">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Contact Us', path: '/contact' }
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-zinc-300 text-sm sm:text-md pt-serif-regular px-8 hover:text-purple-400 transition-transform duration-200 transform hover:scale-110"
          >
            {item.name}
          </Link>
        ))}
      </div>

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
  );
}

export default Navbar;