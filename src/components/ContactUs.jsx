import React from 'react'

const ContactUs = () => {
    return (
        <div className='w-full h-[60vh] flex items-center bg-[#452c63]'>
            <div className="max-w-7xl mx-auto flex items-center gap-20">
                <div className="w-1/2 space-y-4 pl-[6rem]">
                    <div className="space-y-0.5">
                        <label className="text-sm text-zinc-200">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 rounded bg-zinc-300 text-zinc-800 text-sm border border-purple-300 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-300/20"
                        />
                    </div>

                    <div className="space-y-0.5">
                        <label className="text-sm text-zinc-200">Email</label>
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full p-2 rounded bg-zinc-300 text-zinc-800 text-sm border border-purple-300 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-300/20"
                        />
                    </div>

                    <div className="space-y-0.5">
                        <label className="text-sm text-zinc-200">Message</label>
                        <textarea
                            placeholder="Your message..."
                            rows="3"
                            className="w-full p-2 rounded bg-zinc-300 text-zinc-800 text-sm border border-purple-300 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-300/20"
                        />
                    </div>

                    <button className="w-full p-2 rounded bg-purple-800 text-white font-semibold hover:bg-purple-900 transition-colors duration-200">
                        Send Message
                    </button>
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center">
                    <h2 className="text-5xl text-white font-['Neue_Machina'] text-center leading-tight pl-4">
                        Got Questions?<br />Let's Orbit Solutions Together!
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;