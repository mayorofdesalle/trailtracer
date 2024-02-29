import { keyframes } from 'styled-components';

/**
 * Animations
 * @description
 * These are the animations used in the application. They are used to create a more dynamic and interactive user experience.
 **/

/**
 * @description
 * Rotates the element from left to right.
 **/
export const rotateL2R = keyframes`
    0% {
        transform: rotateY(0deg) rotateX(10deg);
    }

    25% {
        transform: rotateY(20deg) rotateX(10deg);
    }

    50% {
        transform: rotateY(0deg) rotateX(10deg);
    }

    75% {
        transform: rotateY(-20deg) rotateX(10deg);
    }

    100% {
        transform: rotateY(0deg) rotateX(10deg);
    }
`;

/**
 * @description
 * Creates a wobble effect on the element.
 **/
export const translateWobble = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
    }

    16% {
        transform: translate3d(calc(var(--z) * 160px), calc(var(--z) * 160px), calc(var(--z) * 160px));
    }

    28% {
        opacity: 1;
        transform: translate3d(calc(var(--z) * 70px), calc(var(--z) * 70px), calc(var(--z) * 70px));
    }

    44% {
        transform: translate3d(calc(var(--z) * 130px), calc(var(--z) * 130px), calc(var(--z) * 130px));
    }

    59% {
        transform: translate3d(calc(var(--z) * 85px), calc(var(--z) * 85px), calc(var(--z) * 85px));
    }

    73% {
        transform: translate3d(calc(var(--z) * 110px), calc(var(--z) * 110px), calc(var(--z) * 110px));
    }

    88% {
        opacity: 1;
        transform: translate3d(calc(var(--z) * 90px), calc(var(--z) * 90px), calc(var(--z) * 90px));
    }

    100% {
        opacity: 1;
        transform: translate3d(calc(var(--z) * 100px), calc(var(--z) * 100px), calc(var(--z) * 100px));
    }
`;

/**
 * @description
 * Scales the element down from twice its size.
 **/
export const scaleDown = keyframes`
    0% {
        height: calc(var(--h) * 2);
    }
`;

/**
 * @description
 * Rotates in the element from top.
 **/
export const rotateInFT = keyframes`
    0% {
        transform: rotateY(0deg) rotateX(-33deg);
    }
`;

/**
 * @description
 * Rotates in the element from bottom.
 **/
export const rotateInFB = keyframes`
    0% {
        transform: rotateY(0deg) rotateX(33deg);
    }
`;

/**
 * @description
 * Slides in the element from right.
 **/
export const slideInR = keyframes`
    0% {
        transform: translateX(200%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

/**
 * @description
 * Slides in the element from left.
 **/
export const slideInBL = keyframes`
    0% {
        transform: translateX(-200%) translateY(200%);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

/**
 * @description
 * Fades in the element.
 **/
export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
