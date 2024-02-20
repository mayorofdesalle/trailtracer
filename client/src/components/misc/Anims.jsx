import { keyframes } from 'styled-components';

export const rotateAngle = keyframes`
    0% {
        transform: rotateY(0deg) rotateX(10deg);
        -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }

    25% {
        transform: rotateY(20deg) rotateX(10deg);
    }

    50% {
        transform: rotateY(0deg) rotateX(10deg);
        -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }

    75% {
        transform: rotateY(-20deg) rotateX(10deg);
    }

    100% {
        transform: rotateY(0deg) rotateX(10deg);
    }
`;

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