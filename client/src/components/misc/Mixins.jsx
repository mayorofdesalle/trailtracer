import { css } from 'styled-components';

export const hoverScaling = css`
    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.99);
    }
    `;

export const blurryBackground = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    backdrop-filter: blur(0.25rem);
`;