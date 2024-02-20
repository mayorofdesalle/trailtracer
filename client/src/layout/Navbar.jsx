import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import Container from '../components/ui/defaults/Container';
import Button from '../components/ui/defaults/Button';
import { RiUser4Line } from 'react-icons/ri';
import { hoverScaling, blurryBackground } from '../components/misc/Mixins';

const NavbarHeader = styled.header`
    width: 100%;
    z-index: 9999;
`;

const NavbarMain = styled(Container)`
    position: fixed;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: calc(100svw - 2rem - 4px);
    top: calc(1rem + 2px);
    left: calc(1rem + 2px);
    padding: 2rem;

    ${blurryBackground}
`;

const NavbarLogo = styled(Link)`
    display: inline-block;
    height: 1.5rem;
    width: 6.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-mask-image: url(${logoImg});
    mask-image: url(${logoImg});
    mask-size: 6.5rem;
    mask-repeat: no-repeat;
    transition: 200ms ease-in-out;

    ${hoverScaling}

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const LoginButton = styled(Button)`
    text-align: center;
    vertical-align: center;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    height: 1.5rem;
    width: 6rem;
    padding: 0.7rem 0.5rem 0.5rem 2rem;
    backdrop-filter: none;
    
    & > * {
        position: absolute;
        transform: translate(-2.5rem, -0.1rem);
        stroke-width: 1px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Navbar = () => {
    return (
        <NavbarHeader id='navigation-bar'>
            <NavbarMain>
                <NavbarLogo to={'/'} />
                <LoginButton><RiUser4Line />SIGN IN</LoginButton>
            </NavbarMain>
        </NavbarHeader>
    );
};

export default Navbar;