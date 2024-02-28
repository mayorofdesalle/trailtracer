import PropTypes from 'prop-types';

import Icons from '@assets/icons.svg';
import { convertRemToPixels } from '@utils/screenMath';

/**
 * Icon
 * @param {String} name - The name of the icon to display
 * @param {String} color - The color of the icon
 * @param {Number} height - The height of the icon
 * @param {Number} width - The width of the icon
 * @description
 * This is component that displays an icon from the icons.svg bundle.
 **/
const Icon = ({ name, color, height, width }) => {
    return (
        <svg id={name} fill={color} width={convertRemToPixels(width)} height={convertRemToPixels(height)}>
            <title>{name}</title>
            <use xlinkHref={`${Icons}#${name}`} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};

export default Icon;