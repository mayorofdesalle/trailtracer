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

    & > ${Container}, & > ${Button} {
        margin-top: clamp(1.5625rem, min(3svw, 3svh), 3.25rem);
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
                <Input type='email' required placeholder='Username or email' icon='at-fill' iconColor={theme.colors.primary} />
            </>
            <>
                <label hidden>Password</label>
                <Input type='password' required placeholder='Password' icon='key-fill' iconColor={theme.colors.primary} />
            </>
            <Button $bgColor={theme.colors.background}>
                <Text $color={theme.colors.primary} $heading>SIGN IN</Text>
            </Button>
        </FormInner>
    );
};

export default SigninForm;