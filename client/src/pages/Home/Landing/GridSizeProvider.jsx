import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import BentoBox from '@components/ui/Bento/BentoBox';
import { set } from '@features/gridSizeProviderSlice';
import useResize from '@hooks/useResize';
import styled from 'styled-components';

const GridSizeProviderInner = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea};
    box-shadow: none;
`;

/**
 * GridSizeProvider
 * @param {string} gridArea
 * @description
 * Component that provides the calculated size of the given grid area.
 */
const GridSizeProvider = ({ gridArea }) => {
    const ref = useRef();
    const size = useResize(ref);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set({ id: gridArea, value: size }));
    }, [size, gridArea, dispatch]);

    return (
        <GridSizeProviderInner $gridArea={gridArea} ref={ref} />
    );
};

GridSizeProvider.propTypes = {
    gridArea: PropTypes.string.isRequired,
};

export default GridSizeProvider;