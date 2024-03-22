import styled from 'styled-components';

import Grid from '@components/ui/Bento/Grid';

/**
 * BentoGrid
 * @description
 * This is a styled container that is used to provide the grid layout of the bento.
 **/
const BentoGrid = styled(Grid)`
    flex: 0 0 auto;
    grid-template-columns: 3fr 1.5fr 3fr 1.5fr 3fr;
    grid-template-rows: 1fr 3fr 1fr 4fr 1fr 2fr;
    grid-template-areas:
        'Box1   Box1    Box2        Box2    Box2'
        'Box1   Box1    Box2        Box2    Box2'
        'Box1   Box1    Box2        Box2    Box2'
        'Box1   Box1    Box2        Box2    Box2'
        'Box4   Box3    Slider      Box5    Box5'
        'Box4   Box3    StartButton Box5    Box5';

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 6fr 2fr 1fr 3fr;
        grid-template-areas:
            'Box4   Box2        Box2'
            'Box4   Box3        Box3'
            'Slider Slider      Slider'
            'Box1   StartButton Box5';
    }
`;

export default BentoGrid;