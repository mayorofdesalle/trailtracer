import styled from 'styled-components';

import { glassMorph } from '@components/mixins';
import Container from '@components/ui/Container';

/**
 * SliderButtonContainer
 * @param {Number} $height - The height of the container.
 * @param {Number} $width - The width of the container.
 * @param {Number} $top - The top position of the container.
 * @description
 * Styled container that wraps the Slider.
 **/
const SliderButtonContainer = styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
    justify-content: space-around;
    ${glassMorph}
`;

export default SliderButtonContainer;