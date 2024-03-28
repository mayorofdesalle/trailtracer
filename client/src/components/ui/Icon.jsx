import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * IconSvg
 * @description
 * Styled svg component to display icons.
 **/
const IconSvg = styled.svg`
    --size: clamp(0.825rem, min(2dvw, 2dvh), 2.5rem);
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
        <IconSvg id={id || name} fill={color || 'currentColor'} style={{ pointerEvents: 'none' }}>
            <title>{name}</title>
            <use href={`${new URL('../../assets/icons.svg', import.meta.url).href}#${name}`} />
        </IconSvg>
    );
};

Icon.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Icon;