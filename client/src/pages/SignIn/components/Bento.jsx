import { useTheme } from 'styled-components';

import Text, { Sec } from '@components/ui/Text';
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
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <BentoGrid>
            <SigninBox />

            {largeScreen && <FrameBox />}

            <ButtonBox as={Button} $gridArea='TermsBox'>
                <Icon name='file-paper-fill' color={theme.colors.secondary} />
                <Text $color={theme.colors.text} $heading $ratio={width < theme.breakpoints.small && 0.5}>
                    By signing in, you agree to our
                    Terms of Service and Privacy Policy.
                </Text>
            </ButtonBox>

            <ButtonBox as={Button} $gridArea='HelpBox'>
                <Icon name='login-box-fill' color={theme.colors.secondary} />
                <Text $color={theme.colors.text} $heading $ratio={width < theme.breakpoints.small && 0.8}>NEED HELP SIGNING IN?</Text>
            </ButtonBox>

            <SignupBox $glass>
                <Text $color={theme.colors.primary} $heading $ratio={largeScreen ? 1 : 0.8}>NOT ON TRAILTRACER <Sec>YET</Sec>?</Text>
                {largeScreen && (
                    <Text $color={theme.colors.text}>
                        You can still explore everything the community has created.
                        But you will need an account to interact with them.
                    </Text>
                )}
                <Button $bgColor={theme.colors.secondary}>
                    <Text $color={theme.colors.text} $heading>SIGN UP</Text>
                </Button>
            </SignupBox>
            <ImageBox />
        </BentoGrid>
    );
};

export default Bento;