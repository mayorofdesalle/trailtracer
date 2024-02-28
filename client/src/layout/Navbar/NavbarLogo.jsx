import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '@assets/images/logo.svg';
import { scaleOnHover } from '@components/misc/Mixins';

/**
 * NavbarLogo
 * @description
 * This is a styled link that is used as the logo for the navbar.
 **/
const NavbarLogo = styled(Link)`
    display: inline-block;
    height: 1.5rem;
    width: 6rem;
    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-mask-image: url(${logoImg});
    mask-image: url(${logoImg});
    mask-size: 6rem;
    mask-repeat: no-repeat;
    transition: 200ms ease-in-out;

    ${scaleOnHover}

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export default NavbarLogo;