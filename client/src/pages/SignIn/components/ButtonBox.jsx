import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import { glassMorph } from '@components/misc/Mixins';

const ButtonBox = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea};
    flex-direction: column;
    justify-content: space-around;
    ${glassMorph}

    & > svg {
        height: 5dvh;
        width: 5dvh;
    }
`;

export default ButtonBox;