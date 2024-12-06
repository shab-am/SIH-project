import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-[40vh] relative'>
        <div className='w-full h-full absolute flex justify-around items-end p-8 z-[1000]'>
          <div className='flex flex-col items-center'>
            <img src="/assets/images/logo.png" alt="Logo" className='w-48 mb-3' />
            <p style={{ fontFamily: 'Neue Machina' }} className='text-zinc-300 text-xl'>
              Your gateway to asteroid mining!
            </p>
          </div>

          <div>
            <ul className='list-none text-white'>
              <li className='mb-2 flex items-center gap-3'>
                <span className='text-3xl'>✨</span>
                <span className='text-xl translate-y-1'>Advanced AI-powered analysis</span>
              </li>
              <li className='mb-2 flex items-center gap-3'>
                <span className='text-3xl'>✨</span>
                <span className='text-xl translate-y-1'>Comprehensive mining solutions</span>
              </li>
              <li className='mb-2 flex items-center gap-3'>
                <span className='text-3xl'>✨</span>
                <span className='text-xl translate-y-1'>Sustainable space mining</span>
              </li>
            </ul>
          </div>

          <div className='text-zinc-900 font-bold'>
            <div className='flex flex-col gap-1'>
              <p className='flex items-center gap-2'>
                <span>📞</span>
                <span>Phone: +91 99999XXXXX</span>
              </p>
              <p className='flex items-center gap-2'>
                <span>✉️</span>
                <span>Email: asteroMiner@gmail.com</span>
              </p>
              <div className='mt-2 flex flex-col gap-0.5'>
                <p>Privacy Policy | Terms of Service | Cookie Policy</p>
                <p className='mt-1'>© 2024 AsteroMiner AI. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='footBg w-[80%] h-[80%] absolute bottom-0 right-0'
          style={{
            backgroundImage: "url('/assets/images/footerBg.png')",
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        />
      </div>
    </>
  )
}

export default Footer;