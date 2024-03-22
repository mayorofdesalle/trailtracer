import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icons from '@assets/icons.svg';

/**
 * IconSvg
 * @description
 * Styled svg component to display icons.
 **/
const IconSvg = styled.svg`
    --size: calc(clamp(1rem, min(2.5dvw, 2.5dvh), 3rem));
    height: var(--size);
    width: var(--size);
`;

/**
 * Icon
 * @param {String} name - The name of the icon to display
 * @param {String} color - The color of the icon
 * @param {Number} height - The height of the icon
 * @param {Number} width - The width of the icon
 * @description
 * Component to return an icon from the icons.svg bundle.
 **/
const Icon = ({ id, name, color }) => {
    return (
        <IconSvg id={id} fill={color || 'currentColor'} style={{ pointerEvents: 'none' }}>
            <title>{name}</title>
            <use href={`${Icons}#${name}`} />
        </IconSvg>
    );
};

Icon.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Icon;