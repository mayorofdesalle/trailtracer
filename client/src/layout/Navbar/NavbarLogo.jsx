import styled from 'styled-components';

import getImageUrl from '@utils/getImageUrl';
import Button from '@components/ui/Button';

/**
 * NavbarLogo
 * @description
 * This is a styled button that is used as the logo for the navbar.
 **/
const NavbarLogo = styled(Button)`
    border-radius: 0;
    width: clamp(6rem, min(12svw, 12svh), 8rem);
    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-mask-image: url(${getImageUrl('logo')});
    mask-image: url(${getImageUrl('logo')});
    mask-clip: border-box;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: 200ms ease-in-out;

    &:hover {
        border-radius: 0;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export default NavbarLogo;