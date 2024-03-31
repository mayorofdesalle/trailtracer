import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@components/ui/Button';
import Container from '@components/ui/Container';
import Icon from '@components/ui/Icon';

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
const AuthButtons = ({ bgColor, color, animColors }) => {
    return (
        <AuthButtonsInner>
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