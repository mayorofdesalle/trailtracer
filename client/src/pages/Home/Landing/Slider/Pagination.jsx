import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '@components/ui';

const pages = [{ name: 'Home', id: 0 }, { name: 'Features', id: 1 }, { name: 'Features', id: 2 }, { name: 'Features', id: 3 }];

const PageDot = styled(Button)`
    position: relative;
    padding: 0;
    height: 1dvh;
    width: 0.75dvh;
    border-radius: max(0.125dvh, 0.125dvw, 0.125rem);
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
        transform: scale(1.5);
    }

    &:active {
        border-radius: max(0.125dvh, 0.125dvw, 0.125rem);
        transform: scale(1);
    }
`;

/**
 * Pagination
 * @description
 * Dots that represent the pages in the slider.
 **/
const Pagination = ({ onClick }) => {
    return pages.map((page) => (
        <PageDot onClick={() => onClick(page.id)} key={page.id} $animDelay={page.id} />
    ));
};

Pagination.propTypes = {
    onClick: PropTypes.func,
};

export default Pagination;