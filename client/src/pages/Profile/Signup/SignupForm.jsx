import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { css, useTheme } from 'styled-components';

import { Button, Container, Icon, Text } from '@components/ui';
import { FormContext } from '@context';
import { TextInput, PasswordInput } from '@components/ui/input';
import changeFocus from '@components/ui/input/changeFocus';

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

const InputContainer = styled(Container)`
    position: relative;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;

    & > ${Text} {
        margin-left: clamp(0.5rem, min(1dvw, 1dvh), 1rem);
    }

    & input {

        &::placeholder {
            color: transparent;
        }
    }
`;

/**
 * SignupForm
 * @description
 * Form to sign in with email and password.
 * **/
const SignupForm = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, setFocus, setValue, watch, formState: { errors } } = useForm({
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
        <FormContext.Provider value={{ register, watch, setFocus, setValue }}>
            <SignupFormInner role='form' onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => changeFocus(e, ['email', 'password'], setFocus)} {...props}>
                <InputContainer>
                    <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.email')}</Text>
                    <TextInput type='email' error={errors.email} required validate>
                        <Icon name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
                    </TextInput>
                </InputContainer>
                <InputContainer>
                    <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.new-password')}</Text>
                    <PasswordInput error={errors.password} name='new-password' required validate>
                        <Icon name='key-fill' color={errors.password ? theme.colors.secondary : theme.colors.primary} />
                    </PasswordInput>
                </InputContainer>
                <Button $type='submit' $bgColor={theme.colors.primary} disabled={isSubmitting}>
                    <Text $color={theme.colors.background} $heading>{t('forms.continue')}</Text>
                </Button>
            </SignupFormInner>
        </FormContext.Provider>
    );
};

export default SignupForm;