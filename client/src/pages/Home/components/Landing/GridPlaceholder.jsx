import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { set } from '@features/gridPlaceholderSlice';
import useResize from '@hooks/useResize';
import BentoBox from '@components/ui/Bento/BentoBox';
import styled from 'styled-components';

const GridPlaceholderInner = styled(BentoBox)`
    grid-area: ${({ $gridArea }) => $gridArea};
    box-shadow: none;
`;

const GridPlaceholder = ({ gridArea }) => {
    const ref = useRef();
    const size = useResize(ref);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set({ id: gridArea, value: size }));
    }, [size, gridArea, dispatch]);

    return (
        <GridPlaceholderInner $gridArea={gridArea} ref={ref} />
    );
};

GridPlaceholder.propTypes = {
    gridArea: PropTypes.string.isRequired,
};

export default GridPlaceholder;