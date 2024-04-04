import PropTypes from 'prop-types';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { glassMorph } from '@components/mixins';
import { Container } from '@components/ui';
import { modify } from '@features/backgroundSlice';

import Pagination from './Pagination';
import SliderButton from './SliderButton';

const BACKGROUND_EFFECTOR = 0.0007;

const getDotPosition = (activePage, width) => {
    return (-3 + 2 * activePage) * width / 8;
};

const findClosestDot = (dotPositions, position) => {
    const closest = dotPositions.reduce((prev, curr) => {
        return Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev;
    });

    return dotPositions.indexOf(closest);
};

const mapSliderToPage = (position, sliderWidth, fullPageWidth) => {
    return (position - 3 * sliderWidth / 8) * (3 * fullPageWidth) / (6 * sliderWidth / 8) + (3 * fullPageWidth);
};

const adjustBackground = (dispatch, distance, animate) => {
    dispatch(modify({ animate: animate, distortion: BACKGROUND_EFFECTOR * distance, slope: BACKGROUND_EFFECTOR * distance, jitter: BACKGROUND_EFFECTOR * distance }));
};

const SliderButtonContainer = styled(Container)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
    justify-content: space-around;
    ${glassMorph}
`;

/**
 * Slider
 * @param {Number} fullWidth - The width of the ScrollWrapper.
 * @param {Function} setPageScroll - The function to set the page scroll state.
 * @description
 * Slider to navigate between pages.
 **/
const Slider = ({ fullWidth, setScroll, ...props }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('landing-cp') || 0);

    const size = useSelector((state) => state.gridSizeProvider.Slider);
    const dotPositions = useMemo(() => [0, 1, 2, 3].map((i) => getDotPosition(i, size?.width)), [size?.width]);

    useLayoutEffect(() => {
        setScroll({ position: mapSliderToPage(getDotPosition(currentPage, size?.width), size?.width, fullWidth), behaviour: 'auto' });
        // This only needs to run once when it receives the size, so we can ignore the exhaustive-deps warning.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    const handleActivePage = useCallback((page, distance) => {
        setScroll({ position: mapSliderToPage(getDotPosition(page, size.width), size.width, fullWidth), behaviour: 'smooth' });
        adjustBackground(dispatch, distance, true);
        setCurrentPage(page);
        sessionStorage.setItem('landing-cp', page);
    }, [setScroll, size, fullWidth, dispatch]);

    const onDrag = useCallback((e, button) => {
        setScroll({ position: mapSliderToPage(button.x, size.width, fullWidth), behaviour: 'auto' });
        adjustBackground(dispatch, button.deltaX, false);
    }, [size, fullWidth, setScroll, dispatch]);

    const onStop = useCallback((e, button) => {
        const closestDot = findClosestDot(dotPositions, button.x);
        const distance = getDotPosition(closestDot, size.width) - button.x;
        handleActivePage(closestDot, distance);
    }, [size, dotPositions, handleActivePage]);

    const onClick = useCallback((dot) => {
        const distance = getDotPosition(dot, size?.width) - getDotPosition(currentPage, size.width);
        handleActivePage(dot, distance);
    }, [size, currentPage, handleActivePage]);

    return (
        size?.width > 0 &&
        <SliderButtonContainer role='slider' $height={size.height} $width={size.width} $top={size.offsetTop} {...props}>
            <SliderButton onDrag={onDrag} onStop={onStop} position={getDotPosition(currentPage, size.width)} />
            <Pagination onClick={onClick} />
        </SliderButtonContainer>
    );
};

Slider.propTypes = {
    fullWidth: PropTypes.number,
    setScroll: PropTypes.func.isRequired,
};

export default Slider;
