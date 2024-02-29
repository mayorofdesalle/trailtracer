// This file contains functions to convert pixels to rem and rem to pixels

/**
 * remToPx
 * @param {number} rem - The rem value.
 * @returns {number} The pixel value.
 * @description
 * This function takes a rem value and returns it as a pixel value.
 */
export const remToPx = (rem) => {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/**
 * pxToRem
 * @param {number} px - The pixel value.
 * @returns {number} The rem value.
 * @description
 * This function takes a pixel value and returns it as a rem value.
 */
export const pxToRem = (px) => {
	return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
};

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
