import { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useHover from '@hooks/useHover';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

/**
 * SignInButtonInner
 * @description
 * This component creates the base of the SignInButton.
 **/
const SignInButtonInner = styled(Button)`
    padding: 0;
    width: 3rem;
    height: clamp(1.5rem, min(3dvw, 3dvh), 2rem);

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    & > svg {
        width: 100%;
        height: 100%;
    }
`;

const SignInButton = ({ onClick }) => {
    const button = useRef();
    const isHovered = useHover(button);

    return (
        <SignInButtonInner ref={button} onClick={onClick}>
            <Icon name={isHovered ? 'user-fill' : 'user-line'} />
        </SignInButtonInner>
    );
};

SignInButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SignInButton;