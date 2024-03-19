import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <FormInner>
            <>
                <label hidden>{t('signin.email')}</label>
                <Input type='email' name='email' autoComplete='email' placeholder={t('signin.email')} icon='at-fill' iconColor={theme.colors.primary} required />
            </>
            <>
                <label hidden>{t('signin.password')}</label>
                <Input type='password' eyeColor={theme.colors.secondary} name='password' autoComplete='current-password' placeholder={t('signin.password')} icon='key-fill' iconColor={theme.colors.primary} required />
            </>
            <Button $bgColor={theme.colors.background} $animColors={[theme.colors.background, theme.colors.secondary]}>
                <Text $color={theme.colors.primary} $heading>{t('signin.signin')}</Text>
            </Button>
        </FormInner>
    );
};

export default SigninForm;