import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * Grid
 * @description
 * This is a styled container that is used to contain the grid layout of the bento.
 **/
const Grid = styled(Container)`
    display: grid;
    padding: clamp(0.7625rem, min(2svw, 2svh), 2.5625rem);
    grid-gap: clamp(0.7625rem, min(2svw, 2svh), 2.5625rem);
`;

export default Grid;