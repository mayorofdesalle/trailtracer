import styled from 'styled-components';

import bikerImg from '@assets/images/biker2.svg';
import grain from '@assets/grain.svg';
import BentoBox from '@components/ui/Bento/Box';
import Container from '@components/ui/Container';
import { slideFromTop, scaleDown, rotateFromBottom } from '@components/misc/Anims';
import { pseudoBentoArrowBottom } from '@components/misc/Mixins';

const ImageBoxInner = styled(BentoBox)`
    grid-area: ImageBox;
    background-image: url(${grain});
    background-color: ${({ theme }) => theme.colors.secondary};
    animation: ${rotateFromBottom} 1s ease-in-out;

    --arrowColor: ${({ theme }) => theme.colors.primary};
    ${pseudoBentoArrowBottom}

    &::before {
        animation: ${slideFromTop} 1s ease-in-out;
    }
`;

const ImageContainer = styled(Container)`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: none;
    
    & > img {
        --h: min(80dvh, 60dvw);
        height: var(--h);
        transform: translateY(calc(var(--h) / 6));
        animation: ${scaleDown} 1s ease-in-out;
    }

    & > img > svg > path {
        fill: ${({ theme }) => theme.colors.secondary};
    
    }
`;

const ImageBox = () => {
    return (
        <ImageBoxInner>
            <ImageContainer>
                <img src={bikerImg} alt="Clipart of a biker doing a wheelie (mono)" />
            </ImageContainer>
        </ImageBoxInner>
    );
};

export default ImageBox;