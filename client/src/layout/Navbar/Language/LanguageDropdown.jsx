import { useCallback, useRef } from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '@components/ui/Container';
import Text from '@components/ui/Text';

const LanguageDropDownInner = styled(Container)`
    position: absolute;
    flex-direction: column;
    height: fit-content;
    width: calc(2 * clamp(3rem, min(6dvw, 6dvh), 12rem) + clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem));
    transform: translate(
        calc(-1/2 * clamp(3rem, min(6dvw, 6dvh), 12rem) - clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem)),
        calc(50% + clamp(1.5rem, min(3dvw, 3dvh), 3rem) / 2 + clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem))
    );
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.background};
`;

const LanguageItem = styled(Container)`
    border-radius: 0;
    height: fit-content;
    padding: calc(clamp(0.7625rem, min(2dvw, 2dvh), 2.5625rem) / 4);
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, $current }) => !$current && theme.colors.secondary};
    }

    & > ${Text} {
        color: ${({ theme, $current }) => $current ? theme.colors.secondary : theme.colors.background};
    }
`;

/**
 * LanguageDropDown
 * @param {function} setIsOpen - A function that sets the open state of the dropdown.
 * @description
 * Dropdown to change the language of the application.
 **/
const LanguageDropDown = ({ setIsOpen }) => {
    const dropdown = useRef();
    dropdown.current?.focus();

    const changeLanguage = useCallback((code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <LanguageDropDownInner ref={dropdown} tabIndex='0' onBlur={() => setIsOpen(false)} >
            {
                i18n.supportedLanguages.map((language) => (
                    <LanguageItem key={language.code} $current={i18n.resolvedLanguage === language.code} onClick={() => changeLanguage(language.code)} >
                        <Text>{language.name}</Text>
                    </LanguageItem>
                ))
            }
        </LanguageDropDownInner>
    );
};

LanguageDropDown.propTypes = {
    setIsOpen: PropTypes.func.isRequired
};

export default LanguageDropDown;