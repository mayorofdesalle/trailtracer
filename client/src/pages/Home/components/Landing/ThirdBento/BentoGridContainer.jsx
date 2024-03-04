import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * BentoGridContainer
 * @description
 * This is a styled container that is used to contain the grid layout of the first bento.
 **/
const BentoGridContainer = styled(Container)`
    flex: 0 0 auto;
    display: grid;
    padding: 2rem;
    grid-template-columns: 3fr 1.5fr 3fr 1.5fr 3fr;
    grid-template-rows: 1fr 3.5fr 1fr 3.5fr 1fr 2fr;
    grid-gap: 2rem;
    grid-template-areas:
        'Box1   Box1    Box1        Box2    Box5'
        'Box1   Box1    Box1        Box2    Box5'
        'Box1   Box1    Box1        Box2    Box5'
        'Box1   Box1    Box1        Box2    Box5'
        'Box4   Box3    Slider      Box2    Box5'
        'Box4   Box3    StartButton Box2    Box5';

    /* Medium screens and downwards */
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 1rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 4fr 3fr 1fr 4fr;
        grid-gap: 1rem;
        grid-template-areas:
            'Box4   Box2        Box2'
            'Box4   Box3        Box3'
            'Slider Slider      Slider'
            'Box1   StartButton Box5';
    }
`;

export default BentoGridContainer;