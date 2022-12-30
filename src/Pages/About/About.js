import React, { useEffect, useState } from 'react';

const About = () => {

    const [info, setInfo] = useState([])

    // useEffect(() => {
    //     fetch(`https://newserver-ten.vercel.app/userinfo/${_id}`)
    //         .then(res => res.json())
    //         .then(data => setInfo(data))
    // }, [_id])


    return (
        <div className="hero mx-auto md:w-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">Name: {info.name}</h1>
                    <br />
                    <p className='text-sm font-bold'>Email: {info.email}</p>
                    <br />
                    <p className='text-sm font-bold'>University: {info.university}</p>
                    <br />
                    <p className='text-sm font-bold'>Address: {info.address}</p>
                    <br />
                    <button className="btn btn-sm btn-info">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default About;