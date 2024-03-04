import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';
import { fadeIn } from '@components/misc/anims';

/**
 * InnerSliderButton
 * @description
 * This component is a styled Button component creating the base for the SliderButton.
 **/
const InnerSliderButton = styled(Button)`
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
            <InnerSliderButton ref={button}>
                <Icon name='arrow-left-fill' height={4} width={4} />
                <Icon name='arrow-right-fill' height={4} width={4} />
            </InnerSliderButton>
        </Draggable>
    );
};

SliderButton.propTypes = {
    onDrag: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    position: PropTypes.number
};

export default SliderButton;