import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * BentoGrid
 * @description
 * Styled container to display a grid of bento boxes.
 **/
const BentoGrid = styled(Container)`
    display: grid;
    padding: clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem);
    grid-gap: clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem);
`;

export default BentoGrid;