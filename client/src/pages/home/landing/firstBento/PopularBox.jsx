import styled from 'styled-components';

import { slideFromTop } from '@components/anims';
import { BentoBox } from '@components/ui/bento';
import { pseudoBentoArrowBottom } from '@components/ui/bento/mixins';

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