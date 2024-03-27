import { useCallback, useEffect, useRef, useState } from 'react';

import NavbarButton from '../NavbarButton';
import SettingsDropdown from './SettingsDropdown';

/**
 * SettingsButton
 * @description
 * Button to open the settings dropdown.
 **/
const SettingsButton = () => {
    const dropdown = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback((e) => {
        if (isOpen) !(e.relatedTarget?.name === 'settingsButton' || dropdown.current.contains(e.relatedTarget)) && setIsOpen(false);
        else setIsOpen(true);
    }, [isOpen]);

    useEffect(() => { isOpen && dropdown.current.focus(); }, [isOpen]);

    return (
        <>
            <NavbarButton name='settingsButton' icon='equalizer' onClick={toggleDropdown} />
            {isOpen && <SettingsDropdown ref={dropdown} close={toggleDropdown} />}
        </>
    );
};

export default SettingsButton;