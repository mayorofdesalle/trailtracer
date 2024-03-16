import styled, { useTheme, keyframes } from 'styled-components';

import Container from '@components/ui/Container';
import Text, { Undr } from '@components/ui/Text';
import Icon from '@components/ui/Icon';

const orientate = keyframes`
    0% {
        transform: rotate(-90deg);
    }

    25% {
        transform: rotate(0);
    }
`;

const WarningContainer = styled(Container)`
    height: 100svh;
    width: 100svw;
    padding: 10%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};

    & > svg {
        --size: 100%;
        height: var(--size);
        width: var(--size);
        animation: ${orientate} 5s ease-in-out infinite;
    }
`;

const DisplayWarning = () => {
    const theme = useTheme();
    return (
        <WarningContainer>
            <Icon name='phone-fill' color={theme.colors.primary} />
            <Text $heading $color={theme.colors.primary} $ratio={2}>CONTENT IS BEST DISPLAYED IN <Undr>PORTRAIT</Undr> ORIENTATION IN CURRENT RESOLUTION</Text>
        </WarningContainer>
    );
};

export default DisplayWarning;