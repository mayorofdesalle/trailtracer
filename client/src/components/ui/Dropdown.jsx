import styled from 'styled-components';

import Bentobox from '@components/ui/Bento/BentoBox';

/**
 * Dropdown
 * @description
 * Default styled dropdown.
 **/
const Dropdown = styled(Bentobox).attrs({ tabIndex: 0 })`
    position: absolute;
    flex-direction: column;
    padding: clamp(0.5rem, min(1dvw, 1dvh), 2rem);
    background-color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    overflow: hidden;
`;

export default Dropdown;