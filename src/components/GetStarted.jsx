import React, { useState } from 'react'; // Ensure useState is imported
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedinIn, FaApple } from 'react-icons/fa';

const GetStarted = () => {
  // Declare the state for managing active form
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Handle Sign Up form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up with:', { name, email, password });
  };

  // Handle Sign In form submission
  const handleSigninSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In with:', { email, password });
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center py-6">
      <div
        className="relative mt-[5rem] w-[90%] md:w-[768px] max-w-full min-h-[480px] bg-zinc-900 rounded-[30px] shadow-2xl overflow-hidden"
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-[#452c63] transition-transform duration-700 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:w-1/2 z-0`}
        ></div>

        {/* Buttons for Small Screens */}
        <div className="absolute top-4 right-4 flex gap-4 md:hidden z-[1000]">
          <button
            onClick={() => setIsActive(false)}
            className={`px-4 py-1.5 text-sm rounded-md transition-colors duration-300 ${!isActive
              ? 'bg-[#452c63] text-white'
              : 'border border-zinc-700 text-zinc-400'
              }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsActive(true)}
            className={`px-4 py-1.5 text-sm rounded-md transition-colors duration-300 ${isActive
              ? 'bg-[#452c63] text-white'
              : 'border border-zinc-700 text-zinc-400'
              }`}
          >
            Sign Up
          </button>
        </div>

        <div className="relative flex flex-row w-full h-full">
          {/* Sign-Up Form */}
          <div
            className={`absolute md:relative top-0 left-0 transition-all duration-700 ease-in-out bg-zinc-900 z-10 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-full md:translate-x-0'} h-full w-full md:w-1/2`}
          >
            <form className="flex flex-col items-center justify-center h-full px-6 md:px-10 pt-16 md:pt-0">
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
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="SignupName"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="SignupEmail"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="SignupPassword"
              />
              <button type="submit"
                onClick={handleSignupSubmit} className="bg-[#452c63] hover:bg-[#2a1b3d] text-white px-12 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider mt-4 transition-colors duration-300">
                Sign Up
              </button>
            </form>
          </div>

          {/* Sign-In Form */}
          <div
            className={`absolute md:relative top-0 right-0 transition-all duration-700 ease-in-out bg-zinc-900 z-10 ${isActive ? 'translate-x-full md:translate-x-0' : 'translate-x-0 opacity-100'} h-full w-full md:w-1/2`}
          >
            <form className="flex flex-col items-center justify-center h-full px-6 md:px-10 pt-16 md:pt-0">
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
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="loginEmail"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 mb-3 focus:border-[#452c63] outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="loginPassword"
              />
              <button type="submit"
                onClick={handleSigninSubmit} className="bg-[#452c63] hover:bg-[#2a1b3d] text-white px-12 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider mt-4 transition-colors duration-300">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
