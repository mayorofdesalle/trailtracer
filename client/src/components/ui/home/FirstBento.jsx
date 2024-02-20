import { useState, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import Container from '../defaults/Container';
import Slider from './Slider';
import StartButton from './StartButton';
import bikerImg from '../../../assets/biker.svg';
import { blurryBackground } from '../../misc/Mixins';


const ImageBox = styled(Container)`
    grid-area: ImageBox;
    background-color: ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
    transition: 200ms ease-in-out;

    & > img {
        height: 80svh;
        transform: translate(4svh, 12svh);
    }
`;

const HookBox = styled(Container)`
    grid-area: HookBox;
    ${blurryBackground}
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    align-items: start;

    & > div {
        --c: ${({ theme }) => theme.colors.primary};
        transform: translateY(-3rem);
        
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            transform: translateY(-1.5rem);
        }
    }
`;

const GifBox1 = styled(Container)`
    grid-area: GifBox1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const DescriptionBox1 = styled(HookBox)`
    grid-area: DescriptionBox1;
    align-items: start;

    & > div {
        --c: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-3rem);
    }
`;

const GifBox2 = styled(GifBox1)`
    grid-area: GifBox2;
    align-items: start;
    & > div {
        --c: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-2rem) rotate(180deg);
    }
`;

const DescriptionBox2 = styled(HookBox)`
    grid-area: DescriptionBox2;
`;

const CTABox1 = styled(Container)`
    grid-area: CTABox1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const CTABox2 = styled(Container)`
    grid-area: CTABox2;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const Arrow = styled.div`
    position: absolute;
	width: 0;
	height: 0;
	border-left: 2rem solid transparent;
	border-right: 2rem solid transparent;
	border-bottom: 3rem solid var(--c);

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        border-left-width: 1rem;
        border-right-width: 1rem;
        border-bottom-width: 1.5rem;
    }
`;

const ContentBento = styled(Container)`
    display: grid;
    height: 100svh;
    width: 100svw;
    padding: calc(7rem + 2px) calc(3rem + 2px) calc(3rem + 2px);
    grid-template-columns: 4fr 2fr auto 2fr 4fr;
    grid-template-rows: 4fr 3fr 2fr 2fr auto 2fr;
    grid-gap: 2rem;
    grid-template-areas:
        "GifBox1            ImageBox    ImageBox       ImageBox    DescriptionBox2"
        "GifBox1            ImageBox    ImageBox       ImageBox    GifBox2"
        "DescriptionBox1    ImageBox    ImageBox       ImageBox    GifBox2"
        "DescriptionBox1    HookBox     HookBox        HookBox     GifBox2"
        "DescriptionBox1    CTABox1     Slider         CTABox2     GifBox2"
        "DescriptionBox1    CTABox1     StartButton    CTABox2     GifBox2";

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: calc(6rem + 2px) calc(2rem + 2px) calc(2rem + 2px);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 9fr 2fr auto 2fr;
        grid-gap: 1rem;
        grid-template-areas:
            "ImageBox   ImageBox      ImageBox"
            "HookBox    HookBox       HookBox"
            "Slider    Slider        Slider"
            "CTABox1    StartButton   CTABox2"
    }
`;

const FirstBento = () => {
    const mediumBreakpoint = useTheme().breakpoints.medium.slice(0, -2);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ContentBento>
            <ImageBox><img src={bikerImg} /></ImageBox>
            <HookBox><Arrow /></HookBox>
            <CTABox1 /><Slider /><CTABox2 />
            <StartButton>GET STARTED</StartButton>
            {(screenWidth > mediumBreakpoint) && <>
                <GifBox1 /><DescriptionBox2 />
                <DescriptionBox1><Arrow /></DescriptionBox1><GifBox2><Arrow /></GifBox2>
            </>}
        </ContentBento>
    );
};

export default FirstBento;