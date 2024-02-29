import Nav from './Nav';
import SignInButton from './SignInButton';
import NavbarLogo from './NavbarLogo';

/**
 * Navbar
 * @description
 * This is a simple navbar that is used to navigate the site.
 **/
const Navbar = () => {
    return (
        <Nav>
            <NavbarLogo to={'/'} aria-label="Return to homepage" />
            <SignInButton />
        </Nav>
    );
};

export default Navbar;
