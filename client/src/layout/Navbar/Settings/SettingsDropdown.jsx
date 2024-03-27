import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';

import Dropdown from '@components/ui/Dropdown';

import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const SettingsDropdownInner = styled(Dropdown)`
    height: clamp(7.5rem, min(16dvw, 16dvh), 29rem);
    width: clamp(10.5rem, min(22dvw, 22dvh), 41rem);
    top: clamp(2.25rem, min(5dvw, 5dvh), 5.5rem);
    right: 0;
    padding: clamp(1rem, min(2dvw, 2dvh), 4rem) clamp(1rem, min(2dvw, 2dvh), 4rem) clamp(0.5rem, min(1dvw, 1dvh), 2rem);
    justify-content: space-around;
    overflow: visible;
`;

/**
 * SettingsDropdown
 * @param {function} close - The function to close the dropdown.
 * @param {object} props - The rest of the native props of the component.
 * @description
 * Dropdown to display the settings.
 **/
const SettingsDropdown = forwardRef(function SettingsDropdown({ close, ...props }, ref) {

    return (
        <SettingsDropdownInner ref={ref} onBlur={close} {...props}>
            <ThemeToggle />
            <LanguageSelector />
        </SettingsDropdownInner>
    );
});

SettingsDropdown.propTypes = {
    close: PropTypes.func.isRequired
};

export default SettingsDropdown;