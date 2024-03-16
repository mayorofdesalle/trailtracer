import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { slideFromLeft, slideFromBottom } from '@components/misc/anims';
import { glassMorph, pseudoBentoArrowRight, pseudoBentoArrowTop } from '@components/misc/mixins';

const UserBox = styled(BentoBox)`
    grid-area: UserBox;

    ${glassMorph}
    
    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowRight}

    &::before {
        animation: ${slideFromLeft} 1s ease-in-out;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        ${pseudoBentoArrowTop}

        &::before {
            animation: ${slideFromBottom} 1s ease-in-out;
        }
    }

    & > svg {
        height: 12svh;
        width: 100%;
    }
`;

export default UserBox;