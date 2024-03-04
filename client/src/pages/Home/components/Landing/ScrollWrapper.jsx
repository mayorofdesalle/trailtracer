import styled from 'styled-components';

import Container from '@components/ui/Container';

const ScrollWrapper = styled(Container)`
    flex-wrap: nowrap;
    overflow-x: hidden;
    align-items: start;
    justify-content: start;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display:none;
    }
`;

export default ScrollWrapper;