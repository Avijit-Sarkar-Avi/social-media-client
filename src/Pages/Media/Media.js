import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://newserver-ten.vercel.app/mystatus')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='m-20 grid sm:grid-cols-1 md:grid-cols-3 gap-20'>
            {
                data?.map(mystatus => <MediaCard
                    key={mystatus._id}
                    mystatus={mystatus}
                ></MediaCard>)
            }
        </div>
    );
};

export default Media;