import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * Border
 * @description
 * This is a styled container that is used to create a border around the whole page.
 **/
const Border = styled(Container)`
    position: absolute;
    --margin: 1rem;
    top: var(--margin);
    left: var(--margin);
    height: calc(100% - 2 * var(--margin));
    width: calc(100% - 2 * var(--margin));
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

export default Border;
