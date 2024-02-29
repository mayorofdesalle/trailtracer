import styled from 'styled-components';

import getImageUrl from '@utils/getImageUrl';

/**
 * Vector
 * @param {string} $height - The height of the vector.
 * @param {string} $width - The width of the vector.
 * @param {string} $color - The color of the vector.
 * @param {string} $name - The name of the image.
 * @param {string} $position - The position of the mask (center, bottom, etc.).
 * @description
 * This is a styled div that is used to display a vector image using it as a mask.
 **/
const Vector = styled.div`
    height: ${({ $height }) => $height};
    width: ${({ $width }) => $width};
    display: inline-block;
    background-color: ${({ $color }) => $color};
    -webkit-mask-image: url(${({ $name }) => getImageUrl($name)});
    mask-image: url(${({ $name }) => getImageUrl($name)});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: ${({ $position }) => $position};
    mask-position: ${({ $position }) => $position};
`;

export default Vector;