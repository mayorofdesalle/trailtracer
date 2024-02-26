import { useRef, useState, useEffect } from 'react';

import Pagination from './Pagination';
import PageDots from './PageDots';
import SliderButton from './SliderButton';

/**
 * Slider
 * @description
 * This is a container that builds a slider using the SliderButton, Pagination, and PageDots.
 **/
const Slider = () => {
    const [width, setWidth] = useState(0);
    const pagination = useRef();

    useEffect(() => {
        const resizeObserver = new ResizeObserver((e) => {
            setWidth(e[0].contentBoxSize[0].inlineSize);
        });

        resizeObserver.observe(pagination.current);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <Pagination ref={pagination}>
            <SliderButton width={width} />
            <PageDots />
        </Pagination>
    );
};

export default Slider;
