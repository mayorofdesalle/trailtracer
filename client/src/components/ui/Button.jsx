import styled from 'styled-components';

import { scaleOnHover, glassMorph } from '../misc/mixins';

/**
 * Button
 * @description
 * This is a button component that can be used throughout the application. It is styled to be glassy and responsive.
 **/
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    transition: 200ms ease-in-out;

    ${scaleOnHover}
    ${glassMorph}
`;

export default Button;