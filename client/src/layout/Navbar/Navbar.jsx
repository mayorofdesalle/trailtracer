import Text from '@components/ui/Text';
import Icon from '@components/ui/Icon';

import NavbarHeader from './NavbarHeader';
import SignInButton from './SignInButton';
import NavbarLogo from './NavbarLogo';

/**
 * Navbar
 * @description
 * This is a simple navbar that is used to navigate the site.
 **/
const Navbar = () => {
    return (
        <NavbarHeader>
            <NavbarLogo to={'/'} />
            <SignInButton>
                <Icon name='user-fill' size={1} />
                <Text $heading $ratio={0.5}>SIGN IN</Text>
            </SignInButton>
        </NavbarHeader>
    );
};

export default Navbar;
