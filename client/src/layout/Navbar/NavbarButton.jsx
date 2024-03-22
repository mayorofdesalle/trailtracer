import { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useHover from '@hooks/useHover';
import Icon from '@components/ui/Icon';
import Button from '@components/ui/Button';

const NavButtonInner = styled(Button)`
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

const NavButton = ({ icon, onClick }) => {
    const button = useRef();
    const isHovered = useHover(button);

    return (
        <NavButtonInner ref={button} onClick={onClick}>
            <Icon name={isHovered ? `${icon}-fill` : `${icon}-line`} />
        </NavButtonInner>
    );
};

NavButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default NavButton;