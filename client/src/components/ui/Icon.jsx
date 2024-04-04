import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconSvg = styled.svg`
    --size: clamp(0.825rem, min(2dvw, 2dvh), 2.5rem);
    height: var(--size);
    width: var(--size);
    pointer-events: none;
`;

/**
 * Icon
 * @param {String} name - The name of the icon to display
 * @param {String} color - The color of the icon
 * @description
 * Component to return an icon from the icons.svg bundle.
 **/
const Icon = ({ name = 'forbid', color = 'currentColor', ...props }) => {
    return (
        <IconSvg role='img' fill={color} {...props}>
            <title>{name}</title>
            <use href={`${new URL('../../assets/icons.svg', import.meta.url).href}#${name}`} />
        </IconSvg>
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
};

export default Icon;