import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * StartButtonContainer
 * @param {Number} $height - The height of the container.
 * @param {Number} $width - The width of the container.
 * @param {Number} $top - The top position of the container.
 * @description
 * This is a styled Container component that wraps the StartButton.
 */
const StartButtonContainer = styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
`;

export default StartButtonContainer;