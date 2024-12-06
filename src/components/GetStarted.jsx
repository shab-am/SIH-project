import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedinIn, FaApple } from 'react-icons/fa';

const GetStarted = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className='min-h-screen w-full flex justify-center items-center py-6'>
      <div className='relative mt-[5rem] overflow-hidden w-[90%] md:w-[768px] max-w-full min-h-[480px] bg-zinc-900 rounded-[30px] shadow-2xl transition-all duration-700 ease-in-out'>
        {/* Sign In Form - Left Side */}
        <div className={`absolute top-0 left-0 transition-all duration-700 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-0'} h-full w-full md:w-1/2`}>
          <form className="bg-zinc-900 flex flex-col items-center justify-center h-full px-6 md:px-10 pt-16 md:pt-0">
            <h1 className="text-2xl font-semibold mb-4 text-white">Sign In</h1>
            <div className="flex gap-4 my-5">
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FcGoogle className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaApple className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
            <span className="text-zinc-400 my-4 text-sm">or use your email password</span>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm" 
            />
            <a href="#" className="text-[#452c63] hover:text-[#2a1b3d] text-sm transition-colors duration-300">Forgot Your Password?</a>
            <button type="submit" className="bg-[#452c63] hover:bg-[#2a1b3d] text-white px-12 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider mt-4 transition-colors duration-300">Sign In</button>
          </form>
        </div>

        {/* Create Account Form - Right Side */}
        <div className={`absolute top-0 right-0 transition-all duration-700 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-0'} h-full w-full md:w-1/2`}>
          <form className="bg-zinc-900 flex flex-col items-center justify-center h-full px-6 md:px-10 pt-16 md:pt-0">
            <h1 className="text-2xl font-semibold mb-4 text-white">Create Account</h1>
            <div className="flex gap-4 my-5">
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FcGoogle className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaApple className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-[#452c63] hover:border-[#452c63] transition-colors duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
            <span className="text-zinc-400 my-4 text-sm">or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm" 
            />
            <button type="submit" className="bg-[#452c63] hover:bg-[#2a1b3d] text-white px-12 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider mt-4 transition-colors duration-300">Sign Up</button>
          </form>
        </div>

        {/* Overlay */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-[1000] hidden md:block rounded-l-[150px] ${isActive ? '-translate-x-full rounded-l-none rounded-r-[150px]' : ''}`}>
          <div className={`bg-gradient-to-r from-[#452c63] to-[#2a1b3d] relative h-full w-[200%] -left-full transform transition-all duration-700 ease-in-out ${isActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
            {/* Welcome Back Panel */}
            <div className={`absolute top-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-[200%]'}`}>
              <h1 className="text-2xl font-semibold text-white mb-4">Welcome Back!</h1>
              <p className="text-zinc-200 text-sm mb-5">Enter your personal details to use all of site features</p>
              <button onClick={() => setIsActive(false)} className="bg-transparent text-white border border-white px-8 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-[#452c63]">Sign In</button>
            </div>

            {/* Hello Panel */}
            <div className={`absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${isActive ? 'translate-x-[200%]' : 'translate-x-0'}`}>
              <h1 className="text-2xl font-semibold text-white mb-4">Hello!</h1>
              <p className="text-zinc-200 text-sm mb-5">Register with your personal details to use all of site features</p>
              <button onClick={() => setIsActive(true)} className="bg-transparent text-white border border-white px-8 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-[#452c63]">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;