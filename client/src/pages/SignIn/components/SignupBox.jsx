import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Button from '@components/ui/Button';
import { pseudoBentoArrowTop } from '@components/ui/Bento/Arrows';
import { slideFromBottom } from '@components/misc/Anims';

const SignupBox = styled(BentoBox)`
    grid-area: SignupBox;
    flex-direction: column;
    justify-content: space-around;

    --arrowColor: ${({ theme }) => theme.colors.secondary};
    ${pseudoBentoArrowTop}

    &::before {
        animation: ${slideFromBottom} 1s ease-in-out;
    }

    & > * {
        width: 80%;
    }

    & > ${Button} {
        padding: 0.25rem;
    }
`;

export default SignupBox;