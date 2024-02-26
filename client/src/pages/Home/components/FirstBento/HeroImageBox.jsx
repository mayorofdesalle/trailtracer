import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { rotateInFT, scaleDown } from '@components/misc/anims';

/**
 * HeroImageBox
 * @description
 * This is a styled bento box that is used to display the hero image.
 **/
const HeroImageBox = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
    animation: ${rotateInFT} 1s ease-in-out;

    & > * {
        --h: 80svh;
        height: var(--h);
        transform: translate(2rem, 8rem);
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

export default HeroImageBox;