import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import { hexToRgba } from '@utils/conversions';

/**
 * Theme
 * @description
 * This is the theme for the application. It contains the colors, fonts, font weights, font sizes, breakpoints, and size names.
 **/
const theme = {
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
		small: '576',
		medium: '992',
		large: '1920',
		xLarge: '2560'
	},
};

const darkTheme = {
	...theme,
	colors: {
		primary: '#EBFFF5',
		primaryTransparent: hexToRgba('#EBFFF5', 0.43),
		secondary: '#EF6F6C',
		secondaryTransparent: hexToRgba('#EF6F6C', 0.43),
		tertiary: '#435049',
		tertiaryTransparent: hexToRgba('#435049', 0.43),
		background: '#000000',
		backgroundTransparent: hexToRgba('#000000', 0.43),
		text: '#FCFFFD',
		textTransparent: hexToRgba('#FCFFFD', 0.77),
	}
};

const lightTheme = {
	...theme,
	colors: {
		primary: '#435049',
		primaryTransparent: hexToRgba('#435049', 0.43),
		secondary: '#EF6F6C',
		secondaryTransparent: hexToRgba('#EF6F6C', 0.43),
		tertiary: '#FCFFFD',
		tertiaryTransparent: hexToRgba('#FCFFFD', 0.43),
		background: '#EBFFF5',
		backgroundTransparent: hexToRgba('#EBFFF5', 0.43),
		text: '#000000',
		textTransparent: hexToRgba('#000000', 0.77),
	}
};

const Theme = ({ children }) => {
	const preference = useSelector((state) => state.theme.preference);

	return (
		<ThemeProvider theme={preference ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Theme;
