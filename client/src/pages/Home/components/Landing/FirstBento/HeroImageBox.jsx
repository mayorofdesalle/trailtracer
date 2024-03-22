import styled from 'styled-components';

import bikerImg from '@assets/images/biker.svg';
import grain from '@assets/grain.svg';
import BentoBox from '@components/ui/Bento/BentoBox';
import { rotateFromBottom, scaleDown } from '@components/misc/Anims';

/**
 * HeroImageBox
 * @description
 * This is a styled bento box that is used to display the hero image.
 **/
const HeroImageBoxInner = styled(BentoBox)`
    grid-area: HeroImageBox;
    background-image: url(${grain});
    background-color: ${({ theme }) => theme.colors.secondary};
    will-change: transform;
    animation: ${rotateFromBottom} 1s ease-in-out;
    overflow: hidden;

    & > img {
        position: absolute;
        will-change: transform;
        --h: min(80dvh, 120dvw);
        height: var(--h);
        transform: translate(calc(var(--h) / 12), calc(var(--h) / 6));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

const HeroImageBox = () => {
    return (
        <HeroImageBoxInner>
            <img src={bikerImg} alt="A supersport biker" />
        </HeroImageBoxInner>
    );
};

export default HeroImageBox;