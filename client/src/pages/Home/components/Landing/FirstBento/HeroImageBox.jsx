import styled from 'styled-components';

import grain from '@assets/grain.svg';
import BentoBox from '@components/ui/Bento/Box';
import { rotateFromBottom, scaleDown } from '@components/misc/Anims';

/**
 * HeroImageBox
 * @description
 * This is a styled bento box that is used to display the hero image.
 **/
const HeroImageBox = styled(BentoBox)`
    grid-area: HeroImageBox;
    animation: ${rotateFromBottom} 1s ease-in-out;
    overflow: hidden;
    background-image: url(${grain});

    & > img {
        --h: min(80dvh, 120dvw);
        height: var(--h);
        transform: translate(calc(var(--h) / 12), calc(var(--h) / 6));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

export default HeroImageBox;