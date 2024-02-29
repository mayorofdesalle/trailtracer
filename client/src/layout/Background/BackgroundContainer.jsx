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
    height: 100svh;
    width: 100svw;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: -9999;
`);

export default BackgroundContainer;
