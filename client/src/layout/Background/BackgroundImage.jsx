import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Container } from '@components/ui';
import { checkWebpFeature } from '@utils';
import { getImageUrl } from '@utils';

const ImageContainer = styled(Container)`
    background: url(${({ $image }) => getImageUrl($image)}) repeat;
    opacity: 43%;
`;

/**
 * BackgroundImage
 * @description
 * Default background image.
 * Used for mobile, and low GPU tier devices.
 **/
const BackgroundImage = (props) => {
    const preference = useSelector(state => state.theme.preference);
    const fileName = preference ? 'backgrounds/backgroundDark' : 'backgrounds/backgroundLight';
    const isWebpSupported = useMemo(() => { checkWebpFeature('lossless', (feature, isSupported) => isSupported); }, []);

    return (
        <ImageContainer $image={isWebpSupported ? `${fileName}.webp` : `${fileName}.png`} {...props} />
    );
};

export default BackgroundImage;