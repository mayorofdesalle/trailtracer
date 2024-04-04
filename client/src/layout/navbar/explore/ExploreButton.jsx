import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { css, useTheme } from 'styled-components';

import { logger } from '@app';
import Icon from '@components/ui/Icon';
import { TextInput } from '@components/ui/input';
import { FormContext } from '@context';
import NavbarButton from '@layout/navbar/NavbarButton';

import ExploreDropdown from './ExploreDropdown';

const ExploreButtonInner = styled(TextInput)`
    width: clamp(3rem, min(6dvw, 6dvh), 12rem);
    height: clamp(1.5rem, min(3dvw, 3dvh), 3rem);
    background-color: ${({ theme }) => theme.colors.primary};
    caret-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};
    ${({ $isOpen }) => $isOpen && css`width: 100%;`};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.background};
        caret-color: ${({ theme }) => theme.colors.background};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.backgroundTransparent};
    }
`;

/**
 * ExploreButton
 * @description
 * Button that opens a dropdown to explore the site.
 **/
const ExploreButton = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    const { register, handleSubmit, setFocus, watch, setValue } = useForm({
        defaultValues: useMemo(() => { return { query: '' }; }, [])
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        logger.debug(data);
    };

    const dropdown = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const onBlur = useCallback((e) => {
        !(dropdown.current?.contains(e.relatedTarget)
            || Array.from(e.target.parentNode.children).reduce((acc, child) => acc || child.contains(e.relatedTarget), false))
            && setIsOpen(false);
    }, [setFocus]);

    useEffect(() => {
        isOpen && setFocus('query');
    }, [isOpen, setFocus]);

    return (
        <FormContext.Provider value={{ register, setFocus, watch, setValue }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ExploreButtonInner as={!isOpen && NavbarButton} $isOpen={isOpen}
                    {...(!isOpen
                        ? { onClick: () => setIsOpen(true), icon: 'menu-search' }
                        : { onBlur: onBlur, type: 'text', name: 'query', id: 'explore-search-query', placeholder: 'search', clearable: true })}>
                    <Icon name='search-line' color={theme.colors.background} />
                </ExploreButtonInner>
            </form>
            {isOpen && <ExploreDropdown ref={dropdown} close={onBlur} />}
        </FormContext.Provider>
    );
};

export default ExploreButton;