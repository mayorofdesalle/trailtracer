import styled from 'styled-components';

import { glassMorph } from '@components/misc/mixins';
import { rotateInFB } from '@components/misc/anims';

/**
 * Pagination
 * @description
 * This is a styled unordered list that is used to contain the page dots.
 **/
const Pagination = styled.ul`
    grid-area: Slider;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-radius: 10px;
    animation: ${rotateInFB} 1s ease-in-out;

    & > .isDragging {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: none;
    }

    & > .isDragging > * {
        fill: ${({ theme }) => theme.colors.backgroundTransparent};
    }

    ${glassMorph}
`;

export default Pagination;