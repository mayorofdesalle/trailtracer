import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

import { Button, Container, Icon, Text } from '@components/ui';
import { toggle } from '@features/themeSlice';

const ThemeToggleContainer = styled(Container)`
    height: fit-content;
    padding: 0;
    justify-content: space-between;
`;

const ToggleBackground = styled(Container)`
    width: clamp(6rem, min(12dvw, 12dvh), 24rem);
    height: clamp(1rem, min(2dvw, 2dvh), 2rem);
    background-color: ${({ theme }) => theme.colors.primary};

    & > ${Button} {
        position: absolute;
        padding: clamp(0.5rem, min(1dvw, 1dvh), 2rem);
        transform: translateX(${({ $preference }) => $preference ? '-100%' : '100%'});
        background-color: ${({ theme }) => theme.colors.background};
        border: 2px solid ${({ theme }) => theme.colors.primaryTransparent};

        &:hover, &:active {
            border-color: ${({ theme }) => theme.colors.backgroundTransparent};
        }
    }
`;

/**
 * ThemeToggle
 * @description
 * Toggle to switch between light and dark themes.
 **/
const ThemeToggle = (props) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const preference = useSelector((state) => state.theme.preference);

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', preference ? '#000000' : '#FCFFFD');
    }, [preference]);

    const onClick = useCallback(() => dispatch(toggle()), [dispatch]);

    return (
        <ThemeToggleContainer {...props}>
            <Text $heading $ratio={0.5}>{t('forms.theme')}</Text>
            <ToggleBackground $preference={preference}>
                <Button onClick={onClick} role='switch' aria-checked={preference}>
                    <Icon name={preference ? 'moon-fill' : 'sun-fill'} color={theme.colors.primary} />
                </Button>
            </ToggleBackground>
        </ThemeToggleContainer>
    );
};

export default ThemeToggle;