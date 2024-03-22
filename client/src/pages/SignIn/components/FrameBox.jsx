import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';

const FrameBox = styled(BentoBox)`
    grid-area: FrameBox;
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
`;

export default FrameBox;