import Select from 'react-select';
import styled from 'styled-components';

/**
 * RSelect
 * @description
 * Styled select component from the react-select library.
 * @param {string} $color - The color of the text.
 * @param {string} $bgColor - The background color of the select.
 * @param {object} props - The rest of the native props of the component.
 **/
const RSelect = styled(Select).attrs({ classNamePrefix: 'Select', unstyled: true })`
    font-size: clamp(0.825rem, min(2dvw, 2dvh), 2.5rem);
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme, $color }) => $color || theme.colors.text};
    height: fit-content;

    .Select__control, .Select__menu {
        border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
        background-color: ${({ theme, $bgColor }) => $bgColor || theme.colors.background};
        border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
        overflow: hidden;
    }

    .Select__control--is-focused, .Select__control--is-selected{
        border: 2px solid ${({ theme }) => theme.colors.primary};
        box-shadow: none;

        &:hover {
            border: 2px solid ${({ theme }) => theme.colors.primary};
            box-shadow: none;
        }
    }
    
    .Select__indicator {
        padding: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);
        cursor: pointer;
    }

    .Select__indicator-separator {
        width: 2px;
        background-color: ${({ theme }) => theme.colors.primaryTransparent};
    }

    .Select__input-container {
        border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
        padding: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);
        cursor: text;
    }

    .Select__option {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        padding: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .Select__single-value {
        color: ${({ theme }) => theme.colors.primary};
        padding: clamp(0.125rem, min(0.5dvw, 0.5dvh), 0.5rem);
    }
`;

export default RSelect;