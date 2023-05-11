import { useEffect, useState } from 'react';

const useCountdown = (seconds, again) => {
    const [countDown, setCountDown] = useState(seconds);

    useEffect(() => {
        if (countDown > 0) {
            const interval = setInterval(() => {
                setCountDown(countDown - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [countDown, again]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {

    const minutes = ('0'+Math.floor(countDown / 60).toString()).slice(-2);
    const seconds = ('0'+Math.floor(countDown % 60).toString()).slice(-2);

    return [minutes, seconds];
};

export default useCountdown;