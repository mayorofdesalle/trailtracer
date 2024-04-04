import { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { useResize } from '@hooks';
import { useWindowSize } from '@hooks';

import FirstBento from './firstBento/Bento';
import FourthBento from './fourthBento/Bento';
import ScrollWrapper from './ScrollWrapper';
import SecondBento from './secondBento/Bento';
import Slider from './slider/Slider';
import StartButton from './startButton/StartButton';
import ThirdBento from './thirdBento/Bento';

const Landing = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

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