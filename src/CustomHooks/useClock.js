import React, { useEffect } from 'react';

const useClock = (time) => {
    useEffect(() => {
        time();
        return () => {
            clearInterval(time);
        };
    }
    );
}

export default useClock;

