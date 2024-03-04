import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { rotateInFT } from '@components/misc/anims';

/**
 * TopTrailBox
 * @description
 * This is a styled bento box that is used to display the top trail.
 **/
const TopTrailBox = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.primary};
    animation: ${rotateInFT} 1s ease-in-out;
`;

export default TopTrailBox;