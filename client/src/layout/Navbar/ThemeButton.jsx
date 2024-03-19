import { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@features/themeSlice';
import styled from 'styled-components';

import useHover from '@hooks/useHover';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

/**
 * ThemeButtonInner
 * @description
 * This component creates the base of the ThemeButton.
 **/
const ThemeButtonInner = styled(Button)`
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

const ThemeButton = () => {
    const dispatch = useDispatch();
    const preference = useSelector((state) => state.theme.preference);
    const button = useRef();
    const isHovered = useHover(button);
    const iconSet = preference ? ['moon-fill', 'moon-line'] : ['sun-fill', 'sun-line'];

    const toggleTheme = useCallback(() => {
        dispatch(toggle());
    }, [dispatch]);

    useEffect(() => { // also change meta theme-color
        document.querySelector('meta[name="theme-color"]').setAttribute('content', preference ? '#000000' : '#EBFFF5');
    }, [preference]);

    return (
        <ThemeButtonInner ref={button} onClick={toggleTheme}>
            <Icon name={isHovered ? iconSet[0] : iconSet[1]} />
        </ThemeButtonInner>
    );
};

export default ThemeButton;