import { useState, useRef, useLayoutEffect } from 'react';

const useResize = ({ ref }) => {
    const [elementSize, setElementSize] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((e) => {
            setElementSize({
                width: e[0].contentRect.width,
                height: e[0].contentRect.height
            });
        });

        resizeObserver.observe(ref.current);

        return () => resizeObserver.disconnect();
    }, [ref]);

    return { ref, elementSize };
};

export default useResize;