import { useRef } from 'react';
import styled from 'styled-components';

import useHover from '@hooks/useHover';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

/**
 * ButtonBase
 * @description
 * This component creates the base of the SignInButton.
 **/
const ButtonBase = styled(Button)`
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    padding: 0 1rem;
    backdrop-filter: none;

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    & > svg {
        transition: 10s;
    }
`;

const SignInButton = () => {
    const signInButton = useRef();
    const isHovered = useHover(signInButton);

    return (
        <ButtonBase ref={signInButton}>
            <Icon name={isHovered ? 'user-fill' : 'user-line'} width={1.5} height={1.5} />
        </ButtonBase>
    );
};

export default SignInButton;