import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from '@components/ui/Container';

import Nav from './Nav';
import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';
import SettingsButton from './Settings/SettingsButton';
import ExploreBar from './Explore/ExploreBar';

const NavContainer = styled(Container)`
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-left: clamp(0.75rem, min(2dvw, 2dvh), 2.5rem);
    
    & > * {
        margin-left: inherit;

        &:first-child {
            margin-left: 0;
        }
    }
`;

/**
 * Navbar
 * @description
 * Navbar to navigate the site.
 **/
const Navbar = () => {
    const navigate = useNavigate();
    const navigateHome = useCallback(() => navigate('/'), [navigate]);
    const navigateProfile = useCallback(() => navigate('/signin'), [navigate]);

    return (
        <Nav>
            <NavbarLogo onClick={navigateHome} aria-label='Return to homepage' />
            <NavContainer>
                <ExploreBar />
                <NavbarButton onClick={navigateProfile} icon='user' />
                <SettingsButton />
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
