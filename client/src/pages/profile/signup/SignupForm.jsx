import { useMemo, useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { logger } from '@app';
import { Button, Container, Icon, Text } from '@components/ui';
import { PasswordInput, TextInput, changeFocus } from '@components/ui/input';
import { FormContext } from '@context';

const SignupFormInner = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
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

    const { register, handleSubmit, setFocus, setValue, watch, formState: { errors } } = useForm({
        defaultValues: useMemo(() => {
            return {
                email: '',
                'new-password': ''
            };
        }, []),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: true
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = useCallback((data) => {
        setIsSubmitting(true);
        logger.debug(data);
    });

    useEffect(() => {
        setFocus('email');
    }, []);

    return (
        <FormContext.Provider value={{ register, setFocus, setValue, watch }}>
            <SignupFormInner role='form' onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => changeFocus(e, ['email', 'new-password'], setFocus)} {...props}>
                <InputContainer>
                    <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.email')}</Text>
                    <TextInput type='email' error={errors.email} required validate>
                        <Icon name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
                    </TextInput>
                </InputContainer>
                <InputContainer>
                    <Text $color={theme.colors.primary} $ratio={0.75}>{t('forms.new-password')}</Text>
                    <PasswordInput error={errors['new-password']} name='new-password' required validate>
                        <Icon name='key-fill' color={errors['new-password'] ? theme.colors.secondary : theme.colors.primary} />
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