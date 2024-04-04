import PropTypes from 'prop-types';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import { Button } from '@components/ui';
import { Icon } from '@components/ui';

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

    & > svg {
        transition: inherit;
        width: 100%;
        height: 100%;
    }

    & > #arrow-left-fill {
        transform: translateX(0.3rem);
    }

    & > #arrow-right-fill {
        transform: translateX(-0.3rem);
    }

    &.isDragging {
        background-color: ${({ theme }) => theme.colors.primary};

        & > * {
            transition: 200ms ease-in-out;
            fill: ${({ theme }) => theme.colors.tertiary};
        }

        transition: none;
    }

    &.isDragging, &:hover {
        
        & > #arrow-left-fill {
            transform: translateX(0.1rem);
        }

        & > #arrow-right-fill {
            transform: translateX(-0.1rem);
        }
    }
`;

/**
 * SliderButton
 * @param {Function} onDrag - The function to call when the button is dragged.
 * @param {Function} onStop - The function to call when the button is released.
 * @param {Number} position - The position of the button.
 * @description
 * Styled react-draggable button that controls the scroll amount.
 **/
const SliderButton = ({ onDrag, onStop, position, ...props }) => {
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
            <SliderButtonInner ref={button} {...props}>
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