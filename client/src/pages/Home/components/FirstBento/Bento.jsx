import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import bikerImg from '@assets/images/biker.svg';
import arrowLeftImg from '@assets/images/arrowLeft.svg';
import arrowUpRightImg from '@assets/images/arrowUpRight.svg';
import arrowUpImg from '@assets/images/arrowUp.svg';
import useWindowSize from '@hooks/useWindowSize';

import Text, { Prim, Sec } from '@components/ui/Text';
import Vector from '@components/ui/Vector';
import { convertRemToPixels } from '@utils/screenMath';

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
const Bento = ({ children }) => {
    const theme = useTheme();
    const mediumBreakpoint = convertRemToPixels(theme.breakpoints.large.slice(0, -3));
    const { width } = useWindowSize();

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
                <Vector id='L' $image={width > mediumBreakpoint ? arrowUpRightImg : arrowUpImg} $color={theme.colors.background} $height='7svh' $width='7svh' $position='top' />
                <Text>NAVIGATE TO LEARN MORE</Text>
            </ActionBox>

            <ActionBox $gridArea='ActionBox2' $color={theme.colors.secondary} >
                <Text $color={theme.colors.primary}>OR START YOUR JOURNEY NOW</Text>
                <Vector id='R' $image={arrowLeftImg} $color={theme.colors.primary} $height={'4svh'} $width={'8svh'} $position='bottom' />
            </ActionBox>

            {width > mediumBreakpoint && (
                <>
                    <NewsImageBox $gridArea='NewsImageBox' />
                    <NewsBox $gridArea='NewsBox' />
                    <PopularBox $gridArea='PopularBox' />
                    <TopTrailBox $gridArea='TopTrailBox' />
                </>
            )}

            {children}

        </BentoGridContainer>
    );
};

Bento.propTypes = {
    children: PropTypes.node
};

export default Bento;
