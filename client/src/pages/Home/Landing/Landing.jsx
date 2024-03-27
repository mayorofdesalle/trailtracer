import { useLayoutEffect, useRef, useState } from 'react';

import useResize from '@hooks/useResize';

import FirstBento from './FirstBento/Bento';
import FourthBento from './FourthBento/Bento';
import ScrollWrapper from './ScrollWrapper';
import SecondBento from './SecondBento/Bento';
import Slider from './Slider/Slider';
import StartButton from './StartButton/StartButton';
import ThirdBento from './ThirdBento/Bento';

const Landing = () => {
    const scrollWrapper = useRef();
    const pageWidth = useResize(scrollWrapper).width;

    const [scroll, setScroll] = useState({ position: 0, behaviour: 'smooth' });

    useLayoutEffect(() => {
        scrollWrapper.current?.scrollTo({ left: scroll.position, behavior: scroll.behaviour });
    }, [scroll]);

    return (
        <>
            <ScrollWrapper ref={scrollWrapper}>
                <FirstBento />
                <SecondBento />
                <ThirdBento />
                <FourthBento />
            </ScrollWrapper>
            <Slider fullWidth={pageWidth} setScroll={setScroll} />
            <StartButton />
        </>
    );
};

export default Landing;