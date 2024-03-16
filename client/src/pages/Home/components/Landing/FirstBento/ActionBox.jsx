import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { slideFromRight, slideFromBottomLeft } from '@components/misc/anims';

/**
 * ActionBox
 * @description
 * This is a styled bento box that is used to contain the CTA content.
 **/
const ActionBox = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea};
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

    & > #R {
        animation: ${slideFromRight} 1s ease-in-out;
    }

    & > #L {
        animation: ${slideFromBottomLeft} 1s ease-in-out;
    }
`;

export default ActionBox;