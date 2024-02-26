import { css } from 'styled-components';

// Home Page Mixins

const pseudoBentoArrowBase = css`
        --size: 3rem;
        position: absolute;
        display: block;
        content: '';
        width: 0;
        height: 0;
        left: calc(50% - var(--size) / 2);
        border-left: calc(var(--size) * 3 / 5) solid transparent;
        border-right: calc(var(--size) * 3 / 5) solid transparent;

        @media all and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            --size: 1.5rem;
        }
`;

/**
 * @description
 * Creates a pseudoelement bento arrow pointing up.
 **/
export const pseudoBentoArrowTop = css`
    &::before {
        ${pseudoBentoArrowBase}
        top: calc(var(--size) * -1);
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
        border-top: var(--size) solid var(--arrowColor);
    }
`;