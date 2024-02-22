import React, { useState, useEffect, useCallback } from 'react';
import './digitalWatch.scss';

export const DigitalWatch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = useCallback(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [updateTime]);

    return <div className='watch'>{time}</div>;
};