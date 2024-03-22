import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import Text from '@components/ui/Text';
import Icon from '@components/ui/Icon';
import Button from '@components/ui/Button';
import useWindowSize from '@hooks/useWindowSize';

import BentoGrid from './BentoGrid';
import SignupBox from './SignupBox';
import ImageBox from './ImageBox';
import SigninBox from './SigninBox/SigninBox';
import ButtonBox from './ButtonBox';
import MapBox from './MapBox';

const Bento = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <BentoGrid>
            <ImageBox />

            <SignupBox $glass>
                <Text $color={theme.colors.primary} $heading $ratio={largeScreen ? 1 : 0.8}>{t('signinPage.signupTitle')}</Text>
                {largeScreen && (
                    <Text $color={theme.colors.text}>
                        {t('signinPage.explanation')}
                    </Text>
                )}
                <Button $bgColor={theme.colors.secondary}>
                    <Text $color={theme.colors.text} $heading>{t('signinPage.signup')}</Text>
                </Button>
            </SignupBox>

            {largeScreen && <MapBox />}

            <SigninBox />

            <ButtonBox as={Button} $gridArea='TermsBox'>
                <Icon name='article-fill' color={theme.colors.primary} />
                <Text $color={theme.colors.text} $heading $ratio={largeScreen ? 0.7 : 0.5}>
                    {t('signinPage.terms')}
                </Text>
            </ButtonBox>

            <ButtonBox as={Button} $gridArea='HelpBox'>
                <Icon name='login-box-fill' color={theme.colors.primary} />
                <Text $color={theme.colors.text} $heading $ratio={0.8}>{t('signinPage.help')}</Text>
            </ButtonBox>
        </BentoGrid>
    );
};

export default Bento;