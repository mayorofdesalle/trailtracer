import styled from 'styled-components';

import { scaleOnHover } from '../misc/Mixins';
import { rotateShadow } from '../misc/Anims';

/**
 * Button
 * @description
 * This is a button component that can be used throughout the application. It is styled to be glassy and responsive.
 **/
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
    padding: 1rem;
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
`;

export default Button;