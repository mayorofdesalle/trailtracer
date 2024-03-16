// This component is a mess. Needs refactor!

import { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { modify } from '@features/backgroundSlice';

import SliderButtonContainer from './SliderButtonContainer';
import Pagination from './Pagination';
import SliderButton from './SliderButton';

const BACKGROUND_EFFECTOR = 0.0007;

/**
 * function getDotPosition(activePage, width)
 * @param {Number} activePage 
 * @param {Number} width 
 * @returns {Number} The position of the dot
 * @description
 * This function calculates the position of the dot based on the active page and the width of the button.
 */
const getDotPosition = (activePage, width) => {
    return (-3 + 2 * activePage) * width / 8;
};

/**
 * function findClosestDot(dotPositions, position)
 * @param {Array} dotPositions - The positions of the dots
 * @param {Number} position - The current position of the button
 * @returns {Number} The index of the closest page
 * @description
 * This function finds the closest page to the current position of the button.
 **/
const findClosestDot = (dotPositions, position) => {
    const closest = dotPositions.reduce((prev, curr) => {
        return Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev;
    });

    return dotPositions.indexOf(closest);
};

/**
 * function mapSliderToPage(position, sliderWidth, fullPageWidth)
 * @param {Number} position - The current position of the button
 * @param {Number} sliderWidth - The width of the Slider
 * @param {Number} fullPageWidth - The width of the ScrollWrapper
 * @returns {Number} The position of the page
 * @description
 * This function maps the position of the button to the position of the page.
 * (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
 * 3 * fullPageWidth for 4 bentos since the scroll is set from the left.
 **/
const mapSliderToPage = (position, sliderWidth, fullPageWidth) => {
    return (position - 3 * sliderWidth / 8) * (3 * fullPageWidth) / (6 * sliderWidth / 8) + (3 * fullPageWidth);
};

/**
 * Slider
 * @param {Number} fullPageWidth - The width of the ScrollWrapper.
 * @param {Function} setPageScroll - The function to set the page scroll state.
 * @description
 * This is a container that builds a slider using the SliderButton, Pagination, and PageDots.
 * It uses the PageContext to get the page size and calculate the size and position of the slider.
 **/
const Slider = ({ fullPageWidth, setScrollPosition }) => {
    const dispatch = useDispatch();

    const [activePage, setActivePage] = useState(sessionStorage.getItem('LandingActivePage') || 0);
    const size = useSelector((state) => state.gridPlaceholder.Slider);
    const dotPositions = useMemo(() => [0, 1, 2, 3].map((i) => getDotPosition(i, size?.width)), [size?.width]);

    const handleActivePage = useCallback((page, distance) => {
        setScrollPosition(mapSliderToPage(getDotPosition(page, size.width), size.width, fullPageWidth));
        dispatch(modify({ animate: true, distortion: BACKGROUND_EFFECTOR * distance, slope: BACKGROUND_EFFECTOR * distance, jitter: BACKGROUND_EFFECTOR * distance }));
        setActivePage(page);
        sessionStorage.setItem('LandingActivePage', page);
    }, [setScrollPosition, size, fullPageWidth, dispatch]);

    /**
     * function onDrag(e, button)
     * @param {Event}
     * @param {Object} button - The button object
     * @description
     * This function is called when the button is being dragged.
     * It updates the scroll position and the background uniforms based on the button position.
     **/
    const onDrag = useCallback((e, button) => {
        setScrollPosition(mapSliderToPage(button.x, size.width, fullPageWidth));
        dispatch(modify({ distortion: BACKGROUND_EFFECTOR * button.deltaX, slope: BACKGROUND_EFFECTOR * button.deltaX, jitter: BACKGROUND_EFFECTOR * button.deltaX }));
    }, [size, fullPageWidth, setScrollPosition, dispatch]);

    /**
     * function onStop(e, button)
     * @param {Event}
     * @param {Object} button - The button object
     * @description
     * This function is called when the button is released.
     * It finds the closest page to the button position and sets the scroll position and the background uniforms.
     * It also sets the active page to the closest page.
     * The button is snapped to the closest page.
     **/
    const onStop = useCallback((e, button) => {
        const closestDot = findClosestDot(dotPositions, button.x);
        const distance = getDotPosition(closestDot, size.width) - button.x;
        handleActivePage(closestDot, distance);
    }, [size, dotPositions, handleActivePage]);

    /**
     * function onClick(i)
     * @param {Number}
     * @description
     * This function is called when a dot is clicked.
     * It sets the active page to the clicked page.
     */
    const onClick = useCallback((i) => {
        const distance = getDotPosition(i, size?.width) - getDotPosition(activePage, size.width);
        handleActivePage(i, distance);
    }, [size, activePage, handleActivePage]);

    return (
        size &&
        <SliderButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop}>
            <SliderButton onDrag={onDrag} onStop={onStop} position={getDotPosition(activePage, size.width)} />
            <Pagination onClick={onClick} />
        </SliderButtonContainer>
    );
};

Slider.propTypes = {
    fullPageWidth: PropTypes.number,
    setScrollPosition: PropTypes.func.isRequired,
};

export default Slider;
