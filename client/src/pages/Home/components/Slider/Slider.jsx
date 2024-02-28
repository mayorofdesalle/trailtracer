import { useContext, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { PropTypes } from 'prop-types';

import useWindowSize from '@hooks/useWindowSize';
import PageContext from '@context/PageContext';
import { convertRemToPixels } from '@utils/screenMath';

import SliderButtonContainer from './SliderButtonContainer';
import PageDots from './PageDots';
import SliderButton from './SliderButton';

/**
 * function calculateSizeAndPosition(pageSize)
 * @param {Object} pageSize - The object containing width and height of the page.
 * @returns {Object} The object containing width and height of the slider.
 * @description
 * This function calculates the size of the slider based on the page size so it can fit in with the rest of the bento grid.
**/
const calculateSizeAndPosition = (pageSize, isScreenLarge) => {
    let height;
    let width;
    let bottom;

    if (isScreenLarge) {
        const gridVerticalFR = (pageSize.height - convertRemToPixels(21.5)) / 12;
        const gridHorizontalFR = (pageSize.width - convertRemToPixels(14)) / 12;
        height = gridVerticalFR;
        width = 3 * gridHorizontalFR;
        bottom = convertRemToPixels(5) + 2 * gridVerticalFR;
    } else {
        const gridVerticalFR = (pageSize.height - convertRemToPixels(11)) / 12;
        const gridHorizontalFR = (pageSize.width - convertRemToPixels(4)) / 3;
        height = gridVerticalFR;
        width = 3 * gridHorizontalFR;
        bottom = convertRemToPixels(3) + 4 * gridVerticalFR;
    }

    return { height, width, bottom };
};

/**
 * Slider
 * @param {Number} wrapperWidth - The width of the ScrollWrapper.
 * @param {Function} setPageScroll - The function to set the page scroll state.
 * @description
 * This is a container that builds a slider using the SliderButton, Pagination, and PageDots.
 * It uses the PageContext to get the page size and calculate the size and position of the slider.
 **/
const Slider = ({ wrapperWidth, setPageScroll }) => {
    const largeBreakpoint = convertRemToPixels(useTheme().breakpoints.large.slice(0, -3));
    const windowWidth = useWindowSize().width;
    const pageSize = useContext(PageContext).size;
    const { height, width, bottom } = useMemo(() => calculateSizeAndPosition(pageSize, (windowWidth > largeBreakpoint)), [pageSize, windowWidth, largeBreakpoint]);

    return (
        <SliderButtonContainer $height={height} $width={width} $bottom={bottom}>
            <SliderButton sliderWidth={width} wrapperWidth={wrapperWidth} setPageScroll={setPageScroll} />
            <PageDots />
        </SliderButtonContainer>
    );
};

Slider.propTypes = {
    wrapperWidth: PropTypes.number,
    setPageScroll: PropTypes.func.isRequired,
};

export default Slider;
