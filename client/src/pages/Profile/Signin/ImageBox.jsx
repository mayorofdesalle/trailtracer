import styled from 'styled-components';

import { rotateFromBottom, scaleDown } from '@components/anims';
import BentoBox from '@components/ui/Bento/BentoBox';
import { getImageUrl } from '@utils/imageHelpers';

const ImageBoxInner = styled(BentoBox)`;
    grid-area: ImageBox;
    background-image: url(${getImageUrl('grain.svg')});
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

/**
 * ImageBox
 * @description
 * Styled bento box to display a biker image.
 **/
const ImageBox = () => {
    return (
        <ImageBoxInner>
            <img src={getImageUrl('biker2.png')} alt="A supersport biker" />
        </ImageBoxInner>
    );
};

export default ImageBox;