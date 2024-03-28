import styled from 'styled-components';

import { slideFromTop } from '@components/style/anims';
import { pseudoBentoArrowBottom } from '@components/ui/Bento/Arrows';
import BentoBox from '@components/ui/Bento/BentoBox';

/**
 * PopularBox
 * @description
 * Styled bento box to display the most popular trails.
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