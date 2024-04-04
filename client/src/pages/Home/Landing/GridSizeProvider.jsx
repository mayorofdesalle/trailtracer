import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { BentoBox } from '@components/ui/bento';
import { set } from '@features/gridSizeProviderSlice';
import { useResize } from '@hooks';
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
const GridSizeProvider = ({ gridArea, ...props }) => {
    const ref = useRef();
    const size = useResize(ref);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set({ id: gridArea, value: size }));
    }, [size, gridArea, dispatch]);

    return (
        <GridSizeProviderInner $gridArea={gridArea} ref={ref} {...props} />
    );
};

GridSizeProvider.propTypes = {
    gridArea: PropTypes.string.isRequired,
};

export default GridSizeProvider;