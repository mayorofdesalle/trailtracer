import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import { darkTheme, lightTheme } from './themes';

/**
 * Theme
 * @description
 * Theme provider that wraps the application.
 */
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
