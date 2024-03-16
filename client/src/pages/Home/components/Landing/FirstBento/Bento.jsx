import { useTheme } from 'styled-components';

import bikerImg from '@assets/images/biker.svg';
import useWindowSize from '@hooks/useWindowSize';
import Text, { Prim, Sec } from '@components/ui/Text';
import Vector from '@components/ui/Vector';
import { remToPx } from '@utils/conversions';

import GridPlaceholder from '../GridPlaceholder';
import BentoGrid from './BentoGrid';
import HeroImageBox from './HeroImageBox';
import HeroDescriptionBox from './HeroDescriptionBox';
import ActionBox from './ActionBox';
import NewsImageBox from './NewsImageBox';
import NewsBox from './NewsBox';
import TopTrailBox from './TopTrailBox';
import PopularBox from './PopularBox';

/**
 * Bento
 * @description
 * This is the first bento of the landing page.
 **/
const Bento = () => {
    const theme = useTheme();
    const { height, width } = useWindowSize();
    const largeBreakpoint = remToPx(theme.breakpoints.large.slice(0, -3));
    const aspectRatio = width / height;

    return (
        <BentoGrid>
            <HeroImageBox $color={theme.colors.secondary}>
                <img src={bikerImg} alt='A biker on an enduro motorcycle' />
            </HeroImageBox>

            <HeroDescriptionBox $glass>
                <Text $heading $color={theme.colors.text}>
                    <Sec>COLLABORATE</Sec> WITH RIDERS LIKE YOU <Sec>AND PLAN</Sec> <Prim>YOUR NEXT TRAIL!</Prim>
                </Text>
            </HeroDescriptionBox>

            <ActionBox $gridArea='ActionBox1' $color={theme.colors.primary}>
                <Vector id='L' $name={width > largeBreakpoint ? 'arrowUpRight' : 'arrowUp'} $color={theme.colors.background} $height='7svh' $width='7svh' $position='top' />
                <Text>NAVIGATE TO LEARN MORE</Text>
            </ActionBox>

            <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} >
                <Text $color={theme.colors.primary}>OR START YOUR JOURNEY NOW</Text>
                <Vector id='R' $name='arrowLeft' $color={theme.colors.primary} $height={'4svh'} $width={'8svh'} $position='bottom' />
            </ActionBox>

            {width > largeBreakpoint && aspectRatio > 1 && (
                <>
                    <NewsImageBox $color={theme.colors.primary} />
                    <NewsBox $glass />
                    <TopTrailBox $color={theme.colors.primary} />
                    <PopularBox $glass />
                </>
            )}

            <GridPlaceholder gridArea='Slider' />
            <GridPlaceholder gridArea='StartButton' />
        </BentoGrid>
    );
};

export default Bento;
