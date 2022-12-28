import React from 'react';

const Myday = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-row">

                    <div style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }} className="w-10 h-16 md:w-40 md:h-60 rounded-lg shadow-2xl">
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-xs md:text-xl font-bold">Share Your Day</h1>
                                <button className="btn-xs btn-primary hidden md:block">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <img src="https://placeimg.com/260/400/arch" alt='dayone' className="w-10 md:w-40  rounded-lg shadow-2xl" />
                    <img src="https://placeimg.com/260/400/arch" alt='daytwo' className="w-10 
                    md:w-40  rounded-lg shadow-2xl" />
                    <img src="https://placeimg.com/260/400/arch" alt='daythree' className="w-10
                    md:w-40  rounded-lg shadow-2xl" />

                </div>
            </div>
        </div>
    );
};

export default Myday;