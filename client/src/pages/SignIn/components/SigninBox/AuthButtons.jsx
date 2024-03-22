import styled, { useTheme } from 'styled-components';

import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

const AuthButtonsInner = styled(Container)`
    justify-content: space-around;
    height: fit-content;
`;

const AuthButtons = () => {
    const theme = useTheme();
    const animColors = [theme.colors.background, theme.colors.secondary];

    return (
        <AuthButtonsInner>
            <Button $bgColor={theme.colors.background} $animColors={animColors}>
                <Icon name='google-fill' color={theme.colors.primary} />
            </Button>
            <Button $bgColor={theme.colors.background} $animColors={animColors}>
                <Icon name='facebook-fill' color={theme.colors.primary} />
            </Button>
            <Button $bgColor={theme.colors.background} $animColors={animColors}>
                <Icon name='twitter-fill' color={theme.colors.primary} />
            </Button>
        </AuthButtonsInner>
    );
};

export default AuthButtons;