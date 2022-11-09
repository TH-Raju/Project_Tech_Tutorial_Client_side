import React, { useEffect, useState } from 'react';
import Card from '../Card';

const Service = () => {
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('https://tech-tutor-server-side.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    My Services
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Here are Some course that i teach people to increase their knowledge. and become self-defendent</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    service.map(service => <Card key={service.s_id}
                        service={service}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Service;