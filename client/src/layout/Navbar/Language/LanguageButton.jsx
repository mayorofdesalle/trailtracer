import { useState, useCallback } from 'react';

import NavbarButton from '../NavbarButton';
import LanguageDropDown from './LanguageDropDown';

/**
 * LanguageButton
 * @description
 * Button used to toggle the language dropdown and select a language.
 **/
const LanguageButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    return (
        <>
            <NavbarButton onClick={toggleDropdown} icon={'translate'} />
            {isOpen && <LanguageDropDown setIsOpen={setIsOpen} />}
        </>
    );
};

export default LanguageButton;