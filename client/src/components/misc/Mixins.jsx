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
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    -webkit-backdrop-filter: blur(0.25rem);
    backdrop-filter: blur(0.25rem);
`;

// BentoArrow
const pseudoBentoArrowBase = css`
        --size: clamp(1.625rem, max(2dvw, 2dvh), 4.125rem);
        position: absolute;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
`;

/**
 * @description
 * Creates a pseudoelement bento arrow pointing up.
 **/
export const pseudoBentoArrowTop = css`
    &::before {
        ${pseudoBentoArrowBase}
        top: calc(var(--size) * -1);
        left: calc(50% - var(--size) / 2);
        border-left: calc(var(--size) * 3 / 5) solid transparent;
        border-right: calc(var(--size) * 3 / 5) solid transparent;
        border-top: none;
        border-bottom: var(--size) solid var(--arrowColor);
    }
`;

/**
 * @description
 * Creates a pseudoelement bento arrow pointing down.
**/
export const pseudoBentoArrowBottom = css`
    &::before {
        ${pseudoBentoArrowBase}
        top: 100%;
        left: calc(50% - var(--size) / 2);
        border-left: calc(var(--size) * 3 / 5) solid transparent;
        border-right: calc(var(--size) * 3 / 5) solid transparent;
        border-top: var(--size) solid var(--arrowColor);
        border-bottom: none;
    }
`;

/**
 * @description
 * Creates a pseudoelement bento arrow pointing right.
**/
export const pseudoBentoArrowRight = css`
    &::before {
        ${pseudoBentoArrowBase}
        top: calc(50% - var(--size) / 2);
        left: 100%;
        border-left: var(--size) solid var(--arrowColor);
        border-right: none;
        border-top: calc(var(--size) * 3 / 5) solid transparent;
        border-bottom: calc(var(--size) * 3 / 5) solid transparent;
    }
`;

/**
 * @description
 * Creates a pseudoelement bento arrow pointing left.
**/
export const pseudoBentoArrowLeft = css`
    &::before {
        ${pseudoBentoArrowBase}
        top: calc(50% - var(--size) / 2);
        left: calc(var(--size) * -1);
        border-left: none;
        border-right: var(--size) solid var(--arrowColor);
        border-top: calc(var(--size) * 3 / 5) solid transparent;
        border-bottom: calc(var(--size) * 3 / 5) solid transparent;
    }
`;