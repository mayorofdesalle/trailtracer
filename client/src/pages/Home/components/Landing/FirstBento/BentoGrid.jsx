import styled from 'styled-components';

import Grid from '@components/ui/Bento/Grid';

/**
 * BentoGrid
 * @description
 * This is a styled container that is used to provide the grid layout of the bento.
 **/
const BentoGrid = styled(Grid)`
    flex: 0 0 auto;
    grid-template-columns: 3.5fr 1fr 3fr 1fr 3.5fr;
    grid-template-rows: 4fr 2fr 1fr 2fr 1fr 2fr;
    grid-template-areas:
        'NewsImageBox   HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsImageBox   HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsBox        HeroImageBox            HeroImageBox            HeroImageBox            PopularBox'
        'NewsBox        HeroDescriptionBox      HeroDescriptionBox      HeroDescriptionBox      PopularBox'
        'NewsBox        ActionBox1              Slider                  ActionBox2              TopTrailBox'
        'NewsBox        ActionBox1              StartButton             ActionBox2              TopTrailBox';
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 6fr 2fr 1fr 3fr;
        grid-template-areas:
            'HeroImageBox           HeroImageBox            HeroImageBox'
            'HeroDescriptionBox     HeroDescriptionBox      HeroDescriptionBox'
            'Slider                 Slider                  Slider'
            'ActionBox1             StartButton             ActionBox2';
    }
`;

export default BentoGrid;