import { useContext } from 'react';
import styled from 'styled-components';

import Button from '@components/ui/Button';
import Container from '@components/ui/Container';
import Icon from '@components/ui/Icon';
import PageContext from '@context/PageContext';

const AuthButtonsInner = styled(Container)`
    justify-content: space-around;
    height: fit-content;

    & > ${Button} {
        --size: clamp(2.5rem, max(3dvw, 3dvh), 5rem);
        width: var(--size);
        height: var(--size);

        & > svg {
            height: 100%;
            width: 100%;
        }
    }
`;

/**
 * AuthButtons
 * @description
 * Styled container that wraps the auth buttons.
 **/
const AuthButtons = () => {
    const theme = useContext(PageContext).theme;
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