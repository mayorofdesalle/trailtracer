import { useState, useEffect } from 'react';

const useResize = (elementRef) => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const targetElement = elementRef?.current;
        if (!targetElement) return;

        const resizeObserver = new ResizeObserver((e) => {
            setSize({
                width: e[0].contentRect.width,
                height: e[0].contentRect.height
            });
        });

        resizeObserver.observe(targetElement);

        return () => resizeObserver.disconnect();
    }, [elementRef]);

    return size;
};

export default useResize;