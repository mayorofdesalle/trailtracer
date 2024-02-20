import { useState, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Container from '../defaults/Container';
import Button from '../defaults/Button';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { blurryBackground } from '../../misc/Mixins';

const pagePositions = [-109, -37, 35, 107];

const findClosestPage = (x) => {
    let closest = -9999;

    for (let position of pagePositions) {
        if (Math.abs(position - x) < Math.abs(closest - x)) closest = position;
    }

    return closest;
};

const handleStop = (ui, setPosition) => {
    const page = findClosestPage(ui.x);
    setPosition(page);
};

const SliderContainer = styled(Container)`
    grid-area: Slider;
    align-items: center;
    justify-content: center;
    
    & > .isDragging {
        background-color: ${({ theme }) => theme.colors.primary};
        transition: none;
    }

    & > .isDragging > * {
        fill: ${({ theme }) => theme.colors.backgroundTransparent};
    }
`;

const SliderBullets = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 2px solid ${({ theme }) => theme.colors.primaryTransparent};
    border-radius: 10px;
    
    ${blurryBackground}
`;

const PageDot = styled(Container)`
    height: 0.5rem;
    width: 0.5rem;
    margin: 1rem 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textTransparent};
`;

const ButtonArrow = `
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    margin: 0;
    padding: 0;
    transition: 200ms ease-in-out;
`;

const SliderButtonLeftArrow = styled(RiArrowLeftSFill)`
    ${ButtonArrow}
    left: 0.5rem;
`;

const SliderButtonRightArrow = styled(RiArrowRightSFill)`
    ${ButtonArrow}
    left: 1.25rem;
`;

const SliderButton = styled(Button)`
    position: absolute;
    display: flex;
    justify-content: center;
    --h: 1.5rem;
    padding: calc(var(--h) / 8);
    height: var(--h);
    width: calc(var(--h) * 2);
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: move;
    touch-action: pan-y;
    z-index: 1;
    transition: 300ms ease-in-out;

    &:hover > ${SliderButtonLeftArrow} {
        transform: translateX(-0.25rem);
    }

    &:hover > ${SliderButtonRightArrow} {
        transform: translateX(0.25rem);
    }
`;

const Slider = () => {
    const nodeRef = useRef();
    const [position, setPosition] = useState(-109);

    return (
        <SliderContainer>
            <Draggable
                defaultClassNameDragging='isDragging'
                position={{ x: position, y: 0 }}
                nodeRef={nodeRef}
                axis='x'
                bounds={{ left: -120, right: 120 }}
                onStop={(e, ui) => handleStop(ui, setPosition)}
            >
                <SliderButton ref={nodeRef}><SliderButtonLeftArrow /><SliderButtonRightArrow /></SliderButton>
            </Draggable>
            <SliderBullets>
                {[...Array(4)].map((p, i) => <PageDot key={i} />)}
            </SliderBullets>
        </SliderContainer>
    );
};

export default Slider;