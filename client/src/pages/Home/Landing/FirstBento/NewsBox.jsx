import styled from 'styled-components';

import { slideFromBottom } from '@components/anims';
import { pseudoBentoArrowTop } from '@components/ui/bento/mixins';
import { BentoBox } from '@components/ui/bento';

/**
 * NewsBox
 * @description
 * Styled bento box to contain the news content.
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