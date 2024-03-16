import styled from 'styled-components';

import { scaleOnHover } from '../misc/mixins';

/**
 * Button
 * @description
 * This is a button component that can be used throughout the application. It is styled to be glassy and responsive.
 **/
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: max(0.5svh, 0.5svw, 0.5rem);
    padding: 1rem;
    background-color: ${({ theme, $bgColor }) => $bgColor || theme.colors.primary};
    color: ${({ theme, $color }) => $color || theme.colors.background};
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    transition: 200ms ease-in-out;

    ${scaleOnHover}

    &:hover {
        border-radius: max(0.25svh, 0.25svw, 0.25rem);
    }
`;

export default Button;