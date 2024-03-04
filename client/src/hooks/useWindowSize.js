import { useState, useEffect } from 'react';

/**
 * function useWindowSize()
 * @description
 * This is a custom hook that is used to get the window size of the browser.
 * It returns an object that contains the width and height of the window.
 * It also adds an event listener to the window resize event to update the window size.
 * @returns {Object} an object that contains the width and height of the window.
 **/
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        screen.orientation.addEventListener('change', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            screen.orientation.removeEventListener('change', handleResize);
        };
    }, []);

    return windowSize;

};

export default useWindowSize;