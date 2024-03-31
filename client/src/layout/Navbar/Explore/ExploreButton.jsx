import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { css, useTheme } from 'styled-components';

import Icon from '@/components/ui/Icon';
import TextInput from '@/components/ui/Input/TextInput';
import NavbarButton from '@/layout/Navbar/NavbarButton';

import ExploreDropdown from './ExploreDropdown';

const ExploreButtonInner = styled(TextInput)`
    width: clamp(3rem, min(6dvw, 6dvh), 12rem);
    height: clamp(1.5rem, min(3dvw, 3dvh), 3rem);
    background-color: ${({ theme }) => theme.colors.primary};
    caret-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};

    &:focus, &:active {
        transition: none;
        ${({ $isOpen }) => $isOpen && css`width: 100%;`};
    }

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
    const dropdown = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, setFocus } = useForm({
        defaultValues: useMemo(() => { return { text: '' }; }, [])
    });

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log(data, isSubmitting);
    };

    const onBlur = useCallback((e) => {
        if (e.relatedTarget !== dropdown.current) setIsOpen(false);
        else setFocus('text');
    }, [setFocus]);

    const onClick = useCallback(() => { setIsOpen(true); }, []);

    useEffect(() => {
        isOpen && setFocus('text');
    }, [isOpen, setFocus]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ExploreButtonInner as={!isOpen && NavbarButton} $isOpen={isOpen}
                    onClick={onClick} onBlur={onBlur}
                    {...(!isOpen ? { icon: 'menu-search' } : { register: register, type: 'text', label: t('forms.search'), placeholder: t('forms.search'), autoComplete: 'on' })}>
                    <Icon id='text' name='search-line' color={theme.colors.background} />
                </ExploreButtonInner>
            </form>
            {isOpen && <ExploreDropdown ref={dropdown} />}
        </>
    );
};

export default ExploreButton;