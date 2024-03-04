import styled from 'styled-components';

import { glassMorph } from '@components/misc/mixins';

/**
 * NavbarHeader
 * @description
 * This is a styled nav.
 **/
const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    height: 4svh;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    z-index: 999;

    ${glassMorph}

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 2rem 1rem;
    }
`;

export default Nav;