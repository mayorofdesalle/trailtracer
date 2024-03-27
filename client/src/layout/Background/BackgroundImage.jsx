import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Container from '@components/ui/Container';
import checkWebpFeature from '@utils/checkWebpFeature';
import { getImageUrl } from '@utils/imageHelpers';

const Image = styled(Container)`
    background: url(${({ $image }) => getImageUrl($image)}) repeat;
    opacity: 43%;
`;

/**
 * BackgroundImage
 * @description
 * Default background image.
 * It is used as a fallback for webkit browsers, and as fallback otherwise.
 **/
const BackgroundImage = () => {
    const preference = useSelector(state => state.theme.preference);
    const fileName = preference ? 'backgrounds/backgroundDark' : 'backgrounds/backgroundLight';
    const isWebpSupported = useMemo(() => { checkWebpFeature('lossless', (feature, isSupported) => isSupported); }, []);

    return (
        <Image $image={isWebpSupported ? `${fileName}.webp` : `${fileName}.png`} />
    );
};

export default BackgroundImage;