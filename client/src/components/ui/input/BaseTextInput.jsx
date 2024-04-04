import styled from 'styled-components';

import Button from '../Button';
import Container from '../Container';

export const BaseTextInput = styled.input`
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
    ${({ $hasRightIcon }) => $hasRightIcon ? 'calc(clamp(1rem, min(2.5dvw, 2.5dvh), 3rem) + 1rem)' : '0.5rem'}
    clamp(0.5rem, min(1dvw, 1dvh), 2rem)
    ${({ $hasLeftIcon }) => $hasLeftIcon ? 'calc(clamp(1rem, min(2.5dvw, 2.5dvh), 3rem) + 1rem)' : '0.5rem'};
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

export const BaseTextInputContainer = styled(Container)`
    position: relative;

    & > svg {
        position: absolute;
        left: 0.5rem;
    }

    & > ${Button} {
        height: 100%;
        width: fit-content;
        padding: 0;
        background-color: transparent;
        animation: none;
        width: fit-content;
        position: absolute;
        right: 0.5rem;
        cursor: pointer;

        &:hover, &:active {
            transform: none;
        }
    }
`;