import styled from 'styled-components';

import Grid from '@components/ui/Bento/BentoGrid';

/**
 * BentoGrid
 * @description
 * Styled container to provide the grid layout to the bento.
 **/
const BentoGrid = styled(Grid)`
    flex: 0 0 auto;
    grid-template-columns: 3.5fr 0.5fr 0.5fr 3fr 0.5fr 0.5fr 3.5fr;
    grid-template-rows: 7fr 2fr 1fr 2fr;
    grid-template-areas:
        'NewsImageBox   NewsImageBox        HeroImageBox        HeroImageBox        HeroImageBox        PopularBox          PopularBox'
        'NewsBox        HeroDescriptionBox  HeroDescriptionBox  HeroDescriptionBox  HeroDescriptionBox  HeroDescriptionBox  TopTrailBox'
        'NewsBox        ActionBox1          ActionBox1          Slider              ActionBox2          ActionBox2          TopTrailBox'
        'NewsBox        ActionBox1          ActionBox1          StartButton         ActionBox2          ActionBox2          TopTrailBox';
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 5.5fr 2.5fr 1fr 3fr;
        grid-template-areas:
            'HeroImageBox           HeroImageBox            HeroImageBox'
            'HeroDescriptionBox     HeroDescriptionBox      HeroDescriptionBox'
            'Slider                 Slider                  Slider'
            'ActionBox1             StartButton             ActionBox2';
    }
`;

export default BentoGrid;