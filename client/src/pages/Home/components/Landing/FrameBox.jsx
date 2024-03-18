import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';

const FrameBox = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea || 'FrameBox'};
    border: 2px solid ${({ theme, $borderColor }) => $borderColor || theme.colors.primaryTransparent};
`;

export default FrameBox;