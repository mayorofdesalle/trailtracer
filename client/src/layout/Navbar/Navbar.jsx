import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from '@components/ui/Container';

import Nav from './Nav';
import ThemeButton from './ThemeButton';
import LanguageButton from './Language/LanguageButton';
import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';

const ButtonContainer = styled(Container)`
    width: fit-content;
    
    & > * {
        margin-left: clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem);
    }

    & > *:first-child {
        margin-left: 0;
    }
`;

/**
 * Navbar
 * @description
 * Navbar to navigate the site.
 **/
const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Nav>
            <NavbarLogo onClick={() => navigate('/')} aria-label='Return to homepage' />
            <ButtonContainer>
                <LanguageButton />
                <ThemeButton />
                <NavbarButton onClick={() => navigate('/signin')} icon='user' />
            </ButtonContainer>
        </Nav>
    );
};

export default Navbar;
