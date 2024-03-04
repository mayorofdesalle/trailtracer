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
        --h: min(80svh, 80svw);
        height: var(--h);
        transform: translate(calc(var(--h)/16), calc(var(--h)/8));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

export default HeroImageBox;