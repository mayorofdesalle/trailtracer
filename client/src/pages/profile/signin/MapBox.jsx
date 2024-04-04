import styled from 'styled-components';

import { BentoBox } from '@components/ui/bento';

const MapBox = styled(BentoBox)`
    grid-area: MapBox;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

export default MapBox;