import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';
import { hexToRgba } from '../../utils/colors';

const theme = {
    colors: {
        primary: '#EBFFF5',
        primaryTransparent: hexToRgba('#EBFFF5', 0.43),
        secondary: '#EF6F6C',
        secondaryTransparent: hexToRgba('#EF6F6C', 0.43),
        background: '#000000',
        backgroundTransparent: hexToRgba('#000000', 0.43),
        text: '#FCFFFD',
        textTransparent: hexToRgba('#FCFFFD', 0.77),
    },

    fonts: {
        heading: 'neighbor',
        paragraph: 'new-order'
    },

    fontSizes: {
        xSmall: '0.75rem',
        small: '1rem',
        medium: '1.25rem',
        large: '2rem',
        xLarge: '3rem',
    },

    fontWeights: {
        light: '300',
        regular: '400',
        bold: '700',
        xBold: '900'
    },

    breakpoints: {
        xSmall: '0px',
        small: '600px',
        medium: '900px',
        large: '1200px',
        xLarge: '1536px'
    }
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

Theme.propTypes = {
    children: PropTypes.node.isRequired
};

export default Theme;