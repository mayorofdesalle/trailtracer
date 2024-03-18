import { keyframes } from 'styled-components';

/**
 * Animations
 * @description
 * These are the animations used in the application. They are used to create a more dynamic and interactive user experience.
 **/

/**
 * @description
 * Creates a colorful shadow that rotates around the element.
 **/
export const rotateShadow = (color1, color2) => keyframes`
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
 * @description
 * Scales the element down from twice its size.
 **/
export const scaleDown = keyframes`
    0% {
        height: calc(var(--h) * 3);
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
 * Rotates in the element from left.
 **/
export const rotateFromLeft = keyframes`
    0% {
        transform: rotateX(15deg) rotateY(30deg);
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
 * Slides in the element from left.
 **/
export const slideFromBottomLeft = keyframes`
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