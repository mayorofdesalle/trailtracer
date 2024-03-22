import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import checkWebpFeature from '@utils/checkWebpFeature';
import getImageUrl from '@utils/getImageUrl';

const Image = styled(Container)`
    background: url(${({ $image }) => getImageUrl($image)}) repeat;
    opacity: 43%;
`;

/**
 * BackgroundImage
 * @description
 * Default background image.
 * It is used as a fallback for webkit browsers, and as suspense otherwise.
 **/
const BackgroundImage = () => {
    const preference = useSelector(state => state.theme.preference);
    const fileName = preference ? 'backgroundDark' : 'backgroundLight';
    const isWebpSupported = useCallback(() => { checkWebpFeature('lossless', (feature, isSupported) => isSupported); }, []);

    return (
        <Image $image={isWebpSupported ? `${fileName}.webp` : `${fileName}.png`} />
    );
};

export default BackgroundImage;