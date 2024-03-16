import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import Icon from './Icon';

const IconContainer = styled(Container)`
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryTransparent};
`;

/**
 * InputInner
 * @description
 * This is a styled input component.
 */
const InputInner = styled.input`
    width: 100%;
    height: fit-content;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-left: none;
    border-right: none;
    border-radius: max(0.5svh, 0.5svw, 0.5rem);
    padding: 0.5rem 0.5rem 0.5rem ${({ $hasIcon }) => $hasIcon ? 'calc(clamp(1.5rem, min(3svw, 3svh), 2.75rem) + 0.5rem)' : '0.5rem'};
    font-size: clamp(0.825rem, min(2svw, 2svh), 2.5625rem);
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    transition: 200ms ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textTransparent};
        transition: inherit;
    }

    &:focus {
        border-radius: max(0.25svh, 0.25svw, 0.25rem);
        border-color: ${({ theme }) => theme.colors.secondary};
        border-top-color: ${({ theme }) => theme.colors.secondaryTransparent};

        &::placeholder {
            color: transparent;
        }
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        border: 2px solid ${({ theme }) => theme.colors.background};

        &::placeholder {
            color: ${({ theme }) => theme.colors.backgroundTransparent};
        }
    }
`;

const InputContainer = styled(Container)`
    ${({ $hasIcon }) => {
        return $hasIcon &&
            `transform: translateX(calc(-1/2 * (clamp(1rem, min(2.5svw, 2.5svh), 3rem))));
                 width: calc(100% + clamp(1rem, min(2.5svw, 2.5svh), 3rem));`;
    }};

    & > ${IconContainer} {
        transform: translateX(calc(clamp(1rem, min(2.5svw, 2.5svh), 3rem) + 0.25rem));
    }
    
`;

const Input = ({ icon, iconColor, ...props }) => {
    return (
        <InputContainer $hasIcon={icon}>
            {icon && <IconContainer><Icon name={icon} color={iconColor} /></IconContainer>}
            <InputInner {...props} $hasIcon={icon} />
        </InputContainer>
    );
};

Input.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string
};

export default Input;