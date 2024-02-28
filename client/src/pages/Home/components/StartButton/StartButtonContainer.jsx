import styled from 'styled-components';

import Container from '@components/ui/Container';
import { rotateInFB, rotateL2R } from '@components/misc/Anims';

/**
 * StartButtonContainer
 * @param {Number} $height - The height of the container.
 * @param {Number} $width - The width of the container.
 * @param {Number} $bottom - The bottom position of the container.
 * @description
 * This is a styled Container component that wraps the StartButton.
 */
const StartButtonContainer = styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    bottom: ${({ $bottom }) => $bottom}px;
    perspective: 500px;
    transform: rotatex(10deg);
    animation: ${rotateInFB} 1s ease-in-out, ${rotateL2R} 7s linear infinite;
    animation-delay: 0s, 1s;
`;

export default StartButtonContainer;