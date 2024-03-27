import styled, { keyframes } from 'styled-components';

import { scaleOnHover } from '../style/mixins';

/**
 * @description
 * Creates a colorful shadow that rotates around the element.
 **/
const rotateShadow = (color1, color2) => keyframes`
    0% {
        box-shadow: -2px -2px 0px 0px ${color1}, 2px 2px 0px 0px ${color2};
    }
    25% {
        box-shadow: -2px 2px 0px 0px ${color1}, 2px -2px 0px 0px ${color2};
    }
    50% {
        box-shadow: 2px 2px 0px 0px ${color1}, -2px -2px 0px 0px ${color2};
    }
    75% {
        box-shadow: 2px -2px 0px 0px ${color1}, -2px 2px 0px 0px ${color2};
    }
    100% {
        box-shadow: -2px -2px 0px 0px ${color1}, 2px 2px 0px 0px ${color2};
    }
`;

/**
 * Button
 * @param {string} $bgColor - The background color of the button.
 * @param {string} $color - The text color of the button.
 * @param {array} $animColors - The colors of the shadow animation.
 * @description
 * Default styled button component.
 **/
const Button = styled.button.attrs(({ $type }) => ({ type: $type || 'button' }))`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
    padding: clamp(0.5rem, min(1dvw, 1dvh), 2rem);
    background-color: ${({ theme, $bgColor }) => $bgColor || theme.colors.primary};
    color: ${({ theme, $color }) => $color || theme.colors.background};
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    transition: 200ms ease-in-out;

    ${scaleOnHover}

    &:hover, &:active {
        border-radius: max(0.25dvh, 0.25dvw, 0.25rem);
        animation: ${({ theme, $animColors }) => $animColors ? rotateShadow(...$animColors) : rotateShadow(theme.colors.primary, theme.colors.secondary)} 2s ease-in-out infinite;
    }

    &:disabled {
        animation: none;
        filter: opacity(50%);
    }
`;

export default Button;