import React, { useEffect } from 'react';

const useClock = (time) => {

    /**
     * This is a very rudimentary custom hook.
     * I understand that custom hooks should have more logics
     * and state etc.
     */
    
    useEffect(() => {
        time();
        return () => {
            clearInterval(time);
        };
    }
    );
}

export default useClock;

