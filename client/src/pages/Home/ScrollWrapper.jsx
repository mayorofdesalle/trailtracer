import styled from 'styled-components';

import Container from '@components/ui/Container';

const ScrollWrapper = styled(Container)`
    flex-wrap: nowrap;
    overflow-x: auto;
    align-items: start;
    justify-content: start;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

export default ScrollWrapper;