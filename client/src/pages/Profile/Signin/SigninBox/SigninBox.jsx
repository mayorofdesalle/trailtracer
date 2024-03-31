import { useContext } from 'react';
import styled from 'styled-components';

import BentoBox from '@components/ui/Bento/BentoBox';
import Container from '@components/ui/Container';
import Text from '@components/ui/Text';
import PageContext from '@context/PageContext';

import AuthButtons from '@pages/Profile/components/AuthButtons';
import Separator from '@pages/Profile//components/Separator';
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
    const context = useContext(PageContext);
    const theme = context.theme;
    const t = context.t;

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