import { useState, useEffect } from 'react';

const useHover = (elementRef) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const targetElement = elementRef?.current;
        if (!targetElement?.addEventListener) return;

        const funcs = {
            handleMouseEnter: () => setIsHovered(true),
            handleMouseLeave: () => setIsHovered(false),
        };

        targetElement.addEventListener('mouseenter', funcs.handleMouseEnter);
        targetElement.addEventListener('mouseleave', funcs.handleMouseLeave);

        return () => {
            targetElement.removeEventListener('mouseenter', funcs.onMouseEnter);
            targetElement.removeEventListener('mouseleave', funcs.onMouseLeave);
        };
    }, [elementRef]);

    return isHovered;
};

export default useHover;