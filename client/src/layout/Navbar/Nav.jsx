import styled from 'styled-components';

import { glassMorph } from '@components/misc/Mixins';

/**
 * Nav
 * @description
 * The styled nav component for the Navbar.
 **/
const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    width: 100%;
    padding: clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem);
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
    z-index: 999;

    ${glassMorph}
    border: none;
`;

export default Nav;