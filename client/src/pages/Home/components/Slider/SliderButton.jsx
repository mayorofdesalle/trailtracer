import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

/**
 * ButtonBase
 * @description
 * This component is a styled Button component creating the base for the SliderButton.
 **/
const ButtonBase = styled(Button)`
    position: absolute;
    display: flex;
    height: max(1.5rem, 3svh);
    width: max(3rem, 3svw);
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
            }}
            onDrag={(e, button) => setPageScroll(mapPositionToPage(button.x, sliderWidth, wrapperWidth))}
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