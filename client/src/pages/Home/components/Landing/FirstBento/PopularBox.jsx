import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { pseudoBentoArrowBottom } from '@components/misc/mixins';
import { slideFromTop } from '@components/misc/anims';

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