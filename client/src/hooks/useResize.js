import { useState, useEffect } from 'react';

/**
 * function useResize()
 * @param {Object} elementRef - The reference to the element to observe
 * @description
 * This hook is used to get the size of an element and its position relative to the viewport.
 * It uses the ResizeObserver API to observe the element and update the size when it changes.
 * @returns {Object} The size and position of the element
 **/
const useResize = (elementRef) => {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
        offsetTop: 0
    });

    useEffect(() => {
        const targetElement = elementRef?.current;
        if (!targetElement) return;

        const resizeObserver = new ResizeObserver((e) => {
            setSize({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
                offsetTop: e[0].target.offsetTop,
                offsetLeft: e[0].target.offsetLeft
            });
        });

        resizeObserver.observe(targetElement);

        return () => resizeObserver.disconnect();
    }, [elementRef]);

    return size;
};

export default useResize;