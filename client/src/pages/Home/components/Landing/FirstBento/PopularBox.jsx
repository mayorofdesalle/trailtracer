import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import { pseudoBentoArrowBottom } from '@components/ui/Bento/Arrows';
import { slideFromTop } from '@components/misc/Anims';

/**
 * PopularBox
 * @description
 * This is a styled bento box that is used to display the most popular trails.
 **/
const PopularBox = styled(BentoBox)`
    grid-area: PopularBox;
    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowBottom}

    &::before {
        animation: ${slideFromTop} 1s ease-in-out;
    }
`;

export default PopularBox;