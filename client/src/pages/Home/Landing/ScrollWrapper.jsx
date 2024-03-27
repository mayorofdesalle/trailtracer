import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * ScrollWrapper
 * @description
 * Styled container that wraps the content of the landing page.
 */
const ScrollWrapper = styled(Container)`
    overflow-x: hidden;
    justify-content: start;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display:none;
    }
`;

export default ScrollWrapper;