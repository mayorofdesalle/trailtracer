import styled from 'styled-components';

import Container from './Container';

/**
 * BentoBox
 * @param {String} $gridArea - The grid area that the BentoBox will occupy
 * @description
 * This is a styled container that is used to hold other components. It is used to create a more visually appealing Bento layout.
 **/
const BentoBox = styled(Container)`
    grid-area: ${({ $gridArea }) => $gridArea};
    padding: 1rem;
`;

export default BentoBox;