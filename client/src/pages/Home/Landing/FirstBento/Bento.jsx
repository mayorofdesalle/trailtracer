import { useTheme } from 'styled-components';

import useWindowSize from '@hooks/useWindowSize';

import GridSizeProvider from '../GridSizeProvider';
import { ActionBoxFirst, ActionBoxSecond } from './ActionBox';
import BentoGrid from './BentoGrid';
import HeroDescriptionBox from './HeroDescriptionBox';
import HeroImageBox from './HeroImageBox';
import NewsBox from './NewsBox';
import NewsImageBox from './NewsImageBox';
import PopularBox from './PopularBox';
import TopTrailBox from './TopTrailBox';

/**
 * Bento
 * @description
 * First bento of the landing page.
 **/
const Bento = () => {
    const theme = useTheme();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <BentoGrid>
            <HeroImageBox />
            <HeroDescriptionBox />
            <ActionBoxFirst />
            <ActionBoxSecond />

            {largeScreen && (
                <>
                    <NewsImageBox $color={theme.colors.primary} />
                    <NewsBox $glass />
                    <TopTrailBox $color={theme.colors.primary} />
                    <PopularBox $glass />
                </>
            )}

            <GridSizeProvider gridArea='Slider' />
            <GridSizeProvider gridArea='StartButton' />
        </BentoGrid>
    );
};

export default Bento;
