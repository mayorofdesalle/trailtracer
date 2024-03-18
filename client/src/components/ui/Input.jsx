import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import Icon from './Icon';

const IconContainer = styled(Container)`
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryTransparent};
    cursor: pointer;
`;

const HideButton = styled.button`
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    caret-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-left: none;
    border-right: none;
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
    padding: 0.5rem 0.5rem 0.5rem ${({ $hasIcon }) => $hasIcon ? 'calc(clamp(1.5rem, min(4dvw, 4dvh), 2.75rem) + 0.75rem)' : '0.5rem'};
    font-size: clamp(0.825rem, min(2dvw, 2dvh), 2.5625rem);
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    transition: 200ms ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textTransparent};
        transition: inherit;
    }

    &:focus {
        border-radius: max(0.25dvh, 0.25dvw, 0.25rem);
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

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
        caret-color: ${({ theme }) => theme.colors.primary};
        transition: background-color 999999s ease-in-out 0s;
    }
`;

const InputContainer = styled(Container)`
    ${({ $hasIcon, $isHideable }) => {
        return `transform: translateX(calc(-1/2 * ${($hasIcon ? 1 : 0) + ($isHideable ? -1 : 0)} * clamp(1rem, min(2.5dvw, 2.5dvh), 3rem)));
                    width: calc(100% + ${($hasIcon ? 1 : 0) + ($isHideable ? 1 : 0)} * clamp(1rem, min(2.5dvw, 2.5dvh), 3rem));`;
    }};

    & > ${IconContainer} {
        transform: translateX(calc(clamp(1.5rem, min(4dvw, 4dvh), 2.75rem)));
    }

    & > ${HideButton} {
        transform: translateX(calc(-1 * clamp(1.5rem, min(4dvw, 4dvh), 2.75rem)));
    }
`;

const Input = ({ icon, iconColor, eyeColor, type, ...props }) => {
    const input = useRef();
    const hasIcon = icon && iconColor;
    const isHideable = type === 'password';
    const [isHidden, setIsHidden] = useState(isHideable);

    const focus = useCallback(() => {
        setTimeout(() => { // Chrome has a bug that fires focus event before the caret is moved to the end of the input
            input.current.selectionStart = input.current.selectionEnd = input.current.value.length;
            input.current.focus();
        }, 0);
    }, []);

    const toggleVisibility = useCallback((e) => {
        e.cancelable && e.preventDefault();
        setIsHidden((isHidden) => !isHidden);
        if (input.current !== document.activeElement) focus();
    }, [focus]);

    return (
        <InputContainer $hasIcon={hasIcon} $isHideable={isHideable}>
            {hasIcon &&
                <IconContainer onClick={focus}>
                    <Icon name={icon} color={iconColor} />
                </IconContainer>}

            <InputInner ref={input} type={isHidden ? 'password' : 'text'} {...props} $hasIcon={icon} />

            {type === 'password' &&
                <HideButton type='button' onMouseDown={(e) => toggleVisibility(e)}>
                    <Icon name={isHidden ? 'eye-closed-fill' : 'eye-fill'} color={eyeColor} />
                </HideButton>}
        </InputContainer>
    );
};

Input.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    type: PropTypes.string.isRequired,
    eyeColor: PropTypes.string
};

export default Input;