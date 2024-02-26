import { createGlobalStyle } from 'styled-components';

/**
 * GlobalStyle
 * @description
 * This is a set of CSS declarations that are applied to the entire app.
 **/
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
`;

export default GlobalStyle;
