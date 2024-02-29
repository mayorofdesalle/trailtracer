import { useEffect, useRef, useState } from 'react';

import Slider from './Slider/Slider';
import StartButton from './StartButton/StartButton';
import ScrollWrapper from './ScrollWrapper';
import FirstBento from './FirstBento/Bento';

const Bentos = () => {
    const scrollWrapper = useRef();
    const [pageScroll, setPageScroll] = useState(0);

    useEffect(() => {
        // This is a workaround for the scroll behaviour when dragging the Slider.
        // When the button is being dragged, the scroll behaviour is set to 'auto' not to cause a stutter.
        let scrollBehaviour = 'smooth';
        if (document.body.getElementsByClassName('isDragging').length > 0) {
            scrollBehaviour = 'auto';
        }
        scrollWrapper.current?.scrollTo({ left: pageScroll, behavior: scrollBehaviour });
    }, [pageScroll]);

    return (
        <>
            <ScrollWrapper ref={scrollWrapper}>
                <FirstBento />
                <FirstBento />
                <FirstBento />
                <FirstBento />
            </ScrollWrapper>
            <Slider wrapperWidth={scrollWrapper.current?.getBoundingClientRect().width} setPageScroll={setPageScroll} />
            <StartButton />
        </>
    );
};

export default Bentos;