import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import { hexToRgba } from '@utils/conversions';

/**
 * Theme
 * @description
 * This is the theme for the application. It contains the colors, fonts, font weights, font sizes, breakpoints, and size names.
 **/
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
		heading: 'neighbor, sans-serif',
		text: 'niveau-grotesk, sans-serif',
	},

	fontWeights: {
		light: '300',
		regular: '400',
		bold: '700',
		black: '900',
	},

	// Mobile-first
	breakpoints: {
		xSmall: '0',
		small: '24rem',
		medium: '36rem',
		large: '62rem',
		xLarge: '78rem',
		xxLarge: '98rem',
		xxxLarge: '120rem',
		xxxxLarge: '160rem'
	},
};

const Theme = ({ children }) => {
	return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

Theme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Theme;
