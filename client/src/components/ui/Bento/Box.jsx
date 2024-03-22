import styled from 'styled-components';

import Container from '../Container';
import { glassMorph } from '../../misc/Mixins';

/**
 * Box
 * @param {String} $gridArea - The grid area that the Bento Box will occupy
 * @description
 * This is a styled container that is used to hold other components. It is used to create a more visually appealing Bento layout.
 **/
const Box = styled(Container)`
    position: relative;
    padding: 0.5rem;
    background-color: ${({ $color }) => $color};
    transition: 200ms ease-in-out;
    ${({ $glass }) => $glass && glassMorph};
`;

export default Box;