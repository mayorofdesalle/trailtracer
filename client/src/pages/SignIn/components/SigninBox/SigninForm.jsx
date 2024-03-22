import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import styled, { useTheme } from 'styled-components';

import TextInput from '@components/ui/Input/TextInput';
import Icon from '@components/ui/Icon';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import Container from '@components/ui/Container';

const SigninFormInner = styled.form`
    position: relative;
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
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, setFocus, watch, formState: { errors } } = useForm({
        defaultValues: useMemo(() => {
            return {
                email: '',
                password: ''
            };
        }, [])
    });

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log(data);
    };

    return (
        <SigninFormInner onSubmit={handleSubmit(onSubmit)}>
            <TextInput register={register} error={errors.email} label={t('forms.handle')} type='email' required validate>
                <Icon id='email' name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
            </TextInput>
            <TextInput register={register} error={errors.password} label={t('forms.password')} type='password' watch={watch} required>
                <Icon id='password' name='key-fill' color={errors.password ? theme.colors.secondary : theme.colors.primary} />
            </TextInput>
            <Button $bgColor={theme.colors.background} $animColors={[theme.colors.background, theme.colors.secondary]} disabled={isSubmitting}>
                <Text $color={theme.colors.primary} $heading>{t('signinPage.signin')}</Text>
            </Button>
        </SigninFormInner>
    );
};

export default SigninForm;