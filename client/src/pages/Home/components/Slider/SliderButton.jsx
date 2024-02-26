import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';
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
 * function handleStop(button, pagePositions, setCurrentPage)
 * @param {Object} button - The button that was dragged
 * @param {Array} pagePositions - The positions of the pages
 * @param {Function} setCurrentPage - The function to set the current page
 * @returns {undefined}
 * @description
 * This function is called when the button is released. It calculates the closest page to the current position and sets the current page to that page.
 * This is used to snap the button to the closest page.
 **/
const handleStop = (button, pagePositions, setCurrentPage) => {
    setCurrentPage(findClosestPage(pagePositions, button.x));
};

/**
 * The ButtonBase component
 * @description
 * This component is a styled Button component creating the base for the Draggable SliderButton that is used to slide between pages.
 **/
const ButtonBase = styled(Button)`
    position: absolute;
    display: flex;
    justify-content: center;
    height: 1.5rem;
    width: 3rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: move;
    touch-action: pan-y;
    z-index: 1;
    transition: 300ms ease-in-out;
    animation: ${fadeIn} 1s ease-in-out;

    &:hover > #leftArrow {
        transform: translateX(-0.25rem);
    }

    &:hover > #rightArrow {
        transform: translateX(0.25rem);
    }
`;

/**
 * The SliderButton component
 * @param {Number} width - The width of the slider
 * @description
 * This component is a draggable button that is used to slide between pages.
 * It uses the Draggable component from react-draggable to create the button.
 * The button is snapped to the closest page when released.
 **/
const SliderButton = ({ width }) => {
    const pagePositions = [-3 * width / 8, -width / 8, width / 8, 3 * width / 8];
    const [currentPage, setCurrentPage] = useState(0);
    const nodeRef = useRef();

    return (
        <Draggable
            defaultClassNameDragging='isDragging'
            position={{ x: pagePositions[currentPage], y: 0 }}
            nodeRef={nodeRef}
            axis='x'
            bounds='parent'
            onStop={(e, button) => handleStop(button, pagePositions, setCurrentPage)}
        >
            <ButtonBase ref={nodeRef} />
        </Draggable>
    );
};

SliderButton.propTypes = {
    width: PropTypes.number.isRequired
};

export default SliderButton;