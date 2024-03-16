import { useNavigate } from 'react-router-dom';

import Nav from './Nav';
import SignInButton from './SignInButton';
import NavbarLogo from './NavbarLogo';

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
            <SignInButton onClick={() => navigate('/signin')} />
        </Nav>
    );
};

export default Navbar;
