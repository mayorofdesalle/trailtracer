import PropTypes from 'prop-types';
import { useRef } from 'react';
import styled from 'styled-components';

import { Button, Icon } from '@components/ui';
import { useHover } from '@hooks';

const NavbarButtonInner = styled(Button)`
    flex-shrink: 0;
    padding: 0;
    width: clamp(3rem, min(6dvw, 6dvh), 12rem);
    height: clamp(1.5rem, min(3dvw, 3dvh), 3rem);

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    & > svg {
        width: 100%;
        height: 100%;
    }
`;

const NavbarButton = ({ icon, onClick, ...props }) => {
    const button = useRef();
    const isHovered = useHover(button);

    return (
        <NavbarButtonInner ref={button} onClick={onClick} {...props}>
            <Icon name={isHovered ? `${icon}-fill` : `${icon}-line`} />
        </NavbarButtonInner>
    );
};

NavbarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    props: PropTypes.object
};

export default NavbarButton;