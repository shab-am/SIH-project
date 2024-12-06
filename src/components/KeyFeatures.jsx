import React from 'react';

const KeyFeatures = () => {
    return (
        <section className="key-features min-h-screen mt-[2rem] pt-0 relative mb-4">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
            >
                <source src="/assets/videos/featuresBg.mp4" type="video/mp4" />
            </video>
            <h2 className="text-center text-4xl font-bold my-4 text-zinc-300 mb-6">Our Groundbreaking Features</h2>
            
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <article className="relative overflow-hidden group h-[400px]">
                        <img 
                            src="/assets/images/intelligence.avif"
                            alt="Intelligent Asteroid"
                            className="w-full h-full object-cover rounded-2xl opacity-70"
                        />
                        
                        <div className="absolute left-0 right-0 mx-auto bottom-0 w-[90%] bg-zinc-300 backdrop-blur-sm p-3 rounded-xl shadow-lg 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-sm text-purple-600 font-medium block mb-1">AI-Powered Technology</span>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">Intelligent Asteroid Identification</h2>
                            <p className="text-gray-600 text-sm mb-3">Our AI system analyzes and identifies resource-rich asteroids containing valuable minerals like iron, nickel, gold, platinum, and tantalum.</p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="relative overflow-hidden group h-[400px]">
                        <img 
                            src="/assets/images/identification.jpg"
                            alt="Mining Solutions"
                            className="w-full h-full object-cover rounded-2xl opacity-70"
                        />
                        
                        <div className="absolute left-0 right-0 mx-auto bottom-0 w-[90%] bg-zinc-300 backdrop-blur-sm p-3 rounded-xl shadow-lg 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-sm text-purple-600 font-medium block mb-1">Comprehensive Platform</span>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Complete Mining Solutions</h2>
                            <p className="text-gray-600 text-sm mb-2">Get detailed asteroid composition data, safe travel guidelines, mining recommendations, and precise cost-benefit analysis in one platform.</p>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="relative overflow-hidden group h-[400px]">
                        <img 
                            src="/assets/images/assesment.avif"
                            alt="Value Assessment"
                            className="w-full h-full object-cover rounded-2xl opacity-70"
                        />
                        
                        <div className="absolute left-0 right-0 mx-auto bottom-0 w-[90%] bg-zinc-300 backdrop-blur-sm p-3 rounded-xl shadow-lg 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-sm text-purple-600 font-medium block mb-1">Advanced Analytics</span>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Strategic Value Assessment</h2>
                            <p className="text-gray-600 text-sm mb-2">Make informed decisions with our advanced cost estimation system that calculates asteroid value, mission costs, and potential profits.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default KeyFeatures;


