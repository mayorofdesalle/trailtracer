import styled, { useTheme, keyframes } from 'styled-components';

import Container from '@components/ui/Container';
import Text, { Prim } from '@components/ui/Text';
import Icon from '@components/ui/Icon';

const orientate = (themeColors) => keyframes`
    0%, 25% {
        transform: rotate(-90deg);
        fill: ${themeColors.secondary};
    }

    50% {
        transform: rotate(0);
        fill: ${themeColors.primary};
    }
`;

const WarningContainer = styled(Container)`
    height: 100dvh;
    width: 100dvw;
    padding: 10%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};

    & > svg {
        --size: 100%;
        height: var(--size);
        width: var(--size);
        animation: ${({ theme }) => orientate(theme.colors)} 2s ease-in-out infinite alternate;
    }
`;

const DisplayWarning = () => {
    const theme = useTheme();
    return (
        <WarningContainer>
            <Icon name='phone-fill' color={theme.colors.primary} />
            <Text $heading $color={theme.colors.secondary} >CONTENT IS BEST DISPLAYED IN <Prim>PORTRAIT</Prim> ORIENTATION IN CURRENT RESOLUTION</Text>
        </WarningContainer>
    );
};

export default DisplayWarning;