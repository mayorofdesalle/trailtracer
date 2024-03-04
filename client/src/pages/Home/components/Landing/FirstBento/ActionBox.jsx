import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import Text from '@components/ui/Text';
import { rotateInFB, fadeIn, slideInR, slideInBL } from '@components/misc/anims';

/**
 * ActionBox
 * @description
 * This is a styled bento box that is used to contain the CTA content.
 **/
const ActionBox = styled(BentoBox)`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    background-color: ${({ $color }) => $color};
    animation: ${rotateInFB} 1s ease-in-out;

    & > ${Text} {
        animation: ${fadeIn} 1s ease-in-out;
    }

    & > #R {
        animation: ${slideInR} 1s ease-in-out;
    }

    & > #L {
        animation: ${slideInBL} 1s ease-in-out;
    }
`;

export default ActionBox;