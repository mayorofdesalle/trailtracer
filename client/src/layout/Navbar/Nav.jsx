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
    height: clamp(2rem, min(4svw, 4svh), 6rem);
    width: 100%;
    padding: 2rem;
    border-radius: max(0.5svh, 0.5svw, 0.5rem);
    z-index: 999;

    ${glassMorph}
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 2rem 1rem;
    }
`;

export default Nav;