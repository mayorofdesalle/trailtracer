import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { rotateInFT } from '@components/misc/anims';

/**
 * NewsImageBox
 * @description
 * This is a styled bento box that is used to display the media related to the news description.
 **/
const NewsImageBox = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    animation: ${rotateInFT} 1s ease-in-out;
    z-index: -1;
`;

export default NewsImageBox;