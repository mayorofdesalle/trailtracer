import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';

const pages = [{ name: 'Home', id: 0 }, { name: 'Features', id: 1 }, { name: 'Features', id: 2 }, { name: 'Features', id: 3 }];

const shine = (shineColor) => keyframes`
    50% {
        background-color: ${shineColor};
        transform: rotate(90deg) scale(1.5);
    }
    100% {
        transform: rotate(135deg) scale(1);
    }
`;

const appear = keyframes`
    50% {
        border-radius: max(0.5svh, 0.5svw, 0.5rem);
        transform: rotate(270deg) translate(50%, -50%);
        width: 300%;
        height: 300%;
        opacity: 1;
    }
`;

/**
 * PageDot
 * @description
 * This is a styled container that is used to create a page dot.
 **/
const PageDot = styled(Button)`
    padding: 0;
    height: 0.75svh;
    width: 0.75svh;
    border-radius: max(0.125svh, 0.125svw, 0.125rem);
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.textTransparent};
    animation: ${({ theme }) => shine(theme.colors.text)} 500ms ease-in-out;
    animation-delay: ${({ $animDelay }) => 2 + $animDelay / 4}s;

    // To incease the hover area
    &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        width: 500%;
        height: 500%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0;
        animation: ${appear} 500ms ease-in-out;
        animation-delay: ${({ $animDelay }) => 1.9 + $animDelay / 4}s;
    }

    &:hover {
        border-radius: max(0.0625svh, 0.0625svw, 0.0625rem);
        background-color: ${({ theme }) => theme.colors.text};
        transform: rotate(90deg) scale(3);
    }

    &:active {
        border-radius: max(0.125svh, 0.125svw, 0.125rem);
        transform: rotate(135deg) scale(1);
    }
`;

/**
 * Pagination
 * @description
 * This is a function component that is used to contain all the page dots.
 **/
const Pagination = memo(({ onClick }) => {
    return pages.map((page) => (
        <PageDot onClick={() => onClick(page.id)} key={page.id} $animDelay={page.id} />
    ));
});

Pagination.propTypes = {
    onClick: PropTypes.func,
};

export default Pagination;