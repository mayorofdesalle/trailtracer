import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';

const MapBox = styled(BentoBox)`
    grid-area: MapBox;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default MapBox;