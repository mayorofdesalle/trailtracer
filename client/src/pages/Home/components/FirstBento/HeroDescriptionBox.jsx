import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { glassMorph } from '@components/misc/mixins';
import { rotateInFB, fadeIn } from '@components/misc/anims';

import { pseudoBentoArrowTop } from '../mixins';

/**
 * HeroDescriptionBox
 * @description
 * This is a styled bento box that is used to contain the hero description.
 **/
const HeroDescriptionBox = styled(BentoBox)`
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    animation: ${rotateInFB} 1s ease-in-out;

    --arrowColor: ${({ theme }) => theme.colors.primary};
    ${pseudoBentoArrowTop}

    ${glassMorph}

    & > * {
        animation: ${fadeIn} 1s ease-in-out;
        line-height: 1.43;
    }
`;

export default HeroDescriptionBox;