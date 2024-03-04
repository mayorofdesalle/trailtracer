import { useEffect, useRef, useState } from 'react';

import useResize from '@hooks/useResize';

import Slider from './Slider/Slider';
import StartButton from './StartButton/StartButton';
import ScrollWrapper from './ScrollWrapper';
import FirstBento from './FirstBento/Bento';
import SecondBento from './SecondBento/Bento';
import ThirdBento from './ThirdBento/Bento';
import FourthBento from './FourthBento/Bento';

const Landing = () => {
    const scrollWrapper = useRef();
    const pageWidth = useResize(scrollWrapper).width;
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // This is a workaround for the scroll behaviour when dragging the Slider.
        // When the button is being dragged, the scroll behaviour is set to 'auto' not to cause a stutter.
        let scrollBehaviour = 'smooth';
        if (document.body.getElementsByClassName('isDragging').length > 0) {
            scrollBehaviour = 'auto';
        }
        scrollWrapper.current?.scrollTo({ left: scrollPosition, behavior: scrollBehaviour });
    }, [scrollPosition]);

    return (
        <>
            <ScrollWrapper ref={scrollWrapper}>
                <FirstBento />
                <SecondBento />
                <ThirdBento />
                <FourthBento />
            </ScrollWrapper>
            <Slider fullPageWidth={pageWidth} setScrollPosition={setScrollPosition} />
            <StartButton />
        </>
    );
};

export default Landing;