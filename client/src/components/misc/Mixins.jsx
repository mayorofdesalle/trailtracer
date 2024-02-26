import { css } from 'styled-components';

/**
 * Mixins
 * @description
 * This is a set of CSS declarations for reuse. The declarations are not tied to any class or element, so they can be used anywhere.
 **/

/**
 * @description
 * Scales an element on hover and active states.
 **/
export const scaleOnHover = css`
    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.99);
    }
`;

/**
 * @description
 * Makes an element glassy and blurred.
 **/
export const glassMorph = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    backdrop-filter: blur(0.25rem);
`;
