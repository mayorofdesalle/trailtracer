import { useState, useEffect } from 'react';

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
                offsetTop: e[0].target.offsetTop
            });
        });

        resizeObserver.observe(targetElement);

        return () => resizeObserver.disconnect();
    }, [elementRef]);

    return size;
};

export default useResize;