import styled, { useTheme } from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';

import GridPlaceholder from '../GridPlaceholder';
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
 * This is the third bento of the landing page.
 **/
const Bento = () => {
    const theme = useTheme();

    return (
        <BentoGrid >
            <Box1 $color={theme.colors.secondary} />
            <Box2 $color={theme.colors.primary} />
            <Box3 $color={theme.colors.text} />
            <Box4 $glass />
            <Box5 $glass />
            <GridPlaceholder gridArea='Slider' />
            <GridPlaceholder gridArea='StartButton' />
        </BentoGrid>
    );
};

export default Bento;
