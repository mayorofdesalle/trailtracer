import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { modify } from '@features/background/backgroundSlice';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';
import { fadeIn } from '@components/misc/anims';

/**
 * function findClosestPage(pagePositions, position)
 * @param {Array} pagePositions - The positions of the pages
 * @param {Number} position - The current position of the button
 * @returns {Number} The index of the closest page
 * @description
 * This function finds the closest page to the current position of the button.
 **/
const findClosestPage = (pagePositions, position) => {
    const closest = pagePositions.reduce((prev, curr) => {
        return Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev;
    });

    return pagePositions.indexOf(closest);
};

/**
 * function mapPositionToPage(position, sliderWidth, wrapperWidth)
 * @param {Number} position - The current position of the button
 * @param {Number} sliderWidth - The width of the Slider
 * @param {Number} wrapperWidth - The width of the ScrollWrapper
 * @returns {Number} The position of the page
 * @description
 * This function maps the position of the button to the position of the page.
 * (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
 * 3 * wrapperWidth for 4 bentos since the scroll is set from the left.
 **/
const mapPositionToPage = (position, sliderWidth, wrapperWidth) => {
    return (position - 3 * sliderWidth / 8) * (3 * wrapperWidth) / (6 * sliderWidth / 8) + (3 * wrapperWidth);
};

const adjustBackground = (position, pagePosition, dispatch) => {
    const transitionTime = 300; // milliseconds
    const distance = pagePosition - position;

    const easeInOutSine = (t) => {
        return -(Math.cos(Math.PI * t) - 1) / 2;
    };

    const adjust = (repeats = transitionTime) => {
        if (repeats > 0) {
            const animTime = easeInOutSine(repeats / transitionTime);

            const delta = distance * animTime / transitionTime;

            dispatch(modify({ layers: 0, distortion: 0.001 * delta, slope: 0.001 * delta, jitter: 0.001 * delta }));
            setTimeout(() => adjust(repeats - 1), 1);
        }
    };

    adjust();
};

/**
 * ButtonBase
 * @description
 * This component is a styled Button component creating the base for the SliderButton.
 **/
const ButtonBase = styled(Button)`
    position: absolute;
    display: flex;
    height: 60%;
    width: 15%;
    padding: 0;
    fill: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: move;
    touch-action: pan-y;
    z-index: 1;
    transition: 300ms ease-in-out;
    animation: ${fadeIn} 1s ease-in-out;

    & > #arrow-left-fill {
        transform: translateX(0.3rem);
        transition: 200ms ease-in-out;
    }

    & > #arrow-right-fill {
        transform: translateX(-0.3rem);
        transition: 200ms ease-in-out;
    }

    &:hover > #arrow-left-fill {
        transform: translateX(0.1rem);
    }

    &:hover > #arrow-right-fill {
        transform: translateX(-0.1rem);
    }
`;

/**
 * SliderButton
 * @param {Number} width - The width of the slider
 * @description
 * This component is a draggable button that is used to slide between pages.
 * It uses the Draggable component from react-draggable to create the button.
 * The button is snapped to the closest page when released.
 **/
const SliderButton = ({ wrapperWidth, sliderWidth, setPageScroll }) => {
    const pagePositions = [-3 * sliderWidth / 8, -sliderWidth / 8, sliderWidth / 8, 3 * sliderWidth / 8];
    const [currentPage, setCurrentPage] = useState(0);
    const button = useRef();
    const dispatch = useDispatch();

    return (
        <Draggable
            defaultClassNameDragging='isDragging'
            position={{ x: pagePositions[currentPage], y: 0 }}
            nodeRef={button}
            axis='x'
            bounds='parent'
            onStop={(e, button) => {
                const closestPage = findClosestPage(pagePositions, button.x);
                setCurrentPage(closestPage);
                setPageScroll(mapPositionToPage(pagePositions[closestPage], sliderWidth, wrapperWidth));
                adjustBackground(button.x, pagePositions[closestPage], dispatch);
            }}
            onDrag={(e, button) => {
                setPageScroll(mapPositionToPage(button.x, sliderWidth, wrapperWidth));
                dispatch(modify({ layers: 0, distortion: 0.001 * button.deltaX, slope: 0.001 * button.deltaX, jitter: 0.001 * button.deltaX }));
            }}
        >
            <ButtonBase ref={button}>
                <Icon name='arrow-left-fill' height={4} width={4} />
                <Icon name='arrow-right-fill' height={4} width={4} />
            </ButtonBase>
        </Draggable>
    );
};

SliderButton.propTypes = {
    wrapperWidth: PropTypes.number,
    sliderWidth: PropTypes.number.isRequired,
    setPageScroll: PropTypes.func.isRequired,
};

export default SliderButton;