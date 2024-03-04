import { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';
import { fadeIn } from '@components/misc/anims';

const pages = [{ name: 'Home', id: 0 }, { name: 'Features', id: 1 }, { name: 'Features', id: 2 }, { name: 'Features', id: 3 }];

/**
 * PageDot
 * @description
 * This is a styled container that is used to create a page dot.
 **/
const PageDot = styled(Button)`
    padding: 0;
    height: 0.75svh;
    width: 0.75svh;
    border-radius: 0.125rem;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.textTransparent};
    animation: ${fadeIn} 1s ease-in-out;

    // To incease the hover area
    &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 500%;
        height: 500%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index:-1;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        transform: rotate(90deg) scale(1.5);
    }

    &:active {
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
        <PageDot onClick={() => onClick(page.id)} key={page.id} />
    ));
});

Pagination.propTypes = {
    onClick: PropTypes.func,
};

export default Pagination;