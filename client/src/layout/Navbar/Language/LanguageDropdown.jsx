import { useCallback, useEffect, useRef } from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { supportedLanguages } from '@app/i18n';
import useHover from '@hooks/useHover';
import Container from '@components/ui/Container';
import Text from '@components/ui/Text';

const LanguageDropDownInner = styled(Container)`
    position: absolute;
    flex-direction: column;
    height: fit-content;
    width: calc(6rem + clamp(0.5rem, min(2dvw, 2dvh), 2rem));
    transform: translate(
        calc(-1.5rem - clamp(0.5rem, min(2dvw, 2dvh), 2rem)),
        calc(50% + clamp(1.5rem, min(3dvw, 3dvh), 2rem) / 2 + clamp(0.5rem, min(2dvw, 2dvh), 2rem))
    );
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.background};
`;

const LanguageItem = styled(Container)`
    border-radius: 0;
    height: clamp(1.5rem, min(3dvw, 3dvh), 2rem);
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, $current }) => !$current && theme.colors.secondary};
    }

    & > ${Text} {
        color: ${({ theme, $current }) => $current ? theme.colors.secondary : theme.colors.background};
    }
`;

const LanguageDropDown = ({ setIsOpen }) => {
    const dropdown = useRef();
    const isHovered = useHover(dropdown);
    const hoveredOnce = useRef(false);

    useEffect(() => {
        if (isHovered && !hoveredOnce.current) hoveredOnce.current = true;
        !isHovered && hoveredOnce.current && setIsOpen(false);
    }, [isHovered, setIsOpen]);

    const changeLanguage = useCallback((code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <LanguageDropDownInner ref={dropdown}>
            {supportedLanguages.map((language) => (
                <LanguageItem key={language.code} $current={i18n.language === language.code} onClick={() => changeLanguage(language.code)} >
                    <Text>{language.name}</Text>
                </LanguageItem>
            ))}
        </LanguageDropDownInner>
    );
};

LanguageDropDown.propTypes = {
    setIsOpen: PropTypes.func.isRequired
};

export default LanguageDropDown;