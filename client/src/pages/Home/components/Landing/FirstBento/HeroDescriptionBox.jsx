import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { pseudoBentoArrowTop } from '@components/misc/mixins';
import { slideFromBottom } from '@components/misc/anims';

/**
 * HeroDescriptionBox
 * @description
 * This is a styled bento box that is used to contain the hero description.
 **/
const HeroDescriptionBox = styled(BentoBox)`
    grid-area: HeroDescriptionBox;
    --arrowColor: ${({ theme }) => theme.colors.primary};
    ${pseudoBentoArrowTop}

    &::before {
        animation: ${slideFromBottom} 1s ease-in-out;
    }
`;

export default HeroDescriptionBox;