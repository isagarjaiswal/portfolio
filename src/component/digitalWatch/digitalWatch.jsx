import React, { useState, useEffect } from 'react';
import './digitalWatch.scss';

export const DigitalWatch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return <div className='watch'>{time}</div>;
};
