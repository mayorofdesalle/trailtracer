import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

/**
 * SliderButtonInner
 * @description
 * This component is a styled Button component creating the base for the SliderButton.
 **/
const SliderButtonInner = styled(Button)`
    position: absolute;
    display: flex;
    height: 60%;
    width: 15%;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: move;
    touch-action: pan-y;
    z-index: 1;
    transition: 200ms ease-in-out;

    &.isDragging {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: none;
    }

    &.isDragging > * {
        fill: ${({ theme }) => theme.colors.tertiary};
    }

    & > svg {
        pointer-events: none;
    }

    & > #arrow-left-fill {
        transform: translateX(0.3rem);
    }

    & > #arrow-right-fill {
        transform: translateX(-0.3rem);
    }

    &:hover > #arrow-left-fill, &.isDragging > #arrow-left-fill {
        transform: translateX(0.1rem);
    }

    &:hover > #arrow-right-fill, &.isDragging > #arrow-right-fill {
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
const SliderButton = ({ onDrag, onStop, position }) => {
    const button = useRef();

    return (
        <Draggable
            defaultClassNameDragging='isDragging'
            position={{ x: position, y: 0 }}
            nodeRef={button}
            axis='x'
            bounds='parent'
            onDrag={(e, button) => onDrag(e, button)}
            onStop={(e, button) => onStop(e, button)}
        >
            <SliderButtonInner ref={button}>
                <Icon name='arrow-left-fill' />
                <Icon name='arrow-right-fill' />
            </SliderButtonInner>
        </Draggable>
    );
};

SliderButton.propTypes = {
    onDrag: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    position: PropTypes.number
};

export default SliderButton;