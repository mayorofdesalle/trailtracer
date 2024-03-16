import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { pseudoBentoArrowTop } from '@components/misc/mixins';
import { slideFromBottom } from '@components/misc/anims';

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