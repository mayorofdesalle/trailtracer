import styled from 'styled-components';

import Container from '../Container';
import { glassMorph } from '@components/misc/Mixins';

/**
 * BentoBox
 * @param {string} $color - The color of the bento box.
 * @param {boolean} $glass - Whether the bento box should have a glass effect.
 * @description
 * Styled container in a bentobox shape. The entire app is built on this shape.
 **/
const BentoBox = styled(Container)`
    position: relative;
    padding: 0.5rem;
    background-color: ${({ $color }) => $color};
    transition: 200ms ease-in-out;
    ${({ $glass }) => $glass && glassMorph};
`;

export default BentoBox;