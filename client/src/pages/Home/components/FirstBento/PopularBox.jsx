import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { glassMorph } from '@components/misc/mixins';
import { rotateInFB } from '@components/misc/anims';

import { pseudoBentoArrowBottom } from '../mixins';

/**
 * PopularBox
 * @description
 * This is a styled bento box that is used to display the most popular trails.
 **/
const PopularBox = styled(BentoBox)`
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    animation: ${rotateInFB} 1s ease-in-out;
    
    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowBottom}
    ${glassMorph}
`;

export default PopularBox;