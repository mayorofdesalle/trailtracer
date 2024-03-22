import { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';

const pages = [{ name: 'Home', id: 0 }, { name: 'Features', id: 1 }, { name: 'Features', id: 2 }, { name: 'Features', id: 3 }];

/**
 * PageDot
 * @description
 * This is a styled container that is used to create a page dot.
 **/
const PageDot = styled(Button)`
    padding: 0;
    height: 1dvh;
    width: 0.75dvh;
    border-radius: max(0.125dvh, 0.125dvw, 0.125rem);
    transform: rotate(-360deg);
    background-color: ${({ theme }) => theme.colors.textTransparent};

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
    }

    &:hover {
        border-radius: max(0.0625dvh, 0.0625dvw, 0.0625rem);
        background-color: ${({ theme }) => theme.colors.text};
        transform: rotate(360deg) scale(1.5);
    }

    &:active {
        border-radius: max(0.125dvh, 0.125dvw, 0.125rem);
        transform: scale(1);
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