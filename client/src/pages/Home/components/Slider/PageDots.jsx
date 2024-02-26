import styled from 'styled-components';

import Container from '@components/ui/Container';
import { fadeIn } from '@components/misc/anims';

/**
 * PageDot
 * @description
 * This is a styled container that is used to create a page dot.
 **/
const PageDot = styled(Container)`
    height: 0.5rem;
    width: 0.5rem;
    margin: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textTransparent};
    animation: ${fadeIn} 1s ease-in-out;
`;

const PageDots = () => {
    return [...Array(4).keys()].map((key) => (
        <li key={key}><PageDot /></li>
    ));
};

export default PageDots;