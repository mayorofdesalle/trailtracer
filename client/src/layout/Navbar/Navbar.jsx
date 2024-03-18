import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from '@components/ui/Container';

import Nav from './Nav';
import SignInButton from './Buttons/SignInButton';
import ThemeButton from './Buttons/ThemeButton';
import NavbarLogo from './NavbarLogo';

const ButtonContainer = styled(Container)`
    width: fit-content;
    
    & > * {
        margin-left: clamp(0.5rem, min(2dvw, 2dvh), 2rem);
    }

    & > *:first-child {
        margin-left: 0;
    }
`;

/**
 * Navbar
 * @description
 * This is a simple navbar that is used to navigate the site.
 **/
const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Nav>
            <NavbarLogo onClick={() => navigate('/')} aria-label='Return to homepage' />
            <ButtonContainer>
                <ThemeButton />
                <SignInButton onClick={() => navigate('/signin')} />
            </ButtonContainer>
        </Nav>
    );
};

export default Navbar;
