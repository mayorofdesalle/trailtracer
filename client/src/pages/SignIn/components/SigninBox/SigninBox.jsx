import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Text from '@components/ui/Text';
import SigninForm from './SigninForm';
import Separator from './Separator';
import AuthButtons from './AuthButtons';

const SigninBoxInner = styled(BentoBox)`
    grid-area: SigninBox;
    flex-direction: column;
    justify-content: space-around;

    & > * {
        width: 80%;
    }
`;

const SigninBox = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <SigninBoxInner $color={theme.colors.primary}>
            <Text $color={theme.colors.background} $heading $ratio={1.5}>{t('signinPage.title')}</Text>
            <Text $color={theme.colors.background}>{t('signinPage.credentials')}</Text>
            <SigninForm />
            <Separator />
            <AuthButtons />
        </SigninBoxInner>
    );
};

export default SigninBox;