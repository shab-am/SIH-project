import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BenifitsTo = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".benifits-panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".benifits-container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".benifits-container").offsetWidth
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section className="benifits-container w-full h-screen overflow-hidden relative">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
                    <h1 className="text-6xl font-['Neue_Machina'] text-zinc-300 text-center">
                        Who benifits from AsteroMiner AI?
                    </h1>
                </div>

                <div className="benifits-to flex">
                    <div className="benifits-panel w-screen h-screen bg-[#2a1b3d] flex-shrink-0 flex items-center justify-center relative">
                        <div className="absolute left-32 top-1/2 bottom-10 -translate-y-1/2 mt-12">
                            <div className="w-[500px] h-[300px] bg-zinc-800 rotate-[-2deg] absolute z-50 rounded-md shadow-lg bg-[url('/assets/images/spaceCenter2.avif')] bg-cover bg-center"></div>
                            <div className="w-[530px] h-[300px] bg-blue-200/80 rotate-[3deg] -bottom-11 -left-10 absolute -z-10 translate-x-6 translate-y-6 rounded-md shadow-xl backdrop-blur-sm"></div>
                            <div className="w-[530px] h-[300px] bg-blue-100/70 rotate-[-4deg] -bottom-6 -left-10 absolute -z-20 translate-x-12 translate-y-12 rounded-md shadow-2xl backdrop-blur-sm"></div>
                        </div>
                        
                        <div className="absolute right-10 -bottom-[9rem] -translate-y-1/2 max-w-[600px] text-white">
                            <h2 className="text-4xl font-['Neue_Machina'] mb-4 text-blue-200">Space Agencies</h2>
                            <p className="text-lg text-zinc-300 mb-6">National and government space organizations like NASA, ESA, and ISRO are crucial beneficiaries.</p>
                            
                            <ul className="space-y-4">
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-blue-200">Resource Availability</h3>
                                    <p className="text-zinc-300">Gain access to detailed data on asteroid composition to plan resource-focused missions.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-blue-200">Sustainability</h3>
                                    <p className="text-zinc-300">Reduce dependence on Earth's resources to support long-term exploration and colonization.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-blue-200">Cost Optimization</h3>
                                    <p className="text-zinc-300">Use guidelines and cost predictions to streamline mission planning and budgeting.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="benifits-panel w-screen h-screen bg-[#452c63] flex-shrink-0 flex items-center justify-center relative">
                        <div className="absolute left-[45rem] top-1/2 bottom-10 -translate-y-1/2 mt-12">
                            <div className="w-[500px] h-[300px] bg-zinc-800 rotate-[-2deg] absolute z-50 rounded-md shadow-lg bg-[url('/assets/images/spaceCenter.jpg')] bg-cover bg-center"></div>
                            <div className="w-[530px] h-[300px] bg-green-200/80 rotate-[3deg] -bottom-11 -left-10 absolute -z-10 translate-x-6 translate-y-6 rounded-md shadow-xl backdrop-blur-sm"></div>
                            <div className="w-[530px] h-[300px] bg-green-100/70 rotate-[-4deg] -bottom-6 -left-10 absolute -z-20 translate-x-12 translate-y-12 rounded-md shadow-2xl backdrop-blur-sm"></div>
                        </div>
                        
                        <div className="absolute left-10 -bottom-[9rem] -translate-y-1/2 max-w-[600px] text-white mt-4">
                            <h2 className="text-4xl font-['Neue_Machina'] mb-2 text-green-200">Private Organizations</h2>
                            <p className="text-lg text-zinc-300 mb-4">From private space companies to environmentally focused entities, AsteroMiner AI is a game-changer.</p>
                            
                            <ul className="space-y-4">
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-green-200">Profitability</h3>
                                    <p className="text-zinc-300">Discover high-value asteroids (like Psyche 16 with its $10,000 quadrillion platinum reserves) for lucrative mining opportunities.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-green-200">Technological Guidance</h3>
                                    <p className="text-zinc-300">Leverage advanced mining methods and technologies to minimize risks in space operations.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-green-200">Investment Opportunities</h3>
                                    <p className="text-zinc-300">Attract stakeholders with precise ROI estimations based on a comprehensive cost-benefit analysis.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="benifits-panel w-screen h-screen bg-[#2a1b3d] flex-shrink-0 flex items-center justify-center relative">
                        <div className="absolute left-32 top-1/2 bottom-10 -translate-y-1/2 mt-12">
                            <div className="w-[500px] h-[300px] bg-zinc-800 rotate-[-2deg] absolute z-50 rounded-md shadow-lg bg-[url('/assets/images/researchers.jpg')] bg-cover bg-center"></div>
                            <div className="w-[530px] h-[300px] bg-orange-200/80 rotate-[3deg] -bottom-11 -left-10 absolute -z-10 translate-x-6 translate-y-6 rounded-md shadow-xl backdrop-blur-sm"></div>
                            <div className="w-[530px] h-[300px] bg-orange-100/70 rotate-[-4deg] -bottom-6 -left-10 absolute -z-20 translate-x-12 translate-y-12 rounded-md shadow-2xl backdrop-blur-sm"></div>
                        </div>
                        
                        <div className="absolute right-10 -bottom-[11rem] -translate-y-1/2 max-w-[600px] text-white">
                            <h2 className="text-4xl font-['Neue_Machina'] mb-4 text-orange-200">Researchers</h2>
                            <p className="text-lg text-zinc-300 mb-6">Scientists and institutions researching space technology and resource management will find immense value in AsteroMiner AI.</p>
                            
                            <ul className="space-y-4">
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-orange-200">Data Accessibility</h3>
                                    <p className="text-zinc-300">Access extensive datasets on asteroid compositions and classifications for groundbreaking studies.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-orange-200">Innovation Support</h3>
                                    <p className="text-zinc-300">AI-powered models assist in creating innovative solutions for asteroid resource extraction.</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold text-orange-200">Collaboration Potential</h3>
                                    <p className="text-zinc-300">Enable partnerships between institutions to push the boundaries of asteroid mining research.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BenifitsTo;