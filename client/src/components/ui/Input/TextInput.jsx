import PropTypes from 'prop-types';
import { Children, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import Container from '../Container';
import Icon from '../Icon';
import RTooltip from '../RTooltip';
import Text from '../Text';
import inputRules from './inputRules';

const TextInputInner = styled.input`
    width: 100%;
    height: fit-content;
    color: ${({ theme }) => theme.colors.text};
    caret-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border-top: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
    padding:
    clamp(0.5rem, min(1dvw, 1dvh), 2rem)
    ${({ $isPassword }) => $isPassword ? 'calc(clamp(1rem, min(2.5dvw, 2.5dvh), 3rem) + 1rem)' : '0.5rem'}
    clamp(0.5rem, min(1dvw, 1dvh), 2rem)
    ${({ $hasIcon }) => $hasIcon ? 'calc(clamp(1rem, min(2.5dvw, 2.5dvh), 3rem) + 1rem)' : '0.5rem'};
    font-size: clamp(0.825rem, min(2dvw, 2dvh), 2.5rem);
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    transition: 200ms ease-in-out;

    &:focus {
        border-radius: max(0.25dvh, 0.25dvw, 0.25rem);
        border-color: ${({ theme }) => theme.colors.secondary};
        border-top-color: ${({ theme }) => theme.colors.secondaryTransparent};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        border-top-color: ${({ theme }) => theme.colors.background};
        border-bottom-color: ${({ theme }) => theme.colors.background};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
        caret-color: ${({ theme }) => theme.colors.primary};
        transition: background-color 999999s ease-in-out 0s;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.primaryTransparent};
    }
`;

const TextInputContainer = styled(Container)`
    position: relative;

    & > svg {
        position: absolute;
        left: 0.5rem;
    }

    & > ${Container} {
        height: 100%;
        width: fit-content;
        position: absolute;
        right: 0.5rem;
        cursor: pointer;
    }
`;

const HideIconContainer = styled(Container)`
    position: absolute;
    right: 0.5rem;
`;

/**
 * TextInput
 * @param {node} children - The children of the component
 * @param {function} register - The register function of the component
 * @param {object} error - The error object of the component
 * @param {string} type - The type of the input
 * @param {boolean} watch - Function to watch the input
 * @param {boolean} required - Whether the input is required
 * @param {boolean} disabled - Whether the input is disabled
 * @param {boolean} validate - Whether the input should be validated
 * @param {object} props - The rest of the native props of the component
 * @description
 * Default styled text input component (for email, password, etc.).
 */
const TextInput = ({ children, register, error, type, label, placeholder, watch, required, disabled, validate, ...props }) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isPassword = useMemo(() => type === 'password', [type]);
    const watchPassword = isPassword && watch('password');
    const hasIcon = useMemo(() => Children.toArray(children).map(child => child.type.name === 'Icon').length > 0, [children]);
    const [isHidden, setIsHidden] = useState(isPassword);

    const toggleHidden = useCallback(() => setIsHidden((isHidden) => !isHidden), []);

    return (
        <TextInputContainer $inputIconId={type}>
            {error &&
                <RTooltip id={type} place='left' openEvents={{ focus: true }} closeEvents={{ blur: true }}>
                    <Text>{t(error.message)}</Text>
                </RTooltip>}
            <TextInputInner type={isHidden ? 'password' : 'text'} name={type} label={label || t(`forms.${type}`)} placeholder={placeholder || t(`forms.${type}`)}
                data-tooltip-id={type} $hasIcon={hasIcon} $isPassword={isPassword}
                {...register(type, inputRules(type, required, disabled, validate))} {...props} />
            {children}
            {watchPassword &&
                <HideIconContainer onClick={toggleHidden}>
                    <Icon name={isHidden ? 'eye-fill' : 'eye-off-fill'} color={theme.colors.primary} />
                </HideIconContainer>}
        </TextInputContainer>
    );
};

TextInput.propTypes = {
    children: PropTypes.node,
    register: PropTypes.func,
    error: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    watch: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.bool
};

export default TextInput;

