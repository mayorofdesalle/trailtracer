import styled from 'styled-components';
import Button from '../defaults/Button';
import Container from '../defaults/Container';
import { translateWobble, rotateAngle } from '../../misc/Anims';

const StartButtonContainer = styled(Container)`
    grid-area: StartButton;
    align-items: center;
    justify-content: center;
    perspective: 500px;
    transform: rotatex(10deg);
    animation: ${rotateAngle} 7s linear infinite;
`;

const StyledStartButton = styled(Button)`
    width: 100%;
    height: 100%;
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.xBold};
    perspective: 500px;
    transform-style: preserve-3d;

    &::before, &::after {
        --z: 0px;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        opacity: 0;
        mix-blend-mode: color;
        border-radius: inherit;
        transform-style: preserve-3d;
        transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
    }

    &:before {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }

    &:hover:before {
        --z: 0.05;
        animation: ${translateWobble} 2.2s ease forwards;
    }

    &:hover:after {
        --z: -0.06;
        animation: ${translateWobble} 2.2s ease forwards;
    }
`;

const StartButton = () => {
    return (
        <StartButtonContainer>
            <StyledStartButton>GET STARTED — IT&apos;S FREE!</StyledStartButton>
        </StartButtonContainer>
    );
};

export default StartButton;