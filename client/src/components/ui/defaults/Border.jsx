import styled from 'styled-components';
import Container from './Container';

const Border = styled(Container)`
    --m: 1rem;
    position: absolute;
    top: var(--m);
    left: var(--m);
    height: calc(100svh - 2 * var(--m));
    width: calc(100svw - 2 * var(--m));
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

export default Border;