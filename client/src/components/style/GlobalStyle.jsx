import { createGlobalStyle } from 'styled-components';

/**
 * GlobalStyle
 * @description
 * Style applied to the entire application.
 **/
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.background};
        scrollbar-width: thin;
    }

    a {
        color: ${({ theme }) => theme.colors.link};

        &:visited {
            color: ${({ theme }) => theme.colors.linkVisited};
        }
    }
`;

export default GlobalStyle;
