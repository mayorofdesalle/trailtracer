import Text from '@components/ui/Text';
import Icon from '@components/ui/Icon';

import NavbarHeader from './NavbarHeader';
import SignInButton from './SignInButton';
import NavbarLogo from './NavbarLogo';

import { useRef } from 'react';
import useHover from '@hooks/useHover';

/**
 * Navbar
 * @description
 * This is a simple navbar that is used to navigate the site.
 **/
const Navbar = () => {
    const signInButton = useRef();
    const isHovered = useHover(signInButton);

    return (
        <NavbarHeader>
            <NavbarLogo to={'/'} />
            <SignInButton ref={signInButton}>
                <Icon name={isHovered ? 'user-fill' : 'user-line'} width={1.5} height={1.5} />
                <Text $heading $ratio={0.5}>SIGN IN</Text>
            </SignInButton>
        </NavbarHeader>
    );
};

export default Navbar;
