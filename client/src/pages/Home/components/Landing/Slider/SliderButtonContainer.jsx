import { memo } from 'react';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import { glassMorph } from '@components/misc/mixins';
import { fadeIn } from '@components/misc/anims';

/**
 * SliderButtonContainer
 * @param {Number} $height - The height of the container.
 * @param {Number} $width - The width of the container.
 * @param {Number} $top - The top position of the container.
 * @description
 * This is a styled container that is used to contain the page dots and the SliderButton.
 **/
const SliderButtonContainer = memo(styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};

    & > * {
        animation: ${fadeIn} 1s ease-in-out;
    }

    & > .isDragging {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: none;
    }

    & > .isDragging > * {
        fill: ${({ theme }) => theme.colors.backgroundTransparent};
    }

    ${glassMorph}
`);

export default SliderButtonContainer;