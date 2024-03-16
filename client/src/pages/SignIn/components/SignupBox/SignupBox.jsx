import styled, { useTheme } from 'styled-components';

import bikerOnRouteImg from '@assets/images/bikerOnRoute.svg';
import useWindowSize from '@hooks/useWindowSize';
import BentoBox from '@components/ui/Bento/Box';
import Container from '@components/ui/Container';
import Text, { Sec } from '@components/ui/Text';
import Button from '@components/ui/Button';
import { remToPx } from '@utils/conversions';

const SignupBoxInner = styled(BentoBox)`
    grid-area: SignupBox;
    overflow: hidden;
    
    & > img {
        position: absolute;
        top: 0;
        height: min(30svh, 80svw);
        z-index: -1;
    }
`;

const SignupContainer = styled(Container)`
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    top: 50%;
    height: 50%;
    width: 90%;
    
    & > ${Button} {
        padding: 0.25rem;
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) or (max-aspect-ratio: 1) {
        top: 0;
        height: 100%;
    }

`;

const SignupBox = () => {
    const theme = useTheme();
    const { height, width } = useWindowSize();
    const largeBreakpoint = remToPx(theme.breakpoints.large.slice(0, -3));
    const aspectRatio = width / height;

    return (
        <SignupBoxInner $glass>
            {width > largeBreakpoint && aspectRatio > 1 &&
                <img src={bikerOnRouteImg} alt='Clipart of a biker on a route' />
            }
            <SignupContainer>
                <Text $color={theme.colors.primary} $heading>NOT ON TRAILTRACER <Sec>YET</Sec>?</Text>
                {width > largeBreakpoint && aspectRatio > 1 && (
                    <Text $color={theme.colors.text}>
                        You can still explore everything the community has created.
                        But you will need an account to interact with them.
                    </Text>
                )}
                <Button $bgColor={theme.colors.secondary}>
                    <Text $color={theme.colors.text} $heading>SIGN UP</Text>
                </Button>
            </SignupContainer>
        </SignupBoxInner>
    );
};

export default SignupBox;