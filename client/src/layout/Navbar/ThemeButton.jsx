import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@features/themeSlice';

import NavbarButton from './NavbarButton';

/**
 * ThemeButton
 * @description
 * Button to toggle between light and dark themes.
 */
const ThemeButton = () => {
    const dispatch = useDispatch();
    const preference = useSelector((state) => state.theme.preference);

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', preference ? '#000000' : '#EBFFF5');
    }, [preference]);

    const toggleTheme = useCallback(() => {
        dispatch(toggle());
    }, [dispatch]);

    return (
        <NavbarButton onClick={toggleTheme} icon={preference ? 'moon' : 'sun'} />
    );
};

export default ThemeButton;