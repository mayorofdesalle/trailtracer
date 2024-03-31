import styled from 'styled-components';

import { glassMorph } from '@components/mixins';

/**
 * Nav
 * @description
 * The styled nav component for the Navbar.
 **/
const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: clamp(0.75rem, min(2dvw, 2dvh), 2.5rem);
    z-index: 999;
    ${glassMorph}
    border: none;
`;

export default Nav;