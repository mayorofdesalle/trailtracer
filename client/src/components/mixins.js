import { css } from 'styled-components';

/**
 * @description
 * Scales an element on hover and active states.
 **/
export const scaleOnHover = css`
    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

/**
 * @description
 * Makes an element glassy and blurred.
 **/
export const glassMorph = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    -webkit-backdrop-filter: blur(0.25rem);
    backdrop-filter: blur(0.25rem);
`;