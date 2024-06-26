import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Container, Icon } from '@components/ui';

const AuthButtonsInner = styled(Container)`
    justify-content: space-around;
    height: fit-content;

    & > ${Button} {
        --size: clamp(2rem, max(4dvw, 4dvh), 4rem);
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
const AuthButtons = ({ bgColor, color, animColors, ...props }) => {
    return (
        <AuthButtonsInner {...props}>
            <Button $bgColor={bgColor} $color={color} $animColors={animColors}>
                <Icon name='google-fill' />
            </Button>
            <Button $bgColor={bgColor} $color={color} $animColors={animColors}>
                <Icon name='facebook-fill' />
            </Button>
            <Button $bgColor={bgColor} $color={color} $animColors={animColors}>
                <Icon name='twitter-fill' />
            </Button>
        </AuthButtonsInner>
    );
};

AuthButtons.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    animColors: PropTypes.array
};

export default AuthButtons;