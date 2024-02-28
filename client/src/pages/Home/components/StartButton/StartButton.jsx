import { useContext, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';

import useWindowSize from '@hooks/useWindowSize';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import { translateWobble, fadeIn } from '@components/misc/Anims';
import PageContext from '@context/PageContext';
import { convertRemToPixels } from '@utils/screenMath';

import StartButtonContainer from './StartButtonContainer';

/**
 * function calculateSizeAndPosition(pageSize)
 * @param {Object} pageSize - The object containing width and height of the page.
 * @returns {Object} The object containing width and height of the button.
 * @description
 * This function calculates the size of the button based on the page size so it can fit in with the rest of the bento grid.
**/
const calculateSizeAndPosition = (pageSize, isScreenLarge) => {
    let height;
    let width;
    let bottom;

    if (isScreenLarge) {
        const gridVerticalFR = (pageSize.height - convertRemToPixels(21.5)) / 12;
        const gridHorizontalFR = (pageSize.width - convertRemToPixels(14)) / 12;
        height = 2 * gridVerticalFR;
        width = 3 * gridHorizontalFR;
        bottom = convertRemToPixels(3);
    } else {
        const gridVerticalFR = (pageSize.height - convertRemToPixels(11)) / 12;
        const gridHorizontalFR = (pageSize.width - convertRemToPixels(6)) / 3;
        height = 4 * gridVerticalFR;
        width = gridHorizontalFR;
        bottom = convertRemToPixels(2);
    }

    return { height, width, bottom };
};

/**
 * ButtonBase
 * @description
 * This is a styled Button component creating the base for the StartButton.
 */
const ButtonBase = styled(Button)`
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    perspective: 500px;
    transform-style: preserve-3d;

    &::before, &::after {
        --z: 0px;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
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

    & > ${Text} {
        animation: ${fadeIn} 1s ease-in-out;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;

/**
 * StartButton
 * @description
 * This is a function component that acts as a CTA to get started using the website.
 */
const StartButton = () => {
    const largeBreakpoint = convertRemToPixels(useTheme().breakpoints.large.slice(0, -3));
    const windowWidth = useWindowSize().width;
    const pageSize = useContext(PageContext).size;
    const { height, width, bottom } = useMemo(() => calculateSizeAndPosition(pageSize, (windowWidth > largeBreakpoint)), [pageSize, windowWidth, largeBreakpoint]);

    return (
        <StartButtonContainer $height={height} $width={width} $bottom={bottom}>
            <ButtonBase>
                <Text $heading>GET STARTED — IT&apos;S FREE!</Text>
            </ButtonBase>
        </StartButtonContainer>
    );
};

export default StartButton;
