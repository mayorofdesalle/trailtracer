import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { Button, Container, Icon, Text } from '@components/ui';
import { PasswordInput, TextInput, changeFocus } from '@components/ui/input';
import { FormContext } from '@context';

const SigninFormInner = styled.form`
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

/**
 * SigninForm
 * @description
 * Form to sign in with email and password.
 * **/
const SigninForm = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    const { register, handleSubmit, setFocus, setValue, watch, formState: { errors } } = useForm({
        defaultValues: useMemo(() => {
            return {
                email: '',
                'current-password': ''
            };
        }, []),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: true
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log(data);
    };

    return (
        <SigninFormInner role='form' onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => changeFocus(e, ['email', 'current-password'], setFocus)}>
            <FormContext.Provider value={{ register, setFocus, setValue, watch }}>
                <TextInput type='email' error={errors.email} required validate>
                    <Icon name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
                </TextInput>
                <PasswordInput error={errors.password} name='current-password' required>
                    <Icon name='key-fill' color={errors.password ? theme.colors.secondary : theme.colors.primary} />
                </PasswordInput>
                <Button $type='submit' $bgColor={theme.colors.background} $animColors={[theme.colors.background, theme.colors.secondary]} disabled={isSubmitting}>
                    <Text $color={theme.colors.primary} $heading>{t('signinPage.signin')}</Text>
                </Button>
            </FormContext.Provider>
        </SigninFormInner>
    );
};

export default SigninForm;