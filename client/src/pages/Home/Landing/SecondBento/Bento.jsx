import styled, { useTheme } from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';

import GridSizeProvider from '../GridSizeProvider';
import BentoGrid from './BentoGrid';

const Box1 = styled(BentoBox)`
    grid-area: Box1;
`;

const Box2 = styled(BentoBox)`
    grid-area: Box2;
`;

const Box3 = styled(BentoBox)`
    grid-area: Box3;
`;

const Box4 = styled(BentoBox)`
    grid-area: Box4;
`;

const Box5 = styled(BentoBox)`
    grid-area: Box5;
`;

/**
 * Bento
 * @description
 * Second bento of the landing page.
 **/
const Bento = () => {
    const theme = useTheme();

    return (
        <BentoGrid >
            <Box1 $color={theme.colors.primary} />
            <Box2 $glass />
            <Box3 $color={theme.colors.primary} />
            <Box4 $glass />
            <Box5 $color={theme.colors.secondary} />
            <GridSizeProvider gridArea='Slider' />
            <GridSizeProvider gridArea='StartButton' />
        </BentoGrid>
    );
};

export default Bento;
