import styled, { useTheme } from 'styled-components';

import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import Container from '@components/ui/Container';

const FormInner = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    
    & > * {
        margin-top: clamp(1.5625rem, min(3dvw, 3dvh), 3.25rem);
    }

    & > ${Container}:first-of-type {
        margin-top: 0;
    }

    & > ${Button} {
        padding: 0.25rem;
        width: 100%;
    }
`;

const SigninForm = () => {
    const theme = useTheme();

    return (
        <FormInner>
            <>
                <label hidden>Username or email</label>
                <Input type='email' name='email' autoComplete='email' placeholder='Username or email' icon='at-fill' iconColor={theme.colors.primary} required />
            </>
            <>
                <label hidden>Password</label>
                <Input type='password' eyeColor={theme.colors.secondary} name='password' autoComplete='current-password' placeholder='Password' icon='key-fill' iconColor={theme.colors.primary} required />
            </>
            <Button $bgColor={theme.colors.background} $animColors={[theme.colors.background, theme.colors.secondary]}>
                <Text $color={theme.colors.primary} $heading>SIGN IN</Text>
            </Button>
        </FormInner>
    );
};

export default SigninForm;