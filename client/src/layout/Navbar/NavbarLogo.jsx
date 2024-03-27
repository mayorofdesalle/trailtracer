import styled from 'styled-components';

import Button from '@components/ui/Button';
import { getImageUrl } from '@utils/imageHelpers';

/**
 * NavbarLogo
 * @description
 * Styled button used as the logo for the navbar.
 **/
const NavbarLogo = styled(Button)`
    flex-shrink: 0;
    border-radius: 0;
    padding: 0;
    width: clamp(6rem, min(12dvw, 12dvh), 12rem);
    height: clamp(1.5rem, min(3dvw, 3dvh), 3rem);
    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-mask-image: url(${getImageUrl('logos/trailtracer.svg')});
    mask-image: url(${getImageUrl('logos/trailtracer.svg')});
    mask-clip: border-box;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: 200ms ease-in-out;

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: clamp(1rem, min(6dvw, 6dvh), 8rem);
        -webkit-mask-image: url(${getImageUrl('logos/tt.svg')});
        mask-image: url(${getImageUrl('logos/tt.svg')});
    }
`;

export default NavbarLogo;