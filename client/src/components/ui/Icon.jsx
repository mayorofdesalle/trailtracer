import PropTypes from 'prop-types';

import Icons from '@assets/icons.svg';
import { convertRemToPixels } from '@utils/screenMath';

/**
 * Icon
 * @param {String} name - The name of the icon to display
 * @param {String} color - The color of the icon
 * @param {Number} size - The size of the icon
 * @description
 * This is a reusable component that displays an icon from the icons.svg bundle.
 **/
const Icon = ({ name, color, size }) => {
    const sizeInPıxels = convertRemToPixels(size);
    return (
        <svg fill={color} width={sizeInPıxels} height={sizeInPıxels}>
            <title>{name}</title>
            <use xlinkHref={`${Icons}#${name}`} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
};

export default Icon;