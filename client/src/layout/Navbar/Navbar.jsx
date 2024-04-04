import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { glassMorph } from '@components/mixins';
import { Container } from '@components/ui';

import ExploreButton from './explore/ExploreButton';
import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';
import SettingsButton from './settings/SettingsButton';

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

const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: clamp(0.75rem, min(2dvw, 2dvh), 2.5rem);
    z-index: 999;
    ${glassMorph}
    border: none;
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
                <ExploreButton />
                <NavbarButton onClick={navigateProfile} icon='user' />
                <SettingsButton />
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
