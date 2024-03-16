import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { rotateFromBottom, scaleDown } from '@components/misc/anims';

/**
 * HeroImageBox
 * @description
 * This is a styled bento box that is used to display the hero image.
 **/
const HeroImageBox = styled(BentoBox)`
    grid-area: HeroImageBox;
    animation: ${rotateFromBottom} 1s ease-in-out;
    overflow: hidden;
    
    & > img {
        --h: 200%;
        height: var(--h);
        transform: translateY(calc(var(--h)/16));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

export default HeroImageBox;