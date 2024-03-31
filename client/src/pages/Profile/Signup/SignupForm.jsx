import { useContext, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@components/ui/Button';
import Container from '@components/ui/Container';
import Icon from '@components/ui/Icon';
import TextInput from '@components/ui/Input/TextInput';
import changeFocus from '@components/ui/Input/changeFocus';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

const SignupFormInner = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    
    & > * {
        margin-top: clamp(1rem, min(3dvw, 3dvh), 3rem);
    }

    & > ${Container}:first-of-type {
        margin-top: 0;
    }

    & > ${Button} {
        padding: 0.25rem;
        width: 100%;
    }
`;

const SignupTextInput = styled(TextInput)`
    background-color: ${({ theme }) => theme.colors.background};
    caret-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
        color: transparent;
    }
`;

const InputContainer = styled(Container)`
    position: relative;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;

    & > ${Text} {
        margin-left: clamp(0.5rem, min(1dvw, 1dvh), 1rem);
    }
`;

/**
 * SignupForm
 * @description
 * Form to sign in with email and password.
 * **/
const SignupForm = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, setFocus, watch, formState: { errors } } = useForm({
        defaultValues: useMemo(() => {
            return {
                email: '',
                password: ''
            };
        }, []),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: true
    });

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log(data);
    };

    return (
        <SignupFormInner onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => changeFocus(e, ['email', 'password'], setFocus)}>
            <InputContainer>
                <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.email')}</Text>
                <SignupTextInput register={register} error={errors.email} type='email' autoComplete='email' required validate>
                    <Icon id='email' name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
                </SignupTextInput>
            </InputContainer>
            <InputContainer>
                <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.password')}</Text>
                <SignupTextInput register={register} error={errors.password} type='password' autoComplete='current-password' watch={watch} required>
                    <Icon id='password' name='key-fill' color={errors.password ? theme.colors.secondary : theme.colors.primary} />
                </SignupTextInput>
            </InputContainer>
            <Button $type='submit' $bgColor={theme.colors.primary} disabled={isSubmitting}>
                <Text $color={theme.colors.background} $heading>{t('signinPage.signup')}</Text>
            </Button>
        </SignupFormInner>
    );
};

export default SignupForm;