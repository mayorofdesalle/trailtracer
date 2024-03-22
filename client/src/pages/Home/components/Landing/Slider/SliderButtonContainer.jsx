import { memo } from 'react';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import { glassMorph } from '@components/misc/Mixins';

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
    justify-content: space-around;
    ${glassMorph}
`);

export default SliderButtonContainer;