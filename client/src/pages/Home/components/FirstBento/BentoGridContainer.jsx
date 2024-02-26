import styled from 'styled-components';

import Container from '@components/ui/Container';

/**
 * BentoGridContainer
 * @description
 * This is a styled container that is used to contain the grid layout of the first bento.
 **/
const BentoGridContainer = styled(Container)`
    display: grid;
    height: 100svh;
    width: 100svw;
    padding: calc(7rem + 2px) calc(3rem + 2px) calc(3rem + 2px);
    grid-template-columns: 4fr 2fr 4fr 2fr 4fr;
    grid-template-rows: 1fr 2fr 2fr 1.5fr 0.5fr 2fr;
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
        padding: calc(6rem + 2px) calc(2rem + 2px) calc(2rem + 2px);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 9fr 2fr 1fr 4fr;
        grid-gap: 1rem;
        grid-template-areas:
            'HeroImageBox           HeroImageBox            HeroImageBox'
            'HeroDescriptionBox     HeroDescriptionBox      HeroDescriptionBox'
            'Slider                 Slider                  Slider'
            'ActionBox1             StartButton             ActionBox2';
    }
`;

export default BentoGridContainer;