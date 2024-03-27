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
        <SigninFormInner onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => changeFocus(e, ['email', 'password'], setFocus)}>
            <TextInput register={register} error={errors.email} type='email' autoComplete='email' required validate>
                <Icon id='email' name='at-fill' color={errors.email ? theme.colors.secondary : theme.colors.primary} />
            </TextInput>
            <TextInput register={register} error={errors.password} type='password' autoComplete='current-password' watch={watch} required>
                <Icon id='password' name='key-fill' color={errors.password ? theme.colors.secondary : theme.colors.primary} />
            </TextInput>
            <Button $type='submit' $bgColor={theme.colors.background} $animColors={[theme.colors.background, theme.colors.secondary]} disabled={isSubmitting}>
                <Text $color={theme.colors.primary} $heading>{t('signinPage.signin')}</Text>
            </Button>
        </SigninFormInner>
    );
};

export default SigninForm;