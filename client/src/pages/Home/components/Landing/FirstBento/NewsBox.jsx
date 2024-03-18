import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { pseudoBentoArrowTop } from '@components/misc/Mixins';
import { slideFromBottom } from '@components/misc/Anims';

/**
 * NewsBox
 * @description
 * This is a styled bento box that is used to contain the news content.
 **/
const NewsBox = styled(BentoBox)`
    grid-area: NewsBox;
    
    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowTop}

    &::before {
        animation: ${slideFromBottom} 1s ease-in-out;
    }
`;

export default NewsBox;