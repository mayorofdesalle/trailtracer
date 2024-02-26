import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { glassMorph } from '@components/misc/mixins';
import { rotateInFB } from '@components/misc/anims';

import { pseudoBentoArrowTop } from '../mixins';

/**
 * NewsBox
 * @description
 * This is a styled bento box that is used to contain the news content.
 **/
const NewsBox = styled(BentoBox)`
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    animation: ${rotateInFB} 1s ease-in-out;

    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowTop}

    ${glassMorph}
`;

export default NewsBox;