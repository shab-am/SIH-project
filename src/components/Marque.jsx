import React, { useEffect } from 'react';
import gsap from 'gsap';

const Marque = () => {
    useEffect(() => {
        const handleWheel = (dets) => {            
            if (dets.deltaY > 0) {
                gsap.to(".marque", {
                    transform: "translateX(-200%)",
                    duration: 5,
                    repeat: -1,
                    ease: "none",
                });
                gsap.to(".marque img", {
                    rotate: 180,
                });
            } else {
                gsap.to(".marque", {
                    transform: "translateX(0%)",
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                });
                gsap.to(".marque img", {
                    rotate: 0,
                });
            }
        };

        window.addEventListener('wheel', handleWheel);

        // Cleanup function
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <section>
            <div id="page2" className="h-[fit-content] w-full">
                <div id="move" className="bg-purple-600 flex py-[1.5vw] overflow-hidden">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div
                            key={index}
                            className="marque flex items-center gap-[3vw] px-[1.5vw] flex-shrink-0"
                            style={{ transform: 'translateX(-100%)' }}
                        >
                            <h1
                                className="text-[3vw] font-['Neue Machina']"
                                style={{ fontFamily: 'Neue Machina, sans-serif' }}
                            >
                                UNLOCK THE TREASURES OF THE COSMOS
                            </h1>
                            <img
                                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                                alt="arrow"
                                className="h-[3vw]"
                            />
                            <h1
                                className="text-[3vw] font-['Neue Machina']"
                                style={{ fontFamily: 'Neue Machina, sans-serif' }}
                            >
                                FUTURE OF SUSTAINABLE MINING BEYOND EARTH
                            </h1>
                            <img
                                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                                alt="arrow"
                                className="h-[3vw]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marque;

