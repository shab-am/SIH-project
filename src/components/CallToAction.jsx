import React from 'react';
import Marque from './Marque';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="call-to-action w-full h-screen relative">
            <Marque />
            <div className="w-[60%] z-[100] h-[calc(100vh-100px)] absolute left-0 flex flex-col justify-center px-12">
                <h2 className="text-6xl mb-6 text-zinc-100 font-['Neue_Machina']">Why AsteroMiner AI?</h2>
                <p className="text-lg leading-relaxed text-zinc-300 ml-2">
                    AsteroMiner AI leads the way in space mining, turning asteroid resources into sustainable solutions.
                    Designed for space agencies, private enterprises, and researchers, it provides the tools to explore
                    space profitably and responsibly.
                </p>
                <h3 className="text-5xl mt-8 mb-4 text-purple-500 font-['Neue_Machina']">Ready to Explore Space Mining Opportunities?</h3>
                <p className="text-xl leading-relaxed text-zinc-300 ml-2 mb-8">
                    Experience AsteroMiner AI in action.
                </p>
                <Link
                    to="/get-started"
                    className="text-zinc-300 text-md sm:text-md ml-3 pt-serif-regular px-5 py-3 bg-[#452c63] hover:bg-[#2a1b3d] hover:text-white rounded-md transition-colors duration-200 w-fit inline-block"
                >
                    Get Started
                </Link>
            </div>
            <div className="w-[50%] h-[calc(100vh-102px)] absolute right-0">
                <img
                    src="/assets/images/ctaBg.jpg"
                    alt="Call to action background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default CallToAction;