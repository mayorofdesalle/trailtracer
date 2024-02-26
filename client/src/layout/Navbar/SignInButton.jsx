import styled from 'styled-components';

import Button from '@components/ui/Button';

/**
 * SignInButton
 * @description
 * This is a styled button that is used to sign in.
 **/
const SignInButton = styled(Button)`
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    height: 1.5rem;
    width: 6rem;
    padding: 0 0.25rem 0 0;
    backdrop-filter: none;

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export default SignInButton;