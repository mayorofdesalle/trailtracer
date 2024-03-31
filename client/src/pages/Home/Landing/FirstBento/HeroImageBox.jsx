import styled from 'styled-components';

import { rotateFromBottom, scaleDown } from '@components/anims';
import BentoBox from '@components/ui/Bento/BentoBox';
import { getImageUrl } from '@utils/imageHelpers';

const HeroImageBoxInner = styled(BentoBox)`
    grid-area: HeroImageBox;
    background-image: url(${getImageUrl('grain.svg')});
    background-color: ${({ theme }) => theme.colors.secondary};
    will-change: transform;
    animation: ${rotateFromBottom} 1s ease-in-out;
    overflow: hidden;

    & > img {
        position: absolute;
        will-change: transform;
        --h: min(70dvh, 120dvw);
        height: var(--h);
        transform: translate(calc(var(--h) / 16), calc(var(--h) / 8));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

/**
 * HeroImageBox
 * @description
 * Styled bento box to display the hero image.
 **/
const HeroImageBox = () => {
    return (
        <HeroImageBoxInner>
            <img src={getImageUrl('biker.png')} alt="A supersport biker" />
        </HeroImageBoxInner>
    );
};

export default HeroImageBox;