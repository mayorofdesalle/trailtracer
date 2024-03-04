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
    grid-template-columns: 3.5fr 1fr 3fr 1fr 3.5fr;
    grid-template-rows: 4fr 2fr 1fr 2fr 1fr 2fr;
    grid-gap: 2rem;
    grid-template-areas:
        'NewsImageBox   HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsImageBox   HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsBox        HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsBox        HeroDescriptionBox      HeroDescriptionBox      HeroDescriptionBox      TopTrailBox'
        'NewsBox        ActionBox1              Slider                  ActionBox2              TopTrailBox'
        'NewsBox        ActionBox1              StartButton             ActionBox2              TopTrailBox';

    /* Medium screens and downwards */
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 1rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 4fr 3fr 1fr 4fr;
        grid-gap: 1rem;
        grid-template-areas:
            'HeroImageBox           HeroImageBox            HeroImageBox'
            'HeroDescriptionBox     HeroDescriptionBox      HeroDescriptionBox'
            'Slider                 Slider                  Slider'
            'ActionBox1             StartButton             ActionBox2';
    }
`;

export default BentoGridContainer;