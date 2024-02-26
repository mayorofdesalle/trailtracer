// This file contains color related utility functions

/**
 * hexToRgba
 * @param {string} hex - The hex color.
 * @param {number} alpha - The alpha value.
 * @returns {string} The rgba color.
 * @description
 * This function takes a hex color and an alpha value and returns an rgba color.
 */
export const hexToRgba = (hex, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};
