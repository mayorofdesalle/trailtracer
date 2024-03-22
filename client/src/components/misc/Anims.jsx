import { keyframes } from 'styled-components';

/**
 * @description
 * Scales the element down from twice its size.
 **/
export const scaleDown = keyframes`
    0% {
        transform: scale(3);
    }
`;

/**
 * @description
 * Rotates in the element from bottom.
 **/
export const rotateFromBottom = keyframes`
    0% {
        transform: rotateX(50deg);
    }
`;

/**
 * @description
 * Slides in the element from right.
 **/
export const slideFromRight = keyframes`
    0% {
        transform: translateX(200%);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

/**
 * @description
 * Slides in the element from left.
 **/
export const slideFromLeft = keyframes`
    0% {
        transform: translateX(-200%);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

/**
 * @description
 * Slides in the element from bottom.
 **/
export const slideFromBottom = keyframes`
    0% {
        transform: translateY(200%);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

/**
 * @description
 * Slides in the element from top.
 **/
export const slideFromTop = keyframes`
    0% {
        transform: translateY(-200%);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;