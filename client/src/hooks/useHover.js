import { useState, useEffect } from 'react';

/**
 * function useHover()
 * @param {Object} elementRef - The reference to the element to observe
 * @description
 * This hook is used to get the hover state of an element.
 * It uses the mouseenter and mouseleave events to update the hover state.
 * @returns {Boolean} The hover state of the element
 **/
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