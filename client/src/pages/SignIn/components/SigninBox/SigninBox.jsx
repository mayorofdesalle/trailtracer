import styled, { useTheme } from 'styled-components';

import BentoBox from '@components/ui/Bento/Box';
import Text from '@components/ui/Text';
import SigninForm from './SigninForm';
import Separator from './Separator';
import AuthButtons from './AuthButtons';

const SigninBoxInner = styled(BentoBox)`
    grid-area: SigninBox;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & > * {
        width: 90%;
    }
`;

const SigninBox = () => {
    const theme = useTheme();

    return (
        <SigninBoxInner $color={theme.colors.primary}>
            <Text $color={theme.colors.background} $heading $ratio={1.5}>WELCOME BACK!</Text>
            <Text $color={theme.colors.background}>Sign in using your credentials</Text>
            <SigninForm />
            <Separator />
            <AuthButtons />
        </SigninBoxInner>
    );
};

export default SigninBox;