import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { Container, Text } from '@components/ui';
import { BentoBox } from '@components/ui/bento';

import Separator from '@pages/Profile//components/Separator';
import AuthButtons from '@pages/Profile/components/AuthButtons';
import SigninForm from './SigninForm';

const SigninBoxInner = styled(BentoBox)`
    grid-area: SignBox;
    flex-direction: column;
    justify-content: space-around;

    & > * {
        width: 80%;
    }

    & > ${Text} {
        width: 100%;
    }
`;

const Wrapper = styled(Container)`
    height: fit-content;
    flex-direction: column;
`;

/**
 * SigninBox
 * @description
 * Styled bento box to display the signin form and auth buttons.
 * **/
const SigninBox = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <SigninBoxInner $color={theme.colors.primary}>
            <Wrapper>
                <Text $color={theme.colors.background} $heading $ratio={1.5}>{t('signinPage.title')}</Text>
                <Text $color={theme.colors.background}>{t('signinPage.credentials')}</Text>
            </Wrapper>
            <SigninForm />
            <Separator color={theme.colors.background} />
            <AuthButtons bgColor={theme.colors.background} color={theme.colors.primary} animColors={[theme.colors.background, theme.colors.secondary]} />
        </SigninBoxInner>
    );
};

export default SigninBox;