import { memo } from 'react';
import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * BackgroundContainer
 * @description
 * This is a styled container that is used to provide a background color and contain the background texture.
 **/
const BackgroundContainer = memo(styled(Container)`
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: -999;
    overflow: hidden;

    & > img {
        opacity: 0.5;
        width: ${({ $adjustingDimension }) => $adjustingDimension ? 'auto' : '100%'};
        height: ${({ $adjustingDimension }) => $adjustingDimension ? '100%' : 'auto'};
    }
`);

export default BackgroundContainer;
