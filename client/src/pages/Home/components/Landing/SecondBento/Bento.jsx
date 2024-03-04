import styled from 'styled-components';

import BentoBox from '@components/ui/BentoBox';
import { glassMorph } from '@components/misc/mixins';

import BentoGridContainer from './BentoGridContainer';


const Box1 = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Box2 = styled(BentoBox)`
    ${glassMorph};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

const Box3 = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Box4 = styled(BentoBox)`
    ${glassMorph};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

const Box5 = styled(BentoBox)`
    background-color: ${({ theme }) => theme.colors.secondary};
`;

/**
 * Bento
 * @description
 * This component represents the main buildign block of the Home page.
 * It displays a grid layout with various sections including a hero image, description, action boxes, slider, and buttons.
 * The component is responsive and adjusts its layout based on the window size.
 **/
const Bento = () => {
    return (
        <BentoGridContainer >
            <Box1 $gridArea='Box1' />
            <Box2 $gridArea='Box2' />
            <Box3 $gridArea='Box3' />
            <Box4 $gridArea='Box4' />
            <Box5 $gridArea='Box5' />
        </BentoGridContainer>
    );
};

export default Bento;
