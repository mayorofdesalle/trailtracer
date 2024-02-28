import styled from 'styled-components';

import { glassMorph } from '@components/misc/mixins';

/**
 * NavbarHeader
 * @description
 * This is a styled header that is used to contain the navbar.
 **/
const NavbarHeader = styled.header`
    position: absolute;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;;
    height: 4svh;
    width: calc(100% - 2rem - 4px);
    top: calc(1rem + 2px);
    left: calc(1rem + 2px);
    padding: 2rem;
    border-radius: 10px;
    z-index: 9999;
    
    ${glassMorph}
`;

export default NavbarHeader;