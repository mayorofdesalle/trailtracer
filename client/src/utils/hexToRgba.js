/**
 * hexToRgba
 * @param {string} hex - The hex color.
 * @param {number} alpha - The alpha value.
 * @returns {string} The rgba color.
 * @description
 * Takes a hex color and an alpha value and returns an rgba color.
 */
const hexToRgba = (hex, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};

export default hexToRgba;