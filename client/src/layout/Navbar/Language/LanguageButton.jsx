import { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import useHover from '@hooks/useHover';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

import LanguageDropDown from './LanguageDropDown';

/**
 * LanguageButtonInner
 * @description
 * This component creates the base of the LanguageButton.
 **/
const LanguageButtonInner = styled(Button)`
    padding: 0;
    width: 3rem;
    height: clamp(1.5rem, min(3dvw, 3dvh), 2rem);

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    & > svg {
        width: 100%;
        height: 100%;
    }
`;

const LanguageButton = () => {
    const button = useRef();
    const isHovered = useHover(button);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    useEffect(() => {
        if (document.activeElement !== button.current) setIsOpen(false);
    }, []);

    return (
        <>
            <LanguageButtonInner ref={button} onClick={toggleDropdown} >
                <Icon name={isHovered ? 'earth-fill' : 'earth-line'} />
            </LanguageButtonInner>
            {isOpen && <LanguageDropDown setIsOpen={setIsOpen} />}
        </>
    );
};

export default LanguageButton;