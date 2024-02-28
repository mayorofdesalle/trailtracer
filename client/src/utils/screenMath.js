// This file contains functions to convert pixels to rem and rem to pixels

/**
 * convertRemToPixels
 * @param {number} rem - The rem value.
 * @returns {number} The pixel value.
 * @description
 * This function takes a rem value and returns it as a pixel value.
 */
export const convertRemToPixels = (rem) => {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/**
 * convertPixelsToRem
 * @param {number} px - The pixel value.
 * @returns {number} The rem value.
 * @description
 * This function takes a pixel value and returns it as a rem value.
 */
export const convertPixelsToRem = (px) => {
	return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
};
