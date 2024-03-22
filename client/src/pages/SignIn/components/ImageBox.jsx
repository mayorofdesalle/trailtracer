import styled from 'styled-components';

import bikerImg from '@assets/images/biker2.svg';
import grain from '@assets/grain.svg';
import BentoBox from '@components/ui/Bento/BentoBox';
import { scaleDown, rotateFromBottom } from '@components/misc/Anims';

const ImageBoxInner = styled(BentoBox)`;
    grid-area: ImageBox;
    background-image: url(${grain});
    background-color: ${({ theme }) => theme.colors.secondary};
    will-change: transform;
    animation: ${rotateFromBottom} 1s ease-in-out;
    overflow: hidden;

    & > img {
        position: absolute;
        will-change: transform;
        --h: min(80dvh, 60dvw);
        height: var(--h);
        transform: translateY(calc(var(--h) / 6));
        animation: ${scaleDown} 1s ease-in-out;
    }
`;

const ImageBox = () => {
    return (
        <ImageBoxInner>
            <img src={bikerImg} alt="A supersport biker" />
        </ImageBoxInner>
    );
};

export default ImageBox;