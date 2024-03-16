import { useState, useEffect } from 'react';

/**
 * function useWindowSize()
 * @description
 * This is a custom hook that is used to get the window size of the browser.
 * It uses the resize event to update the window size.
 * @returns {Object} The object that contains the width and height of the window.
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
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;

};

export default useWindowSize;