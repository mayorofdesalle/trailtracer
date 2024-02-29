import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import SliderButtonContainer from './SliderButtonContainer';
import PageDots from './PageDots';
import SliderButton from './SliderButton';

/**
 * Slider
 * @param {Number} wrapperWidth - The width of the ScrollWrapper.
 * @param {Function} setPageScroll - The function to set the page scroll state.
 * @description
 * This is a container that builds a slider using the SliderButton, Pagination, and PageDots.
 * It uses the PageContext to get the page size and calculate the size and position of the slider.
 **/
const Slider = ({ wrapperWidth, setPageScroll }) => {
    const size = useSelector((state) => state.gridPlaceholder.Slider);

    return (
        size &&
        <SliderButtonContainer $height={size.height} $width={size.width} $top={size.offsetTop}>
            <SliderButton sliderWidth={size.width} wrapperWidth={wrapperWidth} setPageScroll={setPageScroll} />
            <PageDots />
        </SliderButtonContainer>
    );
};

Slider.propTypes = {
    wrapperWidth: PropTypes.number,
    setPageScroll: PropTypes.func.isRequired,
};

export default Slider;
