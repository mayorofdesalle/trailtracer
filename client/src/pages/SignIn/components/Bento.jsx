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
import FrameBox from './FrameBox';

const Bento = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <BentoGrid>
            <ImageBox />
            <SignupBox $glass>
                <Text $color={theme.colors.primary} $heading $ratio={largeScreen ? 1 : 0.8}>{t('signin.signupTitle')}</Text>
                {largeScreen && (
                    <Text $color={theme.colors.text}>
                        {t('signin.explanation')}
                    </Text>
                )}
                <Button $bgColor={theme.colors.secondary}>
                    <Text $color={theme.colors.text} $heading>{t('signin.signup')}</Text>
                </Button>
            </SignupBox>

            {largeScreen && <FrameBox />}

            <SigninBox />

            <ButtonBox as={Button} $gridArea='TermsBox'>
                <Icon name='file-paper-fill' color={theme.colors.secondary} />
                <Text $color={theme.colors.text} $heading $ratio={largeScreen ? 0.8 : 0.5}>
                    {t('signin.terms')}
                </Text>
            </ButtonBox>

            <ButtonBox as={Button} $gridArea='HelpBox'>
                <Icon name='login-box-fill' color={theme.colors.secondary} />
                <Text $color={theme.colors.text} $heading $ratio={0.8}>{t('signin.help')}</Text>
            </ButtonBox>
        </BentoGrid>
    );
};

export default Bento;