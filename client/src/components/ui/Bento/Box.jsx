import styled from 'styled-components';

import Container from '../Container';
import { glassMorph } from '../../misc/mixins';
import { fadeIn } from '../../misc/anims';

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
    ${({ $glass }) => $glass && glassMorph};

    & > * {
        animation: ${fadeIn} 1s ease-in-out;
    }
`;

export default Box;