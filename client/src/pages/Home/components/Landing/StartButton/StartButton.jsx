import { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import { glassMorph } from '@components/misc/Mixins';
import { translateWobble, fadeIn } from '@components/misc/Anims';

import StartButtonContainer from './StartButtonContainer';

/**
 * StartButtonInner
 * @description
 * This is a styled Button component creating the base for the StartButton.
 */
const StartButtonInner = styled(Button)`
    will-change: transform;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    color: ${({ theme }) => theme.colors.text};

    ${glassMorph}

    &::before, &::after {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        mix-blend-mode: soft-light;
        border-radius: inherit;
        transform-style: preserve-3d;
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

    & > ${Text} {
        animation: ${fadeIn} 1s ease-in-out;
    }
`;

/**
 * StartButton
 * @description
 * This is a function component that acts as a CTA to get started using the website.
 */
const StartButton = memo(() => {
    const size = useSelector((state) => state.gridPlaceholder.StartButton);

    return (
        size &&
        <StartButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop}>
            <StartButtonInner>
                <Text $heading>GET STARTED — IT&apos;S FREE!</Text>
            </StartButtonInner>
        </StartButtonContainer>
    );
});

export default StartButton;
