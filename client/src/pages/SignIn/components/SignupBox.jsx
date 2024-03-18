import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import Button from '@components/ui/Button';

const SignupBox = styled(BentoBox)`
    grid-area: SignupBox;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

    & > * {
        width: 90%;
    }

    & > ${Button} {
        padding: 0.25rem;
    }
`;

export default SignupBox;