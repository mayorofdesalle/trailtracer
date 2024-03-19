import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import Button from '@components/ui/Button';
import { pseudoBentoArrowTop } from '@components/misc/Mixins';

const SignupBox = styled(BentoBox)`
    grid-area: SignupBox;
    flex-direction: column;
    justify-content: space-around;

    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowTop}

    & > * {
        width: 90%;
    }

    & > ${Button} {
        padding: 0.25rem;
    }
`;

export default SignupBox;