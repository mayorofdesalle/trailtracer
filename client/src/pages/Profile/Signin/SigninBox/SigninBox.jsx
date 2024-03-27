import { useContext } from 'react';
import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

import AuthButtons from './AuthButtons';
import Separator from './Separator';
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

/**
 * SigninBox
 * @description
 * Styled bento box to display the signin form and auth buttons.
 * **/
const SigninBox = () => {
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;

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