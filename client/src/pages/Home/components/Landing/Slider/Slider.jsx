// This component is a mess. Needs refactor!

import { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { modify } from '@features/background/backgroundSlice';

import SliderButtonContainer from './SliderButtonContainer';
import Pagination from './Pagination';
import SliderButton from './SliderButton';

const BACKGROUND_EFFECTOR = 0.001;

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
 * function adjustBackground(position, dotPosition, dispatch)
 * @param {Number}
 * @param {Number}
 * @param {Function}
 * @description
 * This function adjusts the background uniforms based on the distance that will be traveled by the button.
 * It uses an easing function to create a smooth transition.
 */
const adjustBackground = (position, dotPosition, dispatch) => {
    const transitionTime = 300; // milliseconds
    const distance = dotPosition - position;

    const easeInOutSine = (t) => {
        return -(Math.cos(Math.PI * t) - 1) / 2;
    };

    const adjust = (repeats = transitionTime) => {
        if (repeats > 0) {
            const animTime = easeInOutSine(repeats / transitionTime);

            const delta = distance * animTime / transitionTime;

            dispatch(modify({ distortion: BACKGROUND_EFFECTOR * delta, slope: BACKGROUND_EFFECTOR * delta, jitter: BACKGROUND_EFFECTOR * delta }));
            setTimeout(() => adjust(repeats - 1), 1);
        }
    };

    adjust();
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
    const [activePage, setActivePage] = useState(0);
    const size = useSelector((state) => state.gridPlaceholder.Slider);
    const dotPositions = useMemo(() => [0, 1, 2, 3].map((i) => getDotPosition(i, size?.width)), [size?.width]);

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
        setScrollPosition(mapSliderToPage(getDotPosition(closestDot, size.width), size.width, fullPageWidth));
        adjustBackground(button.x, getDotPosition(closestDot, size.width), dispatch);
        setActivePage(closestDot);
    }, [size, fullPageWidth, dotPositions, setScrollPosition, dispatch]);

    /**
     * function onClick(i)
     * @param {Number}
     * @description
     * This function is called when a dot is clicked.
     * It sets the active page to the clicked page.
     */
    const onClick = useCallback((i) => {
        setScrollPosition(mapSliderToPage(getDotPosition(i, size.width), size.width, fullPageWidth));
        adjustBackground(getDotPosition(activePage, size.width), getDotPosition(i, size?.width), dispatch);
        setActivePage(i);
    }, [size, fullPageWidth, activePage, setScrollPosition, dispatch]);

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
