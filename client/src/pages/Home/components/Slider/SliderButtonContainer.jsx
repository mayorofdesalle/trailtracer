import styled from 'styled-components';

import { glassMorph } from '@components/misc/mixins';
import { rotateInFB } from '@components/misc/anims';

/**
 * SliderButtonContainer
 * @param {Number} $height - The height of the container.
 * @param {Number} $width - The width of the container.
 * @param {Number} $bottom - The bottom position of the container.
 * @description
 * This is a styled unordered list that is used to contain the page dots and the SliderButton.
 **/
const SliderButtonContainer = styled.ul`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    bottom: ${({ $bottom }) => $bottom}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-radius: 10px;
    animation: ${rotateInFB} 1s ease-in-out;

    & > .isDragging {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: none;
    }

    & > .isDragging > * {
        fill: ${({ theme }) => theme.colors.backgroundTransparent};
    }

    ${glassMorph}
`;

export default SliderButtonContainer;