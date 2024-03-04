import { useTheme } from 'styled-components';

import bikerImg from '@assets/images/biker.svg';
import useWindowSize from '@hooks/useWindowSize';
import Text, { Prim, Sec } from '@components/ui/Text';
import Vector from '@components/ui/Vector';
import { remToPx } from '@utils/conversions';

import GridPlaceholder from '../GridPlaceholder';
import BentoGridContainer from './BentoGridContainer';
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
 * This component represents the main buildign block of the Home page.
 * It displays a grid layout with various sections including a hero image, description, action boxes, slider, and buttons.
 * The component is responsive and adjusts its layout based on the window size.
 **/
const Bento = () => {
    const theme = useTheme();
    const { width } = useWindowSize();
    const mediumBreakpoint = remToPx(theme.breakpoints.large.slice(0, -3));
    return (
        <BentoGridContainer>
            <HeroImageBox $gridArea='HeroImageBox'>
                <img src={bikerImg} alt='A biker on an enduro motorcycle' />
            </HeroImageBox>

            <HeroDescriptionBox $gridArea='HeroDescriptionBox'>
                <Text $heading $color={theme.colors.text}>
                    <Sec>COLLABORATE</Sec> WITH RIDERS LIKE YOU <Sec>AND PLAN</Sec> <Prim>YOUR NEXT TRAIL!</Prim>
                </Text>
            </HeroDescriptionBox>

            <ActionBox $gridArea='ActionBox1' $color={theme.colors.primary}>
                <Vector id='L' $name={width > mediumBreakpoint ? 'arrowUpRight' : 'arrowUp'} $color={theme.colors.background} $height='7svh' $width='7svh' $position='top' />
                <Text>NAVIGATE TO LEARN MORE</Text>
            </ActionBox>

            <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} >
                <Text $color={theme.colors.primary}>OR START YOUR JOURNEY NOW</Text>
                <Vector id='R' $name='arrowLeft' $color={theme.colors.primary} $height={'4svh'} $width={'8svh'} $position='bottom' />
            </ActionBox>

            {width > mediumBreakpoint && (
                <>
                    <NewsImageBox $gridArea='NewsImageBox' />
                    <NewsBox $gridArea='NewsBox' />
                    <TopTrailBox $gridArea='TopTrailBox' />
                    <PopularBox $gridArea='PopularBox' />
                </>
            )}

            <GridPlaceholder gridArea='Slider' />
            <GridPlaceholder gridArea='StartButton' />
        </BentoGridContainer>
    );
};

export default Bento;
