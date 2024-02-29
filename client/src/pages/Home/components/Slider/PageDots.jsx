import { memo } from 'react';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import { fadeIn } from '@components/misc/anims';

/**
 * PageDot
 * @description
 * This is a styled container that is used to create a page dot.
 **/
const PageDot = styled(Container)`
    height: 1svh;
    width: 1svh;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textTransparent};
    animation: ${fadeIn} 1s ease-in-out;
`;

/**
 * PageDots
 * @description
 * This is a function component that is used to contain all the page dots.
 **/
const PageDots = memo(() => {
    return [...Array(4).keys()].map((key) => (
        <PageDot key={key} />
    ));
});

export default PageDots;